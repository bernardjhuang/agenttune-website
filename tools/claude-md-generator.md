Source: https://agent-tune.com/tools/claude-md-generator
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Free tool · no signup

# Free CLAUDE.md generator.

Answer three quick questions to build a clean `CLAUDE.md` starter for Claude Code (Opus 5.5 or Fable 5.1). Want real repo examples? Read our [annotated CLAUDE.md guide](https://agent-tune.com/guides/claude-code-personality), or add communication rules with the [custom instructions generator](https://agent-tune.com/tools/custom-instructions-generator).

**Quick answer:** Choose testing style, diff scope, and package policy to emit a concise project `CLAUDE.md` starter locally in your browser. Grounded in [25 tested AI model profiles](https://agent-tune.com/models/) and the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

Testing styleWrite/update tests before implementationRegression tests for bugsTargeted tests for risky changes

Diff scopeMinimal diffsCurrent file only unless askedAdjacent cleanup allowed

DependenciesAsk before adding packagesPrefer native APIs/existing utilitiesCommon packages allowed with rationale

Copy CLAUDE.mdDownload CLAUDE.md

Merge this into `CLAUDE.md` in your repo root alongside your build and test commands. Keep what helps and [edit it like code](https://agent-tune.com/guides/claude-code-personality).

```

```

## What CLAUDE.md does.

Claude Code reads `CLAUDE.md` at the start of every session. Use it for project facts: how to run tests, code conventions, and files to leave alone. The three controls above cover the habits that cause the most daily friction: when to run tests, how many files a diff can touch, and whether the agent can install new packages.

Keep it short—under 200 lines works best. Claude Code loads `CLAUDE.md` as context rather than a hard guardrail, so short, specific rules beat long essays.

## Keep project rules separate from personal tone.

Project rules belong in `CLAUDE.md`. How Claude Code talks to you—like leading with the answer, skipping preamble, or pushing back on weak ideas—belongs in your personal `~/.claude/CLAUDE.md` or a Claude Code **output style** so you don't force your personal tone onto teammates.

See [how to change Claude Code's personality](https://agent-tune.com/guides/claude-code-personality) for all 43 ready-to-save output styles, check baseline traits in our [Claude Opus](https://agent-tune.com/models/claude-opus) and [Claude Fable](https://agent-tune.com/models/claude-fable) profiles, or compare all coding agents in our [CLAUDE.md vs AGENTS.md vs .cursorrules matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix).

## The fine print: how Claude Code loads and merges files.

Claude Code checks four locations and combines what it finds:

- **Organization policy file** (if set by your team admin).

- `~/.claude/CLAUDE.md` — your personal defaults across every repo.

- `./CLAUDE.md` or `./.claude/CLAUDE.md` — shared project rules committed to Git.

- `./CLAUDE.local.md` — your personal rules for this repo only (gitignored).

Run `/memory` in Claude Code to edit active files, or `/context` to inspect what loaded. You can also pull in other files with `@path`.

## How it works & common questions.

### What belongs in CLAUDE.md vs. personal settings?

Put shared repository facts—build commands, test runners, code conventions, and diff-scope rules—in ./CLAUDE.md. Keep personal tone and response-format preferences in ~/.claude/CLAUDE.md or an output style so teammates are not forced into your style.

### How long should a CLAUDE.md file be?

Keep project CLAUDE.md files concise—well under 200 lines works best. Claude Code loads CLAUDE.md into session context, and shorter, concrete rules achieve higher compliance than long prose essays.

### Does this generator upload my repository setup?

No. Everything runs locally inside your browser tab with no API calls, accounts, or server storage.
