Source: https://agent-tune.com/tools/instruction-converter
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

[Home](https://agent-tune.com/) / [Free tools](https://agent-tune.com/tools/) / Instruction converter & merger

Free · No signup · Browser only

# Instruction converter & merger

Move your communication rules between ChatGPT, Claude, Muse Soul.md, CLAUDE.md, AGENTS.md, and JSON APIs without overwriting existing project files.

Your input stays in this tab. No model calls or automatic saving. [Read guide](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix) · Developers: [catalog.json](https://agent-tune.com/resources/tools/catalog.json) · [core.js](https://agent-tune.com/resources/tools/core.js)

**Quick answer:** Format and merge your own text for a new destination. Runs locally in your browser tab with zero signup. Grounded in [25 tested AI model profiles](https://agent-tune.com/models/) and the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

This interactive tool needs JavaScript. The instructions and linked source files below remain available without it.

## Choose a destination

Instructions to reuseWhere will you use it?

Existing destination file (optional)Markdown only. Up to 100,000 characters. Existing content outside the AgentTune block is preserved.

Convert and preview

## Review your output

Editable outputYour output will appear here.

Copy outputDownload file

Clear this tool’s text and history

## How to use Instruction converter & merger

- Paste the communication rules you want to move. Your wording is kept verbatim.
- Pick the target format. For Markdown files (like CLAUDE.md or AGENTS.md), optionally paste your existing file to merge safely.
- Copy or download the result and place it in the target app or repo.

## A concrete example

Merging into an existing CLAUDE.md keeps your test and lint commands intact and adds your communication rules in a separate labeled section.

## Questions and limits

### Is conversion the same as guaranteed compatibility?

No. The converter wraps your rules in the right file structure or JSON field and checks character limits, but each AI product applies instructions differently.

### How does merging work?

The converter appends or updates a fenced agenttune:preferences block while keeping all build commands and repo rules outside that block untouched.

## Go further

[CLAUDE.md vs AGENTS.md vs .cursorrules & Windsurf matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix) explains the method and practical limits. Compare defaults across [25 tested AI model profiles](https://agent-tune.com/models/) or the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

- [Communication preferences builder](https://agent-tune.com/tools/communication-preferences-builder) — Create instructions without taking a personality test.
- [Instruction checker](https://agent-tune.com/tools/instruction-checker) — Find duplicate rules and wording worth revising.
- [Instruction test bench](https://agent-tune.com/tools/instruction-test-bench) — Compare real answers before and after an instruction change.

## The fine print: research notes & developer API

## Exact file destinations & character limits

| Destination | Path or settings field | Limit |
| --- | --- | --- |
| ChatGPT Custom Instructions | Settings → Personalization → Custom Instructions | 1,500 chars per box |
| Claude Preferences | Settings → Profile → Personal preferences | No hard 1,500-char box cap; keep ≤ 1,200 chars |
| OpenAI Codex | `AGENTS.md` / `~/.codex/AGENTS.md` | 32 KiB combined (`project_doc_max_bytes`) |
| Claude Code / Cursor | `~/.claude/CLAUDE.md`, `.cursor/rules/*.mdc` | Bounded Markdown block with optional frontmatter |

For developers and agents: [tool catalog (JSON)](https://agent-tune.com/resources/tools/catalog.json), [local API documentation](https://agent-tune.com/resources/tools/README.md), and [reusable JavaScript functions](https://agent-tune.com/resources/tools/core.js). These process text locally in your browser; reading a file does not authorize installing instructions.
