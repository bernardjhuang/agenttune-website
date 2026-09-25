#!/usr/bin/env node
/* Builds /research/<slug>.html from research/src/*.json specs.
 *
 * Same spec shape and page template as the guides (tools/build-guides.js);
 * a spec's `route` must start with /research/ so the page gets the Research
 * navigation state and breadcrumbs. Run after editing any spec:
 *   node tools/build-research-articles.js [slug ...]
 *
 * The research hub (research.html) is hand-maintained. Register a new page in
 * its article grid, in STATIC_PAGES (tools/generate-library.js) and in llms.txt.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { buildPage, datesFor } = require("./build-guides");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "research", "src");
const OUT = path.join(ROOT, "research");

const selected = process.argv.slice(2);
const specs = fs.readdirSync(SRC).filter((f) => f.endsWith(".json") && (!selected.length || selected.includes(f.replace(/\.json$/, ""))));
for (const f of specs) {
  const spec = JSON.parse(fs.readFileSync(path.join(SRC, f), "utf8"));
  if (!spec.route || !spec.route.startsWith("/research/")) throw new Error(`${f}: route must start with /research/`);
  if (spec.route !== `/research/${spec.slug}`) throw new Error(`${f}: route and slug disagree`);
  const html = buildPage(spec, datesFor(spec, path.join("research", "src", f)));
  fs.writeFileSync(path.join(OUT, `${spec.slug}.html`), html);
  console.log(`research/${spec.slug}.html ← ${f}`);
}
console.log(`${specs.length} research pages built.`);
