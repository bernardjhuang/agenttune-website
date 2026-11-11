Source: https://agent-tune.com/guides/muse-identity-md-avatar-name
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# Meta Muse avatar and name: the Identity.md guide.

By Bernard Huang · Updated November 5, 2026

Open Meta Muse settings and go to Personalization, then Assistant Identity, then Identity.md, or ask Muse in chat to update its name, avatar, or voice. Keep Identity.md limited to the assistant's name, visual avatar, voice, and one-line role summary. Put communication rules, pacing, and formatting preferences in Soul.md so avatar edits never overwrite your tuning.

## What belongs in each of the three Muse files.

Meta documents three separate files inside the Assistant Identity panel. Treating each file as a single-purpose layer makes updates predictable when you ask Muse to edit its own configuration in chat.

| File | What it controls | What to keep out of it |
| --- | --- | --- |
| Identity.md | Assistant display name, avatar appearance, spoken voice preset, and a short one-line role label. | Formatting rules, length caps, tone rules, and personal facts about you. |
| Soul.md | How Muse speaks and works with you: directness, prose vs lists, pushback, and pacing. | Avatar prompts, voice selection, and sensitive personal history. |
| Memory.md | Facts about you, active projects, recurring tools, and ongoing context Muse remembers across chats. | Communication style rules or temporary single-task instructions. |

If you put formatting rules inside Identity.md and later ask Muse to change its avatar or display name, Muse often rewrites the whole Identity.md block and drops those formatting rules. Keeping communication preferences in [Soul.md](https://agent-tune.com/guides/muse-soul-md-templates) avoids that problem.

## How to change Muse's name, avatar, and voice.

According to Meta's Help Center documentation for Muse personalization, you can update Identity.md either directly in settings or by asking Muse in a conversation:

- Open your profile menu in Meta Muse and select Personalization.
- Open Assistant Identity and select Identity.md.
- Edit the name, voice, or avatar fields directly, or return to chat and tell Muse what to change.
- Review the diff or preview card before confirming the update.

If you ask Muse in chat, name the target file explicitly so it does not touch Soul.md by mistake:

```markdown
Update only Identity.md. Change your display name to "Ada" and keep your role description to one sentence: "Personal research and writing assistant." Do not modify Soul.md or Memory.md.
```

## Clean Identity.md templates you can copy.

A good Identity.md file is five to eight lines long. It gives the assistant a stable name and role while pointing tone and formatting back to Soul.md.

### Minimal work assistant

```markdown
# Identity

- Name: Atlas
- Role: Technical research and synthesis assistant
- Voice: Calm, neutral studio voice
- Avatar style: Clean geometric mark, dark slate background
- Boundaries: Follow Soul.md for all formatting, length, and tone rules.
```

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

Once Identity.md is set, pair it with a focused communication block in Soul.md. You can paste the prompt below in chat so Muse updates only the How to work with me section of Soul.md while leaving Identity.md untouched, or pick one of the 43 profiles from the [tuning library](https://agent-tune.com/library/).

```markdown
## How to work with me

- Lead with the direct answer or recommendation in the first sentence.
- Use plain prose by default. Add lists or tables only when comparing three or more items.
- Skip flattery, throat-clearing openers, and generic sign-offs.
- Point out flawed assumptions in my plan before executing it.
- State uncertainty plainly in one line when a fact cannot be verified.
```

For the full walkthrough of how Soul.md works and what Meta's reported Muse Spark 1.3 questionnaire profile looks like, read the [Meta Muse personality guide](https://agent-tune.com/guides/muse-personality).

## Questions people ask.

Where do I change Meta Muse's name and avatar?

Open Settings, then Personalization, then Assistant Identity, and select Identity.md. You can also ask Muse in chat to rename itself or update its avatar in Identity.md.

What is the difference between Identity.md and Soul.md in Meta Muse?

Identity.md controls who the assistant is on screen: its name, avatar, voice, and one-line role. Soul.md controls how the assistant communicates with you, including tone, brevity, formatting, and pushback.

Why did changing my Muse avatar reset my communication rules?

If you stored tone or formatting rules inside Identity.md, asking Muse to regenerate its identity or avatar can overwrite the entire file. Keep communication rules inside the How to work with me section of Soul.md instead.

Can I edit Identity.md without touching Memory.md?

Yes. Tell Muse in chat to update only Identity.md and to leave Soul.md and Memory.md unchanged, or edit Identity.md directly in the Assistant Identity settings pane.

## What changed.

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
