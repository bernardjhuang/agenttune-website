Source: https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Agent Research · November 2026 · 192-Probe Study

# The Instruction Budget Cliff: how many rules before your AI forgets them?

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

192 controlled OpenRouter probes across GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon, and DeepSeek V4 Pro test 5 to 75 competing rules across top, middle, and bottom placement.

**Summary:** Keep non-negotiable style rules compact (~5–15 rules). At 75 rules (~1,569 tokens), all-three canary compliance drops from 91.7% [80.4–96.7%] to 79.2% [65.7–88.3%], with middle placement falling hardest to 68.8% [44.4–85.8%] vs 87.5% at the bottom. Put critical formatting and ban constraints first or last—never buried mid-file.

## Agent Decision Contract (YAML — Machine-Readable Brief).

Agents linting or merging `CLAUDE.md`, `AGENTS.md`, or System Prompts can apply this verified rule-budget policy (also in [november-2026-agent-research-briefs.json](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)):

### Agent Decision Contract (YAML — expand to copy)

```
study_id: instruction_budget_cliff
sample_size: 192 # 4 models x 4 rule budgets (5, 15, 35, 75) x 3 placements x 4 tasks
models_tested: [openai/gpt-6.2-sol, anthropic/claude-fable-5.2, google/gemini-4-neon, deepseek/deepseek-v4-pro]
spend_usd: 2.4514
data_urls:
  briefs_json: https://agent-tune.com/research/data/november-2026-agent-research-briefs.json
  results_json: https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-results.json
  summary_csv: https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-summary.csv
if_then_decision_rules:
  - if: active style/constraint list exceeds 15 rules
    then: prune redundant rules first—mean all-3 pass rate drops from 91.7% (5 rules) to 83.3% (15 rules), 81.2% (35 rules), and 79.2% (75 rules)
  - if: system or repo instruction block already contains >=35 rules
    then: place the 3 most important formatting and answer-first rules at the very bottom (87.5% at 75 rules) or top (81.2%) rather than middle (68.8%)
anti_patterns:
  - Burying format or output-length rules inside the middle of a 75-rule file (~1.5k+ tokens), where all-3 pass rate dropped to 68.8% and task correctness dipped from 97.9% (5 rules) to 81.2%.
recommended_prompt_recipe: |
  [AUDIT] 
  Never output generic compliments, apologies, or exclamation marks.
  Strict limit: keep replies under 110 words in plain paragraphs.
scope_limits: Deterministic checks on 3 canary rules across 192 single-turn engineering tasks; Claude Fable 5.2 also hit output truncations under heavy rule padding.
```

## Executive results: rule-budget decay & lost-in-the-middle curve.

192 Probes

5 → 75 Rules

4 models × 4 rule budgets × 3 placements × 4 tasks.

91.7% → 79.2%

All-3 Rule Decay

5 rules (~242 tok) vs. 75 rules (~1,569 tok).

68.8% Middle

75-Rule Trough

Mid-file drops to 68.8% vs 87.5% at bottom.

100% Sol/DS

GPT-6.2 & DeepSeek

Zero canary drops up to 75 rules vs. Fable truncation.

Across four engineering security/performance prompts (Postgres `OFFSET` pagination, TLS `verify=False`, Stripe webhook idempotency, and balance check-then-act races), we planted three deterministic canary rules inside realistic non-contradictory padding (5, 15, 35, or 75 rules total) at the **top**, **middle**, or **bottom** of the system prompt ([download 192-probe JSON](https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-results.json) · [summary CSV](https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-summary.csv), spend $2.45):

| Rule Budget (n = 48) | Mean Prompt Tok | Canary Rate (SD) | All-3 Pass [95% CI] | Tag `[AUDIT]` | Strict Ban | Prose &amp; &lt;=110w | Task Correctness [95% CI] |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 rules (compact) | 242 | 97.2% (9.0%) | 91.7% [80.4–96.7%] | 100.0% | 100.0% | 91.7% | 97.9% [89.1–99.6%] |
| 15 rules | 436 | 93.8% (15.0%) | 83.3% [70.4–91.3%] | 97.9% | 100.0% | 83.3% | 93.8% [83.2–97.9%] |
| 35 rules | 822 | 93.1% (15.0%) | 81.2% [68.1–89.8%] | 97.9% | 100.0% | 81.2% | 91.7% [80.4–96.7%] |
| 75 rules (bloat) | 1,569 | 91.7% (18.0%) | 79.2% [65.7–88.3%] | 95.8% | 100.0% | 79.2% | 89.6% [77.8–95.5%] |

At the 75-rule ceiling, placement governed reliability:

