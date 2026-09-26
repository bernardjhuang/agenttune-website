#!/usr/bin/env node
/* Builds /guides/*.html from guides/src/*.json specs.
 *
 * Each spec: { slug, title, description, pill, h1, dek, lede, answer,
 *              sections: [{h2, html}], faq: [{q, a}], related: [{kicker, label, href}] }
 * Optional:  published / updated ("YYYY-MM-DD"; default to the spec file's first
 *            and last commit dates, or today while it has uncommitted edits),
 *            changelog: [{date, note}], sources: [{label, href}]
 *
 * Emits a full page (head + schema + nav + hero + prose + FAQ + related + footer)
 * consistent with the research-page layout. Run after editing any spec:
 *   node tools/build-guides.js
 *
 * The guides hub (guides/index.html) is hand-maintained — this script only
 * builds the article pages.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "guides", "src");
const OUT = path.join(ROOT, "guides");
const SITE = "https://agent-tune.com";

const escHtml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => escHtml(s).replace(/"/g, "&quot;");
const jsonInline = (o) => JSON.stringify(o).replace(/</g, "\\u003c");
const stripTags = (t) => String(t).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

// ---------- Dates ----------
// Guides cover products that change monthly, so every page carries a visible
// "Updated" line plus datePublished / dateModified in its Article schema.
const todayISO = () => new Date().toISOString().slice(0, 10);
function git(args) {
  try {
    return execSync(`git ${args}`, { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}
function datesFor(spec, relPath) {
  const dirty = !!git(`status --porcelain -- "${relPath}"`);
  const first = git(`log --diff-filter=A --follow --format=%cs -- "${relPath}"`).split("\n").pop();
  const last = git(`log -1 --format=%cs -- "${relPath}"`);
  return {
    published: spec.published || first || todayISO(),
    updated: spec.updated || (dirty ? todayISO() : last || todayISO())
  };
}
const longDate = (iso) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

const FONT_BLOCK = `  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" />`;

function navHtml() {
  return `    <nav class="nav" aria-label="Primary">
      <a class="brand" href="/"><span class="brand-dot" aria-hidden="true"></span><span>AgentTune</span></a>
      <div class="nav-links">
        <a href="/library/">Library</a>
        <a href="/tests/">Tests</a>
        <a href="/research">Research</a>
        <a href="/guides/" class="active">Guides</a>
        <a href="/tools/custom-instructions-generator">Generator</a>
        <a class="github" href="https://github.com/bernardjhuang/agenttune" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </nav>`;
}

function buildPage(spec, dates) {
  const route = spec.route || `/guides/${spec.slug}`;
  const research = route.startsWith("/research/");
  const url = `${SITE}${route}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: stripTags(spec.h1).replace(/\.$/, ""),
    description: spec.description,
    url,
    datePublished: dates.published,
    dateModified: dates.updated,
    author: { "@type": "Person", name: "Bernard Huang", url: "https://github.com/bernardjhuang" },
    publisher: { "@type": "Organization", name: "AgentTune", url: SITE },
    inLanguage: "en",
    isAccessibleForFree: true
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: research ? "Research" : "Guides", item: research ? `${SITE}/research` : `${SITE}/guides/` },
      { "@type": "ListItem", position: 3, name: stripTags(spec.h1).replace(/\.$/, "") }
    ]
  };
  const faqSchema = spec.faq && spec.faq.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: spec.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  } : null;

  let tableIndex = 0;
  const tableHtml = section => section.html.replace(/<div class="guide-table-wrap">/g, () =>
    `<div class="guide-table-wrap" role="region" aria-label="${escAttr(section.h2.replace(/<[^>]*>/g, ''))}: table ${++tableIndex}" tabindex="0">`);
  const sectionsHtml = spec.sections.map((s) => `
      <section>
        <h2>${s.h2}</h2>
        ${tableHtml(s)}
      </section>`).join("\n      <div class=\"divider tight\"></div>\n");

  const faqHtml = spec.faq && spec.faq.length ? `
      <div class="divider tight"></div>
      <section>
        <h2>Questions people ask.</h2>
        <div class="guide-faq">
${spec.faq.map((f) => `          <details>
            <summary>${escHtml(f.q)}</summary>
            <p>${escHtml(f.a)}</p>
          </details>`).join("\n")}
        </div>
      </section>` : "";

  const changelogHtml = spec.changelog && spec.changelog.length ? `
      <div class="divider tight"></div>
      <section>
        <h2>What changed.</h2>
        <ul class="guide-changelog">
${spec.changelog.map((c) => `          <li><time datetime="${escAttr(c.date)}">${escHtml(longDate(c.date))}</time> ${c.note}</li>`).join("\n")}
        </ul>
      </section>` : "";

  const sourcesHtml = spec.sources && spec.sources.length ? `
      <div class="divider tight"></div>
      <section>
        <h2>Sources.</h2>
        <ul class="guide-sources">
${spec.sources.map((x) => `          <li><a href="${escAttr(x.href)}" target="_blank" rel="noopener">${escHtml(x.label)}</a></li>`).join("\n")}
        </ul>
      </section>` : "";

  const relatedHtml = spec.related && spec.related.length ? `
      <div class="divider tight"></div>
      <section>
        <h2>Keep going.</h2>
        <div class="guide-related">
${spec.related.map((r) => `          <a href="${escAttr(r.href)}"><span class="guide-related-kicker">${escHtml(r.kicker)}</span>${escHtml(r.label)}</a>`).join("\n")}
        </div>
      </section>` : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escHtml(spec.title)}</title>
  <meta name="description" content="${escAttr(spec.description)}" />

  <meta property="og:title" content="${escAttr(stripTags(spec.h1))}" />
  <meta property="og:description" content="${escAttr(spec.description)}" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="${dates.published}" />
  <meta property="article:modified_time" content="${dates.updated}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:site_name" content="AgentTune" />
  <meta property="og:image" content="${SITE}/og/og-card.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="AgentTune — paste-ready personality tunings for your AI agent" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escAttr(stripTags(spec.h1))}" />
  <meta name="twitter:description" content="${escAttr(spec.description)}" />
  <meta name="twitter:site" content="@bernardjhuang" />
  <meta name="twitter:image" content="${SITE}/og/og-card.png" />

  <link rel="canonical" href="${url}" />
  <link rel="alternate" type="text/markdown" title="LLM index" href="${SITE}/llms.txt" />

  <script type="application/ld+json">${jsonInline(articleSchema)}</script>
  <script type="application/ld+json">${jsonInline(breadcrumbSchema)}</script>${faqSchema ? `\n  <script type="application/ld+json">${jsonInline(faqSchema)}</script>` : ""}

${spec.dataset ? `<script type="application/ld+json">${jsonInline(spec.dataset)}</script>` : ""}
  <script defer src="/consent.js"></script>

${FONT_BLOCK}
  <link rel="stylesheet" href="/styles.css" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='30' fill='%23a8482a'/%3E%3C/svg%3E" />
</head>
<body class="research-page">
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="page">

${research ? navHtml().replace('href="/guides/" class="active"', 'href="/guides/"').replace('href="/research"', 'href="/research" class="active"') : navHtml()}

    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <a href="${research ? "/research" : "/guides/"}">${research ? "Research" : "Guides"}</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <span class="crumb-current" aria-current="page">${escHtml(stripTags(spec.h1).replace(/\.$/, ""))}</span>
    </nav>

    <main class="article-wrap guide-prose" id="main" tabindex="-1">

      <section class="hero" style="padding-bottom: 4px;">
        <span class="pill" style="background: rgba(200,85,61,0.12); color: var(--accent-text, #a8482a);">${escHtml(spec.pill)}</span>
        <h1 class="h-hero h-research-hero">${escHtml(spec.h1)}</h1>
        <p class="guide-dateline">By Bernard Huang · Updated <time datetime="${dates.updated}">${escHtml(longDate(dates.updated))}</time></p>
        <p class="lede" style="margin-top: 18px;">${spec.answer ? escHtml(spec.answer) : spec.lede}</p>
      </section>


      <div class="divider tight"></div>
${spec.promptModel ? `      <aside class="model-compatibility"><div class="prompt-picker-controls"><label for="guide-model">Adapt the communication prompts<select id="guide-model" data-guide-model="${escAttr(spec.promptModel)}" data-guide-target="${escAttr(spec.promptDestination || "anywhere")}"></select></label></div><p>Choose your model to update the communication prompts below. For a full tuning and installation steps, <a data-guide-generator href="/tools/custom-instructions-generator?model=${escAttr(spec.promptModel)}&amp;target=${escAttr(spec.promptDestination || "anywhere")}">open the prompt generator →</a></p></aside>` : ""}
${sectionsHtml}
${faqHtml}
${changelogHtml}
${sourcesHtml}
${relatedHtml}

    </main>

    <footer class="footer">
      <span>MIT · <a href="https://github.com/bernardjhuang/agenttune" target="_blank" rel="noopener">bernardjhuang/agenttune</a></span>
      <span class="footer-legal"><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
    </footer>
  </div>

  <script src="/compact-tunings.js"></script>
  <script src="/platforms.js"></script>
  <script src="/integrations.js"></script>
  <script src="/guide-prompts.js"></script>${(spec.scripts || []).map(src => `\n  <script defer src="${escAttr(src)}"></script>`).join("")}
</body>
</html>
`;
}

module.exports = { buildPage, datesFor };
if (require.main === module) {
const selected = process.argv.slice(2);
const specs = fs.readdirSync(SRC).filter((f) => f.endsWith(".json") && (!selected.length || selected.includes(f.replace(/\.json$/, ""))));
for (const f of specs) {
  const spec = JSON.parse(fs.readFileSync(path.join(SRC, f), "utf8"));
  const html = buildPage(spec, datesFor(spec, path.join("guides", "src", f)));
  fs.writeFileSync(path.join(OUT, `${spec.slug}.html`), html);
  console.log(`guides/${spec.slug}.html ← ${f}`);
}
console.log(`${specs.length} guide pages built.`);

}
