Source: https://agent-tune.com/guides/chatgpt-projects-vs-custom-instructions
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · ChatGPT

# ChatGPT Projects vs. Custom Instructions: what overrides what.

By Bernard Huang · Updated November 17, 2026

Put how you think in account-wide Custom Instructions. Put what you are building inside each Project.

**Quick answer:** Inside a ChatGPT Project, Project Instructions override your account-wide Custom Instructions whenever two rules conflict. Keep a compact 6–10 line communication block (tone, answer-first order, pushback, and uncertainty) in global Custom Instructions, and put tech stack details, deliverable templates, and reference files inside each Project.

## Side-by-side: Custom Instructions vs. Project Instructions.

| Dimension | Account-wide Custom Instructions | ChatGPT Project Instructions |
| --- | --- | --- |
| Where to find it (Web &amp; Mobile) | Profile → Personalization → Custom Instructions | Open a Project folder → Project instructions |
| Scope | Every new standard chat across web, iOS, Android, and desktop apps. | Only chats inside that specific Project. |
| Character budget | 1,500 characters per field (two fields: context + response style). | Up to 8,000 characters plus uploaded Project files. |
| Precedence on conflict | Baseline default; yields to Project rules and live chat prompts. | Overrides conflicting account-wide Custom Instructions inside the Project. |
| What belongs here | Your durable communication habits: answer-first, prose vs bullets, pushback, and uncertainty calibration. | Tech stack, audience, deliverable templates, style guides, and repo constraints. |

For character limits across Claude, Codex `AGENTS.md`, Meta Muse, and Grok, see our [2026 character limits cheat sheet](https://agent-tune.com/guides/ai-custom-instructions-character-limits) and [precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## Why putting everything in Custom Instructions breaks Projects.

Two common mistakes cause conflicts between global settings and Projects:

- **Hardcoding one job’s format globally:** Putting “Format every answer as TypeScript code with zero prose” in global Custom Instructions breaks every writing, strategy, or research chat outside that repo.
- **Pasting your personal bio into every Project:** Copying the same 15 tone lines into six Projects means six places to update later.

Run your rules through our [Instruction Checker](https://agent-tune.com/tools/instruction-checker) to remove duplicates and keep your global Box 2 under 600–900 characters.

## Copy-paste split: Global voice + Project task layer.

**Layer 1 — Paste into account-wide Custom Instructions** (Box 2: “How would you like ChatGPT to respond?” — ~480 characters):

```markdown
- Lead with the answer or recommendation in the first sentence.
- Match length to complexity: 1–3 sentences for simple lookups, structured depth for architecture or tradeoffs.
- Default to clear prose; use bullets or tables only when comparing 3+ items or listing steps.
- Challenge weak assumptions in my prompt directly and cite concrete tradeoffs.
- Flag material uncertainty explicitly instead of guessing.
- Project instructions and explicit requests in the current chat override these defaults.
```

**Layer 2 — Paste into a specific ChatGPT Project’s instructions:**

```markdown
# Project: Checkout Service v2

## Stack & constraints
- Next.js App Router, TypeScript strict mode, Postgres (Drizzle ORM), Stripe webhooks.
- Idempotency keys are mandatory on all payment mutations.

## Deliverable format in this Project
- For schema or API changes, include: (1) migration risk, (2) exact diff, and (3) one test case covering webhook retries.
- Reference uploaded architecture notes before proposing new queues or tables.
```

## Don't forget ChatGPT Saved Memories (the hidden third layer).

If ChatGPT still brings up an old tech stack or ignored format, check **Profile → Personalization → Memory → Manage memories**. Stale saved memories can quietly override your written instructions. Paste your memory list into our local [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer) to prune outdated entries in 60 seconds, or read [how to fix ignored AI instructions](https://agent-tune.com/guides/audit-fix-conflicting-ai-instructions).

## Questions people ask.

### Do ChatGPT Custom Instructions still apply inside a ChatGPT Project?

Yes, account-wide Custom Instructions remain part of the background context unless disabled, but the Project's own instructions take priority whenever the two conflict.

### What is the character limit for ChatGPT Custom Instructions vs Projects?

Account-wide Custom Instructions cap each of the two text boxes at 1,500 characters. Project Instructions support much longer multi-paragraph briefs plus attached reference files.

### How do I stop my global brevity rule from ruining long drafts inside a Project?

Add one explicit precedence line at the bottom of your global Custom Instructions ('Project instructions and explicit requests in my current prompt override these defaults') and specify the target length or template inside that Project's instructions.

### Do Custom GPTs use my Custom Instructions or Project Instructions?

Custom GPTs run their builder's system instructions independently and generally do not inherit your personal Custom Instructions in the same way standard chats and Projects do.

## What changed.

- November 11, 2026 Published with the two-layer Global Voice vs Project Spec pattern and Saved Memory conflict check.

## Sources.

- [OpenAI Help Center: Custom Instructions for ChatGPT](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

- [OpenAI Help Center: Projects in ChatGPT](https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt)

- [AgentTune Guide: Project vs account instructions across AI apps](https://agent-tune.com/guides/ai-instruction-precedence-overrides)

## Keep going.

- [Free browser tool: ChatGPT Custom Instructions & AI Prompt Generator](https://agent-tune.com/tools/custom-instructions-generator)
- [Guide: 20 ChatGPT custom instructions examples by role](https://agent-tune.com/guides/chatgpt-custom-instructions-examples)
- [Guide: Project vs account instructions: what overrides what](https://agent-tune.com/guides/ai-instruction-precedence-overrides)
- [Free browser tool: Instruction Checker — catch conflicts & duplicate lines](https://agent-tune.com/tools/instruction-checker)
- [Guide: Why AI ignores custom instructions: conflict & memory audit](https://agent-tune.com/guides/audit-fix-conflicting-ai-instructions)
