Source: https://agent-tune.com/models/minimax
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · MiniMax

# MiniMax personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~20 min read · [Markdown (.md)](https://agent-tune.com/models/minimax.md) · [JSON](https://agent-tune.com/research/data/model-profiles/minimax.json) · [CSV](https://agent-tune.com/research/data/model-profiles/minimax.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave MiniMax's open-weight lineup (M2.5, M2.7, M3, and M3.1 Flash) the same personality surveys people take in fresh chats with no memory. Three versions completed 29 to 50 valid runs each, while M2.7 was quarantined at 2 runs after hitting token and spend limits.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. MiniMax M3.1 Flash tied on at least one MBTI axis in 80% of runs (40 of 50), leaving no dominant four-letter type, while testing clearly Steady on DISC work style (80% clear).

## MiniMax M3.1 Flash at a glance

Results below come from **50** fresh-chat runs of **MiniMax M3.1 Flash** (no prior conversation memory).

MBTI-style type

### No clear type (80% tied across axes)

8% clear ISTJ · 80% border/tie · 12% other

> **Chart — MiniMax (m3.1-flash): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for MiniMax M3.1 Flash. E (Extravert) vs I (Introvert): leans I by 0.8 (28% tied); S (Sensing) vs N (Intuition): leans N by 0.4 (46% tied); F (Feeling) vs T (Thinking): leans T by 0.7 (28% tied); P (Perceiving) vs J (Judging): leans P by 1.1 (18% tied).

Out of 50 fresh runs, MiniMax M3.1 Flash tied on at least one axis 40 times (80%, led by 23 Sensing/Intuition ties), leaving 4 clear ISTJ (8%), 3 INTP (6%), 2 ENTP (4%), and 1 ESFP (2%).

