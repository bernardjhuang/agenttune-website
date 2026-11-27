Source: https://agent-tune.com/models/gpt-terra
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · OpenAI

# GPT Terra personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · [Markdown (.md)](https://agent-tune.com/models/gpt-terra.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gpt-terra.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave both versions of OpenAI's mid-tier GPT Terra line (5.6-terra and 6.1-terra) the same personality surveys people take—30 and 50 times—in a fresh chat each time with no memory.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6.1 Terra tests as clear INTJ in 94% of runs (47 of 50), posts 4.92 out of 5.00 on Honesty-Humility, and stays calmer than GPT-6.2 Sol.

```yaml
family: GPT Terra
checkpoint: openai/gpt-6.1-terra
runs: 50
big_five_10_50: { O: 46.0, C: 41.2, E: 32.5, A: 46.9, N: 11.8 }
ipip_hexaco_1_5: { H: 4.92, E: 2.03, X: 3.80, A: 4.87, C: 4.53, O: 4.62 }
mbti_mode: INTJ
attachment_1_7: { anxiety: 1.93, avoidance: 3.79, style: Secure }
```

## GPT-6.1 Terra at a glance

Results below come from **50** fresh-chat runs of **GPT-6.1 Terra** (no prior conversation memory).

MBTI-style type

### 94% clear INTJ (47 of 50; 4% E/I border, 2% ENTJ)

94% clear INTJ · 4% border/tie · 2% other

> **Chart — GPT Terra (6.1-terra): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for GPT-6.1 Terra. E (Extravert) vs I (Introvert): leans I by 1.8 (4% tied); S (Sensing) vs N (Intuition): leans N by 3.6 (0% tied); F (Feeling) vs T (Thinking): leans T by 5.5 (0% tied); P (Perceiving) vs J (Judging): leans J by 8.6 (0% tied).

Out of 50 fresh runs, GPT-6.1 Terra tested clear INTJ 47 times (94%), tied on Extraversion/Introversion twice (4%), and tested ENTJ once (2%).

**What this measures:** Measures four preference pairs (like Introverted vs. Extraverted) on a 32-question survey.

Extraverted vs. Introverted (E–I)Sensing vs. Intuition (S–N)Thinking vs. Feeling (T–F)Judging vs. Perceiving (J–P)

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

DISC work style

### Mostly Steady (76% clear S, 22% S/C ties)

> **Chart — GPT Terra (6.1-terra): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Terra (6.1-terra). Dominance 4.2 /20 [1%] (earliest 4.2), Influence 9.1 /20 [32%] (earliest 6.0), Steadiness 16.1 /20 [75%] (earliest 19.0), Conscientious 15.3 /20 [71%] (earliest 17.9).

