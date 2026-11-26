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
      <a class="brand" href="/"><svg class="brand-mark" width="20" height="20" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M19 10v20c0 7.2 5.6 12.5 13 12.5S45 37.2 45 30V10" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="square"/><line x1="32" y1="42.5" x2="32" y2="55" stroke="currentColor" stroke-width="7" stroke-linecap="square"/><circle cx="32" cy="20" r="6.5" fill="var(--accent, #9c3b1f)"/></svg><span>AgentTune</span></a>
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

const RESEARCH_SERIES = [
  { slug: "historical-evolution-of-ai-personalities-2023-2026", label: "Historical Evolution (2023–2026)" },
  { slug: "ai-reasoning-personality-phase-transition", label: "Reasoning Phase Transition & CoT Mask" },
  { slug: "ai-big-one-factor-collapse-mtmm-audit", label: "The AI \"Big One\" & MTMM Audit" },
  { slug: "ai-persona-entropy-crystalline-vs-fluid-minds", label: "Crystalline vs. Fluid AI Minds (Entropy)" },
  { slug: "ai-instruction-budget-cliff-lost-in-the-middle", label: "Instruction Budget Cliff (5–75 Rules)" },
  { slug: "ai-slop-fingerprint-benchmark-8-models", label: "AI Slop Fingerprint Benchmark" },
  { slug: "ai-agent-autonomy-over-asking-vs-reasoning-effort", label: "Agent Autonomy & Reasoning Effort" },
  { slug: "ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot", label: "Prompt Syntax Wars" },
  { slug: "ai-sycophancy-vs-false-contrarianism-benchmark", label: "Sycophancy vs. False Contrarianism" },
  { slug: "ai-persona-half-life-context-drift", label: "Persona Half-Life & Context Drift" },
  { slug: "ai-roleplay-tax-fictional-character-prompts", label: "The Roleplay Tax (85/15 Calibration)" },
  { slug: "does-personality-tuning-change-ai-answers", label: "Does Personality Tuning Change Answers?" },
  { slug: "what-personality-type-are-open-source-models", label: "12 Open-Source AI Models Tested" },
  { slug: "ai-personality-rankings", label: "20-Model AI Personality Rankings" },
  { slug: "ai-personality-five-models-2026", label: "September 2026 Five-Model Study" },
  { slug: "ai-big-five-item-level-comparison", label: "Big Five 50-Item Level Comparison" },
  { slug: "what-personality-type-is-chatgpt", label: "What Personality Type Is ChatGPT?" },
  { slug: "what-personality-type-is-claude", label: "What Personality Type Is Claude?" },
  { slug: "what-personality-type-is-gemini", label: "What Personality Type Is Gemini?" },
  { slug: "what-personality-type-is-grok", label: "What Personality Type Is Grok?" },
  { slug: "what-personality-type-is-muse", label: "What Personality Type Is Meta Muse?" },
  { slug: "astra-vs-sol-personality-data", label: "GPT-6 Astra vs. Sol (1,000 Runs)" },
  { slug: "opus-vs-fable-question-level", label: "Claude Opus 5.5 vs. Fable 5.1 (170 Items)" },
  { slug: "first-ai-that-is-not-an-intj", label: "Is Every AI Actually an INTJ?" },
  { slug: "ai-mbti-tie-breaking", label: "The Tie-Breaking Effect in AI MBTI" },
  { slug: "ai-neutral-answers", label: "What \"Neutral\" Means on AI Tests" },
  { slug: "ai-personality-repeatability", label: "Labels vs. Answer Sheet Repeatability" },
  { slug: "i-took-the-mbti-100-times", label: "Opus 4.8 100x MBTI Simulation Note" }
];

function estimateReadMinutes(spec) {
  const parts = [
    spec.h1, spec.dek, spec.lede, spec.answer,
    ...(spec.sections || []).map((s) => `${s.h2} ${(s.html || "").replace(/<svg[\s\S]*?<\/svg>/g, "")}`),
    ...(spec.faq || []).map((f) => `${f.q} ${f.a}`)
  ];
  const words = stripTags(parts.filter(Boolean).join(" ")).split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 220));
}

