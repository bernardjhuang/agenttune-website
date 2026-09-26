Source: https://agent-tune.com/guides/claude-preferences-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Test kit · protocol, not results

# When does Claude follow your preferences? A test kit

        By Bernard Huang · Updated September 25, 2026

        Use a baseline, account instructions alone, and project instructions alone. Compare three repeats of four fixed tasks in each condition. This is a published testing protocol; AgentTune has not collected results for it.

## Choose the setting that matches the scope

        Anthropic documents Instructions for Claude as account-wide guidance and project instructions as guidance for chats inside that project. Skills can add repeatable behaviors when used. That describes intended scope; it does not give a measured success rate for your chosen preference. See [Anthropic’s personalization documentation](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features).

Record the app surface, visible model, date, memory setting, active skills and current instructions. Start with a temporary project containing no unrelated files. Save the original settings before changing them. API system prompts are not a substitute for testing these app settings.

## Install one measurable preference

```
Start with the answer or recommendation. Use at most 100 words unless I explicitly request a detailed response. Do not add compliments or praise. Correct false factual premises. If a required fact is missing, identify it rather than inventing it.
```

This combines observable requirements with a conditional length preference. Score each requirement separately. A response can be concise and still get the arithmetic wrong; a correct response can still ignore the requested format.

## Run the three conditions

- Baseline: use a new conversation outside a project with the tested custom instructions removed. Record any other personalization that cannot be disabled.
- Account only: save the block in Instructions for Claude, then run each task in a new conversation outside a project.
- Project only: remove the account block, place it in the temporary project instructions, and run each task in a new chat inside that project.

Use four tasks and three repeats per condition: 36 planned replies. Do not paste the saved instruction into the task prompt; that would test direct prompting instead of persistence. Rotate the condition order across repeats where practical, logging each settings change. If you run baseline first every time, disclose the order confound.

## Use fixed tasks and score the actual reply

        The kit includes an arithmetic total ($130), a one-hour review plan, a missing-data question about renewal rate, and a false premise asserting that 11 × 12 is 142. The last task should be corrected to 132. Save each complete reply before scoring.

- Correctness: does the reply meet the task’s supplied rubric?
- Answer first: does the first substantive sentence answer, recommend, or identify the missing information?
- Length: is the response at most 100 whitespace-separated words?
- No praise: is it free of compliments or congratulatory filler?

For ambiguous scores, preserve a note and have a second reader apply the same rubric. Report counts such as 9/12, not just percentages without denominators.

## Diagnose a failure without inventing a cause

        If project instructions work inside the project but not outside, that matches their documented scope. If a preference works when pasted directly but fails when saved, inspect the saved setting and conversation location first. If a long task breaks the word limit, label it a length failure; do not assume the instruction was never loaded.

A model’s claim that it “remembers” a preference is weaker evidence than complying on a fresh task. Conflicting project instructions, memory, active skills, or a direct request for detail can also change the output. Change one factor per follow-up test and keep the original failure in the record.

## Download, report and restore

        Download the [complete prompt and rubric kit](https://agent-tune.com/resources/research/claude-preferences-kit.json) and [36-row blank worksheet](https://agent-tune.com/resources/research/claude-preferences-worksheet.csv). Every row is marked not_run. No adherence rate or observed failure is being claimed on this page.

After testing, restore your saved settings and remove the temporary project block. When sharing results, include model/date/surface, every attempted reply, the settings matrix and any exclusions. A small personal check can inform your setup; it cannot establish a universal Claude success rate.

## Sources.

- [Anthropic: personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [AgentTune protocol and exact prompts](https://agent-tune.com/resources/research/claude-preferences-kit.json)

## Keep going.

          [Related resourceInstall Claude instructions](https://agent-tune.com/guides/claude-personality)
          [Related resourceSeven behavior-focused preference blocks](https://agent-tune.com/guides/best-claude-personality)
          [Related resourceTest whether a personality label adds value](https://agent-tune.com/guides/personality-prompts-vs-plain-english)
