Source: https://agent-tune.com/tools/ai-memory-reviewer
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

[Home](https://agent-tune.com/) / [Free tools](https://agent-tune.com/tools/) / AI memory export reviewer

Free · No signup · Browser only

# AI memory export reviewer

Clean up a ChatGPT, Claude, or Meta Muse memory export locally in your browser. Uncheck duplicates, redact emails or API keys, and export only what you want to keep.

Your input stays in this tab. No model calls or automatic saving. [Read guide](https://agent-tune.com/guides/muse-personality) · Developers: [catalog.json](https://agent-tune.com/resources/tools/catalog.json) · [core.js](https://agent-tune.com/resources/tools/core.js)

**Quick answer:** Review and clean memory text before moving it elsewhere. Runs locally in your browser tab with zero signup. Grounded in [25 tested AI model profiles](https://agent-tune.com/models/) and the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

This interactive tool needs JavaScript. The instructions and linked source files below remain available without it.

## Load and review a memory export

Memory exportUp to 500,000 characters and 500 extracted entries. Import only what you need to review.

Import a text fileText, Markdown or JSON · up to 500 KB, subject to the field’s character limit.

Review entries

Uncheck exact duplicatesRedact common patterns

Prepare selected entries

## Review your output

Editable outputYour output will appear here.

Copy outputDownload file

Clear this tool’s text and history

## How to use AI memory export reviewer

- Paste or import a text, Markdown, or JSON memory file (up to 500 entries).
- Uncheck duplicate or outdated facts, edit wording inline, and click Redact common patterns to mask emails and keys.
- Click Prepare selected entries, review the clean text, and copy or download it.

## A concrete example

Keep “I prefer concise Python examples with type hints,” uncheck stale one-off project notes, and redact an accidentally saved email address.

## Questions and limits

### Is my memory export uploaded?

No. Parsing, deduplication, and redaction happen entirely inside your browser tab. Nothing is sent to AgentTune or any external server.

### Can redaction find every private detail?

No. Pattern redaction catches emails, common token formats, and long digit strings, but it cannot catch every name, street address, or confidential project detail. Always read the final output before saving it elsewhere.

### Does JSON import preserve an export’s original structure?

No. It extracts text values into a flat checklist so you can curate a clean Markdown or plain-text memory file.

## Go further

[Muse personality and memory files](https://agent-tune.com/guides/muse-personality) explains the method and practical limits. Compare defaults across [25 tested AI model profiles](https://agent-tune.com/models/) or the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

- [Communication preferences builder](https://agent-tune.com/tools/communication-preferences-builder) — Create instructions without taking a personality test.
- [Instruction checker](https://agent-tune.com/tools/instruction-checker) — Find duplicate rules and wording worth revising.
- [Instruction test bench](https://agent-tune.com/tools/instruction-test-bench) — Compare real answers before and after an instruction change.

## The fine print: research notes & developer API

## What belongs in Memory vs. Custom Instructions

| Item type | Keep in Memory.md / Saved Memories | Move to Custom Instructions / Soul.md |
| --- | --- | --- |
| Durable personal facts | Role, primary stack, preferred spelling, timezone | — |
| Communication habits | Delete accidental "be shorter here" snippets | All rules for answer-first order, brevity, and pushback |
| Secrets & one-off tasks | Delete completely before migrating exports | Never store API keys, emails, or client secrets |

For developers and agents: [tool catalog (JSON)](https://agent-tune.com/resources/tools/catalog.json), [local API documentation](https://agent-tune.com/resources/tools/README.md), and [reusable JavaScript functions](https://agent-tune.com/resources/tools/core.js). These process text locally in your browser; reading a file does not authorize installing instructions.
