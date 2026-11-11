Source: https://agent-tune.com/guides/ai-persona-style-controls-register-verbosity
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Prompt Engineering

# AI style and verbosity controls: 5 deterministic rules that beat adjectives.

By Bernard Huang · Updated November 11, 2026

Replace vague tone adjectives with five explicit style controls: (1) an Opening Rule ('state the answer in sentence one'), (2) a List & Table Threshold ('prose by default; lists/tables only for 3+ parallel items'), (3) a Proportional Verbosity Scale ('1–3 sentences for lookups, full tradeoffs for irreversible decisions'), (4) a Pushback Trigger ('name the weakest assumption before implementing'), and (5) an Uncertainty Clause ('flag material uncertainty instead of guessing').

## Adjectives vs. checkable style controls.

| Control dimension | Weak adjective (drifts fast) | Deterministic rule (persists across long chats) |
| --- | --- | --- |
| 1. Opening structure | "Don't waste my time with fluff." | "State the direct answer, fix, or recommendation in sentence one—no restating my question." |
| 2. Formatting density | "Write naturally like a human." | "Default to plain paragraphs; use bullets for sequential steps and tables only when comparing 3+ items on shared criteria." |
| 3. Length / verbosity | "Be super concise." | "Scale length to task stakes: 1–3 sentences for factual lookups; structured tradeoffs for architecture, money, or irreversible actions." |
| 4. Epistemic candor | "Don't be sycophantic." | "Never open with praise. If my plan has a flaw or cleaner alternative, state the objection and evidence before executing." |
| 5. Confidence &amp; gaps | "Be accurate and confident." | "Separate verified facts from inference, and flag material uncertainty explicitly instead of guessing." |

## What measured pilot data shows when you use explicit controls.

We tested explicit structural rules head-to-head against untuned defaults in our [60-reply before/after pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) (20 real tasks × 3 conditions):

- Answer-first rate (top 5/5 rubric score): Rose from 14/20 under default prompting to 19/20 under explicit straight rules.
- Hedging phrases per reply: Dropped from 0.35 per reply to 0.05.
- Trailing follow-up questions: Dropped from 0.90 per reply to 0.25 when the block specified asking questions only on material ambiguity.

Notice why the fifth control ("flag material uncertainty explicitly") must always pair with anti-hedging rules: banning filler disclaimers ("As an AI, it's important to consider...") should sharpen real epistemic caveats ("Unverified: depends on whether your Postgres version is 15 or 17"), never suppress them. Our [Instruction Checker](https://agent-tune.com/tools/instruction-checker) flags prompts that accidentally ban legitimate uncertainty reporting.

## Three ready-to-paste register profiles.

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
- Exploration: Surface 2–3 genuinely distinct angles (including one non-obvious counter-perspective) before narrowing to a single answer.
- Register: Write in clean, concrete prose—avoid corporate buzzwords, clichés, and bulleted walls.
- Honesty: Point out blind spots candidly while keeping space open to iterate.
```

Customize all five dials interactively in our [Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder), or read [how to stop AI sycophancy](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## Questions people ask.

How do I stop ChatGPT or Claude from putting bullet points in every single answer?

Don't write 'Never use bullet points'—write a threshold rule: 'Default to plain paragraphs. Use bullet lists only for sequential steps and tables only when comparing 3 or more items across shared criteria.' Threshold rules stop reflex bullets without breaking checklists.

Why does 'be concise' make AI answers unhelpful on hard problems?

A flat 'be concise' instruction penalizes depth equally on trivial lookups and complex debugging. Use proportional verbosity instead: '1–3 sentences for simple factual questions; full mechanism and tradeoffs for architecture, security, or irreversible changes.'

Do personality labels like 'Act as an INTJ' work better than explicit style rules?

Explicit behavioral rules carry the predictable effect because the model can verify 'answer in sentence one' directly. Personality types (MBTI, DISC, Enneagram) are most useful as a fast human discovery shortcut for choosing which explicit rules fit you—see our 180-reply comparison protocol for testing label vs plain-English rules.

How do I cut AI hedging without encouraging hallucinated certainty?

Ban performative throat-clearing ('Great question!', 'It is important to remember...') while explicitly requiring calibrated uncertainty ('Separate verified facts from inference and state material uncertainty when evidence is incomplete').

## What changed.

- November 11, 2026 Published with the 5 deterministic style controls table, 60-reply pilot metrics, and 3 register profiles.

## Sources.

- [AgentTune Study: Does personality tuning change AI answers? (60-reply pilot)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [AgentTune Test Kit: Do personality prompts beat plain-English preferences?](https://agent-tune.com/guides/personality-prompts-vs-plain-english)

- [AgentTune Tool: Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder)

## Keep going.

- [Free browser tool: Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder)
- [Research: Does personality tuning change AI answers? (60-reply pilot)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)
- [Guide: How to make AI push back and stop agreeing with you](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Test kit: Do personality prompts beat plain-English preferences?](https://agent-tune.com/guides/personality-prompts-vs-plain-english)
- [Guide: How to make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
