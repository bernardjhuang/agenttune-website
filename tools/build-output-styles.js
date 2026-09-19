#!/usr/bin/env node
/* Builds the Claude Code output-style pack: one file per tuning in
 * /output-styles/, plus index.json.
 *
 * An output style is the Claude Code surface for role and tone; CLAUDE.md is
 * for project conventions. Each file here wraps a tuning body in output-style
 * front-matter, with keep-coding-instructions on, so the style changes how
 * Claude Code talks without dropping its software-engineering instructions.
 *
 *   node tools/build-output-styles.js
 *
 * Install (user level):
 *   mkdir -p ~/.claude/output-styles
 *   curl -sSL https://agent-tune.com/output-styles/agenttune-mbti-intj.md \
 *     -o ~/.claude/output-styles/agenttune-mbti-intj.md
 * then pick it with /output-style inside Claude Code.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "output-styles");
const SITE = "https://agent-tune.com";
const OCEAN_DIM = { O: "openness", C: "conscientiousness", E: "extraversion", A: "agreeableness", N: "neuroticism" };

function loadContacts() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data.js"), "utf8"), sandbox);
  return sandbox.window.AT_CONTACTS || [];
}

// Same slug rules as tools/generate-library.js, so the file names line up with
// the library URLs.
function slugFor(c) {
  if (c.system === "mbti") return c.code.toLowerCase();
  const filePart = (c.path || "").split("/").pop().replace(/\.md$/, "");
  if (c.system === "ocean") {
    const [letter, pole] = filePart.split("-");
    return `${OCEAN_DIM[letter]}-${pole}`.toLowerCase();
  }
  return filePart.toLowerCase();
}

function labelFor(c) {
  const digit = (c.code.match(/\d+/) || [""])[0];
  if (c.system === "mbti") return c.code;
  if (c.system === "enneagram") return `Enneagram ${digit}`;
  if (c.system === "disc") return `DISC ${c.code}`;
  if (c.system === "attachment") return `${c.code} attachment`;
  return c.name; // "High Openness"
}

// Who the style is for, as a phrase that reads naturally in Claude Code's picker.
function whoFor(c) {
  const digit = (c.code.match(/\d+/) || [""])[0];
  if (c.system === "mbti") return `${c.code} users`;
  if (c.system === "enneagram") return `Enneagram Type ${digit} users`;
  if (c.system === "disc") return `DISC ${c.code} (${c.name}) users`;
  if (c.system === "attachment") return `users with ${/^[AEIOU]/i.test(c.code) ? "an" : "a"} ${c.code.toLowerCase()} attachment style`;
  const [letter, pole] = c.code.split("-");
  return `users ${pole} in ${OCEAN_DIM[letter].charAt(0).toUpperCase() + OCEAN_DIM[letter].slice(1)} (Big Five)`;
}

const stripFrontMatter = (md) => md.replace(/^---\n[\s\S]*?\n---\n+/, "");
const yamlString = (s) => `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

function main() {
  const contacts = loadContacts();
  if (!contacts.length) {
    console.error("FAIL: no contacts loaded from data.js");
    process.exit(1);
  }
  fs.mkdirSync(OUT, { recursive: true });

  const index = contacts.map((c) => {
    const slug = slugFor(c);
    const file = `agenttune-${c.system}-${slug}.md`;
    const label = labelFor(c);
    const body = stripFrontMatter(fs.readFileSync(path.join(ROOT, "tunings", c.path), "utf8")).trim();
    const md = `---
name: AgentTune ${label}
description: ${yamlString(`Communication style for ${whoFor(c)}. ${c.blurb}`)}
keep-coding-instructions: true
---

The rules below describe how the person you are working with wants to be
communicated with. They change how you talk: what you lead with, how you frame
decisions, how you disagree, when you stop asking questions. They do not change
how you engineer. Keep following the project's conventions and your normal
standards for correctness, testing and safety.

Source: ${SITE}/library/${c.system}/${slug} (MIT). Edit this file freely; the
type is a starting hypothesis.

${body}
`;
    fs.writeFileSync(path.join(OUT, file), md);
    return {
      system: c.system,
      code: c.code,
      name: `AgentTune ${label}`,
      file,
      url: `${SITE}/output-styles/${file}`,
      library: `${SITE}/library/${c.system}/${slug}`
    };
  });

  fs.writeFileSync(
    path.join(OUT, "index.json"),
    JSON.stringify(
      {
        name: "AgentTune output-style pack for Claude Code",
        description: "One Claude Code output style per AgentTune tuning. Save a file to ~/.claude/output-styles/ (or .claude/output-styles/ in a project), then select it with /output-style.",
        license: "MIT",
        count: index.length,
        styles: index
      },
      null,
      2
    ) + "\n"
  );
  console.log(`output-styles/ ← ${index.length} styles + index.json`);
}

main();
