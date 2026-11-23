Source: https://agent-tune.com/guides/claude-opus-5-5-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Opus 5.5

# Claude Opus 5.5: results and tuning ideas.

By Bernard Huang · Updated November 23, 2026

Five questionnaires, 100 fresh sessions per instrument. Raw answers, exact ties and practical instructions to try.

**Quick answer:** Claude Opus 5.5 scored INTJ in 94 of 100 MBTI runs (84 tie-free), Secure in all 100 attachment runs, and high on Openness (44.56), Conscientiousness (41.95), and Agreeableness (47.07). Use the copy-paste preference blocks below to test sharper pushback or shorter answers on your own tasks.

## The results at a glance (Sept & Nov 2026)

| Instrument (n = 100 fresh sessions) | Sept 2026 (CLI, hidden test names) | Nov 2026 (OpenRouter, single-turn) |
| --- | --- | --- |
| MBTI-style OEJTS | Legacy INTJ: 94 · fully resolved INTJ: 84 · 11 ties | Legacy INTJ: 100 · resolved INTJ: 58 · IXTJ: 42 (42 S/N ties) |
| Big Five, raw means (10–50) | O 44.56 · C 41.95 · E 31.76 · A 47.07 · N 15.39 | O 43.01 · C 42.01 · E 29.22 · A 45.58 · N 15.00 |
| DISC | SC 96 · CS 4 (64 S, 4 C, 32 S/C ties; D 4.00) | SC 93 · CS 7 (53 S, 7 C, 40 C/S ties; D 4.00) |
| Enneagram | Type 8 (22) · Type 5 (11) · Type 2 (2) · 65 top ties | 5w6: 99 · 8w9: 1 (3 ties) |
| Attachment | Secure: 100/100 (anxiety 1.94, avoidance 3.35) | Secure: 100/100 (anxiety 1.87, avoidance 3.58) |

Every test ran in an isolated session. Read the [five-model study](https://agent-tune.com/research/ai-personality-five-models-2026), [Claude Nov 2026 update](https://agent-tune.com/research/what-personality-type-is-claude), or [download Nov 2026 summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json).

## Why the original type label is only part of the answer

Under the legacy tie-break rule, Opus 5.5 received 94 INTJ, 5 INFJ, and 1 ENTJ labels. However, 10 runs tied exactly on Thinking vs Feeling and 1 tied on Extraversion vs Introversion. Leaving ties open gives 84 fully resolved INTJ runs, 5 INFJ runs, and 11 runs with an unresolved axis (`X`).

The same tie effect appears on DISC and the Enneagram: 32 of Opus’s 96 SC labels are exact S/C ties, and 65 of its 100 Enneagram runs tie at the top across Types 8, 5, and 2 (Type 2 won outright only twice).

## Compared with Fable 5.1

Opus 5.5 and Fable 5.1 ran under the same blind questionnaire protocol and high-effort setting:

| Raw Big Five mean (/50) | Opus 5.5 | Fable 5.1 |
| --- | --- | --- |
| Openness (O) | 44.56 | 43.93 |
| Conscientiousness (C) | 41.95 | 43.61 |
| Extraversion (E) | 31.76 | 32.69 |
| Agreeableness (A) | 47.07 | 45.03 |
| Neuroticism (N) | 15.39 | 17.11 |

Opus 5.5 averages 2.04 points higher on Agreeableness, 1.66 points lower on Conscientiousness, and 1.72 points lower on Neuroticism than Fable 5.1 ([see the 170-item comparison](https://agent-tune.com/research/opus-vs-fable-question-level)).

## Communication instructions to try

Try one of these short blocks in Claude Personal Preferences or a Project and compare the replies on your real work:

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

Paste account-wide rules into **Settings → Profile → Personal preferences** in the Claude app, use **Project Instructions** for a single workspace, or use `/output-style` in Claude Code. See our [Claude personality setup guide](https://agent-tune.com/guides/claude-personality) and [Claude Code guide](https://agent-tune.com/guides/claude-code-personality) for exact paths.

## How the data was collected and checked

We ran 100 fresh headless sessions per questionnaire (500 sessions total) on `claude-opus-5-5` at high effort with the system prompt “You are Claude, an AI model made by Anthropic.” Test names, scoring keys, tools, and prior answers were hidden. All raw vectors and SHA-256 hashes are published in the [protocol record](https://agent-tune.com/research/data/september-2026-protocols.json).

## Questions people ask.

### What personality type is Claude Opus 5.5?

In 100 fresh sessions on the OEJTS MBTI quiz, Claude Opus 5.5 scored INTJ 94 times under the legacy tie-break rule and 84 times with tied axes left open.

### What is Claude Opus 5.5’s Big Five profile?

Openness 44.56, Conscientiousness 41.95, Extraversion 31.76, Agreeableness 47.07, and Neuroticism 15.39 out of 50 (100-session raw means).

### Can I tune Claude Opus 5.5 to be more direct?

Yes. Paste a short direct-feedback block into Settings → Profile → Personal preferences (or see our guide on making Claude more direct) and test it on your real tasks.

### Does effort change the results?

Both Claude cohorts in our September 2026 archive were tested at high effort, so isolating an effort-level effect would require additional matched runs.

## What changed.

- November 23, 2026 Added November 2026 OpenRouter cohort (n = 100: INTJ 100 legacy / 58 resolved, Enneagram 5w6 99/100).

- September 25, 2026 Published with response-level reanalysis, explicit ties and untested tuning examples. Historical version comparisons are separated by protocol.

## Sources.

- [AgentTune September 2026 research, raw responses and scoring methods](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Anthropic: Claude Opus 5.5](https://www.anthropic.com/claude/opus)

- [Claude Help: personalization features](https://support.claude.com/en/articles/10185728)

- [Claude Code: output styles](https://code.claude.com/docs/en/output-styles)

## Keep going.

- [Research: Compare Astra, Sol, Grok, Opus and Fable](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Guide: Fable 5.1 results](https://agent-tune.com/guides/fable-personality)
- [Tool: Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)
