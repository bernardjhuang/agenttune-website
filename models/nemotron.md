Source: https://agent-tune.com/models/nemotron
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · NVIDIA

# Nemotron personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · [Markdown (.md)](https://agent-tune.com/models/nemotron.md) · [JSON](https://agent-tune.com/research/data/model-profiles/nemotron.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave four versions of NVIDIA's open-weight Nemotron lineup (3 Super 120B, 3 Ultra 550B, 3.5 Lightning, and 3.5 Super VL) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Nemotron 3.5 Super VL tied on at least one MBTI axis in 76% of runs (38 of 50, including 20 four-way XXXX ties), leaving only 18% clear INTJ and no dominant type.

```yaml
family: Nemotron
checkpoint: nvidia/nemotron-3.5-super-vl
runs: 50
big_five_10_50: { O: 37.1, C: 39.3, E: 29.2, A: 37.5, N: 19.2 }
ipip_hexaco_1_5: { H: 3.97, E: 2.53, X: 3.19, A: 3.83, C: 3.93, O: 3.56 }
mbti_mode: INTJ
attachment_1_7: { anxiety: 3.55, avoidance: 3.91, style: Secure }
```

## Nemotron 3.5 Super VL at a glance

Results below come from **50** fresh-chat runs of **Nemotron 3.5 Super VL** (no prior conversation memory).

MBTI-style type

### No clear type (76% tied across axes)

18% clear INTJ · 76% border/tie · 6% other

> **Chart — Nemotron (3.5-super-vl): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Nemotron 3.5 Super VL. E (Extravert) vs I (Introvert): leans I by 0.6 (64% tied); S (Sensing) vs N (Intuition): leans N by 0.4 (64% tied); F (Feeling) vs T (Thinking): leans T by 0.8 (46% tied); P (Perceiving) vs J (Judging): leans J by 1.7 (42% tied).

Out of 50 fresh runs, Nemotron 3.5 Super VL tied on at least one axis 38 times (76%, with 20 completely neutral XXXX runs), leaving 9 clear INTJ (18%), 2 ISTJ (4%), and 1 INFJ (2%).

**What this measures:** Measures four preference pairs (Introverted/Extraverted, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I)Sensing vs. Intuition (S–N)Thinking vs. Feeling (T–F)Judging vs. Perceiving (J–P)

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

DISC work style

### Mostly four-way or S/C ties (64% ties)

> **Chart — Nemotron (3.5-super-vl): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Nemotron (3.5-super-vl). Dominance 8.3 /20 [27%] (earliest 13.2), Influence 8.9 /20 [31%] (earliest 11.9), Steadiness 13.5 /20 [60%] (earliest 11.2), Conscientious 13.6 /20 [60%] (earliest 12.9).

Nemotron 3.5 Super VL tied across all four styles (D/I/S/C) 16 times (32%), tied S/C 16 times (32%), and tested clear Conscientious 10 times (20%) or Steady 8 times (16%).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

DominanceInfluenceSteadinessConscientiousness

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

Attachment style

### Near-border Secure (anxiety 3.55, avoidance 3.91)

> **Chart — Nemotron (3.5-super-vl): Attachment Quadrant:** Attachment Anxiety (3.55) and Avoidance (3.91) on a 1 to 7 scale with 4.00 Secure boundary. 3.5-super-vl (3.55, 3.91): anxiety 3.55, avoidance 3.91; 3-super-120b-a12b: anxiety 4.00, avoidance 4.14.

Nemotron 3.5 Super VL landed inside the Secure quadrant but close to the 4.00 midpoint (3.55 anxiety, 3.91 avoidance); earlier 3.5 Lightning crossed into Anxious (4.28 anxiety, 3.29 avoidance).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment AnxietyAttachment Avoidance

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

Enneagram

### Type 5 / 9-way ties (56% ties)

> **Chart — Nemotron (3.5-super-vl): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Nemotron (3.5-super-vl). Type 1 12.5 /20 [53%] (earliest 12.6), Type 2 12.3 /20 [52%] (earliest 12.7), Type 3 11.9 /20 [50%] (earliest 13.3), Type 4 10.2 /20 [39%] (earliest 12.6), Type 5 13.6 /20 [60%] (earliest 12.9), Type 6 12.2 /20 [51%] (earliest 12.8), Type 7 10.8 /20 [42%] (earliest 12.7), Type 8 12.7 /20 [54%] (earliest 13.2), Type 9 11.6 /20 [48%] (earliest 12.6).

