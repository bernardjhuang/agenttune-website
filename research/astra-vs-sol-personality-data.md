Source: https://agent-tune.com/research/astra-vs-sol-personality-data
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# GPT-6 Astra vs Sol: what the self-reports show

By Bernard Huang · Updated November 17, 2026

1,000 total questionnaires across 200 fresh Codex sessions—why Astra split ISTJ/INTJ while Sol scored INTJ.

**Quick answer:** With tied axes left open, GPT-6 Astra scored INTJ in 19 of 100 runs (with 45 resolved ISTJ and 29 tied runs), while GPT-6 Sol scored INTJ in 79 of 100 runs (18 tied). On the Big Five, Sol averaged slightly higher on Openness (46.87 vs. 44.54), while Agreeableness (45.07 vs. 44.99) and Conscientiousness (43.73 vs. 43.62) were nearly identical.

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## How the 200 sessions were collected

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
