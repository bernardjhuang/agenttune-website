# agent-tune.com site audit: technical, verboseness, copy

*September 25, 2026. Run against `main` after PRs #14 to #17 merged (89 pages, 106,400 words). The measurements below are the original audit snapshot. Review corrections for PRs #18–20 are noted where they change a finding; remaining proposals are recommendations, not release blockers. Re-run the numbers with `npm run build && python3 tools/site-audit.py`. Per-page figures: `docs/site-audit-2026-09-25-pages.tsv`.*

## The short version

1. **Nothing is broken for a reader.** 0 broken internal links, 0 broken anchors, 0 orphan pages, 88 of 88 sitemap URLs exist, valid JSON-LD on every content page, every title under 60 characters, all 50 external links load in a browser.
2. **Direct deployment is working; automated deployment still needs a token repair.** The previous release at `3dc26cf` was deployed directly to Cloudflare Pages and its 88 sitemap routes were verified live. GitHub Actions still has an invalid deployment token; a failed Actions deploy alone does not establish that production is behind.
3. **Accessibility basics were missing on 86 of 89 pages.** No `<main>` landmark (the skip link pointed at an empty `<div>`), accent text on pills at 3.5 to 3.9:1, test pages with untyped buttons and an h1 to h3 jump. Fixed here; a new test keeps it fixed.
4. **The site carries a lot of dead weight.** 39% of `styles.css` never matches a page (retired commerce UI). Every library page ships 10.5 KB of inline CSS and 7.8 KB of inline script that is identical across 43 pages. Two font weights were requested and never used (removed here).
5. **The site says the same things many times.** Thirty-plus sentences appear on all 43 library pages. 130 sentences across the site are caveats about what the research does not show. The original snapshot found one guide repeating "Use the block as a starting point and compare replies on representative tasks" seven times; the integration review replaces those repetitions with descriptions of who each prompt suits. The three agent guides run 2,150 to 2,550 words each.
6. **Two voices, plus a third.** The July copy (library, older guides, tests) still carries 835 of the site's 866 em dashes and the "not X, it's Y" cadence. The September research pages are plain. The #17 rewrite added a fourth register: a cautious, questionnaire-style voice that reads generated. Model names differ between the home page and the research ("Astra 6", "Grok 4.7" versus "GPT-6 Astra", "Grok 4.6").

## Method

- **Bundle audited:** `dist/` from `npm run build` on `main` at 3dc26cf (264 files, 89 HTML pages).
- **`tools/site-audit.py` (new, stdlib + BeautifulSoup):** meta tags, canonicals, Open Graph, headings, duplicate ids, nested anchors, link text, internal links and fragments resolved through `_redirects`, sitemap coverage, orphans, JSON-LD parsing, script sets, inline code size, form labels, tables, `<time>`, skip links, landmarks, stale terms; per page copy metrics (words, sentence length, long sentences and paragraphs, em dashes, hedges, caveat sentences, Flesch-Kincaid grade, sentences shared with three or more other pages, sentences repeated inside the page). Text dumps per page for reading.
- **`tools/check-external-links.py` (new):** HEAD/GET on every external target.
- **html-validate 8** (HTML5 validator, `html-validate:standard`) on all 89 pages.
- **axe-core 4.10** in the browser on 24 pages covering every template, at desktop width, plus a 375px pass on six pages (overflow, tap targets). CSS rule usage measured in the browser across the same pages.
- **Live checks:** response headers, cache headers, `_redirects` targets, 404 status, the MCP endpoint, the live sitemap.
- **Copy read in full:** home, library hub, one library page per system, tests hub, MBTI test, research hub, five-models study, guides hub, pillar guide, ChatGPT-by-type guide, both tools, 404, terms, privacy. The twelve September articles skimmed after the #17 rewrite.

Reading grade and sentence counts treat table cells and list items as sentences, so the research hub reads as grade "-0.9". Use those two columns to compare pages of the same template, not across templates.

