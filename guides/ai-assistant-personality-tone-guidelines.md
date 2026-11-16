Source: https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Engineering · Voice & Tone Design

# AI assistant personality & tone guidelines: moving from vague adjectives to testable system prompts.

By Bernard Huang · Updated November 16, 2026

Replace vague tone adjectives in API system prompts with four concrete specs: (1) Opening Move (first 1–2 sentences), (2) Epistemic Calibration (how missing data or conflicting facts are surfaced), (3) Pushback Posture (when to challenge weak premises), and (4) Negative Banlist (clichés, flattery, and trailing filler questions)—and verify changes with blind A/B evals.

## Why behavioral rules beat adjective lists in empirical testing.

Across our 60-reply controlled pilot testing default prompts against explicit communication constraints ([tuning evaluation study →](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)), plain behavioral constraints lifted answer-first openings from 14/20 to 19/20, cut unsolicited hedges per reply from 0.35 to 0.05, and dropped trailing conversational questions from 0.90 to 0.25—while keeping accuracy unchanged.

| Weak adjective prompt | Why it drifts in production | Testable behavioral replacement |
| --- | --- | --- |
| &ldquo;Be concise and clear.&rdquo; | Models still emit polite preambles and &ldquo;Let me know if...&rdquo; trailers. | &ldquo;State the recommendation or direct answer in sentence 1; omit introductory restatement and closing question menus.&rdquo; |
| &ldquo;Be honest and objective.&rdquo; | Agreeable defaults smooth over bad user premises to sound supportive. | &ldquo;Before solving, check the premise. If a constraint makes the goal impossible or slower, state the flaw in 1–2 sentences.&rdquo; |
| &ldquo;Sound warm and empathetic.&rdquo; | Overcorrects into therapy-speak apologies and exclamation marks. | &ldquo;Acknowledge blockers neutrally in one phrase, skip scripted apologies (&lsquo;I understand how frustrating&rsquo;), and provide the fastest next action.&rdquo; |
| &ldquo;Adapt to technical users.&rdquo; | Unpredictably swings between beginner tutorials and unexplained jargon. | &ldquo;Assume fluency in HTTP, SQL, and Git; explain domain-specific quirks briefly only when first introduced.&rdquo; |

## A 4-layer system prompt contract for API & agent builders.

Structure production assistant personas into four non-overlapping blocks so product engineers can iterate safely without breaking tool execution:

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

## How to evaluate tone changes without fooling yourself.

- Use blind pairwise scoring: Human reviewers consciously or unconsciously favor prompts they wrote. Compare baseline vs. edited system messages blindly using our [Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench) (or JSON report exports for team review).
- Control verbosity explicitly: Shorter answers can omit critical caveats just as easily as longer ones waste time. Pair register/verbosity controls ([style controls guide →](https://agent-tune.com/guides/ai-persona-style-controls-register-verbosity)) with an accuracy checklist.
- Borrow starter patterns from 5 frameworks: Our MIT-licensed [43 tuning files](https://agent-tune.com/library/) map tested communication patterns across MBTI, Enneagram, DISC, Big Five, and Attachment so teams don&rsquo;t invent voice specs from a blank page.

## Questions people ask.

Should a production system prompt reference MBTI or Enneagram labels directly?

Generally no for end-user products: type acronyms are shorthand for humans browsing templates. Extract the concrete behavioral rules (directness, hedging limits, table thresholds, critique framing) rather than telling a production chatbot 'You are an INTJ'.

Do all models follow negative tone rules ('never say Great question') equally well?

Small positive behavioral instructions paired with specific banned phrases work significantly better across both OpenAI and Anthropic models than purely abstract style adjectives—especially when placed near the top of the system prompt.

How does AgentTune license its templates for commercial or internal agent apps?

All 43 AgentTune communication templates and client-side utilities (core.js, enneagram/score.js) are MIT-licensed and free to adapt inside proprietary or open-source software. Note that third-party psychological questionnaires themselves keep their upstream licensing rules.

How do I prevent tone guidelines from overriding JSON schema or tool-call contracts?

Separate schema/tool constraints into a dedicated strict output section placed after conversational style rules, and include an explicit override rule: 'Structured tool calls and JSON schemas always take precedence over prose style preferences.'

## What changed.

- November 16, 2026 First published covering the 4-layer API persona contract, adjective-to-behavior table, and blind A/B verification workflow.

## Sources.

- [AgentTune Research: Does personality tuning change AI answers?](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [AgentTune Guide: Personality prompts vs plain English](https://agent-tune.com/guides/personality-prompts-vs-plain-english)

- [AgentTune Tool: Blind Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench)

## Keep going.

- [Comparison: 5 Personality Frameworks Compared + Interactive Matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher)
- [Guide: AI persona style controls: register & verbosity](https://agent-tune.com/guides/ai-persona-style-controls-register-verbosity)
- [Guide: How to stop AI sycophancy & make AI push back](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Tool: Instruction Checker & Test Bench](https://agent-tune.com/tools/instruction-checker)
