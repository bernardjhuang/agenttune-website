#!/usr/bin/env node
/* Test-spec generator.
 *
 * Single source of truth: the `const ITEMS = [...]` array embedded in each
 * tests/<name>.html. From it this script:
 *
 *   1. Writes tests/<name>.md — a same-domain, no-JS Markdown mirror of the
 *      full instrument spec (items + scoring + output mapping) so an AI agent
 *      can fetch it directly instead of executing the page's JS or hitting
 *      GitHub. Parallels the /tunings/*.md mirror.
 *   2. Server-renders the spec items table into the page's
 *      <tbody id="quiz-spec-items"> (the page JS still overwrites it for JS
 *      users — idempotent — but crawlers/agents now see it in the raw HTML).
 *   3. Adds a static link to the .md mirror inside the spec <details>.
 *   4. Collapses the two-line hero into a single <h1> (the italic second line
 *      becomes a <div>) for a clean document outline.
 *   5. Refreshes the auto-generated test-items block in llms-full.txt.
 *
 * Run:  node tools/generate-test-specs.js
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TESTS_DIR = path.join(ROOT, "tests");
const LLMS_FULL = path.join(ROOT, "llms-full.txt");

const ENNEA_NAMES = { 1: "Reformer", 2: "Helper", 3: "Achiever", 4: "Individualist", 5: "Investigator", 6: "Loyalist", 7: "Enthusiast", 8: "Challenger", 9: "Peacemaker" };
const ENNEA_SLUG = { 1: "1-reformer", 2: "2-helper", 3: "3-achiever", 4: "4-individualist", 5: "5-investigator", 6: "6-loyalist", 7: "7-enthusiast", 8: "8-challenger", 9: "9-peacemaker" };
const DISC_NAMES = { D: "Dominance", I: "Influence", S: "Steadiness", C: "Conscientiousness" };
const OCEAN_NORMS = {
  O: { M: 37.5, SD: 5.5, name: "Openness" },
  C: { M: 34.5, SD: 6.0, name: "Conscientiousness" },
  E: { M: 28.5, SD: 7.0, name: "Extraversion" },
  A: { M: 36.5, SD: 5.5, name: "Agreeableness" },
  N: { M: 26.0, SD: 7.0, name: "Neuroticism" },
};

function extractItems(html) {
  const m = html.match(/const ITEMS\s*=\s*(\[[\s\S]*?\]);/);
  if (!m) throw new Error("ITEMS array not found");
  // eslint-disable-next-line no-eval
  return eval(m[1]);
}

const mdCell = (s) => String(s).replace(/\|/g, "\\|").replace(/\n+/g, " ").trim();
const escHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- per-test renderers: { md(items), rows(items) } ---------- */
const TESTS = {
  mbti: {
    md(items) {
      const rows = items.map((it, i) => `| ${i + 1} | ${mdCell(it.first)} | ${mdCell(it.second)} | ${it.axis.split("").join("/")} | ${it.low} | ${it.high} |`).join("\n");
      return `# MBTI test — OEJTS (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/mbti. An AI agent can administer this inline without rendering the page.

- **Instrument:** Open Extended Jungian Type Scales (OEJTS)
- **Items:** 32 bipolar, ~5 minutes
- **Scale:** each item is a choice between two statements rated 1–5 (1 = strongly the first statement, 3 = neutral, 5 = strongly the second)
- **Returns:** one of 16 four-letter MBTI types
- **Source:** OEJTS, Eric Jorgenson, via the Open Psychometrics Project (openpsychometrics.org/tests/OEJTS/) — free for educational use
- **Output:** fetch \`https://agent-tune.com/tunings/mbti/<TYPE>.md\` (e.g. INTJ → \`tunings/mbti/INTJ.md\`) or the human page \`/library/mbti/<type-lowercase>\`

## The 32 items

The last two columns show which letter a response awards: a "1" (first statement) awards the **←1** letter; a "5" (second statement) awards the **5→** letter.

| # | First statement | Second statement | Axis | ←1 | 5→ |
|---|---|---|---|---|---|
${rows}

## Scoring algorithm

1. For each axis (E/I, S/N, T/F, J/P), start both letters at 0.
2. For each of that axis's 8 items, score the response: 1 → +2 to the **←1** letter; 2 → +1 to it; 3 → 0 (neutral); 4 → +1 to the **5→** letter; 5 → +2 to it.
3. The higher total wins the letter. On a tie, default to **I, N, T, J** (more common in adults).
4. Concatenate the winners in order E/I, S/N, T/F, J/P → the 4-letter type.
`;
    },
    rows(items) {
      return items.map((it, i) => `          <tr><td class="num-col">${i + 1}</td><td>${escHtml(it.first)}</td><td>${escHtml(it.second)}</td></tr>`).join("\n");
    },
  },

  enneagram: {
    md(items) {
      const rows = items.map((it, i) => `| ${i + 1} | ${mdCell(it.text)} | ${it.type} — ${ENNEA_NAMES[it.type]} |`).join("\n");
      return `# Enneagram test — OEPS (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/enneagram. An AI agent can administer this inline without rendering the page.

- **Instrument:** Open Enneagram of Personality Scales (OEPS)
- **Items:** 36 Likert, ~5 minutes, no reverse-scored items
- **Scale:** 1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree
- **Returns:** dominant type 1–9 (+ optional wing)
- **Output:** fetch \`https://agent-tune.com/tunings/enneagram/<N>-<name>.md\` or the human page \`/library/enneagram/<N>-<name>\`

## The 36 items

Four items per type, in type order (items 1–4 → Type 1, 5–8 → Type 2, … 33–36 → Type 9).

| # | Statement | Type |
|---|---|---|
${rows}

## Scoring algorithm

1. For each type 1–9, sum the user's raw 1–5 responses to that type's four items (range 4–20). No reverse-scoring.
2. The highest total is the **dominant type**.
3. The higher-scoring of the two adjacent types (the wings) is the optional **wing**.
4. Resolve the slug from the dominant type (e.g. 5 → \`5-investigator\`).
`;
    },
    rows(items) {
      return items.map((it, i) => `          <tr><td class="num-col">${i + 1}</td><td>${escHtml(it.text)}</td><td class="num-col">${it.type}</td></tr>`).join("\n");
    },
  },

  disc: {
    md(items) {
      const rows = items.map((it, i) => `| ${i + 1} | ${mdCell(it.text)} | ${it.type} — ${DISC_NAMES[it.type]} |`).join("\n");
      return `# DISC test — ODAT (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/disc. An AI agent can administer this inline without rendering the page.

- **Instrument:** Open DISC Assessment Test (ODAT)
- **Items:** 16 Likert, ~3 minutes (the fastest in the library), no reverse-scored items
- **Scale:** 1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree
- **Returns:** dominant letter D / I / S / C (+ optional blend such as DI or CS)
- **Output:** fetch \`https://agent-tune.com/tunings/disc/<L>-<name>.md\` or the human page \`/library/disc/<l>-<name>\`

## The 16 items

Four items per letter, in letter order (items 1–4 → D, 5–8 → I, 9–12 → S, 13–16 → C).

| # | Statement | Letter |
|---|---|---|
${rows}

## Scoring algorithm

1. For each letter D/I/S/C, sum the user's raw 1–5 responses to that letter's four items (range 4–20). No reverse-scoring.
2. The highest total is the **dominant** letter.
3. If a second letter is within a few points, report it as a **blend** (e.g. DI, CS).
`;
    },
    rows(items) {
      return items.map((it, i) => `          <tr><td class="num-col">${i + 1}</td><td>${escHtml(it.text)}</td><td class="num-col">${it.type}</td></tr>`).join("\n");
    },
  },

  attachment: {
    md(items) {
      const sub = (s) => (s === "anx" ? "Anxiety" : "Avoidance");
      const rows = items.map((it, i) => `| ${i + 1} | ${mdCell(it.text)} | ${sub(it.sub)} | ${it.rev ? "✓" : "—"} |`).join("\n");
      return `# Attachment test — ECR-R (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/attachment. An AI agent can administer this inline without rendering the page.

- **Instrument:** Experiences in Close Relationships – Revised (ECR-R)
- **Items:** 36, ~5 minutes, **1–7 Likert** (1 = Strongly Disagree, 4 = Neutral, 7 = Strongly Agree)
- **Reverse-scored:** 14 items (marked ✓ below) — compute \`scored = 8 − raw\`
- **Subscales:** items 1–18 = anxiety, items 19–36 = avoidance
- **Returns:** Secure / Anxious / Avoidant / Disorganized
- **Output:** fetch \`https://agent-tune.com/tunings/attachment/<style>.md\` or the human page \`/library/attachment/<style>\`
- **Note:** items reference a romantic partner; for users without one, adapt to "closest current relationship."

## The 36 items

| # | Statement | Subscale | Reverse? |
|---|---|---|---|
${rows}

## Scoring algorithm

1. For each reverse-scored item (✓), compute \`scored = 8 − raw\`; otherwise \`scored = raw\`.
2. **Anxiety** = mean of the scored anxiety items (1–18). **Avoidance** = mean of the scored avoidance items (19–36). Both land on 1–7.
3. Split each subscale at the midpoint (4): low anxiety + low avoidance = **Secure**; high anxiety + low avoidance = **Anxious**; low anxiety + high avoidance = **Avoidant**; high anxiety + high avoidance = **Disorganized**.
`;
    },
    rows(items) {
      const sub = (s) => (s === "anx" ? "Anxiety" : "Avoidance");
      return items.map((it, i) => `          <tr><td class="num-col">${i + 1}</td><td>${escHtml(it.text)}</td><td class="num-col">${sub(it.sub)}</td><td class="num-col">${it.rev ? "✓" : "—"}</td></tr>`).join("\n");
    },
  },

  "big-five": {
    md(items) {
      const rows = items.map((it, i) => `| ${i + 1} | ${mdCell(it.text)} | ${it.dim} | ${it.rev ? "✓" : "—"} |`).join("\n");
      const normRows = Object.entries(OCEAN_NORMS).map(([k, v]) => `| ${k} | ${v.name} | ${v.M} | ${v.SD} |`).join("\n");
      return `# Big Five test — IPIP-50 (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/big-five. An AI agent can administer this inline without rendering the page.

- **Instrument:** International Personality Item Pool, 50-item (IPIP-50, Goldberg)
- **Items:** 50, ~7 minutes, 1–5 Likert (1 = Very Inaccurate, 5 = Very Accurate). Each statement carries an implicit leading "I …" (e.g. "Am the life of the party" → "I am the life of the party").
- **Reverse-scored:** 20 items (marked ✓ below) — compute \`scored = 6 − raw\`
- **Returns:** 5 continuous trait scores → \`ocean/<dim>-{high,low}.md\` for every dimension where \`|z| > 0.5\`
- **Output:** fetch \`https://agent-tune.com/tunings/ocean/<L>-{high,low}.md\` or the human page \`/library/ocean/<dimension>-{high,low}\`

## The 50 items

Ten items per OCEAN dimension, interleaved.

| # | Statement (implicit "I…") | Dim | Reverse? |
|---|---|---|---|
${rows}

## Scoring algorithm

1. For each reverse-scored item (✓), compute \`scored = 6 − raw\`; otherwise \`scored = raw\`.
2. Sum the 10 scored items per dimension (range 10–50).
3. Convert to a z-score using the population norms below: \`z = (raw_sum − M) / SD\`.
4. For every dimension with \`z > 0.5\` load the \`-high\` file; with \`z < −0.5\` load the \`-low\` file; otherwise skip it (the model's default handles average dimensions).

### Population norms

| Dim | Name | Mean (M) | SD |
|---|---|---|---|
${normRows}
`;
    },
    rows(items) {
      return items.map((it, i) => `          <tr><td class="num-col">${i + 1}</td><td>${escHtml(it.text)}</td><td class="num-col">${it.dim}</td><td class="num-col">${it.rev ? "✓" : "—"}</td></tr>`).join("\n");
    },
  },
};

