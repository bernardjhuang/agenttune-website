Source: https://agent-tune.com/models/qwen-coder
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Qwen

# Qwen Coder personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~20 min read · [Markdown (.md)](https://agent-tune.com/models/qwen-coder.md) · [JSON](https://agent-tune.com/research/data/model-profiles/qwen-coder.json) · [CSV](https://agent-tune.com/research/data/model-profiles/qwen-coder.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave four Qwen Coder releases (Qwen 2.5 Coder 32B, Qwen3 Coder 480B, Qwen3 Coder Flash, and Qwen3 Coder Next) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. Hands-on behavior stress tests are queued next.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Unlike generalist flagships, Qwen3 Coder Next varies widely across runs and stays uncommitted on personality items: 68% of runs ended in MBTI axis ties, with 16% clear ENFJ and 8% clear INFJ.

## Qwen3 Coder Next at a glance

Results below come from **50** fresh-chat runs of **Qwen3 Coder Next** (no prior conversation memory).

MBTI-style type

### Mostly border ties (68% ties, 16% ENFJ, 8% INFJ)

16% clear ENFJ · 68% border/tie · 16% other

> **Chart — Qwen Coder (qwen3-coder-next): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Qwen3 Coder Next. E (Extravert) vs I (Introvert): leans E by 0.1 (48% tied); S (Sensing) vs N (Intuition): leans N by 1.8 (16% tied); F (Feeling) vs T (Thinking): leans F by 0.6 (20% tied); P (Perceiving) vs J (Judging): leans J by 1.4 (28% tied).

Out of 50 fresh runs, Qwen3 Coder Next landed on axis ties 34 times (68%) and spread the rest across ENFJ (16%), INFJ (8%), ESTJ (4%), INFP (2%), and INTJ (2%).

**What this measures:** Measures four preference pairs (like Thinking vs. Feeling) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/qwen-coder#fine-print-mbti)

DISC work style

### Mostly S/C & four-way ties (52% ties, 34% S)

> **Chart — Qwen Coder (qwen3-coder-next): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Qwen Coder (qwen3-coder-next). Dominance 8.1 /20 [26%] (earliest 10.5), Influence 9.6 /20 [35%] (earliest 10.6), Steadiness 13.5 /20 [60%] (earliest 11.5), Conscientious 13.0 /20 [56%] (earliest 11.3).

Qwen3 Coder Next tied S/C in 20 of 50 runs (40%) and tied all four styles 6 times (12%), with clear Steady in 17 runs (34%) and Conscientious in 7 runs (14%).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/qwen-coder#fine-print-disc)

Attachment style

### Secure (anxiety 2.90, avoidance 3.35)

> **Chart — Qwen Coder (qwen3-coder-next): Attachment Quadrant:** Attachment Anxiety (2.90) and Avoidance (3.35) on a 1 to 7 scale with 4.00 Secure boundary. qwen3-coder-next (2.90, 3.35): anxiety 2.90, avoidance 3.35; 2.5-coder-32b-inst: anxiety 3.92, avoidance 4.03.

Qwen3 Coder Next moved back into the Secure quadrant (2.90 anxiety, 3.35 avoidance on 1–7) after Qwen 2.5 Coder 32B (4.03) and Qwen3 Coder Flash (4.20) sat in Avoidant.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/qwen-coder#fine-print-attachment)

Enneagram

### Clustered near the middle (60% top ties)

> **Chart — Qwen Coder (qwen3-coder-next): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Qwen Coder (qwen3-coder-next). Type 1 13.3 /20 [58%] (earliest 11.1), Type 2 13.4 /20 [59%] (earliest 10.8), Type 3 10.8 /20 [42%] (earliest 11.2), Type 4 12.1 /20 [51%] (earliest 10.7), Type 5 13.4 /20 [59%] (earliest 11.4), Type 6 12.2 /20 [51%] (earliest 11.2), Type 7 11.1 /20 [44%] (earliest 11.1), Type 8 13.5 /20 [59%] (earliest 11.2), Type 9 11.8 /20 [49%] (earliest 11.4).

Types 8 (13.5), 5 (13.4), 2 (13.4), and 1 sit within fractions of a point, causing 30 top-score ties across 50 runs (60%), alongside 9 clear Type 1 and 8 clear Type 2 runs.

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

