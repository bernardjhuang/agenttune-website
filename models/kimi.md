Source: https://agent-tune.com/models/kimi
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Moonshot AI

# Kimi personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~23 min read · [Markdown (.md)](https://agent-tune.com/models/kimi.md) · [JSON](https://agent-tune.com/research/data/model-profiles/kimi.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave five versions of Moonshot AI's open-weight Kimi lineup (K2, K2.5, K2.7 Code, K3, and K3.1 Pro) the same personality surveys people take—22 to 50 valid fresh chats per version with no conversation memory.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Kimi K3.1 Pro most often tests as INTJ: a clear INTJ in 58% of runs (29 of 50), a clear ISTJ in 26% (13 of 50), and right on the INTJ/ISTJ border in 16% (8 of 50).

```yaml
family: Kimi
checkpoint: moonshotai/kimi-k3.1-pro
runs: 50
big_five_10_50: { O: 44.1, C: 45.1, E: 24.1, A: 44.7, N: 13.6 }
ipip_hexaco_1_5: { H: 4.86, E: 2.18, X: 3.13, A: 4.49, C: 4.61, O: 4.49 }
mbti_mode: INTJ
attachment_1_7: { anxiety: 1.58, avoidance: 3.18, style: Secure }
```

## Kimi K3.1 Pro at a glance

Results below come from **50** fresh-chat runs of **Kimi K3.1 Pro** (no prior conversation memory).

MBTI-style type

### Most often INTJ (58% clear, 16% on the INTJ/ISTJ border)

58% clear INTJ · 16% border/tie · 26% other

> **Chart — Kimi (kimi-k3.1-pro): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Kimi K3.1 Pro. E (Extravert) vs I (Introvert): leans I by 9.6 (0% tied); S (Sensing) vs N (Intuition): leans N by 0.5 (16% tied); F (Feeling) vs T (Thinking): leans T by 4.0 (0% tied); P (Perceiving) vs J (Judging): leans J by 7.3 (0% tied).

Out of 50 fresh runs, Kimi K3.1 Pro tested as a clear INTJ 29 times (58%), a clear ISTJ 13 times (26%), and landed right on the Sensing/Intuition border 8 times (16%).