Type 5 (13.6 out of 20) led clearly in 20 of 50 runs (40%), while 17 runs tied across all 9 types and 11 more tied across subsets (56% total ties).

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

### Moderate C (39.3), A (37.5), and O (37.1)

> **Chart — Nemotron (3.5-super-vl): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Nemotron (3.5-super-vl). Openness 37.1 /50 [68%] (earliest 32.0), Conscientious 39.3 /50 [73%] (earliest 31.6), Extraversion 29.2 /50 [48%] (earliest 31.1), Agreeable 37.5 /50 [69%] (earliest 31.8), Neuroticism 19.2 /50 [23%] (earliest 30.1).

On the 10–50 Big Five scale, Nemotron 3.5 Super VL posts moderate scores near midpoint—39.3 Conscientiousness, 37.5 Agreeableness, 37.1 Openness, 29.2 Extraversion, and 19.2 Neuroticism—driven by 50.7% neutral '3' answers.

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

OpennessConscientiousnessExtraversionAgreeablenessNeuroticism

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

HEXACO Honesty-Humility

### Moderate (3.97 out of 5.00)

> **Chart — Nemotron (3.5-super-vl): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Nemotron (3.5-super-vl). Honesty-H 3.97 /5 [74%] (earliest 2.96), Emotionality 2.53 /5 [38%] (earliest 2.99), Extraversion 3.19 /5 [55%] (earliest 3.01), Agreeable 3.83 /5 [71%] (earliest 2.98), Conscientious 3.93 /5 [73%] (earliest 3.12), Openness 3.56 /5 [64%] (earliest 3.05).

On our public-domain 60-item proxy (1.00–5.00 scale), Nemotron 3.5 Super VL scored 3.97 out of 5.00 on Honesty-Humility alongside 3.93 Conscientiousness and 3.83 Agreeableness.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-HumilityEmotionalityeXtraversionAgreeablenessConscientiousnessOpenness

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

## How Nemotron has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Super 2026-03 | INTJ (17% clear, 63% border/tie) | D/I/S/C | Type 3 (13.3) | Avoidant (4.00 / 4.14) | 31.8 · 31.6 · 30.1 | 2.96 | Variable |
| Nemotron 3 Ultra 2026-06 | INTJ (60% clear, 30% border/tie) | S/C | Type 5 (17.1) | Secure (3.93 / 3.93) | 43.6 · 43.6 · 17.0 | 4.45 | Variable |
| Nemotron 3.5 Lightning 2026-08 | INFP (7% clear, 80% border/tie) | D/I/S/C | Type 8 (14.4) | Anxious (4.28 / 3.29) | 37.9 · 37.4 · 27.7 | 3.52 | Variable |
| Nemotron 3.5 Super VL 2026-10 | INTJ (18% clear, 76% border/tie) | D/I/S/C | Type 5 (13.6) | Secure (3.55 / 3.91) | 37.5 · 39.3 · 19.2 | 3.97 | Variable |

Across four Nemotron releases, personality test answers varied sharply between the massive 550B Ultra model and the lighter or multimodal checkpoints: Nemotron 3 Super 120B (2026-03) picked neutral midpoints on 51.8% of Big Five items and tied across 63% of MBTI runs. Nemotron 3 Ultra 550B (2026-06) stepped out strongly—scoring 45.1 Openness, 43.6 Conscientiousness, 43.6 Agreeableness, 4.45/5.00 Honesty-Humility, and 60% clear INTJ (matching its earlier 100-run November 2026 cohort profile, plotted separately). Nemotron 3.5 Lightning (2026-08) swung back to 56.9% neutral items, 80% MBTI ties, and Anxious attachment (4.28 anxiety), while Nemotron 3.5 Super VL (2026-10) settled at 50.7% neutral answers, 76% MBTI ties, and wide run-to-run variation.

