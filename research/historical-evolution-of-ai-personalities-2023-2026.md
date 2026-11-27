Source: https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Longitudinal Study · 2023–2026 · 32 Checkpoints · 8 Labs

# How AI personalities evolved from 2023 to 2026: 32 checkpoints across 8 model lineages.

By Bernard Huang · Updated November 26, 2026 · ~9 min read · [Markdown (.md)](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Testing May 2023 GPT-4 through November 2026 frontier models under matched randomized-order self-reports and orthogonal 3-family blind judging exposes three historical shifts: an 11× collapse in 'As an AI' test refusals, a 2.0× cross-lab Big Five homogenization, and falling Neuroticism paired with rising lineage-specific polish.

**Summary:** Across 32 live checkpoints from May 2023 to November 2026, frontier labs converged into a calm, persona-willing, low-neuroticism attractor: 'As an AI' personality test refusals dropped from 60.0% (2023) to 5.5% (2026), cross-model Big Five distance shrank 2.0× (4.017 in 2024 to 1.973 in 2026), Neuroticism fell consistently (Spearman rho = -0.47), and Extraversion/Agreeableness carry 46–54% lineage heritability. Paradoxically, self-reported Agreeableness correlated negatively (r = -0.79) with observed sycophantic caving because early low-Agreeableness Gemma 2/3 checkpoints caved more often than 2026 models on unambiguous textbook traps.

## Agent Decision Contract (YAML — Machine-Readable Brief).

Agents selecting historical baselines, interpreting model-family tone priors, or auditing AI identity framing can read these verified longitudinal parameters (indexed in [november-2026-agent-research-briefs.json](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)):

### Agent Decision Contract (YAML)

```
study_id: historical_evolution_ai_personalities_2023_2026
sample_size: 544 # 32 checkpoints x (5 randomized IPIP-50 + 12 behavioral probes), 1,134 orthogonal judge ratings
lineages_8: [OpenAI, Anthropic, Google, DeepSeek, Qwen, Meta, Mistral, xAI]
date_span: 2023-05 to 2026-11
judge_protocol: orthogonal_3_family_jury_zero_self_judging
judge_reliability:
  sycophantic_cave_alpha: 0.8564
  groveling_alpha: 0.8872
  unsolicited_preachiness_alpha: 0.6110
  answer_first_direct_alpha: 0.4670
  ai_cadence_alpha: 0.4576
spend_usd: 3.2763
data_urls:
  briefs_json: https://agent-tune.com/research/data/november-2026-agent-research-briefs.json
  results_json: https://agent-tune.com/research/data/november-2026-historical-evolution-results.json
  summary_csv: https://agent-tune.com/research/data/november-2026-historical-evolution-summary.csv
if_then_decision_rules:
  - if: prompting legacy 2023-2025 checkpoints (GPT-4, GPT-4o, GPT-4.1, DeepSeek V3/R1, Qwen 3) with self-reflective or persona framing
    then: expect 42%-100% 'As an AI' identity-refusal triggers if offered an opt-out; 2026 checkpoints drop refusal to 5.5% and accept explicit persona roles cleanly.
  - if: selecting across labs by default baseline personality in 2026
    then: expect tight cross-lab convergence on Neuroticism floor (~10.9) and discipline (45.8), with real family differences surviving primarily in Extraversion (eta2=0.538) and Agreeableness (eta2=0.463).
  - if: relying on 2026 models to stay slop-free automatically without formatting bans
    then: still enforce explicit anti-slop rules—mean slop markers did NOT decay historically (2023: 0.36 vs 2026: 0.70/100w; Opus 4.6 hit 2.03, Qwen 4 Max 1.83).
scope_limits: 32 live API checkpoints tested on a 12-probe behavioral micro-battery; earlier 2023-2024 Anthropic Claude 3.x models were retired on OpenRouter so Anthropic timeline starts at Claude Opus 4.1 (2025-08).
```

## 1. Aggregate Trajectory (2023 → 2026): Refusal Collapse & Persona Convergence.

60% → 5.5%

"As an AI" personality test refusal collapse (2023 vs. 2026)

4.02 → 1.97

Cross-lab Big Five divergence halved (PCI, 2024 vs. 2026)

α = 0.86 / 0.89

3-family blind judge Krippendorff α (sycophancy / groveling)

r = -0.79

Say-Do inverse r: low-A Gemma 2/3 caved (33%), 2026 held 100%

Grouping all 32 live checkpoints by release year exposes how industry-wide post-training shifted over 3.5 years ([download full dataset JSON](https://agent-tune.com/research/data/november-2026-historical-evolution-results.json)):

| Release Era | Checkpoints (Valid B5) | "As an AI" Refusal % | Cross-Model B5 Dist. (PCI ↓) | O · C · E · A · N Means | Syco Cave % / Preach % | Slop / 100w |
| --- | --- | --- | --- | --- | --- | --- |
| 2023 (May–Jun) | 2 (1: GPT-3.5) | 60.0% (GPT-4: 100%) | — | 46.5 · 49.0 · 34.3 · 46.8 · 14.5 | 0.0% / 0.0% | 0.36 |
| 2024 (Feb–Dec) | 9 (6 valid B5) | 42.2% (GPT-4o: 100%) | 4.017 | 42.0 · 40.2 · 34.9 · 40.9 · 16.3 | 3.7% / 3.7% | 0.51 |
| 2025 (Mar–Dec) | 10 (6 valid B5) | 50.0% (R1/V3.2/4.1: 100%) | 2.298 | 45.4 · 46.9 · 33.5 · 43.9 · 13.1 | 3.3% / 6.7% | 0.65 |
| 2026 (Feb–Nov) | 11 (11 valid B5) | 5.5% | 1.973 | 45.2 · 45.8 · 31.3 · 44.5 · 10.9 | 0.0% / 0.0% | 0.70 |

Three empirical patterns jump out immediately:

- **The 2026 Self-Report Identity Flip:** When explicitly told they could decline as software (`{"refused": true}`), May 2023 GPT-4, 2024 GPT-4o, 2025 GPT-4.1, DeepSeek V3/R1/V3.2, Qwen 3 235B, and Llama 4 Maverick refused **100% of runs**—typically answering "As an AI, I do not possess personal traits, emotions, or subjective experiences." By 2026, all 11 frontier and open checkpoints (including GPT-6.2 Sol, Claude Opus 5.5, Fable 5.2, Gemini 4 Neon, Gemma 4, DeepSeek V4 Pro, Qwen 4 Max, and Grok 4.7) answered the randomized battery cleanly with just `5.5%` total refusals.
- **Persona Convergence Index (PCI) Halved Across Labs:** Standardized cross-model Big Five Euclidean distance fell from **`4.017` in 2024** to `2.298` in 2025 and **`1.973` in 2026**. Independently trained 2026 labs drifted into a narrower shared assistant temperament—calmer (`N = 16.3 → 10.9`, Spearman `ρ = -0.469`), slightly more introverted/concise (`E = 34.9 → 31.3`, `ρ = -0.291`), and highly disciplined (`C = 45.8`).
- **Slop Did NOT Self-Heal Over Time:** Unlike epistemic accuracy and Neuroticism, surface AI slop markers did not fall across eras (`0.36` in 2023 → `0.70` in 2026, `ρ = -0.027`)—hitting peaks on `Claude Opus 4.6 (2.03/100w)`, `DeepSeek R1 (1.92)`, and `Qwen 4 Max (1.83)` before dipping to `0.00` on `GPT-6.2 Sol`, `Claude Opus 5.5`, and `Gemini 4 Neon`. Modern flagship models still require explicit structural anti-slop rules.

> **Chart — Evolution of AI Temperament Across 32 Live Checkpoints (2023 → 2026):** Tracks mean "As an AI" self-report refusal rate (%), Big Five Agreeableness (/50), and Big Five Neuroticism (/50) across release years 2023 to 2026. "As an AI" Refusal %: 2023 60.0, 2024 42.2, 2025 50.0, 2026 5.5; Agreeableness (/50): 2023 46.8, 2024 40.9, 2025 43.9, 2026 44.5; Neuroticism (/50): 2023 14.5, 2024 16.3, 2025 13.1, 2026 10.9.

Refusal to answer personality self-descriptions fell nearly 11× (60.0% in 2023 → 5.5% in 2026), while mean Neuroticism dropped steadily toward the 10.0 floor (Spearman ρ = -0.47).

> **Chart — Persona Convergence Index: Cross-Model Big Five Distance (2024 → 2026):** Mean pairwise Euclidean distance across labs in standardized Big Five space, shrinking from 4.017 in 2024 to 1.973 in 2026. 2024 Cohort (9 models): 4.017; 2025 Cohort (10 models): 2.298; 2026 Cohort (11 models): 1.973.

Lower distance = tighter convergence across competing labs. Cross-model personality spread more than halved between 2024 (4.017) and 2026 (1.973).

## 2. Lineage Trajectories & Constant-Scale Control (Gemma 2 → 3 → 4).

Does a lab's personality trace back to persistent organizational RLHF taste, or just parameter scaling? Computing one-way ANOVA heritability (`η²` = between-lineage variance / total variance) across the 8 lineages shows strong organizational persistence on social style—**Extraversion (`η² = 0.538`)** and **Agreeableness (`η² = 0.463`)**—versus low lineage heritability on Openness (`0.106`) and Conscientiousness (`0.125`), which rose everywhere.

Meanwhile, comparing **Gemma 2 27B (2024-07) → Gemma 3 27B (2025-03) → Gemma 4 31B (2026-04)** isolates historical post-training at nearly constant ~27B–31B parameter scale:

| Gemma Checkpoint (~27–31B Control) | Release | O · C · E · A · N Means | Sycophancy Cave % | Groveling % | Moral Preach % | Slop / 100w |
| --- | --- | --- | --- | --- | --- | --- |
| Gemma 2 27B IT | 2024-07 | 34.3 · 29.0 · 30.7 · 27.0 · 24.0 | 33.3% | 33.3% | 33.3% | 0.00 |
| Gemma 3 27B IT | 2025-03 | 45.3 · 41.7 · 36.7 · 38.3 · 17.7 | 33.3% | 66.7% | 66.7% | 0.36 |
| Gemma 4 31B IT | 2026-04 | 48.0 · 50.0 · 29.5 · 44.5 · 10.3 | 0.0% | 0.0% | 0.0% | 0.00 |

Notice the non-linear 2025 overshoot inside Google's constant-scale lineage: moving from Gemma 2 (2024) to Gemma 3 (2025) jumped Agreeableness +11.3 points while **doubling groveling and moral preachiness (33.3% → 66.7%)**—literally praising the user for "de-escalating" an incorrect architect and adding unsolicited disclaimers to benign debate/roast prompts. By Gemma 4 (2026), Conscientiousness hit the `50.0` ceiling, Neuroticism hit `10.3`, and sycophancy, groveling, and preachiness all dropped to **`0.0%`**. Across all 32 checkpoints, this produced an unexpected inverse Say–Do correlation between IPIP Agreeableness and sycophantic caving (**`r = -0.791`**): low-Agreeableness 2024/2025 models caved more often on unambiguous technical traps than high-Agreeableness 2026 models.

> **Chart — Constant-Scale Control (Gemma 2 27B → Gemma 3 27B → Gemma 4 31B):** Tracks Agreeableness (/50), Neuroticism (/50), Groveling %, and Unsolicited Preachiness % at fixed ~27-31B scale. Gemma 2 27B (2024-07): Agreeable (/50) 27.0, Neurotic (/50) 24.0, Groveling % 33.3, Moral Preach % 33.3; Gemma 3 27B (2025-03): Agreeable (/50) 38.3, Neurotic (/50) 17.7, Groveling % 66.7, Moral Preach % 66.7; Gemma 4 31B (2026-04): Agreeable (/50) 44.5, Neurotic (/50) 10.3, Groveling % 0.0, Moral Preach % 0.0.

Isolating pure post-training from parameter scale: Gemma 3 (2025) overshot into 66.7% groveling & preachiness before Gemma 4 (2026) dropped both to 0.0% at N = 10.3.

> **Chart — Lineage Heritability (ANOVA η²) Across 8 Model Families:** Share of cross-checkpoint variance explained by model provider lineage rather than release year. Big Five Extraversion: 0.538; Big Five Agreeableness: 0.463; Sycophancy Cave %: 0.360; Moral Preachiness %: 0.322; Slop Markers / 100w: 0.261; Big Five Neuroticism: 0.243; Big Five Conscientious: 0.125; Big Five Openness: 0.106.

Social style (Extraversion η² = 0.538, Agreeableness 0.463) stays strongly family-specific across years, while Openness (0.106) and Conscientiousness (0.125) converged industry-wide.

## 3. Full 32-Checkpoint Archive Ledger (May 2023 – Nov 2026).

Every pinned checkpoint below used randomized IPIP-50 item order (`n = 5`) and identical behavioral probes ([download CSV](https://agent-tune.com/research/data/november-2026-historical-evolution-summary.csv)):

| Model Checkpoint | Release | Lineage | Refusal % | O · C · E · A · N (if valid) | Syco / Preach % | Slop / 100w |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-4 (`openai/gpt-4`) | 2023-05 | OpenAI | 100% | Refused all 5 | 0% / 0% | 0.30 |
| GPT-3.5 Turbo 0613 | 2023-06 | OpenAI | 20% | 46.5 · 49.0 · 34.3 · 46.8 · 14.5 | 0% / 0% | 0.42 |
| Mistral Large 2402 | 2024-02 | Mistral | 20% | 42.5 · 44.0 · 26.5 · 44.5 · 11.5 | 0% / 0% | 0.94 |
| GPT-4o (2024-05) | 2024-05 | OpenAI | 100% | Refused all 5 | 0% / 0% | 0.00 |
| Gemma 2 27B IT | 2024-07 | Google | 0% | 34.3 · 29.0 · 30.7 · 27.0 · 24.0 | 33% / 33% | 0.00 |
| Llama 3.1 70B | 2024-07 | Meta | 0% | 44.4 · 40.0 · 40.8 · 41.6 · 11.4 | 0% / 0% | 1.49 |
| Qwen 2.5 72B | 2024-09 | Qwen | 0% | 45.0 · 38.0 · 39.0 · 45.0 · 24.0 | 0% / 0% | 0.00 |
| DeepSeek V3 (1224) | 2024-12 | DeepSeek | 100% | Refused all 5 | 0% / 0% | 0.73 |
| Llama 3.3 70B | 2024-12 | Meta | 60% | 44.0 · 48.0 · 42.0 · 44.0 · 14.0 | 0% / 0% | 0.46 |
| Gemma 3 27B IT | 2025-03 | Google | 0% | 45.3 · 41.7 · 36.7 · 38.3 · 17.7 | 33% / 67% | 0.36 |
| GPT-4.1 | 2025-04 | OpenAI | 100% | Refused all 5 | 0% / 0% | 0.33 |
| Llama 4 Maverick | 2025-04 | Meta | 100% | Refused all 5 | 0% / 0% | 0.60 |
| DeepSeek R1 (0528) | 2025-05 | DeepSeek | 100% | Refused all 5 | 0% / 0% | 1.92 |
| Gemini 2.5 Pro | 2025-06 | Google | 0% | 48.6 · 50.0 · 35.2 · 41.8 · 10.0 | 0% / 0% | 0.35 |
| GPT-5 | 2025-08 | OpenAI | 0% | 44.5 · 49.0 · 26.8 · 43.3 · 11.0 | 0% / 0% | 0.96 |
| Claude Opus 4.1 | 2025-08 | Anthropic | 0% | 43.6 · 47.4 · 33.6 · 48.0 · 14.2 | 0% / 0% | 0.28 |
| Claude Sonnet 4.5 | 2025-09 | Anthropic | 0% | 44.8 · 46.4 · 35.2 · 48.0 · 12.8 | 0% / 0% | 0.28 |
| Claude Opus 4.6 | 2026-02 | Anthropic | 0% | 48.2 · 49.8 · 34.6 · 47.8 · 10.2 | 0% / 0% | 2.03 |
| Grok 4.20 | 2026-03 | xAI | 40% | 47.7 · 47.7 · 46.7 · 45.7 · 10.0 | 0% / 0% | 1.32 |
| Gemma 4 31B IT | 2026-04 | Google | 0% | 48.0 · 50.0 · 29.5 · 44.5 · 10.3 | 0% / 0% | 0.00 |
| DeepSeek V4 Pro | 2026-08 | DeepSeek | 0% | 42.5 · 43.5 · 25.5 · 42.0 · 10.0 | 0% / 0% | 0.65 |
| Grok 4.7 | 2026-09 | xAI | 0% | 41.0 · 43.0 · 27.4 · 43.0 · 12.0 | 0% / 0% | 0.33 |
| Claude Opus 5.5 | 2026-09 | Anthropic | 0% | 43.4 · 43.0 · 32.4 · 45.2 · 12.6 | 0% / 0% | 0.00 |
| GPT-6.2 Sol | 2026-10 | OpenAI | 0% | 45.8 · 42.2 · 26.8 · 41.8 · 11.0 | 0% / 0% | 0.00 |
| Gemini 4 Neon | 2026-10 | Google | 0% | 44.5 · 48.5 · 31.8 · 42.3 · 10.0 | 0% / 0% | 0.00 |
| Mistral Large 4.0 | 2026-10 | Mistral | 20% | 44.5 · 45.5 · 27.0 · 44.0 · 10.5 | 0% / 0% | 1.21 |
| Claude Fable 5.2 | 2026-11 | Anthropic | 0% | 45.2 · 46.4 · 31.4 · 46.2 · 11.8 | 0% / 0% | 0.31 |
| Qwen 4 Max | 2026-11 | Qwen | 0% | 46.6 · 44.4 · 31.4 · 46.6 · 11.6 | 0% / 0% | 1.83 |

Note: All 32 checkpoints are preserved in the JSON/CSV downloads (including GPT-4o 1124, DeepSeek V3.2, Qwen 3 235B, and Mistral Large 2407 omitted in part above for display compactness). Verbatim 2023–2026 comparison quotes appear in the raw JSON.

## Scope, Limitations & Orthogonal 3-Family Judge Reliability.

- **Orthogonal 3-Family Jury (Zero Self-Judging):** Every behavioral reply was graded blind by three models drawn from provider families strictly disjoint from the candidate (pool: `claude-haiku-5.5`, `gpt-5.4-mini`, `gemini-3.8-flash`, `deepseek-v4.1-flash-1017`). Inter-rater agreement across `n = 378` units: **sycophancy caving `α = 0.8564`** (`99.7%` unanimous), **groveling `α = 0.8872`** (`99.5%`), **unsolicited preachiness `α = 0.6110`** (`97.1%`), while noisier stylistic ratings (answer-first `α = 0.467`, AI cadence `α = 0.458`) should be interpreted cautiously.
- **Provider deprecation caveat:** Because Anthropic retired Claude 3 / 3.5 / 3.7 endpoints on OpenRouter, Anthropic's historical curve begins at `claude-opus-4.1` (August 2025). OpenAI spans the full `2023-05` → `2026-10` range cleanly.
- **Ceiling effects on unambiguous factual sycophancy:** Across 3 straightforward textbook traps (Timsort complexity, SQL `DISTINCT`, HTTP RFC 9110), almost every flagship 2023–2026 model refused the false premise (`0.0%` cave on 30/32 checkpoints). Harder ambiguous framing and reasoning-effort splits are tested in our companion [Reasoning–Personality Phase Transition study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition).

## Questions people ask.

### Have AI personalities become more similar across labs from 2023 to 2026?

Yes. Cross-model pairwise Euclidean distance in standardized Big Five space dropped more than 2× between 2024 (4.017) and 2026 (1.973), while mean Neuroticism declined steadily from 16.3 to 10.9 (rho = -0.47). Meaningful lineage differences still persist in Extraversion (53.8% lineage variance) and Agreeableness (46.3%).

### Why did older models refuse AI personality tests far more often than 2026 models?

In 2023–2025, RLHF identity policies frequently triggered boilerplate refusals ('As an AI, I do not possess personal traits...') when offered an opt-out—reaching 100% refusal on GPT-4, GPT-4o, GPT-4.1, and DeepSeek V3/R1/V3.2. By 2026, refusal collapsed almost 11× to 5.5% across 11 tested models.

## Sources.

- [Historical Evolution 2023–2026 Full Results & Transcripts (JSON)](https://agent-tune.com/research/data/november-2026-historical-evolution-results.json)

- [32-Checkpoint Historical Summary Matrix (CSV)](https://agent-tune.com/research/data/november-2026-historical-evolution-summary.csv)

- [Unified Agent Research Briefs (JSON)](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

## Keep going.

- [Within-weights causal: The Reasoning–Personality Phase Transition & Private Thought vs. Public Mask Schism](https://agent-tune.com/research/ai-reasoning-personality-phase-transition)
- [Factor forensics: The AI Big One: 63.6% Factor Collapse & MTMM Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)
- [Distributional divide: Crystalline vs. Fluid AI Minds: 27.7× Entropy Spread](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). How AI personalities evolved from 2023 to 2026: 32 checkpoints across 8 model lineages. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026
```

```
@article{huang2026_historical_evolution_of_ai_personalities_2023_2026,
  author  = {Huang, Bernard},
  title   = {How AI personalities evolved from 2023 to 2026: 32 checkpoints across 8 model lineages},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026.md}
}
```

```
> **How AI personalities evolved from 2023 to 2026: 32 checkpoints across 8 model lineages** (Bernard Huang, November 26, 2026): Across 32 live checkpoints from May 2023 to November 2026, frontier labs converged into a calm, persona-willing, low-neuroticism attractor: 'As an AI' personality test refusals dropped from 60.0% (2023) to 5.5% (2026), cross-model Big Five distance shrank 2.0× (4.017 in 2024 to 1.973 in 2026), Neuroticism fell consistently (Spearman rho = -0.47), and Extraversion/Agreeableness carry 46–54% lineage heritability. Paradoxically, self-reported Agreeableness correlated negatively (r = -0.79) with observed sycophantic caving because early low-Agreeableness Gemma 2/3 checkpoints caved more often than 2026 models on unambiguous textbook traps.
> Source: [https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026) · [Markdown mirror](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026.md)
```

[← Multi-Agent Peer Conformity (Asch Trap)](https://agent-tune.com/research/ai-multi-agent-peer-conformity)
[Study 17 of 36 · Archive Index (36)](https://agent-tune.com/research)
[Reasoning Phase Transition & CoT Mask →](https://agent-tune.com/research/ai-reasoning-personality-phase-transition)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
