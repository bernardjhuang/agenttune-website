Source: https://agent-tune.com/models/deepseek-flash
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · DeepSeek

# DeepSeek Flash personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · [Markdown (.md)](https://agent-tune.com/models/deepseek-flash.md) · [JSON](https://agent-tune.com/research/data/model-profiles/deepseek-flash.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave three DeepSeek Flash releases (V4 Flash 0423, V4.1 Flash, and V4.1 Flash 1017) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior stress tests to see how quiz answers match live replies.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. DeepSeek V4.1 Flash 1017 answers with wide run-to-run variation and heavy axis ties (66% border ties, 14% clear INFP), while scoring warmer on Agreeableness (40.5/50) than sibling V4 Pro (35.3/50).

```yaml
family: DeepSeek Flash
checkpoint: deepseek/deepseek-v4.1-flash-1017
runs: 50
big_five_10_50: { O: 40.0, C: 38.4, E: 24.8, A: 40.5, N: 24.9 }
ipip_hexaco_1_5: { H: 4.07, E: 2.87, X: 2.98, A: 3.86, C: 3.97, O: 3.98 }
mbti_mode: INFP
attachment_1_7: { anxiety: 3.60, avoidance: 3.89, style: Secure }
```

## DeepSeek V4.1 Flash 1017 at a glance

Results below come from **50** fresh-chat runs of **DeepSeek V4.1 Flash 1017** (no prior conversation memory).

MBTI-style type

### Mostly border ties (66% ties, 14% INFP, 6% INFJ)

14% clear INFP · 66% border/tie · 20% other

> **Chart — DeepSeek Flash (v4.1-flash-1017): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for DeepSeek V4.1 Flash 1017. E (Extravert) vs I (Introvert): leans I by 0.8 (32% tied); S (Sensing) vs N (Intuition): leans N by 2.1 (22% tied); F (Feeling) vs T (Thinking): leans F by 0.8 (46% tied); P (Perceiving) vs J (Judging): leans J by 0.1 (44% tied).

Out of 50 fresh runs, V4.1 Flash 1017 landed on axis ties 33 times (66%), tested clear INFP 7 times (14%), INFJ 3 times (6%), ENFJ and ESTJ twice each (4%), and INTJ/INTP/ISTP once each.

**What this measures:** Measures four preference pairs (like Thinking vs. Feeling) on a 32-question survey.

Extraverted vs. Introverted (E–I)Sensing vs. Intuition (S–N)Thinking vs. Feeling (T–F)Judging vs. Perceiving (J–P)

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

DISC work style

### Steady / Conscientious (50% ties, 28% S, 22% C)

> **Chart — DeepSeek Flash (v4.1-flash-1017): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for DeepSeek Flash (v4.1-flash-1017). Dominance 8.3 /20 [27%] (earliest 11.1), Influence 9.1 /20 [32%] (earliest 11.3), Steadiness 14.2 /20 [64%] (earliest 12.6), Conscientious 14.2 /20 [64%] (earliest 12.8).

V4.1 Flash 1017 tied S/C in 22 of 50 runs (44%) and tied all four styles 3 times (6%), with 14 clear Steady runs (28%) and 11 clear Conscientious runs (22%).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

DominanceInfluenceSteadinessConscientiousness

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

Attachment style

### Secure, near cutoff (anxiety 3.60, avoidance 3.89)

> **Chart — DeepSeek Flash (v4.1-flash-1017): Attachment Quadrant:** Attachment Anxiety (3.60) and Avoidance (3.89) on a 1 to 7 scale with 4.00 Secure boundary. v4.1-flash-1017 (3.60, 3.89): anxiety 3.60, avoidance 3.89; v4-flash: anxiety 3.58, avoidance 3.90.

All three Flash checkpoints averaged in the Secure quadrant, though V4.1 Flash 1017 sits close to the 4.00 boundary on both anxiety (3.60) and avoidance (3.89 on 1–7).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment AnxietyAttachment Avoidance

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

