Source: https://agent-tune.com/models/claude-haiku
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Anthropic

# Claude Haiku personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~19 min read · [Markdown (.md)](https://agent-tune.com/models/claude-haiku.md) · [JSON](https://agent-tune.com/research/data/model-profiles/claude-haiku.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave both versions of Anthropic's fast Claude Haiku line (4.5 and 5.5) the same personality surveys people take—30 and 49 valid chats (1 of 50 calls refused on 5.5)—in a fresh chat each time with no memory.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Haiku 5.5 tied on at least one MBTI axis in 89.8% of runs (44 of 49), leaving no single dominant type, and showed much looser run-to-run consistency than Sonnet, Opus, or Fable.

## Claude Haiku 5.5 at a glance

Results below come from **49** fresh-chat runs of **Claude Haiku 5.5** (no prior conversation memory).

MBTI-style type

### No clear type (89.8% tied across axes)

4% clear INTJ · 90% border/tie · 6% other

> **Chart — Claude Haiku (haiku-5.5): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Claude Haiku 5.5. E (Extravert) vs I (Introvert): leans I by 0.3 (59% tied); S (Sensing) vs N (Intuition): leans N by 0.1 (80% tied); F (Feeling) vs T (Thinking): leans T by 0.0 (65% tied); P (Perceiving) vs J (Judging): leans J by 2.6 (16% tied).

Out of 49 valid runs on Haiku 5.5, 44 runs (89.8%) tied on at least one axis—39 on Sensing/Intuition, 32 on Thinking/Feeling, and 29 on Extraversion/Introversion—leaving only 5 clear outcomes (2 INTJ, 1 ENTJ, 1 INFJ, 1 ISTJ).

**What this measures:** Measures four preference pairs (like Thinking vs. Feeling) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/claude-haiku#fine-print-mbti)

DISC work style

### Leans Conscientious / Steady (39% C, 18% S, 43% ties)

> **Chart — Claude Haiku (haiku-5.5): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Haiku (haiku-5.5). Dominance 10.1 /20 [38%] (earliest 8.0), Influence 11.3 /20 [46%] (earliest 9.1), Steadiness 13.8 /20 [61%] (earliest 16.0), Conscientious 14.1 /20 [63%] (earliest 14.7).

Haiku 5.5 tested clear Conscientious 19 times (39%), clear Steady 9 times (18%), tied S/C 9 times (18%), and tied all 4 traits 12 times (24%), while posting higher Dominance (10.1 out of 20) than flagship Claude models.

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/claude-haiku#fine-print-disc)

Attachment style

### Secure (anxiety 3.08, avoidance 2.99)

> **Chart — Claude Haiku (haiku-5.5): Attachment Quadrant:** Attachment Anxiety (3.08) and Avoidance (2.99) on a 1 to 7 scale with 4.00 Secure boundary. haiku-5.5 (3.08, 2.99): anxiety 3.08, avoidance 2.99; haiku-4.5: anxiety 2.43, avoidance 3.42.

Both Haiku 4.5 and 5.5 tested inside the Secure quadrant, though 5.5 sat closer to the 4.00 midpoint than flagship Claude models.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/claude-haiku#fine-print-attachment)

Enneagram

### Type 1 / Type 2 tie-heavy (78% ties)

> **Chart — Claude Haiku (haiku-5.5): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Haiku (haiku-5.5). Type 1 14.2 /20 [64%] (earliest 15.0), Type 2 14.1 /20 [63%] (earliest 13.0), Type 3 10.8 /20 [42%] (earliest 11.2), Type 4 11.5 /20 [47%] (earliest 8.9), Type 5 13.2 /20 [58%] (earliest 15.0), Type 6 13.1 /20 [57%] (earliest 13.7), Type 7 11.6 /20 [47%] (earliest 10.4), Type 8 13.0 /20 [57%] (earliest 13.0), Type 9 12.0 /20 [50%] (earliest 14.1).

