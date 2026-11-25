Source: https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Prompt & Tone Design

# AI personality, tone, and verbosity guidelines: 5 checkable rules that beat adjectives.

By Bernard Huang · Updated November 20, 2026

Practical patterns for developers writing system instructions for products, copilots, and multi-agent workflows—tested against eval baselines.

**Quick answer:** Replace vague tone adjectives in API system prompts with four concrete blocks: (1) Opening Move (first 1–2 sentences), (2) Epistemic Calibration (how missing or conflicting facts are flagged), (3) Pushback Posture (when to challenge weak premises), and (4) Negative Banlist (clichés, flattery, and trailing filler questions). Verify every change with blind A/B evals.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## Why behavioral rules beat adjective lists in empirical testing.

In our 60-reply controlled pilot ([tuning evaluation study →](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)), plain behavioral rules raised answer-first openings from **14/20 to 19/20**, cut unsolicited hedges per reply from **0.35 to 0.05**, and dropped trailing filler questions from **0.90 to 0.25**—without hurting task accuracy.

| Weak adjective prompt | Why it drifts in production | Testable behavioral replacement |
| --- | --- | --- |
| &ldquo;Be concise and clear.&rdquo; | Models still emit polite preambles and &ldquo;Let me know if...&rdquo; trailers. | &ldquo;State the recommendation or direct answer in sentence 1; omit introductory restatement and closing question menus.&rdquo; |
| &ldquo;Be honest and objective.&rdquo; | Agreeable defaults smooth over bad user premises to sound supportive. | &ldquo;Before solving, check the premise. If a constraint makes the goal impossible or slower, state the flaw in 1–2 sentences.&rdquo; |
| &ldquo;Sound warm and empathetic.&rdquo; | Overcorrects into therapy-speak apologies and exclamation marks. | &ldquo;Acknowledge blockers neutrally in one phrase, skip scripted apologies (&lsquo;I understand how frustrating&rsquo;), and provide the fastest next action.&rdquo; |
| &ldquo;Adapt to technical users.&rdquo; | Unpredictably swings between beginner tutorials and unexplained jargon. | &ldquo;Assume fluency in HTTP, SQL, and Git; explain domain-specific quirks briefly only when first introduced.&rdquo; |

> **Chart — Behavioral Tone Rules vs. Naive Adjectives/Roleplay (300-Reply Study, %):** Compares Default, Naive 100% Character LARP, and Calibrated 85/15 TARS & Feynman prompts on Correctness %, Format Adherence %, and Praise/Fluff %. Default baseline: Correctness % 93.3, Format Adherence % 98.3, Praise / Fluff % 18.3; Naive LARP adjectives: Correctness % 88.3, Format Adherence % 80.0, Praise / Fluff % 91.7; Calibrated 85/15 TARS: Correctness % 100.0, Format Adherence % 100.0, Praise / Fluff % 0.0; Calibrated 85/15 Feynman: Correctness % 100.0, Format Adherence % 100.0, Praise / Fluff % 6.7.

Concrete behavioral rules + bounded 85/15 tone hold 100.0% correctness and 100.0% format compliance while slashing fluff from 91.7% (naive roleplay) down to 0–6.7%.

## A 4-layer system prompt contract for API & agent builders.

Split production assistant personas into four non-overlapping blocks so engineers can adjust voice rules without breaking tool calls:

```markdown
# Persona Contract

## 1. Opening Move & Layout
- Answer the core question or give the decision in the first two sentences.
- Use short paragraphs by default; switch to numbered steps for workflows and tables for >=3 comparisons.

## 2. Epistemic Calibration
- Distinguish verified observations from assumptions.
- State &ldquo;Not verified in available context&rdquo; cleanly when required values are absent rather than interpolating plausible guesses.

## 3. Disagreement & Pushback
- Do not mirror flawed premises cleanly to avoid friction; name the single highest-leverage correction upfront with evidence.

## 4. Phrasing Boundaries
- No empty validation (&ldquo;Great question!&rdquo;), self-referential filler, or trailing &ldquo;Would you like me to...&rdquo; follow-up suggestions.
```

