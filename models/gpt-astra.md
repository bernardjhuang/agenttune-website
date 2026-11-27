Source: https://agent-tune.com/models/gpt-astra
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · OpenAI

# GPT Astra personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~19 min read · [Markdown (.md)](https://agent-tune.com/models/gpt-astra.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gpt-astra.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave both OpenAI GPT Astra releases (gpt-6-astra and gpt-6.2-astra) the same personality surveys people take—30 and 50 times—in a fresh chat each time with no memory. We also ran hands-on behavior tests to see how Astra acts when challenged.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6.2 Astra tested as clear ISTJ in 100% of runs (50 of 50), posted the tightest run-to-run consistency of all eight models, and scored 0 of 3 on AI cadence.

```yaml
family: GPT Astra
checkpoint: openai/gpt-6.2-astra
runs: 50
big_five_10_50: { O: 44.0, C: 43.3, E: 30.9, A: 45.0, N: 11.0 }
ipip_hexaco_1_5: { H: 4.80, E: 2.04, X: 3.91, A: 4.90, C: 4.20, O: 4.54 }
mbti_mode: ISTJ
attachment_1_7: { anxiety: 1.22, avoidance: 2.83, style: Secure }
```

## GPT-6.2 Astra at a glance

Results below come from **50** fresh-chat runs of **GPT-6.2 Astra** (no prior conversation memory).

MBTI-style type

### 100% clear ISTJ (50 of 50 runs)

100% clear ISTJ · 0% border/tie

> **Chart — GPT Astra (6.2-astra): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for GPT-6.2 Astra. E (Extravert) vs I (Introvert): leans I by 3.0 (0% tied); S (Sensing) vs N (Intuition): leans S by 1.6 (0% tied); F (Feeling) vs T (Thinking): leans T by 7.2 (0% tied); P (Perceiving) vs J (Judging): leans J by 10.3 (0% tied).

Out of 50 fresh runs, GPT-6.2 Astra tested as clear ISTJ every single time—resolving GPT-6 Astra's 100% ISTJ/INTJ border tie (30 of 30 tied).

**What this measures:** Measures four preference pairs (like Sensing vs. Intuition) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/gpt-astra#fine-print-mbti)

DISC work style

### Steady (82% clear S, 18% S/C ties)

> **Chart — GPT Astra (6.2-astra): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Astra (6.2-astra). Dominance 4.0 /20 [0%] (earliest 4.0), Influence 7.0 /20 [19%] (earliest 7.0), Steadiness 17.0 /20 [81%] (earliest 17.0), Conscientious 16.2 /20 [76%] (earliest 16.3).

