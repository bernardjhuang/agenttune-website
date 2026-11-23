Source: https://agent-tune.com/guides/google-ai-overview-gemini-tone-settings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Google & Gemini

# Can you change Google AI Overview's personality? What works (and what requires Gemini).

By Bernard Huang · Updated November 23, 2026

Google Search AI Overviews don't take a persistent system prompt—but AI Mode follow-ups, Gemini Saved Info, Gems, and GEMINI.md do.

**Quick answer:** No—Google Search does not have a permanent personality setting for automatic AI Overviews. You can steer one search by adding format words ('in 3 bullets, no intro') or asking a follow-up in Search AI Mode. For permanent tone and directness rules across sessions, save them in Google Gemini under Settings → Saved info, inside a custom Gem, or in ~/.gemini/GEMINI.md.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/google-ai-overview-gemini-tone-settings.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## What you can (and can't) control across Google's four AI surfaces.

| Google AI surface | Persistent personality setting? | What actually works today |
| --- | --- | --- |
| Google Search AI Overviews | No saved tone or system prompt. | Add format constraints to your search query (e.g., postgres vacuum tuning tradeoff table) or click the Web tab for raw links. |
| Google Search AI Mode | Session-level follow-ups only. | In the AI Mode follow-up bar, state your rule once: "Skip beginner definitions; answer in concise technical prose with primary sources." |
| Gemini app &amp; gemini.google.com | Yes — Saved info &amp; Gems. | Save account-wide response rules in Settings → Saved info, or build specialist personas as reusable Gems ([full Gemini setup guide](https://agent-tune.com/guides/gemini-personality)). |
| Gemini CLI &amp; Code Assist | Yes — GEMINI.md. | Store global communication rules in ~/.gemini/GEMINI.md and repo rules in project GEMINI.md ([file convention guide](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)). |

## Why Gemini's default voice feels formal and structured.

Google’s Search and Gemini models share a tidy, textbook-like default style: organized headings, cautious caveats, and bulleted summaries. In our November 2026 OpenRouter study (**n=100 fresh sessions each**; [full Gemini 4 study →](https://agent-tune.com/research/what-personality-type-is-gemini)), **Gemini 4 Neon** and **Gemini 4 Argon** scored:

- **Conscientiousness near the scale ceiling:** `49.32/50` (Neon) and `49.04/50` (Argon), with **Neuroticism at the exact floor of `10.00/50`**.
- **MBTI & Enneagram:** Neon scored `82 INTJ / 18 ISTJ` (Enneagram Type 1 Perfectionist), while Argon shifted to `66 ISTJ / 34 INTJ` (`91/100` Type 5w6).
- **Agreeableness:** `43.66–44.16/50`, with `100/100` Secure Attachment.

That ultra-conscientious profile explains why default summaries read like textbooks unless you constrain length and formatting inside a [No-Fluff Search Brief Gem](https://agent-tune.com/guides/gemini-gems-system-instructions-templates#2-no-fluff-search-brief-gem).

## Move recurring research from AI Overviews to Gemini Saved Info.

For technical, financial, or analytical questions, set up **Saved info** once at `gemini.google.com` (or in the Gemini mobile app under **Profile → Settings → Saved info**):

- Open **Gemini → Profile → Settings → Saved info**.
- Click **Add** and paste the compact block below.
- Ask a real technical question and check that sentence one states the direct answer.

```markdown
When answering me: lead with the direct answer or conclusion in sentence one. Assume technical familiarity and skip introductory definitions unless I ask. Default to concise prose; use tables only when comparing 3+ options. Separate verified primary-source facts from inference, flag material uncertainty explicitly, and push back if my premise has a flaw.
```

## Build a 'No-Fluff Search Brief' Gem in 60 seconds.

When you want Google-grounded web research without changing your everyday Gemini tone, create a dedicated **Gem** (**Gem manager → New Gem**) named Research Brief and paste:

```markdown
Role: Primary-source research analyst.

Rules:
1. Open with a 2-sentence answer to my question—no preamble.
2. Group supporting evidence into Verified Facts (with source names/dates) vs. Open Uncertainties.
3. Never pad answers with generic advice ('consult a professional', 'it depends on your needs') unless a specific safety risk applies.
4. End with the single highest-value follow-up check if data is incomplete.Or download the starter No-Fluff Search Brief Gem (.md) and browse 16+ more Gemini Gems & Saved Info templates →
```

## Questions people ask.

### Can I change the personality or tone of Google Search AI Overviews?

Not permanently. Google Search does not provide a saved custom-instructions or persona setting for automatic AI Overviews. You can steer an individual query with format keywords, ask a follow-up in Google Search AI Mode, or use Gemini Saved info for persistent tone rules.

### Where do I set permanent tone preferences in Google Gemini?

On gemini.google.com or the Gemini mobile app, open your Profile or Settings menu and select Saved info to add account-wide response rules, or create a reusable Gem in Gem manager.

### How do I make Gemini stop writing long introductions and bulleted walls?

Add two explicit lines to Gemini Saved info: 'Lead with the direct answer in the first sentence with no preamble' and 'Default to plain paragraphs; use bullet lists or tables only when comparing 3 or more items.'

### Does Gemini CLI read Saved info from the Gemini web app?

No. Gemini CLI is configured locally via Markdown files—put personal communication rules in ~/.gemini/GEMINI.md and repository conventions in your project's GEMINI.md.

## What changed.

- November 11, 2026 Published comparing Google Search AI Overviews, Search AI Mode, Gemini Saved info, Gems, and GEMINI.md.

## Sources.

- [Google Search Help: Find information faster with AI Overviews in Search](https://support.google.com/websearch/answer/14901683)

- [Google Gemini Help: Ask Gemini to remember things about you (Saved info)](https://support.google.com/gemini/answer/15637730)

- [AgentTune Research: What personality type is Google Gemini?](https://agent-tune.com/research/what-personality-type-is-gemini)

## Keep going.

- [Guide: How to give Google Gemini a personality (Saved info, Gems & GEMINI.md)](https://agent-tune.com/guides/gemini-personality)
- [Research: What personality type is Gemini? (INTJ, Type 1, DISC C data)](https://agent-tune.com/research/what-personality-type-is-gemini)
- [Guide: Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
- [Free browser tool: AI & Gemini Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator)
- [Guide: AI style & verbosity controls: rules that beat adjectives](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)