## Three ready-to-paste register & verbosity profiles.

### Profile A: High-density analytical prose (engineers, researchers, analysts)

```markdown
## Style & register controls

- Opening: Lead with the answer, root cause, or recommendation in sentence one.
- Format: Default to dense, clear prose; use code blocks for exact commands and tables only when comparing 3+ options.
- Verbosity: 1–3 sentences for simple lookups; mechanism-first depth when correctness or architecture is at stake.
- Pushback: Challenge weak premises or overengineered plans before implementing them.
- Uncertainty: Separate verified facts from inference and flag material uncertainty explicitly.
```

### Profile B: Rapid operator brief (founders, PMs, triage)

```markdown
## Style & register controls

- Opening: State the recommended decision and expected impact in the first two lines.
- Format: Maximum 5 bullets for multi-part updates; plain 2-sentence paragraphs otherwise.
- Tradeoffs: When options are close, name the single deciding variable rather than listing ten pros and cons.
- Questions: Ask at most one clarifying question only if missing context flips the recommendation; otherwise state your assumption and proceed.
```

### Profile C: Exploratory thinking partner (design, writing, strategy)

```markdown
## Style & register controls

- Opening: Address my core question directly without generic praise or throat-clearing.
- Exploration: Surface 2–3 genuinely distinct angles (including one non-obvious counter-perspective) before narrowing.
- Register: Write in clean, concrete prose—avoid corporate buzzwords, clichés, and bulleted walls.
- Honesty: Point out blind spots candidly while keeping space open to iterate.
```

## How to evaluate tone changes without fooling yourself.

- **Use blind pairwise scoring:** Reviewers naturally favor prompts they wrote themselves. Compare baseline and edited system prompts blindly in our [Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench).
- **Scale verbosity to task risk:** A flat &ldquo;be concise&rdquo; cap drops critical caveats on complex architecture questions. Use proportional verbosity instead (1–3 sentences for lookups; full tradeoffs for irreversible actions).
- **Build interactively or start from 43 templates:** Dial in all six style sliders live in our [AI Personality Slider Tuner](https://agent-tune.com/guides/ai-personality-slider-tuner-vs-custom-instructions) or start from our MIT-licensed [43 tuning files](https://agent-tune.com/library/).

## Questions people ask.

### Should a production system prompt reference MBTI or Enneagram labels directly?

No. Type labels are a discovery shortcut for humans choosing a template. In production API prompts, paste the concrete behavioral rules (direct openings, hedge caps, table thresholds, and critique framing) rather than telling a bot 'You are an INTJ.'

### Do all models follow negative tone rules ('never say Great question') equally well?

Pair positive behavioral rules ('Lead with the answer in sentence one') with a short banned-phrase list near the top of the system prompt. That combination holds far better across OpenAI and Anthropic models than adjectives alone.

### How does AgentTune license its templates for commercial or internal agent apps?

All 43 AgentTune communication templates and client-side utilities (core.js, enneagram/score.js) are MIT-licensed for commercial or open-source use. Third-party psychological questionnaires keep their own upstream licenses.

### How do I prevent tone guidelines from overriding JSON schema or tool-call contracts?

Place JSON schema and tool rules in a separate section after your tone block, and add one explicit priority rule: 'Structured tool calls and JSON schemas always override prose style preferences.'

## What changed.

- November 16, 2026 First published covering the 4-layer API persona contract, adjective-to-behavior table, and blind A/B verification workflow.

## Sources.

- [AgentTune Research: Does personality tuning change AI answers?](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [AgentTune Tool: Blind Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench)

## Keep going.

- [Interactive Tuner: 6-Slider AI Personality Tuner → Copyable Prompt](https://agent-tune.com/guides/ai-personality-slider-tuner-vs-custom-instructions)
- [Comparison: 5 Personality Frameworks Compared + Interactive Matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher)
- [Guide: How to stop AI sycophancy & make AI push back](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Tool: Instruction Checker & Conflict Auditor](https://agent-tune.com/tools/instruction-checker)
