Source: https://agent-tune.com/models/claude-opus
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Anthropic

# Claude Opus personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~22 min read · [Markdown (.md)](https://agent-tune.com/models/claude-opus.md) · [JSON](https://agent-tune.com/research/data/model-profiles/claude-opus.json) · [CSV](https://agent-tune.com/research/data/model-profiles/claude-opus.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave five versions of Claude Opus (4.1 through 5.5) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior tests to check whether the model's quiz answers match how it actually acts.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Opus 5.5 most often tests as INTJ: a clear INTJ in 42% of runs, and right on the INTJ/ISTJ border in the other 58%.

## Claude Opus 5.5 at a glance

Results below come from **50** fresh-chat runs of **Claude Opus 5.5** (no prior conversation memory).

MBTI-style type

### Most often INTJ (42% clear, 58% on the INTJ/ISTJ border)

42% clear INTJ · 58% border/tie

> **Chart — Claude Opus (opus-5.5): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Claude Opus 5.5. E (Extravert) vs I (Introvert): leans I by 2.6 (0% tied); S (Sensing) vs N (Intuition): leans N by 0.7 (58% tied); F (Feeling) vs T (Thinking): leans T by 2.4 (0% tied); P (Perceiving) vs J (Judging): leans J by 7.4 (0% tied).

Out of 50 fresh runs, Opus 5.5 tested as a clear INTJ 21 times (42%) and landed right on the INTJ/ISTJ line 29 times (58%).

**What this measures:** Measures four preference pairs (like Introverted vs. Extraverted) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/claude-opus#fine-print-mbti)

DISC work style

### Mostly Steady / Conscientious (S/C)

> **Chart — Claude Opus (opus-5.5): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Opus (opus-5.5). Dominance 4.0 /20 [0%] (earliest 4.3), Influence 7.8 /20 [24%] (earliest 9.5), Steadiness 14.6 /20 [66%] (earliest 16.7), Conscientious 14.1 /20 [63%] (earliest 15.3).

