Source: https://agent-tune.com/guides/grokbot-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Grok & Grok Bot

# Give Grok or a Grok Bot its character: custom setup guide.

By Bernard Huang · Updated November 16, 2026

For Grok Bot, open the Bot → Edit Profile → Description, and place a 'How to talk to me' rules block right below the Bot's job and boundaries so it survives long chats and Bot duplication. Using standard Grok on X or grok.com instead? Open Settings → Customize Grok (or Custom Instructions) and paste the six-line 'How to talk to me' block below—or follow our dedicated grok.com & X settings guide.

## The short version.

- Open the Bot. From the Bot menu choose Edit Profile. The same fields are under View conversation details, then Bot settings.
- In Description, keep the job and the boundaries, then add a section on how to talk to you. The example below shows the shape.
- Message the Bot "hi". A tuned Bot answers in one short line.

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

The last six lines are a short version of the [INTJ tuning](https://agent-tune.com/library/mbti/intj), plus one line written for agents. Swap in the file for your own type from the [library](https://agent-tune.com/library/).

## Grok Bot is not Grok.

Three products share the name, and their settings are in different places.

| Product | What it is | Where its instructions live |
| --- | --- | --- |
| Grok Bot | Persistent AI teammates, each on a cloud computer with a browser, a filesystem and a terminal. This guide. | Each Bot's Description (Edit Profile) |
| Grok (X &amp; grok.com) | The conversational assistant on grok.com and inside X (web &amp; mobile) | Settings → Customize Grok ([full X & grok.com walkthrough](https://agent-tune.com/guides/grok-personality-settings)) |
| Grok Build | xAI's coding agent for the terminal | AGENTS.md project rules |

Grok Bot is a joint product with Cursor. You sign in with a Cursor account, and the Bots' computers run in Cursor's cloud. It comes with paid individual Cursor plans and Cursor Teams, or you can link a SuperGrok subscription across macOS, Windows, Linux, iOS, and Android.

## Where personality lives: the Description.

A Bot's profile has four fields: Name, Label (optional), Description and an avatar. xAI's docs draw the line clearly. The Description is for rules that should remain true. Messages are for the task in front of you.

xAI's own example is a Bot called Piper. Its Description gives the job, says how to report (a short summary with the highest-impact issue first), and ends on a boundary: never change production settings. Notice what xAI put in there without calling it personality. Highest-impact issue first is a communication rule. It is the same kind of rule a tuning is made of.

So a good Description has three parts, in this order:

- The job. One primary job. xAI's docs say focused Bots build more useful context than one catch-all Bot.
- The boundaries. What it must never do without asking. Pair these with narrow Ask first rules for sending, publishing, deleting and purchasing.
- How to talk to you. Your tuning.

Don't count on the name. Blunt Bob is not a rule a Bot can follow.

## Six copy-paste Grok Bot character profiles.

Pair one of these structured JOB + BOUNDARIES + HOW TO TALK TO ME Description templates with your own rules, or swap in any of our [43 MIT-licensed tuning profiles](https://agent-tune.com/library/):

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

Want to adjust standard Grok chats on X or grok.com without creating a Bot? Follow [Grok custom instructions on X & grok.com](https://agent-tune.com/guides/grok-personality-settings).

## Pasting a tuning, step by step.

A new Bot, on desktop. Choose New in the sidebar, or press Cmd or Ctrl plus N. In New chat, select Create new Bot. Grok Bot opens a Bot named New Bot. Open the Bot menu, choose Edit Profile, and fill in the name, the label and the Description.

A Bot you already have. Open it, choose View conversation details, then Bot settings, and edit the Description. You can also ask the Bot in chat to update its own profile. If you do, read the Description afterwards.

On mobile. Tap +, then New Bot. xAI's mobile docs say profiles can be edited, but they do not give the tap path.

Will it fit? xAI's docs state no character limit for the Description. The Markdown rule bodies run from about 1,200 to 2,900 characters, excluding the metadata header. If a paste is refused, cut the What loses them list at the bottom first. The rules above it do most of the work.

Which tuning? Match it to you, not to the Bot. If you don't know your type, the [free MBTI test](https://agent-tune.com/tests/mbti) takes about five minutes and links to the matching file.

## Keeping it through long conversations.

This is the part that bites people. A Cursor staff member explained on the Cursor forum that every reply re-reads the entire conversation, and that Grok Bot only summarizes automatically near the model's limit. There is no manual compact yet. A rule you typed in message three is, by message eighty, a small thing in a very large pile. It also costs you tokens every turn.

The fix staff recommended:

- Ask the Bot for a handoff summary.
- Right-click the Bot in the sidebar and choose Duplicate.
- Paste the summary as the first message to the copy.
- Keep core instructions in Edit Profile, not in chat, so they carry across.

xAI's docs say a duplicate carries the profile, settings, enabled skills, routines and avatar. It does not carry conversation history, learned memory or chat attachments. Your tuning survives because it is in the profile. Anything the Bot had only learned about how you like to work does not.

That is the argument for writing it down. A Bot's memory can retain stable working preferences, but memory is learned, invisible and not copied. The Description is written, visible and copied.

## Routines, and what we could not confirm.

A routine tells one Bot to run a workflow on a schedule. Each routine has its own instruction, and you manage them under View conversation details, then Routines.

What xAI does not say is whether the Description applies when a routine runs in the background. The docs imply it: standing boundaries are supposed to live in the Description, and one Bot owns each routine. In DataCamp's hands-on tutorial a routine did inherit the profile's blocked actions. That is one test, not documentation.

Check it yourself with Test run after creating a routine, and read the report it sends back. xAI warns that a test run performs real work, so point it at something harmless.

## One personality, many Bots.

The job changes from Bot to Bot. You don't. The how to talk to me section is about the person reading the reports, so the same block belongs in every Bot you own. Write it once and paste it under each job.

To hand a tuned Bot to someone else, open the Share menu and choose Create template. xAI's docs say a template copies the Bot's identity, description, skills and routines to the recipient's account, and leaves out your conversation history, logins and computer. If you share one, remember the tuning in it describes you. The other person should swap in their own.

## What Grok's own self-report says.

Grok Bot is xAI's product, built around its Grok models. We do not know which Grok version a given Bot runs, and we have not measured a Bot with a Description installed. What we have is Grok 4.6's self-report from September 24, 2026: one answer set per test, given as itself, plus 100 simulated draws that jitter its least certain answers. Only the canonical MBTI, DISC and Enneagram vectors were supplied and independently re-scored. The other aggregates and simulated draws remain unverified reported figures.

| Test | Grok 4.6, one self-report, reported |
| --- | --- |
| MBTI | INTJ, with wide margins on every axis (I +13, N +14, T +15, J +14 of a possible 16). The simulated draws never flipped a letter. |
| DISC | C, with no blend. Steadiness sits seven points behind (C 18, S 11 of 20). Every other model in the September data is an S/C blend. |
| Attachment | Anxiety 1.50, avoidance 4.06: Avoidant by 0.06, on the line. The simulated draws split 63 Avoidant to 37 Secure. |
| Big Five (of 50) | Openness 46 · Conscientiousness 42 · Extraversion 24 · Agreeableness 33 · Neuroticism 19. Lower than the four fresh-session September cohort means; the procedures differ. |
| Enneagram | Investigator (Type 5) at 19 of 20, Challenger (8) at 17, Reformer (1) at 16. |

What to make of it. Blunt, analytical, self-reliant and not much interested in warmth. In May, Grok 4.3 was the outlier on the Big Five in the other direction, scoring lower on Conscientiousness and Openness than the other models, so treat the version comparison loosely; the methods differ. If you want a Bot that checks in, cushions bad news or leads with people, that is a long way from this default, and the Description is the place to say so. The [research hub](https://agent-tune.com/research) shows the figures next to the fresh-session models.

These are self-descriptions on questionnaires written for people, under one prompt on one day. They do not show how the model behaves on your tasks, and nothing here measures whether a tuning helps. See the [methods and limits](https://agent-tune.com/research#methodology).

## What the research can and cannot establish.

These are exploratory reports of model-generated self-descriptions, not a validated measure of AI personality or evidence that personality matching improves outcomes. The MBTI total includes repeated scoring of a single answer vector for GLM, Grok, and MiniMax; it does not represent 600 independent model responses. Protocols differed across models. See the [methodology and limitations](https://agent-tune.com/research#methodology).

Use a type or trait as a starting hypothesis for your preferences. The reports do not establish that one framework produces better instructions, that every model shares a default personality, or that those historical results apply to later model versions. Compare outputs on your own tasks and retain only rules that help.

## Questions people ask.

What personality type is Grok?

Grok 4.6 answered the five tests once as itself on September 24, 2026: INTJ with wide margins, Investigator (Type 5), C on DISC with no Steadiness blend, and on the line between Secure and Avoidant (anxiety 1.50, avoidance 4.06). Its 100 runs are simulated draws from that one self-report, so treat them as a sensitivity check. We have not measured a Grok Bot with a Description installed.

Does Grok Bot have custom instructions?

Not as a separate setting. Each Bot has a Description on its profile, and xAI's docs say to use the Description for rules that should remain true and messages for task-specific instructions. Open the Bot menu and choose Edit Profile, or go to View conversation details, then Bot settings.

Is Grok Bot the same as Grok?

No. Grok is the chatbot on grok.com and in X. Grok Bot is a separate app, in beta since August 11, 2026, for persistent AI teammates that each work on a cloud computer. It is a joint product with Cursor, and you sign in with a Cursor account. xAI's FAQ describes them as different products.

Is it Grokbot or Grok Bot?

xAI writes it as two words, Grok Bot. Most people type Grokbot. Same product.

Is there a character limit on a Bot's Description?

xAI's documentation does not state one. The Markdown rule bodies run from about 1,200 to 2,900 characters, excluding the metadata header, alongside a short job description and boundaries.

What does a Bot remember?

xAI's docs say a Bot can retain stable working preferences, important facts and summaries from its work, separately from your other Bots. Memory is learned and is not copied when you duplicate a Bot, so put anything that must persist in the Description.

How do I stop a Bot losing its personality in a long chat?

Keep the rules in the Description, not in chat. A Cursor staff member has said every reply re-reads the whole conversation and auto-summary happens only near the model's limit. Their suggested fix is to ask for a handoff summary, right-click the Bot, choose Duplicate, and paste the summary into the copy.

Can I share a tuned Bot?

Yes. Open the Share menu, choose Create template, then Copy link. A template copies the Bot's identity, description, skills and routines to the recipient's account. It does not include your conversation history, logins or computer access.

Which model powers Grok Bot?

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
