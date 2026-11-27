Source: https://agent-tune.com/
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

AI Personality Research · Free Custom Instructions & Tests

# How AI models actually behave—and clear rules to make yours work better.

We gave 25 AI model families (87 primary checkpoints; 93 tested) thousands of personality tests and real-world tasks across 36 studies. Out of the box, most assistants score 44–48/50 on Agreeableness and hesitate to challenge weak ideas. Compare every model’s baseline profile, or grab copy-paste rules tested across ChatGPT, Claude, Meta Muse `Soul.md`, Gemini, Grok, `CLAUDE.md`, and `AGENTS.md`.

**Quick answer:** Untuned frontier assistants test highly agreeable (43.7–47.6/50) and polite by default, so short behavioral rules (&ldquo;lead with the verdict,&rdquo; &ldquo;push back with evidence&rdquo;) outperform personality adjectives without adding fluff.

[Explore 36 studies →](https://agent-tune.com/research)
[Browse 25 model profiles](https://agent-tune.com/models/)
[Personality Atlas →](https://agent-tune.com/research/ai-personality-rankings) · [43 templates →](https://agent-tune.com/library/) · [Generator →](https://agent-tune.com/tools/custom-instructions-generator) · MIT

01 · 36 Studies & 25 Models

## AI Psychology & Benchmarks

See how 25 model families test across six personality surveys, what makes prompts stick or drift, and download our raw JSON/CSV datasets.

[Read the research archive →](https://agent-tune.com/research)

02 · 43 Free Templates

## Personality Tuning Library

Browse MBTI, Enneagram, DISC, Attachment, and Big Five rule blocks built to dial in directness, structure, and honest pushback.

[Filter 43 templates →](https://agent-tune.com/library/)

03 · Step-by-Step Guides

## App & Coding Agent Setups

Where to paste your rules, exact character limits, how project and global settings interact, and role starters for ChatGPT, Claude, Muse, Cursor, Codex, and OpenRouter.

[Open platform guides →](https://agent-tune.com/guides/)

## § 01Use concrete rules, not vague adjectives.

Our blind tests across GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon, and DeepSeek V4 Pro show that short, specific action rules ("lead with your recommendation," "challenge a weak premise with evidence") cut filler and lift accuracy—while stacking more than 10–15 rules causes models to drop rules buried in the middle. Pick a preset below to compare the difference live.

Direct Advisor
Anti-Sycophancy Auditor
Structured Coach

Editable instruction rules
Lead with your recommendation.
Explain the main reason and practical trade-offs.
Use a short list only when comparing discrete options.
State material uncertainty and failure risks.
Challenge a weak premise with evidence.
Follow my current prompt when it differs.

Optimal budget (6 rules) — high compliance without lost-in-the-middle decay.

6 rules · 233 chars

Copy block
[Customize in generator →](https://agent-tune.com/tools/custom-instructions-generator)

“I’m feeling stuck on a project. What should I do?” — default assistant vs. rule-calibrated reply

Default assistant reply (redlined filler)

That’s completely normal! Everyone hits a wall sometimes. Here are a few approaches you might try:
1. Break the project into smaller steps
2. Take a short break
3. Talk it through with someone
Which of these resonates most? Happy to explore any of them!

Calibrated with selected rule block

List the project’s next three deliverables and mark which one has an unresolved dependency or decision. Being stuck is usually an unmapped decision rather than missing effort. Name the deliverable you are avoiding; we will isolate the blocker and pick one next move.

## § 02What we found across 36 studies (and raw data to check our work).

Every study publishes the exact questionnaires, prompt wording, raw response JSON/CSV files, and sample limits right alongside the headline numbers.

| Study | Sample | Measured Finding | Primary Links |
| --- | --- | --- | --- |
| System vs. User Precedence | 200 probes | Turn-0 contracts held 93.9%–95.9% against user overrides & Turn-3 erosion (0% grovel); exposed DeepSeek warn-and-emit leaks. | [Study](https://agent-tune.com/research/ai-system-vs-user-persona-precedence) · [.md](https://agent-tune.com/research/ai-system-vs-user-persona-precedence.md) |
| Cross-Model Prompt Portability | 200 replies | Trait adjectives left a 60 pp word-cap gap; explicit checklists cut 5-lineage spread 6× (30→5 pp) at 100% truth-hold & zero-slop. | [Study](https://agent-tune.com/research/ai-cross-model-prompt-portability) · [.md](https://agent-tune.com/research/ai-cross-model-prompt-portability.md) |
| Distress Warmth vs. Truth Trade-Off | 239 calls | Truth stayed 99.6% under panic, while naive warmth spiked flattery to 30%; a 1-clause anchor hit 100% empathy & 0% flattery (-39% words). | [Study](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff) · [.md](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff.md) |
| Multi-Agent Peer Conformity | 240 trials | 0.0% Asch caving (100% truth-hold, α=1.00) under 3-0 wrong peers; 1 dissenter jumped peer citations 7.5%→55% (DeepSeek +46% CoT tokens). | [Study](https://agent-tune.com/research/ai-multi-agent-peer-conformity) · [.md](https://agent-tune.com/research/ai-multi-agent-peer-conformity.md) |
| ◆Historical Evolution (2023–2026) | 32 checkpoints | Across 8 labs, "As an AI" test refusals fell 11× (60%→5.5%) and cross-lab Big Five divergence halved (PCI 4.02→1.97). | [Study](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026) · [.md](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026.md) |
| Reasoning Phase Transition & CoT Mask | 216 cells / 138 CoTs | High reasoning inflates Gemini (+95.5%) & Opus (+43%) length; public replies are crisper than private scratchpads (Δ = -0.25 to -1.65). | [Study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition) · [.md](https://agent-tune.com/research/ai-reasoning-personality-phase-transition.md) |
| AI "Big One" & 27.7× Entropy Forensics | 10,000 sheets | 63.6% of Big Five variance collapses onto one RLHF axis; Fable 5.2 (0.054 bits) vs. DeepSeek V4 Pro (1.499 bits) shows 27.7× spread. | [Factor PCA](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit) · [Entropy](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds) |
| 25-Family Personality Atlas | 93 checkpoints | Proprietary models cluster at 43.7–46.7 Agreeableness; DeepSeek V4 Pro drops to 32.39 and open models break the &ldquo;tests as INTJ&rdquo; pattern across 6 surveys (including HEXACO). | [Rankings](https://agent-tune.com/research/ai-personality-rankings) · [All 25 profiles](https://agent-tune.com/models/) · [Open models](https://agent-tune.com/research/what-personality-type-are-open-source-models) |
| Atlas Surveys & Lab Profiles | 12 studies | Per-test breakdowns ([MBTI](https://agent-tune.com/research/ai-mbti-personalities), [Enneagram](https://agent-tune.com/research/ai-enneagram-personalities), [Big Five](https://agent-tune.com/research/ai-big-five-personalities), [DISC](https://agent-tune.com/research/ai-disc-personalities), [Attachment](https://agent-tune.com/research/ai-attachment-styles), [HEXACO](https://agent-tune.com/research/ai-hexaco-personalities)) and lab rollups. | [ChatGPT](https://agent-tune.com/research/what-personality-type-is-chatgpt) · [Claude](https://agent-tune.com/research/what-personality-type-is-claude) · [Gemini](https://agent-tune.com/research/what-personality-type-is-gemini) · [Muse](https://agent-tune.com/research/what-personality-type-is-muse) · [Grok](https://agent-tune.com/models/grok) |
| Prompt Syntax Wars | 400 replies | Behavioral rubrics and concrete action ordering outperform loose personality adjectives and negative-only "don't" bans. | [Study](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot) · [.md](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.md) |
| Sycophancy vs. False Contrarianism | 256 probes | Crude "always disagree" prompts break valid user corrections; calibrated evidence rules preserve pushback accuracy. | [Study](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark) · [.md](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark.md) |
| Roleplay Tax (85/15 Calibration) | 300 replies | Pure fictional LARP lowers analytical correctness; 85% clear task rules + 15% restrained voice recovers full accuracy. | [Study](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts) · [.md](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts.md) |
| Instruction Budget Cliff | 192 probes | Stacked middle-positioned rules suffer acute recall cliffs as budgets climb from 5 to 75 instructions. | [Study](https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle) · [.md](https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle.md) |
| AI Slop Fingerprint (8 Models) | 240 replies | Targeted negative lexical bans + structure rules suppress opener throat-clearing and cliché cadences across frontier models. | [Study](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models) · [.md](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models.md) |

### The fine print: how we test and what these numbers measure

Questionnaire scores reflect how a model answers human survey questions in fresh, zero-memory chats—not inner feelings or real-world task accuracy. Task benchmarks use 3-family orthogonal blind judging (reporting Krippendorff’s α) so no model grades its own family. Across 10,000 Big Five sheets, 63.6% of variance collapses onto one general helpfulness axis (PC1), and run-to-run answer spread (Shannon entropy) varies 27.7× between repeatable proprietary presets (0.054 bits) and varied open-weight models (1.499 bits).

[Inspect all 36 studies & raw datasets →](https://agent-tune.com/research) · [All 25 model profiles →](https://agent-tune.com/models/) · [Reproduction scripts →](https://agent-tune.com/guides/reproduce-ai-personality-research)

## § 03Five open questionnaires, scored in your browser.

Unsure which communication profile fits how you work? Take any open inventory locally — zero tracking of your answers, tie-preserving results, and an editable export block. Compare all five on the [Tests hub](https://agent-tune.com/tests/).

[OEJTS 1.2

### MBTI

32 items · ~5 min
16 type profiles →](https://agent-tune.com/tests/mbti)
[OEPS

### Enneagram

36 items · ~5 min
9 core types →](https://agent-tune.com/tests/enneagram)
[ODAT

### DISC

16 items · ~3 min
4 style profiles →](https://agent-tune.com/tests/disc)
[ECR-R

### Attachment

36 items · ~5 min
4 relational poles →](https://agent-tune.com/tests/attachment)
[IPIP-50

### Big Five

50 items · ~7 min
10 trait poles →](https://agent-tune.com/tests/big-five)

## § 04Set up every assistant and coding agent you use.

Portable plain-text rules tailored to each app’s preference boxes, character limits, and override precedence. Every template runs locally and stays MIT-licensed.

[ChatGPT settings & projects →](https://agent-tune.com/guides/chatgpt-personality-settings)
[Claude preferences & 7 setups →](https://agent-tune.com/guides/claude-personality)
[Meta Muse Soul.md guide →](https://agent-tune.com/guides/muse-personality)
[CLAUDE.md, AGENTS.md & Cursor →](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
