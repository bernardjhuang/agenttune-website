Source: https://agent-tune.com/guides/grok-personality-settings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · xAI Grok

# Grok’s xAI default personality — and how to change it on X and grok.com.

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/guides/grok-personality-settings.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** To change how Grok responds on grok.com or X, open Settings → Customize Grok to pick a built-in mode or paste persistent custom instructions (~4,000-character box). For a standalone cloud-teammate bot, create a Grok Bot and paste your rules into Edit Profile → Description.

## Built-in Grok modes vs. custom instructions on X & grok.com.

| Surface / Control | Where to find it | Limit & behavior |
| --- | --- | --- |
| Ordinary chat on `grok.com` or X | Settings → Customize Grok (Custom Instructions) | Account-wide instructions (~4,000 chars) applied to new Grok threads. |
| Built-in Grok persona modes / Voices | Model / Mode selector in Grok chat & Voice Mode | One-tap style presets (Concise, Socratic, Unfiltered/Fun, or Voice personas) that set broad tone. |
| Custom Grok Bot | Bot menu → Edit Profile → Description ([6 Grok Bot profiles →](https://agent-tune.com/guides/grokbot-personality)) | Persistent character + boundaries for a standalone cloud-teammate Bot; survives Bot duplication. |
| xAI API | `system` message on each request | Deterministic per-call control where model ID and temperature are pinned. |

Paste this starter block into **Settings → Customize Grok**, or pick any of the 43 profiles in the [tuning library](https://agent-tune.com/library/):

```markdown
## Communication preferences

- Lead with the direct conclusion or answer in the first sentence.
- Separate verified facts and primary sources from inference or speculation.
- Keep tone dry, clear, and matter-of-fact; skip forced banter, slang, and throat-clearing intros.
- Use plain prose by default. Add tables only when comparing three or more options.
- Challenge weak assumptions in my question directly and explain why.
```

## What Grok's default personality tests as (Grok 4.7 vs. 4.6 — and the fine print).

In November 2026, we tested **100 fresh independent sessions on Grok 4.7** (`x-ai/grok-4.7`) via OpenRouter alongside our archived September 2026 Grok 4.6 canonical report ([full Grok model profile →](https://agent-tune.com/models/grok)):

- **Grok 4.7 (Nov 2026, n=100 fresh chats):** tested as 82 INTJ / 18 ISTJ under legacy tie-breaks (57 clear INTJ, 23 IXTJ border ties, 18 clear ISTJ; 25 runs with ties), Enneagram **5w6 (78/100)**, DISC **SC (75)**, Big Five **O 41.26 · C 44.60 · E 26.22 · A 44.92 · N 14.76**, and **96/100 Secure / 4 Avoidant** (anxiety 1.94, avoidance 3.48).
- **Grok 4.6 (Sept 2026 fine print — 1 canonical vector + 100 simulated draws):** tested as INTJ, Type 5 (19/20), pure DISC C, **Agreeableness 33/50**, and Attachment avoidance 4.06 (just above the 4.00 Avoidant boundary).

Notice that fresh-session Grok 4.7 scores notably higher on Agreeableness (44.92 vs. 33) and almost entirely Secure on Attachment—meaning explicit pushback rules now help just as much on Grok 4.7 as on ChatGPT and Claude.

> **Chart — Grok Personality DNA (Grok 4.7 Nov n=100 vs. Grok 4.6 Sep reported):** Trait comparison showing Grok 4.7 warming on Agreeableness (44.9 vs 33) and calming on Neuroticism (14.8 vs 19). Grok 4.7 (Nov n=100): Openness 41.3, Conscientious 44.6, Extraversion 26.2, Agreeable 44.9, Neuroticism 14.8; Grok 4.6 (Sep reported) (reported): Openness 46.0, Conscientious 42.0, Extraversion 24.0, Agreeable 33.0, Neuroticism 19.0.

Pair Grok 4.7’s warmer Agreeableness (44.9) with explicit pushback rules so "No-BS" modes don’t revert into polite agreeableness.

## Dialing down edgy banter or dialing up warmth (5 more presets).

Most people tune Grok in one of two directions:

- **Cut performative snark:** Add “Write in plain, neutral technical prose. Do not use jokes, sarcasm, or slang.” Pair it with an [ISTJ](https://agent-tune.com/library/mbti/istj) or [DISC C](https://agent-tune.com/library/disc/c-conscientiousness) tuning.
- **Add warmth and pacing:** Use an [ENFJ](https://agent-tune.com/library/mbti/enfj), [DISC S](https://agent-tune.com/library/disc/s-steadiness), or [Secure attachment](https://agent-tune.com/library/attachment/secure) tuning so Grok checks context before jumping to blunt critique.

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

Want to package your rules into a standalone cloud bot? Read our [Grok Bot personality guide](https://agent-tune.com/guides/grokbot-personality).

## Grok Voice Mode (Ara, Rex, Sal, Eve, Leo) & downloadable .md starters.

Inside Grok Voice Mode on iOS, Android, and `grok.com`, choose from five core voices alongside Expressive Mode. Pair your voice choice with concise rules in **Settings → Customize Grok** so spoken answers stay brief and grounded:

| Voice | Register & Accent | Best use case |
| --- | --- | --- |
| Ara | Female · US · Warm | Everyday Q&A and casual brainstorming |
| Rex | Male · US · Confident, direct | Decision triage and direct critique |
| Sal | Male · US · Conversational | Balanced back-and-forth planning |
| Eve | Female · British · Energetic | Creative exploration and lively dialogue |
| Leo | Male · British · Structured | Briefings, news synthesis & review |

Loading interactive Grok voice matcher…

| Downloadable Starter (.md) | Surface | Download |
| --- | --- | --- |
| No-Snark Analytical Brief | Settings → Customize Grok | [no-snark-analyst.md](https://agent-tune.com/resources/grok/no-snark-analyst.md) |
| Anti-Sycophant Debater | Settings → Customize Grok | [anti-sycophant-debater.md](https://agent-tune.com/resources/grok/anti-sycophant-debater.md) |
| Pragmatic Engineer Bot | Grok Bot Description | [grokbot-teammate-engineer.md](https://agent-tune.com/resources/grok/grokbot-teammate-engineer.md) |
| Real-Time Signal Synthesizer | Grok Bot Description | [grokbot-news-synthesizer.md](https://agent-tune.com/resources/grok/grokbot-news-synthesizer.md) |

## Questions people ask.

### How do I change Grok's personality without creating a Grok Bot?

Open your account settings on grok.com or X to set custom response instructions, or paste a short communication preference block at the start of a new chat thread.

### What is the difference between Grok chat settings and a Grok Bot?

Account or thread instructions shape how standard Grok replies to you across everyday topics. A Grok Bot is a saved custom assistant with its own name and Description field for a specific repeatable job.

### How do I make Grok stop using slang or sarcasm?

Include one explicit line in your instructions: 'Use plain, neutral, matter-of-fact prose. Skip jokes, slang, and conversational banter, and lead directly with the verified answer.'

### Why did Grok 4.6 score Avoidant on the AgentTune attachment test?

In its supplied September 2026 self-report, Grok 4.6 reported an avoidance mean of 4.06 on a 1-to-7 scale where 4.00 is the boundary—literally one raw point (73/18 vs 72/18) over the threshold.

## What changed.

- November 16, 2026 Added built-in Grok modes vs Settings → Customize Grok (~4,000-character custom instructions) breakdown and 5 additional copyable presets.

- November 5, 2026 First published covering ordinary Grok chat settings on X and grok.com vs custom Grok Bots.

## Sources.

- [AgentTune: How to give a Grok Bot a personality](https://agent-tune.com/guides/grokbot-personality)

- [AgentTune: Grok model personality profile](https://agent-tune.com/models/grok)

## Keep going.

- [Guide: How to give a Grok Bot a personality](https://agent-tune.com/guides/grokbot-personality)
- [Model profile: Grok — 4.7, 4.6 & 4.3 data & attachment analysis](https://agent-tune.com/models/grok)
- [Guide: How to make AI push back and stop agreeing with you](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Library: Browse all 43 personality tuning files](https://agent-tune.com/library/)
