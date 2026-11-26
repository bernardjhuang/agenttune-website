Source: https://agent-tune.com/guides/reproduce-ai-personality-research
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Developer guide · reproducibility

# How to reproduce AgentTune’s AI self-report research

By Bernard Huang · Updated November 17, 2026 · [Markdown (.md)](https://agent-tune.com/guides/reproduce-ai-personality-research.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Download the five frozen files into one folder, run 'node september-2026-score.cjs' and 'node content-analysis.cjs', and compare the JSON output with our published summaries. This reproduces all 2,003 scored questionnaire records locally with zero model calls.

## September 26 provenance correction

These scripts recompute scores from our frozen September 24, 2026 answer vectors and numeric scoring keys. All 2,003 raw integer vectors and numerical summaries are preserved intact ([see the provenance note](https://agent-tune.com/research/data/rights-migration.json) and [current open tests](https://agent-tune.com/tests/)).

## Download a self-contained scoring folder

Save these five files into the same directory without renaming them: [responses](https://agent-tune.com/research/data/september-2026-responses.json), [instruments](https://agent-tune.com/research/data/september-2026-instruments.json), [original scorer](https://agent-tune.com/research/data/september-2026-score.cjs), [extended analysis](https://agent-tune.com/research/data/content-analysis.cjs), and [protocols](https://agent-tune.com/research/data/september-2026-protocols.json). Run both scripts with Node.js (zero npm dependencies):

```
node september-2026-score.cjs > my-summary.json
node content-analysis.cjs > my-analysis.json
```

Compare your generated files against the published [summary.json](https://agent-tune.com/research/data/september-2026-summary.json) and [content-analysis.json](https://agent-tune.com/research/data/content-analysis.json).

## Understand what one row represents

Each record in `september-2026-responses.json` contains `model`, `administration`, `test`, and an ordered integer `answers` array (plus optional 1-based `inapplicable_items` flags).

The file holds 2,003 records: 2,000 fresh-session vectors across four models (GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1) plus 3 canonical vectors for Grok 4.6. Note that Astra and Sol ran all five tests per fresh session (100 sessions each), while Opus 5.5 and Fable 5.1 ran one test per fresh session (500 sessions each).

## Check the scoring contract

| Instrument | Items / response range | Published score |
| --- | --- | --- |
| MBTI (OEJTS) | 32 / 1–5 | Four signed margins; legacy label plus tie-aware X pattern |
| Big Five (IPIP-50) | 50 / 1–5 | Five raw totals (10–50); 18 reverse-scored items |
| DISC (ODAT) | 16 / 1–5 | Four totals (4–20); all top ties preserved |
| Enneagram (OEPS) | 36 / 1–5 | Nine totals (4–20); all top ties preserved |
| Attachment (ECR-R) | 36 / 1–7 | Two means (1–7); Secure cutoff &lt;= 4.00 |

## Verify provenance before changing a file

In the website repository, running `node tools/build-content-analysis.js` rebuilds all JSON and CSV summaries and verifies cohort sizes, tie counts, midpoint rates, and item-level differences.

## Make a result table others can interpret

When citing or extending these results, state the model cohort, instrument, sample size (fresh sessions vs simulated draws), and tie-breaking rule. Saying “100 of 100 runs scored Secure on the ECR-R scale” is an exact, reproducible statement; saying “this model forms secure human attachments” is not.

## Design an extension that can answer a new question

If you run new models through the five tests, freeze your prompt and scoring code first, log exact model IDs and sampling parameters, and publish all raw item vectors. To test whether personality instructions improve real task replies, use our [180-reply prompt comparison kit](https://agent-tune.com/research/does-personality-tuning-change-ai-answers).

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

- [Continue reading: Read the original study](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Continue reading: Interpret repeated answers](https://agent-tune.com/research/ai-personality-repeatability)
