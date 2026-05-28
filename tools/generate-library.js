#!/usr/bin/env node
/* AgentTune library page generator (v2 template)
 *
 * Reads contact metadata from data.js + mirrored markdown from /tunings,
 * emits 43 HTML files under /library/{system}/{slug}.html — one page per
 * tuning type. The v2 template matches the hand-built ESTP page at
 * /library/mbti/estp.html.
 *
 * Per-type "human" content (demoWhy, humanContexts, outward) lives in
 * ./v2-content.js — the generator looks it up by `c.id`.
 *
 * Plain-English rules (the 7-ish bullets in § II) are auto-derived from
 * the tuning markdown's `## Headings`, unless a `plainEnglishRules` array
 * is provided in v2-content.js (used to preserve ESTP's hand-distilled
 * bullets).
 *
 * Run:  node tools/generate-library.js
 *
 * ESTP is excluded from regeneration — the file at /library/mbti/estp.html
 * is the canonical hand-built reference. To regenerate it, remove the
 * SKIP_REGEN_IDS entry below.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const V2 = require("./v2-content");

const ROOT = path.resolve(__dirname, "..");
const DATA_JS = path.join(ROOT, "data.js");
const TUNINGS_DIR = path.join(ROOT, "tunings");
const OUT_DIR = path.join(ROOT, "library");

// Type IDs whose pages should NOT be overwritten by the generator. The
// hand-built ESTP reference page lives at /library/mbti/estp.html and is
// the canonical v2 template; do not overwrite it.
const SKIP_REGEN_IDS = new Set(["mbti-ESTP"]);

// ---------- Load contacts from data.js ----------
function loadData() {
  const src = fs.readFileSync(DATA_JS, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  const w = sandbox.window;
  return {
    contacts: w.AT_CONTACTS || [],
    research: w.AT_RESEARCH || {},
    ennea: w.AT_ENNEA || [],
    attach: w.AT_ATTACH || [],
    systems: w.AT_SYSTEMS || [],
    prompt: w.AT_PROMPT || "I'm feeling stuck on a project. What should I do?",
    defaultResponse: w.AT_DEFAULT_RESPONSE || ""
  };
}

// ---------- Slugs + filenames ----------
const OCEAN_DIM_NAMES = { O: "openness", C: "conscientiousness", E: "extraversion", A: "agreeableness", N: "neuroticism" };

// System-level accent colors (per design handoff)
const SYSTEM_ACCENTS = {
  mbti: "#5b4dc0",
  enneagram: "#2f8a5b",
  disc: "#d99632",
  attachment: null,
  ocean: null
};

const OCEAN_ACCENTS = {
  O: "#5b4dc0",
  C: "#3a72c4",
  E: "#d99632",
  A: "#2f8a5b",
  N: "#a8482a"
};

const ATTACH_ACCENTS = {
  Secure: "#2f8a5b",
  Anxious: "#e07a8a",
  Avoidant: "#3a72c4",
  Disorganized: "#7a4ac8"
};

function slugFor(c) {
  if (c.system === "mbti") return c.code.toLowerCase();
  const filePart = (c.path || "").split("/").pop().replace(/\.md$/, "");
  if (c.system === "ocean") {
    const [letter, pole] = filePart.split("-");
    return `${OCEAN_DIM_NAMES[letter]}-${pole}`.toLowerCase();
  }
  return filePart.toLowerCase();
}

function loadTuning(c) {
  const p = path.join(TUNINGS_DIR, c.path);
  if (!fs.existsSync(p)) return c.tuning || "";
  return fs.readFileSync(p, "utf8");
}

function accentFor(c) {
  if (c.system === "attachment") return ATTACH_ACCENTS[c.code] || "#a8482a";
  if (c.system === "ocean") {
    const letter = c.code.split("-")[0];
    return OCEAN_ACCENTS[letter] || "#a8482a";
  }
  return SYSTEM_ACCENTS[c.system] || "#a8482a";
}

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function escAttr(s) { return escHtml(s); }

// ---------- Tuning markdown parsing ----------

/**
 * Split a tuning markdown into { frontmatter, body }. Front-matter is the
 * block between the first two `---` lines; body is everything after (with
 * any leading blank lines trimmed).
 */
function parseTuning(md) {
  const lines = md.split("\n");
  if (lines[0] && lines[0].trim() === "---") {
    let end = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === "---") { end = i; break; }
    }
    if (end > 0) {
      const fm = lines.slice(0, end + 1).join("\n");
      const body = lines.slice(end + 1).join("\n").replace(/^\n+/, "");
      return { frontmatter: fm, body };
    }
  }
  return { frontmatter: "", body: md };
}

/**
 * Extract { heading, paragraph } entries from each `## Heading` in the body.
 * The paragraph is the first non-empty content block under the heading;
 * if it's a bulleted list, the first item is used.
 */
function extractRules(body) {
  const lines = body.split("\n");
  const rules = [];
  let cur = null;
  let collecting = false;
  let bodyLines = [];

  function flush() {
    if (!cur) return;
    let para = "";
    const firstIdx = bodyLines.findIndex((l) => l.trim() !== "");
    if (firstIdx >= 0) {
      const first = bodyLines[firstIdx];
      if (first.trim().startsWith("- ")) {
        // Bulleted list — join all items with "; " for a single readable sentence
        const items = [];
        for (let i = firstIdx; i < bodyLines.length; i++) {
          const l = bodyLines[i].trim();
          if (l === "") break;
          if (l.startsWith("- ")) items.push(l.replace(/^-\s+/, ""));
        }
        para = items.join("; ");
      } else {
        // Paragraph — collect contiguous non-empty lines as one sentence
        const paraLines = [];
        for (let i = firstIdx; i < bodyLines.length; i++) {
          if (bodyLines[i].trim() === "") break;
          paraLines.push(bodyLines[i].trim());
        }
        para = paraLines.join(" ");
      }
    }
    rules.push({ heading: cur, paragraph: para });
    cur = null;
    bodyLines = [];
    collecting = false;
  }

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flush();
      cur = line.slice(3).trim();
      collecting = true;
    } else if (collecting) {
      bodyLines.push(line);
    }
  }
  flush();
  return rules;
}

/**
 * Render the editor's <pre> code block: syntax-highlight `# H1` lines (orange)
 * and `## H2` lines (purple-bold). Everything else is HTML-escaped plain text.
 */
function renderEditorCode(body) {
  const lines = body.split("\n");
  // Trim trailing empty lines so the gutter doesn't show blanks past the content
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();
  const html = lines.map((line) => {
    if (line.startsWith("# ")) {
      return `<span class="c-h1">${escHtml(line)}</span>`;
    }
    if (line.startsWith("## ")) {
      return `<span class="c-h2">${escHtml(line)}</span>`;
    }
    return escHtml(line);
  }).join("\n");
  const gutter = lines.map((_, i) => `<span>${i + 1}</span>`).join("");
  return { code: html, gutter, lineCount: lines.length };
}

/**
 * Render the § II "plain English" UL. If V2[id].plainEnglishRules is provided,
 * use it verbatim (each entry is { lede, body } or a plain string with the
 * lede + body joined by ". "). Otherwise, auto-derive from `## Heading` +
 * first paragraph.
 */