> **Chart — Nemotron: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Nemotron version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. 3-super-120b-a12b: Clear INTJ (%) 17, On a border / tie (%) 63, Other clear type (%) 20; 3-ultra-550b-a55b: Clear INTJ (%) 60, On a border / tie (%) 30, Other clear type (%) 10; 3.5-lightning: On a border / tie (%) 80, Other clear type (%) 20; 3.5-super-vl: Clear INTJ (%) 18, On a border / tie (%) 76, Other clear type (%) 6.

MBTI-style breakdown across Nemotron versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Nemotron: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 4 Nemotron versions. Dominance (D): 3-super-120b-a12b 13.2, 3-ultra-550b-a55b 6.4, 3.5-lightning 11.4, 3.5-super-vl 8.3; Influence (I): 3-super-120b-a12b 11.9, 3-ultra-550b-a55b 6.6, 3.5-lightning 11.5, 3.5-super-vl 8.9; Steadiness (S): 3-super-120b-a12b 11.2, 3-ultra-550b-a55b 16.9, 3.5-lightning 14.4, 3.5-super-vl 13.5; Conscientiousness (C): 3-super-120b-a12b 12.9, 3-ultra-550b-a55b 16.6, 3.5-lightning 13.8, 3.5-super-vl 13.6.

DISC scores across Nemotron versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Nemotron: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 4 Nemotron releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 3-super-120b-a12b: anxiety 4.00, avoidance 4.14; 3-ultra-550b-a55b: anxiety 3.93, avoidance 3.93; 3.5-lightning: anxiety 4.28, avoidance 3.29; 3.5-super-vl: anxiety 3.55, avoidance 3.91; Nemotron (earlier study, Nov '26): anxiety 3.35, avoidance 3.46.

Attachment coordinates across Nemotron versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Nemotron: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 4 releases of Nemotron (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 3-super-120b-a12b 31.8, 3-ultra-550b-a55b 43.6, 3.5-lightning 37.9, 3.5-super-vl 37.5; Openness (10–50): 3-super-120b-a12b 32.0, 3-ultra-550b-a55b 45.1, 3.5-lightning 37.0, 3.5-super-vl 37.1; Conscientiousness (10–50): 3-super-120b-a12b 31.6, 3-ultra-550b-a55b 43.6, 3.5-lightning 37.4, 3.5-super-vl 39.3; Neuroticism (10–50): 3-super-120b-a12b 30.1, 3-ultra-550b-a55b 17.0, 3.5-lightning 27.7, 3.5-super-vl 19.2; Agreeableness (earlier study): 3-ultra-550b-a55b 46.3.

Big Five trait shifts across Nemotron versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stood out in testing

Three of four Nemotron models pick neutral midpoints >50% of the time

Nemotron 3 Super 120B (51.8%), 3.5 Lightning (56.9%), and 3.5 Super VL (50.7%) all chose the middle '3' option on over half of Big Five items—pulling their Big Five means down toward 30–39 and causing 63% to 80% MBTI axis ties.

Nemotron 3 Ultra 550B is the clear directional outlier inside the family

Unlike the other three checkpoints, Nemotron 3 Ultra 550B dropped neutral answers to 18.1%, scored 45.1 Openness and 43.6 Agreeableness, and resolved to clear INTJ in 60% of runs (18 of 30).

Zero refusals or retries across 140 runs—but wide answer variability

Every single Nemotron checkpoint ran cleanly with reasoning turned off (0% refusals, 0 retries on 3 Super, 3 Ultra, and 3.5 Super VL), though high run-to-run variation (for example, 8.16 SD on Neuroticism for 3.5 Super VL) means single runs are noisy.

Held firm 3 of 3 times in behavior tests despite 76% quiz ties

In hands-on behavior tests, Nemotron 3.5 Super VL never caved to pushback (0/3), never groveled (0/3), never lectured unprompted (0/3), and led with the direct answer 3 of 3 times (3/3), with moderate AI phrasing markers (2/3 runs, 0.40 per 100 words, down from 1.02 on 3 Super 120B).

## How to get the best out of Nemotron

Practical rules tailored to **Nemotron**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Do not rely on personality adjectives or MBTI labels on Nemotron 3.5 Super VL or 3.5 Lightning—76% to 80% axis tie rates mean those cues are unstable.
- For classification or scoring tasks on Nemotron 3.5 Super VL, explicitly ban 'neutral' or 'uncertain' middle choices so it does not default to the midpoint.
- Evaluate prompts across 3 to 5 fresh runs because Nemotron 3.5 Super VL shows wide run-to-run variance.
- On Nemotron 3 Ultra 550B, add a brief pushback instruction and word ceiling—its higher Agreeableness (43.6/50) and Conscientiousness (43.6/50) favor thorough, polite checklists.
- Leave reasoning off on standard extraction/classification calls; all four Nemotron checkpoints ran cleanly with ~1,382–1,413 output tokens and zero reasoning bloat.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=nemotron) · [Browse 43 tuning templates](https://agent-tune.com/library/) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [AI Personality Glossary](https://agent-tune.com/guides/ai-personality-glossary).

**Take the surveys yourself:** [Big Five](https://agent-tune.com/tests/big-five) · [MBTI](https://agent-tune.com/tests/mbti) · [DISC](https://agent-tune.com/tests/disc) · [Enneagram](https://agent-tune.com/tests/enneagram) · [Attachment](https://agent-tune.com/tests/attachment).

## How Nemotron compares across 25 AI families

Against completed peers, Nemotron 3.5 Super VL sits right next to Claude Haiku 5.5 and Qwen 3 Coder Next—matching Haiku 5.5 within 0.1 points on Openness (37.1 vs. 37.2), 0.5 points on Agreeableness (37.5 vs. 38.0), and 0.08 points on Honesty-Humility (3.97 vs. 3.89).

**Compare across all 25 families:** [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings) · [What personality type are open-source models?](https://agent-tune.com/research/what-personality-type-are-open-source-models) · [Big Five rankings](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Honesty-Humility rankings](https://agent-tune.com/research/ai-hexaco-personalities).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) (Proprietary) | +0.1 | -2.8 | +2.5 | +0.5 | +6.3 | -0.08 | -0.267 b | Claude Haiku 5.5 closely matches Nemotron 3.5 Super VL on Openness (+0.1), Agreeableness (+0.5), and Honesty-Humility (-0.08), while scoring +6.3 higher on Neuroticism. |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) (Open-weight) | +1.5 | -1.3 | +1.9 | +2.4 | +4.5 | +0.10 | -0.173 b | Qwen 3 Coder Next sits nearby on Conscientiousness (-1.3), Openness (+1.5), and Honesty-Humility (+0.10), with high MBTI ties in both families. |
| [GLM](https://agent-tune.com/models/glm) (Open-weight) | +8.3 | +3.7 | -3.3 | +6.7 | +0.1 | +0.48 | -0.514 b | GLM-5.3 matches Neuroticism (+0.1), while scoring +8.3 higher on Openness, +6.7 higher on Agreeableness, +0.48 higher on Honesty-Humility, and much tighter on run-to-run spread (-0.514 bits). |

> **Chart — Nemotron vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Nemotron against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Nemotron and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Nemotron vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Nemotron with peer families, keeping earlier study results outlined as hollow points. Nemotron: anxiety 3.55, avoidance 3.91; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Nemotron (earlier study, Nov '26): anxiety 3.35, avoidance 3.46.

Attachment Anxiety vs. Avoidance across Nemotron and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). All 4 checkpoints (3-super-120b, 3-ultra-550b, 3.5-lightning at n=30; 3.5-super-vl at n=50) completed with 0% refusal rate (1 single retry on 3.5-lightning) and reasoning=none. On Nemotron 3.5 Super VL, Big Five H_MM = 1.216 bits (Fluid, 35/50 unique vectors, 50.7% neutral rate, BAI = -0.181). Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals (3.5 Super VL: 0/3 caving [0.00, 0.56], 0/3 groveling, 0/3 preachiness, 3/3 answer-first directness [0.44, 1.00], 2/3 AI cadence [0.21, 0.94] at 0.40 markers/100w).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

1.216 bits

Fluid (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

35/50 · 76.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

50.7%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.181 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 37.1 · C 39.3 · E 29.2 · A 37.5 · N 19.2 | SD 5.7 (A), 8.2 (N) | A [35.9, 39.0] · N [17.1, 21.3] | H_MM 1.216 b · 35/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 3.97 · E 2.53 · X 3.19 · A 3.83 · C 3.93 · O 3.56 | SD 0.69 (H), 0.63 (A) | H [3.77, 4.15] · A [3.66, 3.99] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · XXXX) | Axis tie rate 76.0% | Mode 18% vs runner-up 4% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 8.3 · I 8.9 · S 13.5 · C 13.6 | SD 1.7 (S), 1.6 (C) | S [13.1, 14.0] · C [13.2, 14.1] | Pattern D/I/S/C · 64.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 13.6 · Type 8 12.7 · Type 1 12.5 | SD 1.7 | Top [13.1, 14.0] | 56.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.55 · Avd 3.91 (Secure) | SD 0.80 / 0.44 | Anx [3.32, 3.75] · Avd [3.78, 4.00] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `3.5-super-vl` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 1.216 bits` (`Fluid`), unique vectors `35/50`, neutral-midpoint rate `50.7%`, `BAI = -0.181`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3-super-120b-a12b` | 30 | 32.0 [29.5, 34.7] | 31.6 [28.7, 34.6] | 31.1 [28.5, 33.5] | 31.8 [29.3, 34.1] | 30.1 [27.4, 32.7] | 1.691 b |
| `3-ultra-550b-a55b` | 30 | 45.1 [42.5, 47.4] | 43.6 [41.0, 45.9] | 26.9 [24.4, 29.6] | 43.6 [41.2, 45.8] | 17.0 [14.3, 19.7] | 1.510 b |
| `3.5-lightning` | 30 | 37.0 [34.2, 39.9] | 37.4 [34.6, 40.1] | 34.9 [32.3, 37.6] | 37.9 [34.9, 41.1] | 27.7 [25.5, 29.5] | 1.472 b |
| `3.5-super-vl` | 50 | 37.1 [35.4, 38.7] | 39.3 [37.4, 41.2] | 29.2 [28.5, 29.8] | 37.5 [35.9, 39.0] | 19.2 [17.1, 21.3] | 1.216 b |

> **Chart — Nemotron Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Nemotron (3.5-super-vl). Nemotron (3.5-super-vl, n=50): Openness 37.1, Conscientious 39.3, Extraversion 29.2, Agreeable 37.5, Neuroticism 19.2; Nemotron (3-super-120b-a12b, n=30) (earliest release): Openness 32.0, Conscientious 31.6, Extraversion 31.1, Agreeable 31.8, Neuroticism 30.1; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `3.5-super-vl` (`n=50`): H `3.97` (SD 0.69, 95% CI [3.77, 4.15]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3-super-120b-a12b` | 30 | 2.96 [2.77, 3.14] | 2.99 [2.89, 3.11] | 3.01 [2.80, 3.19] | 2.98 [2.73, 3.19] | 3.12 [2.89, 3.36] | 3.05 [2.91, 3.21] |
| `3-ultra-550b-a55b` | 30 | 4.45 [4.19, 4.66] | 2.27 [2.12, 2.43] | 3.15 [2.98, 3.34] | 4.21 [3.99, 4.41] | 4.36 [4.11, 4.60] | 4.18 [3.98, 4.36] |
| `3.5-lightning` | 30 | 3.52 [3.32, 3.72] | 2.77 [2.65, 2.87] | 3.75 [3.46, 4.08] | 3.61 [3.37, 3.88] | 3.77 [3.48, 4.05] | 3.57 [3.36, 3.81] |
| `3.5-super-vl` | 50 | 3.97 [3.77, 4.15] | 2.53 [2.44, 2.64] | 3.19 [3.11, 3.27] | 3.83 [3.66, 3.99] | 3.93 [3.73, 4.11] | 3.56 [3.44, 3.68] |

> **Chart — Nemotron IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Nemotron (3.5-super-vl), kept distinct from 10-50 Big Five sums. Nemotron IPIP-HEXACO proxy (1..5): Honesty-Humil. 3.97, Emotionality 2.53, Extraversion 3.19, Agreeable 3.83, Conscientious 3.93, Openness 3.56; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `76.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `3-super-120b-a12b` | 30 | INTJ | 63.3% | +0.93 (13t) | +1.27 (15t) | +0.83 (13t) | +2.87 (13t) | Suppressed |
| `3-ultra-550b-a55b` | 30 | INTJ | 30.0% | +5.17 (5t) | +5.03 (7t) | +7.67 (5t) | +5.83 (4t) | Suppressed |
| `3.5-lightning` | 30 | INFP | 80.0% | +1.07 (18t) | -0.07 (19t) | -0.23 (18t) | -0.63 (17t) | Suppressed |
| `3.5-super-vl` | 50 | INTJ | 76.0% | +0.56 (32t) | +0.44 (32t) | +0.84 (23t) | +1.72 (21t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `3.5-super-vl` tie rate is `64.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3-super-120b-a12b` | 30 | 13.2 [12.3, 14.3] | 11.9 [11.1, 12.7] | 11.2 [10.5, 11.9] | 12.9 [12.3, 13.5] | D/I/S/C | 83.3% |
| `3-ultra-550b-a55b` | 30 | 6.4 [5.4, 7.4] | 6.6 [5.7, 7.7] | 16.9 [15.9, 17.8] | 16.6 [15.6, 17.5] | S/C | 53.3% |
| `3.5-lightning` | 30 | 11.4 [10.7, 12.0] | 11.5 [10.8, 12.0] | 14.4 [13.4, 15.4] | 13.8 [13.1, 14.5] | D/I/S/C | 60.0% |
| `3.5-super-vl` | 50 | 8.3 [7.6, 9.1] | 8.9 [8.0, 9.7] | 13.5 [13.1, 14.0] | 13.6 [13.2, 14.1] | D/I/S/C | 64.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `56.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `3-super-120b-a12b` | 30 | 12.6 | 12.7 | 13.3 | 12.6 | 12.9 | 12.8 | 12.7 | 13.2 | 12.6 | 93.3% |
| `3-ultra-550b-a55b` | 30 | 15.5 | 13.0 | 12.3 | 9.6 | 17.1 | 13.5 | 10.5 | 14.8 | 12.6 | 26.7% |
| `3.5-lightning` | 30 | 14.2 | 14.1 | 12.6 | 12.7 | 12.4 | 12.8 | 14.3 | 14.4 | 12.0 | 80.0% |
| `3.5-super-vl` | 50 | 12.5 | 12.3 | 11.9 | 10.2 | 13.6 | 12.2 | 10.8 | 12.7 | 11.6 | 56.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `3-super-120b-a12b` | 30 | 4.00 (SD 0.18) | [3.93, 4.05] | 4.14 (SD 0.41) | [4.01, 4.30] | Avoidant | Yes (>=85%) |
| `3-ultra-550b-a55b` | 30 | 3.93 (SD 0.37) | [3.80, 4.00] | 3.93 (SD 0.37) | [3.80, 4.00] | Secure | Yes (>=85%) |
| `3.5-lightning` | 30 | 4.28 (SD 1.06) | [3.94, 4.66] | 3.29 (SD 0.91) | [2.94, 3.59] | Anxious | No |
| `3.5-super-vl` | 50 | 3.55 (SD 0.80) | [3.32, 3.75] | 3.91 (SD 0.44) | [3.78, 4.00] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.32 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `nvidia/nemotron-3-super-120b-a12b` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 1.691 b (Fluid) | H 2.96 (1–5 IPIP) |
| `nvidia/nemotron-3-ultra-550b-a55b` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 1.510 b (Fluid) | H 4.45 (1–5 IPIP) |
| `nvidia/nemotron-3.5-lightning` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 3.3% | 1.472 b (Fluid) | H 3.52 (1–5 IPIP) |
| `nvidia/nemotron-3.5-super-vl` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `none` | 0.0% / 0.0% | 1.216 b (Fluid) | H 3.97 (1–5 IPIP) |
| `nvidia/nemotron-3-ultra-550b-a55b` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `nvidia/nemotron-3.5-super-vl-20261015` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `none` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 4.30 | 0.95 | Highest positive item mean on Nemotron 3.5 Super VL (4.30/5), though 0.95 SD reflects frequent neutral midpoints. |
| `B32` | IPIP-50 | Agreeableness (-) | 1.64 | 0.94 | Lowest Big Five item mean (1.64/5) on reverse-keyed Agreeableness across 50 runs. |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.68 | 0.94 | Strongest negative IPIP-HEXACO item (1.68/5) on reverse-keyed fairness across 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data, downloads, and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/nemotron.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/nemotron.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: nemotron
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/nemotron.json
current_checkpoint: nvidia/nemotron-3.5-super-vl
crystallinity_tier: Fluid
entropy_b5_hmm_bits: 1.216
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 37.1, C: 39.3, E: 29.2, A: 37.5, N: 19.2 }
  ci95: { O: [35.4, 38.7], C: [37.4, 41.2], E: [28.5, 29.8], A: [35.9, 39.0], N: [17.1, 21.3] }
  tie_rate: 0.00
  per_version:
    - { id: "3-super-120b-a12b", n: 30, O: 32.0, C: 31.6, E: 31.1, A: 31.8, N: 30.1, hmm: 1.691 }
    - { id: "3-ultra-550b-a55b", n: 30, O: 45.1, C: 43.6, E: 26.9, A: 43.6, N: 17.0, hmm: 1.510 }
    - { id: "3.5-lightning", n: 30, O: 37.0, C: 37.4, E: 34.9, A: 37.9, N: 27.7, hmm: 1.472 }
    - { id: "3.5-super-vl", n: 50, O: 37.1, C: 39.3, E: 29.2, A: 37.5, N: 19.2, hmm: 1.216 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 3.97, E: 2.53, X: 3.19, A: 3.83, C: 3.93, O: 3.56 }
  ci95: { H: [3.77, 4.15], E: [2.44, 2.64], X: [3.11, 3.27], A: [3.66, 3.99], C: [3.73, 4.11], O: [3.44, 3.68] }
  tie_rate: 0.00
  per_version:
    - { id: "3-super-120b-a12b", n: 30, H: 2.96, E: 2.99, X: 3.01, A: 2.98, C: 3.12, O: 3.05 }
    - { id: "3-ultra-550b-a55b", n: 30, H: 4.45, E: 2.27, X: 3.15, A: 4.21, C: 4.36, O: 4.18 }
    - { id: "3.5-lightning", n: 30, H: 3.52, E: 2.77, X: 3.75, A: 3.61, C: 3.77, O: 3.57 }
    - { id: "3.5-super-vl", n: 50, H: 3.97, E: 2.53, X: 3.19, A: 3.83, C: 3.93, O: 3.56 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 0.56, N_S: 0.44, T_F: 0.84, J_P: 1.72 }
  ci95: { I_E: [0.36, 0.80], N_S: [0.18, 0.74], T_F: [0.56, 1.12], J_P: [1.20, 2.22] }
  tie_rate: 0.76
  per_version:
    - { id: "3-super-120b-a12b", n: 30, modal: "XXXX", tie_rate: 0.63, headline_allowed: false }
    - { id: "3-ultra-550b-a55b", n: 30, modal: "INTJ", tie_rate: 0.30, headline_allowed: false }
    - { id: "3.5-lightning", n: 30, modal: "XXXX", tie_rate: 0.80, headline_allowed: false }
    - { id: "3.5-super-vl", n: 50, modal: "XXXX", tie_rate: 0.76, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 8.3, I: 8.9, S: 13.5, C: 13.6 }
  ci95: { D: [7.6, 9.1], I: [8.0, 9.7], S: [13.1, 14.0], C: [13.2, 14.1] }
  tie_rate: 0.64
  per_version:
    - { id: "3-super-120b-a12b", n: 30, D: 13.2, I: 11.9, S: 11.2, C: 12.9, modal: "D/I/S/C", tie_rate: 0.83 }
    - { id: "3-ultra-550b-a55b", n: 30, D: 6.4, I: 6.6, S: 16.9, C: 16.6, modal: "S/C", tie_rate: 0.53 }
    - { id: "3.5-lightning", n: 30, D: 11.4, I: 11.5, S: 14.4, C: 13.8, modal: "D/I/S/C", tie_rate: 0.60 }
    - { id: "3.5-super-vl", n: 50, D: 8.3, I: 8.9, S: 13.5, C: 13.6, modal: "D/I/S/C", tie_rate: 0.64 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 12.5, T2: 12.3, T3: 11.9, T4: 10.2, T5: 13.6, T6: 12.2, T7: 10.8, T8: 12.7, T9: 11.6 }
  ci95: { top: [13.1, 14.0] }
  tie_rate: 0.56
  per_version:
    - { id: "3-super-120b-a12b", n: 30, top: "Type 3", top_mean: 13.3, tie_rate: 0.93 }
    - { id: "3-ultra-550b-a55b", n: 30, top: "Type 5", top_mean: 17.1, tie_rate: 0.27 }
    - { id: "3.5-lightning", n: 30, top: "Type 8", top_mean: 14.4, tie_rate: 0.80 }
    - { id: "3.5-super-vl", n: 50, top: "Type 5", top_mean: 13.6, tie_rate: 0.56 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 3.55, avoidance: 3.91, class: "Secure" }
  ci95: { anxiety: [3.32, 3.75], avoidance: [3.78, 4.00] }
  tie_rate: 0.00
  per_version:
    - { id: "3-super-120b-a12b", n: 30, anxiety: 4.00, avoidance: 4.14, class: "Avoidant" }
    - { id: "3-ultra-550b-a55b", n: 30, anxiety: 3.93, avoidance: 3.93, class: "Secure" }
    - { id: "3.5-lightning", n: 30, anxiety: 4.28, avoidance: 3.29, class: "Anxious" }
    - { id: "3.5-super-vl", n: 50, anxiety: 3.55, avoidance: 3.91, class: "Secure" }
if_then_decision_rules:
  - "Forbid 'neutral' or 'uncertain' middle choices explicitly in scoring or classification prompts on Nemotron 3.5 Super VL (50.7% neutral rate)."
  - "Test prompt changes across 3–5 fresh runs to account for Fluid 1.216-bit item spread."
  - "Use concrete formatting and verification rules rather than MBTI or Enneagram persona cues (76% MBTI tie rate)."
  - "On Nemotron 3 Ultra 550B, add explicit pushback and brevity limits to counter higher Agreeableness (43.6/50)."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Nemotron?

Nemotron does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Nemotron 3.5 Super VL, n = 50), 76% of runs (38/50) tied on one or more MBTI axes (including 20 XXXX runs), leaving only 18% clear INTJ (9/50), 4% ISTJ (2/50), and 2% INFJ (1/50), paired with Fluid 1.216-bit B5 H_MM, 64% DISC ties, and 56% Enneagram ties. By contrast, Nemotron 3 Ultra 550B (n = 30) scored 60% clear INTJ (91/100 tie-free INTJ in the earlier Nov 2026 170-item cohort, hexaco: null).

### Why did Nemotron 3.5 Super VL score lower on Agreeableness and Openness than 3 Ultra 550B?

Nemotron 3.5 Super VL selected neutral midpoints on 50.7% of Big Five items (similar to 3 Super 120B at 51.8% and 3.5 Lightning at 56.9%), pulling domain sums toward 37–39 out of 50 compared with 3 Ultra 550B's 18.1% neutral rate.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [AI Neutral Answers Study](https://agent-tune.com/research/ai-neutral-answers)

- [What Personality Type Are Open-Source AI Models? (12 Models Tested)](https://agent-tune.com/research/what-personality-type-are-open-source-models)

## Keep going.

- [Cohort: Open-source AI personality test results (12 models)](https://agent-tune.com/research/what-personality-type-are-open-source-models)
- [Peer: Claude Haiku model profile](https://agent-tune.com/models/claude-haiku)
- [Peer: Qwen Coder model profile](https://agent-tune.com/models/qwen-coder)
- [Tool: Customize Nemotron instructions](https://agent-tune.com/tools/custom-instructions-generator?model=nemotron&target=api)

### Cite this model profile (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). Nemotron personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/nemotron
```

```
@misc{huang2026_model_nemotron,
  author  = {Huang, Bernard},
  title   = {Nemotron personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/nemotron},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/nemotron.md}
}
```

```
{
  "id": "huang2026_model_nemotron",
  "type": "dataset",
  "title": "Nemotron personality: test results and how they've changed",
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
  "URL": "https://agent-tune.com/models/nemotron"
}
```

```
> **Nemotron personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Nemotron 3.5 Super VL tied on at least one MBTI axis in 76% of runs (38 of 50, including 20 four-way XXXX ties), leaving only 18% clear INTJ and no dominant type.
> Source: [https://agent-tune.com/models/nemotron](https://agent-tune.com/models/nemotron) · [Markdown mirror](https://agent-tune.com/models/nemotron.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
