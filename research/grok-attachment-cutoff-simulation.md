Source: https://agent-tune.com/research/grok-attachment-cutoff-simulation
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Grok 4.6 and the attachment cutoff: a sensitivity analysis

By Bernard Huang · Updated November 17, 2026

**Quick answer:** Grok 4.6’s reported avoidance score of 4.06 (73/18) clears the 4.00 (72/18) Avoidant cutoff by a single raw point. Across the 400 fresh-session runs from GPT-6 and Claude, all 400 score Secure under the strict > 4.00 rule. However, 3 GPT-6 Sol runs sit right on 4.00, and lowering the threshold to 3.25 reclassifies 82 of 100 Claude Opus 5.5 runs and 50 of 100 Claude Fable 5.1 runs as Avoidant.

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## One raw point separates 4.00 from 4.06 on an 18-item scale

The Experiences in Close Relationships-Revised (ECR-R) quiz on AgentTune scores two 18-item subscales: attachment anxiety and attachment avoidance. Each item is an integer from 1 to 7 (with 14 reverse-keyed items scored as `8 - response`). The subscale score is the average of those 18 integers.

Because the denominator is 18, subscale means move in steps of `1/18 ≈ 0.0556`:

- A raw sum of **72 across 18 items** gives a mean of exactly **4.00** (labeled **Secure** under the scorer’s `
- A raw sum of **73 across 18 items** gives a mean of **4.0556**, which rounds to **4.06** (labeled **Avoidant** when anxiety is at or below 4.00).

Grok 4.6’s supplied report lists anxiety at `1.50` (`27/18`) and avoidance at `4.06` (`73/18`). Lowering just one item response by a single step (for example, from 5 to 4) drops the mean to 4.00 and flips the label from Avoidant to Secure.

## Evidence tier distinction: reported simulation vs fresh sessions

As noted in [What personality type is Grok?](https://agent-tune.com/research/what-personality-type-is-grok) and our [protocol metadata](https://agent-tune.com/research/data/september-2026-protocols.json), Grok 4.6’s attachment entry is a **reported figure**, not 100 fresh sessions. The supplied report gave one canonical self-assessment plus summary counts from a 100-draw simulation over uncertain items (63 Avoidant, 37 Secure). Raw 36-item attachment vectors were not included.

By contrast, GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 each have 100 complete 36-item attachment vectors in [september-2026-responses.json](https://agent-tune.com/research/data/september-2026-responses.json). We can test directly how sensitive those 400 verified runs are to the cutoff choice.

## Cutoff sensitivity across the 400 fresh-session vectors

Under the strict inequality (`> 4.00`), all 400 fresh-session runs score **Secure**. However, three cohorts sit much closer to the avoidance boundary than to the anxiety boundary, and GPT-6 Sol has three runs directly on the `4.00` line:

| Cohort (n = 100 fresh sessions) | Anxiety mean (min–max) | Avoidance mean (min–max) | Non-Secure at &gt; 4.00 | Non-Secure at &gt;= 4.00 | Non-Secure at &gt;= 3.50 | Non-Secure at &gt; 3.25 |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 1.45 (1.17–2.00) | 2.31 (2.06–2.67) | 0 | 0 | 0 | 0 |
| GPT-6 Sol | 2.17 (1.17–4.00) | 3.12 (2.22–3.78) | 0 | 3 (anxiety = 4.00) | 21 (15 avoidant-only) | 44 (33 avoidant-only) |
| Claude Opus 5.5 | 1.94 (1.72–2.17) | 3.35 (3.00–3.61) | 0 | 0 | 16 (16 avoidant-only) | 82 (82 avoidant-only) |
| Claude Fable 5.1 | 2.01 (1.83–2.28) | 3.18 (2.89–3.56) | 0 | 0 | 8 (8 avoidant-only) | 50 (50 avoidant-only) |

Two patterns stand out:

- **Strict vs weak inequality at 4.00:** Three GPT-6 Sol runs score an anxiety mean of exactly `4.00` (raw sum 72/18). Using `> 4.00` labels Sol 100% Secure; using `>= 4.00` labels 3% Anxious.
- **Higher baseline avoidance than anxiety across all models:** Every cohort’s mean avoidance sits 0.86 to 1.41 points above its mean anxiety. In Claude Opus 5.5, 82 of 100 runs exceed 3.25 on avoidance (mean 3.35) because the model chooses neutral or self-sufficient answers on romantic-partner items.

## Why romantic-partner items push assistants toward higher avoidance

The ECR-R measures human romantic relationships. Statements about emotional dependence, seeking comfort from a partner, or sharing private feelings do not literally apply to software. When GPT-6 Astra was explicitly instructed to pick the midpoint (4) and flag inapplicable items, it flagged 520 of 3,600 attachment answers.

When a model instead maps romantic-partner items onto the user-assistant relationship and endorses professional self-sufficiency, its avoidance score climbs toward 4.00. That is a measurement artifact of giving a human relationship test to an AI, not a sign of aloof behavior.

## Practical takeaway for choosing an attachment tuning

Do not pick an [attachment style tuning](https://agent-tune.com/guides/attachment-style-ai-prompts) based on whether a model’s self-report landed at 3.35 or 4.06. Treat the [Avoidant tuning](https://agent-tune.com/library/attachment/avoidant) and [Secure tuning](https://agent-tune.com/library/attachment/secure) as autonomy controls: use Avoidant when you want end-to-end execution with minimal check-ins, and use Secure when you want brief checkpoints on ambiguous tasks.

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
