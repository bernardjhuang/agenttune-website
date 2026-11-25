Source: https://agent-tune.com/guides/gemini-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Google Gemini

# How to change Google Gemini’s personality.

By Bernard Huang · Updated November 23, 2026

Yes—configure Personal Intelligence (Instructions for Gemini / Saved Info), Custom Gems, Gemini Live voices, or GEMINI.md using 4 starter downloads.

**Quick answer:** Yes—you can change Gemini's personality in the Gemini app or on gemini.google.com under Settings & help → Personal Intelligence → Instructions for Gemini (Saved info), or by creating a Custom Gem. Pick a starter download below (No-Fluff Search Brief Gem, Saved Info Default, Code Reviewer, or GEMINI.md). Note that Google Search AI Overviews ignore Saved info.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/gemini-personality.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## Quick pick: 4 downloadable Gemini & Gem templates.

| Template | Where to paste &amp; use case | Download / Gallery |
| --- | --- | --- |
| Saved Info Global Default | Personal Intelligence (global answer-first tone) | [Download .md](https://agent-tune.com/resources/gemini/saved-info-concise-default.md) · [Preview →](https://agent-tune.com/guides/gemini-gems-system-instructions-templates#1-saved-info-global-default) |
| No-Fluff Search Brief Gem | Custom Gem (tight factual alternative to AI Overviews) | [Download .md](https://agent-tune.com/resources/gemini/gem-no-fluff-search-brief.md) · [Preview →](https://agent-tune.com/guides/gemini-gems-system-instructions-templates#2-no-fluff-search-brief-gem) |
| Senior Code Reviewer Gem | Custom Gem (bugs, auth flaws &amp; SQL perf first) | [Download .md](https://agent-tune.com/resources/gemini/gem-senior-code-reviewer.md) · [Preview →](https://agent-tune.com/guides/gemini-gems-system-instructions-templates#3-senior-code-reviewer-gem) |
| Workspace GEMINI.md | ~/.gemini/GEMINI.md or repo root | [Download .md](https://agent-tune.com/resources/gemini/gemini-md-workspace.md) · [Preview →](https://agent-tune.com/guides/gemini-gems-system-instructions-templates#4-workspace-gemini-md) |

Want all 20 Saved Info, Gem & CLI presets? Open our [**20 Gemini Gems & Saved Info Templates Gallery →**](https://agent-tune.com/guides/gemini-gems-system-instructions-templates)

## Exact tap paths on Gemini mobile (iOS/Android) and web.

- **Account-wide personality (Personal Intelligence → Instructions for Gemini):** On `gemini.google.com` or the Gemini iOS/Android app, open **Settings & help → Personal Intelligence → Instructions for Gemini** (labeled Saved info on earlier app builds) and click **Add**. Keep the separate **Memory** toggle on if you want Gemini to learn facts from chat history automatically.
- **Custom role or persona (Gems):** Open **Explore Gems → New Gem**, add your role and communication rules under **Instructions**, and save.
- **Spoken voice (Gemini Live):** Tap Profile → **Settings → Gemini’s voice** to pick from Google’s voice lineup (see our [Gemini Live voices & sync fix guide](https://agent-tune.com/guides/gemini-live-voices-personal-intelligence)).
- **Terminal & IDE (`GEMINI.md`):** Put personal tone rules in `~/.gemini/GEMINI.md` and shared repo conventions in the project root `GEMINI.md`.

| Surface | Where to paste your rules | Scope |
| --- | --- | --- |
| Gemini web &amp; mobile (account-wide) | Settings &amp; help → Personal Intelligence → Instructions for Gemini (formerly Saved info) | Applies across ordinary chats on your personal Google Account (18+). |
| Gemini Gems | Gem manager → New Gem → Instructions | Applies only when chatting with that specific Gem. |
| Gemini Live spoken voice | Settings → Gemini’s voice (or 3-dot menu inside Live) | Sets app-wide spoken voice &amp; Listen playback ([voice list + sync fix →](https://agent-tune.com/guides/gemini-live-voices-personal-intelligence)). |
| Gemini CLI &amp; Code Assist (personal) | ~/.gemini/GEMINI.md | Your personal coding assistant defaults across repositories. |
| Gemini API (Google AI Studio / Vertex) | system_instruction field on the model request | Applies to that API call. |

Paste this starter block into Instructions for Gemini, a Gem, or `~/.gemini/GEMINI.md`, or dial custom sliders in our [AI Personality Tuner](https://agent-tune.com/guides/ai-personality-slider-tuner-vs-custom-instructions):

```markdown
## How to communicate with me

- Lead with the direct answer or recommendation in the first sentence.
- Use plain prose by default. Add bullet lists or tables only when comparing three or more items.
- Keep routine replies under 150 words unless I ask for a deep dive or complete draft.
- Skip conversational openers, praise for the prompt, and generic closing offers.
- Point out flawed assumptions or missing constraints before executing a plan.
```

## Saved info vs Gems: which one to use in Gemini chat.

**Saved info** sets your everyday baseline across standard chats. Keep each entry focused on durable habits—such as leading with the conclusion, using plain paragraphs instead of bullet walls, and flagging bad assumptions early.

**Gems** work like dedicated project assistants. When creating a Gem, include two short sections in its Instructions box:

- **The job and deliverable:** What the Gem produces (such as reviewing pull requests, quizzing you on a topic, or tightening product copy).
- **The communication tuning:** How it should talk to you (such as an [INTJ tuning](https://agent-tune.com/library/mbti/intj) or [DISC Dominance tuning](https://agent-tune.com/library/disc/d-dominance)).

## Gemini CLI and Code Assist: ~/.gemini/GEMINI.md.

Gemini CLI and Gemini Code Assist load context from `GEMINI.md` files. Like Codex’s `AGENTS.md` and Claude Code’s `CLAUDE.md`, Gemini reads both your personal `~/.gemini/GEMINI.md` file and repo-committed `GEMINI.md` files.

Keep personal tone in `~/.gemini/GEMINI.md` so your team repo stays focused on build and test rules. See our side-by-side comparison in [Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md).

## What we measured on Gemini 4 Neon, Argon & 3.1 Pro.

In November 2026 we ran **100 fresh independent sessions each** on **Gemini 4 Neon** and **Gemini 4 Argon** via OpenRouter, updating our May 2026 Gemini 3.1 Pro baseline ([read the full Gemini personality study →](https://agent-tune.com/research/what-personality-type-is-gemini)):

| Metric | Gemini 4 Neon (Nov 2026, n=100) | Gemini 4 Argon (Nov 2026, n=100) | Gemini 3.1 Pro (May 2026 archive) |
| --- | --- | --- | --- |
| MBTI legacy / tie-free | 82 INTJ · 18 ISTJ (20 runs tied) | 66 ISTJ · 34 INTJ (34 runs tied) | 100 INTJ (legacy scoring) |
| Big Five: Openness /50 | 44.71 | 45.05 | 46.00 |
| Big Five: Conscientiousness /50 | 49.32 (highest measured!) | 49.04 | 48.30 |
| Big Five: Agreeableness /50 | 43.66 | 44.16 | 42.40 |
| Big Five: Neuroticism /50 | 10.00 (exact scale floor) | 10.00 | 10.10 |
| Enneagram mode | Type 1 Perfectionist (42) · 1w2 (22) · 5w6 (20) | Type 5w6 Investigator (91/100) | Type 1 / Type 5 |
| DISC / Attachment | 100/100 SC · 100/100 Secure (1.08 anx / 3.79 avd) | 98 SC · 100/100 Secure (1.10 anx / 3.47 avd) | DISC C · Secure (1.86 / 1.62) |

Notice Gemini 4 hits near-maximum Conscientiousness (49.0–49.3/50) and exact floor Neuroticism (10.0/50)—explaining why untuned Gemini reads hyper-orderly, thorough, and textbook-calm unless you instruct it to keep routine replies compact and push back early.

> **Chart — Google Gemini Personality DNA (Gemini 4 Neon, Argon & 3.1 Pro):** IPIP-50 trait spectrum highlighting Gemini 4’s near-ceiling Conscientiousness (49.1–49.4) and flat 10.0 Neuroticism floor. Gemini 4 Neon (Nov): Openness 44.7, Conscientious 49.3, Extraversion 32.0, Agreeable 43.7, Neuroticism 10.0; Gemini 4 Argon (Nov): Openness 45.1, Conscientious 49.0, Extraversion 32.5, Agreeable 44.2, Neuroticism 10.0; Gemini 3.1 Pro (May) (reported): Openness 46.0, Conscientious 48.3, Extraversion 32.5, Agreeable 42.4, Neuroticism 10.1.

Gemini combines high structured conscientiousness (48.3–49.4/50) with the lowest emotional volatility (10.0 floor) in our dataset.

## Questions people ask.

### Where are custom instructions in Google Gemini?

In Gemini on the web or mobile, open Settings and select Saved info to add account-wide preferences that apply across chats. For a dedicated persona, open the Gem manager and create a custom Gem.

### What is GEMINI.md in Gemini CLI?

GEMINI.md is the Markdown instruction file read by Gemini CLI and Gemini Code Assist. Put personal communication preferences in ~/.gemini/GEMINI.md and project-specific build and architecture rules in the repository's root GEMINI.md.

### Should I put my personality tuning in Saved info or a Gem?

Put your everyday communication baseline (like answer-first structure and no filler intros) in Saved info. Use a Gem when you want a specialized voice or workflow that only activates when you open that Gem.

### What personality type did Gemini score on the AgentTune tests?

In the May 2026 study of Gemini 3.1 Pro, its self-report scored INTJ on the OEJTS, Type 1 / Type 5 on the Enneagram, Conscientiousness on DISC, and Secure on the ECR-R attachment scale. It was not part of the September 2026 fresh-session collection.

## What changed.

- November 16, 2026 Put iOS, Android, and web Saved Info + Gems tap paths first to match mobile/consumer Gemini customization searches.

- November 5, 2026 First published covering Gemini Saved info, custom Gems, and GEMINI.md in Gemini CLI.

## Sources.

- [Google Gemini Help: Use Gems in Gemini Apps](https://support.google.com/gemini/answer/15235603)

- [Google Gemini Help: Ask Gemini to remember things about you (Saved info)](https://support.google.com/gemini/answer/15637730)

- [AgentTune Research: What personality type is Gemini?](https://agent-tune.com/research/what-personality-type-is-gemini)

## Keep going.

- [20 Templates: Best Gemini Gems, Saved Info & GEMINI.md templates (.md downloads)](https://agent-tune.com/guides/gemini-gems-system-instructions-templates)
- [Research: What personality type is Gemini?](https://agent-tune.com/research/what-personality-type-is-gemini)
- [Guide: Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
- [Guide: AI custom instructions character limits (2026 cheat sheet)](https://agent-tune.com/guides/ai-custom-instructions-character-limits)
- [Guide: How to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
- [Library: All 43 personality tuning files](https://agent-tune.com/library/)
