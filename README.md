# agent-tune.com — website & research platform

The web platform, research archive, and MCP server for **[AgentTune](https://agent-tune.com)** ([bernardjhuang/agenttune](https://github.com/bernardjhuang/agenttune)).

This repository holds the static generators, benchmark runners, raw OpenRouter evaluation data, empirical studies, model personality profiles, and Cloudflare Pages Functions (`/mcp`). The canonical `43` communication tuning templates and offline scoring engine live in the companion content repository **[bernardjhuang/agenttune](https://github.com/bernardjhuang/agenttune)** and are integrity-pinned here via `agenttune-content.lock.json` (`v1.1.1`).

## What is on agent-tune.com

Everything on the site is free (all paid products were retired in July 2026):

- **25 Model Personality Profiles ([`/models/`](https://agent-tune.com/models/)):** Multi-version profiles covering `87` primary checkpoints (`93` tested; `6` sparse `<20`-run checkpoints disclosed and excluded from rankings) across proprietary and open-weight model families.
- **12 Personality Atlas Pages ([`/research/ai-personality-rankings`](https://agent-tune.com/research/ai-personality-rankings)):** Overview rankings, 6 framework deep dives (MBTI, Enneagram, Big Five, DISC, IPIP-HEXACO, Attachment Styles), and 5 lab/cohort rollups (Claude, ChatGPT, Gemini, Muse, and Open-Weight models).
- **36 Empirical Research Studies ([`/research`](https://agent-tune.com/research)):** Longitudinal Waves 1–4 plus the 12-page Personality Atlas, `.md` mirrors, and raw JSON/CSV downloads.
- **53 Practical Setup Guides ([`/guides/`](https://agent-tune.com/guides/)):** Copy-paste custom instructions and config guides for ChatGPT, Claude, Gemini, Grok, Muse, Codex, Cursor, DeepSeek, Notion AI, NotebookLM, and OpenRouter.
- **43 Tuning Templates ([`/library/`](https://agent-tune.com/library/)):** Generated from the pinned `vendor/agenttune-content/` bundle across MBTI, Enneagram, DISC, Attachment, and OCEAN/Big Five.
- **5 Free Personality Tests ([`/tests/`](https://agent-tune.com/tests/)) & 10 Browser Tools ([`/tools/`](https://agent-tune.com/tools/)):** Local browser questionnaires + interactive custom-instruction builders and prompt comparators.

## Stack

- **Static HTML + CSS + vanilla JS** — deterministic content generators outputting `182` HTML pages and a public-only `dist/` deployment bundle (`726+` assets)
- **Cloudflare Pages + Pages Functions** — hosts the static site, `301` redirect rules (`_redirects`), custom Markdown headers (`_headers`), and the stateless streamable-HTTP MCP server (`functions/mcp.js` at `/mcp`)
- **Discovery & agent specs** — `llms.txt`, `llms-full.txt`, `SKILL.md`, `.well-known/mcp/server-card.json`, `resources/catalog.json`, and 1:1 `.md` article mirrors

## Project layout

```text
.
├── index.html                      Homepage
├── research.html                   Research hub + Nov 2026 interactive/static figures
├── models/                         25 generated model family profiles + /models/ hub
│   └── src/                        Per-family copy specs + 12 Atlas source specs (models/src/atlas/)
├── research/                       36 empirical studies (.html + .md mirrors)
│   ├── src/                        Study & promoted Atlas JSON specs
│   └── data/model-profiles/        Live 25-family JSONs + index.json + 7 Atlas CSVs
├── guides/                         53 setup & workflow guides (.html + .md mirrors)
│   └── src/                        Guide JSON specs
├── library/                        43 generated type pages + hub
├── tests/                          5 personality questionnaires (MBTI, Enneagram, DISC, Attachment, Big Five)
├── tools/                          Builders (build-guides.js, build-model-profiles.js, model-profiles/build-atlas.js,
│                                   generate-library.js, build-research.js, build-tools.js, build-agent-resources.js,
│                                   site-audit.py, etc.) + 10 free browser tools (/tools/*)
├── functions/mcp.js                Cloudflare Pages MCP endpoint (list_tunings, get_tuning, get_test_spec,
│                                   list_resources, get_resource, get_free_tools)
├── vendor/agenttune-content/       Integrity-verified copy of bernardjhuang/agenttune dist/
├── agenttune-content.lock.json     Pinned upstream commit SHA, version (1.1.1), and manifest SHA-256
├── SKILL.md, llms.txt,             Agent discovery manifests & server card
│   llms-full.txt, .well-known/
├── checks/                         Node test suite (node:test)
└── _redirects, _headers            Cloudflare Pages routing & Markdown headers (<100 blocks)
```

## Local development & building

```sh
npm install
npm run build:content   # regenerates questionnaires, guides, Atlas, research, models, library, tools & catalogs
npm run build           # builds the public-only dist/ bundle
npm test                # runs the full Node test suite (108+ tests)
python3 tools/site-audit.py --dist dist
npm run dev             # serves locally at http://localhost:3000
```

To exercise the Cloudflare Pages `/mcp` Function locally:

```sh
npm run build && npx wrangler pages dev dist
```

Browser Origins for `/mcp` allowlist the deployment origin, `agent-tune.com`, `claude.ai`, `chatgpt.com`, and `chat.openai.com` (override with comma-separated `MCP_ALLOWED_ORIGINS`); server-to-server clients require no `Origin` header.

## Syncing canonical content from `bernardjhuang/agenttune`

`agenttune-content.lock.json` pins the exact upstream commit, version, and SHA-256 of `manifest.json` in `vendor/agenttune-content/`. Builds fail closed if any vendored checksum diverges (`tools/content-bundle.cjs`).

To update after a new release in `../agenttune`:

```sh
rsync -a --delete ../agenttune/dist/ vendor/agenttune-content/
# Update version, commit, and manifestSha256 in agenttune-content.lock.json
npm run build:content && npm test && npm run build
```

All active questionnaire adaptations and tuning profiles render directly from the verified vendor bundle (`public-assets.json` governs which data/manifest assets enter `dist/`).

## Deploying

**Local Cloudflare Pages deploy** (the configured path while GitHub Actions Secrets are managed locally via `wrangler` OAuth; run `npx wrangler login` if needed and never copy local OAuth credentials into CI):

```sh
npm run deploy          # runs npm test && npm run build && wrangler pages deploy dist --project-name=agent-tune --branch=main
git push origin main
```

Every `301` redirect rule and `.md` rewrite is emitted deterministically into `_redirects` and `dist/_redirects` (with zero multi-hop chains verified by `checks/consolidation.test.js`).

## License

Website source code and original empirical analysis in this repository are © AgentTune / Bernard Huang unless noted otherwise in individual dataset metadata (`MIT` for model-profile schemas/benchmarks where specified). The canonical tuning templates under `vendor/agenttune-content/` are MIT licensed via **[bernardjhuang/agenttune](https://github.com/bernardjhuang/agenttune)**; third-party questionnaire source terms remain governed by `instrument-rights.json` and `THIRD_PARTY_NOTICES.md`.
