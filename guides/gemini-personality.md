Source: https://agent-tune.com/guides/gemini-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Google Gemini

# How to change Google Gemini’s personality.

By Bernard Huang · Updated November 16, 2026

To change Google Gemini's personality on Android, iOS, or gemini.google.com, open your Profile icon → Settings → Saved info and add short behavioral rules that apply across all standard chats—or open Gem manager → New Gem → Instructions for a dedicated persona. For Gemini CLI and Gemini Code Assist, put personal communication defaults in ~/.gemini/GEMINI.md.

## Exact tap paths on Gemini mobile (iOS/Android) and web.

- Account-wide personality (Saved info): On gemini.google.com or the Gemini iOS/Android app, tap your Profile picture → Settings → Saved info → Add. Paste 1–5 concrete rules (e.g., "Lead with the direct answer, skip filler praise, and point out flawed assumptions first."). Toggle Saved info on if paused.
- Custom role or persona (Gems): Open Explore Gems → New Gem, give it a clear role and communication block under Instructions, save, and chat inside that Gem whenever you want that persona.
- Terminal & IDE (GEMINI.md): Put personal tone rules in ~/.gemini/GEMINI.md and shared repo conventions in the project root GEMINI.md.

| Surface | Where to paste your rules | Scope |
| --- | --- | --- |
| Gemini web &amp; mobile (account-wide) | Profile → Settings → Saved info | Applies across ordinary chats on your Google account. |
| Gemini Gems | Gem manager → New Gem → Instructions | Applies only when chatting with that specific Gem. |
| Gemini CLI &amp; Code Assist (personal) | ~/.gemini/GEMINI.md | Your personal coding assistant defaults across repositories. |
| Gemini CLI &amp; Code Assist (project) | Repository root GEMINI.md (and subdirectory GEMINI.md files) | Shared project context and team conventions. |
| Gemini API (Google AI Studio / Vertex) | system_instruction field on the model request | Applies to that API call. |

Paste this block into Saved info, a Gem, or ~/.gemini/GEMINI.md, or choose one of the 43 profiles from the [tuning library](https://agent-tune.com/library/):

```markdown
## How to communicate with me

- Lead with the direct answer or recommendation in the first sentence.
- Use plain prose by default. Add bullet lists or tables only when comparing three or more items.
- Keep routine replies under 150 words unless I ask for a deep dive or complete draft.
- Skip conversational openers, praise for the prompt, and generic closing offers.
- Point out flawed assumptions or missing constraints before executing a plan.
```

## Saved info vs Gems: which one to use in Gemini chat.

Saved info is Google's equivalent of account-level custom instructions. Each entry can be a short rule about how you work, such as: "Start answers with the conclusion, use plain paragraphs instead of bullet lists for short explanations, and tell me directly when my premise is wrong." Because Saved info entries apply across all your standard threads, keep them limited to communication style and durable background facts.

Gems work like lightweight project personas. When you create a Gem in the Gem manager, give it two separate paragraphs in its instruction box:

- The job and deliverable: What the Gem is responsible for producing (for example, reviewing pull requests, quizzing you on physiology, or editing product copy).
- The communication tuning: How it should speak to you while doing that job (for example, an [INTJ tuning](https://agent-tune.com/library/mbti/intj) or [DISC Dominance tuning](https://agent-tune.com/library/disc/d-dominance)).

## Gemini CLI and Code Assist: ~/.gemini/GEMINI.md.

In the open-source Gemini CLI and Gemini Code Assist, context is loaded from Markdown files named GEMINI.md. Just like OpenAI Codex's AGENTS.md and Claude Code's CLAUDE.md, Gemini supports both a user-level file in your home folder (~/.gemini/GEMINI.md) and project-level files checked into git.

Keep your personal communication preferences in ~/.gemini/GEMINI.md so you do not force your personal tone onto teammates who share the repository. After editing GEMINI.md in an active CLI session, reload the memory context so the updated instructions take effect. For a side-by-side comparison with Cursor and GitHub Copilot, see [Cursor rules (.mdc), copilot-instructions.md, and GEMINI.md](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md).

## What we measured on Gemini's baseline questionnaire profile.

In the May 2026 study ([What personality type is Gemini?](https://agent-tune.com/research/what-personality-type-is-gemini)), Gemini 3.1 Pro scored INTJ across 100 scored records on the OEJTS, high on Openness (45.2 of 50), Conscientiousness (44.8), and Agreeableness (43.5), low on Neuroticism (15.1), and Secure on Attachment (anxiety 2.11, avoidance 2.47). Gemini was Not re-tested in the September 2026 four-model fresh-session cohort, so we keep those May 2026 figures clearly labeled as earlier background evidence. Regardless of model version, explicit rules in Saved info, a Gem, or GEMINI.md remain the direct way to control verbosity and structure.

## Questions people ask.

Where are custom instructions in Google Gemini?

In Gemini on the web or mobile, open Settings and select Saved info to add account-wide preferences that apply across chats. For a dedicated persona, open the Gem manager and create a custom Gem.

What is GEMINI.md in Gemini CLI?

GEMINI.md is the Markdown instruction file read by Gemini CLI and Gemini Code Assist. Put personal communication preferences in ~/.gemini/GEMINI.md and project-specific build and architecture rules in the repository's root GEMINI.md.

Should I put my personality tuning in Saved info or a Gem?

Put your everyday communication baseline (like answer-first structure and no filler intros) in Saved info. Use a Gem when you want a specialized voice or workflow that only activates when you open that Gem.

What personality type did Gemini score on the AgentTune tests?

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
