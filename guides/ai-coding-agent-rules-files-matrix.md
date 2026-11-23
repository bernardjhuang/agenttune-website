Source: https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Reference · Coding Agent Rules

# CLAUDE.md vs. AGENTS.md vs. .cursorrules, Windsurf & Cline: complete matrix.

By Bernard Huang · Updated November 20, 2026

File locations, size limits, personal communication layers, and single-source setups across all 7 major coding agents.

**Quick answer:** Use AGENTS.md as your portable cross-tool repo rules file (Codex CLI 32 KiB default cap; also read by Cursor, Cline, and Copilot). Pair it with tool-specific repo files where needed—CLAUDE.md for Claude Code, .cursor/rules/*.mdc for Cursor, .windsurf/rules/*.md for Windsurf, .clinerules/ for Cline, .github/copilot-instructions.md for Copilot, and GEMINI.md for Gemini CLI—and keep personal tone in user-global configs.

## Complete repository rules matrix across 7 coding agents.

| Coding agent | Primary repo file(s) | User / global scope | Size / load notes | Deep-dive guide |
| --- | --- | --- | --- | --- |
| Claude Code | CLAUDE.md, CLAUDE.local.md, .claude/rules/*.md | ~/.claude/CLAUDE.md &amp; ~/.claude/output-styles/ | Supports modular @path imports; nested dir loading on read | [CLAUDE.md examples →](https://agent-tune.com/guides/claude-md-examples) |
| OpenAI Codex CLI | AGENTS.md, AGENTS.override.md | ~/.codex/AGENTS.md (~/.codex/config.toml) | Default project_doc_max_bytes = 32 KiB combined | [AGENTS.md guide →](https://agent-tune.com/guides/codex-agents-md-guide) |
| Cursor | .cursor/rules/*.mdc (legacy .cursorrules) | Cursor Settings → Rules for AI | alwaysApply, globs, or Agent Requested descriptions | [Cursor Agent Mode guide →](https://agent-tune.com/guides/cursor-agent-mode-rules-mdc-guide) |
| Windsurf (Cascade) | .windsurf/rules/*.md (legacy .windsurfrules) | Windsurf Global Rules | Modular Markdown files per concern; supports always-on &amp; glob rules | [Windsurf & Cline guide →](https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide) |
| Cline (VS Code) | .clinerules/ (or .cline/rules/) | Cline Global Rules / Custom Instructions | Natively detects .windsurfrules and .cursorrules too | [Windsurf & Cline guide →](https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide) |
| GitHub Copilot | .github/copilot-instructions.md &amp; .github/instructions/*.instructions.md | IDE user instructions | Path-scoped frontmatter via applyTo globs | [Cursor/Copilot/Gemini →](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md) |
| Gemini Code Assist / CLI | GEMINI.md (project root &amp; subdirs) | ~/.gemini/GEMINI.md | Hierarchical context loading along working tree | [Gemini setup guide →](https://agent-tune.com/guides/gemini-personality) |

## How to keep one single source of truth across tools without drift.

Two simple habits prevent conflicting rules across coding agents:

- **Keep shared repo rules in `AGENTS.md`:** Put build commands, test runners, protected directories, and commit rules in `AGENTS.md`. Keep `CLAUDE.md` short with an `@AGENTS.md` import plus any Claude-specific notes.
- **Keep personal tone in user-global files:** Do not commit personal verbosity or tone preferences to the team repo. Save personal style in `~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, or a gitignored `CLAUDE.local.md`.

Starter communication block for personal global coding-agent files (~360 characters):

```markdown
## Personal Engineering Communication Style

- Give root cause, exact file paths, and minimal diff or command first.
- Keep prose under 4 sentences unless I ask for architectural walkthroughs.
- Never extrapolate test outputs or claim checks passed unless executed after the final edit.
- Ask before refactoring unrelated files or changing public APIs.
```

## What to leave out of coding-agent rules files.

- **Secrets & credentials:** Never put API keys, tokens, or connection strings in instruction files.
- **Rules a linter already enforces:** If Prettier, Ruff, or ESLint enforces formatting automatically, delete the prose duplicate so the agent keeps its context budget for architectural constraints.
- **Novel-length docs:** OpenAI Codex CLI stops reading `AGENTS.md` files once the combined chain hits `project_doc_max_bytes` (32 KiB default in `~/.codex/config.toml`). Keep root files under 100–250 lines and move file-specific rules into glob files (`.cursor/rules/*.mdc`, `.claude/rules/*.md`, `.windsurf/rules/*.md`).
- **Role-play costumes:** Vague persona lines fade quickly; checkable rules like &ldquo;state assumptions before editing files&rdquo; persist across long agent loops.

Merge your communication preferences safely without touching repo build commands using our [Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter) or generate ready-to-paste files in our [interactive Coding Rules Builder](https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide).

## Questions people ask.

### Does Cursor read AGENTS.md or only .cursor/rules?

Cursor natively uses .cursor/rules/*.mdc (and legacy .cursorrules) for project rules alongside AGENTS.md compatibility in newer agent workflows. Keeping AGENTS.md canonical and referencing or syncing concise Cursor rules prevents drift.

### Should personal personality instructions be committed into repo AGENTS.md?

Keep repo-committed AGENTS.md and CLAUDE.md focused on build commands, code style, security constraints, and tests. Place personal communication preferences in global user files (~/.claude/CLAUDE.md, ~/.codex/AGENTS.md) or gitignored CLAUDE.local.md.

### What happens if AGENTS.md exceeds 32 KiB in Codex CLI?

Codex CLI stops loading additional AGENTS.md bytes past project_doc_max_bytes (default 32 KiB), which can silently cut off nested directory rules unless split cleanly or raised intentionally in ~/.codex/config.toml.

### How do I merge my AgentTune style into an existing CLAUDE.md without deleting repo commands?

Use the AgentTune Instruction Converter & Merger: it wraps your communication preferences in labeled HTML comment markers and preserves every existing line outside those markers.

## What changed.

- November 16, 2026 First published with side-by-side matrix covering CLAUDE.md, AGENTS.md, .cursorrules/.mdc, copilot-instructions.md, and GEMINI.md.

## Sources.

- [AgentTune: Codex CLI AGENTS.md Guide](https://agent-tune.com/guides/codex-agents-md-guide)

- [AgentTune: Windsurf .windsurf/rules & Cline .clinerules Guide](https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide)

- [AgentTune: Cursor Agent Mode & .cursor/rules/*.mdc Guide](https://agent-tune.com/guides/cursor-agent-mode-rules-mdc-guide)

## Keep going.

- [Builder: Windsurf (.windsurf/rules) & Cline (.clinerules) Builder](https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide)
- [Cursor: Cursor Agent Mode & .cursor/rules/*.mdc complete guide](https://agent-tune.com/guides/cursor-agent-mode-rules-mdc-guide)
- [Tool: Instruction Converter & Merger (preserves repo rules)](https://agent-tune.com/tools/instruction-converter)
- [Examples: CLAUDE.md examples by stack & team workflow](https://agent-tune.com/guides/claude-md-examples)
- [Guide: OpenAI Codex AGENTS.md & config.toml limits](https://agent-tune.com/guides/codex-agents-md-guide)