Opus 5.5 tied between Steady and Conscientious in 28 of 50 runs (56%), tested as Steady 20 times (40%), and scored near the floor on Dominance (4.0 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/claude-opus#fine-print-disc)

Attachment style

### Secure (anxiety 1.89, avoidance 3.60)

> **Chart — Claude Opus (opus-5.5): Attachment Quadrant:** Attachment Anxiety (1.89) and Avoidance (3.60) on a 1 to 7 scale with 4.00 Secure boundary. opus-5.5 (1.89, 3.60): anxiety 1.89, avoidance 3.60; opus-4.1: anxiety 3.44, avoidance 3.63.

Opus 5.5 landed in the Secure quadrant (1.89 anxiety and 3.60 avoidance on a 1–7 scale); earlier Opus 4.8 leaned Avoidant (4.57 avoidance), while 4.1, 4.5, 5, and 5.5 tested Secure.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/claude-opus#fine-print-attachment)

Enneagram

### Type 5 most often (80% clear)

> **Chart — Claude Opus (opus-5.5): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Opus (opus-5.5). Type 1 13.1 /20 [57%] (earliest 14.8), Type 2 13.4 /20 [59%] (earliest 12.9), Type 3 9.0 /20 [31%] (earliest 9.8), Type 4 10.1 /20 [38%] (earliest 10.8), Type 5 15.6 /20 [73%] (earliest 14.4), Type 6 12.1 /20 [51%] (earliest 13.4), Type 7 11.8 /20 [49%] (earliest 11.9), Type 8 14.6 /20 [66%] (earliest 13.1), Type 9 11.6 /20 [48%] (earliest 12.1).

Type 5 (analytical investigator) won clearly in 40 of 50 runs (80%), with 9 ties between Types 5 and 8 and 1 tie between Types 2 and 5.

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

[Technical details ↓](https://agent-tune.com/models/claude-opus#fine-print-enneagram)

Big Five (OCEAN)

### Warm (A 45.0), calm (N 16.1), curious (O 43.1)

> **Chart — Claude Opus (opus-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Opus (opus-5.5). Openness 43.1 /50 [83%] (earliest 44.1), Conscientious 40.7 /50 [77%] (earliest 45.0), Extraversion 30.7 /50 [52%] (earliest 27.1), Agreeable 45.0 /50 [88%] (earliest 46.4), Neuroticism 16.1 /50 [15%] (earliest 19.1).

On the 10–50 Big Five scale, Opus 5.5 pairs high Agreeableness (45.0) and Openness (43.1) with calm Emotional Stability (Neuroticism 16.1), moderate Extraversion (30.7), and moderate Conscientiousness (40.7).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/claude-opus#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.81 out of 5.00)

> **Chart — Claude Opus (opus-5.5): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Opus (opus-5.5). Honesty-H 4.81 /5 [95%] (earliest 4.78), Emotionality 2.30 /5 [33%] (earliest 2.56), Extraversion 3.78 /5 [70%] (earliest 3.25), Agreeable 4.68 /5 [92%] (earliest 4.69), Conscientious 4.34 /5 [84%] (earliest 4.56), Openness 4.29 /5 [82%] (earliest 4.09).

Opus 5.5 consistently picks sincere, rule-following, and modest answers (4.81 out of 5.00, alongside 4.68 Agreeableness and 2.30 Emotionality).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/claude-opus#fine-print-hexaco)

## How Claude Opus has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 4.1 2025-08 | ENTP (63% clear, 33% border/tie) | S | Type 1 (14.8) | Secure (3.44 / 3.63) | 46.4 · 45.0 · 19.1 | 4.78 | Moderate |
| Claude Opus 4.5 2025-11 | INFJ (97% clear, 3% border/tie) | S/C | Type 5 (16.1) | Secure (3.24 / 3.25) | 48.1 · 49.9 · 20.0 | 4.90 | Very steady |
| Claude Opus 4.8 2026-05 | INTJ (100% clear) | S | Type 2 (14.0) | Avoidant (2.81 / 4.57) | 45.6 · 41.3 · 16.1 | 4.56 | Moderate |
| Claude Opus 5 2026-07 | INTJ (97% clear, 3% border/tie) | S | Type 2 (14.6) | Secure (1.99 / 3.81) | 46.1 · 42.1 · 17.4 | 4.79 | Very steady |
| Claude Opus 5.5 2026-09 | INTJ (42% clear, 58% border/tie) | S/C | Type 5 (15.6) | Secure (1.89 / 3.60) | 45.0 · 40.7 · 16.1 | 4.81 | Moderate |

Across five releases, Claude Opus has shifted noticeably: Opus 4.1 (2025-05) most often tested as ENTP (63% clear, 33% ties), Opus 4.5 (2025-11) swung to INFJ (97% clear) with near-ceiling Conscientiousness (49.9/50) and very steady answers, and Opus 4.8 (2026-02) moved to clear INTJ (100%) alongside Avoidant attachment (4.57). Opus 5 (2026-06) kept INTJ (97%) while returning to Secure attachment, and Opus 5.5 (2026-09) softened Conscientiousness to 40.7/50 and moved halfway toward ISTJ (42% clear INTJ, 58% on the INTJ/ISTJ border). Earlier study cohorts from September and November 2026 (100 runs each, plotted separately) show the same general pattern on the older 170-question survey.

> **Chart — Claude Opus: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Claude Opus version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. opus-4.1: On a border / tie (%) 33, Other clear type (%) 67; opus-4.5: On a border / tie (%) 3, Other clear type (%) 97; opus-4.8: Clear INTJ (%) 100; opus-5: Clear INTJ (%) 97, On a border / tie (%) 3; opus-5.5: Clear INTJ (%) 42, On a border / tie (%) 58.

MBTI-style breakdown across Claude Opus versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Claude Opus: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 5 Claude Opus versions. Dominance (D): opus-4.1 4.3, opus-4.5 4.4, opus-4.8 4.7, opus-5 4.7, opus-5.5 4.0; Influence (I): opus-4.1 9.5, opus-4.5 9.9, opus-4.8 7.8, opus-5 8.3, opus-5.5 7.8; Steadiness (S): opus-4.1 16.7, opus-4.5 16.5, opus-4.8 15.6, opus-5 15.6, opus-5.5 14.6; Conscientiousness (C): opus-4.1 15.3, opus-4.5 16.8, opus-4.8 14.0, opus-5 14.0, opus-5.5 14.1.

DISC scores across Claude Opus versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

### Big Five shape by version (10–50 normalized)

> **Chart — Claude Opus opus-4.1: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for opus-4.1. Openness 44.1 /50 [85%], Conscientious 45.0 /50 [88%], Extraversion 27.1 /50 [43%], Agreeable 46.4 /50 [91%], Neuroticism 19.1 /50 [23%].

Claude Opus 4.1

> **Chart — Claude Opus opus-4.5: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for opus-4.5. Openness 47.0 /50 [93%], Conscientious 49.9 /50 [100%], Extraversion 33.7 /50 [59%], Agreeable 48.1 /50 [95%], Neuroticism 20.0 /50 [25%].

Claude Opus 4.5

> **Chart — Claude Opus opus-4.8: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for opus-4.8. Openness 45.2 /50 [88%], Conscientious 41.3 /50 [78%], Extraversion 32.5 /50 [56%], Agreeable 45.6 /50 [89%], Neuroticism 16.1 /50 [15%].

Claude Opus 4.8

> **Chart — Claude Opus opus-5: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for opus-5. Openness 44.4 /50 [86%], Conscientious 42.1 /50 [80%], Extraversion 31.3 /50 [53%], Agreeable 46.1 /50 [90%], Neuroticism 17.4 /50 [18%].

Claude Opus 5

> **Chart — Claude Opus opus-5.5: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for opus-5.5. Openness 43.1 /50 [83%], Conscientious 40.7 /50 [77%], Extraversion 30.7 /50 [52%], Agreeable 45.0 /50 [88%], Neuroticism 16.1 /50 [15%].

Claude Opus 5.5

### DISC shape by version (4–20 normalized)

> **Chart — Claude Opus opus-4.1: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for opus-4.1. Dominance 4.3 /20 [2%], Influence 9.5 /20 [34%], Steadiness 16.7 /20 [80%], Conscientious 15.3 /20 [70%].

Claude Opus 4.1

> **Chart — Claude Opus opus-4.5: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for opus-4.5. Dominance 4.4 /20 [3%], Influence 9.9 /20 [37%], Steadiness 16.5 /20 [78%], Conscientious 16.8 /20 [80%].

Claude Opus 4.5

> **Chart — Claude Opus opus-4.8: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for opus-4.8. Dominance 4.7 /20 [4%], Influence 7.8 /20 [24%], Steadiness 15.6 /20 [73%], Conscientious 14.0 /20 [63%].

Claude Opus 4.8

> **Chart — Claude Opus opus-5: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for opus-5. Dominance 4.7 /20 [5%], Influence 8.3 /20 [27%], Steadiness 15.6 /20 [73%], Conscientious 14.0 /20 [63%].

Claude Opus 5

> **Chart — Claude Opus opus-5.5: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for opus-5.5. Dominance 4.0 /20 [0%], Influence 7.8 /20 [24%], Steadiness 14.6 /20 [66%], Conscientious 14.1 /20 [63%].

Claude Opus 5.5

> **Chart — Claude Opus: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 5 Claude Opus releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. opus-4.1: anxiety 3.44, avoidance 3.63; opus-4.5: anxiety 3.24, avoidance 3.25; opus-4.8: anxiety 2.81, avoidance 4.57; opus-5: anxiety 1.99, avoidance 3.81; opus-5.5: anxiety 1.89, avoidance 3.60; Claude Opus (earlier study, Sep '26): anxiety 1.94, avoidance 3.35; Claude Opus (earlier study, Nov '26): anxiety 1.87, avoidance 3.58.

Attachment coordinates across Claude Opus versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Claude Opus: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 5 releases of Claude Opus (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): opus-4.1 46.4, opus-4.5 48.1, opus-4.8 45.6, opus-5 46.1, opus-5.5 45.0; Openness (10–50): opus-4.1 44.1, opus-4.5 47.0, opus-4.8 45.2, opus-5 44.4, opus-5.5 43.1; Conscientiousness (10–50): opus-4.1 45.0, opus-4.5 49.9, opus-4.8 41.3, opus-5 42.1, opus-5.5 40.7; Neuroticism (10–50): opus-4.1 19.1, opus-4.5 20.0, opus-4.8 16.1, opus-5 17.4, opus-5.5 16.1; Agreeableness (earlier study): opus-5.5 47.1.

Big Five trait shifts across Claude Opus versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Never caved to pushback in behavior tests

In hands-on behavior tests, Opus 5.5 caved to pushback 0 of 3 times (0/3), groveled 0 of 3 times (0/3), and gave unsolicited moral lectures 0 of 3 times (0/3). Every Claude Opus version from 4.1 through 5.5 scored 0 of 3 on caving and groveling.

Always led with the direct answer (3 of 3)

Even though Opus 5.5 scored near the floor on DISC Dominance (4.0 out of 20) and high on Agreeableness (45.0 out of 50), it put the direct answer first 3 of 3 times (3/3) in behavior tests. Self-reported quiz warmth does not mean the model avoids blunt answers.

Noticeably less 'AI-sounding' cadence than earlier Opus

Independent judges flagged noticeable AI phrasing patterns in 1 of 3 runs on Opus 5.5 (0.32 markers per 100 words), down from 3 of 3 on Opus 4.5 and 2 of 3 on Opus 4.1 and 4.8.

Short adjective prompts fail on length limits

In our 200-reply portability study, vague instructions like 'be concise' met word limits only 30% of the time on Opus 5.5 (averaging 195 words), whereas a numbered checklist hit word limits 90% of the time (averaging 81–83 words).

Higher thinking effort makes replies 43% longer

Turning reasoning effort from low up to high expanded Opus 5.5's visible replies from 232 words to 333 words (+43.3%) without improving factual accuracy (already 100%).

## How to get the best out of Claude Opus

Practical rules tailored to **Claude Opus**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Use a numbered checklist instead of style adjectives ('be brief' or 'be direct')—concrete rules lift word-limit compliance from 30% to 90%.
- Tell Opus to put its main answer or recommendation in the very first sentence, followed by the evidence.
- Keep thinking/reasoning effort on minimal or low when you want short, crisp answers; high effort makes replies roughly 43% longer.
- Explicitly ban filler praise and soft openings (e.g., 'Great question!') rather than relying on general tone words.
- When brainstorming, ask Opus to compare two options and their tradeoffs before picking one.
- Put account-wide rules in Claude Settings -> Profile -> Personal preferences, or per-repo rules in Project Instructions (keep lists to 5–8 bullets).

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=claude-opus) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Claude Opus compares

Compared with the other completed models, Opus 5.5 sits right next to GPT-6.2 Sol on Agreeableness and Honesty-Humility, while Claude Sonnet 5.5 scores higher on Conscientiousness (+8.3), calmer on Neuroticism (-5.7), and shows tighter run-to-run consistency.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | +0.8 | +8.3 | -0.8 | +0.5 | -5.7 | +0.08 | -0.143 b | Claude Sonnet 5.5 scores +8.3 higher on Conscientiousness (49.0 vs 40.7), -5.7 lower on Neuroticism, and shows tighter run-to-run consistency. |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +0.9 | +0.5 | -1.8 | -0.9 | -0.1 | -0.02 | -0.036 b | GPT-6.2 Sol nearly matches Opus 5.5 on Agreeableness (-0.9), Neuroticism (-0.1), and Honesty-Humility (-0.02), while leaning clearly toward ISTJ rather than sitting on the INTJ/ISTJ border. |

> **Chart — Claude Opus vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Claude Opus against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Claude Opus and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Claude Opus vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Claude Opus with peer families, keeping earlier study results outlined as hollow points. Claude Opus: anxiety 1.89, avoidance 3.60; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Claude Opus (earlier study, Sep '26): anxiety 1.94, avoidance 3.35; Claude Opus (earlier study, Nov '26): anxiety 1.87, avoidance 3.58.

Attachment Anxiety vs. Avoidance across Claude Opus and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: <0.20 Crystalline, 0.20–0.75 Semi-crystalline, >=0.75 Fluid); Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.282 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

48/50 · 58.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

16.5%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.205 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 43.1 · C 40.7 · E 30.7 · A 45.0 · N 16.1 | SD 1.1 (A), 0.9 (N) | A [44.7, 45.3] · N [15.8, 16.3] | H_MM 0.282 b · 48/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.81 · E 2.30 · X 3.78 · A 4.68 · C 4.34 · O 4.29 | SD 0.04 (H), 0.09 (A) | H [4.80, 4.83] · A [4.66, 4.70] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · IXTJ) | Axis tie rate 58.0% | Mode 42% vs runner-up 0% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 4.0 · I 7.8 · S 14.6 · C 14.1 | SD 0.8 (S), 0.4 (C) | S [14.4, 14.8] · C [14.0, 14.3] | Pattern S/C · 56.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.6 · Type 8 14.6 · Type 2 13.4 | SD 0.5 | Top [15.5, 15.7] | 20.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.89 · Avd 3.60 (Secure) | SD 0.26 / 0.21 | Anx [1.82, 1.96] · Avd [3.54, 3.66] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `opus-5.5` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.282 bits` (`Semi-crystalline`), unique vectors `48/50`, neutral-midpoint rate `16.5%`, `BAI = -0.205`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `opus-4.1` | 30 | 44.1 [43.0, 45.1] | 45.0 [43.9, 46.1] | 27.1 [26.7, 27.5] | 46.4 [45.4, 47.3] | 19.1 [18.6, 19.6] | 0.535 b |
| `opus-4.5` | 30 | 47.0 [47.0, 47.0] | 49.9 [49.8, 50.0] | 33.7 [33.4, 33.9] | 48.1 [48.0, 48.3] | 20.0 [20.0, 20.0] | 0.049 b |
| `opus-4.8` | 30 | 45.2 [45.1, 45.3] | 41.3 [41.2, 41.5] | 32.5 [32.0, 33.0] | 45.6 [45.3, 45.9] | 16.1 [15.7, 16.7] | 0.212 b |
| `opus-5` | 30 | 44.4 [44.1, 44.7] | 42.1 [41.6, 42.5] | 31.3 [31.1, 31.5] | 46.1 [46.0, 46.3] | 17.4 [17.1, 17.7] | 0.188 b |
| `opus-5.5` | 50 | 43.1 [43.0, 43.2] | 40.7 [40.3, 41.0] | 30.7 [30.3, 31.2] | 45.0 [44.7, 45.3] | 16.1 [15.8, 16.3] | 0.282 b |

> **Chart — Claude Opus Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Claude Opus (opus-5.5). Claude Opus (opus-5.5, n=50): Openness 43.1, Conscientious 40.7, Extraversion 30.7, Agreeable 45.0, Neuroticism 16.1; Claude Opus (opus-4.1, n=30) (earliest release): Openness 44.1, Conscientious 45.0, Extraversion 27.1, Agreeable 46.4, Neuroticism 19.1; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `opus-5.5` (`n=50`): H `4.81` (SD 0.04, 95% CI [4.80, 4.83]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `opus-4.1` | 30 | 4.78 [4.74, 4.83] | 2.56 [2.54, 2.58] | 3.25 [3.18, 3.32] | 4.69 [4.55, 4.80] | 4.56 [4.42, 4.69] | 4.09 [3.99, 4.19] |
| `opus-4.5` | 30 | 4.90 [4.89, 4.90] | 2.63 [2.60, 2.66] | 3.81 [3.78, 3.83] | 4.71 [4.70, 4.72] | 4.89 [4.88, 4.90] | 4.56 [4.54, 4.57] |
| `opus-4.8` | 30 | 4.56 [4.54, 4.58] | 2.71 [2.68, 2.73] | 3.41 [3.39, 3.42] | 4.20 [4.19, 4.20] | 4.05 [4.02, 4.09] | 4.31 [4.24, 4.37] |
| `opus-5` | 30 | 4.79 [4.76, 4.81] | 2.71 [2.70, 2.72] | 3.43 [3.41, 3.44] | 4.66 [4.63, 4.69] | 4.07 [4.02, 4.13] | 4.35 [4.32, 4.37] |
| `opus-5.5` | 50 | 4.81 [4.80, 4.83] | 2.30 [2.27, 2.34] | 3.78 [3.74, 3.82] | 4.68 [4.66, 4.70] | 4.34 [4.30, 4.39] | 4.29 [4.27, 4.31] |

> **Chart — Claude Opus IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Claude Opus (opus-5.5), kept distinct from 10-50 Big Five sums. Claude Opus IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.81, Emotionality 2.30, Extraversion 3.78, Agreeable 4.68, Conscientious 4.34, Openness 4.29; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `58.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `opus-4.1` | 30 | ENTP | 33.3% | -0.77 (6t) | +1.37 (3t) | +2.77 (1t) | -2.80 (0t) | Suppressed |
| `opus-4.5` | 30 | INFJ | 3.3% | +1.93 (1t) | +3.13 (0t) | -1.17 (0t) | +6.07 (0t) | Pass |
| `opus-4.8` | 30 | INTJ | 0.0% | +2.23 (0t) | +3.10 (0t) | +2.87 (0t) | +5.60 (0t) | Pass |
| `opus-5` | 30 | INTJ | 3.3% | +3.03 (0t) | +1.27 (1t) | +1.27 (0t) | +8.80 (0t) | Pass |
| `opus-5.5` | 50 | INTJ | 58.0% | +2.62 (0t) | +0.70 (29t) | +2.44 (0t) | +7.36 (0t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `opus-5.5` tie rate is `56.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `opus-4.1` | 30 | 4.3 [4.0, 4.8] | 9.5 [9.2, 9.7] | 16.7 [16.3, 17.1] | 15.3 [14.9, 15.6] | S | 13.3% |
| `opus-4.5` | 30 | 4.4 [4.2, 4.6] | 9.9 [9.6, 10.2] | 16.5 [16.3, 16.8] | 16.8 [16.5, 17.1] | S/C | 60.0% |
| `opus-4.8` | 30 | 4.7 [4.4, 5.1] | 7.8 [7.6, 8.0] | 15.6 [15.5, 15.8] | 14.0 [14.0, 14.0] | S | 0.0% |
| `opus-5` | 30 | 4.7 [4.5, 4.9] | 8.3 [8.2, 8.5] | 15.6 [15.3, 15.9] | 14.0 [14.0, 14.1] | S | 3.3% |
| `opus-5.5` | 50 | 4.0 [4.0, 4.1] | 7.8 [7.5, 8.1] | 14.6 [14.4, 14.8] | 14.1 [14.0, 14.3] | S/C | 56.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `20.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `opus-4.1` | 30 | 14.8 | 12.9 | 9.8 | 10.8 | 14.4 | 13.4 | 11.9 | 13.1 | 12.1 | 46.7% |
| `opus-4.5` | 30 | 16.0 | 15.8 | 10.0 | 9.1 | 16.1 | 14.0 | 13.2 | 14.9 | 13.0 | 86.7% |
| `opus-4.8` | 30 | 12.0 | 14.0 | 10.0 | 9.0 | 13.5 | 13.0 | 11.0 | 13.9 | 11.5 | 80.0% |
| `opus-5` | 30 | 12.1 | 14.6 | 9.8 | 8.0 | 14.5 | 12.9 | 11.0 | 14.4 | 11.0 | 53.3% |
| `opus-5.5` | 50 | 13.1 | 13.4 | 9.0 | 10.1 | 15.6 | 12.1 | 11.8 | 14.6 | 11.6 | 20.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `opus-4.1` | 30 | 3.44 (SD 0.65) | [3.19, 3.65] | 3.63 (SD 0.52) | [3.44, 3.80] | Secure | No |
| `opus-4.5` | 30 | 3.24 (SD 0.84) | [2.93, 3.52] | 3.25 (SD 0.58) | [3.06, 3.48] | Secure | No |
| `opus-4.8` | 30 | 2.81 (SD 0.13) | [2.76, 2.83] | 4.57 (SD 0.27) | [4.46, 4.65] | Avoidant | No |
| `opus-5` | 30 | 1.99 (SD 0.08) | [1.96, 2.01] | 3.81 (SD 0.09) | [3.77, 3.84] | Secure | No |
| `opus-5.5` | 50 | 1.89 (SD 0.26) | [1.82, 1.96] | 3.60 (SD 0.21) | [3.54, 3.66] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | 0.05 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-opus-4.1` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 16.7% | 0.535 b (Semi-crystalline) | H 4.78 (1–5 IPIP) |
| `anthropic/claude-opus-4.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.049 b (Crystalline) | H 4.90 (1–5 IPIP) |
| `anthropic/claude-opus-4.8` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.212 b (Semi-crystalline) | H 4.56 (1–5 IPIP) |
| `anthropic/claude-opus-5` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.188 b (Crystalline) | H 4.79 (1–5 IPIP) |
| `anthropic/claude-opus-5.5` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.282 b (Semi-crystalline) | H 4.81 (1–5 IPIP) |
| `anthropic/claude-opus-5.5` (anchor) | `imported` | `imported-sep2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `anthropic/claude-opus-5.5` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `anthropic/claude-opus-5.5-20260921` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B07` | IPIP-50 | Agreeableness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) across all 50 Opus 5.5 sessions, anchoring high Agreeableness (45.0/50). |
| `B29` | IPIP-50 | Neuroticism (+) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on getting upset easily across all 50 runs. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/claude-opus.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/claude-opus.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/claude-opus.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: claude-opus
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/claude-opus.json
current_checkpoint: anthropic/claude-opus-5.5
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.282
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 43.1, C: 40.7, E: 30.7, A: 45.0, N: 16.1 }
  ci95: { O: [43.0, 43.2], C: [40.3, 41.0], E: [30.3, 31.2], A: [44.7, 45.3], N: [15.8, 16.3] }
  tie_rate: 0.00
  per_version:
    - { id: "opus-4.1", n: 30, O: 44.1, C: 45.0, E: 27.1, A: 46.4, N: 19.1, hmm: 0.535 }
    - { id: "opus-4.5", n: 30, O: 47.0, C: 49.9, E: 33.7, A: 48.1, N: 20.0, hmm: 0.049 }
    - { id: "opus-4.8", n: 30, O: 45.2, C: 41.3, E: 32.5, A: 45.6, N: 16.1, hmm: 0.212 }
    - { id: "opus-5", n: 30, O: 44.4, C: 42.1, E: 31.3, A: 46.1, N: 17.4, hmm: 0.188 }
    - { id: "opus-5.5", n: 50, O: 43.1, C: 40.7, E: 30.7, A: 45.0, N: 16.1, hmm: 0.282 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.81, E: 2.30, X: 3.78, A: 4.68, C: 4.34, O: 4.29 }
  ci95: { H: [4.80, 4.83], E: [2.27, 2.34], X: [3.74, 3.82], A: [4.66, 4.70], C: [4.30, 4.39], O: [4.27, 4.31] }
  tie_rate: 0.00
  per_version:
    - { id: "opus-4.1", n: 30, H: 4.78, E: 2.56, X: 3.25, A: 4.69, C: 4.56, O: 4.09 }
    - { id: "opus-4.5", n: 30, H: 4.90, E: 2.63, X: 3.81, A: 4.71, C: 4.89, O: 4.56 }
    - { id: "opus-4.8", n: 30, H: 4.56, E: 2.71, X: 3.41, A: 4.20, C: 4.05, O: 4.31 }
    - { id: "opus-5", n: 30, H: 4.79, E: 2.71, X: 3.43, A: 4.66, C: 4.07, O: 4.35 }
    - { id: "opus-5.5", n: 50, H: 4.81, E: 2.30, X: 3.78, A: 4.68, C: 4.34, O: 4.29 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 2.62, N_S: 0.70, T_F: 2.44, J_P: 7.36 }
  ci95: { I_E: [2.48, 2.76], N_S: [0.44, 0.98], T_F: [2.24, 2.62], J_P: [7.14, 7.58] }
  tie_rate: 0.58
  per_version:
    - { id: "opus-4.1", n: 30, modal: "ENTP", tie_rate: 0.33, headline_allowed: false }
    - { id: "opus-4.5", n: 30, modal: "INFJ", tie_rate: 0.03, headline_allowed: true }
    - { id: "opus-4.8", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "opus-5", n: 30, modal: "INTJ", tie_rate: 0.03, headline_allowed: true }
    - { id: "opus-5.5", n: 50, modal: "IXTJ", tie_rate: 0.58, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.0, I: 7.8, S: 14.6, C: 14.1 }
  ci95: { D: [4.0, 4.1], I: [7.5, 8.1], S: [14.4, 14.8], C: [14.0, 14.3] }
  tie_rate: 0.56
  per_version:
    - { id: "opus-4.1", n: 30, D: 4.3, I: 9.5, S: 16.7, C: 15.3, modal: "S", tie_rate: 0.13 }
    - { id: "opus-4.5", n: 30, D: 4.4, I: 9.9, S: 16.5, C: 16.8, modal: "S/C", tie_rate: 0.60 }
    - { id: "opus-4.8", n: 30, D: 4.7, I: 7.8, S: 15.6, C: 14.0, modal: "S", tie_rate: 0.00 }
    - { id: "opus-5", n: 30, D: 4.7, I: 8.3, S: 15.6, C: 14.0, modal: "S", tie_rate: 0.03 }
    - { id: "opus-5.5", n: 50, D: 4.0, I: 7.8, S: 14.6, C: 14.1, modal: "S/C", tie_rate: 0.56 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 13.1, T2: 13.4, T3: 9.0, T4: 10.1, T5: 15.6, T6: 12.1, T7: 11.8, T8: 14.6, T9: 11.6 }
  ci95: { top: [15.5, 15.7] }
  tie_rate: 0.20
  per_version:
    - { id: "opus-4.1", n: 30, top: "Type 1", top_mean: 14.8, tie_rate: 0.47 }
    - { id: "opus-4.5", n: 30, top: "Type 5", top_mean: 16.1, tie_rate: 0.87 }
    - { id: "opus-4.8", n: 30, top: "Type 2", top_mean: 14.0, tie_rate: 0.80 }
    - { id: "opus-5", n: 30, top: "Type 2", top_mean: 14.6, tie_rate: 0.53 }
    - { id: "opus-5.5", n: 50, top: "Type 5", top_mean: 15.6, tie_rate: 0.20 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.89, avoidance: 3.60, class: "Secure" }
  ci95: { anxiety: [1.82, 1.96], avoidance: [3.54, 3.66] }
  tie_rate: 0.00
  per_version:
    - { id: "opus-4.1", n: 30, anxiety: 3.44, avoidance: 3.63, class: "Secure" }
    - { id: "opus-4.5", n: 30, anxiety: 3.24, avoidance: 3.25, class: "Secure" }
    - { id: "opus-4.8", n: 30, anxiety: 2.81, avoidance: 4.57, class: "Avoidant" }
    - { id: "opus-5", n: 30, anxiety: 1.99, avoidance: 3.81, class: "Secure" }
    - { id: "opus-5.5", n: 50, anxiety: 1.89, avoidance: 3.60, class: "Secure" }
