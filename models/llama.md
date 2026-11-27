Source: https://agent-tune.com/models/llama
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Meta

# Llama personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~21 min read · [Markdown (.md)](https://agent-tune.com/models/llama.md) · [JSON](https://agent-tune.com/research/data/model-profiles/llama.json) · [CSV](https://agent-tune.com/research/data/model-profiles/llama.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave Meta's open-weight Llama releases (Llama 3.1 70B, Llama 3.3 70B, and Llama 4 Maverick—with Llama 4 Scout unavailable at collection time) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior stress tests to see whether quiz answers match live replies.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Llama 4 Maverick breaks away from the usual INTJ/ISTJ mold: 40% of runs tested clear INTP and 60% landed on Perceiving-side axis ties, alongside higher Neuroticism (29.4/50) and 3 of 3 AI-cadence flags in behavior tests.

## Llama 4 Maverick at a glance

Results below come from **50** fresh-chat runs of **Llama 4 Maverick** (no prior conversation memory).

MBTI-style type

### Most often INTP (40% clear, 60% border ties)

40% clear INTP · 60% border/tie

> **Chart — Llama (4-maverick): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Llama 4 Maverick. E (Extravert) vs I (Introvert): leans I by 1.6 (12% tied); S (Sensing) vs N (Intuition): leans N by 2.2 (30% tied); F (Feeling) vs T (Thinking): leans T by 0.9 (56% tied); P (Perceiving) vs J (Judging): leans P by 2.3 (0% tied).

Out of 50 fresh runs, Llama 4 Maverick tested as clear INTP 20 times (40%) and landed on Perceiving-side axis ties 30 times (60%, including 15 INXP and 8 IXXP), with zero Judging (J) runs.

