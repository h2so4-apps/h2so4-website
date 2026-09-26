import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
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
}

const pages = [
  ["/", /小さな便利を/],
  ["/apps/kumocalc", /雲電卓/],
  ["/apps/furumane", /ふるマネ/],
  ["/support", /h2so4\.apps@gmail\.com/],
  ["/privacy/kumocalc", /雲電卓.*プライバシーポリシー/s],
  ["/privacy/furumane", /ふるマネ.*プライバシーポリシー/s],
  ["/advertising", /広告・アフィリエイトについて/],
];

for (const [pathname, expected] of pages) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, expected);
    assert.match(html, /H2SO4/);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  });
}

test("home page includes app, support, privacy, advertising, and X routes", async () => {
  const response = await render("/");
  const html = await response.text();
  for (const href of [
    "/apps/kumocalc",
    "/apps/furumane",
    "/support",
    "/privacy/kumocalc",
    "/privacy/furumane",
    "/advertising",
    "https://x.com/h2so4_apps",
  ]) {
    assert.match(html, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(html, /App Store · Coming Soon/);
});
