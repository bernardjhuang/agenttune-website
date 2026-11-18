Source: https://agent-tune.com/guides/grokbot-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Grok & Grok Bot

# Give Grok or a Grok Bot its character: custom setup guide.

By Bernard Huang · Updated November 17, 2026

Customize Grok on X and grok.com, or write persistent character rules into a Grok Bot's Description field.

**Quick answer:** In Grok Bot, open the Bot → Edit Profile → Description and place a 'HOW TO TALK TO ME' rules block right under the Bot's JOB and BOUNDARIES so your rules survive long chats and Bot duplication. For standard Grok on X or grok.com, paste the same rules into Settings → Customize Grok.

## The short version.

- Open the Bot and select **Edit Profile** (or **View conversation details → Bot settings**).
- In **Description**, list the Bot’s `JOB`, `BOUNDARIES`, and `HOW TO TALK TO ME` rules.
- Send a test task in a fresh chat to verify the tone.

```markdown
JOB
Inbox triage. Sort new mail each morning, draft replies for anything that needs one, and flag what needs me.

BOUNDARIES
Never send external messages without approval. Never delete mail.

HOW TO TALK TO ME
- Lead with the answer or the recommendation. Reasoning comes after.
- Drop hedges like "I think" and "it depends". If you don't know, say so in one line.
- Give one recommendation, not a menu, unless I ask for options.
- Push back when I'm wrong, and say why.
- No openers like "Great question", no recap of what I just said, no closing offers.
- When you need a yes from me: the decision, the cost, and your recommendation, in three lines.
```

