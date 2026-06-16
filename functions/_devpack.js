/* AgentTune Developer Pack — deterministic profile + file templates
 *
 * Architecture note: the Developer Pack intentionally separates profile logic
 * from file formatting. We derive a compact Core Dev Profile from the user's
 * questionnaire answers, then render each target file with deterministic
 * templates. This avoids slow, fragile multi-file LLM generations and keeps
 * Cursor/Claude/Codex syntax stable.
 */

export const DEVPACK_SCHEMA_VERSION = "1.0";
export const DEVPACK_GENERATOR_VERSION = "1.0";

const TOOL_TO_FILE = {
  claude_code: "CLAUDE.md",
  cursor: ".cursor/rules/agenttune.mdc",
  codex_cli: "AGENTS.md",
  chatgpt: "chatgpt-custom-instructions.md",
  claude_ai: "claude-project-instructions.md",
  gemini: "gemini-gem-instructions.md",
  copilot: "copilot-instructions.md",
};

const DEFAULT_TOOLS = ["claude_code", "cursor", "codex_cli"];

const LABELS = {
  autonomy: {
    act_when_clear: "Act when clear; ask only when blocked",
    plan_first: "Propose a plan before edits",
    ask_before_edits: "Ask before changing files",
  },
  planning: {
    plan_for_multi_file: "Plan before multi-file work",
    plan_every_task: "Plan before every task",
    skip_plan_for_small: "Skip plans for small obvious changes",
  },
  tests: {
    strict_tdd: "Strict TDD",
    regression_first: "Regression tests for bugs",
    targeted_after: "Targeted tests after implementation",
    pragmatic: "Pragmatic tests for risky paths",
  },
  refactor_scope: {
    minimal_diff: "Minimal diffs",
    current_file_only: "Current-file-only refactors",
    cleanup_ok: "Opportunistic cleanup allowed",
    broad_ok_with_plan: "Broad refactors allowed with a plan",
  },
  explanation_depth: {
    terse: "Terse output",
    concise_after: "Concise explanation after code",
    explain_tradeoffs: "Explain tradeoffs",
    teach_me: "Teach while implementing",
  },
  dependencies: {
    ask_first: "Ask before dependencies",
    stdlib_first: "Prefer built-ins/native APIs",
    allowed_if_common: "Common dependencies allowed",
  },
  architecture: {
    simple_first: "Simple design first",
    extensible: "Design for extension",
    challenge_assumptions: "Challenge architecture assumptions",
  },
  output_format: {
    patch_plus_summary: "Patch plus concise summary",
    diff_first: "Diff first",
    full_files: "Full files when useful",
    checklist: "Checklist-oriented finish",
  },
};

function choice(devfit, key, fallback) {
  return (devfit && typeof devfit[key] === "string" && devfit[key]) || fallback;
}

function label(key, value) {
  return (LABELS[key] && LABELS[key][value]) || value || "default";
}

function cleanTools(tools) {
  const arr = Array.isArray(tools) ? tools : DEFAULT_TOOLS;
  const seen = new Set();
  const out = [];
  for (const t of arr) {
    if (TOOL_TO_FILE[t] && !seen.has(t)) {
      seen.add(t);
      out.push(t);
    }
  }
  return out.length ? out.slice(0, 3) : DEFAULT_TOOLS;
}

function sentence(s) {
  return String(s || "").trim().replace(/\s+/g, " ");
}

function rule(title, instruction, evidence) {
  return { title, instruction: sentence(instruction), evidence: evidence.filter(Boolean) };
}

