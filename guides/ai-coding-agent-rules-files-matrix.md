Source: https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Reference · Coding Agent Rules

# CLAUDE.md vs. AGENTS.md vs. .cursorrules: file locations, limits, and shared setup.

By Bernard Huang · Updated November 16, 2026

Use AGENTS.md for cross-tool open standards (Codex CLI and compatible agents; 32 KiB default project_doc_max_bytes cap), CLAUDE.md and .claude/rules/*.md for Claude Code, .cursor/rules/*.mdc for Cursor, .github/copilot-instructions.md for GitHub Copilot, and GEMINI.md for Gemini Code Assist. Maintain one single source of truth and import or merge preferences cleanly.

## Complete repository rules matrix across 5 coding agents.

| Coding agent | Primary repo file(s) | User / global scope | Size / load notes | Deep-dive guide |
| --- | --- | --- | --- | --- |
| Claude Code | CLAUDE.md, CLAUDE.local.md, .claude/rules/*.md | ~/.claude/CLAUDE.md | Supports modular @path imports; nested dir loading on read | [CLAUDE.md examples →](https://agent-tune.com/guides/claude-md-examples) |
| OpenAI Codex CLI | AGENTS.md, AGENTS.override.md | ~/.codex/AGENTS.md (~/.codex/config.toml) | Default project_doc_max_bytes = 32 KiB combined | [AGENTS.md guide →](https://agent-tune.com/guides/codex-agents-md-guide) |
| Cursor | .cursor/rules/*.mdc (legacy .cursorrules) | Cursor Rules for AI user settings | Supports Always, Auto-Attached globs, Agent Requested descriptions | [Cursor/Copilot/Gemini →](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md) |
| GitHub Copilot | .github/copilot-instructions.md &amp; .github/instructions/*.instructions.md | IDE user instructions | Path-scoped frontmatter via applyTo globs | [Cursor/Copilot/Gemini →](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md) |
| Gemini Code Assist / CLI | GEMINI.md (project root &amp; subdirs) | ~/.gemini/GEMINI.md | Hierarchical context loading along working tree | [Cursor/Copilot/Gemini →](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md) |

## How to keep one single source of truth across tools without drift.

Two simple repository patterns prevent conflicting build or tone rules across tools:

- Put shared architectural facts in AGENTS.md: Build commands, test runners, protected directories, and commit rules stay canonical in AGENTS.md. Keep CLAUDE.md ultra-short with an explicit pointer (for example @AGENTS.md plus Claude-only slash-workflow notes).
- Keep personal tone in user-global files, not committed repo files: Don&rsquo;t force teammates into your personal banter or verbosity rules via Git. Put personal working style in ~/.claude/CLAUDE.md, ~/.codex/AGENTS.md, or CLAUDE.local.md.

Starter communication block ideal for personal global coding-agent files (~360 characters):

```markdown
## Personal Engineering Communication Style

- Give root cause, exact file paths, and minimal diff or command first.
- Keep prose under 4 sentences unless I ask for architectural walkthroughs.
- Never extrapolate test outputs or claim checks passed unless executed after the final edit.
- Ask before refactoring unrelated files or changing public APIs.
```

## Why oversized rules files silently drop instructions.

In OpenAI Codex CLI, combining root and nested AGENTS.md files stops reading once the combined size hits project_doc_max_bytes (32 KiB default in ~/.codex/config.toml; see our [GPT-6 Astra setup guide](https://agent-tune.com/guides/astra-personality)). In all coding agents, dumping entire style encyclopedias into top-level rules dilutes signal on build commands and error constraints. Keep root instructions tight (~100–250 lines), split topic-specific patterns into glob-matched files (.cursor/rules/*.mdc, .claude/rules/*.md, *.instructions.md), and safely append personal tone using our [Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter).

## Questions people ask.

Does Cursor read AGENTS.md or only .cursor/rules?

Cursor natively uses .cursor/rules/*.mdc (and legacy .cursorrules) for project rules alongside AGENTS.md compatibility in newer agent workflows. Keeping AGENTS.md canonical and referencing or syncing concise Cursor rules prevents drift.

Should personal personality instructions be committed into repo AGENTS.md?

Keep repo-committed AGENTS.md and CLAUDE.md focused on build commands, code style, security constraints, and tests. Place personal communication preferences in global user files (~/.claude/CLAUDE.md, ~/.codex/AGENTS.md) or gitignored CLAUDE.local.md.

What happens if AGENTS.md exceeds 32 KiB in Codex CLI?

Codex CLI stops loading additional AGENTS.md bytes past project_doc_max_bytes (default 32 KiB), which can silently cut off nested directory rules unless split cleanly or raised intentionally in ~/.codex/config.toml.

How do I merge my AgentTune style into an existing CLAUDE.md without deleting repo commands?

Use the AgentTune Instruction Converter & Merger: it wraps your communication preferences in labeled HTML comment markers and preserves every existing line outside those markers.

## What changed.

- November 16, 2026 First published with side-by-side matrix covering CLAUDE.md, AGENTS.md, .cursorrules/.mdc, copilot-instructions.md, and GEMINI.md.

## Sources.

- [AgentTune: Codex CLI AGENTS.md Guide](https://agent-tune.com/guides/codex-agents-md-guide)

- [AgentTune: Cursor Rules, Copilot & GEMINI.md Guide](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)

- [AgentTune: Coding Agent Personality Overview](https://agent-tune.com/guides/coding-agent-personality)

## Keep going.

- [Tool: Instruction Converter & Merger (preserves repo rules)](https://agent-tune.com/tools/instruction-converter)
- [Examples: CLAUDE.md examples by stack & team workflow](https://agent-tune.com/guides/claude-md-examples)
- [Guide: OpenAI Codex AGENTS.md & config.toml limits](https://agent-tune.com/guides/codex-agents-md-guide)
- [Guide: Cursor .mdc, Copilot & GEMINI.md rules](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