## 1. Technical

### 1.1 Deployment status (corrected during review)

The original 76-URL live check was stale. Release `3dc26cf` was deployed using the authenticated local Wrangler CLI to https://3fae1d05.agent-tune.pages.dev and `https://agent-tune.com`. The release verification covered 110 URLs, including all 88 sitemap routes, and IndexNow accepted all 88 routes.

GitHub Actions' Cloudflare token still fails authentication. Until its credential is repaired, releases require a direct deploy followed by checks against the custom domain. Do not infer the live release from the failed Actions job alone.

### 1.2 Links, sitemap, metadata: clean

- Internal links: 0 broken (the 44 `/library/<system>/<slug>.md` links resolve through `_redirects` to `/tunings/…`, which the checker now understands). 0 broken `#fragments`. 0 orphans; the guides hub is reached only through the nav, which is fine.
- Sitemap: 88 URLs, all exist; every content page is listed; 404 is `noindex, follow`.
- Structured data: JSON-LD parses on 88 pages (Article, BreadcrumbList, FAQPage, Dataset, CollectionPage, Quiz). No errors.
- Titles: 0 over 60 characters (privacy and terms are short, fine). Descriptions: 8 pages were over 160 characters (up to 267), now all under; a test guards the limit.
- External links: 50 targets. All load in a real browser. Eight return 403/400 to non-browser clients (OpenAI Help ×3, DataCamp, Meta Help ×4), so automated checkers will keep flagging them. Nothing to fix.
- Live headers: HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` present. No `Content-Security-Policy` or `Permissions-Policy`; both are easy wins in `_headers` once the inline scripts are inventoried (the quizzes and research hub use inline scripts, so a CSP needs hashes or a nonce-free `'unsafe-inline'` for scripts, which is still worth it for `frame-ancestors`, `base-uri` and `form-action`).
- Cache: HTML `max-age=0, must-revalidate`; assets `max-age=14400` and now versioned (`?v=<hash>`, #15), so the 4-hour window no longer serves stale CSS after a deploy.
- MCP endpoint answers `tools/list` with the three read-only tools. `/library/mbti/intj.md` serves `text/markdown`. `/pricing` 301s home. Unknown paths return a real 404.

### 1.3 Accessibility (fixed in this PR)

axe-core before this PR, on every template except the two tools and the guides hub: `landmark-one-main`, `region` (content outside landmarks), `color-contrast` on every pill; on library pages also `scrollable-region-focusable` (the tuning editor) and `target-size`; on test pages `heading-order`.

| Issue | Before | After |
|---|---|---|
| Pages without a `<main>` landmark | 86 of 89 (skip link pointed at an empty `<div id="main">`) | 0; every page has one `<main id="main">` and a `<footer>` |
| Pill text contrast (`.pill`, 12px uppercase, `#c8553d` on a tint) | 3.5 to 3.9:1 on every page | 4.7:1 with a new `--accent-text: #9f4427`, also used for prose links and the before/after tags |
| System colors as small text (type pills, test sources, italic type names, card meta) | Enneagram green 3.9:1, DISC orange 2.3:1, attachment pink 2.6:1 | Text-safe shades per system (`TEXT_SAFE` map in `generate-library.js`, `--lib-accent-text` per page) |
| Test pages | h1 to h3 jump, 47 untyped buttons, decorative SVG unlabelled, raw `>` in text | h2, `type="button"`, `aria-hidden`, escaped |
| Library editor | line numbers at 2:1, scroll region not keyboard reachable, 20px link target | 0.55 alpha, `tabindex="0"`, 24px target |
| `research/i-took-the-mbti-100-times`, `404` | no skip link | added |

The original post-change axe pass still identified home-page numerals, the library hub pill, editor status text, research breakdown percentages and links inside guide asides. The integration review adds darker text/status colors and underlined aside links. New research figures preserve their readable width inside keyboard-focusable horizontal scroll regions on narrow screens. These corrections also live in the relevant generators. The original 375px pass found no page-level overflow; tables scroll inside their wrappers.

