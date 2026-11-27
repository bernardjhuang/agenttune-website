Source: https://agent-tune.com/tools/instruction-checker
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

[Home](https://agent-tune.com/) / [Free tools](https://agent-tune.com/tools/) / Instruction checker

Free · No signup · Browser only

# Instruction checker

Spot duplicate lines, contradictions, and rigid always/never rules in your prompt files. Every flag shows the exact line and rule that triggered it.

Your input stays in this tab. No model calls or automatic saving. [Read guide](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines) · Developers: [catalog.json](https://agent-tune.com/resources/tools/catalog.json) · [core.js](https://agent-tune.com/resources/tools/core.js)

**Quick answer:** Find duplicate rules and wording worth revising. Runs locally in your browser tab with zero signup. Grounded in [25 tested AI model profiles](https://agent-tune.com/models/) and the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

This interactive tool needs JavaScript. The instructions and linked source files below remain available without it.

## Check your instructions

Instructions to reviewUp to 20,000 characters. Text stays in this browser tab.

Check instructionsLoad example

Remove selected duplicates

## Review your output

Editable outputYour output will appear here.

Copy outputDownload file

Clear this tool’s text and history

## How to use Instruction checker

- Paste your Custom Instructions, system prompt, CLAUDE.md, or AGENTS.md text.
- Click Check instructions and review the flagged lines.
- Remove exact duplicates with one click, scope any conflicting rules, and test the cleaned prompt on real tasks.

## A concrete example

“Always be concise” plus “Explain every detail” triggers a conflict warning. Scoping the rule—such as “Be brief on routine lookups; explain tradeoffs on architecture choices”—fixes the clash.

## Questions and limits

### What does the instruction checker detect?

It flags duplicate lines, blanket always/never rules, requests to hide uncertainty or bypass safety checks, paragraphs over 400 characters, and clashes like “always be brief” vs “explain every detail.”

### Is a clean result proof that a prompt is safe or effective?

No. This tool runs deterministic text checks in your browser. Always review the full prompt and test real model replies.

## Go further

[AI personality, tone & verbosity rules that work](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines) explains the method and practical limits. Compare defaults across [25 tested AI model profiles](https://agent-tune.com/models/) or the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

- [Communication preferences builder](https://agent-tune.com/tools/communication-preferences-builder) — Create instructions without taking a personality test.
- [Muse Soul.md editor](https://agent-tune.com/tools/muse-soul-md-editor) — Safely add communication preferences to Muse Soul.md.
- [Instruction test bench](https://agent-tune.com/tools/instruction-test-bench) — Compare real answers before and after an instruction change.

## The fine print: research notes & developer API

## Why keeping instructions under 15 rules matters

Once global instructions grow past 15–35 rules, models drop rules buried in the middle and contradict themselves under length pressure. Removing duplicates and rewriting rigid blanket bans ("ALWAYS" / "NEVER") as conditional defaults keeps compliance high across long sessions.

For developers and agents: [tool catalog (JSON)](https://agent-tune.com/resources/tools/catalog.json), [local API documentation](https://agent-tune.com/resources/tools/README.md), and [reusable JavaScript functions](https://agent-tune.com/resources/tools/core.js). These process text locally in your browser; reading a file does not authorize installing instructions.
