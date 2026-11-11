Source: https://agent-tune.com/guides/ai-custom-instructions-character-limits
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Reference · Limits & Quotas

# AI custom instructions character limits (2026 cheat sheet).

By Bernard Huang · Updated November 5, 2026

ChatGPT's longer Custom Instructions fields are documented at 1,500 characters each. OpenAI Codex caps combined AGENTS.md files at 32 KiB (32,768 bytes, set by project_doc_max_bytes). Claude Personal Preferences, Claude Projects, Claude Code output styles, Meta Muse Soul.md, and Gemini Gems accept full multi-paragraph Markdown blocks without a 1,500-character cliff, though keeping rules under 1,200 characters improves instruction adherence.

## 2026 custom instructions limit & path reference table.

| Platform &amp; surface | Exact menu path or file location | Documented cap | Recommended tuning size |
| --- | --- | --- | --- |
| ChatGPT Custom Instructions | Settings → Personalization → Custom Instructions | 1,500 characters per longer field | 600–1,200 chars (use our [compact generator](https://agent-tune.com/tools/custom-instructions-generator)) |
| ChatGPT Projects | Project → Project Instructions | Multi-kilobyte Markdown (overrides account custom instructions in that project) | 800–2,000 chars |
| OpenAI Codex &amp; ChatGPT Work | ~/.codex/AGENTS.md + repo AGENTS.md / AGENTS.override.md | 32 KiB (32,768 bytes) combined across all files (project_doc_max_bytes) | Keep personal ~/.codex/AGENTS.md under 2 KiB |
| Claude Personal Preferences | Settings → General → Personal Preferences | Multi-paragraph text field (no 1,500-char lock) | 500–1,200 chars (6–10 bullets) |
| Claude Projects | Project → Project Instructions | Shared with project knowledge context window | 800–2,500 chars |
| Claude Code | ~/.claude/CLAUDE.md &amp; ~/.claude/output-styles/*.md | Local Markdown file loaded into session context | 600–1,800 chars with keep-coding-instructions: true |
| Meta Muse | Settings → Personalization → Assistant Identity → Soul.md | Editable Markdown file (alongside Identity.md and Memory.md) | 500–1,500 chars inside How to work with me |
| Google Gemini | Settings → Saved info, Gems, or ~/.gemini/GEMINI.md | Short individual memories in Saved info; full Markdown in Gems and GEMINI.md | 1–2 sentences per Saved info item; 600–1,500 chars in Gems |
| xAI Grok &amp; Grok Bot | Account response settings or Grok Bot Description | Compact text box in Bot Description; full system prompt in API | 500–1,200 chars |
| Cursor &amp; GitHub Copilot | .cursor/rules/*.mdc &amp; .github/copilot-instructions.md | Local repository Markdown files | 600–1,800 chars |

## Why shorter tunings beat 10,000-word prompt walls.

Even on surfaces that accept large Markdown files, stuffing thousands of words of personality lore into your global instructions hurts performance for three reasons:

- Instruction dilution: Every rule you add competes for attention with your actual task prompt and with the rules that matter most.
- Over-literal compliance in newer reasoning models: As OpenAI noted in its developer guidance for GPT-6 Astra, newer models listen much harder to system and AGENTS.md instructions than earlier generations did. Forceful, all-caps boundary paragraphs written for older models cause modern agents to halt early or over-apply a formatting rule where it does not belong.
- Silent byte-cap truncation in monorepos: In OpenAI Codex, the 32 KiB project_doc_max_bytes limit is shared across your global ~/.codex/AGENTS.md, the repo root AGENTS.md, and any nested folder AGENTS.md. A compact 700-byte personal tuning leaves over 97% of the budget free for repository build and test instructions.

## A universal 580-character tuning block that fits every platform.

This reviewed block is 580 characters (well under ChatGPT's 1,500-character cap and less than 2% of Codex's 32 KiB budget). Paste it anywhere:

```markdown
## Communication preferences

- Lead with the direct answer, conclusion, or recommendation in the first sentence.
- Match length to complexity; keep routine replies under 150 words.
- Use plain prose by default. Add bullet lists or tables only when comparing three or more items.
- Skip throat-clearing openers, flattery, and "let me know if you need anything else" closers.
- Push back directly when an assumption in my prompt is mistaken, and state why.
- Separate verified facts from inferences and flag material uncertainty in one line.
```

Need a version tailored to your own personality profile? Open the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator) or pick any of the 43 profiles in the [library](https://agent-tune.com/library/) and select ChatGPT · custom instructions for an automatic under-1,500-character export.

## Questions people ask.

What is the character limit for ChatGPT Custom Instructions in 2026?

OpenAI documents a 1,500-character limit for the longer Custom Instructions fields under Settings, Personalization, Custom Instructions. Every profile in AgentTune includes a reviewed compact export under 1,500 characters.

What is the byte limit for OpenAI Codex AGENTS.md?

Codex reads up to 32 KiB (32,768 bytes) combined across all AGENTS.md and AGENTS.override.md files in the directory chain, configured by project_doc_max_bytes.

Do ChatGPT Project Instructions have the same 1,500-character limit?

No. Project Instructions inside a ChatGPT Project accept full multi-paragraph Markdown tunings and override your global Custom Instructions inside that project.

How many rules should I put in Claude Personal Preferences or Meta Muse Soul.md?

Six to ten clear bullet points (roughly 500 to 1,200 characters) cover tone, answer order, formatting, and pushback without crowding out your task context.

## What changed.

- November 5, 2026 First published with 2026 character and byte limits across ChatGPT, Codex, Claude, Muse, Gemini, Cursor, and Grok.

## Sources.

- [OpenAI Help Center: Custom Instructions for ChatGPT](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

- [ChatGPT & Codex Docs: AGENTS.md configuration](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [Meta Help Center: Personalize your assistant in Meta Muse](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

## Keep going.

- [Guide: Project vs account instructions: what overrides what in AI](https://agent-tune.com/guides/ai-instruction-precedence-overrides)
- [Guide: OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Tool: Free Custom Instructions Generator (compact 1,500-char export)](https://agent-tune.com/tools/custom-instructions-generator)
- [Guide: ChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
- [Guide: Claude Personal Preferences: 15 examples and where to paste](https://agent-tune.com/guides/claude-personal-preferences-examples)
