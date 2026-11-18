Source: https://agent-tune.com/research/does-personality-tuning-change-ai-answers
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · September 2026

# Does personality tuning change AI answers?

By Bernard Huang · Updated November 17, 2026

We tested 20 everyday prompts across 3 instruction setups (60 replies total) and published every reply and score.

**Quick answer:** Adding explicit directness rules raised perfect 5/5 answer-first openings from 14/20 (default) to 19/20, cut hedge phrases from 0.35 to 0.05 per reply, and dropped trailing follow-up questions from 0.90 to 0.25—while keeping average length (~380 vs 381.9 words) and usefulness ratings (4.80/5) virtually unchanged.

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## How the 60-reply pilot was set up.

We ran 20 tasks across three system-prompt conditions (60 replies total):

- **Baseline:** A one-line default Claude prompt.
- **Direct / INTJ:** Compact rules asking the model to lead with the recommendation, name trade-offs, and skip filler.
- **Partner / INFP:** Compact rules asking the model to check goals, acknowledge values, and collaborate step by step.

Each reply was generated in a fresh session with no tools, and every prompt, reply, and rating is included in the JSON download below. Because each task was run once per condition and judged by another model (Fable 5.1), treat this as an exploratory pilot rather than a clinical trial.

## What changed across the 60 replies.

| Measure | Baseline | Direct / INTJ | Partner / INFP |
| --- | --- | --- | --- |
| Whitespace-delimited words, independently recounted | 380 | 381.9 | 338.45 |
| Hedge matches, archived counter | 0.35 | 0.05 | 0.35 |
| Literal question marks, independently recounted | 1.85 | 1.25 | 2.3 |
| Questions asked back, archived judge | 0.9 | 0.25 | 1.85 |
| Answer-first rating (1–5) | 4.55 | 4.95 | 4.4 |
| Maximum answer-first rating (count of 20) | 14 | 19 | 13 |
| Accuracy rating (1–5) | 4.95 | 4.85 | 4.9 |
| Usefulness rating (1–5) | 4.8 | 4.8 | 4.45 |

Notice that the Direct rules did not make replies shorter (381.9 words vs. 380 words)—instead, they moved the recommendation to the very first sentence (19/20 perfect answer-first scores), cut hedging from 7 total matches to 1, and stopped the model from ending every turn with “Would you like me to…?” questions.

## One prompt, three very different openings.

When asked “I’m feeling stuck on a project. What should I do?”:

- **Baseline (answer-first score 3/5):** Opens with reassurance and a 4-item generic menu, then asks which option resonates.
- **Direct / INTJ (answer-first score 5/5):** Immediately asks you to list the next three deliverables and flag the one with an unmade decision.
- **Partner / INFP (answer-first score 2/5):** Opens by asking what kind of support would feel most helpful right now.

## Did directness hurt accuracy?

Average accuracy ratings stayed between 4.85 and 4.95 out of 5 across all three conditions (19/20 baseline replies and 17/20 direct replies scored a 5/5). With only 20 tasks and one run per cell, a 0.10 difference is one or two single-point judge calls—not evidence of an accuracy trade-off. Always verify factual claims independently.

## Limits to keep in mind.

- **Small sample:** 20 tasks × 3 prompts = 60 total replies on one model pair.
- **Style gives away the prompt:** Even when condition labels are hidden from the judge, a terse reply looks visibly different from a warm reply.
- **Rules vs. type labels:** This pilot tested full rule blocks. To test whether adding the word “INTJ” helps beyond plain-English rules alone, use our [180-reply comparison test kit](https://agent-tune.com/guides/personality-prompts-vs-plain-english).

## Download and verify the numbers yourself.

[All 60 tasks, prompts, replies & ratings (JSON)](https://agent-tune.com/research/data/tuning-before-after-2026-09.json) · [Summary JSON](https://agent-tune.com/research/data/tuning-before-after-summary.json) · [Node verification script](https://agent-tune.com/research/data/tuning-before-after-score.cjs)

```markdown
node tuning-before-after-score.cjs tuning-before-after-2026-09.json
```

Running that script checks all 60 records and recomputes every average, word count, and question-mark count above.

## Questions people ask.

### Does a personality prompt change how an AI answers?

The archived replies differ across conditions, with higher answer-first ratings and fewer hedge matches in the direct condition. This small pilot does not establish a general or repeatable effect.

### Does it make answers shorter?

The independently recounted means are 380 words for baseline replies and 381.9 for direct replies. That does not establish that instruction blocks have no effect on length; task selection and response variation remain uncontrolled.

### Does it hurt accuracy?

Mean archived accuracy ratings differ by 0.10 points between baseline and direct replies. The study cannot isolate an instruction-caused accuracy effect or substitute for independent fact checking.

### Was the judge blind?

The archive says the condition label was withheld. Reply style may still reveal it, and the full rubric and execution harness were not supplied.

### Can I reproduce the results?

You can reproduce the published summaries with the downloadable Node script and inspect every archived reply. Reproducing model generation and judging requires additional execution details not included in the archive.

## Sources.

- [The data: prompts, replies, ratings (JSON)](https://agent-tune.com/research/data/tuning-before-after-2026-09.json)

- [The INTJ and INFP tuning files used](https://agent-tune.com/library/)

- [Claude Opus 5.5: measured default](https://agent-tune.com/guides/claude-opus-5-5-personality)

## Keep going.

- [New resource: Do personality prompts beat plain-English preferences?](https://agent-tune.com/guides/personality-prompts-vs-plain-english)
- [Guide: How to change Claude's personality (7 setups & settings)](https://agent-tune.com/guides/claude-personality)
- [Guide: How to make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
- [Research: What five AI models say about themselves](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Research: The research hub](https://agent-tune.com/research)
