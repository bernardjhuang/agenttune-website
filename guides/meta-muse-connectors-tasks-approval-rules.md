Source: https://agent-tune.com/guides/meta-muse-connectors-tasks-approval-rules
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse Connectors & Tasks

# Meta Muse Connectors & Tasks: writing clean approval rules in Soul.md.

By Bernard Huang · Updated November 16, 2026

In Meta Muse, store tone, epistemic honesty, and read-vs-write Connector confirmation gates in Soul.md; store agent role, name, and visual persona in Identity.md; and store user facts or timezone context in Memory.md. Require explicit human approval before Muse sends external messages, modifies shared events, or deletes items during scheduled Tasks.

## Which file governs Connectors, Tasks, and persona?

| Muse surface / file | What belongs here | What happens when misplaced |
| --- | --- | --- |
| Soul.md (Personality &amp; Behavior) | Voice rules, truthfulness gates, tool confirmation boundaries, draft-before-send defaults | Putting schedule facts here causes drift; omitting approval rules leaves side effects vague ([Soul.md templates →](https://agent-tune.com/guides/muse-soul-md-templates)) |
| Identity.md (Avatar &amp; Card) | Name, avatar vibe, one-line role description, surface greeting ([setup guide →](https://agent-tune.com/guides/muse-identity-md-avatar-name)) | Stuffing procedural approval matrices here crowds identity card limits |
| Memory.md (Facts &amp; Context) | Working hours, preferred recipients, formatting constants, standing context ([privacy guide →](https://agent-tune.com/guides/muse-memory-md-privacy-reset)) | Storing behavioral prohibitions as memories makes them fragile when you prune memory entries |
| Scheduled Tasks / Connectors | Recurrence timing, permitted external integrations, per-task prompt scope | Asking a Task to &ldquo;handle my inbox&rdquo; without dry-run limits leads to premature sends |

## Copy-paste Soul.md autonomy & Connector approval block.

Merge this section into your existing Soul.md safely using the [Muse Soul.md Editor & Merge Tool](https://agent-tune.com/tools/muse-soul-md-editor) (it wraps your rules in reversible markers and downloads an original backup first):

```markdown
## Connectors & Scheduled Tasks

- Treat reading calendars, messages, and notes as read-only synthesis unless I explicitly approve an external action.
- Always prepare a clickable summary, diff, or exact message draft first before creating events, replying to people, sending invites, or modifying external records.
- When running a scheduled recurring Task: report verified inputs, state any failed Connector lookup explicitly, and stop at a reviewable shortlist rather than taking irreversible side effects silently.
- Never fabricate missing Connector outputs or invent calendar slots when a tool call returns empty or errors out.
```

## Practical read / draft / execute boundaries for everyday workflows.

| Workflow | Safe automatic step | Require confirmation gate |
| --- | --- | --- |
| Morning brief (Scheduled Task) | Aggregate upcoming events, deadlines, and unread highlights with exact timestamps | Declining invitations, rescheduling meetings, or messaging attendees |
| Email / message triage | Cluster threads by urgency and write editable reply drafts | Hitting send on any external thread or forwarding sensitive attachments |
| Research &amp; side chats | Fork long tangents into Muse Side Chats while keeping the main log clean ([troubleshooting guide →](https://agent-tune.com/guides/muse-troubleshooting-mobile-side-chats)) | Overwriting permanent workspace docs or appending unverified claims to shared notes |

Want to test Muse behavior alongside ChatGPT and Claude first? Compare all three platforms in [Muse vs ChatGPT vs Claude](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality).

## Questions people ask.

Should Connector approval rules go in Soul.md or Memory.md?

Put durable confirmation gates and draft-first defaults in Soul.md because Soul.md governs behavior across conversations and Tasks. Keep mutable context (like your work hours or VIP contacts) in Memory.md.

Can Soul.md overwrite existing customizations if I paste an approval block directly?

Replacing all of Soul.md manually will erase existing persona traits unless you merge carefully. Use our Muse Soul.md Editor to preview the merge inside labeled markers and save an original backup first.

How should a Meta Muse scheduled Task report failed lookups?

Add an explicit rule telling Muse to quote tool failures verbatim and leave missing slots blank instead of inferring or smoothing over skipped Connector reads.

Where do I inspect or pause saved facts Muse learned from Connectors?

Inspect and trim Memory.md regularly under Assistant Identity / Memory settings, or audit an export locally with the AgentTune AI Memory Export Reviewer.

## What changed.

- November 16, 2026 First published covering Soul.md vs Identity.md vs Memory.md separation and Connector/Task confirmation gates.

## Sources.

- [Meta Help Center: Customize Meta Muse personality files & memories](https://www.meta.com/help/artificial-intelligence/995796179982326/)

- [AgentTune: Muse Personality Hub (Soul.md, Identity.md & Memory.md)](https://agent-tune.com/guides/muse-personality)

## Keep going.

- [Tool: Muse Soul.md Editor & Safe Merge Tool](https://agent-tune.com/tools/muse-soul-md-editor)
- [Hub: Meta Muse personality guide (Soul.md & characters)](https://agent-tune.com/guides/muse-personality)
- [Guide: Muse Memory.md privacy, review & reset](https://agent-tune.com/guides/muse-memory-md-privacy-reset)
- [Troubleshooting: Muse troubleshooting: mobile sync, Side Chats & Tasks](https://agent-tune.com/guides/muse-troubleshooting-mobile-side-chats)
