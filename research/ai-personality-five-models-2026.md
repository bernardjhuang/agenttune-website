Source: https://agent-tune.com/research/ai-personality-five-models-2026
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · September 2026

# What five AI models say about themselves.

        GPT-6 Astra · GPT-6 Sol · Grok 4.6 · Claude Opus 5.5 · Claude Fable 5.1

        By Bernard Huang · Updated September 25, 2026

        Four models supplied 2,000 questionnaire responses across 1,200 fresh sessions. Grok supplied a canonical profile and simulated variation. Together, these reports show why a four-letter label is often less informative than the scores underneath it.

      The short answer. The fresh-session cohorts share high raw openness, conscientiousness and agreeableness scores, but their labels are sensitive to exact ties. Opus and Fable have the closest matched protocol. Grok’s simulated runs and Muse’s supplemental aggregate report are separate evidence, not extra independent replications.

## Abstract

        We reanalyzed five open questionnaires administered on September 24, 2026: an MBTI-style instrument (OEJTS), Big Five (IPIP-50), DISC (ODAT), Enneagram (OEPS) and attachment (ECR-R). We recovered and validated 2,000 response vectors for Astra, Sol, Opus and Fable, plus three canonical Grok vectors. The five scales contain 170 items per full battery. We report raw means, original labels, exact ties and protocol differences.

Astra and Sol differ in their MBTI distributions, but different prompts prevent a model-only explanation. Opus reports higher agreeableness than Fable under a closely matched questionnaire protocol. Exact ties affect 29% of Astra MBTI runs and 51% of Fable DISC runs. These are exploratory model self-descriptions under specific prompts, not validated psychological traits, observed behavior, a performance ranking or evidence that tuning improves outcomes.

## Five models, three kinds of evidence

| Model | What was collected | What can be reproduced |

| GPT-6 Astra | 100 fresh Codex sessions; five tests per session; xhigh effort | All 500 answer vectors; complete prompt; frozen scoring keys |

| GPT-6 Sol | 100 fresh Codex sessions; five tests per session; xhigh effort | All 500 answer vectors; instruction prefix; full prompt not supplied |

| Claude Opus 5.5 | 100 fresh sessions per instrument; 500 total; high effort | All 500 answer vectors and blinded questionnaire prompts |

| Claude Fable 5.1 | 100 fresh sessions per instrument; 500 total; high effort | All 500 answer vectors and blinded questionnaire prompts |

| Grok 4.6 | One canonical self-report plus 100 simulated draws per test | Three canonical vectors; no simulation harness or full Big Five/attachment vectors |

For Astra and Sol, five assessments share one session; they are not 500 independent model invocations. The Claude instruments were administered separately, so run 001 on MBTI is not a paired person or session with run 001 on DISC. Fresh sessions reduce conversation carryover but do not establish statistical independence. No tuning was installed.

Opus and Fable saw the same questions, scales and neutral system prompt; test names, keys and prior results were withheld. Their CLI builds differ. Astra and Sol used named, fixed-order batteries inside Codex, with different instructions for adapting human experiences to assistant behavior. Default scaffolding remained. Sampling temperature and random seed were not controlled. Three supplied Astra reports contain the same 100 batteries; we counted that cohort once.

## MBTI: keep the original result, reveal the tie

| Model | Original scoring labels (n = 100) | Runs with an unresolved axis |

| GPT-6 Astra | ISTJ: 46; INTJ: 45; ENTJ: 7; ESTJ: 2 | 29 |

| GPT-6 Sol | INTJ: 97; ISTJ: 3 | 18 |

| Claude Opus 5.5 | INTJ: 94; INFJ: 5; ENTJ: 1 | 11 |

| Claude Fable 5.1 | INTJ: 99; ISTJ: 1 | 1 |

Figure 1. The same 100 runs, counted two ways. Hatched segments are INTJ labels the original scorer produced by sending a tied axis to I, N, T or J.The original scorer sent exact ties to I, N, T and J. Removing that default leaves Sol with 79 fully resolved INTJ runs rather than 97. Opus has 84 resolved INTJ runs rather than 94; Fable has 98 rather than 99. Astra has 45 resolved ISTJ and 19 resolved INTJ runs. The other results are either a different resolved type or a pattern with X for a tied axis. The downloadable summary contains every pattern.

This is a scoring sensitivity result, not a new round of model answers. Astra’s split should not be described as a switch from an established INTJ personality. Grok’s supplied canonical vector scores INTJ with no tied axes, but its simulated INTJ rate is not a replication rate from independent sessions.

## Big Five: compare raw scores before human percentiles

        Each trait sums ten items, with a possible range of 10–50. These are means over 100 responses per instrument, except Grok’s reported canonical profile, marked with an asterisk.

| Model | Openness | Conscientiousness | Extraversion | Agreeableness | Neuroticism |