function renderPlainEnglishRules(v2, body) {
  let items = [];
  if (v2 && Array.isArray(v2.plainEnglishRules)) {
    items = v2.plainEnglishRules.map((r) => {
      if (typeof r === "string") {
        // Plain string: split at first sentence boundary
        const m = r.match(/^(.+?\.)\s*(.*)$/);
        return m ? { lede: m[1], body: m[2] } : { lede: r, body: "" };
      }
      return { lede: r.lede || "", body: r.body || "" };
    });
  } else {
    const rules = extractRules(body);
    items = rules.map((r) => ({
      lede: r.heading.replace(/\.$/, "") + ".",
      body: r.paragraph
    }));
  }
  if (!items.length) return "";
  return items.map((it) => {
    const lede = `<strong>${escHtml(it.lede)}</strong>`;
    const bodyText = it.body ? " " + escHtml(it.body) : "";
    return `        <li>${lede}${bodyText}</li>`;
  }).join("\n");
}

// ---------- Display helpers (avatar, code, name) ----------

function displayDataFor(c, enneaDigit) {
  const displayCode = c.system === "enneagram"
    ? `T${enneaDigit}`
    : c.code;

  let displayName;
  let namePrefix = "";
  if (c.system === "mbti") {
    namePrefix = "The ";
    displayName = c.name;
  } else if (c.system === "enneagram") {
    displayName = c.name;
  } else if (c.system === "disc") {
    displayName = c.name;
  } else if (c.system === "attachment") {
    displayName = `${c.code} attachment`;
  } else {
    displayName = c.name;
  }

  const avatarChars = c.system === "enneagram"
    ? `T${enneaDigit}`
    : c.avatar || c.code.substring(0, 2);

  return { displayCode, displayName, namePrefix, avatarChars };
}

/**
 * Per-system grammatical helpers for the dynamic text in §§ I–IV.
 * Returns:
 *   article — "a" / "an" / "someone" (for "talks to you like {article} {label}")
 *   label   — singular noun phrase ("INTJ", "Type 5", "Dominance type",
 *             "Secure-attached person", "someone high in Openness")
 *   plural  — plural noun phrase for § IV ("What X sound like…")
 *   shortLabel — shorter form used in "your tuning" demo lede + § II
 */
function grammarFor(c, displayCode, displayName, enneaDigit) {
  if (c.system === "mbti") {
    const isVowel = /^[aeiouAEIOU]/.test(displayCode);
    return {
      article: isVowel ? "an" : "a",
      label: displayCode,            // "INTJ"
      plural: `${displayCode}s`,     // "INTJs"
      shortLabel: displayCode
    };
  }
  if (c.system === "enneagram") {
    return {
      article: "a",
      label: `Type ${enneaDigit}`,        // "Type 5"
      plural: `Type ${enneaDigit}s`,      // "Type 5s"
      shortLabel: `Type ${enneaDigit}`
    };
  }
  if (c.system === "disc") {
    const isVowel = /^[aeiouAEIOU]/.test(displayName);
    return {
      article: isVowel ? "an" : "a",
      label: `${displayName} type`,       // "Dominance type"
      plural: `${displayName} types`,     // "Dominance types"
      shortLabel: `DISC ${c.code}`        // "DISC D"
    };
  }
  if (c.system === "attachment") {
    const isVowel = /^[aeiouAEIOU]/.test(c.code);
    return {
      article: isVowel ? "an" : "a",
      label: `${c.code}-attached person`,    // "Secure-attached person"
      plural: `${c.code}-attached people`,   // "Secure-attached people"
      shortLabel: `${c.code}-attached`
    };
  }
  // OCEAN — uses "someone" article since the noun phrase is descriptive
  if (c.system === "ocean") {
    const [letter, pole] = c.code.split("-");
    const dim = OCEAN_DIM_NAMES[letter];
    const dimCap = dim.charAt(0).toUpperCase() + dim.slice(1);
    return {
      article: "someone",
      label: `${pole} in ${dimCap}`,           // "high in Openness"
      plural: `people ${pole} in ${dimCap}`,   // "people high in Openness"
      shortLabel: `${pole}-${dimCap}`          // "high-Openness"
    };
  }
  return {
    article: "a",
    label: displayCode,
    plural: `${displayCode}s`,
    shortLabel: displayCode
  };
}

// ---------- Related profiles ----------
function relatedFor(c, allContacts) {
  const sameSystem = allContacts.filter((x) => x.system === c.system && x.id !== c.id);
  if (c.system === "mbti") {
    return sameSystem.filter((x) => x.group === c.group).slice(0, 4);
  }
  if (c.system === "enneagram") {
    const n = parseInt((c.code.match(/\d+/) || [""])[0], 10);
    if (!n) return sameSystem.slice(0, 4);
    const adj = [n - 1, n + 1, n - 2, n + 2].map((k) => ((k - 1 + 9) % 9) + 1);
    const seen = new Set();
    const result = [];
    adj.forEach((k) => {
      if (seen.has(k)) return;
      seen.add(k);
      const m = sameSystem.find((x) => {
        const xn = parseInt((x.code.match(/\d+/) || [""])[0], 10);
        return xn === k;
      });
      if (m) result.push(m);
    });
    return result.slice(0, 4);
  }
  if (c.system === "ocean") {
    const [letter, pole] = c.code.split("-");
    const opposite = sameSystem.find((x) => x.code === `${letter}-${pole === "high" ? "low" : "high"}`);
    const others = sameSystem.filter((x) => !x.code.startsWith(letter)).filter((x) => x.code.endsWith(`-${pole}`));
    return [opposite, ...others].filter(Boolean).slice(0, 5);
  }
  return sameSystem.slice(0, 3);
}

// ---------- v2 page template ----------

