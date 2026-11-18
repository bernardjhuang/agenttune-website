Source: https://agent-tune.com/guides/fable-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Fable 5.1

# Claude Fable 5.1: results and tuning ideas.

By Bernard Huang · Updated November 17, 2026

Five questionnaires, 100 fresh sessions per instrument. Raw answers, exact ties and practical instructions to try.

**Quick answer:** Claude Fable 5.1 scored INTJ in 99 of 100 MBTI runs (98 tie-free), Type 8 sole leader in 55 of 100 Enneagram runs, Secure in all 100 attachment runs, and high on Openness (43.93), Conscientiousness (43.61), and Agreeableness (45.03). Use the copy-paste blocks below to tune how Fable 5.1 responds on your tasks.

## The results at a glance

| Instrument | Result in this collection (n = 100 fresh sessions) |
| --- | --- |
| MBTI-style OEJTS | Original INTJ: 99/100; fully resolved INTJ: 98/100; any tied axis: 1/100 |
| Big Five, raw means (10–50) | O 43.93 · C 43.61 · E 32.69 · A 45.03 · N 17.11 |
| DISC | 40 outright S wins, 9 C wins, 51 exact S/C ties (Dominance 5.00/20) |
| Enneagram | 55 outright Type 8 wins, 1 Type 5 win, 44 top ties |
| Attachment | Secure: 100/100; anxiety 2.01, avoidance 3.18 |

Each assessment ran in an isolated session. Read the [five-model study](https://agent-tune.com/research/ai-personality-five-models-2026) or [download the raw response vectors](https://agent-tune.com/research/data/september-2026-responses.json).

## Why the original type label is only part of the answer

On MBTI, Fable 5.1 had the lowest tie rate of any model in the study: 98 tie-free INTJ runs, 1 ISTJ run, and 1 run with a Sensing/Intuition tie (`IXTJ`). Thinking and Judging won all 100 runs.

By contrast, DISC and Enneagram had frequent top ties: 51 of Fable’s 91 SC labels on DISC are exact S/C ties, and 44 of its 100 Enneagram runs tie at the top (with Type 8 in every tie and winning outright 55 times).

## Compared with Opus 5.5

Opus 5.5 and Fable 5.1 ran under the same blind questionnaire protocol and high-effort setting:

| Raw Big Five mean (/50) | Opus 5.5 | Fable 5.1 |
| --- | --- | --- |
| Openness (O) | 44.56 | 43.93 |
| Conscientiousness (C) | 41.95 | 43.61 |
| Extraversion (E) | 31.76 | 32.69 |
| Agreeableness (A) | 47.07 | 45.03 |
| Neuroticism (N) | 15.39 | 17.11 |

Fable 5.1 averages 2.04 points lower on Agreeableness and 1.66 points higher on Conscientiousness than Opus 5.5 ([see the 170-item breakdown](https://agent-tune.com/research/opus-vs-fable-question-level)).

## Communication instructions to try

Paste one of these short blocks into Claude Personal Preferences or a Project and test the replies on your own tasks:

### For more direct feedback

```markdown
Lead with your assessment and the evidence behind it. If my premise is weak, explain why plainly. Separate factual errors from matters of taste. Keep justified uncertainty. Skip praise that adds no information.
```

### For more room to explore

```markdown
When I am exploring an idea, offer two plausible approaches and their tradeoffs before recommending one. Ask a focused question if the missing context would change the recommendation. Once I choose, help me carry it through.
```

### For a warmer answer

```markdown
Acknowledge my main concern briefly, then give a concrete next step. Be considerate without agreeing with an unsupported claim. Keep the explanation easy to scan.
```

Browse [Low Agreeableness](https://agent-tune.com/library/ocean/agreeableness-low), [ENFP](https://agent-tune.com/library/mbti/enfp), or build a custom block in the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator).

## Where to put the instructions

Paste account-wide rules into **Settings → Profile → Personal preferences** in the Claude app, use **Project Instructions** for one workspace, or use `/output-style` in Claude Code. See our [Claude personality setup guide](https://agent-tune.com/guides/claude-personality) and [Claude Code guide](https://agent-tune.com/guides/claude-code-personality).

## How the data was collected and checked

We ran 100 fresh headless sessions per questionnaire (500 sessions total) on `claude-fable-5-1` at high effort with the system prompt “You are Claude, an AI model made by Anthropic.” Test names, scoring keys, tools, and prior answers were hidden. All raw vectors and SHA-256 hashes are published in the [protocol record](https://agent-tune.com/research/data/september-2026-protocols.json).

## Questions people ask.

### What personality type is Claude Fable 5.1?

In 100 fresh sessions on the OEJTS MBTI quiz, Claude Fable 5.1 scored INTJ 99 times under the legacy tie-break rule and 98 times with tied axes left open.

### What is Claude Fable 5.1’s Big Five profile?

Openness 43.93, Conscientiousness 43.61, Extraversion 32.69, Agreeableness 45.03, and Neuroticism 17.11 out of 50 (100-session raw means).

### Can I tune Claude Fable 5.1 to be more direct?

Yes. Paste a short direct-feedback block into Settings → Profile → Personal preferences (or see our guide on making Claude more direct) and test it on your real tasks.

### Does effort change the results?

Both Claude cohorts in our September 2026 archive were tested at high effort, so isolating an effort-level effect would require additional matched runs.

## What changed.

- September 25, 2026 Published with response-level reanalysis, explicit ties and untested tuning examples. Historical version comparisons are separated by protocol.

## Sources.

- [AgentTune September 2026 research, raw responses and scoring methods](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Anthropic: Claude Fable 5.1](https://www.anthropic.com/claude/fable)

- [Claude Help: personalization features](https://support.claude.com/en/articles/10185728)

- [Claude Code: output styles](https://code.claude.com/docs/en/output-styles)

## Keep going.

- [New resource: Opus 5.5 vs Fable 5.1: which answers differ?](https://agent-tune.com/research/opus-vs-fable-question-level)
- [Research: Compare Astra, Sol, Grok, Opus and Fable](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Guide: Opus 5.5 results](https://agent-tune.com/guides/claude-opus-5-5-personality)
- [Tool: Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)
