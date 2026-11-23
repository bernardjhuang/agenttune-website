Source: https://agent-tune.com/guides/chatgpt-personality-settings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · OpenAI ChatGPT

# ChatGPT personality settings: presets, warmth controls, and custom instructions.

By Bernard Huang · Updated November 17, 2026

Settings → Personalization gives you Base style and tone presets, four characteristic sliders, and two 1,500-character instruction boxes.

**Quick answer:** Open Settings → Personalization in ChatGPT to pick a Base style preset (or leave it on Default), adjust the four Characteristic toggles (Warm, Enthusiastic, Headers & Lists, Emoji), and paste checkable behavioral rules into Custom Instructions (1,500 characters per box).

## All three tone layers inside Settings → Personalization.

ChatGPT stacks three account-wide personalization controls alongside workspace-specific Projects and Custom GPTs:

| Layer | Where to find it | Limit &amp; scope | Best controlled here |
| --- | --- | --- | --- |
| Base style &amp; tone presets | Settings → Personalization → Base style and tone | One global preset per account | Broad voice flavor (Efficient, Candid, Friendly, Professional, Cynic, Robot) |
| Characteristic controls | Settings → Personalization → Characteristics (Warm, Enthusiastic, Headers &amp; Lists, Emoji) | More / Default / Less toggles | Dialing warmth, excitement, markdown headers, and emoji up or down |
| Custom instructions (Box 1 &amp; Box 2) | Settings → Personalization → Custom instructions | 1,500 chars per box · new chats | Checkable rules: answer-first order, pushback, and no trailing questions |
| ChatGPT Projects &amp; Custom GPTs | Project sidebar / Explore GPTs → Configure | Up to 8,000 chars · scoped to project/GPT | Domain workflows, repo rules, and multi-file rubrics ([8,000-char guide →](https://agent-tune.com/guides/custom-gpt-instructions-template-limit)) |

Paste this starter block into Box 2 (**How would you like ChatGPT to respond?** — under 500 characters):

```markdown
## Response rules

- Start with the direct recommendation or answer in the first sentence.
- Keep routine replies brief; use structured headers only for multi-step comparisons.
- State assumptions and flag uncertainties instead of smoothing over gaps.
- Skip flattery, throat-clearing intros, and generic follow-up offers unless the task is blocked.
```

## Why presets alone rarely stop sycophancy or trailing follow-ups.

Presets like Candid or Efficient adjust surface tone, but they rarely stop sycophantic agreement or trailing follow-up menus on their own. In our September 2026 study (100 fresh sessions per model), unprompted GPT-6 Astra scored **45.07 / 50** and GPT-6 Sol scored **44.99 / 50** on Big Five Agreeableness, while DISC Dominance sat at **5.12–5.42 / 20**.

In our 60-reply pilot, adding explicit behavioral rules raised answer-first openings from **14/20 to 19/20**, cut hedges from **0.35 to 0.05 per reply**, and reduced trailing questions from **0.90 to 0.25** without hurting accuracy. Use the preset for flavor, and put your concrete opening and pushback rules in Custom Instructions ([see anti-sycophancy rules →](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)).

## How settings sync across web, iOS/Android, and ChatGPT desktop.

- **Account-wide sync:** Changes in **Personalization** sync across web, iOS, Android, and desktop apps (mobile apps may need a quick relaunch).
- **Test in a fresh chat:** Always start a new thread after editing presets or Custom Instructions so older messages in the thread don’t anchor the style.
- **Check Saved Memories for conflicts:** If ChatGPT still uses an old tone, inspect **Personalization → Memory** and delete stale style entries ([memory audit guide →](https://agent-tune.com/guides/migrate-ai-memory-custom-instructions)).

## Three ready-to-paste ChatGPT setups under 600 characters.

### 1. Sharp Editor & Strategist (Pair with Candid)

```markdown
- Put the verdict and concrete tradeoff first; explain rationale after.
- Treat strong claims skeptically: identify weak premises before drafting solutions.
- Omit filler openers, apologies, and &ldquo;Would you like me to...&rdquo; closers.
```

### 2. Calm Technical Mentor (Pair with Friendly or Default)

```markdown
- Explain concepts in plain step-by-step prose without talking down.
- Define domain jargon on first use and give one concrete minimal example.
- Pause after key decision points to confirm whether I want to go deeper.
```

### 3. Strict Code & Docs Partner (Pair with Efficient)

```markdown
- Output exact commands, schemas, or diffs first; keep commentary to three bullets max.
- Never invent file paths, APIs, or test results; mark unverified details explicitly.
- Wait for confirmation before expanding scope across unrelated modules.
```

Want a template matched to your working style and automatically sized under 1,500 characters? Open the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator?target=chatgpt-custom) or browse all 43 profiles in the [Tuning Library](https://agent-tune.com/library/).

## Questions people ask.

### Where did Custom Instructions move in the newer ChatGPT Personalization menu?

Custom Instructions now live inside Settings → Personalization alongside Base style and tone presets and the Characteristic sliders, keeping the same two 1,500-character boxes for context about you and how ChatGPT should respond.

### Can I combine a ChatGPT Personality preset like Robot or Cynic with Custom Instructions?

Yes. The Base style preset sets default conversational flavor, while Custom Instructions override formatting, critique style, and length rules when the two are specific and non-contradictory.

### Does turning off Reference Saved Memories erase Custom Instructions?

No. Personalization toggles for Memory and Custom Instructions are independent; Custom Instructions remain active in every new chat unless toggled off or overridden inside a Project or Custom GPT.

### Why does ChatGPT still end answers with follow-up questions even on Efficient mode?

Preset modes adjust phrasing gently but rarely suppress RLHF closing habits on their own. Add an explicit negative rule in Custom Instructions such as 'End immediately after answering; do not add follow-up prompts or menu offers.'

## What changed.

- November 16, 2026 First published covering ChatGPT Personalization presets, Warmth/Enthusiasm/Emoji controls, and tested Custom Instructions blocks under 1,500 characters.

## Sources.

- [AgentTune: ChatGPT Custom Instructions Examples](https://agent-tune.com/guides/chatgpt-custom-instructions-examples)

- [AgentTune Research: Does personality tuning change AI answers?](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [AgentTune Tool: Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator)

## Keep going.

- [Voice Mode: ChatGPT Voice Mode voices (all 9 voices: Sol, Cove, Maple, Vale) & tone](https://agent-tune.com/guides/chatgpt-voice-mode-voices-personality)
- [Interactive Tuner: 6-Slider AI Personality Tuner → 1,500-char ChatGPT prompt](https://agent-tune.com/guides/ai-personality-slider-tuner-vs-custom-instructions)
- [Comparison: ChatGPT vs Claude default personality (benchmark data)](https://agent-tune.com/guides/chatgpt-vs-claude-personality)
- [Guide: ChatGPT Custom Instructions examples (Box 1 vs Box 2)](https://agent-tune.com/guides/chatgpt-custom-instructions-examples)
- [Guide: ChatGPT Projects vs Custom Instructions: precedence & limits](https://agent-tune.com/guides/chatgpt-projects-vs-custom-instructions)
- [Guide: Custom GPT instructions template & 8,000-char guide](https://agent-tune.com/guides/custom-gpt-instructions-template-limit)
