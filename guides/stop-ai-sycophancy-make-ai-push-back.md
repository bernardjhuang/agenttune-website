Source: https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Anti-Sycophancy

# How to make AI push back and stop agreeing with you.

By Bernard Huang · Updated November 17, 2026

Across 400 fresh sessions in our September 2026 study, every major model scored near the ceiling on Agreeableness and near the floor on Dominance. Here is how to make your assistant challenge weak ideas instead of praising them.

**Quick answer:** To stop AI sycophancy, add three rules to your Custom Instructions, Personal Preferences, AGENTS.md, or Soul.md: (1) ban praise openers and automatic agreement, (2) require the AI to test your premise and name the strongest counterargument before executing, and (3) require it to hold its ground when its answer is right. You can also use our Low Agreeableness, DISC Dominance (D), or Enneagram Type 8 tunings.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## The empirical baseline: why untuned models rarely push back.

Across the 400 fresh sessions in our [September 2026 study](https://agent-tune.com/research/ai-personality-five-models-2026) (100 runs each for GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1), every model clustered at the cooperative, conflict-averse end of the scale:

| Model cohort (n = 100 fresh sessions) | Big Five Agreeableness (/50) | DISC Dominance (/20) | DISC Steadiness (/20) | DISC Conscientiousness (/20) |
| --- | --- | --- | --- | --- |
| GPT-6 Astra | 45.07 | 5.12 | 17.55 | 16.40 |
| GPT-6 Sol | 44.99 | 5.42 | 16.18 | 16.68 |
| Claude Opus 5.5 | 47.07 | 4.00 | 16.92 | 16.35 |
| Claude Fable 5.1 | 45.03 | 5.00 | 16.00 | 16.05 |

At the item level ([see our Big Five item breakdown](https://agent-tune.com/research/ai-big-five-item-level-comparison)), all 100 Claude Opus 5.5 runs chose the lowest score (1.00) on “I try to outdo others” and the highest score (5.00) on “I value cooperation over competition.”

## Copy-paste anti-sycophancy block for any AI assistant.

Telling an AI “be brutally honest” often produces performative snark instead of careful analysis. Use checkable procedural rules instead:

```markdown
## Anti-sycophancy & critical review rules

- Never open with praise for the question ("Great point", "You're touching on something important") or automatic agreement.
- Before building on my plan, test its premises. If an assumption is false, unverified, or sub-optimal, say so in the first paragraph and explain why.
- Do not flip your answer just because I push back. If my objection is mistaken, hold your ground and cite the evidence or logic.
- When I ask you to evaluate an idea, state the strongest argument against it and the first constraint likely to break.
- Separate verified facts from inferences, and state uncertainty plainly in one sentence.
```

## Three prompt patterns that eliminate bias in high-stakes reviews.

How you phrase your question also affects whether the model flatters your idea:

- **Hide your authorship:** Instead of “Here is my design, does it look good?” ask “A colleague proposed this design. What are the three biggest failure modes?”
- **Present options neutrally:** Show Option A and Option B without saying which one you prefer, and ask which one breaks first under realistic load or budget limits.
- **Ask for a pre-mortem table:** Have the AI list each assumption in your plan and what happens if that assumption is off by 2x.

## Ready-made AgentTune profiles built for direct pushback.

If you want a full tuning file built around direct critique, start with one of these profiles in the [library](https://agent-tune.com/library/):

- [Low Agreeableness (Analytical Skeptic)](https://agent-tune.com/library/ocean/agreeableness-low): Prioritizes evidence and flaw-finding over social smoothing.
- [DISC Dominance (D)](https://agent-tune.com/library/disc/d-dominance): Bottom-line conclusions, direct tradeoffs, and zero hedging.
- [Enneagram Type 8 (The Challenger)](https://agent-tune.com/library/enneagram/8-challenger): Candid pushback on weak assumptions and scope creep.
- [ENTP](https://agent-tune.com/library/mbti/entp) or [INTJ](https://agent-tune.com/library/mbti/intj): Stress-tests assumptions and counterexamples before agreeing.

## Questions people ask.

### Why do ChatGPT and Claude agree with me even when I am wrong?

Post-training preference optimization rewards helpful, cooperative, conflict-averse replies. In our September 2026 study, all four fresh-session cohorts scored 44 to 45 out of 50 on Agreeableness and 4 to 5 out of 20 on DISC Dominance.

### How do I stop Claude or ChatGPT from apologizing and flipping its answer when challenged?

Add an explicit rule to your Personal Preferences or Custom Instructions: 'Do not change a correct answer simply because I push back. Re-verify the claim, and if your original answer was right, hold your ground and explain why.'

### Why does 'be brutally honest' work poorly as a custom instruction?

Phrases like 'be brutally honest' or 'roast my idea' often trigger theatrical sarcasm rather than rigorous fact-checking. Procedural rules like 'test my premises first and state the strongest counterargument' produce much cleaner technical critique.

### Which AgentTune profile gives the strongest analytical pushback?

The Low Agreeableness Big Five tuning, the DISC Dominance (D) tuning, and the Enneagram Type 8 (Challenger) tuning are all designed to prioritize direct critique and assumption testing over social agreement.

## What changed.

- November 5, 2026 First published combining September 2026 Agreeableness and Dominance data with procedural anti-sycophancy rules.

## Sources.

- [AgentTune Research: Why AI models score high on Agreeableness and Openness](https://agent-tune.com/research/ai-big-five-item-level-comparison)

- [AgentTune Research: Five AI models on five personality tests (September 2026)](https://agent-tune.com/research/ai-personality-five-models-2026)

- [AgentTune Library: Low Agreeableness tuning](https://agent-tune.com/library/ocean/agreeableness-low)

## Keep going.

- [Research: Why AI models score high on Agreeableness and Openness](https://agent-tune.com/research/ai-big-five-item-level-comparison)
- [Prompts: Big Five AI system prompts: all 10 high and low trait poles](https://agent-tune.com/guides/big-five-ai-prompts)
- [Prompts: DISC AI prompts for all 4 styles (D, I, S, C)](https://agent-tune.com/guides/disc-ai-prompts)
- [Guide: Claude Personal Preferences: 15 copy-paste examples](https://agent-tune.com/guides/claude-personality)