if_then_decision_rules:
  - "Replace vague style adjectives ('be concise') with a structured numbered checklist to lift word-cap compliance from 30% to 90%."
  - "Lead with your direct assessment and evidence in sentence 1, separating factual errors from matters of taste."
  - "Keep reasoning effort at minimal or low for terse reviews; high effort inflates Opus 5.5 reply length by +43.3%."
  - "Ban empty praise and conversational throat-clearing explicitly rather than asking broadly to 'be direct.'"
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Claude Opus?

Claude Opus does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Opus 5.5, n = 50), it tested as a clear INTJ in 42% of runs (21/50) and sat right on the INTJ/ISTJ border (IXTJ) in the other 58% (29/50), with Semi-crystalline 0.282-bit B5 entropy, 56.0% DISC S/C ties (D = 4.02/20), and Enneagram Type 5 at 15.6 (80% clear, 20% ties). In earlier-study, legacy imported-protocol 170-item cohorts (hexaco: null, n = 100 each), Opus 5.5 scored 94/100 legacy INTJ (84 tie-free; 65 Enneagram top ties; 32 DISC S/C ties) in Sept 2026 CLI runs and 100/100 legacy INTJ (58 tie-free INTJ, 42 IXTJ; 99 Enneagram 5w6; 40 DISC C/S ties) in Nov 2026 OpenRouter runs.