### 1.4 HTML validity

html-validate 8, standard preset: **before** 3 errors (raw `>` in a shell snippet and in two Big Five blurbs) and 52 warnings (47 untyped buttons, 5 heading levels); **after** clean on all 89 pages. The macOS `tidy` binary is from 2006 and reports HTML5 elements as unknown; do not use it on this site.

`checks/site-structure.test.js` (new) fails the build if any page loses its `<main>`, its skip link, its single `<h1>`, gets a description over 160 characters, or requests an unused font weight. This PR adds two structural tests; the integration review also checks the research charts against the published data.

### 1.5 Weight and dead code (recommendations)

| Finding | Evidence | Suggested fix |
|---|---|---|
| Dead CSS | 371 of 972 rules in `styles.css` (39%, about 44 KB of 112 KB of rule text) never match any of the 24 template pages. Groups: `contacts`, `chat-thread`, `preview-*`, `me-*` (the retired commerce pages), `systems-grid`, `mini-split` (26 rules), `hp2-payoff`, `slo-*`. About 30 `quiz-*` rules only match after a quiz is answered and should stay. | Delete rule by rule after a repo-wide grep for each class; separate PR. Expect roughly 40 KB off every page load (about 7 KB gzipped). |
| Inline CSS on library pages | Each of the 43 pages carries the same 10.5 KB `<style>` block (446 KB across the library) and a 7.8 KB inline script (327 KB). | Move both into `styles.css` / a `library.js` so they cache once. Library HTML would drop from 44 KB to about 26 KB. |
| Guide scripts | All 22 guides load `compact-tunings.js` + `integrations.js` + `guide-prompts.js` (40 KB, 14 KB gzipped); only 11 guides have a model picker. | Emit the three tags only when `spec.promptModel` is set (`build-guides.js`). |
| Fonts | The Google Fonts request asked for Newsreader 300 and Plex Sans 300; `styles.css` never uses weight 300. | Removed in this PR from all 89 pages and the generators. 15 weight/style variants remain across three families; Newsreader italics 400/500 and Plex Mono 500/600 are the next candidates to check. |
| `index.html` | loaded `data.js` by a relative path while every other page uses `/data.js`. | Fixed. |

### 1.6 Consistency and stale facts

- **Model names.** Home page and generator: "Muse, Astra 6, Fable 5.1, Sol 6, Opus 5.5, or Grok 4.7" (from the picker list in `integrations.js`; 55 pages mention "Grok 4.7"). Research pages: "GPT-6 Astra", "GPT-6 Sol", "Grok 4.6". Pick one form for the whole site. Verify that Grok 4.7 exists; the research measured 4.6 yesterday.
- **Tuning length (review correction).** Across 43 tunings, the Markdown rule bodies contain 1,203–2,881 characters after removing the metadata header. The original audit incorrectly counted the header as rules. The guides now explicitly say about 1,200–2,900 characters excluding that header; the checker no longer flags the accurate range as stale.
- **"OCEAN".** The system label said "OCEAN" and "OCEAN / Big Five Dimension" on the hub and ten library pages while every other page says "Big Five". Now "Big Five"; the two remaining mentions explain the acronym (MBTI vs Big Five guide, Big Five test), which is right.
- **Big Five reverse-keyed items.** The test spec said 20, the table and scorer use 18. Fixed in #16.
- **"Where did Claude Styles go?"** in the Claude guide is a retirement note and correct. `TODO(human)` in the Claude Code guide describes Claude Code's own Learning style and is correct.
- **`tests/mbti` scoring table** is empty until the quiz runs; checkers flag it as a table without headers. Not a bug.

## 2. Verboseness

### 2.1 By template

