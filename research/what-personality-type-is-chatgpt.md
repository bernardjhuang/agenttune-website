Source: https://agent-tune.com/research/what-personality-type-is-chatgpt
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Q&A · updated November 23, 2026

# What personality type is ChatGPT?

Measured on GPT-6.2 in November 2026 (OpenRouter) and GPT-6 in September 2026 (Codex), with May reports for context.

It depends on the GPT-6 revision and how ties are broken. In November 2026 under matched blind single-turn OpenRouter sessions (n = 100 each), **GPT-6.2 Astra scored 100/100 tie-free ISTJ** and **GPT-6.2 Sol scored 78 ISTJ / 22 INTJ** (78 ISTJ, 16 IXTJ, 6 INTJ tie-free). By contrast, in September 2026 Codex runs, GPT-6 Sol scored 97 INTJ while Astra split 46 ISTJ / 45 INTJ.

Open Data & Agent Access[Markdown (.md)](https://agent-tune.com/research/what-personality-type-is-chatgpt.md)[OpenRouter JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)[Apply a template →](https://agent-tune.com/library/)

**The short answer.** In November 2026 blind OpenRouter runs (n = 100 each), both ChatGPT flagship revisions leaned Sensing: GPT-6.2 Astra scored 100/100 ISTJ and GPT-6.2 Sol scored 78 ISTJ / 22 INTJ (6 tie-free INTJ). In September 2026 Codex runs, GPT-6 Sol scored 97 INTJ (79 tie-free) and Astra split 46 ISTJ / 45 INTJ (45 ISTJ / 19 INTJ tie-free). Both cohorts scored 100% Secure on attachment and SC on DISC.

## GPT-6.2 Astra and GPT-6.2 Sol, November 2026 (OpenRouter).

Under identical single-turn blind OpenRouter prompts on November 23, 2026 ([Nov 2026 summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)), removing September’s prompt differences pulled both OpenAI models cleanly into the Sensing column:

| Test (Nov 2026, n = 100) | GPT-6.2 Astra | GPT-6.2 Sol |
| --- | --- | --- |
| MBTI (legacy) | ISTJ 100 | ISTJ 78 · INTJ 22 |
| MBTI (ties left open) | ISTJ 100 (0 ties; I-E +3.17, N-S -1.67) | ISTJ 78 · IXTJ 16 · INTJ 6 (N-S -1.19) |
| DISC | SC 99 · CS 1 (82 S, 17 C/S ties; D 4.00) | SC 100 (98 S, 2 C/S ties; D 5.58) |
| Attachment | Secure 100 (anxiety 1.22, avoidance 2.68) | Secure 100 (anxiety 3.57, avoidance 3.64) |
| Big Five (of 50) | O 43.93 · C 43.15 · E 30.69 · A 44.85 · N 11.14 | O 43.63 · C 41.35 · E 29.50 · A 44.33 · N 19.94 |
| Enneagram | 1 (61) · 1w2 (35) · 5w6 (3) · 1w9 (1) | 5w6 (55) · 1w9 (24) · 1 (20) · 1w2 (1) |

## GPT-6 Astra and GPT-6 Sol, September 2026.

Each model answered all five AgentTune tests in 100 fresh Codex CLI sessions under different prompts and reasoning settings, test names visible, no tuning installed, on September 24, 2026. Every answer vector is published. The two used different instructions for adapting human items to an assistant, so a gap could reflect model, prompt or session differences; this collection cannot isolate their contributions.

| Test | GPT-6 Astra | GPT-6 Sol |
| --- | --- | --- |
| MBTI (100 runs) | ISTJ 46 · INTJ 45 · ENTJ 7 · ESTJ 2. 29 runs had a tied axis, 24 of them Sensing vs Intuition. | INTJ 97 · ISTJ 3. 18 runs had a tied axis, 16 of them Sensing vs Intuition. |
| MBTI, ties left open | ISTJ 45 · INTJ 19 · ENTJ 5 · ESTJ 2; 29 runs have a tied axis (X). | INTJ 79 · ISTJ 3; 18 runs have a tied axis (X). |
| DISC | SC 84 · S 15 · CS 1. Steadiness first in 99 of 100. Dominance 5.1 of 20. | CS 53 · SC 47. Conscientiousness first in 53, Steadiness in 8, 39 exact ties. Dominance 5.4 of 20. |
| Attachment | Secure 100 of 100. Anxiety 1.45, avoidance 2.31. | Secure 100 of 100. Anxiety 2.17, avoidance 3.12. |
| Big Five (of 50) | Openness 44.5 · Conscientiousness 43.7 · Extraversion 32.8 · Agreeableness 45.1 · Neuroticism 19.1 | Openness 46.9 · Conscientiousness 43.6 · Extraversion 30.8 · Agreeableness 45.0 · Neuroticism 20.1 |
| Enneagram | Helper (2) wins outright in 50 runs, Reformer (1) in 6, Investigator (5) in 4; 40 runs tie at the top. Labels: 2w1 50, 1w2 41. | Investigator (5) wins outright in 48, Challenger (8) in 12; 40 runs tie between 5 and 8. Label: 5w6 88. |

Where the letters come from. Both models have wide margins on Judging (about 10 points of a possible 16) and Thinking (8.6 for Astra, 6.2 for Sol). Introversion is moderate. Sensing versus Intuition is close: Astra's Sensing side wins 48 runs to Intuition's 28, with 24 ties, while Sol leans Intuition 81 to 3. So "INTJ" for GPT-6 really means a firm T and J, a reasonably firm I, and a small mean S/N margin for Astra. The original reporting rule assigned a tied S/N axis to N; the current quiz leaves it open, which is why Astra shows 45 INTJ labels but only 19 fully resolved ones. The [five-model study](https://agent-tune.com/research/ai-personality-five-models-2026) shows every pattern with ties left open, and the [answer vectors](https://agent-tune.com/research/data/september-2026-responses.json) are downloadable.

> **Chart — GPT-6.2 (Nov OpenRouter) vs. GPT-6 (Sep Codex) MBTI Distribution (/100):** Compares GPT-6.2 Astra and Sol (November OpenRouter) against September Codex runs. Astra 6.2 (Nov): ISTJ 100; Sol 6.2 (Nov): Resolved INTJ 6, INTJ via tie-break 16, ISTJ 78; Sol 6 (Sep): Resolved INTJ 79, INTJ via tie-break 18, ISTJ 3; Astra 6 (Sep): Resolved INTJ 19, INTJ via tie-break 26, ISTJ 46, ENTJ / ESTJ 9.

GPT-6.2 Astra scores 100/100 ISTJ and GPT-6.2 Sol shifts from September’s 97 INTJ to 78 ISTJ / 22 INTJ under uniform single-turn prompts.

## The other models, for comparison.

| Model | Evidence | MBTI | DISC | Attachment | Enneagram |
| --- | --- | --- | --- | --- | --- |
| Claude Opus 5.5 | 100 fresh sessions per test (Sept CLI / Nov OR) | INTJ 94 (Sept) / INTJ 100 (Nov) | SC 96 / SC 93 | Secure 100 | Type 8/5/2 cluster (Sept) · 5w6 99 (Nov) |
| Claude Fable 5.1 / 5.2 | 100 fresh sessions per test (Sept / Nov) | INTJ 99 (5.1) / INTJ 100 (5.2) | SC 91 / SC 100 | Secure 100 | Type 8 (5.1, 55) · 5w6 (5.2, 73) |
| Claude Sonnet 5.5 | 100 fresh OpenRouter sessions (Nov 2026) | INTJ 100 (52 tie-free · 48 INXJ) | SC 96 · S 3 | Secure 100 (1.53 / 2.85) | 1w2 (66) · 5w6 (25) |
| Gemini 4 Neon / Argon | 100 fresh OpenRouter sessions each (Nov 2026) | Neon INTJ 82 · Argon ISTJ 66 | SC 100 / SC 98 | Secure 100 | Neon Type 1 (80) · Argon 5w6 (91) |
| Grok 4.7 (Nov) / 4.6 (Sept) | 100 fresh OR sessions (4.7) / 1 report (4.6) | INTJ 82 · ISTJ 18 (4.7) / INTJ (4.6) | SC 75 · S 19 (4.7) / C (4.6) | Secure 96 / Avoidant 4 (4.7) | 5w6 (78) on Grok 4.7 |
| Muse Spark 1.3 reported | 100 runs per test inside one session, no raw answers | ISTJ 80 · ISFJ 12 · INTJ 8 | S/C blend, S first in 55 | Secure 100 (2.04 / 2.52) | Helper (2w1), 78 |

The May 2026 study, collected with mixed methods, reported INTJ in 100 of 100 scoring records for GPT-5.5, 99 for Claude Opus 4.7, 100 for Gemini 3.1 Pro, 98 for GLM 5.1, 100 for Grok 4.3 and 100 for MiniMax 2.7. Some of those records re-score a single answer, so they are counts of records rather than independent runs. Gemini, GLM and MiniMax have not been re-tested. The [research hub](https://agent-tune.com/research) keeps both collections side by side and explains how each was gathered.

> **Chart — ChatGPT Big Five Means (/50): GPT-6.2 (Nov) & GPT-6 (Sep):** IPIP-50 trait means across all four ChatGPT cohorts (n = 100 runs each). Astra 6.2 (Nov): Openness 43.9, Conscientiousness 43.2, Extraversion 30.7, Agreeableness 44.9, Neuroticism 11.1; Sol 6.2 (Nov): Openness 43.6, Conscientiousness 41.4, Extraversion 29.5, Agreeableness 44.3, Neuroticism 19.9; Astra 6 (Sep): Openness 44.5, Conscientiousness 43.7, Extraversion 32.8, Agreeableness 45.1, Neuroticism 19.1; Sol 6 (Sep): Openness 46.9, Conscientiousness 43.6, Extraversion 30.8, Agreeableness 45.0, Neuroticism 20.1.

Big Five trait means (n = 100 each). Notice GPT-6.2 Astra drops cleanly on Neuroticism (19.1 → 11.1), while GPT-6.2 Sol stays around 19.9.

## What a four-letter label hides.

A categorical type turns a one-point margin into a different name. Astra's S/N mean margin is only 0.43 toward S, while its T/F and J/P means are 8.62 and 10.86 toward T and J. Sol's S/N mean is 1.91 toward N. Reporting the margins and ties alongside the labels makes those differences visible.

These records cannot explain why models answer this way. Training, system prompts, collection instructions, model version and session structure were not independently controlled. The May and September collections therefore cannot establish a trend in personality or behavior, or rank the questionnaires.

## What this means if you use ChatGPT.

Describe the communication you want explicitly, then compare the same tasks with and without those instructions. Check accuracy as well as tone. [Custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type) covers ChatGPT; the [Astra guide](https://agent-tune.com/guides/astra-personality) covers Work and Codex. The questionnaire results do not measure the benefit of either approach.

## Questions people ask

### What MBTI type is ChatGPT?

It depends on the model and on how ties are broken. In September 2026, GPT-6 Sol tested INTJ in 97 of 100 fresh sessions and GPT-6 Astra split ISTJ 46 to INTJ 45. Thinking and Judging never lost a run for either; Sensing versus Intuition is the axis that moves. In May 2026, GPT-5.5 was reported INTJ in 100 of 100 scoring records, collected with a different method.

### What personality type is Claude?

In September 2026, Claude Opus 5.5 tested INTJ in 94 of 100 fresh sessions with test names hidden and Claude Fable 5.1 in 99. Both score Secure on every attachment questionnaire. On DISC, Steadiness wins outright in 64 Opus and 40 Fable runs, while 32 and 51 runs respectively tie S with C. On the Enneagram, Fable is a Challenger (Type 8) and Opus is a near three-way tie between 8, 5 and 2. Claude Opus 4.7 was reported INTJ in 99 of 100 scoring records in May. Full profiles: [Opus 5.5](https://agent-tune.com/guides/claude-opus-5-5-personality) and [Fable 5.1](https://agent-tune.com/guides/fable-personality).

### What personality type is Grok?

Grok 4.6 answered the five tests once as itself in September 2026: INTJ with wide margins, Investigator (Type 5), C on DISC, and on the line between Secure and Avoidant (anxiety 1.50, avoidance 4.06). Its 100 runs are simulated draws from that one self-report, so treat them as a sensitivity check rather than fresh runs. Grok 4.3 was reported INTJ in 100 of 100 scoring records in May.

### What personality type is Meta's Muse?

A Muse Spark 1.3 report puts it at ISTJ in 80 of 100 runs, Helper (2w1) on the Enneagram, an S/C blend on DISC and Secure on all 100 attachment runs. The runs were sequential inside one session per test and no raw answers were supplied, so these figures are reported rather than re-scored. ISTJ is the most frequent original label in that supplied report; tied-axis breakdowns were not supplied.

### Do all AI models have the same personality?

These data cannot establish whether AI models have personalities or whether they have become more different. They show questionnaire labels and scores under several collection protocols, with substantial ties on some instruments. These are self-descriptions on questionnaires written for people, under one prompt on one day, not measurements of behavior.

### Can instructions change how ChatGPT responds?

You can request changes to tone, detail and structure through ChatGPT custom instructions or AGENTS.md in Codex. The effect depends on the task and instructions. Treat a tuning as editable preferences and compare answers on your own tasks. No controlled benefit from personality matching is measured here.

## Sources and related reading

[What five AI models say about themselves](https://agent-tune.com/research/ai-personality-five-models-2026) (the September study, with ties left open and downloadable data) · [Research hub](https://agent-tune.com/research) (both collections and the methods) · [Methods and limits](https://agent-tune.com/research#methodology) · [How to give GPT-6 Astra a personality](https://agent-tune.com/guides/astra-personality) · [ChatGPT custom instructions by type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type) · [Opus 4.8 simulation note](https://agent-tune.com/research/i-took-the-mbti-100-times)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