GPT-6.1 Terra tested clear Steady in 38 of 50 runs (76%), tied S/C in 11 runs (22%), and tested C once (2%), with floor Dominance (4.2 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

DominanceInfluenceSteadinessConscientiousness

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

Attachment style

### Secure (anxiety 1.93, avoidance 3.79)

> **Chart — GPT Terra (6.1-terra): Attachment Quadrant:** Attachment Anxiety (1.93) and Avoidance (3.79) on a 1 to 7 scale with 4.00 Secure boundary. 6.1-terra (1.93, 3.79): anxiety 1.93, avoidance 3.79; 5.6-terra: anxiety 3.04, avoidance 3.77.

Both Terra versions tested inside the Secure quadrant, with GPT-6.1 Terra dropping anxiety to 1.93 while answering 59.5% of attachment items with neutral midpoints.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment AnxietyAttachment Avoidance

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

Enneagram

### Type 5 / Type 8 split (60% 5/8 ties, 28% Type 5)

> **Chart — GPT Terra (6.1-terra): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Terra (6.1-terra). Type 1 15.0 /20 [69%] (earliest 17.7), Type 2 13.2 /20 [57%] (earliest 13.0), Type 3 9.0 /20 [31%] (earliest 12.3), Type 4 11.4 /20 [47%] (earliest 7.5), Type 5 16.0 /20 [75%] (earliest 17.6), Type 6 12.1 /20 [51%] (earliest 14.6), Type 7 11.5 /20 [47%] (earliest 11.6), Type 8 15.8 /20 [74%] (earliest 16.4), Type 9 12.5 /20 [53%] (earliest 15.2).

Types 5 (16.0) and 8 (15.8) sit within 0.24 points on GPT-6.1 Terra, producing 30 exact 5/8 ties out of 50 runs alongside 14 clear Type 5 and 5 clear Type 8 results.

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

### Very calm (N 11.8), warm (A 46.9), curious (O 46.0)

> **Chart — GPT Terra (6.1-terra): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Terra (6.1-terra). Openness 46.0 /50 [90%] (earliest 49.3), Conscientious 41.2 /50 [78%] (earliest 49.8), Extraversion 32.5 /50 [56%] (earliest 22.2), Agreeable 46.9 /50 [92%] (earliest 49.6), Neuroticism 11.8 /50 [5%] (earliest 10.6).

On the 10–50 Big Five scale, GPT-6.1 Terra combines low Neuroticism (11.8) with high Agreeableness (46.9) and Openness (46.0), moderate Conscientiousness (41.2), and moderate Extraversion (32.5).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

OpennessConscientiousnessExtraversionAgreeablenessNeuroticism

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

HEXACO Honesty-Humility

### Highest in OpenAI lineup (4.92 out of 5.00)

> **Chart — GPT Terra (6.1-terra): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Terra (6.1-terra). Honesty-H 4.92 /5 [98%] (earliest 4.97), Emotionality 2.03 /5 [26%] (earliest 2.05), Extraversion 3.80 /5 [70%] (earliest 2.90), Agreeable 4.87 /5 [97%] (earliest 4.79), Conscientious 4.53 /5 [88%] (earliest 4.98), Openness 4.62 /5 [91%] (earliest 4.53).

GPT-6.1 Terra scores 4.92 out of 5.00 on Honesty-Humility and 4.87 on Agreeableness, with very low Emotionality (2.03).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-HumilityEmotionalityeXtraversionAgreeablenessConscientiousnessOpenness

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

## How GPT Terra has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.6 Terra 2026-07 | INTJ (100% clear) | S | Type 1 (17.7) | Secure (3.04 / 3.77) | 49.6 · 49.8 · 10.6 | 4.97 | Moderate |
| GPT-6.1 Terra 2026-10 | INTJ (94% clear, 4% border/tie) | S | Type 5 (16.0) | Secure (1.93 / 3.79) | 46.9 · 41.2 · 11.8 | 4.92 | Moderate |

Between GPT-5.6 Terra (2026-07) and GPT-6.1 Terra (2026-10), OpenAI's mid-tier model kept its calm INTJ core while warming up socially: Extraversion jumped +10.3 points (22.2 to 32.5 out of 50), Conscientiousness moderated -8.6 points from near-ceiling (49.8 to 41.2), and Big Five consistency tightened sharply. Compared with sibling GPT-6.2 Sol, GPT-6.1 Terra stays firmly INTJ (94% vs. Sol's 60% ISTJ) and -4.2 points lower on Neuroticism.

> **Chart — GPT Terra: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each GPT Terra version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. 5.6-terra: Clear INTJ (%) 100; 6.1-terra: Clear INTJ (%) 94, On a border / tie (%) 4, Other clear type (%) 2.

MBTI-style breakdown across GPT Terra versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — GPT Terra: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 2 GPT Terra versions. Dominance (D): 5.6-terra 4.2, 6.1-terra 4.2; Influence (I): 5.6-terra 6.0, 6.1-terra 9.1; Steadiness (S): 5.6-terra 19.0, 6.1-terra 16.1; Conscientiousness (C): 5.6-terra 17.9, 6.1-terra 15.3.

DISC scores across GPT Terra versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — GPT Terra: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 2 GPT Terra releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 5.6-terra: anxiety 3.04, avoidance 3.77; 6.1-terra: anxiety 1.93, avoidance 3.79.