export function buildCoreDevProfile(draft) {
  const devfit = (draft && draft.devfit) || {};
  const primary_tools = cleanTools(devfit.primary_tools);
  const tests = choice(devfit, "tests", "regression_first");
  const refactor = choice(devfit, "refactor_scope", "minimal_diff");
  const dependencies = choice(devfit, "dependencies", "ask_first");
  const autonomy = choice(devfit, "autonomy", "act_when_clear");
  const planning = choice(devfit, "planning", "plan_for_multi_file");
  const explanation = choice(devfit, "explanation_depth", "concise_after");
  const architecture = choice(devfit, "architecture", "simple_first");
  const output = choice(devfit, "output_format", "patch_plus_summary");
  const ambiguity = choice(devfit, "ambiguity", "ask_when_blocked");
  const errorHandling = choice(devfit, "error_handling", "explicit_errors");
  const codeReview = choice(devfit, "code_review", "direct_correctness_first");

  const profileBits = [];
  if (tests === "strict_tdd") profileBits.push("TDD");
  if (refactor === "minimal_diff" || refactor === "current_file_only") profileBits.push("Minimal-diff");
  if (architecture === "simple_first") profileBits.push("Simple-first");
  if (dependencies === "ask_first") profileBits.push("Dependency-cautious");
  if (!profileBits.length) profileBits.push("Pragmatic");

  const rules = [
    rule(
      tests === "strict_tdd" ? "Write or update tests before implementation" : "Make verification visible",
      tests === "strict_tdd"
        ? "Use strict TDD for bugs and non-trivial features: write the failing test first, verify it fails, implement the smallest change, then run the targeted test and relevant suite."
        : tests === "regression_first"
          ? "For bug fixes, write a regression test that fails before changing production code; for features, add targeted tests around the changed behavior."
          : "Add or run the smallest useful verification for the risk level, and report exactly what passed or could not be run.",
      [label("tests", tests)]
    ),
    rule(
      refactor === "minimal_diff" ? "Prefer minimal diffs" : "Respect the requested refactor scope",
      refactor === "cleanup_ok"
        ? "Clean up adjacent code when it directly reduces complexity, but keep unrelated style churn out of the diff."
        : refactor === "broad_ok_with_plan"
          ? "Broad refactors are allowed only after presenting a plan, risks, files touched, and rollback path."
          : "Make the smallest change that solves the task. Do not rewrite surrounding code, rename broadly, or reformat files unless explicitly asked.",
      [label("refactor_scope", refactor)]
    ),
    rule(
      "Ask before adding dependencies",
      dependencies === "allowed_if_common"
        ? "Prefer existing dependencies and native APIs; if a common package clearly saves time, state why it is worth adding before installing it."
        : dependencies === "stdlib_first"
          ? "Prefer built-in language/runtime APIs and existing project utilities; propose third-party packages only when the native path is materially worse."
          : "Do not add npm, pip, brew, or system dependencies without asking first and explaining the tradeoff.",
      [label("dependencies", dependencies)]
    ),
    rule(
      "Handle ambiguity explicitly",
      ambiguity === "make_reasonable_default"
        ? "If requirements are ambiguous but the safe default is obvious, state the assumption briefly and proceed."
        : "If ambiguity changes architecture, data shape, permissions, or user-visible behavior, ask a focused question before editing.",
      [ambiguity]
    ),
    rule(
      planning === "plan_every_task" ? "Plan before editing" : "Plan when scope expands",
      planning === "skip_plan_for_small"
        ? "Skip ceremony for tiny one-file fixes; for multi-file or risky work, give a short plan before editing."
        : planning === "plan_every_task"
          ? "Before editing, summarize the intended files, approach, and verification command in 3-5 bullets."
          : "For multi-file changes, migrations, or behavior changes, provide a short plan before editing; otherwise proceed directly.",
      [label("planning", planning)]
    ),
    rule(
      "Report changes in the preferred format",
      output === "diff_first"
        ? "Lead with the diff or exact changed files, then add only the context needed to review it."
        : output === "full_files"
          ? "When a file is small or heavily changed, provide the full file; otherwise provide patch-style snippets plus file paths."
          : output === "checklist"
            ? "End with a concise checklist: files changed, tests run, risks, and next action."
            : "Return a concise summary of files changed, commands run, test results, and any unresolved risk. Keep rationale after the implementation, not before it.",
      [label("output_format", output), label("explanation_depth", explanation)]
    ),
    rule(
      "Prefer simple architecture until complexity is earned",
      architecture === "challenge_assumptions"
        ? "Challenge architecture assumptions when the requested design increases coupling, hides state, weakens security, or makes tests harder."
        : architecture === "extensible"
          ? "Design seams for likely extension points, but avoid speculative frameworks or abstractions with no near-term caller."
          : "Use the simplest design that solves the current problem. Avoid abstractions until there are at least two concrete call sites or a clear testability need.",
      [label("architecture", architecture)]
    ),
    rule(
      "Be direct in code review",
      codeReview === "direct_correctness_first"
        ? "In review mode, prioritize correctness, security, regressions, and maintainability. Be direct; do not cushion serious issues."
        : "In review mode, separate blocking issues from suggestions and include a concrete fix path for each major concern.",
      [codeReview]
    ),
    rule(
      "Make failure modes explicit",
      errorHandling === "explicit_errors"
        ? "Prefer explicit errors with useful context over silent fallbacks. Preserve original error information where it helps debugging."
        : "Handle expected failures gracefully, but do not hide unexpected errors or make debugging harder.",
      [errorHandling]
    ),
  ];

  return {
    version: DEVPACK_SCHEMA_VERSION,
    generator_version: DEVPACK_GENERATOR_VERSION,
    product: "developer_pack",
    profile_name: `${profileBits.join(" ")} Engineer`,
    primary_tools,
    labels: {
      autonomy: label("autonomy", autonomy),
      planning: label("planning", planning),
      tests: label("tests", tests),
      refactor_scope: label("refactor_scope", refactor),
      dependencies: label("dependencies", dependencies),
      architecture: label("architecture", architecture),
      output_format: label("output_format", output),
    },
    operating_summary: `Configure coding agents to behave like a ${profileBits.join(", ").toLowerCase()} collaborator: verify changes, keep scope controlled, ask before risky moves, and report concrete results.`,
    rules,
    limits: [
      "This pack configures agent behavior; it does not inspect your repository or replace project-specific conventions.",
      "Keep secrets, proprietary code, and credentials out of prompts and config files.",
      "Team conventions should override personal preferences inside shared repositories.",
    ],
    generated_footer: devfit.generated_footer !== false,
  };
}

