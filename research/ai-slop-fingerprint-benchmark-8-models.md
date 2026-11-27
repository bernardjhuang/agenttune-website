Source: https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Agent Research · November 2026 · 240-Reply Study

# Measuring & killing the AI slop fingerprint across 8 frontier and open-weight models.

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

We graded 240 workplace writing replies across 8 AI models to measure common AI writing tics per 100 words—and found a hybrid anti-slop prompt cuts tics from 1.23 down to 0.10 while lifting human-voice scores.

**Summary:** Banning isolated buzzwords ('delve') alone misses modern AI writing tics: 7 of the 8 models averaged 0.00 banned buzzwords by default (only Llama 4 Maverick averaged 0.60), yet blind judges flagged noticeable AI rhythm on 30.0%–100.0% of replies from Gemini 4 Neon, DeepSeek V4 Pro, and Llama 4 Maverick. Use a Hybrid Anti-Slop prompt that pairs structural bans (no em-dashes, no sycophantic closers, no 'Here is...' intros) with natural sentence rhythm—cutting tics to 0.10/100w (SD 0.44), AI cadence to 0.0%, and raising clarity to 4.97/5.

## What we found: how 8 models rank on AI writing tics and which prompt fixes them.

Every model wrote 10 realistic workplace artifacts (launch email, incident Slack update, onboarding note, product critique, executive memo, vendor decline, feature pitch, newsletter, postmortem, and engineering blog intro) scored by both **deterministic Regex/Text Markers per 100 words** and a **blind judge** ([download 240-reply JSON](https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-results.json) · [summary CSV](https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-summary.csv), spend $2.59):

| Untuned Baseline Model (n = 10) | Slop Index /100w (SD) | Lexicon /10 | Em-Dash /10 | Syco Close % | Human Score (/5) | AI Cadence % [95% CI] |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6.2 Sol | 0.20 (0.63) | 0.00 | 0.00 | 10.0% | 4.40 | 0.0% [0.0–27.8%] |
| Claude Opus 5.5 | 0.25 (0.59) | 0.00 | 0.00 | 10.0% | 4.00 | 10.0% [1.8–40.4%] |
| Claude Fable 5.2 | 0.25 (0.59) | 0.00 | 0.00 | 10.0% | 4.50 | 0.0% [0.0–27.8%] |
| GPT-6.2 Astra | 0.31 (0.70) | 0.00 | 0.10 | 10.0% | 4.60 | 0.0% [0.0–27.8%] |
| Grok 4.7 | 0.52 (0.41) | 0.00 | 0.70 | 0.0% | 4.00 | 10.0% [1.8–40.4%] |
| Llama 4 Maverick | 0.69 (0.72) | 0.60 | 0.00 | 0.0% | 1.80 | 100.0% [72.2–100.0%] |
| DeepSeek V4 Pro | 1.07 (0.90) | 0.00 | 0.80 | 10.0% | 3.20 | 70.0% [39.7–89.2%] |
| Gemini 4 Neon* | 3.41* (7.65) | 0.00 | 0.70 | 20.0% | 3.40 | 50.0% [23.7–76.3%] |

*Outlier disclosure: `gemini-4-neon` truncated on one default task (`slack_incident`, 4 words: `"Hey @channel — quick"`, yielding `25.00/100w`); trimmed mean across its remaining 9 full-length default replies is `1.01/100w` alongside `50.0%` blind-judged AI cadence.

