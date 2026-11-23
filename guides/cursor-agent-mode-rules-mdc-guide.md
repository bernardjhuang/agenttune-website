Source: https://agent-tune.com/guides/cursor-agent-mode-rules-mdc-guide
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide & Builder · Cursor Agent Mode

# Cursor Agent Mode and .cursor/rules/*.mdc: frontmatter, globs, and personality rules.

By Bernard Huang · Updated November 20, 2026

Stop Cursor Agent from making unrequested refactors or writing essay summaries—configure alwaysApply, glob-scoped .mdc rules, and User Rules cleanly.

**Quick answer:** Put repo-wide Agent Mode guardrails (testing gates, git boundaries, stack conventions) in .cursor/rules/*.mdc using YAML frontmatter—alwaysApply: true for universal rules, globs for file-type rules, or description-only for agent-requested rules. Put your personal communication style (diff-first replies, terse prose, pushback) in Cursor Settings → Rules for AI so you never pollute team git history.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/cursor-agent-mode-rules-mdc-guide.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## Build a ready-to-paste .cursor/rules/*.mdc file.

Generate a properly formatted `.cursor/rules/agenttune.mdc` file (with YAML frontmatter pre-configured) or switch output to `AGENTS.md`, Windsurf, or Cline:

Loading interactive Cursor .mdc rules builder…

Enable JavaScript to use the interactive builder, or copy the .mdc frontmatter patterns below.

## All four Cursor rule attachment modes (.mdc frontmatter).

| Rule type | YAML frontmatter fields | When Cursor Agent loads it | Best used for |
| --- | --- | --- | --- |
| Always | alwaysApply: true | Every Agent &amp; Chat turn | Core repo test commands, diff scope limits, communication style |
| Auto Attached | globs: [&quot;src/api/**/*.ts&quot;], alwaysApply: false | Whenever a matching file is in context | API validation schemas, SQL migrations, React/CSS conventions |
| Agent Requested | description: &quot;...&quot;, alwaysApply: false | Agent chooses to pull it when relevant | Release checklists, deployment steps, design-system patterns |
| Manual | No globs, alwaysApply: false | Only when invoked via @rule-name | Occasional migration scripts or strict security audit passes |

## Three battle-tested .cursor/rules/*.mdc templates for Agent Mode.

### 1. Safe Autonomous Execution (.cursor/rules/agent-guardrails.mdc)

```markdown
---
description: Safe diff boundaries and verification checks for Cursor Agent Mode
alwaysApply: true
---

- Keep diffs tightly scoped to the requested task; never refactor unrelated files.
- Before installing any new package or changing a database schema, stop and ask.
- Run the relevant unit test or build command after your final edit and cite the exact pass/fail result.
- Summarize changes in one line per modified file; skip conversational intros and closing offers.
```

### 2. Glob-Scoped Backend Route Rules (.cursor/rules/api-routes.mdc)

```markdown
---
description: Backend API boundary validation and error handling
globs: ["src/api/**/*.ts", "app/api/**/*.ts"]
alwaysApply: false
---

- Validate every request body and query param with Zod at the route boundary.
- Return structured JSON error objects with explicit HTTP status codes—never raw stack traces.
- Add a regression test for every bug fix in the sibling *.test.ts file.
```

### 3. User-Global Personal Tone (Cursor Settings → Rules for AI)

```markdown
- Lead with the root cause and fix before background narration.
- Challenge flawed premises or simpler standard-library alternatives before writing code.
- Flag unverified assumptions or skipped checks on their own line instead of smoothing over them.
```

Using Cursor alongside Claude Code, Codex CLI, Windsurf, or Cline? See our [7-agent coding rules matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix) so your repo stays synced via one root `AGENTS.md`.

## Questions people ask.

### Did .cursor/rules/*.mdc replace the legacy .cursorrules file?

Yes. Modular .cursor/rules/*.mdc files let you separate always-on guardrails from glob-scoped language or directory rules so you don't waste context window tokens on irrelevant instructions.

### Does Cursor Agent Mode read AGENTS.md too?

Yes. Modern Cursor versions support root AGENTS.md files alongside .cursor/rules/*.mdc, making AGENTS.md an ideal shared baseline for teams mixing Cursor, Codex CLI, and Claude Code.

### Where do I put personal Cursor communication preferences without committing them to git?

Paste personal tone, brevity, and pushback rules into Cursor Settings → Rules for AI (user-level), or add .cursor/rules/personal-*.mdc to your local .git/info/exclude file.

### How do I stop Cursor Agent Mode from rewriting working code outside my task?

Add an alwaysApply: true guardrail rule: 'Keep edits tightly scoped to the requested bug or feature; never refactor or reformat unrelated files unless explicitly asked.'

## What changed.

- November 20, 2026 First published covering Cursor Agent Mode .cursor/rules/*.mdc frontmatter modes, interactive builder, and safe autonomous guardrails.

## Sources.

- [Cursor Documentation: Rules for AI & Project Rules (.mdc)](https://docs.cursor.com/)

- [AgentTune Guide: CLAUDE.md vs AGENTS.md vs .cursorrules & Windsurf Matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)

- [AgentTune Guide: Windsurf (.windsurf/rules) & Cline (.clinerules)](https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide)

## Keep going.

- [7-Agent Matrix: CLAUDE.md vs AGENTS.md vs .cursorrules, Windsurf & Cline](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Windsurf & Cline: Windsurf (.windsurf/rules) & Cline (.clinerules) setup + builder](https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide)
- [Copilot & Gemini: Cursor rules, GitHub copilot-instructions.md & GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
- [Grok Bot: Grok Bot (built with Cursor cloud VMs): 6 character profiles](https://agent-tune.com/guides/grokbot-personality)