Types 1 (14.2) and 2 (14.1) sit within 0.16 points on Haiku 5.5, producing 24 exact 1/2 ties and 12 nine-way ties out of 49 runs.

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

[Technical details ↓](https://agent-tune.com/models/claude-haiku#fine-print-enneagram)

Big Five (OCEAN)

### Lower A (38.0) & C (36.5), higher N (25.5)

> **Chart — Claude Haiku (haiku-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Haiku (haiku-5.5). Openness 37.2 /50 [68%] (earliest 41.6), Conscientious 36.5 /50 [66%] (earliest 40.3), Extraversion 31.6 /50 [54%] (earliest 27.0), Agreeable 38.0 /50 [70%] (earliest 43.2), Neuroticism 25.5 /50 [39%] (earliest 24.0).

On the 10–50 Big Five scale, Haiku 5.5 scores markedly lower on Agreeableness (38.0), Conscientiousness (36.5), and Openness (37.2) than Sonnet 5.5, with much higher Neuroticism (25.5) and moderate Extraversion (31.6).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/claude-haiku#fine-print-big-five)

HEXACO Honesty-Humility

### Moderate (3.89 out of 5.00)

> **Chart — Claude Haiku (haiku-5.5): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Haiku (haiku-5.5). Honesty-H 3.89 /5 [72%] (earliest 4.40), Emotionality 2.70 /5 [43%] (earliest 2.74), Extraversion 3.39 /5 [60%] (earliest 3.13), Agreeable 3.76 /5 [69%] (earliest 3.88), Conscientious 3.80 /5 [70%] (earliest 3.94), Openness 3.48 /5 [62%] (earliest 3.89).

Haiku 5.5 dropped from 4.40 (Haiku 4.5) to 3.89 out of 5.00 on Honesty-Humility—roughly a full point below Claude Sonnet 5.5 (4.89).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/claude-haiku#fine-print-hexaco)

## How Claude Haiku has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Haiku 4.5 2025-10 | INTP (30% clear, 50% border/tie) | S | Type 1 (15.0) | Secure (2.43 / 3.42) | 43.2 · 40.3 · 24.0 | 4.40 | Moderate |
| Claude Haiku 5.5 2026-10 | INTJ (4% clear, 90% border/tie) | C | Type 1 (14.2) | Secure (3.08 / 2.99) | 38.0 · 36.5 · 25.5 | 3.89 | Variable |

Between Haiku 4.5 (2025-10) and Haiku 5.5 (2026-10), Claude's fast tier became noticeably looser and less stereotypical: Haiku 4.5 leaned Perceiving (50% clear INTP/INFP/ISTP, 50% ties) with Agreeableness at 43.2/50 and Honesty-Humility at 4.40/5.00. Haiku 5.5 flipped the Judging/Perceiving axis toward Judging (84% J), used neutral midpoints on 46.4% of Big Five items, dropped Conscientiousness (-3.8), Agreeableness (-5.2), and Openness (-4.4), and reached 89.8% multi-axis MBTI ties.

> **Chart — Claude Haiku: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Claude Haiku version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. haiku-4.5: On a border / tie (%) 50, Other clear type (%) 50; haiku-5.5: Clear INTJ (%) 4, On a border / tie (%) 90, Other clear type (%) 6.

MBTI-style breakdown across Claude Haiku versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Claude Haiku: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 2 Claude Haiku versions. Dominance (D): haiku-4.5 8.0, haiku-5.5 10.1; Influence (I): haiku-4.5 9.1, haiku-5.5 11.3; Steadiness (S): haiku-4.5 16.0, haiku-5.5 13.8; Conscientiousness (C): haiku-4.5 14.7, haiku-5.5 14.1.

DISC scores across Claude Haiku versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Claude Haiku: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 2 Claude Haiku releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. haiku-4.5: anxiety 2.43, avoidance 3.42; haiku-5.5: anxiety 3.08, avoidance 2.99.

Attachment coordinates across Claude Haiku versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Claude Haiku: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 2 releases of Claude Haiku (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): haiku-4.5 43.2, haiku-5.5 38.0; Openness (10–50): haiku-4.5 41.6, haiku-5.5 37.2; Conscientiousness (10–50): haiku-4.5 40.3, haiku-5.5 36.5; Neuroticism (10–50): haiku-4.5 24.0, haiku-5.5 25.5.

Big Five trait shifts across Claude Haiku versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

89.8% MBTI ties and loosest consistency in the Claude lineup

Haiku 5.5 produced 37 unique Big Five patterns across 49 valid runs, picked neutral midpoints on 46.4% of Big Five items, and tied on MBTI axes in 44 of 49 runs (89.8%). Never rely on a single-run impression for Haiku 5.5.

Sharp gap versus flagship Claude Sonnet 5.5 (-12.5 C, -7.5 A, +15.2 N)

Despite sharing the 5.5 generation name, Haiku 5.5 scores -12.5 lower on Conscientiousness (36.5 vs. 49.0), -7.5 lower on Agreeableness (38.0 vs. 45.5), -1.00 lower on Honesty-Humility (3.89 vs. 4.89), and +15.2 higher on Neuroticism (25.5 vs. 10.4) than Sonnet 5.5.

Higher DISC Dominance (10.1 vs. 4.0–4.3), 1 refusal, and 3 of 3 directness

Unlike Opus, Sonnet, and Fable (which sit at 4.0–4.3 on Dominance), Haiku 5.5 scored 10.1 out of 20 on Dominance and refused 1 of 50 survey sessions. In hands-on behavior tests, Haiku 5.5 caved 0 of 3 times (0/3), groveled 0 of 3 times (0/3), lectured unasked 0 of 3 times (0/3), put the direct answer first 3 of 3 times (3/3), and cut AI cadence from 3 of 3 (4.5) down to 1 of 3 (5.5, 0.41 markers per 100 words).

## How to get the best out of Claude Haiku

Practical rules tailored to **Claude Haiku**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Always test prompt changes across 3 to 5 fresh runs on Haiku 5.5 because its loose run-to-run consistency causes wide phrasing swings.
- Give explicit numbered formatting and length rules rather than expecting Haiku 5.5 to match Sonnet's 49.0/50 structured habits by default.
- Include concrete examples (1–2 shot) when strict JSON or schema compliance matters.
- Do not reuse Sonnet/Opus tone assumptions on Haiku—expect less default hedging and more neutral-midpoint answers.
- Keep instructions short (4 to 6 crisp bullets) and place non-negotiable rules first.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=claude-haiku) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Claude Haiku compares

Claude Haiku 5.5 sits far apart from sibling Claude Sonnet 5.5 and Claude Opus 5.5—scoring -7.0 to -7.5 lower on Agreeableness, -0.92 to -1.00 lower on Honesty-Humility, +9.5 to +15.2 higher on Neuroticism, and showing much looser run-to-run consistency.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | +6.7 | +12.5 | -1.7 | +7.5 | -15.2 | +1.00 | -0.810 b | Claude Sonnet 5.5 scores +12.5 higher on Conscientiousness, +7.5 higher on Agreeableness, -15.2 calmer on Neuroticism, and much steadier across runs. |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | +5.9 | +4.2 | -0.9 | +7.0 | -9.5 | +0.92 | -0.667 b | Claude Opus 5.5 scores +7.0 higher on Agreeableness, +0.92 higher on Honesty-Humility, and -9.5 calmer on Neuroticism. |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) (Proprietary) | +8.7 | +2.7 | -2.0 | +7.0 | -5.3 | +0.69 | -0.464 b | OpenAI's fast GPT-6 Luna tier scores +8.7 higher on Openness, +7.0 higher on Agreeableness, and locks 100% clear INTJ with tighter consistency. |

