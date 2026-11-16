Source: https://agent-tune.com/guides/grok-personality-settings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · xAI Grok

# How to change Grok’s personality on X and grok.com.

By Bernard Huang · Updated November 16, 2026

To change how Grok responds in ordinary chat on grok.com or X, open Settings → Customize Grok (or Customize response) to switch between built-in persona modes or paste persistent custom instructions (~4,000-character box). For a dedicated specialist persona with its own cloud workspace, create a Grok Bot and paste your rules into Edit Profile → Description.

## Built-in Grok modes vs. custom instructions on X & grok.com.

| Surface / Control | Where to find it | Limit &amp; behavior |
| --- | --- | --- |
| Ordinary chat on grok.com or X | Settings → Customize Grok (Custom Instructions) | Account-wide instructions (~4,000 chars) applied to new Grok threads. |
| Built-in Grok persona modes / Voices | Model / Mode selector in Grok chat &amp; Voice Mode | One-tap style presets (e.g., Concise, Socratic, Unfiltered/Fun, or Voice personas) that set broad tone but cannot enforce formatting rules as reliably as explicit instructions. |
| Custom Grok Bot | Bot menu → Edit Profile → Description ([6 Grok Bot profiles →](https://agent-tune.com/guides/grokbot-personality)) | Persistent character + boundaries for a standalone cloud-teammate Bot; survives Bot duplication. |
| xAI API | system message on each request | Deterministic per-call control where model ID and temperature are pinned. |

Start with this clean baseline block in Settings → Customize Grok, or pick any of the 43 templates in the [tuning library](https://agent-tune.com/library/):

```markdown
## Communication preferences

- Lead with the direct conclusion or answer in the first sentence.
- Separate verified facts and primary sources from inference or speculation.
- Keep tone dry, clear, and matter-of-fact; skip forced banter, slang, and throat-clearing intros.
- Use plain prose by default. Add tables only when comparing three or more options.
- Challenge weak assumptions in my question directly and explain why.
```

## Why Grok's default self-report looks different from Claude and ChatGPT.

In the September 2026 supplied self-report for Grok 4.6 ([What personality type is Grok?](https://agent-tune.com/research/what-personality-type-is-grok)), its canonical answer vectors scored INTJ on the OEJTS (with wide margins of +13 to +15 out of 16), Investigator (Type 5) on the Enneagram (19 of 20, followed by Type 8 Challenger at 17), and a pure Conscientiousness (C) profile on DISC (C 18 vs Steadiness 11).

Unlike the four fresh-session cohorts (GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1, which all scored 44.5 to 45.1 on Agreeableness and Secure on Attachment), Grok 4.6 reported Agreeableness at 33 of 50, Extraversion at 24 of 50, and Attachment avoidance at 4.06 (just 0.06 above the 4.0 Avoidant cutoff; see our [Grok attachment cutoff sensitivity analysis](https://agent-tune.com/research/grok-attachment-cutoff-simulation)). Because the Grok 4.6 report consisted of one canonical self-report plus 100 simulated draws rather than 100 independent sessions, we keep it strictly separated from the fresh-session cohorts.

## Dialing down edgy banter or dialing up warmth (5 more presets).

In practice, users tune Grok in one of two opposite directions:

- Cutting performative snark: If Grok's default replies feel overly sarcastic or informal for technical work, add a single rule: "Write in plain, neutral technical prose. Do not use jokes, sarcasm, or slang." Pairing that with an [ISTJ](https://agent-tune.com/library/mbti/istj) or [DISC Conscientiousness](https://agent-tune.com/library/disc/c-conscientiousness) tuning keeps answers focused on evidence and citations.
- Adding structured warmth for brainstorming or coaching: If Grok feels too blunt or detached, use an [ENFJ](https://agent-tune.com/library/mbti/enfj), [DISC Steadiness](https://agent-tune.com/library/disc/s-steadiness), or [Secure attachment](https://agent-tune.com/library/attachment/secure) tuning so it checks context before jumping to critique.

### Preset 2: Neutral Technical Editor

```markdown
- Use plain, neutral technical prose. No jokes, slang, emojis, or snark.
- Cite exact commands, versions, or primary docs; say what is unverified.
- Put the fix or recommendation in paragraph one, then explain why.
```

### Preset 3: Live X / News Fact-Checker

```markdown
- Separate primary posts, official announcements, and unconfirmed commentary.
- Include exact timestamps or publication dates when summarizing fast-moving threads.
- Flag conflicting claims rather than picking the loudest consensus.
```

### Preset 4: Socratic Study Partner

```markdown
- Explain the core concept briefly, then ask me to predict the next step.
- Point out the specific assumption I missed rather than giving away the whole solution.
- Keep turns under 150 words unless I ask for a deep dive.
```

### Preset 5: Warm & Balanced Advisor

```markdown
- Acknowledge the constraint or stakes in one sentence before offering options.
- Present two realistic paths with concrete pros and tradeoffs.
- Disagree respectfully with evidence when my idea creates avoidable risk.
```

### Preset 6: Anti-Sycophancy Strategist

```markdown
- Never agree just to close a turn smoothly. Name the strongest counterargument first.
- Distinguish fatal flaws from fixable details.
- Give one clear recommendation rather than a hedge-filled menu.
```

If you decide to package your rules into a reusable custom bot, follow our step-by-step [Grok Bot personality guide](https://agent-tune.com/guides/grokbot-personality).

## Questions people ask.

How do I change Grok's personality without creating a Grok Bot?

Open your account settings on grok.com or X to set custom response instructions, or paste a short communication preference block at the start of a new chat thread.

What is the difference between Grok chat settings and a Grok Bot?

Account or thread instructions shape how standard Grok replies to you across everyday topics. A Grok Bot is a saved custom assistant with its own name and Description field for a specific repeatable job.

How do I make Grok stop using slang or sarcasm?

Include one explicit line in your instructions: 'Use plain, neutral, matter-of-fact prose. Skip jokes, slang, and conversational banter, and lead directly with the verified answer.'

Why did Grok 4.6 score Avoidant on the AgentTune attachment test?

In its supplied September 2026 self-report, Grok 4.6 reported an avoidance mean of 4.06 on a 1-to-7 scale where 4.00 is the boundary—literally one raw point (73/18 vs 72/18) over the threshold.

## What changed.

- November 16, 2026 Added built-in Grok modes vs Settings → Customize Grok (~4,000-character custom instructions) breakdown and 5 additional copyable presets.

- November 5, 2026 First published covering ordinary Grok chat settings on X and grok.com vs custom Grok Bots.

## Sources.

- [AgentTune: How to give a Grok Bot a personality](https://agent-tune.com/guides/grokbot-personality)

- [AgentTune Research: What personality type is Grok?](https://agent-tune.com/research/what-personality-type-is-grok)

- [AgentTune Research: Grok 4.6 and the attachment cutoff](https://agent-tune.com/research/grok-attachment-cutoff-simulation)

## Keep going.

- [Guide: How to give a Grok Bot a personality](https://agent-tune.com/guides/grokbot-personality)
- [Research: What personality type is Grok? (Grok 4.6 & 4.3 data)](https://agent-tune.com/research/what-personality-type-is-grok)
- [Research: Grok 4.6 and the attachment cutoff: a sensitivity analysis](https://agent-tune.com/research/grok-attachment-cutoff-simulation)
- [Guide: How to make AI push back and stop agreeing with you](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Library: Browse all 43 personality tuning files](https://agent-tune.com/library/)
