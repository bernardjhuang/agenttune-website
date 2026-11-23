Source: https://agent-tune.com/guides/codex-agents-md-guide
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · OpenAI Codex

# OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides.

By Bernard Huang · Updated November 17, 2026

How Codex discovers, orders, and truncates ~/.codex/AGENTS.md, repo AGENTS.md, and AGENTS.override.md for GPT-6 Astra and GPT-6 Sol.

**Quick answer:** Codex reads your personal ~/.codex/AGENTS.md first, then walks from the repo root down to your working directory, concatenating AGENTS.md files until their combined size hits 32 KiB (project_doc_max_bytes = 32768 bytes). In any folder, AGENTS.override.md replaces the sibling AGENTS.md. Files closer to your current folder appear later in the prompt and win conflicts.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/codex-agents-md-guide.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## The exact AGENTS.md discovery and merge order.

Codex builds its instruction chain once when a session starts:

| Order | File path | Behavior &amp; precedence |
| --- | --- | --- |
| 1 (First) | ~/.codex/AGENTS.override.md or ~/.codex/AGENTS.md | Your personal global defaults across all projects (also editable in the desktop app under Settings → Personalization). |
| 2 | &lt;repo-root&gt;/AGENTS.override.md or &lt;repo-root&gt;/AGENTS.md | Repository-wide build, test, and architecture rules shared with the team. |
| 3 (Last) | Intermediate folders down to &lt;cwd&gt;/AGENTS.override.md or &lt;cwd&gt;/AGENTS.md | Package or subfolder rules. Appears last in the prompt, so it wins conflicts with earlier files. |

In any folder where both `AGENTS.override.md` and `AGENTS.md` exist, Codex loads `AGENTS.override.md` and skips the sibling `AGENTS.md`.

## The 32 KiB cap (project_doc_max_bytes) and silent truncation.

By default, Codex enforces a combined budget of **32 KiB (32,768 bytes)** across all discovered instruction files via `project_doc_max_bytes` in `~/.codex/config.toml`. Once the total hits 32 KiB, Codex stops reading further rules.

Two practical rules follow:

- **Keep `~/.codex/AGENTS.md` under 2 KiB:** A 25 KiB personal file leaves almost no room for repo or package `AGENTS.md` files in a monorepo. Fifteen to twenty-five lines is plenty for personal tone.
- **Raise the cap or link docs when needed:** If your repo requires large instruction files, increase `project_doc_max_bytes` in `~/.codex/config.toml` or move long reference manuals into linked files.

## What belongs in ~/.codex/AGENTS.md vs repo AGENTS.md.

Separate personal communication habits from shared team rules:

- **`~/.codex/AGENTS.md` (personal):** How GPT-6 Astra or GPT-6 Sol should talk to you—answer-first order, prose vs tables, approval checkpoints, and pushback on weak premises.
- **`/AGENTS.md` (team):** Build commands, test runners, linter flags, and architecture boundaries that apply to everyone.
- **`/AGENTS.override.md` (local gitignored override):** Use only when you need to temporarily override a broken repo `AGENTS.md` on your machine.

Starter personal block for `~/.codex/AGENTS.md` (~620 bytes, leaving over 31 KiB for repo files):

```markdown
## How to communicate with me

- Lead with the result, diff, or recommendation. Put derivation after.
- Use plain prose by default; use tables only when comparing three or more options.
- Drop hedges and filler openers. State uncertainty in one line when relevant.
- Push back when an assumption in my prompt conflicts with the codebase.
- Follow through on authorized implementation work; ask for approval only when scope or permissions are ambiguous.
```

## How personality = "none" in config.toml interacts with AGENTS.md.

As noted in our [GPT-6 Astra guide](https://agent-tune.com/guides/astra-personality) and [GPT-6 Sol guide](https://agent-tune.com/guides/sol-personality), Codex 0.155.x retired the older Friendly/Pragmatic personality picker. Setting `personality = "none"` in `~/.codex/config.toml` strips the built-in personality block from the system prompt (which on Astra also removes default technical-writing rules). Leaving `config.toml` at its default and adding 6–8 lines to `~/.codex/AGENTS.md` is safer and easier to audit.

## Questions people ask.

### What is the maximum file size for AGENTS.md in OpenAI Codex?

By default, OpenAI Codex reads up to 32 KiB (32,768 bytes) combined across all AGENTS.md files in the hierarchy, controlled by project_doc_max_bytes in ~/.codex/config.toml.

### What is the difference between AGENTS.md and AGENTS.override.md?

In any directory where AGENTS.override.md is present, Codex loads AGENTS.override.md instead of the sibling AGENTS.md in that same directory. Files in parent or child directories still merge normally.

### Which wins when ~/.codex/AGENTS.md and the repo's AGENTS.md conflict?

The repository's AGENTS.md (and any subdirectory AGENTS.md closer to your current working directory) is appended later in the prompt and overrides conflicting rules from ~/.codex/AGENTS.md.

### Why didn't Codex pick up my edits to AGENTS.md?

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
- [Guide: The layer your AGENTS.md is missing (coding agent personality)](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Guide: Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
- [Guide: AI custom instructions character limits (2026 cheat sheet)](https://agent-tune.com/guides/ai-custom-instructions-character-limits)
