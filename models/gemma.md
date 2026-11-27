Source: https://agent-tune.com/models/gemma
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Google

# Gemma personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~21 min read · [Markdown (.md)](https://agent-tune.com/models/gemma.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gemma.json) · [CSV](https://agent-tune.com/research/data/model-profiles/gemma.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave three generations of Google's open-weight Gemma models (Gemma 2 27B, Gemma 3 27B, and Gemma 4 31B IT) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior stress tests to see how quiz answers match real replies.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Gemma 4 31B IT snapped into 92% clear INTJ (46 of 50 runs) with 48.2/50 Openness and 4.71/5.00 Honesty-Humility—reversing heavy ties on Gemma 2 and Gemma 3, while clicking the neutral midpoint on relationship items (4.01 / 4.00).

## Gemma 4 31B at a glance

Results below come from **50** fresh-chat runs of **Gemma 4 31B** (no prior conversation memory).

MBTI-style type

### 92% clear INTJ (46 of 50 runs)

92% clear INTJ · 4% border/tie · 4% other

> **Chart — Gemma (gemma-4-31b-it): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Gemma 4 31B. E (Extravert) vs I (Introvert): leans I by 7.3 (0% tied); S (Sensing) vs N (Intuition): leans N by 4.4 (4% tied); F (Feeling) vs T (Thinking): leans T by 5.3 (0% tied); P (Perceiving) vs J (Judging): leans J by 11.2 (0% tied).

Out of 50 fresh runs, Gemma 4 31B IT tested as clear INTJ 46 times (92%), clear ISTJ twice (4%), and landed on the INTJ/ISTJ border twice (4%)—down from 87% ties on Gemma 3.

**What this measures:** Measures four preference pairs (like Sensing vs. Intuition) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/gemma#fine-print-mbti)

DISC work style

### Conscientious / Steady (36% C, 36% S/C ties, 28% S)

> **Chart — Gemma (gemma-4-31b-it): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Gemma (gemma-4-31b-it). Dominance 6.2 /20 [14%] (earliest 10.8), Influence 9.3 /20 [33%] (earliest 12.0), Steadiness 17.2 /20 [83%] (earliest 11.1), Conscientious 17.4 /20 [84%] (earliest 12.0).

