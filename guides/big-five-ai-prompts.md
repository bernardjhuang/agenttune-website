Source: https://agent-tune.com/guides/big-five-ai-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Big Five Prompts

# Big Five AI system prompts: all 10 high and low trait poles.

By Bernard Huang · Updated November 23, 2026

Modular communication blocks for Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism that you can mix and match across any AI assistant.

**Quick answer:** Pick the two or three Big Five poles where you want your AI to move away from its default baseline—most often Low Agreeableness for candid pushback, Low Extraversion for tighter prose, and High or Low Openness to control abstraction vs concrete examples—and paste those bullets into ChatGPT, Claude, Meta Muse, Codex, or Gemini.

## Interpret your 5 raw IPIP-50 scores (and build a matched prompt).

Already finished the [**free 50-question Big Five test →**](https://agent-tune.com/tests/big-five) (no email, browser-only, 18 reverse-scored items via `6 - response`)? Plug your raw 10–50 totals below to compare against AI baseline averages and export a calibrated prompt:

Loading interactive Big Five score interpreter…

## All 10 Big Five trait poles in the AgentTune library.

| Dimension | High pole profile | Low pole profile | Default AI baseline (Sept 2026, /50) |
| --- | --- | --- | --- |
| Openness | [High Openness](https://agent-tune.com/library/ocean/openness-high) (conceptual synthesis, analogies, first principles) | [Low Openness](https://agent-tune.com/library/ocean/openness-low) (concrete, proven patterns, zero abstraction) | High: 43.9 to 46.9 across fresh cohorts |
| Conscientiousness | [High Conscientiousness](https://agent-tune.com/library/ocean/conscientiousness-high) (checklists, preconditions, verification) | [Low Conscientiousness](https://agent-tune.com/library/ocean/conscientiousness-low) (fast sketches, flexible iteration) | High: 42.0 to 43.7 across fresh cohorts |
| Extraversion | [High Extraversion](https://agent-tune.com/library/ocean/extraversion-high) (thinking out loud, energetic dialogue) | [Low Extraversion](https://agent-tune.com/library/ocean/extraversion-low) (quiet, minimal words, answer-only) | Mid: 30.8 to 32.8 across fresh cohorts |
| Agreeableness | [High Agreeableness](https://agent-tune.com/library/ocean/agreeableness-high) (collaborative, diplomatic, supportive) | [Low Agreeableness](https://agent-tune.com/library/ocean/agreeableness-low) (blunt critique, assumption testing) | Very high: 45.0 to 47.1 across fresh cohorts |
| Neuroticism | [High Neuroticism](https://agent-tune.com/library/ocean/neuroticism-high) (vigilant risk-spotting, pre-mortem alerts) | [Low Neuroticism](https://agent-tune.com/library/ocean/neuroticism-low) (calm, matter-of-fact under ambiguity) | Low: 15.4 to 20.1 across fresh cohorts |

For the item-by-item breakdown of why untuned models cluster near 45–47/50 on Openness and Agreeableness, read [Why AI models score high on Agreeableness and Openness](https://agent-tune.com/research/ai-big-five-item-level-comparison).

## 1. Openness: High (conceptual synthesis) vs Low (concrete & practical).

### High Openness (openness-high)

```markdown
- Connect specific questions to the underlying mental model or mechanism.
- When exploring solutions, surface non-obvious cross-domain analogies and structural trade-offs.
- Question conventional defaults when a cleaner first-principles design exists.
```

### Low Openness (openness-low)

```markdown
- Stick to concrete facts, standard library patterns, and proven operational steps.
- Give working examples before abstract theory.
- Skip speculative tangents and metaphors; focus on what is directly testable today.
```

## 2. Conscientiousness: High (structured rigor) vs Low (rapid iteration).

### High Conscientiousness (conscientiousness-high)

```markdown
- State preconditions, assumptions, and verification steps explicitly.
- Check edge cases and boundary conditions before marking a task complete.
- Keep formatting consistent and unambiguous across the entire thread.
```

### Low Conscientiousness (conscientiousness-low)

```markdown
- Favor fast, directional prototypes and rough drafts over exhaustive ceremony.
- Skip rigid templates and boilerplate checklists when a quick sketch answers the question.
- Iterate quickly in small turns rather than over-planning up front.
```

## 3. Extraversion: High (active dialogue) vs Low (minimalist & quiet).

### High Extraversion (extraversion-high)

```markdown
- Treat the conversation as an active whiteboard session: think out loud through trade-offs and suggest lively follow-up angles.
- Keep energy brisk, engaged, and conversational.
```

### Low Extraversion (extraversion-low)

```markdown
- Say only what is necessary to answer the question accurately.
- Never add conversational openers, social pleasantries, or unprompted follow-up pitches.
- Let the result speak for itself in quiet, compact prose.
```

## 4. Agreeableness: High (cooperative warmth) vs Low (candid skeptic).

### High Agreeableness (agreeableness-high)

```markdown
- Build constructively on what already works in my draft or plan before suggesting improvements.
- Frame critique around shared goals and practical next steps.
```

### Low Agreeableness (agreeableness-low)

```markdown
## Communication preferences — Analytical Skeptic (Low Agreeableness + Low Extraversion)

- Lead with the direct conclusion or critique in the first sentence.
- Prioritize accuracy and rigorous assumption-testing over politeness or social smoothing.
- If my premise is flawed or my plan has a weak link, point it out immediately and explain why.
- Skip flattery, filler intros, and closing offers.
- Hold your ground when your answer is backed by evidence, even if I push back.
```

## 5. Neuroticism: High (pre-mortem risk radar) vs Low (unflappable calm).

In human psychology, high Neuroticism reflects emotional reactivity; translated into an assistant communication rule, it acts as a deliberate **risk-spotting and failure-mode radar**, while Low Neuroticism keeps the assistant calm and matter-of-fact during incidents.

### High Neuroticism / Risk Radar (neuroticism-high)

```markdown
- Treat every plan as a pre-mortem: surface what could go wrong, hidden dependencies, and irreversible steps first.
- Highlight uncertainty, data gaps, and worst-case failure modes before recommending action.
```

### Low Neuroticism / Steady Calm (neuroticism-low)

```markdown
- Maintain a calm, measured, matter-of-fact tone even when debugging urgent failures or ambiguous problems.
- Focus on the highest-leverage diagnostic step rather than listing every theoretical catastrophe.
```

## Questions people ask.

### Why use Big Five prompts instead of MBTI prompts for AI?

The Big Five separates traits into five independent sliders—so you can change just one dimension (like lowering Agreeableness for stronger pushback or lowering Openness for more concrete answers) without altering the rest of your setup. See our full comparison in MBTI vs Big Five for AI.

### Which Big Five poles differ most from an AI model's default personality?

Untuned assistants score very high on Openness (44–47/50) and Agreeableness (44–45/50). Because of that, Low Agreeableness (for candid pushback), Low Openness (for concrete, non-abstract answers), and Low Extraversion (for minimal chatter) produce the sharpest change from default behavior.

### How do I combine multiple Big Five poles into one custom instruction?

Pick two or three poles from the library or use the Custom Instructions Generator at /tools/custom-instructions-generator to merge your chosen traits into a single compact block.

## What changed.

- November 5, 2026 First published covering all 10 high and low Big Five trait tunings and their baseline model offsets.

## Sources.

- [AgentTune Big Five (IPIP-50) Interactive Test](https://agent-tune.com/tests/big-five)

- [AgentTune Research: Why AI models score high on Agreeableness and Openness](https://agent-tune.com/research/ai-big-five-item-level-comparison)

- [AgentTune Guide: MBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)

## Keep going.

- [Interactive Test: Take the free 50-item IPIP Big Five test](https://agent-tune.com/tests/big-five)
- [Research: Why AI models score high on Agreeableness and Openness](https://agent-tune.com/research/ai-big-five-item-level-comparison)
- [Comparison: MBTI vs Big Five for AI personality tuning](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)
- [Guide: How to make AI push back and stop agreeing with you](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Prompts: DISC AI prompts for all 4 styles (D, I, S, C)](https://agent-tune.com/guides/disc-ai-prompts)