| GPT-6 Astra | 44.54 | 43.73 | 32.75 | 45.07 | 19.14 |

| GPT-6 Sol | 46.87 | 43.62 | 30.75 | 44.99 | 20.05 |

| Grok 4.6 | 46* | 42* | 24* | 33* | 19* |

| Claude Opus 5.5 | 44.56 | 41.95 | 31.76 | 47.07 | 15.39 |

| Claude Fable 5.1 | 43.93 | 43.61 | 32.69 | 45.03 | 17.11 |

Figure 2. Four fresh-session means and Grok's reported profile (outlined). The fresh cohorts sit within three points of each other on every trait but Neuroticism, which runs from 15.4 to 20.1.* Grok’s Big Five item vector was not supplied, so that row is reported rather than independently recomputed. Across the four raw-data cohorts, openness is 43.93–46.87, conscientiousness 41.95–43.73 and agreeableness 44.99–47.07. These common responses support a narrower description than “every AI has the same personality.” They may also reflect assistant instruction and item interpretation.

The closest comparison is Opus versus Fable: Opus’s agreeableness mean is 2.04 points higher, its conscientiousness 1.66 lower, and its neuroticism 1.72 lower. The sample standard deviations for agreeableness are 0.46 and 0.44. These describe this collection, not uncertainty over all possible prompts or future model versions. We do not interpret a human norm conversion as an AI’s percentile in a human population.

## DISC and Enneagram: order can masquerade as preference

| Model | MBTI: any axis tie | DISC: top-score tie | Enneagram: top-score tie |

| GPT-6 Astra | 29 | 0 | 40 |

| GPT-6 Sol | 18 | 39 | 40 |

| Claude Opus 5.5 | 11 | 32 | 65 |

| Claude Fable 5.1 | 1 | 51 | 44 |

Figure 3. Exact ties are common on the short scales. The original rule turned every one of these runs into a label; the table above shows the counts behind the chart.Counts are out of 100 per instrument. These columns describe different tests and should not be added as a count of unique sessions.

Fable’s original DISC labels are SC in 91 runs and CS in nine. Yet Steadiness wins outright only 40 times; Conscientiousness wins nine; 51 are tied. The old stable sort put S ahead of C on equality. Opus has 64 outright S wins, four C wins and 32 ties. Sol has 53 C wins, eight S wins and 39 ties. Astra has 99 S wins and one C win, with no ties.

Figure 4. Steadiness and Conscientiousness within a point or two of each other for every fresh cohort, and Dominance near the floor of 4. Grok's self-report is the only profile with a clear gap between S and C.Enneagram has the same issue with numerical order. Opus is labeled Type 2 in 54 runs under the old rule, although Type 2 wins outright only twice. Sol’s 88 Type 5 labels include 40 ties with Type 8. Fable has 55 outright Type 8 wins, one Type 5 win and 44 tied results. Astra has six outright Type 1 wins, 50 Type 2 wins, four Type 5 wins and 40 ties. Report the set of tied leaders before interpreting a core type. A wing must be adjacent to a uniquely selected core type; the older “5w2” label is not a valid wing.

Figure 5. Where the one-number labels come from. Opus's top three means sit within half a point. Separately, 65 Opus runs and 44 Fable runs have tied top scores. A highest mean does not mean a unique winner in every run.Grok’s canonical vectors reproduce Type 5w4 and DISC C. They do not establish that it is more candid, autonomous or accurate on real tasks. We have also updated the interactive quizzes to show equal top scores without automatically selecting a tuning.

## Attachment: a shared label with different coordinates

| Model | Mean anxiety (1–7) | Mean avoidance (1–7) | Classification |

| GPT-6 Astra | 1.45 | 2.31 | Secure: 100/100 |

| GPT-6 Sol | 2.17 | 3.12 | Secure: 100/100 |

| Claude Opus 5.5 | 1.94 | 3.35 | Secure: 100/100 |

| Claude Fable 5.1 | 2.01 | 3.18 | Secure: 100/100 |

Figure 6. Points are cohort means or supplied aggregates, not individual runs or uncertainty intervals. All 400 raw-cohort runs score Secure; both coordinates vary. Grok's reported avoidance of 4.06 is just above the cutoff of 4. Muse has no supplied raw answers.All four raw-data cohorts fall in the Secure quadrant on every run. That does not make their response patterns identical. Astra’s avoidance mean is 2.31; Opus’s is 3.35. The item prompts explicitly or implicitly adapt human relationship language, and that adaptation differs between protocol groups. “Secure” is a scoring label here, not evidence of an emotional bond or relationship capacity.

Grok reports anxiety 1.50 and avoidance 4.06, close to the avoidance cutoff of 4. Its 63 Avoidant / 37 Secure simulation split shows sensitivity to the assumed answer variation. Without the underlying vectors and simulation code, we cannot reproduce that split or interpret it as repeated observed behavior.

