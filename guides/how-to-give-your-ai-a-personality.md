Source: https://agent-tune.com/guides/how-to-give-your-ai-a-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Getting started

# How to give your AI a personality.

        By Bernard Huang · Updated September 25, 2026

        Take a five-minute personality test, copy the matching tuning file from a free library like AgentTune, and paste it into your AI's instruction layer — ChatGPT custom instructions, Claude Projects, or CLAUDE.md for coding agents. Then edit it. Concrete behavioral rules change how the AI communicates; adjectives like "be witty" don't.

## What the research can and cannot establish.

        These are exploratory reports of model-generated self-descriptions, not a validated measure of AI personality or evidence that personality matching improves outcomes. The MBTI total includes repeated scoring of a single answer vector for GLM, Grok, and MiniMax; it does not represent 600 independent model responses. Protocols differed across models. See the [methodology and limitations](https://agent-tune.com/research#methodology).

Use a type or trait as a starting hypothesis for your preferences. The reports do not establish that one framework produces better instructions, that every model shares a default personality, or that those historical results apply to later model versions. Compare outputs on your own tasks and retain only rules that help.

## "Give my AI a personality" means two different things.

        People type that phrase wanting one of two outcomes, and the internet mostly answers the wrong one. Direction A: make the AI match your personality — how you like to be challenged, how much reassurance you want, whether you need options or a single recommendation. Direction B: give the AI a character — a pirate, a stoic mentor, a sarcastic best friend.

Direction B is the persona prompt, and here's the honest version. What works: concrete behavioral rules. "Open every reply with the conclusion. Never use more than one exclamation point. When you disagree, say so in the first sentence." Rules like that survive a long conversation because the model can check itself against them. What fails: adjectives. "Be witty. Be warm. Be confident." The model performs the adjective for two replies, then drifts back to its INTJ center of gravity — because witty isn't an instruction, it's a grade someone else assigns afterward.

If you want a character, write ten behavioral rules and skip the personality words entirely. That's the whole trick, and no prompt pack sells anything better.

The rest of this page is Direction A — because it's the one that compounds. A character is entertainment. A communication-preference tuning changes every answer you get, every day, in every domain. That's what AgentTune's [43 tuning files](https://agent-tune.com/library/) are built for.

## Five systems you can tune from.

        A tuning file needs a starting description of you. Any of the five major personality frameworks works — they just capture different layers. Pick the one you already know your type in, or the one whose layer matters most to you.

### MBTI — cognitive style

Sixteen types built from four binary axes: where you get energy, how you take in information, how you decide, how you like things settled. It's the most searchable system and maps cleanly onto AI behavior — an INTJ tuning tells the agent to lead with the architecture; an ESFP tuning tells it to lead with the concrete next step. Test at [/tests/mbti](https://agent-tune.com/tests/mbti); all sixteen tunings are in the [library](https://agent-tune.com/library/). Best fit: you want the broadest, most recognizable starting point.

### Big Five — the research-grade dimensions

Five continuous traits — openness, conscientiousness, extraversion, agreeableness, neuroticism — with the strongest scientific footing of the five systems. AgentTune covers ten pole pages (high and low per trait), so you tune from your extreme scores, not a type label. Test at [/tests/big-five](https://agent-tune.com/tests/big-five). Best fit: you distrust type boxes and want dimensions instead. (Deciding between the two? [MBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai).)

### Enneagram — motivation

Nine types organized around what you're avoiding and what you're seeking — not how you act, but why. That makes it unusually good for AI tuning: what reassures a Type 6 alarms no one else, and what motivates a Type 3 bores a Type 9. The September records include Helper, Investigator and Challenger labels, with many ties. Different score scales and collection protocols prevent ranking instruments by how well they distinguish models. Test at [/tests/enneagram](https://agent-tune.com/tests/enneagram); all nine prompts are condensed in the [Enneagram AI prompts guide](https://agent-tune.com/guides/enneagram-ai-prompts). Best fit: your friction with AI is emotional register, not information format.

### DISC — working style

Four styles — Dominance, Influence, Steadiness, Conscientiousness — built for workplace communication. It's the simplest system here, which is its virtue: a D tuning says lead with the decision, an S tuning says don't spring changes without warning. Test at [/tests/disc](https://agent-tune.com/tests/disc). Best fit: you mostly use AI for work and want the shortest path to a fit.

### Attachment — the reassurance layer

Four styles — secure, anxious, avoidant, disorganized — describing how you handle closeness and uncertainty. For AI, it governs the checking-in behavior: how often the agent should confirm before acting, whether hedging reads as honesty or as abandonment, how to deliver "I'm not sure" without triggering a spiral. Test at [/tests/attachment](https://agent-tune.com/tests/attachment). Best fit: your AI frustration is about reassurance — too much or too little.

## Four steps. About ten minutes.

- Take a test. Five minutes, free, in-browser, no email wall: [the tests hub](https://agent-tune.com/tests/) has all five instruments. Already know your type? Skip ahead.
- Grab your tuning. Every type page in the [library](https://agent-tune.com/library/) has a Markdown tuning file — MIT-licensed, copy-paste, no account. It's a set of interaction rules written for agents, not a horoscope. The [INTJ file](https://agent-tune.com/library/mbti/intj), for instance, tells the agent to lead with disagreement and skip the softeners.
- Install it per agent. ChatGPT: Settings → Personalization → Custom Instructions, use the compact export that fits the documented 1,500-character field limit ([full walkthrough by type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)). Claude: Instructions for Claude in Settings, Project instructions, or paste at conversation start ([the Claude guide](https://agent-tune.com/guides/claude-personality); Claude's Styles are being retired). The new agents each keep it somewhere different: [GPT-6 Astra](https://agent-tune.com/guides/astra-personality) reads your personal AGENTS.md, [Grok Bot](https://agent-tune.com/guides/grokbot-personality) reads each Bot's Description, and [Meta Muse](https://agent-tune.com/guides/muse-personality) keeps it in a file called Soul.md. Coding agents: an [output style](https://agent-tune.com/guides/claude-code-personality) for Claude Code, .cursor/rules for Cursor, AGENTS.md for the rest ([the coding-agent guide](https://agent-tune.com/guides/coding-agent-personality), with [CLAUDE.md examples](https://agent-tune.com/guides/claude-md-examples)). Or generate a ready file with the [CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator).
- Edit it. This is the step people skip and shouldn't. Your type is a starting hypothesis — the Markdown is yours. Delete the rules that don't sound like you. Sharpen the ones that do. An INTJ who happens to love small talk should strike that line; the file doesn't get to overrule you.

One caution on step 3: keep one tuning per agent, not three stacked systems fighting each other. If you want to layer two — say MBTI for information format plus [Enneagram for emotional register](https://agent-tune.com/guides/enneagram-ai-prompts) — paste both, then delete every line that conflicts. Contradictory instructions don't average out; the model just picks one unpredictably, and you're back to the default with extra steps.

## What actually changes.

        Not the facts — the delivery. Ask a default model how to fix a failing launch and you get the five-step menu: balanced, hedged, options a through e. The same model with an INTJ tuning leads with the strategic recommendation and skips the warmup. With a Type 6 Enneagram tuning it names the risks first, then recommends — because "don't worry" is precisely what a 6 can't use. With an anxious-attachment tuning it confirms before acting instead of surprising you with initiative.

Concretely, a tuning shifts: how the answer opens (conclusion-first or context-first), how disagreement is delivered (blunt or cushioned), how many options you get (one recommendation or five threads), the reassurance cadence (check in often or get out of the way), and the register (crisp or warm). Small levers. But they're the levers that decide whether you finish reading the answer — and whether you come back with the next question.

A before-and-after, from the coding side. Default Claude Code, asked to refactor a module: "Great idea! Here are three approaches we could consider, each with trade-offs…" The same agent with an INTJ CLAUDE.md: "Approach B. A and C both couple the parser to the transport layer — here's the diff." Nothing about the model's competence changed. What changed is that you got the answer in the first line instead of the fourth paragraph, and the agent spent its tokens on the diff instead of the menu. Multiply that by every exchange in a working day and the tuning stops feeling cosmetic.

The test is a shortcut, not an identity. The point isn't that you are an INTJ or a Type 5 — it's that a 90-second install gets you 80% of a communication fit that would take weeks of ad-hoc prompting to converge on.

## Questions people ask.

            Can I really give ChatGPT a personality?

            Yes — through custom instructions (Settings → Personalization). Paste behavioral rules into the "How would you like ChatGPT to respond?" field, up to 1,500 characters. Concrete rules like "lead with the recommendation" hold up across conversations; adjectives like "be witty" fade within a few replies. Custom instructions are separate from ChatGPT's memory feature.

            What's the difference between a persona prompt and a tuning file?

            A persona prompt gives the AI a character — a role it performs for you. A tuning file adjusts the AI to your communication preferences — how it delivers disagreement, how many options it offers, how often it checks in. Personas are entertainment; tunings compound, because they change every answer in every domain.

            Which personality test should I use for AI tuning?

            Start with the communication behavior you want; a test is optional. The IPIP Big Five adaptation is currently available and reports raw totals and means. MBTI-style, Enneagram, DISC and attachment questionnaires are also available as versioned AgentTune adaptations. Templates from all five frameworks remain available to read, edit and try.

            Do personality prompts actually change AI behavior?

            Behavioral rules do; personality adjectives mostly don't. "Never open with a softener" is checkable, so the model holds it for a whole conversation. "Be confident" isn't, so it drifts. Every AgentTune tuning file is written as checkable rules, plus a verification probe you can run after installing to confirm the behavior changed.

            Doesn't my AI already have a personality?

            The exploratory reports use mixed protocols and include repeated scoring. They do not establish stable AI personalities or a benefit from any one framework. You can combine preferences, but check for conflicts and compare outputs on your own tasks. See the research methodology for the evidence limits.

            What if the tuning file gets things wrong about me?

            Edit it — that's the design. The type is a starting hypothesis and the file is plain Markdown under an MIT license. Delete rules that don't sound like you, sharpen the ones that do, add what's missing. A tuning you've edited for ten minutes beats any unedited type match.

## Keep going.

          [Free browser toolBuild your how-to-work-with-me card](https://agent-tune.com/tools/how-to-work-with-me)
          [ResearchExploratory research and methodology limits](https://agent-tune.com/research)
          [TestsTake a free five-minute personality test](https://agent-tune.com/tests/)
          [LibraryAll 43 tuning files, MIT-licensed](https://agent-tune.com/library/)
          [GuideChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
          [GuideHow to change Claude's personality](https://agent-tune.com/guides/claude-personality)
          [GuideTune your coding agent](https://agent-tune.com/guides/coding-agent-personality)