function footer(profile) {
  return profile.generated_footer ? "\n\n<!-- Configured via AgentTune.com/dev -->" : "";
}

function rulesMarkdown(profile, { compact = false } = {}) {
  const list = compact ? profile.rules.slice(0, 6) : profile.rules;
  return list.map((r) => `- **${r.title}:** ${r.instruction}`).join("\n");
}

function renderClaudeMd(profile) {
  return `# Agent Instructions

You are working with a developer whose preferred AI-agent operating mode is: **${profile.profile_name}**.

## Operating Summary
${profile.operating_summary}

## Rules
${rulesMarkdown(profile)}

## Workflow
1. Inspect enough context to avoid guessing.
2. For multi-file or risky work, state the plan before editing.
3. Make the smallest correct change unless asked to refactor broadly.
4. Verify with targeted tests or commands and report real results.
5. End with files changed, tests run, and remaining risks.

## Do Not
- Do not add dependencies without approval.
- Do not rewrite unrelated code for style preferences.
- Do not hide uncertainty or invent test results.
- Do not expose secrets or request credentials.${footer(profile)}
`;
}

function renderAgentsMd(profile) {
  return `# AGENTS.md

## AgentTune Profile
${profile.profile_name}

## Required Behavior
${rulesMarkdown(profile)}

## Validation Protocol
- Run the most targeted relevant test first.
- If no automated test exists, explain the manual or static verification performed.
- Never claim tests passed unless they were actually run.

## Dependency Policy
Ask before adding dependencies. Prefer existing project utilities and native APIs.

## Final Response Format
- Summary
- Files changed
- Tests/commands run
- Risks or follow-ups${footer(profile)}
`;
}

