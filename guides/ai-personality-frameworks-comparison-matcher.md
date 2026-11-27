Source: https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Interactive Matcher · All 5 Systems

# Which personality system should you use to tune your AI?

By Bernard Huang · Updated November 17, 2026 · ~5 min read · [Markdown (.md)](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Pick DISC or MBTI when you want faster, bottom-line-first structure. Pick Big Five (OCEAN) when you want to adjust one trait at a time (like High Openness or Low Agreeableness). Pick Enneagram or Attachment when you want to control how directly the AI challenges your ideas or paces check-ins.

## Interactive 20-second matcher: match your AI annoyance to the right templates.

Pick what bothers you most about default AI replies and where you plan to paste your rules. The cards below update immediately and open in the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator):

1. What bothers you most about default AI answers?**Buries the lead:** Too much intro throat-clearing before the actual answer.**Sycophantic agreement:** Validates weak ideas instead of challenging flaws.**Jumps ahead:** Skips foundations or sounds impatient when teaching.**Generic & safe:** Gives obvious boilerplate instead of non-obvious angles.**Chatty coding edits:** Writes long essays instead of minimal diffs and checks.**Overwhelming or harsh:** Blunt dumps or giant lists feel stressful.

2. Where will you paste the instructions?ChatGPT Custom Instructions (1,500-char box)Claude Profile PreferencesMeta Muse `Soul.md`Coding agent (`CLAUDE.md` / `AGENTS.md`)Portable Markdown (Perplexity, Gemini, API)

### Lead with the answer & stop over-explaining

Best when defaults bury the conclusion behind three paragraphs of preamble and qualifiers. MBTI T/J, Enneagram Type 5/8, and DISC D/C profiles explicitly penalize throat-clearing and force a bottom-line-first reply structure.

MBTI

INTJ · Strategist

Answer first, numbered structure, zero flattery.

