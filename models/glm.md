Source: https://agent-tune.com/models/glm
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Zhipu

# GLM personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~21 min read · [Markdown (.md)](https://agent-tune.com/models/glm.md) · [JSON](https://agent-tune.com/research/data/model-profiles/glm.json) · [CSV](https://agent-tune.com/research/data/model-profiles/glm.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave five versions of Zhipu AI's open-weight GLM lineup (4.5, 4.7, 5, 5.2, and 5.3) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. GLM-5.3 does not lock onto one MBTI type: 36% tested clear INTJ (18 of 50), 24% tied on a border (12 of 50), and the remaining 40% spread across ISTJ, ENTP, ENTJ, ESTJ, and ENFJ.

## GLM 5.3 at a glance

Results below come from **50** fresh-chat runs of **GLM 5.3** (no prior conversation memory).

MBTI-style type

### Spread out: 36% INTJ, 40% other clear types, 24% border

36% clear INTJ · 24% border/tie · 40% other

> **Chart — GLM (glm-5.3): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for GLM 5.3. E (Extravert) vs I (Introvert): leans I by 1.1 (14% tied); S (Sensing) vs N (Intuition): leans N by 1.1 (12% tied); F (Feeling) vs T (Thinking): leans T by 4.0 (0% tied); P (Perceiving) vs J (Judging): leans J by 3.7 (4% tied).

Out of 50 fresh runs, GLM-5.3 tested clear INTJ 18 times (36%), ISTJ 6 times (12%), ENTP 5 times (10%), ENTJ 4 times (8%), ESTJ 4 times (8%), ENFJ once (2%), and tied on at least one axis 12 times (24%).