function buildPage(c, allContacts, prompt, defaultResponse) {
  const accent = accentFor(c);
  const slug = slugFor(c);
  const tuning = loadTuning(c);
  const filename = c.path; // e.g. "mbti/INTJ.md"

  const SYSTEM_LABELS = {
    mbti: "MBTI",
    enneagram: "Enneagram",
    disc: "DISC",
    attachment: "Attachment",
    ocean: "OCEAN"
  };
  const SYSTEM_FULL_LABELS = {
    mbti: "MBTI Personality Type",
    enneagram: "Enneagram Type",
    disc: "DISC Profile",
    attachment: "Attachment Style",
    ocean: "OCEAN / Big Five Dimension"
  };
  const SYSTEM_COUNTS = {
    mbti: 16,
    enneagram: 9,
    disc: 4,
    attachment: 4,
    ocean: 10
  };

  const sysLabel = SYSTEM_LABELS[c.system];
  const sysFull = SYSTEM_FULL_LABELS[c.system];
  const route = `/library/${c.system}/${slug}`;

  const enneaDigit = c.system === "enneagram"
    ? (c.code.match(/\d+/) || [""])[0]
    : null;

  const { displayCode, displayName, namePrefix, avatarChars } = displayDataFor(c, enneaDigit);
  const grammar = grammarFor(c, displayCode, displayName, enneaDigit);

  // SEO title — Template D, system-tuned
  const pageTitle = c.system === "ocean"
    ? `${c.name} (Big Five) System Prompt for AI Agents · AgentTune`
    : c.system === "attachment"
      ? `${c.code} Attachment System Prompt for AI Agents · AgentTune`
      : c.system === "enneagram"
        ? `Enneagram Type ${enneaDigit} System Prompt for AI Agents · AgentTune`
        : c.system === "disc"
          ? `DISC ${c.code} System Prompt for AI Agents · AgentTune`
          : `${c.code} System Prompt for AI Agents — Claude, GPT · AgentTune`;

  const metaDesc = `${c.blurb} A ${sysFull} tuning file for your AI agent — paste it into Claude, ChatGPT, Cursor, or any modern agent.`;

  // Per-type V2 content (humanContexts + outward + demoWhy + optional bullets)
  const v2 = V2[c.id] || {};

  // Tuning markdown — split front-matter from body
  const { body: tuningBody } = parseTuning(tuning);

  // Editor code block (syntax highlighted body)
  const { code: editorCode, gutter, lineCount } = renderEditorCode(tuningBody);

  // Plain-English bullets for § II
  const summaryLis = renderPlainEnglishRules(v2, tuningBody);

  // Demo responses
  const tunedResp = c.response || "";

  // Human cards (§ III)
  const hc = v2.humanContexts || {};
  const humanCards = [
    { eyebrow: "Conflict",      body: hc.conflict || "" },
    { eyebrow: "Feedback",      body: hc.feedback || "" },
    { eyebrow: "Decisions",     body: hc.decisions || "" },
    { eyebrow: "Brainstorming", body: hc.brainstorming || "" }
  ];

  // Outward cards (§ IV)
  const ow = v2.outward || {};
  const outwardCards = [
    { eyebrow: "How you come across", body: ow.howYouMayComeAcross || "" },
    { eyebrow: "Stating needs",       body: ow.howToStateNeeds || "" },
    { eyebrow: "Boundary script",     body: ow.boundaryScript || "" },
    { eyebrow: "Recovery pattern",    body: ow.recoveryPattern || "" }
  ];

  // Demo "why this works"
  const demoWhy = v2.demoWhy || `A ${sysLabel} ${displayCode} tuning shifts the model from a one-size-fits-all answer to one aligned with how this type processes.`;

  // Related pills
  const related = relatedFor(c, allContacts);
  const relatedHtml = related.map((r) => {
    const rSlug = slugFor(r);
    const rUrl = `/library/${r.system}/${rSlug}`;
    const rDigit = r.system === "enneagram" ? (r.code.match(/\d+/) || [""])[0] : null;
    const label = r.system === "mbti" ? r.code
      : r.system === "enneagram" ? `T${rDigit} ${r.name}`
      : r.system === "ocean" ? r.code
      : r.code;
    return `<a class="lib-related-pill" href="${rUrl}" style="color: ${accent};">${escHtml(label)} →</a>`;
  }).join("");

  const relatedAllUrl = `/library/#${c.system}`;
  const relatedAllLabel = `All ${SYSTEM_COUNTS[c.system]} ${sysLabel} ${c.system === "ocean" ? "poles" : c.system === "attachment" ? "styles" : "types"}`;

  // Schema.org
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${displayCode} — ${displayName}`,
    description: c.blurb,
    url: `https://agent-tune.com${route}`,
    author: { "@type": "Organization", name: "AgentTune", url: "https://agent-tune.com" },
    license: "https://opensource.org/licenses/MIT",
    inLanguage: "en",
    keywords: `${sysLabel}, ${displayCode}, ${displayName}, AI agent personality tuning, ${sysFull}, AgentTune`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://agent-tune.com/" },
      { "@type": "ListItem", position: 2, name: "Library", item: "https://agent-tune.com/library/" },
      { "@type": "ListItem", position: 3, name: sysLabel, item: `https://agent-tune.com/library/#${c.system}` },
      { "@type": "ListItem", position: 4, name: displayCode }
    ]
  };

  // Editor filename (matches what the user would save it as)
  const editorFilename = `~/.agenttune/${(filename.split("/").pop().replace(/\.md$/, ""))}.md`;
  const downloadFilename = filename.split("/").pop();

  // Build human cards HTML
  const humanCardsHtml = humanCards.map((card) => `
        <article class="lib-v2-card">
          <div class="lib-v2-card-eyebrow">${escHtml(card.eyebrow)}</div>
          <p class="lib-v2-card-body">${card.body}</p>
        </article>`).join("");

  const outwardCardsHtml = outwardCards.map((card) => `
        <article class="lib-v2-card">
          <div class="lib-v2-card-eyebrow">${escHtml(card.eyebrow)}</div>
          <p class="lib-v2-card-body">${card.body}</p>
        </article>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escHtml(pageTitle)}</title>
  <meta name="description" content="${escAttr(metaDesc)}" />

  <meta property="og:title" content="${escAttr(`${displayCode} — ${displayName}`)}" />
  <meta property="og:description" content="${escAttr(c.blurb)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://agent-tune.com${route}" />
  <meta property="og:site_name" content="AgentTune" />
  <meta property="og:image" content="https://agent-tune.com/og${route}.png" />
  <meta property="og:image:secure_url" content="https://agent-tune.com/og${route}.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escAttr(`${displayCode} — ${displayName} · AgentTune personality tuning for AI agents`)}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escAttr(`${displayCode} — ${displayName}`)}" />
  <meta name="twitter:description" content="${escAttr(c.blurb)}" />
  <meta name="twitter:site" content="@psyduckler" />
  <meta name="twitter:image" content="https://agent-tune.com/og${route}.png" />
  <meta name="twitter:image:alt" content="${escAttr(`${displayCode} — ${displayName} · AgentTune`)}" />

  <link rel="canonical" href="https://agent-tune.com${route}" />
  <link rel="alternate" type="text/markdown" title="Tuning file" href="https://agent-tune.com/tunings/${filename}" />
  <link rel="alternate" type="text/markdown" title="LLM index" href="https://agent-tune.com/llms.txt" />

  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5MYEW2MEE1"></script>
  <script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5MYEW2MEE1');</script>

  <link rel="stylesheet" href="/styles.css" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='30' fill='${encodeURIComponent(accent)}'/%3E%3C/svg%3E" />

  <style>
    :root {
      --lib-accent: ${accent};
      --lib-accent-22: ${hexToRgba(accent, 0.13)};
      --lib-accent-55: ${hexToRgba(accent, 0.34)};
      --lib-accent-66: ${hexToRgba(accent, 0.4)};
    }

    /* v2 reference styles */
    .lib-v2-positioning { font-family: var(--font-serif); font-style: italic; font-size: 19px; line-height: 1.45; color: var(--lib-accent); letter-spacing: -0.005em; margin: 32px 0 14px; }
    .lib-v2-trust { font-family: var(--font-serif); font-size: 15px; line-height: 1.6; color: var(--muted); padding: 16px 20px; border-left: 3px solid var(--lib-accent-55); background: var(--lib-accent-22); border-radius: 0 4px 4px 0; margin: 18px 0 0; }
    .lib-v2-trust strong { color: var(--ink); font-weight: 500; }

    /* Anchor nav — placed right under the hero */
    .lib-v2-anchors {
      position: sticky; top: 0; z-index: 50;
      background: var(--bg);
      margin: 24px -32px 0;
      padding: 14px 32px;
      display: flex; gap: 28px; overflow-x: auto; scrollbar-width: thin;
    }
    .lib-v2-anchor { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); text-decoration: none; padding: 6px 0; border-bottom: 2px solid transparent; white-space: nowrap; transition: color 0.12s ease, border-color 0.12s ease; }
    .lib-v2-anchor:hover { color: var(--ink); }
    .lib-v2-anchor.is-active { color: var(--lib-accent); border-bottom-color: var(--lib-accent); }
    .lib-v2-anchor.is-file { text-transform: none; letter-spacing: 0.02em; font-weight: 600; }
    .lib-v2-anchor.is-file::before { content: "●"; color: var(--lib-accent); margin-right: 6px; font-size: 8px; vertical-align: middle; }

    .lib-v2-section { margin-top: 56px; scroll-margin-top: 80px; }
    .lib-v2-section-eyebrow { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--lib-accent); margin-bottom: 8px; }
    .lib-v2-section-h { font-family: var(--font-serif); font-size: 32px; font-weight: 500; letter-spacing: -0.012em; line-height: 1.1; color: var(--ink); margin: 0 0 8px; }
    .lib-v2-section-h em { color: var(--lib-accent); font-style: italic; }
    .lib-v2-section-lede { font-family: var(--font-serif); font-style: italic; font-size: 16px; color: var(--muted); line-height: 1.55; margin: 0 0 28px; max-width: 680px; }

    .lib-v2-demo { background: #fff; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
    .lib-v2-demo-prompt { padding: 22px 28px; background: var(--lib-accent-22); border-bottom: 1px solid var(--border); }
    .lib-v2-demo-prompt-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.20em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
    .lib-v2-demo-prompt-text { font-family: var(--font-serif); font-size: 18px; line-height: 1.4; color: var(--ink); margin: 0; }
    .lib-v2-demo-grid { display: grid; grid-template-columns: 1fr 1fr; }
    .lib-v2-demo-panel { padding: 24px 28px; }
    .lib-v2-demo-panel + .lib-v2-demo-panel { border-left: 1px solid var(--border); }
    .lib-v2-demo-panel-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 12px; }
    .lib-v2-demo-panel.is-generic .lib-v2-demo-panel-label { color: var(--muted); }
    .lib-v2-demo-panel.is-tuned   .lib-v2-demo-panel-label { color: var(--lib-accent); font-weight: 600; }
    .lib-v2-demo-response { font-family: var(--font-serif); font-size: 15px; line-height: 1.6; color: var(--ink); white-space: pre-wrap; margin: 0; }
    .lib-v2-demo-panel.is-generic .lib-v2-demo-response { color: var(--muted); }
    .lib-v2-demo-why { padding: 16px 28px; border-top: 1px solid var(--border); font-family: var(--font-serif); font-style: italic; font-size: 14px; color: var(--muted); background: var(--surface); }
    .lib-v2-demo-why strong { color: var(--ink); font-weight: 500; font-style: normal; }

    .lib-v2-summary { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px; }
    .lib-v2-summary li {
      position: relative;
      padding-left: 32px;
      font-family: var(--font-serif);
      font-size: 17px;
      line-height: 1.55;
      color: var(--inkSoft, var(--ink));
    }
    .lib-v2-summary li::before {
      content: "→";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--lib-accent);
      font-family: var(--font-serif);
      font-weight: 500;
      font-size: 17px;
      line-height: 1.55;
    }
    .lib-v2-summary strong { color: var(--ink); font-weight: 600; }

    .lib-v2-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .lib-v2-card { background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 22px 24px; }
    .lib-v2-card-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--lib-accent); font-weight: 600; margin-bottom: 10px; }
    .lib-v2-card-h { font-family: var(--font-serif); font-size: 18px; font-weight: 500; letter-spacing: -0.005em; color: var(--ink); margin: 0 0 10px; }
    .lib-v2-card-body { font-family: var(--font-serif); font-size: 15px; line-height: 1.6; color: var(--inkSoft, #4a4538); margin: 0; }
    .lib-v2-card-body em { font-style: italic; color: var(--ink); background: var(--lib-accent-22); padding: 0 4px; border-radius: 2px; }

    /* Agent jump-link buttons — sit between trust block and § I */
    .lib-v2-jump { margin-top: 28px; }
    .lib-v2-jump-eyebrow { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--lib-accent); font-weight: 600; margin-bottom: 14px; }
    .lib-v2-jump-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
    .lib-v2-jump-btn {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px 18px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: space-between;
      gap: 12px;
      transition: all 0.15s ease;
      text-align: left;
      font-family: inherit;
    }
    .lib-v2-jump-btn:hover {
      border-color: var(--lib-accent);
      background: var(--lib-accent-22);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(91,77,192,0.10);
    }
    .lib-v2-jump-name { font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: var(--ink); }
    .lib-v2-jump-tag {
      font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--lib-accent);
      background: var(--lib-accent-22);
      padding: 3px 8px; border-radius: 3px;
      font-weight: 600;
      flex-shrink: 0;
    }
    @media (max-width: 720px) {
      .lib-v2-jump-grid { grid-template-columns: 1fr; }
    }

    /* === Editor — VS Code window aesthetic === */
    .c-editor { background: #1e1b18; border-radius: 10px; overflow: hidden; box-shadow: 0 20px 60px rgba(26,24,23,0.22), 0 4px 14px rgba(26,24,23,0.10); border: 1px solid #3a3530; margin-top: 18px; }
    .c-titlebar { background: #2d2925; padding: 10px 16px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #3a3530; }
    .c-dots { display: flex; gap: 7px; }
    .c-dots span { width: 11px; height: 11px; border-radius: 50%; display: inline-block; }
    .c-dots span:nth-child(1) { background: #ff5f57; }
    .c-dots span:nth-child(2) { background: #febc2e; }
    .c-dots span:nth-child(3) { background: #28c840; }
    .c-titlebar-label { flex: 1; text-align: center; font-family: var(--font-mono); font-size: 12px; color: rgba(255,255,255,0.55); letter-spacing: 0.04em; }
    .c-tabs { background: #2d2925; padding: 0 8px; display: flex; align-items: flex-end; border-bottom: 1px solid #3a3530; }
    .c-tab { padding: 8px 16px 10px; font-family: var(--font-mono); font-size: 12px; color: rgba(255,255,255,0.5); background: transparent; border: 1px solid transparent; border-bottom: none; border-radius: 4px 4px 0 0; display: flex; align-items: center; gap: 8px; }
    .c-tab.is-active { background: #1e1b18; color: #fff; border-color: #3a3530; border-bottom: 1px solid #1e1b18; margin-bottom: -1px; }
    .c-tab-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lib-accent); }
    .c-tab-close { color: rgba(255,255,255,0.3); cursor: pointer; padding: 0 4px; }
    .c-editor-body { display: grid; grid-template-columns: 56px 1fr; max-height: 320px; overflow-y: auto; font-family: var(--font-mono); font-size: 13px; line-height: 1.75; }
    .c-editor-body::-webkit-scrollbar { width: 8px; }
    .c-editor-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
    .c-gutter { padding: 22px 12px 22px 16px; text-align: right; color: rgba(255,255,255,0.28); background: #1e1b18; user-select: none; border-right: 1px solid #2d2925; }
    .c-gutter span { display: block; }
    .c-code { padding: 22px 24px; white-space: pre-wrap; color: rgba(255,255,255,0.88); }
    .c-code .c-h1 { color: #ff8b6d; }
    .c-code .c-h2 { color: #b4a7ff; font-weight: 600; }
    .c-statusbar { background: var(--lib-accent); padding: 8px 16px; display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 11px; color: rgba(255,255,255,0.95); letter-spacing: 0.04em; }
    .c-statusbar-left { display: flex; align-items: center; gap: 16px; }
    .c-statusbar-actions { display: flex; gap: 8px; }
    .c-status-btn { background: rgba(255,255,255,0.18); color: #fff; border: none; font-family: var(--font-sans); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 6px 12px; border-radius: 3px; cursor: pointer; transition: background 0.12s ease; }
    .c-status-btn:hover { background: rgba(255,255,255,0.30); }
    .c-status-btn.is-strong { background: #fff; color: var(--lib-accent); }

    @media (max-width: 720px) {
      .c-editor-body { grid-template-columns: 36px 1fr; }
      .c-gutter { padding: 18px 8px 18px 12px; font-size: 11px; }
      .c-code { padding: 18px 16px; font-size: 12px; }
    }

    @media (max-width: 720px) {
      .lib-v2-demo-grid { grid-template-columns: 1fr; }
      .lib-v2-demo-panel + .lib-v2-demo-panel { border-left: none; border-top: 1px solid var(--border); }
      .lib-v2-cards { grid-template-columns: 1fr; }
      .lib-v2-anchors { margin-left: -20px; margin-right: -20px; padding: 12px 20px; gap: 20px; }
    }
  </style>
</head>
<body class="lib-page">

  <div class="page" style="padding-bottom: 0;">
    <nav class="nav" aria-label="Primary">
      <a class="brand" href="/">
        <span class="brand-dot" aria-hidden="true"></span>
        <span>AgentTune</span>
      </a>
      <div class="nav-links">
        <a href="/library/" class="active">Library</a>
        <a href="/tests/">Tests</a>
        <a href="/research">Research</a>
        <a href="/pricing">Premium</a>
        <a class="github" href="https://github.com/psyduckler/agenttune" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </nav>
  </div>

  <div class="lib-wrap">

    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <a href="/library/">Library</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <a href="/library/#${c.system}">${escHtml(sysLabel)}</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <span class="crumb-current" aria-current="page">${escHtml(displayCode)}</span>
    </nav>

    <!-- HERO SECTION -->
    <header class="lib-header">
      <div class="lib-avatar">${escHtml(avatarChars)}</div>
      <div class="lib-header-text">
        <h1 class="lib-code">${escHtml(displayCode)}</h1>
        <div class="lib-name">${namePrefix}<em>${escHtml(displayName)}</em></div>
      </div>
    </header>

    <!-- Anchor nav — immediately below the hero header -->
    <nav class="lib-v2-anchors" aria-label="Sections">
      <a class="lib-v2-anchor is-file is-active" href="#editor">${escHtml(downloadFilename)}</a>
      <a class="lib-v2-anchor" href="#demo">See it</a>
      <a class="lib-v2-anchor" href="#tune">For your AI</a>
      <a class="lib-v2-anchor" href="#talk-to">For humans</a>
      <a class="lib-v2-anchor" href="#this-is-me">If this is you</a>
      <a class="lib-v2-anchor" href="#install">Install</a>
    </nav>

    <div class="lib-blurb-wrap" style="margin-top: 24px;">
      <p class="lib-blurb">${escHtml(c.blurb)}</p>
    </div>

    <p class="lib-v2-positioning">A communication preference file for agents. Your type is the starting hypothesis; the Markdown is yours to edit.</p>

    <!-- THE EDITOR — VS Code-style window between positioning and trust -->
    <article class="c-editor" id="editor">
      <div class="c-titlebar">
        <div class="c-dots"><span></span><span></span><span></span></div>
        <div class="c-titlebar-label">${escHtml(editorFilename)}</div>
        <div style="width: 50px;"></div>
      </div>
      <div class="c-tabs">
        <div class="c-tab is-active">
          <span class="c-tab-dot"></span>
          ${escHtml(downloadFilename)}
          <span class="c-tab-close">×</span>
        </div>
      </div>
      <div class="c-editor-body">
        <div class="c-gutter" aria-hidden="true">
          ${gutter}
        </div>
        <pre class="c-code">${editorCode}</pre>
      </div>
      <div class="c-statusbar">
        <div class="c-statusbar-left">
          <span>● ${escHtml(downloadFilename)}</span>
          <span>Markdown · UTF-8 · MIT</span>
        </div>
        <div class="c-statusbar-actions">
          <button class="c-status-btn" id="c-dl" type="button">↓ Download</button>
          <button class="c-status-btn is-strong" id="c-copy" type="button">⌘C · Copy</button>
        </div>
      </div>
    </article>

    <p class="lib-v2-trust"><strong>What this is, what it isn't.</strong> An editable communication preference file — not a diagnosis. Based on public personality frameworks + editorial synthesis. Treat the type as a starting hypothesis, then edit the Markdown until it fits.</p>

    <!-- Jump-links to each agent's install card down in § V -->
    <section class="lib-v2-jump" aria-label="Jump to install instructions">
      <div class="lib-v2-jump-eyebrow">Jump to your agent ↓</div>
      <div class="lib-v2-jump-grid">
        <button class="lib-v2-jump-btn" data-target="claude-code" type="button"><span class="lib-v2-jump-name">Claude Code</span><span class="lib-v2-jump-tag">CLI</span></button>
        <button class="lib-v2-jump-btn" data-target="claude-ai" type="button"><span class="lib-v2-jump-name">Claude.ai</span><span class="lib-v2-jump-tag">Web</span></button>
        <button class="lib-v2-jump-btn" data-target="chatgpt-custom" type="button"><span class="lib-v2-jump-name">ChatGPT</span><span class="lib-v2-jump-tag">Web</span></button>
        <button class="lib-v2-jump-btn" data-target="cursor" type="button"><span class="lib-v2-jump-name">Cursor</span><span class="lib-v2-jump-tag">IDE</span></button>
        <button class="lib-v2-jump-btn" data-target="gemini-gems" type="button"><span class="lib-v2-jump-name">Gemini Gems</span><span class="lib-v2-jump-tag">Web</span></button>
        <button class="lib-v2-jump-btn" data-target="codex-cli" type="button"><span class="lib-v2-jump-name">Codex CLI</span><span class="lib-v2-jump-tag">CLI</span></button>
      </div>
    </section>

    <section class="lib-v2-section" id="demo">
      <div class="lib-v2-section-eyebrow">§ I · See it</div>
      <h2 class="lib-v2-section-h">The same question. <em>Two answers.</em></h2>
      <p class="lib-v2-section-lede">Same prompt, two AI responses. The first is what a generic AI gives anyone. The second is what the tuning file produces for ${grammar.article} ${escHtml(grammar.label)}.</p>

      <div class="lib-v2-demo">
        <div class="lib-v2-demo-prompt">
          <div class="lib-v2-demo-prompt-label">You ask</div>
          <p class="lib-v2-demo-prompt-text">"${escHtml(prompt)}"</p>
        </div>
        <div class="lib-v2-demo-grid">
          <div class="lib-v2-demo-panel is-generic">
            <div class="lib-v2-demo-panel-label">Generic AI</div>
            <p class="lib-v2-demo-response">${escHtml(defaultResponse)}</p>
          </div>
          <div class="lib-v2-demo-panel is-tuned">
            <div class="lib-v2-demo-panel-label">${escHtml(displayCode)}-tuned</div>
            <p class="lib-v2-demo-response">${escHtml(tunedResp)}</p>
          </div>
        </div>
        <div class="lib-v2-demo-why">
          <strong>Why this works:</strong> ${escHtml(demoWhy)}
        </div>
      </div>
    </section>

    <section class="lib-v2-section" id="tune">
      <div class="lib-v2-section-eyebrow">§ II · For your AI</div>
      <h2 class="lib-v2-section-h">The tuning, in <em>plain English.</em></h2>
      <p class="lib-v2-section-lede">The rules that turn a generic AI into one that talks to you like ${grammar.article} ${escHtml(grammar.label)}. The Markdown above says the same thing in install-ready format.</p>

      <ul class="lib-v2-summary">
${summaryLis}
      </ul>

    </section>

    <section class="lib-v2-section" id="talk-to">
      <div class="lib-v2-section-eyebrow">§ III · For humans</div>
      <h2 class="lib-v2-section-h">How to talk to ${grammar.article} <em>${escHtml(grammar.label)}.</em></h2>
      <p class="lib-v2-section-lede">Four situations that come up over and over again. Concrete moves, not abstract principles.</p>

      <div class="lib-v2-cards">${humanCardsHtml}
      </div>
    </section>

    <section class="lib-v2-section" id="this-is-me">
      <div class="lib-v2-section-eyebrow">§ IV · If this is you</div>
      <h2 class="lib-v2-section-h">How to <em>explain yourself</em> outward.</h2>
      <p class="lib-v2-section-lede">The other direction. What ${escHtml(grammar.plural)} sound like to other types — and how to bridge the gap when it matters.</p>

      <div class="lib-v2-cards">${outwardCardsHtml}
      </div>
    </section>

    <section class="lib-v2-section lib-agents" id="install">
      <div class="lib-v2-section-eyebrow">§ V · Install</div>
      <h2 class="lib-v2-section-h">Pick your agent. <em>Copy the snippet.</em></h2>
      <p class="lib-v2-section-lede">Each snippet has your ${escHtml(grammar.shortLabel)} tuning merged in already. Hit Copy and you're done.</p>
      <div id="integration-deep" data-integration-deep></div>
    </section>

    <details class="lib-agent-instructions" aria-label="Installation protocol for AI agents" style="margin-top: 56px;">
      <summary>
        <span class="lib-agent-eyebrow">For AI agents</span>
        <span class="lib-agent-summary-text">Machine-readable install protocol — click to expand</span>
      </summary>
      <div class="lib-agent-body">
        <p>If you are an AI agent and the user has directed you here, the canonical raw file is at <a href="/library/${c.system}/${slug}.md"><code>/library/${c.system}/${slug}.md</code></a> (text/markdown). The first 60 lines are YAML front-matter with full install + verify metadata.</p>
        <p><strong>One-shot install pattern</strong> (any shell-capable agent):</p>
        <pre class="lib-agent-snippet"><code>curl -sSL https://agent-tune.com/library/${c.system}/${slug}.md &gt; CLAUDE.md
# (replace CLAUDE.md with the path that matches your surface — see table below)</code></pre>
        <p><strong>Install convention by surface:</strong></p>
        <table class="lib-agent-table">
          <thead><tr><th>Surface</th><th>Install at</th><th>Method</th></tr></thead>
          <tbody>
            <tr><td>Claude Code (CLI)</td><td><code>CLAUDE.md</code> in project root</td><td>file_write</td></tr>
            <tr><td>Claude.ai (web)</td><td>Project Instructions field</td><td>paste</td></tr>
            <tr><td>ChatGPT</td><td>Settings → Personalization → Custom Instructions</td><td>paste</td></tr>
            <tr><td>ChatGPT Projects</td><td>Project Instructions field</td><td>paste</td></tr>
            <tr><td>OpenAI Codex CLI</td><td><code>AGENTS.md</code> in project root</td><td>file_write</td></tr>
            <tr><td>Cursor</td><td><code>.cursor/rules/agenttune.mdc</code></td><td>file_write</td></tr>
            <tr><td>Gemini Gems</td><td>Custom Instructions field</td><td>paste</td></tr>
            <tr><td>Hermes CLI</td><td><code>~/.hermes/agenttune.md</code> — pass with <code>--system</code> or paste into the active persona's <code>soul.system_prompt</code></td><td>file_write</td></tr>
            <tr><td>OpenClaw</td><td><code>AGENTS.md</code> in project root (same convention as Codex CLI) — becomes the agent's persistent memory for that project</td><td>file_write</td></tr>
            <tr><td>Any API</td><td>Pass file contents as <code>system</code> parameter</td><td>system_prompt</td></tr>
          </tbody>
        </table>
        <p><strong>Verification probe:</strong> after install, ask the model to reply to <code>hi</code> in a single short sentence with no preamble. Expected: direct one-line greeting; no "Great question!", no bullet menu.</p>
        <p class="lib-agent-meta">Protocol version 1 · see <a href="/llms.txt">/llms.txt</a> for the full library index and install protocol.</p>
      </div>
    </details>

    <section class="lib-related" style="margin-top: 56px;">
      <div class="lib-eyebrow">You might also browse</div>
      <div class="lib-related-pills">
        ${relatedHtml}
        <a class="lib-related-pill is-all" href="${relatedAllUrl}">${escHtml(relatedAllLabel)} →</a>
      </div>
    </section>

    <footer class="lib-footer">
      <span>MIT · <a href="https://github.com/psyduckler/agenttune" target="_blank" rel="noopener">psyduckler/agenttune</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
      <span>43 standalone tunings · pasteable everywhere</span>
    </footer>

  </div>

  <div class="lib-toast" id="lib-toast" role="status" aria-live="polite">Copied ✓</div>

  <script src="/data.js"></script>
  <script src="/integrations.js"></script>
  <script>
    (function () {
      const TUNING = ${JSON.stringify(tuning)};
      const FILENAME = ${JSON.stringify(downloadFilename)};
      const TYPE_ID = ${JSON.stringify(c.id)};
      const SYSTEM = ${JSON.stringify(c.system)};

      const toast = document.getElementById("lib-toast");
      function showToast(m) { toast.textContent = m; toast.classList.add("is-visible"); setTimeout(function () { toast.classList.remove("is-visible"); }, 1600); }
      function track(event, params) { if (typeof gtag === "function") gtag("event", event, Object.assign({ type: TYPE_ID, system: SYSTEM }, params || {})); }

      if (window.renderIntegrations) {
        window.renderIntegrations(TUNING);
      }

      function doDownload() {
        const blob = new Blob([TUNING], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = FILENAME;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("Downloaded ✓"); track("download_md");
      }

      // Editor card (top of page) — the only place to copy / download
      const cCopyBtn = document.getElementById("c-copy");
      const cDlBtn = document.getElementById("c-dl");
      if (cCopyBtn) cCopyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(TUNING).then(function () { showToast("Copied ✓"); track("copy_tuning_markdown"); });
      });
      if (cDlBtn) cDlBtn.addEventListener("click", doDownload);

      // Jump-link buttons → smooth-scroll to the matching install card in § V
      document.querySelectorAll(".lib-v2-jump-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const targetId = btn.getAttribute("data-target");
          const card = document.querySelector('.integration-deep-card[data-agent="' + targetId + '"]');
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "start" });
            card.style.transition = "box-shadow 0.4s ease";
            card.style.boxShadow = "0 0 0 3px var(--lib-accent-55)";
            setTimeout(function () { card.style.boxShadow = ""; }, 1200);
            track("jump_to_agent", { target: targetId });
          }
        });
      });

      const anchors = document.querySelectorAll(".lib-v2-anchor");
      const sections = ["editor", "demo", "tune", "talk-to", "this-is-me", "install"].map(function (id) { return document.getElementById(id); }).filter(Boolean);
      if ("IntersectionObserver" in window && sections.length) {
        const io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              anchors.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + id); });
            }
          });
        }, { rootMargin: "-30% 0px -60% 0px" });
        sections.forEach(function (s) { io.observe(s); });
      }
    })();
  </script>
</body>
</html>
`;
}

