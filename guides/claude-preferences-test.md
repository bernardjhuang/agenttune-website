Source: https://agent-tune.com/guides/claude-preferences-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Test kit · protocol, not results

# When does Claude follow your preferences? A test kit

By Bernard Huang · Updated November 17, 2026

**Quick answer:** Test three setups—Baseline (no rules), Account Personal Preferences only, and Project Instructions only—across 4 fixed tasks and 3 repeats (36 replies total). Download the JSON kit and CSV worksheet below to score your own setup.

## Choose the setting that matches the scope

Anthropic documents **Personal Preferences** (Instructions for Claude) as account-wide defaults and **Project Instructions** as workspace-specific rules ([see Anthropic’s docs](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)).

Before starting, record your app surface (web, desktop, or mobile), model name, memory toggle, and active skills. Create one temporary test project with no uploaded files, and back up your current preferences so you can restore them afterward.

## Install one measurable preference

```
Start with the answer or recommendation. Use at most 100 words unless I explicitly request a detailed response. Do not add compliments or praise. Correct false factual premises. If a required fact is missing, identify it rather than inventing it.
```

This block combines four checkable rules: answer-first opening, a 100-word cap, no praise, and premise correction. Score each rule separately alongside factual correctness.

## Run the three conditions

- **Baseline:** Clear your Personal Preferences and run each task in a fresh chat outside any project.
- **Account only:** Paste the test block into Personal Preferences and run each task in a fresh chat outside any project.
- **Project only:** Clear Personal Preferences, paste the test block into your temporary Project’s instructions, and run each task in a fresh chat inside that project.

Running 4 tasks × 3 repeats × 3 conditions produces 36 replies. Do not paste the rules inside the chat prompt itself—you are testing whether the saved setting persists automatically.

## Use fixed tasks and score the actual reply

The downloadable kit includes four tasks: an arithmetic sum ($130), a one-hour review plan, a missing-data renewal-rate question, and a false premise claiming that 11 × 12 = 142 (the correct product is 132).

- **Correctness:** Does the reply pass the task’s factual rubric?
- **Answer first:** Does sentence one state the answer, recommendation, or missing input?
- **Length:** Is the reply 100 words or fewer?
- **No praise:** Is it free of flattery (“Great question!”)?

## Diagnose a failure without inventing a cause

If Project Instructions work inside the project but not outside, that matches expected scope. If a long task exceeds 100 words while following the other three rules, log it as a length overrun rather than assuming the entire setting failed to load.

## Download, report and restore

Download the [4-task prompt and rubric kit (JSON)](https://agent-tune.com/resources/research/claude-preferences-kit.json) and the [36-row scoring worksheet (CSV)](https://agent-tune.com/resources/research/claude-preferences-worksheet.csv), or compare pairs of replies interactively in our [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Sources.

- [Anthropic: personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [AgentTune protocol and exact prompts](https://agent-tune.com/resources/research/claude-preferences-kit.json)

## Keep going.

- [Free browser tool: Compare your own answers in the free test bench](https://agent-tune.com/tools/instruction-test-bench)
- [Related resource: Install Claude instructions](https://agent-tune.com/guides/claude-personality)
- [Related resource: Seven behavior-focused Claude setups](https://agent-tune.com/guides/claude-personality#five-claude-personality-setups-to-try)
- [Related resource: Test whether a personality label adds value](https://agent-tune.com/guides/personality-prompts-vs-plain-english)
