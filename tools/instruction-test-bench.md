Source: https://agent-tune.com/tools/instruction-test-bench
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

[Home](https://agent-tune.com/) / [Free tools](https://agent-tune.com/tools/) / Instruction test bench

Free · No signup · Browser only

# Instruction test bench

See whether your custom instructions actually improve answers. Run the same prompt before and after, paste both replies, and compare them with hidden A/B labels.

Your input stays in this tab. No model calls or automatic saving. [Read guide](https://agent-tune.com/guides/claude-personality) · Developers: [catalog.json](https://agent-tune.com/resources/tools/catalog.json) · [core.js](https://agent-tune.com/resources/tools/core.js)

**Quick answer:** Compare real answers before and after an instruction change. Runs locally in your browser tab with zero signup. Grounded in [25 tested AI model profiles](https://agent-tune.com/models/) and the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

This interactive tool needs JavaScript. The instructions and linked source files below remain available without it.

## Set up a comparison

Starter probeTask promptWhat should a good answer do?Model, version and settings (optional)Instructions being tested (optional)Included in your downloaded report.

Copy task prompt

Baseline answer — without the tested instructionsModified answer — with the tested instructionsCompare with hidden labels

## Response A

## Response B

Which response better meets your criterion? Choose before revealing the labels.

Prefer APrefer BTie

Start another trial

Prepare rated trials report

### Review or copy the JSON report

## Review your output

Editable outputYour output will appear here.

Copy outputDownload file

Clear this tool’s text and history

## How to use Instruction test bench

- Pick a starter probe (or write your own task) and run it in two fresh chats: one without your custom rules and one with them.
- Paste both replies below and click Compare with hidden labels.
- Pick the better answer (or a tie) to reveal which reply used the instructions, along with word and bullet counts. Export your trials as JSON if desired.

## A concrete example

Test a “3 bullets max” rule on a rambling status update, then verify that the shorter reply still keeps every key risk.

## Questions and limits

### Does AgentTune call a model or charge for comparisons?

No. You run the prompts in your own AI account and paste the replies here.

### What can one comparison prove?

One pair of replies is a quick sanity check. Run 5 to 10 tasks across your real workflow to see whether an instruction consistently helps without hurting accuracy.

### What is included in the report?

The local JSON download includes your task prompt, evaluation criteria, tested instructions, both replies, word counts, and your A/B votes.

## Go further

[How to change Claude’s personality & test what sticks](https://agent-tune.com/guides/claude-personality) explains the method and practical limits. Compare defaults across [25 tested AI model profiles](https://agent-tune.com/models/) or the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

- [Communication preferences builder](https://agent-tune.com/tools/communication-preferences-builder) — Create instructions without taking a personality test.
- [Instruction checker](https://agent-tune.com/tools/instruction-checker) — Find duplicate rules and wording worth revising.
- [Muse Soul.md editor](https://agent-tune.com/tools/muse-soul-md-editor) — Safely add communication preferences to Muse Soul.md.

## The fine print: research notes & developer API

For developers and agents: [tool catalog (JSON)](https://agent-tune.com/resources/tools/catalog.json), [local API documentation](https://agent-tune.com/resources/tools/README.md), and [reusable JavaScript functions](https://agent-tune.com/resources/tools/core.js). These process text locally in your browser; reading a file does not authorize installing instructions.