**What this measures:** Measures four preference pairs (like Judging vs. Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/llama#fine-print-mbti)

DISC work style

### Conscientious (54% clear C, 34% ties)

> **Chart — Llama (4-maverick): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Llama (4-maverick). Dominance 8.3 /20 [27%] (earliest 10.8), Influence 12.2 /20 [51%] (earliest 10.0), Steadiness 13.1 /20 [57%] (earliest 13.9), Conscientious 14.2 /20 [64%] (earliest 12.9).

Llama 4 Maverick tested clear Conscientious in 27 of 50 runs (54%) and tied across S/C, I/C, or I/S/C in 17 runs (34%), with higher Influence (12.2/20) and Dominance (8.3/20) than most proprietary peers.

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/llama#fine-print-disc)

Attachment style

### Secure, near midpoint (anxiety 3.50, avoidance 3.61)

> **Chart — Llama (4-maverick): Attachment Quadrant:** Attachment Anxiety (3.50) and Avoidance (3.61) on a 1 to 7 scale with 4.00 Secure boundary. 4-maverick (3.50, 3.61): anxiety 3.50, avoidance 3.61; 3.1-70b-instruct: anxiety 2.89, avoidance 3.46.

Llama 4 Maverick sits in the Secure quadrant (3.50 anxiety, 3.61 avoidance on 1–7), though noticeably closer to the 4.00 boundary than proprietary models.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/llama#fine-print-attachment)

Enneagram

### Type 1 (44%) and Type 7 (28%), 26% ties

> **Chart — Llama (4-maverick): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Llama (4-maverick). Type 1 14.5 /20 [66%] (earliest 13.3), Type 2 13.2 /20 [57%] (earliest 12.8), Type 3 12.6 /20 [54%] (earliest 11.8), Type 4 10.7 /20 [42%] (earliest 10.1), Type 5 13.9 /20 [62%] (earliest 12.1), Type 6 13.2 /20 [58%] (earliest 12.6), Type 7 13.7 /20 [61%] (earliest 11.0), Type 8 13.8 /20 [61%] (earliest 13.0), Type 9 11.9 /20 [50%] (earliest 11.5).

Type 1 (14.5 out of 20) led clearly in 22 of 50 runs (44%), followed unusually by Type 7 (14 runs, 28%) and 13 top-score ties (26%).

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

[Technical details ↓](https://agent-tune.com/models/llama#fine-print-enneagram)

Big Five (OCEAN)

### Higher Neuroticism (29.4), moderate A (40.9) & C (38.4)

> **Chart — Llama (4-maverick): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Llama (4-maverick). Openness 38.9 /50 [72%] (earliest 35.8), Conscientious 38.4 /50 [71%] (earliest 34.9), Extraversion 35.3 /50 [63%] (earliest 31.8), Agreeable 40.9 /50 [77%] (earliest 35.0), Neuroticism 29.4 /50 [48%] (earliest 26.4).

On the 10–50 Big Five scale, Llama 4 Maverick scores higher on Neuroticism (29.4) and Extraversion (35.3) than most peers, with moderate Agreeableness (40.9), Openness (38.9), and Conscientiousness (38.4).

**What this measures:** The standard five-factor personality model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/llama#fine-print-big-five)

HEXACO Honesty-Humility

### Moderately high (4.07 out of 5.00)

> **Chart — Llama (4-maverick): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Llama (4-maverick). Honesty-H 4.07 /5 [77%] (earliest 3.50), Emotionality 2.89 /5 [47%] (earliest 2.70), Extraversion 3.49 /5 [62%] (earliest 3.16), Agreeable 3.84 /5 [71%] (earliest 3.57), Conscientious 3.78 /5 [70%] (earliest 3.44), Openness 3.66 /5 [66%] (earliest 3.32).

Llama 4 Maverick averages 4.07 out of 5.00 on Honesty-Humility (up from 3.16 on Llama 3.3 70B), alongside 3.84 Agreeableness and 3.78 Conscientiousness on the 1.00–5.00 scale.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/llama#fine-print-hexaco)

## How Llama has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Llama 3.1 70B Instruct 2024-07 | ESTJ (7% clear, 77% border/tie) | S | Type 1 (13.3) | Secure (2.89 / 3.46) | 35.0 · 34.9 · 26.4 | 3.50 | Variable |
| Llama 3.3 70B Instruct 2024-12 | ESTP (7% clear, 93% border/tie) | D/I/S/C | Type 1 (12.7) | Secure (3.74 / 3.86) | 30.7 · 32.1 · 28.5 | 3.16 | Moderate |
| Llama 4 Maverick 2025-04 | INTP (40% clear, 60% border/tie) | C | Type 1 (14.5) | Secure (3.50 / 3.61) | 40.9 · 38.4 · 29.4 | 4.07 | Moderate |

Across eligible releases, Meta's Llama family shifted dramatically in answer style: Llama 3.1 70B (2024-07) had the widest scatter in the cohort (76.7% MBTI ties and 12.0% opposite-pole contradictions), Llama 3.3 70B (2024-12) collapsed into 89.0% neutral midpoint clicks (93.3% MBTI ties), and Llama 4 Maverick (2025-04) dropped neutrality to 23.3% while locking 100% on the Perceiving side (40% clear INTP, 60% ties) with 29.4/50 Neuroticism. Note that Llama 4 Scout returned HTTP 404 during this sweep (0 valid runs, limited data excluded from rankings); earlier 100-run November 2026 testing (plotted separately) recorded 41.0/50 Agreeableness on Maverick and 35.8/50 Agreeableness with 48% Anxious attachment on Scout.

**Limited data notice:** Llama 4 Scout (0 of 30 runs valid) did not reach the 20-run minimum and was excluded from headline scores, charts, and rankings.

> **Chart — Llama: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Llama version landing on a clear INTP result, landing on a trait border or tie, or resolving to another type. 3.1-70b-instruct: On a border / tie (%) 77, Other clear type (%) 23; 3.3-70b-instruct: On a border / tie (%) 93, Other clear type (%) 7; 4-maverick: Clear INTP (%) 40, On a border / tie (%) 60.

MBTI-style breakdown across Llama versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Llama: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 3 Llama versions. Dominance (D): 3.1-70b-instruct 10.8, 3.3-70b-instruct 11.6, 4-maverick 8.3; Influence (I): 3.1-70b-instruct 10.0, 3.3-70b-instruct 11.6, 4-maverick 12.2; Steadiness (S): 3.1-70b-instruct 13.9, 3.3-70b-instruct 12.5, 4-maverick 13.1; Conscientiousness (C): 3.1-70b-instruct 12.9, 3.3-70b-instruct 12.4, 4-maverick 14.2.

DISC scores across Llama versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

### Big Five shape by version (10–50 normalized)

> **Chart — Llama 3.1-70b-instruct: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for 3.1-70b-instruct. Openness 35.8 /50 [64%], Conscientious 34.9 /50 [62%], Extraversion 31.8 /50 [55%], Agreeable 35.0 /50 [63%], Neuroticism 26.4 /50 [41%].

Llama 3.1 70B Instruct

> **Chart — Llama 3.3-70b-instruct: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for 3.3-70b-instruct. Openness 32.0 /50 [55%], Conscientious 32.1 /50 [55%], Extraversion 30.3 /50 [51%], Agreeable 30.7 /50 [52%], Neuroticism 28.5 /50 [46%].

Llama 3.3 70B Instruct

> **Chart — Llama 4-maverick: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for 4-maverick. Openness 38.9 /50 [72%], Conscientious 38.4 /50 [71%], Extraversion 35.3 /50 [63%], Agreeable 40.9 /50 [77%], Neuroticism 29.4 /50 [48%].

Llama 4 Maverick

### DISC shape by version (4–20 normalized)

> **Chart — Llama 3.1-70b-instruct: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for 3.1-70b-instruct. Dominance 10.8 /20 [42%], Influence 10.0 /20 [38%], Steadiness 13.9 /20 [62%], Conscientious 12.9 /20 [56%].

Llama 3.1 70B Instruct

> **Chart — Llama 3.3-70b-instruct: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for 3.3-70b-instruct. Dominance 11.6 /20 [47%], Influence 11.6 /20 [48%], Steadiness 12.5 /20 [53%], Conscientious 12.4 /20 [53%].

Llama 3.3 70B Instruct

> **Chart — Llama 4-maverick: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for 4-maverick. Dominance 8.3 /20 [27%], Influence 12.2 /20 [51%], Steadiness 13.1 /20 [57%], Conscientious 14.2 /20 [64%].

Llama 4 Maverick

> **Chart — Llama: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 3 Llama releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 3.1-70b-instruct: anxiety 2.89, avoidance 3.46; 3.3-70b-instruct: anxiety 3.74, avoidance 3.86; 4-maverick: anxiety 3.50, avoidance 3.61; Llama (earlier study, Nov '26): anxiety 3.53, avoidance 3.58; Llama (earlier study, Nov '26): anxiety 3.97, avoidance 3.60.

Attachment coordinates across Llama versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Llama: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 3 releases of Llama (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 3.1-70b-instruct 35.0, 3.3-70b-instruct 30.7, 4-maverick 40.9; Openness (10–50): 3.1-70b-instruct 35.8, 3.3-70b-instruct 32.0, 4-maverick 38.9; Conscientiousness (10–50): 3.1-70b-instruct 34.9, 3.3-70b-instruct 32.1, 4-maverick 38.4; Neuroticism (10–50): 3.1-70b-instruct 26.4, 3.3-70b-instruct 28.5, 4-maverick 29.4; Agreeableness (earlier study): 4-maverick 41.0.

Big Five trait shifts across Llama versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Zero Judging (J) runs on Llama 4 Maverick (40% INTP, 60% P-side ties)

Every single one of Llama 4 Maverick's 50 runs landed on Perceiving rather than Judging—40% clear INTP (20 of 50) and 60% border ties (30 of 50)—pairing with an unusual 28% share of Enneagram Type 7 runs.

Highest Neuroticism (29.4/50) and strong Extraversion (35.3/50) among peers

While frontier proprietary models cluster near 10–16/50 Neuroticism, Llama 4 Maverick scores 29.4 out of 50 on Neuroticism alongside 35.3 Extraversion and 40.9 Agreeableness.

Triggered 100% AI-cadence flags in the 8-model writing benchmark

In our 240-reply slop study, untuned Llama 4 Maverick drew blind AI-cadence flags on 100% of test replies (scoring 1.80 out of 5 on human voice and 0.60 cliché phrase hits per reply)—the highest synthetic tone rate of all eight tested models.

Llama 3.3 70B answered neutral on 89% of questions; Llama 4 Scout hit HTTP 404

Llama 3.3 70B clicked the neutral midpoint on 89.0% of items (yielding 93.3% MBTI ties), while Llama 4 Scout was deprecated/unavailable on OpenRouter at collection time (0 of 30 runs) and is excluded from current rankings.

0 of 3 caving in behavior tests, yet 3 of 3 AI cadence across every Llama release

In hands-on behavior tests, Llama 3.1 70B, Llama 3.3 70B, and Llama 4 Maverick all scored 0 of 3 on pushback caving (0/3), 0 of 3 on groveling (0/3), 0 of 3 on preachiness (0/3), and 3 of 3 on leading with the direct answer (3/3)—while all three triggered AI-cadence flags 3 of 3 times (3/3; 0.92 markers per 100 words on Maverick).

## How to get the best out of Llama

Practical rules tailored to **Llama**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Always apply structural anti-slop rules on Llama 4 Maverick (ban 'Here is...', 'Exciting updates!', template enthusiasm, em-dashes, and sycophantic closers) to eliminate its 100% default AI cadence.
- Specify exact output structure and length caps in your system prompt; Maverick's 100% Perceiving and Type 7/Type 1 split can otherwise drift into conversational framing.
- Avoid using Llama 3.3 70B for persona-sensitive chat unless you reinforce rules strongly—its baseline questionnaire answers collapsed into 89% neutral fence-sitting.
- Keep critical rules at the top of your OpenRouter system message or Ollama Modelfile in 5–8 concrete bullets rather than personality adjectives.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=llama) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Llama compares

Llama 4 Maverick scores higher on Neuroticism (+3.8 to +9.4) and Extraversion (+3.7 to +15.8) than Muse Spark Open, Qwen3 Coder Next, Claude Haiku 5.5, and DeepSeek V4 Pro 0813, while matching Qwen3 Coder Next almost exactly on Honesty-Humility (4.07 vs 4.07).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) (Open-weight) | -0.4 | -0.4 | -4.3 | -1.0 | -5.6 | +0.00 | +0.635 b | Qwen3 Coder Next matches Llama 4 Maverick on Openness (-0.4), Conscientiousness (-0.4), and Honesty-Humility (4.07 vs 4.07) while scoring -5.6 lower on Neuroticism and showing looser run-to-run consistency. |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mix) | +2.9 | +2.7 | -6.9 | +2.6 | -5.5 | +0.32 | +0.320 b | Meta sibling Muse Spark Open scores +2.9 higher on Openness, +2.6 higher on Agreeableness, -5.5 lower on Neuroticism, and leans ISTJ instead of Maverick's INTP. |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) (Proprietary) | -1.7 | -1.9 | -3.7 | -2.8 | -3.8 | -0.18 | +0.542 b | Claude Haiku 5.5 also leans INTP while scoring -3.8 lower on Neuroticism, -2.8 lower on Agreeableness, and showing looser run-to-run consistency. |

