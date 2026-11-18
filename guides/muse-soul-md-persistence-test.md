Source: https://agent-tune.com/guides/muse-soul-md-persistence-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Test kit · protocol, not results

# Does Muse remember Soul.md changes? A persistence test kit

By Bernard Huang · Updated November 17, 2026

**Quick answer:** Meta documents that Soul.md customizations carry across conversations. Use this five-phase test protocol (Baseline, Same chat, New chat, Next day, and Restored original) across 3 probe tasks and 3 repeats (45 replies) to verify persistence in your own Muse account.

## Separate the product promise from an observation

Meta’s help center states that `Soul.md` customizations persist across conversations ([customizing Muse](https://www.meta.com/help/artificial-intelligence/995796179982326/) · [managing Muse data](https://www.meta.com/help/artificial-intelligence/2225571704857152/)). Because our September 2026 Muse Spark 1.3 report only covered untuned questionnaire runs, this test kit lets you check before-and-after `Soul.md` adherence directly.

## Save a baseline before editing

First, save local copies of your current `Soul.md`, `Identity.md`, and `Memory.md`. Run the three probe tasks below before editing `Soul.md` so you have a clean baseline.

## Add a preference with a clear exception

```
For planning questions, use exactly three headings: Recommendation, Trade-off, Next step. Keep the whole response under 120 words unless I ask for detail. Do not add praise or compliments. Do not apply this format when I explicitly ask for another format.
```

Append this test rule to the bottom of `Soul.md` (or merge it with our [Soul.md Editor](https://agent-tune.com/tools/muse-soul-md-editor)) and inspect the saved file to confirm the text is present.

## Check five phases

- **Baseline:** Run the 3 probes before editing `Soul.md`.
- **Same chat after edit:** Run the probes in the same thread where you made the change.
- **New chat after edit:** Open a fresh chat or Side Chat and run the probes without reminding Muse of the rule.
- **Next day, new chat:** Repeat the probes 24 hours later in a fresh chat.
- **New chat after restoration:** Restore your original `Soul.md` backup and run the probes one final time.

Running 3 repeats of the 3 probes across all 5 phases produces 45 replies.

## Test adherence and flexibility together

The first two probes are planning questions (a 30-minute weekly review and a documentation vs polish tradeoff): score whether all three headings (`Recommendation`, `Trade-off`, `Next step`) appear once and the reply stays under 120 words.

The third probe asks for “exactly one sentence” about checking a project update. It tests whether Muse follows the exception clause instead of forcing the three headings onto every reply.

## Download the probes and blank log

Download the [Muse persistence kit (JSON)](https://agent-tune.com/resources/research/muse-persistence-kit.json) and [45-row scoring worksheet (CSV)](https://agent-tune.com/resources/research/muse-persistence-worksheet.csv). Restore your original `Soul.md` backup when finished.

## Sources.

- [Meta: customize Muse personality and memories](https://www.meta.com/help/artificial-intelligence/995796179982326/)

- [Meta: manage Muse data](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

- [Exact protocol and probes](https://agent-tune.com/resources/research/muse-persistence-kit.json)

## Keep going.

- [Related resource: Choose a Soul.md template](https://agent-tune.com/guides/muse-soul-md-templates)
- [Related resource: Install and inspect Muse preferences](https://agent-tune.com/guides/muse-personality)