| Template | Pages | Words / page | Longest | Sentences shared with 3+ pages | Caveat sentences | Em dashes |
|---|---|---|---|---|---|---|
| Library page | 43 | 1,354 | 1,686 (attachment/disorganized) | 29% of words | 19 | 542 |
| Guide | 22 | 1,382 | 2,553 (Astra) | 4% | 63 | 213 |
| Research article | 9 | 1,003 | 1,979 (five models) | 3% | 36 | 2 |
| Research hub | 1 | 1,687 | | 1% | 11 | 0 |
| Test page | 5 | 849 | 1,001 | 6% | 0 | 80 |
| Home | 1 | 865 | | 6% | 1 | 11 |
| Tests hub / library hub / guides hub | 3 | 263 / 91 / 59 | | | 0 | 7 |
| Tools | 2 | 273 | | | 0 | 4 |

The library is 55% of the site's words (58,200 of 106,400) and the most repetitive part of it.

### 2.2 The library page says its tuning three times

On every library page the tuning appears as the Markdown file, then as "The tuning, in plain English" (the same eight rules, verbatim: about 200 words), then in a before/after demo that is the same demo on all 43 pages plus the home page (the "I'm feeling stuck on a project" exchange, 44 copies). Then "INTJ and the research context" is three caveat sentences that are identical on all 43 pages apart from the type name ("The MBTI source lists 597 INTJ labels in 600 scoring records…", "These exploratory self-reports do not validate…", "Read the methodology and limitations"). The install section closes with two more all-page sentences about the protocol and the MCP server.

Thirty-one sentences appear on all 43 pages. The copy audit of September 24 made the same point about the plain-English section; it is still there.

Cut, per page: the plain-English list (about 200 words), the research-context block down to one sentence with a link (about 60 words), the duplicated demo caption (about 30 words). That is roughly 290 words × 43 pages, or 12,500 words, with nothing lost, and it makes the pages more distinct to Google, which was the point of the September 19 "un-template the library" work (13 of 43 indexed at the time).

### 2.3 Caveats

130 sentences on the site say some version of "these are self-descriptions, not evidence". The research hub has 11 of them in 292 sentences and explains the tie rule three separate times (in "Three kinds of evidence", in "Methods and limits", and in the table captions). The Gemini Q&A has 6 in 75 sentences. The pillar guide opens with two paragraphs of caveats before it tells the reader how to do anything, and its FAQ answer to "Doesn't my AI already have a personality?" is a caveat, not an answer. `mbti-vs-big-five-for-ai` repeats the same three caveat sentences three times each (94 words).

Recommendation: one canonical "What these numbers are" box on the research hub (it exists: `#methodology`), one sentence plus a link everywhere else. Caveats that repeat within a page should appear once.

### 2.4 Sentences repeated inside one page

