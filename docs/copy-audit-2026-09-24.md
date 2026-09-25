# agent-tune.com copy audit

*2026-09-24. Read every page type in the working tree (36 pages, incl. 7 of the 43 templated library pages), plus the copy that lives in JS (`data.js`, `tools/v2-content.js`, `tools/library-context.js`, `integrations.js`). Metrics from `tools/copy-metrics.py`; re-run it after each pass.*

## The short version

The site has two voices. The September pages (the Claude, Claude Code, Astra, Grok Bot and Muse guides, the two tools) read like a person: short sentences, plain words, no em dashes. Everything older reads like a model: 615 em dashes across the sample, "not X, it's Y" constructions, stacked fragments, and acronyms as labels. The July guides carry 35 to 90 em dashes each; the five September guides carry 0 to 2.

The fix is not a rewrite. It's bringing the older copy up to the standard you already set in September, plus four structural things:

1. **Say what a tuning is, once, in plain words, on the homepage.** Right now the hero uses "tuning files" before anyone knows what one is, and the only definition ("a short Markdown file") assumes the reader knows Markdown.
2. **Rewrite the 43 library blurbs as sentences.** "Wants understanding. Loads model-first explanation." is a note to yourself, not to a visitor.
3. **Cut the "plain English" section from the library template.** It repeats the file above it word for word (8 of 8 rules on INTJ). That's 200 words of pure duplication on every one of 43 pages.
4. **Move the psychometrics off the top of the test pages.** "32 bipolar items · 1–5 Likert" and "handling the 14 reverse-scored items" belong in the spec accordion, not the intro someone reads before deciding to take a quiz.

Then a terminology sheet and a short list of contradictions (the MBTI test is "5 minutes" on the homepage and "about ten minutes" in four guides).

## What the numbers say

| Page group | Words | Em dashes | Reading grade | Read |
|---|---|---|---|---|
| Home | 1,027 | 14 | 7.5 | Fragment-heavy, "superpower", acronym kickers |
| Library hub | 639 | 3 | 8.5 | 43 telegraphic blurbs |
| Library page (×43) | ~1,450 | 9–17 each | 7–8.6 | Duplicate section, 26 boilerplate sentences |
| Tests hub + 5 tests | 330–1,010 | 5–39 | 13–20* | Psychometric intros |
| Research hub | 218 | 3 | 6.6 | Fine |
| Research: ChatGPT Q&A | 910 | 25 | 10.0 | Dense, mentions retired Claude Styles |
| Research: MBTI 100× | 854 | 16 | 7.4 | Good voice, "here's the thing" |
| July guides (×7) | 1,350–2,900 | 35–90 | 7.8–9.5 | The main cleanup job |
| September guides (×5) | 1,800–2,700 | 0–2 | 7.7–8.8 | Keep as the standard |
| Tools (×2) | 235–413 | 2–10 | 8.8–10.7 | Fine, a few dashes |

*The test-page grades are inflated by table rows; the real problem there is the intro copy.*

Site-wide: 14 of 36 pages read at college level (grade > 9). "Instrument" appears 42 times on 18 pages. "OEJTS" appears on 13 pages, "IPIP-50" on 11, including the homepage where the acronym is the label above each test.

## Finding 1: two voices, and the older one sounds like AI

The tell isn't just the em dashes. It's the pattern they sit in:

- **"Not X — Y."** "Tuning isn't about a personality test on the wall — it's about removing friction." "That's not a deflection — it's the question." "The validation isn't flattery; it's recognition." This appears dozens of times in the July copy and the v2 cards.
- **Fragment stacks.** "No signup. No email. Yours forever." "No magic. No new model. Just the right context, written down once." One of these per page is punchy. The homepage has eleven.
- **Aphorism closers.** "The body answers before the head." "Stuck is what unproductive thinking calls itself." "The consistency *is* the warmth." Each one is fine alone; together they read as a tic.
- **Intensifiers.** "actually", "genuinely", "literally", "precisely", "exactly this" carry no information and appear on almost every July page.

The September guides avoid all four, which is why they read as written by a person. The `claude-code-personality` guide is the model: 1,788 words, one em dash, grade 8.8, and it explains a genuinely fiddly topic (output styles vs CLAUDE.md) without a single acronym the reader hasn't been handed first.