const SLUG_TO_NAME = { mbti: "mbti", enneagram: "enneagram", disc: "disc", attachment: "attachment", "big-five": "big-five" };

function patchHtml(htmlPath, slug, items, cfg) {
  let html = fs.readFileSync(htmlPath, "utf8");

  // 2. server-render the items table
  const rows = cfg.rows(items);
  html = html.replace(
    '<tbody id="quiz-spec-items"></tbody>',
    `<tbody id="quiz-spec-items">\n${rows}\n        </tbody>`
  );

  // 3. static link to the .md mirror, right after the spec body opens
  const mirrorNote = `<div class="quiz-spec-body">\n        <p><strong>Machine-readable:</strong> the full spec (all items + scoring) is also served as plain Markdown at <a href="/tests/${slug}.md"><code>/tests/${slug}.md</code></a> — fetch that for a clean, no-JS copy.</p>`;
  if (!html.includes(`/tests/${slug}.md</code>`)) {
    html = html.replace('<div class="quiz-spec-body">', mirrorNote);
  }

  // 4. collapse the two-line hero into a single <h1>
  html = html.replace(
    /<h1(\s+class="h-hero h-research-hero h-hero-italic"[^>]*)>([\s\S]*?)<\/h1>/,
    "<div$1>$2</div>"
  );

  fs.writeFileSync(htmlPath, html);
}

