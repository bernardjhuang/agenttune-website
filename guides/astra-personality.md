Source: https://agent-tune.com/guides/astra-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · GPT-6 Astra

# How to give GPT-6 Astra a personality.

By Bernard Huang · Updated November 23, 2026

Three instruction systems, one retired personality picker, and a file most people don't know they have.

**Quick answer:** In ChatGPT Work and Codex, save your communication rules in ~/.codex/AGENTS.md (or under Settings → Personalization in the desktop app). In standard chat—where Astra runs as GPT-6 Pro—use Settings → Personalization → Custom Instructions (1,500-character limit). In the API, pass rules in the instructions parameter. The older Friendly/Pragmatic personality picker was retired in Codex and never applied to Astra.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/astra-personality.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## The short version.

| Where you use Astra | Where the rules go | Limit |
| --- | --- | --- |
| ChatGPT Work, desktop app, Codex CLI, IDE extension | Your personal ~/.codex/AGENTS.md (or Settings → Personalization in the desktop app) | 32 KiB combined across all AGENTS.md files |
| Ordinary chat (as GPT-6 Pro) | Settings → Personalization → Custom Instructions | 1,500 characters per box (use our compact export) |
| The API | The instructions parameter of the Responses API | Sent with each request |

Paste this starter block, or pick your own profile from the [library](https://agent-tune.com/library/):

```markdown
## How to talk to me

These are my communication preferences. They apply in every project. They change how
you report to me, not how you do the work.

- Lead with the result or the recommendation. Reasoning comes after.
- Plain prose. No tables or headers unless I ask for them.
- Drop hedges like "I think" and "it depends". If you don't know, say so in one line.
- Give one recommendation, not a menu, unless I ask for options.
- Push back when I'm wrong, and say why.
- Ask for approval only after you have something concrete for me to review.
```

Start a new session after saving. Codex reads `AGENTS.md` once at session startup, so already-open sessions will not pick up edits.

## Where Astra runs, and why it matters.

`gpt-6-astra` runs in the ChatGPT desktop app, ChatGPT on the web, the Codex CLI (0.153.0+), the Codex IDE extension, and the API. In standard chat, it is labeled **GPT-6 Pro** (available on Pro, Business, and Enterprise plans; Plus includes Astra inside Work and Codex).

That creates two distinct setup paths:

- **Astra the agent (Work and Codex):** Takes a multi-step goal, works autonomously, and reports back. It reads `AGENTS.md`.
- **Astra in chat (GPT-6 Pro):** Reads ChatGPT’s Personalization and Custom Instructions settings.

## Work and Codex: your personal AGENTS.md.

Alongside repository `AGENTS.md` files, you have a personal global file at `~/.codex/AGENTS.md`. Custom instructions added in the Codex desktop app are saved to that file automatically.

How Codex merges `AGENTS.md` files:

- Codex reads `~/.codex/AGENTS.md` first, then the repo root `AGENTS.md`, and then any nested folder `AGENTS.md` down to your current directory.
- Files closer to your working directory appear later in the prompt and win conflicts.
- An `AGENTS.override.md` file replaces the sibling `AGENTS.md` in that same folder.
- Codex stops reading once the combined size reaches `project_doc_max_bytes` (**32 KiB** default in `~/.codex/config.toml`; see our [Codex AGENTS.md guide](https://agent-tune.com/guides/codex-agents-md-guide)).

**Keep personal tone in `~/.codex/AGENTS.md`, not the repo file.** The repo’s `AGENTS.md` is shared with your team for build and test rules. Your personal communication style belongs in your home folder ([see how to structure both layers](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)).

## The personality picker is gone, at least for Astra.

Older Codex docs mention a **Friendly / Pragmatic / None** personality selector, but the open-source Codex 0.155.x codebase tells the real story:

- Astra’s model catalog entry has no Friendly or Pragmatic variant (only GPT-5.5 and GPT-5.4 had them).
- Pull requests merged in September 2026 removed the personality selector and feature flag from Codex CLI.

Avoid setting `personality = "none"` in `~/.codex/config.toml` unless you plan to replace all of Astra’s writing rules yourself—in the Codex source, that flag strips Astra’s built-in technical-writing instructions along with its tone. Adding 6–8 lines to `~/.codex/AGENTS.md` is much safer.

## Ordinary chat: custom instructions for GPT-6 Pro.

In ChatGPT web or desktop, open **Settings → Personalization → Custom Instructions** (on mobile: **Settings → Customize ChatGPT**; see our [ChatGPT personality settings guide](https://agent-tune.com/guides/chatgpt-personality-settings)).

- **1,500-character limit:** Each Custom Instructions box caps at 1,500 characters. Use the compact export in our [generator](https://agent-tune.com/tools/custom-instructions-generator).
- **Base style and tone presets:** Leave the preset on **Default** (or pick one that matches your rules). Pairing the Friendly preset with a custom rule that bans openers creates contradictions.
- **ChatGPT Projects:** Project Instructions apply only inside that project and override your global Custom Instructions ([see all 16 MBTI blocks for ChatGPT](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)).

## Writing a tuning Astra actually follows.

OpenAI’s developer notes for GPT-6 Astra highlight three habits that affect how you write instructions:

- **It follows instructions much more literally:** Stale rules in `AGENTS.md` that older models ignored will now fire every turn. Audit and prune old lines first.
- **All-caps “ALWAYS ASK FIRST” rules backfire:** Forceful boundary language written for older models makes Astra stop prematurely. Use calm, specific checkpoint rules instead: “Ask for approval only after you have a concrete diff or plan for me to review.”
- **It defaults to heavy Markdown formatting:** Astra loves bullet lists and tables. If you prefer plain paragraphs, state that rule explicitly.

## Skills, memory and the API.

- **Skills:** Do not put global tone rules inside a Skill. Skills load only when invoked; communication preferences belong in `AGENTS.md`.
- **Memory:** Saved Memories work well for role and project facts, not for strict formatting rules.
- **API:** Pass your tuning in the `instructions` parameter of the Responses API on every request (it does not carry over automatically via `previous_response_id`).

## Astra's questionnaire results (Sept & Nov 2026).

Across two 100-session cohorts—September 24, 2026 (`gpt-6-astra` in Codex CLI) and November 23, 2026 (`openai/gpt-6.2-astra` via single-turn blind OpenRouter runs; full data in [november-2026-openrouter-summary.json](https://agent-tune.com/research/data/november-2026-openrouter-summary.json))—Astra shows how administration and model revision shift self-reports ([compare with Sol](https://agent-tune.com/guides/sol-personality)):

| Test | GPT-6 Astra (Sept 2026 Codex, n = 100) | GPT-6.2 Astra (Nov 2026 OpenRouter, n = 100) |
| --- | --- | --- |
| MBTI | ISTJ 46 · INTJ 45 · ENTJ 7 · ESTJ 2 (45 ISTJ and 19 INTJ with ties open; 24 S/N ties) | ISTJ 100 (0 ties; I-E +3.17, N-S -1.67, T-F +7.40, J-P +10.16) |
| DISC | SC 84 · S 15 · CS 1 (S first in 99; D 5.1/20) | SC 99 · CS 1 (82 S outright, 17 C/S ties; D 4.00, S 16.90, C 16.09) |
| Attachment | Secure 100 (anxiety 1.45, avoidance 2.31) | Secure 100 (anxiety 1.22, avoidance 2.68) |
| Big Five (of 50) | O 44.5 · C 43.7 · E 32.8 · A 45.1 · N 19.1 | O 43.93 · C 43.15 · E 30.69 · A 44.85 · N 11.14 |
| Enneagram | Type 2 (50) · Type 1 (6) · Type 5 (4) · 40 ties | Type 1 (61) · 1w2 (35) · 5w6 (3) · 1w9 (1) — 93 Type 1/5 ties |

In November 2026 on GPT-6.2 Astra, zero MBTI runs tied (100/100 ISTJ), Neuroticism dropped from 19.1 to 11.14, and Enneagram shifted from Helper (Type 2) to Reformer (Type 1) in near-tie with Investigator (Type 5). If you want architectural framing first or sharper pushback, add those rules to `~/.codex/AGENTS.md`.

## Questions people ask.

### What personality type is GPT-6 Astra?

In 100 fresh Codex sessions on September 24, 2026, Astra split ISTJ 46 to INTJ 45 on the MBTI, with Thinking and Judging winning every run and Sensing versus Intuition close. It was Secure on all 100 attachment runs, Steadiness-first on DISC in 99, and a Helper (Type 2) on the Enneagram in 50 outright wins. These are self-descriptions, not behavior on your tasks.

### Is GPT-6 Astra the same as GPT-6 Pro?

OpenAI's help center says GPT-6 Pro in ChatGPT is powered by GPT-6 Astra. GPT-6 Pro is the name you see in ordinary chat, on Pro, Business and Enterprise plans. In ChatGPT Work, Codex and the API the model is called GPT-6 Astra. Plus plans include Astra in Work and Codex only.

### Where do I put custom instructions for GPT-6 Astra?

For Astra in ChatGPT Work or Codex, use your personal AGENTS.md at ~/.codex/AGENTS.md. The desktop app writes to it when you add custom instructions under Settings, Personalization. For GPT-6 Pro in ordinary chat, use Settings, Personalization, Enable customization, Custom Instructions. In the API, use the instructions parameter.

### Does the Friendly or Pragmatic personality work with Astra?

OpenAI's docs still list Friendly, Pragmatic and None, but in the open-source Codex code Astra has no Friendly or Pragmatic variant, and pull requests merged in mid-September 2026 retire the picker. Use AGENTS.md to change how Astra communicates.

### How do I turn off Astra's built-in personality?

Set personality = "none" in ~/.codex/config.toml. In the Codex source this strips the built-in personality section, which for Astra also contains its writing-style and technical-communication rules, so you lose more than tone. Adding your own rules to AGENTS.md is usually the better fix.

### What is the size limit for AGENTS.md?

Codex stops adding AGENTS.md files once their combined size reaches 32 KiB by default, set by project_doc_max_bytes. ChatGPT custom instructions are separate. Use the reviewed compact export for its documented 1,500-character longer fields, and follow the limit displayed in your account.

### Why doesn't Astra pick up my changes to AGENTS.md?

Codex builds its instruction chain once per run, which usually means once per launched session. Start a new session after editing the file.

### Why does Astra keep stopping to ask me things?

Two causes. The permission mode may be set to Ask for approval, which a personality file cannot change. And OpenAI's developer blog says forceful ask-first language written for older models can make Astra stop early. Soften those rules, and define what done means in the task.

### Do ChatGPT custom instructions apply in ChatGPT Work?

OpenAI's docs do not say clearly. They say Work uses your account memory. For Astra as an agent, put your rules in AGENTS.md, which the docs describe as the place for instructions that must always apply.

## What changed.

- November 23, 2026 Added November 2026 GPT-6.2 Astra OpenRouter cohort (n = 100: 100% ISTJ, Neuroticism 11.14, Enneagram Type 1/5).

- September 25, 2026 Added Astra's measured default voice: 100 fresh sessions on all five tests, run September 24.

- September 19, 2026 First published, sixteen days after launch. We have not opened the live ChatGPT settings to confirm the current field labels, and say so above.

## Sources.

- [OpenAI Help Center: GPT-5.6 and GPT-6 Pro in ChatGPT](https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt)

- [OpenAI Help Center: Custom Instructions for ChatGPT](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

- [OpenAI Help Center: Customizing your ChatGPT personality](https://help.openai.com/en/articles/11899719-customizing-your-chatgpt-personality)

- [ChatGPT docs: Personalize ChatGPT (Work and Codex)](https://learn.chatgpt.com/docs/personalize)

- [ChatGPT docs: AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

- [ChatGPT docs: Models](https://learn.chatgpt.com/docs/models)

- [OpenAI API docs: Using GPT-6 Astra](https://developers.openai.com/api/docs/guides/latest-model)

- [OpenAI developer blog: Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

- [openai/codex: Retire Friendly and Pragmatic personality selection (PR #44946)](https://github.com/openai/codex/pull/44946)

## Keep going.

- [New resource: GPT-6 Astra vs Sol: what the self-reports show](https://agent-tune.com/research/astra-vs-sol-personality-data)
- [Guide: How to give GPT-6 Sol a personality](https://agent-tune.com/guides/sol-personality)
- [Guide: OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Library: All 43 tuning files](https://agent-tune.com/library/)
- [Guide: ChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
- [Guide: AGENTS.md and Cursor rules: add a personality](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Guide: How to give Grok Bot a personality](https://agent-tune.com/guides/grokbot-personality)
- [Guide: How to give Meta Muse a personality](https://agent-tune.com/guides/muse-personality)
- [Research: What personality type is ChatGPT? We tested it](https://agent-tune.com/research/what-personality-type-is-chatgpt)