**Recommendation:** rebuild the seven July guides from their JSON specs to the September standard. Rules for the pass: replace every em dash with a period or comma; break any sentence over 25 words; delete "not X, Y" constructions in favor of saying Y; cut intensifiers; keep the "short answer" boxes, they're good. Expect to lose 20 to 30% of the words without losing a fact. Order by traffic: `how-to-give-your-ai-a-personality` (the pillar), `chatgpt-custom-instructions-by-personality-type`, `enneagram-ai-prompts`, `make-chatgpt-sound-like-you`, `claude-md-examples`, `coding-agent-personality`, `mbti-vs-big-five-for-ai`.

## Finding 2: the site never says what a tuning is

The homepage hero: *"Personalize your AI agent to work with you better. Pick from 43 personality-matched tuning files — or take a 5-min test to find yours. Paste into Claude, ChatGPT, or Gemini and superpower your AI agent."*

A first-time visitor has to work out from context that a "tuning file" is text you paste into settings. The first definition comes in step 2 ("a short Markdown file"), in developer vocabulary. "Superpower your AI agent" is the one line on the site that reads as marketing, and it sits in the hero.

**Before:**
> Personalize your AI agent to work with you better.
> Pick from 43 personality-matched tuning files — or take a 5-min test to find yours. Paste into Claude, ChatGPT, or Gemini and superpower your AI agent.

**After:**
> Tell your AI how you like to be talked to.
> Take a five-minute personality test, or pick your type from 43. You get a short text file that describes how you think. Paste it into Claude, ChatGPT or Gemini once, and every reply after that is written for you.

Then use "tuning" freely for the rest of the page. Once it's defined, the word is fine; it's short and yours.

Other homepage lines to simplify:

- *"You spend five minutes once. After that, every conversation with your AI starts where you'd otherwise have to drag it to manually."* → "Five minutes once. After that, every chat starts where you used to have to drag it."
- *"Your result compiles into a short Markdown file — behavior rules for your agent, not a horoscope."* → "Your result is a short text file: rules for how your AI should talk to you, not a horoscope."
- *"Frontier models are trained on the population, then RLHF'd toward the safest, most agreeable response anyone could want."* → "AI models are trained on everyone, then tuned toward the answer that offends nobody."
- The five test cards use the instrument acronym as the label above the name (OEJTS, OEPS, ODAT, ECR-R, IPIP-50). Swap the label and the name: "MBTI" big, "32 questions · 5 min" under it, and drop the acronym from the homepage entirely. It's in the spec accordion for anyone who needs it.

## Finding 3: the library blurbs are notes, not sentences

The 43 one-liners in `data.js` show up on the library hub, every library page header, the "closest tunings" lists and the test result screens. Most are written in a compressed insider style, and the Enneagram nine all use "Loads X", which means nothing to someone who hasn't read the code.

| Now | Rewrite |
|---|---|
| Wants understanding. Loads model-first explanation. | Wants to understand it first. Explain how it works before what to do. |
| Wants to matter to people. Loads warmth and service. | Wants to matter to people. Warm first, then the task. |
| Wants it right. Loads precision and improvement. | Wants it done right. Be precise, and say what could be better. |
| Continuous Big Five scores, loaded compositionally. | Five traits, each scored on a scale. Add a file for every trait where you score high or low. |
| Direct without cushioning. Peer register. ~55% of adults. | Talk straight, no cushioning, like a peer. About 55% of adults score here. |
| Reassure with decisiveness. Warmth AND clarity together — no caveats undercutting. | Reassure by being decisive. Warm and clear at once, with no caveat that takes it back. |
| Tolerate inconsistency. Predictability over warmth. | Expect mixed signals and stay steady. Predictable matters more than warm. |
| Sparky, possibility-rich. Lives in the maybe. | Bright, full of ideas, happiest before anything is decided. |
| Strategic, systems-first. Wants the model, not the bullet list. | Strategic. Wants to see how the pieces fit, not a list of options. |

The MBTI blurbs are the best of the set and mostly need only light edits. The Enneagram, Attachment and OCEAN sets need the full pass.

## Finding 4: the library template repeats itself

Each of the 43 pages is about 1,450 words. Of those:

- **~200 words are a verbatim copy of the file.** Section II, "The tuning, in plain English", reproduces every rule from the Markdown above it, word for word, and then says so: *"The Markdown above says the same thing in install-ready format."* Cut the section. If you want something between the file and the demo, make it two sentences in the second person: what this file changes about your AI's replies, and what it leaves alone.
- **26 sentences appear on every page unchanged.** "Four situations that come up over and over again. Concrete moves, not abstract principles." "A type is a starting hypothesis." "It runs in your browser and links to the matching file." Google already flagged this: 13 of 43 indexed, and you cut the boilerplate share from 45% to 35% in September. The remaining repeats are mostly section intros. Cut the intros to a heading, or write one line that mentions the type.
- **"Starting hypothesis" appears three times per page** (header, disclaimer, "closest tunings"). Once is a good phrase. Three is a mantra.
- **The "Why this works" line is one formula 43 times.** *"Generic AI offers a five-step menu. Tuned leads with the strategic recommendation and skips the warmup — INTJs unblock by seeing the architecture, not the options."* Every one follows "Generic AI [verb]. Tuned [verb] — [Type]s unblock by [X], not [Y]." Rewrite as one plain sentence per type, e.g. "The generic answer is a menu. The tuned one names the structure and skips the warm-up, because an INTJ gets unstuck by seeing how the pieces fit."
- **The "§ I · See it" … "§ VII · Install" markers.** Roman numerals and section-sign glyphs are decoration that makes a product page feel like a legal document. Plain headings do the job.
- **The "How to talk to a Type 5" and "If this is you" cards are the best copy in the library.** Concrete, specific, quotable. They need only the em-dash pass (182 in `v2-content.js`).

The tuning files themselves are prompts for a model, and terse works there. Leave them, with one exception: every file opens *"The user identifies as INTJ. Adjust your interaction style accordingly."*, which reads clinical, while the homepage demo file opens "You are talking to an INTJ." Pick the second for both. That's a library-repo change, so it's a separate decision.

## Finding 5: the test pages lead with psychometrics

The MBTI intro: *"Answer 32 quick questions — each is a choice between two statements, rated 1 to 5. We'll score it client-side and hand you a Markdown tuning file matched to your MBTI type, ready to paste into any AI agent's system prompt."* Then a spec block: "Instrument: OEJTS (Open Extended Jungian Type Scales) · Format: 32 bipolar items · 1–5 Likert."

The attachment intro is worse: *"We'll score it client-side (handling the 14 reverse-scored items)."* Nobody deciding whether to take a quiz needs to know about reverse-scored items. The tests hub says the Big Five "returns 5 z-scores".

**Rewrite for the MBTI intro:**
> 32 questions. Each is a pair of statements; pick how far you lean toward one. Scored in your browser, nothing is sent anywhere. At the end you get your type and the file to paste into your AI.

Keep the "Instrument / Format / Time / Returns" block but move it under the "What MBTI measures" line, and write it in words: "Based on the open OEJTS questionnaire · 32 questions · about 5 minutes." The full spec accordion for agents is good and should stay, below the fold, jargon and all.