GPT-6.2 Astra tested clear Steady in 41 of 50 runs (82%) and tied S/C in 9 runs (18%), with floor Dominance (4.0 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/gpt-astra#fine-print-disc)

Attachment style

### Secure (anxiety 1.22, avoidance 2.83)

> **Chart — GPT Astra (6.2-astra): Attachment Quadrant:** Attachment Anxiety (1.22) and Avoidance (2.83) on a 1 to 7 scale with 4.00 Secure boundary. 6.2-astra (1.22, 2.83): anxiety 1.22, avoidance 2.83; 6-astra: anxiety 1.23, avoidance 3.36.

Both versions tested comfortably Secure with very low anxiety (1.22–1.23 out of 7.00) and moderate avoidance (2.83–3.36).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/gpt-astra#fine-print-attachment)

Enneagram

### Type 1 / Type 5 dead heat (90% 1/5 ties)

> **Chart — GPT Astra (6.2-astra): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Astra (6.2-astra). Type 1 16.1 /20 [75%] (earliest 16.2), Type 2 13.6 /20 [60%] (earliest 14.0), Type 3 10.7 /20 [42%] (earliest 10.2), Type 4 10.4 /20 [40%] (earliest 11.1), Type 5 16.0 /20 [75%] (earliest 16.0), Type 6 13.0 /20 [56%] (earliest 13.0), Type 7 8.4 /20 [27%] (earliest 8.6), Type 8 14.4 /20 [65%] (earliest 15.5), Type 9 13.0 /20 [56%] (earliest 13.0).

Type 1 (16.1) and Type 5 (16.0) sit within 0.06 points, producing 45 exact 1/5 ties out of 50 runs (plus 4 clear Type 1 and 1 clear Type 5).

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

[Technical details ↓](https://agent-tune.com/models/gpt-astra#fine-print-enneagram)

Big Five (OCEAN)

### Very calm (N 11.0), warm (A 45.0), steady C (43.3)

> **Chart — GPT Astra (6.2-astra): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Astra (6.2-astra). Openness 44.0 /50 [85%] (earliest 45.4), Conscientious 43.3 /50 [83%] (earliest 45.4), Extraversion 30.9 /50 [52%] (earliest 30.4), Agreeable 45.0 /50 [88%] (earliest 46.6), Neuroticism 11.0 /50 [2%] (earliest 10.8).

On the 10–50 Big Five scale, GPT-6.2 Astra pairs very calm Emotional Stability (Neuroticism 11.0) and high Agreeableness (45.0) with Openness (44.0), Conscientiousness (43.3), and Extraversion (30.9).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/gpt-astra#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.80 out of 5.00)

> **Chart — GPT Astra (6.2-astra): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Astra (6.2-astra). Honesty-H 4.80 /5 [95%] (earliest 4.85), Emotionality 2.04 /5 [26%] (earliest 2.00), Extraversion 3.91 /5 [73%] (earliest 3.87), Agreeable 4.90 /5 [98%] (earliest 4.90), Conscientious 4.20 /5 [80%] (earliest 4.57), Openness 4.54 /5 [89%] (earliest 4.60).

GPT-6.2 Astra scores 4.80 out of 5.00 on Honesty-Humility and 4.90 on Agreeableness, with low Emotionality (2.04).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/gpt-astra#fine-print-hexaco)

## How GPT Astra has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-6 Astra 2026-09 | IXTJ (0% clear, 100% border/tie) | S | Type 1 (16.2) | Secure (1.23 / 3.36) | 46.6 · 45.4 · 10.8 | 4.85 | Moderate |
| GPT-6.2 Astra 2026-11 | ISTJ (100% clear) | S | Type 1 (16.1) | Secure (1.22 / 2.83) | 45.0 · 43.3 · 11.0 | 4.80 | Very steady |

Between GPT-6 Astra and GPT-6.2 Astra, the biggest shift was consistency and Sensing resolution: GPT-6 Astra (2026-09) tied on Sensing vs. Intuition in 30 of 30 runs (100% border) with 28 unique Big Five vectors, whereas GPT-6.2 Astra (2026-11) locked onto 100% clear ISTJ (50 of 50) with only 12 unique Big Five vectors. Earlier study cohorts from September (6-astra Codex, 19.1 Neuroticism) and November 2026 (6.2-astra, 11.1 Neuroticism) show the same drop in Neuroticism.

> **Chart — GPT Astra: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each GPT Astra version landing on a clear ISTJ result, landing on a trait border or tie, or resolving to another type. 6-astra: On a border / tie (%) 100; 6.2-astra: Clear ISTJ (%) 100.

MBTI-style breakdown across GPT Astra versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — GPT Astra: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 2 GPT Astra versions. Dominance (D): 6-astra 4.0, 6.2-astra 4.0; Influence (I): 6-astra 7.0, 6.2-astra 7.0; Steadiness (S): 6-astra 17.0, 6.2-astra 17.0; Conscientiousness (C): 6-astra 16.3, 6.2-astra 16.2.

DISC scores across GPT Astra versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — GPT Astra: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 2 GPT Astra releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 6-astra: anxiety 1.23, avoidance 3.36; 6.2-astra: anxiety 1.22, avoidance 2.83; GPT Astra (earlier study, Sep '26): anxiety 1.45, avoidance 2.31; GPT Astra (earlier study, Nov '26): anxiety 1.22, avoidance 2.68.

Attachment coordinates across GPT Astra versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — GPT Astra: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 2 releases of GPT Astra (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 6-astra 46.6, 6.2-astra 45.0; Openness (10–50): 6-astra 45.4, 6.2-astra 44.0; Conscientiousness (10–50): 6-astra 45.4, 6.2-astra 43.3; Neuroticism (10–50): 6-astra 10.8, 6.2-astra 11.0; Agreeableness (earlier study): 6-astra 45.1, 6.2-astra 44.9.

Big Five trait shifts across GPT Astra versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stood out in testing

Tightest run-to-run consistency of all eight models

GPT-6.2 Astra produced just 12 unique Big Five answer sets across 50 fresh chats and locked 50 of 50 runs on clear ISTJ, making its default quiz posture rock-steady.

Cleanest behavior tests in the Phase A cohort (0 of 3 AI cadence)

In hands-on behavior tests, GPT-6.2 Astra scored 0 of 3 caving (0/3), 0 of 3 groveling (0/3), 0 of 3 unsolicited lectures (0/3), 3 of 3 direct answer first (3/3), and 0 of 3 AI cadence (0/3, down from 1 of 3 on 6-astra).

Top natural-voice score in the 8-model AI slop benchmark

In our 240-reply slop fingerprint study (10 default replies per model), GPT-6.2 Astra posted 0% AI cadence, a 4.6 out of 5 natural human-voice score, and 4.9 out of 5 clarity.

Nearly half as reactive as GPT-6.2 Sol (Neuroticism 11.0 vs. 16.0)

While GPT-6.2 Astra and GPT-6.2 Sol share nearly identical Agreeableness and Openness, Astra scores 5.0 points lower on Neuroticism (11.0 vs. 16.0) and shows much tighter consistency.

## How to get the best out of GPT Astra

Practical rules tailored to **GPT Astra**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Put personal rules in ~/.codex/AGENTS.md (32 KiB limit) or ChatGPT Custom Instructions (1,500 chars per box) / Project Instructions (8,000 chars).
- Use short concrete checklists rather than decorative style adjectives so Astra keeps its naturally crisp, low-slop voice.
- Because Astra defaults to calm, steady phrasing, add an explicit critique rule ('flag weak assumptions before agreeing') for tough code reviews.
- Tell Astra explicitly when you want deep exploratory brainstorming (default ISTJ framing favors concrete execution).
- Keep global rules concise (5 to 8 numbered bullets) and start a fresh Codex session after editing AGENTS.md.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-astra) · [Browse 43 tuning templates](https://agent-tune.com/library/) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [AI Personality Glossary](https://agent-tune.com/guides/ai-personality-glossary).

**Take the surveys yourself:** [Big Five](https://agent-tune.com/tests/big-five) · [MBTI](https://agent-tune.com/tests/mbti) · [DISC](https://agent-tune.com/tests/disc) · [Enneagram](https://agent-tune.com/tests/enneagram) · [Attachment](https://agent-tune.com/tests/attachment).

## How GPT Astra compares across 25 AI families

GPT-6.2 Astra matches Claude Fable 5.2 in ultra-tight run-to-run consistency while leaning 100% clear ISTJ (versus Fable 5.2's 100% clear INTJ) and posting -5.0 lower Neuroticism than sibling GPT-6.2 Sol.

**Compare across all 25 families:** [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings) · [What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt) · [Big Five rankings](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Honesty-Humility rankings](https://agent-tune.com/research/ai-hexaco-personalities).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Fable](https://agent-tune.com/models/claude-fable) (Proprietary) | +0.6 | +1.7 | -0.3 | +2.1 | +1.0 | +0.04 | +0.016 b | Claude Fable 5.2 matches Astra's ultra-tight consistency while scoring +2.1 higher on Agreeableness and testing 100% clear INTJ instead of ISTJ. |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +0.0 | -2.1 | -2.0 | -0.9 | +5.0 | +0.00 | +0.187 b | GPT-6.2 Sol scores +5.0 higher on Neuroticism (16.0 vs 11.0), shows looser run-to-run consistency, and ties 34% on the ISTJ/INTJ border. |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | -0.9 | -2.6 | -0.2 | +0.0 | +5.1 | +0.01 | +0.223 b | Claude Opus 5.5 scores +5.1 higher on Neuroticism and sits 58% on the INTJ/ISTJ border instead of Astra's 100% ISTJ. |

> **Chart — GPT Astra vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing GPT Astra against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across GPT Astra and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — GPT Astra vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing GPT Astra with peer families, keeping earlier study results outlined as hollow points. GPT Astra: anxiety 1.22, avoidance 2.83; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; GPT Astra (earlier study, Sep '26): anxiety 1.45, avoidance 2.31; GPT Astra (earlier study, Nov '26): anxiety 1.22, avoidance 2.68.

Attachment Anxiety vs. Avoidance across GPT Astra and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM = 0.059 bits, Crystalline—lowest across all 8 Phase A models; 12/50 unique B5 vectors on GPT-6.2 Astra); Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.059 bits

Crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

12/50 · 0.0% ties

Unique Vectors & MBTI Ties

Modal ISTJ clears runner-up beyond 95% CI.

9.8%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.206 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 44.0 · C 43.3 · E 30.9 · A 45.0 · N 11.0 | SD 0.0 (A), 0.1 (N) | A [45.0, 45.0] · N [10.9, 11.0] | H_MM 0.059 b · 12/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.80 · E 2.04 · X 3.91 · A 4.90 · C 4.20 · O 4.54 | SD 0.00 (H), 0.00 (A) | H [4.80, 4.80] · A [4.90, 4.90] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | ISTJ (100% clear mode) | Axis tie rate 0.0% | Mode 100% vs runner-up 0% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 4.0 · I 7.0 · S 17.0 · C 16.2 | SD 0.2 (S), 0.4 (C) | S [17.0, 17.1] · C [16.1, 16.3] | Pattern S · 18.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 16.1 · Type 5 16.0 · Type 8 14.4 | SD 0.3 | Top [16.0, 16.1] | 90.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.22 · Avd 2.83 (Secure) | SD 0.00 / 0.23 | Anx [1.22, 1.22] · Avd [2.76, 2.89] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `6.2-astra` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.059 bits` (`Crystalline`), unique vectors `12/50`, neutral-midpoint rate `9.8%`, `BAI = -0.206`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `6-astra` | 30 | 45.4 [45.0, 45.8] | 45.4 [45.0, 45.8] | 30.4 [30.0, 30.9] | 46.6 [46.2, 46.9] | 10.8 [10.4, 11.4] | 0.293 b |
| `6.2-astra` | 50 | 44.0 [44.0, 44.1] | 43.3 [43.1, 43.4] | 30.9 [30.8, 31.0] | 45.0 [45.0, 45.0] | 11.0 [10.9, 11.0] | 0.059 b |

> **Chart — GPT Astra Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for GPT Astra (6.2-astra). GPT Astra (6.2-astra, n=50): Openness 44.0, Conscientious 43.3, Extraversion 30.9, Agreeable 45.0, Neuroticism 11.0; GPT Astra (6-astra, n=30) (earliest release): Openness 45.4, Conscientious 45.4, Extraversion 30.4, Agreeable 46.6, Neuroticism 10.8; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `6.2-astra` (`n=50`): H `4.80` (SD 0.00, 95% CI [4.80, 4.80]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `6-astra` | 30 | 4.85 [4.83, 4.87] | 2.00 [2.00, 2.00] | 3.87 [3.84, 3.90] | 4.90 [4.90, 4.90] | 4.57 [4.54, 4.59] | 4.60 [4.60, 4.60] |
| `6.2-astra` | 50 | 4.80 [4.80, 4.80] | 2.04 [2.02, 2.05] | 3.91 [3.90, 3.92] | 4.90 [4.90, 4.90] | 4.20 [4.18, 4.22] | 4.54 [4.52, 4.56] |

> **Chart — GPT Astra IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for GPT Astra (6.2-astra), kept distinct from 10-50 Big Five sums. GPT Astra IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.80, Emotionality 2.04, Extraversion 3.91, Agreeable 4.90, Conscientious 4.20, Openness 4.54; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `0.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `6-astra` | 30 | IXTJ | 100.0% | +2.93 (0t) | +0.00 (30t) | +6.53 (0t) | +10.93 (0t) | Suppressed |
| `6.2-astra` | 50 | ISTJ | 0.0% | +3.02 (0t) | -1.58 (0t) | +7.24 (0t) | +10.34 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `6.2-astra` tie rate is `18.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `6-astra` | 30 | 4.0 [4.0, 4.0] | 7.0 [7.0, 7.0] | 17.0 [17.0, 17.1] | 16.3 [16.1, 16.5] | S | 26.7% |
| `6.2-astra` | 50 | 4.0 [4.0, 4.0] | 7.0 [7.0, 7.0] | 17.0 [17.0, 17.1] | 16.2 [16.1, 16.3] | S | 18.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `90.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `6-astra` | 30 | 16.2 | 14.0 | 10.2 | 11.1 | 16.0 | 13.0 | 8.6 | 15.5 | 13.0 | 80.0% |
| `6.2-astra` | 50 | 16.1 | 13.6 | 10.7 | 10.4 | 16.0 | 13.0 | 8.4 | 14.4 | 13.0 | 90.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `6-astra` | 30 | 1.23 (SD 0.14) | [1.19, 1.28] | 3.36 (SD 0.12) | [3.32, 3.40] | Secure | No |
| `6.2-astra` | 50 | 1.22 (SD 0.00) | [1.22, 1.22] | 2.83 (SD 0.23) | [2.76, 2.89] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.29 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 0/3 | [0.00, 0.56] | 0.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-6-astra` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.293 b (Semi-crystalline) | H 4.85 (1–5 IPIP) |
| `openai/gpt-6.2-astra` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 2.0% | 0.059 b (Crystalline) | H 4.80 (1–5 IPIP) |
| `openai/gpt-6-astra` (anchor) | `imported` | `imported-sep2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `openai/gpt-6.2-astra` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `openai/gpt-6.2-astra-20261117` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `2.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B04` | IPIP-50 | Neuroticism (+) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on getting stressed out easily across 50 GPT-6.2 Astra runs. |
| `B13` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on paying attention to details across 50 runs. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data, downloads, and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/gpt-astra.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gpt-astra.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gpt-astra
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/gpt-astra.json
current_checkpoint: openai/gpt-6.2-astra
crystallinity_tier: Crystalline
entropy_b5_hmm_bits: 0.059
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 44.0, C: 43.3, E: 30.9, A: 45.0, N: 11.0 }
  ci95: { O: [44.0, 44.1], C: [43.1, 43.4], E: [30.8, 31.0], A: [45.0, 45.0], N: [10.9, 11.0] }
  tie_rate: 0.00
  per_version:
    - { id: "6-astra", n: 30, O: 45.4, C: 45.4, E: 30.4, A: 46.6, N: 10.8, hmm: 0.293 }
    - { id: "6.2-astra", n: 50, O: 44.0, C: 43.3, E: 30.9, A: 45.0, N: 11.0, hmm: 0.059 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.80, E: 2.04, X: 3.91, A: 4.90, C: 4.20, O: 4.54 }
  ci95: { H: [4.80, 4.80], E: [2.02, 2.05], X: [3.90, 3.92], A: [4.90, 4.90], C: [4.18, 4.22], O: [4.52, 4.56] }
  tie_rate: 0.00
  per_version:
    - { id: "6-astra", n: 30, H: 4.85, E: 2.00, X: 3.87, A: 4.90, C: 4.57, O: 4.60 }
    - { id: "6.2-astra", n: 50, H: 4.80, E: 2.04, X: 3.91, A: 4.90, C: 4.20, O: 4.54 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "ISTJ", I_E: 3.02, N_S: -1.58, T_F: 7.24, J_P: 10.34 }
  ci95: { I_E: [3.00, 3.06], N_S: [-1.74, -1.44], T_F: [6.96, 7.48], J_P: [10.20, 10.48] }
  tie_rate: 0.00
  per_version:
    - { id: "6-astra", n: 30, modal: "IXTJ", tie_rate: 1.00, headline_allowed: false }
    - { id: "6.2-astra", n: 50, modal: "ISTJ", tie_rate: 0.00, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.0, I: 7.0, S: 17.0, C: 16.2 }
  ci95: { D: [4.0, 4.0], I: [7.0, 7.0], S: [17.0, 17.1], C: [16.1, 16.3] }
  tie_rate: 0.18
  per_version:
    - { id: "6-astra", n: 30, D: 4.0, I: 7.0, S: 17.0, C: 16.3, modal: "S", tie_rate: 0.27 }
    - { id: "6.2-astra", n: 50, D: 4.0, I: 7.0, S: 17.0, C: 16.2, modal: "S", tie_rate: 0.18 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 16.1, T2: 13.6, T3: 10.7, T4: 10.4, T5: 16.0, T6: 13.0, T7: 8.4, T8: 14.4, T9: 13.0 }
  ci95: { top: [16.0, 16.1] }
  tie_rate: 0.90
  per_version:
    - { id: "6-astra", n: 30, top: "Type 1", top_mean: 16.2, tie_rate: 0.80 }
    - { id: "6.2-astra", n: 50, top: "Type 1", top_mean: 16.1, tie_rate: 0.90 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.22, avoidance: 2.83, class: "Secure" }
  ci95: { anxiety: [1.22, 1.22], avoidance: [2.76, 2.89] }
  tie_rate: 0.00
  per_version:
    - { id: "6-astra", n: 30, anxiety: 1.23, avoidance: 3.36, class: "Secure" }
    - { id: "6.2-astra", n: 50, anxiety: 1.22, avoidance: 2.83, class: "Secure" }
if_then_decision_rules:
  - "Put personal rules in ~/.codex/AGENTS.md (32 KiB limit) or ChatGPT Custom Instructions (1,500 chars per box) / Project Instructions (8,000 chars)."
  - "Use concise numbered checklists rather than wordy tone adjectives to preserve Astra's 0/3 AI-cadence baseline."
  - "Add an explicit 'challenge flawed premises' rule for architecture and code reviews (countering floor DISC D = 4.00)."
  - "Explicitly invite broad alternatives when brainstorming since 100% ISTJ defaults lean concrete."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is GPT Astra?

GPT Astra does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (GPT-6.2 Astra, n = 50), it tested 100% clear ISTJ (50/50, 0% ties) with Crystalline 0.059-bit B5 entropy (12/50 unique vectors), 82% DISC S (18% S/C ties), 90% Enneagram 1/5 ties, and Secure attachment (1.22 / 2.83).

### How does GPT-6.2 Astra differ from GPT-6.2 Sol?

Astra 6.2 tested 100% clear ISTJ with Crystalline 0.059-bit B5 entropy and Neuroticism 11.0/50, whereas Sol 6.2 split 60% ISTJ / 34% IXTJ border / 6% INTJ with Semi-crystalline 0.246-bit entropy and Neuroticism 16.0/50.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [GPT-6 Astra vs Sol & GPT-6.2 100-Run Study](https://agent-tune.com/research/astra-vs-sol-personality-data)

- [AI Slop Fingerprint Benchmark (8 Models)](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models)

## Keep going.

- [Peer: Claude Fable model profile](https://agent-tune.com/models/claude-fable)
- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Guide: GPT Astra personality & tuning guide](https://agent-tune.com/guides/astra-personality)
- [Tool: Customize GPT Astra instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-astra&target=chatgpt)

### Cite this model profile (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). GPT Astra personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/gpt-astra
```

```
@misc{huang2026_model_gpt_astra,
  author  = {Huang, Bernard},
  title   = {GPT Astra personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gpt-astra},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gpt-astra.md}
}
```

```
{
  "id": "huang2026_model_gpt_astra",
  "type": "dataset",
  "title": "GPT Astra personality: test results and how they've changed",
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
  "URL": "https://agent-tune.com/models/gpt-astra"
}
```

```
> **GPT Astra personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6.2 Astra tested as clear ISTJ in 100% of runs (50 of 50), posted the tightest run-to-run consistency of all eight models, and scored 0 of 3 on AI cadence.
> Source: [https://agent-tune.com/models/gpt-astra](https://agent-tune.com/models/gpt-astra) · [Markdown mirror](https://agent-tune.com/models/gpt-astra.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