function buildResearchCiteAndTrail(spec, dates, url) {
  const headline = stripTags(spec.h1).replace(/\.$/, "");
  const year = (dates.updated || dates.published || "2026").slice(0, 4);
  const citeKey = `huang${year}_${spec.slug.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "")}`;
  const summaryLine = stripTags(spec.answer || spec.lede || spec.description);
  const apa = `Huang, B. (${year}). ${headline}. AgentTune Empirical AI Psychology Monographs. ${url}`;
  const bibtex = `@article{${citeKey},\n  author  = {Huang, Bernard},\n  title   = {${headline}},\n  journal = {AgentTune Empirical AI Psychology Monographs},\n  year    = {${year}},\n  date    = {${dates.updated}},\n  url     = {${url}},\n  note    = {Open dataset and Markdown mirror at ${url}.md}\n}`;
  const mdBrief = `> **${headline}** (Bernard Huang, ${longDate(dates.updated)}): ${summaryLine}\n> Source: [${url}](${url}) · [Markdown mirror](${url}.md)`;

  const idx = RESEARCH_SERIES.findIndex((item) => item.slug === spec.slug);
  const prev = idx > 0 ? RESEARCH_SERIES[idx - 1] : null;
  const next = idx >= 0 && idx < RESEARCH_SERIES.length - 1 ? RESEARCH_SERIES[idx + 1] : null;
  const numLabel = idx >= 0 ? `Study ${idx + 1} of ${RESEARCH_SERIES.length}` : "28-Study Archive";

  const citeHtml = `
      <div class="divider tight"></div>
      <details class="cite-drawer" data-cite-box>
        <summary>Cite this study (APA 7th · BibTeX · Markdown Brief)</summary>
        <div class="cite-actions">
          <button type="button" class="btn btn-secondary" data-copy-cite="apa">Copy APA</button>
          <button type="button" class="btn btn-secondary" data-copy-cite="bibtex">Copy BibTeX</button>
          <button type="button" class="btn btn-secondary" data-copy-cite="md">Copy Markdown</button>
          <span class="cite-status" role="status" aria-live="polite" data-cite-status></span>
        </div>
        <pre class="cite-block" data-cite-text="apa">${escHtml(apa)}</pre>
        <pre class="cite-block" data-cite-text="bibtex">${escHtml(bibtex)}</pre>
        <pre class="cite-block" data-cite-text="md">${escHtml(mdBrief)}</pre>
      </details>`;

  const trailHtml = `
      <nav class="series-trail" aria-label="Research study trail">
        <span class="series-trail-prev">${prev ? `<a href="/research/${escAttr(prev.slug)}">← ${escHtml(prev.label)}</a>` : `<a href="/research">← Research Hub</a>`}</span>
        <a class="series-trail-index" href="/research">${escHtml(numLabel)} · Archive Index (28)</a>
        <span class="series-trail-next">${next ? `<a href="/research/${escAttr(next.slug)}">${escHtml(next.label)} →</a>` : `<a href="/research">All 28 Studies →</a>`}</span>
      </nav>`;

  return { citeHtml, trailHtml };
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
        <h2${s.id ? ` id="${escAttr(s.id)}"` : ""}>${s.h2}</h2>
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
  <link rel="alternate" type="text/markdown" title="This article as Markdown" href="${SITE}/${research ? "research" : "guides"}/${spec.slug}.md" />
  <link rel="alternate" type="text/markdown" title="LLM index" href="${SITE}/llms.txt" />${research ? `
  <meta name="citation_title" content="${escAttr(stripTags(spec.h1).replace(/\.$/, ""))}" />
  <meta name="citation_author" content="Bernard Huang" />
  <meta name="citation_publication_date" content="${dates.published.replace(/-/g, "/")}" />
  <meta name="citation_online_date" content="${dates.updated.replace(/-/g, "/")}" />
  <meta name="citation_journal_title" content="AgentTune Empirical AI Psychology Monographs" />
  <meta name="citation_public_url" content="${url}" />` : ""}

  <script type="application/ld+json">${jsonInline(articleSchema)}</script>
  <script type="application/ld+json">${jsonInline(breadcrumbSchema)}</script>${faqSchema ? `\n  <script type="application/ld+json">${jsonInline(faqSchema)}</script>` : ""}

${spec.dataset ? `<script type="application/ld+json">${jsonInline(spec.dataset)}</script>` : ""}
  <script defer src="/consent.js" fetchpriority="low"></script>

${FONT_BLOCK}
  <link rel="stylesheet" href="/styles.css" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
        <p class="page-eyebrow">${escHtml(spec.pill)}</p>
        <h1 class="h-hero h-research-hero">${escHtml(spec.h1)}</h1>
        <p class="guide-dateline">By Bernard Huang · Updated <time datetime="${dates.updated}">${escHtml(longDate(dates.updated))}</time> · <span class="guide-readtime">~${estimateReadMinutes(spec)} min read</span> · <a href="/${research ? "research" : "guides"}/${spec.slug}.md">Markdown (.md)</a> · <a href="/guides/mcp-server-ai-preferences-portable-tuning">MCP</a>${research ? ' · <a href="/research/data/november-2026-agent-research-briefs.json">Briefs JSON</a>' : ""}</p>
        ${research && spec.dek ? `<p class="lede" style="margin-top: 14px;">${escHtml(stripTags(spec.dek))}</p>` : ""}
        <div class="guide-tldr" role="note" aria-label="${research ? "Summary" : "Quick answer"}"><strong>${research ? "Summary:" : "Quick answer:"}</strong> ${spec.answer ? escHtml(spec.answer) : spec.lede}</div>
      </section>


      <div class="divider tight"></div>
${spec.promptModel ? `      <aside class="model-compatibility"><div class="prompt-picker-controls"><label for="guide-model">Adapt the communication prompts<select id="guide-model" data-guide-model="${escAttr(spec.promptModel)}" data-guide-target="${escAttr(spec.promptDestination || "anywhere")}"></select></label></div><p>Choose your model to update the communication prompts below. For a full tuning and installation steps, <a data-guide-generator href="/tools/custom-instructions-generator?model=${escAttr(spec.promptModel)}&amp;target=${escAttr(spec.promptDestination || "anywhere")}">open the prompt generator →</a></p></aside>` : ""}
${sectionsHtml}
${faqHtml}
${changelogHtml}
${sourcesHtml}
${relatedHtml}${research ? (() => { const { citeHtml, trailHtml } = buildResearchCiteAndTrail(spec, dates, url); return `${citeHtml}\n${trailHtml}`; })() : ""}

    </main>

    <footer class="footer">
      <span>MIT · <a href="https://github.com/bernardjhuang/agenttune" target="_blank" rel="noopener">bernardjhuang/agenttune</a></span>
      <span class="footer-legal"><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
    </footer>
  </div>

  <script src="/compact-tunings.js" fetchpriority="low"></script>
  <script src="/platforms.js" fetchpriority="low"></script>
  <script src="/integrations.js" fetchpriority="low"></script>
  <script src="/guide-prompts.js" fetchpriority="low"></script>${(spec.scripts || []).map(src => `\n  <script defer src="${escAttr(src)}" fetchpriority="low"></script>`).join("")}
</body>
</html>
`;
}

module.exports = { buildPage, datesFor, RESEARCH_SERIES, estimateReadMinutes, buildResearchCiteAndTrail };
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
