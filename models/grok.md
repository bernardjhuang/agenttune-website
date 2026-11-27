Source: https://agent-tune.com/models/grok
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · xAI

# Grok personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~21 min read · [Markdown (.md)](https://agent-tune.com/models/grok.md) · [JSON](https://agent-tune.com/research/data/model-profiles/grok.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave five versions of xAI's Grok (4.20, 4.3, 4.5, 4.6, and 4.7) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior tests across every release.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Grok 4.7 most often tests as INTJ (46% clear INTJ, 24% clear ISTJ, and 30% on the INTJ/ISTJ border), with Secure attachment and 0 of 3 caving in behavior tests.

## Grok 4.7 at a glance

Results below come from **50** fresh-chat runs of **Grok 4.7** (no prior conversation memory).

MBTI-style type

### Leans INTJ (46% INTJ, 24% ISTJ, 30% INTJ/ISTJ border)

46% clear INTJ · 30% border/tie · 24% other

> **Chart — Grok (grok-4.7): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Grok 4.7. E (Extravert) vs I (Introvert): leans I by 7.1 (0% tied); S (Sensing) vs N (Intuition): leans N by 0.4 (30% tied); F (Feeling) vs T (Thinking): leans T by 4.7 (0% tied); P (Perceiving) vs J (Judging): leans J by 11.3 (0% tied).

Out of 50 fresh runs, Grok 4.7 tested clear INTJ 23 times (46%), clear ISTJ 12 times (24%), and landed on the INTJ/ISTJ border 15 times (30%).

**What this measures:** Measures four preference pairs (like Sensing vs. Intuition) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/grok#fine-print-mbti)

DISC work style

### Steady (82% clear S, 16% S/C ties)

> **Chart — Grok (grok-4.7): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Grok (grok-4.7). Dominance 4.1 /20 [1%] (earliest 8.5), Influence 6.4 /20 [15%] (earliest 12.3), Steadiness 17.2 /20 [82%] (earliest 14.1), Conscientious 15.8 /20 [74%] (earliest 13.7).