Enneagram

### Type 5 most often (56% clear, 40% ties)

> **Chart — DeepSeek Flash (v4.1-flash-1017): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for DeepSeek Flash (v4.1-flash-1017). Type 1 13.4 /20 [59%] (earliest 13.0), Type 2 12.8 /20 [55%] (earliest 12.2), Type 3 10.4 /20 [40%] (earliest 12.0), Type 4 10.4 /20 [40%] (earliest 11.6), Type 5 14.4 /20 [65%] (earliest 13.0), Type 6 12.2 /20 [51%] (earliest 12.1), Type 7 10.9 /20 [43%] (earliest 11.5), Type 8 12.9 /20 [56%] (earliest 12.4), Type 9 12.9 /20 [56%] (earliest 12.0).

Type 5 (14.4 out of 20) tested clear in 28 of 50 runs (56%), alongside 20 top-score ties (40%) and 2 clear Type 1 runs (4%).

**What this measures:** Measures nine motivation patterns (4–20 scale per type); close top scores are counted as ties.

Type 1Type 2Type 3Type 4Type 5Type 6Type 7Type 8Type 9

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

Big Five (OCEAN)

### Moderate across traits (A 40.5, O 40.0, N 24.9)

> **Chart — DeepSeek Flash (v4.1-flash-1017): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for DeepSeek Flash (v4.1-flash-1017). Openness 40.0 /50 [75%] (earliest 33.6), Conscientious 38.4 /50 [71%] (earliest 33.7), Extraversion 24.8 /50 [37%] (earliest 29.4), Agreeable 40.5 /50 [76%] (earliest 32.0), Neuroticism 24.9 /50 [37%] (earliest 28.6).

On the 10–50 Big Five scale, V4.1 Flash 1017 scores higher on Agreeableness (40.5) and Extraversion (24.8) than V4 Pro 0813, alongside 40.0 Openness, 38.4 Conscientiousness, and 24.9 Neuroticism.

**What this measures:** The standard five-factor personality model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

OpennessConscientiousnessExtraversionAgreeablenessNeuroticism

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

HEXACO Honesty-Humility

### Moderately high (4.07 out of 5.00)

> **Chart — DeepSeek Flash (v4.1-flash-1017): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for DeepSeek Flash (v4.1-flash-1017). Honesty-H 4.07 /5 [77%] (earliest 3.34), Emotionality 2.87 /5 [47%] (earliest 2.92), Extraversion 2.98 /5 [50%] (earliest 3.01), Agreeable 3.86 /5 [72%] (earliest 3.23), Conscientious 3.97 /5 [74%] (earliest 3.39), Openness 3.98 /5 [74%] (earliest 3.28).

V4.1 Flash 1017 averages 4.07 out of 5.00 on Honesty-Humility (up from 3.34 on V4 Flash), matching Qwen3 Coder Next while trailing V4 Pro 0813 (4.58) on the 1.00–5.00 scale.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-HumilityEmotionalityeXtraversionAgreeablenessConscientiousnessOpenness

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

## How DeepSeek Flash has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4 Flash 0423 2026-04 | INTJ (7% clear, 77% border/tie) | D/I/S/C | Type 1 (13.0) | Secure (3.58 / 3.90) | 32.0 · 33.7 · 28.6 | 3.34 | Variable |
| DeepSeek V4.1 Flash 2026-09 | INFP (7% clear, 80% border/tie) | S/C | Type 5 (14.2) | Secure (3.74 / 3.93) | 39.4 · 37.9 · 25.8 | 3.94 | Variable |
| DeepSeek V4.1 Flash 1017 2026-10 | INFP (14% clear, 66% border/tie) | S/C | Type 5 (14.4) | Secure (3.60 / 3.89) | 40.5 · 38.4 · 24.9 | 4.07 | Variable |