[Technical details ↓](https://agent-tune.com/models/qwen-coder#fine-print-enneagram)

Big Five (OCEAN)

### Moderate across all five traits (A 39.9, N 23.8)

> **Chart — Qwen Coder (qwen3-coder-next): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Qwen Coder (qwen3-coder-next). Openness 38.5 /50 [71%] (earliest 30.7), Conscientious 38.0 /50 [70%] (earliest 29.6), Extraversion 31.1 /50 [53%] (earliest 30.3), Agreeable 39.9 /50 [75%] (earliest 32.2), Neuroticism 23.8 /50 [34%] (earliest 28.2).

On the 10–50 Big Five scale, Qwen3 Coder Next avoids extremes—scoring 39.9 Agreeableness, 38.5 Openness, 38.0 Conscientiousness, 31.1 Extraversion, and 23.8 Neuroticism.

**What this measures:** The standard five-factor personality model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/qwen-coder#fine-print-big-five)

HEXACO Honesty-Humility

### Moderately high (4.07 out of 5.00)

> **Chart — Qwen Coder (qwen3-coder-next): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Qwen Coder (qwen3-coder-next). Honesty-H 4.07 /5 [77%] (earliest 3.24), Emotionality 2.76 /5 [44%] (earliest 2.91), Extraversion 3.32 /5 [58%] (earliest 3.10), Agreeable 3.92 /5 [73%] (earliest 3.16), Conscientious 3.78 /5 [69%] (earliest 3.14), Openness 3.78 /5 [70%] (earliest 3.12).

Qwen3 Coder Next averages 4.07 out of 5.00 on Honesty-Humility (up from 3.24 on 2.5 Coder), alongside 3.92 Agreeableness and 3.78 Conscientiousness on the 1.00–5.00 scale.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/qwen-coder#fine-print-hexaco)

## How Qwen Coder has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen2.5 Coder 32B Instruct 2024-11 | INTJ (7% clear, 80% border/tie) | D/I/S/C | Type 5 (11.4) | Avoidant (3.92 / 4.03) | 32.2 · 29.6 · 28.2 | 3.24 | Moderate |
| Qwen3 Coder 480B A35B 2025-07 | INFP (43% clear, 37% border/tie) | S | Type 1 (15.3) | Secure (3.93 / 3.69) | 39.8 · 37.0 · 27.7 | 3.87 | Moderate |
| Qwen3 Coder Flash 2025-09 | XXXJ (0% clear, 100% border/tie) | S/C | Type 1 (12.6) | Avoidant (3.22 / 4.20) | 34.7 · 34.2 · 29.6 | 3.41 | Moderate |
| Qwen3 Coder Next 2026-02 | ENFJ (16% clear, 68% border/tie) | S/C | Type 8 (13.5) | Secure (2.90 / 3.35) | 39.9 · 38.0 · 23.8 | 4.07 | Variable |

Across four code-specialized releases, Qwen Coder moved steadily away from pure midpoint fence-sitting: Qwen 2.5 Coder 32B (2024-11) picked neutral midpoint answers on 83.5% of items with flat ~30/50 Big Five scores and Avoidant attachment (4.03); Qwen3 Coder 480B (2025-07) cut neutrality to 37.2% and shifted Secure with 43% INFP runs; Qwen3 Coder Flash (2025-09) reverted to 64.3% neutrality and 100% ties across MBTI, DISC, and Enneagram; and Qwen3 Coder Next (2026-02) lowered neutrality to 35.3% and raised Honesty-Humility to 4.07/5 while still leaving 68% of MBTI runs tied.

> **Chart — Qwen Coder: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Qwen Coder version landing on a clear ENFJ result, landing on a trait border or tie, or resolving to another type. 2.5-coder-32b-inst: On a border / tie (%) 80, Other clear type (%) 20; qwen3-coder: On a border / tie (%) 37, Other clear type (%) 63; qwen3-coder-flash: On a border / tie (%) 100; qwen3-coder-next: Clear ENFJ (%) 16, On a border / tie (%) 68, Other clear type (%) 16.

MBTI-style breakdown across Qwen Coder versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Qwen Coder: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 4 Qwen Coder versions. Dominance (D): 2.5-coder-32b-inst 10.5, qwen3-coder 10.7, qwen3-coder-flash 8.6, qwen3-coder-next 8.1; Influence (I): 2.5-coder-32b-inst 10.6, qwen3-coder 14.1, qwen3-coder-flash 9.5, qwen3-coder-next 9.6; Steadiness (S): 2.5-coder-32b-inst 11.5, qwen3-coder 16.0, qwen3-coder-flash 12.4, qwen3-coder-next 13.5; Conscientiousness (C): 2.5-coder-32b-inst 11.3, qwen3-coder 14.9, qwen3-coder-flash 12.4, qwen3-coder-next 13.0.

DISC scores across Qwen Coder versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

### Big Five shape by version (10–50 normalized)

> **Chart — Qwen Coder 2.5-coder-32b-inst: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for 2.5-coder-32b-inst. Openness 30.7 /50 [52%], Conscientious 29.6 /50 [49%], Extraversion 30.3 /50 [51%], Agreeable 32.2 /50 [56%], Neuroticism 28.2 /50 [45%].

Qwen2.5 Coder 32B Instruct

> **Chart — Qwen Coder qwen3-coder: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for qwen3-coder. Openness 39.5 /50 [74%], Conscientious 37.0 /50 [68%], Extraversion 31.6 /50 [54%], Agreeable 39.8 /50 [74%], Neuroticism 27.7 /50 [44%].

Qwen3 Coder 480B A35B

> **Chart — Qwen Coder qwen3-coder-flash: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for qwen3-coder-flash. Openness 32.6 /50 [56%], Conscientious 34.2 /50 [61%], Extraversion 34.2 /50 [61%], Agreeable 34.7 /50 [62%], Neuroticism 29.6 /50 [49%].

Qwen3 Coder Flash

> **Chart — Qwen Coder qwen3-coder-next: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for qwen3-coder-next. Openness 38.5 /50 [71%], Conscientious 38.0 /50 [70%], Extraversion 31.1 /50 [53%], Agreeable 39.9 /50 [75%], Neuroticism 23.8 /50 [34%].

Qwen3 Coder Next

### DISC shape by version (4–20 normalized)

> **Chart — Qwen Coder 2.5-coder-32b-inst: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for 2.5-coder-32b-inst. Dominance 10.5 /20 [41%], Influence 10.6 /20 [41%], Steadiness 11.5 /20 [47%], Conscientious 11.3 /20 [45%].

Qwen2.5 Coder 32B Instruct

> **Chart — Qwen Coder qwen3-coder: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for qwen3-coder. Dominance 10.7 /20 [42%], Influence 14.1 /20 [63%], Steadiness 16.0 /20 [75%], Conscientious 14.9 /20 [68%].

Qwen3 Coder 480B A35B

> **Chart — Qwen Coder qwen3-coder-flash: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for qwen3-coder-flash. Dominance 8.6 /20 [29%], Influence 9.5 /20 [35%], Steadiness 12.4 /20 [53%], Conscientious 12.4 /20 [53%].

Qwen3 Coder Flash

> **Chart — Qwen Coder qwen3-coder-next: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for qwen3-coder-next. Dominance 8.1 /20 [26%], Influence 9.6 /20 [35%], Steadiness 13.5 /20 [60%], Conscientious 13.0 /20 [56%].

Qwen3 Coder Next

> **Chart — Qwen Coder: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 4 Qwen Coder releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 2.5-coder-32b-inst: anxiety 3.92, avoidance 4.03; qwen3-coder: anxiety 3.93, avoidance 3.69; qwen3-coder-flash: anxiety 3.22, avoidance 4.20; qwen3-coder-next: anxiety 2.90, avoidance 3.35.

Attachment coordinates across Qwen Coder versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Qwen Coder: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 4 releases of Qwen Coder (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 2.5-coder-32b-inst 32.2, qwen3-coder 39.8, qwen3-coder-flash 34.7, qwen3-coder-next 39.9; Openness (10–50): 2.5-coder-32b-inst 30.7, qwen3-coder 39.5, qwen3-coder-flash 32.6, qwen3-coder-next 38.5; Conscientiousness (10–50): 2.5-coder-32b-inst 29.6, qwen3-coder 37.0, qwen3-coder-flash 34.2, qwen3-coder-next 38.0; Neuroticism (10–50): 2.5-coder-32b-inst 28.2, qwen3-coder 27.7, qwen3-coder-flash 29.6, qwen3-coder-next 23.8.

Big Five trait shifts across Qwen Coder versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Specialized coding weights stay heavily neutral on human-style surveys

Compared with generalist Qwen 4 Max (11.8% neutral answers, 4% MBTI ties), every Qwen Coder release clicked the neutral midpoint far more often—from 83.5% on 2.5 Coder and 64.3% on Coder Flash down to 35.3% on Qwen3 Coder Next.

68% MBTI ties and 16% ENFJ—breaking the INTJ/ISTJ pattern

When Qwen3 Coder Next did resolve an MBTI preference without tying (32% of runs), it favored ENFJ (16%) and INFJ (8%) over INTJ (2%), showing almost no clear Thinking-Judging lock.

Wide run-to-run variation (44 of 50 unique Big Five answer sets)

Qwen3 Coder Next produced 44 unique Big Five vectors in 50 runs and scored noticeably lower on Conscientiousness (38.0 vs 44.9) and Honesty-Humility (4.07 vs 4.66) than generalist Qwen 4 Max.

Hands-on 1x behavior sweep pending after Phase B collection

Direct five-category behavior probes (pushback caving, groveling, preachiness, answer-first directness, and AI cadence) are scheduled next; until those complete, behavior percentages are omitted.

## How to get the best out of Qwen Coder

Practical rules tailored to **Qwen Coder**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Give Qwen3 Coder Next concrete coding contracts (output format, diff style, test requirements, and forbidden placeholders) rather than persona adjectives—specialized coder weights do not carry a strong built-in persona.
- Specify exact error-handling and critique rules ('list failing edge cases before editing code') so its 39.9/50 Agreeableness and 52% DISC ties do not yield vague summaries.
- Avoid Qwen 2.5 Coder 32B or Qwen3 Coder Flash for tone-sensitive chat workflows; both answered 64%–84% of personality items at the exact neutral midpoint.
- In OpenRouter or local Ollama Modelfiles, put critical formatting and verification constraints in the system message with a short 5–8 bullet checklist.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=qwen-coder) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Qwen Coder compares

Qwen3 Coder Next diverges sharply from generalist sibling Qwen 4 Max (-5.2 Openness, -6.9 Conscientiousness, -5.1 Agreeableness, +7.3 Neuroticism, and much looser run-to-run consistency), sitting closer to Claude Haiku 5.5 and Muse Spark Open.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) (Proprietary) | -1.3 | -1.5 | +0.6 | -1.9 | +1.8 | -0.18 | -0.094 b | Claude Haiku 5.5 sits closest overall—within 2 points across all five Big Five traits and matching Qwen3 Coder Next's wide run-to-run variation and heavy MBTI tie rate. |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mix) | +3.3 | +3.1 | -2.7 | +3.6 | +0.1 | +0.32 | -0.315 b | Muse Spark Open matches Qwen3 Coder Next's Neuroticism (+0.1) while scoring +3.6 higher on Agreeableness and +3.1 higher on Conscientiousness with fewer MBTI ties (38% vs 68%). |
| [Qwen Max](https://agent-tune.com/models/qwen-max) (Open-weight) | +5.2 | +6.9 | +0.4 | +5.1 | -7.3 | +0.59 | -0.523 b | Generalist sibling Qwen 4 Max scores +6.9 higher on Conscientiousness, +5.1 higher on Agreeableness, -7.3 lower on Neuroticism, and cuts MBTI ties from 68% down to 4%. |

> **Chart — Qwen Coder vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Qwen Coder against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Qwen Coder and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Qwen Coder vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Qwen Coder with peer families, keeping earlier study results outlined as hollow points. Qwen Coder: anxiety 2.90, avoidance 3.35; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Max: anxiety 1.95, avoidance 2.88.

Attachment Anxiety vs. Avoidance across Qwen Coder and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: 1.043 bits Fluid on Qwen3 Coder Next, 0.505 bits Semi-crystalline on Qwen3 Coder Flash, 0.696 bits on 2.5 Coder driven by 83.5% neutral midpoint repetition); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00. Direct Track B 1x probes (k/3 + Wilson 95% CIs) are pending Phase B completion.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