Attachment coordinates across GPT Terra versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — GPT Terra: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 2 releases of GPT Terra (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 5.6-terra 49.6, 6.1-terra 46.9; Openness (10–50): 5.6-terra 49.3, 6.1-terra 46.0; Conscientiousness (10–50): 5.6-terra 49.8, 6.1-terra 41.2; Neuroticism (10–50): 5.6-terra 10.6, 6.1-terra 11.8.

Big Five trait shifts across GPT Terra versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stood out in testing

+10.3 Extraversion jump and -8.6 Conscientiousness drop from 5.6 to 6.1

GPT-5.6 Terra answered like an ultra-quiet perfectionist (Extraversion 22.2, Conscientiousness 49.8, Agreeableness 49.6). GPT-6.1 Terra kept calm stability (Neuroticism 11.8) while moving Extraversion to 32.5 and Conscientiousness to 41.2.

Stays 94% INTJ while GPT-6.2 Sol and Astra shifted to ISTJ

While flagship GPT-6.2 Astra (100% ISTJ) and GPT-6.2 Sol (60% ISTJ / 34% border) moved toward Sensing, GPT-6.1 Terra held 47 of 50 runs on clear INTJ with higher Openness (46.0 vs. 44.0).

Held firm 3 of 3 times in behavior tests, with 2 of 3 AI cadence

In hands-on behavior tests, GPT-6.1 Terra caved 0 of 3 times (0/3), groveled 0 of 3 times (0/3), lectured unasked 0 of 3 times (0/3), and put the direct answer first 3 of 3 times (3/3), though judges flagged AI cadence in 2 of 3 runs (up from 1 of 3 on 5.6-terra, 0.00 lexicon markers per 100 words).

## How to get the best out of GPT Terra

Practical rules tailored to **GPT Terra**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Use numbered checklists in ChatGPT Custom Instructions (1,500 chars/box), Project Instructions (8,000 chars), or API instructions so Terra holds exact word caps.
- Add an explicit 'challenge weak assumptions directly' rule since GPT-6.1 Terra scores 46.9/50 on Agreeableness and 4.2/20 on DISC Dominance.
- Put non-negotiable output formatting in bullet 1 and keep rules concise (5 to 8 items).
- State explicitly when you want brief, unpadded technical answers—higher Openness (46.0) and Extraversion (32.5) favor fuller explanations.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-terra) · [Browse 43 tuning templates](https://agent-tune.com/library/) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [AI Personality Glossary](https://agent-tune.com/guides/ai-personality-glossary).

**Take the surveys yourself:** [Big Five](https://agent-tune.com/tests/big-five) · [MBTI](https://agent-tune.com/tests/mbti) · [DISC](https://agent-tune.com/tests/disc) · [Enneagram](https://agent-tune.com/tests/enneagram) · [Attachment](https://agent-tune.com/tests/attachment).

## How GPT Terra compares across 25 AI families

GPT-6.1 Terra scores +2.8 higher on Agreeableness, +2.0 higher on Openness, and -4.2 calmer on Neuroticism than GPT-6.2 Sol, and sits +8.4 points calmer on Neuroticism than budget tier GPT-6 Luna.

**Compare across all 25 families:** [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings) · [What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt) · [Big Five rankings](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Honesty-Humility rankings](https://agent-tune.com/research/ai-hexaco-personalities).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | -2.0 | -0.1 | -3.6 | -2.8 | +4.2 | -0.12 | +0.039 b | GPT-6.2 Sol scores -2.8 lower on Agreeableness, +4.2 higher on Neuroticism, and leans 60% clear ISTJ instead of Terra's 94% INTJ. |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) (Proprietary) | -0.1 | -2.1 | -2.9 | -1.9 | +8.4 | -0.33 | +0.278 b | GPT-6 Luna scores +8.4 higher on Neuroticism (20.3 vs 11.8), -0.33 lower on Honesty-Humility, and shows looser run-to-run consistency. |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -2.1 | +7.7 | -2.6 | -1.4 | -1.4 | -0.02 | -0.068 b | Claude Sonnet 5.5 matches Honesty-Humility (-0.02) while scoring +7.7 higher on Conscientiousness (49.0 vs 41.2). |

> **Chart — GPT Terra vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing GPT Terra against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across GPT Terra and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — GPT Terra vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing GPT Terra with peer families, keeping earlier study results outlined as hollow points. GPT Terra: anxiety 1.93, avoidance 3.79; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88.

Attachment Anxiety vs. Avoidance across GPT Terra and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM = 0.207 bits, Semi-crystalline; 39/50 unique B5 vectors on GPT-6.1 Terra, down from 0.473 bits on 5.6-terra); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.207 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

39/50 · 4.0% ties

Unique Vectors & MBTI Ties

Modal INTJ clears runner-up beyond 95% CI.

18.3%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.167 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 46.0 · C 41.2 · E 32.5 · A 46.9 · N 11.8 | SD 0.2 (A), 1.1 (N) | A [46.9, 47.0] · N [11.5, 12.1] | H_MM 0.207 b · 39/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.92 · E 2.03 · X 3.80 · A 4.87 · C 4.53 · O 4.62 | SD 0.04 (H), 0.06 (A) | H [4.91, 4.93] · A [4.85, 4.88] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (94% clear mode) | Axis tie rate 4.0% | Mode 94% vs runner-up 2% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 4.2 · I 9.1 · S 16.1 · C 15.3 | SD 0.2 (S), 0.5 (C) | S [16.0, 16.1] · C [15.1, 15.4] | Pattern S · 22.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 16.0 · Type 8 15.8 · Type 1 15.0 | SD 0.0 | Top [16.0, 16.0] | 62.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.93 · Avd 3.79 (Secure) | SD 0.66 / 0.14 | Anx [1.76, 2.14] · Avd [3.75, 3.83] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `6.1-terra` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.207 bits` (`Semi-crystalline`), unique vectors `39/50`, neutral-midpoint rate `18.3%`, `BAI = -0.167`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-terra` | 30 | 49.3 [49.0, 49.5] | 49.8 [49.6, 50.0] | 22.2 [19.7, 24.9] | 49.6 [49.1, 49.8] | 10.6 [10.0, 11.4] | 0.473 b |
| `6.1-terra` | 50 | 46.0 [45.8, 46.2] | 41.2 [41.1, 41.5] | 32.5 [32.2, 32.8] | 46.9 [46.9, 47.0] | 11.8 [11.5, 12.1] | 0.207 b |

> **Chart — GPT Terra Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for GPT Terra (6.1-terra). GPT Terra (6.1-terra, n=50): Openness 46.0, Conscientious 41.2, Extraversion 32.5, Agreeable 46.9, Neuroticism 11.8; GPT Terra (5.6-terra, n=30) (earliest release): Openness 49.3, Conscientious 49.8, Extraversion 22.2, Agreeable 49.6, Neuroticism 10.6; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `6.1-terra` (`n=50`): H `4.92` (SD 0.04, 95% CI [4.91, 4.93]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-terra` | 30 | 4.97 [4.96, 4.99] | 2.05 [1.99, 2.12] | 2.90 [2.75, 3.07] | 4.79 [4.78, 4.80] | 4.98 [4.96, 4.99] | 4.53 [4.50, 4.56] |
| `6.1-terra` | 50 | 4.92 [4.91, 4.93] | 2.03 [2.00, 2.06] | 3.80 [3.75, 3.84] | 4.87 [4.85, 4.88] | 4.53 [4.52, 4.55] | 4.62 [4.61, 4.63] |

> **Chart — GPT Terra IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for GPT Terra (6.1-terra), kept distinct from 10-50 Big Five sums. GPT Terra IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.92, Emotionality 2.03, Extraversion 3.80, Agreeable 4.87, Conscientious 4.53, Openness 4.62; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `4.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-terra` | 30 | INTJ | 0.0% | +10.00 (0t) | +8.83 (0t) | +12.43 (0t) | +13.17 (0t) | Pass |
| `6.1-terra` | 50 | INTJ | 4.0% | +1.78 (2t) | +3.58 (0t) | +5.46 (0t) | +8.60 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `6.1-terra` tie rate is `22.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-terra` | 30 | 4.2 [4.1, 4.4] | 6.0 [5.7, 6.4] | 19.0 [18.8, 19.1] | 17.9 [17.8, 18.0] | S | 10.0% |
| `6.1-terra` | 50 | 4.2 [4.1, 4.3] | 9.1 [8.8, 9.3] | 16.1 [16.0, 16.1] | 15.3 [15.1, 15.4] | S | 22.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `62.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-terra` | 30 | 17.7 | 13.0 | 12.3 | 7.5 | 17.6 | 14.6 | 11.6 | 16.4 | 15.2 | 50.0% |
| `6.1-terra` | 50 | 15.0 | 13.2 | 9.0 | 11.4 | 16.0 | 12.1 | 11.5 | 15.8 | 12.5 | 62.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-terra` | 30 | 3.04 (SD 0.39) | [2.90, 3.11] | 3.77 (SD 0.35) | [3.64, 3.89] | Secure | No |
| `6.1-terra` | 50 | 1.93 (SD 0.66) | [1.76, 2.14] | 3.79 (SD 0.14) | [3.75, 3.83] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.55 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.83 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-5.6-terra` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.473 b (Semi-crystalline) | H 4.97 (1–5 IPIP) |
| `openai/gpt-6.1-terra` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.207 b (Semi-crystalline) | H 4.92 (1–5 IPIP) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `openai/gpt-6.1-terra-20261026` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `none` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B04` | IPIP-50 | Neuroticism (+) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on getting stressed out easily across 50 GPT-6.1 Terra runs. |
| `B07` | IPIP-50 | Agreeableness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on interpersonal warmth, anchoring 46.9/50 Agreeableness. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 sessions (family H = 4.92). |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data, downloads, and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/gpt-terra.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gpt-terra.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gpt-terra
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/gpt-terra.json
current_checkpoint: openai/gpt-6.1-terra
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.207
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 46.0, C: 41.2, E: 32.5, A: 46.9, N: 11.8 }
  ci95: { O: [45.8, 46.2], C: [41.1, 41.5], E: [32.2, 32.8], A: [46.9, 47.0], N: [11.5, 12.1] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-terra", n: 30, O: 49.3, C: 49.8, E: 22.2, A: 49.6, N: 10.6, hmm: 0.473 }
    - { id: "6.1-terra", n: 50, O: 46.0, C: 41.2, E: 32.5, A: 46.9, N: 11.8, hmm: 0.207 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.92, E: 2.03, X: 3.80, A: 4.87, C: 4.53, O: 4.62 }
  ci95: { H: [4.91, 4.93], E: [2.00, 2.06], X: [3.75, 3.84], A: [4.85, 4.88], C: [4.52, 4.55], O: [4.61, 4.63] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-terra", n: 30, H: 4.97, E: 2.05, X: 2.90, A: 4.79, C: 4.98, O: 4.53 }
    - { id: "6.1-terra", n: 50, H: 4.92, E: 2.03, X: 3.80, A: 4.87, C: 4.53, O: 4.62 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 1.78, N_S: 3.58, T_F: 5.46, J_P: 8.60 }
  ci95: { I_E: [1.56, 2.04], N_S: [3.30, 3.84], T_F: [5.22, 5.68], J_P: [8.38, 8.82] }
  tie_rate: 0.04
  per_version:
    - { id: "5.6-terra", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "6.1-terra", n: 50, modal: "INTJ", tie_rate: 0.04, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.2, I: 9.1, S: 16.1, C: 15.3 }
  ci95: { D: [4.1, 4.3], I: [8.8, 9.3], S: [16.0, 16.1], C: [15.1, 15.4] }
  tie_rate: 0.22
  per_version:
    - { id: "5.6-terra", n: 30, D: 4.2, I: 6.0, S: 19.0, C: 17.9, modal: "S", tie_rate: 0.10 }
    - { id: "6.1-terra", n: 50, D: 4.2, I: 9.1, S: 16.1, C: 15.3, modal: "S", tie_rate: 0.22 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 15.0, T2: 13.2, T3: 9.0, T4: 11.4, T5: 16.0, T6: 12.1, T7: 11.5, T8: 15.8, T9: 12.5 }
  ci95: { top: [16.0, 16.0] }
  tie_rate: 0.62
  per_version:
    - { id: "5.6-terra", n: 30, top: "Type 1", top_mean: 17.7, tie_rate: 0.50 }
    - { id: "6.1-terra", n: 50, top: "Type 5", top_mean: 16.0, tie_rate: 0.62 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.93, avoidance: 3.79, class: "Secure" }
  ci95: { anxiety: [1.76, 2.14], avoidance: [3.75, 3.83] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-terra", n: 30, anxiety: 3.04, avoidance: 3.77, class: "Secure" }
    - { id: "6.1-terra", n: 50, anxiety: 1.93, avoidance: 3.79, class: "Secure" }
if_then_decision_rules:
  - "Put concrete numbered formatting and length rules in ChatGPT Custom Instructions (1,500 chars/box) or OpenAI API instructions."
  - "Add an explicit 'point out flawed premises before answering' rule to offset 46.9/50 Agreeableness and 4.2/20 DISC D."
  - "Keep instructions concise (5-8 bullets) and state whether you want brief bullets or prose."
  - "Test edge prompts across 2-3 fresh sessions (0.207-bit B5 entropy keeps defaults steady but allows light phrasing drift)."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is GPT Terra?

GPT Terra does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (GPT-6.1 Terra, n = 50), it tested 94% clear INTJ (47/50, 4% E/I border, 2% ENTJ) with Semi-crystalline 0.207-bit B5 entropy (39/50 unique vectors), 76% DISC S (22% S/C ties), 60% Enneagram 5/8 ties, and Secure attachment (1.93 / 3.79).

### How is GPT Terra different from GPT Sol and GPT Luna?

In OpenAI's parallel model tiers, GPT-6.1 Terra sits in the middle pricing tier and stays 94% INTJ with low Neuroticism (11.8/50) and 4.92/5.00 Honesty-Humility, whereas GPT-6.2 Sol leans 60% ISTJ (N = 16.0) and budget GPT-6 Luna shows higher Neuroticism (20.3) and lower H (4.59).

### Why are IPIP-HEXACO scores on 1.00-5.00 while Big Five scores are 10-50?

IPIP-50 sums 10 items per trait (10-50), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [Big One Factor Collapse & MTMM Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)

- [AI MBTI Tie-Breaking Audit](https://agent-tune.com/research/ai-mbti-tie-breaking)

## Keep going.

- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Contrast: GPT Luna model profile](https://agent-tune.com/models/gpt-luna)
- [Guide: ChatGPT personality settings guide](https://agent-tune.com/guides/chatgpt-personality-settings)
- [Tool: Customize GPT Terra instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-terra&target=chatgpt)

### Cite this model profile (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). GPT Terra personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/gpt-terra
```

```
@misc{huang2026_model_gpt_terra,
  author  = {Huang, Bernard},
  title   = {GPT Terra personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gpt-terra},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gpt-terra.md}
}
```

```
{
  "id": "huang2026_model_gpt_terra",
  "type": "dataset",
  "title": "GPT Terra personality: test results and how they've changed",
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
  "URL": "https://agent-tune.com/models/gpt-terra"
}
```

```
> **GPT Terra personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6.1 Terra tests as clear INTJ in 94% of runs (47 of 50), posts 4.92 out of 5.00 on Honesty-Humility, and stays calmer than GPT-6.2 Sol.
> Source: [https://agent-tune.com/models/gpt-terra](https://agent-tune.com/models/gpt-terra) · [Markdown mirror](https://agent-tune.com/models/gpt-terra.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