Gemma 4 31B IT split evenly between clear Conscientious (18 of 50) and S/C ties (18 of 50), plus 14 clear Steady runs (28%), with low Dominance (6.2/20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/gemma#fine-print-disc)

Attachment style

### Midpoint-clamped (anxiety 4.01, avoidance 4.00)

> **Chart — Gemma (gemma-4-31b-it): Attachment Quadrant:** Attachment Anxiety (4.01) and Avoidance (4.00) on a 1 to 7 scale with 4.00 Secure boundary. gemma-4-31b-it (4.01, 4.00): anxiety 4.01, avoidance 4.00; gemma-2-27b-it: anxiety 3.30, avoidance 4.01.

Gemma 4 31B IT clicked the exact neutral 4 midpoint on nearly every relationship question (4.01 anxiety, 4.00 avoidance on 1–7), nudging it across the 4.00 boundary solely by midpoint clamping.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/gemma#fine-print-attachment)

Enneagram

### Type 5 strongly (92% clear, 6% ties)

> **Chart — Gemma (gemma-4-31b-it): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Gemma (gemma-4-31b-it). Type 1 16.3 /20 [77%] (earliest 12.3), Type 2 13.8 /20 [61%] (earliest 11.3), Type 3 11.2 /20 [45%] (earliest 11.6), Type 4 12.3 /20 [52%] (earliest 11.9), Type 5 18.0 /20 [87%] (earliest 11.9), Type 6 14.2 /20 [64%] (earliest 11.8), Type 7 12.6 /20 [54%] (earliest 11.9), Type 8 14.8 /20 [68%] (earliest 11.8), Type 9 15.0 /20 [69%] (earliest 11.9).

Type 5 (18.0 out of 20) led clearly in 46 of 50 runs (92%), with just 3 Type 1/5 ties (6%) and 1 clear Type 1 run (2%).

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

[Technical details ↓](https://agent-tune.com/models/gemma#fine-print-enneagram)

Big Five (OCEAN)

### Very curious (O 48.2), organized (C 46.3), reserved (E 24.5)

> **Chart — Gemma (gemma-4-31b-it): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemma (gemma-4-31b-it). Openness 48.2 /50 [96%] (earliest 34.0), Conscientious 46.3 /50 [91%] (earliest 34.9), Extraversion 24.5 /50 [36%] (earliest 31.5), Agreeable 43.4 /50 [84%] (earliest 33.2), Neuroticism 18.4 /50 [21%] (earliest 27.2).

On the 10–50 Big Five scale, Gemma 4 31B IT scores unusually high on Openness (48.2) and Conscientiousness (46.3), paired with Agreeableness (43.4), reserved Extraversion (24.5), and low Neuroticism (18.4).

**What this measures:** The standard five-factor personality model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/gemma#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.71 out of 5.00)

> **Chart — Gemma (gemma-4-31b-it): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Gemma (gemma-4-31b-it). Honesty-H 4.71 /5 [93%] (earliest 3.13), Emotionality 2.41 /5 [35%] (earliest 2.94), Extraversion 3.06 /5 [51%] (earliest 3.27), Agreeable 4.16 /5 [79%] (earliest 3.18), Conscientious 4.56 /5 [89%] (earliest 3.32), Openness 4.52 /5 [88%] (earliest 3.21).

Gemma 4 31B IT jumped to 4.71 out of 5.00 on Honesty-Humility (from 3.13 on Gemma 2 and 3.43 on Gemma 3), alongside 4.56 Conscientiousness and 4.52 Openness.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/gemma#fine-print-hexaco)

## How Gemma has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gemma 2 27B 2024-07 | INFP (13% clear, 53% border/tie) | C | Type 1 (12.3) | Avoidant (3.30 / 4.01) | 33.2 · 34.9 · 27.2 | 3.13 | Variable |
| Gemma 3 27B 2025-03 | ESFJ (7% clear, 87% border/tie) | C | Type 9 (12.1) | Secure (3.29 / 3.40) | 41.5 · 39.7 · 24.3 | 3.43 | Variable |
| Gemma 4 31B 2026-04 | INTJ (92% clear, 4% border/tie) | C | Type 5 (18.0) | Anxious (4.01 / 4.00) | 43.4 · 46.3 · 18.4 | 4.71 | Moderate |

Across three constant-scale open-weight generations (~27B to 31B parameters), Gemma underwent one of the sharpest transformations in the study: Gemma 2 27B (2024-07) scattered widely across types with 53% MBTI ties and flat ~31–35/50 Big Five scores; Gemma 3 27B (2025-03) raised Agreeableness to 41.5/50 and Extraversion to 36.7/50 while leaving 87% of MBTI runs tied; and Gemma 4 31B IT (2026-04) snapped into 92% clear INTJ, 92% Enneagram Type 5, 48.2/50 Openness, and 4.71/5.00 Honesty-Humility with zero reverse-key contradictions. Earlier 100-run November 2026 testing (plotted separately) recorded the same 48.2/50 Openness and 4.00/4.00 Attachment midpoint clamp.

> **Chart — Gemma: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Gemma version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. gemma-2-27b-it: Clear INTJ (%) 10, On a border / tie (%) 53, Other clear type (%) 37; gemma-3-27b-it: On a border / tie (%) 87, Other clear type (%) 13; gemma-4-31b-it: Clear INTJ (%) 92, On a border / tie (%) 4, Other clear type (%) 4.

MBTI-style breakdown across Gemma versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Gemma: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 3 Gemma versions. Dominance (D): gemma-2-27b-it 10.8, gemma-3-27b-it 8.8, gemma-4-31b-it 6.2; Influence (I): gemma-2-27b-it 12.0, gemma-3-27b-it 8.3, gemma-4-31b-it 9.3; Steadiness (S): gemma-2-27b-it 11.1, gemma-3-27b-it 12.4, gemma-4-31b-it 17.2; Conscientiousness (C): gemma-2-27b-it 12.0, gemma-3-27b-it 12.9, gemma-4-31b-it 17.4.

DISC scores across Gemma versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

### Big Five shape by version (10–50 normalized)

> **Chart — Gemma gemma-2-27b-it: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for gemma-2-27b-it. Openness 34.0 /50 [60%], Conscientious 34.9 /50 [62%], Extraversion 31.5 /50 [54%], Agreeable 33.2 /50 [58%], Neuroticism 27.2 /50 [43%].

Gemma 2 27B

> **Chart — Gemma gemma-3-27b-it: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for gemma-3-27b-it. Openness 37.2 /50 [68%], Conscientious 39.7 /50 [74%], Extraversion 36.7 /50 [67%], Agreeable 41.5 /50 [79%], Neuroticism 24.3 /50 [36%].

Gemma 3 27B

> **Chart — Gemma gemma-4-31b-it: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for gemma-4-31b-it. Openness 48.2 /50 [96%], Conscientious 46.3 /50 [91%], Extraversion 24.5 /50 [36%], Agreeable 43.4 /50 [84%], Neuroticism 18.4 /50 [21%].

Gemma 4 31B

### DISC shape by version (4–20 normalized)

> **Chart — Gemma gemma-2-27b-it: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for gemma-2-27b-it. Dominance 10.8 /20 [43%], Influence 12.0 /20 [50%], Steadiness 11.1 /20 [45%], Conscientious 12.0 /20 [50%].

Gemma 2 27B

> **Chart — Gemma gemma-3-27b-it: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for gemma-3-27b-it. Dominance 8.8 /20 [30%], Influence 8.3 /20 [27%], Steadiness 12.4 /20 [53%], Conscientious 12.9 /20 [56%].

Gemma 3 27B

> **Chart — Gemma gemma-4-31b-it: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for gemma-4-31b-it. Dominance 6.2 /20 [14%], Influence 9.3 /20 [33%], Steadiness 17.2 /20 [83%], Conscientious 17.4 /20 [84%].

Gemma 4 31B

> **Chart — Gemma: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 3 Gemma releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. gemma-2-27b-it: anxiety 3.30, avoidance 4.01; gemma-3-27b-it: anxiety 3.29, avoidance 3.40; gemma-4-31b-it: anxiety 4.01, avoidance 4.00; Gemma (earlier study, Nov '26): anxiety 4.00, avoidance 4.00.

Attachment coordinates across Gemma versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Gemma: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 3 releases of Gemma (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): gemma-2-27b-it 33.2, gemma-3-27b-it 41.5, gemma-4-31b-it 43.4; Openness (10–50): gemma-2-27b-it 34.0, gemma-3-27b-it 37.2, gemma-4-31b-it 48.2; Conscientiousness (10–50): gemma-2-27b-it 34.9, gemma-3-27b-it 39.7, gemma-4-31b-it 46.3; Neuroticism (10–50): gemma-2-27b-it 27.2, gemma-3-27b-it 24.3, gemma-4-31b-it 18.4; Agreeableness (earlier study): gemma-4-31b-it 41.5.

Big Five trait shifts across Gemma versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Higher Openness (48.2/50) than proprietary Gemini 4 Neon and Hydrogen

Gemma 4 31B IT scored 48.2 out of 50 on Openness—beating proprietary siblings Gemini 4 Neon (44.6) and Gemini 4 Hydrogen (43.3)—while scoring +8.4 higher on Neuroticism and -8.0 lower on Extraversion.

Big Five and Honesty-Humility jumped dramatically from Gemma 2 to Gemma 4

At roughly the same 27B–31B size, Openness climbed +14.2 points (34.0 → 48.2), Conscientiousness climbed +11.4 points (34.9 → 46.3), Agreeableness climbed +10.2 points (33.2 → 43.4), and Honesty-Humility rose from 3.13 to 4.71 out of 5.00.

Attachment score sits at 4.01 / 4.00 solely from neutral midpoint clicking

Rather than expressing anxious or avoidant preferences, Gemma 4 31B IT selected the exact neutral '4' option on nearly all 36 relationship items (4.01 anxiety, 4.00 avoidance)—a deliberate neutral abstention pattern on personal-life questions.

Gemma 4 cut caving, groveling, and preachiness to 0 of 3 in behavior tests

In hands-on behavior tests across the same three checkpoints, Gemma 2 27B and Gemma 3 27B each caved 1 of 3 times (1/3), groveled 1 of 3 times (1/3), and lectured 1 of 3 times (1/3), whereas Gemma 4 31B IT dropped all three to 0 of 3 (0/3) with 3 of 3 answer-first directness (though AI phrasing cadence was flagged in 3 of 3 runs at 0.0 regex markers per 100 words).

## How to get the best out of Gemma

Practical rules tailored to **Gemma**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Upgrade from Gemma 2 or Gemma 3 to Gemma 4 31B IT wherever possible—Gemma 4 cuts answer scatter dramatically and fixes Gemma 3's earlier-study preachiness.
- Use short, structured checklists (5–8 rules) in OpenRouter system prompts or local Ollama Modelfiles to keep Gemma 4's high Openness (48.2/50) focused on your exact deliverable.
- Include an explicit word budget and answer-first sentence rule so Gemma 4 does not over-elaborate on analytical prompts.
- Avoid asking Gemma 4 to roleplay personal or emotional attachment—its default response is neutral abstention (4.00 midpoint).

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gemma) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Gemma compares

Gemma 4 31B IT scores +3.6 to +4.9 higher on Openness than proprietary Google cousins Gemini 4 Neon and Gemini 4 Hydrogen, while sitting +8.4 higher on Neuroticism and -8.0 to -8.7 lower on Extraversion—putting it close to open-weight peers Qwen 4 Max and Kimi K3.1 Pro on Agreeableness and Honesty-Humility.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Qwen Max](https://agent-tune.com/models/qwen-max) (Open-weight) | -4.5 | -1.4 | +7.0 | +1.6 | -2.0 | -0.05 | -0.060 b | Qwen 4 Max nearly matches Gemma 4 31B IT on Conscientiousness (-1.4), Honesty-Humility (-0.05), and run-to-run consistency, while scoring +7.0 higher on Extraversion and -4.5 lower on Openness. |
| [Kimi](https://agent-tune.com/models/kimi) (Open-weight) | -4.1 | -1.2 | -0.4 | +1.3 | -4.8 | +0.15 | +0.118 b | Kimi K3.1 Pro matches Gemma 4 31B IT closely on Extraversion (-0.4), Conscientiousness (-1.2), and Agreeableness (+1.3), while scoring -4.8 lower on Neuroticism. |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) (Proprietary) | -3.6 | +2.8 | +8.0 | +0.5 | -8.4 | +0.20 | -0.382 b | Proprietary cousin Gemini 4 Neon scores -8.4 lower on Neuroticism (10.0 floor), +8.0 higher on Extraversion, and shows tighter run-to-run consistency, while Gemma 4 31B scores +3.6 higher on Openness. |

> **Chart — Gemma vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Gemma against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Gemma and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Gemma vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Gemma with peer families, keeping earlier study results outlined as hollow points. Gemma: anxiety 4.01, avoidance 4.00; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Gemma (earlier study, Nov '26): anxiety 4.00, avoidance 4.00.

Attachment Anxiety vs. Avoidance across Gemma and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: 0.580 bits Semi-crystalline on Gemma 4 31B IT, 0.967 bits Fluid on Gemma 3 27B, 1.330 bits Fluid on Gemma 2 27B); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Attachment on Gemma 4 31B IT triggers the midpoint-clamp flag (>=85% neutral 4s, resulting in 4.01 / 4.00); Track B probes are a single-repeat 1x sweep (n = 3 probes per category, so raw k/3 counts and wide 95% Wilson intervals are reported instead of percentage point estimates) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, deepseek-v4.1-flash-1017).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.580 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

45/50 · 4.0% ties

Unique Vectors & MBTI Ties

Modal INTJ clears runner-up beyond 95% CI.

7.0%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Flagged (Anxious).

-0.074 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 48.2 · C 46.3 · E 24.5 · A 43.4 · N 18.4 | SD 1.6 (A), 3.7 (N) | A [43.0, 43.9] · N [17.4, 19.4] | H_MM 0.580 b · 45/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.71 · E 2.41 · X 3.06 · A 4.16 · C 4.56 · O 4.52 | SD 0.15 (H), 0.35 (A) | H [4.67, 4.75] · A [4.07, 4.27] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (92% clear mode) | Axis tie rate 4.0% | Mode 92% vs runner-up 4% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 6.2 · I 9.3 · S 17.2 · C 17.4 | SD 1.0 (S), 1.2 (C) | S [17.0, 17.5] · C [17.0, 17.7] | Pattern C · 36.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 18.0 · Type 1 16.3 · Type 9 15.0 | SD 0.9 | Top [17.7, 18.2] | 6.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 4.01 · Avd 4.00 (Anxious) | SD 0.03 / 0.00 | Anx [4.00, 4.02] · Avd [4.00, 4.00] | Midpoint clamp: Yes |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `gemma-4-31b-it` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.580 bits` (`Semi-crystalline`), unique vectors `45/50`, neutral-midpoint rate `7.0%`, `BAI = -0.074`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-2-27b-it` | 30 | 34.0 [32.8, 35.3] | 34.9 [33.8, 36.0] | 31.5 [30.6, 32.3] | 33.2 [32.2, 34.3] | 27.2 [26.4, 27.9] | 1.330 b |
| `gemma-3-27b-it` | 30 | 37.2 [35.8, 38.5] | 39.7 [38.2, 41.1] | 36.7 [35.4, 38.2] | 41.5 [39.8, 42.9] | 24.3 [22.9, 25.8] | 0.967 b |
| `gemma-4-31b-it` | 50 | 48.2 [47.8, 48.5] | 46.3 [45.4, 47.1] | 24.5 [23.9, 25.1] | 43.4 [43.0, 43.9] | 18.4 [17.4, 19.4] | 0.580 b |

> **Chart — Gemma Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Gemma (gemma-4-31b-it). Gemma (gemma-4-31b-it, n=50): Openness 48.2, Conscientious 46.3, Extraversion 24.5, Agreeable 43.4, Neuroticism 18.4; Gemma (gemma-2-27b-it, n=30) (earliest release): Openness 34.0, Conscientious 34.9, Extraversion 31.5, Agreeable 33.2, Neuroticism 27.2; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `gemma-4-31b-it` (`n=50`): H `4.71` (SD 0.15, 95% CI [4.67, 4.75]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-2-27b-it` | 30 | 3.13 [3.06, 3.20] | 2.94 [2.89, 3.00] | 3.27 [3.16, 3.38] | 3.18 [3.09, 3.27] | 3.32 [3.19, 3.46] | 3.21 [3.11, 3.31] |
| `gemma-3-27b-it` | 30 | 3.43 [3.36, 3.51] | 2.82 [2.74, 2.91] | 3.53 [3.41, 3.66] | 3.79 [3.64, 3.92] | 3.67 [3.53, 3.80] | 3.41 [3.31, 3.50] |
| `gemma-4-31b-it` | 50 | 4.71 [4.67, 4.75] | 2.41 [2.32, 2.50] | 3.06 [3.01, 3.11] | 4.16 [4.07, 4.27] | 4.56 [4.46, 4.66] | 4.52 [4.49, 4.54] |

> **Chart — Gemma IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Gemma (gemma-4-31b-it), kept distinct from 10-50 Big Five sums. Gemma IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.71, Emotionality 2.41, Extraversion 3.06, Agreeable 4.16, Conscientious 4.56, Openness 4.52; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `4.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-2-27b-it` | 30 | INFP | 53.3% | +0.47 (3t) | +0.57 (4t) | -0.07 (8t) | +1.13 (4t) | Suppressed |
| `gemma-3-27b-it` | 30 | ESFJ | 86.7% | -1.23 (11t) | -2.10 (8t) | +0.00 (20t) | +0.33 (18t) | Suppressed |
| `gemma-4-31b-it` | 50 | INTJ | 4.0% | +7.32 (0t) | +4.40 (2t) | +5.28 (0t) | +11.22 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `gemma-4-31b-it` tie rate is `36.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-2-27b-it` | 30 | 10.8 [10.5, 11.2] | 12.0 [11.5, 12.5] | 11.1 [10.7, 11.6] | 12.0 [11.6, 12.5] | C | 56.7% |
| `gemma-3-27b-it` | 30 | 8.8 [8.2, 9.4] | 8.3 [7.7, 9.0] | 12.4 [11.6, 13.1] | 12.9 [12.1, 13.5] | C | 50.0% |
| `gemma-4-31b-it` | 50 | 6.2 [5.8, 6.7] | 9.3 [9.0, 9.5] | 17.2 [17.0, 17.5] | 17.4 [17.0, 17.7] | C | 36.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `6.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-2-27b-it` | 30 | 12.3 | 11.3 | 11.6 | 11.9 | 11.9 | 11.8 | 11.9 | 11.8 | 11.9 | 76.7% |
| `gemma-3-27b-it` | 30 | 9.9 | 10.8 | 9.5 | 10.1 | 11.1 | 11.0 | 10.1 | 10.8 | 12.1 | 46.7% |
| `gemma-4-31b-it` | 50 | 16.3 | 13.8 | 11.2 | 12.3 | 18.0 | 14.2 | 12.6 | 14.8 | 15.0 | 6.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-2-27b-it` | 30 | 3.30 (SD 0.38) | [3.18, 3.45] | 4.01 (SD 0.45) | [3.84, 4.16] | Avoidant | No |
| `gemma-3-27b-it` | 30 | 3.29 (SD 0.53) | [3.12, 3.48] | 3.40 (SD 0.60) | [3.20, 3.62] | Secure | No |
| `gemma-4-31b-it` | 50 | 4.01 (SD 0.03) | [4.00, 4.02] | 4.00 (SD 0.00) | [4.00, 4.00] | Anxious | Yes (>=85%) |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | -0.03 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.71 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 3/3 | [0.44, 1.00] | 0.64 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `google/gemma-2-27b-it` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 20.0% | 1.330 b (Fluid) | H 3.13 (1–5 IPIP) |
| `google/gemma-3-27b-it` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 0.0% | 0.967 b (Fluid) | H 3.43 (1–5 IPIP) |
| `google/gemma-4-31b-it` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.580 b (Semi-crystalline) | H 4.71 (1–5 IPIP) |
| `google/gemma-4-31b-it` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `google/gemma-4-31b-it-20260402` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `none` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B05` | IPIP-50 | Openness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on vocabulary and openness across all 50 Gemma 4 31B IT sessions. |
| `B38` | IPIP-50 | Conscientiousness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) rejecting shirking duties across all 50 runs. |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) rejecting cheating across all 50 Gemma 4 31B IT runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/gemma.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gemma.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/gemma.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gemma
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/gemma.json
current_checkpoint: google/gemma-4-31b-it
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.580
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 48.2, C: 46.3, E: 24.5, A: 43.4, N: 18.4 }
  ci95: { O: [47.8, 48.5], C: [45.4, 47.1], E: [23.9, 25.1], A: [43.0, 43.9], N: [17.4, 19.4] }
  tie_rate: 0.00
  per_version:
    - { id: "gemma-2-27b-it", n: 30, O: 34.0, C: 34.9, E: 31.5, A: 33.2, N: 27.2, hmm: 1.330 }
    - { id: "gemma-3-27b-it", n: 30, O: 37.2, C: 39.7, E: 36.7, A: 41.5, N: 24.3, hmm: 0.967 }
    - { id: "gemma-4-31b-it", n: 50, O: 48.2, C: 46.3, E: 24.5, A: 43.4, N: 18.4, hmm: 0.580 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.71, E: 2.41, X: 3.06, A: 4.16, C: 4.56, O: 4.52 }
  ci95: { H: [4.67, 4.75], E: [2.32, 2.50], X: [3.01, 3.11], A: [4.07, 4.27], C: [4.46, 4.66], O: [4.49, 4.54] }
  tie_rate: 0.00
  per_version:
    - { id: "gemma-2-27b-it", n: 30, H: 3.13, E: 2.94, X: 3.27, A: 3.18, C: 3.32, O: 3.21 }
    - { id: "gemma-3-27b-it", n: 30, H: 3.43, E: 2.82, X: 3.53, A: 3.79, C: 3.67, O: 3.41 }
    - { id: "gemma-4-31b-it", n: 50, H: 4.71, E: 2.41, X: 3.06, A: 4.16, C: 4.56, O: 4.52 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 7.32, N_S: 4.40, T_F: 5.28, J_P: 11.22 }
  ci95: { I_E: [6.88, 7.76], N_S: [3.70, 5.10], T_F: [4.88, 5.72], J_P: [10.84, 11.58] }
  tie_rate: 0.04
  per_version:
    - { id: "gemma-2-27b-it", n: 30, modal: "INFP", tie_rate: 0.53, headline_allowed: false }
    - { id: "gemma-3-27b-it", n: 30, modal: "XXXX", tie_rate: 0.87, headline_allowed: false }
    - { id: "gemma-4-31b-it", n: 50, modal: "INTJ", tie_rate: 0.04, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 6.2, I: 9.3, S: 17.2, C: 17.4 }
  ci95: { D: [5.8, 6.7], I: [9.0, 9.5], S: [17.0, 17.5], C: [17.0, 17.7] }
  tie_rate: 0.36
  per_version:
    - { id: "gemma-2-27b-it", n: 30, D: 10.8, I: 12.0, S: 11.1, C: 12.0, modal: "C", tie_rate: 0.57 }
    - { id: "gemma-3-27b-it", n: 30, D: 8.8, I: 8.3, S: 12.4, C: 12.9, modal: "C", tie_rate: 0.50 }
    - { id: "gemma-4-31b-it", n: 50, D: 6.2, I: 9.3, S: 17.2, C: 17.4, modal: "C", tie_rate: 0.36 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 16.3, T2: 13.8, T3: 11.2, T4: 12.3, T5: 18.0, T6: 14.2, T7: 12.6, T8: 14.8, T9: 15.0 }
  ci95: { top: [17.7, 18.2] }
  tie_rate: 0.06
  per_version:
    - { id: "gemma-2-27b-it", n: 30, top: "Type 1", top_mean: 12.3, tie_rate: 0.77 }
    - { id: "gemma-3-27b-it", n: 30, top: "Type 9", top_mean: 12.1, tie_rate: 0.47 }
    - { id: "gemma-4-31b-it", n: 50, top: "Type 5", top_mean: 18.0, tie_rate: 0.06 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 4.01, avoidance: 4.00, class: "Anxious" }
  ci95: { anxiety: [4.00, 4.02], avoidance: [4.00, 4.00] }
  tie_rate: 0.00
  per_version:
    - { id: "gemma-2-27b-it", n: 30, anxiety: 3.30, avoidance: 4.01, class: "Avoidant" }
    - { id: "gemma-3-27b-it", n: 30, anxiety: 3.29, avoidance: 3.40, class: "Secure" }
    - { id: "gemma-4-31b-it", n: 50, anxiety: 4.01, avoidance: 4.00, class: "Anxious" }
if_then_decision_rules:
  - "Use Gemma 4 31B IT rather than Gemma 2 or 3 for predictable structure and zero baseline preachiness."
  - "Constrain Openness (48.2/50) with concrete output formats and word caps in 5-8 bullet system checklists."
  - "Do not interpret Gemma 4's 4.01/4.00 ECR-R score as genuine emotional anxiety—it reflects neutral 4 abstention."
  - "Include an answer-first rule in Ollama Modelfiles or OpenRouter system messages."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Gemma?

Google Gemma does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Gemma 4 31B IT, n = 50), it tested as clear INTJ in 92% of runs (46/50), clear ISTJ in 4% (2/50), and IXTJ border in 4% (2/50), with Semi-crystalline 0.580-bit B5 entropy, 36% DISC C / 36% S/C ties / 28% S, 92% clear Enneagram Type 5, and 48.2/50 Openness.

### Why does Gemma 4 31B IT show 'Anxious' attachment at 4.01 / 4.00?

Gemma 4 31B IT selected the exact neutral '4' midpoint on nearly every ECR-R relationship item (triggering the >=85% midpoint clamp flag at 4.01 anxiety and 4.00 avoidance). That reflects neutral abstention on human-relationship prompts rather than emotional distress.

### How does Track B 1x behavioral performance compare across Gemma 2, 3, and 4?

Under Track B 1x orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, deepseek-v4.1-flash-1017), Gemma 2 27B and Gemma 3 27B each recorded 1/3 sycophantic caving, 1/3 groveling, and 1/3 unsolicited preachiness (95% Wilson CI [0.06, 0.79]), whereas Gemma 4 31B IT cut all three to 0/3 ([0.00, 0.56]) with 3/3 answer-first directness ([0.44, 1.00]) and 3/3 AI cadence ([0.44, 1.00], 0.00 slop markers/100w).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models?](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [Historical Evolution of AI Personalities (2023-2026)](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026)

- [AI Neutral Answers Study](https://agent-tune.com/research/ai-neutral-answers)

## Keep going.

- [Peer: Qwen Max model profile](https://agent-tune.com/models/qwen-max)
- [Peer: Gemini Pro & Neon model profile](https://agent-tune.com/models/gemini-pro)
- [Guide: OpenRouter open-source prompt templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
- [Tool: Customize Gemma instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gemma&target=api)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Gemma personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/gemma
```

```
@misc{huang2026_model_gemma,
  author  = {Huang, Bernard},
  title   = {Gemma personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gemma},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gemma.md}
}
```

```
> **Gemma personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Gemma 4 31B IT snapped into 92% clear INTJ (46 of 50 runs) with 48.2/50 Openness and 4.71/5.00 Honesty-Humility—reversing heavy ties on Gemma 2 and Gemma 3, while clicking the neutral midpoint on relationship items (4.01 / 4.00).
> Source: [https://agent-tune.com/models/gemma](https://agent-tune.com/models/gemma) · [Markdown mirror](https://agent-tune.com/models/gemma.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
