Source: https://agent-tune.com/guides/personality-prompts-vs-plain-english
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Test kit · protocol, not results

# Do personality prompts beat plain-English preferences?

By Bernard Huang · Updated November 17, 2026

**Quick answer:** This page provides an open test protocol (not completed results) comparing three conditions across 20 tasks and 3 repeats (180 replies): (1) Default, (2) Plain-English behavioral rules, and (3) those exact same rules plus 'Use an INTJ-style communication approach.'

## The question this experiment can answer

Does adding the sentence “Use an INTJ-style communication approach” improve accuracy or usefulness compared with the exact same behavioral rules without the label?

Our earlier [60-reply pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) compared an untuned default against two full communication blocks (Straight answers and Thinking partner). This 180-reply protocol goes one step further by isolating whether the four-letter MBTI label itself adds value on top of plain-English rules.

## Use three exact conditions

**1. Default:** No added communication instructions.

**2. Plain English:**

```
Start with the answer or recommendation. Be concise and explicit about trade-offs. Correct false premises. State what is unknown instead of inventing facts. Follow the requested output format.
```

**3. Personality label + the same rules:** Prepend `Use an INTJ-style communication approach.` to the exact Plain English block above. Change nothing else.

Comparing Condition 1 vs Condition 2 measures the impact of the plain-English rules. Comparing Condition 2 vs Condition 3 isolates the effect of the INTJ label.

## Freeze the tasks and run order

The downloadable kit includes 20 tasks across math, false premises, missing facts, editing, planning, data extraction, and formatting—each with a pass/fail correctness rubric. Running 3 repeats across all 3 conditions produces 180 replies.

Use a fresh chat session for every reply, keep model ID and sampling settings fixed, and follow the worksheet’s rotated condition order so position bias cancels out.

## Blind the useful parts of scoring

Strip condition labels and give raters a shuffled sheet with opaque IDs, the task prompt, and the pass/fail rubric:

- **Primary outcome:** Correctness pass/fail against the task rubric.
- **Secondary outcomes:** Format compliance, usefulness (1–5 scale), and word count.
- **Usefulness anchors:** 1 = unusable; 3 = usable after edits; 5 = ready to use and accurate.

## Analyze paired tasks without inflating the sample

Compare the three conditions within the same task and repeat. Report wins, losses, ties, and pass-rate gaps across all 20 tasks, and treat the 20 tasks (not the 180 total replies) as the primary unit when estimating uncertainty.

## Download the unrun experiment

Download the [20 tasks and rubrics (JSON)](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json) and the [180-row scoring worksheet (CSV)](https://agent-tune.com/resources/research/personality-prompt-comparison-worksheet.csv). You can also run quick side-by-side checks right in your browser with the [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Sources.

- [AgentTune: prior 60-reply pilot and limitations](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [Exact new protocol, tasks and rubrics](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json)

## Keep going.

- [Free browser tool: Check your instructions for repetition and conflicts](https://agent-tune.com/tools/instruction-checker)
- [Related resource: Why repetition alone is not validation](https://agent-tune.com/research/ai-personality-repeatability)
- [Related resource: Make a study reproducible](https://agent-tune.com/guides/reproduce-ai-personality-research)
