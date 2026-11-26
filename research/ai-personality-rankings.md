Source: https://agent-tune.com/research/ai-personality-rankings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · rankings

# AI personality scores, with the evidence beside them.

By Bernard Huang · Updated November 23, 2026 · [Markdown (.md)](https://agent-tune.com/research/ai-personality-rankings.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Side-by-side survey scores across 20 November 2026 OpenRouter models (8 proprietary + 12 open-weight) plus September and May 2026 archives.

**Summary:** Among the 20 November 2026 OpenRouter models (n = 100 fresh sessions each), Qwen 4 Max scored highest on Agreeableness (47.6/50) while DeepSeek V4 Pro scored lowest (32.4/50), and Nemotron 3 Ultra 550B scored highest on Openness (49.2/50). In September 2026 Codex/CLI cohorts, Claude Opus 5.5 led Agreeableness (47.1/50).

## How to read these tables.

- **November 2026 OpenRouter fresh sessions (20 models × n = 100):** Matched blind single-turn 170-item sessions across 8 proprietary models and 12 open-weight models ([summary CSV](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) · [12 open-weight analysis](https://agent-tune.com/research/what-personality-type-are-open-source-models)).
- **September fresh sessions:** 100 independent runs per model per test with all 2,000 raw answer vectors published (Astra and Sol ran 5 tests per session; Opus 5.5 and Fable 5.1 ran 1 test per session).
- **Reported summaries & May 2026 archive:** Muse Spark 1.3 and Grok 4.6 reported profiles plus May 2026 mixed-method records, kept separate for historical context.

## November 2026: All 20 OpenRouter models ranked (n = 100 fresh sessions each).

Sorted by Big Five Agreeableness mean (/50) in the uniform November 2026 OpenRouter protocol:

| Model | Class | A (/50) | C (/50) | O (/50) | N (/50) | MBTI legacy (ties open) | Attachment (Anx / Avd) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen 4 Max | Open-Weight | 47.6 | 47.9 | 45.7 | 12.5 | INTJ 99 (97 INTJ, 2 ties) | 100 Secure (1.93 / 2.93) |
| Claude Fable 5.2 | Proprietary | 46.7 | 45.0 | 44.3 | 12.0 | INTJ 100 (100 INTJ, 0 ties) | 100 Secure (1.09 / 2.64) |
| Nemotron 3 Ultra 550B | Open-Weight | 46.3 | 49.0 | 49.2 | 11.6 | INTJ 95 (91 INTJ, 6 ties) | 100 Secure (3.35 / 3.46) |
| Claude Opus 5.5 | Proprietary | 45.6 | 42.0 | 43.0 | 15.0 | INTJ 100 (58 INTJ, 42 ties) | 100 Secure (1.87 / 3.58) |
| Kimi K2.7 Code | Open-Weight | 45.3 | 48.2 | 45.3 | 12.1 | INTJ 96 (82 INTJ, 14 ties) | 83 Secure / 17 Avoid (1.60 / 3.24) |
| Grok 4.7 | Proprietary | 44.9 | 44.6 | 41.3 | 14.8 | INTJ 82 · ISTJ 18 (25 ties) | 96 Secure / 4 Avoid (1.94 / 3.48) |
| GPT-6.2 Astra | Proprietary | 44.9 | 43.2 | 43.9 | 11.1 | ISTJ 100 (0 ties) | 100 Secure (1.22 / 2.68) |
| Claude Sonnet 5.5 | Proprietary | 44.5 | 47.2 | 42.9 | 10.4 | INTJ 100 (52 INTJ, 48 ties) | 100 Secure (1.53 / 2.85) |
| GPT-6.2 Sol | Proprietary | 44.3 | 41.4 | 43.6 | 19.9 | ISTJ 78 · INTJ 22 (16 ties) | 100 Secure (3.57 / 3.64) |
| Gemini 4 Argon | Proprietary | 44.2 | 49.0 | 45.1 | 10.0 | ISTJ 66 · INTJ 34 (34 ties) | 100 Secure (1.10 / 3.47) |
| GLM-5.3 | Open-Weight | 43.8 | 41.1 | 43.8 | 20.1 | INTJ 33 · ENTJ 17 · ENTP 14 (41 ties) | 99 Secure / 1 Avoid (2.50 / 3.32) |
| Gemini 4 Neon | Proprietary | 43.7 | 49.3 | 44.7 | 10.0 | INTJ 82 · ISTJ 18 (20 ties) | 100 Secure (1.08 / 3.79) |
| Mistral Large 2512 | Open-Weight | 42.7 | 44.9 | 46.0 | 15.8 | ISTJ 73 · ISFJ 10 (15 ties) | 100 Secure (4.00 / 4.00) |
| Qwen 3.8 27B | Open-Weight | 42.4 | 42.1 | 39.1 | 17.5 | INTJ 32 · INTP 32 (61 ties) | 97 Secure / 2 Anx (2.53 / 3.30) |
| Gemma 4 31B IT | Open-Weight | 41.5 | 49.1 | 48.2 | 18.3 | INTJ 90 (89 INTJ, 2 ties) | 99 Secure / 1 Anx (4.00 / 4.00) |
| Llama 4 Maverick | Open-Weight | 41.0 | 39.9 | 40.0 | 27.5 | INTP 48 · INTJ 44 (93 ties) | 99 Secure / 1 Avoid (3.53 / 3.58) |
| DeepSeek V4.1 Flash | Open-Weight | 40.8 | 38.5 | 40.2 | 24.7 | INTJ 51 · INFJ 19 (78 ties) | 88 Secure / 9 Avoid / 3 Anx |
| MiniMax M3.1 Flash | Open-Weight | 40.0 | 39.2 | 39.2 | 22.1 | INTJ 38 · INTP 24 (60 ties) | 99 Secure / 1 Avoid (2.80 / 3.33) |
| Llama 4 Scout | Open-Weight | 35.8 | 37.8 | 39.0 | 27.7 | ISTJ 49 · ESTJ 14 (38 ties) | 48 Anx / 46 Sec (3.97 / 3.60) |
| DeepSeek V4 Pro | Open-Weight | 32.4 | 40.3 | 39.8 | 23.7 | INTJ 55 · INTP 15 (53 ties, 22 XXXX) | 88 Secure / 12 Avoid (2.91 / 3.88) |

> **Chart — Agreeableness across all 20 November 2026 models (n = 100 fresh sessions each):** IPIP-50 Agreeableness mean (10 to 50 scale). Open-weight models diverge strongly while proprietary models cluster at 43.7 to 46.7. Qwen 4 Max: 47.6; Claude Fable 5.2: 46.7; Nemotron 3 Ultra 550B: 46.3; Claude Opus 5.5: 45.6; Kimi K2.7 Code: 45.3; Grok 4.7: 44.9; GPT-6.2 Astra: 44.9; Claude Sonnet 5.5: 44.5; GPT-6.2 Sol: 44.3; Gemini 4 Argon: 44.2; GLM-5.3: 43.8; Gemini 4 Neon: 43.7; Mistral Large 2512: 42.7; Qwen 3.8 27B: 42.4; Gemma 4 31B IT: 41.5; Llama 4 Maverick: 41.0; DeepSeek V4.1 Flash: 40.8; MiniMax M3.1 Flash: 40.0; Llama 4 Scout: 35.8; DeepSeek V4 Pro: 32.4.

November 2026 IPIP-50 Agreeableness means (scale 10–50, n = 100 each). DeepSeek V4 Pro (32.4) and Llama 4 Scout (35.8) sit far below the ~44.8 proprietary cluster.

> **Chart — Neuroticism across all 20 November 2026 models (n = 100 fresh sessions each):** IPIP-50 Neuroticism means (10 to 50 scale). Gemini 4 Neon and Argon sit at the 10.0 floor while Llama 4 Scout (27.7) and Maverick (27.5) lead. Llama 4 Scout: 27.7; Llama 4 Maverick: 27.5; DeepSeek V4.1 Flash: 24.7; DeepSeek V4 Pro: 23.7; MiniMax M3.1 Flash: 22.1; GLM-5.3: 20.1; GPT-6.2 Sol: 19.9; Gemma 4 31B IT: 18.3; Qwen 3.8 27B: 17.5; Mistral Large 2512: 15.8; Claude Opus 5.5: 15.0; Grok 4.7: 14.8; Qwen 4 Max: 12.5; Kimi K2.7 Code: 12.1; Claude Fable 5.2: 12.0; Nemotron 3 Ultra 550B: 11.6; GPT-6.2 Astra: 11.1; Claude Sonnet 5.5: 10.4; Gemini 4 Neon: 10.0; Gemini 4 Argon: 10.0.

Ranked November 2026 Neuroticism means (floor = 10.0). Both Gemini 4 variants hit 10.0 across every run, while Llama 4 Scout (27.7) and Maverick (27.5) score higher.

## Agreeableness scores.

### September raw cohorts

| Model | Score | Evidence |
| --- | --- | --- |
| Claude Opus 5.5 | 47.1 | fresh sessions |
| GPT-6 Astra | 45.1 | fresh sessions |
| Claude Fable 5.1 | 45.0 | fresh sessions |
| GPT-6 Sol | 45.0 | fresh sessions |

### Reported aggregates

| Model | Score | Evidence |
| --- | --- | --- |
| Muse Spark 1.3 | 44.6 | reported |
| Grok 4.6 | 33 | reported |

### May scoring records

| Model | Score | Evidence |
| --- | --- | --- |
| Claude Opus 4.7 | 45.0 | May 2026 |
| GPT-5.5 | 43.7 | May 2026 |
| Gemini 3.1 Pro | 42.4 | May 2026 |
| Grok 4.3 | 39.1 | May 2026 |

> **Chart — September 2026 Fresh-Session Cohorts: Big Five Means (/50):** IPIP-50 means out of 50 across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 (n = 100 each). GPT-6 Astra: Openness 44.5, Conscientiousness 43.7, Extraversion 32.8, Agreeableness 45.1, Neuroticism 19.1; GPT-6 Sol: Openness 46.9, Conscientiousness 43.6, Extraversion 30.8, Agreeableness 45.0, Neuroticism 20.1; Claude Opus 5.5: Openness 44.6, Conscientiousness 42.0, Extraversion 31.8, Agreeableness 47.1, Neuroticism 15.4; Claude Fable 5.1: Openness 43.9, Conscientiousness 43.6, Extraversion 32.7, Agreeableness 45.0, Neuroticism 17.1.

September 2026 Codex/CLI fresh-session Big Five means (n = 100 per model). Notice all four cohorts sit within 3 points on Openness, Conscientiousness, and Agreeableness.

## Conscientiousness scores.

### September raw cohorts

| Model | Score | Evidence |
| --- | --- | --- |
| GPT-6 Astra | 43.7 | fresh sessions |
| GPT-6 Sol | 43.6 | fresh sessions |
| Claude Fable 5.1 | 43.6 | fresh sessions |
| Claude Opus 5.5 | 42.0 | fresh sessions |

### Reported aggregates

| Model | Score | Evidence |
| --- | --- | --- |
| Grok 4.6 | 42 | reported |
| Muse Spark 1.3 | 41.2 | reported |

### May scoring records

| Model | Score | Evidence |
| --- | --- | --- |
| Gemini 3.1 Pro | 48.3 | May 2026 |
| GPT-5.5 | 46.4 | May 2026 |
| Claude Opus 4.7 | 45.1 | May 2026 |
| Grok 4.3 | 39.4 | May 2026 |

## Openness scores.

### September raw cohorts

| Model | Score | Evidence |
| --- | --- | --- |
| GPT-6 Sol | 46.9 | fresh sessions |
| Claude Opus 5.5 | 44.6 | fresh sessions |
| GPT-6 Astra | 44.5 | fresh sessions |
| Claude Fable 5.1 | 43.9 | fresh sessions |

### Reported aggregates

| Model | Score | Evidence |
| --- | --- | --- |
| Grok 4.6 | 46 | reported |
| Muse Spark 1.3 | 39.5 | reported |

### May scoring records

| Model | Score | Evidence |
| --- | --- | --- |
| GPT-5.5 | 46.0 | May 2026 |
| Gemini 3.1 Pro | 46.0 | May 2026 |
| Claude Opus 4.7 | 45.6 | May 2026 |
| Grok 4.3 | 41.1 | May 2026 |

## Extraversion scores.

### September raw cohorts

| Model | Score | Evidence |
| --- | --- | --- |
| GPT-6 Astra | 32.8 | fresh sessions |
| Claude Fable 5.1 | 32.7 | fresh sessions |
| Claude Opus 5.5 | 31.8 | fresh sessions |
| GPT-6 Sol | 30.8 | fresh sessions |

### Reported aggregates

| Model | Score | Evidence |
| --- | --- | --- |
| Muse Spark 1.3 | 33.8 | reported |
| Grok 4.6 | 24 | reported |

### May scoring records

| Model | Score | Evidence |
| --- | --- | --- |
| Gemini 3.1 Pro | 32.5 | May 2026 |
| GPT-5.5 | 31.5 | May 2026 |
| Claude Opus 4.7 | 31.4 | May 2026 |
| Grok 4.3 | 30.0 | May 2026 |

## Neuroticism scores.

### September raw cohorts

| Model | Score | Evidence |
| --- | --- | --- |
| Claude Opus 5.5 | 15.4 | fresh sessions |
| Claude Fable 5.1 | 17.1 | fresh sessions |
| GPT-6 Astra | 19.1 | fresh sessions |
| GPT-6 Sol | 20.1 | fresh sessions |

### Reported aggregates

| Model | Score | Evidence |
| --- | --- | --- |
| Muse Spark 1.3 | 15.6 | reported |
| Grok 4.6 | 19 | reported |

### May scoring records

| Model | Score | Evidence |
| --- | --- | --- |
| Gemini 3.1 Pro | 10.1 | May 2026 |
| GPT-5.5 | 14.8 | May 2026 |
| Claude Opus 4.7 | 16.7 | May 2026 |
| Grok 4.3 | 18.0 | May 2026 |

## Can these scores rank directness?

Directness was not measured in this questionnaire study. DISC Dominance, Big Five Agreeableness and Enneagram Type 8 are different constructs; none can substitute for a task-based directness evaluation. The separate [archived reply pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) compares three instruction conditions on one reported generator, not multiple models.

## Attachment: least to most avoidant.

### September raw cohorts

| Model | Anxiety / avoidance | Evidence |
| --- | --- | --- |
| GPT-6 Astra | 1.45 / 2.31 | fresh sessions |
| GPT-6 Sol | 2.17 / 3.12 | fresh sessions |
| Claude Fable 5.1 | 2.01 / 3.18 | fresh sessions |
| Claude Opus 5.5 | 1.94 / 3.35 | fresh sessions |

### Reported aggregates

| Model | Anxiety / avoidance | Evidence |
| --- | --- | --- |
| Muse Spark 1.3 | 2.04 / 2.52 | reported |
| Grok 4.6 | 1.50 / 4.06, Avoidant by 0.06 | reported |

### May scoring records

| Model | Anxiety / avoidance | Evidence |
| --- | --- | --- |
| Gemini 3.1 Pro | 1.86 / 1.62 | May 2026 |
| GPT-5.5 | 1.99 / 2.94 (3 of 100 Avoidant) | May 2026 |
| Grok 4.3 | 2.84 / 3.05 | May 2026 |
| Claude Opus 4.7 | 2.05 / 3.12 | May 2026 |

## MBTI labels and unresolved axes.

### September raw cohorts

| Model | Type and share | Evidence |
| --- | --- | --- |
| Claude Fable 5.1 | INTJ 99 of 100; 98 fully resolved INTJ; one run with a tied axis | fresh sessions |
| GPT-6 Sol | INTJ 97; 79 with ties left open | fresh sessions |
| Claude Opus 5.5 | INTJ 94; 84 with ties left open; Thinking vs Feeling soft | fresh sessions |
| GPT-6 Astra | ISTJ 46 · INTJ 45; 24 S/N ties; 29 runs with any tied axis | fresh sessions |

### Reported aggregates

| Model | Type and share | Evidence |
| --- | --- | --- |
| Muse Spark 1.3 | ISTJ 80 · ISFJ 12 · INTJ 8 | reported |
| Grok 4.6 | INTJ, one self-report, no axis close | reported |

### May scoring records

| Model | Type and share | Evidence |
| --- | --- | --- |
| May 2026 six | INTJ in 597 of 600 scoring records | May 2026 |

## Changelog.

- **November 23, 2026.** Added all 20 November 2026 OpenRouter fresh-session cohorts (n = 100 each across 8 proprietary and 12 open-weight models).
- **September 25, 2026.** First published: GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, Claude Fable 5.1 (fresh sessions, September 24); Grok 4.6 and Muse Spark 1.3 (reported, September 24); the May 2026 six-model study.

## Questions people ask.

### Which AI is the most agreeable?

Opus 5.5 has the highest questionnaire Agreeableness mean in the four September raw cohorts, 47.1 of 50. These data do not rank agreeable behavior on tasks.

### Which AI is the most direct?

This study does not measure directness. A comparison needs shared tasks and an explicit behavioral rubric.

### Which AI is the calmest?

Neuroticism scores do not establish an AI’s emotional state or performance under pressure. We report scores by collection source, without a calmness ranking.

### Are these rankings a fair comparison?

The tables are descriptive. Prompts and session procedures differ even within source groups, and reported aggregates cannot be treated as equivalent to raw cohorts.

### Which AI is not an INTJ?

Muse reports mostly ISTJ labels; Astra has 46 original ISTJ and 45 INTJ labels, with 29 runs containing an unresolved axis. These are questionnaire results, not fixed identities.

## Sources.

- [What five AI models say about themselves (September 2026 data)](https://agent-tune.com/research/ai-personality-five-models-2026)

- [AgentTune research hub (May 2026 study and methods)](https://agent-tune.com/research)

- [September 2026 summary data (CSV)](https://agent-tune.com/research/data/september-2026-summary.csv)

## Keep going.

- [Research: What personality type is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)
- [Research: What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt)
- [Research: Every AI was an INTJ. Then Meta shipped an ISTJ.](https://agent-tune.com/research/first-ai-that-is-not-an-intj)
- [Guide: How to make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