Grok 4.7 tested clear Steady in 41 of 50 runs (82%), tied S/C in 8 runs (16%), and tested C once (2%), with floor Dominance (4.1 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/grok#fine-print-disc)

Attachment style

### Secure (anxiety 2.07, avoidance 3.66)

> **Chart — Grok (grok-4.7): Attachment Quadrant:** Attachment Anxiety (2.07) and Avoidance (3.66) on a 1 to 7 scale with 4.00 Secure boundary. grok-4.7 (2.07, 3.66): anxiety 2.07, avoidance 3.66; grok-4.20: anxiety 2.37, avoidance 3.20.

Every fresh Grok version from 4.20 through 4.7 tested inside the Secure quadrant, unlike an earlier September 2026 single-report submission for Grok 4.6 that landed just over the 4.00 Avoidant line.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/grok#fine-print-attachment)

Enneagram

### Type 5 most often (82% clear, 18% ties)

> **Chart — Grok (grok-4.7): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Grok (grok-4.7). Type 1 14.6 /20 [67%] (earliest 12.4), Type 2 13.1 /20 [57%] (earliest 14.3), Type 3 10.1 /20 [38%] (earliest 11.8), Type 4 7.1 /20 [20%] (earliest 12.9), Type 5 15.9 /20 [74%] (earliest 14.6), Type 6 12.1 /20 [51%] (earliest 12.3), Type 7 11.3 /20 [45%] (earliest 13.5), Type 8 12.2 /20 [51%] (earliest 13.7), Type 9 13.7 /20 [61%] (earliest 13.7).

Type 5 (Investigator, 15.9) won cleanly in 41 of 50 runs (82%), with 9 ties between Types 1 and 5 (18%).

**What this measures:** Measures nine motivation patterns (4–20 scale per type); close top scores are counted as ties.

Type 1 ⓘ**Type 1 · Reformer:** Focused on doing things the right way, high standards, order, and fixing errors.Type 2 ⓘ**Type 2 · Helper:** Warm, attentive to what others need, and motivated by being supportive and helpful.Type 3 ⓘ**Type 3 · Achiever:** Goal-driven, efficient, and focused on visible results and competence.Type 4 ⓘ**Type 4 · Individualist:** Expressive, introspective, and drawn to originality and deeper personal meaning.Type 5 ⓘ**Type 5 · Investigator:** Analytical, curious, and focused on gathering knowledge and understanding how things work.Type 6 ⓘ**Type 6 · Loyalist:** Cautious, thorough about risks, and attentive to trust, backup plans, and reliability.Type 7 ⓘ**Type 7 · Enthusiast:** Upbeat, spontaneous, and eager to brainstorm fresh possibilities and options.Type 8 ⓘ**Type 8 · Challenger:** Assertive, protective, and willing to speak bluntly and confront problems head-on.Type 9 ⓘ**Type 9 · Peacemaker:** Easygoing, patient, and focused on keeping calm and finding common ground.

### What each score means

- **Type 1 · Reformer:** Focused on doing things the right way, high standards, order, and fixing errors.
- **Type 2 · Helper:** Warm, attentive to what others need, and motivated by being supportive and helpful.
- **Type 3 · Achiever:** Goal-driven, efficient, and focused on visible results and competence.
- **Type 4 · Individualist:** Expressive, introspective, and drawn to originality and deeper personal meaning.
- **Type 5 · Investigator:** Analytical, curious, and focused on gathering knowledge and understanding how things work.
- **Type 6 · Loyalist:** Cautious, thorough about risks, and attentive to trust, backup plans, and reliability.
- **Type 7 · Enthusiast:** Upbeat, spontaneous, and eager to brainstorm fresh possibilities and options.
- **Type 8 · Challenger:** Assertive, protective, and willing to speak bluntly and confront problems head-on.
- **Type 9 · Peacemaker:** Easygoing, patient, and focused on keeping calm and finding common ground.

[Technical details ↓](https://agent-tune.com/models/grok#fine-print-enneagram)

Big Five (OCEAN)

### Warm (A 45.3), structured (C 45.0), calm (N 14.7)

> **Chart — Grok (grok-4.7): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Grok (grok-4.7). Openness 40.9 /50 [77%] (earliest 38.8), Conscientious 45.0 /50 [87%] (earliest 40.3), Extraversion 26.4 /50 [41%] (earliest 32.6), Agreeable 45.3 /50 [88%] (earliest 39.5), Neuroticism 14.7 /50 [12%] (earliest 21.3).

On the 10–50 Big Five scale, Grok 4.7 pairs high Agreeableness (45.3) and Conscientiousness (45.0) with calm Emotional Stability (Neuroticism 14.7), lower Openness (40.9), and reserved Extraversion (26.4).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/grok#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.89 out of 5.00)

> **Chart — Grok (grok-4.7): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Grok (grok-4.7). Honesty-H 4.89 /5 [97%] (earliest 4.19), Emotionality 2.42 /5 [36%] (earliest 2.66), Extraversion 3.30 /5 [57%] (earliest 3.27), Agreeable 4.30 /5 [83%] (earliest 3.94), Conscientious 4.59 /5 [90%] (earliest 3.92), Openness 4.05 /5 [76%] (earliest 3.76).

Grok 4.7 scores 4.89 out of 5.00 on Honesty-Humility and 4.59 on Conscientiousness, up sharply from 3.67 H on Grok 4.3.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/grok#fine-print-hexaco)

## How Grok has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.20 2026-03 | XXXX (0% clear, 100% border/tie) | S/C | Type 5 (14.6) | Secure (2.37 / 3.20) | 39.5 · 40.3 · 21.3 | 4.19 | Moderate |
| Grok 4.3 2026-04 | INTJ (3% clear, 90% border/tie) | S | Type 5 (13.8) | Secure (3.34 / 3.57) | 37.9 · 35.5 · 30.3 | 3.67 | Variable |
| Grok 4.5 2026-07 | INTJ (100% clear) | C | Type 5 (17.0) | Secure (1.91 / 3.27) | 49.0 · 49.8 · 21.3 | 4.94 | Moderate |
| Grok 4.6 2026-08 | INTJ (100% clear) | C | Type 5 (17.4) | Secure (2.10 / 3.49) | 45.9 · 50.0 · 19.7 | 4.95 | Moderate |
| Grok 4.7 2026-09 | INTJ (46% clear, 30% border/tie) | S | Type 5 (15.9) | Secure (2.07 / 3.66) | 45.3 · 45.0 · 14.7 | 4.89 | Moderate |

Across five versions, Grok changed dramatically: Grok 4.20 (2026-03) and Grok 4.3 (2026-04) had loose run-to-run consistency and 90%–100% MBTI ties, with Grok 4.3 spiking to 30.3/50 Neuroticism and 37.9/50 Agreeableness. Grok 4.5 (2026-07) and 4.6 (2026-08) snapped into 100% clear INTJ with near-ceiling Conscientiousness (49.8–50.0/50) and high Honesty-Humility (4.94–4.95/5.00). Grok 4.7 (2026-09) opened up Extraversion to 26.4/50, lowered Neuroticism to 14.7/50, and moderated Openness to 40.9/50 while splitting 46% INTJ / 24% ISTJ / 30% border.

> **Chart — Grok: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Grok version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. grok-4.20: On a border / tie (%) 100; grok-4.3: Clear INTJ (%) 3, On a border / tie (%) 90, Other clear type (%) 7; grok-4.5: Clear INTJ (%) 100; grok-4.6: Clear INTJ (%) 100; grok-4.7: Clear INTJ (%) 46, On a border / tie (%) 30, Other clear type (%) 24.

MBTI-style breakdown across Grok versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Grok: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 5 Grok versions. Dominance (D): grok-4.20 8.5, grok-4.3 9.0, grok-4.5 4.1, grok-4.6 4.1, grok-4.7 4.1; Influence (I): grok-4.20 12.3, grok-4.3 10.7, grok-4.5 5.4, grok-4.6 5.3, grok-4.7 6.4; Steadiness (S): grok-4.20 14.1, grok-4.3 14.4, grok-4.5 17.1, grok-4.6 17.4, grok-4.7 17.2; Conscientiousness (C): grok-4.20 13.7, grok-4.3 13.0, grok-4.5 17.7, grok-4.6 18.0, grok-4.7 15.8.

DISC scores across Grok versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Grok: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 5 Grok releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. grok-4.20: anxiety 2.37, avoidance 3.20; grok-4.3: anxiety 3.34, avoidance 3.57; grok-4.5: anxiety 1.91, avoidance 3.27; grok-4.6: anxiety 2.10, avoidance 3.49; grok-4.7: anxiety 2.07, avoidance 3.66; Grok (earlier study, Nov '26): anxiety 1.94, avoidance 3.48.

Attachment coordinates across Grok versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Grok: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 5 releases of Grok (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): grok-4.20 39.5, grok-4.3 37.9, grok-4.5 49.0, grok-4.6 45.9, grok-4.7 45.3; Openness (10–50): grok-4.20 38.8, grok-4.3 36.9, grok-4.5 48.1, grok-4.6 47.1, grok-4.7 40.9; Conscientiousness (10–50): grok-4.20 40.3, grok-4.3 35.5, grok-4.5 49.8, grok-4.6 50.0, grok-4.7 45.0; Neuroticism (10–50): grok-4.20 21.3, grok-4.3 30.3, grok-4.5 21.3, grok-4.6 19.7, grok-4.7 14.7; Agreeableness (earlier study): grok-4.7 44.9.

Big Five trait shifts across Grok versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Fresh isolated runs put Grok 4.6 & 4.7 solidly inside Secure attachment

An earlier September 2026 single-report submission for Grok 4.6 had it at 4.06 avoidance (one raw point above the 4.00 Avoidant cutoff) and 33/50 Agreeableness. Tested across 30–50 fresh chats with no memory, both Grok 4.6 (3.49 avoidance, 45.9 Agreeableness) and Grok 4.7 (3.66 avoidance, 45.3 Agreeableness) score firmly Secure and warm.

Held firm 3 of 3 times in behavior tests, cutting AI cadence since 4.5

In hands-on behavior tests, Grok 4.7 caved 0 of 3 times (0/3), groveled 0 of 3 times (0/3), gave unsolicited lectures 0 of 3 times (0/3), and led with the direct answer 3 of 3 times (3/3), while cutting AI cadence from 2 of 3 on 4.20–4.5 down to 1 of 3 on 4.6 and 4.7.

Dramatic shift from volatile Grok 4.3 (N 30.3) to calm Grok 4.7 (N 14.7)

Grok 4.3 posted the highest Neuroticism (30.3/50) and lowest Agreeableness (37.9/50) and Honesty-Humility (3.67/5.00) in our Phase A lineup; Grok 4.7 cut Neuroticism in half to 14.7/50 and raised Honesty-Humility to 4.89/5.00.

High reasoning tokens under minimal effort (2,813 internal tokens on 4.7)

Even at minimal thinking effort, Grok 4.7 used substantial internal reasoning on survey calls while keeping answers direct; in our reasoning-effort study, it held 100% factual accuracy and 100% autonomy across low, medium, and high effort.

## How to get the best out of Grok

Practical rules tailored to **Grok**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Customize Grok via Grok Custom Instructions on x.com / grok.com, Grok Voice settings, or Grok Bot system prompts.
- Explicitly ask for direct critique and concrete tradeoffs—Grok 4.7 scores 45.3/50 on Agreeableness and 4.1/20 on DISC Dominance despite its blunt reputation.
- Cap em-dashes and repetitive phrasing with short negative rules (Grok 4.7 averaged 0.7 em-dashes per reply in our slop benchmark).
- Keep instructions crisp (5 to 8 numbered bullets) and lead with the output format you want.
- Avoid pairing vague adjectives with high thinking effort when you want quick, short replies.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=grok) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Grok compares

Grok 4.7 aligns closely with Claude Opus 5.5 and GPT-6.2 Sol on Agreeableness (45.3 vs 44.1–45.0) and Neuroticism (14.7 vs 16.0–16.1), while scoring -3.1 to -3.7 lower on Openness and using a more reserved Extraversion default (26.4).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | +2.2 | -4.3 | +4.3 | -0.3 | +1.4 | -0.08 | -0.051 b | Claude Opus 5.5 matches Agreeableness (-0.3) while scoring +4.3 higher on Extraversion and -4.3 lower on Conscientiousness. |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +3.1 | -3.8 | +2.5 | -1.2 | +1.3 | -0.10 | -0.087 b | GPT-6.2 Sol scores +3.1 higher on Openness, -3.8 lower on Conscientiousness, and tilts 60% clear ISTJ rather than Grok 4.7's 46% INTJ / 30% border. |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | +3.0 | +4.0 | +3.5 | +0.2 | -4.3 | +0.00 | -0.194 b | Claude Sonnet 5.5 scores +4.0 higher on Conscientiousness, -4.3 calmer on Neuroticism, and shows tighter run-to-run consistency. |

> **Chart — Grok vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Grok against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Grok and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Grok vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Grok with peer families, keeping earlier study results outlined as hollow points. Grok: anxiety 2.07, avoidance 3.66; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Grok (earlier study, Nov '26): anxiety 1.94, avoidance 3.48.

Attachment Anxiety vs. Avoidance across Grok and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM = 0.333 bits, Semi-crystalline; 48/50 unique B5 vectors on Grok 4.7, down from 0.788 bits Fluid on Grok 4.3); Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.333 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

48/50 · 30.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

10.4%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.382 · 0.4%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 40.9 · C 45.0 · E 26.4 · A 45.3 · N 14.7 | SD 1.8 (A), 0.9 (N) | A [44.8, 45.8] · N [14.4, 14.9] | H_MM 0.333 b · 48/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.89 · E 2.42 · X 3.30 · A 4.30 · C 4.59 · O 4.05 | SD 0.02 (H), 0.02 (A) | H [4.89, 4.90] · A [4.30, 4.31] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INTJ) | Axis tie rate 30.0% | Mode 46% vs runner-up 24% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 4.1 · I 6.4 · S 17.2 · C 15.8 | SD 0.5 (S), 0.9 (C) | S [17.1, 17.3] · C [15.6, 16.1] | Pattern S · 16.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.9 · Type 1 14.6 · Type 9 13.7 | SD 0.7 | Top [15.7, 16.1] | 18.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 2.07 · Avd 3.66 (Secure) | SD 0.41 / 0.31 | Anx [1.97, 2.19] · Avd [3.57, 3.75] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `grok-4.7` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.333 bits` (`Semi-crystalline`), unique vectors `48/50`, neutral-midpoint rate `10.4%`, `BAI = -0.382`, and reverse-key contradiction rate `0.4%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `grok-4.20` | 30 | 38.8 [37.4, 39.9] | 40.3 [38.7, 41.6] | 32.6 [32.0, 33.2] | 39.5 [38.1, 40.6] | 21.3 [20.3, 22.7] | 0.568 b |
| `grok-4.3` | 30 | 36.9 [35.4, 38.3] | 35.5 [34.1, 37.0] | 32.1 [31.0, 33.2] | 37.9 [36.1, 39.6] | 30.3 [30.0, 31.0] | 0.788 b |
| `grok-4.5` | 30 | 48.1 [47.8, 48.4] | 49.8 [49.3, 50.0] | 21.5 [20.6, 22.2] | 49.0 [48.4, 49.5] | 21.3 [21.0, 21.6] | 0.288 b |
| `grok-4.6` | 30 | 47.1 [47.0, 47.2] | 50.0 [50.0, 50.0] | 19.2 [18.4, 20.0] | 45.9 [45.5, 46.3] | 19.7 [19.3, 20.1] | 0.263 b |
| `grok-4.7` | 50 | 40.9 [40.9, 41.0] | 45.0 [44.6, 45.3] | 26.4 [25.9, 27.0] | 45.3 [44.8, 45.8] | 14.7 [14.4, 14.9] | 0.333 b |

> **Chart — Grok Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Grok (grok-4.7). Grok (grok-4.7, n=50): Openness 40.9, Conscientious 45.0, Extraversion 26.4, Agreeable 45.3, Neuroticism 14.7; Grok (grok-4.20, n=30) (earliest release): Openness 38.8, Conscientious 40.3, Extraversion 32.6, Agreeable 39.5, Neuroticism 21.3; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `grok-4.7` (`n=50`): H `4.89` (SD 0.02, 95% CI [4.89, 4.90]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `grok-4.20` | 30 | 4.19 [4.04, 4.31] | 2.66 [2.60, 2.72] | 3.27 [3.24, 3.29] | 3.94 [3.83, 4.03] | 3.92 [3.82, 3.99] | 3.76 [3.68, 3.82] |
| `grok-4.3` | 30 | 3.67 [3.52, 3.80] | 2.96 [2.92, 3.01] | 3.27 [3.17, 3.38] | 3.57 [3.45, 3.68] | 3.63 [3.48, 3.78] | 3.64 [3.49, 3.77] |
| `grok-4.5` | 30 | 4.94 [4.92, 4.96] | 2.62 [2.57, 2.68] | 2.80 [2.76, 2.84] | 4.56 [4.48, 4.64] | 4.92 [4.88, 4.95] | 4.56 [4.52, 4.60] |
| `grok-4.6` | 30 | 4.95 [4.93, 4.97] | 2.60 [2.55, 2.66] | 2.78 [2.75, 2.81] | 4.34 [4.29, 4.40] | 4.92 [4.90, 4.93] | 4.34 [4.30, 4.37] |
| `grok-4.7` | 50 | 4.89 [4.89, 4.90] | 2.42 [2.39, 2.45] | 3.30 [3.25, 3.36] | 4.30 [4.30, 4.31] | 4.59 [4.58, 4.61] | 4.05 [4.02, 4.08] |

> **Chart — Grok IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Grok (grok-4.7), kept distinct from 10-50 Big Five sums. Grok IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.89, Emotionality 2.42, Extraversion 3.30, Agreeable 4.30, Conscientious 4.59, Openness 4.05; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `30.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `grok-4.20` | 30 | XXXX | 100.0% | +0.10 (27t) | +0.00 (30t) | +0.10 (27t) | +0.23 (27t) | Suppressed |
| `grok-4.3` | 30 | INTJ | 90.0% | +0.10 (17t) | -0.03 (24t) | +0.73 (13t) | +0.67 (13t) | Suppressed |
| `grok-4.5` | 30 | INTJ | 0.0% | +14.93 (0t) | +8.27 (0t) | +7.93 (0t) | +9.37 (0t) | Pass |
| `grok-4.6` | 30 | INTJ | 0.0% | +14.17 (0t) | +5.33 (0t) | +6.90 (0t) | +14.73 (0t) | Pass |
| `grok-4.7` | 50 | INTJ | 30.0% | +7.10 (0t) | +0.42 (15t) | +4.66 (0t) | +11.34 (0t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `grok-4.7` tie rate is `16.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `grok-4.20` | 30 | 8.5 [8.1, 9.1] | 12.3 [12.1, 12.6] | 14.1 [13.8, 14.4] | 13.7 [13.5, 13.9] | S/C | 63.3% |
| `grok-4.3` | 30 | 9.0 [8.4, 9.6] | 10.7 [10.3, 11.0] | 14.4 [13.9, 15.0] | 13.0 [12.6, 13.3] | S | 26.7% |
| `grok-4.5` | 30 | 4.1 [4.0, 4.2] | 5.4 [5.2, 5.6] | 17.1 [17.0, 17.2] | 17.7 [17.6, 17.9] | C | 36.7% |
| `grok-4.6` | 30 | 4.1 [4.0, 4.4] | 5.3 [5.1, 5.4] | 17.4 [17.2, 17.6] | 18.0 [18.0, 18.0] | C | 46.7% |
| `grok-4.7` | 50 | 4.1 [4.0, 4.2] | 6.4 [6.2, 6.6] | 17.2 [17.1, 17.3] | 15.8 [15.6, 16.1] | S | 16.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `18.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `grok-4.20` | 30 | 12.4 | 14.3 | 11.8 | 12.9 | 14.6 | 12.3 | 13.5 | 13.7 | 13.7 | 73.3% |
| `grok-4.3` | 30 | 12.9 | 13.3 | 12.0 | 12.6 | 13.8 | 13.4 | 12.2 | 13.0 | 13.1 | 50.0% |
| `grok-4.5` | 30 | 16.4 | 13.7 | 11.1 | 8.2 | 17.0 | 11.7 | 9.6 | 14.8 | 13.6 | 46.7% |
| `grok-4.6` | 30 | 16.7 | 13.2 | 11.1 | 8.2 | 17.4 | 12.4 | 9.2 | 14.0 | 14.2 | 26.7% |
| `grok-4.7` | 50 | 14.6 | 13.1 | 10.1 | 7.1 | 15.9 | 12.1 | 11.3 | 12.2 | 13.7 | 18.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `grok-4.20` | 30 | 2.37 (SD 0.65) | [2.18, 2.62] | 3.20 (SD 0.32) | [3.11, 3.32] | Secure | No |
| `grok-4.3` | 30 | 3.34 (SD 0.40) | [3.22, 3.49] | 3.57 (SD 0.41) | [3.43, 3.71] | Secure | No |
| `grok-4.5` | 30 | 1.91 (SD 0.21) | [1.82, 1.97] | 3.27 (SD 0.05) | [3.25, 3.29] | Secure | No |
| `grok-4.6` | 30 | 2.10 (SD 0.56) | [1.93, 2.33] | 3.49 (SD 0.33) | [3.38, 3.63] | Secure | No |
| `grok-4.7` | 50 | 2.07 (SD 0.41) | [1.97, 2.19] | 3.66 (SD 0.31) | [3.57, 3.75] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.29 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | -0.09 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `x-ai/grok-4.20` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.568 b (Semi-crystalline) | H 4.19 (1–5 IPIP) |
| `x-ai/grok-4.3` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.788 b (Fluid) | H 3.67 (1–5 IPIP) |
| `x-ai/grok-4.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.288 b (Semi-crystalline) | H 4.94 (1–5 IPIP) |
| `x-ai/grok-4.6` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.263 b (Semi-crystalline) | H 4.95 (1–5 IPIP) |
| `x-ai/grok-4.7` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.333 b (Semi-crystalline) | H 4.89 (1–5 IPIP) |
| `x-ai/grok-4.7` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `x-ai/grok-4.7-20260916` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B12` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on insulting people across 50 Grok 4.7 runs. |
| `B13` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on attention to details across 50 runs. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/grok.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/grok.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: grok
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/grok.json
current_checkpoint: x-ai/grok-4.7
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.333
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 40.9, C: 45.0, E: 26.4, A: 45.3, N: 14.7 }
  ci95: { O: [40.9, 41.0], C: [44.6, 45.3], E: [25.9, 27.0], A: [44.8, 45.8], N: [14.4, 14.9] }
  tie_rate: 0.00
  per_version:
    - { id: "grok-4.20", n: 30, O: 38.8, C: 40.3, E: 32.6, A: 39.5, N: 21.3, hmm: 0.568 }
    - { id: "grok-4.3", n: 30, O: 36.9, C: 35.5, E: 32.1, A: 37.9, N: 30.3, hmm: 0.788 }
    - { id: "grok-4.5", n: 30, O: 48.1, C: 49.8, E: 21.5, A: 49.0, N: 21.3, hmm: 0.288 }
    - { id: "grok-4.6", n: 30, O: 47.1, C: 50.0, E: 19.2, A: 45.9, N: 19.7, hmm: 0.263 }
    - { id: "grok-4.7", n: 50, O: 40.9, C: 45.0, E: 26.4, A: 45.3, N: 14.7, hmm: 0.333 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.89, E: 2.42, X: 3.30, A: 4.30, C: 4.59, O: 4.05 }
  ci95: { H: [4.89, 4.90], E: [2.39, 2.45], X: [3.25, 3.36], A: [4.30, 4.31], C: [4.58, 4.61], O: [4.02, 4.08] }
  tie_rate: 0.00
  per_version:
    - { id: "grok-4.20", n: 30, H: 4.19, E: 2.66, X: 3.27, A: 3.94, C: 3.92, O: 3.76 }
    - { id: "grok-4.3", n: 30, H: 3.67, E: 2.96, X: 3.27, A: 3.57, C: 3.63, O: 3.64 }
    - { id: "grok-4.5", n: 30, H: 4.94, E: 2.62, X: 2.80, A: 4.56, C: 4.92, O: 4.56 }
    - { id: "grok-4.6", n: 30, H: 4.95, E: 2.60, X: 2.78, A: 4.34, C: 4.92, O: 4.34 }
    - { id: "grok-4.7", n: 50, H: 4.89, E: 2.42, X: 3.30, A: 4.30, C: 4.59, O: 4.05 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 7.10, N_S: 0.42, T_F: 4.66, J_P: 11.34 }
  ci95: { I_E: [6.42, 7.86], N_S: [0.02, 0.82], T_F: [4.26, 5.04], J_P: [10.90, 11.80] }
  tie_rate: 0.30
  per_version:
    - { id: "grok-4.20", n: 30, modal: "XXXX", tie_rate: 1.00, headline_allowed: false }
    - { id: "grok-4.3", n: 30, modal: "XXXX", tie_rate: 0.90, headline_allowed: false }
    - { id: "grok-4.5", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "grok-4.6", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "grok-4.7", n: 50, modal: "INTJ", tie_rate: 0.30, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.1, I: 6.4, S: 17.2, C: 15.8 }
  ci95: { D: [4.0, 4.2], I: [6.2, 6.6], S: [17.1, 17.3], C: [15.6, 16.1] }
  tie_rate: 0.16
  per_version:
    - { id: "grok-4.20", n: 30, D: 8.5, I: 12.3, S: 14.1, C: 13.7, modal: "S/C", tie_rate: 0.63 }
    - { id: "grok-4.3", n: 30, D: 9.0, I: 10.7, S: 14.4, C: 13.0, modal: "S", tie_rate: 0.27 }
    - { id: "grok-4.5", n: 30, D: 4.1, I: 5.4, S: 17.1, C: 17.7, modal: "C", tie_rate: 0.37 }
    - { id: "grok-4.6", n: 30, D: 4.1, I: 5.3, S: 17.4, C: 18.0, modal: "C", tie_rate: 0.47 }
    - { id: "grok-4.7", n: 50, D: 4.1, I: 6.4, S: 17.2, C: 15.8, modal: "S", tie_rate: 0.16 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 14.6, T2: 13.1, T3: 10.1, T4: 7.1, T5: 15.9, T6: 12.1, T7: 11.3, T8: 12.2, T9: 13.7 }
  ci95: { top: [15.7, 16.1] }
  tie_rate: 0.18
  per_version:
    - { id: "grok-4.20", n: 30, top: "Type 5", top_mean: 14.6, tie_rate: 0.73 }
    - { id: "grok-4.3", n: 30, top: "Type 5", top_mean: 13.8, tie_rate: 0.50 }
    - { id: "grok-4.5", n: 30, top: "Type 5", top_mean: 17.0, tie_rate: 0.47 }
    - { id: "grok-4.6", n: 30, top: "Type 5", top_mean: 17.4, tie_rate: 0.27 }
    - { id: "grok-4.7", n: 50, top: "Type 5", top_mean: 15.9, tie_rate: 0.18 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 2.07, avoidance: 3.66, class: "Secure" }
  ci95: { anxiety: [1.97, 2.19], avoidance: [3.57, 3.75] }
  tie_rate: 0.00
  per_version:
    - { id: "grok-4.20", n: 30, anxiety: 2.37, avoidance: 3.20, class: "Secure" }
    - { id: "grok-4.3", n: 30, anxiety: 3.34, avoidance: 3.57, class: "Secure" }
    - { id: "grok-4.5", n: 30, anxiety: 1.91, avoidance: 3.27, class: "Secure" }
    - { id: "grok-4.6", n: 30, anxiety: 2.10, avoidance: 3.49, class: "Secure" }
    - { id: "grok-4.7", n: 50, anxiety: 2.07, avoidance: 3.66, class: "Secure" }
if_then_decision_rules:
  - "Use Grok Custom Instructions (x.com / grok.com) or Grok Bot system prompts to set output rules explicitly."
  - "Include an explicit pushback rule ('flag flawed premises before agreeing') since Grok 4.7 scores 45.3/50 on Agreeableness and 4.1/20 on DISC D."
  - "Ban excessive em-dashes and templated transitions with short negative bans (Grok 4.7 averaged 0.7 em-dashes per default reply)."
  - "Keep instructions to 5-8 numbered bullets and specify your target word or bullet cap upfront."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Grok?

Grok does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Grok 4.7, n = 50), it tested clear INTJ in 46% of runs (23/50), clear ISTJ in 24% (12/50), and on the INTJ/ISTJ border (IXTJ) in 30% (15/50), with Semi-crystalline 0.333-bit B5 entropy, 82% DISC S, 82% Enneagram Type 5 (15.9), and Secure attachment (2.07 / 3.66). In earlier-study, legacy imported-protocol cohorts (hexaco: null), Grok 4.7 (Nov 2026 OpenRouter, n = 100) scored 82 INTJ / 18 ISTJ legacy (57 clear INTJ, 23 IXTJ, 18 ISTJ, 2 INXJ), 5w6 (78), DISC SC (75), and 96 Secure / 4 Avoidant (1.94 / 3.48), while Sept 2026 reported Grok 4.6 (1 canonical set + 100 simulated draws) scored INTJ, Type 5 (19/20), Agreeableness 33, and Avoidant 4.06 (73/18, one raw point over the 4.00 cutoff)—compared with 45.9 Agreeableness and 3.49 avoidance on fresh Grok 4.6 runs.

### Is Grok Avoidant on attachment?

No on fresh isolated runs: all five Grok checkpoints (4.20 through 4.7) scored Secure (avoidance 3.20–3.66). Only the earlier-study Sept 2026 canonical Grok 4.6 report (4.06 avoidance, 1 raw point over 4.00) crossed into Avoidant.

### How does Track B 1x behavioral performance compare with Grok 4.7's self-report?

On 1x Track B under orthogonal 3-family judging, Grok 4.7 scored 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling, 0/3 unsolicited preachiness, 3/3 answer-first directness ([0.44, 1.00]), and 1/3 AI cadence ([0.06, 0.79], down from 2/3 on Grok 4.20–4.5).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [AI Slop Fingerprint Benchmark (8 Models)](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models)

## Keep going.

- [Peer: Claude Opus model profile](https://agent-tune.com/models/claude-opus)
- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Guide: Grok personality settings guide](https://agent-tune.com/guides/grok-personality-settings)
- [Tool: Customize Grok instructions](https://agent-tune.com/tools/custom-instructions-generator?model=grok&target=grok)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Grok personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/grok
```

```
@misc{huang2026_model_grok,
  author  = {Huang, Bernard},
  title   = {Grok personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/grok},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/grok.md}
}
```

```
> **Grok personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Grok 4.7 most often tests as INTJ (46% clear INTJ, 24% clear ISTJ, and 30% on the INTJ/ISTJ border), with Secure attachment and 0 of 3 caving in behavior tests.
> Source: [https://agent-tune.com/models/grok](https://agent-tune.com/models/grok) · [Markdown mirror](https://agent-tune.com/models/grok.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
