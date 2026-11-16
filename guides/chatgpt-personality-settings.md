Source: https://agent-tune.com/guides/chatgpt-personality-settings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · OpenAI ChatGPT

# ChatGPT personality settings: presets, warmth controls, and custom instructions.

By Bernard Huang · Updated November 16, 2026

Open Settings → Personalization in ChatGPT to pick a Base style and tone preset (such as Candid, Efficient, Professional, or Cynic), adjust characteristic sliders (Warmth, Enthusiastic, Headers & Lists, Emoji), and paste durable formatting rules into Custom instructions (1,500 characters per box).

## All three tone layers inside Settings → Personalization.

Rather than hunting through system prompts, ChatGPT exposes three stacked customization mechanisms in Personalization, plus workspace-level instructions inside ChatGPT Projects and Custom GPTs:

| Layer | Where to find it | Limit &amp; scope | Best controlled here |
| --- | --- | --- | --- |
| Base style &amp; tone presets | Settings → Personalization → Base style and tone | One global preset per account | Broad voice baseline (e.g., Efficient, Candid, Friendly, Professional, Cynic, Robot) |
| Characteristic controls | Settings → Personalization → Characteristics (Warm, Enthusiastic, Headers &amp; Lists, Emoji) | More / Default / Less toggles | Dialing warmth, excitement, markdown density, and emoji frequency up or down |
| Custom instructions (Box 1 &amp; Box 2) | Settings → Personalization → Custom instructions | 1,500 chars per box · new chats | Behavioral constraints: answer-first ordering, no trailing questions, evidence standards |
| ChatGPT Projects &amp; Custom GPTs | Project sidebar / Explore GPTs → Configure | Up to 8,000 chars · scoped to project/GPT | Domain workflows, repo rules, multi-file rubrics ([8,000-char guide →](https://agent-tune.com/guides/custom-gpt-instructions-template-limit)) |

Start with this concise tested block in the What traits should ChatGPT have? / How would you like ChatGPT to respond? field (under 500 characters so it leaves room for personal context):

```markdown
## Response rules

- Start with the direct recommendation or answer in the first sentence.
- Keep routine replies brief; use structured headers only for multi-step comparisons.
- State assumptions and flag uncertainties instead of smoothing over gaps.
- Skip flattery, throat-clearing intros, and generic follow-up offers unless the task is blocked.
```

## Why presets alone rarely stop sycophancy or trailing follow-ups.

Base styles like Candid or Efficient nudge surface phrasing, but our controlled before/after tests show that structural habits come from explicit behavioral prohibitions. Across our September 2026 baseline cohorts, unprompted GPT-6 Astra scored 45.07 / 50 and GPT-6 Sol scored 44.99 / 50 on Big Five Agreeableness, with DISC Dominance floored at 5.12–5.42 / 20—meaning out-of-the-box defaults strongly favor agreeable cushioning and polite closing questions.

In our 60-reply controlled pilot (20 matched prompts across default vs. explicit directness instructions), explicit behavioral constraints raised answer-first openings from 14/20 to 19/20, cut unsolicited hedges from 0.35 to 0.05 per reply, and reduced trailing follow-up offers from 0.90 to 0.25 without reducing accuracy. Use the Base style selector for broad flavor, then pin exact opening and pushback rules in Custom Instructions ([see anti-sycophancy rules →](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)).

## How settings sync across web, iOS/Android, and ChatGPT desktop.

- Account-wide sync: Changes in Personalization propagate to new conversations across web, iOS, Android, and macOS/Windows desktop, though mobile clients sometimes take an app relaunch to fetch updated presets.
- Existing threads keep older context: Toggling Base style or Custom Instructions applies reliably only when you open a fresh conversation thread.
- Memory interacts with tone: Saved Memories live separately under Personalization → Memory. If ChatGPT remembers a stale preference like &ldquo;always respond like a cheerful coach,&rdquo; audit and prune it ([memory audit guide →](https://agent-tune.com/guides/migrate-ai-memory-custom-instructions)).

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

Want a template tuned to your working style and automatically compacted under ChatGPT&rsquo;s 1,500-character limit? Launch the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator?target=chatgpt-custom) or browse all 43 MIT profiles in the [Tuning Library](https://agent-tune.com/library/).

## Questions people ask.

Where did Custom Instructions move in the newer ChatGPT Personalization menu?

Custom Instructions now live inside Settings → Personalization alongside Base style and tone presets and the Characteristic sliders, keeping the same two 1,500-character boxes for context about you and how ChatGPT should respond.

Can I combine a ChatGPT Personality preset like Robot or Cynic with Custom Instructions?

Yes. The Base style preset sets default conversational flavor, while Custom Instructions override formatting, critique style, and length rules when the two are specific and non-contradictory.

Does turning off Reference Saved Memories erase Custom Instructions?

No. Personalization toggles for Memory and Custom Instructions are independent; Custom Instructions remain active in every new chat unless toggled off or overridden inside a Project or Custom GPT.

Why does ChatGPT still end answers with follow-up questions even on Efficient mode?

Preset modes adjust phrasing gently but rarely suppress RLHF closing habits on their own. Add an explicit negative rule in Custom Instructions such as 'End immediately after answering; do not add follow-up prompts or menu offers.'

## What changed.

- November 16, 2026 First published covering ChatGPT Personalization presets, Warmth/Enthusiasm/Emoji controls, and tested Custom Instructions blocks under 1,500 characters.

## Sources.

- [AgentTune: ChatGPT Custom Instructions Examples](https://agent-tune.com/guides/chatgpt-custom-instructions-examples)

- [AgentTune Research: Does personality tuning change AI answers?](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [AgentTune Tool: Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator)

## Keep going.

- [Comparison: ChatGPT vs Claude default personality (benchmark data)](https://agent-tune.com/guides/chatgpt-vs-claude-personality)
- [Guide: ChatGPT Custom Instructions examples (Box 1 vs Box 2)](https://agent-tune.com/guides/chatgpt-custom-instructions-examples)
- [Guide: ChatGPT Projects vs Custom Instructions: precedence & limits](https://agent-tune.com/guides/chatgpt-projects-vs-custom-instructions)
- [Guide: Custom GPT instructions template & 8,000-char guide](https://agent-tune.com/guides/custom-gpt-instructions-template-limit)