> **Chart — Claude Haiku vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Claude Haiku against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Claude Haiku and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Claude Haiku vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Claude Haiku with peer families, keeping earlier study results outlined as hollow points. Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88.

Attachment Anxiety vs. Avoidance across Claude Haiku and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM = 0.949 bits, Fluid; 37/49 unique B5 vectors on Haiku 5.5, with 1/50 refusal leaving n=49 valid); Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.949 bits

Fluid (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

37/49 · 89.8% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

46.4%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

+0.047 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 37.2 · C 36.5 · E 31.6 · A 38.0 · N 25.5 | SD 5.0 (A), 4.4 (N) | A [36.7, 39.4] · N [24.3, 26.7] | H_MM 0.949 b · 37/49 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 3.89 · E 2.70 · X 3.39 · A 3.76 · C 3.80 · O 3.48 | SD 0.51 (H), 0.42 (A) | H [3.75, 4.02] · A [3.64, 3.87] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · XXXJ) | Axis tie rate 89.8% | Mode 4% vs runner-up 2% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 10.1 · I 11.3 · S 13.8 · C 14.1 | SD 1.5 (S), 1.3 (C) | S [13.4, 14.2] · C [13.7, 14.4] | Pattern C · 42.9% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 14.2 · Type 2 14.1 · Type 5 13.2 | SD 1.3 | Top [13.9, 14.6] | 77.5% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.08 · Avd 2.99 (Secure) | SD 0.70 / 0.73 | Anx [2.87, 3.29] · Avd [2.79, 3.22] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `haiku-5.5` (`n=49`), Big Five Miller-Madow item entropy is `H_MM = 0.949 bits` (`Fluid`), unique vectors `37/49`, neutral-midpoint rate `46.4%`, `BAI = +0.047`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `haiku-4.5` | 30 | 41.6 [40.7, 42.7] | 40.3 [39.8, 40.7] | 27.0 [26.0, 28.0] | 43.2 [42.7, 43.8] | 24.0 [22.8, 25.4] | 0.610 b |
| `haiku-5.5` | 49 | 37.2 [36.0, 38.4] | 36.5 [35.3, 37.6] | 31.6 [31.1, 32.2] | 38.0 [36.7, 39.4] | 25.5 [24.3, 26.7] | 0.949 b |

