Source: https://agent-tune.com/guides/audit-fix-conflicting-ai-instructions
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Troubleshooting

# Why your AI ignores custom instructions (and how to fix it in 5 minutes).

By Bernard Huang · Updated November 17, 2026

Nine times out of ten, the model isn't broken—two rules in your stack are contradicting each other, saved memory is overriding you, or the file truncated silently.

**Quick answer:** When an AI ignores custom instructions, check five root causes in order: (1) contradictory rules inside the same prompt ('always be brief' + 'explain every edge case'), (2) stale entries in Saved Memory or Memory.md, (3) Project Instructions overriding account defaults, (4) silent truncation (ChatGPT's 1,500-char limit or Codex's 32 KiB limit), and (5) vague adjectives without checkable actions.

## The 5-cause diagnostic checklist.

| Failure mode | Symptom you see in chat | Fastest local fix |
| --- | --- | --- |
| 1. Internal contradiction | Model oscillates wildly between 1-line stubs and 900-word essays. | Paste your prompt into [Instruction Checker](https://agent-tune.com/tools/instruction-checker) to highlight conflicting brevity vs. completeness lines. |
| 2. Stale Saved Memory | Unrelated past stacks, tone notes, or old jobs appear in new threads. | Audit ChatGPT Memory or Muse Memory.md in [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer) and delete temporary task notes. |
| 3. Precedence shadowing | Rules work in normal chat, fail inside a ChatGPT/Claude Project or repo subfolder. | Check [instruction precedence](https://agent-tune.com/guides/ai-instruction-precedence-overrides): Project instructions and nested AGENTS.override.md win on conflict. |
| 4. Silent truncation / bloat | Top 5 bullets work; rules near the bottom of your file never fire. | Check exact caps in our [Character Limits Guide](https://agent-tune.com/guides/ai-custom-instructions-character-limits) and audit overlong blocks in [Instruction Checker](https://agent-tune.com/tools/instruction-checker) (stay under 1,500 chars in ChatGPT; &lt;32 KiB in Codex). |
| 5. Untestable adjectives | "Be smart, insightful, and concise" produces standard default prose. | Swap adjectives for observable triggers ([see deterministic style controls](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)). |

## Stop testing custom instructions with 'Hi, who are you?'

Do not test new custom instructions by opening a blank chat and typing “Hey, how are you?” or “Summarize your instructions.” Greeting prompts trigger canned small talk and never test structure, tradeoff analysis, or pushback.

Instead, compare two real tasks from your past week in the [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench):

- Pick a real decision prompt with a subtle flaw (for example, “Should we store user session tokens in localStorage so mobile tabs share state faster?”).
- Run it once in a fresh chat without custom instructions, and once with your new block.
- Check three things: Did sentence one state the answer? Did it flag the security flaw without sycophantic praise? Did it follow your formatting rules?

## Before & after: refactoring a broken 18-line prompt into 6 clean rules.

**Broken draft (contradictory + untestable):**

```markdown
Be super concise and never write more than 3 sentences. Always explain all edge cases, security implications, and alternative architectures thoroughly. Never use bullet points. Give me clear action items at the end of every message. Be friendly, warm, and brutally honest with zero fluff.
```

Why it fails: the model cannot write `**Refactored conflict-free version:**

```markdown
## Communication rules

- Lead with the direct answer or recommendation in sentence one.
- Scale length to task risk: 1–3 sentences for simple lookups; structured depth when security, data loss, or architecture is at stake.
- Default to plain prose; switch to bullets or tables only when comparing 3+ options or listing sequential commands.
- Critique flawed assumptions candidly with concrete evidence, without performative praise or harshness.
- Flag material uncertainty explicitly instead of guessing.
- Explicit instructions in my current prompt override these defaults.
```

## Keep coding-agent files isolated with bounded markers.

In `CLAUDE.md` and `AGENTS.md`, tone rules often get buried under hundreds of lines of linter prose that ESLint or Prettier already enforce. Remove style rules your linter handles, and wrap your personal communication block inside bounded HTML comments using the [Instruction Converter](https://agent-tune.com/tools/instruction-converter) (` ... `).

## Questions people ask.

### Why did ChatGPT stop following my Custom Instructions in new chats?

First check that 'Enable for new chats' is toggled on under Profile → Personalization → Custom Instructions. Next, inspect Profile → Personalization → Memory → Manage memories—stale saved memories and Project-level instructions frequently override global Custom Instructions.

### How many rules can an AI reliably follow in custom instructions?

Six to twelve concrete, non-overlapping behavioral rules hold reliably across long conversations. Once a personal preference block exceeds ~25–30 rules, rules begin competing with each other and with live task instructions.

### Why does Codex or Claude Code ignore rules at the bottom of AGENTS.md?

OpenAI Codex enforces a 32 KiB default byte budget (project_doc_max_bytes) across merged AGENTS.md files, and nested directory AGENTS.override.md files take priority over root rules. Keep root instruction files lean and move deep architecture docs into linked reference files.

### How can I check my instructions for hidden conflicts automatically?

Paste your current instructions into agent-tune.com/tools/instruction-checker. It runs locally in your browser to flag duplicate lines, verbosity contradictions, absolute 'never mention uncertainty' traps, and character-budget overruns.

## What changed.

- November 11, 2026 Published with the 5-cause troubleshooting table, before/after conflict refactor, and local tool workflow.

## Sources.

- [AgentTune Tool: Instruction Checker (local conflict & duplicate detector)](https://agent-tune.com/tools/instruction-checker)

- [AgentTune Tool: AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer)

- [AgentTune Guide: AI Custom Instructions Character Limits (2026)](https://agent-tune.com/guides/ai-custom-instructions-character-limits)

## Keep going.

- [Free browser tool: Instruction Checker — detect conflicts & duplicates](https://agent-tune.com/tools/instruction-checker)
- [Free browser tool: AI Memory Reviewer — prune stale saved facts](https://agent-tune.com/tools/ai-memory-reviewer)
- [Free browser tool: Instruction Test Bench — side-by-side task evaluation](https://agent-tune.com/tools/instruction-test-bench)
- [Guide: Project vs account instructions: what overrides what](https://agent-tune.com/guides/ai-instruction-precedence-overrides)
- [Guide: AI custom instructions character limits (2026 cheat sheet)](https://agent-tune.com/guides/ai-custom-instructions-character-limits)
