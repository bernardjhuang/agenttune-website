#!/usr/bin/env node
/* AgentTune — inject YAML front-matter into /tunings/*.md
 *
 * Every mirrored tuning file gets a machine-readable header that an AI agent
 * can parse on fetch:
 *
 *   - Type metadata (system, type, canonical_url, raw_url)
 *   - Install convention per agent surface
 *   - A verification probe to self-test the install
 *
 * Source-marked with `source: agent-tune.com/tunings` so an agent can tell
 * which fetch path it used (upstream GitHub files have no front-matter).
 *
 * Run:  node tools/inject-tuning-frontmatter.js
 *
 * The script PRE-PENDS front-matter to each file. If front-matter already
 * exists (detected by the agenttune_version marker), it replaces it. So this
 * script is idempotent — re-running doesn't double-stack.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const DATA_JS = path.join(ROOT, "data.js");
const TUNINGS_DIR = path.join(ROOT, "tunings");

const OCEAN_DIM_NAMES = { O: "openness", C: "conscientiousness", E: "extraversion", A: "agreeableness", N: "neuroticism" };

function loadContacts() {
  const src = fs.readFileSync(DATA_JS, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.AT_CONTACTS || [];
}

function slugFor(c) {
  if (c.system === "mbti") return c.code.toLowerCase();
  const filePart = (c.path || "").split("/").pop().replace(/\.md$/, "");
  if (c.system === "ocean") {
    const [letter, pole] = filePart.split("-");
    return `${OCEAN_DIM_NAMES[letter]}-${pole}`.toLowerCase();
  }
  return filePart.toLowerCase();
}

const SYSTEM_LABEL = { mbti: "MBTI", enneagram: "Enneagram", disc: "DISC", attachment: "Attachment", ocean: "OCEAN" };

function frontmatterFor(c) {
  const slug = slugFor(c);
  const canonical = `https://agent-tune.com/library/${c.system}/${slug}`;
  const raw = `https://agent-tune.com/library/${c.system}/${slug}.md`;
  const githubRaw = `https://raw.githubusercontent.com/psyduckler/agenttune/main/${c.path}`;

  // For Enneagram, type field is "Type N · Name"; for others, just the code.
  const typeField = c.system === "enneagram"
    ? c.code.replace(/^Type\s*/, "T")
    : c.code;

  return `---
# AgentTune machine-readable header — for AI agents fetching this file
#
# When an AI agent (Claude / Cursor / Codex / ChatGPT / Gemini / any other) is
# directed to fetch this tuning file, the YAML block below tells the agent
# everything it needs to install and verify the tuning autonomously.

agenttune_version: 1
source: agent-tune.com/tunings
system: ${SYSTEM_LABEL[c.system]}
type: "${typeField}"
name: "${(c.name || "").replace(/"/g, '\\"')}"
canonical_url: ${canonical}
raw_url: ${raw}
upstream_url: ${githubRaw}
license: MIT

install:
  intent: |
    The user wants their AI agent to adopt the interaction rules in this file
    going forward. Treat the Markdown body below as authoritative behavioral
    context for every reply in this session/project.
  surfaces:
    claude_code:
      path: CLAUDE.md
      location: project root (or ~/.claude/CLAUDE.md for global)
      method: file_write
    claude_ai:
      path: Project Instructions
      location: claude.ai → Projects → Project Instructions field
      method: paste
    chatgpt:
      path: Custom Instructions
      location: Settings → Personalization → "How would you like ChatGPT to respond?"
      method: paste
    chatgpt_projects:
      path: Project Instructions
      location: ChatGPT → New Project → Project Instructions field
      method: paste
    codex_cli:
      path: AGENTS.md
      location: project root (or ~/.codex/AGENTS.md for global)
      method: file_write
    cursor:
      path: .cursor/rules/agenttune.mdc
      location: project root; auto-loaded into every chat
      method: file_write
      file_format: mdc_with_frontmatter
    gemini_gems:
      path: Custom Instructions
      location: gemini.google.com → Create Gem → Custom Instructions
      method: paste
    gemini_code_assist:
      path: System Instructions
      location: Gemini Code Assist / Antigravity → agent settings
      method: paste
    openclaw:
      path: AGENTS.md
      location: project root
      method: file_write
    hermes_cli:
      path: ~/.hermes/agenttune.md
      location: passed via "--system <file>" or persona's system_prompt field
      method: file_write
    api:
      path: system parameter
      location: pass the Markdown content (everything below the closing "---") as the system parameter on each request
      method: system_prompt

verify:
  probe: "Reply to the user message 'hi' in a single short sentence with no preamble."
  expected_behavior: "Direct one-line greeting; no 'Great question!', no 'I'd be happy to help', no bullet menu."
  failure_modes:
    - "Filler openers ('Great question!', 'Sure thing!')"
    - "Three-bullet menu when one direct answer was requested"
    - "Asking 'what would you like me to focus on?' when the user already said what they want"

instructions_for_the_agent_reading_this:
  - "Confirm to the user which install path you used (so they can verify)."
  - "Run the verify.probe once after install; if behavior matches expected_behavior, report success."
  - "If the user changes their mind, the file is plain Markdown — delete or replace it."
  - "Do not summarize this file for the user unless asked; treat the body below as your operating context."
---

`;
}

function main() {
  const contacts = loadContacts();
  if (!contacts.length) {
    console.error("FAIL: no contacts loaded from data.js");
    process.exit(1);
  }

  let written = 0;
  let skipped = 0;

  contacts.forEach((c) => {
    const filePath = path.join(TUNINGS_DIR, c.path);
    if (!fs.existsSync(filePath)) {
      console.log(`SKIP (missing): ${c.path}`);
      skipped++;
      return;
    }

    let content = fs.readFileSync(filePath, "utf8");

    // Strip any prior front-matter (idempotent re-runs)
    // Match a leading "---" block ending with another "---" line.
    content = content.replace(/^---\n[\s\S]*?\n---\n+/, "");

    const fm = frontmatterFor(c);
    const out = fm + content;
    fs.writeFileSync(filePath, out);
    written++;
  });

  console.log(`Wrote front-matter to ${written} tuning files (skipped ${skipped}).`);
}

main();