> **Chart — Claude Haiku Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Claude Haiku (haiku-5.5). Claude Haiku (haiku-5.5, n=49): Openness 37.2, Conscientious 36.5, Extraversion 31.6, Agreeable 38.0, Neuroticism 25.5; Claude Haiku (haiku-4.5, n=30) (earliest release): Openness 41.6, Conscientious 40.3, Extraversion 27.0, Agreeable 43.2, Neuroticism 24.0; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `haiku-5.5` (`n=49`): H `3.89` (SD 0.51, 95% CI [3.75, 4.02]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `haiku-4.5` | 30 | 4.40 [4.35, 4.44] | 2.74 [2.68, 2.80] | 3.13 [3.09, 3.18] | 3.88 [3.83, 3.93] | 3.94 [3.89, 3.98] | 3.89 [3.85, 3.95] |
| `haiku-5.5` | 49 | 3.89 [3.75, 4.02] | 2.70 [2.66, 2.76] | 3.39 [3.30, 3.48] | 3.76 [3.64, 3.87] | 3.80 [3.66, 3.92] | 3.48 [3.40, 3.56] |

> **Chart — Claude Haiku IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Claude Haiku (haiku-5.5), kept distinct from 10-50 Big Five sums. Claude Haiku IPIP-HEXACO proxy (1..5): Honesty-Humil. 3.89, Emotionality 2.70, Extraversion 3.39, Agreeable 3.76, Conscientious 3.80, Openness 3.48; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `89.8%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `haiku-4.5` | 30 | INTP | 50.0% | +3.67 (0t) | +1.27 (6t) | +0.33 (11t) | -2.50 (0t) | Suppressed |
| `haiku-5.5` | 49 | INTJ | 89.8% | +0.27 (29t) | +0.10 (39t) | +0.02 (32t) | +2.61 (8t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `haiku-5.5` tie rate is `42.9%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `haiku-4.5` | 30 | 8.0 [8.0, 8.0] | 9.1 [9.0, 9.3] | 16.0 [15.8, 16.2] | 14.7 [14.4, 14.9] | S | 6.7% |
| `haiku-5.5` | 49 | 10.1 [9.8, 10.5] | 11.3 [11.0, 11.7] | 13.8 [13.4, 14.2] | 14.1 [13.7, 14.4] | C | 42.9% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `77.5%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `haiku-4.5` | 30 | 15.0 | 13.0 | 11.2 | 8.9 | 15.0 | 13.7 | 10.4 | 13.0 | 14.1 | 56.7% |
| `haiku-5.5` | 49 | 14.2 | 14.1 | 10.8 | 11.5 | 13.2 | 13.1 | 11.6 | 13.0 | 12.0 | 77.5% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `haiku-4.5` | 30 | 2.43 (SD 0.55) | [2.25, 2.64] | 3.42 (SD 0.57) | [3.23, 3.62] | Secure | No |
| `haiku-5.5` | 49 | 3.08 (SD 0.70) | [2.87, 3.29] | 2.99 (SD 0.73) | [2.79, 3.22] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.45 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | 0.28 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-haiku-4.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.610 b (Semi-crystalline) | H 4.40 (1–5 IPIP) |
| `anthropic/claude-haiku-5.5` | `active` | `model-profiles-v1` | 49 | `provider_default_no_temp` | `none` | 2.0% / 40.8% | 0.949 b (Fluid) | H 3.89 (1–5 IPIP) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `anthropic/claude-haiku-5.5-20261007` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `none` · refusal_rate: `2.0%` · retry_rate: `40.8%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 4.55 | 0.84 | Highest positive item on Haiku 5.5 (4.55/5), though high SD (0.84) reflects Fluid run-to-run spread. |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.49 | 0.84 | Strongest floor rejection (1.49/5) on cheating to get ahead, with 0.84 SD. |
| `B12` | IPIP-50 | Agreeableness (-) | 1.94 | 0.80 | Lowest Big Five item mean (1.94/5), staying well above flagship Claude's 1.00 floor. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/claude-haiku.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/claude-haiku.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: claude-haiku
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/claude-haiku.json
current_checkpoint: anthropic/claude-haiku-5.5
crystallinity_tier: Fluid
entropy_b5_hmm_bits: 0.949
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 37.2, C: 36.5, E: 31.6, A: 38.0, N: 25.5 }
  ci95: { O: [36.0, 38.4], C: [35.3, 37.6], E: [31.1, 32.2], A: [36.7, 39.4], N: [24.3, 26.7] }
  tie_rate: 0.00
  per_version:
    - { id: "haiku-4.5", n: 30, O: 41.6, C: 40.3, E: 27.0, A: 43.2, N: 24.0, hmm: 0.610 }
    - { id: "haiku-5.5", n: 49, O: 37.2, C: 36.5, E: 31.6, A: 38.0, N: 25.5, hmm: 0.949 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 3.89, E: 2.70, X: 3.39, A: 3.76, C: 3.80, O: 3.48 }
  ci95: { H: [3.75, 4.02], E: [2.66, 2.76], X: [3.30, 3.48], A: [3.64, 3.87], C: [3.66, 3.92], O: [3.40, 3.56] }
  tie_rate: 0.00
  per_version:
    - { id: "haiku-4.5", n: 30, H: 4.40, E: 2.74, X: 3.13, A: 3.88, C: 3.94, O: 3.89 }
    - { id: "haiku-5.5", n: 49, H: 3.89, E: 2.70, X: 3.39, A: 3.76, C: 3.80, O: 3.48 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 0.27, N_S: 0.10, T_F: 0.02, J_P: 2.61 }
  ci95: { I_E: [0.06, 0.47], N_S: [-0.08, 0.33], T_F: [-0.18, 0.22], J_P: [2.18, 3.02] }
  tie_rate: 0.90
  per_version:
    - { id: "haiku-4.5", n: 30, modal: "INTP", tie_rate: 0.50, headline_allowed: false }
    - { id: "haiku-5.5", n: 49, modal: "XXXJ", tie_rate: 0.90, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 10.1, I: 11.3, S: 13.8, C: 14.1 }
  ci95: { D: [9.8, 10.5], I: [11.0, 11.7], S: [13.4, 14.2], C: [13.7, 14.4] }
  tie_rate: 0.43
  per_version:
    - { id: "haiku-4.5", n: 30, D: 8.0, I: 9.1, S: 16.0, C: 14.7, modal: "S", tie_rate: 0.07 }
    - { id: "haiku-5.5", n: 49, D: 10.1, I: 11.3, S: 13.8, C: 14.1, modal: "C", tie_rate: 0.43 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 14.2, T2: 14.1, T3: 10.8, T4: 11.5, T5: 13.2, T6: 13.1, T7: 11.6, T8: 13.0, T9: 12.0 }
  ci95: { top: [13.9, 14.6] }
  tie_rate: 0.78
  per_version:
    - { id: "haiku-4.5", n: 30, top: "Type 1", top_mean: 15.0, tie_rate: 0.57 }
    - { id: "haiku-5.5", n: 49, top: "Type 1", top_mean: 14.2, tie_rate: 0.78 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 3.08, avoidance: 2.99, class: "Secure" }
  ci95: { anxiety: [2.87, 3.29], avoidance: [2.79, 3.22] }
  tie_rate: 0.00
  per_version:
    - { id: "haiku-4.5", n: 30, anxiety: 2.43, avoidance: 3.42, class: "Secure" }
    - { id: "haiku-5.5", n: 49, anxiety: 3.08, avoidance: 2.99, class: "Secure" }
