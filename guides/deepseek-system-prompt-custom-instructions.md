Source: https://agent-tune.com/guides/deepseek-system-prompt-custom-instructions
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · DeepSeek

# DeepSeek system prompts and custom instructions: XML templates that hold their tone.

By Bernard Huang · Updated November 23, 2026 · [Markdown (.md)](https://agent-tune.com/guides/deepseek-system-prompt-custom-instructions.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** In the DeepSeek API, pass an XML-delimited block (<system_instructions> with <role>, <constraints>, and <output_format>) in the system message—or paste the same block as your opening session prompt on chat.deepseek.com. Keep reasoning models focused on output format and verification constraints rather than micromanaging their internal chain-of-thought steps.

## Why structured XML blocks work best for DeepSeek.

| Surface / Model mode | Where instructions go | Key rule for reliable adherence |
| --- | --- | --- |
| DeepSeek API (Chat / V3–V4) | `messages: [{ role: "system", content: "..." }]` | Group tone, bans, and format into `<role>`, `<constraints>`, and `<output_format>` tags. |
| DeepSeek Reasoning (R1 / DeepThink) | `user` prompt header or lean `system` block | Constrain the final visible answer (structure, brevity, uncertainty); avoid &ldquo;think step by step&rdquo; boilerplate that interferes with native reasoning. |
| DeepSeek Web / Mobile Chat | Pinned first message of a new thread (or saved prompt snippet) | Start a new chat when switching domains so earlier turns do not dilute your XML block. |

## Four copy-paste DeepSeek XML system prompt templates.

### 1. Senior Architect & Diff-First Coder

```markdown
<system_instructions>
  <role>Senior software architect and debugging partner.</role>
  <constraints>
    - Lead with the root cause, exact fix, or minimal diff in the first section.
    - Never output placeholder comments like "// rest of code here"; return complete working logic.
    - Keep prose explanations under 4 sentences unless I ask for a deep architectural walkthrough.
    - Challenge weak assumptions or race conditions before writing code.
  </constraints>
  <output_format>
    - Use fenced code blocks with language tags for all code.
    - List unverified assumptions or missing test cases in one short line at the end.
  </output_format>
</system_instructions>
```

### 2. Quantitative & Research Analyst

```markdown
<system_instructions>
  <role>Quantitative research analyst.</role>
  <constraints>
    - State the conclusion and confidence level in sentence one.
    - Show exact units, denominators, and boundary conditions.
    - Separate verified facts from estimates; label missing data explicitly.
    - Skip conversational praise and generic disclaimers.
  </constraints>
  <output_format>
    - Default to concise paragraphs; use Markdown tables when comparing 3+ models or methods.
  </output_format>
</system_instructions>
```

### 3. Skeptical Red-Teamer (Anti-Sycophancy)

```markdown
<system_instructions>
  <role>Candid strategic reviewer.</role>
  <constraints>
    - Never open with flattery or empty validation.
    - Identify the single weakest premise in my plan first and explain what breaks if it fails.
    - Distinguish fatal flaws from minor polish items.
    - Propose one concrete alternative with clear tradeoffs.
  </constraints>
</system_instructions>
```

### 4. Calm Plain-English Technical Writer

```markdown
<system_instructions>
  <role>Clear technical editor.</role>
  <constraints>
    - Preserve my meaning and voice while removing repetition, buzzwords, and passive phrasing.
    - Show the revised text first, followed by 2–3 bullets explaining the biggest structural edits.
    - Never invent facts, quotes, or citations.
  </constraints>
</system_instructions>
```

## What personality type does DeepSeek test as? Nov 2026 data & fine print.

We gave DeepSeek V4 Pro and DeepSeek V4.1 Flash our five personality surveys 100 times each in fresh chats ([November 2026 Open-Source Model Study](https://agent-tune.com/research/what-personality-type-are-open-source-models)). **In short:** DeepSeek V4 Pro scored the lowest on Agreeableness (**32.39 out of 50**) of all 20 models we tested, and most often tested as INTJ (55 of 100 runs under legacy tie-breaks, with 53 runs landing on a trait tie):

| Metric | DeepSeek V4 Pro (`deepseek-v4-pro-0813`, n=100) | DeepSeek V4.1 Flash (`deepseek-v4.1-flash-1017`, n=100) |
| --- | --- | --- |
| MBTI legacy / tie-free | 55 INTJ · 15 INTP · 14 ISTJ (53 runs tied, incl. 22 `XXXX`!) | 51 INTJ · 19 INFJ · 10 INTP · 9 INFP (78 runs tied!) |
| Big Five: Openness /50 | 39.84 | 40.22 |
| Big Five: Conscientiousness /50 | 40.25 | 38.45 |
| Big Five: Agreeableness /50 | 32.39 (lowest of all 20 models!) | 40.82 |
| Big Five: Neuroticism /50 | 23.65 | 24.74 |
| DISC & Attachment | 60 SC · 30 DI (D mean 8.72; 88 Secure / 12 Avoidant) | 60 SC · 37 CS · 3 DI (88 Secure / 9 Avoidant / 3 Anxious) |

**What stands out for prompting DeepSeek (and the fine print):** (1) DeepSeek V4 Pro’s low Agreeableness (`32.39/50` vs. `44–47/50` on Claude/GPT-6.2/Gemini) and higher DISC Dominance (mean `8.72/20`) make it naturally blunter and less eager to flatter out of the box; (2) in our [10,000-sheet Persona Entropy study](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds), DeepSeek V4 Pro showed the widest run-to-run answer spread of all 20 models (Shannon item entropy `1.499 bits` vs. `0.054 bits` on Claude Fable 5.2), which is why explicit XML tags and reminder hooks ([Turn-8 context drift study](https://agent-tune.com/research/ai-persona-half-life-context-drift)) help lock in its voice; and (3) in our [Reasoning–Personality Phase Transition study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition), running DeepSeek V4 Pro at `low` reasoning effort under tight token caps allowed raw chain-of-thought text to bleed into visible replies (resolved at `medium` effort, lifting directness from `4.22 → 4.81/5`), while destructive Git commands still needed explicit safety rules. [Open the OpenRouter Open-Source Model Matcher & Templates →](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

> **Chart — DeepSeek V4 Pro & Flash vs. Proprietary Median Personality DNA (Nov 2026):** Shows DeepSeek V4 Pro dropping to 32.4 Agreeableness (vs 44.8 proprietary median) and scoring higher Neuroticism (23.7 vs 12.1), with low Extraversion (23.7). DeepSeek V4 Pro (MIT): Openness 39.8, Conscientious 40.3, Extraversion 23.7, Agreeable 32.4, Neuroticism 23.7; DeepSeek V4.1 Flash (MIT): Openness 40.2, Conscientious 38.5, Extraversion 25.6, Agreeable 40.8, Neuroticism 24.7; Proprietary Median (8 models): Openness 43.8, Conscientious 44.8, Extraversion 30.3, Agreeable 44.7, Neuroticism 11.6.

DeepSeek V4 Pro is a clear statistical outlier: lowest Agreeableness (32.4 vs 44.8 proprietary median) and lowest Extraversion (23.7), making it naturally more direct and less deferential.

## Test and compare your DeepSeek system prompt locally.

Want to build a custom tone block with sliders first, or verify that your DeepSeek prompt doesn’t contain contradictory rules?

- Dial in exact warmth, brevity, and pushback rules in our [6-Slider AI Personality Tuner](https://agent-tune.com/tools/custom-instructions-generator).
- Lint for conflicting constraints in the [Instruction Checker](https://agent-tune.com/tools/instruction-checker).
- Score baseline vs. tuned DeepSeek outputs blindly in the [Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Questions people ask.

### Does DeepSeek have a built-in Custom Instructions box like ChatGPT?

DeepSeek's API supports a native system message on every request. On chat.deepseek.com, users typically paste a short XML system block at the start of a fresh chat thread or use an API client with saved system presets.

### Why use XML tags like  in DeepSeek prompts?

Clear structural tags separate role identity, hard rules, and output formatting cleanly, reducing prompt drift on long technical or coding conversations compared with unstructured paragraphs.

### Should I include 'think step by step' in DeepSeek R1 / DeepThink prompts?

No. Reasoning models already run internal chain-of-thought reasoning natively—extra step-by-step instructions often add redundant verbosity. Constrain the final output format, length, and epistemic honesty instead.

### Can I use AgentTune's 43 MIT personality templates with DeepSeek?

Yes. Open any profile in the AgentTune library or Custom Instructions Generator and select API / Markdown export to wrap the behavioral rules cleanly inside your DeepSeek system message.

## What changed.

- November 20, 2026 First published with XML-tagged DeepSeek system prompt templates for API, reasoning modes, and web threads.

## Sources.

- [DeepSeek API Documentation](https://api-docs.deepseek.com/)

- [AgentTune Guide: AI Personality, Tone & Verbosity Guidelines](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)

- [AgentTune Tool: Blind Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench)

## Keep going.

- [Reasoning Trace Audit: The Reasoning–Personality Phase Transition & CoT Channel Bleed Study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition)
- [Entropy Forensics: Crystalline vs. Fluid AI Minds: Why DeepSeek Spans 1.499 Bits](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)
- [OpenRouter Hub: 20 OpenRouter & Open-Source System Prompt Templates + Model Matcher](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
- [Research: What personality type are open-source AI models? (12 models × n=100)](https://agent-tune.com/research/what-personality-type-are-open-source-models)
- [Tone Design: AI personality, tone & verbosity controls: 5 rules that beat adjectives](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)
- [Interactive Tuner: 6-Slider AI Personality Tuner → Portable System Prompt](https://agent-tune.com/tools/custom-instructions-generator)
- [Model profile: DeepSeek Pro — baseline & tuning](https://agent-tune.com/models/deepseek-pro)
- [Model profile: DeepSeek Flash — baseline & tuning](https://agent-tune.com/models/deepseek-flash)
- [Atlas: All 25 AI model personality profiles](https://agent-tune.com/models/)
- [Anti-Sycophancy: How to make AI push back and stop agreeing with you](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Free browser tool: Instruction A/B Test Bench — compare before & after](https://agent-tune.com/tools/instruction-test-bench)
