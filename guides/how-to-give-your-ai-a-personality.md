Source: https://agent-tune.com/guides/how-to-give-your-ai-a-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Getting started

# How to give your AI a personality.

By Bernard Huang · Updated November 24, 2026

Two different goals hide inside that sentence—working alignment vs. memorable character voice. Here is how to combine both cleanly without triggering the Roleplay Tax.

**Quick answer:** Write six to eight checkable rules—covering how replies open, length, formatting, pushback, and follow-up questions—and paste them into your AI's persistent settings box: ChatGPT Custom Instructions (1,500 chars), Claude Personal Preferences, Meta Muse Soul.md, Perplexity Spaces (4,000 chars), Grok Customize settings, Gemini Saved Info/Gems, or CLAUDE.md and AGENTS.md for coding agents.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/how-to-give-your-ai-a-personality.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## "Give my AI a personality" means two different things.

People use that phrase for two distinct goals:

- **Direction A — Match how you work (communication tuning):** Control whether the AI leads with the answer, challenges weak assumptions, skips cheerleading intros, or checks in before acting.
- **Direction B — Play a character (persona prompt):** Give the assistant a named role, voice, or backstory (such as in Meta Muse `Identity.md`, a Gemini Gem, or a Grok Bot).

In both cases, **checkable rules beat adjectives**. “Be concise and candid” is vague; “Lead with your recommendation in sentence one, keep routine replies under 150 words, and name the weakest assumption in my plan” is easy for a model to follow on every turn. Copy this starter block or customize it in the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator):

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

