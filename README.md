# agent-tune.com — website

The website for [AgentTune](https://github.com/bernardjhuang/agenttune). Live at **[agent-tune.com](https://agent-tune.com)**.

The tuning library itself (43 personality tuning markdown files) is in the public companion repo: **[bernardjhuang/agenttune](https://github.com/bernardjhuang/agenttune)**. This repo holds the site itself (pages, generator tooling, MCP server).

## Stack

- **Static HTML + CSS + vanilla JS** — no framework, no build step
- **Cloudflare Pages** for hosting (one Pages Function: the MCP server at `/mcp`)
- Domain `agent-tune.com` registered through Cloudflare

Everything on the site is free — the paid Premium/Developer Pack products were removed in July 2026.

## Project layout

```
.
├── index.html                  Homepage
├── research.html               Research page (every AI = INTJ)
├── library/                    Generated library pages (43 type pages + hub)
│   ├── index.html              /library hub
│   ├── mbti/<type>.html        e.g. /library/mbti/intj
│   ├── enneagram/...
│   ├── disc/, attachment/, ocean/
├── tests/                      5 personality tests (MBTI, Big Five, etc.)
├── guides/                     Instructional pages (built from guides/src/*.json
│                               by tools/build-guides.js)
├── research/                   Research articles
├── functions/                  Cloudflare Pages Functions
│   └── mcp.js                  MCP server at /mcp (stateless streamable-HTTP;
│                               tools: list_tunings, get_tuning, get_test_spec —
│                               reads the deployed static assets via env.ASSETS)
├── tunings/                    Markdown source of truth (mirrored from
│                               bernardjhuang/agenttune — DO NOT EDIT HERE)
├── output-styles/              Generated: every tuning as a Claude Code output
│                               style (+ index.json). Served noindex.
├── tools/
│   ├── build-guides.js         Builds /guides pages from guides/src specs
│   │                           (dates, changelog and sources come from the spec)
│   ├── build-output-styles.js  Builds /output-styles from /tunings
│   ├── generate-library.js     Builds the 43 /library pages from /tunings
│   ├── library-context.js      Per-type "against the AI default" + "closest
│   │                           tunings" sections; numbers read from AT_RESEARCH
│   └── v2-content.js           Per-type human content (humanContexts, outward)
├── data.js                     Browser-side: AT_CONTACTS, AT_RESEARCH, etc.
├── integrations.js             Per-agent paste-ready install snippets
├── styles.css                  All shared styles
└── _redirects                  Cloudflare Pages routing (auto-generated)
```

## Local development

```sh
npm install
npm run dev          # serves at http://localhost:3000
```

Test pages and library pages render fully client-side. To exercise the MCP server (`/mcp`), use `npm run build && npx wrangler pages dev dist` instead of `npm run dev`.

No environment variables, secrets, or KV bindings are required.

## Regenerating the library pages

Whenever a tuning markdown file in `tunings/` changes, regenerate the 43 HTML pages + the hub + sitemap inputs:

```sh
node tools/generate-library.js
```

The ESTP page at `library/mbti/estp.html` is **hand-built** and intentionally skipped by the generator — it's the canonical v2 template reference. The generator still refreshes the blocks between `<!-- AT:name -->` … `<!-- /AT:name -->` markers in it (the default-gap section, the neighbors section and the guides line), so research numbers and links don't drift. To regenerate the whole page, run with `AT_REGEN_ALL=1`.

After changing a tuning, also rebuild the output-style pack:

```sh
node tools/build-output-styles.js
```

## Guides

Each guide is a JSON spec in `guides/src/`. Edit the spec, then run `node tools/build-guides.js`. Optional spec fields: `published` and `updated` (default to the spec file's first and last commit dates, or today while it has uncommitted edits), `changelog: [{date, note}]`, and `sources: [{label, href}]`. The guides hub (`guides/index.html`), `llms.txt` and the `STATIC_PAGES` list in `tools/generate-library.js` are hand-maintained: add new guides to all three.

## Deploying

**The primary deploy path is `git push`.** A GitHub Action ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) runs `wrangler pages deploy` on every push to `main`, so a normal commit-and-push deploys the site automatically.

```sh
git add .
git commit -m "..."
git push origin main      # ← triggers deploy via GitHub Actions
```

**Local deploy is still available as a backup** (no commit required — useful for hotfixes):

```sh
npm run deploy
```

This runs the regression checks, builds a public-only `dist/` directory and deploys it to the production `main` branch. Source specs, docs, test files and package metadata are excluded. Pages Functions are compiled from the root `functions/` directory.

### How the deploy is wired

The Cloudflare Pages project `agent-tune` is a **Direct Upload** project (originally created via the wrangler CLI). The GitHub Action doesn't convert it to a Git-connected project — it just automates the same `wrangler pages deploy` command on each push. This avoids any disruption to the existing `agent-tune.com` custom-domain attachment.

### Required GitHub repo secrets (one-time setup)

For the Action to authenticate with Cloudflare, set these in the GitHub repo at **Settings → Secrets and variables → Actions**:

| Secret | How to get it |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard → My Profile → API Tokens → Create Token → use the "Edit Cloudflare Workers" template |
| `CLOUDFLARE_ACCOUNT_ID` | Visible in the right sidebar of any Cloudflare dashboard page |

Once those are set, every `git push origin main` deploys production.

## Keeping `tunings/` in sync with the library repo

The `tunings/` directory mirrors the canonical library at `bernardjhuang/agenttune`. A GitHub Action (planned) will open a sync PR when upstream changes. For now, sync manually:

```sh
rsync -av --delete \
  ../agenttune/{mbti,enneagram,disc,attachment,ocean,souls}/ \
  tunings/
node tools/generate-library.js
npm run deploy
```

## License

Source code in this repo is **proprietary** — all rights reserved. Tunings under `tunings/` are MIT, mirrored from [bernardjhuang/agenttune](https://github.com/bernardjhuang/agenttune).

## September research

`research/data/september-2026-responses.json` contains 2,000 fresh-session questionnaire vectors and three canonical Grok vectors. Available prompts and source hashes are in the protocol JSON. No model calls are required to regenerate the analysis:

```sh
npm run build:research
node tools/build-guides.js
node tools/generate-library.js
npm test
npm run build
```

The article and hub are generated by `tools/build-research.js`. Preserve original labels alongside tie-aware results. Keep the historical studies separate from the September cohorts. Editorial proposals and future experiments are in `docs/research-content-plan.md`.

Deployment status at this release: the existing GitHub Actions Cloudflare API token was rejected as invalid. Local Wrangler OAuth deployment works. Restore the repository token before relying on automatic deployment; do not copy short-lived OAuth credentials into Actions secrets.
