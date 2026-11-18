Source: https://agent-tune.com/guides/gemini-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Google Gemini

# How to change Google Gemini’s personality.

By Bernard Huang · Updated November 17, 2026

Exact iOS, Android, and web tap paths for Saved Info and custom Gems—plus ~/.gemini/GEMINI.md for Gemini CLI and Code Assist.

**Quick answer:** To change Google Gemini's personality on Android, iOS, or gemini.google.com, tap your Profile icon → Settings → Saved info and add short behavioral rules for all standard chats—or open Gem manager → New Gem → Instructions for a dedicated persona. For Gemini CLI and Code Assist, save personal communication rules in ~/.gemini/GEMINI.md.

## Exact tap paths on Gemini mobile (iOS/Android) and web.

- **Account-wide personality (Saved info):** On `gemini.google.com` or the Gemini iOS/Android app, tap your **Profile picture → Settings → Saved info → Add**. Paste 1–5 short rules (for example, “Lead with the direct answer, skip filler praise, and point out flawed assumptions first.”).
- **Custom role or persona (Gems):** Open **Explore Gems → New Gem**, add your role and communication rules under **Instructions**, and save.
- **Terminal & IDE (`GEMINI.md`):** Put personal tone rules in `~/.gemini/GEMINI.md` and shared repo conventions in the project root `GEMINI.md`.

| Surface | Where to paste your rules | Scope |
| --- | --- | --- |
| Gemini web &amp; mobile (account-wide) | Profile → Settings → Saved info | Applies across ordinary chats on your Google account. |
| Gemini Gems | Gem manager → New Gem → Instructions | Applies only when chatting with that specific Gem. |
| Gemini CLI &amp; Code Assist (personal) | ~/.gemini/GEMINI.md | Your personal coding assistant defaults across repositories. |
| Gemini CLI &amp; Code Assist (project) | Repository root GEMINI.md (and subdirectory GEMINI.md files) | Shared project context and team conventions. |
| Gemini API (Google AI Studio / Vertex) | system_instruction field on the model request | Applies to that API call. |

Paste this starter block into Saved info, a Gem, or `~/.gemini/GEMINI.md`, or pick any of the 43 profiles in the [tuning library](https://agent-tune.com/library/):

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

## What we measured on Gemini's baseline questionnaire profile.

In the May 2026 study ([What personality type is Gemini?](https://agent-tune.com/research/what-personality-type-is-gemini)), Gemini 3.1 Pro scored **INTJ in all 100 scoring records** on the OEJTS, high on Openness (46.0/50), Conscientiousness (48.3/50), and Agreeableness (42.4/50), low on Neuroticism (10.1/50), and **Secure on Attachment** (anxiety 1.86, avoidance 1.62). Because Gemini was not re-tested in the September 2026 fresh-session study, treat those May figures as historical self-reports and test your Saved info or Gem rules directly on real tasks.

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

- [Research: What personality type is Gemini?](https://agent-tune.com/research/what-personality-type-is-gemini)
- [Guide: Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
- [Guide: AI custom instructions character limits (2026 cheat sheet)](https://agent-tune.com/guides/ai-custom-instructions-character-limits)
- [Guide: How to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
- [Library: All 43 personality tuning files](https://agent-tune.com/library/)
