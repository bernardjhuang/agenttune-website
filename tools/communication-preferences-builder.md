Source: https://agent-tune.com/tools/communication-preferences-builder
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

[Home](https://agent-tune.com/) / [Free tools](https://agent-tune.com/tools/) / Communication preferences builder

Free · No signup · Browser only

# Communication preferences builder

Pick how much detail, warmth, and pushback you want from your AI. Review the plain-English rules and copy them into ChatGPT, Claude, Muse, or your coding agent.

Your input stays in this tab. No model calls or automatic saving. [Read guide](https://agent-tune.com/guides/chatgpt-custom-instructions-examples) · Developers: [catalog.json](https://agent-tune.com/resources/tools/catalog.json) · [core.js](https://agent-tune.com/resources/tools/core.js)

**Quick answer:** Create instructions without taking a personality test. Runs locally in your browser tab with zero signup. Grounded in [25 tested AI model profiles](https://agent-tune.com/models/) and the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

This interactive tool needs JavaScript. The instructions and linked source files below remain available without it.

## Choose your preferences

How much detail?Brief, with room to expandAnswer plus useful reasoningDetailed explanations and examplesToneDirect and plainWarm and calmNeutral and professionalFormatAdapt to the taskShort paragraphsBullets and stepsFeedbackCandid challenges with evidenceGentle concerns and alternativesTradeoffs and a recommendationClarifying questionsAsk when it changes the resultClarify the key ambiguity earlyAnything else? (optional)Include working preferences, not passwords or private account details.

Where will you use it?

Build my instructions

## Review your output

Editable outputYour output will appear here.

Copy outputDownload file

Clear this tool’s text and history

## How to use Communication preferences builder

- Pick your preferred detail level, tone, format, and feedback style.
- Choose where you will paste the rules and click Build. Edit any line in your own words.
- Back up your current instructions, paste the new block, and test it on two or three real tasks.

## A concrete example

Prefer brief answers → “Start with the answer. Keep routine replies brief; expand when the task needs explanation.”

## Questions and limits

### Do I need an MBTI or Enneagram type?

No. You pick your working preferences directly—no quiz required. If you want a type-based preset, use the custom instructions generator instead.

### Will these instructions work with every model?

They are plain-English behavioral rules. Because models weigh system prompts differently, always test a task before and after updating your rules.

## Go further

[Custom instructions examples](https://agent-tune.com/guides/chatgpt-custom-instructions-examples) explains the method and practical limits. Compare defaults across [25 tested AI model profiles](https://agent-tune.com/models/) or the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

- [Instruction checker](https://agent-tune.com/tools/instruction-checker) — Find duplicate rules and wording worth revising.
- [Muse Soul.md editor](https://agent-tune.com/tools/muse-soul-md-editor) — Safely add communication preferences to Muse Soul.md.
- [Instruction test bench](https://agent-tune.com/tools/instruction-test-bench) — Compare real answers before and after an instruction change.

## The fine print: research notes & developer API

## How each control maps to measured model behavior

In our 400-reply syntax study, short behavioral rules outperformed vague adjectives ("be smart and direct") on correctness (100% vs. 98.8%) and cut average reply length roughly in half (26.3 vs. 52.8 words). Each menu above generates explicit rules rather than adjectives.

| Setting | High-leverage choice | What changes in output |
| --- | --- | --- |
| Detail | Brief, with room to expand | Puts the answer in sentence 1 while keeping complex explanations available on demand. |
| Feedback | Candid challenges with evidence | Fights default 44–47/50 model Agreeableness without causing false contrarianism. |
| Clarifying questions | Ask when it changes the result | Prevents both unnecessary permission loops and silent guessing on ambiguous scope. |

For developers and agents: [tool catalog (JSON)](https://agent-tune.com/resources/tools/catalog.json), [local API documentation](https://agent-tune.com/resources/tools/README.md), and [reusable JavaScript functions](https://agent-tune.com/resources/tools/core.js). These process text locally in your browser; reading a file does not authorize installing instructions.