- **Pick your preferences (or take a 5-minute test):** Toggle six plain-English sliders in the [Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder), use the 20-second [5-System Matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher), or take a free quiz on the [Tests Hub](https://agent-tune.com/tests/).
- **Grab a template:** Browse all [43 MIT-licensed tuning files](https://agent-tune.com/library/) or build a custom export in the [generator](https://agent-tune.com/tools/custom-instructions-generator).
- **Paste it into your app’s settings box (web & mobile):**

| App / Agent | Where to paste (Web &amp; Mobile) | Walkthrough |
| --- | --- | --- |
| ChatGPT | Settings → Personalization → Personality presets &amp; Custom Instructions (≤1,500 chars) or Project Instructions | [ChatGPT Personality guide](https://agent-tune.com/guides/chatgpt-personality-settings) · [20 examples](https://agent-tune.com/guides/chatgpt-custom-instructions-examples) |
| Claude | Initials / Profile icon → Settings → Profile → Personal preferences (or Projects / Skills) | [Claude setup](https://agent-tune.com/guides/claude-personality) · [Mobile & Voice](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web) |
| Meta Muse | Assistant icon → Identity → Soul.md (keep avatar/name in Identity.md) | [Soul.md guide](https://agent-tune.com/guides/muse-personality) · [20 templates](https://agent-tune.com/guides/muse-soul-md-templates) |
| Perplexity | Perplexity Spaces → Space Settings → Custom Instructions (4,000 chars) or AI Profile | [Perplexity Spaces guide](https://agent-tune.com/guides/perplexity-spaces-custom-instructions) |
| Grok &amp; Grok Bot | X / grok.com: Settings → Customize Grok · Grok Bot: Edit Profile → Description | [Grok settings](https://agent-tune.com/guides/grok-personality-settings) · [Grok Bot](https://agent-tune.com/guides/grokbot-personality) |
| Google Gemini | Settings → Saved info, custom Gems, or ~/.gemini/GEMINI.md | [Gemini guide](https://agent-tune.com/guides/gemini-personality) |
| Coding Agents | ~/.claude/output-styles/*.md, CLAUDE.md, ~/.codex/AGENTS.md (32 KiB), .cursor/rules/*.mdc | [All coding rules files](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix) |

**Step 4 — Check for conflicts:** Delete any line that doesn’t fit your work, and paste your rules into the [Instruction Checker](https://agent-tune.com/tools/instruction-checker) to catch contradictions.

## Five systems you can tune from.

You can pick a tuning file using any of our five personality frameworks—each one focuses on a different communication layer (compare all five in our [5-system matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher)):

### MBTI — cognitive framing (16 types)

Maps how you take in information and make decisions. For example, an INTJ tuning leads with system architecture and tradeoffs; an ESFP tuning leads with the immediate concrete action. Take the test at [/tests/mbti](https://agent-tune.com/tests/mbti).

### Big Five (OCEAN) — single-trait sliders (10 poles)

Five continuous dimensions—Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism—with High and Low templates for each trait. Ideal when you want to adjust one specific habit without adopting a four-letter type. Take the test at [/tests/big-five](https://agent-tune.com/tests/big-five) or compare [MBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai).

### Enneagram — core motivation & pushback (9 types)

Focuses on what drives you and how you want critique delivered. Take the test at [/tests/enneagram](https://agent-tune.com/tests/enneagram) or browse all nine profiles in the [Enneagram AI prompts guide](https://agent-tune.com/guides/enneagram-ai-prompts).

### DISC — workplace speed & structure (4 styles)

Four workplace styles (Dominance, Influence, Steadiness, Conscientiousness) and the fastest test on the site (16 questions, ~3 minutes at [/tests/disc](https://agent-tune.com/tests/disc)).

### Attachment — autonomy & check-in cadence (4 styles)

Controls how often the assistant pauses for confirmation versus executing end-to-end, and how gently it flags uncertainty. Take the test at [/tests/attachment](https://agent-tune.com/tests/attachment).

## How to layer tunings across agents — and add voice without losing accuracy.

The biggest mistake new users make is pasting a highly specific tutor or character voice into their global account box—and then cursing at it two hours later during an urgent bug hunt. Think of your setup as **three clean layers**:

- **Layer 1 — Global Baseline (Account Settings):** Put universal preferences here (answer-first verdicts, reject flawed math calmly, state unknowns rather than guessing). Take our 2-minute [Alignment & Conflict Style Matcher](https://agent-tune.com/guides/ai-alignment-hexaco-conflict-style-test) if default models feel too agreeable.
- **Layer 2 — Project Rooms & Gems (Specialists):** Isolate Socratic/Feynman learning prompts ([14 coaching templates](https://agent-tune.com/guides/socratic-feynman-ai-tutor-coaching-prompts)) or adversarial PR auditors inside dedicated ChatGPT Projects, Claude Projects, or Gemini Gems.
- **Layer 3 — 85/15 Character & Whimsy Twists (Zero Roleplay Tax):** Want a partner with dry TARS wit, J.A.R.V.I.S. composure, Sherlock differential rigor, or Feynman analogies? Never write generic "act like X" prompts. Pair our [85/15 Fictional Character Templates](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman) or [Agent Cocktail Mixer](https://agent-tune.com/guides/whimsical-ai-persona-combos-agent-cocktails) so character voice lives in 15% of diction while accuracy stays at 100%.

## What actually changes (and what our data shows).

Custom instructions change how a model delivers critique, formats tradeoffs, and resists sycophancy—when written cleanly. Across our [540-reply November behavioral benchmark](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) and [300-reply Roleplay Tax study](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts), explicit answer-first and 85/15 telemetry rules lifted DeepSeek V4 Pro correctness by **+16.7 to +20.0 percentage points** and cut filler fluff to **0.0%**—whereas naive full-character roleplay cut Claude Fable 5.2 accuracy to 85% and tripled word bloat.

Treat any template as an editable starting draft. Keep the bullets that save you time on real tasks, or tell your coding agent to fetch a template's raw `.md` URL and merge it cleanly inside bounded markers.

> **Chart — Effect of Plain-English Behavioral Tuning (540-Reply Study, %):** Shows correctness pass rate rising on DeepSeek V4 Pro (+16.7 pp) and Claude Fable 5.2 (96.7% -> 100%), while DeepSeek fluff drops from 36.7% to 3.3%. Default (baseline): Correctness: DeepSeek 78.3, Correctness: Fable 5.2 96.7, Fluff: DeepSeek (lower=better) 36.7; Plain-English rules: Correctness: DeepSeek 95.0, Correctness: Fable 5.2 100.0, Fluff: DeepSeek (lower=better) 20.0; Plain-English + INTJ: Correctness: DeepSeek 93.3, Correctness: Fable 5.2 100.0, Fluff: DeepSeek (lower=better) 3.3.

Checkable plain-English rules drive the real accuracy & brevity gains across controlled replies; combining them with 85/15 voice gives personality without losing fidelity.

## Questions people ask.

### Can I really give ChatGPT a personality?

Yes, via Settings → Personalization → Custom Instructions (up to 1,500 characters) or per-workspace Project Instructions. Concrete rules like "lead with the recommendation" hold up across conversations far better than vague adjectives.

### What's the difference between a persona prompt and a tuning file?

A persona prompt gives the AI a character to perform. A tuning file adjusts the AI to your working preferences: how it delivers disagreement, how many options it offers, and how often it checks in.

### Which personality test should I use for AI tuning?

A test is completely optional—you can pick plain-English toggles directly in the generator. If you want a questionnaire, DISC (16 items, ~3 min) is fastest for workplace habits, MBTI (32 items) maps cognitive framing, Enneagram (36 items) maps motivation, Attachment (36 items) tunes check-in cadence, and Big Five (50 IPIP items) scores five continuous traits.

### Do personality prompts actually change AI behavior?

Specific behavioral rules do; standalone type labels or adjectives mostly don't. In our 60-reply pilot, explicit rules shifted answer-first openings, hedge counts, and trailing questions measurably. Test any block on your own tasks with the free A/B test bench.

### Doesn't my AI already have a personality?

Yes—default assistants share a similar RLHF baseline: structured, agreeable, and cautious (scoring 44–47/50 on Agreeableness and predominantly INTJ/ISTJ in our 2,000-session questionnaire archive). A tuning tells the model where your preferences differ from the average user it was trained for.

### What if the tuning file gets things wrong about me?

Edit it; that's the design. The type is a starting hypothesis and the file is plain Markdown under an MIT license. Delete rules that don't sound like you, sharpen the ones that do, add what's missing. A tuning you've edited for ten minutes beats any unedited type match.

## Keep going.

- [Free browser tool: Build your how-to-work-with-me card](https://agent-tune.com/tools/how-to-work-with-me)
- [Research: Exploratory research and methodology limits](https://agent-tune.com/research)
- [Tests: Take a free five-minute personality test](https://agent-tune.com/tests/)
- [Library: All 43 tuning files, MIT-licensed](https://agent-tune.com/library/)
- [Guide: ChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
- [Guide: How to change Claude's personality](https://agent-tune.com/guides/claude-personality)
- [ChatGPT: How to change ChatGPT's personality (presets & rules)](https://agent-tune.com/guides/chatgpt-personality-settings)
- [Matcher: Which AI personality template fits you? 5-system matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher)
- [Guide: Tune your coding agent](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
