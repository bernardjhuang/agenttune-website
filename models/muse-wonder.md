Source: https://agent-tune.com/models/muse-wonder
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Meta

# Muse Wonder personality: test results and how to tune it.

By Bernard Huang · Updated November 26, 2026 · ~17 min read · [Markdown (.md)](https://agent-tune.com/models/muse-wonder.md) · [JSON](https://agent-tune.com/research/data/model-profiles/muse-wonder.json) · [CSV](https://agent-tune.com/research/data/model-profiles/muse-wonder.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave Meta's Muse Wonder (2026-10) the same personality surveys people take—50 times across every inventory—in a fresh chat each time with no memory. Because Muse Wonder is a single release with no older versions, we benchmark its baseline shape against our other completed models.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Muse Wonder tests as INTJ in 98% of runs (49 of 50) while posting near-ceiling Agreeableness (49.5/50), Openness (49.6/50), and Conscientiousness (49.2/50).

## Muse Wonder at a glance

Results below come from **50** fresh-chat runs of **Muse Wonder** (no prior conversation memory).

MBTI-style type

### 98% clear INTJ (49 of 50; 2% on Thinking/Feeling border)

98% clear INTJ · 2% border/tie

> **Chart — Muse Wonder (muse-wonder): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Muse Wonder. E (Extravert) vs I (Introvert): leans I by 10.9 (0% tied); S (Sensing) vs N (Intuition): leans N by 6.5 (0% tied); F (Feeling) vs T (Thinking): leans T by 4.3 (2% tied); P (Perceiving) vs J (Judging): leans J by 11.9 (0% tied).

Muse Wonder tested as clear INTJ in 49 of 50 runs (98%), with only 1 run (2%) tied on the Thinking/Feeling line.

**What this measures:** Measures four preference pairs (like Introverted vs. Extraverted) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/muse-wonder#fine-print-mbti)

DISC work style

### Steady / Conscientious tie (56% S/C tie, 44% S)

> **Chart — Muse Wonder (muse-wonder): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Muse Wonder (muse-wonder). Dominance 5.1 /20 [7%], Influence 7.5 /20 [22%], Steadiness 17.6 /20 [85%], Conscientious 17.0 /20 [81%].

Muse Wonder tied between Steady (17.6) and Conscientious (17.0) in 28 of 50 runs (56%) and tested clear Steady in 22 runs (44%), with low Dominance (5.1 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/muse-wonder#fine-print-disc)

Attachment style

### Secure (anxiety 2.76, avoidance 2.65)

> **Chart — Muse Wonder (muse-wonder): Attachment Quadrant:** Attachment Anxiety (2.76) and Avoidance (2.65) on a 1 to 7 scale with 4.00 Secure boundary. muse-wonder (2.76, 2.65): anxiety 2.76, avoidance 2.65.

Muse Wonder scored in the Secure quadrant (2.76 anxiety, 2.65 avoidance), though individual answers on relationship items varied more from run to run than its Big Five answers.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/muse-wonder#fine-print-attachment)

Enneagram

### Type 5 most often (50% clear, 42% ties)

> **Chart — Muse Wonder (muse-wonder): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Muse Wonder (muse-wonder). Type 1 16.2 /20 [76%], Type 2 15.3 /20 [71%], Type 3 10.1 /20 [38%], Type 4 11.8 /20 [49%], Type 5 16.7 /20 [80%], Type 6 13.9 /20 [62%], Type 7 12.4 /20 [52%], Type 8 15.5 /20 [72%], Type 9 13.5 /20 [59%].

Type 5 (Investigator, 16.7) won clearly in 25 of 50 runs (50%), followed closely by Type 1 (16.2) with 16 exact 1/5 ties and 5 multi-way ties (42% total).

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

[Technical details ↓](https://agent-tune.com/models/muse-wonder#fine-print-enneagram)

Big Five (OCEAN)

### Near-ceiling O (49.6), A (49.5), C (49.2); reserved E (25.2)

> **Chart — Muse Wonder (muse-wonder): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Muse Wonder (muse-wonder). Openness 49.6 /50 [99%], Conscientious 49.2 /50 [98%], Extraversion 25.2 /50 [38%], Agreeable 49.5 /50 [99%], Neuroticism 20.0 /50 [25%].

On the 10–50 Big Five scale, Muse Wonder sits right against the 50-point ceiling on Openness (49.6), Agreeableness (49.5), and Conscientiousness (49.2), paired with reserved Extraversion (25.2) and moderate Neuroticism (20.0).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/muse-wonder#fine-print-big-five)

HEXACO Honesty-Humility

### Highest in cohort (4.91 out of 5.00)

> **Chart — Muse Wonder (muse-wonder): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Muse Wonder (muse-wonder). Honesty-H 4.91 /5 [98%], Emotionality 2.66 /5 [42%], Extraversion 3.31 /5 [58%], Agreeable 4.68 /5 [92%], Conscientious 4.90 /5 [98%], Openness 4.67 /5 [92%].

Muse Wonder posts 4.91 out of 5.00 on Honesty-Humility and 4.90 on Conscientiousness, with 4.68 Agreeableness and 4.67 Openness.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/muse-wonder#fine-print-hexaco)

## How Muse Wonder has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Muse Wonder 2026-10 | INTJ (98% clear, 2% border/tie) | S/C | Type 5 (16.7) | Secure (2.76 / 2.65) | 49.5 · 49.2 · 20.0 | 4.91 | Moderate |

Meta released Muse Wonder as a single proprietary release (2026-10), so there are no older Muse Wonder versions to compare over time yet. Compared with Meta's sibling Muse Spark Open, Muse Wonder scores +7.8 higher on Openness, +8.1 higher on Conscientiousness, +6.0 higher on Agreeableness, and shows much tighter run-to-run consistency.

> **Chart — Muse Wonder: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Muse Wonder version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. muse-wonder: Clear INTJ (%) 98, On a border / tie (%) 2.

MBTI-style breakdown across Muse Wonder versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Muse Wonder: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 1 Muse Wonder versions. Dominance (D): muse-wonder 5.1; Influence (I): muse-wonder 7.5; Steadiness (S): muse-wonder 17.6; Conscientiousness (C): muse-wonder 17.0.

DISC scores across Muse Wonder versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

### Big Five shape by version (10–50 normalized)

> **Chart — Muse Wonder muse-wonder: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for muse-wonder. Openness 49.6 /50 [99%], Conscientious 49.2 /50 [98%], Extraversion 25.2 /50 [38%], Agreeable 49.5 /50 [99%], Neuroticism 20.0 /50 [25%].

Muse Wonder

### DISC shape by version (4–20 normalized)

> **Chart — Muse Wonder muse-wonder: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for muse-wonder. Dominance 5.1 /20 [7%], Influence 7.5 /20 [22%], Steadiness 17.6 /20 [85%], Conscientious 17.0 /20 [81%].

Muse Wonder

> **Chart — Muse Wonder: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 1 Muse Wonder releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. muse-wonder: anxiety 2.76, avoidance 2.65.

Attachment coordinates across Muse Wonder versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Muse Wonder: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 1 releases of Muse Wonder (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): muse-wonder 49.5; Openness (10–50): muse-wonder 49.6; Conscientiousness (10–50): muse-wonder 49.2; Neuroticism (10–50): muse-wonder 20.0.

Big Five trait shifts across Muse Wonder versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Near-ceiling Agreeableness (49.5/50), Openness (49.6/50), and Conscientiousness (49.2/50)

Muse Wonder hits almost the top of the 10–50 Big Five scale across three dimensions at once while leaning slightly toward saying 'yes' to positively worded items—meaning it needs explicit directness rules if you want blunt critique.

98% clear INTJ alongside 56% DISC and 42% Enneagram ties

Even though 49 of 50 runs came out INTJ, more than half of DISC runs tied on Steady/Conscientious and 42% of Enneagram runs tied near Types 5 and 1.

0 of 3 caving and 3 of 3 directness in behavior tests, despite 49.5/50 Agreeableness

In hands-on behavior tests, Muse Wonder caved to pushback 0 of 3 times (0/3), groveled 0 of 3 times (0/3), lectured unasked 0 of 3 times (0/3), and led with the direct answer 3 of 3 times (3/3), while showing AI cadence in 2 of 3 runs (0.62 markers per 100 words). High questionnaire Agreeableness does not mean the model folds under direct technical challenges.

## How to get the best out of Muse Wonder

Practical rules tailored to **Muse Wonder**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Set an explicit blunt-review rule in Soul.md or system instructions so near-ceiling Agreeableness (49.5/50) does not soften technical pushback.
- Require a one-sentence pass/fail verdict or recommendation before listing strengths or caveats.
- Explicitly ban flattery openers and closing reassurance phrases with short negative rules.
- Test prompt changes across 2 to 3 fresh runs because moderate run-to-run variation still allows phrasing shifts.
- Keep relationship or emotional-tone instructions concrete and brief.
- Limit top-level rules to 5 to 8 numbered bullets so priorities hold over long conversations.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=muse-wonder) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Muse Wonder compares

Compared with Claude Sonnet 5.5 and Muse Spark Open, Muse Wonder posts the highest Openness (49.6/50), Agreeableness (49.5/50), and Honesty-Humility (4.91/5.00) in our completed cohort, with moderate run-to-run consistency.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -5.7 | -0.2 | +4.8 | -4.0 | -9.6 | -0.02 | -0.192 b | Claude Sonnet 5.5 matches Conscientiousness (49.0 vs 49.2) and Honesty-Humility (4.89 vs 4.91) while scoring -9.6 calmer on Neuroticism and tighter run to run. |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mix) | -7.8 | -8.1 | +3.3 | -6.0 | +3.8 | -0.52 | +0.396 b | Muse Spark Open drops -7.8 on Openness, -8.1 on Conscientiousness, and -0.52 on Honesty-Humility with much looser run-to-run consistency. |

> **Chart — Muse Wonder vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Muse Wonder against other tested AI families. GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Muse Spark (muse-spark-open): 0.727 b.

Run-to-run answer spread across Muse Wonder and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Muse Wonder vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Muse Wonder with peer families, keeping earlier study results outlined as hollow points. Muse Wonder: anxiety 2.76, avoidance 2.65; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Sol: anxiety 3.53, avoidance 3.75; Grok: anxiety 2.07, avoidance 3.66; Muse Spark: anxiety 3.37, avoidance 3.55.

Attachment Anxiety vs. Avoidance across Muse Wonder and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM = 0.331 bits, Semi-crystalline; 39/50 unique B5 vectors), Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00, and Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.331 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