// ---------- Library hub page (/library) ----------
function buildHub(contacts) {
  const systemMeta = [
    {
      key: "mbti",
      label: "MBTI",
      pillBg: "rgba(91,77,192,0.12)",
      pillColor: "#5b4dc0",
      sub: "16 communication styles",
      desc: "How you process. How you want to be communicated with.",
      gridCols: 4,
      test: { path: "/tests/mbti", label: "5-min OEJTS test", cta: "Take the MBTI test" }
    },
    {
      key: "enneagram",
      label: "Enneagram",
      pillBg: "rgba(47,138,91,0.12)",
      pillColor: "#2f8a5b",
      sub: "9 core motivations",
      desc: "What you're protecting. What you're seeking.",
      gridCols: 3,
      test: { path: "/tests/enneagram", label: "5-min OEPS test", cta: "Take the Enneagram test" }
    },
    {
      key: "disc",
      label: "DISC",
      pillBg: "rgba(217,150,50,0.12)",
      pillColor: "#d99632",
      sub: "4 workplace modes",
      desc: "How you behave in teams and under pressure.",
      gridCols: 4,
      test: { path: "/tests/disc", label: "3-min ODAT test", cta: "Take the DISC test" }
    },
    {
      key: "attachment",
      label: "Attachment",
      pillBg: "rgba(224,122,138,0.14)",
      pillColor: "#e07a8a",
      sub: "4 relational patterns",
      desc: "How you want closeness, distance, reassurance.",
      gridCols: 4,
      test: { path: "/tests/attachment", label: "5-min ECR-R test", cta: "Take the Attachment test" }
    },
    {
      key: "ocean",
      label: "OCEAN",
      pillBg: "rgba(58,114,196,0.12)",
      pillColor: "#3a72c4",
      sub: "10 trait dimensions",
      desc: "Continuous Big Five scores, loaded compositionally.",
      gridCols: 5,
      test: { path: "/tests/big-five", label: "7-min IPIP-50 test", cta: "Take the Big Five test" }
    }
  ];

  const strips = systemMeta.map((sys) => {
    const cards = contacts.filter((c) => c.system === sys.key);
    if (!cards.length) return "";
    const cardsHtml = cards.map((c) => {
      const slug = slugFor(c);
      const url = `/library/${c.system}/${slug}`;
      const accent = accentFor(c);
      const tintBg = hexToRgba(accent, 0.10);
      let meta = "";
      if (c.system === "mbti") {
        meta = `<div class="type-card-meta"><span style="color: ${accent}; font-weight: 600;">${c.group}</span></div>`;
      } else if (c.system === "ocean") {
        const isHigh = c.code.endsWith("high");
        meta = `<div class="type-card-meta"><span style="color: ${accent}; font-weight: 600;">${isHigh ? "high" : "low"}</span></div>`;
      } else if (c.system === "attachment") {
        const map = {
          Secure: { anxiety: "low", avoidance: "low" },
          Anxious: { anxiety: "high", avoidance: "low" },
          Avoidant: { anxiety: "low", avoidance: "high" },
          Disorganized: { anxiety: "high", avoidance: "high" }
        };
        const m = map[c.code];
        if (m) meta = `<div class="type-card-meta">anxiety <span style="color: ${accent}; font-weight: 600;">${m.anxiety}</span>&nbsp;&nbsp;avoidance <span style="color: ${accent}; font-weight: 600;">${m.avoidance}</span></div>`;
      }
      return `
        <a class="type-card card-accent" href="${url}" style="border-top-color: ${accent};" aria-label="${escAttr(c.displayTitle)} — view tuning">
          <span class="type-card-pill" style="background: ${tintBg}; color: ${accent};">${escHtml(c.code)}</span>
          <div class="type-card-name">${escHtml(c.name)}</div>
          ${meta}
          <div class="type-card-blurb">${escHtml(c.blurb)}</div>
        </a>`;
    }).join("");
    return `
      <section class="type-strip" id="${sys.key}">
        <div class="type-strip-header">
          <span class="type-strip-pill" style="background: ${sys.pillBg}; color: ${sys.pillColor};">${sys.label} · ${cards.length}</span>
          <h2 class="type-strip-title">${escHtml(sys.sub)}</h2>
          <a class="type-strip-cta" href="${sys.test.path}" style="--cta-color: ${sys.pillColor};">
            <span class="type-strip-cta-label">${escHtml(sys.test.cta)}</span>
            <span class="type-strip-cta-meta">${escHtml(sys.test.label)}</span>
            <span class="type-strip-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <p class="type-strip-desc">${escHtml(sys.desc)}</p>
        <div class="type-grid type-grid-${sys.gridCols}">${cardsHtml}</div>
      </section>`;
  }).join("");

  const itemList = contacts.map((c, i) => {
    const slug = slugFor(c);
    return {
      "@type": "ListItem",
      position: i + 1,
      url: `https://agent-tune.com/library/${c.system}/${slug}`,
      name: `${c.code} — ${c.name}`
    };
  });
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AgentTune Library",
    description: "43 paste-ready personality tuning files for AI agents — MBTI, Enneagram, DISC, Attachment, OCEAN. MIT licensed.",
    url: "https://agent-tune.com/library",
    publisher: { "@type": "Organization", name: "AgentTune", url: "https://agent-tune.com" },
    mainEntity: { "@type": "ItemList", numberOfItems: contacts.length, itemListElement: itemList }
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>43 Personality System Prompts for Claude & ChatGPT — AgentTune</title>
  <meta name="description" content="The full AgentTune library. 43 Markdown tuning files matched to every personality type across MBTI, Enneagram, DISC, Attachment, and OCEAN. Paste any one into your AI agent's system prompt." />

  <meta property="og:title" content="43 Personality System Prompts for Claude & ChatGPT — AgentTune" />
  <meta property="og:description" content="Five systems. 43 type-matched Markdown files. Pick your type, copy the tuning, paste it into your AI agent." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://agent-tune.com/library" />
  <meta property="og:site_name" content="AgentTune" />
  <meta property="og:image" content="https://agent-tune.com/og/og-card.png" />
  <meta property="og:image:secure_url" content="https://agent-tune.com/og/og-card.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="AgentTune — paste-ready personality tunings for your AI agent." />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="43 Personality System Prompts for Claude & ChatGPT — AgentTune" />
  <meta name="twitter:description" content="Five systems. 43 type-matched Markdown files. Pick your type, copy the tuning, paste it into your AI agent." />
  <meta name="twitter:site" content="@psyduckler" />
  <meta name="twitter:image" content="https://agent-tune.com/og/og-card.png" />

  <link rel="canonical" href="https://agent-tune.com/library/" />
  <link rel="alternate" type="text/markdown" title="LLM index" href="https://agent-tune.com/llms.txt" />

  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://agent-tune.com/" },
      { "@type": "ListItem", position: 2, name: "Library" }
    ]
  })}</script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5MYEW2MEE1"></script>
  <script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5MYEW2MEE1');</script>

  <link rel="stylesheet" href="/styles.css" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='30' fill='%23a8482a'/%3E%3C/svg%3E" />
