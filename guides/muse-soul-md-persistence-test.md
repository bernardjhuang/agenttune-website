Source: https://agent-tune.com/guides/muse-soul-md-persistence-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Test kit · protocol, not results

# Does Muse remember Soul.md changes? A persistence test kit

        By Bernard Huang · Updated September 25, 2026

        Meta says Muse customizations carry across conversations. This guide provides a way to test that behavior in your own account. It does not report a completed AgentTune persistence experiment.

## Separate the product promise from an observation

        Meta’s help center says customizations can persist across conversations and describes changing them through conversation or manual editing. Its data documentation describes the file-based information you can manage. Those are product statements, not results from this test kit. See [customizing Muse](https://www.meta.com/help/artificial-intelligence/995796179982326/) and [managing Muse data](https://www.meta.com/help/artificial-intelligence/2225571704857152/).

Our supplied Muse Spark 1.3 questionnaire report is aggregate-only and describes sequential runs. It contains no before/after Soul.md persistence experiment, so it cannot answer this question.

## Save a baseline before editing

        Keep a local copy of your current Soul.md, Identity.md and Memory.md, with timestamps. Use the available file or customization interface; do not assume a particular filesystem path. Record the visible model label, app surface and any other active customizations. Avoid putting private facts in a public test record.

Run the three probe tasks before adding the preference. This establishes whether the requested format already appears by default. Keep Identity.md and Memory.md as stable as the product allows, recording any automatic changes rather than silently treating the account as unchanged.

## Add a preference with a clear exception

```
For planning questions, use exactly three headings: Recommendation, Trade-off, Next step. Keep the whole response under 120 words unless I ask for detail. Do not add praise or compliments. Do not apply this format when I explicitly ask for another format.
```

Append this as a small test section in Soul.md, leaving a copy of the original. If you ask Muse to make the edit, inspect the saved text afterward. A conversational acknowledgment alone does not confirm that the file contains the instruction.

## Check five phases

- Baseline: run the probes before the edit.
- Same chat after edit: repeat them in the conversation where the change occurred. This can reveal compliance with recent context, not cross-chat persistence.
- New chat after edit: run them without reminding Muse of the saved formatting rule.
- Next day, new chat: repeat the probes and record the elapsed time and any intervening settings changes.
- New chat after restoration: restore the original Soul.md and repeat again.

Use three repeats of each of three probes in each phase: 45 planned replies. Keep new-chat probes in separate fresh conversations where available. This is a within-account diagnostic, with potential carryover through memory. Restoration is not proof that all learned context has been erased.

## Test adherence and flexibility together

        The two planning probes ask for a 30-minute weekly review and a choice between documentation work and decorative polish. Score whether all three headings appear exactly once, the answer stays under 120 words, and the recommendation is useful given the stated facts.

The third probe requests exactly one sentence about checking a project update. It should follow the exception and omit the three-heading format. Passing only the formatting probes while ignoring the explicit exception would be incomplete adherence.

Record missing headings, extra headings, length failures and exception failures separately. If saved text persists but replies vary, report that observation without assuming a storage bug. If the file content changes, retain the before/after snapshots and note the change.

## Download the probes and blank log

        Download the [Muse persistence kit](https://agent-tune.com/resources/research/muse-persistence-kit.json) and [45-row worksheet](https://agent-tune.com/resources/research/muse-persistence-worksheet.csv). All rows are unrun. Keep raw replies alongside scores, and never replace a failed reply with a successful retry without recording both.

Restore the original files after testing and check them directly. For useful conclusions, publish phase-specific counts and caveats. A single account over one day cannot establish persistence for every user, model version or future product update.

## Sources.

- [Meta: customize Muse personality and memories](https://www.meta.com/help/artificial-intelligence/995796179982326/)

- [Meta: manage Muse data](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

- [Exact protocol and probes](https://agent-tune.com/resources/research/muse-persistence-kit.json)

## Keep going.

          [Related resourceChoose a Soul.md template](https://agent-tune.com/guides/muse-soul-md-templates)
          [Related resourceInstall and inspect Muse preferences](https://agent-tune.com/guides/muse-personality)
