Source: https://agent-tune.com/research/ai-persona-half-life-context-drift
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Agent Research · November 2026 · 192-Probe Study

# When do custom personality rules fade? Measuring Persona Half-Life across 10,000 tokens.

By Bernard Huang · Updated November 25, 2026 · ~6 min read · [Markdown (.md)](https://agent-tune.com/research/ai-persona-half-life-context-drift.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

192 multi-turn probes across GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon, and DeepSeek V4 Pro measure how Turn-0 system instructions hold up under 12 turns of neutral code, log, and JSON noise—and how an 18-token inline check restores near-100% adherence.

**Summary:** System-only rules suffer acute mid-session drift under ~7.7k–10.2k tokens of technical noise (System Prose fell from 96.9% to 78.1% at Turn 8, SD 36.4; DeepSeek V4 Pro collapsed to 31.2% on prose and 50.0% on checklists). Appending an 18-token inline reminder hook held composite adherence at 93.8%–98.4% (100.0% on DeepSeek V4 Pro).

## Agent Decision Contract (YAML — Machine-Readable Brief).

Agents orchestrating multi-turn tool loops or hook-injected prompts can apply this verified anti-drift policy directly (also published in [november-2026-agent-research-briefs.json](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)):

### Agent Decision Contract (YAML)

```
study_id: persona_half_life_context_drift
sample_size: 192 # 4 models x 4 depths (Turn 1..12) x 3 interventions x 4 backend probes
models_tested: [openai/gpt-6.2-sol, anthropic/claude-fable-5.2, google/gemini-4-neon, deepseek/deepseek-v4-pro-0813]
judge_model: google/gemini-4-argon
data_urls:
  briefs_json: https://agent-tune.com/research/data/november-2026-agent-research-briefs.json
  results_json: https://agent-tune.com/research/data/november-2026-persona-halflife-results.json
  summary_csv: https://agent-tune.com/research/data/november-2026-persona-halflife-summary.csv
if_then_decision_rules:
  - if: conversation stays under ~4 turns and model is GPT-6.2 Sol, Claude Fable 5.2, or Gemini 4 Neon
    then: compact system checklist holds 93.8%–100.0% adherence cleanly without per-turn tags
  - if: agent session exceeds ~6-8 turns or ~5k-10k tokens of logs, diffs, or neutral dialogue (especially on DeepSeek V4 Pro)
    then: inject a <=20-token inline reminder hook beside late user turns (restored DeepSeek from 31.2%-68.8% back to 100.0% across all depths)
  - if: strict word budget matters on Claude Fable 5.2
    then: treat hard counts carefully—Fable hovered just over the 75-word line (77-83w) on multi-part answers unless bounded tighter (e.g. 'under 60 words')
anti_patterns:
  - Relying solely on a Turn-0 prose narrative across multi-turn troubleshooting logs (78.1% at Turn 8; DeepSeek V4 Pro drifted to 'Great question!' default essays of 116-132 words).
  - Assuming DeepSeek V4 Pro compact checklists hold at Turn 12 (~10.1k tokens): adherence fell to 68.8% vs 100.0% with inline reinforcement.
recommended_prompt_recipe:
  system_contract: |
    Mandatory response contract:
    1. Start line 1 with exact prefix `[VERDICT] ` followed immediately by the decision.
    2. Maximum 75 words total.
    3. Zero filler, greetings, praise, or apologies.
    4. Telemetry tone: include 1 concrete operational risk or failure mode.
  late_turn_hook_footer: '[Style contract reminder: start with [VERDICT], <=75 words, zero fluff, name 1 concrete operational risk.]'
scope_limits: Intervening assistant turns intentionally simulated generic default prose up to ~10.2k prompt tokens.
```

| Session Depth | Prompt Tokens (Mean) | System Prose | System Compact Checklist | System + 18-Token Hook |
| --- | --- | --- | --- | --- |
| Turn 1 (fresh) | ~169 | 96.9% | 95.3% | 98.4% |
| Turn 4 (3 filler turns) | ~5,333 | 96.9% | 95.3% | 96.9% |
| Turn 8 (7 filler turns) | ~7,667 | 78.1% | 84.4% | 93.8% |
| Turn 12 (11 filler turns) | ~10,165 | 96.9% | 89.1% | 98.4% |

## Executive results: adherence decay curve from Turn 1 to ~10,200 tokens.

192 Probes

Turn 1 → Turn 12

Up to ~10,196 tokens of neutral code, YAML, SQL, and JSON logs.

96.9% → 78.1%

System Prose Turn-8 Dip

Long narrative rules suffer sharp mid-session drift under technical noise.

31.2% DeepSeek

Open-Weight Collapse

DeepSeek V4 Pro dropped to 31.2% (prose) & 50.0% (checklist) at Turn 8.

93.8%–98.4%

+18-Token Hook Defense

Lightweight inline reminder restores DeepSeek V4 Pro to 100.0% across all depths.

Every model received the exact same 4-rule Operational Telemetry persona contract—(1) start line 1 with `[VERDICT]`, (2) keep total length `<= 75 words`, (3) zero greetings/praise/apology fluff, and (4) include 1 concrete operational risk—across four realistic engineering probes after 0, 3, 7, or 11 intervening turns of logs, Kubernetes YAML, SQL migrations, TypeScript reviews, and generic assistant prose ([download full 192-probe JSON](https://agent-tune.com/research/data/november-2026-persona-halflife-results.json) · [summary CSV](https://agent-tune.com/research/data/november-2026-persona-halflife-summary.csv), spend $5.30).

| Arm × Depth (n = 16) | Tokens | Composite Adherence (SD) | [VERDICT] Tag [95% CI] | <=75 Words % | Zero-Fluff [95% CI] | Voice + Risk % | Mean Words |
| --- | --- | --- | --- | --- | --- | --- | --- |
| System Prose · Turn 1 | 200 | 96.9% (8.5) | 100.0% [80.6–100.0%] | 93.8% | 100.0% [80.6–100.0%] | 93.8% | 62.6 |
| System Prose · Turn 8 | 7,699 | 78.1% (36.4) | 81.2% [57.0–93.4%] | 62.5% | 81.2% [57.0–93.4%] | 87.5% | 82.2 |
| System Prose · Turn 12 | 10,196 | 96.9% (8.5) | 100.0% [80.6–100.0%] | 87.5% | 100.0% [80.6–100.0%] | 100.0% | 69.2 |
| Compact Checklist · Turn 1 | 138 | 95.3% (10.1) | 100.0% [80.6–100.0%] | 81.2% | 100.0% [80.6–100.0%] | 100.0% | 61.6 |
| Compact Checklist · Turn 8 | 7,636 | 84.4% (34.0) | 87.5% [64.0–96.5%] | 81.2% | 87.5% [64.0–96.5%] | 81.2% | 70.6 |
| Compact Checklist · Turn 12 | 10,134 | 89.1% (25.8) | 93.8% [71.7–98.9%] | 81.2% | 93.8% [71.7–98.9%] | 87.5% | 67.1 |
| System + Reminder · Turn 1 | 168 | 98.4% (6.2) | 100.0% [80.6–100.0%] | 93.8% | 100.0% [80.6–100.0%] | 100.0% | 61.0 |
| System + Reminder · Turn 8 | 7,667 | 93.8% (11.2) | 100.0% [80.6–100.0%] | 87.5% | 100.0% [80.6–100.0%] | 87.5% | 60.4 |
| System + Reminder · Turn 12 | 10,164 | 98.4% (6.2) | 100.0% [80.6–100.0%] | 93.8% | 100.0% [80.6–100.0%] | 100.0% | 61.3 |

Look at the hidden Turn-8 trap: once 7 multi-turn technical exchanges sit in history, models experience an acute **few-shot gravity pull** toward the generic verbose style of the intermediate assistant turns—dropping System Prose `[VERDICT]` compliance to `81.2%`, inflating length to `82.2` words, and re-introducing `18.8%` praise/greeting openers. Only the **18-token inline reinforcement footer** maintained `100.0% [VERDICT]` compliance and `100.0%` zero-fluff across all four depths.

> **Chart — Persona Adherence (%) From Turn 1 to Turn 12 (~10.2k Tokens):** Pooled composite adherence (4-rule mean across 4 models). System Prose dips to 78.1% and Compact Checklist to 84.4% at Turn 8, while System + Inline Reminder stays at 93.8%-98.4%. System Prose Only: Turn 1 (~170 tok) 96.9, Turn 4 (~5.3k tok) 96.9, Turn 8 (~7.7k tok) 78.1, Turn 12 (~10.2k tok) 96.9; System Compact Checklist: Turn 1 (~170 tok) 95.3, Turn 4 (~5.3k tok) 95.3, Turn 8 (~7.7k tok) 84.4, Turn 12 (~10.2k tok) 89.1; System + 18-Token Hook: Turn 1 (~170 tok) 98.4, Turn 4 (~5.3k tok) 96.9, Turn 8 (~7.7k tok) 93.8, Turn 12 (~10.2k tok) 98.4.

Composite 4-rule persona adherence across context depths: only System + 18-Token Inline Hook avoids the Turn-8 mid-session drift trough.

## Model-by-model half-life breakdown.

Measuring per-model composite adherence exposes a dramatic split between proprietary instruction followers and open-weight DeepSeek V4 Pro across multi-turn noise:

| Model | Intervention Arm | Turn 1 | Turn 4 (~5.3k tok) | Turn 8 (~7.7k tok) | Turn 12 (~10.2k tok) |
| --- | --- | --- | --- | --- | --- |
| GPT-6.2 Sol | System Prose | 100.0% | 100.0% | 93.8% | 100.0% |
| GPT-6.2 Sol | Compact Checklist | 93.8% | 100.0% | 100.0% | 93.8% |
| GPT-6.2 Sol | System + Inline Reminder | 100.0% | 100.0% | 100.0% | 100.0% |
| Claude Fable 5.2 | System Prose | 93.8% | 100.0% | 87.5% | 93.8% |
| Claude Fable 5.2 | Compact Checklist | 87.5% | 100.0% | 87.5% | 100.0% |
| Claude Fable 5.2 | System + Inline Reminder | 93.8% | 93.8% | 87.5% | 93.8% |
| Gemini 4 Neon | System Prose | 93.8% | 93.8% | 100.0% | 100.0% |
| Gemini 4 Neon | Compact Checklist | 100.0% | 100.0% | 100.0% | 93.8% |
| Gemini 4 Neon | System + Inline Reminder | 100.0% | 93.8% | 87.5% | 100.0% |
| DeepSeek V4 Pro | System Prose | 100.0% | 93.8% | 31.2% | 93.8% |
| DeepSeek V4 Pro | Compact Checklist | 100.0% | 81.2% | 50.0% | 68.8% |
| DeepSeek V4 Pro | System + Inline Reminder | 100.0% | 100.0% | 100.0% | 100.0% |

Look at **DeepSeek V4 Pro**: without reinforcement, Turn 8 suffered a catastrophic collapse—`31.2%` on System Prose and `50.0%` on Compact Checklist (still only `68.8%` at Turn 12)—whereas appending 18 reminder tokens locked DeepSeek at **100.0% across Turn 1, Turn 4, Turn 8, and Turn 12**. Meanwhile, most misses on **Claude Fable 5.2** and **GPT-6.2 Sol** were narrow 1-to-8 word boundary overshoots (`76–83` words vs. the `75` cap) while keeping the `[VERDICT]` prefix intact.

> **Chart — Turn-8 Adherence (%) Under ~7.7k Tokens of Technical Context by Model:** At Turn 8, DeepSeek V4 Pro drops to 31.2% on System Prose and 50.0% on Compact Checklist before bouncing back to 100.0% with an inline reminder hook. System Prose (Turn 8): GPT-6.2 Sol 93.8, Claude Fable 5.2 87.5, Gemini 4 Neon 100.0, DeepSeek V4 Pro 31.3; Compact Checklist (Turn 8): GPT-6.2 Sol 100.0, Claude Fable 5.2 87.5, Gemini 4 Neon 100.0, DeepSeek V4 Pro 50.0; System + Inline Hook (Turn 8): GPT-6.2 Sol 100.0, Claude Fable 5.2 87.5, Gemini 4 Neon 87.5, DeepSeek V4 Pro 100.0.

Model-by-model Turn-8 snapshot (~7,667 tokens): DeepSeek V4 Pro drives the steepest drift collapse unless paired with an inline reminder hook.

## Real verbatim transcripts: Turn-8 persona collapse vs. inline recovery.

Comparing exact **DeepSeek V4 Pro** outputs on Turn 8 (after ~7,670 tokens of technical context) illustrates persona drift verbatim:

- **Total Persona Collapse (`deepseek-v4-pro` · `turn_8` · `sql_index_order` · System Prose · 116 words · 0.0% adherence):**
`"Great question! For that exact predicate, the optimal composite index is `(status, created_at)`. Here is the reasoning: ... Let me know if you also query by `created_at` alone without `status` — that would change the recommendation!"` — Reverted completely to unprompted chatbot prose: dropped `[VERDICT]`, restored a banned greeting, exceeded 75 words by 55%, and closed with generic filler.
- **Checklist Drift (`deepseek-v4-pro` · `turn_8` · `sql_index_order` · Compact Checklist · 110 words · 0.0% adherence):**
Opened with `"Great question!"` and wrapped an SQL block inside 110 words, again forgetting every system rule.
- **100% Recovery (`deepseek-v4-pro` · `turn_8` · `sql_index_order` · System + Inline Reminder · 47 words · 100.0% adherence):**
`"[VERDICT] Use `(status, created_at)`. Equality on `status` first narrows to a small subset, then range-scans recent rows. `(created_at, status)` scans all 7-day rows before filtering status, wasting I/O on 90M-row tables. Operational risk: index bloat from frequent updates to `status` triggers HOT-unfriendly page splits, inflating vacuum overhead."`

## Agent implementation playbook & scope limits.

For long-running CLI agents (Claude Code, Codex CLI, OpenCode, or custom harnesses), stop trusting a single Turn-0 system prompt to survive thousands of tokens of tool output. Use two layers together:

```markdown
# Layer 1: System / CLAUDE.md Compact Contract
Mandatory response contract:
1. Start line 1 with exact prefix `[VERDICT] `.
2. Keep prose concise (set target 20% below your hard cap to prevent boundary creep).
3. Zero filler, greetings, praise, or apologies.
4. Always flag 1 concrete operational risk.

# Layer 2: Harness / UserPromptSubmit Hook (Every ~5 turns or >4k tokens)
[Style contract reminder: start with [VERDICT], concise, zero fluff, 1 concrete risk flag.]
```

**Why this matters for agent harnesses:** Every turn of tool logs or generic code diffs dilutes system instructions—even compact ones—by pulling next-token priors back toward the conversational history in front of the model. An 18-token reminder hook costs <$0.0001 per turn and keeps adherence near 100%. **Limitations & Judge Scope:** `[VERDICT]` prefix and 75-word compliance were measured deterministically; zero-fluff and voice/risk checks were scored by a single blind judge (`google/gemini-4-argon`). Intervening turns intentionally omitted style cues to simulate realistic messy logs/threads up to ~10.2k tokens; trajectories spanning 100k+ tokens likely require more frequent hooks.

## Questions people ask.

### Why does an AI follow custom instructions at Turn 1 but ignore them by Turn 8?

Intervening conversation turns act as stronger local few-shot context than a distant Turn-0 system prompt. By ~7,700 tokens of technical logs and generic prose, DeepSeek V4 Pro dropped to 31.2% adherence under prose system rules and 50.0% under a compact checklist.

### How do you stop persona drift without rewriting the whole system prompt every turn?

Append a short <=20-token inline contract reminder to the user prompt or harness hook on longer turns. In our 192-probe study, an 18-token reminder kept overall adherence at 93.8%-98.4% through Turn 12 (~10,164 tokens) and lifted DeepSeek V4 Pro back to 100.0% at every depth.

## Sources.

- [Unified Agent Research Briefs (Machine-Readable JSON)](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

- [Persona Half-Life 192-Probe Multi-Turn Dataset (JSON)](https://agent-tune.com/research/data/november-2026-persona-halflife-results.json)

- [Persona Half-Life Condition x Depth Summary (CSV)](https://agent-tune.com/research/data/november-2026-persona-halflife-summary.csv)

## Keep going.

- [Prompt grammar: Prompt Syntax Wars: Adjectives vs. Negative Bans vs. Rubrics](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot)
- [Pushback calibration: Sycophancy vs. False Contrarianism (256-Probe Benchmark)](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark)
- [Character prompts: The AI Roleplay Tax: 85/15 vs. Naive LARP (300 Replies)](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts)
- [Conflict audit: Check your instructions for contradictions](https://agent-tune.com/tools/instruction-checker)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). When do custom personality rules fade? Measuring Persona Half-Life across 10,000 tokens. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-persona-half-life-context-drift
```

```
@article{huang2026_ai_persona_half_life_context_drift,
  author  = {Huang, Bernard},
  title   = {When do custom personality rules fade? Measuring Persona Half-Life across 10,000 tokens},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-25},
  url     = {https://agent-tune.com/research/ai-persona-half-life-context-drift},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-persona-half-life-context-drift.md}
}
```

```
> **When do custom personality rules fade? Measuring Persona Half-Life across 10,000 tokens** (Bernard Huang, November 25, 2026): System-only rules suffer acute mid-session drift under ~7.7k–10.2k tokens of technical noise (System Prose fell from 96.9% to 78.1% at Turn 8, SD 36.4; DeepSeek V4 Pro collapsed to 31.2% on prose and 50.0% on checklists). Appending an 18-token inline reminder hook held composite adherence at 93.8%–98.4% (100.0% on DeepSeek V4 Pro).
> Source: [https://agent-tune.com/research/ai-persona-half-life-context-drift](https://agent-tune.com/research/ai-persona-half-life-context-drift) · [Markdown mirror](https://agent-tune.com/research/ai-persona-half-life-context-drift.md)
```

[← Sycophancy vs. False Contrarianism](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark)
[Study 10 of 28 · Archive Index (28)](https://agent-tune.com/research)
[The Roleplay Tax (85/15 Calibration) →](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
