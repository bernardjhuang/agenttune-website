Source: https://agent-tune.com/guides/cursor-rules-copilot-gemini-md
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Coding Assistants

# Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md.

By Bernard Huang · Updated November 5, 2026

Put always-on Cursor communication rules in .cursor/rules/agenttune.mdc with alwaysApply: true in the YAML frontmatter. For GitHub Copilot, append your section to .github/copilot-instructions.md. For Gemini CLI and Code Assist, use ~/.gemini/GEMINI.md (personal) or repo GEMINI.md. For Claude Code, use ~/.claude/output-styles/agenttune.md or CLAUDE.md. For OpenAI Codex, use ~/.codex/AGENTS.md.

## Side-by-side comparison of coding agent instruction files.

| Tool | Personal (user-wide) path | Project (repo-committed) path | Required header / frontmatter |
| --- | --- | --- | --- |
| Cursor | Cursor Settings → Rules for AI | .cursor/rules/*.mdc | YAML frontmatter with description and alwaysApply: true |
| GitHub Copilot | VS Code user settings / personal instructions | .github/copilot-instructions.md (plus .github/instructions/*.instructions.md) | Plain Markdown (applyTo frontmatter optional in scoped files) |
| Gemini CLI &amp; Code Assist | ~/.gemini/GEMINI.md | GEMINI.md at repo root or subdirectories | Plain Markdown |
| Claude Code | ~/.claude/CLAUDE.md or ~/.claude/output-styles/*.md | CLAUDE.md at repo root | keep-coding-instructions: true in output-style files |
| OpenAI Codex | ~/.codex/AGENTS.md | AGENTS.md / AGENTS.override.md (32 KiB total cap) | Plain Markdown |

## 1. Cursor: .cursor/rules/agenttune.mdc with alwaysApply.

Cursor replaced the older single .cursorrules file with modular .mdc files inside .cursor/rules/. Each rule file starts with a three-line YAML frontmatter block telling Cursor when to attach the file. For communication rules that should apply in every composer and chat session, set alwaysApply: true:

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

remember that files inside .cursor/rules/ are often tracked in git. If you work on a shared repository and want your personal communication rules to stay private to your machine, add .cursor/rules/personal-*.mdc to .git/info/exclude or place personal tone preferences in Cursor's user-level Rules for AI setting.

## 2. GitHub Copilot: .github/copilot-instructions.md.

GitHub Copilot in VS Code, Visual Studio, JetBrains, and on GitHub.com automatically reads .github/copilot-instructions.md at the root of your repository. Because that file is shared by every contributor on the repository, keep the communication section focused on team-friendly clarity rules alongside your build and test commands:

```markdown
## Communication & review style

- Lead with the proposed fix or root cause before explaining background context.
- Prefer small, targeted diffs over unrelated refactors.
- State assumptions explicitly when test coverage or types are incomplete.
- Skip filler openings and generic sign-offs in chat and pull request summaries.
```

## 3. Gemini CLI and Code Assist: GEMINI.md.

Gemini CLI and Gemini Code Assist read ~/.gemini/GEMINI.md for your personal defaults and GEMINI.md in the repository root for project context. Putting your personal AgentTune profile in ~/.gemini/GEMINI.md keeps your voice consistent across every project without touching git history. See our full [Google Gemini personality guide](https://agent-tune.com/guides/gemini-personality) for details on combining GEMINI.md with Gems and Saved info.

## Exporting any of the 43 AgentTune profiles in one click.

On every profile page in the [AgentTune library](https://agent-tune.com/library/), choose Coding assistant in the first dropdown of the prompt picker, then pick Cursor · project rule, GitHub Copilot · repository instructions, Gemini CLI · GEMINI.md, Claude Code · output style, or Codex · personal instructions. The picker automatically wraps your selected tuning in the exact frontmatter and comments required by that tool.

## Questions people ask.

Did .cursor/rules/*.mdc replace .cursorrules in Cursor?

Yes. Cursor uses .cursor/rules/*.mdc files with YAML frontmatter (description, globs, and alwaysApply: true/false) so projects can separate always-on rules from file-pattern rules.

Where do I put personal communication rules so I don't commit them to a team repo?

Use ~/.codex/AGENTS.md in OpenAI Codex, ~/.claude/CLAUDE.md or ~/.claude/output-styles/ in Claude Code, ~/.gemini/GEMINI.md in Gemini CLI, or user-level Rules for AI in Cursor Settings.

Can I use the same AgentTune tuning across Cursor, Copilot, Claude Code, and Codex?

Yes. The core bullet points are portable across all coding assistants; only the file path and YAML frontmatter (such as alwaysApply: true for Cursor or keep-coding-instructions: true for Claude Code) differ.

## What changed.

- November 5, 2026 First published comparing .cursor/rules/*.mdc, .github/copilot-instructions.md, GEMINI.md, CLAUDE.md, and AGENTS.md.

## Sources.

- [GitHub Docs: Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

- [Claude Code Docs: Output styles](https://code.claude.com/docs/en/output-styles)

- [ChatGPT & Codex Docs: AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

## Keep going.

- [Guide: The layer your AGENTS.md is missing (coding agent personality)](https://agent-tune.com/guides/coding-agent-personality)
- [Guide: OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Guide: Claude Code personality: CLAUDE.md and /output-style](https://agent-tune.com/guides/claude-code-personality)
- [Guide: How to change Gemini's personality: Gems, Saved Info, and CLI](https://agent-tune.com/guides/gemini-personality)
- [Library: Browse all 43 personality tuning files](https://agent-tune.com/library/)
