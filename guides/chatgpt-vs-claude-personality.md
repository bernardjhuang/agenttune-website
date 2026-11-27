Source: https://agent-tune.com/guides/chatgpt-vs-claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Comparison · GPT vs Claude

# ChatGPT vs. Claude personality: what default benchmarks actually show.

By Bernard Huang · Updated November 17, 2026 · [Markdown (.md)](https://agent-tune.com/guides/chatgpt-vs-claude-personality.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** By default, GPT-6 (Astra, Sol) and Claude (Opus 5.5, Fable 5.1) all score high on Big Five Agreeableness (44.99–47.07/50) and Openness (43.93–46.87/50), and low on DISC Dominance (4.00–5.42/20). Their biggest survey difference is how often they land on an MBTI border tie: Claude Fable 5.1 tested as a clear INTJ in 98/100 runs (1 tie), whereas GPT-6 Astra tied on 29/100 runs (testing as clear ISTJ in 45 vs clear INTJ in 19 tie-free). Adding custom instructions changes reply structure much more than switching models.

## ChatGPT vs. Claude at a glance (400 fresh runs per survey — and the fine print).

Using our open evaluation harness ([reproducibility guide →](https://agent-tune.com/guides/reproduce-ai-personality-research)), we ran each model in 100 fresh sessions per questionnaire with ties kept visible:

| Metric (n = 100 runs / model) | GPT-6 Astra | GPT-6 Sol | Claude Opus 5.5 | Claude Fable 5.1 |
| --- | --- | --- | --- | --- |
| Strict resolved MBTI INTJ | 19 / 100 (29 tied; 45 ISTJ) | 79 / 100 (18 tied) | 84 / 100 (11 tied) | 98 / 100 (1 tied) |
| Big Five Agreeableness (/50) | 45.07 | 44.99 | 47.07 (highest) | 45.03 |
| Big Five Openness (/50) | 44.49 | 46.87 | 44.57 | 43.93 |
| DISC Dominance (/20) | 5.12 | 5.42 | 4.00 (floor) | 5.00 |
| DISC dominant pattern | Steadiness (99 sole S wins) | Conscientiousness (53 C, 39 ties) | Steadiness (64 S, 32 ties) | 51/100 exact S/C ties |
| Primary Customization Controls | Personalization presets + 2×1,500 chars + Projects | Personalization presets + 2×1,500 chars + Projects | Profile Prefs + Styles/Skills + Projects + `CLAUDE.md` | Profile Prefs + Styles/Skills + Projects + `CLAUDE.md` |

Notice the shared baseline: **high Agreeableness and low Dominance across both labs**. Claude Opus 5.5 scored highest on Agreeableness (47.07/50) and lowest on Dominance (4.00/20), while GPT-6 Astra tested as a split between ISTJ and INTJ on Sensing vs Intuition ([read the tie-breaking audit →](https://agent-tune.com/research/ai-mbti-tie-breaking)).

> **Chart — ChatGPT (GPT-6.2) vs. Claude (Fable 5.2 & Opus 5.5) Personality DNA (Nov 2026):** Side-by-side IPIP-50 trait comparison (n=100 each) showing nearly identical Agreeableness ceilings (44-47) and divergent Neuroticism on Sol. GPT-6.2 Sol: Openness 43.6, Conscientious 41.4, Extraversion 29.5, Agreeable 44.3, Neuroticism 19.9; GPT-6.2 Astra: Openness 43.9, Conscientious 43.2, Extraversion 30.7, Agreeable 44.9, Neuroticism 11.1; Claude Fable 5.2: Openness 44.3, Conscientious 45.0, Extraversion 31.0, Agreeable 46.7, Neuroticism 12.0; Claude Opus 5.5: Openness 43.0, Conscientious 42.0, Extraversion 29.2, Agreeable 45.6, Neuroticism 15.0.

Across OpenAI and Anthropic, untuned baselines share 44.3–46.7 Agreeableness and 42.0–45.0 Conscientiousness—only GPT-6.2 Sol stays elevated near 20 Neuroticism.

## Where OpenAI and Anthropic differ once you add custom rules.

| Dimension | ChatGPT workflow | Claude workflow |
| --- | --- | --- |
| Fastest global tone switch | Settings → Personalization → Base style preset + 4 toggles ([guide →](https://agent-tune.com/guides/chatgpt-personality-settings)) | Profile Preferences box + chat Styles/Skills |
| Global instruction budget | 1,500 chars × 2 boxes + Saved Memories | Multi-paragraph text box in Profile Preferences (best kept under ~1,200 chars) |
| Workspace isolation | ChatGPT Projects (8,000 chars) or Custom GPTs | Claude Projects (system prompt + knowledge) ([examples →](https://agent-tune.com/guides/claude-personality)) |
| Spoken voice persona | Voice selector inside ChatGPT Voice settings | 5 named Voice presets: Buttery, Airy, Mellow, Glassy, Rounded ([guide →](https://agent-tune.com/guides/claude-personality)) |

## One portable rule set that works cleanly in both ChatGPT and Claude.

Use this single behavioral block in both ChatGPT Custom Instructions (under 1,500 chars) and Claude Personal Preferences:

```markdown
## Cross-platform working style

- Put the direct conclusion or decision in the opening two sentences.
- Distinguish confirmed facts from assumptions; name the single riskiest assumption.
- Avoid praise, filler transitions, and unsolicited next-step menus at the end.
- Disagree directly with evidence when a premise slows down or weakens the result.
```

Test how your own prompts behave before and after in our blind [Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench), or see our three-way comparison in [Muse vs ChatGPT vs Claude](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality).

## Questions people ask.

### Is Claude or ChatGPT more agreeable by default?

Both score near the top of the Big Five Agreeableness scale (44.99–47.07 out of 50 in September 2026 tests), with Claude Opus 5.5 recording the highest mean Agreeableness (47.07) and lowest DISC Dominance (4.00/20).

### Why do people experience GPT-6 Astra and Fable 5.1 differently if their Big Five scores look close?

Small shifts around midpoint questionnaire thresholds alter type classifications dramatically (Astra tied on 29/100 MBTI-style OEJTS runs while Fable tested as a clear INTJ on 98/100), and each product pairs the base model with different default UI presets, Memory injection, and Style layers.

### Can I use the same custom instructions in both ChatGPT and Claude?

Yes—if you write short behavioral rules (under 1,500 characters) instead of vague adjectives, the same instruction block fits inside ChatGPT Custom Instructions, Claude Profile Preferences, and Meta Muse Soul.md.

### Does switching personality templates hurt reasoning accuracy?

Across our 60-reply pilot, explicit formatting and directness instructions lifted answer-first openings from 14/20 to 19/20 and cut hedges without lowering factual accuracy, though overly rigid length limits on complex tasks can truncate nuance.

## What changed.

- November 16, 2026 First published comparing September 2026 fresh-session cohorts across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 with cross-platform controls.

## Sources.

- [AgentTune Research: AI personality rankings (Sept 2026)](https://agent-tune.com/research/ai-personality-rankings)

- [AgentTune Research: Astra vs Sol personality data](https://agent-tune.com/research/astra-vs-sol-personality-data)

- [AgentTune Research: Opus 5.5 vs Fable 5.1 question-level data](https://agent-tune.com/research/opus-vs-fable-question-level)

## Keep going.

- [Guide: ChatGPT personality settings: presets & Custom Instructions](https://agent-tune.com/guides/chatgpt-personality-settings)
- [Guide: 7 best Claude personality setups & Personal Preferences](https://agent-tune.com/guides/claude-personality)
- [Three-way: Muse vs ChatGPT vs Claude: customization comparison](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality)
- [Tool: Instruction A/B Test Bench (randomized comparison)](https://agent-tune.com/tools/instruction-test-bench)
- [Atlas: AI personality rankings across 25 model families](https://agent-tune.com/research/ai-personality-rankings)
- [Model profile: GPT Astra — 6 checkpoints & tuning](https://agent-tune.com/models/gpt-astra)
- [Model profile: GPT Sol — 4 checkpoints & tuning](https://agent-tune.com/models/gpt-sol)
- [Model profile: Claude Opus — 5 checkpoints & tuning](https://agent-tune.com/models/claude-opus)
- [Model profile: Claude Fable — 3 checkpoints & tuning](https://agent-tune.com/models/claude-fable)