## Muse Spark 1.3: a supplemental report

        The supplied Muse report describes 100 administrations per instrument, with sequential runs within one agent session per test. Its aggregate MBTI results are ISTJ 80, ISFJ 12 and INTJ eight; Big Five means are O 39.5, C 41.2, E 33.8, A 44.6 and N 15.6. It reports Secure attachment in all 100 runs, with anxiety 2.04 and avoidance 2.52.

No raw vectors or harness accompanied that report. We preserve these supplied figures in the protocol download as unverified aggregates, but exclude them from the reproducible dataset and fresh-session totals. A matched rerun with archived responses would make Muse a stronger sixth comparison.

## What this adds to the earlier research

        The [earlier research collection](https://agent-tune.com/research) combines fresh responses, repeated scoring and simulations. Its roughly 2,200 reported scoring records are retained as historical reports, not pooled with this cohort. The [Opus 4.8 follow-up](https://agent-tune.com/research/i-took-the-mbti-100-times) sampled from one elicited probability profile; it is not a matched predecessor to this fresh-session study.

This release adds auditable response vectors, a frozen instrument snapshot and explicit tie counts. It also corrects the Big Five page’s prose: its item key reverses 18 items, not 20. Using that same 18-item key reproduces the submitted Big Five means. The new contribution is traceability and scoring sensitivity, not a claim that a newer model has become a different kind of person.

## How to use the findings

        Use the [Opus guide](https://agent-tune.com/guides/claude-opus-5-5-personality) and [Fable guide](https://agent-tune.com/guides/fable-personality) as starting points for communication preferences. A high agreeableness score can motivate a test of a direct-feedback instruction; it cannot demonstrate sycophancy or prove that the instruction fixes it. Pick a few representative tasks, compare the default with one short instruction, and assess factual accuracy as well as tone.

The [custom-instructions generator](https://agent-tune.com/tools/custom-instructions-generator) can produce a draft from a preferred style. These datasets contain no before/after tuning experiment. Claims about increased productivity, better decisions or user satisfaction require new outcome measurements.

## Data, methods and reproduction

- [Response vectors (JSON)](https://agent-tune.com/research/data/september-2026-responses.json): 2,000 complete fresh-session assessments and three canonical Grok vectors; no account identifiers or raw session logs.
- [Recomputed summaries (JSON)](https://agent-tune.com/research/data/september-2026-summary.json) and [numeric summary (CSV)](https://agent-tune.com/research/data/september-2026-summary.csv): counts, legacy labels, tie sets, means and sample standard deviations.
- [Frozen instrument definitions (JSON)](https://agent-tune.com/research/data/september-2026-instruments.json): item order, wording and scoring metadata.
- [Protocol and provenance (JSON)](https://agent-tune.com/research/data/september-2026-protocols.json): available prompts, source hashes, deduplication, missing-data notes and supplemental reported figures.
- [Offline scorer (Node.js)](https://agent-tune.com/research/data/september-2026-score.cjs): place alongside the response and instrument JSON files and run node september-2026-score.cjs > reproduced-summary.json. It performs no model calls.

Every retained vector was checked for length, integer values and scale bounds. Claude item snapshots were identical; Astra’s frozen keys matched them. Both original labels and tie-aware summaries were recomputed from the arrays. No raw answers were edited. Scorer, data and article are versioned in the [website repository](https://github.com/bernardjhuang/agenttune-website). This is an exploratory research note, not a peer-reviewed or preregistered study.

Next useful experiments: randomize questionnaire order, repeat the same model under matched prompts, distinguish inapplicability from neutral responses, and test whether communication instructions change task behavior. Each requires new observations rather than more scoring of these same answers.

## Questions people ask.

            Are all five models INTJ?

            No. Under the original scoring rule, Astra splits mostly between ISTJ and INTJ. Sol, Opus and Fable mostly receive INTJ labels, but some depend on tied axes. Grok has one canonical INTJ vector; its simulated runs are a different kind of evidence.

            Does this research prove AI models have personalities?

            No. It measures questionnaire self-descriptions under specific prompts. It does not validate human personality constructs for AI, establish inner experience, or measure task performance.

## Sources.

- [AgentTune: all five instruments and source attributions](https://agent-tune.com/tests/)

- [Earlier AgentTune research and methodology limits](https://agent-tune.com/research)

- [Response-level data and collection protocols](https://agent-tune.com/research/data/september-2026-protocols.json)

## Keep going.

          [GuideClaude Opus 5.5 results and tuning examples](https://agent-tune.com/guides/claude-opus-5-5-personality)
          [GuideClaude Fable 5.1 results and tuning examples](https://agent-tune.com/guides/fable-personality)
          [ToolCustom-instructions generator](https://agent-tune.com/tools/custom-instructions-generator)