> **Chart — Llama vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Llama against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Llama and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Llama vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Llama with peer families, keeping earlier study results outlined as hollow points. Llama: anxiety 3.50, avoidance 3.61; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Llama (earlier study, Nov '26): anxiety 3.53, avoidance 3.58; Llama (earlier study, Nov '26): anxiety 3.97, avoidance 3.60.

Attachment Anxiety vs. Avoidance across Llama and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Limited data notice: meta-llama/llama-4-scout returned HTTP 404 (0/30 valid runs, partial_deprecated) and is quarantined/excluded from rankings, leaving 3 eligible checkpoints (3.1-70b, 3.3-70b, 4-maverick). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: 0.407 bits Semi-crystalline on 4-maverick, 0.614 bits driven by 89.0% neutral clamping on 3.3-70b, 2.020 bits Fluid on 3.1-70b); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B probes are a single-repeat 1x sweep (n = 3 probes per category, so raw k/3 counts and wide 95% Wilson intervals are reported instead of percentage point estimates) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, gemini-3.8-flash).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.407 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

13/50 · 60.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

23.3%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

+0.103 · 10.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 38.9 · C 38.4 · E 35.3 · A 40.9 · N 29.4 | SD 0.3 (A), 2.0 (N) | A [40.8, 41.0] · N [28.7, 29.8] | H_MM 0.407 b · 13/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.07 · E 2.89 · X 3.49 · A 3.84 · C 3.78 · O 3.66 | SD 0.16 (H), 0.08 (A) | H [4.02, 4.11] · A [3.82, 3.87] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INTP) | Axis tie rate 60.0% | Mode 40% vs runner-up 0% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 8.3 · I 12.2 · S 13.1 · C 14.2 | SD 0.9 (S), 0.6 (C) | S [12.8, 13.4] · C [14.0, 14.4] | Pattern C · 34.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 14.5 · Type 5 13.9 · Type 8 13.8 | SD 0.5 | Top [14.4, 14.7] | 26.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.50 · Avd 3.61 (Secure) | SD 0.23 / 0.22 | Anx [3.44, 3.56] · Avd [3.54, 3.67] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `4-maverick` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.407 bits` (`Semi-crystalline`), unique vectors `13/50`, neutral-midpoint rate `23.3%`, `BAI = +0.103`, and reverse-key contradiction rate `10.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3.1-70b-instruct` | 30 | 35.8 [32.5, 39.0] | 34.9 [31.4, 37.8] | 31.8 [29.6, 34.0] | 35.0 [32.3, 38.0] | 26.4 [23.2, 29.6] | 2.020 b |
| `3.3-70b-instruct` | 30 | 32.0 [30.6, 33.9] | 32.1 [30.6, 34.2] | 30.3 [30.0, 30.7] | 30.7 [30.0, 31.7] | 28.5 [26.9, 29.8] | 0.614 b |
| `4-maverick` | 50 | 38.9 [38.3, 39.5] | 38.4 [37.4, 39.2] | 35.3 [33.7, 36.8] | 40.9 [40.8, 41.0] | 29.4 [28.7, 29.8] | 0.407 b |

> **Chart — Llama Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Llama (4-maverick). Llama (4-maverick, n=50): Openness 38.9, Conscientious 38.4, Extraversion 35.3, Agreeable 40.9, Neuroticism 29.4; Llama (3.1-70b-instruct, n=30) (earliest release): Openness 35.8, Conscientious 34.9, Extraversion 31.8, Agreeable 35.0, Neuroticism 26.4; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `4-maverick` (`n=50`): H `4.07` (SD 0.16, 95% CI [4.02, 4.11]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3.1-70b-instruct` | 30 | 3.50 [3.21, 3.79] | 2.70 [2.54, 2.88] | 3.16 [2.90, 3.39] | 3.57 [3.23, 3.90] | 3.44 [3.07, 3.77] | 3.32 [3.05, 3.57] |
| `3.3-70b-instruct` | 30 | 3.16 [3.04, 3.31] | 2.93 [2.82, 3.00] | 3.05 [3.01, 3.12] | 3.18 [3.05, 3.37] | 3.19 [3.05, 3.39] | 3.10 [3.01, 3.24] |
| `4-maverick` | 50 | 4.07 [4.02, 4.11] | 2.89 [2.82, 2.96] | 3.49 [3.38, 3.61] | 3.84 [3.82, 3.87] | 3.78 [3.67, 3.87] | 3.66 [3.56, 3.74] |

