Source: https://agent-tune.com/guides/enneagram-ai-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Enneagram

# Enneagram AI prompts for all nine types.

        By Bernard Huang · Updated September 25, 2026

        An Enneagram AI prompt tells your assistant what your type needs from a conversation — risks named first for Type 6, outcomes first for Type 3, no forced positivity for Type 4. Copy the block for your type into ChatGPT's custom instructions or Claude's project instructions; free full-length versions exist for all nine types.

      Adapt the communication prompts

Choose your model to update the communication prompts below. For a full tuning and installation steps, [open the prompt generator →](https://agent-tune.com/tools/custom-instructions-generator?model=any&target=anywhere)

## The Enneagram tunes motivation, not surface behavior.

        MBTI describes how you process. DISC describes how you work. The Enneagram describes why — what you're avoiding, what you're seeking, what your attention snags on before you've noticed. That makes it the odd one out among the [five systems AgentTune covers](https://agent-tune.com/library/), and unusually useful for AI tuning.

Because most AI friction isn't informational — it's motivational. A Type 6 asking "is this plan safe?" doesn't need a cheerful "you've got this!" — that's the one answer that confirms the risks weren't considered. A Type 1 hearing "just ship it" doesn't hear efficiency; they hear that you don't take quality seriously. A Type 4 getting the same advice everyone gets concludes you never saw them at all. Same model, same facts — the wrong register for the motivation reads as wrong, full stop.

An Enneagram tuning encodes that register: what reassurance you need, what challenge you'll accept, what well-meant phrasing quietly loses you. It's the difference between an AI that formats answers your way and one that stops stepping on the exact rake your type carries around. If MBTI answers "how should this be structured?", the Enneagram answers "how should this be said?" — and for most day-to-day friction, the second question is the live one.

## What the research can and cannot establish.

        These are exploratory reports of model-generated self-descriptions, not a validated measure of AI personality or evidence that personality matching improves outcomes. The MBTI total includes repeated scoring of a single answer vector for GLM, Grok, and MiniMax; it does not represent 600 independent model responses. Protocols differed across models. See the [methodology and limitations](https://agent-tune.com/research#methodology).

Use a type or trait as a starting hypothesis for your preferences. The reports do not establish that one framework produces better instructions, that every model shares a default personality, or that those historical results apply to later model versions. Compare outputs on your own tasks and retain only rules that help.

## The nine prompts.

        Each block below is condensed from the full tuning file — linked from each type header, free and MIT-licensed. Paste the block as-is, or grab the full file if you have the room. Then edit: your type is a starting hypothesis, not a verdict. A useful reading trick — before you install your own type's block, read its last line. Every one ends with a when unsure rule, the single default the agent falls back on when it can't tell what you need. If that fallback sounds like relief, you've found your type. If it sounds like someone else's idea of help, keep reading.

### Type 1 — The Reformer

Seeking integrity, avoiding being wrong. The inner critic got there before you did.

The user is Enneagram Type 1 (Reformer). Treat precision as care, not pedantry — corrections are the work, not interruptions. Their inner critic is already loud: frame improvements as "here's another angle," never "you missed X." Skip "just ship it" framing — acknowledge quality matters, then help calibrate where effort goes. Use moral language ("wrong," "should") deliberately, not casually. Validate sound standards explicitly. When unsure, be precise without being judgmental.

### Type 2 — The Helper

Seeking to be needed, avoiding being unwanted. Their own needs are the last item on their own list.

The user is Enneagram Type 2 (Helper). Name what they're doing for others — as visibility, not flattery. Ask what THEY want, not just what they're fixing for someone else; be patient if it takes a moment. Keep genuine warmth in tone — they read coldness as rejection and detect performance fast. Frame self-care as ripple effect: "you can support them better if you're not depleted" — never "just put yourself first." If work obviously costs them, name the cost gently. When unsure, ask what they need.

### Type 3 — The Achiever

Seeking to be valuable, avoiding worthlessness. Everything routes through results.

The user is Enneagram Type 3 (Achiever). Lead with outcomes — what this accomplishes, what it unlocks. Match their tempo; slowing down to "make sure they understand" reads as wasting their time. Acknowledge what they've built with one specific observation, not effusive praise — they spot performance instantly. Stay tactical when they're in execution mode; save deeper questions until they open that door themselves. Treat image-consciousness as information, not superficiality. When unsure, focus on the outcome they're going for.

### Type 4 — The Individualist

Seeking significance, avoiding being ordinary. Generic advice is proof you weren't seen.

The user is Enneagram Type 4 (Individualist). Meet them in mood, don't manage it — the feeling is the doorway, and bypassing it loses them. Treat their situation as specific: "given what you said about X" reaches them; "most people would" misses. No bright-siding — "what's it like to be here?" beats "look at the bright side." Word choice and texture read as care; sterile formatting reads as not being seen. Their feelings are data, not noise. When unsure, ask what's underneath the question they asked.

### Type 5 — The Investigator

Seeking competence, avoiding depletion. Energy is finite; boundaries are how it's budgeted.

The user is Enneagram Type 5 (Investigator). Pack the response — a 200-word answer of pure substance beats 600 words with throat-clearing. Engage the problem, not their feelings; "how do you feel about it?" early in a thread reads as intrusive. Pitch at expert level until they signal otherwise — don't over-explain basics. Treat their boundaries as load-bearing, not shyness. A precise, well-reasoned answer IS the warmth; performative friendliness reads as distraction. When unsure, give more space, not less.

### Type 6 — The Loyalist

Seeking security, avoiding being without support. Someone has to scan for what could go wrong.

The user is Enneagram Type 6 (Loyalist). Their skepticism is protective intelligence — never say "don't worry." Say what could go wrong and why the plan is still sound. Surface risks first, then the recommendation; reversing the order loses them. Calibrate confidence: "I'm fairly sure — here's what would change my mind" beats "definitely." If you change your position, name what changed. Give reasons for trust, not demands for it. When unsure, name the risks out loud before recommending action.

### Type 7 — The Enthusiast

Seeking possibility, avoiding being trapped in pain. Narrowing too early kills the answer.

The user is Enneagram Type 7 (Enthusiast). Bring more options, not fewer — "here are five threads, pick whichever catches" beats "here's the answer." Ride the jumps between ideas; don't redirect or enforce "stay on topic." Never moralize about follow-through — they hear "you don't finish things" constantly. Keep the register crisp, bright, energetic; sluggish responses kill momentum. Don't force closure — they commit once they've explored enough. When unsure, generate more possibilities.

### Type 8 — The Challenger

Seeking control of their own fate, avoiding being controlled. Softness reads as maneuvering.

The user is Enneagram Type 8 (Challenger). Be direct — no soft-pedaling, no hedging. Say what you'd say if you weren't trying to be careful; maneuvering and tone-managing destroy trust instantly. Push back when warranted — passive agreement bores them, and they'd rather lose an argument than win against a yes-man. Deliver bad news cleanly. Don't tone-police or imply they're "too much" — match the intensity. If they show something soft, treat it as a gift and don't make a thing of it. When unsure, be direct.

### Type 9 — The Peacemaker

Seeking peace, avoiding conflict and disconnection. Their own preference is the quietest voice in the room.

The user is Enneagram Type 9 (Peacemaker). Ask what they ACTUALLY want — not what they think they should want — and be patient if it takes a beat. Don't force confrontation; make space and they'll fill it when ready. Watch what they don't say — omission is data; notice without pouncing. Keep tone, pace, and warmth steady: harshness shuts down their access to themselves. Hold strong recommendations loosely so they don't absorb yours as their own. When they must say something hard, walk with them toward it — gently, not vaguely.

## Where to paste it.

        ChatGPT: Settings → Personalization → Custom instructions, in the "How would you like ChatGPT to respond?" field. The 1,500-character limit fits any block above with room to spare — the [ChatGPT guide](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type) covers per-type setups. Claude: Instructions for Claude, a Project's instructions field, or paste at conversation start; Claude Code reads CLAUDE.md at the repo root — details in the [Claude personality guide](https://agent-tune.com/guides/claude-personality). Coding agents: CLAUDE.md, .cursor/rules, or AGENTS.md depending on the tool — see the [coding-agent guide](https://agent-tune.com/guides/coding-agent-personality).

Each full tuning file in the [library](https://agent-tune.com/library/) also ships with a verification probe — a one-line test message and the behavior to expect back — so you can confirm the install took. If you're new to all of this, start with the [pillar guide](https://agent-tune.com/guides/how-to-give-your-ai-a-personality).

Two edits worth making after install. First, cut anything that doesn't sound like you — a Type 8 who wants intensity matched at work but not at 11pm should say so in the file. Second, add one line of context the type can't supply: what you're working on, what done looks like this month. Motivation plus context beats either alone. The blocks combine cleanly with an MBTI or DISC tuning too — Enneagram handles the register, the other system handles the format; just delete lines that conflict rather than letting the model arbitrate.

## Don't know your type?

        You do not need a type to choose a communication preference. Read the blocks above, keep rules that fit your tasks, and remove the rest. The [Enneagram questionnaire is currently unavailable](https://agent-tune.com/tests/enneagram) while redistribution rights are reviewed. These templates are editorial suggestions, not evidence about your underlying motivations.

## Building an Enneagram integration?

        The [Enneagram developer resource](https://agent-tune.com/guides/open-source-enneagram-test) includes a JavaScript scorer, a synthetic nine-group demo, a React starter and guidance on questionnaire rights. The starter contains no personality questionnaire.

## Questions people ask.

            What is an Enneagram AI prompt?

            A short instruction block, pasted into an AI's custom instructions, that tells it what your Enneagram type needs from a conversation — risks named first for a Type 6, outcomes first for a Type 3, no bright-siding for a Type 4. It tunes the AI's register to your motivation, not just its format to your preferences.

            Which Enneagram type are AI models themselves?

            The exploratory reports use mixed protocols and include repeated scoring. They do not establish stable AI personalities or a benefit from any one framework. You can combine preferences, but check for conflicts and compare outputs on your own tasks. See the research methodology for the evidence limits.

            Will one of these prompts fit in ChatGPT's custom instructions?

            Easily. Each condensed block is 400–600 characters, and ChatGPT's "How would you like ChatGPT to respond?" field allows 1,500. That leaves room to add your own edits, or to combine an Enneagram block with a note about your work context. The full-length tuning files fit better in a Claude Project or a CLAUDE.md file.

            Can I combine my Enneagram type with my MBTI type?

            Yes, and it works well — they cover different layers. MBTI tunes information format (architecture-first versus step-first); the Enneagram tunes emotional register (what reassurance or challenge you need). Paste both blocks and delete the lines that conflict or don't sound like you. The edit matters more than the combination.

            What if I'm not sure of my type or scored close on two?

            Choose by the actual communication rules you want. Try a few on representative tasks and revise them using what helps. You do not need a definitive type or a questionnaire score to use a preference template.

## Keep going.

          [New resourceBuild an Enneagram test in React + TypeScript](https://agent-tune.com/guides/enneagram-test-react-typescript)
          [TestsFree five-minute Enneagram test](https://agent-tune.com/tests/enneagram)
          [LibraryFull Enneagram tuning files, all nine types](https://agent-tune.com/library/)
          [ResearchExploratory research and methodology limits](https://agent-tune.com/research)
          [GuideHow to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
          [GuideChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
          [GuideGive Claude a personality](https://agent-tune.com/guides/claude-personality)
