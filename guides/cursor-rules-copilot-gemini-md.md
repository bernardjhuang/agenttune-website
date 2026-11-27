Source: https://agent-tune.com/guides/cursor-rules-copilot-gemini-md
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Coding Assistants

# Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md.

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Save always-on Cursor communication rules in .cursor/rules/agenttune.mdc with alwaysApply: true in YAML frontmatter (or in Cursor's user Rules for AI). For GitHub Copilot, add your section to .github/copilot-instructions.md. For Gemini CLI and Code Assist, use ~/.gemini/GEMINI.md or repo GEMINI.md. For Claude Code, use ~/.claude/CLAUDE.md or ~/.claude/output-styles/agenttune.md. For OpenAI Codex, use ~/.codex/AGENTS.md.

## Side-by-side comparison of coding agent instruction files.

| Tool | Personal (user-wide) path | Project (repo-committed) path | Required header / frontmatter |
| --- | --- | --- | --- |
| Cursor | Cursor Settings → Rules for AI | `.cursor/rules/*.mdc` | YAML frontmatter with `description` and `alwaysApply: true` |
| GitHub Copilot | VS Code user settings / personal instructions | `.github/copilot-instructions.md` (plus `.github/instructions/*.instructions.md`) | Plain Markdown (`applyTo` frontmatter optional in scoped files) |
| Gemini CLI & Code Assist | `~/.gemini/GEMINI.md` | `GEMINI.md` at repo root or subdirectories | Plain Markdown |
| Claude Code | `~/.claude/CLAUDE.md` or `~/.claude/output-styles/*.md` | `CLAUDE.md` at repo root | `keep-coding-instructions: true` in output-style files |
| OpenAI Codex | `~/.codex/AGENTS.md` | `AGENTS.md` / `AGENTS.override.md` (32 KiB total cap) | Plain Markdown |

## 1. Cursor: .cursor/rules/agenttune.mdc with alwaysApply.

Cursor uses modular `.mdc` files inside `.cursor/rules/` rather than a single legacy `.cursorrules` file. Each file starts with a short YAML frontmatter block. Set `alwaysApply: true` for communication rules that should apply in every chat and Composer session:

```markdown
---
description: Communication preferences from AgentTune
alwaysApply: true
---

## How to communicate with me

- Show the code or minimal diff first, followed by a brief note on non-obvious choices.
- Use plain prose for explanations; skip conversational intros and closing summaries.
- Flag breaking changes, edge cases, or missing tests in one sentence before applying edits.
- Ask for clarification only when an ambiguity changes the public interface or data model.
```

Because `.cursor/rules/` is usually tracked in git, keep personal tone private to your machine by adding `.cursor/rules/personal-*.mdc` to `.git/info/exclude` or using Cursor’s user-level **Rules for AI** box.

## 2. GitHub Copilot: .github/copilot-instructions.md.

GitHub Copilot in VS Code, Visual Studio, JetBrains, and GitHub.com reads `.github/copilot-instructions.md` from your repo root. Because every contributor shares that file, keep its communication section concise and team-friendly:

```markdown
## Communication & review style

- Lead with the proposed fix or root cause before explaining background context.
- Prefer small, targeted diffs over unrelated refactors.
- State assumptions explicitly when test coverage or types are incomplete.
- Skip filler openings and generic sign-offs in chat and pull request summaries.
```

## 3. Gemini CLI and Code Assist: GEMINI.md.

Gemini CLI and Gemini Code Assist read `~/.gemini/GEMINI.md` for personal defaults and `GEMINI.md` in the repo root for project rules. Saving your personal AgentTune profile in `~/.gemini/GEMINI.md` applies your style across every repo without touching git. See our [Google Gemini personality guide](https://agent-tune.com/guides/gemini-personality) for Gems and Saved Info setup.

## Exporting any of the 43 AgentTune profiles in one click.

On any profile page in the [AgentTune library](https://agent-tune.com/library/), select **Coding assistant** in the first dropdown, then choose **Cursor · project rule**, **GitHub Copilot · repository instructions**, **Gemini CLI · GEMINI.md**, **Claude Code · output style**, or **Codex · personal instructions**. Or merge into an existing file with our [Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter).

## Cursor Agent Mode: all 4 .mdc attachment modes & interactive builder.

| Rule mode | YAML frontmatter | When loaded | Best used for |
| --- | --- | --- | --- |
| Always | `alwaysApply: true` | Every Agent & Chat turn | Core test commands, diff boundaries & tone |
| Auto Attached | `globs: ["src/api/**/*.ts"]`, `alwaysApply: false` | Matching file in context | API schemas, SQL migrations, UI conventions |
| Agent Requested | `description: "..."`, `alwaysApply: false` | Agent pulls when relevant | Release checklists, deployment steps |
| Manual | No `globs`, `alwaysApply: false` | Invoked via `@rule-name` | Occasional migrations or strict audit passes |

Loading interactive Cursor .mdc rules builder…

## Questions people ask.

### Did .cursor/rules/*.mdc replace .cursorrules in Cursor?

Yes. Cursor uses .cursor/rules/*.mdc files with YAML frontmatter (description, globs, and alwaysApply: true/false) so projects can separate always-on rules from file-pattern rules.

### Where do I put personal communication rules so I don't commit them to a team repo?

Use ~/.codex/AGENTS.md in OpenAI Codex, ~/.claude/CLAUDE.md or ~/.claude/output-styles/ in Claude Code, ~/.gemini/GEMINI.md in Gemini CLI, or user-level Rules for AI in Cursor Settings.

### Can I use the same AgentTune tuning across Cursor, Copilot, Claude Code, and Codex?

Yes. The core bullet points are portable across all coding assistants; only the file path and YAML frontmatter (such as alwaysApply: true for Cursor or keep-coding-instructions: true for Claude Code) differ.

## What changed.

- November 5, 2026 First published comparing .cursor/rules/*.mdc, .github/copilot-instructions.md, GEMINI.md, CLAUDE.md, and AGENTS.md.

## Sources.

- [GitHub Docs: Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

- [Claude Code Docs: Output styles](https://code.claude.com/docs/en/output-styles)

- [ChatGPT & Codex Docs: AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

## Keep going.

- [Guide: The layer your AGENTS.md is missing (coding agent personality)](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Guide: OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Guide: Claude Code personality: CLAUDE.md and /output-style](https://agent-tune.com/guides/claude-code-personality)
- [Guide: How to change Gemini's personality: Gems, Saved Info, and CLI](https://agent-tune.com/guides/gemini-personality)
- [Library: Browse all 43 personality tuning files](https://agent-tune.com/library/)
- [Model profile: Claude Opus — coding & IDE baseline](https://agent-tune.com/models/claude-opus)
- [Model profile: GPT Astra — Codex & execution baseline](https://agent-tune.com/models/gpt-astra)
- [Model profile: Gemini Pro & Neon — personality profile](https://agent-tune.com/models/gemini-pro)
- [Model profile: Qwen Coder — open-weight coding profile](https://agent-tune.com/models/qwen-coder)