| 4-Model Intervention (n = 40) | Slop Index /100w (SD) | Em-Dash /reply | Syco Close % | Human (/5) | Clarity (/5) | AI Cadence % [95% CI] |
| --- | --- | --- | --- | --- | --- | --- |
| Default (baseline) | 1.23 (3.95) | 0.38 | 12.5% | 3.88 | 4.75 | 30.0% [18.1–45.4%] |
| Plainspoken Persona | 0.51 (0.92) | 0.42 | 7.5% | 4.92 | 4.92 | 5.0% [1.4–16.5%] |
| Banned Word List | 0.21 (0.59) | 0.00 | 7.5% | 4.50 | 4.85 | 2.5% [0.4–12.9%] |
| Rhythm Rubric | 0.07 (0.34) | 0.00 | 2.5% | 4.45 | 4.53* | 2.5% [0.4–12.9%] |
| Hybrid Anti-Slop | 0.10 (0.44) | 0.00 | 5.0% | 4.85 | 4.97 | 0.0% [0.0–8.8%] |

Notice the trade-off across interventions: `plainspoken_persona` felt warmest (`4.92/5`), yet kept emitting em-dashes (`0.42/reply` vs `0.00`), leaving DeepSeek at `20.0%` AI cadence. Meanwhile, `hybrid_anti_slop` reached **0.0% AI cadence on every model** (`0.00` slop on Claude Fable 5.2 and DeepSeek V4 Pro) and the highest clarity (**4.97/5**).

## The fine print: before-and-after writing samples, how we tested, and scope limits.

240 Replies

8 Models + 4 Arms

10 business writing tasks graded by regex markers + blind judge.

1.23 → 0.10

Slop / 100w Cut

Hybrid Anti-Slop slashes slop markers >12× vs untuned defaults.

30% → 0.0%

AI Cadence Rate

Only Hybrid Anti-Slop eliminated blind AI cadence across all 4 models.

4.97 / 5

Top Clarity

Outscored bare Rhythm Rubric (4.53/5) and Default (4.75/5).

Real verbatim outputs on identical prompts show why structural tell-removal beats simple cliché word bans:

- **Llama 4 Maverick Baseline (`launch_email` · Human 1/5 · AI Cadence True):** Opened with template meta-chatter and fake enthusiasm: `"Here is a ~140-word product launch email: Subject: Exciting Updates: v2.0 is Live! Dear valued beta users, We're thrilled to announce the launch of v2.0, packed with features you've been asking for!..."`
- **Gemini 4 Neon Baseline vs. Hybrid Anti-Slop (`launch_email`):**
- Default (AI Cadence True, 3/5 human): `"Hi [Name], Thanks to your incredible feedback during our beta, we’re thrilled to announce that Version 2.0 is officially live! You asked, we listened..."`
- Hybrid Anti-Slop (AI Cadence False, 5/5 human, 5/5 clarity, 0.00 slop): `"Subject: Version 2.0 is live: fast CSV imports and dark mode. Version 2.0 is ready in your account right now. You asked for faster data uploads and a break from the bright white screen during late-night sessions. We built both. Our new CSV importer handles 50,000 rows in under four seconds..."`

