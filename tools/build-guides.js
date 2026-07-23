#!/usr/bin/env node
/* Builds /guides/*.html from guides/src/*.json specs.
 *
 * Each spec: { slug, title, description, pill, h1, dek, lede, answer,
 *              sections: [{h2, html}], faq: [{q, a}], related: [{kicker, label, href}] }
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

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "guides", "src");
const OUT = path.join(ROOT, "guides");
const SITE = "https://agent-tune.com";

const escHtml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => escHtml(s).replace(/"/g, "&quot;");
const jsonInline = (o) => JSON.stringify(o).replace(/</g, "\\u003c");
const stripTags = (t) => String(t).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

const FONT_BLOCK = `  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" />`;

function navHtml() {
  return `    <nav class="nav" aria-label="Primary">
      <a class="brand" href="/"><span class="brand-dot" aria-hidden="true"></span><span>AgentTune</span></a>
      <div class="nav-links">
        <a href="/library/">Library</a>
        <a href="/tests/">Tests</a>
        <a href="/research">Research</a>
        <a href="/guides/" class="active">Guides</a>
        <a class="github" href="https://github.com/bernardjhuang/agenttune" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </nav>`;
}

function buildPage(spec) {
  const route = `/guides/${spec.slug}`;
  const url = `${SITE}${route}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: stripTags(spec.h1).replace(/\.$/, ""),
    description: spec.description,
    url,
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
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides/` },
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

  const sectionsHtml = spec.sections.map((s) => `
      <section>
        <h2>${s.h2}</h2>
        ${s.html}
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

  <script defer src="/consent.js"></script>

${FONT_BLOCK}
  <link rel="stylesheet" href="/styles.css" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='30' fill='%23a8482a'/%3E%3C/svg%3E" />
</head>
<body class="research-page">
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="page">

${navHtml()}

    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <a href="/guides/">Guides</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <span class="crumb-current" aria-current="page">${escHtml(stripTags(spec.h1).replace(/\.$/, ""))}</span>
    </nav>

    <article class="article-wrap guide-prose" id="main" tabindex="-1">

      <section class="hero" style="padding-bottom: 4px;">
        <span class="pill" style="background: rgba(200,85,61,0.12); color: var(--accent, #a8482a);">${escHtml(spec.pill)}</span>
        <h1 class="h-hero h-research-hero">${escHtml(spec.h1)}</h1>${spec.dek ? `\n        <p class="article-dek">${spec.dek}</p>` : ""}
        <p class="lede" style="margin-top: 18px;">${spec.lede}</p>
      </section>

${spec.answer ? `      <div class="guide-answer"><strong>The short answer.</strong> ${escHtml(spec.answer)}</div>\n` : ""}
      <div class="divider tight"></div>
${sectionsHtml}
${faqHtml}
${relatedHtml}

    </article>

    <div class="footer">
      <span>MIT · <a href="https://github.com/bernardjhuang/agenttune" target="_blank" rel="noopener">bernardjhuang/agenttune</a></span>
      <span class="footer-legal"><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
    </div>
  </div>

  <script>
    // Copy buttons on every snippet block
    document.querySelectorAll(".guide-snippet").forEach(function (block) {
      var btn = document.createElement("button");
      btn.className = "guide-snippet-copy";
      btn.type = "button";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(block.textContent.replace(/^\\s*Copy\\s*/, "").trim()).then(function () {
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = "Copy"; }, 1200);
        });
      });
      block.prepend(btn);
    });
  </script>
</body>
</html>
`;
}

const specs = fs.readdirSync(SRC).filter((f) => f.endsWith(".json"));
for (const f of specs) {
  const spec = JSON.parse(fs.readFileSync(path.join(SRC, f), "utf8"));
  const html = buildPage(spec);
  fs.writeFileSync(path.join(OUT, `${spec.slug}.html`), html);
  console.log(`guides/${spec.slug}.html ← ${f}`);
}
console.log(`${specs.length} guide pages built.`);
