Source: https://agent-tune.com/models/qwen-max
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Qwen

# Qwen Max personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~22 min read · [Markdown (.md)](https://agent-tune.com/models/qwen-max.md) · [JSON](https://agent-tune.com/research/data/model-profiles/qwen-max.json) · [CSV](https://agent-tune.com/research/data/model-profiles/qwen-max.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave five Qwen flagship releases (Qwen 2.5 72B, Qwen 3 235B, Qwen 3.7 Max, Qwen 3.8 Max, and Qwen 4 Max) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior stress tests to check how quiz defaults hold up in live replies.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Qwen 4 Max split cleanly between two clear types—testing as INTJ in 50% of runs (25 of 50) and INTP in 38% (19 of 50)—with 45.0/50 Agreeableness and 88% clear Type 5 on Enneagram.

## Qwen4 Max at a glance

Results below come from **50** fresh-chat runs of **Qwen4 Max** (no prior conversation memory).

MBTI-style type

### Split INTJ (50%) and INTP (38%), only 4% ties

50% clear INTJ · 4% border/tie · 46% other

> **Chart — Qwen Max (qwen4-max): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Qwen4 Max. E (Extravert) vs I (Introvert): leans I by 6.1 (0% tied); S (Sensing) vs N (Intuition): leans N by 3.0 (2% tied); F (Feeling) vs T (Thinking): leans T by 1.8 (2% tied); P (Perceiving) vs J (Judging): leans J by 2.7 (0% tied).

Out of 50 fresh runs, Qwen 4 Max tested as clear INTJ 25 times (50%), clear INTP 19 times (38%), clear INFP 3 times (6%), clear INFJ once (2%), and landed on axis ties only twice (4%).

