# agent-tune.com — website

The marketing + commerce site for [AgentTune](https://github.com/psyduckler/agenttune). Live at **[agent-tune.com](https://agent-tune.com)**.

The tuning library itself (43 personality tuning markdown files) is in the public companion repo: **[psyduckler/agenttune](https://github.com/psyduckler/agenttune)**. This repo is **private** because it contains Premium / Stripe / Cloudflare KV plumbing that shouldn't be public.

## Stack

- **Static HTML + CSS + vanilla JS** — no framework, no build step
- **Cloudflare Pages** for hosting (with Cloudflare Pages Functions for API routes)
- **Cloudflare KV** for Premium synthesis state
- **Stripe Checkout** for the $9 Premium upgrade
- **Resend** for transactional email
- **Google Gemini Flash** for Premium synthesis
- Domain `agent-tune.com` registered through Cloudflare

## Project layout

```
.
├── index.html                  Homepage
├── pricing.html                Premium pricing
├── research.html               Research page (every AI = INTJ)
├── library/                    Generated library pages (43 type pages + hub)
│   ├── index.html              /library hub
│   ├── mbti/<type>.html        e.g. /library/mbti/intj
│   ├── enneagram/...
│   ├── disc/, attachment/, ocean/
├── tests/                      5 personality tests (MBTI, Big Five, etc.)
├── pro/                        Premium assessment + preview flow
├── me/                         Permalink pages for Premium users
├── functions/                  Cloudflare Pages Functions
│   ├── api/draft.js            POST: queue synthesis + send email
│   ├── api/checkout.js         POST: create Stripe Checkout session
│   ├── webhook/stripe.js       Stripe webhook handler
│   └── _synthesis.js, _shared.js
├── tunings/                    Markdown source of truth (mirrored from
│                               psyduckler/agenttune — DO NOT EDIT HERE)
├── tools/
│   ├── generate-library.js     Builds the 43 /library pages from /tunings
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

Test pages and library pages render fully client-side. To exercise the Pages Functions (`/api/*`), use `npx wrangler pages dev .` instead of `npm run dev`.

## Required environment variables (Cloudflare Pages → Settings → Environment variables)

| Var | Where it's used |
|---|---|
| `STRIPE_SECRET_KEY` | `functions/_shared.js`, checkout flow |
| `STRIPE_WEBHOOK_SECRET` | `functions/webhook/stripe.js` |
| `GEMINI_API_KEY` | `functions/_synthesis.js` for Premium synthesis |
| `RESEND_API_KEY` | transactional email |

Plus the KV binding `AGENTTUNE_KV` for storing Premium assessment state.

## Regenerating the library pages

Whenever a tuning markdown file in `tunings/` changes, regenerate the 43 HTML pages + the hub + sitemap inputs:

```sh
node tools/generate-library.js
```

The ESTP page at `library/mbti/estp.html` is **hand-built** and intentionally skipped by the generator — it's the canonical v2 template reference. To regenerate it, remove its entry from `SKIP_REGEN_IDS` at the top of the generator script.

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

This runs `wrangler pages deploy . --project-name=agent-tune --commit-dirty=true` directly from your laptop.

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

The `tunings/` directory mirrors the canonical library at `psyduckler/agenttune`. A GitHub Action (planned) will open a sync PR when upstream changes. For now, sync manually:

```sh
rsync -av --delete \
  ../agenttune/{mbti,enneagram,disc,attachment,ocean,souls}/ \
  tunings/
node tools/generate-library.js
npm run deploy
```

## License

Source code in this repo is **proprietary** — all rights reserved. Tunings under `tunings/` are MIT, mirrored from [psyduckler/agenttune](https://github.com/psyduckler/agenttune).
