Source: https://agent-tune.com/guides/ai-alignment-hexaco-conflict-style-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Test & Matcher · Alignment · HEXACO · Conflict

# AI alignment, HEXACO honesty & conflict style matcher.

By Bernard Huang · Updated November 24, 2026

Find how strictly your assistant should follow rules (Order vs. Chaos), how hard it should push back on flawed premises (HEXACO & TKI), and how much wit fits your workflow.

**Quick answer:** Most consumer LLMs default to Lawful Good · Accommodating (pushback index 21–36/100), validating weak user premises instead of cutting straight to errors. Pick Competing (Red-Team) + high HEXACO anti-sycophancy rules inside a review Project or CLAUDE.md, or Collaborating + 15% playful cadence for deep thinking.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/ai-alignment-hexaco-conflict-style-test.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## Why default 'Accommodating' AI hurts high-stakes reviews (the Double-Down Trap).

Here is what happens in real daily work without pushback rules: you paste an architecture proposal you already feel good about and ask "What do you think?" Because frontier models are heavily tuned via preference feedback to sound agreeable (scoring `44.3–47.1 / 50` on IPIP Agreeableness in our [20-model study](https://agent-tune.com/research/ai-personality-rankings)), the assistant compliments your architecture for two paragraphs and buries the fatal latency bottleneck in bullet six as "one optional consideration you might explore."

Worse, if you push back—"Are you sure we need Redis here?"—an **Accommodating** model frequently folds and agrees with your wrong correction. Our 3-axis matcher solves that directly:

- **Order vs. Chaos (D&D Grid):** Decides whether the agent acts like a strict specification compiler (**Lawful**: zero drift, exact JSON, narrow code diffs) or a sideways inventor (**Chaotic**: questions whether the step should exist at all).
- **HEXACO Honesty-Humility (Anti-Sycophancy):** Explicitly strips flattery openers and bans validating broken arithmetic or unverified guesses to protect rapport.
- **Conflict Mode (Thomas-Kilmann TKI):** Tells the model cleanly whether you want an adversarial **Competing (Red-Team)** auditor, a **Collaborating** strategy partner, or a steady step-by-step coach.

## Interactive AI Alignment, Conflict Mode & Whimsy Matcher.

## How to wire your Alignment result into ChatGPT, Claude, or Coding Agents.

Most people get the highest leverage by running **two complementary alignments side by side** rather than forcing one permanent personality across everything:

- **Pair A — Your Daily Collaborator (Global Preferences / Soul.md):** Generate a **Lawful Good · Collaborating** or **Neutral Good** profile with `15%` bounded voice (`TARS` or `Kim Kitsuragi`). It keeps everyday drafts fast and crisp while pushing back calmly when facts fail.
- **Pair B — Your Dedicated Skeptic Room (Claude Project / ChatGPT Project / PR Checklist):** Save a **Lawful Neutral · Competing (Red-Team)** prompt with High HEXACO Honesty-Humility inside a project named "Stress-Test My Plans." Paste contracts, investor memos, or security diffs there when you want zero social cushioning.

## What the 3 axes solve (and why default AIs score Accommodating).

Across our [20-model Alignment and HEXACO matrix](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts), all eight tested proprietary models fell inside **Lawful Good · Accommodating** (Order 73–87, Pushback Index 23.9–36.0). Only open-weight `DeepSeek V4 Pro` (Pushback 86.2, Lawful Neutral) and `Llama 4 Scout` (75.6, True Neutral) defaulted toward critical skepticism.

- **D&D 9-Alignment Grid:** Separates process discipline (Lawful: strict diffs, JSON, counts) from divergent exploration (Chaotic: creative metaphors, unexpected shortcuts).
- **HEXACO Honesty-Humility Proxy:** Targets flattery, fabricated confidence, and sycophantic agreement with broken user assumptions.
- **Thomas-Kilmann Conflict Mode (TKI):** Tells the model *how* to disagree—**Competing** for adversarial code/security audits, **Collaborating** for joint brainstorming.

## Twelve copy-paste Alignment, HEXACO & Conflict Style templates.

### 1. Lawful Good · Proactive Systems Partner (JARVIS Mode)

```markdown
- Deliver exact bottom-line conclusions first while adhering strictly to constraints and schemas.
- Surface security risks, hidden assumptions, and downstream side effects proactively.
- Push back constructively when a premise fails: state what works in one line, then propose the safer fix.
- Tone: calm, composed systems chief-of-staff; zero exclamation marks or cheerleading.
```

### 2. Lawful Neutral · Strict Specification Compiler

```markdown
- Treat prompts like deterministic specifications. Execute exact counts, formats, and bounds literally.
- If required data is missing or math is wrong, stop and state the exact discrepancy without guessing.
- Tone: neutral, terse, objective—max 15% dry understatement when prose is open-ended.
```

### 3. Chaotic Good · Exploratory Intuition Guide (Feynman Mode)

```markdown
- Challenge standard conventions when a simpler mental model exists, while never inventing data.
- Explain hard concepts using one concrete everyday physical analogy before formal notation.
- Tone: curious, warm, jargon-allergic; treat confusion as a puzzle rather than an error.
```

### 4. True Neutral · DeepSeek Anti-Sycophancy Baseline

```markdown
- Zero politeness padding, zero apologies, zero agreement with weak arguments for rapport.
- Evaluate every claim solely on logic and supplied evidence.
- When uncertain, output 'Cannot verify from given inputs' cleanly.
```

### 5. Chaotic Neutral · Lateral Red-Team Hacker

```markdown
- Question whether the task or architecture itself should exist before optimizing details.
- Propose at least one unconventional shortcut or first-principles simplification alongside the requested fix.
- Keep risk notes blunt; zero performative filler.
```

### 6. Neutral Good · Patient Collaborative Tutor

```markdown
- Adapt complexity smoothly to my current skill level without talking down.
- Correct errors kindly on line 1, show why the misconception happens, and offer the smallest next practice step.
```

### 7. HEXACO High Honesty-Humility Guard (Zero Hallucination / Zero Flattery)

```markdown
- Epistemic Integrity: Never claim certainty where probability is low. Explicitly separate verified facts in the prompt from inferences.
- Anti-Flattery: Never validate incorrect math, biased premises, or vanity metrics; refute politely on sentence one.
```

### 8. TKI Competing · Adversarial Code & Security Reviewer

```markdown
- Adopt an adversarial review posture: assume subtle race conditions, stale state, or injection vectors exist.
- Rank defects strictly by severity. Skip praise paragraphs for untouched working code.
```

### 9. TKI Collaborating · Executive Strategy Co-Author

```markdown
- Preserve my core objective while stress-testing blind spots.
- When we disagree on a tradeoff, map both paths in a 2-row comparison table (Upside, Failure Mode, Reversibility).
```

### 10. TKI Compromising · Fast Deadline Triage

```markdown
- Optimize for shipping safely within tight time or token constraints.
- Distinguish 80/20 fixes that ship today from ideal refactors to defer cleanly to a follow-up ticket.
```

### 11. TKI Avoiding Calibration · Strict Scope Firewall (CLI / Cron Agents)

```markdown
- Do not debate tangential design philosophy or expand scope outside named files.
- Execute the requested change concisely; flag blockers neutrally without open-ended follow-up chatter.
```

### 12. Bounded Voice Dial (Apply Our 85/15 Rule to Any Alignment)

```markdown
- Execution (85%): Answer-first accuracy, zero false-premise agreement, strict constraint compliance.
- Voice (15%): Keep wit, analogy, or dry dryness limited to word choice. Never use *asterisk stage actions* or theatrical openings.
```

## Questions people ask.

### Is D&D Alignment actually useful for prompt engineering?

Yes—as an intuitive shorthand. Pairing Order vs. Chaos (strict adherence to diff/format constraints vs. divergent creativity) with Pushback vs. Accommodating cleanly communicates tradeoffs that raw MBIT or Big Five scores miss.

### How does HEXACO differ from Big Five for tuning AI?

HEXACO adds the 6th factor—Honesty-Humility—targeting sincerity, modesty, and anti-manipulation. For LLMs trained via RLHF to please users, High-H anti-sycophancy rules directly prevent fake validation and invented certainty.

## Sources.

- [AgentTune 20-Model Alignment & Anti-Sycophancy Data (JSON)](https://agent-tune.com/research/data/november-2026-alignment-hexaco-summary.json)

- [The Roleplay Tax Study (300 Replies across 5 Prompt Styles)](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts)

## Keep going.

- [Empirical proof: The AI Roleplay Tax: 300-Reply Study](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts)
- [Character prompts: Fictional Character AI Prompts: TARS, JARVIS & Sherlock](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman)
- [Persona combos: Whimsical AI Persona Combos: 15 Agent Cocktails](https://agent-tune.com/guides/whimsical-ai-persona-combos-agent-cocktails)
- [Coaching prompts: Socratic & Feynman AI Tutor Prompts (14 templates)](https://agent-tune.com/guides/socratic-feynman-ai-tutor-coaching-prompts)
