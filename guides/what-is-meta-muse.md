Source: https://agent-tune.com/guides/what-is-meta-muse
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# What is Meta Muse? Files, plans, and how it works.

By Bernard Huang · Updated September 25, 2026

Meta Muse (muse.ai and iOS/Android app) is Meta's personal AI agent with connected-app actions, scheduled reminders, side chats, and three editable Markdown files: Soul.md (how it communicates with you), Identity.md (name, avatar, and voice), and Memory.md (facts saved about you). Meta lists a Free tier ($0, refreshing usage limit), Power ($20/month, 500M Muse tokens/week), and Maximum ($100/month, 3B Muse tokens/week).

## What Muse is—and how it differs from Meta AI.

Searchers frequently confuse Meta Muse with Meta AI. They are separate products with different interfaces, memory models, and customization controls:

| Feature | Meta Muse (muse.ai &amp; Muse app) | Meta AI (WhatsApp, Instagram, web) |
| --- | --- | --- |
| Primary role | Persistent personal agent with cloud workspace, connectors, and scheduled tasks | General conversational assistant inside social apps and meta.ai |
| Customization files | Editable Soul.md, Identity.md, and Memory.md | Chat prompts and basic memory toggles; no Soul.md file system |
| Thread model | One persistent Main Chat plus disposable Side Chats | Standard multi-thread chat history |
| Sensitive actions | Connector permissions + approval prompts for actions like email or purchases ([Meta privacy docs](https://www.meta.com/help/artificial-intelligence/1047255454427887/)) | No cloud-VM file system or Muse connector approvals |

For a step-by-step comparison of customization controls across both products, see [Meta AI vs. Meta Muse: how to change personality and tone](https://agent-tune.com/guides/meta-ai-vs-meta-muse-personality).

## Where it runs.

According to Meta’s documentation, each user’s Muse runs in an isolated cloud virtual machine with automated backups, a separate credential store, and external permission checks outside the model. Meta also describes an upcoming Confidential VM architecture; check your account’s security settings and [Meta’s permissions documentation](https://www.meta.com/help/artificial-intelligence/1047255454427887/) before granting connector access.

## The three files: Soul.md, Identity.md, and Memory.md.

On both web (muse.ai) and the iOS/Android app, tap the Assistant icon (or Profile → Personalization) → Identity to view and edit all three files directly:

| File | What it controls | Menu path | Dedicated guide &amp; tool |
| --- | --- | --- | --- |
| Soul.md | Core truths, boundaries, tone, brevity, and pushback rules | Assistant icon → Identity → Soul | [Soul.md guide](https://agent-tune.com/guides/muse-personality) · [Soul.md editor](https://agent-tune.com/tools/muse-soul-md-editor) |
| Identity.md | Display name, visual avatar, spoken voice, and tagline | Assistant icon → Identity → Edit | [Avatar & Identity.md guide](https://agent-tune.com/guides/muse-identity-md-avatar-name) |
| Memory.md | Saved facts about you, projects, and recurring preferences | Assistant icon → Identity → Memory | [Memory.md & safe reset guide](https://agent-tune.com/guides/muse-memory-md-privacy-reset) |

Keep formatting and tone rules inside Soul.md rather than Identity.md so changing your Muse’s avatar or name never overwrites how it writes to you. Need mobile menu help or Side Chat rules? Read [Meta Muse mobile menus & Side Chats vs. Main Chat](https://agent-tune.com/guides/muse-troubleshooting-mobile-side-chats).

## Memory: what it collects and how to control it.

Meta says Muse builds its understanding of you from four sources: information you share directly, preferences and patterns it observes, context from Connectors, and its file-based memory system. You can ask it at any time what it has saved, or open Memory.md.

- Edit or delete a memory: Assistant icon, then Identity, then Memory, and edit the file. Or ask in chat.
- Forget a topic: ask Muse to forget a person, topic or set of interactions. Meta says it removes the information from its memories and supporting files to the best of its ability, and that after you delete something Muse may still remember what it learned from it.
- Delete messages and side chats: tap and hold a message, or open the side chat's menu. Deleting the main thread means resetting Muse.
- Reset Muse: Settings, then Data Controls, then Reset Muse. It returns Muse to its original state and permanently deletes chat history, files and active tasks. It cannot be undone.
- Download your data: Settings, then Data controls, then Download your Muse data.
- Import memory from another assistant: Settings, then Data Controls, then Import memory. Export your chats from the other assistant and upload the .zip. Everything in that export becomes material Muse can use.
- Training: the setting that lets Meta use your interactions to train its models is on when you first use Muse. Settings, then Data controls, then toggle off Help improve our AI models. Meta says it removes categories of personal information such as names, email addresses and phone numbers, disassociates the interactions from your account, and that turning it off also applies to past interactions.

## Plans and availability.

| Plan | Price | Usage allowance |
| --- | --- | --- |
| Free | $0 | A usage limit that refreshes |
| Power | $20/month | 500M Muse tokens/week |
| Maximum | $100/month | 3B Muse tokens/week |

These are the prices listed in [Meta’s subscription documentation](https://www.meta.com/help/subscriptions/1021145227643680/) when checked September 25, 2026. Benefits and availability vary by account and location; confirm the offer in your own onboarding or subscription screen.

## Muse’s questionnaire results, as reported.

A supplied September 24 report identifies its model as Muse Spark 1.3 and reports 100 sequential administrations per test inside one session per instrument. It reports ISTJ labels in 80 runs, Type 2 labels in 78, and Secure attachment labels in 100. No raw answer vectors or collection harness were supplied, so we cannot re-score the results or verify tie handling. Read the [Muse research page](https://agent-tune.com/research/what-personality-type-is-muse) for the numbers and evidence limits.

These figures do not establish a default personality or predict how Muse will behave on your tasks. Use a [persistence test](https://agent-tune.com/guides/muse-soul-md-persistence-test) to inspect a saved preference in your own account.

## Questions people ask.

What is Meta Muse?

Meta Muse is a personal AI agent available through muse.ai and its mobile app, with availability depending on location and account. It uses connected services and editable files including Soul.md, Identity.md and Memory.md. Meta lists a free usage-limited tier, Power at $20/month and Maximum at $100/month. Approval requirements depend on the action, connector and permissions you select.

Is Muse the same as Meta AI?

Muse has its own product interface and agent settings. This guide covers Muse’s documented files and controls; do not assume they apply to Meta AI inside other apps.

Is Muse free?

Meta lists a free tier with a usage limit. Its subscription page lists Power at $20/month with 500M Muse tokens per week and Maximum at $100/month with 3B per week. Benefits and availability can vary by account and region.

What model does Muse use?

Our supplied questionnaire report names Muse Spark 1.3. That report does not independently verify which model version serves every current Muse account.

Can Muse send email or make purchases?

Meta documents these as examples of important actions for which Muse is designed to request approval. Requirements vary by connector, action and selected permissions. Review the proposed action and the permissions you grant.

How do I change its communication style?

Edit Soul.md through Assistant icon, Identity, Soul, or ask Muse to update the preference and inspect the saved text. Keep a copy of your original file and test the change on a real task.

Can I stop training on my Muse interactions?

Meta says Help improve our AI models is on initially. You can turn it off under Settings, Data controls. Meta says this choice also applies to previous interactions; it is separate from deleting stored files or memories.

## What changed.

- September 25, 2026 First published, checked against Meta's help center on September 25, 2026.

## Sources.

- [Meta Help Center: How to customize Muse's personality and memories](https://www.meta.com/help/artificial-intelligence/995796179982326/)

- [Meta Help Center: How to manage your Muse data](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

- [Meta Help Center: How Muse handles your privacy, safety and security](https://www.meta.com/help/artificial-intelligence/1047255454427887/)

- [Meta Help Center: About Muse subscriptions](https://www.meta.com/help/subscriptions/1021145227643680/)

- [Give Meta Muse a character: the Soul.md guide](https://agent-tune.com/guides/muse-personality)

## Keep going.

- [Guide: Give Meta Muse a character: the Soul.md guide](https://agent-tune.com/guides/muse-personality)
- [Guide: Twenty Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)
- [Guide: Muse characters: Soul.md, Identity.md and Memory.md](https://agent-tune.com/guides/meta-muse-characters)
- [Guide: Muse vs ChatGPT vs Claude: where the personality lives](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality)
- [Research: What personality type is Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