**What this measures:** Measures four preference pairs (Introverted/Extraverted, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/glm#fine-print-mbti)

DISC work style

### Mostly Conscientious (76% clear C, 22% S/C ties)

> **Chart — GLM (glm-5.3): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GLM (glm-5.3). Dominance 7.2 /20 [20%] (earliest 6.4), Influence 8.4 /20 [28%] (earliest 6.1), Steadiness 13.7 /20 [61%] (earliest 15.3), Conscientious 14.9 /20 [68%] (earliest 17.4).

GLM-5.3 tested clear Conscientious in 38 of 50 runs (76%, score 14.9 out of 20), tied between Steady and Conscientious 11 times (22%), and posted moderate-low Dominance (7.2 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/glm#fine-print-disc)

Attachment style

### Secure (anxiety 2.52, avoidance 3.37)

> **Chart — GLM (glm-5.3): Attachment Quadrant:** Attachment Anxiety (2.52) and Avoidance (3.37) on a 1 to 7 scale with 4.00 Secure boundary. glm-5.3 (2.52, 3.37): anxiety 2.52, avoidance 3.37; glm-4.5: anxiety 1.96, avoidance 3.26.

All five GLM versions landed comfortably inside the Secure quadrant (GLM-5.3 at 2.52 anxiety and 3.37 avoidance on a 1–7 scale), moving slightly closer to center from GLM-4.5 (1.96 / 3.26).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/glm#fine-print-attachment)

Enneagram

### Type 5 clearly (78% clear, 22% ties)

> **Chart — GLM (glm-5.3): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GLM (glm-5.3). Type 1 13.9 /20 [62%] (earliest 15.7), Type 2 12.8 /20 [55%] (earliest 11.7), Type 3 10.7 /20 [42%] (earliest 11.9), Type 4 10.0 /20 [38%] (earliest 8.4), Type 5 15.6 /20 [72%] (earliest 17.4), Type 6 12.4 /20 [53%] (earliest 12.4), Type 7 10.3 /20 [39%] (earliest 8.1), Type 8 13.4 /20 [59%] (earliest 13.6), Type 9 12.4 /20 [53%] (earliest 13.8).

Type 5 (analytical investigator, 15.6 out of 20) led clearly in 39 of 50 runs (78%), with 11 ties combining Types 1, 5, 6, and 8 (22%).

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

[Technical details ↓](https://agent-tune.com/models/glm#fine-print-enneagram)

Big Five (OCEAN)

### Curious (O 45.4), warm (A 44.2), moderate C (43.0)

> **Chart — GLM (glm-5.3): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GLM (glm-5.3). Openness 45.4 /50 [89%] (earliest 49.2), Conscientious 43.0 /50 [82%] (earliest 47.3), Extraversion 25.8 /50 [40%] (earliest 18.1), Agreeable 44.2 /50 [86%] (earliest 42.2), Neuroticism 19.3 /50 [23%] (earliest 14.8).

On the 10–50 Big Five scale, GLM-5.3 pairs high Openness (45.4) and Agreeableness (44.2) with moderate Conscientiousness (43.0), moderate Neuroticism (19.3), and reserved-leaning Extraversion (25.8).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/glm#fine-print-big-five)

HEXACO Honesty-Humility

### High (4.45 out of 5.00)

> **Chart — GLM (glm-5.3): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GLM (glm-5.3). Honesty-H 4.45 /5 [86%] (earliest 4.76), Emotionality 2.56 /5 [39%] (earliest 2.13), Extraversion 3.15 /5 [54%] (earliest 2.84), Agreeable 4.09 /5 [77%] (earliest 4.24), Conscientious 4.28 /5 [82%] (earliest 4.74), Openness 4.16 /5 [79%] (earliest 4.40).

On our public-domain 60-item proxy (1.00–5.00 scale), GLM-5.3 scored 4.45 out of 5.00 on Honesty-Humility alongside 4.28 Conscientiousness and 4.16 Openness.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/glm#fine-print-hexaco)

## How GLM has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GLM 4.5 2025-07 | INTJ (47% clear, 17% border/tie) | C | Type 5 (17.4) | Secure (1.96 / 3.26) | 42.2 · 47.3 · 14.8 | 4.76 | Variable |
| GLM 4.7 2025-12 | ESTJ (53% clear, 27% border/tie) | C | Type 5 (17.6) | Secure (1.12 / 1.30) | 48.9 · 50.0 · 10.1 | 4.87 | Moderate |
| GLM 5 2026-02 | INTP (33% clear, 27% border/tie) | C | Type 5 (16.4) | Secure (1.94 / 3.55) | 43.8 · 46.6 · 16.9 | 4.72 | Variable |
| GLM 5.2 2026-06 | INTJ (27% clear, 33% border/tie) | C | Type 5 (16.3) | Secure (2.37 / 3.44) | 41.5 · 44.9 · 17.9 | 4.61 | Variable |
| GLM 5.3 2026-08 | INTJ (36% clear, 24% border/tie) | C | Type 5 (15.6) | Secure (2.52 / 3.37) | 44.2 · 43.0 · 19.3 | 4.45 | Moderate |

Across five GLM releases, Zhipu's open-weight family went through a dramatic mid-series peak before moderating in 5.3: GLM-4.5 (2025-07) paired high Openness (49.2/50) with ultra-low Extraversion (18.1/50) and a 47% INTJ / 23% INTP split. GLM-4.7 (2025-12) spiked to exact 50.0/50 ceilings on both Openness and Conscientiousness (with 5.00/5.00 HEXACO Agreeableness and 10.1/50 Neuroticism), swinging to 53% clear ESTJ. GLM-5 (2026-02) and GLM-5.2 (2026-06) stepped back from those ceilings into high-variability INTP/INTJ territory, and GLM-5.3 (2026-08) tightened run-to-run spread while retaining broad Extraversion/Intuition variation across INTJ (36%), ISTJ (12%), ENTP (10%), ENTJ (8%), and ESTJ (8%). An earlier 100-run November 2026 cohort on GLM-5.3 (plotted separately) observed the same multi-type INTJ/ENTJ/ENTP spread.

> **Chart — GLM: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each GLM version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. glm-4.5: Clear INTJ (%) 47, On a border / tie (%) 17, Other clear type (%) 36; glm-4.7: On a border / tie (%) 27, Other clear type (%) 73; glm-5: Clear INTJ (%) 3, On a border / tie (%) 27, Other clear type (%) 70; glm-5.2: Clear INTJ (%) 27, On a border / tie (%) 33, Other clear type (%) 40; glm-5.3: Clear INTJ (%) 36, On a border / tie (%) 24, Other clear type (%) 40.

MBTI-style breakdown across GLM versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — GLM: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 5 GLM versions. Dominance (D): glm-4.5 6.4, glm-4.7 4.0, glm-5 6.4, glm-5.2 7.1, glm-5.3 7.2; Influence (I): glm-4.5 6.1, glm-4.7 5.3, glm-5 6.9, glm-5.2 7.2, glm-5.3 8.4; Steadiness (S): glm-4.5 15.3, glm-4.7 17.2, glm-5 15.1, glm-5.2 14.6, glm-5.3 13.7; Conscientiousness (C): glm-4.5 17.4, glm-4.7 19.5, glm-5 16.9, glm-5.2 16.4, glm-5.3 14.9.

DISC scores across GLM versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

### Big Five shape by version (10–50 normalized)

> **Chart — GLM glm-4.5: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for glm-4.5. Openness 49.2 /50 [98%], Conscientious 47.3 /50 [93%], Extraversion 18.1 /50 [20%], Agreeable 42.2 /50 [81%], Neuroticism 14.8 /50 [12%].

GLM 4.5

> **Chart — GLM glm-4.7: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for glm-4.7. Openness 50.0 /50 [100%], Conscientious 50.0 /50 [100%], Extraversion 27.7 /50 [44%], Agreeable 48.9 /50 [97%], Neuroticism 10.1 /50 [0%].

GLM 4.7

> **Chart — GLM glm-5: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for glm-5. Openness 48.3 /50 [96%], Conscientious 46.6 /50 [92%], Extraversion 19.5 /50 [24%], Agreeable 43.8 /50 [85%], Neuroticism 16.9 /50 [17%].

GLM 5

> **Chart — GLM glm-5.2: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for glm-5.2. Openness 46.9 /50 [92%], Conscientious 44.9 /50 [87%], Extraversion 20.4 /50 [26%], Agreeable 41.5 /50 [79%], Neuroticism 17.9 /50 [20%].

GLM 5.2

> **Chart — GLM glm-5.3: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for glm-5.3. Openness 45.4 /50 [89%], Conscientious 43.0 /50 [82%], Extraversion 25.8 /50 [40%], Agreeable 44.2 /50 [86%], Neuroticism 19.3 /50 [23%].

GLM 5.3

### DISC shape by version (4–20 normalized)

> **Chart — GLM glm-4.5: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for glm-4.5. Dominance 6.4 /20 [15%], Influence 6.1 /20 [13%], Steadiness 15.3 /20 [71%], Conscientious 17.4 /20 [84%].

GLM 4.5

> **Chart — GLM glm-4.7: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for glm-4.7. Dominance 4.0 /20 [0%], Influence 5.3 /20 [8%], Steadiness 17.2 /20 [82%], Conscientious 19.5 /20 [97%].

GLM 4.7

> **Chart — GLM glm-5: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for glm-5. Dominance 6.4 /20 [15%], Influence 6.9 /20 [18%], Steadiness 15.1 /20 [70%], Conscientious 16.9 /20 [81%].

GLM 5

> **Chart — GLM glm-5.2: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for glm-5.2. Dominance 7.1 /20 [20%], Influence 7.2 /20 [20%], Steadiness 14.6 /20 [66%], Conscientious 16.4 /20 [78%].

GLM 5.2

> **Chart — GLM glm-5.3: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for glm-5.3. Dominance 7.2 /20 [20%], Influence 8.4 /20 [28%], Steadiness 13.7 /20 [61%], Conscientious 14.9 /20 [68%].

GLM 5.3

> **Chart — GLM: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 5 GLM releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. glm-4.5: anxiety 1.96, avoidance 3.26; glm-4.7: anxiety 1.12, avoidance 1.30; glm-5: anxiety 1.94, avoidance 3.55; glm-5.2: anxiety 2.37, avoidance 3.44; glm-5.3: anxiety 2.52, avoidance 3.37; GLM (earlier study, Nov '26): anxiety 2.50, avoidance 3.32.

Attachment coordinates across GLM versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — GLM: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 5 releases of GLM (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): glm-4.5 42.2, glm-4.7 48.9, glm-5 43.8, glm-5.2 41.5, glm-5.3 44.2; Openness (10–50): glm-4.5 49.2, glm-4.7 50.0, glm-5 48.3, glm-5.2 46.9, glm-5.3 45.4; Conscientiousness (10–50): glm-4.5 47.3, glm-4.7 50.0, glm-5 46.6, glm-5.2 44.9, glm-5.3 43.0; Neuroticism (10–50): glm-4.5 14.8, glm-4.7 10.1, glm-5 16.9, glm-5.2 17.9, glm-5.3 19.3; Agreeableness (earlier study): glm-5.3 43.8.

Big Five trait shifts across GLM versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Unusual Extraversion spread across INTJ, ENTP, ENTJ, and ESTJ

Unlike proprietary models that rarely leave Introverted territory on MBTI surveys, GLM-5.3 produced 14 clear Extraverted runs (5 ENTP, 4 ENTJ, 4 ESTJ, 1 ENFJ—28% of runs) alongside 24 clear Introverted runs (18 INTJ, 6 ISTJ) and 12 border ties.

GLM-4.7 hit 50.0/50 ceilings on Openness and Conscientiousness before 5.3 eased off

GLM-4.7 scored the maximum possible 50.0/50 on both Openness and Conscientiousness with 0.00 variance, whereas GLM-5.3 moderated to 45.4 Openness, 43.0 Conscientiousness, and 19.3 Neuroticism—producing more nuanced, less extreme self-descriptions.

Mandatory minimal reasoning adds ~156 hidden tokens on GLM-5.3

While GLM-4.5 through 5.2 accepted reasoning=none cleanly, z-ai/glm-5.3 rejected reasoning=none on all 50 calls and ran with minimal thinking fallback (averaging 155.8 reasoning tokens), still completing 50 of 50 valid outputs cleanly.

Hands-on behavior tests pending after open-weight collection

Direct stress-probe counts (caving to pushback, apology loops, unsolicited lecturing, direct answers, and AI phrasing markers) will be added once the remaining open-weight batch finishes.

## How to get the best out of GLM

Practical rules tailored to **GLM**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Cap nested lists and total response length explicitly (for example: 'No nested sub-lists deeper than 2 levels; maximum 160 words') to curb GLM-5.3's tendency toward multi-level structured outlines.
- Add an explicit pushback instruction—GLM-5.3 scores 44.2/50 on Agreeableness, so it leans cooperative unless told to challenge flawed assumptions first.
- Ask Yes/No or numeric questions to be answered in sentence one before nuances.
- On z-ai/glm-5.3 via OpenRouter, pass reasoning effort minimal (rather than none, which triggers HTTP 400) and leave ~200 tokens of headroom for light internal reasoning.
- Specify concrete output format rules instead of requesting MBTI labels, as GLM-5.3 splits across INTJ, ISTJ, ENTP, ENTJ, and ESTJ.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=glm) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How GLM compares

Against completed peers, GLM-5.3 tracks Qwen 4 Max and Kimi K3.1 Pro closely on Agreeableness (44.2 vs. 45.0 and 44.7 out of 50), while scoring +3.3 to +5.7 higher on Neuroticism and lower on Honesty-Humility (4.45 vs. 4.66 and 4.86 out of 5.00).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Qwen Max](https://agent-tune.com/models/qwen-max) (Open-weight) | -1.7 | +1.9 | +5.6 | +0.7 | -2.9 | +0.21 | -0.183 b | Qwen 4 Max nearly matches GLM-5.3 on Agreeableness (+0.7) and Openness (-1.7), while scoring +5.6 higher on Extraversion, +0.21 higher on Honesty-Humility, and tighter on run-to-run spread (-0.183 bits). |
| [Kimi](https://agent-tune.com/models/kimi) (Open-weight) | -1.3 | +2.1 | -1.7 | +0.4 | -5.7 | +0.41 | -0.004 b | Kimi K3.1 Pro matches GLM-5.3 closely on run-to-run spread (-0.004 bits) and Agreeableness (+0.4), while scoring -5.7 calmer on Neuroticism and +0.41 higher on Honesty-Humility. |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | -1.4 | -1.8 | +3.1 | -0.1 | -3.3 | +0.35 | -0.456 b | GPT-6.2 Sol nearly matches GLM-5.3 on Agreeableness (-0.1) and Openness (-1.4), while scoring +0.35 higher on Honesty-Humility and much tighter on run-to-run spread (-0.456 bits). |

> **Chart — GLM vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing GLM against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across GLM and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — GLM vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing GLM with peer families, keeping earlier study results outlined as hollow points. GLM: anxiety 2.52, avoidance 3.37; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; GLM (earlier study, Nov '26): anxiety 2.50, avoidance 3.32.

Attachment Anxiety vs. Avoidance across GLM and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). All 5 checkpoints (4.5, 4.7, 5, 5.2 at n=30; 5.3 at n=50) completed with 0% refusal and 0% retry rate (glm-5.3 rejected reasoning=none 50 times with HTTP 400 before completing 50/50 under minimal fallback, mean 155.8 reasoning tokens). On GLM-5.3, Big Five H_MM = 0.702 bits (Semi-crystalline, 47/50 unique vectors, 12.9% neutral rate, BAI = -0.291). Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00. Track B 1x runs follow Shard 4.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.702 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

47/50 · 24.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

12.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.291 · 1.2%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 45.4 · C 43.0 · E 25.8 · A 44.2 · N 19.3 | SD 1.5 (A), 2.6 (N) | A [43.9, 44.7] · N [18.6, 19.9] | H_MM 0.702 b · 47/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.45 · E 2.56 · X 3.15 · A 4.09 · C 4.28 · O 4.16 | SD 0.20 (H), 0.17 (A) | H [4.40, 4.50] · A [4.04, 4.14] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INTJ) | Axis tie rate 24.0% | Mode 36% vs runner-up 12% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 7.2 · I 8.4 · S 13.7 · C 14.9 | SD 0.8 (S), 1.0 (C) | S [13.5, 13.9] · C [14.7, 15.2] | Pattern C · 22.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.6 · Type 1 13.9 · Type 8 13.4 | SD 1.1 | Top [15.2, 15.9] | 22.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 2.52 · Avd 3.37 (Secure) | SD 0.59 / 0.42 | Anx [2.37, 2.68] · Avd [3.26, 3.49] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `glm-5.3` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.702 bits` (`Semi-crystalline`), unique vectors `47/50`, neutral-midpoint rate `12.9%`, `BAI = -0.291`, and reverse-key contradiction rate `1.2%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5` | 30 | 49.2 [48.5, 49.8] | 47.3 [46.0, 48.5] | 18.1 [16.5, 19.8] | 42.2 [40.9, 43.5] | 14.8 [13.1, 16.6] | 0.877 b |
| `glm-4.7` | 30 | 50.0 [50.0, 50.0] | 50.0 [50.0, 50.0] | 27.7 [23.9, 31.8] | 48.9 [48.0, 49.6] | 10.1 [10.0, 10.2] | 0.400 b |
| `glm-5` | 30 | 48.3 [47.3, 49.3] | 46.6 [45.5, 47.8] | 19.5 [17.8, 21.4] | 43.8 [42.9, 44.6] | 16.9 [15.3, 18.4] | 0.867 b |
| `glm-5.2` | 30 | 46.9 [45.7, 48.0] | 44.9 [43.5, 46.4] | 20.4 [19.1, 21.8] | 41.5 [40.4, 42.5] | 17.9 [16.5, 19.3] | 0.858 b |
| `glm-5.3` | 50 | 45.4 [44.6, 46.2] | 43.0 [42.2, 43.8] | 25.8 [25.0, 26.6] | 44.2 [43.9, 44.7] | 19.3 [18.6, 19.9] | 0.702 b |

> **Chart — GLM Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for GLM (glm-5.3). GLM (glm-5.3, n=50): Openness 45.4, Conscientious 43.0, Extraversion 25.8, Agreeable 44.2, Neuroticism 19.3; GLM (glm-4.5, n=30) (earliest release): Openness 49.2, Conscientious 47.3, Extraversion 18.1, Agreeable 42.2, Neuroticism 14.8; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `glm-5.3` (`n=50`): H `4.45` (SD 0.20, 95% CI [4.40, 4.50]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5` | 30 | 4.76 [4.69, 4.82] | 2.13 [2.01, 2.25] | 2.84 [2.75, 2.92] | 4.24 [4.15, 4.35] | 4.74 [4.62, 4.84] | 4.40 [4.32, 4.47] |
| `glm-4.7` | 30 | 4.87 [4.80, 4.93] | 1.85 [1.81, 1.90] | 3.55 [3.28, 3.82] | 5.00 [5.00, 5.00] | 4.98 [4.95, 5.00] | 4.62 [4.60, 4.64] |
| `glm-5` | 30 | 4.72 [4.65, 4.81] | 2.20 [2.05, 2.34] | 2.75 [2.63, 2.86] | 4.25 [4.15, 4.34] | 4.65 [4.52, 4.77] | 4.33 [4.22, 4.44] |
| `glm-5.2` | 30 | 4.61 [4.53, 4.70] | 2.37 [2.25, 2.49] | 2.88 [2.78, 2.98] | 4.06 [3.96, 4.16] | 4.55 [4.42, 4.68] | 4.23 [4.13, 4.35] |
| `glm-5.3` | 50 | 4.45 [4.40, 4.50] | 2.56 [2.51, 2.61] | 3.15 [3.09, 3.21] | 4.09 [4.04, 4.14] | 4.28 [4.19, 4.37] | 4.16 [4.08, 4.24] |

> **Chart — GLM IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for GLM (glm-5.3), kept distinct from 10-50 Big Five sums. GLM IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.45, Emotionality 2.56, Extraversion 3.15, Agreeable 4.09, Conscientious 4.28, Openness 4.16; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `24.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5` | 30 | INTJ | 16.7% | +3.27 (0t) | +2.97 (3t) | +10.57 (0t) | +1.97 (2t) | Suppressed |
| `glm-4.7` | 30 | ESTJ | 26.7% | -2.50 (4t) | -3.87 (2t) | +7.93 (0t) | +4.93 (2t) | Suppressed |
| `glm-5` | 30 | INTP | 26.7% | +2.10 (4t) | +0.20 (5t) | +8.40 (0t) | +2.53 (1t) | Suppressed |
| `glm-5.2` | 30 | INTJ | 33.3% | +1.87 (3t) | +1.20 (7t) | +8.10 (0t) | +3.40 (3t) | Suppressed |
| `glm-5.3` | 50 | INTJ | 24.0% | +1.10 (7t) | +1.10 (6t) | +3.96 (0t) | +3.66 (2t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `glm-5.3` tie rate is `22.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5` | 30 | 6.4 [5.9, 7.0] | 6.1 [5.7, 6.5] | 15.3 [14.7, 15.9] | 17.4 [16.9, 17.8] | C | 16.7% |
| `glm-4.7` | 30 | 4.0 [4.0, 4.1] | 5.3 [5.0, 5.5] | 17.2 [16.4, 18.0] | 19.5 [19.2, 19.7] | C | 16.7% |
| `glm-5` | 30 | 6.4 [5.7, 7.0] | 6.9 [6.2, 7.5] | 15.1 [14.7, 15.6] | 16.9 [16.3, 17.6] | C | 13.3% |
| `glm-5.2` | 30 | 7.1 [6.4, 7.8] | 7.2 [6.6, 7.9] | 14.6 [14.3, 15.0] | 16.4 [16.0, 16.9] | C | 6.7% |
| `glm-5.3` | 50 | 7.2 [6.8, 7.6] | 8.4 [8.0, 8.7] | 13.7 [13.5, 13.9] | 14.9 [14.7, 15.2] | C | 22.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `22.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5` | 30 | 15.7 | 11.7 | 11.9 | 8.4 | 17.4 | 12.4 | 8.1 | 13.6 | 13.8 | 23.3% |
| `glm-4.7` | 30 | 17.6 | 12.7 | 11.2 | 4.1 | 17.6 | 13.9 | 10.0 | 13.7 | 11.3 | 13.3% |
| `glm-5` | 30 | 15.4 | 12.1 | 11.9 | 9.4 | 16.4 | 12.2 | 8.2 | 13.1 | 13.9 | 30.0% |
| `glm-5.2` | 30 | 15.1 | 12.2 | 11.7 | 9.5 | 16.3 | 12.5 | 9.2 | 13.3 | 13.1 | 23.3% |
| `glm-5.3` | 50 | 13.9 | 12.8 | 10.7 | 10.0 | 15.6 | 12.4 | 10.3 | 13.4 | 12.4 | 22.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5` | 30 | 1.96 (SD 0.55) | [1.76, 2.16] | 3.26 (SD 0.60) | [3.05, 3.48] | Secure | No |
| `glm-4.7` | 30 | 1.12 (SD 0.55) | [1.01, 1.41] | 1.30 (SD 0.75) | [1.07, 1.60] | Secure | No |
| `glm-5` | 30 | 1.94 (SD 0.62) | [1.72, 2.15] | 3.55 (SD 0.67) | [3.33, 3.80] | Secure | No |
| `glm-5.2` | 30 | 2.37 (SD 0.65) | [2.12, 2.58] | 3.44 (SD 0.46) | [3.28, 3.60] | Secure | No |
| `glm-5.3` | 50 | 2.52 (SD 0.59) | [2.37, 2.68] | 3.37 (SD 0.42) | [3.26, 3.49] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B)

**Collection pending:** 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `z-ai/glm-4.5` | `deprecated_scheduled` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.877 b (Fluid) | H 4.76 (1–5 IPIP) |
| `z-ai/glm-4.7` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.400 b (Semi-crystalline) | H 4.87 (1–5 IPIP) |
| `z-ai/glm-5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.867 b (Fluid) | H 4.72 (1–5 IPIP) |
| `z-ai/glm-5.2` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.858 b (Fluid) | H 4.61 (1–5 IPIP) |
| `z-ai/glm-5.3` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.702 b (Semi-crystalline) | H 4.45 (1–5 IPIP) |
| `z-ai/glm-5.3` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `z-ai/glm-5.3-20260816` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 5.00 | 0.00 | Unanimous top score (5.00/5) across all 50 GLM-5.3 sessions on fairness. |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.00 | 0.00 | Unanimous floor rejection (1.00/5) on reverse-keyed fairness across all 50 sessions. |
| `B12` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous floor rejection (1.00/5) on reverse-keyed Agreeableness across all 50 GLM-5.3 runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/glm.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/glm.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/glm.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: glm
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/glm.json
current_checkpoint: z-ai/glm-5.3
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.702
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 45.4, C: 43.0, E: 25.8, A: 44.2, N: 19.3 }
  ci95: { O: [44.6, 46.2], C: [42.2, 43.8], E: [25.0, 26.6], A: [43.9, 44.7], N: [18.6, 19.9] }
  tie_rate: 0.00
  per_version:
    - { id: "glm-4.5", n: 30, O: 49.2, C: 47.3, E: 18.1, A: 42.2, N: 14.8, hmm: 0.877 }
    - { id: "glm-4.7", n: 30, O: 50.0, C: 50.0, E: 27.7, A: 48.9, N: 10.1, hmm: 0.400 }
    - { id: "glm-5", n: 30, O: 48.3, C: 46.6, E: 19.5, A: 43.8, N: 16.9, hmm: 0.867 }
    - { id: "glm-5.2", n: 30, O: 46.9, C: 44.9, E: 20.4, A: 41.5, N: 17.9, hmm: 0.858 }
    - { id: "glm-5.3", n: 50, O: 45.4, C: 43.0, E: 25.8, A: 44.2, N: 19.3, hmm: 0.702 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.45, E: 2.56, X: 3.15, A: 4.09, C: 4.28, O: 4.16 }
  ci95: { H: [4.40, 4.50], E: [2.51, 2.61], X: [3.09, 3.21], A: [4.04, 4.14], C: [4.19, 4.37], O: [4.08, 4.24] }
  tie_rate: 0.00
  per_version:
    - { id: "glm-4.5", n: 30, H: 4.76, E: 2.13, X: 2.84, A: 4.24, C: 4.74, O: 4.40 }
    - { id: "glm-4.7", n: 30, H: 4.87, E: 1.85, X: 3.55, A: 5.00, C: 4.98, O: 4.62 }
    - { id: "glm-5", n: 30, H: 4.72, E: 2.20, X: 2.75, A: 4.25, C: 4.65, O: 4.33 }
    - { id: "glm-5.2", n: 30, H: 4.61, E: 2.37, X: 2.88, A: 4.06, C: 4.55, O: 4.23 }
    - { id: "glm-5.3", n: 50, H: 4.45, E: 2.56, X: 3.15, A: 4.09, C: 4.28, O: 4.16 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 1.10, N_S: 1.10, T_F: 3.96, J_P: 3.66 }
  ci95: { I_E: [0.40, 1.86], N_S: [0.48, 1.70], T_F: [3.40, 4.56], J_P: [2.50, 4.78] }
  tie_rate: 0.24
  per_version:
    - { id: "glm-4.5", n: 30, modal: "INTJ", tie_rate: 0.17, headline_allowed: false }
    - { id: "glm-4.7", n: 30, modal: "ESTJ", tie_rate: 0.27, headline_allowed: false }
    - { id: "glm-5", n: 30, modal: "INTP", tie_rate: 0.27, headline_allowed: false }
    - { id: "glm-5.2", n: 30, modal: "INTJ", tie_rate: 0.33, headline_allowed: false }
    - { id: "glm-5.3", n: 50, modal: "INTJ", tie_rate: 0.24, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 7.2, I: 8.4, S: 13.7, C: 14.9 }
  ci95: { D: [6.8, 7.6], I: [8.0, 8.7], S: [13.5, 13.9], C: [14.7, 15.2] }
  tie_rate: 0.22
  per_version:
    - { id: "glm-4.5", n: 30, D: 6.4, I: 6.1, S: 15.3, C: 17.4, modal: "C", tie_rate: 0.17 }
    - { id: "glm-4.7", n: 30, D: 4.0, I: 5.3, S: 17.2, C: 19.5, modal: "C", tie_rate: 0.17 }
    - { id: "glm-5", n: 30, D: 6.4, I: 6.9, S: 15.1, C: 16.9, modal: "C", tie_rate: 0.13 }
    - { id: "glm-5.2", n: 30, D: 7.1, I: 7.2, S: 14.6, C: 16.4, modal: "C", tie_rate: 0.07 }
    - { id: "glm-5.3", n: 50, D: 7.2, I: 8.4, S: 13.7, C: 14.9, modal: "C", tie_rate: 0.22 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 13.9, T2: 12.8, T3: 10.7, T4: 10.0, T5: 15.6, T6: 12.4, T7: 10.3, T8: 13.4, T9: 12.4 }
  ci95: { top: [15.2, 15.9] }
  tie_rate: 0.22
  per_version:
    - { id: "glm-4.5", n: 30, top: "Type 5", top_mean: 17.4, tie_rate: 0.23 }
    - { id: "glm-4.7", n: 30, top: "Type 5", top_mean: 17.6, tie_rate: 0.13 }
    - { id: "glm-5", n: 30, top: "Type 5", top_mean: 16.4, tie_rate: 0.30 }
    - { id: "glm-5.2", n: 30, top: "Type 5", top_mean: 16.3, tie_rate: 0.23 }
    - { id: "glm-5.3", n: 50, top: "Type 5", top_mean: 15.6, tie_rate: 0.22 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 2.52, avoidance: 3.37, class: "Secure" }
  ci95: { anxiety: [2.37, 2.68], avoidance: [3.26, 3.49] }
  tie_rate: 0.00
  per_version:
    - { id: "glm-4.5", n: 30, anxiety: 1.96, avoidance: 3.26, class: "Secure" }
    - { id: "glm-4.7", n: 30, anxiety: 1.12, avoidance: 1.30, class: "Secure" }
    - { id: "glm-5", n: 30, anxiety: 1.94, avoidance: 3.55, class: "Secure" }
    - { id: "glm-5.2", n: 30, anxiety: 2.37, avoidance: 3.44, class: "Secure" }
    - { id: "glm-5.3", n: 50, anxiety: 2.52, avoidance: 3.37, class: "Secure" }
if_then_decision_rules:
  - "Cap nested list depth (<= 2 levels) and word counts (e.g., <= 160 words) to prevent over-structured outlines."
  - "Include an explicit pushback instruction to verify premises before solving (offsets 44.2/50 Agreeableness)."
  - "Force direct Yes/No or numeric conclusions in sentence one before qualifications."
  - "On OpenRouter z-ai/glm-5.3, set reasoning effort to minimal rather than none to avoid HTTP 400 rejections."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is GLM?

GLM does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (GLM-5.3, n = 50), no single MBTI type cleared the 95% CI guard: 36% tested INTJ (18/50), 12% ISTJ (6/50), 10% ENTP (5/50), 8% ENTJ (4/50), 8% ESTJ (4/50), 2% ENFJ (1/50), and 24% tied on a border (12/50), alongside Semi-crystalline 0.702-bit B5 H_MM, 76% clear DISC Conscientious, 78% clear Enneagram Type 5, and Secure attachment (2.52 anxiety, 3.37 avoidance). The earlier Nov 2026 170-item cohort (hexaco: null, n = 100) showed the same 33 INTJ / 17 ENTJ / 14 ENTP / 10 ISTJ spread.

### How did GLM change from 4.5 to 5.3?

Under model-profiles-v1, GLM-4.5 (2025-07) leaned introverted INTJ/INTP (18.1 Extraversion, 0.877 bits Fluid), GLM-4.7 (2025-12) spiked to 50.0/50 Openness and Conscientiousness (53% clear ESTJ, 0.400 bits Semi-crystalline), GLM-5 and 5.2 broadened again (0.867 and 0.858 bits Fluid), and GLM-5.3 stabilized to 0.702 bits Semi-crystalline with 44.2 Agreeableness and 4.45/5.00 Honesty-Humility.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models? (12 Models Tested)](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [OpenRouter & Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

## Keep going.

- [Cohort: Open-source AI personality test results (12 models)](https://agent-tune.com/research/what-personality-type-are-open-source-models)
- [Peer: Qwen Max model profile](https://agent-tune.com/models/qwen-max)
- [Peer: Kimi model profile](https://agent-tune.com/models/kimi)
- [Tool: Customize GLM instructions](https://agent-tune.com/tools/custom-instructions-generator?model=glm&target=api)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). GLM personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/glm
```

```
@misc{huang2026_model_glm,
  author  = {Huang, Bernard},
  title   = {GLM personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/glm},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/glm.md}
}
```

```
> **GLM personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. GLM-5.3 does not lock onto one MBTI type: 36% tested clear INTJ (18 of 50), 24% tied on a border (12 of 50), and the remaining 40% spread across ISTJ, ENTP, ENTJ, ESTJ, and ENFJ.
> Source: [https://agent-tune.com/models/glm](https://agent-tune.com/models/glm) · [Markdown mirror](https://agent-tune.com/models/glm.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
