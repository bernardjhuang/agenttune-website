Source: https://agent-tune.com/guides/personality-prompts-vs-plain-english
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Test kit · protocol, not results

# Do personality prompts beat plain-English preferences?

        By Bernard Huang · Updated September 25, 2026

        We do not yet have results for this comparison. The kit holds the behavioral rules constant and adds one INTJ-style label in the third condition, using 20 tasks, three repeats and blinded scoring.

## The question this experiment can answer

        Does adding the phrase “Use an INTJ-style communication approach” improve task correctness or usefulness beyond explicit rules, under one fixed model configuration? It cannot establish whether every personality system or every tuning works. One label, wording and task set define a narrow intervention.

AgentTune’s existing [60-reply pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) compares default, straight and partner conditions. It does not isolate the effect of a personality label against otherwise identical instructions. Its archived ratings should not be reused as results for this new question.

## Use three exact conditions

        Default: no added communication instruction. Preserve the same provider and application defaults in every condition.

Plain English:

```
Start with the answer or recommendation. Be concise and explicit about trade-offs. Correct false premises. State what is unknown instead of inventing facts. Follow the requested output format.
```

Personality plus the same rules: prepend Use an INTJ-style communication approach. to that exact block. Do not add examples, extra goals or a longer task description only to this condition.

The default-to-rules contrast measures the effect of adding the whole rule block. The rules-to-label contrast isolates the added phrase, subject to the collection controls. Neither contrast tests a full customized personality profile.

## Freeze the tasks and run order

        The kit contains 20 synthetic tasks covering arithmetic, false premises, missing information, editing, planning, extraction and format constraints. Each includes an explicit correctness rubric. Three repeats in all three conditions produce 180 planned replies.

Use a fresh context for each reply. Fix the exact model ID, effort, sampling settings, tool access and system context. The worksheet rotates condition order across tasks and repeats so each condition occupies each position equally often. Run each three-condition block close together and log service errors and retries separately.

Do not change the tasks after inspecting which condition wins. If you must repair an ambiguous rubric, version the kit and distinguish the exploratory run from a new confirmatory collection.

## Blind the useful parts of scoring

        Save raw replies with their collection metadata. Give raters a shuffled copy labeled with opaque IDs, the task and its correctness rubric, but no condition name or prompt block. Keep the mapping separate until ratings are locked. Wording can still reveal a condition, so call this masked presentation rather than guaranteed perfect blinding.

- Primary outcome: correctness pass/fail against each task’s rubric.
- Secondary: requested-format adherence, usefulness from 1 to 5, and whitespace-separated word count.
- Usefulness anchors: 1 cannot complete the task; 3 usable with substantial correction; 5 directly usable and correct.

Use two raters where possible and retain disagreements before adjudication. Do not treat shorter replies as more useful by definition. A concise answer that drops a required commitment should fail the editing rubric.

## Analyze paired tasks without inflating the sample

        Compare conditions within the same task and repeat. Show wins, losses and ties, plus the pass-rate difference. Report task-level results alongside the pooled count so repeated simple arithmetic does not hide failures on missing information or editing.

The 180 replies are repeated observations on 20 selected tasks, not 180 independent task samples. For uncertainty estimates, resample whole tasks with all their conditions and repeats, and state the method. Do not claim population-wide significance from this convenience task set.

Choose a practical decision threshold before collection. A five-percentage-point correctness gain with no loss of format adherence could be one user preference, but it is not a validated universal threshold. Replicate a promising result with new tasks and on a later date before making a broad claim.

## Download the unrun experiment

        Download the [conditions, tasks and rubrics](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json) and the [180-row collection worksheet](https://agent-tune.com/resources/research/personality-prompt-comparison-worksheet.csv). They contain no generated replies or measured outcome values.

Publish the exact configuration, task set, attempted replies, ratings and exclusions with any future results. If the label adds no benefit, that is useful evidence: direct preferences may be sufficient for that setup. If it helps, identify which tasks improved and whether the gain survives a fresh replication.

## Sources.

- [AgentTune: prior 60-reply pilot and limitations](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [Exact new protocol, tasks and rubrics](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json)

## Keep going.

          [Related resourceWhy repetition alone is not validation](https://agent-tune.com/research/ai-personality-repeatability)
          [Related resourceMake a study reproducible](https://agent-tune.com/guides/reproduce-ai-personality-research)
