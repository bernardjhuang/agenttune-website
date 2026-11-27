Source: https://agent-tune.com/guides/what-is-meta-muse
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# What is Meta Muse? Files, plans, and how it works.

By Bernard Huang · Updated November 23, 2026 · [Markdown (.md)](https://agent-tune.com/guides/what-is-meta-muse.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Meta Muse (muse.ai and iOS/Android app) is Meta's personal AI agent with connected-app actions, scheduled Tasks, Side Chats, and three editable Markdown files: Soul.md (how it communicates with you), Identity.md (name, avatar, and voice), and Memory.md (facts saved about you). Plans include Free ($0, refreshing usage limit), Power ($20/month, 500M Muse tokens/week), and Maximum ($100/month, 3B Muse tokens/week).

## Do this next with Meta Muse.

| What you want to do | Go straight to |
| --- | --- |
| Copy a working personality | [20 Soul.md Templates + 4 .md downloads →](https://agent-tune.com/guides/muse-soul-md-templates) |
| Pick a name & avatar character | [16 Identity.md Personas & 3-File Kit Builder →](https://agent-tune.com/guides/muse-identity-md-avatar-name) |
| Edit Soul.md without losing starter truths | [Meta Muse Soul.md Merge Editor →](https://agent-tune.com/tools/muse-soul-md-editor) |
| Fix refusals, Side Chats, or reset safely | [Mobile, Side Chats & Refusal Fixes →](https://agent-tune.com/guides/muse-personality) |

## What Muse is—and how it differs from Meta AI.

Here is how **Meta Muse** compares side by side with **Meta AI**:

| Feature | Meta Muse (`muse.ai` & Muse app) | Meta AI (WhatsApp, Instagram, web) |
| --- | --- | --- |
| Primary role | Persistent personal agent with isolated cloud workspace, Connectors, and scheduled Tasks | General conversational assistant inside social apps and meta.ai |
| Pricing & allowances | Free ($0, refreshing limit), Power ($20/mo, 500M tokens/wk), Maximum ($100/mo, 3B/wk) | Included free in Meta social apps & meta.ai |
| Customization files | Editable `Soul.md`, `Identity.md`, and `Memory.md` | Chat prompts and basic memory toggles; no `Soul.md` file system |
| Thread model | One persistent Main Chat plus disposable Side Chats | Standard multi-thread chat history |
| Sensitive actions | Connector permissions + approval prompts for actions like email or purchases ([Connector approval guide](https://agent-tune.com/guides/muse-personality)) | No cloud-VM file system or Muse connector approvals |

For a step-by-step comparison of tone settings across both products, see [Meta AI vs. Meta Muse: how to change personality and tone](https://agent-tune.com/guides/meta-ai-vs-meta-muse-personality).

## Where it runs.

Each user’s Muse runs in an isolated cloud virtual machine with automated backups, a separate credential store, and external permission checks. Review your account’s security settings and [Meta’s permissions documentation](https://www.meta.com/help/artificial-intelligence/1047255454427887/) before granting Connector access.

## The three files: Soul.md, Identity.md, and Memory.md.

On both `muse.ai` and the iOS/Android app, tap the **Assistant icon** (or Profile → Personalization) → **Identity** to view and edit all three files:

| File | What it controls | Menu path | Dedicated guide & tool |
| --- | --- | --- | --- |
| `Soul.md` | Core truths, boundaries, tone, brevity, and pushback rules | Assistant icon → Identity → Soul | [Soul.md guide](https://agent-tune.com/guides/muse-personality) · [Soul.md editor](https://agent-tune.com/tools/muse-soul-md-editor) |
| `Identity.md` | Display name, visual avatar, spoken voice, and tagline | Assistant icon → Identity → Edit | [Avatar & Identity.md guide](https://agent-tune.com/guides/muse-identity-md-avatar-name) |
| `Memory.md` | Saved facts about you, projects, and recurring preferences | Assistant icon → Identity → Memory | [Memory.md & safe reset guide](https://agent-tune.com/guides/muse-memory-md-privacy-reset) |

Keep formatting and tone rules inside `Soul.md` rather than `Identity.md` so changing your Muse’s avatar or name never overwrites how it talks to you. For mobile menu paths and Side Chat rules, read [Meta Muse mobile menus & Side Chats vs. Main Chat](https://agent-tune.com/guides/muse-personality).

## Memory: what it collects and how to control it.

Muse builds its memory from four sources: facts you share directly, patterns it observes, context from Connectors, and `Memory.md`. Here are the key controls:

- **Edit or delete a memory:** Tap **Assistant icon → Identity → Memory** and edit `Memory.md`, or ask in chat.
- **Forget a topic:** Ask Muse in chat to forget a person, project, or topic.
- **Delete messages and Side Chats:** Long-press a message or open the Side Chat menu. (Do not delete Main Chat unless you want a full account reset.)
- **Reset Muse:** **Settings → Data Controls → Reset Muse** permanently deletes chat history, files, and active Tasks.
- **Download or import memory:** Use **Settings → Data Controls** to download your Muse data or import a memory export (audit it first in our [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer)).
- **Model training toggle:** Help improve our AI models starts enabled by default. Turn it off anytime under **Settings → Data controls**.

## Plans and availability.

| Plan | Price | Usage allowance |
| --- | --- | --- |
| Free | $0 | Refreshing usage allowance |
| Power | $20/month | 500M Muse tokens/week |
| Maximum | $100/month | 3B Muse tokens/week |

Prices and token allowances are from [Meta’s subscription documentation](https://www.meta.com/help/subscriptions/1021145227643680/).

## Muse’s questionnaire results, as reported (the fine print).

In the supplied September 24, 2026 report for Muse Spark 1.3 (100 sequential in-session runs per test without raw vectors), Muse was reported as testing as **ISTJ in 80 of 100 MBTI runs**, **Type 2 (Helper) in 78 of 100 Enneagram runs**, and **Secure in all 100 attachment runs**. Read the [Muse research note](https://agent-tune.com/research/what-personality-type-is-muse) for full details, or download the [45-turn persistence test kit](https://agent-tune.com/guides/muse-soul-md-templates#compare-behavior-and-persistence-kit) to verify `Soul.md` edits in your own account.

## Questions people ask.

### What is Meta Muse?

Meta Muse is a personal AI agent available through muse.ai and its mobile app, with availability depending on location and account. It uses connected services and editable files including Soul.md, Identity.md and Memory.md. Meta lists a free usage-limited tier, Power at $20/month and Maximum at $100/month. Approval requirements depend on the action, connector and permissions you select.

### Is Muse the same as Meta AI?

Muse has its own product interface and agent settings. This guide covers Muse’s documented files and controls; do not assume they apply to Meta AI inside other apps.

### Is Muse free?

Meta lists a free tier with a usage limit. Its subscription page lists Power at $20/month with 500M Muse tokens per week and Maximum at $100/month with 3B per week. Benefits and availability can vary by account and region.

### What model does Muse use?

Our supplied questionnaire report names Muse Spark 1.3. That report does not independently verify which model version serves every current Muse account.

### Can Muse send email or make purchases?

Meta documents these as examples of important actions for which Muse is designed to request approval. Requirements vary by connector, action and selected permissions. Review the proposed action and the permissions you grant.

### How do I change its communication style?

Edit Soul.md through Assistant icon, Identity, Soul, or ask Muse to update the preference and inspect the saved text. Keep a copy of your original file and test the change on a real task.

### Can I stop training on my Muse interactions?

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
- [Guide: Muse vs ChatGPT vs Claude: where the personality lives](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality)
- [Research: What personality type is Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
- [Model profile: Muse Spark — personality profile](https://agent-tune.com/models/muse-spark)
- [Model profile: Muse Wonder — personality profile](https://agent-tune.com/models/muse-wonder)
