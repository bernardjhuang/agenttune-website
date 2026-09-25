# September 25 content release

Ten new resources are listed in `content-expansion-manifest.json` and linked from both hubs, the sitemap, the agent indexes and relevant existing articles.

## Evidence and scope

- Five descriptive reanalyses of the frozen September data: MBTI tie policy, Opus/Fable item differences, Astra/Sol comparison, Astra midpoint annotations, and repeatability.
- A reproduction guide and a runnable React/TypeScript Enneagram starter.
- Three explicitly unrun protocols: Claude saved preferences, Muse Soul.md persistence, and a controlled personality-label comparison. Their downloads contain exact prompts, rubrics and 36, 45 and 180 blank observation rows respectively. No new model experiment or effectiveness result is claimed.
- The reanalyses exclude Grok simulations and Muse aggregates from fresh-session statistics. They preserve the differing experimental units and prompts, and make no personality-validity or task-quality inference.
- All computed item contributions reconcile to aggregate score differences. Midpoint denominators are item responses, not independent sessions. Ties stay visible.

## Rebuild

1. `node tools/build-content-analysis.js` regenerates analysis JSON and three CSVs.
2. `node tools/build-guides.js` and `node tools/build-research-articles.js` render article specs.
3. `node tools/generate-library.js` regenerates the sitemap and existing library outputs.
4. `python3 tools/build-enneagram-starter.py` refreshes the starter ZIP from an explicit allowlist. `--check` validates every archive entry against source without writing.
5. `npm test` and `npm run build` validate and create the public bundle.

The starter lives in `examples/enneagram-react`, outside the public build allowlist. The ZIP includes source and package-lock.json, never node_modules or build output. Its scorer and questions are byte-identical to the canonical developer resource. Code licensing and questionnaire provenance are separate.

## Validation before merge

- 69 Node checks passed, including source/derived data identity, 170 response distributions, aggregate reconciliation, flag counts, protocol row counts, balanced condition order and public build boundaries.
- React TypeScript check and Vite production build passed. Pinned dependency audit reported zero known vulnerabilities.
- Starter ZIP verified against all 15 source files. CI now installs and builds the starter and checks the archive.
- 99 built pages: no broken internal links, anchors or versioned shared asset references. All 98 indexable routes appear in the sitemap.
- Browser/axe checks: all 99 pages at 390 px; all ten new pages plus both hubs at 1280 and 320 px. No reported WCAG A/AA or best-practice violations and no horizontal page overflow in those checks. Automated checks do not establish complete accessibility conformance.
- React at 320 px: validation error and first unanswered radio focus; native keyboard arrow selection; forward/back state; heading focus; all-neutral nine-way tie; unique type-1 winner; reset; reload clears answers. Result page axe check passed.
- Interactive MBTI explorer: model/policy change displays the correct original and tie-preserving distributions. Static table remains available without JavaScript.

Production is deployed directly with the existing local Cloudflare login, as authorized. GitHub's separate deployment token remains outside this change.