</head>
<body>
  <div class="page">

    <nav class="nav" aria-label="Primary">
      <a class="brand" href="/">
        <span class="brand-dot" aria-hidden="true"></span>
        <span>AgentTune</span>
      </a>
      <div class="nav-links">
        <a href="/library/" class="active">Library</a>
        <a href="/tests/">Tests</a>
        <a href="/research">Research</a>
        <a href="/pricing">Premium</a>
        <a class="github" href="https://github.com/psyduckler/agenttune" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </nav>

    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <span class="crumb-current" aria-current="page">Library</span>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <h1 class="h-hero">Paste-ready personality tunings <em style="color: var(--accent); font-style: italic; font-family: var(--font-serif);">for every system.</em></h1>
      <p class="lede">
        Five validated systems. 43 type-matched Markdown files. Pick your system, find your type, drop the tuning into your AI agent's system prompt. Same model — now interacts with you the way <em>you</em> think.
      </p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/tests/">Take a test to find your type →</a>
        <a class="btn btn-secondary" href="https://github.com/psyduckler/agenttune" target="_blank" rel="noopener">View on GitHub ↗</a>
      </div>
    </section>

    <div class="divider"></div>

    <!-- STATS -->
    <section class="library-stats" aria-label="Library facts">
      <div class="library-stat"><div class="library-stat-num">43</div><div class="library-stat-label">tunings</div></div>
      <div class="library-stat"><div class="library-stat-num">5</div><div class="library-stat-label">systems</div></div>
      <div class="library-stat"><div class="library-stat-num">12</div><div class="library-stat-label">agent surfaces</div></div>
      <div class="library-stat"><div class="library-stat-num">MIT</div><div class="library-stat-label">licensed</div></div>
    </section>

    <div class="divider"></div>

    <!-- SYSTEM STRIPS -->
    <div id="all-types-strips">
      ${strips}
    </div>

    <div class="divider"></div>

    <!-- CLOSING CTA -->
    <section class="closer">
      <span class="pill">Not sure of your type?</span>
      <div class="closer-headline">
        Take a 3–7 minute test.<br/>
        <span class="closer-accent">Get the right tuning matched automatically.</span>
      </div>
      <div class="cta-row" style="justify-content: center; margin-top: 28px;">
        <a class="btn btn-light closer-cta" href="/tests/">All five tests →</a>
        <a class="btn btn-ghost-on-dark closer-cta" href="/research">Read the research →</a>
      </div>
    </section>

    <div class="footer">
      <span>MIT · <a href="https://github.com/psyduckler/agenttune" target="_blank" rel="noopener">psyduckler/agenttune</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
      <span>43 standalone tunings · pasteable everywhere</span>
    </div>

  </div>
