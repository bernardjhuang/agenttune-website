Source: https://agent-tune.com/guides/muse-memory-md-privacy-reset
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# Meta Muse Memory.md, privacy, and how to reset safely.

By Bernard Huang · Updated November 17, 2026 · ~3 min read · [Markdown (.md)](https://agent-tune.com/guides/muse-memory-md-privacy-reset.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Open Settings → Personalization → Assistant Identity (or tap the Assistant icon) and select Memory.md to view, edit, or delete saved facts about you. To clear old context without losing your communication style, reset only Memory.md and leave Soul.md and Identity.md untouched.

## What Muse writes to Memory.md.

In Meta Muse, `Memory.md` is the notebook where Muse records ongoing facts about you. Unlike [Soul.md](https://agent-tune.com/guides/muse-soul-md-templates) (how Muse talks) and [Identity.md](https://agent-tune.com/guides/muse-identity-md-avatar-name) (Muse’s name and avatar), `Memory.md` updates over time as you chat:

| Belongs in Memory.md | Move to Soul.md instead | Delete from both |
| --- | --- | --- |
| Your role, primary programming languages, or recurring deliverables. | Rules like "lead with the answer" or "use plain prose instead of bullet lists." | One-time trip dates, finished sprint tasks, or old debugging logs. |
| Standing domain context (target audience or style guide name). | How strongly you want Muse to push back on weak arguments. | Sensitive credentials, client secrets, or private identifiers. |
| Tools and environment defaults you use every week. | Formatting defaults for code blocks, tables, and summaries. | Contradictory notes added automatically from a single brainstorm chat. |

## Why stale Memory.md entries make Muse feel repetitive.

When a temporary project note gets saved into `Memory.md`, Muse loads that note into future sessions and can force awkward connections to finished work. Whenever Muse keeps referencing an old topic, inspect `Memory.md` first—or paste its contents into our local [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer) to uncheck duplicates and stale entries.

## How to audit or reset Memory.md without wiping Soul.md.

You can clean up `Memory.md` in settings or directly from Main Chat:

- Open **Settings → Personalization → Assistant Identity → Memory.md** (or tap the Assistant icon → Memory).
- Delete outdated bullets, or replace the file with a short list of durable facts.

If you manage it in Main Chat, name `Memory.md` explicitly so Muse leaves `Soul.md` untouched:

```markdown
Show me the current contents of Memory.md grouped into: (1) durable work context, (2) personal preferences, and (3) one-off task notes. Do not edit Soul.md or Identity.md.
```

To clear stale notes while keeping your role and tools:

```markdown
Clear all project-specific and temporary entries from Memory.md, keeping only my role and primary tools. Leave Soul.md and Identity.md completely unchanged, and show me the updated Memory.md before saving.
```

## A clean Memory.md structure that stays easy to prune.

Split `Memory.md` into two short headings so monthly cleanups take 30 seconds:

```markdown
# Memory

## Durable context
- Role: Product engineer working on web applications in TypeScript and Python.
- Audience: Technical teammates; skip beginner explanations of standard library APIs.

## Active projects (review monthly)
- Current focus: Static site build tooling and search analytics.
```

Then keep your communication rules in `Soul.md` (and tell Muse not to over-use saved memories):

```markdown
## How to work with me

- Answer the question first, then give supporting detail only when needed.
- Use saved facts from Memory.md only when they are directly relevant to the current task.
- Do not force connections to my past projects in unrelated conversations.
- Ask before saving temporary task constraints to Memory.md.
```

## Questions people ask.

### How do I see what Meta Muse remembers about me?

Open Settings, then Personalization, then Assistant Identity, and select Memory.md, or ask Muse in chat to print the current contents of Memory.md.

### Does clearing Memory.md delete my Soul.md personality tuning?

No, as long as you edit or clear only Memory.md. Soul.md and Identity.md are separate files under Assistant Identity.

### How do I stop Meta Muse from bringing up old topics in every chat?

Delete finished projects and one-off notes from Memory.md, and add a line in Soul.md instructing Muse to use saved memory only when directly relevant to the current prompt.

### Should I put formatting rules in Memory.md or Soul.md?

Put formatting, tone, and length rules in Soul.md. Keep Memory.md strictly for factual context about your work, tools, and ongoing projects.

## What changed.

- November 5, 2026 First published with scoped reset prompts and a two-section Memory.md template.

## Sources.

- [Meta Help Center: Personalize your assistant in Meta Muse](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

- [AgentTune: How to give Meta Muse a personality](https://agent-tune.com/guides/muse-personality)

- [AgentTune: Meta Muse Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)

## Keep going.

- [Guide: How to give Meta Muse a personality](https://agent-tune.com/guides/muse-personality)
- [Guide: Meta Muse avatar and name: the Identity.md guide](https://agent-tune.com/guides/muse-identity-md-avatar-name)
- [Templates: Meta Muse Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)
- [Comparison: Meta AI vs Meta Muse: how to change personality and tone](https://agent-tune.com/guides/meta-ai-vs-meta-muse-personality)
- [Guide: Project vs account instructions: what overrides what](https://agent-tune.com/guides/ai-instruction-precedence-overrides)