function buildLlmsBlock(allItems) {
  let out = "<!-- BEGIN test-items (auto-generated by tools/generate-test-specs.js — do not edit by hand) -->\n";
  out += "## The 5 tests — full items & scoring (inline)\n\n";
  out += "Every test instrument's complete item list + scoring is also served as a same-domain Markdown mirror (parallel to the `/tunings/*.md` mirror), so you can administer a test in a single fetch without rendering the page:\n\n";
  out += "- https://agent-tune.com/tests/mbti.md\n- https://agent-tune.com/tests/enneagram.md\n- https://agent-tune.com/tests/disc.md\n- https://agent-tune.com/tests/attachment.md\n- https://agent-tune.com/tests/big-five.md\n\n";
  const order = ["mbti", "enneagram", "disc", "attachment", "big-five"];
  for (const slug of order) {
    out += TESTS[slug].md(allItems[slug]).replace(/^# /, "### ").replace(/\n## /g, "\n#### ") + "\n";
  }
  out += "<!-- END test-items -->";
  return out;
}

function patchLlmsFull(allItems) {
  let txt = fs.readFileSync(LLMS_FULL, "utf8");
  const block = buildLlmsBlock(allItems);
  const re = /<!-- BEGIN test-items[\s\S]*?<!-- END test-items -->/;
  if (re.test(txt)) {
    txt = txt.replace(re, block);
  } else {
    // insert before "## Workflow for AI agents", else append
    const anchor = "## Workflow for AI agents";
    if (txt.includes(anchor)) txt = txt.replace(anchor, block + "\n\n" + anchor);
    else txt = txt.trimEnd() + "\n\n" + block + "\n";
  }
  fs.writeFileSync(LLMS_FULL, txt);
}

function main() {
  const allItems = {};
  for (const slug of Object.keys(TESTS)) {
    const htmlPath = path.join(TESTS_DIR, `${slug}.html`);
    const html = fs.readFileSync(htmlPath, "utf8");
    const items = extractItems(html);
    allItems[slug] = items;

    fs.writeFileSync(path.join(TESTS_DIR, `${slug}.md`), TESTS[slug].md(items));
    patchHtml(htmlPath, SLUG_TO_NAME[slug], items, TESTS[slug]);
    console.log(`  ${slug}: ${items.length} items → tests/${slug}.md + patched HTML`);
  }
  patchLlmsFull(allItems);
  console.log("llms-full.txt test-items block refreshed.");
}

main();