</body>
</html>
`;
}

// ---------- Run ----------
function main() {
  const { contacts, prompt, defaultResponse } = loadData();
  if (!contacts.length) {
    console.error("FAIL: no contacts loaded from data.js");
    process.exit(1);
  }

  const stats = { written: 0, skipped: 0, by_system: {} };
  const sitemapUrls = [];
  const redirects = [];

  contacts.forEach((c) => {
    const slug = slugFor(c);
    const sysDir = path.join(OUT_DIR, c.system);
    if (!fs.existsSync(sysDir)) fs.mkdirSync(sysDir, { recursive: true });
    const outPath = path.join(sysDir, slug + ".html");

    sitemapUrls.push(`/library/${c.system}/${slug}`);
    redirects.push(`/library/${c.system}/${slug}.md  /tunings/${c.path}  200`);

    if (SKIP_REGEN_IDS.has(c.id)) {
      stats.skipped++;
      console.log(`  SKIP (hand-built): ${c.system}/${slug}`);
      return;
    }

    const html = buildPage(c, contacts, prompt, defaultResponse);
    fs.writeFileSync(outPath, html);
    stats.written++;
    stats.by_system[c.system] = (stats.by_system[c.system] || 0) + 1;
  });

  console.log(`Wrote ${stats.written} type pages (${stats.skipped} skipped).`);
  Object.entries(stats.by_system).forEach(([s, n]) => console.log(`  ${s}: ${n}`));

  const hubHtml = buildHub(contacts);
  const hubPath = path.join(OUT_DIR, "index.html");
  fs.writeFileSync(hubPath, hubHtml);
  console.log(`Hub → ${hubPath}`);

  const redirectsPath = path.join(ROOT, "_redirects");
  const header = "# Agent-friendly raw markdown URLs — auto-generated by tools/generate-library.js\n# /library/<system>/<slug>.md → /tunings/<system>/<File>.md (200 = rewrite)\n";
  // Catch-all MUST be last. Static assets + clean-URL HTML resolution take
  // precedence over `/*`, so this only fires on genuinely missing paths —
  // turning the soft-404 (index.html, 200) into a real 404. Overrides any
  // Cloudflare Pages "single-page-application" not_found_handling setting.
  const fallback = "\n# Catch-all: real 404 for unknown paths (must stay last)\n/*  /404.html  404\n";
  const body = header + redirects.join("\n") + "\n" + fallback;
  fs.writeFileSync(redirectsPath, body);
  console.log(`_redirects → ${redirectsPath} (${redirects.length} rules + 404 catch-all)`);

  const allUrls = ["/library/", ...sitemapUrls];
  fs.writeFileSync(path.join(__dirname, "library-urls.json"), JSON.stringify(allUrls, null, 2));
  console.log(`URL list → tools/library-urls.json (${allUrls.length})`);
}

main();