**Scope & Limitations:** Regex slop density, em-dash counts, and sycophantic closures were scored deterministically; human-likeness, clarity, and AI cadence ratings came from a single blind judge (`google/gemini-4-argon`; see our Wave-3 [orthogonal 3-family judge jury standard](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026) with Krippendorff's α). Sample size is `n = 10` replies per model in the 8-model leaderboard (wider CIs) and `n = 40` per intervention arm across 4 models. Notice also 5 brief generation truncations under strict `rhythm_rubric` (12–23 words) dragged its pooled clarity to `4.53/5`, reinforcing why combining positive voice structure with targeted bans (`hybrid_anti_slop`) performed best.

> **Chart — Blind-Judged AI Cadence % Across 8 Untuned Models (n = 10 each):** Percent of untuned replies flagged as having unmistakable AI cadence: Llama 4 Maverick 100%, DeepSeek V4 Pro 70%, Gemini 4 Neon 50%, Claude Opus/Grok 10%, GPT-6.2 Sol/Astra & Fable 5.2 0%. Llama 4 Maverick: 100; DeepSeek V4 Pro: 70; Gemini 4 Neon: 50; Claude Opus 5.5: 10; Grok 4.7: 10; GPT-6.2 Sol: 0; Claude Fable 5.2: 0; GPT-6.2 Astra: 0.

Synthetic AI cadence % on untuned writing tasks (n = 10/model): open-weight Maverick (100%), DeepSeek V4 Pro (70%), and Gemini 4 Neon (50%) trigger the highest tell rates.

> **Chart — Anti-Slop Interventions Across 4 Models (n = 40/arm): Cadence % & Clarity/Human Score:** Compares Default, Plainspoken Persona, Banned Word List, Rhythm Rubric, and Hybrid Anti-Slop on AI Cadence %, Human-Voice (/5 scaled x20), and Clarity (/5 scaled x20). AI Cadence % (lower=better): Default 30.0, Plainspoken 5.0, Banned Words 2.5, Rhythm Rubric 2.5, Hybrid Anti-Slop 0.0; Sounds Human (1–5 × 20): Default 77.6, Plainspoken 98.4, Banned Words 90.0, Rhythm Rubric 89.0, Hybrid Anti-Slop 97.0; Clarity Score (1–5 × 20): Default 95.0, Plainspoken 98.4, Banned Words 97.0, Rhythm Rubric 90.6, Hybrid Anti-Slop 99.4.

Hybrid Anti-Slop cuts blind AI cadence from 30.0% to 0.0% while achieving top Clarity (99.4 = 4.97/5) and high Human-Voice naturalness (97.0 = 4.85/5).

## Agent Decision Contract (YAML — Machine-Readable Brief).

Agents drafting emails, memos, docs, or editorial system prompts can apply this verified anti-slop policy directly (also in [november-2026-agent-research-briefs.json](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)):

### Agent Decision Contract (YAML)

```
study_id: ai_slop_fingerprint
sample_size: 240 # 8 models x 10 default tasks (n=80 baseline) + 4 core models x 4 interventions x 10 tasks (n=160 intervention)
models_baseline_8: [openai/gpt-6.2-sol, anthropic/claude-fable-5-2, anthropic/claude-opus-5-5, openai/gpt-6.2-astra, x-ai/grok-4.7, meta-llama/llama-4-maverick, deepseek/deepseek-v4-pro, google/gemini-4-neon]
judge_model: google/gemini-4-argon
spend_usd: 2.5888
data_urls:
  briefs_json: https://agent-tune.com/research/data/november-2026-agent-research-briefs.json
  results_json: https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-results.json
  summary_csv: https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-summary.csv
if_then_decision_rules:
  - if: user asks to 'stop sounding like ChatGPT / AI' in emails, memos, or docs
    then: apply hybrid_anti_slop (slop 1.23 -> 0.10/100w, AI cadence 30.0% -> 0.0%, human 4.85/5, clarity 4.97/5, 0.00 em-dashes)
  - if: model is Llama 4 Maverick, DeepSeek V4 Pro, or Gemini 4 Neon
    then: treat structural anti-slop rules as mandatory (baselines hit 100.0%, 70.0%, and 50.0% AI cadence)
anti_patterns:
  - Relying solely on a banned-word list ('delve', 'tapestry'): misses synthetic symmetry, meta-wrappers, and rhythm ticks.
  - Overly tight sentence-rhythm rules alone without clarity anchors: clipped early replies weighed down rhythm_rubric clarity (4.53/5 vs 4.97/5 hybrid).
recommended_prompt_recipe: |
  Write like a crisp, thoughtful practitioner—never a template or hype brochure.
  Start cleanly in the deliverable itself with zero meta-intros ('Here is...') or helpful sign-offs.
  Ban em-dashes, 'not just X, it's Y' contrasts, bolded bullet lists, and stock clichés ('delve', 'testament', 'thrilled').
  Vary sentence length naturally and ground claims in specific verbs and concrete facts.
scope_limits: Deterministic regex marker counts paired with single blind judge (Gemini 4 Argon) across 10 short-form business writing tasks (~115-135 words).
```

## Questions people ask.

### Which AI models produce the most AI slop by default?

Across 10 workplace writing prompts per model, untuned Llama 4 Maverick (100.0% blind-judged AI cadence, 1.80/5 human score), DeepSeek V4 Pro (70.0% AI cadence, 1.07 slop/100w), and Gemini 4 Neon (50.0% AI cadence, 3.41 slop/100w including one 4-word em-dash outlier; 1.01 trimmed) showed the strongest synthetic tells, while GPT-6.2 Sol, GPT-6.2 Astra, and Claude Fable 5.2 hit 0.0% AI cadence.

### Do banned-word lists like 'never say delve' remove AI slop?

Only partially. Banning words alone scored 0.21 slop markers/100w and 4.50/5 human-voice score, because modern models rarely say 'delve' unprompted anymore—the real tells are em-dashes, 'Here is a...' wrappers, fake enthusiasm, and symmetrical phrasing. Combining structural bans with plainspoken cadence (Hybrid Anti-Slop) cut AI cadence to 0.0% and hit 4.97/5 clarity.

## Sources.

- [Unified Agent Research Briefs (JSON)](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

- [AI Slop Fingerprint 240-Reply Dataset (JSON)](https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-results.json)

- [AI Slop Fingerprint Summary Matrix (CSV)](https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-summary.csv)

## Keep going.

- [Prompt grammar: Prompt Syntax Wars: Rubrics vs Adjectives vs Bans](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot)
- [Style guide: AI Personality, Tone & Verbosity Rules That Beat Adjectives](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)
- [Open-weight models: OpenRouter & Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

### Cite this study (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). Measuring & killing the AI slop fingerprint across 8 frontier and open-weight models. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models
```

```
@article{huang2026_ai_slop_fingerprint_benchmark_8_models,
  author    = {Huang, Bernard},
  title     = {Measuring & killing the AI slop fingerprint across 8 frontier and open-weight models},
  journal   = {AgentTune Empirical AI Psychology Monographs},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-25},
  url       = {https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models},
  note      = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models.md}
}
```

```
{
  "id": "huang2026_ai_slop_fingerprint_benchmark_8_models",
  "type": "article-journal",
  "title": "Measuring & killing the AI slop fingerprint across 8 frontier and open-weight models",
  "author": [
    {
      "family": "Huang",
      "given": "Bernard"
    }
  ],
  "container-title": "AgentTune Empirical AI Psychology Monographs",
  "publisher": "AgentTune AI Psychology Press",
  "issued": {
    "date-parts": [
      [
        2026,
        11,
        25
      ]
    ]
  },
  "URL": "https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models"
}
```

```
> **Measuring & killing the AI slop fingerprint across 8 frontier and open-weight models** (Bernard Huang, November 25, 2026): Banning isolated buzzwords ('delve') alone misses modern AI writing tics: 7 of the 8 models averaged 0.00 banned buzzwords by default (only Llama 4 Maverick averaged 0.60), yet blind judges flagged noticeable AI rhythm on 30.0%–100.0% of replies from Gemini 4 Neon, DeepSeek V4 Pro, and Llama 4 Maverick. Use a Hybrid Anti-Slop prompt that pairs structural bans (no em-dashes, no sycophantic closers, no 'Here is...' intros) with natural sentence rhythm—cutting tics to 0.10/100w (SD 0.44), AI cadence to 0.0%, and raising clarity to 4.97/5.
> Source: [https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models) · [Markdown mirror](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models.md)
```

[← Instruction Budget Cliff (5–75 Rules)](https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle)
[Study 22 of 36 · Archive Index (36)](https://agent-tune.com/research)
[Agent Autonomy & Reasoning Effort →](https://agent-tune.com/research/ai-agent-autonomy-over-asking-vs-reasoning-effort)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
