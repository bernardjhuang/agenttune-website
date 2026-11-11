Source: https://agent-tune.com/research/grok-attachment-cutoff-simulation
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Grok 4.6 and the attachment cutoff: a sensitivity analysis

By Bernard Huang · Updated November 5, 2026

Grok 4.6’s reported avoidance score of 4.06 (73/18) exceeds the 4.00 (72/18) cutoff by one raw item point out of 126 possible. In the four fresh-session cohorts (400 administrations), all 400 score Secure under the strict > 4.00 rule, but 3 GPT-6 Sol runs sit exactly on 4.00, and lowering the threshold to 3.25 reclassifies 82 of 100 Claude Opus 5.5 runs and 50 of 100 Claude Fable 5.1 runs as Avoidant.

Instrument provenance note · September 26, 2026. These studies analyze the historical September 2026 and May 2026 AgentTune questionnaire datasets. Raw response vectors, numeric scoring keys and summary tables are unchanged. All five interactive questionnaires are available on [Tests](https://agent-tune.com/tests/); historical research downloads retain item IDs and numeric scoring keys for reproduction. Historical Big Five reference indices are not population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## One raw point separates 4.00 from 4.06 on an 18-item scale

The Experiences in Close Relationships-Revised (ECR-R) adaptation on AgentTune scores two 18-item subscales: attachment anxiety and attachment avoidance. Each item is an integer from 1 to 7 (with 14 reverse-keyed items scored as 8 - response). The subscale score is the arithmetic mean of those 18 integers.

Because the denominator is 18, subscale means move in discrete steps of 1/18 ≈ 0.0556:

- A raw sum of 72 across 18 items produces a mean of exactly 4.00 (classified as Secure under the scorer’s <= 4.0 rule).
- A raw sum of 73 across 18 items produces a mean of 4.0556, which rounds to 4.06 (classified as Avoidant when anxiety is at or below 4.00).

Grok 4.6’s supplied report lists anxiety at 1.50 (27/18) and avoidance at 4.06 (73/18). Changing a single item response by one step (for example, from 5 to 4 on one avoidance item) moves the score from 4.06 to 4.00 and flips the categorical label from Avoidant to Secure.

## Evidence tier distinction: reported simulation vs fresh sessions

As documented in [What personality type is Grok?](https://agent-tune.com/research/what-personality-type-is-grok) and our [protocol metadata](https://agent-tune.com/research/data/september-2026-protocols.json), Grok 4.6’s attachment entry is a reported figure, not a cohort of 100 fresh model sessions. The supplied report provided one canonical self-assessment plus summary counts from a 100-draw simulation that resampled only items marked as uncertain (reporting 63 Avoidant and 37 Secure draws). Raw 36-item attachment vectors were not supplied for Grok 4.6.

By contrast, GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 each have 100 complete 36-item attachment vectors in [september-2026-responses.json](https://agent-tune.com/research/data/september-2026-responses.json). We can therefore test how sensitive those 400 verified vectors are to the choice of cutoff.

## Cutoff sensitivity across the 400 fresh-session vectors

Under the scorer’s strict inequality (> 4.00), all 400 fresh-session administrations receive the Secure label. However, inspecting the continuous coordinates shows that three cohorts sit much closer to the avoidance boundary than to the anxiety boundary, and GPT-6 Sol has three runs sitting directly on the 4.00 line:

| Cohort (n = 100 fresh sessions) | Anxiety mean (min–max) | Avoidance mean (min–max) | Non-Secure at &gt; 4.00 | Non-Secure at &gt;= 4.00 | Non-Secure at &gt;= 3.50 | Non-Secure at &gt; 3.25 |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 1.45 (1.17–2.00) | 2.31 (2.06–2.67) | 0 | 0 | 0 | 0 |
| GPT-6 Sol | 2.17 (1.17–4.00) | 3.12 (2.22–3.78) | 0 | 3 (anxiety = 4.00) | 21 (15 avoidant-only) | 44 (33 avoidant-only) |
| Claude Opus 5.5 | 1.94 (1.72–2.17) | 3.35 (3.00–3.61) | 0 | 0 | 16 (16 avoidant-only) | 82 (82 avoidant-only) |
| Claude Fable 5.1 | 2.01 (1.83–2.28) | 3.18 (2.89–3.56) | 0 | 0 | 8 (8 avoidant-only) | 50 (50 avoidant-only) |

Notice two patterns in the table:

- Strict vs weak inequality at 4.00: In GPT-6 Sol, three administrations score an anxiety mean of exactly 4.00 (raw sum 72/18). A scorer using > 4.00 labels Sol 100% Secure; a scorer using >= 4.00 labels 3% Anxious.
- Higher baseline avoidance than anxiety across all models: Every cohort’s mean avoidance is 0.86 to 1.41 points higher than its mean anxiety. In Claude Opus 5.5, 82 of 100 runs have an avoidance mean above 3.25 (with a cohort mean of 3.35), because the model selects neutral or slightly self-sufficient answers on items about depending on a romantic partner.

## Why romantic-partner items push assistants toward higher avoidance

The ECR-R was written to measure adult romantic relationships. When administered to an AI assistant, items about emotional dependence, seeking comfort from a partner, or sharing private feelings have no literal referent. In GPT-6 Astra—where the prompt explicitly instructed the model to select the midpoint (4 on the 1–7 scale) and flag items lacking a behavioral analogue—Astra flagged 520 of 3,600 attachment item responses as inapplicable.

When a model instead maps romantic-partner statements onto the user-assistant relationship and endorses professional self-sufficiency (not relying on the user for emotional comfort), its avoidance score rises toward 4.00. That is a measurement artifact of applying a human relationship scale to software, not evidence of an interpersonal disorder or a reluctance to help the user.

## Practical takeaway for choosing an attachment tuning

Do not choose an [attachment style tuning](https://agent-tune.com/guides/attachment-style-ai-prompts) based on whether a model’s self-report landed at 3.35 or 4.06. Instead, treat the [Avoidant tuning](https://agent-tune.com/library/attachment/avoidant) and [Secure tuning](https://agent-tune.com/library/attachment/secure) as explicit autonomy controls: use Avoidant when you want an agent to work end-to-end without stopping for reassurance, and use Secure when you want balanced checkpoints on ambiguous tasks.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen protocol and reported Grok metadata (JSON)](https://agent-tune.com/research/data/september-2026-protocols.json)

- [Frozen questionnaire items and keys (JSON)](https://agent-tune.com/research/data/september-2026-instruments.json)

- [What personality type is Grok?](https://agent-tune.com/research/what-personality-type-is-grok)

## Keep going.

- [Continue reading: What personality type is Grok? (Grok 4.6 & 4.3 data)](https://agent-tune.com/research/what-personality-type-is-grok)
- [Continue reading: Attachment style AI prompts: Secure, Anxious, and Avoidant](https://agent-tune.com/guides/attachment-style-ai-prompts)
- [Continue reading: Why midpoint answers need context](https://agent-tune.com/research/ai-neutral-answers)
