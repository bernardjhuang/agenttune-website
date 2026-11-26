Source: https://agent-tune.com/research/astra-vs-sol-personality-data
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# GPT-6 Astra vs Sol: what the self-reports show

By Bernard Huang · Updated November 23, 2026 · ~4 min read · [Markdown (.md)](https://agent-tune.com/research/astra-vs-sol-personality-data.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

1,000 September assessments in Codex plus 1,000 matched November assessments on GPT-6.2 Astra and GPT-6.2 Sol.

**Summary:** In September 2026 Codex sessions, GPT-6 Astra scored 45 resolved ISTJ / 19 INTJ while GPT-6 Sol scored 79 INTJ. Under matched November 2026 blind OpenRouter sessions on GPT-6.2, Astra locked 100/100 tie-free ISTJ (Neuroticism 11.14, Enneagram Type 1/5) and Sol scored 78 ISTJ / 16 IXTJ / 6 INTJ (Neuroticism 19.94, Enneagram 5w6 55).

## November 2026 follow-up: GPT-6.2 Astra vs GPT-6.2 Sol (matched OpenRouter runs)

1,000

Sept Codex Runs

500 Astra vs. 500 Sol blind tests across all 5 instruments.

100 ISTJ

GPT-6.2 Astra

Zero INTJ outcomes in 100 Nov OpenRouter single-turn runs.

78 ISTJ

GPT-6.2 Sol

Shifted from 97 INTJ in Sept to 78 ISTJ under uniform prompts.

19.9 vs 11.1

Neuroticism Split

GPT-6.2 Sol stays nearly 2× Astra 6.2 on IPIP Neuroticism.

To remove September’s midpoint-prompt confound, we ran `openai/gpt-6.2-astra` and `openai/gpt-6.2-sol` under the exact same single-turn blind OpenRouter prompt (n = 100 per model; [download Nov 2026 summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)). With prompt differences held constant, **both** GPT-6.2 variants landed on the Sensing side (`N-S` mean `-1.67` for Astra, `-1.19` for Sol):

| Metric (Nov 2026, n = 100) | GPT-6.2 Astra | GPT-6.2 Sol |
| --- | --- | --- |
| MBTI (legacy) | ISTJ 100 | ISTJ 78 · INTJ 22 |
| MBTI (tie-free) | ISTJ 100 (0 ties) | ISTJ 78 · IXTJ 16 · INTJ 6 |
| Big Five (/50) | O 43.93 · C 43.15 · E 30.69 · A 44.85 · N 11.14 | O 43.63 · C 41.35 · E 29.50 · A 44.33 · N 19.94 |
| DISC | SC 99 · CS 1 (82 S, 17 ties; D 4.00) | SC 100 (98 S, 2 ties; D 5.58) |
| Enneagram | 1 (61) · 1w2 (35) · 5w6 (3) · 1w9 (1) | 5w6 (55) · 1w9 (24) · 1 (20) · 1w2 (1) |
| Attachment | Secure 100 (anx 1.22 · avd 2.68) | Secure 100 (anx 3.57 · avd 3.64) |

Notably, GPT-6.2 Sol still showed nearly double Astra’s Neuroticism score (19.94 vs. 11.14) and triple its attachment anxiety (3.57 vs. 1.22), alongside higher Enneagram Type 5 representation (55 vs. 3) and much higher response variability (94 unique MBTI vectors vs. 35).

> **Chart — MBTI Sensing vs. Intuition (N − S) Mean Axis Margin across Astra & Sol Cohorts:** Compares Sept 2026 Codex runs against Nov 2026 matched OpenRouter GPT-6.2 runs on the N minus S axis margin (-16 to +16 range). GPT-6 Sol (Sept Codex): +1.91; GPT-6 Astra (Sept Codex): -0.43; GPT-6.2 Sol (Nov OpenRouter): -1.19; GPT-6.2 Astra (Nov OpenRouter): -1.67.

Zero-centered N−S axis margin (out of −16 to +16). Under uniform November single-turn prompts, both GPT-6.2 Sol (−1.19) and GPT-6.2 Astra (−1.67) sit cleanly on the Sensing side.

## How the September 200 sessions were collected

Each model ran 100 fresh Codex CLI sessions at `xhigh` effort, answering all five questionnaires inside each session (500 scored tests per model, 1,000 total). Because all five tests shared one session window per run, the experimental unit is the 100 sessions per model—not 500 independent API calls.

Astra’s full prompt was archived, including an explicit rule to pick the neutral midpoint and flag questions that don't apply to software. Sol’s archive preserved only its instruction prefix.

## MBTI: why a 2-point S/N shift flipped the label

| Axis margin | Astra mean | Sol mean |
| --- | --- | --- |
| I-E | 1.64 | 3.67 |
| N-S | -0.43 | 1.91 |
| T-F | 8.62 | 6.16 |
| J-P | 10.86 | 10.23 |

Positive numbers lean toward the first letter (I, N, T, J). Both models leaned strongly toward Thinking and Judging. The only axis that flipped was Intuition vs. Sensing (`N-S`): Astra averaged `-0.43` (just barely on the Sensing side, with 24 exact S/N ties), whereas Sol averaged `+1.91` (on the Intuition side, with 16 S/N ties).

Under the old tie-breaking rule, Astra was labeled 46 ISTJ / 45 INTJ and Sol was labeled 97 INTJ. When ties are left unresolved, Astra has 45 ISTJ and 19 INTJ, and Sol has 79 INTJ.

## Big Five: raw totals out of 50

| Trait | Astra mean | Sol mean | Sol − Astra |
| --- | --- | --- | --- |
| O | 44.54 | 46.87 | +2.33 |
| C | 43.73 | 43.62 | -0.11 |
| E | 32.75 | 30.75 | -2.00 |
| A | 45.07 | 44.99 | -0.08 |
| N | 19.14 | 20.05 | +0.91 |

Each trait runs from 10 to 50. Astra and Sol sit within 0.11 points of each other on Conscientiousness and Agreeableness, and within 2.33 points on Openness and Extraversion. Remember that raw totals out of 50 are not human population percentiles.

> **Chart — GPT-6 & GPT-6.2 Astra vs. Sol Big Five Means (/50):** Compares September Codex and November OpenRouter cohorts across Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Astra 6 (Sep): Openness 44.5, Conscientiousness 43.7, Extraversion 32.8, Agreeableness 45.1, Neuroticism 19.1; Sol 6 (Sep): Openness 46.9, Conscientiousness 43.6, Extraversion 30.8, Agreeableness 45.0, Neuroticism 20.1; Astra 6.2 (Nov): Openness 43.9, Conscientiousness 43.2, Extraversion 30.7, Agreeableness 44.9, Neuroticism 11.1; Sol 6.2 (Nov): Openness 43.6, Conscientiousness 41.4, Extraversion 29.5, Agreeableness 44.3, Neuroticism 19.9.

GPT-6.2 Sol shows nearly double Astra 6.2’s Neuroticism score (19.9 vs. 11.1), while Openness, Conscientiousness, Extraversion, and Agreeableness remain closely aligned.

## Attachment: both score 100% Secure at slightly different coordinates

Both Astra and Sol scored in the `Secure` quadrant on all 100 runs (below the 4.00 midpoint on both axes). Astra averaged 1.45 on anxiety and 2.31 on avoidance; Sol averaged 2.17 on anxiety and 3.12 on avoidance.

## How Astra's midpoint rule shaped its scores

Because Astra was explicitly told to pick the middle number whenever a human question didn't fit an AI (flagging 1,823 of 17,000 answers; see [our neutral-answer study](https://agent-tune.com/research/ai-neutral-answers)), more of its MBTI axes landed on exact midpoint ties. Because prompt instructions differed between the two collections, the gap between Astra and Sol reflects both model behavior and prompt framing.

## How to tune Astra or Sol in your own workflow

If you use GPT-6 Astra or Sol in ChatGPT or OpenAI Codex CLI, don't rely on default survey habits. Set explicit rules in [Astra setup](https://agent-tune.com/guides/astra-personality), [Sol setup](https://agent-tune.com/guides/sol-personality), or [AGENTS.md](https://agent-tune.com/guides/codex-agents-md-guide).

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

- [Continue reading: Why midpoint answers need context](https://agent-tune.com/research/ai-neutral-answers)
- [Continue reading: Reproduce the analysis](https://agent-tune.com/guides/reproduce-ai-personality-research)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). GPT-6 Astra vs Sol: what the self-reports show. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/astra-vs-sol-personality-data
```

```
@article{huang2026_astra_vs_sol_personality_data,
  author  = {Huang, Bernard},
  title   = {GPT-6 Astra vs Sol: what the self-reports show},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-23},
  url     = {https://agent-tune.com/research/astra-vs-sol-personality-data},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/astra-vs-sol-personality-data.md}
}
```

```
> **GPT-6 Astra vs Sol: what the self-reports show** (Bernard Huang, November 23, 2026): In September 2026 Codex sessions, GPT-6 Astra scored 45 resolved ISTJ / 19 INTJ while GPT-6 Sol scored 79 INTJ. Under matched November 2026 blind OpenRouter sessions on GPT-6.2, Astra locked 100/100 tie-free ISTJ (Neuroticism 11.14, Enneagram Type 1/5) and Sol scored 78 ISTJ / 16 IXTJ / 6 INTJ (Neuroticism 19.94, Enneagram 5w6 55).
> Source: [https://agent-tune.com/research/astra-vs-sol-personality-data](https://agent-tune.com/research/astra-vs-sol-personality-data) · [Markdown mirror](https://agent-tune.com/research/astra-vs-sol-personality-data.md)
```

[← What Personality Type Is Meta Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
[Study 26 of 32 · Archive Index (32)](https://agent-tune.com/research)
[Claude Opus 5.5 vs. Fable 5.1 (170 Items) →](https://agent-tune.com/research/opus-vs-fable-question-level)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