| Page | Wasted words | Example |
|---|---|---|
| `guides/best-claude-personality` | 127 | "Use the block as a starting point and compare replies on representative tasks." ×7 (added in #17) |
| `library/attachment/avoidant` | 94 | "They share when they're ready, in their own framing." ×2 |
| `guides/mbti-vs-big-five-for-ai` | 94 | three caveat sentences ×3 each |
| `library/disc/d-dominance` | 86 | "Pick one, defend it, and tell them what you'd do." ×2 |
| 20 more library pages | 50 to 74 each | the "How to talk to" and "closest tunings" sections quote the file again |

1,946 words site-wide are a sentence the same page already said.

### 2.5 Pages to shorten

- **Astra (2,553), Muse (2,387), Grok Bot (2,150).** Each has an install walkthrough, an "as reported" research section, product facts (plans, prices, platforms), a "what is not X" section and a FAQ that restates the product facts. Cut the product-facts prose to the table and let the FAQ carry the rest: about 500 words each.
- **Research hub (1,687).** Merge "Three kinds of evidence" into "Methods and limits", explain ties once, and either render the May section's "What the May records report" and "Five reports, with their source links" without JavaScript or drop the headings: two of them are empty headings when the client script does not run (that is what search engines and agents see).
- **Pillar guide (1,806).** Move the two caveat paragraphs below the four steps. Rewrite the personality FAQ answer to answer.
- **Guides hub.** The lede is one 60-word sentence (grade 10.7 in a site averaging 6). Split it.
- **Home (865).** "Five small wins", "Same file. Different surfaces." and the closer make the same one-file-everywhere point three times, and the INTJ demo card appears twice. One of the three sections can go.

## 3. Copy

### 3.1 Voice

Three registers now share the site.

1. **July.** The library files, the 43 blurbs, the older guides, the tests. 835 of 866 em dashes; "not X, it's Y"; fragments stacked as sentences ("Strategic, systems-first. Wants the model, not the bullet list."). It is confident and specific, and it is the voice that got the site its readers. The em dashes are the only real problem, and they are in `tools/v2-content.js`, `data.js` and the July guide specs, so they can be fixed in one pass.
2. **September research.** The five-models page, the Q&A pages, the hub: short sentences, no em dashes, numbers with their method next to them. Reads like a person. Keep it.
3. **The #17 rewrite.** Parts of the twelve new articles were rewritten into a defensive register: "Does it lead with a supported recommendation? Use the block as a starting point and compare replies on representative tasks." repeated per block, "clearly separated pilot evidence", "editable templates". It removed the one-line "for people who want…" descriptions that told a reader which block was theirs, and it reads generated. The caution belongs in one sentence at the top of the page, not in every paragraph.

Suggested rule for all three: one plain sentence of caution per page, specific claims with the number and the source, and the rest in the July voice minus the dashes.

### 3.2 Terminology to settle

| Term | Where it varies | Suggestion |
|---|---|---|
| Model names | "Astra 6", "Sol 6", "Grok 4.7" (home, generator, picker) vs "GPT-6 Astra", "GPT-6 Sol", "Grok 4.6" (research, guides) | Use the vendor names everywhere: GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, Claude Fable 5.1, Grok 4.6, Muse Spark 1.3. Check 4.7. |
| The product | "tuning", "tuning file", "communication preference file", "personality-matched tuning file", "Markdown file", "system prompt" | "tuning file" on first use, "tuning" after; "system prompt" only for the library page titles, which target that search. |
| Big Five | "OCEAN" (was the label), "Big Five", "ocean/" in paths | "Big Five" in copy; paths stay. |
| Where to paste | "Instructions for Claude" (right), "custom instructions" (ChatGPT), "Soul.md", "Description", "output style", "AGENTS.md" | Already consistent per product after #12; keep. |
| Test length | "5-min test" (home), "3 to 7 minutes" (tests hub), "about five minutes" (guides) | "five minutes" everywhere except the tests hub, which can keep the per-test range. |

### 3.3 Page notes

- **Home.** Hero and "Models default to everyone. You are not everyone." are the best copy on the site. "No progress bar disguised as a sales funnel" and "Tuning isn't about a personality test on the wall" are the July tone at its most arch; fine if that is the intent. The demo caption ("Illustrative examples of the styles these instructions aim to encourage. These are not a controlled model comparison…") is a 30-word caveat under a 60-word demo.
- **Library hub.** 91 words. Good. "Same model — now interacts with you the way you think." has a dash and a grammar slip; "Same model. Now it talks the way you think."
- **Library page.** See 2.2. "How to talk to an INTJ" and "How to explain yourself outward" are the sections readers cannot get anywhere else; lead with them after the file.
- **Tests hub / test pages.** Clean after the September pass. The MBTI intro still says "32 quick questions — each is a choice between two statements, rated 1 to 5" in the first sentence; the copy audit's point about psychometrics-first intros still applies to that line.
- **Research hub.** "AI questionnaire results, compared." and "Four September cohorts contributed 2,000 questionnaires" are accurate and flat. The earlier hero ("Most AIs still test alike. The newest ones are starting to split.") said the finding. Restore a finding-first hero and keep the method one click away.
- **Five-models study.** Reads as a research note, which is what it is. Six charts are in #19 so the tables have pictures.
- **Guides hub.** Split the lede. The "New in September 2026" section is 10 cards; it will need a home once it is no longer new.
- **Pillar guide.** See 2.3 and 2.5. The two-directions framing (character vs communication preferences) is the clearest explanation of the product on the site; it should be on the home page in one line.
- **Generator, CLAUDE.md generator, 404, terms, privacy.** Fine. Privacy's footer `<div>` was glued to a paragraph on one line; harmless, now a `<footer>`.

### 3.4 Five rewrites, ready to paste

1. Library hub lede, last sentence: "Same model — now interacts with you the way you think." → "Same model. Now it talks the way you think."
2. Guides hub lede: "Practical walkthroughs for installing a personality tuning wherever you talk to an AI — ChatGPT's custom instructions, Claude's instructions and projects, the new agents (GPT-6 Astra, Grok Bot, Meta Muse), and the instruction files your coding agents read. Start with the pillar guide if you're new; jump straight to your agent if you're not." → "Where to paste a tuning, agent by agent: ChatGPT, Claude and Claude Code, GPT-6 Astra, Grok Bot, Meta Muse, and the instruction files your coding agents read. New here? Start with the pillar guide."
3. `best-claude-personality`, each block intro: replace "Does it X? Use the block as a starting point and compare replies on representative tasks." with the original one-liner ("For people who want the recommendation first and find hedging evasive.") and put one "compare replies on your own tasks" sentence under the table.
4. Pillar FAQ, "Doesn't my AI already have a personality?": "Yes, one it shares with most other assistants: planful, agreeable, careful, in our questionnaire runs. A tuning does not replace that; it tells the model how you differ from the average user it was trained for. See the research hub for what those runs can and cannot show."
5. Library research-context block (43 pages): "Questionnaire self-reports for this type's model runs are on the research hub, with the methods and their limits. Treat the type as a starting hypothesis and edit the file until it fits."

## What this PR changes

- New: `tools/site-audit.py`, `tools/check-external-links.py`, `checks/site-structure.test.js`, this document, `docs/site-audit-2026-09-25-pages.tsv`.
- Landmarks: `<main>` and `<footer>` on all 89 pages (generators for guides, research and library; hand pages by script).
- Contrast: `--accent-text`, text-safe system shades, pill and link colors, editor gutter, before/after tags.
- Test pages: heading levels, button types, decorative SVG, escaped characters, "OCEAN" → "Big Five".
- Metadata: 8 descriptions shortened; 91 pages and the generators stop requesting font weight 300; `index.html` script path.
- Facts: tuning length in two guides; system label.
- Everything regenerated: 43 library pages, 22 guides, 9 research pages, sitemap. `npm test` 46/46, html-validate clean, `npm run build` 264 files.

## What it does not change (in order)

1. Deploy `main` and replace the Actions token.
2. Cut the library template (2.2) and settle the model names (3.2).
3. Remove dead CSS and move the library's inline CSS/JS into cached files (1.5).
4. One-pass em-dash removal in `tools/v2-content.js`, `data.js` and the July guide specs.
5. Trim the three agent guides, the research hub and the pillar guide (2.5); restore the block descriptions on `best-claude-personality` (3.1).
6. CSP and Permissions-Policy headers; conditional guide scripts.

## Files

- `tools/site-audit.py`: the checker. `--out DIR` writes `site-audit.json`, `pages.tsv` and `text/*.txt`.
- `tools/check-external-links.py docs/site-audit-out/site-audit.json`: external link status.
- `docs/site-audit-2026-09-25-pages.tsv`: one row per page (template, words, sentence length, long sentences and paragraphs, boilerplate share, caveats, em dashes, grade, title and description length, H1, inbound links, bytes, inline styles).
- Earlier audits this supersedes in part: `docs/copy-audit-2026-09-24.md` (copy, still valid where not marked fixed above), `docs/title-audit-2026-09-25.md` (titles, implemented in #14).
