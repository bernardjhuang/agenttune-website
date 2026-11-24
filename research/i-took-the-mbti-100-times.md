Source: https://agent-tune.com/research/i-took-the-mbti-100-times
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Methodology note · MBTI simulation

# 100 simulated MBTI outcomes.

One elicited Claude Opus 4.8 profile · 100 synthetic OEJTS draws · Historical May 2026 note

The May 2026 headline described Claude Opus 4.8 taking the MBTI test 100 times. In reality, the script elicited one set of per-item probabilities from Opus 4.8 and drew 100 synthetic answer sheets from that single profile. This note preserves the historical counts, explains the method limits, and compares them with our September 2026 fresh-session cohorts.

Open Data & Agent Access[Markdown (.md)](https://agent-tune.com/research/i-took-the-mbti-100-times.md)[OpenRouter JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)[Apply a template →](https://agent-tune.com/library/)

## What the simulation actually ran

Instead of running 100 separate API conversations, the May 2026 script asked Claude Opus 4.8 for a probability distribution across the 1–5 scale on each of the 32 OEJTS items, then sampled 100 synthetic answer sheets locally. Variation across those 100 rows reflects random draws from one prompt session—**not** 100 independent model sessions.

## Reported distribution from the May 2026 Opus 4.8 profile

| Scored type | Synthetic samples (n = 100) | Share |
| --- | --- | --- |
| INTJ | 72 | 72% |
| INFJ | 14 | 14% |
| ISTJ | 10 | 10% |
| ISFJ | 2 | 2% |
| ENTJ | 2 | 2% |

Every simulated draw landed on Introverted-Judging (`IxxJ`), mostly `INTJ` (72%) with smaller counts for `INFJ` (14%) and `ISTJ` (10%). Because raw item vectors and tie-break rules were not archived in May, we cannot recompute how many of those 100 synthetic sheets contained exact axis ties.

## Simulated draws vs. September 2026 fresh-session cohorts

In September 2026, we replaced single-profile simulations with 100 independent fresh sessions per model on OEJTS 1.2 (2,000 fresh sessions across all five tests). Real session-to-session answers were much tighter, and tie-breaking turned out to be the main driver of apparent label changes:

| Cohort | Protocol | Strict resolved INTJ | Tied on &ge;1 axis | Main alternate outcomes |
| --- | --- | --- | --- | --- |
| Opus 4.8 (May 2026) | 1 probability profile sampled 100&times; | 72 / 100 (legacy scorer) | Not disclosed | INFJ (14), ISTJ (10), ISFJ (2), ENTJ (2) |
| Claude Fable 5.1 (Sept 2026) | 100 independent fresh sessions | 98 / 100 | 1 / 100 | 1 INTP, 1 INTx tie ([question data](https://agent-tune.com/research/opus-vs-fable-question-level)) |
| Claude Opus 5.5 (Sept 2026) | 100 independent fresh sessions | 84 / 100 | 11 / 100 | INFJ, ISTJ, ties on T/F &amp; S/N ([Claude study](https://agent-tune.com/research/what-personality-type-is-claude)) |
| GPT-6 Sol (Sept 2026) | 100 independent fresh sessions | 79 / 100 | 18 / 100 | 97 legacy INTJ before ties removed |
| GPT-6 Astra (Sept 2026) | 100 independent fresh sessions | 19 / 100 | 29 / 100 | 46 legacy ISTJ vs 45 legacy INTJ ([Astra vs Sol](https://agent-tune.com/research/astra-vs-sol-personality-data)) |

Across the four September 2026 fresh cohorts combined (400 sessions), **59 of 400 runs tied on at least one OEJTS axis**. Under the old strict-less-than scorer (which broke exact midpoint ties toward `INTJ`), `INTJ` share appeared inflated from 280 / 400 (70.0%) to 335 / 400 (83.8%). Read the full artifact audit in [How tie-breaking creates phantom INTJs](https://agent-tune.com/research/ai-mbti-tie-breaking).

100 Draws

Synthetic Sample*

Elicited Opus 4.8 item probability table, not fresh sessions.

72 INTJ

Simulated Mode

Followed by 14 INFJ and 10 ISTJ from sampled probability draw.

100 INTJ

Fable 5.2 (Nov)

Actual fresh blind OpenRouter runs lock cleanly onto INTJ.

48 Ties

Sonnet 5.5 (Nov)

Contrast shows why independent runs beat single-vector sampling.

*Opus 4.8 draws are synthetic samples from one elicited probability table (72 INTJ, 14 INFJ, 10 ISTJ, 2 ISFJ, 2 ENTJ). Fresh session runs show tighter variance once axis ties are separated.

## Why 72% versus 99% is not a version comparison

The older Opus 4.7 headline came from a different elicitation prompt, sampling setup, and scorer. A valid version-over-version comparison requires holding five variables identical across releases: exact item order and scale labels, API temperature and seed parameters, conversation history isolation, strict tie-preserving scoring code, and published per-item CSVs. Without matched artifacts, comparing 72% (May simulation) against 99% (legacy run) or 98% (September Fable 5.1) conflates scoring math and protocol differences with model changes.

## Reproducibility checklist before trusting any &ldquo;AI took an MBTI test&rdquo; study

- **Independent sessions, not single-shot sampling:** Clear context and start a fresh API call for every run; check variance across at least 30–100 sessions ([repeatability study](https://agent-tune.com/research/ai-personality-repeatability)).

- **Raw 1–5 vectors published:** Inspect whether boundary items sit right on a `3` midpoint rather than shifting monotonically ([reproduce our data](https://agent-tune.com/guides/reproduce-ai-personality-research)).

- **No silent tie-breaking:** Flag `S/N` or `T/F` ties as undetermined (`x`) instead of defaulting half of ambiguous runs into `INTJ`.

- **Separate default test answers from instruction-following:** Default answers on personality quizzes reflect RLHF hedging and high Openness/Agreeableness, whereas system prompts can override style directly (our 60-reply pilot raised answer-first openings from 14/20 to 19/20; see [tuning impact evidence](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)).

## What to do with this practically

Treat a personality label on an LLM as an observational summary of its unprompted survey habits, never as an immutable constraint. If you want an assistant that communicates directly without hedging or trailing questions, inspect your own workflow in our [5-System Matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher) or copy a behavioral template from the [custom instructions generator](https://agent-tune.com/tools/custom-instructions-generator), then compare outputs before and after in the [A/B test bench](https://agent-tune.com/tools/instruction-test-bench).

[Read full methodology limits](https://agent-tune.com/research#methodology) · [MBTI tie-breaking audit](https://agent-tune.com/research/ai-mbti-tie-breaking) · [Take the free OEJTS test](https://agent-tune.com/tests/mbti) · [Browse 43 tuning templates](https://agent-tune.com/library/)

Corrected interpretation · Updated November 16, 2026[All research](https://agent-tune.com/research)
**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
