import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = "out";
const routes = [
  "/",
  "/apps/kumocalc/",
  "/apps/furumane/",
  "/support/",
  "/privacy/kumocalc/",
  "/privacy/furumane/",
  "/advertising/",
  "/robots.txt",
  "/sitemap.xml",
];

await rm(outputDirectory, { recursive: true, force: true });
await cp("dist/client", outputDirectory, { recursive: true });

const workerUrl = pathToFileURL(join(process.cwd(), "dist/server/index.js"));
workerUrl.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://h2so4apps.com${route}`, {
      headers: { accept: route.endsWith("/") ? "text/html" : "*/*" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route}: ${response.status}`);
  }

  const relativePath = route === "/"
    ? "index.html"
    : route.endsWith("/")
      ? join(route.slice(1), "index.html")
      : route.slice(1);
  const destination = join(outputDirectory, relativePath);

  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, new Uint8Array(await response.arrayBuffer()));
}

console.log(`Exported ${routes.length} static routes to ${outputDirectory}/`);
