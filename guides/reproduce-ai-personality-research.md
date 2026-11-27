Source: https://agent-tune.com/guides/reproduce-ai-personality-research
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Developer guide · reproducibility

# How to reproduce AgentTune’s AI self-report research

By Bernard Huang · Updated November 26, 2026 · ~3 min read · [Markdown (.md)](https://agent-tune.com/guides/reproduce-ai-personality-research.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Download the frozen JSON and CSV files from /research/data/, then run 'node september-2026-score.cjs' and 'node content-analysis.cjs' to verify the 2,003-record September archive, or run 'python3 tools/analyze-psychometric-forensics.py' to recompute the 10,000-sheet November dataset (including the 63.58% single-factor PCA, Campbell-Fiske MTMM matrix, and 0.054 to 1.499 bits Shannon entropy) at $0.00 API cost.

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
| Attachment (ECR-R) | 36 / 1–7 | Two means (1–7); Secure cutoff <= 4.00 |

## Verify provenance before changing a file

In the website repository, running `node tools/build-content-analysis.js` rebuilds all JSON and CSV summaries and verifies cohort sizes, tie counts, midpoint rates, and item-level differences.

## Make a result table others can interpret

When citing or extending these results, state the model cohort, instrument, sample size (fresh sessions vs simulated draws), and tie-breaking rule. Saying “100 of 100 runs scored Secure on the ECR-R scale” is an exact, reproducible statement; saying “this model forms secure human attachments” is not.

## The fine print: reproducing the November 2026 10,000-sheet & Wave 3 forensics studies ($0.00 API cost)

Our November 2026 Wave 1–3 archive publishes every raw response vector, orthogonal 3-family blind judge transcript, and deterministic forensics output under `/research/data/`:

| Wave 1–3 Dataset / Study | Sample | Primary Frozen JSON / CSV |
| --- | --- | --- |
| 20-Model Psychometric Baseline | 10,000 sheets (20 × 5 × 100) | [responses.json](https://agent-tune.com/research/data/november-2026-openrouter-responses.json) · [summary.csv](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) |
| Wave 3: AI &ldquo;Big One&rdquo; PCA & MTMM | 10,000 sheets ($0 Jacobi PCA) | [factor-collapse-mtmm.json](https://agent-tune.com/research/data/november-2026-factor-collapse-mtmm.json) · [50-item CSV](https://agent-tune.com/research/data/november-2026-factor-collapse-mtmm.csv) |
| Wave 3: Persona Entropy & BAI | 10,000 sheets ($0 Shannon bits) | [entropy.json](https://agent-tune.com/research/data/november-2026-persona-entropy-acquiescence.json) · [entropy.csv](https://agent-tune.com/research/data/november-2026-persona-entropy-acquiescence.csv) |
| Wave 3: Historical Evolution (2023–2026) | 32 checkpoints · 3-judge &alpha;=0.86 | [evolution.json](https://agent-tune.com/research/data/november-2026-historical-evolution-results.json) · [summary.csv](https://agent-tune.com/research/data/november-2026-historical-evolution-summary.csv) |
| Wave 3: Reasoning Phase Transition | 216 cells · 138 CoT traces | [reasoning.json](https://agent-tune.com/research/data/november-2026-reasoning-phase-transition-results.json) · [summary.csv](https://agent-tune.com/research/data/november-2026-reasoning-phase-transition-summary.csv) |
| Unified Agent Decision Briefs | 15 studies (YAML/JSON rules) | [november-2026-agent-research-briefs.json](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json) |

To recompute all Jacobi eigenvalues (`PC1 = 63.58%`), Campbell–Fiske MTMM correlations, Shannon entropy bits, and 50-item embodiment statistics locally with zero API calls, run `python3 tools/analyze-psychometric-forensics.py` in the repository. To test whether personality instructions improve real task replies, see our [540-reply behavioral study & 20-task comparison kit](https://agent-tune.com/research/does-personality-tuning-change-ai-answers).

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

- [Wave 3 Forensics: The AI Big One: 63.6% Factor Collapse & MTMM Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)
- [Wave 3 Longitudinal: Historical Evolution of AI Personalities (2023–2026)](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026)
- [Continue reading: Read the September five-model study](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Continue reading: Crystalline vs. Fluid AI Minds: 27.7× Entropy Spread](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)
