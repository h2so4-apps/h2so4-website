import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/apps/kumocalc",
    "/apps/furumane",
    "/support",
    "/privacy/kumocalc",
    "/privacy/furumane",
    "/advertising",
  ];

  return routes.map((route) => ({
    url: `https://h2so4apps.com${route}`,
    lastModified: new Date("2026-09-27"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
