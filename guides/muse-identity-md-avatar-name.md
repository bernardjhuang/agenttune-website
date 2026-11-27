Source: https://agent-tune.com/guides/muse-identity-md-avatar-name
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# How to change Meta Muse’s avatar, name, and Identity.md.

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/guides/muse-identity-md-avatar-name.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** To change Meta Muse's avatar, name, or voice on mobile or muse.ai, tap your Assistant icon (Muse's avatar) → Identity → Edit (Identity.md), or tell Muse in chat: 'Update only Identity.md: change your avatar/name to X without touching Soul.md.' Keep your tone and formatting rules inside Soul.md so avatar updates never overwrite how Muse talks to you.

## Avatar Picker vs. Identity.md text editor (iOS, Android & muse.ai).

You can update Muse’s appearance and display name either through the visual **Assistant Identity** sheet or by editing `Identity.md` directly:

| Method | Where to tap / type | What it changes & gotcha to avoid |
| --- | --- | --- |
| Visual Avatar & Identity sheet (iOS, Android, `muse.ai`) | Tap the Assistant icon (Muse's avatar at top of chat or sidebar) → Identity → Edit | Swaps Muse's visual avatar, display name, tagline, and voice preset without touching `Soul.md`. |
| Direct `Identity.md` edit | Assistant icon → Identity → Edit (Markdown view) | Edits Name, Role, Vibe, Avatar style, and Tagline in plain Markdown. Always save a backup first. |
| Chat command (quick rename) | In Main Chat: name `Identity.md` explicitly and forbid editing `Soul.md` or `Memory.md`. | Muse updates the file and shows a confirmation diff. Inspect `Identity.md` afterward to confirm. |

When asking Muse in chat to rename itself or update its avatar, name `Identity.md` explicitly so it leaves `Soul.md` alone:

```markdown
Update only Identity.md. Change your display name to "Ada", update your avatar vibe to "clean monochrome geometric mark", and keep your role description to one sentence: "Personal research and writing assistant." Do not modify Soul.md or Memory.md.
```

## What belongs in each of the three Muse files.

Give each of the three Assistant Identity files one clear job:

| File | What it controls | What to keep out of it |
| --- | --- | --- |
| `Identity.md` | Assistant display name, avatar appearance, spoken voice preset, and a one-line role label. | Formatting rules, length caps, tone rules, and personal facts about you. |
| `Soul.md` | How Muse speaks and works with you: directness, prose vs lists, pushback, and pacing. | Avatar prompts, voice selection, and sensitive personal history. |
| `Memory.md` | Facts about you, active projects, recurring tools, and ongoing context across chats. | Communication style rules or temporary single-task instructions. |

If you put formatting rules inside `Identity.md` and later ask Muse to change its avatar, Muse can overwrite the entire file and drop your rules. Keep communication preferences in [Soul.md](https://agent-tune.com/guides/muse-soul-md-templates) instead.

## Clean Identity.md templates you can copy (or build interactively).

Generate a coordinated `Soul.md` + `Identity.md` + `Memory.md` starter kit right here—or browse all [16 Meta Muse character ideas & Identity.md profiles](https://agent-tune.com/guides/muse-identity-md-avatar-name):

### Minimal work assistant

```markdown
# Identity

- Name: Atlas
- Role: Technical research and synthesis assistant
- Voice: Calm, neutral studio voice
- Avatar style: Clean geometric mark, dark slate background
- Boundaries: Follow Soul.md for all formatting, length, and tone rules.
```

[Download Chief of Staff (.md)](https://agent-tune.com/resources/muse/identity-chief-of-staff.md) · [Download Coding Partner (.md)](https://agent-tune.com/resources/muse/identity-coding-partner.md) · [Download Rook — Skeptical Strategist (.md)](https://agent-tune.com/resources/muse/identity-skeptical-advisor.md) · [Download Bea — Concise Daily (.md)](https://agent-tune.com/resources/muse/identity-concise-daily.md)

### Direct study and review partner

```markdown
# Identity

- Name: Clara
- Role: Critical reading and argument review partner
- Voice: Clear, measured conversational voice
- Avatar style: Minimal monochrome portrait
- Boundaries: Defer to Soul.md for how to structure answers and critique drafts.
```

## Pairing Identity.md with Soul.md.

Once `Identity.md` is set, add your communication rules to the How to work with me section of `Soul.md` (or pick any of the 43 profiles in the [tuning library](https://agent-tune.com/library/)):

```markdown
## How to work with me

- Lead with the direct answer or recommendation in the first sentence.
- Use plain prose by default. Add lists or tables only when comparing three or more items.
- Skip flattery, throat-clearing openers, and generic sign-offs.
- Point out flawed assumptions in my plan before executing it.
- State uncertainty plainly in one line when a fact cannot be verified.
```

For the full `Soul.md` walkthrough, read the [Meta Muse personality guide](https://agent-tune.com/guides/muse-personality).

## Questions people ask.

### Where do I change Meta Muse's name and avatar?

Open Settings, then Personalization, then Assistant Identity, and select Identity.md. You can also ask Muse in chat to rename itself or update its avatar in Identity.md.

### What is the difference between Identity.md and Soul.md in Meta Muse?

Identity.md controls who the assistant is on screen: its name, avatar, voice, and one-line role. Soul.md controls how the assistant communicates with you, including tone, brevity, formatting, and pushback.

### Why did changing my Muse avatar reset my communication rules?

If you stored tone or formatting rules inside Identity.md, asking Muse to regenerate its identity or avatar can overwrite the entire file. Keep communication rules inside the How to work with me section of Soul.md instead.

### Can I edit Identity.md without touching Memory.md?

Yes. Tell Muse in chat to update only Identity.md and to leave Soul.md and Memory.md unchanged, or edit Identity.md directly in the Assistant Identity settings pane.

## What changed.

- November 16, 2026 Added visual Avatar Picker vs Identity.md editor comparison table and exact iOS/Android/muse.ai tap paths at the top.

- November 5, 2026 First published with side-by-side boundaries for Identity.md, Soul.md, and Memory.md.

## Sources.

- [Meta Help Center: Personalize your assistant in Meta Muse](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

- [AgentTune: How to give Meta Muse a personality](https://agent-tune.com/guides/muse-personality)

- [AgentTune: Meta Muse Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)

## Keep going.

- [Guide: How to give Meta Muse a personality](https://agent-tune.com/guides/muse-personality)
- [Templates: Meta Muse Soul.md templates (12 copy-paste profiles)](https://agent-tune.com/guides/muse-soul-md-templates)
- [Guide: Meta Muse Memory.md, privacy, and how to reset safely](https://agent-tune.com/guides/muse-memory-md-privacy-reset)
- [Comparison: Meta AI vs Meta Muse: how to change personality and tone](https://agent-tune.com/guides/meta-ai-vs-meta-muse-personality)
- [Research: What personality type is Meta Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
