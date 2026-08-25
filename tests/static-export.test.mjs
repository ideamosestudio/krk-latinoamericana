import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../out/", import.meta.url);
const cpanelRelease = new URL("../site/", import.meta.url);

const requiredFiles = [
  "index.html",
  "quienes-somos/index.html",
  "servicios/index.html",
  "servicios/bulk-material-handling-equipment/index.html",
  "servicios/conveyor-components/index.html",
  "servicios/port-and-mining-systems/index.html",
  "servicios/engineering-and-project-services/index.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "llms-full.txt",
  "api/contact.php",
];

test("exports every public route and discovery file", async () => {
  await Promise.all(requiredFiles.map((file) => access(new URL(file, root))));
  await Promise.all(requiredFiles.map((file) => access(new URL(file, cpanelRelease))));
  await access(new URL(".htaccess", cpanelRelease));
});

test("homepage contains canonical SEO and structured data", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /KRK Latinoamericana/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /schema\.org/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /og:image/);
  assert.match(html, /api\/contact\.php/);
  assert.doesNotMatch(html, /mailto:/i);
});

test("AI discovery files point to the canonical domain", async () => {
  const [robots, llms, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", root), "utf8"),
    readFile(new URL("llms.txt", root), "utf8"),
    readFile(new URL("sitemap.xml", root), "utf8"),
  ]);
  assert.match(robots, /https:\/\/krk\.com\.ar\/sitemap\.xml/);
  assert.match(llms, /https:\/\/krk\.com\.ar\/servicios\//);
  assert.match(sitemap, /<loc>https:\/\/krk\.com\.ar\/<\/loc>/);
});

test("contact endpoint uses private Microsoft Graph configuration", async () => {
  const php = await readFile(new URL("api/contact.php", cpanelRelease), "utf8");
  assert.match(php, /graph\.microsoft\.com\/v1\.0\/users/);
  assert.match(php, /krk-form-config\.php/);
  assert.match(php, /rate_limit_allows/);
  assert.doesNotMatch(php, /PEGAR_VALOR_DEL_SECRETO/);
});