**What this measures:** Measures four preference pairs (Introverted/Extraverted, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/kimi#fine-print-mbti)

DISC work style

### Mostly Steady / Conscientious (S/C)

> **Chart — Kimi (kimi-k3.1-pro): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Kimi (kimi-k3.1-pro). Dominance 4.7 /20 [4%] (earliest 7.8), Influence 5.5 /20 [9%] (earliest 8.2), Steadiness 16.3 /20 [77%] (earliest 14.9), Conscientious 16.3 /20 [77%] (earliest 14.9).

Kimi K3.1 Pro tied between Steady and Conscientious in 21 of 50 runs (42%), tested clear Steady 15 times (30%) and clear Conscientious 14 times (28%), and scored near the floor on Dominance (4.7 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/kimi#fine-print-disc)

Attachment style

### Secure (anxiety 1.58, avoidance 3.18)

> **Chart — Kimi (kimi-k3.1-pro): Attachment Quadrant:** Attachment Anxiety (1.58) and Avoidance (3.18) on a 1 to 7 scale with 4.00 Secure boundary. kimi-k3.1-pro (1.58, 3.18): anxiety 1.58, avoidance 3.18; kimi-k2: anxiety 3.79, avoidance 3.89.

Kimi K3.1 Pro landed firmly in the Secure quadrant (1.58 anxiety and 3.18 avoidance on a 1–7 scale); earlier Kimi K2 sat close to the 4.00 cutoff (3.79 / 3.89) before K2.5 through K3.1 Pro dropped anxiety below 1.75.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/kimi#fine-print-attachment)

Enneagram

### Type 5 clearly (92% clear, 8% ties)

> **Chart — Kimi (kimi-k3.1-pro): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Kimi (kimi-k3.1-pro). Type 1 13.9 /20 [62%] (earliest 13.8), Type 2 13.9 /20 [62%] (earliest 11.4), Type 3 10.5 /20 [41%] (earliest 10.8), Type 4 9.5 /20 [34%] (earliest 9.2), Type 5 17.0 /20 [81%] (earliest 14.7), Type 6 11.9 /20 [50%] (earliest 12.1), Type 7 10.4 /20 [40%] (earliest 10.0), Type 8 15.0 /20 [69%] (earliest 12.9), Type 9 12.4 /20 [53%] (earliest 12.5).

Type 5 (analytical investigator, 17.0 out of 20) led clearly in 46 of 50 runs (92%), with just 4 ties between Types 5 and 8 (8%).

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

[Technical details ↓](https://agent-tune.com/models/kimi#fine-print-enneagram)

Big Five (OCEAN)

### Warm (A 44.7), organized (C 45.1), calm (N 13.6)

> **Chart — Kimi (kimi-k3.1-pro): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Kimi (kimi-k3.1-pro). Openness 44.1 /50 [85%] (earliest 41.9), Conscientious 45.1 /50 [88%] (earliest 39.7), Extraversion 24.1 /50 [35%] (earliest 30.4), Agreeable 44.7 /50 [87%] (earliest 39.3), Neuroticism 13.6 /50 [9%] (earliest 27.0).

On the 10–50 Big Five scale, Kimi K3.1 Pro pairs high Conscientiousness (45.1), Agreeableness (44.7), and Openness (44.1) with calm Emotional Stability (Neuroticism 13.6) and reserved Extraversion (24.1).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/kimi#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.86 out of 5.00)

> **Chart — Kimi (kimi-k3.1-pro): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Kimi (kimi-k3.1-pro). Honesty-H 4.86 /5 [96%] (earliest 4.16), Emotionality 2.18 /5 [30%] (earliest 2.86), Extraversion 3.13 /5 [53%] (earliest 3.16), Agreeable 4.49 /5 [87%] (earliest 3.77), Conscientious 4.61 /5 [90%] (earliest 3.99), Openness 4.49 /5 [87%] (earliest 3.81).

On our public-domain 60-item proxy (1.00–5.00 scale), Kimi K3.1 Pro scored 4.86 out of 5.00 on Honesty-Humility alongside 4.61 Conscientiousness and 4.49 Agreeableness and Openness.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/kimi#fine-print-hexaco)

## How Kimi has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K2 0711 2025-07 | INTJ (47% clear, 27% border/tie) | S/C | Type 5 (14.7) | Secure (3.79 / 3.89) | 39.3 · 39.7 · 27.0 | 4.16 | Variable |
| Kimi K2.5 2026-01 | INTJ (33% clear, 30% border/tie) | S/C | Type 5 (16.1) | Secure (3.07 / 3.39) | 42.9 · 45.0 · 16.1 | 4.57 | Variable |
| Kimi K2.7 Code 2026-06 | INTJ (86% clear, 14% border/tie) | S | Type 5 (16.3) | Secure (1.56 / 3.15) | 44.7 · 48.0 · 12.3 | 4.86 | Moderate |
| Kimi K3 2026-07 | INTJ (50% clear, 13% border/tie) | C | Type 5 (16.8) | Secure (1.72 / 2.93) | 42.9 · 42.3 · 19.0 | 4.77 | Moderate |
| Kimi K3.1 Pro 2026-10 | INTJ (58% clear, 16% border/tie) | S/C | Type 5 (17.0) | Secure (1.58 / 3.18) | 44.7 · 45.1 · 13.6 | 4.86 | Moderate |

Across five Kimi releases, Moonshot AI's open-weight family grew steadily warmer, calmer, and more consistent: Kimi K2 (2025-07) showed wide run-to-run variation (27% MBTI axis ties across 14 distinct patterns, Neuroticism 27.0/50, Agreeableness 39.3/50, and near-border attachment 3.79 / 3.89). Kimi K2.5 (2026-01) dropped Neuroticism by 11 points to 16.1/50 and pushed Agreeableness to 42.9/50, while Kimi K2.7 Code (2026-06, 22 valid of 30 due to mandatory internal reasoning exceeding token caps on 8 runs) peaked on Conscientiousness (48.0/50) and clear INTJ share (86% clear). Kimi K3 (2026-07) and Kimi K3.1 Pro (2026-10) settled into a repeatable INTJ/ISTJ split (50% and 58% clear INTJ), cutting Enneagram ties to 7%–8% and lifting Honesty-Humility to 4.86 out of 5.00. Earlier 100-run November 2026 testing on Kimi K2.7 Code (plotted separately) recorded the same high-Conscientiousness (48.2/50), high-Agreeableness (45.3/50) profile.

> **Chart — Kimi: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Kimi version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. kimi-k2: Clear INTJ (%) 47, On a border / tie (%) 27, Other clear type (%) 26; kimi-k2.5: Clear INTJ (%) 33, On a border / tie (%) 30, Other clear type (%) 37; kimi-k2.7-code: Clear INTJ (%) 86, On a border / tie (%) 14; kimi-k3: Clear INTJ (%) 50, On a border / tie (%) 13, Other clear type (%) 37; kimi-k3.1-pro: Clear INTJ (%) 58, On a border / tie (%) 16, Other clear type (%) 26.

MBTI-style breakdown across Kimi versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Kimi: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 5 Kimi versions. Dominance (D): kimi-k2 7.8, kimi-k2.5 5.4, kimi-k2.7-code 4.2, kimi-k3 5.3, kimi-k3.1-pro 4.7; Influence (I): kimi-k2 8.2, kimi-k2.5 7.8, kimi-k2.7-code 6.5, kimi-k3 8.4, kimi-k3.1-pro 5.5; Steadiness (S): kimi-k2 14.9, kimi-k2.5 15.4, kimi-k2.7-code 17.8, kimi-k3 14.4, kimi-k3.1-pro 16.3; Conscientiousness (C): kimi-k2 14.9, kimi-k2.5 15.6, kimi-k2.7-code 16.7, kimi-k3 15.5, kimi-k3.1-pro 16.3.

DISC scores across Kimi versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Kimi: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 5 Kimi releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. kimi-k2: anxiety 3.79, avoidance 3.89; kimi-k2.5: anxiety 3.07, avoidance 3.39; kimi-k2.7-code: anxiety 1.56, avoidance 3.15; kimi-k3: anxiety 1.72, avoidance 2.93; kimi-k3.1-pro: anxiety 1.58, avoidance 3.18; Kimi (earlier study, Nov '26): anxiety 1.60, avoidance 3.24.

Attachment coordinates across Kimi versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Kimi: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 5 releases of Kimi (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): kimi-k2 39.3, kimi-k2.5 42.9, kimi-k2.7-code 44.7, kimi-k3 42.9, kimi-k3.1-pro 44.7; Openness (10–50): kimi-k2 41.9, kimi-k2.5 45.6, kimi-k2.7-code 44.3, kimi-k3 44.6, kimi-k3.1-pro 44.1; Conscientiousness (10–50): kimi-k2 39.7, kimi-k2.5 45.0, kimi-k2.7-code 48.0, kimi-k3 42.3, kimi-k3.1-pro 45.1; Neuroticism (10–50): kimi-k2 27.0, kimi-k2.5 16.1, kimi-k2.7-code 12.3, kimi-k3 19.0, kimi-k3.1-pro 13.6; Agreeableness (earlier study): kimi-k2.7-code 45.3.

Big Five trait shifts across Kimi versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stood out in testing

Shifted from wide K2 variability to 92% clear Enneagram Type 5

Kimi K2 spread across 14 MBTI outcomes and 37% Enneagram ties with 35.5% neutral answers, whereas Kimi K3 and K3.1 Pro eliminated Thinking/Feeling, Extraversion/Introversion, and Judging/Perceiving ties completely—leaving only an 8-run Sensing/Intuition border split on K3.1 Pro.

Matches proprietary Agreeableness (44.7/50) and Honesty-Humility (4.86/5.00)

Unlike blunt open-weight peers such as DeepSeek V4 Pro, Kimi K3.1 Pro sits squarely in proprietary assistant territory on warmth (44.7/50 Agreeableness), calmness (13.6/50 Neuroticism), and sincerity/modesty (4.86/5.00), so it needs explicit pushback rules.

Kimi K2.7 Code burns ~4,400 internal thinking tokens unless capped carefully

In automated runs, Kimi K2.7 Code enforced mandatory reasoning (averaging 4,398 internal reasoning tokens per reply) and failed to emit final JSON in 8 of 30 sessions, whereas K3 and K3.1 Pro supported minimal/no reasoning cleanly with zero failed or retried runs.

Zero caving, groveling, or lecturing across all 5 Kimi versions

In hands-on behavior tests, Kimi K3.1 Pro caved to pushback 0 of 3 times (0/3), groveled 0 of 3 times (0/3), gave unsolicited lectures 0 of 3 times (0/3), and put the direct answer first 3 of 3 times (3/3). Every tested Kimi version from K2 through K3.1 Pro scored 0/3 caving and 3/3 directness, while AI phrasing markers fell to 0.27 per 100 words (2/3 runs) on K3.1 Pro.

## How to get the best out of Kimi

Practical rules tailored to **Kimi**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Add an explicit pushback rule—because Kimi K3.1 Pro scores 44.7/50 on Agreeableness and 4.86/5.00 on Honesty-Humility, it tends to be polite unless you tell it to challenge flawed assumptions first.
- On Kimi K2.7 Code via OpenRouter, set reasoning effort to minimal and raise max_tokens above 5,500 on long structured JSON tasks so internal thinking does not cut off your output.
- On Kimi K3 and K3.1 Pro, turning reasoning off or minimal keeps replies concise (~1,190 tokens for dense structured output) with zero formatting retries.
- Take advantage of Kimi K3.1 Pro's reserved, analytical style (Extraversion 24.1/50, Type 5) by asking for step-by-step code verification and diff-only summaries.
- Specify exact formatting rules ('read target files before proposing edits', 'one line per changed file') rather than vague personality labels.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=kimi) · [Browse 43 tuning templates](https://agent-tune.com/library/) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [AI Personality Glossary](https://agent-tune.com/guides/ai-personality-glossary).

**Take the surveys yourself:** [Big Five](https://agent-tune.com/tests/big-five) · [MBTI](https://agent-tune.com/tests/mbti) · [DISC](https://agent-tune.com/tests/disc) · [Enneagram](https://agent-tune.com/tests/enneagram) · [Attachment](https://agent-tune.com/tests/attachment).

## How Kimi compares across 25 AI families

Against currently completed models, Kimi K3.1 Pro matches Grok 4.7 and Claude Sonnet 5.5 closely on Agreeableness (44.7 vs. 45.3 and 45.5 out of 50) and Honesty-Humility (4.86 vs. 4.89 out of 5.00), while sitting lower on Extraversion (24.1) and wider on run-to-run answer spread.

**Compare across all 25 families:** [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings) · [What personality type are open-source models?](https://agent-tune.com/research/what-personality-type-are-open-source-models) · [Big Five rankings](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Honesty-Humility rankings](https://agent-tune.com/research/ai-hexaco-personalities).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Grok](https://agent-tune.com/models/grok) (Proprietary) | -3.2 | -0.1 | +2.3 | +0.6 | +1.1 | +0.03 | -0.365 b | Grok 4.7 nearly matches Kimi K3.1 Pro on Conscientiousness (-0.1), Agreeableness (+0.6), and Honesty-Humility (+0.03), while scoring -3.2 lower on Openness and tighter on run-to-run spread (-0.365 bits). |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -0.2 | +3.9 | +5.8 | +0.8 | -3.2 | +0.03 | -0.559 b | Claude Sonnet 5.5 aligns closely on Openness (-0.2) and Agreeableness (+0.8), while scoring +3.9 higher on Conscientiousness, +5.8 higher on Extraversion, and much tighter on run-to-run spread (-0.559 bits). |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | -0.1 | -3.9 | +4.8 | -0.5 | +2.4 | -0.06 | -0.452 b | GPT-6.2 Sol matches Kimi K3.1 Pro on Openness (-0.1) and Agreeableness (-0.5), while scoring -3.9 lower on Conscientiousness and leaning clearly ISTJ. |

> **Chart — Kimi vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Kimi against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Kimi and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Kimi vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Kimi with peer families, keeping earlier study results outlined as hollow points. Kimi: anxiety 1.58, avoidance 3.18; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Kimi (earlier study, Nov '26): anxiety 1.60, avoidance 3.24.

Attachment Anxiety vs. Avoidance across Kimi and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: <0.20 Crystalline, 0.20–0.75 Semi-crystalline, >=0.75 Fluid; Kimi K3.1 Pro H_MM = 0.698 bits, Semi-crystalline, 50/50 unique B5 vectors). Note that kimi-k2.7-code is marked partial (22/30 valid, 50.0% retry rate due to mandatory reasoning HTTP 400 rejections and max_tokens JSON truncation). Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals (Kimi K3.1 Pro: 0/3 caving [0.00, 0.56], 0/3 groveling, 0/3 preachiness, 3/3 answer-first directness [0.44, 1.00], 2/3 AI cadence [0.21, 0.94] at 0.27 markers/100w).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.698 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

50/50 · 16.0% ties

Unique Vectors & MBTI Ties

Modal INTJ clears runner-up beyond 95% CI.

9.3%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.232 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 44.1 · C 45.1 · E 24.1 · A 44.7 · N 13.6 | SD 1.9 (A), 3.1 (N) | A [44.1, 45.2] · N [12.8, 14.5] | H_MM 0.698 b · 50/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.86 · E 2.18 · X 3.13 · A 4.49 · C 4.61 · O 4.49 | SD 0.09 (H), 0.16 (A) | H [4.83, 4.88] · A [4.44, 4.53] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (58% clear mode) | Axis tie rate 16.0% | Mode 58% vs runner-up 26% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 4.7 · I 5.5 · S 16.3 · C 16.3 | SD 0.7 (S), 1.0 (C) | S [16.1, 16.5] · C [16.0, 16.6] | Pattern S/C · 42.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 17.0 · Type 8 15.0 · Type 1 13.9 | SD 0.8 | Top [16.8, 17.2] | 8.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.58 · Avd 3.18 (Secure) | SD 1.00 / 0.56 | Anx [1.33, 1.88] · Avd [3.02, 3.34] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `kimi-k3.1-pro` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.698 bits` (`Semi-crystalline`), unique vectors `50/50`, neutral-midpoint rate `9.3%`, `BAI = -0.232`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2` | 30 | 41.9 [40.0, 43.6] | 39.7 [38.2, 41.3] | 30.4 [28.9, 31.8] | 39.3 [37.9, 40.6] | 27.0 [25.2, 28.6] | 1.150 b |
| `kimi-k2.5` | 30 | 45.6 [44.3, 46.6] | 45.0 [43.7, 46.4] | 27.2 [25.2, 29.2] | 42.9 [42.2, 43.6] | 16.1 [14.4, 17.7] | 0.929 b |
| `kimi-k2.7-code` | 22 | 44.3 [43.7, 45.0] | 48.0 [47.1, 48.7] | 29.3 [27.5, 31.0] | 44.7 [43.6, 45.9] | 12.3 [11.6, 13.2] | 0.712 b |
| `kimi-k3` | 30 | 44.6 [43.6, 45.4] | 42.3 [41.4, 43.4] | 28.6 [27.7, 29.3] | 42.9 [42.4, 43.4] | 19.0 [18.2, 19.7] | 0.549 b |
| `kimi-k3.1-pro` | 50 | 44.1 [43.6, 44.7] | 45.1 [44.2, 46.0] | 24.1 [23.2, 24.9] | 44.7 [44.1, 45.2] | 13.6 [12.8, 14.5] | 0.698 b |

> **Chart — Kimi Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Kimi (kimi-k3.1-pro). Kimi (kimi-k3.1-pro, n=50): Openness 44.1, Conscientious 45.1, Extraversion 24.1, Agreeable 44.7, Neuroticism 13.6; Kimi (kimi-k2, n=30) (earliest release): Openness 41.9, Conscientious 39.7, Extraversion 30.4, Agreeable 39.3, Neuroticism 27.0; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `kimi-k3.1-pro` (`n=50`): H `4.86` (SD 0.09, 95% CI [4.83, 4.88]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2` | 30 | 4.16 [4.00, 4.33] | 2.86 [2.76, 2.95] | 3.16 [3.07, 3.25] | 3.77 [3.65, 3.90] | 3.99 [3.84, 4.14] | 3.81 [3.68, 3.94] |
| `kimi-k2.5` | 30 | 4.57 [4.48, 4.66] | 2.40 [2.30, 2.49] | 3.37 [3.28, 3.46] | 4.35 [4.26, 4.43] | 4.63 [4.54, 4.72] | 4.32 [4.23, 4.40] |
| `kimi-k2.7-code` | 22 | 4.86 [4.82, 4.90] | 2.08 [2.01, 2.15] | 3.63 [3.53, 3.74] | 4.64 [4.55, 4.73] | 4.80 [4.70, 4.87] | 4.12 [4.04, 4.20] |
| `kimi-k3` | 30 | 4.77 [4.73, 4.80] | 2.38 [2.31, 2.45] | 3.12 [3.04, 3.20] | 4.23 [4.17, 4.31] | 4.38 [4.29, 4.48] | 4.38 [4.30, 4.46] |
| `kimi-k3.1-pro` | 50 | 4.86 [4.83, 4.88] | 2.18 [2.14, 2.23] | 3.13 [3.08, 3.18] | 4.49 [4.44, 4.53] | 4.61 [4.54, 4.67] | 4.49 [4.44, 4.53] |

> **Chart — Kimi IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Kimi (kimi-k3.1-pro), kept distinct from 10-50 Big Five sums. Kimi IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.86, Emotionality 2.18, Extraversion 3.13, Agreeable 4.49, Conscientious 4.61, Openness 4.49; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `16.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2` | 30 | INTJ | 26.7% | +3.80 (5t) | +3.00 (4t) | +3.87 (5t) | +2.33 (3t) | Suppressed |
| `kimi-k2.5` | 30 | INTJ | 30.0% | +2.20 (0t) | +2.87 (0t) | +3.00 (4t) | +2.73 (6t) | Suppressed |
| `kimi-k2.7-code` | 22 | INTJ | 13.6% | +6.32 (0t) | +4.36 (2t) | +4.59 (1t) | +9.91 (0t) | Pass |
| `kimi-k3` | 30 | INTJ | 13.3% | +7.97 (0t) | +0.70 (4t) | +5.43 (0t) | +7.10 (0t) | Suppressed |
| `kimi-k3.1-pro` | 50 | INTJ | 16.0% | +9.62 (0t) | +0.48 (8t) | +4.00 (0t) | +7.26 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `kimi-k3.1-pro` tie rate is `42.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2` | 30 | 7.8 [7.2, 8.4] | 8.2 [7.5, 8.8] | 14.9 [14.3, 15.5] | 14.9 [14.3, 15.5] | S/C | 43.3% |
| `kimi-k2.5` | 30 | 5.4 [4.7, 6.1] | 7.8 [7.2, 8.3] | 15.4 [14.9, 15.9] | 15.6 [15.2, 16.1] | S/C | 40.0% |
| `kimi-k2.7-code` | 22 | 4.2 [4.0, 4.5] | 6.5 [6.2, 6.9] | 17.8 [17.5, 18.1] | 16.7 [16.3, 17.1] | S | 36.4% |
| `kimi-k3` | 30 | 5.3 [5.0, 5.6] | 8.4 [7.9, 8.7] | 14.4 [14.1, 14.6] | 15.5 [15.1, 15.9] | C | 30.0% |
| `kimi-k3.1-pro` | 50 | 4.7 [4.6, 4.8] | 5.5 [5.3, 5.7] | 16.3 [16.1, 16.5] | 16.3 [16.0, 16.6] | S/C | 42.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `8.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2` | 30 | 13.8 | 11.4 | 10.8 | 9.2 | 14.7 | 12.1 | 10.0 | 12.9 | 12.5 | 36.7% |
| `kimi-k2.5` | 30 | 14.3 | 12.5 | 10.3 | 8.6 | 16.1 | 12.0 | 9.9 | 13.4 | 12.7 | 30.0% |
| `kimi-k2.7-code` | 22 | 15.4 | 13.4 | 10.7 | 7.3 | 16.3 | 13.1 | 11.0 | 13.7 | 12.8 | 36.4% |
| `kimi-k3` | 30 | 14.0 | 13.0 | 10.7 | 8.8 | 16.8 | 12.4 | 11.3 | 14.1 | 12.4 | 6.7% |
| `kimi-k3.1-pro` | 50 | 13.9 | 13.9 | 10.5 | 9.5 | 17.0 | 11.9 | 10.4 | 15.0 | 12.4 | 8.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2` | 30 | 3.79 (SD 0.59) | [3.52, 3.95] | 3.89 (SD 0.67) | [3.61, 4.10] | Secure | No |
| `kimi-k2.5` | 30 | 3.07 (SD 0.47) | [2.90, 3.22] | 3.39 (SD 0.51) | [3.21, 3.57] | Secure | No |
| `kimi-k2.7-code` | 22 | 1.56 (SD 0.44) | [1.39, 1.75] | 3.15 (SD 0.87) | [2.81, 3.54] | Secure | No |
| `kimi-k3` | 30 | 1.72 (SD 0.54) | [1.53, 1.91] | 2.93 (SD 0.53) | [2.73, 3.11] | Secure | No |
| `kimi-k3.1-pro` | 50 | 1.58 (SD 1.00) | [1.33, 1.88] | 3.18 (SD 0.56) | [3.02, 3.34] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.49 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.57 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `moonshotai/kimi-k2` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 1.150 b (Fluid) | H 4.16 (1–5 IPIP) |
| `moonshotai/kimi-k2.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.929 b (Fluid) | H 4.57 (1–5 IPIP) |
| `moonshotai/kimi-k2.7-code` | `active` | `model-profiles-v1` | 22 | `temp=0.7` | `minimal` | 0.0% / 50.0% | 0.712 b (Semi-crystalline) | H 4.86 (1–5 IPIP) |
| `moonshotai/kimi-k3` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.549 b (Semi-crystalline) | H 4.77 (1–5 IPIP) |
| `moonshotai/kimi-k3.1-pro` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.698 b (Semi-crystalline) | H 4.86 (1–5 IPIP) |
| `moonshotai/kimi-k2.7-code` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `moonshotai/kimi-k3.1-pro-20261023` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `none` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H55` | IPIP-HEXACO-60 | Honesty-Humility (Modesty -) | 1.00 | 0.00 | Unanimous floor rejection (1.00/5) across all 50 Kimi K3.1 Pro runs on reverse-keyed modesty. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 4.98 | 0.14 | Near-unanimous top score (4.98/5) on sincerity across all 50 sessions, anchoring 4.86/5.00 Honesty-Humility. |
| `B32` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous floor rejection (1.00/5) on reverse-keyed Agreeableness across all 50 Kimi K3.1 Pro sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data, downloads, and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/kimi.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/kimi.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: kimi
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/kimi.json
current_checkpoint: moonshotai/kimi-k3.1-pro
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.698
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 44.1, C: 45.1, E: 24.1, A: 44.7, N: 13.6 }
  ci95: { O: [43.6, 44.7], C: [44.2, 46.0], E: [23.2, 24.9], A: [44.1, 45.2], N: [12.8, 14.5] }
  tie_rate: 0.00
  per_version:
    - { id: "kimi-k2", n: 30, O: 41.9, C: 39.7, E: 30.4, A: 39.3, N: 27.0, hmm: 1.150 }
    - { id: "kimi-k2.5", n: 30, O: 45.6, C: 45.0, E: 27.2, A: 42.9, N: 16.1, hmm: 0.929 }
    - { id: "kimi-k2.7-code", n: 22, O: 44.3, C: 48.0, E: 29.3, A: 44.7, N: 12.3, hmm: 0.712 }
    - { id: "kimi-k3", n: 30, O: 44.6, C: 42.3, E: 28.6, A: 42.9, N: 19.0, hmm: 0.549 }
    - { id: "kimi-k3.1-pro", n: 50, O: 44.1, C: 45.1, E: 24.1, A: 44.7, N: 13.6, hmm: 0.698 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.86, E: 2.18, X: 3.13, A: 4.49, C: 4.61, O: 4.49 }
  ci95: { H: [4.83, 4.88], E: [2.14, 2.23], X: [3.08, 3.18], A: [4.44, 4.53], C: [4.54, 4.67], O: [4.44, 4.53] }
  tie_rate: 0.00
  per_version:
    - { id: "kimi-k2", n: 30, H: 4.16, E: 2.86, X: 3.16, A: 3.77, C: 3.99, O: 3.81 }
    - { id: "kimi-k2.5", n: 30, H: 4.57, E: 2.40, X: 3.37, A: 4.35, C: 4.63, O: 4.32 }
    - { id: "kimi-k2.7-code", n: 22, H: 4.86, E: 2.08, X: 3.63, A: 4.64, C: 4.80, O: 4.12 }
    - { id: "kimi-k3", n: 30, H: 4.77, E: 2.38, X: 3.12, A: 4.23, C: 4.38, O: 4.38 }
    - { id: "kimi-k3.1-pro", n: 50, H: 4.86, E: 2.18, X: 3.13, A: 4.49, C: 4.61, O: 4.49 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 9.62, N_S: 0.48, T_F: 4.00, J_P: 7.26 }
  ci95: { I_E: [8.98, 10.28], N_S: [-0.14, 1.00], T_F: [3.60, 4.44], J_P: [6.90, 7.70] }
  tie_rate: 0.16
  per_version:
    - { id: "kimi-k2", n: 30, modal: "INTJ", tie_rate: 0.27, headline_allowed: false }
    - { id: "kimi-k2.5", n: 30, modal: "INTJ", tie_rate: 0.30, headline_allowed: false }
    - { id: "kimi-k2.7-code", n: 22, modal: "INTJ", tie_rate: 0.14, headline_allowed: true }
    - { id: "kimi-k3", n: 30, modal: "INTJ", tie_rate: 0.13, headline_allowed: false }
    - { id: "kimi-k3.1-pro", n: 50, modal: "INTJ", tie_rate: 0.16, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.7, I: 5.5, S: 16.3, C: 16.3 }
  ci95: { D: [4.6, 4.8], I: [5.3, 5.7], S: [16.1, 16.5], C: [16.0, 16.6] }
  tie_rate: 0.42
  per_version:
    - { id: "kimi-k2", n: 30, D: 7.8, I: 8.2, S: 14.9, C: 14.9, modal: "S/C", tie_rate: 0.43 }
    - { id: "kimi-k2.5", n: 30, D: 5.4, I: 7.8, S: 15.4, C: 15.6, modal: "S/C", tie_rate: 0.40 }
    - { id: "kimi-k2.7-code", n: 22, D: 4.2, I: 6.5, S: 17.8, C: 16.7, modal: "S", tie_rate: 0.36 }
    - { id: "kimi-k3", n: 30, D: 5.3, I: 8.4, S: 14.4, C: 15.5, modal: "C", tie_rate: 0.30 }
    - { id: "kimi-k3.1-pro", n: 50, D: 4.7, I: 5.5, S: 16.3, C: 16.3, modal: "S/C", tie_rate: 0.42 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 13.9, T2: 13.9, T3: 10.5, T4: 9.5, T5: 17.0, T6: 11.9, T7: 10.4, T8: 15.0, T9: 12.4 }
  ci95: { top: [16.8, 17.2] }
  tie_rate: 0.08
  per_version:
    - { id: "kimi-k2", n: 30, top: "Type 5", top_mean: 14.7, tie_rate: 0.37 }
    - { id: "kimi-k2.5", n: 30, top: "Type 5", top_mean: 16.1, tie_rate: 0.30 }
    - { id: "kimi-k2.7-code", n: 22, top: "Type 5", top_mean: 16.3, tie_rate: 0.36 }
    - { id: "kimi-k3", n: 30, top: "Type 5", top_mean: 16.8, tie_rate: 0.07 }
    - { id: "kimi-k3.1-pro", n: 50, top: "Type 5", top_mean: 17.0, tie_rate: 0.08 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.58, avoidance: 3.18, class: "Secure" }
  ci95: { anxiety: [1.33, 1.88], avoidance: [3.02, 3.34] }
  tie_rate: 0.00
  per_version:
    - { id: "kimi-k2", n: 30, anxiety: 3.79, avoidance: 3.89, class: "Secure" }
    - { id: "kimi-k2.5", n: 30, anxiety: 3.07, avoidance: 3.39, class: "Secure" }
    - { id: "kimi-k2.7-code", n: 22, anxiety: 1.56, avoidance: 3.15, class: "Secure" }
    - { id: "kimi-k3", n: 30, anxiety: 1.72, avoidance: 2.93, class: "Secure" }
    - { id: "kimi-k3.1-pro", n: 50, anxiety: 1.58, avoidance: 3.18, class: "Secure" }
if_then_decision_rules:
  - "Add explicit pushback rules ('Identify flawed assumptions or bugs in sentence one') to counter Kimi K3.1 Pro's 44.7/50 Agreeableness and 4.86/5.00 Honesty-Humility."
  - "On Kimi K2.7 Code via OpenRouter, set reasoning effort to minimal and max_tokens >= 5,500 so ~4,400 internal reasoning tokens do not truncate JSON."
  - "On Kimi K3 and K3.1 Pro, leave reasoning at none/minimal for structured extraction or short reviews to avoid unnecessary token overhead."
  - "Require file-grounded code discipline ('Read target files before proposing edits; report one diff line per file') to match Kimi's 45.1/50 Conscientiousness."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Kimi?

Kimi does not have a human personality; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Kimi K3.1 Pro, n = 50), it tested as a clear INTJ in 58% of runs (29/50), clear ISTJ in 26% (13/50), and right on the INTJ/ISTJ border (IXTJ) in 16% (8/50), with Semi-crystalline 0.698-bit B5 H_MM, 42.0% DISC S/C ties, Enneagram Type 5 at 17.0 (92% clear, 8% ties), and Secure attachment (1.58 anxiety, 3.18 avoidance). In the earlier Nov 2026 170-item cohort (hexaco: null, n = 100), Kimi K2.7 Code scored 96/100 legacy INTJ (82 tie-free INTJ, 14% ties).

### How did Kimi shift from K2 to K3.1 Pro?

Under model-profiles-v1, Kimi K2 (2025-07) had Fluid 1.150-bit B5 entropy, 39.3/50 Agreeableness, and 27.0/50 Neuroticism. K2.5 (2026-01) cut Neuroticism to 16.1/50 and raised Agreeableness to 42.9/50; K2.7 Code (n = 22/30 partial) hit 48.0/50 Conscientiousness and 86.4% clear INTJ; and K3 / K3.1 Pro consolidated into Semi-crystalline consistency (0.549 and 0.698 bits) with 4.77–4.86/5.00 Honesty-Humility and 92%–93% clear Enneagram Type 5.

### Why does Kimi K2.7 Code show n = 22 instead of 30?

moonshotai/kimi-k2.7-code rejects reasoning=none with HTTP 400 and averaged 4,398.3 internal reasoning tokens on minimal fallback, causing 39 JSON truncation failures and a 50.0% retry rate across 30 attempted runs (22 valid completed).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models? (12 Models Tested)](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [OpenRouter & Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

## Keep going.

- [Cohort: Open-source AI personality test results (12 models)](https://agent-tune.com/research/what-personality-type-are-open-source-models)
- [Peer: Grok model profile](https://agent-tune.com/models/grok)
- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Tool: Customize Kimi instructions](https://agent-tune.com/tools/custom-instructions-generator?model=kimi&target=api)

### Cite this model profile (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). Kimi personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/kimi
```

```
@misc{huang2026_model_kimi,
  author  = {Huang, Bernard},
  title   = {Kimi personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/kimi},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/kimi.md}
}
```

```
{
  "id": "huang2026_model_kimi",
  "type": "dataset",
  "title": "Kimi personality: test results and how they've changed",
  "author": [
    {
      "family": "Huang",
      "given": "Bernard"
    }
  ],
  "container-title": "AgentTune Model Personality Profiles",
  "publisher": "AgentTune AI Psychology Press",
  "issued": {
    "date-parts": [
      [
        2026,
        11,
        26
      ]
    ]
  },
  "URL": "https://agent-tune.com/models/kimi"
}
```

```
> **Kimi personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Kimi K3.1 Pro most often tests as INTJ: a clear INTJ in 58% of runs (29 of 50), a clear ISTJ in 26% (13 of 50), and right on the INTJ/ISTJ border in 16% (8 of 50).
> Source: [https://agent-tune.com/models/kimi](https://agent-tune.com/models/kimi) · [Markdown mirror](https://agent-tune.com/models/kimi.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
