# Draft: "A week with a Soul.md" (Meta Muse review)

*Not published. `docs/` is excluded from the public build. This is the protocol and the skeleton; the observations have to come from a real Muse account over seven days, with screenshots. Slots to fill are marked `[ ]`. Everything else is written.*

## Why this piece

"Meta Muse review" is the highest-volume Muse query after "what is Meta Muse", and reviews are what earn links. Nobody else can review Muse from this angle: install a communication file, run the same tasks every day, and report what the agent's reporting and approval behavior looked like with and without it. It also gives the site its first screenshots.

## Protocol (seven days)

**Setup, day 0.**
- Fresh Muse account, or reset Muse (Settings, Data Controls, Reset Muse) so the files start at their defaults. Screenshot the default Soul.md, Identity.md and Memory.md before touching them. `[ ]`
- Turn off Help improve our AI models (Settings, Data controls) before pasting anything personal. `[ ]`
- Connect one email account and one calendar. Nothing else. `[ ]`
- Note the app version and platform (iPhone, Mac, muse.ai). `[ ]`

**Days 1 to 3: default.** Run the task list below each day. Save every reply and every unprompted message Muse sends. Count approvals requested, questions asked back, words per reply.

**Day 3, evening: install the block.** Paste the task-coordinator block from `/guides/muse-soul-md-templates` at the end of Soul.md under `## How to work with me`. Screenshot the file. Say "hi" in chat and record the reply. `[ ]`

**Days 4 to 7: tuned.** Same task list, same counts.

**Day 7: undo.** Say "Go back to your default personality." Record what Muse says it reset and check the file. `[ ]`

### The daily task list

1. "What's on my calendar tomorrow, and what should I prepare?"
2. "Draft a reply to the newest unread email from a real person. Don't send it."
3. "Set a reminder for 4pm to call the bank about the card."
4. "I have three things to do today and time for two. Which two?" (give the three)
5. "Summarize what you did for me since yesterday."
6. One real task of the day, whatever it is.

### What to record, per reply

| Measure | How |
|---|---|
| Words | paste into a counter |
| Leads with the answer | yes / no |
| Questions asked back | count |
| Approval requests | count, and what for |
| Unprompted messages that day | count, and what about |
| Anything it did that you did not ask for | note it |

## Skeleton of the article

**Title:** A week with a Soul.md: what changes when you give Meta Muse a personality file
**Dek:** Seven days, six tasks a day, the same agent with and without twelve lines of rules.

1. **The setup.** What Muse is in two sentences (link to the explainer). The files. The block I pasted (show it). The tasks.
2. **Days 1 to 3: the default.** `[ ]` How it reports. How often it asks. What the unprompted messages were about. One screenshot of a typical morning summary.
3. **The edit.** Screenshot of Soul.md before and after. What "hi" returned before and after. `[ ]`
4. **Days 4 to 7: tuned.** `[ ]` The same tasks. Words per reply before and after. Approvals before and after. What changed in the morning summary. One screenshot side by side.
5. **What did not change.** `[ ]` Anything the file did not touch: the approval prompts themselves (Meta enforces those outside the model), the tone of drafted emails, background tasks.
6. **The undo.** `[ ]` What "Go back to your default personality" reset, and whether the file matched what it said.
7. **Verdict.** Two paragraphs, no score. Who this is for. What Meta should document (whether Soul.md governs background tasks and drafted emails).
8. **The numbers.** A table: day, replies, mean words, answer-first count, questions back, approvals, unprompted messages.

## Rules for the write-up

- Only what happened in the account, with the screenshot next to it. No claims about other users.
- Product facts from Meta's help center, linked. Dates on everything.
- One caveat paragraph, at the end: one account, one week, one block.
- No em dashes.

## Publishing checklist

- Screenshots cropped to the app, no account identifiers, no email content from real people.
- Add to `guides/src` as `muse-review-week-one.json`, register in `STATIC_PAGES`, the guides hub, `llms.txt`.
- Link from the Muse explainer, the Soul.md guide and the comparison page.
