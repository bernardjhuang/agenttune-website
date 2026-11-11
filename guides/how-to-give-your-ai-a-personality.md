Source: https://agent-tune.com/guides/how-to-give-your-ai-a-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Getting started

# How to give your AI a personality.

By Bernard Huang · Updated September 25, 2026

Write six to eight concrete behavioral rules—covering how replies open, length, formatting, pushback, and follow-up questions—and paste them into your AI's persistent instruction slot: ChatGPT Custom Instructions (1,500 chars), Claude Profile Preferences, Meta Muse Soul.md, Grok Customize settings, Gemini Saved Info/Gems, or CLAUDE.md and AGENTS.md for coding agents. Use the free generator or a 5-minute no-email test if you want a structured starting point.

## "Give my AI a personality" means two different things.

People type that phrase wanting one of two outcomes, and most guides mix them up:

- Direction A — Match how you work (communication tuning): Control whether the AI leads with the conclusion, challenges weak premises, skips cheerleading preambles, or checks in before acting. This compounds across every task you run.
- Direction B — Play a character (persona prompt): Give the assistant a named role, voice, or backstory (for example in Meta Muse Identity.md, a Gemini Gem, or a Grok Bot).

In both directions, observable rules beat adjectives. "Be concise and candid" is a subjective grade; "Open with your recommendation in sentence one, keep routine answers under 150 words, and name the weakest assumption in my plan" is a rule the model can verify on every turn. Copy this starter block right now or customize it in the [instructions generator](https://agent-tune.com/tools/custom-instructions-generator):

```markdown
# How to work with me
- Lead with the direct answer or recommendation, then the main reason.
- Keep simple answers concise; expand only when trade-offs or edge cases matter.
- Use plain prose by default; use bullets or tables when comparing 3+ items.
- Push back with evidence when my premise has a flaw instead of agreeing.
- State material uncertainty in one plain sentence rather than hedging.
- Skip praise, prompt recaps, and generic closing offers.
```

## Four steps. About ten minutes.

- Pick your preferences (or take a 5-minute test). Toggle six plain-English choices in the [preferences builder](https://agent-tune.com/tools/communication-preferences-builder), or take one of the five free, no-email questionnaires on the [tests hub](https://agent-tune.com/tests/).
- Grab a clean template. Browse all [43 MIT-licensed tuning files](https://agent-tune.com/library/) across MBTI, Enneagram, DISC, Attachment, and Big Five—or build a custom export in the [generator](https://agent-tune.com/tools/custom-instructions-generator).
- Paste it into your app's persistent slot (web & mobile):

| App / Agent | Where to paste (Web &amp; Mobile) | Walkthrough |
| --- | --- | --- |
| ChatGPT | Settings → Personalization → Custom Instructions (≤1,500 chars) or Project Instructions | [20 examples](https://agent-tune.com/guides/chatgpt-custom-instructions-examples) · [Projects vs. Global](https://agent-tune.com/guides/chatgpt-projects-vs-custom-instructions) |
| Claude | Initials / Profile icon → Settings → Profile → Instructions for Claude (or Skills) | [Claude setup](https://agent-tune.com/guides/claude-personality) · [Mobile & Voice](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web) |
| Meta Muse | Assistant icon → Identity → Soul.md (keep avatar/name in Identity.md) | [Soul.md guide](https://agent-tune.com/guides/muse-personality) · [20 templates](https://agent-tune.com/guides/muse-soul-md-templates) |
| Grok &amp; Grok Bot | X / grok.com: Settings → Customize Grok · Grok Bot: Edit Profile → Description | [Grok settings](https://agent-tune.com/guides/grok-personality-settings) · [Grok Bot](https://agent-tune.com/guides/grokbot-personality) |
| Google Gemini | Settings → Saved info, custom Gems, or ~/.gemini/GEMINI.md | [Gemini guide](https://agent-tune.com/guides/gemini-personality) |
| Claude Code &amp; Codex | ~/.claude/output-styles/*.md, CLAUDE.md, or ~/.codex/AGENTS.md (32 KiB cap) | [Claude Code](https://agent-tune.com/guides/claude-code-personality) · [Codex AGENTS.md](https://agent-tune.com/guides/codex-agents-md-guide) |

Step 4 — Edit and lint for conflicts: Delete any line that doesn't sound like you, and run stacked rules through the [instruction conflict checker](https://agent-tune.com/tools/instruction-checker) so contradictory lines (like "be brief" plus "explain every edge case") don't cancel each other out.

## Five systems you can tune from.

A tuning file needs a starting description of you. Any of the five major personality frameworks works; they just capture different layers. Pick the one you already know your type in, or the one whose layer matters most to you.

### MBTI — cognitive style

Sixteen types built from four binary axes: where you get energy, how you take in information, how you decide, how you like things settled. It's the most searchable system and maps cleanly onto AI behavior; an INTJ tuning tells the agent to lead with the architecture; an ESFP tuning tells it to lead with the concrete next step. Test at [/tests/mbti](https://agent-tune.com/tests/mbti); all sixteen tunings are in the [library](https://agent-tune.com/library/). Best fit: you want the broadest, most recognizable starting point.

### Big Five — the research-grade dimensions

Five continuous traits; openness, conscientiousness, extraversion, agreeableness, neuroticism; with the strongest scientific footing of the five systems. AgentTune covers ten pole pages (high and low per trait), so you tune from your extreme scores, not a type label. Test at [/tests/big-five](https://agent-tune.com/tests/big-five). Best fit: you distrust type boxes and want dimensions instead. (Deciding between the two? [MBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai).)

### Enneagram — motivation

Nine types organized around what you're avoiding and what you're seeking; not how you act, but why. That makes it unusually good for AI tuning: what reassures a Type 6 alarms no one else, and what motivates a Type 3 bores a Type 9. The September records include Helper, Investigator and Challenger labels, with many ties. Different score scales and collection protocols prevent ranking instruments by how well they distinguish models. Test at [/tests/enneagram](https://agent-tune.com/tests/enneagram); all nine prompts are condensed in the [Enneagram AI prompts guide](https://agent-tune.com/guides/enneagram-ai-prompts). Best fit: your friction with AI is emotional register, not information format.

### DISC — working style

Four styles (Dominance, Influence, Steadiness, Conscientiousness) built for workplace communication. It's the simplest system here, which is its virtue: a D tuning says lead with the decision, an S tuning says don't spring changes without warning. Test at [/tests/disc](https://agent-tune.com/tests/disc). Best fit: you mostly use AI for work and want the shortest path to a fit.

### Attachment — the reassurance layer

Four styles (secure, anxious, avoidant, disorganized) describing how you handle closeness and uncertainty. For AI, it governs the checking-in behavior: how often the agent should confirm before acting, whether hedging reads as honesty or as abandonment, how to deliver "I'm not sure" without triggering a spiral. Test at [/tests/attachment](https://agent-tune.com/tests/attachment). Best fit: your AI frustration is about reassurance; too much or too little.

## What actually changes (and what our data shows).

Not the model's underlying intelligence—its delivery. In our [60-reply controlled before/after pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers), adding a short "Straight answers" block raised top answer-first scores from 14/20 to 19/20, cut hedging from 0.35 to 0.05 per reply, and dropped trailing follow-up questions from 0.90 to 0.25 without changing task accuracy.

Concretely, a tuning controls five levers: how the reply opens (conclusion-first or context-first), how disagreement lands (blunt or cushioned), how options are framed (one recommendation or an open menu), check-in frequency, and register. Treat any personality type as an optional starting hypothesis rather than a clinical label—model questionnaire scores on our [research hub](https://agent-tune.com/research#methodology) are descriptive self-reports, so keep only the rules that help on your real work.

## Questions people ask.

Can I really give ChatGPT a personality?

Yes, via Settings → Personalization → Custom Instructions (up to 1,500 characters) or per-workspace Project Instructions. Concrete rules like "lead with the recommendation" hold up across conversations far better than vague adjectives.

What's the difference between a persona prompt and a tuning file?

A persona prompt gives the AI a character to perform. A tuning file adjusts the AI to your working preferences: how it delivers disagreement, how many options it offers, and how often it checks in.

Which personality test should I use for AI tuning?

A test is completely optional—you can pick plain-English toggles directly in the generator. If you want a questionnaire, DISC (16 items, ~3 min) is fastest for workplace habits, MBTI (32 items) maps cognitive framing, Enneagram (36 items) maps motivation, Attachment (36 items) tunes check-in cadence, and Big Five (50 IPIP items) scores five continuous traits.

Do personality prompts actually change AI behavior?

Specific behavioral rules do; standalone type labels or adjectives mostly don't. In our 60-reply pilot, explicit rules shifted answer-first openings, hedge counts, and trailing questions measurably. Test any block on your own tasks with the free A/B test bench.

Doesn't my AI already have a personality?

Yes—default assistants share a similar RLHF baseline: structured, agreeable, and cautious (scoring 44–47/50 on Agreeableness and predominantly INTJ/ISTJ in our 2,000-session questionnaire archive). A tuning tells the model where your preferences differ from the average user it was trained for.

What if the tuning file gets things wrong about me?

Edit it; that's the design. The type is a starting hypothesis and the file is plain Markdown under an MIT license. Delete rules that don't sound like you, sharpen the ones that do, add what's missing. A tuning you've edited for ten minutes beats any unedited type match.

## Keep going.

- [Free browser tool: Build your how-to-work-with-me card](https://agent-tune.com/tools/how-to-work-with-me)
- [Research: Exploratory research and methodology limits](https://agent-tune.com/research)
- [Tests: Take a free five-minute personality test](https://agent-tune.com/tests/)
- [Library: All 43 tuning files, MIT-licensed](https://agent-tune.com/library/)
- [Guide: ChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
- [Guide: How to change Claude's personality](https://agent-tune.com/guides/claude-personality)
- [Guide: Tune your coding agent](https://agent-tune.com/guides/coding-agent-personality)