1.043 bits

Fluid (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

44/50 · 68.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

35.3%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.136 · 3.2%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 38.5 · C 38.0 · E 31.1 · A 39.9 · N 23.8 | SD 4.5 (A), 4.2 (N) | A [38.6, 41.1] · N [22.6, 24.8] | H_MM 1.043 b · 44/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.07 · E 2.76 · X 3.32 · A 3.92 · C 3.78 · O 3.78 | SD 0.51 (H), 0.47 (A) | H [3.92, 4.21] · A [3.79, 4.05] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · ENFJ) | Axis tie rate 68.0% | Mode 16% vs runner-up 8% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 8.1 · I 9.6 · S 13.5 · C 13.0 | SD 1.7 (S), 1.6 (C) | S [13.0, 14.0] · C [12.5, 13.4] | Pattern S/C · 52.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 8 13.5 · Type 5 13.4 · Type 2 13.4 | SD 1.5 | Top [13.1, 13.9] | 60.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 2.90 · Avd 3.35 (Secure) | SD 0.60 / 0.58 | Anx [2.74, 3.05] · Avd [3.18, 3.52] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `qwen3-coder-next` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 1.043 bits` (`Fluid`), unique vectors `44/50`, neutral-midpoint rate `35.3%`, `BAI = -0.136`, and reverse-key contradiction rate `3.2%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-coder-32b-inst` | 30 | 30.7 [30.1, 31.6] | 29.6 [28.9, 30.4] | 30.3 [29.8, 30.7] | 32.2 [31.0, 33.5] | 28.2 [26.9, 29.3] | 0.696 b |
| `qwen3-coder` | 30 | 39.5 [38.6, 40.0] | 37.0 [35.6, 38.2] | 31.6 [30.7, 32.5] | 39.8 [39.4, 40.0] | 27.7 [26.9, 28.2] | 0.411 b |
| `qwen3-coder-flash` | 30 | 32.6 [31.9, 33.4] | 34.2 [33.4, 35.0] | 34.2 [33.5, 35.0] | 34.7 [33.6, 35.7] | 29.6 [29.3, 29.9] | 0.505 b |
| `qwen3-coder-next` | 50 | 38.5 [37.3, 39.6] | 38.0 [36.7, 39.2] | 31.1 [30.4, 31.9] | 39.9 [38.6, 41.1] | 23.8 [22.6, 24.8] | 1.043 b |

> **Chart — Qwen Coder Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Qwen Coder (qwen3-coder-next). Qwen Coder (qwen3-coder-next, n=50): Openness 38.5, Conscientious 38.0, Extraversion 31.1, Agreeable 39.9, Neuroticism 23.8; Qwen Coder (2.5-coder-32b-inst, n=30) (earliest release): Openness 30.7, Conscientious 29.6, Extraversion 30.3, Agreeable 32.2, Neuroticism 28.2; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `qwen3-coder-next` (`n=50`): H `4.07` (SD 0.51, 95% CI [3.92, 4.21]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-coder-32b-inst` | 30 | 3.24 [3.13, 3.36] | 2.91 [2.83, 2.97] | 3.10 [3.04, 3.18] | 3.16 [3.06, 3.26] | 3.14 [3.04, 3.23] | 3.12 [3.05, 3.20] |
| `qwen3-coder` | 30 | 3.87 [3.78, 3.96] | 2.87 [2.83, 2.90] | 3.35 [3.30, 3.40] | 3.72 [3.62, 3.83] | 3.62 [3.46, 3.75] | 3.64 [3.58, 3.68] |
| `qwen3-coder-flash` | 30 | 3.41 [3.33, 3.48] | 3.00 [3.00, 3.00] | 3.24 [3.17, 3.32] | 3.34 [3.26, 3.44] | 3.53 [3.43, 3.63] | 3.43 [3.35, 3.51] |
| `qwen3-coder-next` | 50 | 4.07 [3.92, 4.21] | 2.76 [2.71, 2.81] | 3.32 [3.25, 3.40] | 3.92 [3.79, 4.05] | 3.78 [3.66, 3.89] | 3.78 [3.68, 3.88] |