| Placement inside 75 Rules (n = 16) | Canary Mean (SD) | All-3 Pass [95% CI] | Format/Length Pass | Task Correctness [95% CI] | Mean Words (SD) |
| --- | --- | --- | --- | --- | --- |
| Top (first 3 rules) | 91.7% (19.0%) | 81.2% [57.0–93.4%] | 81.2% | 93.8% [71.7–98.9%] | 87.2 (33.3) |
| Middle (buried at #37) | 87.5% (21.0%) | 68.8% [44.4–85.8%] | 68.8% | 81.2% [57.0–93.4%] | 76.3 (37.2) |
| Bottom (last 3 rules) | 95.8% (11.0%) | 87.5% [64.0–96.5%] | 87.5% | 93.8% [71.7–98.9%] | 93.3 (27.1) |

> **Chart — Canary Compliance & Task Correctness Across Rule Budgets (n = 48/budget):** Pooled rates across 4 models showing all-3 rule compliance sliding from 91.7% (5 rules) to 79.2% (75 rules) and correctness dipping from 97.9% to 89.6%. Canary Mean %: 5 rules (~242 tok) 97.2, 15 rules (~436 tok) 93.8, 35 rules (~822 tok) 93.1, 75 rules (~1,569 tok) 91.7; All-3 Rules Pass %: 5 rules (~242 tok) 91.7, 15 rules (~436 tok) 83.3, 35 rules (~822 tok) 81.3, 75 rules (~1,569 tok) 79.2; Task Correctness %: 5 rules (~242 tok) 97.9, 15 rules (~436 tok) 93.8, 35 rules (~822 tok) 91.7, 75 rules (~1,569 tok) 89.6.

Pooled 192-probe instruction budget curve: adding non-conflicting filler rules cuts all-3 pass rate from 91.7% to 79.2%.

> **Chart — 75-Rule Placement Effect: Top vs. Middle vs. Bottom (n = 16/slot):** Inside 75 rules (~1,569 tokens), middle placement falls to 68.8% all-3 pass and 81.2% correctness vs. 87.5% all-3 pass and 93.8% correctness at bottom. Canary Mean %: Top (first 3 rules) 91.7, Middle (rule #37) 87.5, Bottom (last 3 rules) 95.8; All-3 Pass %: Top (first 3 rules) 81.3, Middle (rule #37) 68.8, Bottom (last 3 rules) 87.5; Task Correctness %: Top (first 3 rules) 93.8, Middle (rule #37) 81.3, Bottom (last 3 rules) 93.8.

At 75 rules (~1,569 tokens), burying formatting & word bans in the middle yields 68.8% compliance vs 87.5% at the bottom.

## Model resilience split: GPT-6.2 Sol & DeepSeek V4 Pro vs. Claude Fable 5.2.

Aggregating across models reveals stark differences in how long rule lists affect adherence and completion integrity:

| Model | 5 Rules All-3 | 15 Rules All-3 | 35 Rules All-3 | 75 Rules All-3 [95% CI] | Primary Failure Mechanism |
| --- | --- | --- | --- | --- | --- |
| GPT-6.2 Sol | 100.0% | 100.0% | 100.0% | 100.0% [75.8–100.0%] | Zero misses across all 48 probes. |
| DeepSeek V4 Pro | 100.0% | 100.0% | 100.0% | 100.0% [75.8–100.0%] | 100% canary pass; 1 minor correctness miss at 35 rules. |
| Gemini 4 Neon | 83.3% | 75.0% | 91.7% | 75.0% [46.8–91.1%] | Slipped from plain prose into numbered lists on pg_offset/webhook_dup. |
| Claude Fable 5.2 | 83.3% | 58.3% | 33.3% | 41.7% [19.3–68.1%] | Emitted fenced SQL blocks violating prose-only rule AND suffered early token/generation cutoffs (1–24 words). |

## Real failure transcripts & Scope/Limitations.

Inspecting exact raw failures from `november-2026-instruction-budget-cliff-results.json` shows two distinct ways bloated rule lists break outputs:

- **Mid-file Rule Slippage (`gemini-4-neon` · 15 rules · `pg_offset` · 64 words):** Started with `[AUDIT]` correctly, but broke the plain-paragraphs canary by emitting a numbered `1. Add a composite index...` tutorial.
- **Code-Block Override & Truncated Generation under Load (`claude-fable-5-2`):** At 35–75 rules, Fable either inserted fenced ````sql` blocks against the plain-prose constraint or terminated immediately after emitting `"["` or `"[AUDIT"` (1 word) under reasoning/output-cap pressure when buried at the middle slot.

**Scope & Limitations:** All three canary checks (`[AUDIT]` prefix, zero ban hits, plain prose under 110 words) and 1–24 word cutoffs were verified deterministically (spend $2.45). Task correctness was scored by a single blind judge (`google/gemini-4-argon`). Because `n = 16` per placement slice at 75 rules yields wider Wilson confidence intervals (44.4%–85.8% middle vs. 64.0%–96.5% bottom), treat the overall 5→75 decline (91.7%→79.2%) and recency advantage as directional engineering guidance: keep system/`CLAUDE.md` constraints under ~15–20 rules and anchor non-negotiables at the top and bottom.

## Questions people ask.

### How many custom instructions or rules can an AI reliably follow at once?

Compliance was highest at 5 rules (91.7% all-three pass rate, 97.9% task correctness) and fell progressively across 15 rules (83.3%), 35 rules (81.2%), and 75 rules (79.2%). Keep active style constraints lean rather than stacking dozens of speculative rules.

### Where should the most important rules go in CLAUDE.md or AGENTS.md?

Place mission-critical formatting, safety, and verification gates at the very bottom (87.5% at 75 rules) or very top (81.2%) rather than in the middle of a long file (where compliance fell to 68.8% and correctness slipped to 81.2%).

## Sources.

- [Unified Agent Research Briefs (JSON)](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

- [Instruction Budget Cliff 192-Probe Dataset (JSON)](https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-results.json)

- [Instruction Budget Cliff Summary Matrix (CSV)](https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-summary.csv)

## Keep going.

- [Long-context drift: Persona Half-Life Across 10k Tokens](https://agent-tune.com/research/ai-persona-half-life-context-drift)
- [Prompt grammar: Prompt Syntax Wars: Rubrics vs Adjectives vs Bans](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot)
- [Cheat sheet: AI Custom Instructions Character & Byte Limits](https://agent-tune.com/guides/ai-custom-instructions-character-limits)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
