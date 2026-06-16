#!/usr/bin/env node
"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "functions", "_devpack.js");

function loadDevpack() {
  const src = fs.readFileSync(SRC, "utf8")
    .replace(/export const /g, "const ")
    .replace(/export function /g, "function ")
    .replace(/export async function /g, "async function ")
    .concat("\nmodule.exports = { buildCoreDevProfile, generateDevPack, renderDevPackMarkdown };\n");
  const sandbox = { module: { exports: {} }, exports: {}, console };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: SRC });
  return sandbox.module.exports;
}

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (err) {
    console.error(`✗ ${name}`);
    console.error(err.stack || err.message);
    process.exitCode = 1;
  }
}

const { buildCoreDevProfile, generateDevPack, renderDevPackMarkdown } = loadDevpack();

const sampleDraft = {
  product: "developer_pack",
  email: "dev@example.com",
  devfit: {
    primary_tools: ["claude_code", "cursor", "codex_cli"],
    autonomy: "act_when_clear",
    planning: "plan_for_multi_file",
    tests: "strict_tdd",
    refactor_scope: "minimal_diff",
    explanation_depth: "concise_after",
    ambiguity: "ask_when_blocked",
    dependencies: "ask_first",
    architecture: "simple_first",
    code_review: "direct_correctness_first",
    output_format: "patch_plus_summary",
    error_handling: "explicit_errors",
    generated_footer: true
  }
};

test("buildCoreDevProfile maps devfit into operational rules", () => {
  const profile = buildCoreDevProfile(sampleDraft);
  assert.equal(profile.version, "1.0");
  assert.equal(profile.product, "developer_pack");
  assert.ok(profile.profile_name.includes("TDD"));
  assert.ok(profile.rules.some((r) => /test/i.test(r.title + r.instruction)));
  assert.ok(profile.rules.some((r) => /dependenc/i.test(r.title + r.instruction)));
  assert.ok(profile.primary_tools.includes("claude_code"));
});

test("generateDevPack emits deterministic files for selected primary tools first", () => {
  const pack = generateDevPack(sampleDraft);
  assert.equal(pack.product, "developer_pack");
  assert.ok(pack.files["CLAUDE.md"].includes("Write or update tests before implementation"));
  assert.ok(pack.files["AGENTS.md"].includes("Ask before adding dependencies"));
  assert.ok(pack.files[".cursor/rules/agenttune.mdc"].startsWith("---\nalwaysApply: true\n---"));
  assert.deepEqual(pack.primary_files.slice(0, 3), ["CLAUDE.md", ".cursor/rules/agenttune.mdc", "AGENTS.md"]);
  assert.ok(pack.bonus_files.includes("chatgpt-custom-instructions.md"));
});

test("renderDevPackMarkdown creates a single portable artifact", () => {
  const pack = generateDevPack(sampleDraft);
  const md = renderDevPackMarkdown(pack);
  assert.ok(md.includes("# AgentTune Developer Pack"));
  assert.ok(md.includes("## CLAUDE.md"));
  assert.ok(md.includes("## .cursor/rules/agenttune.mdc"));
  assert.ok(md.includes("Configured via AgentTune.com/dev"));
});
