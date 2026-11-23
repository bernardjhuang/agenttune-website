Source: https://agent-tune.com/guides/gemini-live-voices-personal-intelligence
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide & Picker · Gemini Live

# Google Gemini Live voices and Personal Intelligence: voice list, setup, and sync fix.

By Bernard Huang · Updated November 20, 2026

Pick a Gemini voice (including female, male, and British Capella), configure Instructions for Gemini, and fix the bug where Gemini Live skips saved rules.

**Quick answer:** To change Gemini's voice on Android or iOS, open the Gemini app → Profile → Settings → Gemini's voice (or tap the three-dot menu inside an active Gemini Live session) and select voices like Ursa, Vega, Capella (British), Eclipse, Dipper, Pegasus, Orbit, Orion, Flare, or Glow. Put permanent tone rules under Settings & help → Personal Intelligence → Instructions for Gemini.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/gemini-live-voices-personal-intelligence.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## Filter Gemini Live voices and copy a Personal Intelligence block.

Filter Gemini’s voice lineup by register or British accent, then copy a combined Personal Intelligence block plus a 1-line Gemini Live context seeder:

Loading interactive Gemini voice filter…

Enable JavaScript to filter voices interactively, or read the complete voice table and sync fix below.

## Gemini Live voice options (female, male, British & refreshed voices).

Google shifted Gemini’s voice picker from a horizontal carousel to a vertical list and has gradually replaced early names like Lyra and Nova with refreshed voices such as **Flare** and **Glow** depending on app version and region:

| Voice | Register &amp; cadence | Best paired with |
| --- | --- | --- |
| Ursa | Female · Engaged, mid-range | Balanced everyday assistant conversations |
| Vega | Female · Bright, higher-pitched | Crisp factual Q&amp;A and quick lookups |
| Capella | Female · British accent, serene | Reading summaries, study sessions, and calm critique |
| Eclipse | Female · Energetic, mid-range | Brainstorming and active coaching |
| Dipper / Pegasus | Male · Engaged, deeper | Structured work planning and steady walkthroughs |
| Orbit / Orion | Male · Energetic or bright, deeper | Technical explanations and high-momentum ideation |
| Flare / Glow | Female · Refreshed lineup | Updated lively (Flare) and calm (Glow) replacements for Lyra/Nova |

Tip: If a newly picked Gemini voice reverts on Android, switch temporarily to a different voice and back, or clear the Gemini app cache to force an account sync.

## Fix: why Gemini Live ignores saved Personal Intelligence rules (and the 10-second workaround).

Many users add crisp tone rules under **Settings & help → Personal Intelligence → Instructions for Gemini** (formerly Saved info) and see them work in text chats—only for **Gemini Live** to revert to chatty, verbose replies.

**Why it happens:** Gemini Live uses low-latency streaming models that occasionally fail to hydrate background Personal Intelligence entries automatically on cold start.

**The 10-second fix:** Before tapping the Live icon, send one text message in that chat:

```markdown
What instructions have I saved under Personal Intelligence? List them in two short lines and follow them when I switch to Live mode now.
```

Once Gemini echoes your rules back into the active conversation window, tap **Gemini Live**—the voice session inherits the active thread context immediately.

## Questions people ask.

### How do I change Google Gemini's voice on Android or iOS?

Open the Gemini app, tap your profile picture → Settings → Gemini's voice, preview the options (including female, male, and British Capella), and tap Select. You can also switch voices mid-session via the three-dot menu inside Gemini Live.

### Where did Gemini 'Saved info' move?

Google groups Saved info and chat Memory under Settings & help → Personal Intelligence, with separate toggles for Instructions for Gemini (manual rules) and Memory (facts learned from chats). Note that work, school, and supervised accounts may restrict these toggles.

### Which Gemini voice has a British accent?

Capella offers a serene, higher-pitched British accent in Gemini's core voice lineup, alongside expanded regional accents rolling out in newer Gemini app updates.

### How do I make Gemini Live stop talking so much?

Add a spoken-length rule ('Keep spoken answers to 2–4 sentences and lead with the takeaway') under Personal Intelligence → Instructions for Gemini, and seed the text thread before launching Live if it forgets.

## What changed.

- November 20, 2026 First published covering Gemini Live voices (Ursa through Flare/Glow), Personal Intelligence menu paths, and the Live context-sync workaround.

## Sources.

- [Google Gemini Help: Change Gemini's voice](https://support.google.com/gemini/)

- [Google Gemini Help: Personal Intelligence & Saved info](https://support.google.com/gemini/answer/15637730)

- [AgentTune Guide: How to Change Google Gemini's Personality](https://agent-tune.com/guides/gemini-personality)

## Keep going.

- [Guide: How to change Gemini's personality (Personal Intelligence, Gems & GEMINI.md)](https://agent-tune.com/guides/gemini-personality)
- [Search AI: How to change Google AI Overview personality (what works)](https://agent-tune.com/guides/google-ai-overview-gemini-tone-settings)
- [Claude Voice: How to change Claude's voice (all 5 voices & tone)](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web)
- [ChatGPT Voice: ChatGPT Voice Mode: all 9 voices & tone setup](https://agent-tune.com/guides/chatgpt-voice-mode-voices-personality)