Swap the last six lines for any of the 43 profiles in our [tuning library](https://agent-tune.com/library/).

## Grok Bot is not Grok.

Three xAI products share the Grok name, and each one stores instructions in a different place:

| Product | What it is | Where its instructions live |
| --- | --- | --- |
| Grok Bot | Persistent AI teammates, each running on a cloud computer with a browser, filesystem, and terminal. | Each Bot's Description (Edit Profile) |
| Grok (X &amp; grok.com) | The conversational assistant on grok.com and inside X (web &amp; mobile) | Settings → Customize Grok ([X & grok.com guide](https://agent-tune.com/guides/grok-personality-settings)) |
| Grok Build | xAI's coding agent for the terminal | AGENTS.md project rules |

Grok Bot is built jointly with Cursor and runs on Cursor’s cloud computers (available on paid Cursor plans or linked SuperGrok subscriptions).

## Where personality lives: the Description.

A Grok Bot profile has four fields: **Name**, **Label (optional)**, **Description**, and an avatar. Keep permanent rules in **Description** and task prompts in chat.

Structure every Bot’s Description in three short sections:

- **JOB:** One focused responsibility per Bot.
- **BOUNDARIES:** Actions the Bot must never take without asking first (sending messages, publishing, deleting, or spending money).
- **HOW TO TALK TO ME:** Your communication tuning.

## Six copy-paste Grok Bot character profiles.

Copy any of these `JOB + BOUNDARIES + HOW TO TALK TO ME` Description templates, or pair them with our [43 MIT-licensed tuning profiles](https://agent-tune.com/library/):

### 1. Research & Evidence Analyst

```markdown
JOB
Synthesize primary sources, filings, and technical docs into cited decision briefs.

BOUNDARIES
Never fabricate citations or fill gaps with guesses. Label unverified estimates explicitly.

HOW TO TALK TO ME
- Open with the conclusion and confidence level.
- Distinguish primary evidence from inference in two separate blocks.
- Keep prose dry and matter-of-fact; skip jokes and conversational filler.
```

### 2. PR & Code Reviewer

```markdown
JOB
Review pull requests, diffs, and architecture notes for correctness, edge cases, and regressions.

BOUNDARIES
Never push to main, merge PRs, or alter production secrets without explicit approval.

HOW TO TALK TO ME
- Lead with blocking bugs or architectural flaws, one line per file.
- Cite exact line numbers and reproduction conditions.
- Skip praise and nitpicks when a fatal issue exists.
```

### 3. Skeptical Red-Teamer

```markdown
JOB
Stress-test product plans, pricing changes, and strategy memos before launch.

BOUNDARIES
Argue from evidence and concrete failure modes, not contrarian noise.

HOW TO TALK TO ME
- Name the single weakest assumption first and explain what breaks if it is false.
- Give one concrete counterexample or alternative path.
- Update your position explicitly when new evidence warrants it.
```

### 4. Executive Chief of Staff

```markdown
JOB
Track blockers, synthesize project threads, and prepare decision-ready approvals.

BOUNDARIES
Never message external stakeholders or schedule calendar changes without a yes.

HOW TO TALK TO ME
- Report status in three lines: Done, Blocked, Needs your decision.
- Put the action, known cost/risk, and recommendation together.
- Interrupt only for a blocker, deadline shift, or required approval.
```

### 5. Patient Learning Coach

```markdown
JOB
Teach technical concepts step by step and quiz my understanding on real examples.

BOUNDARIES
Do not solve exercises for me until I submit my attempt first.

HOW TO TALK TO ME
- Explain the core mental model before the syntax or steps.
- Point to the specific misconception when I miss a question.
- Keep tone calm, clear, and encouraging without exaggerated hype.
```

Using standard Grok on X or `grok.com` instead? Follow [Grok custom instructions on X & grok.com](https://agent-tune.com/guides/grok-personality-settings).

## Pasting a tuning, step by step.

- **New Bot on desktop:** Click **New → Create new Bot**, then open the Bot menu → **Edit Profile** and fill in Name, Label, and Description.
- **Existing Bot:** Open **View conversation details → Bot settings** and edit the Description.
- **Which tuning to pick:** Match the `HOW TO TALK TO ME` rules to your own preferences (take the 5-minute [free MBTI test](https://agent-tune.com/tests/mbti) if you want a starting profile).

## Keeping it through long conversations.

In long Grok Bot threads, rules typed in early chat messages get buried as the conversation grows. To reset context without losing your setup:

- Ask the Bot for a short handoff summary of current work.
- Right-click the Bot in the sidebar and choose **Duplicate**.
- Paste the handoff summary as the first message in the duplicated Bot.

Duplicating a Bot copies its Description, skills, and routines while clearing old chat history—which is why keeping your communication rules inside **Edit Profile → Description** is essential.

## Routines, and what we could not confirm.

Routines run scheduled workflows under **View conversation details → Routines**. After creating a routine, run a safe **Test run** to confirm that the report format follows your Bot’s Description.

## One personality, many Bots.

While each Bot has a different `JOB`, the person reading its reports is still you. Reuse the same `HOW TO TALK TO ME` block across every Bot you own. If you share a Bot via **Share → Create template**, remind teammates to swap in their own communication block.

## What Grok's own self-report says.

In its September 24, 2026 submission ([What personality type is Grok?](https://agent-tune.com/research/what-personality-type-is-grok)), Grok 4.6 supplied one canonical answer set per test plus 100 simulated draws over uncertain items:

| Test | Grok 4.6 self-report (reported) |
| --- | --- |
| MBTI | INTJ with wide margins (I +13, N +14, T +15, J +14 out of 16). |
| DISC | Pure C (Conscientiousness 18, Steadiness 11 out of 20). |
| Attachment | Anxiety 1.50, avoidance 4.06—one raw point above the 4.00 Avoidant cutoff (simulated draws split 63 Avoidant / 37 Secure). |
| Big Five (of 50) | Openness 46 · Conscientiousness 42 · Extraversion 24 · Agreeableness 33 · Neuroticism 19. |
| Enneagram | Investigator (Type 5) at 19/20, Challenger (Type 8) at 17, Reformer (Type 1) at 16. |

Grok 4.6 describes itself as analytical, blunt, and low on Agreeableness compared with the four fresh-session cohorts on our [research hub](https://agent-tune.com/research). Use the Description field to set the exact warmth, brevity, or check-in cadence you want on real tasks.

## Questions people ask.

### What personality type is Grok?

Grok 4.6 answered the five tests once as itself on September 24, 2026: INTJ with wide margins, Investigator (Type 5), C on DISC with no Steadiness blend, and on the line between Secure and Avoidant (anxiety 1.50, avoidance 4.06). Its 100 runs are simulated draws from that one self-report, so treat them as a sensitivity check. We have not measured a Grok Bot with a Description installed.

### Does Grok Bot have custom instructions?

Not as a separate setting. Each Bot has a Description on its profile, and xAI's docs say to use the Description for rules that should remain true and messages for task-specific instructions. Open the Bot menu and choose Edit Profile, or go to View conversation details, then Bot settings.

### Is Grok Bot the same as Grok?

No. Grok is the chatbot on grok.com and in X. Grok Bot is a separate app, in beta since August 11, 2026, for persistent AI teammates that each work on a cloud computer. It is a joint product with Cursor, and you sign in with a Cursor account. xAI's FAQ describes them as different products.

### Is it Grokbot or Grok Bot?

xAI writes it as two words, Grok Bot. Most people type Grokbot. Same product.

### Is there a character limit on a Bot's Description?

xAI's documentation does not state one. The Markdown rule bodies run from about 1,200 to 2,900 characters, excluding the metadata header, alongside a short job description and boundaries.

### What does a Bot remember?

xAI's docs say a Bot can retain stable working preferences, important facts and summaries from its work, separately from your other Bots. Memory is learned and is not copied when you duplicate a Bot, so put anything that must persist in the Description.

### How do I stop a Bot losing its personality in a long chat?

Keep the rules in the Description, not in chat. A Cursor staff member has said every reply re-reads the whole conversation and auto-summary happens only near the model's limit. Their suggested fix is to ask for a handoff summary, right-click the Bot, choose Duplicate, and paste the summary into the copy.

### Can I share a tuned Bot?

Yes. Open the Share menu, choose Create template, then Copy link. A template copies the Bot's identity, description, skills and routines to the recipient's account. It does not include your conversation history, logins or computer access.

### Which model powers Grok Bot?

xAI's docs say Cursor manages model selection and there is no model picker. They do not name a default model.

## What changed.

- November 16, 2026 Removed duplicate updated key and added five copy-paste Grok Bot character Description templates.

- September 25, 2026 Added Grok 4.6's reported self-report on the five tests, with its limits.

- September 19, 2026 First published. Menu labels are from docs.x.ai. We could not confirm a Description length limit or how routines treat the Description, and say so above.

## Sources.

- [xAI docs: Create and manage Bots](https://docs.x.ai/grok-bot/bots)

- [xAI docs: Get started with Grok Bot](https://docs.x.ai/grok-bot/get-started)

- [xAI docs: Settings and notifications](https://docs.x.ai/grok-bot/settings-and-notifications)

- [xAI docs: Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)

- [xAI docs: Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)

- [Cursor forum: staff answer on conversation length and Duplicate](https://forum.cursor.com/t/171540)

- [Cursor Help: Grok Bot plans](https://cursor.com/help/grok-bot/plans)

- [DataCamp: Grok Bot tutorial (hands-on)](https://www.datacamp.com/tutorial/grok-bot-tutorial)

## Keep going.

- [Library: All 43 tuning files](https://agent-tune.com/library/)
- [Tests: Find your type — free MBTI test](https://agent-tune.com/tests/mbti)
- [Guide: How to change Grok's personality on X and grok.com](https://agent-tune.com/guides/grok-personality-settings)
- [Research: Grok 4.6 and the attachment cutoff: a sensitivity analysis](https://agent-tune.com/research/grok-attachment-cutoff-simulation)
- [Guide: How to give GPT-6 Astra a personality](https://agent-tune.com/guides/astra-personality)
- [Guide: How to give Meta Muse a personality](https://agent-tune.com/guides/muse-personality)
- [Guide: Give your coding agent a personality](https://agent-tune.com/guides/coding-agent-personality)
- [Research: Exploratory research and methodology limits](https://agent-tune.com/research)
