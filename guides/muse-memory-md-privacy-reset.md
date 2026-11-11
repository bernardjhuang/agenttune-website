Source: https://agent-tune.com/guides/muse-memory-md-privacy-reset
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# Meta Muse Memory.md, privacy, and how to reset safely.

By Bernard Huang · Updated November 5, 2026

Open Settings, then Personalization, then Assistant Identity, and select Memory.md to view, edit, or delete saved facts about you. To clear your saved facts without losing your communication style, reset only Memory.md and leave Soul.md and Identity.md untouched. Keep permanent communication rules in Soul.md so routine memory cleanups never erase your tuning.

## What Muse writes to Memory.md.

In Meta's Assistant Identity design, Memory.md is the notebook where Muse records persistent context about you across conversations. Unlike [Soul.md](https://agent-tune.com/guides/muse-soul-md-templates) (which defines how Muse speaks) and [Identity.md](https://agent-tune.com/guides/muse-identity-md-avatar-name) (which defines Muse's name and avatar), Memory.md changes over time as you talk.

| Belongs in Memory.md | Move to Soul.md instead | Delete from both |
| --- | --- | --- |
| Your role, primary programming languages, or recurring deliverables. | Rules like "lead with the answer" or "use plain prose instead of bullet lists." | One-time trip dates, finished sprint tasks, or old debugging logs. |
| Standing domain context (for example, target audience or style guide name). | How strongly you want Muse to push back on weak arguments. | Sensitive credentials, client secrets, or private identifiers. |
| Tools and environment defaults you use every week. | Formatting defaults for code blocks, tables, and summaries. | Contradictory notes added automatically from a single brainstorm chat. |

## Why stale Memory.md entries make Muse feel repetitive.

A common frustration with persistent memory in any assistant is context bleed: you ask a quick question about a new topic, and the assistant forces a connection to a project you finished a month ago. Because Memory.md is loaded into context across sessions, a temporary constraint that got saved as a permanent fact will keep steering future answers.

When Muse starts over-referencing an old topic or assuming every task uses the same stack, inspect Memory.md before editing Soul.md. Nine times out of ten, the problem is a stale bullet in Memory.md rather than a broken tone instruction.

## How to audit or reset Memory.md without wiping Soul.md.

You can clean up Memory.md from the settings panel or directly in chat:

- In Meta Muse, open Settings, then Personalization, then Assistant Identity.
- Select Memory.md to inspect every stored line.
- Delete outdated bullets, or replace the file with a short, structured list of facts you actually want Muse to know across every chat.

If you prefer to manage it from chat, use a scoped prompt so Muse does not touch your Soul.md tuning:

```markdown
Show me the current contents of Memory.md grouped into: (1) durable work context, (2) personal preferences, and (3) one-off task notes. Do not edit Soul.md or Identity.md.
```

To wipe Memory.md cleanly while keeping your voice tuning intact:

```markdown
Clear all project-specific and temporary entries from Memory.md, keeping only my role and primary tools. Leave Soul.md and Identity.md completely unchanged, and show me the updated Memory.md before saving.
```

## A clean Memory.md structure that stays easy to prune.

Keeping Memory.md divided into two short headings makes future audits effortless:

```markdown
# Memory

## Durable context
- Role: Product engineer working on web applications in TypeScript and Python.
- Audience: Technical teammates; skip beginner explanations of standard library APIs.

## Active projects (review monthly)
- Current focus: Static site build tooling and search analytics.
```

Then keep your communication rules in Soul.md using the prompt below or a profile from the [43-tuning library](https://agent-tune.com/library/):

```markdown
## How to work with me

- Answer the question first, then give supporting detail only when needed.
- Use saved facts from Memory.md only when they are directly relevant to the current task.
- Do not force connections to my past projects in unrelated conversations.
- Ask before saving temporary task constraints to Memory.md.
```

## Questions people ask.

How do I see what Meta Muse remembers about me?

Open Settings, then Personalization, then Assistant Identity, and select Memory.md, or ask Muse in chat to print the current contents of Memory.md.

Does clearing Memory.md delete my Soul.md personality tuning?

No, as long as you edit or clear only Memory.md. Soul.md and Identity.md are separate files under Assistant Identity.

How do I stop Meta Muse from bringing up old topics in every chat?

Delete finished projects and one-off notes from Memory.md, and add a line in Soul.md instructing Muse to use saved memory only when directly relevant to the current prompt.

Should I put formatting rules in Memory.md or Soul.md?

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
