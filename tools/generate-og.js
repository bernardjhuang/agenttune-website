#!/usr/bin/env node
/* Per-type Open Graph image generator.
 *
 * Emits one 1200x630 PNG per tuning type under og/library/<system>/<slug>.png,
 * matching the og:image URLs produced by generate-library.js. Cards are fully
 * templated (system color + type code + name + blurb), so they stay consistent
 * across all 43 types and regenerate deterministically.
 *
 * Requires `rsvg-convert` (librsvg) on PATH.
 *
 * Run:  node tools/generate-og.js
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DATA_JS = path.join(ROOT, "data.js");
const OUT_DIR = path.join(ROOT, "og", "library");

// ---- contact data (shared source of truth with generate-library.js) ----
function loadContacts() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(DATA_JS, "utf8"), sandbox);
  return sandbox.window.AT_CONTACTS || [];
}

const OCEAN_DIM_NAMES = { O: "openness", C: "conscientiousness", E: "extraversion", A: "agreeableness", N: "neuroticism" };
const SYSTEM_ACCENTS = { mbti: "#5b4dc0", enneagram: "#2f8a5b", disc: "#d99632", attachment: null, ocean: null };
const OCEAN_ACCENTS = { O: "#5b4dc0", C: "#3a72c4", E: "#d99632", A: "#2f8a5b", N: "#a8482a" };
const ATTACH_ACCENTS = { Secure: "#2f8a5b", Anxious: "#e07a8a", Avoidant: "#3a72c4", Disorganized: "#7a4ac8" };
const SYSTEM_LABELS = { mbti: "MBTI", enneagram: "Enneagram", disc: "DISC", attachment: "Attachment", ocean: "Big Five · OCEAN" };

function slugFor(c) {
  if (c.system === "mbti") return c.code.toLowerCase();
  const filePart = (c.path || "").split("/").pop().replace(/\.md$/, "");
  if (c.system === "ocean") {
    const [letter, pole] = filePart.split("-");
    return `${OCEAN_DIM_NAMES[letter]}-${pole}`.toLowerCase();
  }
  return filePart.toLowerCase();
}

function accentFor(c) {
  if (c.system === "attachment") return ATTACH_ACCENTS[c.code] || "#a8482a";
  if (c.system === "ocean") return OCEAN_ACCENTS[c.code.split("-")[0]] || "#a8482a";
  return SYSTEM_ACCENTS[c.system] || "#a8482a";
}

function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

// naive word-wrap to <= maxChars per line, capped at maxLines (ellipsis if over)
function wrap(text, maxChars, maxLines) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = "";
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const tentative = cur ? cur + " " + w : w;
    if (tentative.length > maxChars && cur) {
      lines.push(cur);
      cur = w;
      if (lines.length === maxLines) {
        // no room left — truncate remaining onto nothing, mark last line
        lines[maxLines - 1] = lines[maxLines - 1].replace(/[.,;:]?$/, "") + "…";
        cur = "";
        break;
      }
    } else {
      cur = tentative;
    }
  }
  if (cur && lines.length < maxLines) lines.push(cur);
  return lines;
}

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Helvetica, Arial, sans-serif";
const MONO = "'DejaVu Sans Mono', 'Courier New', monospace";

function cardSvg(c) {
  const accent = accentFor(c);
  const slug = slugFor(c);
  const route = `/library/${c.system}/${slug}`;
  const code = c.code;
  const name = c.name;
  const showName = name && name.toLowerCase() !== code.toLowerCase();
  const sysLabel = SYSTEM_LABELS[c.system] || c.system;
  const blurbLines = wrap(c.blurb || "", 52, 2);

  const W = 1200, H = 630, pad = 84;
  const blurbY = 470;
  const blurbTspans = blurbLines
    .map((ln, i) => `<tspan x="${pad}" dy="${i === 0 ? 0 : 44}">${escapeXml(ln)}</tspan>`)
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#faf7f2"/>
  <rect x="0" y="0" width="16" height="${H}" fill="${accent}"/>
  <rect x="0" y="${H - 12}" width="${W}" height="12" fill="${accent}"/>

  <!-- brand -->
  <g transform="translate(${pad}, 70)">
    <rect x="0" y="-26" width="40" height="40" rx="10" fill="${accent}"/>
    <g fill="#faf6ef">
      <rect x="8.5" y="-14" width="6" height="20" rx="3"/>
      <rect x="17" y="-22" width="6" height="28" rx="3"/>
      <rect x="25.5" y="-18" width="6" height="24" rx="3"/>
    </g>
    <text x="56" y="2" font-family="${SANS}" font-size="28" font-weight="700" fill="#1a1a17">AgentTune</text>
  </g>

  <!-- system pill -->
  <g transform="translate(${pad}, 196)">
    <rect x="0" y="-34" width="${28 + sysLabel.length * 15}" height="48" rx="24" fill="${accent}" fill-opacity="0.14"/>
    <text x="20" y="0" font-family="${SANS}" font-size="24" font-weight="600" letter-spacing="1" fill="${accent}">${escapeXml(sysLabel)}</text>
  </g>

  <!-- hero code -->
  <text x="${pad}" y="340" font-family="${SERIF}" font-size="124" font-weight="700" fill="${accent}">${escapeXml(code)}</text>
  ${showName ? `<text x="${pad}" y="408" font-family="${SERIF}" font-size="54" font-style="italic" fill="#1a1a17">${escapeXml(name)}</text>` : ""}

  <!-- blurb -->
  <text x="${pad}" y="${blurbY}" font-family="${SERIF}" font-size="34" fill="#5a5347">${blurbTspans}</text>

  <!-- footer url -->
  <text x="${pad}" y="${H - 48}" font-family="${MONO}" font-size="24" fill="${accent}">agent-tune.com${escapeXml(route)}</text>
  <text x="${W - pad}" y="${H - 48}" text-anchor="end" font-family="${SANS}" font-size="22" fill="#8a8275">Paste-ready AI agent tuning</text>
</svg>`;
}

function main() {
  const contacts = loadContacts();
  let written = 0;
  for (const c of contacts) {
    const slug = slugFor(c);
    const dir = path.join(OUT_DIR, c.system);
    fs.mkdirSync(dir, { recursive: true });
    const outPath = path.join(dir, `${slug}.png`);
    const svg = cardSvg(c);
    execFileSync("rsvg-convert", ["-w", "1200", "-h", "630", "-o", outPath], { input: svg });
    written++;
  }
  console.log(`Wrote ${written} per-type OG images → ${OUT_DIR}/<system>/<slug>.png`);
}

main();