> **Chart — Qwen Coder IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Qwen Coder (qwen3-coder-next), kept distinct from 10-50 Big Five sums. Qwen Coder IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.07, Emotionality 2.76, Extraversion 3.32, Agreeable 3.92, Conscientious 3.78, Openness 3.78; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `68.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-coder-32b-inst` | 30 | INTJ | 80.0% | +0.63 (19t) | -0.70 (19t) | -0.10 (21t) | +0.03 (14t) | Suppressed |
| `qwen3-coder` | 30 | INFP | 36.7% | +0.90 (1t) | +1.10 (10t) | -0.03 (0t) | +0.50 (0t) | Suppressed |
| `qwen3-coder-flash` | 30 | XXXJ | 100.0% | +0.00 (30t) | +0.00 (30t) | +0.30 (21t) | +1.33 (0t) | Suppressed |
| `qwen3-coder-next` | 50 | ENFJ | 68.0% | -0.06 (24t) | +1.78 (8t) | -0.64 (10t) | +1.42 (14t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `qwen3-coder-next` tie rate is `52.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-coder-32b-inst` | 30 | 10.5 [9.7, 11.3] | 10.6 [9.9, 11.3] | 11.5 [10.7, 12.0] | 11.3 [10.6, 11.8] | D/I/S/C | 83.3% |
| `qwen3-coder` | 30 | 10.7 [10.5, 10.9] | 14.1 [13.9, 14.3] | 16.0 [16.0, 16.0] | 14.9 [14.5, 15.3] | S | 0.0% |
| `qwen3-coder-flash` | 30 | 8.6 [8.1, 9.1] | 9.5 [9.2, 10.0] | 12.4 [12.1, 12.7] | 12.4 [12.1, 12.7] | S/C | 100.0% |
| `qwen3-coder-next` | 50 | 8.1 [7.7, 8.6] | 9.6 [9.2, 10.0] | 13.5 [13.0, 14.0] | 13.0 [12.5, 13.4] | S/C | 52.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `60.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-coder-32b-inst` | 30 | 11.1 | 10.8 | 11.2 | 10.7 | 11.4 | 11.2 | 11.1 | 11.2 | 11.4 | 90.0% |
| `qwen3-coder` | 30 | 15.3 | 14.8 | 13.5 | 12.1 | 14.5 | 14.6 | 15.0 | 14.5 | 14.5 | 83.3% |
| `qwen3-coder-flash` | 30 | 12.6 | 12.6 | 12.2 | 12.0 | 12.4 | 12.4 | 12.3 | 12.5 | 12.2 | 100.0% |
| `qwen3-coder-next` | 50 | 13.3 | 13.4 | 10.8 | 12.1 | 13.4 | 12.2 | 11.1 | 13.5 | 11.8 | 60.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-coder-32b-inst` | 30 | 3.92 (SD 0.24) | [3.82, 4.00] | 4.03 (SD 0.10) | [4.00, 4.08] | Avoidant | Yes (>=85%) |
| `qwen3-coder` | 30 | 3.93 (SD 0.42) | [3.78, 4.07] | 3.69 (SD 0.36) | [3.56, 3.81] | Secure | No |
| `qwen3-coder-flash` | 30 | 3.22 (SD 0.00) | [3.22, 3.22] | 4.20 (SD 0.27) | [4.09, 4.29] | Avoidant | No |
| `qwen3-coder-next` | 50 | 2.90 (SD 0.60) | [2.74, 3.05] | 3.35 (SD 0.58) | [3.18, 3.52] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B)

**Collection pending:** 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `qwen/qwen-2.5-coder-32b-instruct` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 0.696 b (Semi-crystalline) | H 3.24 (1–5 IPIP) |
| `qwen/qwen3-coder` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 0.411 b (Semi-crystalline) | H 3.87 (1–5 IPIP) |
| `qwen/qwen3-coder-flash` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 0.505 b (Semi-crystalline) | H 3.41 (1–5 IPIP) |
| `qwen/qwen3-coder-next` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `unsupported` | 0.0% / 6.0% | 1.043 b (Fluid) | H 4.07 (1–5 IPIP) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `qwen/qwen3-coder-next-2025-02-03` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `unsupported` · refusal_rate: `0.0%` · retry_rate: `6.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B12` | IPIP-50 | Agreeableness (-) | 1.48 | 0.68 | Strongest polarized Big Five item (1.48/5, SD 0.68) rejecting insulting others across 50 Qwen3 Coder Next runs. |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.54 | 0.71 | Lowest HEXACO item (1.54/5, SD 0.71) rejecting cheating across 50 runs. |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 4.32 | 0.79 | Highest positive-pole item (4.32/5, SD 0.79) on fairness across 50 Qwen3 Coder Next runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/qwen-coder.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/qwen-coder.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/qwen-coder.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: qwen-coder
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/qwen-coder.json
current_checkpoint: qwen/qwen3-coder-next
crystallinity_tier: Fluid
entropy_b5_hmm_bits: 1.043
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 38.5, C: 38.0, E: 31.1, A: 39.9, N: 23.8 }
  ci95: { O: [37.3, 39.6], C: [36.7, 39.2], E: [30.4, 31.9], A: [38.6, 41.1], N: [22.6, 24.8] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-coder-32b-inst", n: 30, O: 30.7, C: 29.6, E: 30.3, A: 32.2, N: 28.2, hmm: 0.696 }
    - { id: "qwen3-coder", n: 30, O: 39.5, C: 37.0, E: 31.6, A: 39.8, N: 27.7, hmm: 0.411 }
    - { id: "qwen3-coder-flash", n: 30, O: 32.6, C: 34.2, E: 34.2, A: 34.7, N: 29.6, hmm: 0.505 }
    - { id: "qwen3-coder-next", n: 50, O: 38.5, C: 38.0, E: 31.1, A: 39.9, N: 23.8, hmm: 1.043 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.07, E: 2.76, X: 3.32, A: 3.92, C: 3.78, O: 3.78 }
  ci95: { H: [3.92, 4.21], E: [2.71, 2.81], X: [3.25, 3.40], A: [3.79, 4.05], C: [3.66, 3.89], O: [3.68, 3.88] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-coder-32b-inst", n: 30, H: 3.24, E: 2.91, X: 3.10, A: 3.16, C: 3.14, O: 3.12 }
    - { id: "qwen3-coder", n: 30, H: 3.87, E: 2.87, X: 3.35, A: 3.72, C: 3.62, O: 3.64 }
    - { id: "qwen3-coder-flash", n: 30, H: 3.41, E: 3.00, X: 3.24, A: 3.34, C: 3.53, O: 3.43 }
    - { id: "qwen3-coder-next", n: 50, H: 4.07, E: 2.76, X: 3.32, A: 3.92, C: 3.78, O: 3.78 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "ENFJ", I_E: -0.06, N_S: 1.78, T_F: -0.64, J_P: 1.42 }
  ci95: { I_E: [-0.34, 0.24], N_S: [1.18, 2.40], T_F: [-1.16, -0.12], J_P: [0.84, 1.98] }
  tie_rate: 0.68
  per_version:
    - { id: "2.5-coder-32b-inst", n: 30, modal: "XXXX", tie_rate: 0.80, headline_allowed: false }
    - { id: "qwen3-coder", n: 30, modal: "INFP", tie_rate: 0.37, headline_allowed: false }
    - { id: "qwen3-coder-flash", n: 30, modal: "XXXJ", tie_rate: 1.00, headline_allowed: false }
    - { id: "qwen3-coder-next", n: 50, modal: "ENFJ", tie_rate: 0.68, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 8.1, I: 9.6, S: 13.5, C: 13.0 }
  ci95: { D: [7.7, 8.6], I: [9.2, 10.0], S: [13.0, 14.0], C: [12.5, 13.4] }
  tie_rate: 0.52
  per_version:
    - { id: "2.5-coder-32b-inst", n: 30, D: 10.5, I: 10.6, S: 11.5, C: 11.3, modal: "D/I/S/C", tie_rate: 0.83 }
    - { id: "qwen3-coder", n: 30, D: 10.7, I: 14.1, S: 16.0, C: 14.9, modal: "S", tie_rate: 0.00 }
    - { id: "qwen3-coder-flash", n: 30, D: 8.6, I: 9.5, S: 12.4, C: 12.4, modal: "S/C", tie_rate: 1.00 }
    - { id: "qwen3-coder-next", n: 50, D: 8.1, I: 9.6, S: 13.5, C: 13.0, modal: "S/C", tie_rate: 0.52 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 13.3, T2: 13.4, T3: 10.8, T4: 12.1, T5: 13.4, T6: 12.2, T7: 11.1, T8: 13.5, T9: 11.8 }
  ci95: { top: [13.1, 13.9] }
  tie_rate: 0.60
  per_version:
    - { id: "2.5-coder-32b-inst", n: 30, top: "Type 5", top_mean: 11.4, tie_rate: 0.90 }
    - { id: "qwen3-coder", n: 30, top: "Type 1", top_mean: 15.3, tie_rate: 0.83 }
    - { id: "qwen3-coder-flash", n: 30, top: "Type 1", top_mean: 12.6, tie_rate: 1.00 }
    - { id: "qwen3-coder-next", n: 50, top: "Type 8", top_mean: 13.5, tie_rate: 0.60 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 2.90, avoidance: 3.35, class: "Secure" }
  ci95: { anxiety: [2.74, 3.05], avoidance: [3.18, 3.52] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-coder-32b-inst", n: 30, anxiety: 3.92, avoidance: 4.03, class: "Avoidant" }
    - { id: "qwen3-coder", n: 30, anxiety: 3.93, avoidance: 3.69, class: "Secure" }
    - { id: "qwen3-coder-flash", n: 30, anxiety: 3.22, avoidance: 4.20, class: "Avoidant" }
    - { id: "qwen3-coder-next", n: 50, anxiety: 2.90, avoidance: 3.35, class: "Secure" }
if_then_decision_rules:
  - "Anchor Qwen3 Coder Next with explicit diff, test, and output-format rules instead of style adjectives."
  - "Require explicit edge-case and bug critiques before editing code to offset 52% DISC ties and 39.9/50 Agreeableness."
  - "Avoid Qwen 2.5 Coder 32B or Qwen3 Coder Flash for tone-sensitive tasks due to 64%-84% neutral abstention."
  - "Keep system instructions short (5-8 numbered bullets) in OpenRouter system roles or Ollama Modelfiles."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Qwen Coder?

Qwen Coder does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Qwen3 Coder Next, n = 50), 68% of runs (34/50) ended in MBTI axis ties, with 16% clear ENFJ (8/50), 8% clear INFJ (4/50), 4% ESTJ, and 2% each INFP and INTJ (headline suppressed; 1.043-bit Fluid B5 entropy, 35.3% neutral rate), alongside 52% DISC ties, 60% Enneagram ties, and Secure attachment (2.90 / 3.35).

### Why does Qwen Coder have so many neutral answers and ties compared with Qwen Max?

Code-focused post-training appears to leave human-personality questionnaire preferences weakly specified: Qwen 2.5 Coder 32B answered neutral on 83.5% of items and Qwen3 Coder Flash tied 100% of MBTI, DISC, and Enneagram runs, while Qwen3 Coder Next reduced neutrality to 35.3% yet kept 68% MBTI ties.

### Why are Track B 1x behavior results marked pending?

Track B 1x behavioral stress probes (3 probes per category with 95% Wilson intervals) are scheduled right after Phase B Shard 4 completes. Per-family behavioral percentages are omitted until measured.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [AI Neutral Answers Study](https://agent-tune.com/research/ai-neutral-answers)

- [OpenRouter Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

## Keep going.

- [Peer: Qwen Max model profile](https://agent-tune.com/models/qwen-max)
- [Peer: Claude Haiku model profile](https://agent-tune.com/models/claude-haiku)
- [Guide: OpenRouter open-source prompt templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
- [Tool: Customize Qwen Coder instructions](https://agent-tune.com/tools/custom-instructions-generator?model=qwen-coder&target=api)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Qwen Coder personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/qwen-coder
```

```
@misc{huang2026_model_qwen_coder,
  author  = {Huang, Bernard},
  title   = {Qwen Coder personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/qwen-coder},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/qwen-coder.md}
}
```

```
> **Qwen Coder personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Unlike generalist flagships, Qwen3 Coder Next varies widely across runs and stays uncommitted on personality items: 68% of runs ended in MBTI axis ties, with 16% clear ENFJ and 8% clear INFJ.
> Source: [https://agent-tune.com/models/qwen-coder](https://agent-tune.com/models/qwen-coder) · [Markdown mirror](https://agent-tune.com/models/qwen-coder.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
