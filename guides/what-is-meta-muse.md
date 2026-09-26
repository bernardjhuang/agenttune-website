Source: https://agent-tune.com/guides/what-is-meta-muse
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# Meta Muse, explained.

        By Bernard Huang · Updated September 25, 2026

        Meta Muse is a personal AI agent available through muse.ai and its mobile app, with availability depending on location and account. It uses connected services and editable files including Soul.md, Identity.md and Memory.md. Meta lists a free usage-limited tier, Power at $20/month and Maximum at $100/month. Approval requirements depend on the action, connector and permissions you select.

## What Muse is.

        Muse can use connected services, track goals, deliver scheduled reminders and create artifacts. Meta describes approval checks for certain important actions, including sending email and making purchases. Those requirements can vary with the connector and permissions you choose; an instruction file is not a replacement for reviewing those settings. [Meta’s privacy and permissions documentation](https://www.meta.com/help/artificial-intelligence/1047255454427887/) explains the distinction.

The supplied September personality report identifies its tested configuration as Muse Spark 1.3. We have not independently verified that every Muse account uses that exact model version.

## Where it runs.

        Meta says each user’s Muse runs in an isolated cloud virtual machine, with backups. The documentation describes a future Confidential VM option; it does not establish that this option is available to every account today.

Meta also describes a separate credential store and security checks outside the model. These are vendor-described protections, not a security audit by AgentTune. See [Meta’s explanation of storage, credentials and permissions](https://www.meta.com/help/artificial-intelligence/1047255454427887/).

## Muse is not Meta AI.

        Muse has its own product interface and agent settings. This guide covers Muse’s documented files and controls; do not assume they apply to Meta AI inside other apps.

## The three files.

| File | What Meta says it holds | Where to open it | What to put in it |

| Soul.md | Who your Muse is: core truths, boundaries and personality | Assistant icon, then Identity, then Soul | Communication rules: how it should talk to you, report to you, disagree with you |

| Identity.md | Its name, creature, vibe and tagline | Assistant icon, then Identity, then Edit | The character's name and look |

| Memory.md | Facts about you that it has saved | Assistant icon, then Identity, then Memory | Facts: your name, time zone, interests, preferences |

You can edit and delete all three directly, or ask Muse in chat to change its name, personality and tone, communication style, memories, avatar and tagline; Meta says customizations carry over between conversations. To undo, say "Go back to your default personality" and Muse confirms what it reset. [The Soul.md guide](https://agent-tune.com/guides/muse-personality) covers what to paste; [Muse characters, explained](https://agent-tune.com/guides/meta-muse-characters) covers which file does what.

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

          [GuideGive Meta Muse a character: the Soul.md guide](https://agent-tune.com/guides/muse-personality)
          [GuideTwenty Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)
          [GuideMuse characters: Soul.md, Identity.md and Memory.md](https://agent-tune.com/guides/meta-muse-characters)
          [GuideMuse vs ChatGPT vs Claude: where the personality lives](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality)
          [ResearchWhat personality type is Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
