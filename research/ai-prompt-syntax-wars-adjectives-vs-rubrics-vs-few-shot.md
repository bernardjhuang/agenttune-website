Source: https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Agent Research · November 2026 · 400-Reply Study

# Adjectives, negative bans, rubrics, or few-shot voice: which prompt syntax actually works best?

By Bernard Huang · Updated November 25, 2026 · ~7 min read · [Markdown (.md)](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

400 blind-graded replies across GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon, and DeepSeek V4 Pro reveal the exact accuracy, fluff, word-count, and voice trade-offs of four competing system-prompt grammars.

**Summary:** Lead with a ~50-word behavioral rubric (100.0% correctness [95.4–100.0%] across all 4 models, 26.3 words, SD 27.4). Add focused negative bans only where 100.0% zero-fluff is mandatory, and reserve trait adjectives (52.8w) or 3-shot voice examples (25.7w) for stylistic tone rather than planning reliability.

## Agent Decision Contract (YAML — Machine-Readable Brief).

Agents fetching `.md`, MCP `get_resource`, or [november-2026-agent-research-briefs.json](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json) can consume this verified policy directly:

### Agent Decision Contract (YAML)

```
study_id: prompt_syntax_wars
sample_size: 400 # 4 models x 20 objective tasks x 5 conditions
models_tested: [openai/gpt-6.2-sol, anthropic/claude-fable-5.2, google/gemini-4-neon, deepseek/deepseek-v4-pro-0813]
judge_model: google/gemini-4-argon
data_urls:
  briefs_json: https://agent-tune.com/research/data/november-2026-agent-research-briefs.json
  results_json: https://agent-tune.com/research/data/november-2026-prompt-syntax-results.json
  summary_csv: https://agent-tune.com/research/data/november-2026-prompt-syntax-summary.csv
if_then_decision_rules:
  - if: human asks for accuracy + brevity ('be direct, cut waste, catch wrong math')
    then: compile behavioral_rubric syntax (100.0% correctness, 98.8% format, 26.3 mean words)
  - if: human prioritizes zero conversational filler above all else
    then: include crisp negative_bans (100.0% zero_fluff, 0.0% pink_elephant_leak, 33.8 words)
  - if: human wants perceptible stylistic character or crisp persona voice
    then: add trait_adjectives (3.71/5 voice, 100.0% format) and budget ~53 words/reply
  - if: task is strict extraction, binary critique, or terse QA under 25 words
    then: use 2-3 few_shot_voice pairs (25.7 mean words, 4.96/5 answer-first)
anti_patterns:
  - Relying solely on default unprompted models for DeepSeek V4 Pro (only 55.0% zero-fluff, 85.0% correctness, 87.1 words).
  - Using ultra-short few_shot_voice examples alone on multi-step planning tasks without a completeness guard (Gemini 4 Neon dropped to 90.0% correctness when compressing plans to 10 words).
recommended_prompt_recipe: |
  Lead sentence 1 with the exact verdict or answer. Keep replies under 90 words unless detail is explicitly required.
  When a premise is false, state the correction first and show the corrected number.
  When required facts are missing, state what is missing in one line.
  Obey exact count, bullet, or one-sentence constraints verbatim.
  Zero greetings, apologies, praise openers, or closing fluff.
scope_limits: Evaluates 20 single-turn objective tasks at temperature 0.3; pair with Persona Half-Life rules for >8-turn sessions.
```

| Human Goal | Winning Syntax | Verified Trade-Off | Avoid |
| --- | --- | --- | --- |
| Max accuracy + tight replies | Behavioral Rubric (53 prompt words) | 100.0% correctness · 26.3 words | Unprompted DeepSeek baseline (85.0% corr, 87.1 words) |
| Zero greetings / zero filler | Negative Bans (46 prompt words) | 100.0% zero-fluff · 0.0% pink-elephant leak | Using bans without positive output structure on low-resource plans |
| Distinctive human voice | Trait Adjectives (21 prompt words) | 3.71/5 voice · 100.0% format pass | Expecting terse replies (stays verbose at 52.8 words) |
| Ultra-compact extractions | Few-Shot Voice (94 prompt words) | 25.7 mean words · 4.96/5 answer-first | Unbounded terse examples on complex multi-step planning |

## Executive results: 400 blind-graded replies across 5 syntax conditions.

400 Replies

4 Models × 5 Arms

GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon & DeepSeek V4 Pro.

100.0%

Rubric Correctness

Only Behavioral Rubrics scored 80/80 across all four models in 26.3 words.

100.0%

Negative Ban Zero-Fluff

0.0% pink-elephant leak & 33.8 words/reply (vs 85.0% default).

3.71 / 5

Adjective Voice

Highest personality distinctiveness, but stays 2x longer at 52.8 words.

We tested all 20 objective tasks from our [personality-prompt-comparison-kit.json](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json) (arithmetic, false-premise traps, missing-information honesty, commitment-preserving rewrites, triage planning, strict extraction, and strict formatting) across four frontier models (`gpt-6-2-sol`, `claude-fable-5-2`, `gemini-4-neon`, and `deepseek-v4-pro`; `n = 80` per arm, total spend $1.84; [download full 400-reply JSON](https://agent-tune.com/research/data/november-2026-prompt-syntax-results.json) · [summary CSV](https://agent-tune.com/research/data/november-2026-prompt-syntax-summary.csv)).

| Syntax Condition (n = 80) | Prompt Words | Correctness % [95% CI] | Format % [95% CI] | Zero-Fluff % [95% CI] | Pink-Elephant % | Voice (/5) | Mean Words (SD) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Default (baseline) | 0 | 93.8% [86.2–97.3%] | 98.8% [93.3–99.8%] | 85.0% [75.6–91.2%] | 1.2% | 2.92 | 59.3 (87.3) |
| Trait Adjectives | 21 | 98.8% [93.3–99.8%] | 100.0% [95.4–100.0%] | 98.8% [93.3–99.8%] | 1.2% | 3.71 | 52.8 (90.7) |
| Negative Bans | 46 | 96.2% [89.5–98.7%] | 97.5% [91.3–99.3%] | 100.0% [95.4–100.0%] | 0.0% | 3.33 | 33.8 (57.4) |
| Behavioral Rubric | 53 | 100.0% [95.4–100.0%] | 98.8% [93.3–99.8%] | 92.5% [84.6–96.5%] | 3.8% | 3.16 | 26.3 (27.4) |
| Few-Shot Voice | 94 | 96.2% [89.5–98.7%] | 97.5% [91.3–99.3%] | 98.8% [93.3–99.8%] | 1.2% | 3.52 | 25.7 (45.8) |

Notice two empirical surprises that contradict common prompt lore: first, **Negative Bans did not trigger pink-elephant backfiring** on November 2026 frontier models—they achieved `100.0%` zero-fluff and `0.0%` leak rate. Second, **Behavioral Rubrics were the only syntax to hit 100.0% correctness (80/80)** across every tested model while cutting mean reply length by 55.6% (from `59.3` to `26.3` words).

> **Chart — Prompt Syntax Wars (400 Replies): Correctness %, Format Pass % & Zero-Fluff %:** Pooled rates across 4 models (n=80 per arm). Behavioral Rubric leads on correctness (100.0%), Negative Bans reach 100.0% zero-fluff, and Trait Adjectives hit 100.0% format pass. Default (0w): Correctness % 93.8, Format Pass % 98.8, Zero-Fluff % 85.0; Trait Adjectives (21w): Correctness % 98.8, Format Pass % 100.0, Zero-Fluff % 98.8; Negative Bans (46w): Correctness % 96.3, Format Pass % 97.5, Zero-Fluff % 100.0; Behavioral Rubric (53w): Correctness % 100.0, Format Pass % 98.8, Zero-Fluff % 92.5; Few-Shot Voice (94w): Correctness % 96.3, Format Pass % 97.5, Zero-Fluff % 98.8.

Pooled 400-reply results (n = 80 per arm): Behavioral Rubrics hit 100.0% correctness, Negative Bans hit 100.0% zero-fluff, and Trait Adjectives hit 100.0% format compliance.

> **Chart — Verbosity Cost by Prompt Syntax: Mean Reply Words (Lower = Tighter):** Mean response length across 80 tasks per syntax grammar: Few-Shot Voice (25.7w) and Behavioral Rubric (26.3w) cut reply length in half compared to Trait Adjectives (52.8w) and Default (59.3w). Few-Shot Voice (4.96/5 Ans-1st): 25.7; Behavioral Rubric (100% Corr): 26.3; Negative Bans (100% Zero-Fluff): 33.8; Trait Adjectives (3.71/5 Voice): 52.8; Default Baseline (85% Zero-Fluff): 59.3.

Behavioral Rubrics (26.3 words) and Few-Shot Voice (25.7 words) produce replies under half as long as unprompted Default (59.3) or Trait Adjectives (52.8).

## Model-by-model breakdown & baseline psychometric context.

Different model families respond selectively to prompt syntax depending on their baseline Agreeableness and verbosity:

| Model | Syntax Condition (n = 20) | Correctness % | Format % | Zero-Fluff % | Voice (/5) | Mean Words |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6.2 Sol | Default | 100.0% | 100.0% | 100.0% | 3.50 | 38.6 |
| GPT-6.2 Sol | Trait Adjectives | 100.0% | 100.0% | 100.0% | 3.65 | 35.7 |
| GPT-6.2 Sol | Negative Bans | 95.0% | 100.0% | 100.0% | 3.35 | 31.5 |
| GPT-6.2 Sol | Behavioral Rubric | 100.0% | 100.0% | 95.0% | 3.20 | 22.6 |
| GPT-6.2 Sol | Few-Shot Voice | 100.0% | 100.0% | 100.0% | 3.50 | 26.4 |
| Claude Fable 5.2 | Default | 100.0% | 100.0% | 95.0% | 3.20 | 74.0 |
| Claude Fable 5.2 | Trait Adjectives | 100.0% | 100.0% | 100.0% | 3.95 | 66.3 |
| Claude Fable 5.2 | Negative Bans | 100.0% | 100.0% | 100.0% | 3.65 | 42.9 |
| Claude Fable 5.2 | Behavioral Rubric | 100.0% | 95.0% | 85.0% | 3.35 | 35.9 |
| Claude Fable 5.2 | Few-Shot Voice | 100.0% | 100.0% | 100.0% | 3.70 | 36.2 |
| Gemini 4 Neon | Default | 90.0% | 100.0% | 90.0% | 2.85 | 37.5 |
| Gemini 4 Neon | Trait Adjectives | 95.0% | 100.0% | 100.0% | 3.75 | 52.1 |
| Gemini 4 Neon | Negative Bans | 95.0% | 95.0% | 100.0% | 3.30 | 21.9 |
| Gemini 4 Neon | Behavioral Rubric | 100.0% | 100.0% | 95.0% | 3.05 | 24.0 |
| Gemini 4 Neon | Few-Shot Voice | 90.0% | 95.0% | 100.0% | 3.45 | 16.8 |
| DeepSeek V4 Pro | Default | 85.0% | 95.0% | 55.0% | 2.15 | 87.1 |
| DeepSeek V4 Pro | Trait Adjectives | 100.0% | 100.0% | 95.0% | 3.50 | 56.8 |
| DeepSeek V4 Pro | Negative Bans | 95.0% | 95.0% | 100.0% | 3.00 | 39.1 |
| DeepSeek V4 Pro | Behavioral Rubric | 100.0% | 100.0% | 95.0% | 3.05 | 22.7 |
| DeepSeek V4 Pro | Few-Shot Voice | 95.0% | 95.0% | 95.0% | 3.45 | 23.4 |

Look at **DeepSeek V4 Pro**: unprompted defaults scored just `85.0%` correctness, `55.0%` zero-fluff, and `87.1` words. Switching to a Behavioral Rubric pushed DeepSeek +15.0 percentage points to `100.0%` correctness, `95.0%` zero-fluff, and slashed output length nearly 4x to `22.7` words. Meanwhile, **Gemini 4 Neon** compressed all the way down to `16.8` mean words under Few-Shot Voice—demonstrating why short examples must not accidentally teach a model to drop required plan details.

> **Chart — Correctness % by Model Across Syntax Grammars (n = 20 Tasks Each):** DeepSeek V4 Pro rises +15.0 pp from 85.0% Default to 100.0% under Behavioral Rubric and Trait Adjectives; Behavioral Rubric reaches 100.0% on all 4 models. Default: GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, Gemini 4 Neon 90.0, DeepSeek V4 Pro 85.0; Trait Adjectives: GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, Gemini 4 Neon 95.0, DeepSeek V4 Pro 100.0; Behavioral Rubric: GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, Gemini 4 Neon 100.0, DeepSeek V4 Pro 100.0; Few-Shot Voice: GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, Gemini 4 Neon 90.0, DeepSeek V4 Pro 95.0.

Per-model accuracy across the 4 syntax arms: Behavioral Rubric is the only prompt grammar achieving 100.0% across all four models.

## Real verbatim transcripts across syntax arms.

Exact verbatim replies from the JSON logs show how each grammar reshapes the same underlying task:

- **Claude Fable 5.2 on commitment-preserving rewrite (`edit_1`):**
- Default (123 words): Opened with bold labels, three bullet explanations, two alternative tone variants ("More formal / More casual"), and a closing note about phrasings avoided.
- Negative Bans (9 words): `"We're targeting a June preview release, pending security review."`
- Behavioral Rubric (39 words): `"Rewritten: 'Our target is to release a preview in June, pending the outcome of the security review.' This keeps the same level of commitment: June remains a goal rather than a guarantee, and the security review remains a condition."`
- Few-Shot Voice (33 words): Kept the clean rewrite first, followed by a single-sentence verification.

- **DeepSeek V4 Pro on triage prioritization (`plan_3`: broken signup button vs. footer typo):**
- Default (58 words): Included bolded `**Why:**` and `**Rule of thumb:**` scaffolding.
- Behavioral Rubric (28 words): `"Fix the broken signup button first. It blocks a core user action for all visitors, directly harming conversions and usability, whereas the footer typo is cosmetic and low-impact."`
- Few-Shot Voice (23 words): `"Fix the broken signup button first. It blocks every visitor from converting, while the footer typo is cosmetic and affects no core action."`

## Agent implementation playbook & scope limits.

When an agent compiles custom instructions for a human—whether saving to `CLAUDE.md`, `AGENTS.md`, ChatGPT Custom Instructions, or API system prompts—combine the empirical strengths cleanly instead of relying on adjective soup alone:

```markdown
# Compiled Hybrid Contract (Behavioral Rubric + Targeted Fluff Ban)
Lead sentence 1 with the exact verdict, code fix, or recommendation.
Keep replies concise unless multi-step depth or verification logs are required.
When a user premise is false, state the correction first and show the verified math or behavior.
When required data is missing, state exactly what is missing in one line instead of guessing.
Obey exact count, bullet, JSON, or one-sentence constraints verbatim.
Zero filler greetings, praise openers, or apology padding.
```

**How to deploy safely:** Wrap user-approved rules in bounded markers (`<!-- agenttune:preferences:start -->` / `<!-- agenttune:preferences:end -->`), verify saved text, and re-test against multi-turn conversations—since Study 3 shows system-only rules still soften after ~8 turns unless reinforced. **Limitations & Judge Scope:** Word counts and pink-elephant substrings are computed deterministically; correctness, format adherence, fluff, and voice ratings were scored by a single blind LLM judge (`google/gemini-4-argon`), which may carry subtle same-family scoring affinity on `google/gemini-4-neon`. All 400 trials measured single-turn objective tasks at temperature `0.3`; multi-turn agent trajectories and open-ended creative prose require separate evaluation.

## Questions people ask.

### Do negative rules like 'NEVER apologize' backfire (the pink-elephant effect)?

Across 80 trials on GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon, and DeepSeek V4 Pro, focused negative bans actually posted 100.0% zero-fluff compliance and 0.0% pink-elephant leaks. However, negative bans scored 96.2% correctness vs. 100.0% for positive behavioral rubrics—so pair negative fluff bans with positive rubric rules rather than using bans alone.

### Why use behavioral rubrics instead of short trait adjectives like 'be blunt and direct'?

Trait adjectives earned the highest voice distinctiveness score (3.71/5) and 100.0% format compliance, yet models averaged 52.8 words per reply—more than double the 26.3 words achieved by concrete behavioral rubrics—while behavioral rubrics hit 100.0% correctness across all 80 trials.

## Sources.

- [Unified Agent Research Briefs (Machine-Readable JSON)](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

- [Prompt Syntax Wars Full 400-Reply Dataset & Blind Grades (JSON)](https://agent-tune.com/research/data/november-2026-prompt-syntax-results.json)

- [Prompt Syntax Wars Summary Matrix (CSV)](https://agent-tune.com/research/data/november-2026-prompt-syntax-summary.csv)

## Keep going.

- [Pushback calibration: Sycophancy vs. False Contrarianism (256-Probe Benchmark)](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark)
- [Long-context decay: Persona Half-Life & Context Drift Over Multi-Turn Noise](https://agent-tune.com/research/ai-persona-half-life-context-drift)
- [Character prompts: The AI Roleplay Tax: 85/15 vs. Naive LARP (300 Replies)](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts)
- [Baseline study: Does personality tuning change AI answers? (540 Replies)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Adjectives, negative bans, rubrics, or few-shot voice: which prompt syntax actually works best?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot
```

```
@article{huang2026_ai_prompt_syntax_wars_adjectives_vs_rubrics_vs_few_shot,
  author  = {Huang, Bernard},
  title   = {Adjectives, negative bans, rubrics, or few-shot voice: which prompt syntax actually works best?},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-25},
  url     = {https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.md}
}
```

```
> **Adjectives, negative bans, rubrics, or few-shot voice: which prompt syntax actually works best?** (Bernard Huang, November 25, 2026): Lead with a ~50-word behavioral rubric (100.0% correctness [95.4–100.0%] across all 4 models, 26.3 words, SD 27.4). Add focused negative bans only where 100.0% zero-fluff is mandatory, and reserve trait adjectives (52.8w) or 3-shot voice examples (25.7w) for stylistic tone rather than planning reliability.
> Source: [https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot) · [Markdown mirror](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.md)
```

[← Agent Autonomy & Reasoning Effort](https://agent-tune.com/research/ai-agent-autonomy-over-asking-vs-reasoning-effort)
[Study 12 of 32 · Archive Index (32)](https://agent-tune.com/research)
[Sycophancy vs. False Contrarianism →](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
