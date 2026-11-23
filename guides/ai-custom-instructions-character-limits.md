Source: https://agent-tune.com/guides/ai-custom-instructions-character-limits
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Reference · Limits & Quotas

# AI custom instructions character limits (2026 cheat sheet).

By Bernard Huang · Updated November 17, 2026

Exact field lengths, byte caps, and file paths across ChatGPT, OpenAI Codex, Claude, Claude Code, Meta Muse, Gemini, Cursor, and Grok.

**Quick answer:** ChatGPT caps each Custom Instructions field at 1,500 characters, and OpenAI Codex caps combined AGENTS.md files at 32 KiB (32,768 bytes via project_doc_max_bytes). Claude Personal Preferences, Claude Projects, Claude Code, Meta Muse Soul.md, and Gemini Gems accept multi-paragraph Markdown without a 1,500-character cliff, though keeping rules between 500 and 1,200 characters improves instruction adherence.

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

Even when an app accepts large Markdown files, pasting thousands of words into global instructions hurts reply quality for three reasons:

- **Instruction dilution:** Every extra rule competes for attention with your live task prompt.
- **Over-literal compliance:** Newer reasoning models (like GPT-6 Astra and Claude Opus 5.5) follow system and `AGENTS.md` rules much more literally than older models did. All-caps“NEVER/ALWAYS” walls often cause agents to stop early or force a rigid format onto the wrong task.
- **Shared monorepo byte caps:** In OpenAI Codex, the 32 KiB `project_doc_max_bytes` budget is shared across `~/.codex/AGENTS.md`, the repo root `AGENTS.md`, and nested folder `AGENTS.md` files. Keeping your personal file under 1 KiB leaves 97% of the budget for repo build and test commands.

## A universal 580-character tuning block that fits every platform.

This 580-character block fits comfortably inside ChatGPT’s 1,500-character box and takes less than 2% of Codex’s 32 KiB budget:

```markdown
## Communication preferences

- Lead with the direct answer, conclusion, or recommendation in the first sentence.
- Match length to complexity; keep routine replies under 150 words.
- Use plain prose by default. Add bullet lists or tables only when comparing three or more items.
- Skip throat-clearing openers, flattery, and "let me know if you need anything else" closers.
- Push back directly when an assumption in my prompt is mistaken, and state why.
- Separate verified facts from inferences and flag material uncertainty in one line.
```

Want a version matched to your own personality profile? Open the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator) or pick any of the 43 profiles in the [library](https://agent-tune.com/library/) and select **ChatGPT · custom instructions** for a ready-to-paste compact block.

## Questions people ask.

### What is the character limit for ChatGPT Custom Instructions in 2026?

OpenAI documents a 1,500-character limit for the longer Custom Instructions fields under Settings, Personalization, Custom Instructions. Every profile in AgentTune includes a reviewed compact export under 1,500 characters.

### What is the byte limit for OpenAI Codex AGENTS.md?

Codex reads up to 32 KiB (32,768 bytes) combined across all AGENTS.md and AGENTS.override.md files in the directory chain, configured by project_doc_max_bytes.

### Do ChatGPT Project Instructions have the same 1,500-character limit?

No. Project Instructions inside a ChatGPT Project accept full multi-paragraph Markdown tunings and override your global Custom Instructions inside that project.

### How many rules should I put in Claude Personal Preferences or Meta Muse Soul.md?

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
- [Guide: Claude Personal Preferences: 15 examples and where to paste](https://agent-tune.com/guides/claude-personality)