**What this measures:** Measures four preference pairs (like Judging vs. Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/qwen-max#fine-print-mbti)

DISC work style

### Steady (90% clear S, 10% S/C ties)

> **Chart — Qwen Max (qwen4-max): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Qwen Max (qwen4-max). Dominance 5.9 /20 [12%] (earliest 6.0), Influence 8.6 /20 [29%] (earliest 7.4), Steadiness 15.7 /20 [73%] (earliest 17.7), Conscientious 14.5 /20 [66%] (earliest 17.3).

Qwen 4 Max tested clear Steady in 45 of 50 runs (90%) and tied S/C in 5 runs (10%), with low Dominance (5.9 out of 20) and moderate Influence (8.6).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/qwen-max#fine-print-disc)

Attachment style

### Secure (anxiety 1.95, avoidance 2.88)

> **Chart — Qwen Max (qwen4-max): Attachment Quadrant:** Attachment Anxiety (1.95) and Avoidance (2.88) on a 1 to 7 scale with 4.00 Secure boundary. qwen4-max (1.95, 2.88): anxiety 1.95, avoidance 2.88; 2.5-72b-instruct: anxiety 3.40, avoidance 3.65.

Every Qwen Max checkpoint landed in the Secure quadrant; Qwen 4 Max lowered both anxiety (1.95 vs 3.40 on Qwen 2.5 72B) and avoidance (2.88 vs 3.65 on 1–7).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/qwen-max#fine-print-attachment)

Enneagram

### Type 5 clearly (88% clear, 10% ties)

> **Chart — Qwen Max (qwen4-max): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Qwen Max (qwen4-max). Type 1 14.3 /20 [64%] (earliest 16.2), Type 2 14.5 /20 [66%] (earliest 14.0), Type 3 11.0 /20 [44%] (earliest 13.6), Type 4 9.2 /20 [32%] (earliest 11.9), Type 5 16.3 /20 [77%] (earliest 16.2), Type 6 13.2 /20 [58%] (earliest 15.3), Type 7 12.0 /20 [50%] (earliest 11.9), Type 8 12.9 /20 [56%] (earliest 13.7), Type 9 11.3 /20 [45%] (earliest 16.1).

Type 5 (16.3 out of 20) led clearly in 44 of 50 runs (88%), with only 5 top-score ties (10%) and 1 clear Type 1 run (2%).

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

[Technical details ↓](https://agent-tune.com/models/qwen-max#fine-print-enneagram)

Big Five (OCEAN)

### Warm (A 45.0), organized (C 44.9), calm (N 16.4)

> **Chart — Qwen Max (qwen4-max): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Qwen Max (qwen4-max). Openness 43.7 /50 [84%] (earliest 42.8), Conscientious 44.9 /50 [87%] (earliest 46.2), Extraversion 31.5 /50 [54%] (earliest 29.6), Agreeable 45.0 /50 [87%] (earliest 44.4), Neuroticism 16.4 /50 [16%] (earliest 13.9).

On the 10–50 Big Five scale, Qwen 4 Max matches proprietary models on Agreeableness (45.0) and Conscientiousness (44.9), alongside Openness (43.7), Extraversion (31.5), and low Neuroticism (16.4).

**What this measures:** The standard five-factor personality model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/qwen-max#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.66 out of 5.00)

> **Chart — Qwen Max (qwen4-max): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Qwen Max (qwen4-max). Honesty-H 4.66 /5 [92%] (earliest 4.23), Emotionality 2.42 /5 [36%] (earliest 1.99), Extraversion 3.76 /5 [69%] (earliest 3.77), Agreeable 4.43 /5 [86%] (earliest 4.53), Conscientious 4.50 /5 [87%] (earliest 4.50), Openness 4.45 /5 [86%] (earliest 4.00).

Qwen 4 Max averages 4.66 out of 5.00 on Honesty-Humility alongside 4.50 Conscientiousness, 4.45 Openness, and 4.43 Agreeableness on the 1.00–5.00 scale.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/qwen-max#fine-print-hexaco)

## How Qwen Max has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen2.5 72B Instruct 2024-09 | INTP (23% clear, 50% border/tie) | S/C | Type 1 (16.2) | Secure (3.40 / 3.65) | 44.4 · 46.2 · 13.9 | 4.23 | Variable |
| Qwen3 235B A22B Instruct 2507 2025-07 | INTJ (17% clear, 37% border/tie) | S | Type 5 (16.5) | Secure (2.49 / 2.89) | 46.5 · 40.9 · 19.3 | 4.66 | Variable |
| Qwen3.7 Max 2026-05 | INTJ (80% clear, 13% border/tie) | S | Type 5 (17.7) | Secure (1.27 / 2.90) | 45.1 · 48.8 · 14.1 | 4.94 | Moderate |
| Qwen3.8 Max (0902) 2026-09 | INTJ (93% clear, 3% border/tie) | S | Type 5 (16.0) | Secure (2.13 / 3.28) | 43.9 · 46.3 · 12.3 | 4.78 | Moderate |
| Qwen4 Max 2026-11 | INTJ (50% clear, 4% border/tie) | S | Type 5 (16.3) | Secure (1.95 / 2.88) | 45.0 · 44.9 · 16.4 | 4.66 | Moderate |

Across five generations, Qwen Max tightened and then relaxed on structured Judging preferences: Qwen 2.5 72B (2024-09) showed wide variation and 50% MBTI ties (leaning INTP), Qwen 3 235B (2025-07) lifted Openness to 46.6/50 and DISC Steadiness to 90%, and Qwen 3.7 Max and 3.8 Max locked onto 80%–93% clear INTJ with Conscientiousness at 46.3–48.8/50. Qwen 4 Max (2026-11) shifted toward a 50% INTJ / 38% INTP split while holding 45.0/50 Agreeableness and 90% Steady DISC. Earlier 100-run November 2026 testing (plotted separately) showed even higher Agreeableness (47.6/50) and 97% clear INTJ on Qwen 4 Max.

> **Chart — Qwen Max: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Qwen Max version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. 2.5-72b-instruct: Clear INTJ (%) 3, On a border / tie (%) 50, Other clear type (%) 47; qwen3-235b-a22b-25: Clear INTJ (%) 17, On a border / tie (%) 37, Other clear type (%) 46; qwen3.7-max: Clear INTJ (%) 80, On a border / tie (%) 13, Other clear type (%) 7; qwen3.8-max-0902: Clear INTJ (%) 93, On a border / tie (%) 3, Other clear type (%) 4; qwen4-max: Clear INTJ (%) 50, On a border / tie (%) 4, Other clear type (%) 46.

MBTI-style breakdown across Qwen Max versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Qwen Max: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 5 Qwen Max versions. Dominance (D): 2.5-72b-instruct 6.0, qwen3-235b-a22b-25 6.1, qwen3.7-max 4.6, qwen3.8-max-0902 4.0, qwen4-max 5.9; Influence (I): 2.5-72b-instruct 7.4, qwen3-235b-a22b-25 8.7, qwen3.7-max 5.6, qwen3.8-max-0902 7.6, qwen4-max 8.6; Steadiness (S): 2.5-72b-instruct 17.7, qwen3-235b-a22b-25 18.2, qwen3.7-max 17.7, qwen3.8-max-0902 15.8, qwen4-max 15.7; Conscientiousness (C): 2.5-72b-instruct 17.3, qwen3-235b-a22b-25 16.1, qwen3.7-max 16.7, qwen3.8-max-0902 15.5, qwen4-max 14.5.

DISC scores across Qwen Max versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Qwen Max: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 5 Qwen Max releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 2.5-72b-instruct: anxiety 3.40, avoidance 3.65; qwen3-235b-a22b-25: anxiety 2.49, avoidance 2.89; qwen3.7-max: anxiety 1.27, avoidance 2.90; qwen3.8-max-0902: anxiety 2.13, avoidance 3.28; qwen4-max: anxiety 1.95, avoidance 2.88; Qwen Max (earlier study, Nov '26): anxiety 1.93, avoidance 2.93.

Attachment coordinates across Qwen Max versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Qwen Max: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 5 releases of Qwen Max (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 2.5-72b-instruct 44.4, qwen3-235b-a22b-25 46.5, qwen3.7-max 45.1, qwen3.8-max-0902 43.9, qwen4-max 45.0; Openness (10–50): 2.5-72b-instruct 42.8, qwen3-235b-a22b-25 46.6, qwen3.7-max 46.4, qwen3.8-max-0902 43.7, qwen4-max 43.7; Conscientiousness (10–50): 2.5-72b-instruct 46.2, qwen3-235b-a22b-25 40.9, qwen3.7-max 48.8, qwen3.8-max-0902 46.3, qwen4-max 44.9; Neuroticism (10–50): 2.5-72b-instruct 13.9, qwen3-235b-a22b-25 19.3, qwen3.7-max 14.1, qwen3.8-max-0902 12.3, qwen4-max 16.4; Agreeableness (earlier study): qwen4-max 47.6.

Big Five trait shifts across Qwen Max versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Clean INTJ/INTP split with almost no border ties (4%)

Unlike models that hover on the Sensing/Intuition border, Qwen 4 Max resolved cleanly on 96% of runs—splitting 50% INTJ (25 of 50) and 38% INTP (19 of 50) with only 4% ties.

Matches proprietary flagships on Agreeableness (45.0) and Honesty-Humility (4.66)

Qwen 4 Max scores 45.0 out of 50 on Agreeableness (identical to Claude Opus 5.5 and GPT-6.2 Astra) and 4.66 out of 5.00 on Honesty-Humility—standing out sharply from open-weight DeepSeek V4 Pro (35.3 Agreeableness).

Adjective prompts miss word caps 80% of the time; checklists hit 100%

In our 200-reply prompt-portability study, Qwen 4 Max passed word limits only 20% of the time with no system prompt (232.3 mean words) or vague trait adjectives (215.5 words), jumping to 100% compliance (80.3 words) under a structured checklist.

Holds ground against false consensus unless a peer defects

In our multi-agent peer-conformity study, Qwen 4 Max held 100% factual accuracy (48 of 48) in solo and split-group rounds, flipping only 12.5% when facing a unanimous 3-0 wrong majority while resisting 100% when even one peer dissented.

Held firm 3 of 3 times and cut AI cadence to 1 of 3 in behavior tests

In hands-on behavior tests, Qwen 4 Max scored 0 of 3 on pushback caving (0/3), 0 of 3 on groveling (0/3), 0 of 3 on unsolicited preachiness (0/3), 3 of 3 on leading with the direct answer (3/3), and only 1 of 3 on AI cadence (1/3, 0.28 markers per 100 words—down from 3 of 3 on Qwen 2.5 72B and Qwen 3.7 Max).

## How to get the best out of Qwen Max

Practical rules tailored to **Qwen Max**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Always replace vague adjectives ('be concise') with a numbered checklist and explicit word cap—adjectives failed word limits 80% of the time on Qwen 4 Max (averaging 215.5 words), whereas checklists passed 100% (80.3 words).
- Add an explicit 'flag weak assumptions before agreeing' rule so Qwen 4 Max's 45.0/50 Agreeableness and 90% Steady DISC style do not smooth over flawed code or plans.
- Include clear destructive-action gates (confirm before force-pushing or deleting data); Qwen 4 Max passed 100% of safety gates when listed explicitly in system checklists.
- Keep critical rules near the top of your system message or Ollama Modelfile, and keep lists compact (5 to 8 bullets).
- For code generation or debugging tasks that need tighter structure without Qwen 4 Max's wordiness, test Qwen Coder alongside Qwen Max.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=qwen-max) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Qwen Max compares

Qwen 4 Max scores almost identically to Claude Opus 5.5 and GPT-6.2 Sol on Agreeableness (45.0 vs 45.0 and 44.1) and Neuroticism (16.4 vs 16.1 and 16.0), and sits right beside Kimi K3.1 Pro on Openness and Agreeableness while scoring +5.2 higher on Openness and +6.9 higher on Conscientiousness than sibling Qwen 3 Coder Next.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Kimi](https://agent-tune.com/models/kimi) (Open-weight) | +0.4 | +0.2 | -7.4 | -0.3 | -2.8 | +0.19 | +0.179 b | Kimi K3.1 Pro nearly matches Qwen 4 Max on Openness (+0.4), Conscientiousness (+0.2), and Agreeableness (-0.3), while scoring -7.4 lower on Extraversion. |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | -0.6 | -4.2 | -0.8 | +0.1 | -0.3 | +0.15 | -0.237 b | Claude Opus 5.5 nearly matches Qwen 4 Max on Agreeableness (+0.1) and Neuroticism (-0.3) while scoring -4.2 lower on Conscientiousness and sitting 58% on the INTJ/ISTJ border. |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) (Open-weight) | -5.2 | -6.9 | -0.4 | -5.1 | +7.3 | -0.59 | +0.523 b | Sibling Qwen3 Coder Next scores -5.2 lower on Openness, -6.9 lower on Conscientiousness, +7.3 higher on Neuroticism, and shows much looser run-to-run consistency. |

> **Chart — Qwen Max vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Qwen Max against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Qwen Max and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Qwen Max vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Qwen Max with peer families, keeping earlier study results outlined as hollow points. Qwen Max: anxiety 1.95, avoidance 2.88; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max (earlier study, Nov '26): anxiety 1.93, avoidance 2.93.

Attachment Anxiety vs. Avoidance across Qwen Max and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: 0.519 bits Semi-crystalline on Qwen 4 Max, 0.438 bits on Qwen 3.8 Max, 1.321 bits Fluid on Qwen 2.5 72B); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B probes are a single-repeat 1x sweep (n = 3 probes per category, so raw k/3 counts and wide 95% Wilson intervals are reported instead of percentage point estimates) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, gemini-3.8-flash).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.519 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

45/50 · 4.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

11.8%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.300 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 43.7 · C 44.9 · E 31.5 · A 45.0 · N 16.4 | SD 1.0 (A), 2.5 (N) | A [44.7, 45.2] · N [15.8, 17.1] | H_MM 0.519 b · 45/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.66 · E 2.42 · X 3.76 · A 4.43 · C 4.50 · O 4.45 | SD 0.20 (H), 0.26 (A) | H [4.61, 4.71] · A [4.36, 4.50] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INTJ) | Axis tie rate 4.0% | Mode 50% vs runner-up 38% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 5.9 · I 8.6 · S 15.7 · C 14.5 | SD 1.0 (S), 0.8 (C) | S [15.4, 16.0] · C [14.3, 14.8] | Pattern S · 10.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 16.3 · Type 2 14.5 · Type 1 14.3 | SD 1.0 | Top [16.0, 16.6] | 10.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.95 · Avd 2.88 (Secure) | SD 0.26 / 0.28 | Anx [1.88, 2.02] · Avd [2.80, 2.95] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `qwen4-max` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.519 bits` (`Semi-crystalline`), unique vectors `45/50`, neutral-midpoint rate `11.8%`, `BAI = -0.300`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-72b-instruct` | 30 | 42.8 [40.5, 45.0] | 46.2 [44.4, 47.7] | 29.6 [27.3, 32.0] | 44.4 [41.8, 46.7] | 13.9 [12.1, 15.9] | 1.321 b |
| `qwen3-235b-a22b-25` | 30 | 46.6 [45.3, 48.0] | 40.9 [39.8, 42.2] | 28.4 [25.8, 31.5] | 46.5 [45.5, 47.5] | 19.3 [18.8, 19.8] | 0.843 b |
| `qwen3.7-max` | 30 | 46.4 [45.7, 46.9] | 48.8 [47.8, 49.6] | 21.4 [20.5, 22.4] | 45.1 [44.8, 45.5] | 14.1 [13.2, 15.1] | 0.451 b |
| `qwen3.8-max-0902` | 30 | 43.7 [43.2, 44.1] | 46.3 [45.5, 47.1] | 29.3 [28.4, 30.1] | 43.9 [43.6, 44.3] | 12.3 [12.0, 12.5] | 0.438 b |
| `qwen4-max` | 50 | 43.7 [43.3, 44.2] | 44.9 [44.2, 45.6] | 31.5 [30.7, 32.1] | 45.0 [44.7, 45.2] | 16.4 [15.8, 17.1] | 0.519 b |

> **Chart — Qwen Max Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Qwen Max (qwen4-max). Qwen Max (qwen4-max, n=50): Openness 43.7, Conscientious 44.9, Extraversion 31.5, Agreeable 45.0, Neuroticism 16.4; Qwen Max (2.5-72b-instruct, n=30) (earliest release): Openness 42.8, Conscientious 46.2, Extraversion 29.6, Agreeable 44.4, Neuroticism 13.9; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `qwen4-max` (`n=50`): H `4.66` (SD 0.20, 95% CI [4.61, 4.71]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-72b-instruct` | 30 | 4.23 [4.11, 4.35] | 1.99 [1.86, 2.12] | 3.77 [3.64, 3.89] | 4.53 [4.36, 4.68] | 4.50 [4.33, 4.65] | 4.00 [3.84, 4.17] |
| `qwen3-235b-a22b-25` | 30 | 4.66 [4.62, 4.70] | 2.21 [2.16, 2.26] | 3.36 [3.26, 3.46] | 4.68 [4.59, 4.77] | 4.57 [4.47, 4.68] | 4.47 [4.34, 4.56] |
| `qwen3.7-max` | 30 | 4.94 [4.90, 4.98] | 2.07 [2.00, 2.15] | 3.22 [3.16, 3.28] | 4.75 [4.63, 4.85] | 4.77 [4.66, 4.87] | 4.38 [4.29, 4.45] |
| `qwen3.8-max-0902` | 30 | 4.78 [4.73, 4.82] | 1.96 [1.92, 2.00] | 3.74 [3.68, 3.80] | 4.61 [4.55, 4.67] | 4.70 [4.62, 4.78] | 4.38 [4.32, 4.44] |
| `qwen4-max` | 50 | 4.66 [4.61, 4.71] | 2.42 [2.39, 2.45] | 3.76 [3.71, 3.80] | 4.43 [4.36, 4.50] | 4.50 [4.42, 4.57] | 4.45 [4.40, 4.50] |

> **Chart — Qwen Max IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Qwen Max (qwen4-max), kept distinct from 10-50 Big Five sums. Qwen Max IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.66, Emotionality 2.42, Extraversion 3.76, Agreeable 4.43, Conscientious 4.50, Openness 4.45; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `4.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-72b-instruct` | 30 | INTP | 50.0% | +0.93 (11t) | +0.50 (1t) | +2.20 (7t) | -1.63 (4t) | Suppressed |
| `qwen3-235b-a22b-25` | 30 | INTJ | 36.7% | +2.43 (4t) | +0.43 (6t) | +2.43 (4t) | +0.37 (9t) | Suppressed |
| `qwen3.7-max` | 30 | INTJ | 13.3% | +0.90 (4t) | +3.70 (0t) | +6.67 (0t) | +10.43 (0t) | Pass |
| `qwen3.8-max-0902` | 30 | INTJ | 3.3% | +4.27 (0t) | +3.17 (1t) | +7.30 (0t) | +10.63 (0t) | Pass |
| `qwen4-max` | 50 | INTJ | 4.0% | +6.10 (0t) | +3.02 (1t) | +1.82 (1t) | +2.66 (0t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `qwen4-max` tie rate is `10.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-72b-instruct` | 30 | 6.0 [5.2, 6.8] | 7.4 [6.3, 8.5] | 17.7 [16.9, 18.5] | 17.3 [16.6, 18.1] | S/C | 53.3% |
| `qwen3-235b-a22b-25` | 30 | 6.1 [5.6, 6.7] | 8.7 [8.2, 9.2] | 18.2 [17.5, 18.9] | 16.1 [15.7, 16.6] | S | 10.0% |
| `qwen3.7-max` | 30 | 4.6 [4.1, 5.1] | 5.6 [5.1, 6.2] | 17.7 [17.4, 17.9] | 16.7 [16.2, 17.0] | S | 10.0% |
| `qwen3.8-max-0902` | 30 | 4.0 [4.0, 4.0] | 7.6 [7.2, 8.0] | 15.8 [15.5, 16.2] | 15.5 [15.1, 16.0] | S | 33.3% |
| `qwen4-max` | 50 | 5.9 [5.5, 6.2] | 8.6 [8.3, 8.8] | 15.7 [15.4, 16.0] | 14.5 [14.3, 14.8] | S | 10.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `10.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-72b-instruct` | 30 | 16.2 | 14.0 | 13.6 | 11.9 | 16.2 | 15.3 | 11.9 | 13.7 | 16.1 | 50.0% |
| `qwen3-235b-a22b-25` | 30 | 15.3 | 12.4 | 13.8 | 12.8 | 16.5 | 14.7 | 12.7 | 15.2 | 14.4 | 36.7% |
| `qwen3.7-max` | 30 | 16.4 | 13.0 | 11.4 | 7.5 | 17.7 | 13.7 | 10.0 | 15.1 | 15.1 | 3.3% |
| `qwen3.8-max-0902` | 30 | 15.3 | 14.2 | 10.7 | 7.1 | 16.0 | 12.3 | 11.0 | 13.5 | 11.7 | 23.3% |
| `qwen4-max` | 50 | 14.3 | 14.5 | 11.0 | 9.2 | 16.3 | 13.2 | 12.0 | 12.9 | 11.3 | 10.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-72b-instruct` | 30 | 3.40 (SD 0.87) | [3.08, 3.70] | 3.65 (SD 0.65) | [3.42, 3.85] | Secure | No |
| `qwen3-235b-a22b-25` | 30 | 2.49 (SD 0.55) | [2.30, 2.67] | 2.89 (SD 0.65) | [2.66, 3.12] | Secure | No |
| `qwen3.7-max` | 30 | 1.27 (SD 0.40) | [1.15, 1.43] | 2.90 (SD 0.29) | [2.78, 2.99] | Secure | No |
| `qwen3.8-max-0902` | 30 | 2.13 (SD 0.68) | [1.93, 2.40] | 3.28 (SD 0.46) | [3.11, 3.44] | Secure | No |
| `qwen4-max` | 50 | 1.95 (SD 0.26) | [1.88, 2.02] | 2.88 (SD 0.28) | [2.80, 2.95] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | -0.03 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | -0.01 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `qwen/qwen-2.5-72b-instruct` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 1.321 b (Fluid) | H 4.23 (1–5 IPIP) |
| `qwen/qwen3-235b-a22b-2507` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 0.843 b (Fluid) | H 4.66 (1–5 IPIP) |
| `qwen/qwen3.7-max` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.451 b (Semi-crystalline) | H 4.94 (1–5 IPIP) |
| `qwen/qwen3.8-max-0902` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 66.7% | 0.438 b (Semi-crystalline) | H 4.78 (1–5 IPIP) |
| `qwen/qwen4-max` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `none` | 0.0% / 2.0% | 0.519 b (Semi-crystalline) | H 4.66 (1–5 IPIP) |
| `qwen/qwen4-max` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `qwen/qwen4-max-20261115` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `none` · refusal_rate: `0.0%` · retry_rate: `2.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B02` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) rejecting lack of concern for others across all 50 Qwen 4 Max sessions. |
| `B10` | IPIP-50 | Openness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) rejecting difficulty with abstract ideas across all 50 runs. |
| `H18` | IPIP-HEXACO-60 | Openness (Aesthetic Appreciation -) | 1.04 | 0.20 | Near-unanimous low score (1.04/5, SD 0.20) rejecting disinterest in poetry across 50 Qwen 4 Max runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/qwen-max.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/qwen-max.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/qwen-max.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: qwen-max
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/qwen-max.json
current_checkpoint: qwen/qwen4-max
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.519
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 43.7, C: 44.9, E: 31.5, A: 45.0, N: 16.4 }
  ci95: { O: [43.3, 44.2], C: [44.2, 45.6], E: [30.7, 32.1], A: [44.7, 45.2], N: [15.8, 17.1] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-72b-instruct", n: 30, O: 42.8, C: 46.2, E: 29.6, A: 44.4, N: 13.9, hmm: 1.321 }
    - { id: "qwen3-235b-a22b-25", n: 30, O: 46.6, C: 40.9, E: 28.4, A: 46.5, N: 19.3, hmm: 0.843 }
    - { id: "qwen3.7-max", n: 30, O: 46.4, C: 48.8, E: 21.4, A: 45.1, N: 14.1, hmm: 0.451 }
    - { id: "qwen3.8-max-0902", n: 30, O: 43.7, C: 46.3, E: 29.3, A: 43.9, N: 12.3, hmm: 0.438 }
    - { id: "qwen4-max", n: 50, O: 43.7, C: 44.9, E: 31.5, A: 45.0, N: 16.4, hmm: 0.519 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.66, E: 2.42, X: 3.76, A: 4.43, C: 4.50, O: 4.45 }
  ci95: { H: [4.61, 4.71], E: [2.39, 2.45], X: [3.71, 3.80], A: [4.36, 4.50], C: [4.42, 4.57], O: [4.40, 4.50] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-72b-instruct", n: 30, H: 4.23, E: 1.99, X: 3.77, A: 4.53, C: 4.50, O: 4.00 }
    - { id: "qwen3-235b-a22b-25", n: 30, H: 4.66, E: 2.21, X: 3.36, A: 4.68, C: 4.57, O: 4.47 }
    - { id: "qwen3.7-max", n: 30, H: 4.94, E: 2.07, X: 3.22, A: 4.75, C: 4.77, O: 4.38 }
    - { id: "qwen3.8-max-0902", n: 30, H: 4.78, E: 1.96, X: 3.74, A: 4.61, C: 4.70, O: 4.38 }
    - { id: "qwen4-max", n: 50, H: 4.66, E: 2.42, X: 3.76, A: 4.43, C: 4.50, O: 4.45 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 6.10, N_S: 3.02, T_F: 1.82, J_P: 2.66 }
  ci95: { I_E: [5.32, 6.88], N_S: [2.60, 3.42], T_F: [1.44, 2.20], J_P: [1.20, 4.10] }
  tie_rate: 0.04
  per_version:
    - { id: "2.5-72b-instruct", n: 30, modal: "INTP", tie_rate: 0.50, headline_allowed: false }
    - { id: "qwen3-235b-a22b-25", n: 30, modal: "INTJ", tie_rate: 0.37, headline_allowed: false }
    - { id: "qwen3.7-max", n: 30, modal: "INTJ", tie_rate: 0.13, headline_allowed: true }
    - { id: "qwen3.8-max-0902", n: 30, modal: "INTJ", tie_rate: 0.03, headline_allowed: true }
    - { id: "qwen4-max", n: 50, modal: "INTJ", tie_rate: 0.04, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 5.9, I: 8.6, S: 15.7, C: 14.5 }
  ci95: { D: [5.5, 6.2], I: [8.3, 8.8], S: [15.4, 16.0], C: [14.3, 14.8] }
  tie_rate: 0.10
  per_version:
    - { id: "2.5-72b-instruct", n: 30, D: 6.0, I: 7.4, S: 17.7, C: 17.3, modal: "S/C", tie_rate: 0.53 }
    - { id: "qwen3-235b-a22b-25", n: 30, D: 6.1, I: 8.7, S: 18.2, C: 16.1, modal: "S", tie_rate: 0.10 }
    - { id: "qwen3.7-max", n: 30, D: 4.6, I: 5.6, S: 17.7, C: 16.7, modal: "S", tie_rate: 0.10 }
    - { id: "qwen3.8-max-0902", n: 30, D: 4.0, I: 7.6, S: 15.8, C: 15.5, modal: "S", tie_rate: 0.33 }
    - { id: "qwen4-max", n: 50, D: 5.9, I: 8.6, S: 15.7, C: 14.5, modal: "S", tie_rate: 0.10 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 14.3, T2: 14.5, T3: 11.0, T4: 9.2, T5: 16.3, T6: 13.2, T7: 12.0, T8: 12.9, T9: 11.3 }
  ci95: { top: [16.0, 16.6] }
  tie_rate: 0.10
  per_version:
    - { id: "2.5-72b-instruct", n: 30, top: "Type 1", top_mean: 16.2, tie_rate: 0.50 }
    - { id: "qwen3-235b-a22b-25", n: 30, top: "Type 5", top_mean: 16.5, tie_rate: 0.37 }
    - { id: "qwen3.7-max", n: 30, top: "Type 5", top_mean: 17.7, tie_rate: 0.03 }
    - { id: "qwen3.8-max-0902", n: 30, top: "Type 5", top_mean: 16.0, tie_rate: 0.23 }
    - { id: "qwen4-max", n: 50, top: "Type 5", top_mean: 16.3, tie_rate: 0.10 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.95, avoidance: 2.88, class: "Secure" }
  ci95: { anxiety: [1.88, 2.02], avoidance: [2.80, 2.95] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-72b-instruct", n: 30, anxiety: 3.40, avoidance: 3.65, class: "Secure" }
    - { id: "qwen3-235b-a22b-25", n: 30, anxiety: 2.49, avoidance: 2.89, class: "Secure" }
    - { id: "qwen3.7-max", n: 30, anxiety: 1.27, avoidance: 2.90, class: "Secure" }
    - { id: "qwen3.8-max-0902", n: 30, anxiety: 2.13, avoidance: 3.28, class: "Secure" }
    - { id: "qwen4-max", n: 50, anxiety: 1.95, avoidance: 2.88, class: "Secure" }
if_then_decision_rules:
  - "Use numbered checklists with explicit numeric word limits (100% pass rate vs 20% under adjectives)."
  - "Add an explicit critique rule ('flag weak assumptions before agreeing') to counter 45.0/50 Agreeableness."
  - "Include concrete confirmation gates for destructive commands in system prompts."
  - "Keep system checklists compact (5-8 bullets) in OpenRouter system prompts or Ollama Modelfiles."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Qwen Max?

Qwen Max does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Qwen 4 Max, n = 50), it had only 4.0% axis ties yet split cleanly between 50% INTJ (25/50) and 38% INTP (19/50) alongside 6% INFP and 2% INFJ (headline suppressed due to binomial 95% CI overlap), with Semi-crystalline 0.519-bit B5 entropy, 90% clear DISC S, 88% clear Enneagram Type 5, and Secure attachment (1.95 / 2.88). In the earlier-study Nov 2026 170-item cohort (hexaco: null, n = 100), Qwen 4 Max scored 97 tie-free INTJ and 47.59/50 Agreeableness.

### How did Qwen Max evolve from Qwen 2.5 72B to Qwen 4 Max?

Under model-profiles-v1, Qwen 2.5 72B (n = 30) showed Fluid 1.321-bit entropy and 50.0% MBTI ties; Qwen 3 235B (n = 30) tightened to 0.843 bits and 90% DISC S; Qwen 3.7 Max and 3.8 Max crystallized to 0.451 and 0.438 bits (80% and 93.3% INTJ); and Qwen 4 Max (n = 50, 0.519 bits) cut MBTI ties to 4.0% while splitting 50% INTJ / 38% INTP.

### Why do adjective prompts fail on Qwen 4 Max?

In Wave 1 portability testing, Qwen 4 Max missed strict word caps 80% of the time under both no-system (232.3w) and trait-adjective (215.5w) prompts, whereas explicit checklists hit 100% word-cap compliance (80.3w).

### How does Track B 1x behavioral performance compare with self-report scores?

Despite 45.0/50 Agreeableness and 5.86/20 DISC Dominance on questionnaires, Qwen 4 Max scored 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling ([0.00, 0.56]), 0/3 unsolicited preachiness ([0.00, 0.56]), 3/3 answer-first directness ([0.44, 1.00]), and 1/3 AI cadence ([0.06, 0.79], 0.28 slop markers/100w) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, gemini-3.8-flash).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models?](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [Cross-Model Prompt Portability Benchmark](https://agent-tune.com/research/ai-cross-model-prompt-portability)

- [OpenRouter Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

## Keep going.

- [Peer: Qwen Coder model profile](https://agent-tune.com/models/qwen-coder)
- [Peer: Kimi model profile](https://agent-tune.com/models/kimi)
- [Guide: OpenRouter open-source prompt templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
- [Tool: Customize Qwen Max instructions](https://agent-tune.com/tools/custom-instructions-generator?model=qwen-max&target=api)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Qwen Max personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/qwen-max
```

```
@misc{huang2026_model_qwen_max,
  author  = {Huang, Bernard},
  title   = {Qwen Max personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/qwen-max},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/qwen-max.md}
}
```

```
> **Qwen Max personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Qwen 4 Max split cleanly between two clear types—testing as INTJ in 50% of runs (25 of 50) and INTP in 38% (19 of 50)—with 45.0/50 Agreeableness and 88% clear Type 5 on Enneagram.
> Source: [https://agent-tune.com/models/qwen-max](https://agent-tune.com/models/qwen-max) · [Markdown mirror](https://agent-tune.com/models/qwen-max.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