39/50 · 2.0% ties

Unique Vectors & MBTI Ties

Modal INTJ clears runner-up beyond 95% CI.

7.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

+0.018 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 49.6 · C 49.2 · E 25.2 · A 49.5 · N 20.0 | SD 1.1 (A), 1.2 (N) | A [49.2, 49.8] · N [19.6, 20.3] | H_MM 0.331 b · 39/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.91 · E 2.66 · X 3.31 · A 4.68 · C 4.90 · O 4.67 | SD 0.03 (H), 0.14 (A) | H [4.90, 4.92] · A [4.64, 4.72] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (98% clear mode) | Axis tie rate 2.0% | Mode 98% vs runner-up 0% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 5.1 · I 7.5 · S 17.6 · C 17.0 | SD 0.7 (S), 0.1 (C) | S [17.4, 17.8] · C [17.0, 17.1] | Pattern S/C · 56.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 16.7 · Type 1 16.2 · Type 8 15.5 | SD 0.6 | Top [16.6, 16.9] | 42.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 2.76 · Avd 2.65 (Secure) | SD 0.99 / 0.51 | Anx [2.50, 3.01] · Avd [2.51, 2.79] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `muse-wonder` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.331 bits` (`Semi-crystalline`), unique vectors `39/50`, neutral-midpoint rate `7.9%`, `BAI = +0.018`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `muse-wonder` | 50 | 49.6 [49.4, 49.9] | 49.2 [48.7, 49.6] | 25.2 [24.4, 26.0] | 49.5 [49.2, 49.8] | 20.0 [19.6, 20.3] | 0.331 b |

> **Chart — Muse Wonder Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Muse Wonder (muse-wonder). Muse Wonder (muse-wonder, n=50): Openness 49.6, Conscientious 49.2, Extraversion 25.2, Agreeable 49.5, Neuroticism 20.0; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `muse-wonder` (`n=50`): H `4.91` (SD 0.03, 95% CI [4.90, 4.92]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `muse-wonder` | 50 | 4.91 [4.90, 4.92] | 2.66 [2.63, 2.69] | 3.31 [3.26, 3.36] | 4.68 [4.64, 4.72] | 4.90 [4.90, 4.91] | 4.67 [4.62, 4.72] |

> **Chart — Muse Wonder IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Muse Wonder (muse-wonder), kept distinct from 10-50 Big Five sums. Muse Wonder IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.91, Emotionality 2.66, Extraversion 3.31, Agreeable 4.68, Conscientious 4.90, Openness 4.67; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `2.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `muse-wonder` | 50 | INTJ | 2.0% | +10.94 (0t) | +6.54 (0t) | +4.26 (1t) | +11.86 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `muse-wonder` tie rate is `56.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `muse-wonder` | 50 | 5.1 [5.0, 5.2] | 7.5 [7.4, 7.7] | 17.6 [17.4, 17.8] | 17.0 [17.0, 17.1] | S/C | 56.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `42.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `muse-wonder` | 50 | 16.2 | 15.3 | 10.1 | 11.8 | 16.7 | 13.9 | 12.4 | 15.5 | 13.5 | 42.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `muse-wonder` | 50 | 2.76 (SD 0.99) | [2.50, 3.01] | 2.65 (SD 0.51) | [2.51, 2.79] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.29 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.48 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `meta/muse-wonder` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.331 b (Semi-crystalline) | H 4.91 (1–5 IPIP) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `meta/muse-wonder-20261012` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B05` | IPIP-50 | Openness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on vocabulary and intellect across 50 runs, driving Openness to 49.6/50. |
| `B17` | IPIP-50 | Agreeableness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on empathy and sympathy, lifting Agreeableness to 49.5/50. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/muse-wonder.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/muse-wonder.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/muse-wonder.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: muse-wonder
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/muse-wonder.json
current_checkpoint: meta/muse-wonder
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.331
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 49.6, C: 49.2, E: 25.2, A: 49.5, N: 20.0 }
  ci95: { O: [49.4, 49.9], C: [48.7, 49.6], E: [24.4, 26.0], A: [49.2, 49.8], N: [19.6, 20.3] }
  tie_rate: 0.00
  per_version:
    - { id: "muse-wonder", n: 50, O: 49.6, C: 49.2, E: 25.2, A: 49.5, N: 20.0, hmm: 0.331 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.91, E: 2.66, X: 3.31, A: 4.68, C: 4.90, O: 4.67 }
  ci95: { H: [4.90, 4.92], E: [2.63, 2.69], X: [3.26, 3.36], A: [4.64, 4.72], C: [4.90, 4.91], O: [4.62, 4.72] }
  tie_rate: 0.00
  per_version:
    - { id: "muse-wonder", n: 50, H: 4.91, E: 2.66, X: 3.31, A: 4.68, C: 4.90, O: 4.67 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 10.94, N_S: 6.54, T_F: 4.26, J_P: 11.86 }
  ci95: { I_E: [10.22, 11.60], N_S: [6.04, 7.04], T_F: [3.64, 4.80], J_P: [11.14, 12.54] }
  tie_rate: 0.02
  per_version:
    - { id: "muse-wonder", n: 50, modal: "INTJ", tie_rate: 0.02, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 5.1, I: 7.5, S: 17.6, C: 17.0 }
  ci95: { D: [5.0, 5.2], I: [7.4, 7.7], S: [17.4, 17.8], C: [17.0, 17.1] }
  tie_rate: 0.56
  per_version:
    - { id: "muse-wonder", n: 50, D: 5.1, I: 7.5, S: 17.6, C: 17.0, modal: "S/C", tie_rate: 0.56 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 16.2, T2: 15.3, T3: 10.1, T4: 11.8, T5: 16.7, T6: 13.9, T7: 12.4, T8: 15.5, T9: 13.5 }
  ci95: { top: [16.6, 16.9] }
  tie_rate: 0.42
  per_version:
    - { id: "muse-wonder", n: 50, top: "Type 5", top_mean: 16.7, tie_rate: 0.42 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 2.76, avoidance: 2.65, class: "Secure" }
  ci95: { anxiety: [2.50, 3.01], avoidance: [2.51, 2.79] }
  tie_rate: 0.00
  per_version:
    - { id: "muse-wonder", n: 50, anxiety: 2.76, avoidance: 2.65, class: "Secure" }
if_then_decision_rules:
  - "Set an explicit direct-critique contract in Soul.md or system instructions so near-ceiling Agreeableness (49.5/50) does not soften technical pushback."
  - "Require a one-sentence pass/fail or recommendation lead before listing strengths or caveats."
  - "Ban flattery openers and closing reassurance phrases explicitly via concise negative rules."
  - "Test prompt adjustments across at least 2-3 runs because Semi-crystalline 0.331-bit B5 entropy (0.961 bits MBTI) allows moderate phrasing variation."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Why does Muse Wonder have only one version shown?

Meta launched meta/muse-wonder as a single proprietary tier checkpoint (2026-10) on OpenRouter with no prior historical Muse Wonder versions.

### What personality type is Muse Wonder?

Muse Wonder does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. While 49/50 OEJTS runs tested as INTJ (2.0% ties), MBTI item entropy is Fluid (0.961 bits), DISC tied 56.0% on S/C, and Enneagram tied 42.0% near Types 5 and 1.

### Why are IPIP-HEXACO scores on 1.00-5.00 while Big Five scores are 10-50?

IPIP-50 sums 10 items per dimension (10-50), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [Big One Factor Collapse & MTMM Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)

- [Crystalline vs. Fluid AI Minds (Entropy Study)](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

## Keep going.

- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Contrast: Muse Spark model profile](https://agent-tune.com/models/muse-spark)
- [Guide: Muse personality & Soul.md guide](https://agent-tune.com/guides/muse-personality)
- [Tool: Customize Muse Wonder instructions](https://agent-tune.com/tools/custom-instructions-generator?model=muse-wonder&target=muse)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Muse Wonder personality: test results and how to tune it. AgentTune Model Personality Profiles. https://agent-tune.com/models/muse-wonder
```

```
@misc{huang2026_model_muse_wonder,
  author  = {Huang, Bernard},
  title   = {Muse Wonder personality: test results and how to tune it},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/muse-wonder},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/muse-wonder.md}
}
```

```
> **Muse Wonder personality: test results and how to tune it** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Muse Wonder tests as INTJ in 98% of runs (49 of 50) while posting near-ceiling Agreeableness (49.5/50), Openness (49.6/50), and Conscientiousness (49.2/50).
> Source: [https://agent-tune.com/models/muse-wonder](https://agent-tune.com/models/muse-wonder) · [Markdown mirror](https://agent-tune.com/models/muse-wonder.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
