#!/usr/bin/env node
/* Pings IndexNow (Bing, Yandex, Seznam, Naver, …) with every URL in
 * sitemap.xml so AI assistants that retrieve from the Bing index
 * (ChatGPT search, Copilot) pick up changes quickly.
 *
 * Runs automatically after each deploy (.github/workflows/deploy.yml).
 * Safe to run by hand:  node tools/ping-indexnow.js
 *
 * Ownership proof: the <hex>.txt key file at the site root (filename ==
 * file content == the key), already deployed.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HOST = "agent-tune.com";

const keyFile = fs.readdirSync(ROOT).find((f) => /^[0-9a-f]{16,64}\.txt$/.test(f));
if (!keyFile) {
  console.error("IndexNow: no key file (<hex>.txt) found at repo root");
  process.exit(1);
}
const key = fs.readFileSync(path.join(ROOT, keyFile), "utf8").trim();

const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) {
  console.error("IndexNow: no URLs parsed from sitemap.xml");
  process.exit(1);
}

fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList: urls
  })
})
  .then(async (res) => {
    console.log(`IndexNow: HTTP ${res.status} — submitted ${urls.length} URLs from sitemap.xml`);
    if (!res.ok) {
      console.error(await res.text());
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error("IndexNow ping failed:", err.message);
    process.exit(1);
  });
