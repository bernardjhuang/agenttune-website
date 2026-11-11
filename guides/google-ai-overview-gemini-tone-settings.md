Source: https://agent-tune.com/guides/google-ai-overview-gemini-tone-settings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Google & Gemini

# Can you change Google AI Overview's personality? What works (and what requires Gemini).

By Bernard Huang · Updated November 11, 2026

No—Google Search does not offer a persistent personality or custom-instructions setting for automatic AI Overviews on the search results page. You can steer a single query by adding format words ('in 3 bullets, no intro') or asking a follow-up in Google Search AI Mode, and if you want permanent tone, directness, and anti-hedging rules across every session, set them in Google Gemini under Settings → Saved info, inside a custom Gem, or in GEMINI.md.

## What you can (and can't) control across Google's four AI surfaces.

| Google AI surface | Persistent personality setting? | What actually works today |
| --- | --- | --- |
| Google Search AI Overviews | No saved tone or system prompt. | Append explicit constraints to your search query (e.g., postgres vacuum tuning tradeoff table) or switch to the Web filter tab when you only want raw links. |
| Google Search AI Mode | Session-level follow-ups only. | In the AI Mode follow-up bar, state your rule once: "Skip beginner definitions; answer in concise technical prose with primary sources." |
| Gemini app &amp; gemini.google.com | Yes — Saved info &amp; Gems. | Save account-wide response rules in Settings → Saved info, or build specialist personas as reusable Gems ([full Gemini setup guide](https://agent-tune.com/guides/gemini-personality)). |
| Gemini CLI &amp; Code Assist | Yes — GEMINI.md. | Store global communication rules in ~/.gemini/GEMINI.md and repo rules in project GEMINI.md ([file convention guide](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)). |

## Why Gemini's default voice feels formal and structured.

Google's Search and Gemini models share a recognizable house register: organized headings, cautious framing, and structured summaries. When we ran 100 independent fresh sessions per questionnaire on Gemini 3.1 Pro in our [Gemini personality study](https://agent-tune.com/research/what-personality-type-is-gemini), its self-report landed on:

- MBTI (OEJTS): INTJ in 100/100 runs.
- Enneagram (OEPS): Type 1 — The Reformer (1w9), reflecting a strong tilt toward structure, accuracy, and rule-following rather than casual banter.
- DISC (ODAT) & Attachment (ECR-R): Pure Conscientiousness (C) and Secure attachment, alongside high Big Five Openness (42/50) and Conscientiousness (41/50).

That default explains why untuned Gemini answers often read like a tidy textbook section—helpful for study guides, too wordy when you just want a two-line command or blunt critique.

## Move recurring research from AI Overviews to Gemini Saved Info.

If you find yourself constantly fighting Google AI Overviews on technical, financial, or analytical questions, set up Saved info once at gemini.google.com (or in the Gemini mobile app under your Profile avatar → Saved info) so every Gemini conversation starts pre-tuned:

- Open Gemini → Settings / Profile → Saved info.
- Click Add and paste one rule per entry—or paste the compact block below as a single Saved info card.
- Test a real question you searched earlier today and compare the opening sentence.

```markdown
When answering me: lead with the direct answer or conclusion in sentence one. Assume technical familiarity and skip introductory definitions unless I ask. Default to concise prose; use tables only when comparing 3+ options. Separate verified primary-source facts from inference, flag material uncertainty explicitly, and push back if my premise has a flaw.
```

## Build a 'No-Fluff Search Brief' Gem in 60 seconds.

When you want Google-grounded web synthesis without giving up your everyday Gemini voice, create a dedicated Gem (Gem manager → New Gem) named Research Brief and paste:

```markdown
Role: Primary-source research analyst.

Rules:
1. Open with a 2-sentence answer to my question—no preamble.
2. Group supporting evidence into Verified Facts (with source names/dates) vs. Open Uncertainties.
3. Never pad answers with generic advice ('consult a professional', 'it depends on your needs') unless a specific safety risk applies.
4. End with the single highest-value follow-up check if data is incomplete.
```

Want to build a custom block matched to your own preferences? Open our [free Gemini & AI Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator?target=gemini-gems).

## Questions people ask.

Can I change the personality or tone of Google Search AI Overviews?

Not permanently. Google Search does not provide a saved custom-instructions or persona setting for automatic AI Overviews. You can steer an individual query with format keywords, ask a follow-up in Google Search AI Mode, or use Gemini Saved info for persistent tone rules.

Where do I set permanent tone preferences in Google Gemini?

On gemini.google.com or the Gemini mobile app, open your Profile or Settings menu and select Saved info to add account-wide response rules, or create a reusable Gem in Gem manager.

How do I make Gemini stop writing long introductions and bulleted walls?

Add two explicit lines to Gemini Saved info: 'Lead with the direct answer in the first sentence with no preamble' and 'Default to plain paragraphs; use bullet lists or tables only when comparing 3 or more items.'

Does Gemini CLI read Saved info from the Gemini web app?

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
- [Guide: AI style & verbosity controls: rules that beat adjectives](https://agent-tune.com/guides/ai-persona-style-controls-register-verbosity)
