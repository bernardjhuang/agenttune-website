Source: https://agent-tune.com/guides/codex-agents-md-guide
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · OpenAI Codex

# OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides.

By Bernard Huang · Updated November 5, 2026

Codex reads your personal ~/.codex/AGENTS.md first, then walks from the repository root down to your current working directory, concatenating AGENTS.md files in that order until their combined size reaches 32 KiB (project_doc_max_bytes = 32768 bytes). At any directory level, an AGENTS.override.md replaces the AGENTS.md in that same folder. Files closer to your working directory appear later in the prompt and win conflicts.

## The exact AGENTS.md discovery and merge order.

According to OpenAI's Codex documentation and open-source CLI implementation, Codex constructs its instruction chain once when a session starts:

| Order | File path | Behavior &amp; precedence |
| --- | --- | --- |
| 1 (First) | ~/.codex/AGENTS.override.md or ~/.codex/AGENTS.md | Your personal global defaults across all projects. Written by the desktop app under Settings, Personalization. |
| 2 | &lt;repo-root&gt;/AGENTS.override.md or &lt;repo-root&gt;/AGENTS.md | Repository-wide build, test, and architecture rules shared with the team. |
| 3 (Last) | Intermediate folders down to &lt;cwd&gt;/AGENTS.override.md or &lt;cwd&gt;/AGENTS.md | Package-specific or subdirectory rules. Appears latest in the prompt, so it wins conflicts with earlier files. |

At any directory level, if both AGENTS.override.md and AGENTS.md exist in the same folder, Codex loads AGENTS.override.md and skips the sibling AGENTS.md in that folder.

## The 32 KiB cap (project_doc_max_bytes) and silent truncation.

By default, Codex enforces a combined budget of 32 KiB (32,768 bytes) across all discovered instruction files, controlled by the project_doc_max_bytes setting in ~/.codex/config.toml. Once the running byte total hits that ceiling, Codex stops appending further rules.

That has two practical consequences:

- Bloated global files starve subdirectory rules: If your personal ~/.codex/AGENTS.md is 25 KiB of pasted style guides, a monorepo's package-level AGENTS.md may hit the 32 KiB limit and get cut off. Keep your personal ~/.codex/AGENTS.md under 2 KiB (around 15 to 25 lines).
- If you intentionally maintain large repo docs, raise the cap in config.toml: You can increase project_doc_max_bytes in ~/.codex/config.toml, or move reference manuals into on-demand skills or linked docs that the agent reads only when needed.

## What belongs in ~/.codex/AGENTS.md vs repo AGENTS.md.

Keep a clean boundary between personal communication preferences and team engineering rules:

- In ~/.codex/AGENTS.md (personal): How GPT-6 Astra or GPT-6 Sol should talk to you: answer-first ordering, plain prose vs tables, when to ask for approval, and how directly to challenge weak assumptions.
- In <repo-root>/AGENTS.md (team): Exact test commands, linter flags, directory layout, and architectural invariants that apply to every contributor regardless of personality.
- In <repo-root>/AGENTS.override.md (local gitignored override): Only when you need to temporarily replace a broken repository AGENTS.md on your machine without editing a tracked file.

Here is a compact personal block for ~/.codex/AGENTS.md (under 650 bytes, leaving over 31 KiB for your repositories):

```markdown
## How to communicate with me

- Lead with the result, diff, or recommendation. Put derivation after.
- Use plain prose by default; use tables only when comparing three or more options.
- Drop hedges and filler openers. State uncertainty in one line when relevant.
- Push back when an assumption in my prompt conflicts with the codebase.
- Follow through on authorized implementation work; ask for approval only when scope or permissions are ambiguous.
```

## How personality = "none" in config.toml interacts with AGENTS.md.

As covered in our [GPT-6 Astra guide](https://agent-tune.com/guides/astra-personality) and [GPT-6 Sol guide](https://agent-tune.com/guides/sol-personality), OpenAI retired the older Friendly and Pragmatic personality picker in Codex 0.155.x. Setting personality = "none" in ~/.codex/config.toml removes the built-in personality block from the system prompt, which for Astra also strips default technical-writing rules. Leaving config.toml at its default and adding six to eight lines to ~/.codex/AGENTS.md is safer and easier to audit.

## Questions people ask.

What is the maximum file size for AGENTS.md in OpenAI Codex?

By default, OpenAI Codex reads up to 32 KiB (32,768 bytes) combined across all AGENTS.md files in the hierarchy, controlled by project_doc_max_bytes in ~/.codex/config.toml.

What is the difference between AGENTS.md and AGENTS.override.md?

In any directory where AGENTS.override.md is present, Codex loads AGENTS.override.md instead of the sibling AGENTS.md in that same directory. Files in parent or child directories still merge normally.

Which wins when ~/.codex/AGENTS.md and the repo's AGENTS.md conflict?

The repository's AGENTS.md (and any subdirectory AGENTS.md closer to your current working directory) is appended later in the prompt and overrides conflicting rules from ~/.codex/AGENTS.md.

Why didn't Codex pick up my edits to AGENTS.md?

Codex builds its instruction chain once when a session or run starts. Start a new Codex session after editing ~/.codex/AGENTS.md or your repository's AGENTS.md.

## What changed.

- November 5, 2026 First published with the 32 KiB project_doc_max_bytes merge order and AGENTS.override.md precedence table.

## Sources.

- [ChatGPT & Codex Docs: AGENTS.md configuration](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

- [ChatGPT Docs: Personalize ChatGPT (Work and Codex)](https://learn.chatgpt.com/docs/personalize)

- [AgentTune: How to give GPT-6 Astra a personality](https://agent-tune.com/guides/astra-personality)

- [AgentTune: How to give GPT-6 Sol a personality](https://agent-tune.com/guides/sol-personality)

## Keep going.

- [Guide: How to give GPT-6 Astra a personality](https://agent-tune.com/guides/astra-personality)
- [Guide: How to give GPT-6 Sol a personality](https://agent-tune.com/guides/sol-personality)
- [Guide: The layer your AGENTS.md is missing (coding agent personality)](https://agent-tune.com/guides/coding-agent-personality)
- [Guide: Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
- [Guide: AI custom instructions character limits (2026 cheat sheet)](https://agent-tune.com/guides/ai-custom-instructions-character-limits)
