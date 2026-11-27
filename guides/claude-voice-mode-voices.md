Source: https://agent-tune.com/guides/claude-voice-mode-voices
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Voice Mode

# How to change Claude’s voice (all 5 voices, female/male options & tone).

By Bernard Huang · Updated November 27, 2026 · [Markdown (.md)](https://agent-tune.com/guides/claude-voice-mode-voices.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** On iOS or Android, open Voice Mode (tap the waveform icon) and tap the bottom-left settings button—or go to Initials → Settings → Voice—to switch between Claude's 5 voices (Buttery, Airy, Mellow, Glassy, Rounded) and speech speed. On web or desktop, open Settings → Capabilities → Voice settings. To make Voice Mode give shorter spoken answers, add formatting rules in Settings → Profile → Personal preferences.

## How to change Claude’s voice on mobile, web, and desktop.

Claude Voice Mode offers five English voice presets along with speech speed controls (**Slow, Normal, Fast**):

- **On iOS & Android:** Tap the **Voice Mode waveform icon** next to the composer, then tap the **Settings button** at the bottom-left of the voice screen (or tap your initials → **Settings → Voice**) to preview all five voices and adjust playback speed.
- **On Web (`claude.ai`) & Claude Desktop:** Click your profile initials (bottom-left) → **Settings → Capabilities → Voice settings** (or **Settings → General** on older layouts) to pick and save your voice.

| Voice preset | Voice register (Female / Male / Accent) | Best paired with |
| --- | --- | --- |
| Buttery | Warm, smooth, conversational (female-leaning register) | Thinking out loud, brainstorming, and coaching |
| Airy | Light, brisk, crisp and neutral (female-leaning register) | Fast Q&A and concise factual lookups on the move |
| Mellow | Calm, measured, lower-pitch (male-leaning register) | Longer planning discussions and steady step-by-step pacing |
| Glassy | Clear, poised, slightly brighter articulation | Spoken summaries and technical walkthroughs |
| Rounded | Full, grounded British-accented inflection | Editorial critique and natural spoken dialogue |

Loading interactive Claude voice & tone matcher…

Enable JavaScript to use the interactive Claude voice matcher, or copy the spoken-tone rules below.

## Spoken audio voice vs. written Personal Preferences.

Changing a voice preset only changes pitch, cadence, and accent. Because Voice Mode reads Claude’s text output aloud, long markdown tables or multi-level bullet lists sound robotic when spoken. Pair your voice choice with a short **Personal preferences** block under **Settings → Profile → Personal preferences** (synced across mobile, web, and desktop), or open the full [Claude personality & 7 setups guide](https://agent-tune.com/guides/claude-personality).

```markdown
# Voice-Mode friendly brevity
- Answer in 2–4 natural spoken sentences first, then ask if I want detail.
- Avoid Markdown tables, deeply nested bullet lists, and raw URLs unless I ask.
- Lead with the takeaway cleanly without warm-up filler.
```

Want to customize this for both spoken chats and desktop workflows? Open the [Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?target=claude-personal)

## Compare Claude Voice Mode with ChatGPT and Gemini Live.

| Assistant | Available voice options | Spoken-tone guide |
| --- | --- | --- |
| Claude Voice Mode | 5 English voices (Buttery, Airy, Mellow, Glassy, Rounded) + Slow/Normal/Fast | [Written Personal Preferences →](https://agent-tune.com/guides/claude-personality) |
| ChatGPT Voice Mode | 9 voices (Sol, Cove, Maple, Vale, Arbor, Breeze, Ember, Juniper, Spruce) | [ChatGPT Voice Mode voices →](https://agent-tune.com/guides/chatgpt-voice-mode-voices-personality) |
| Google Gemini Live | App-wide Gemini Live voices synced under Settings → Gemini’s voice | [Gemini Live voices guide →](https://agent-tune.com/guides/gemini-live-voices-personal-intelligence) |

## What measured testing shows about spoken-ready brevity.

In our [60-reply controlled pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) (20 real tasks across default Claude, plain behavioral rules, and conversational framing), adding explicit concise rules lifted answer-first openings from **14/20 to 19/20**, cut hedges per reply from **0.35 to 0.05**, and dropped trailing follow-up questions from **0.90 to 0.25** without hurting task accuracy. Verify your settings in two fresh chats using the [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Questions people ask.

### How do I change Claude's voice to female or male, or pick a British accent?

Open Claude Voice Mode (tap the waveform icon) and tap the bottom-left settings button on mobile—or open Settings → Capabilities → Voice settings on web or desktop. Pick Buttery or Airy for female-leaning voices, Mellow for a calm male-leaning voice, Glassy for bright articulation, or Rounded for a British-accented cadence.

### How do I change Claude's voice on the iPhone or Android app?

Tap the Voice Mode waveform icon in the mobile composer and open its bottom-left settings icon, or tap your initials → Settings → Voice to pick Buttery, Airy, Mellow, Glassy, or Rounded and choose Slow, Normal, or Fast playback speed.

### Do my Claude Personal Preferences affect Voice Mode replies?

Yes. Personal Preferences sync across claude.ai web, desktop, and mobile apps. Keeping replies under 2–4 sentences with no Markdown tables makes Voice Mode conversations sound much more natural.

## What changed.

- November 27, 2026 Promoted standalone Claude Voice Mode voices & speed guide (replacing redirect to general Claude personality guide).

- November 11, 2026 Initial Voice Mode presets (Buttery, Airy, Mellow, Glassy, Rounded) and mobile/web menu paths.

## Sources.

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [AgentTune Guide: How to change Claude's personality](https://agent-tune.com/guides/claude-personality)

- [AgentTune Study: Does personality tuning change AI answers?](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

## Keep going.

- [Pillar guide: Change Claude's personality: Settings & 7 prompts](https://agent-tune.com/guides/claude-personality)
- [Comparison: ChatGPT Voice Mode: all 9 voices & tone](https://agent-tune.com/guides/chatgpt-voice-mode-voices-personality)
- [Comparison: Google Gemini Live voices & Personal Intelligence sync](https://agent-tune.com/guides/gemini-live-voices-personal-intelligence)
- [Free builder: Custom Instructions Generator for Claude](https://agent-tune.com/tools/custom-instructions-generator?target=claude-personal)