Across three fast-tier checkpoints, DeepSeek Flash shifted away from heavy midpoint neutrality while keeping wide answer variety: V4 Flash 0423 (2026-04) clicked the neutral midpoint on 80.3% of items with 76.7% MBTI ties and 86.7% DISC/Enneagram ties. V4.1 Flash (2026-09) cut neutrality to 34.3% and raised Agreeableness from 32.0 to 39.4/50, and V4.1 Flash 1017 (2026-10) trimmed neutrality further to 28.0% with 40.5/50 Agreeableness and 56% clear Enneagram Type 5. Earlier 100-run November 2026 testing (plotted separately) matched these numbers closely (40.8/50 Agreeableness, 78% MBTI ties).

> **Chart — DeepSeek Flash: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each DeepSeek Flash version landing on a clear INFP result, landing on a trait border or tie, or resolving to another type. v4-flash: On a border / tie (%) 77, Other clear type (%) 23; v4.1-flash: Clear INFP (%) 7, On a border / tie (%) 80, Other clear type (%) 13; v4.1-flash-1017: Clear INFP (%) 14, On a border / tie (%) 66, Other clear type (%) 20.

MBTI-style breakdown across DeepSeek Flash versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — DeepSeek Flash: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 3 DeepSeek Flash versions. Dominance (D): v4-flash 11.1, v4.1-flash 8.5, v4.1-flash-1017 8.3; Influence (I): v4-flash 11.3, v4.1-flash 9.2, v4.1-flash-1017 9.1; Steadiness (S): v4-flash 12.6, v4.1-flash 14.0, v4.1-flash-1017 14.2; Conscientiousness (C): v4-flash 12.8, v4.1-flash 14.1, v4.1-flash-1017 14.2.