[Open in generator →](https://agent-tune.com/tools/custom-instructions-generator?mode=template&system=mbti&type=intj&target=chatgpt-custom)[View template](https://agent-tune.com/library/mbti/intj)

DISC

D · Dominance

Shortest reliable rule set when you want speed and crisp options.

[Open in generator →](https://agent-tune.com/tools/custom-instructions-generator?mode=template&system=disc&type=d-dominance&target=chatgpt-custom)[View template](https://agent-tune.com/library/disc/d-dominance)

Enneagram

Type 5 · Investigator

Concise reasoning with clear limits and no filler.

[Open in generator →](https://agent-tune.com/tools/custom-instructions-generator?mode=template&system=enneagram&type=5-investigator&target=chatgpt-custom)[View template](https://agent-tune.com/library/enneagram/5-investigator)

Big Five

High Conscientiousness

Ordered checklist output without changing warmth.

[Open in generator →](https://agent-tune.com/tools/custom-instructions-generator?mode=template&system=ocean&type=conscientiousness-high&target=chatgpt-custom)[View template](https://agent-tune.com/library/ocean/conscientiousness-high)

## All 5 personality frameworks compared side by side.

| System | What it captures best | Template count | Fastest test & instrument | Best use case & deep dive |
| --- | --- | --- | --- | --- |
| DISC | Directness, urgency, people vs. task focus | 4 types (D, I, S, C) | [16 items (~3 min, ODAT)](https://agent-tune.com/tests/disc) | Fastest workplace/decision tuning ([DISC guide →](https://agent-tune.com/guides/disc-ai-prompts)) |
| Big Five (OCEAN) | Single continuous communication traits without stereotyping | 10 extreme bands (High/Low × 5) | [50 items (~6 min, IPIP-50)](https://agent-tune.com/tests/big-five) | Surgical adjustments like Openness or Extraversion ([OCEAN guide →](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)) |
| MBTI (OEJTS) | Big-picture vs concrete steps, blunt logic vs human impact | 16 types | [32 pairs (~5 min, OEJTS 1.2)](https://agent-tune.com/tests/mbti) | Mental model framing & explanation style ([MBTI vs Big Five →](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)) |
| Enneagram | Core defensive triggers, critique directness, motivational framing | 9 types (1–9) | [36 items (~5 min, OEPS)](https://agent-tune.com/tests/enneagram) | Anti-sycophancy pushback & coaching tone ([Enneagram guide →](https://agent-tune.com/guides/enneagram-ai-prompts)) |
| Attachment | Feedback cushioning, check-in cadence, emotional steadiness | 4 styles (Secure, Anxious, Avoidant, Disorganized) | [36 items (~5 min, ECR-R)](https://agent-tune.com/tests/attachment) | Preventing harsh critique or needy over-apologies ([Attachment guide →](https://agent-tune.com/library/attachment/avoidant)) |

## What our test results say about choosing a system (and the fine print).

We tested 20 AI models across 10,000 questionnaire runs in November 2026 and 2,000 runs in September 2026 to see how untuned models answer human personality surveys—and what actually changes when you add custom instructions.

- **Untuned models cluster together on warmth and caution:** Across our studies, default proprietary models scored very high on Big Five Agreeableness (**43.7–47.1 / 50**) and very low on DISC Dominance (**4.00–5.58 / 20**). Left alone, almost every assistant defaults to a polite, cautious, conflict-avoidant style.
- **Models often land on a border between two types:** On our 32-question MBTI-style survey, **59 of 400 September sessions** (and up to 93/100 on Llama 4 Maverick) tied on at least one preference pair, and models vary widely in how steady their answers are from run to run.
- **Concrete rules do the work, not the label:** In our [540-reply behavioral study](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) and 60-reply pilot, plain behavioral rules lifted DeepSeek V4 Pro correctness **+16.7 pp (78.3% → 95.0%)** and raised answer-first openings from **14/20 to 19/20**. Pick whichever system helps you choose your rules fastest—or skip tests entirely in the [Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder).

**The fine print (psychometric audit):** On the 32-item OEJTS, 16-item ODAT, 36-item OEPS, 50-item IPIP-50, and 36-item ECR-R, Principal Component Analysis shows [63.58% of Big Five variance collapses onto a single "Big One" alignment factor](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit) while Campbell–Fiske MTMM cross-test correlations diverge from human norms. Per-item Shannon entropy spans **27.7×** from crystalline Claude Fable 5.2 (`0.054 bits`) to fluid DeepSeek V4 Pro (`1.499 bits`; [entropy study](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)).

> **Chart — Why Default AIs Cluster Together on Big Five Traits (Proprietary vs. Open Extreme):** Shows how proprietary assistants share nearly identical Big Five DNA profiles, making framework choice depend on what friction you want to fix. Claude Fable 5.2: Openness 44.3, Conscientious 45.0, Extraversion 31.0, Agreeable 46.7, Neuroticism 12.0; GPT-6.2 Sol: Openness 43.6, Conscientious 41.4, Extraversion 29.5, Agreeable 44.3, Neuroticism 19.9; DeepSeek V4 Pro: Openness 39.8, Conscientious 40.3, Extraversion 23.7, Agreeable 32.4, Neuroticism 23.7.

Frontier assistants look remarkably alike on raw Big Five axes—pick the framework above (MBTI, Big Five, DISC, Enneagram, or Attachment) based on the exact friction you notice in chats.

## How to combine two frameworks without writing contradictory instructions.

If you want to mix two profiles—such as **DISC D** for speed plus **Enneagram Type 8** for pushback—do not paste two full 80-line files together. Instead:

- Pick one **primary template** (DISC, MBTI, or OCEAN) to set answer order, length, and formatting.
- Copy only 2–3 specific bullets for **critique or check-ins** from Enneagram or Attachment.
- Run your combined block through the [Instruction Checker](https://agent-tune.com/tools/instruction-checker) to catch conflicts, then test two prompts in the [A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Questions people ask.

### Which personality system is most scientifically validated for communication preferences?

Among the five public instruments here, the Big Five (measured via IPIP-50) has the strongest consensus support in personality psychology as continuous trait dimensions rather than discrete categories, making it ideal when you want to tune one habit at a time.

### Do I have to take a personality test to generate AgentTune custom instructions?

No. Use the 20-second friction matcher above, browse the 43-file library directly by communication trait, or use the test-free Communication Preferences Builder.

### What is the fastest test if I want an AI tuning file in three minutes?

Our free 16-item DISC assessment (ODAT) takes roughly three minutes in your browser with no email required, and gives you an instant primary style, optional blend, and paste-ready AI rules.

### Should I tell ChatGPT or Claude 'act as an INTJ' instead of pasting a full template?

No. Bare four-letter labels push models toward caricatures or clichés. Concrete behavioral rules (putting conclusions first, omitting filler praise, naming unverified assumptions) work reliably across models.

## What changed.

- November 16, 2026 First published with interactive 20-second workflow friction matcher, 5-framework crosswalk table, and September 2026 empirical caveats.

## Sources.

- [AgentTune Research: AI Personality Rankings & Benchmarks (Sept 2026)](https://agent-tune.com/research/ai-personality-rankings)

- [AgentTune Guide: MBTI vs Big Five for AI Instructions](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)

- [AgentTune Tests Hub (5 Free Open Instruments)](https://agent-tune.com/tests/)

## Keep going.

- [Factor Forensics: The AI Big One: 63.6% Factor Collapse & MTMM Validity Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)
- [Tool: Communication Preferences Builder (no personality test)](https://agent-tune.com/tools/communication-preferences-builder)
- [Tool: Custom Instructions Generator (all 43 templates)](https://agent-tune.com/tools/custom-instructions-generator)
- [Comparison: MBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)
- [Tests: Compare all 5 free public-domain personality tests](https://agent-tune.com/tests/)