Two labels to fix on all five: "Get your tuning at the end." reads oddly as a sub-headline (it's fine as a line under the button); "Stack another system for higher fidelity" → "Take another test to sharpen it."

## Finding 6: contradictions a reader will notice

| Claim | Where it says one thing | Where it says another |
|---|---|---|
| How long the MBTI test takes | "5 min" on home, tests hub, library hub, the test page | "about ten minutes" in the ChatGPT guide (twice), make-chatgpt-sound-like-you, claude-md-examples, claude-code-personality, mbti-vs-big-five |
| Big Five test length | "7 min" on tests hub and the test | "about five minutes each" in mbti-vs-big-five |
| The fifth system's name | "Big Five test" on home and library | "OCEAN tuning", "OCEAN · 10", "Get your OCEAN tuning" on the hubs and result screens |
| Claude Styles (retired, per your own Claude guide) | Claude guide: "Styles are going away" | Still recommended in research/what-personality-type-is-chatgpt (twice), the custom-instructions generator dropdown ("Claude — style / project instructions"), and the Enneagram guide ("a custom Style") |
| What the product is called | "tuning file" (69 uses) | "tuning", "communication preference file" (14), "personality file", "instruction file", "custom-instructions block", "personality layer", "tuning blocks" |
| The homepage demo file vs the real file | Demo: "You are talking to an INTJ. Lead with the underlying model, then the conclusion." | Real file: "The user identifies as INTJ. Adjust your interaction style accordingly. ## Lead with conclusions" |

Pick one number for each test and one name for the thing. My suggestion: "tuning" for the concept, "tuning file" when you mean the file, and "Big Five" everywhere (OCEAN only as the trait mnemonic inside the Big Five pages).

## Finding 7: the research copy is about to go stale

Not a voice issue, but you'll be in these files anyway. Tonight's Opus 5.5 and Fable 5.1 runs contradict lines that are repeated across the site:

- "Every AI is C-dominant" / "every model C-dominant with an S-blend" (research hub sub-head, pillar guide, mbti-vs-big-five, Enneagram guide, every DISC library page's "against the default" section). Both current Claude models came out S-first.
- "Claude tested 5w2" (research hub, Q&A page, Enneagram guide, every Enneagram library page). Fable is a clear 8; Opus 5.5 is a 2/5/8 tie.
- The Q&A page's "Claude (Opus 4.7 / 4.8)" heading and the "what we have not tested" lines.

The library "against the default" sections read their numbers from `AT_RESEARCH` in `data.js`, so adding the new rows there updates 43 pages at once. The prose claims in the guides are hand-written and need a pass.

## A short style sheet

Worth writing into `CLAUDE.md` in the website repo so every future page, generated or hand-built, follows it:

1. Say who it's for and what it does in the first two sentences. Define "tuning" before using it.
2. One idea per sentence. Under 25 words. If a sentence has a dash in it, it's two sentences.
3. No em dashes. Periods and commas.
4. Don't say what something isn't ("not X, it's Y"). Say what it is.
5. Two fragments in a row, maximum.
6. Cut "actually", "genuinely", "literally", "precisely", "exactly this".
7. "Test", not "instrument". "Questions", not "items". "Settings" or "instructions", not "system prompt", except on the API and coding-agent pages.
8. Instrument acronyms (OEJTS, IPIP-50, ODAT, OEPS, ECR-R) live in spec blocks and sources, never in labels or headlines.
9. One call to action per section.
10. Numbers agree everywhere: MBTI 5 min, Enneagram 5, DISC 3, Attachment 5, Big Five 7.

## Order of work

Each step is independently shippable, and the metrics script tells you whether it landed.

1. **Homepage and `data.js` blurbs.** One file each, ~half a day, touches every page's header and the result screens. Biggest reach per hour.
2. **Library template.** Cut section II, thin the boilerplate, plain headings, rewrite the 43 `demoWhy` lines, em-dash pass on `v2-content.js`. Regenerate. This is also the un-templating Google wanted.
3. **The seven July guides**, in the traffic order above. Fix the test-time and Claude Styles lines while you're in each.
4. **Test intros and the tests hub.**
5. **Research Q&A page**, plus the data-drift lines in Finding 7.
6. Write the style sheet into the repo's `CLAUDE.md` and check the metrics script into `tools/` so the next generated page gets caught.

Targets to check against after each step: zero em dashes on customer-facing pages, reading grade 8 or under on home, hubs, tests and library pages, and no sentence over 30 words outside a spec block.

## What to leave alone

- The five September guides and both tools. They're the standard.
- The "short answer" boxes on every guide.
- The before/after demo on the homepage and library pages. It's the best explanation of the product on the site.
- The "How to talk to a …" and "If this is you" cards, apart from the dash pass.
- The machine-facing copy: spec accordions, `llms.txt`, the install protocol blocks. Agents read those; jargon is fine there.
- The 404 page.

## Files

- `tools/copy-metrics.py` extracts the visible copy from every page type and scores it (`python3 tools/copy-metrics.py`; writes the per-page text and `metrics.tsv` to a temp folder and prints the table).
- `docs/copy-audit-2026-09-24-metrics.tsv` is the baseline from the night of the audit, to diff against after each pass.

Note: everything in this repo is deployed as a static asset, so once merged this file is readable at `/docs/copy-audit-2026-09-24.md`. Move it out or add a `_redirects` rule (via `generate-library.js`) if that matters.