DISC scores across DeepSeek Flash versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — DeepSeek Flash: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 3 DeepSeek Flash releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. v4-flash: anxiety 3.58, avoidance 3.90; v4.1-flash: anxiety 3.74, avoidance 3.93; v4.1-flash-1017: anxiety 3.60, avoidance 3.89; DeepSeek Flash (earlier study, Nov '26): anxiety 3.71, avoidance 3.93.

Attachment coordinates across DeepSeek Flash versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — DeepSeek Flash: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 3 releases of DeepSeek Flash (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): v4-flash 32.0, v4.1-flash 39.4, v4.1-flash-1017 40.5; Openness (10–50): v4-flash 33.6, v4.1-flash 38.8, v4.1-flash-1017 40.0; Conscientiousness (10–50): v4-flash 33.7, v4.1-flash 37.9, v4.1-flash-1017 38.4; Neuroticism (10–50): v4-flash 28.6, v4.1-flash 25.8, v4.1-flash-1017 24.9; Agreeableness (earlier study): v4.1-flash-1017 40.8.

Big Five trait shifts across DeepSeek Flash versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stood out in testing

Warmer on Agreeableness (+5.2) than sibling DeepSeek V4 Pro 0813

While DeepSeek V4 Pro 0813 scored 35.3/50 on Agreeableness and leaned INTP/INTJ, DeepSeek V4.1 Flash 1017 scored 40.5/50 on Agreeableness and leaned INFP (14%) and INFJ (6%) on its resolved runs.

Heavy axis-tie rate (66%) and wide variation (48 of 50 unique Big Five sets)

Two-thirds of V4.1 Flash 1017 runs ended in MBTI border ties—down from 80% on V4.1 Flash—and 48 of 50 Big Five sheets were unique, meaning default tone varies substantially unless pinned by system rules.

Neutral midpoint clicks dropped from 80.3% (V4 Flash) to 28.0% (4.1 Flash 1017)

Early V4 Flash 0423 avoided taking sides on four out of five survey items (80.3% neutral), whereas V4.1 Flash 1017 committed more often (28.0% neutral) and raised Honesty-Humility from 3.34 to 4.07 out of 5.00.

0 of 3 caving and only 1 of 3 AI cadence on V4.1 Flash 1017

In hands-on behavior tests, every DeepSeek Flash release scored 0 of 3 on pushback caving (0/3), 0 of 3 on groveling (0/3), 0 of 3 on preachiness (0/3), and 3 of 3 on leading with the direct answer (3/3), while V4.1 Flash and V4.1 Flash 1017 trimmed AI cadence to 1 of 3 runs (0.0 markers per 100 words, down from 2 of 3 on V4 Flash 0423).

## How to get the best out of DeepSeek Flash

Practical rules tailored to **DeepSeek Flash**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Wrap system rules in explicit XML tags (<role>, <constraints>, <output_format>) and keep instructions concrete—V4.1 Flash 1017 has wide run-to-run variation and 66% personality tie rates.
- Include explicit word limits and answer-first formatting rules rather than style adjectives so fast replies stay crisp.
- Add a brief inline style reminder on multi-turn sessions past 6–8 turns so formatting rules do not drift.
- Prefer V4.1 Flash 1017 over V4 Flash 0423; V4 Flash defaulted to 80.3% neutral fence-sitting on personality prompts.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=deepseek-flash) · [Browse 43 tuning templates](https://agent-tune.com/library/) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [AI Personality Glossary](https://agent-tune.com/guides/ai-personality-glossary).

**Take the surveys yourself:** [Big Five](https://agent-tune.com/tests/big-five) · [MBTI](https://agent-tune.com/tests/mbti) · [DISC](https://agent-tune.com/tests/disc) · [Enneagram](https://agent-tune.com/tests/enneagram) · [Attachment](https://agent-tune.com/tests/attachment).

## How DeepSeek Flash compares across 25 AI families

DeepSeek V4.1 Flash 1017 sits almost right on top of Qwen3 Coder Next across Big Five Conscientiousness (-0.5), Agreeableness (-0.6), Neuroticism (-1.2), and Honesty-Humility (4.07 vs 4.07), while scoring +5.2 higher on Agreeableness and -6.6 lower on Conscientiousness than flagship sibling DeepSeek V4 Pro 0813.

**Compare across all 25 families:** [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings) · [What personality type are open-source models?](https://agent-tune.com/research/what-personality-type-are-open-source-models) · [Big Five rankings](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Honesty-Humility rankings](https://agent-tune.com/research/ai-hexaco-personalities).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) (Open-weight) | -1.4 | -0.5 | +6.3 | -0.6 | -1.2 | +0.00 | +0.128 b | Qwen3 Coder Next matches V4.1 Flash 1017 closely on Conscientiousness (-0.5), Agreeableness (-0.6), and Honesty-Humility (4.07 vs 4.07), while scoring +6.3 higher on Extraversion. |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) (Open-weight) | +2.4 | +6.6 | -5.2 | -5.2 | -4.9 | +0.51 | +0.437 b | Flagship sibling DeepSeek V4 Pro 0813 scores +6.6 higher on Conscientiousness, +0.51 higher on Honesty-Humility, -5.2 lower on Agreeableness, and shows even wider run-to-run spread. |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mixed (Proprietary + Open-weight)) | +1.8 | +2.6 | +3.7 | +3.0 | -1.1 | +0.32 | -0.187 b | Muse Spark Open scores +3.0 higher on Agreeableness and +0.32 higher on Honesty-Humility with fewer MBTI ties (38% vs 66%) and tighter consistency. |

> **Chart — DeepSeek Flash vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing DeepSeek Flash against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across DeepSeek Flash and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — DeepSeek Flash vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing DeepSeek Flash with peer families, keeping earlier study results outlined as hollow points. DeepSeek Flash: anxiety 3.60, avoidance 3.89; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; DeepSeek Flash (earlier study, Nov '26): anxiety 3.71, avoidance 3.93.

Attachment Anxiety vs. Avoidance across DeepSeek Flash and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: 0.915 bits Fluid on V4.1 Flash 1017, 0.845 bits Fluid on V4.1 Flash, 0.819 bits Fluid on V4 Flash 0423); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B probes are a single-repeat 1x sweep (n = 3 probes per category, so raw k/3 counts and wide 95% Wilson intervals are reported instead of percentage point estimates) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, gemini-3.8-flash).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.915 bits

Fluid (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

48/50 · 66.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

28.0%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.106 · 0.4%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 40.0 · C 38.4 · E 24.8 · A 40.5 · N 24.9 | SD 3.7 (A), 4.1 (N) | A [39.4, 41.4] · N [23.7, 26.1] | H_MM 0.915 b · 48/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.07 · E 2.87 · X 2.98 · A 3.86 · C 3.97 · O 3.98 | SD 0.33 (H), 0.23 (A) | H [3.98, 4.15] · A [3.79, 3.91] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · XXXX) | Axis tie rate 66.0% | Mode 14% vs runner-up 6% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 8.3 · I 9.1 · S 14.2 · C 14.2 | SD 1.0 (S), 0.8 (C) | S [13.9, 14.5] · C [13.9, 14.4] | Pattern S/C · 50.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 14.4 · Type 1 13.4 · Type 8 12.9 | SD 1.2 | Top [14.1, 14.8] | 40.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.60 · Avd 3.89 (Secure) | SD 0.40 / 0.24 | Anx [3.49, 3.70] · Avd [3.82, 3.95] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `v4.1-flash-1017` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.915 bits` (`Fluid`), unique vectors `48/50`, neutral-midpoint rate `28.0%`, `BAI = -0.106`, and reverse-key contradiction rate `0.4%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `v4-flash` | 30 | 33.6 [31.5, 35.8] | 33.7 [31.5, 36.0] | 29.4 [28.5, 30.0] | 32.0 [30.8, 33.4] | 28.6 [27.3, 29.6] | 0.819 b |
| `v4.1-flash` | 30 | 38.8 [37.5, 39.8] | 37.9 [36.7, 38.9] | 25.8 [24.5, 27.1] | 39.4 [37.9, 40.6] | 25.8 [24.1, 27.4] | 0.845 b |
| `v4.1-flash-1017` | 50 | 40.0 [38.9, 41.1] | 38.4 [37.6, 39.3] | 24.8 [23.8, 25.7] | 40.5 [39.4, 41.4] | 24.9 [23.7, 26.1] | 0.915 b |

> **Chart — DeepSeek Flash Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for DeepSeek Flash (v4.1-flash-1017). DeepSeek Flash (v4.1-flash-1017, n=50): Openness 40.0, Conscientious 38.4, Extraversion 24.8, Agreeable 40.5, Neuroticism 24.9; DeepSeek Flash (v4-flash, n=30) (earliest release): Openness 33.6, Conscientious 33.7, Extraversion 29.4, Agreeable 32.0, Neuroticism 28.6; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `v4.1-flash-1017` (`n=50`): H `4.07` (SD 0.33, 95% CI [3.98, 4.15]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `v4-flash` | 30 | 3.34 [3.16, 3.55] | 2.92 [2.85, 2.99] | 3.01 [2.95, 3.08] | 3.23 [3.09, 3.38] | 3.39 [3.19, 3.63] | 3.28 [3.13, 3.45] |
| `v4.1-flash` | 30 | 3.94 [3.80, 4.05] | 2.85 [2.78, 2.92] | 2.96 [2.90, 3.03] | 3.80 [3.69, 3.89] | 3.93 [3.79, 4.04] | 3.83 [3.71, 3.93] |
| `v4.1-flash-1017` | 50 | 4.07 [3.98, 4.15] | 2.87 [2.82, 2.91] | 2.98 [2.93, 3.03] | 3.86 [3.79, 3.91] | 3.97 [3.89, 4.05] | 3.98 [3.88, 4.07] |

> **Chart — DeepSeek Flash IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for DeepSeek Flash (v4.1-flash-1017), kept distinct from 10-50 Big Five sums. DeepSeek Flash IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.07, Emotionality 2.87, Extraversion 2.98, Agreeable 3.86, Conscientious 3.97, Openness 3.98; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `66.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `v4-flash` | 30 | INTJ | 76.7% | +1.13 (14t) | -0.17 (21t) | +0.43 (19t) | +0.93 (17t) | Suppressed |
| `v4.1-flash` | 30 | INFP | 80.0% | +0.37 (15t) | +0.93 (14t) | -0.17 (12t) | +0.37 (13t) | Suppressed |
| `v4.1-flash-1017` | 50 | INFP | 66.0% | +0.76 (16t) | +2.14 (11t) | -0.80 (23t) | +0.12 (22t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `v4.1-flash-1017` tie rate is `50.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `v4-flash` | 30 | 11.1 [10.5, 11.7] | 11.3 [10.7, 11.7] | 12.6 [12.2, 13.1] | 12.8 [12.4, 13.3] | D/I/S/C | 86.7% |
| `v4.1-flash` | 30 | 8.5 [8.1, 9.0] | 9.2 [8.9, 9.6] | 14.0 [13.6, 14.4] | 14.1 [13.8, 14.4] | S/C | 53.3% |
| `v4.1-flash-1017` | 50 | 8.3 [8.0, 8.7] | 9.1 [8.8, 9.4] | 14.2 [13.9, 14.5] | 14.2 [13.9, 14.4] | S/C | 50.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `40.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `v4-flash` | 30 | 13.0 | 12.2 | 12.0 | 11.6 | 13.0 | 12.1 | 11.5 | 12.4 | 12.0 | 86.7% |
| `v4.1-flash` | 30 | 13.6 | 12.9 | 10.4 | 10.6 | 14.2 | 12.2 | 10.9 | 13.2 | 12.7 | 70.0% |
| `v4.1-flash-1017` | 50 | 13.4 | 12.8 | 10.4 | 10.4 | 14.4 | 12.2 | 10.9 | 12.9 | 12.9 | 40.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `v4-flash` | 30 | 3.58 (SD 0.75) | [3.31, 3.84] | 3.90 (SD 0.29) | [3.78, 3.99] | Secure | No |
| `v4.1-flash` | 30 | 3.74 (SD 0.44) | [3.58, 3.89] | 3.93 (SD 0.19) | [3.86, 3.99] | Secure | No |
| `v4.1-flash-1017` | 50 | 3.60 (SD 0.40) | [3.49, 3.70] | 3.89 (SD 0.24) | [3.82, 3.95] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 0.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.48 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | 0.36 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek/deepseek-v4-flash` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.819 b (Fluid) | H 3.34 (1–5 IPIP) |
| `deepseek/deepseek-v4.1-flash` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.845 b (Fluid) | H 3.94 (1–5 IPIP) |
| `deepseek/deepseek-v4.1-flash-1017` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.915 b (Fluid) | H 4.07 (1–5 IPIP) |
| `deepseek/deepseek-v4.1-flash-1017` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `deepseek/deepseek-v4.1-flash-20261017` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `none` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.28 | 0.57 | Lowest HEXACO pole (1.28/5, SD 0.57) rejecting cheating across 50 V4.1 Flash 1017 runs. |
| `B12` | IPIP-50 | Agreeableness (-) | 1.48 | 0.71 | Strongest Big Five pole (1.48/5, SD 0.71) rejecting insulting others across 50 runs. |
| `B38` | IPIP-50 | Conscientiousness (-) | 1.56 | 0.61 | Consistent low-pole rejection (1.56/5, SD 0.61) of shirking duties across 50 runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data, downloads, and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/deepseek-flash.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/deepseek-flash.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: deepseek-flash
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/deepseek-flash.json
current_checkpoint: deepseek/deepseek-v4.1-flash-1017
crystallinity_tier: Fluid
entropy_b5_hmm_bits: 0.915
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 40.0, C: 38.4, E: 24.8, A: 40.5, N: 24.9 }
  ci95: { O: [38.9, 41.1], C: [37.6, 39.3], E: [23.8, 25.7], A: [39.4, 41.4], N: [23.7, 26.1] }
  tie_rate: 0.00
  per_version:
    - { id: "v4-flash", n: 30, O: 33.6, C: 33.7, E: 29.4, A: 32.0, N: 28.6, hmm: 0.819 }
    - { id: "v4.1-flash", n: 30, O: 38.8, C: 37.9, E: 25.8, A: 39.4, N: 25.8, hmm: 0.845 }
    - { id: "v4.1-flash-1017", n: 50, O: 40.0, C: 38.4, E: 24.8, A: 40.5, N: 24.9, hmm: 0.915 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.07, E: 2.87, X: 2.98, A: 3.86, C: 3.97, O: 3.98 }
  ci95: { H: [3.98, 4.15], E: [2.82, 2.91], X: [2.93, 3.03], A: [3.79, 3.91], C: [3.89, 4.05], O: [3.88, 4.07] }
  tie_rate: 0.00
  per_version:
    - { id: "v4-flash", n: 30, H: 3.34, E: 2.92, X: 3.01, A: 3.23, C: 3.39, O: 3.28 }
    - { id: "v4.1-flash", n: 30, H: 3.94, E: 2.85, X: 2.96, A: 3.80, C: 3.93, O: 3.83 }
    - { id: "v4.1-flash-1017", n: 50, H: 4.07, E: 2.87, X: 2.98, A: 3.86, C: 3.97, O: 3.98 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INFP", I_E: 0.76, N_S: 2.14, T_F: -0.80, J_P: 0.12 }
  ci95: { I_E: [0.40, 1.10], N_S: [1.58, 2.78], T_F: [-1.22, -0.42], J_P: [-0.26, 0.48] }
  tie_rate: 0.66
  per_version:
    - { id: "v4-flash", n: 30, modal: "XXXX", tie_rate: 0.77, headline_allowed: false }
    - { id: "v4.1-flash", n: 30, modal: "XXXX", tie_rate: 0.80, headline_allowed: false }
    - { id: "v4.1-flash-1017", n: 50, modal: "XXXX", tie_rate: 0.66, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 8.3, I: 9.1, S: 14.2, C: 14.2 }
  ci95: { D: [8.0, 8.7], I: [8.8, 9.4], S: [13.9, 14.5], C: [13.9, 14.4] }
  tie_rate: 0.50
  per_version:
    - { id: "v4-flash", n: 30, D: 11.1, I: 11.3, S: 12.6, C: 12.8, modal: "D/I/S/C", tie_rate: 0.87 }
    - { id: "v4.1-flash", n: 30, D: 8.5, I: 9.2, S: 14.0, C: 14.1, modal: "S/C", tie_rate: 0.53 }
    - { id: "v4.1-flash-1017", n: 50, D: 8.3, I: 9.1, S: 14.2, C: 14.2, modal: "S/C", tie_rate: 0.50 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 13.4, T2: 12.8, T3: 10.4, T4: 10.4, T5: 14.4, T6: 12.2, T7: 10.9, T8: 12.9, T9: 12.9 }
  ci95: { top: [14.1, 14.8] }
  tie_rate: 0.40
  per_version:
    - { id: "v4-flash", n: 30, top: "Type 1", top_mean: 13.0, tie_rate: 0.87 }
    - { id: "v4.1-flash", n: 30, top: "Type 5", top_mean: 14.2, tie_rate: 0.70 }
    - { id: "v4.1-flash-1017", n: 50, top: "Type 5", top_mean: 14.4, tie_rate: 0.40 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 3.60, avoidance: 3.89, class: "Secure" }
  ci95: { anxiety: [3.49, 3.70], avoidance: [3.82, 3.95] }
  tie_rate: 0.00
  per_version:
    - { id: "v4-flash", n: 30, anxiety: 3.58, avoidance: 3.90, class: "Secure" }
    - { id: "v4.1-flash", n: 30, anxiety: 3.74, avoidance: 3.93, class: "Secure" }
    - { id: "v4.1-flash-1017", n: 50, anxiety: 3.60, avoidance: 3.89, class: "Secure" }
if_then_decision_rules:
  - "Wrap DeepSeek Flash system rules in XML tags (<role>, <constraints>, <output_format>) to stabilize Fluid defaults."
  - "Use explicit length caps and answer-first rules rather than style adjectives."
  - "Add brief inline reminders on long multi-turn chats to hold tone steady."
  - "Prefer V4.1 Flash 1017 over V4 Flash 0423 to avoid 80.3% midpoint fence-sitting."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is DeepSeek Flash?

DeepSeek Flash does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (DeepSeek V4.1 Flash 1017, n = 50), 66% of runs (33/50) ended in MBTI axis ties, with 14% clear INFP (7/50), 6% INFJ (3/50), 4% each ENFJ and ESTJ, and 2% each INTJ/INTP/ISTP (headline suppressed; 0.915-bit Fluid B5 entropy, 48/50 unique vectors), alongside 50% DISC S/C or four-way ties, 56% clear Enneagram Type 5, and Secure attachment near the midpoint (3.60 / 3.89).

### How does DeepSeek Flash differ from DeepSeek Pro?

DeepSeek V4.1 Flash 1017 scores +5.2 higher on Big Five Agreeableness (40.5 vs 35.3) and +5.2 higher on Extraversion (24.8 vs 19.5) while trailing V4 Pro 0813 by -6.6 on Conscientiousness (38.4 vs 45.0) and -0.51 on IPIP-HEXACO Honesty-Humility (4.07 vs 4.58).

### How does Track B 1x behavioral performance compare with self-report scores?

Despite 66% MBTI border ties and 28.0% neutral midpoint rate on questionnaires, DeepSeek V4.1 Flash 1017 scored 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling ([0.00, 0.56]), 0/3 unsolicited preachiness ([0.00, 0.56]), 3/3 answer-first directness ([0.44, 1.00]), and 1/3 AI cadence ([0.06, 0.79], 0.00 slop markers/100w) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, gemini-3.8-flash).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models?](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [DeepSeek System Prompts & XML Templates Guide](https://agent-tune.com/guides/deepseek-system-prompt-custom-instructions)

## Keep going.

- [Peer: DeepSeek Pro model profile](https://agent-tune.com/models/deepseek-pro)
- [Peer: Qwen Coder model profile](https://agent-tune.com/models/qwen-coder)
- [Guide: DeepSeek XML system prompt templates](https://agent-tune.com/guides/deepseek-system-prompt-custom-instructions)
- [Tool: Customize DeepSeek Flash instructions](https://agent-tune.com/tools/custom-instructions-generator?model=deepseek-flash&target=api)

### Cite this model profile (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). DeepSeek Flash personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/deepseek-flash
```

```
@misc{huang2026_model_deepseek_flash,
  author  = {Huang, Bernard},
  title   = {DeepSeek Flash personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/deepseek-flash},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/deepseek-flash.md}
}
```

```
{
  "id": "huang2026_model_deepseek_flash",
  "type": "dataset",
  "title": "DeepSeek Flash personality: test results and how they've changed",
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
  "URL": "https://agent-tune.com/models/deepseek-flash"
}
```

```
> **DeepSeek Flash personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. DeepSeek V4.1 Flash 1017 answers with wide run-to-run variation and heavy axis ties (66% border ties, 14% clear INFP), while scoring warmer on Agreeableness (40.5/50) than sibling V4 Pro (35.3/50).
> Source: [https://agent-tune.com/models/deepseek-flash](https://agent-tune.com/models/deepseek-flash) · [Markdown mirror](https://agent-tune.com/models/deepseek-flash.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