function renderCursorRule(profile) {
  return `---
alwaysApply: true
---

# AgentTune Cursor Rules

Apply these rules in this workspace. The user prefers **${profile.profile_name}** behavior from coding agents.

${rulesMarkdown(profile, { compact: true })}

## Cursor-specific boundaries
- Keep edits scoped to the requested task.
- Do not create broad rewrites unless the user asks for a refactor.
- Ask before adding packages, changing build tools, or touching generated files.
- Prefer patches that are easy to review.${footer(profile)}
`;
}

function renderCustomInstructions(profile, name) {
  return `# ${name}

Act as a ${profile.profile_name.toLowerCase()} coding collaborator.

${profile.operating_summary}

Rules:
${rulesMarkdown(profile, { compact: true })}

When finishing, list what changed, what you verified, and what remains uncertain.${footer(profile)}
`;
}

function renderReadme(profile, pack) {
  return `# AgentTune Developer Pack

Profile: **${profile.profile_name}**

${profile.operating_summary}

## Primary files for your selected tools
${pack.primary_files.map((f) => `- \`${f}\``).join("\n")}

## Bonus files
${pack.bonus_files.map((f) => `- \`${f}\``).join("\n")}

## Install notes
- Claude Code: place \`CLAUDE.md\` in the project root.
- Codex/OpenAI agents: place \`AGENTS.md\` in the project root.
- Cursor: place \`.cursor/rules/agenttune.mdc\` in the repo.
- ChatGPT/Claude/Gemini/Copilot: paste the matching instructions into the custom-instructions/project-instructions field.

## Verification prompt
After installing, ask your agent:

> Before coding, summarize the rules you are following from my AgentTune config.

The response should mention testing expectations, refactor boundaries, dependency policy, and final reporting style.${footer(profile)}
`;
}

export function generateDevPack(draft) {
  const profile = buildCoreDevProfile(draft || {});
  const files = {
    "CLAUDE.md": renderClaudeMd(profile),
    "AGENTS.md": renderAgentsMd(profile),
    ".cursor/rules/agenttune.mdc": renderCursorRule(profile),
    "chatgpt-custom-instructions.md": renderCustomInstructions(profile, "ChatGPT Custom Instructions"),
    "claude-project-instructions.md": renderCustomInstructions(profile, "Claude Project Instructions"),
    "gemini-gem-instructions.md": renderCustomInstructions(profile, "Gemini Gem Instructions"),
    "copilot-instructions.md": renderCustomInstructions(profile, "Copilot Instructions"),
  };

  const primary_files = profile.primary_tools.map((t) => TOOL_TO_FILE[t]).filter(Boolean);
  const bonus_files = Object.keys(files).filter((f) => !primary_files.includes(f));
  const pack = {
    product: "developer_pack",
    version: DEVPACK_SCHEMA_VERSION,
    generated_at: new Date().toISOString(),
    profile,
    profile_name: profile.profile_name,
    operating_summary: profile.operating_summary,
    primary_tools: profile.primary_tools,
    primary_files,
    bonus_files,
    files,
    preview: {
      summary: profile.operating_summary,
      sample_rules: profile.rules.slice(0, 3).map((r) => `${r.title}: ${r.instruction}`),
      sample_file_excerpt: renderClaudeMd(profile).split("\n").slice(0, 16).join("\n"),
    },
    limits: profile.limits,
  };
  pack.files["README.md"] = renderReadme(profile, pack);
  if (!pack.primary_files.includes("README.md")) pack.bonus_files.push("README.md");
  return pack;
}

export function renderDevPackMarkdown(pack) {
  const files = pack.files || {};
  const sections = Object.entries(files).map(([name, body]) => `## ${name}\n\n\`\`\`md\n${body.trim()}\n\`\`\``).join("\n\n");
  return `# AgentTune Developer Pack\n\nProfile: **${pack.profile_name || "Developer"}**\n\n${pack.operating_summary || ""}\n\n${sections}\n`;
}
