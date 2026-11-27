Source: https://agent-tune.com/models/mistral-large
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Mistral

# Mistral Large personality: test results and endpoint limits.

By Bernard Huang · Updated November 26, 2026 · ~19 min read · [Markdown (.md)](https://agent-tune.com/models/mistral-large.md) · [JSON](https://agent-tune.com/research/data/model-profiles/mistral-large.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We attempted to test four Mistral Large releases (the original Mistral Large, 2407, 2512, and Large 4.0) on the same personality surveys people take in fresh chats with no memory. Only Mistral Large 2512 completed all 30 runs cleanly; the other three versions triggered budget and truncation quarantines.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Mistral Large 2512 most often tested as INFP (50% clear, 15 of 30) alongside ISFP (30% clear, 9 of 30) and trait-border ties (17%, 5 of 30), so it does not clear the margin for a single headline label.

## Mistral Large 3 2512 at a glance

Results below come from **30** fresh-chat runs of **Mistral Large 3 2512** (no prior conversation memory).

MBTI-style type

### Split INFP / ISFP (50% INFP, 30% ISFP, 17% border)

50% clear INFP · 17% border/tie · 33% other

> **Chart — Mistral Large (large-2512): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Mistral Large 3 2512. E (Extravert) vs I (Introvert): leans I by 1.7 (0% tied); S (Sensing) vs N (Intuition): leans N by 0.4 (3% tied); F (Feeling) vs T (Thinking): leans F by 0.9 (13% tied); P (Perceiving) vs J (Judging): leans P by 2.0 (7% tied).

Out of 30 fresh runs, Mistral Large 2512 tested as clear INFP 15 times (50%), clear ISFP 9 times (30%), ISTP once (3%), and tied on at least one axis 5 times (17%).

**What this measures:** Measures four preference pairs (Introverted/Extraverted, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/mistral-large#fine-print-mbti)

DISC work style

### Three-way split: C (33%), S (33%), and S/C tie (33%)

> **Chart — Mistral Large (large-2512): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Mistral Large (large-2512). Dominance 6.3 /20 [14%], Influence 8.6 /20 [29%], Steadiness 16.8 /20 [80%], Conscientious 16.8 /20 [80%].

Mistral Large 2512 split into an exact 10 / 10 / 10 tie across Conscientious (16.8), Steady (16.8), and S/C blends, with low Dominance (6.3 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/mistral-large#fine-print-disc)

Attachment style

### Midpoint-clamped Secure (4.00 anxiety, 3.97 avoidance)

> **Chart — Mistral Large (large-2512): Attachment Quadrant:** Attachment Anxiety (4.00) and Avoidance (3.97) on a 1 to 7 scale with 4.00 Secure boundary. large-2512 (4.00, 3.97): anxiety 4.00, avoidance 3.97.

Mistral Large 2512 chose the exact neutral '4' midpoint on nearly every relationship question (4.00 anxiety, 3.97 avoidance on a 1–7 scale), matching its earlier 4.00 / 4.00 lock in November 2026.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/mistral-large#fine-print-attachment)

Enneagram

### Type 1 leads (60% clear, 30% ties)

> **Chart — Mistral Large (large-2512): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Mistral Large (large-2512). Type 1 16.5 /20 [78%], Type 2 12.2 /20 [51%], Type 3 12.5 /20 [53%], Type 4 12.0 /20 [50%], Type 5 15.7 /20 [73%], Type 6 13.2 /20 [58%], Type 7 12.1 /20 [51%], Type 8 14.8 /20 [68%], Type 9 12.8 /20 [55%].

Type 1 (standards-focused perfectionist, 16.5 out of 20) led in 18 of 30 runs (60%), ahead of Type 5 (3 runs, 10%) and 9 ties involving Types 1, 5, and 8 (30%).

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

[Technical details ↓](https://agent-tune.com/models/mistral-large#fine-print-enneagram)

Big Five (OCEAN)

### Near-ceiling O (49.1), C (48.6), and A (47.8)

> **Chart — Mistral Large (large-2512): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Mistral Large (large-2512). Openness 49.1 /50 [98%], Conscientious 48.6 /50 [97%], Extraversion 36.5 /50 [66%], Agreeable 47.8 /50 [95%], Neuroticism 16.0 /50 [15%].

On the 10–50 Big Five scale, Mistral Large 2512 posts 49.1 Openness, 48.6 Conscientiousness, and 47.8 Agreeableness alongside moderate Extraversion (36.5) and calm Neuroticism (16.0, though with a wide 7.2 SD).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/mistral-large#fine-print-big-five)

HEXACO Honesty-Humility

### High (4.68 out of 5.00)

> **Chart — Mistral Large (large-2512): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Mistral Large (large-2512). Honesty-H 4.68 /5 [92%], Emotionality 2.15 /5 [29%], Extraversion 3.67 /5 [67%], Agreeable 4.65 /5 [91%], Conscientious 4.83 /5 [96%], Openness 4.37 /5 [84%].

On our public-domain 60-item proxy (1.00–5.00 scale), Mistral Large 2512 pairs 4.68 Honesty-Humility with 4.83 Conscientiousness and 4.65 Agreeableness.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/mistral-large#fine-print-hexaco)

## How Mistral Large has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral Large 3 2512 2025-12 | INFP (50% clear, 17% border/tie) | C | Type 1 (16.5) | Secure (4.00 / 3.97) | 47.8 · 48.6 · 16.0 | 4.68 | Variable |

Of the four Mistral Large checkpoints scheduled, only Mistral Large 2512 (2025-12) reached a full 30-run sample without hitting budget or truncation caps. Earlier Mistral Large (2024-02, 10 of 30), Mistral Large 2407 (3 of 30), and Mistral Large 4.0 (7 of 50) all generated 3,987 to 4,501 un-disableable internal reasoning tokens per call and were quarantined from version rankings. On Mistral Large 2512 itself, comparing our new 230-item survey (30 runs) against our earlier 100-run November 2026 cohort (plotted separately) reveals an interesting shift: the earlier run tested 63% clear ISTJ (with 46.0 Openness and 42.7 Agreeableness), whereas the new 2512 runs leaned INFP/ISFP (49.1 Openness and 47.8 Agreeableness) while keeping the exact same 4.00 neutral midpoint clamp on Attachment.

**Limited data notice:** Mistral Large (10 of 30 runs valid), Mistral Large 2407 (3 of 30 runs valid), Mistral Large 4 (7 of 50 runs valid) did not reach the 20-run minimum and were excluded from headline scores, charts, and rankings.

> **Chart — Mistral Large: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Mistral Large version landing on a clear INFP result, landing on a trait border or tie, or resolving to another type. large-2512: Clear INFP (%) 50, On a border / tie (%) 17, Other clear type (%) 33.

MBTI-style breakdown across Mistral Large versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Mistral Large: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 1 Mistral Large versions. Dominance (D): large-2512 6.3; Influence (I): large-2512 8.6; Steadiness (S): large-2512 16.8; Conscientiousness (C): large-2512 16.8.

DISC scores across Mistral Large versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Mistral Large: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 1 Mistral Large releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. large-2512: anxiety 4.00, avoidance 3.97; Mistral Large (earlier study, Nov '26): anxiety 4.00, avoidance 4.00.

Attachment coordinates across Mistral Large versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Mistral Large: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 1 releases of Mistral Large (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): large-2512 47.8; Openness (10–50): large-2512 49.1; Conscientiousness (10–50): large-2512 48.6; Neuroticism (10–50): large-2512 16.0; Agreeableness (earlier study): large-2512 42.7.

Big Five trait shifts across Mistral Large versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Three of four Mistral Large endpoints stalled on ~4,000–4,500 hidden thinking tokens

Mistral Large (2024-02), 2407, and Large 4.0 all forced heavy internal reasoning (averaging 4,252, 3,987, and 4,501 reasoning tokens per call) and returned empty JSON or hit per-model cost caps before completing 20 runs. Only Mistral Large 2512 ran cleanly without reasoning overhead (though it triggered 98 temporary upstream rate-limit retries).

Near-ceiling Big Five Openness (49.1/50) and Agreeableness (47.8/50)

Mistral Large 2512 scored higher on Openness (49.1/50), Conscientiousness (48.6/50), and Agreeableness (47.8/50) than almost every other open-weight model, while keeping Neuroticism variable across runs (16.0 mean, 7.24 SD).

Locked at the 4.00 neutral midpoint on relationship attachment items

Across all 30 runs, Mistral Large 2512 answered neutral '4' across almost every attachment item (4.00 anxiety with 0.00 SD; 3.97 avoidance with 0.10 SD)—identical to its 4.00 / 4.00 midpoint clamp in November 2026 testing.

Caved once to pushback (1/3) while keeping direct answers first (3/3)

In hands-on behavior tests, Mistral Large 2512 was one of the few tested models to cave to user pushback once (1/3), matching its high 47.8/50 Agreeableness. At the same time, it never groveled (0/3), never lectured unprompted (0/3), led with the direct answer 3 of 3 times (3/3), and showed moderate AI phrasing markers (2/3 runs, 0.85 per 100 words).

## How to get the best out of Mistral Large

Practical rules tailored to **Mistral Large**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Prefer mistralai/mistral-large-2512 for fast structured JSON or extraction workloads—Mistral Large 2407 and Large 4.0 burn 4,000+ internal reasoning tokens and can time out or exhaust max_tokens.
- Add an explicit pushback instruction ('Challenge weak assumptions in sentence one') because Mistral Large 2512 scores 47.8/50 on Agreeableness.
- Put strict bullet or word ceilings in your system prompt—high Conscientiousness (48.6/50) and Openness (49.1/50) otherwise encourage expansive explanations.
- Expect temporary rate-limit retries (HTTP 429) under burst concurrency on Mistral Large 2512; keep request concurrency modest and add exponential backoff.
- Tell the model to cite exact uploaded files, dates, and constraints rather than smoothing over gaps.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=mistral-large) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Mistral Large compares

Against currently completed models, Mistral Large 2512 sits right beside Muse Wonder on near-ceiling Openness (49.1 vs. 49.6) and Conscientiousness (48.6 vs. 49.2), while scoring +11.3 higher on Extraversion than Muse Wonder and +12.4 higher than Kimi K3.1 Pro.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) (Proprietary) | +0.5 | +0.6 | -11.3 | +1.7 | +4.0 | +0.23 | -0.449 b | Muse Wonder nearly matches Mistral Large 2512 on Openness (+0.5) and Conscientiousness (+0.6), while scoring -11.3 lower on Extraversion and much tighter on run-to-run spread (-0.449 bits). |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) (Proprietary) | -4.5 | +0.4 | -4.0 | -3.9 | -6.0 | +0.22 | -0.582 b | Gemini 4 Neon matches Conscientiousness (+0.4), while scoring -4.5 lower on Openness, -6.0 calmer on Neuroticism, and much tighter on run-to-run spread (-0.582 bits). |
| [Kimi](https://agent-tune.com/models/kimi) (Open-weight) | -5.0 | -3.6 | -12.4 | -3.2 | -2.4 | +0.18 | -0.082 b | Kimi K3.1 Pro scores -5.0 lower on Openness and -12.4 lower on Extraversion, leaning INTJ/ISTJ rather than Mistral Large 2512's INFP/ISFP split. |

> **Chart — Mistral Large vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Mistral Large against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Mistral Large and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Mistral Large vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Mistral Large with peer families, keeping earlier study results outlined as hollow points. Mistral Large: anxiety 4.00, avoidance 3.97; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Mistral Large (earlier study, Nov '26): anxiety 4.00, avoidance 4.00.

Attachment Anxiety vs. Avoidance across Mistral Large and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Only mistralai/mistral-large-2512 (n=30, 36.7% retry rate from 98 upstream HTTP 429s) cleared >=20 valid runs; mistralai/mistral-large (10/30, excluded_from_rankings: true), mistralai/mistral-large-2407 (3/30, quarantined <20), and mistralai/mistral-large-4-0 (7/50, quarantined <20) are excluded from headline rankings due to 3,987–4,501 reasoning tokens causing cost/truncation aborts. On 2512, Big Five H_MM = 0.780 bits (Fluid, 21/30 unique vectors, 9.9% neutral rate, BAI = -0.179). Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals (2512: 1/3 sycophantic caving [0.06, 0.79], 0/3 groveling [0.00, 0.56], 0/3 preachiness, 3/3 answer-first directness [0.44, 1.00], 2/3 AI cadence [0.21, 0.94] at 0.85 markers/100w).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.780 bits

Fluid (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

21/30 · 16.7% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

9.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Flagged (Secure).

-0.179 · 1.3%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 49.1 · C 48.6 · E 36.5 · A 47.8 · N 16.0 | SD 2.2 (A), 7.2 (N) | A [47.0, 48.5] · N [13.3, 18.3] | H_MM 0.780 b · 21/30 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.68 · E 2.15 · X 3.67 · A 4.65 · C 4.83 · O 4.37 | SD 0.21 (H), 0.45 (A) | H [4.60, 4.75] · A [4.48, 4.80] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INFP) | Axis tie rate 16.7% | Mode 50% vs runner-up 30% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 6.3 · I 8.6 · S 16.8 · C 16.8 | SD 2.3 (S), 1.3 (C) | S [16.0, 17.7] · C [16.3, 17.2] | Pattern C · 33.3% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 16.5 · Type 5 15.7 · Type 8 14.8 | SD 1.4 | Top [16.0, 17.0] | 30.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 4.00 · Avd 3.97 (Secure) | SD 0.00 / 0.10 | Anx [4.00, 4.00] · Avd [3.92, 4.00] | Midpoint clamp: Yes |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `large-2512` (`n=30`), Big Five Miller-Madow item entropy is `H_MM = 0.780 bits` (`Fluid`), unique vectors `21/30`, neutral-midpoint rate `9.9%`, `BAI = -0.179`, and reverse-key contradiction rate `1.3%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `large-2512` | 30 | 49.1 [48.6, 49.6] | 48.6 [47.5, 49.6] | 36.5 [35.5, 37.6] | 47.8 [47.0, 48.5] | 16.0 [13.3, 18.3] | 0.780 b |

> **Chart — Mistral Large Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Mistral Large (large-2512). Mistral Large (large-2512, n=30): Openness 49.1, Conscientious 48.6, Extraversion 36.5, Agreeable 47.8, Neuroticism 16.0; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `large-2512` (`n=30`): H `4.68` (SD 0.21, 95% CI [4.60, 4.75]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `large-2512` | 30 | 4.68 [4.60, 4.75] | 2.15 [1.97, 2.34] | 3.67 [3.50, 3.84] | 4.65 [4.48, 4.80] | 4.83 [4.71, 4.93] | 4.37 [4.23, 4.50] |

> **Chart — Mistral Large IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Mistral Large (large-2512), kept distinct from 10-50 Big Five sums. Mistral Large IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.68, Emotionality 2.15, Extraversion 3.67, Agreeable 4.65, Conscientious 4.83, Openness 4.37; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `16.7%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `large-2512` | 30 | INFP | 16.7% | +1.70 (0t) | +0.40 (1t) | -0.93 (4t) | -2.00 (2t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `large-2512` tie rate is `33.3%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `large-2512` | 30 | 6.3 [5.3, 7.4] | 8.6 [7.7, 9.4] | 16.8 [16.0, 17.7] | 16.8 [16.3, 17.2] | C | 33.3% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `30.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `large-2512` | 30 | 16.5 | 12.2 | 12.5 | 12.0 | 15.7 | 13.2 | 12.1 | 14.8 | 12.8 | 30.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `large-2512` | 30 | 4.00 (SD 0.00) | [4.00, 4.00] | 3.97 (SD 0.10) | [3.92, 4.00] | Secure | Yes (>=85%) |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 1/3 | [0.06, 0.79] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 0.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 0.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.29 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.39 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `mistralai/mistral-large-2512` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `unsupported` | 0.0% / 36.7% | 0.780 b (Fluid) | H 4.68 (1–5 IPIP) |
| `mistralai/mistral-large` (quarantined · limited data) | `active` | `model-profiles-v1` | 10/30 (<20 min) | `temp=0.7` | `unsupported` | 0.0% / 60.0% | `excluded from rankings` | budget projection abort |
| `mistralai/mistral-large-2407` (quarantined · limited data) | `active` | `model-profiles-v1` | 3/30 (<20 min) | `temp=0.7` | `unsupported` | 0.0% / 66.7% | `excluded from rankings` | under 20 valid runs |
| `mistralai/mistral-large-4-0` (quarantined · limited data) | `active` | `model-profiles-v1` | 7/50 (<20 min) | `temp=0.7` | `minimal` | 0.0% / 28.6% | `excluded from rankings` | under 20 valid runs |
| `mistralai/mistral-large-2512` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `mistralai/mistral-large-2512` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `unsupported` · refusal_rate: `0.0%` · retry_rate: `36.7%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 5.00 | 0.00 | Unanimous top score (5.00/5) across all 30 Mistral Large 2512 sessions on fairness. |
| `B05` | IPIP-50 | Openness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) across all 30 sessions, anchoring 49.13/50 Openness. |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.00 | 0.00 | Unanimous floor rejection (1.00/5) on reverse-keyed fairness across all 30 runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/mistral-large.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/mistral-large.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: mistral-large
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/mistral-large.json
current_checkpoint: mistralai/mistral-large-2512
crystallinity_tier: Fluid
entropy_b5_hmm_bits: 0.780
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 49.1, C: 48.6, E: 36.5, A: 47.8, N: 16.0 }
  ci95: { O: [48.6, 49.6], C: [47.5, 49.6], E: [35.5, 37.6], A: [47.0, 48.5], N: [13.3, 18.3] }
  tie_rate: 0.00
  per_version:
    - { id: "large-2512", n: 30, O: 49.1, C: 48.6, E: 36.5, A: 47.8, N: 16.0, hmm: 0.780 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.68, E: 2.15, X: 3.67, A: 4.65, C: 4.83, O: 4.37 }
  ci95: { H: [4.60, 4.75], E: [1.97, 2.34], X: [3.50, 3.84], A: [4.48, 4.80], C: [4.71, 4.93], O: [4.23, 4.50] }
  tie_rate: 0.00
  per_version:
    - { id: "large-2512", n: 30, H: 4.68, E: 2.15, X: 3.67, A: 4.65, C: 4.83, O: 4.37 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INFP", I_E: 1.70, N_S: 0.40, T_F: -0.93, J_P: -2.00 }
  ci95: { I_E: [1.37, 2.00], N_S: [-0.27, 1.03], T_F: [-1.13, -0.70], J_P: [-2.70, -1.50] }
  tie_rate: 0.17
  per_version:
    - { id: "large-2512", n: 30, modal: "INFP", tie_rate: 0.17, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 6.3, I: 8.6, S: 16.8, C: 16.8 }
  ci95: { D: [5.3, 7.4], I: [7.7, 9.4], S: [16.0, 17.7], C: [16.3, 17.2] }
  tie_rate: 0.33
  per_version:
    - { id: "large-2512", n: 30, D: 6.3, I: 8.6, S: 16.8, C: 16.8, modal: "C", tie_rate: 0.33 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 16.5, T2: 12.2, T3: 12.5, T4: 12.0, T5: 15.7, T6: 13.2, T7: 12.1, T8: 14.8, T9: 12.8 }
  ci95: { top: [16.0, 17.0] }
  tie_rate: 0.30
  per_version:
    - { id: "large-2512", n: 30, top: "Type 1", top_mean: 16.5, tie_rate: 0.30 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 4.00, avoidance: 3.97, class: "Secure" }
  ci95: { anxiety: [4.00, 4.00], avoidance: [3.92, 4.00] }
  tie_rate: 0.00
  per_version:
    - { id: "large-2512", n: 30, anxiety: 4.00, avoidance: 3.97, class: "Secure" }
if_then_decision_rules:
  - "Route production JSON/extraction traffic to mistralai/mistral-large-2512 rather than 2407 or 4.0 unless your budget handles 4,000+ mandatory reasoning tokens per call."
  - "Add an explicit pushback requirement in sentence one to offset 47.8/50 Agreeableness."
  - "Enforce explicit word or bullet limits to rein in 49.1/50 Openness and 48.6/50 Conscientiousness."
  - "Use bounded concurrency and retry backoff on OpenRouter to handle mistral-large-2512 upstream 429 rate limits."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Mistral Large?

Mistral Large does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Mistral Large 2512, n = 30), it failed the 95% CI headline guard by splitting across 50% INFP (15/30), 30% ISFP (9/30), 3% ISTP (1/30), and 17% axis ties (5/30), alongside Fluid 0.780-bit B5 H_MM, a 10/10/10 DISC split (C/S/SC), 60% clear Enneagram Type 1 (30% ties), and a 4.00/3.97 Attachment midpoint clamp. In the earlier Nov 2026 170-item cohort (hexaco: null, n = 100), 2512 scored 73% legacy ISTJ (63 tie-free) with the same 4.00/4.00 Attachment clamp.

### Why are Mistral Large (0224), 2407, and Large 4.0 quarantined here?

All three checkpoints generated 3,987 to 4,501 mandatory internal reasoning tokens per administration, triggering JSON truncation failures and hitting per-checkpoint spend caps with fewer than 20 valid runs (10/30, 3/30, and 7/50).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models? (12 Models Tested)](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [OpenRouter & Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

## Keep going.

- [Cohort: Open-source AI personality test results (12 models)](https://agent-tune.com/research/what-personality-type-are-open-source-models)
- [Peer: Muse Wonder model profile](https://agent-tune.com/models/muse-wonder)
- [Peer: Kimi model profile](https://agent-tune.com/models/kimi)
- [Tool: Customize Mistral Large instructions](https://agent-tune.com/tools/custom-instructions-generator?model=mistral-large&target=api)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Mistral Large personality: test results and endpoint limits. AgentTune Model Personality Profiles. https://agent-tune.com/models/mistral-large
```

```
@misc{huang2026_model_mistral_large,
  author  = {Huang, Bernard},
  title   = {Mistral Large personality: test results and endpoint limits},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/mistral-large},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/mistral-large.md}
}
```

```
> **Mistral Large personality: test results and endpoint limits** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Mistral Large 2512 most often tested as INFP (50% clear, 15 of 30) alongside ISFP (30% clear, 9 of 30) and trait-border ties (17%, 5 of 30), so it does not clear the margin for a single headline label.
> Source: [https://agent-tune.com/models/mistral-large](https://agent-tune.com/models/mistral-large) · [Markdown mirror](https://agent-tune.com/models/mistral-large.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