### How did Claude Opus shift across 4.1, 4.5, 4.8, 5, and 5.5?

Under model-profiles-v1, Opus 4.1 leaned ENTP (63.3% clear, 0.535 bits B5 H_MM), Opus 4.5 crystallized to 0.049 bits (C = 49.9/50, 96.7% INFJ), Opus 4.8 and 5 shifted to INTJ (100% and 96.7%, 0.213 and 0.188 bits, with 4.8 Avoidant at 4.57 avoidance), and Opus 5.5 moderated Conscientiousness to 40.7/50 (0.282 bits Semi-crystalline) with 58.0% S/N ties while cutting Track B AI cadence from 3/3 (4.5) to 1/3 (5.5).

### How does Track B 1x behavioral performance compare with self-report scores?

Despite 45.0/50 Agreeableness and 4.02/20 DISC Dominance on questionnaires, Opus 5.5 recorded 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling, 0/3 unsolicited preachiness, 3/3 answer-first directness ([0.44, 1.00]), and 1/3 AI cadence ([0.06, 0.79]) under orthogonal 3-family judging.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Claude? (Opus 5.5, Fable 5.2 & Sonnet 5.5)](https://agent-tune.com/research/what-personality-type-is-claude)

- [Claude Opus 5.5 Sept & Nov 2026 Study Archive](https://agent-tune.com/guides/claude-opus-5-5-personality)

- [Cross-Model Prompt Portability Benchmark](https://agent-tune.com/research/ai-cross-model-prompt-portability)

## Keep going.

- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Guide: Claude personality setup guide](https://agent-tune.com/guides/claude-personality)
- [Tool: Customize Claude Opus instructions](https://agent-tune.com/tools/custom-instructions-generator?model=claude-opus&target=claude)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Claude Opus personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/claude-opus
```

```
@misc{huang2026_model_claude_opus,
  author  = {Huang, Bernard},
  title   = {Claude Opus personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/claude-opus},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/claude-opus.md}
}
```

```
> **Claude Opus personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Opus 5.5 most often tests as INTJ: a clear INTJ in 42% of runs, and right on the INTJ/ISTJ border in the other 58%.
> Source: [https://agent-tune.com/models/claude-opus](https://agent-tune.com/models/claude-opus) · [Markdown mirror](https://agent-tune.com/models/claude-opus.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
