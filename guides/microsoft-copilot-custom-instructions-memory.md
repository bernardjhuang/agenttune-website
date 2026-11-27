Source: https://agent-tune.com/guides/microsoft-copilot-custom-instructions-memory
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Microsoft Copilot

# Microsoft Copilot custom instructions, Memory, and tone settings.

By Bernard Huang · Updated November 20, 2026 · [Markdown (.md)](https://agent-tune.com/guides/microsoft-copilot-custom-instructions-memory.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** To set custom instructions in Microsoft Copilot, open Settings and more (…) → Chat settings → Personalization → Custom instructions, paste a 5–8 line rules block, and save. Manage saved facts separately under Personalization → Memory. Note that toggling Memory off only hides saved entries; delete old style items manually if they clash with your new instructions.

## Where Copilot personalization lives (Personal, Work & GitHub Copilot).

| Microsoft Copilot product | Where to paste your rules | Scope & key gotcha |
| --- | --- | --- |
| Microsoft Copilot Chat / M365 Copilot | Settings and more (…) → Chat settings → Personalization → Custom instructions | Applies to new Copilot chats on your Microsoft account or M365 tenant (if enabled by IT admin). |
| Copilot Memory | Personalization → Memory (view, edit, delete, or toggle off) | Turning Memory off stops using memories in replies but does not auto-wipe existing items—delete stale entries manually. |
| GitHub Copilot (VS Code / IDE) | `.github/copilot-instructions.md` & `.github/instructions/*.instructions.md` | Separate product from M365 Copilot; see our [GitHub Copilot rules guide](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md). |

## Five copy-paste Microsoft Copilot custom instruction templates.

Paste one block into **Personalization → Custom instructions**—or customize sliders live in our [6-Slider AI Personality Tuner](https://agent-tune.com/tools/custom-instructions-generator) (select the Microsoft Copilot export format):

### 1. Executive Brief (M365 emails, Teams & slide recaps)

```markdown
## How to respond to me (Microsoft Copilot)

- Lead with the decision, recommendation, or bottom-line answer in the first sentence.
- Write in crisp, plain English; avoid corporate clichés, filler openings, and em-dash overuse.
- When summarizing Teams threads or emails, output three sections: Decisions, Blockers, and Action Items (with owner + due date).
- Separate confirmed facts from assumptions; flag missing information explicitly.
- Skip generic closing offers like "Let me know if you'd like me to draft an email."
```

### 2. Quantitative & Excel / Finance Analyst

```markdown
- State assumptions, denominators, and time ranges before reporting summary numbers.
- Use compact tables whenever comparing three or more options, quarters, or vendors.
- Highlight anomalies, missing cells, or reconciliation gaps explicitly rather than smoothing over them.
- Keep explanations under 120 words unless I ask for a full methodology note.
```

### 3. Skeptical Proposal & Deck Reviewer

```markdown
- Never open with praise for a draft or memo.
- Identify the single weakest claim, unsupported number, or unaddressed stakeholder objection first.
- Distinguish fatal gaps from minor wording edits.
- Suggest exact replacement phrasing in active voice rather than vague advice.
```

### 4. Calm Project Coordinator (DISC S style)

```markdown
- Organize multi-step work plans into sequential milestones with clear owners and dependencies.
- Keep tone steady, clear, and practical—no hype or alarmist language.
- Confirm what is already settled before proposing scope changes.
```

### 5. Plain-English Technical Explainer

```markdown
- Translate technical architecture or security policies into clear business impact first, then mechanics.
- Keep paragraphs to 2–3 sentences; define acronyms once if cross-functional audiences will read the draft.
```

## Preventing Copilot Memory from fighting your Custom Instructions.

- **Put tone in Custom instructions, facts in Memory:** If Copilot remembers an old one-off request like &ldquo;Always write formal 5-paragraph emails,&rdquo; that memory can clash with your concise Custom Instructions. Audit **Personalization → Memory** monthly and delete outdated style memories.
- **Check enterprise tenant policies:** In Microsoft 365 work accounts, IT administrators control whether Personalization and Memory are enabled across the organization.
- **Verify on a real thread:** After saving, open a fresh Copilot chat and ask it to summarize a messy email thread—check that sentence one gives the decision with zero throat-clearing.

## Questions people ask.

### Where are Custom Instructions in Microsoft Copilot?

Open Copilot Chat or Microsoft 365 Copilot, click Settings and more (…) → Chat settings → Personalization → Custom instructions, paste your rules, and save.

### Does turning off Copilot Memory delete everything it saved?

No. Toggling Memory off stops Copilot from referencing saved memories in new responses, but previously stored entries remain until you manually review and delete them in Personalization → Memory.

### Are Microsoft 365 Copilot custom instructions the same as GitHub Copilot instructions?

No. Microsoft 365 / Copilot Chat uses account-level Personalization settings, whereas GitHub Copilot in VS Code and JetBrains reads .github/copilot-instructions.md from your code repository.

### How do I stop Microsoft Copilot from writing overly corporate, wordy emails?

Add three explicit lines to Custom instructions: 'Lead with the main ask in sentence one,' 'Use plain, everyday English with no corporate buzzwords,' and 'Keep routine email drafts under 100 words.'

## What changed.

- November 20, 2026 First published covering Microsoft Copilot Custom Instructions paths, Memory toggle behavior, and 5 workplace tone templates.

## Sources.

- [Microsoft Support: Personalize Microsoft Copilot with Memory and Custom Instructions](https://support.microsoft.com/copilot)

- [AgentTune Guide: AI Personality, Tone & Verbosity Guidelines](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)

- [AgentTune Guide: Cursor, GitHub Copilot & GEMINI.md Rules](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)

## Keep going.

- [Interactive Tuner: 6-Slider AI Personality Tuner (includes Microsoft Copilot export)](https://agent-tune.com/tools/custom-instructions-generator)
- [GitHub Copilot: GitHub Copilot (.github/copilot-instructions.md) & IDE rules](https://agent-tune.com/guides/cursor-rules-copilot-gemini-md)
- [Memory Hygiene: How to audit & migrate AI memory without conflicting tone rules](https://agent-tune.com/guides/migrate-ai-memory-custom-instructions)
- [Notion AI: Notion AI custom instructions & workspace agent persona templates](https://agent-tune.com/guides/notion-ai-custom-instructions-agent-persona)