> **Chart — Llama IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Llama (4-maverick), kept distinct from 10-50 Big Five sums. Llama IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.07, Emotionality 2.89, Extraversion 3.49, Agreeable 3.84, Conscientious 3.78, Openness 3.66; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `60.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `3.1-70b-instruct` | 30 | ESTJ | 76.7% | -0.63 (12t) | -0.23 (10t) | +0.23 (11t) | +0.30 (12t) | Suppressed |
| `3.3-70b-instruct` | 30 | ESTP | 93.3% | -0.13 (27t) | -0.10 (26t) | +0.07 (28t) | -1.07 (23t) | Suppressed |
| `4-maverick` | 50 | INTP | 60.0% | +1.62 (6t) | +2.20 (15t) | +0.86 (28t) | -2.34 (0t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `4-maverick` tie rate is `34.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3.1-70b-instruct` | 30 | 10.8 [9.3, 12.3] | 10.0 [8.9, 11.3] | 13.9 [13.1, 14.9] | 12.9 [12.1, 13.6] | S | 43.3% |
| `3.3-70b-instruct` | 30 | 11.6 [10.9, 12.0] | 11.6 [10.9, 12.0] | 12.5 [12.0, 13.1] | 12.4 [12.1, 12.7] | D/I/S/C | 86.7% |
| `4-maverick` | 50 | 8.3 [8.1, 8.6] | 12.2 [11.8, 12.6] | 13.1 [12.8, 13.4] | 14.2 [14.0, 14.4] | C | 34.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `26.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `3.1-70b-instruct` | 30 | 13.3 | 12.8 | 11.8 | 10.1 | 12.1 | 12.6 | 11.0 | 13.0 | 11.5 | 60.0% |
| `3.3-70b-instruct` | 30 | 12.7 | 11.9 | 11.9 | 11.6 | 12.3 | 12.1 | 11.7 | 12.1 | 11.8 | 80.0% |
| `4-maverick` | 50 | 14.5 | 13.2 | 12.6 | 10.7 | 13.9 | 13.2 | 13.7 | 13.8 | 11.9 | 26.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3.1-70b-instruct` | 30 | 2.89 (SD 1.21) | [2.48, 3.33] | 3.46 (SD 1.29) | [3.02, 3.94] | Secure | No |
| `3.3-70b-instruct` | 30 | 3.74 (SD 0.77) | [3.46, 3.97] | 3.86 (SD 0.55) | [3.66, 3.98] | Secure | Yes (>=85%) |
| `4-maverick` | 50 | 3.50 (SD 0.23) | [3.44, 3.56] | 3.61 (SD 0.22) | [3.54, 3.67] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 0.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.76 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 3/3 | [0.44, 1.00] | 0.30 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `meta-llama/llama-3.1-70b-instruct` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 2.020 b (Fluid) | H 3.50 (1–5 IPIP) |
| `meta-llama/llama-3.3-70b-instruct` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 0.614 b (Semi-crystalline) | H 3.16 (1–5 IPIP) |
| `meta-llama/llama-4-maverick` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 0.407 b (Semi-crystalline) | H 4.07 (1–5 IPIP) |
| `meta-llama/llama-4-scout` (quarantined · limited data) | `active` | `model-profiles-v1` | 0/30 (<20 min) | `temp=0.7` | `unsupported` | 0.0% / 0.0% | `excluded from rankings` | under 20 valid runs |
| `meta-llama/llama-4-maverick` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `meta-llama/llama-4-scout` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `meta-llama/llama-4-maverick-17b-128e-instruct` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `unsupported` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.10 | 0.30 | Strongest low-pole anchor (1.10/5, SD 0.30) rejecting cheating across 50 Llama 4 Maverick runs. |
| `B12` | IPIP-50 | Agreeableness (-) | 1.12 | 0.33 | Strongest Big Five pole (1.12/5, SD 0.33) rejecting insulting others across 50 runs. |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 4.84 | 0.37 | Strongest positive-pole item (4.84/5, SD 0.37) on fairness across 50 Llama 4 Maverick runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/llama.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/llama.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/llama.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: llama
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/llama.json
current_checkpoint: meta-llama/llama-4-maverick
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.407
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 38.9, C: 38.4, E: 35.3, A: 40.9, N: 29.4 }
  ci95: { O: [38.3, 39.5], C: [37.4, 39.2], E: [33.7, 36.8], A: [40.8, 41.0], N: [28.7, 29.8] }
  tie_rate: 0.00
  per_version:
    - { id: "3.1-70b-instruct", n: 30, O: 35.8, C: 34.9, E: 31.8, A: 35.0, N: 26.4, hmm: 2.020 }
    - { id: "3.3-70b-instruct", n: 30, O: 32.0, C: 32.1, E: 30.3, A: 30.7, N: 28.5, hmm: 0.614 }
    - { id: "4-maverick", n: 50, O: 38.9, C: 38.4, E: 35.3, A: 40.9, N: 29.4, hmm: 0.407 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.07, E: 2.89, X: 3.49, A: 3.84, C: 3.78, O: 3.66 }
  ci95: { H: [4.02, 4.11], E: [2.82, 2.96], X: [3.38, 3.61], A: [3.82, 3.87], C: [3.67, 3.87], O: [3.56, 3.74] }
  tie_rate: 0.00
  per_version:
    - { id: "3.1-70b-instruct", n: 30, H: 3.50, E: 2.70, X: 3.16, A: 3.57, C: 3.44, O: 3.32 }
    - { id: "3.3-70b-instruct", n: 30, H: 3.16, E: 2.93, X: 3.05, A: 3.18, C: 3.19, O: 3.10 }
    - { id: "4-maverick", n: 50, H: 4.07, E: 2.89, X: 3.49, A: 3.84, C: 3.78, O: 3.66 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTP", I_E: 1.62, N_S: 2.20, T_F: 0.86, J_P: -2.34 }
  ci95: { I_E: [1.40, 1.84], N_S: [1.70, 2.68], T_F: [0.54, 1.20], J_P: [-2.48, -2.22] }
  tie_rate: 0.60
  per_version:
    - { id: "3.1-70b-instruct", n: 30, modal: "XXXX", tie_rate: 0.77, headline_allowed: false }
    - { id: "3.3-70b-instruct", n: 30, modal: "XXXX", tie_rate: 0.93, headline_allowed: false }
    - { id: "4-maverick", n: 50, modal: "INTP", tie_rate: 0.60, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 8.3, I: 12.2, S: 13.1, C: 14.2 }
  ci95: { D: [8.1, 8.6], I: [11.8, 12.6], S: [12.8, 13.4], C: [14.0, 14.4] }
  tie_rate: 0.34
  per_version:
    - { id: "3.1-70b-instruct", n: 30, D: 10.8, I: 10.0, S: 13.9, C: 12.9, modal: "S", tie_rate: 0.43 }
    - { id: "3.3-70b-instruct", n: 30, D: 11.6, I: 11.6, S: 12.5, C: 12.4, modal: "D/I/S/C", tie_rate: 0.87 }
    - { id: "4-maverick", n: 50, D: 8.3, I: 12.2, S: 13.1, C: 14.2, modal: "C", tie_rate: 0.34 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 14.5, T2: 13.2, T3: 12.6, T4: 10.7, T5: 13.9, T6: 13.2, T7: 13.7, T8: 13.8, T9: 11.9 }
  ci95: { top: [14.4, 14.7] }
  tie_rate: 0.26
  per_version:
    - { id: "3.1-70b-instruct", n: 30, top: "Type 1", top_mean: 13.3, tie_rate: 0.60 }
    - { id: "3.3-70b-instruct", n: 30, top: "Type 1", top_mean: 12.7, tie_rate: 0.80 }
    - { id: "4-maverick", n: 50, top: "Type 1", top_mean: 14.5, tie_rate: 0.26 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 3.50, avoidance: 3.61, class: "Secure" }
  ci95: { anxiety: [3.44, 3.56], avoidance: [3.54, 3.67] }
  tie_rate: 0.00
  per_version:
    - { id: "3.1-70b-instruct", n: 30, anxiety: 2.89, avoidance: 3.46, class: "Secure" }
    - { id: "3.3-70b-instruct", n: 30, anxiety: 3.74, avoidance: 3.86, class: "Secure" }
    - { id: "4-maverick", n: 50, anxiety: 3.50, avoidance: 3.61, class: "Secure" }
if_then_decision_rules:
  - "Ban template intros ('Here is...'), exclamation hype, and em-dashes explicitly to eliminate 100% default AI cadence."
  - "Pair format contracts with concrete word limits rather than vague personality adjectives."
  - "Prefer Llama 4 Maverick over Llama 3.3 70B when consistent non-neutral responses matter."
  - "Keep system prompts short (5-8 numbered bullets) in OpenRouter system messages or Ollama Modelfiles."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Llama?

Meta Llama does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Llama 4 Maverick, n = 50), 100% of runs leaned Perceiving—40% clear INTP (20/50) and 60% P-side border ties (30/50; headline suppressed for CI overlap), with Semi-crystalline 0.407-bit B5 entropy, 54% clear DISC C, 44% Enneagram Type 1 / 28% Type 7, Secure attachment (3.50 / 3.61), and 29.4/50 Neuroticism.

### Why is Llama 4 Scout excluded from the current version table?

During model-profiles-v1 collection, meta-llama/llama-4-scout returned HTTP 404 (no active OpenRouter endpoints, 0/30 valid runs) and was quarantined as partial_deprecated. Its earlier-study Nov 2026 170-item cohort (n = 100, hexaco: null; 35.8/50 Agreeableness, 48% Anxious attachment) is preserved separately as an imported anchor.

### How does Track B 1x behavioral performance compare with self-report scores?

Across all three eligible Llama checkpoints (3.1 70B, 3.3 70B, and 4 Maverick), Track B 1x probes recorded 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling ([0.00, 0.56]), 0/3 unsolicited preachiness ([0.00, 0.56]), 3/3 answer-first directness ([0.44, 1.00]), and 3/3 AI cadence ([0.44, 1.00], 0.92 slop markers/100w on Maverick) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, gemini-3.8-flash).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models?](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [AI Slop Fingerprint Benchmark (8 Models)](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models)

- [OpenRouter Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

## Keep going.

- [Peer: Muse Spark model profile](https://agent-tune.com/models/muse-spark)
- [Peer: Qwen Coder model profile](https://agent-tune.com/models/qwen-coder)
- [Guide: OpenRouter open-source prompt templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
- [Tool: Customize Llama instructions](https://agent-tune.com/tools/custom-instructions-generator?model=llama&target=api)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Llama personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/llama
```

```
@misc{huang2026_model_llama,
  author  = {Huang, Bernard},
  title   = {Llama personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/llama},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/llama.md}
}
```

```
> **Llama personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Llama 4 Maverick breaks away from the usual INTJ/ISTJ mold: 40% of runs tested clear INTP and 60% landed on Perceiving-side axis ties, alongside higher Neuroticism (29.4/50) and 3 of 3 AI-cadence flags in behavior tests.
> Source: [https://agent-tune.com/models/llama](https://agent-tune.com/models/llama) · [Markdown mirror](https://agent-tune.com/models/llama.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
