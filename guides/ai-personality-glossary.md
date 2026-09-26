Source: https://agent-tune.com/guides/ai-personality-glossary
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · reference

# An AI personality glossary.

        By Bernard Huang · Updated September 26, 2026

        A tuning is a short text file of communication rules you paste into an AI's settings so it talks to you the way you think. The place it goes has a different name in every product: custom instructions in ChatGPT, Instructions for Claude, an output style in Claude Code, Soul.md in Meta Muse, a Bot's Description in Grok Bot, AGENTS.md in Codex. The rest of this page defines those and the research terms behind the numbers.

## The thing you paste.

### Tuning (tuning file)

A Markdown file of communication rules written for one personality type (the library contains 43, with lengths that vary): what to lead with, how direct to be, how to disagree, when to stop asking questions. AgentTune publishes 43 of them under an MIT licence. You paste one into your AI's instructions and edit the lines that don't fit. See [the library](https://agent-tune.com/library/).

### Compact tuning

A version of a tuning cut to under 1,500 characters so it fits even the smaller ChatGPT custom-instructions limit. The [generator](https://agent-tune.com/tools/custom-instructions-generator) produces it.

### Persona prompt

Instructions that make an AI play a character: a pirate, a stoic mentor, a named assistant. Different from a tuning, which adjusts how the AI treats you rather than who it pretends to be. Specific rules can be easier to evaluate; this site has not demonstrated that they persist better than adjectives across long chats. See [how to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality).

### Communication preferences

What a tuning encodes: pacing, directness, decision framing, feedback style, how much reassurance. Not tone, which is how a reply sounds, and not facts about you, which belong in memory.

### Verification probe

A one-line test message and the behavior to expect back, shipped with each tuning file so you can check the install took. A short greeting alone does not prove the instructions loaded. Use representative tasks and repeat checks.

## Where it goes, product by product.

### System prompt

High-priority instructions supplied with a model request. API fields and hierarchy vary by provider; product settings need not map directly to one system message.

### Custom instructions (ChatGPT)

Preferences under Settings, Personalization, Custom Instructions. Available controls and limits vary by client. Use the limit shown in your app; AgentTune’s compact export budget is 1,500 characters. See [custom instructions by type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type).

### Instructions for Claude

The account-level box in Claude's settings that applies to every conversation. Formerly 'personal preferences'. See [how to change Claude's personality](https://agent-tune.com/guides/claude-personality).

### Project instructions

Instructions scoped to one Project in Claude or ChatGPT. Use them for context-specific preferences, and check the product’s instruction hierarchy when account and project rules conflict.

### Output style (Claude Code)

A Markdown file in ~/.claude/output-styles/ that changes the default instructions Claude Code works from, sent on every turn. The one line that matters is keep-coding-instructions: true; without it a custom style drops the built-in engineering rules. See [the Claude Code guide](https://agent-tune.com/guides/claude-code-personality).

### CLAUDE.md

The project file Claude Code reads at the start of a session: commands, conventions, what never to touch. It arrives as a message, not as part of the system prompt, and it is shared with your team, which is why personal communication rules belong in an output style instead. See [CLAUDE.md examples](https://agent-tune.com/guides/claude-md-examples).

### AGENTS.md

An open, cross-agent instruction file read by Codex, Cursor and others. In local Codex, the personal copy at ~/.codex/AGENTS.md is where your rules go. See [the Astra guide](https://agent-tune.com/guides/astra-personality).

### Soul.md

Meta Muse's file for who your Muse is: core truths, boundaries and personality. Opened under the Assistant icon, then Identity, then Soul. Communication rules go here; the name and avatar go in Identity.md; facts about you go in Memory.md. See [Muse characters, explained](https://agent-tune.com/guides/meta-muse-characters).

### Description (Grok Bot)

The field on a Grok Bot's profile, under Edit Profile, that xAI's docs say to use for rules that should stay true. It persists across conversations and travels with a duplicated Bot. See [the Grok Bot guide](https://agent-tune.com/guides/grokbot-personality).

### Gem (Gemini)

A saved Gemini configuration with its own instructions field. Paste a tuning there for a Gemini that is already tuned when you open it.

### Memory

What an assistant saves about you across conversations: facts, projects, stated preferences. Visibility and editing controls vary by product. Inspect saved memory in the available controls; use explicit instructions for preferences you want to state directly.

## The tests.

### Instrument

A questionnaire with a fixed set of items and a published scoring rule. AgentTune uses five open ones: OEJTS, a 36-item OEPS adaptation, ODAT, IPIP-50 and ECR-R. See [the five open tests, explained](https://agent-tune.com/guides/open-personality-tests).

### Item

One question on a test. The OEJTS has 32, the IPIP-50 has 50.

### Reverse-keyed item

An item worded so that agreeing points away from the trait ('Don't talk a lot' on Extraversion). Scored as the scale maximum plus one minus the answer.

### Type

A category a sorter puts you in: INTJ, Type 5, DISC S, Secure. Types turn a margin into a label, which is why a one-point difference can change the name.

### Trait

A continuous score, like Big Five Agreeableness from 10 to 50. Traits keep the margin visible.

### Wing (Enneagram)

The higher-scoring of the two types adjacent to your core type, written 5w4 or 5w6. A wing must be adjacent; 'Type 5 with an 8 overlay' is a description, not a wing.

### Blend (DISC)

A second DISC letter within two points of the first, written SC or CS. Many recorded models have S/C blends; Grok 4.6’s canonical vector scores C without a blend.

### Tie rule

What a scorer does when two scores are equal. AgentTune's original reporting rule sent a tied MBTI axis to I, N, T or J, a tied Enneagram to the lower-numbered type, and a tied DISC to S before C. The quizzes now show a tie instead of choosing, and the research pages report ties separately because a tie rule can turn a coin flip into a label.

### z-score

How far a trait score sits from a reference mean, in standard deviations. AgentTune loads a high or low Big Five file when a trait is more than 0.5 SD from the reference mean configured in the site’s scorer. For a model, treat it as a scoring output, not a percentile among people.

## The research.

### Fresh session

A new context without prior conversation history. In the September collection it used a one-line prompt, no tools and no memory. Fresh context does not itself establish statistical independence. The September 2026 studies use one fresh session per questionnaire (Claude) or per five-test battery (GPT-6).

### Scoring record

One scored answer set, whatever produced it. The May 2026 study's 2,200 records include some that re-score a single answer vector, which is why they are counted separately from fresh sessions.

### Reported figure

A number from a report we could not re-score, because the raw answers or the harness were not supplied. Muse Spark 1.3 and Grok 4.6’s Big Five, attachment and simulations are reported figures. Grok’s three supplied canonical vectors can be re-scored.

### Simulated draw

A synthetic answer set sampled from one self-report by jittering its least certain items. A sensitivity check, not a fresh run. The Opus 4.8 article and the Grok 4.6 report both use them.

### Blind judge

A rater that sees a request and one reply without knowing which setup produced it. The [pilot archive](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) describes a second model in this role; the complete judging prompt and execution log were not supplied.

### Default (of a model)

A baseline under a specified model version, system prompt, product and task configuration. There is no single context-free default established by these questionnaires. See [the research hub](https://agent-tune.com/research).

### Answer vector

The list of a model's numeric answers to one questionnaire, in item order. The September 2026 study publishes 2,000 of them so anyone can re-score.

## Questions people ask.

            What is a tuning file?

            A short Markdown file of communication rules written for one personality type: what to lead with, how direct to be, how to disagree, when to stop asking questions. You paste it into your AI's instructions and edit it. AgentTune's 43 are free under an MIT licence.

            What is the difference between a system prompt and custom instructions?

            Custom instructions are a user-facing setting for preferences. A system prompt is a high-priority model input. The mapping between a product setting and model messages depends on the product.

            What is the difference between a persona and a tuning?

            A persona specifies a character; an AgentTune tuning specifies communication preferences such as pacing and directness. Neither format is guaranteed to persist or improve outcomes; evaluate the behavior you need.

            What does 'reported' mean on the research pages?

            A figure from a report we could not re-score, because the raw answers or the harness were not supplied. Fresh-session figures, by contrast, come with every answer vector published.

            What is a tie rule?

            What a scorer does when two scores are equal. AgentTune's original reporting rule picked a side (I, N, T or J; the lower Enneagram number; S before C). The quizzes now show the tie instead, and the research pages count ties separately.

## What changed.

- September 25, 2026 First published, thirty terms.

## Sources.

- [AgentTune tests and their scoring rules](https://agent-tune.com/tests/)

- [AgentTune research hub](https://agent-tune.com/research)

- [OpenAI: ChatGPT Custom Instructions](https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions)

## Keep going.

          [GuideHow to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
          [GuideThe five open personality tests, explained](https://agent-tune.com/guides/open-personality-tests)
          [LibraryAll 43 tuning files](https://agent-tune.com/library/)
