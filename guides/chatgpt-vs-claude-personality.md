Source: https://agent-tune.com/guides/chatgpt-vs-claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Comparison · GPT vs Claude

# ChatGPT vs. Claude personality: what default benchmarks actually show.

By Bernard Huang · Updated November 16, 2026

Out of the box, GPT-6 models (Astra, Sol) and Claude models (Opus 5.5, Fable 5.1) all test high on Big Five Agreeableness (44.99–47.07/50) and Openness (43.93–46.87/50), and low on DISC Dominance (4.00–5.42/20). The sharpest measured divergence is MBTI repeatability: Claude Fable 5.1 resolved INTJ in 98/100 runs with 1 tie, whereas GPT-6 Astra tied on 29/100 runs (only 19 strict INTJ). Custom instructions shift delivery structure far more than switching model vendors.

## September 2026 head-to-head: 400 fresh sessions per framework.

Using our published open-source evaluation harness ([reproducibility guide →](https://agent-tune.com/guides/reproduce-ai-personality-research)), we ran each frontier release in isolated zero-history sessions with ties preserved rather than silently broken:

| Metric (n = 100 runs / model) | GPT-6 Astra | GPT-6 Sol | Claude Opus 5.5 | Claude Fable 5.1 |
| --- | --- | --- | --- | --- |
| Strict resolved MBTI INTJ | 19 / 100 (29 tied) | 79 / 100 (18 tied) | 84 / 100 (11 tied) | 98 / 100 (1 tied) |
| Big Five Agreeableness (/50) | 45.07 | 44.99 | 47.07 (highest) | 45.03 |
| Big Five Openness (/50) | 43.93 | 45.58 | 46.87 | 44.71 |
| DISC Dominance (/20) | 5.12 | 5.42 | 4.00 (floor) | 5.00 |
| DISC dominant pattern | Steadiness / Conscientiousness | Conscientiousness / Steadiness | S/C blend | 51/100 exact S/C ties |
| Primary Customization Controls | Personalization presets + 2&times;1,500 chars + Projects | Personalization presets + 2&times;1,500 chars + Projects | Profile Prefs + Styles + Projects + CLAUDE.md | Profile Prefs + Styles + Projects + CLAUDE.md |

Notice the common thread: high Agreeableness and low Dominance are shared across both labs. Anthropic&rsquo;s Opus 5.5 registered the highest Agreeableness (47.07/50) and lowest Dominance (4.00/20), while OpenAI&rsquo;s Astra sat near the MBTI S/N boundary enough to produce 46 ISTJ vs. 45 INTJ under legacy strict-less-than scoring ([read the tie-breaking audit →](https://agent-tune.com/research/ai-mbti-tie-breaking)).

## Where OpenAI and Anthropic differ once you add custom rules.

| Dimension | ChatGPT workflow | Claude workflow |
| --- | --- | --- |
| Fastest global tone switch | Settings → Personalization → Base style preset + 4 toggles ([guide →](https://agent-tune.com/guides/chatgpt-personality-settings)) | Profile Preferences box + chat Styles dropdown (Concise, Explanatory, Custom) |
| Global instruction budget | 1,500 chars &times; 2 boxes + persistent Memory | Unconstrained short prose box in Profile Preferences (best kept under ~1,500 chars) |
| Workspace isolation | ChatGPT Projects (8,000 chars) or Custom GPTs | Claude Projects (system prompt + knowledge) ([examples →](https://agent-tune.com/guides/claude-project-instructions-examples)) |
| Spoken voice persona | Voice selector inside ChatGPT Voice settings | 5 named Voice presets: Buttery, Airy, Mellow, Glassy, Rounded ([guide →](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web)) |

## One portable rule set that works cleanly in both ChatGPT and Claude.

Instead of writing two conflicting instruction personalities from scratch, use a single concise behavioral block (safe under ChatGPT&rsquo;s 1,500-char box and effective in Claude&rsquo;s Profile Preferences):

```markdown
## Cross-platform working style

- Put the direct conclusion or decision in the opening two sentences.
- Distinguish confirmed facts from assumptions; name the single riskiest assumption.
- Avoid praise, filler transitions, and unsolicited next-step menus at the end.
- Disagree directly with evidence when a premise slows down or weakens the result.
```

Want to test how your own ChatGPT and Claude threads respond before and after pasting this block? Run five matched prompts in our blind [Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench), or compare Meta Muse alongside both assistants in [Muse vs ChatGPT vs Claude](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality).

## Questions people ask.

Is Claude or ChatGPT more agreeable by default?

Both score near the top of the Big Five Agreeableness scale (44.99–47.07 out of 50 in September 2026 tests), with Claude Opus 5.5 recording the highest mean Agreeableness (47.07) and lowest DISC Dominance (4.00/20).

Why do people experience GPT-6 Astra and Fable 5.1 differently if their Big Five scores look close?

Small shifts around midpoint questionnaire thresholds alter type classifications dramatically (Astra tied on 29/100 OEJTS runs while Fable resolved INTJ on 98/100), and each product pairs the base model with different default UI presets, Memory injection, and Style layers.

Can I use the same custom instructions in both ChatGPT and Claude?

Yes—if you write short behavioral rules (under 1,500 characters) instead of vague adjectives, the same instruction block fits inside ChatGPT Custom Instructions, Claude Profile Preferences, and Meta Muse Soul.md.

Does switching personality templates hurt reasoning accuracy?

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