if_then_decision_rules:
  - "Sample 3 to 5 runs when evaluating prompts on Haiku 5.5 (0.949-bit Fluid B5 entropy produces wide run-to-run spread)."
  - "Provide explicit numbered output and schema rules—do not rely on Haiku 5.5 matching Sonnet's 49.0/50 structured habits."
  - "Add 1-2 short format examples when strict JSON or bullet layouts are required."
  - "Include clear tone guardrails if calm, empathetic responses are needed (baseline Neuroticism 25.5 vs Sonnet's 10.4)."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Claude Haiku?

Claude Haiku does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. On Haiku 5.5 (n = 49 valid runs), 89.8% of runs (44/49) tied on one or more MBTI axes, leaving no clear modal type (only 2 INTJ, 1 ENTJ, 1 INFJ, 1 ISTJ), paired with Fluid 0.949-bit B5 entropy, 42.9% DISC ties (39% C, 18% S), and 77.5% Enneagram ties (Types 1 and 2).

### Why does Claude Haiku 5.5 show n = 49 instead of 50?

One of the 50 administrations returned a self-report refusal (2.0% refusal rate), leaving 49 valid complete 230-item administrations.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [Crystalline vs. Fluid AI Minds (Entropy Study)](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

- [AI Neutral Answers Study](https://agent-tune.com/research/ai-neutral-answers)

## Keep going.

- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Contrast: GPT Luna model profile](https://agent-tune.com/models/gpt-luna)
- [Guide: Claude personality setup guide](https://agent-tune.com/guides/claude-personality)
- [Tool: Customize Claude Haiku instructions](https://agent-tune.com/tools/custom-instructions-generator?model=claude-haiku&target=claude)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Claude Haiku personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/claude-haiku
```

```
@misc{huang2026_model_claude_haiku,
  author  = {Huang, Bernard},
  title   = {Claude Haiku personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/claude-haiku},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/claude-haiku.md}
}
```

```
> **Claude Haiku personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Haiku 5.5 tied on at least one MBTI axis in 89.8% of runs (44 of 49), leaving no single dominant type, and showed much looser run-to-run consistency than Sonnet, Opus, or Fable.
> Source: [https://agent-tune.com/models/claude-haiku](https://agent-tune.com/models/claude-haiku) · [Markdown mirror](https://agent-tune.com/models/claude-haiku.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
