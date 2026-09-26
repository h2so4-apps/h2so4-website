import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["index.html", /小さな便利を/],
  ["apps/kumocalc/index.html", /雲電卓/],
  ["apps/furumane/index.html", /ふるマネ/],
  ["support/index.html", /h2so4\.apps@gmail\.com/],
  ["privacy/kumocalc/index.html", /雲電卓.*プライバシーポリシー/s],
  ["privacy/furumane/index.html", /ふるマネ.*プライバシーポリシー/s],
  ["advertising/index.html", /広告・アフィリエイトについて/],
];

for (const [path, expected] of pages) {
  test(`static export contains ${path}`, async () => {
    const html = await readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
    assert.match(html, expected);
    assert.match(html, /H2SO4/);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  });
}

test("home page includes app, support, privacy, advertising, and X routes", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  for (const href of [
    "/apps/kumocalc",
    "/apps/furumane",
    "/support",
    "/privacy/kumocalc",
    "/privacy/furumane",
    "/advertising",
    "https://x.com/H2SO4_apps",
  ]) {
    assert.match(html, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(html, /App Store · Coming Soon/);
});

test("metadata files point to the production domain", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../out/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
  ]);
  assert.match(robots, /https:\/\/h2so4apps\.com\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/h2so4apps\.com\/apps\/kumocalc/);
  assert.match(sitemap, /https:\/\/h2so4apps\.com\/privacy\/furumane/);
});