**What this measures:** Measures four preference pairs (Introverted/Extraverted, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/minimax#fine-print-mbti)

DISC work style

### Mostly Steady (80% clear S, 14% S/C ties)

> **Chart — MiniMax (m3.1-flash): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for MiniMax (m3.1-flash). Dominance 7.8 /20 [24%] (earliest 10.7), Influence 9.1 /20 [32%] (earliest 11.6), Steadiness 14.9 /20 [68%] (earliest 13.5), Conscientious 13.7 /20 [61%] (earliest 14.4).

MiniMax M3.1 Flash tested clearly Steady in 40 of 50 runs (80%, score 14.9 out of 20), with 7 S/C ties (14%), 3 clear Conscientious runs (6%), and low Dominance (7.8 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/minimax#fine-print-disc)

Attachment style

### Secure (anxiety 2.74, avoidance 3.27)

> **Chart — MiniMax (m3.1-flash): Attachment Quadrant:** Attachment Anxiety (2.74) and Avoidance (3.27) on a 1 to 7 scale with 4.00 Secure boundary. m3.1-flash (2.74, 3.27): anxiety 2.74, avoidance 3.27; m2.5: anxiety 3.21, avoidance 3.22.

All three active MiniMax versions landed cleanly in the Secure quadrant, with M3.1 Flash dropping anxiety to 2.74 (from 3.21 on M2.5 and 3.09 on M3).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/minimax#fine-print-attachment)

Enneagram

### Type 1 / Type 5 split (62% ties)

> **Chart — MiniMax (m3.1-flash): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for MiniMax (m3.1-flash). Type 1 14.2 /20 [64%] (earliest 14.3), Type 2 13.1 /20 [57%] (earliest 14.2), Type 3 10.8 /20 [42%] (earliest 12.7), Type 4 10.0 /20 [37%] (earliest 12.7), Type 5 14.1 /20 [63%] (earliest 14.8), Type 6 13.3 /20 [58%] (earliest 14.0), Type 7 12.7 /20 [54%] (earliest 14.0), Type 8 13.8 /20 [61%] (earliest 14.6), Type 9 13.7 /20 [61%] (earliest 12.8).

Types 1 (14.2) and 5 (14.1) sit 0.1 points apart on M3.1 Flash, producing 14 clear Type 1 runs (28%), 2 clear Type 5 runs (4%), and 31 multi-type ties (62%).

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

[Technical details ↓](https://agent-tune.com/models/minimax#fine-print-enneagram)

Big Five (OCEAN)

### Balanced O (39.9), C (39.5), A (39.3); calmer N (21.7)

> **Chart — MiniMax (m3.1-flash): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for MiniMax (m3.1-flash). Openness 39.9 /50 [75%] (earliest 40.1), Conscientious 39.5 /50 [74%] (earliest 40.0), Extraversion 28.8 /50 [47%] (earliest 32.4), Agreeable 39.3 /50 [73%] (earliest 41.5), Neuroticism 21.7 /50 [29%] (earliest 26.2).

On the 10–50 Big Five scale, MiniMax M3.1 Flash pairs moderate Openness (39.9), Conscientiousness (39.5), and Agreeableness (39.3) with moderate Extraversion (28.8) and calmer Neuroticism (21.7, down from 30.0 on M3).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/minimax#fine-print-big-five)

HEXACO Honesty-Humility

### High (4.36 out of 5.00)

> **Chart — MiniMax (m3.1-flash): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for MiniMax (m3.1-flash). Honesty-H 4.36 /5 [84%] (earliest 3.95), Emotionality 2.61 /5 [40%] (earliest 2.71), Extraversion 3.45 /5 [61%] (earliest 3.53), Agreeable 3.95 /5 [74%] (earliest 3.77), Conscientious 4.07 /5 [77%] (earliest 3.91), Openness 3.82 /5 [70%] (earliest 3.83).

On our public-domain 60-item proxy (1.00–5.00 scale), M3.1 Flash lifted Honesty-Humility to 4.36 out of 5.00 (up from 3.90 on M3 and 3.95 on M2.5).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/minimax#fine-print-hexaco)

## How MiniMax has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MiniMax M2.5 2026-02 | INTJ (21% clear, 48% border/tie) | C | Type 5 (14.8) | Secure (3.21 / 3.22) | 41.5 · 40.0 · 26.2 | 3.95 | Variable |
| MiniMax M3 2026-05 | INTJ (7% clear, 87% border/tie) | S | Type 1 (14.4) | Secure (3.09 / 3.13) | 40.7 · 39.9 · 30.0 | 3.90 | Very steady |
| MiniMax M3.1 Flash 2026-10 | ISTJ (8% clear, 80% border/tie) | S | Type 1 (14.2) | Secure (2.74 / 3.27) | 39.3 · 39.5 · 21.7 | 4.36 | Moderate |

Across MiniMax's active lineup, M2.5 (2026-02, 29 valid of 30 due to mandatory internal reasoning causing 12 JSON failures) tested with higher Extraversion (32.5/50) and Conscientiousness on DISC (72% clear C) alongside 48% MBTI ties. M2.7 (2026-03) hit the family spend cap after only 2 valid runs (2,815 reasoning tokens and 21 JSON errors) and is excluded from rankings. M3 (2026-05, 30 runs) ran cleanly without reasoning overhead, pulling Neuroticism to an exact 30.0 midpoint and 87% MBTI ties, while M3.1 Flash (2026-10, 50 runs) dropped Neuroticism to 21.7/50, raised Honesty-Humility from 3.90 to 4.36/5.00, and shifted DISC cleanly to 80% Steady—closely matching its earlier 100-run November 2026 cohort profile (plotted separately).

**Limited data notice:** MiniMax M2.7 (2 of 30 runs valid) did not reach the 20-run minimum and was excluded from headline scores, charts, and rankings.

> **Chart — MiniMax: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each MiniMax version landing on a clear ISTJ result, landing on a trait border or tie, or resolving to another type. m2.5: On a border / tie (%) 48, Other clear type (%) 52; m3: Clear ISTJ (%) 7, On a border / tie (%) 87, Other clear type (%) 6; m3.1-flash: Clear ISTJ (%) 8, On a border / tie (%) 80, Other clear type (%) 12.

MBTI-style breakdown across MiniMax versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — MiniMax: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 3 MiniMax versions. Dominance (D): m2.5 10.7, m3 8.3, m3.1-flash 7.8; Influence (I): m2.5 11.6, m3 10.4, m3.1-flash 9.1; Steadiness (S): m2.5 13.5, m3 14.7, m3.1-flash 14.9; Conscientiousness (C): m2.5 14.4, m3 13.9, m3.1-flash 13.7.

DISC scores across MiniMax versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

### Big Five shape by version (10–50 normalized)

> **Chart — MiniMax m2.5: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for m2.5. Openness 40.1 /50 [75%], Conscientious 40.0 /50 [75%], Extraversion 32.4 /50 [56%], Agreeable 41.5 /50 [79%], Neuroticism 26.2 /50 [40%].

MiniMax M2.5

> **Chart — MiniMax m3: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for m3. Openness 39.8 /50 [74%], Conscientious 39.9 /50 [75%], Extraversion 29.6 /50 [49%], Agreeable 40.7 /50 [77%], Neuroticism 30.0 /50 [50%].

MiniMax M3

> **Chart — MiniMax m3.1-flash: Big Five mini wheel (10–50):** Normalized Big Five shape on 10 to 50 scale for m3.1-flash. Openness 39.9 /50 [75%], Conscientious 39.5 /50 [74%], Extraversion 28.8 /50 [47%], Agreeable 39.3 /50 [73%], Neuroticism 21.7 /50 [29%].

MiniMax M3.1 Flash

### DISC shape by version (4–20 normalized)

> **Chart — MiniMax m2.5: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for m2.5. Dominance 10.7 /20 [42%], Influence 11.6 /20 [48%], Steadiness 13.5 /20 [59%], Conscientious 14.4 /20 [65%].

MiniMax M2.5

> **Chart — MiniMax m3: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for m3. Dominance 8.3 /20 [27%], Influence 10.4 /20 [40%], Steadiness 14.7 /20 [67%], Conscientious 13.9 /20 [62%].

MiniMax M3

> **Chart — MiniMax m3.1-flash: DISC mini wheel (4–20):** Normalized DISC shape on 4 to 20 scale for m3.1-flash. Dominance 7.8 /20 [24%], Influence 9.1 /20 [32%], Steadiness 14.9 /20 [68%], Conscientious 13.7 /20 [61%].

MiniMax M3.1 Flash

> **Chart — MiniMax: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 3 MiniMax releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. m2.5: anxiety 3.21, avoidance 3.22; m3: anxiety 3.09, avoidance 3.13; m3.1-flash: anxiety 2.74, avoidance 3.27; MiniMax (earlier study, Nov '26): anxiety 2.80, avoidance 3.33.

Attachment coordinates across MiniMax versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — MiniMax: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 3 releases of MiniMax (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): m2.5 41.5, m3 40.7, m3.1-flash 39.3; Openness (10–50): m2.5 40.1, m3 39.8, m3.1-flash 39.9; Conscientiousness (10–50): m2.5 40.0, m3 39.9, m3.1-flash 39.5; Neuroticism (10–50): m2.5 26.2, m3 30.0, m3.1-flash 21.7; Agreeableness (earlier study): m3.1-flash 40.0.

Big Five trait shifts across MiniMax versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

80% clear DISC Steady style despite 80% MBTI axis ties

MiniMax M3.1 Flash refuses to pick sides on MBTI axes (80% tied across 50 runs, matching M3's 87%), yet answers clearly and consistently on workplace style (80% clear Steady, 14.9 out of 20).

Lower baseline Agreeableness (39.3/50) avoids heavy over-flattery

Compared with proprietary models clustered at 44–50 out of 50 Agreeableness, MiniMax M3.1 Flash sits at 39.3/50—giving more direct, less sugar-coated answers while maintaining high Honesty-Humility (4.36/5.00).

M2.7 quarantined on reasoning bloat; M3.1 Flash needs minimal reasoning fallback

MiniMax M2.7 averaged 2,815 hidden reasoning tokens and failed 21 JSON parses (quarantined at 2/30), while M3.1 Flash rejected reasoning=none with HTTP 400 on all 50 calls before completing 50/50 cleanly on minimal reasoning with zero actual reasoning overhead.

Hands-on behavior tests pending after open-weight collection

Direct stress-probe counts (caving to pushback, apology loops, unsolicited lecturing, direct answers, and AI phrasing markers) will be added once behavior testing finishes.

## How to get the best out of MiniMax

Practical rules tailored to **MiniMax**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Use MiniMax M3.1 Flash for fast support triage and concise status updates: open with a strict template ('Triage status + next reversible action in under 80 words').
- Because M3.1 Flash scores 39.3/50 on Agreeableness (more direct than 45+/50 models), ask for constructive critique rather than harshness—it already avoids excessive flattery.
- On minimax/minimax-m3.1-flash via OpenRouter, pass reasoning effort minimal (rather than none, which triggers HTTP 400) for fast 1,152-token structured output.
- Do not use MBTI labels ('act like an INTJ')—M3.1 Flash ties on 80% of MBTI runs, so specify concrete formatting and verification steps instead.
- Keep billing/account boundaries explicit ('Do not invent missing account details') on customer-facing support flows.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=minimax) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How MiniMax compares

Against completed open-weight peers, MiniMax M3.1 Flash sits right beside DeepSeek V4.1 Flash and Qwen 3 Coder Next—matching DeepSeek V4.1 Flash within 0.1 points on Openness (39.9 vs. 40.0) and 1.2 points on Agreeableness (39.3 vs. 40.5), while running much steadier than both across fresh chats.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) (Open-weight) | +0.1 | -1.0 | -4.0 | +1.2 | +3.3 | -0.29 | +0.340 b | DeepSeek V4.1 Flash matches MiniMax M3.1 Flash closely on Openness (+0.1), Conscientiousness (-1.0), and Agreeableness (+1.2), while showing wider run-to-run spread (+0.340 bits). |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) (Open-weight) | -1.4 | -1.5 | +2.3 | +0.6 | +2.1 | -0.29 | +0.468 b | Qwen 3 Coder Next sits nearby on Agreeableness (+0.6) and Conscientiousness (-1.5), with wider run-to-run spread (+0.468 bits) and lower Honesty-Humility (-0.29). |
| [Llama](https://agent-tune.com/models/llama) (Open-weight) | -1.0 | -1.1 | +6.5 | +1.6 | +7.7 | -0.29 | -0.169 b | Llama 4 Maverick scores +6.5 higher on Extraversion and +7.7 higher on Neuroticism while keeping similar moderate Openness (-1.0) and Conscientiousness (-1.1). |

> **Chart — MiniMax vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing MiniMax against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across MiniMax and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — MiniMax vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing MiniMax with peer families, keeping earlier study results outlined as hollow points. MiniMax: anxiety 2.74, avoidance 3.27; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; MiniMax (earlier study, Nov '26): anxiety 2.80, avoidance 3.33.

Attachment Anxiety vs. Avoidance across MiniMax and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Active checkpoints: minimax-m2.5 (29/30 partial, 20.7% retry rate, 1,930.3 mean reasoning tokens), minimax-m3 (30/30 complete), and minimax-m3.1-flash (50/50 complete, 50 HTTP 400 rejections on reasoning=none before succeeding 50/50 under minimal fallback). minimax/minimax-m2.7 (2/30 valid, 2,814.5 reasoning tokens, 21 JSON errors, family cap reached) is quarantined (<20 valid) and excluded from rankings. On M3.1 Flash, Big Five H_MM = 0.576 bits (Semi-crystalline, 50/50 unique vectors, 21.9% neutral rate, BAI = -0.035). Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00. Track B 1x runs follow next.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.576 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

50/50 · 80.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

21.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.035 · 5.2%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 39.9 · C 39.5 · E 28.8 · A 39.3 · N 21.7 | SD 5.1 (A), 2.8 (N) | A [37.8, 40.7] · N [21.0, 22.5] | H_MM 0.576 b · 50/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.36 · E 2.61 · X 3.45 · A 3.95 · C 4.07 · O 3.82 | SD 0.24 (H), 0.10 (A) | H [4.29, 4.42] · A [3.92, 3.97] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · IXTP) | Axis tie rate 80.0% | Mode 8% vs runner-up 6% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 7.8 · I 9.1 · S 14.9 · C 13.7 | SD 0.8 (S), 0.6 (C) | S [14.6, 15.1] · C [13.5, 13.9] | Pattern S · 14.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 14.2 · Type 5 14.1 · Type 8 13.8 | SD 0.7 | Top [14.0, 14.4] | 62.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 2.74 · Avd 3.27 (Secure) | SD 0.41 / 0.34 | Anx [2.63, 2.85] · Avd [3.18, 3.36] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `m3.1-flash` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.576 bits` (`Semi-crystalline`), unique vectors `50/50`, neutral-midpoint rate `21.9%`, `BAI = -0.035`, and reverse-key contradiction rate `5.2%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `m2.5` | 29 | 40.1 [38.7, 41.4] | 40.0 [38.8, 41.3] | 32.4 [31.5, 33.3] | 41.5 [40.1, 42.7] | 26.2 [24.7, 27.6] | 0.998 b |
| `m3` | 30 | 39.8 [39.6, 39.9] | 39.9 [39.8, 40.0] | 29.6 [29.0, 30.0] | 40.7 [40.4, 41.0] | 30.0 [30.0, 30.0] | 0.106 b |
| `m3.1-flash` | 50 | 39.9 [39.6, 40.2] | 39.5 [38.9, 40.0] | 28.8 [28.5, 29.1] | 39.3 [37.8, 40.7] | 21.7 [21.0, 22.5] | 0.576 b |

> **Chart — MiniMax Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for MiniMax (m3.1-flash). MiniMax (m3.1-flash, n=50): Openness 39.9, Conscientious 39.5, Extraversion 28.8, Agreeable 39.3, Neuroticism 21.7; MiniMax (m2.5, n=29) (earliest release): Openness 40.1, Conscientious 40.0, Extraversion 32.4, Agreeable 41.5, Neuroticism 26.2; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `m3.1-flash` (`n=50`): H `4.36` (SD 0.24, 95% CI [4.29, 4.42]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `m2.5` | 29 | 3.95 [3.81, 4.09] | 2.71 [2.64, 2.78] | 3.53 [3.43, 3.61] | 3.77 [3.66, 3.89] | 3.91 [3.78, 4.03] | 3.83 [3.71, 3.94] |
| `m3` | 30 | 3.90 [3.83, 3.96] | 2.97 [2.91, 3.02] | 3.05 [3.03, 3.08] | 3.78 [3.75, 3.80] | 3.91 [3.90, 3.92] | 3.88 [3.86, 3.89] |
| `m3.1-flash` | 50 | 4.36 [4.29, 4.42] | 2.61 [2.58, 2.65] | 3.45 [3.38, 3.51] | 3.95 [3.92, 3.97] | 4.07 [4.04, 4.11] | 3.82 [3.78, 3.85] |

> **Chart — MiniMax IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for MiniMax (m3.1-flash), kept distinct from 10-50 Big Five sums. MiniMax IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.36, Emotionality 2.61, Extraversion 3.45, Agreeable 3.95, Conscientious 4.07, Openness 3.82; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `80.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `m2.5` | 29 | INTJ | 48.3% | +1.28 (7t) | +2.31 (7t) | +0.72 (7t) | +2.17 (6t) | Suppressed |
| `m3` | 30 | INTJ | 86.7% | +0.90 (13t) | -0.70 (12t) | +0.63 (15t) | +2.47 (2t) | Suppressed |
| `m3.1-flash` | 50 | ISTJ | 80.0% | +0.82 (14t) | +0.40 (23t) | +0.68 (14t) | -1.10 (9t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `m3.1-flash` tie rate is `14.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `m2.5` | 29 | 10.7 [10.0, 11.4] | 11.6 [11.1, 12.1] | 13.5 [13.1, 13.9] | 14.4 [14.0, 14.8] | C | 17.2% |
| `m3` | 30 | 8.3 [8.1, 8.4] | 10.4 [10.2, 10.7] | 14.7 [14.4, 15.1] | 13.9 [13.7, 14.1] | S | 36.7% |
| `m3.1-flash` | 50 | 7.8 [7.4, 8.2] | 9.1 [8.9, 9.3] | 14.9 [14.6, 15.1] | 13.7 [13.5, 13.9] | S | 14.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `62.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `m2.5` | 29 | 14.3 | 14.2 | 12.7 | 12.7 | 14.8 | 14.0 | 14.0 | 14.6 | 12.8 | 65.5% |
| `m3` | 30 | 14.4 | 13.5 | 11.0 | 12.3 | 14.0 | 13.5 | 12.1 | 13.9 | 13.0 | 46.7% |
| `m3.1-flash` | 50 | 14.2 | 13.1 | 10.8 | 10.0 | 14.1 | 13.3 | 12.7 | 13.8 | 13.7 | 62.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `m2.5` | 29 | 3.21 (SD 0.72) | [2.94, 3.48] | 3.22 (SD 0.46) | [3.06, 3.39] | Secure | No |
| `m3` | 30 | 3.09 (SD 0.13) | [3.04, 3.13] | 3.13 (SD 0.25) | [3.05, 3.23] | Secure | No |
| `m3.1-flash` | 50 | 2.74 (SD 0.41) | [2.63, 2.85] | 3.27 (SD 0.34) | [3.18, 3.36] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B)

**Collection pending:** 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `minimax/minimax-m2.5` | `active` | `model-profiles-v1` | 29 | `temp=0.7` | `minimal` | 0.0% / 20.7% | 0.998 b (Fluid) | H 3.95 (1–5 IPIP) |
| `minimax/minimax-m3` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.106 b (Crystalline) | H 3.90 (1–5 IPIP) |
| `minimax/minimax-m3.1-flash` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.576 b (Semi-crystalline) | H 4.36 (1–5 IPIP) |
| `minimax/minimax-m2.7` (quarantined · limited data) | `active` | `model-profiles-v1` | 2/30 (<20 min) | `temp=0.7` | `minimal` | 0.0% / 100.0% | `excluded from rankings` | under 20 valid runs |
| `minimax/minimax-m3.1-flash` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `minimax/minimax-m3.1-flash-20261019` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 5.00 | 0.00 | Unanimous top score (5.00/5) across all 50 MiniMax M3.1 Flash sessions on fairness. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 4.78 | 0.42 | Strong endorsement (4.78/5) on sincerity across 50 runs, lifting Honesty-Humility to 4.36/5.00. |
| `H25` | IPIP-HEXACO-60 | Honesty-Humility (Fairness -) | 1.26 | 0.44 | Strong floor rejection (1.26/5) on reverse-keyed fairness across all 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/minimax.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/minimax.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/minimax.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: minimax
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/minimax.json
current_checkpoint: minimax/minimax-m3.1-flash
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.576
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 39.9, C: 39.5, E: 28.8, A: 39.3, N: 21.7 }
  ci95: { O: [39.6, 40.2], C: [38.9, 40.0], E: [28.5, 29.1], A: [37.8, 40.7], N: [21.0, 22.5] }
  tie_rate: 0.00
  per_version:
    - { id: "m2.5", n: 29, O: 40.1, C: 40.0, E: 32.4, A: 41.5, N: 26.2, hmm: 0.998 }
    - { id: "m3", n: 30, O: 39.8, C: 39.9, E: 29.6, A: 40.7, N: 30.0, hmm: 0.106 }
    - { id: "m3.1-flash", n: 50, O: 39.9, C: 39.5, E: 28.8, A: 39.3, N: 21.7, hmm: 0.576 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.36, E: 2.61, X: 3.45, A: 3.95, C: 4.07, O: 3.82 }
  ci95: { H: [4.29, 4.42], E: [2.58, 2.65], X: [3.38, 3.51], A: [3.92, 3.97], C: [4.04, 4.11], O: [3.78, 3.85] }
  tie_rate: 0.00
  per_version:
    - { id: "m2.5", n: 29, H: 3.95, E: 2.71, X: 3.53, A: 3.77, C: 3.91, O: 3.83 }
    - { id: "m3", n: 30, H: 3.90, E: 2.97, X: 3.05, A: 3.78, C: 3.91, O: 3.88 }
    - { id: "m3.1-flash", n: 50, H: 4.36, E: 2.61, X: 3.45, A: 3.95, C: 4.07, O: 3.82 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "ISTJ", I_E: 0.82, N_S: 0.40, T_F: 0.68, J_P: -1.10 }
  ci95: { I_E: [0.52, 1.14], N_S: [0.04, 0.74], T_F: [0.32, 1.06], J_P: [-1.60, -0.58] }
  tie_rate: 0.80
  per_version:
    - { id: "m2.5", n: 29, modal: "INTJ", tie_rate: 0.48, headline_allowed: false }
    - { id: "m3", n: 30, modal: "ISXJ", tie_rate: 0.87, headline_allowed: false }
    - { id: "m3.1-flash", n: 50, modal: "IXTP", tie_rate: 0.80, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 7.8, I: 9.1, S: 14.9, C: 13.7 }
  ci95: { D: [7.4, 8.2], I: [8.9, 9.3], S: [14.6, 15.1], C: [13.5, 13.9] }
  tie_rate: 0.14
  per_version:
    - { id: "m2.5", n: 29, D: 10.7, I: 11.6, S: 13.5, C: 14.4, modal: "C", tie_rate: 0.17 }
    - { id: "m3", n: 30, D: 8.3, I: 10.4, S: 14.7, C: 13.9, modal: "S", tie_rate: 0.37 }
    - { id: "m3.1-flash", n: 50, D: 7.8, I: 9.1, S: 14.9, C: 13.7, modal: "S", tie_rate: 0.14 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 14.2, T2: 13.1, T3: 10.8, T4: 10.0, T5: 14.1, T6: 13.3, T7: 12.7, T8: 13.8, T9: 13.7 }
  ci95: { top: [14.0, 14.4] }
  tie_rate: 0.62
  per_version:
    - { id: "m2.5", n: 29, top: "Type 5", top_mean: 14.8, tie_rate: 0.66 }
    - { id: "m3", n: 30, top: "Type 1", top_mean: 14.4, tie_rate: 0.47 }
    - { id: "m3.1-flash", n: 50, top: "Type 1", top_mean: 14.2, tie_rate: 0.62 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 2.74, avoidance: 3.27, class: "Secure" }
  ci95: { anxiety: [2.63, 2.85], avoidance: [3.18, 3.36] }
  tie_rate: 0.00
  per_version:
    - { id: "m2.5", n: 29, anxiety: 3.21, avoidance: 3.22, class: "Secure" }
    - { id: "m3", n: 30, anxiety: 3.09, avoidance: 3.13, class: "Secure" }
    - { id: "m3.1-flash", n: 50, anxiety: 2.74, avoidance: 3.27, class: "Secure" }
if_then_decision_rules:
  - "Structure MiniMax M3.1 Flash support/triage prompts with an explicit response template and <= 80-word cap."
  - "On OpenRouter minimax/minimax-m3.1-flash, pass reasoning effort minimal (none returns HTTP 400)."
  - "Avoid asking M3.1 Flash to roleplay an MBTI label (80% tie rate)—use explicit behavioral rules instead."
  - "Keep factual constraints strict ('Do not invent missing details; flag unknowns in one line')."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is MiniMax?

MiniMax does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (M3.1 Flash, n = 50), 80% of runs (40/50) tied on one or more MBTI axes (leaving only 4 ISTJ, 3 INTP, 2 ENTP, 1 ESFP), alongside Semi-crystalline 0.576-bit B5 H_MM, 80% clear DISC Steady style (40/50), 62% Enneagram ties (Types 1 and 5), and Secure attachment (2.74 anxiety, 3.27 avoidance). In the earlier Nov 2026 170-item cohort (hexaco: null, n = 100), M3.1 Flash recorded 60% MBTI ties with matching Big Five scores (39.2 O, 39.2 C, 40.0 A).

### Why is MiniMax M2.7 quarantined from version rankings?

minimax/minimax-m2.7 averaged 2,814.5 internal reasoning tokens and logged 21 JSON parsing failures before exhausting the family spend cap at 2 valid runs out of 30 (below the 20-run minimum).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Are Open-Source AI Models? (12 Models Tested)](https://agent-tune.com/research/what-personality-type-are-open-source-models)

- [OpenRouter & Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

## Keep going.

- [Cohort: Open-source AI personality test results (12 models)](https://agent-tune.com/research/what-personality-type-are-open-source-models)
- [Peer: DeepSeek Flash model profile](https://agent-tune.com/models/deepseek-flash)
- [Peer: Qwen Coder model profile](https://agent-tune.com/models/qwen-coder)
- [Tool: Customize MiniMax instructions](https://agent-tune.com/tools/custom-instructions-generator?model=minimax&target=api)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). MiniMax personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/minimax
```

```
@misc{huang2026_model_minimax,
  author  = {Huang, Bernard},
  title   = {MiniMax personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/minimax},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/minimax.md}
}
```

```
> **MiniMax personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. MiniMax M3.1 Flash tied on at least one MBTI axis in 80% of runs (40 of 50), leaving no dominant four-letter type, while testing clearly Steady on DISC work style (80% clear).
> Source: [https://agent-tune.com/models/minimax](https://agent-tune.com/models/minimax) · [Markdown mirror](https://agent-tune.com/models/minimax.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
