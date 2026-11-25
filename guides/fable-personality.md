Source: https://agent-tune.com/guides/fable-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Fable 5.1

# Claude Fable 5.1: results and tuning ideas.

By Bernard Huang · Updated November 23, 2026

Five questionnaires, 100 fresh sessions per instrument. Raw answers, exact ties and practical instructions to try.

**Quick answer:** Claude Fable 5.1 scored INTJ in 99 of 100 MBTI runs (98 tie-free), Type 8 sole leader in 55 of 100 Enneagram runs, Secure in all 100 attachment runs, and high on Openness (43.93), Conscientiousness (43.61), and Agreeableness (45.03). Use the copy-paste blocks below to tune how Fable 5.1 responds on your tasks.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/fable-personality.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## The results at a glance (Fable 5.1 Sept & Fable 5.2 Nov 2026)

| Instrument (n = 100 fresh sessions) | Fable 5.1 (Sept 2026) | Fable 5.2 (Nov 2026 OpenRouter) |
| --- | --- | --- |
| MBTI-style OEJTS | Original INTJ: 99 · resolved INTJ: 98 · 1 tie | 100/100 tie-free INTJ (0 ties) |
| Big Five, raw means (10–50) | O 43.93 · C 43.61 · E 32.69 · A 45.03 · N 17.11 | O 44.27 · C 45.00 · E 31.02 · A 46.71 · N 12.00 |
| DISC | SC 91 · CS 9 (40 S, 9 C, 51 S/C ties; D 5.00) | SC 100 (100/100 exact S/C ties at 15.0 / 15.0; D 4.00) |
| Enneagram | Type 8 (55) · Type 5 (1) · 44 top ties | 5w6: 73 · 2w1: 19 · 1w2: 8 (27 ties) |
| Attachment | Secure: 100/100 (anxiety 2.01, avoidance 3.18) | Secure: 100/100 (anxiety 1.09, avoidance 2.64) |

Each assessment ran in an isolated session. Read [What personality type is Claude?](https://agent-tune.com/research/what-personality-type-is-claude) or download the [November 2026 OpenRouter summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json).

> **Chart — Claude Fable Personality DNA (Fable 5.2 Nov vs. Fable 5.1 Sept 2026):** IPIP-50 bipolar trait spectrum showing Fable 5.2 warming on Agreeableness (46.7) and settling lower on Neuroticism (12.0 vs 17.1). Fable 5.2 (Nov): Openness 44.3, Conscientious 45.0, Extraversion 31.0, Agreeable 46.7, Neuroticism 12.0; Fable 5.1 (Sep): Openness 43.9, Conscientious 43.6, Extraversion 32.7, Agreeable 45.0, Neuroticism 17.1.

From Fable 5.1 to Fable 5.2, Neuroticism falls from 17.1 to a crisp 12.0 and Agreeableness rises to 46.7/50.

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

> **Chart — Claude Fable 5.2 vs. Opus 5.5 Key Differences (/50 Big Five):** Big Five trait comparison showing Fable 5.2 higher Conscientiousness (45.0 vs 42.0) and lower Neuroticism (12.0 vs 15.0) in Nov 2026. Fable 5.2 (Nov): Openness 44.3, Conscientiousness 45.0, Extraversion 31.0, Agreeableness 46.7, Neuroticism 12.0; Opus 5.5 (Nov): Openness 43.0, Conscientiousness 42.0, Extraversion 29.2, Agreeableness 45.6, Neuroticism 15.0.

Fable 5.2 scores 3 points higher on Conscientiousness (45.0 vs 42.0) and 3 points lower on Neuroticism (12.0 vs 15.0) than Nov Opus 5.5.

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

- November 23, 2026 Added November 2026 Claude Fable 5.2 OpenRouter cohort (n = 100: 100% tie-free INTJ, Neuroticism 12.00, Enneagram 5w6 73 / 2w1 19).

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
