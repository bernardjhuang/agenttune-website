# Title and H1 audit, September 25, 2026

Based on the Search Console query export Bernard pasted (403 impressions, 10 clicks) and every page's current `<title>` and `<h1>` on `main`.

## What the queries say

| Cluster | Impressions | Clicks | Avg position | Read |
|---|---|---|---|---|
| Claude personality (change / best / settings / mbti) | 150 | 2 | 8.7 | Page one, no clicks. The title was 65 chars and got cut; 'best claude personality' (26 impressions) wasn't in it. |
| Meta Muse (character / soul.md) | 73 | 4 | 6.0 | 'Soul.md' earned every click. 'meta muse character' (23), 'muse character meta' (18) and 'muse meta character' (11, position 3) got none: the word 'character' was not in the title. |
| Free Enneagram test (free / results / no email) | 55 | 0 | 80.8 | Fifteen queries, all page 7 or worse. The title promised 'Tune Your AI'; the searcher wants 'free', 'results', 'no email'. A title change lifts CTR, not rank. |
| Enneagram test on GitHub | 42 | 0 | 17.3 | Positions 9 to 12 with 'GitHub' missing from a 69-char title. |
| Brand ('agenttune') | 20 | 2 | 3.0 | The brand SERP is lost to a same-name paper; the homepage title had the brand last. |
| Grok Bot (character / personality) | 13 | 0 | 7.6 | Same 'character' vocabulary gap as Muse. |
| Claude Code, generator, MBTI test, Enneagram AI, Codex | 27 | 1 | mixed | Titles mostly fine; the generator lacked 'ChatGPT'. |

## Rules applied

1. 60 characters or fewer. Six titles were over, and two of the PR-in-flight ones were 65 and 74.
2. Lead with the words people type. 'character' for Muse and Grok Bot; 'free', 'results', 'no email' for the tests; 'GitHub' for the open-source test; 'ChatGPT' for the generator; the brand first on the homepage.
3. Brand suffix (' · AgentTune') only when it still fits. Google shows the site name on its own line anyway.
4. One consistent template per library system, using product names ('for Claude & ChatGPT') instead of 'for AI Agents — Claude, GPT'.
5. H1 follows the title where the H1 missed the query: the five tests, Muse, Grok Bot, the open-source test, the generator. Guides derive `og:title` from the H1, so those move too.

## Every change

| Page | Now (chars) | Proposed (chars) | Why |
|---|---|---|---|
| `/` | AI System Prompts for Your Personality Type — AgentTune (55) | **AgentTune: Personality Tuning (Claude, ChatGPT, Grok, Muse)** (59) | Brand first, and all four agents people search for (Grok and Muse are 86 of the 403 impressions). Brand first. 'agenttune' is the #2 query (19 impressions, position 3.1, 10% CTR): the brand SERP is lost to a same-name paper, and the snippet should at least lead with the name. |
| `/library/` | 43 Personality System Prompts for Claude & ChatGPT — AgentTune (62) | **43 Free Personality System Prompts for Claude & ChatGPT** (55) | 62 chars, truncated. Drop the suffix, add 'Free' (the searcher's word). |
| `/tests/` | Free Personality Tests — MBTI, Big Five, Enneagram, DISC · AgentTune (68) | **Free Personality Tests: MBTI, Enneagram, Big Five, DISC** (55) | 68 chars, truncated. Enneagram is the test people search for, so it moves up. |
| `/guides/` | AI Personality Tuning Guides — ChatGPT, Claude · AgentTune (58) | **AI Personality Guides: Claude, ChatGPT, Grok, Muse, Codex** (57) | Name the agents people actually search (Muse and Grok Bot are 86 of 403 impressions). |
| `/tests/enneagram` | Free Enneagram Test — Tune Your AI to Your Type · AgentTune (59) | **Free Enneagram Test: Instant Results, No Email or Signup** (56) | 15 queries say 'free', 'results', 'no email', 'no sign up'. The page offers exactly that; the title says 'Tune Your AI', which the searcher didn't ask for. |
| `/tests/mbti` | Free MBTI Test — Tune Your AI to Your Type · AgentTune (54) | **Free MBTI Test (OEJTS): Instant Type, No Email or Signup** (56) | 'oejts' gets impressions at position 10; same free/no-email intent as Enneagram. |
| `/tests/big-five` | Free Big Five Test — Tune Your AI to Your Type · AgentTune (58) | **Free Big Five Personality Test: Instant Results, No Email** (57) | 'Personality' disambiguates: the page currently matches 'big 5 tire', 'big 5 return', 'big fine'. |
| `/tests/disc` | Free DISC Test — Tune Your AI to Your Type · AgentTune (54) | **Free DISC Personality Test: Instant Results, No Email** (53) | Same pattern; 'agent disc' is the only query it gets today. |
| `/tests/attachment` | Free Attachment Style Test — Tune Your AI · AgentTune (53) | **Free Attachment Style Test: Instant Result, No Email** (52) | Same pattern. |
| `/guides/claude-personality` | How to Change Claude’s Personality: Settings, Examples & Evidence (65) | **How to Change Claude's Personality: Settings & Best Setups** (58) | 65 chars, truncated on the biggest cluster (150 impressions, 15 queries, avg position 8.7). 'best claude personality' alone is 26 impressions; 'settings' is a query too. 'Evidence' is not. |
| `/guides/muse-personality` | How to Give Meta Muse a Personality (Soul.md Guide) (51) | **Meta Muse Character & Personality: The Soul.md Guide** (52) | People search 'meta muse character' (23), 'muse character meta' (18), 'muse meta character' (11 at position 3, zero clicks). The word 'character' is not in the title. 'Soul.md' is what actually earned the clicks, so it stays. |
| `/guides/grokbot-personality` | How to Give Grok Bot a Personality (2026 Guide) (47) | **Grok Bot Character & Personality: How to Set It (2026)** (54) | Same vocabulary gap: 'grok bot character' (5, position 6), 'grokbot character', 'grok bot characters' (position 1). |
| `/guides/open-source-enneagram-test` | Open-Source Enneagram Test: JavaScript Scorer & Questions · AgentTune (69) | **Open-Source Enneagram Test on GitHub: Free Items & Scorer** (57) | 69 chars, truncated. 'enneagram github test' (17), 'github enneagram test' (14), 'enneagram test github' (5) sit at positions 9-12 and the word GitHub is missing. |
| `/guides/claude-code-personality` | How to Change Claude Code's Personality: 4 Ways (2026) (54) | **keep** (54) | 54 chars, matches 'claude code personality' (position 5.6) and 'change claude code personality'. |
| `/guides/astra-personality` | How to Give GPT-6 Astra a Personality (ChatGPT & Codex) (55) | **keep** (55) | Only query is 'codex personality options' (position 5), and Codex is in the title. |
| `/guides/enneagram-ai-prompts` | Enneagram AI Prompts: All 9 Types · AgentTune (45) | **Enneagram AI Prompts for All 9 Types (ChatGPT & Claude)** (55) | 'enneagram ai' at position 14. Product names beat the brand suffix. |
| `/guides/chatgpt-custom-instructions-by-personality-type` | ChatGPT custom instructions by MBTI type · AgentTune (52) | **ChatGPT Custom Instructions for All 16 MBTI Types** (49) | Sentence case is inconsistent with every other title; '16 types' is the promise. |
| `/tools/custom-instructions-generator` | Custom Instructions Generator — Free, by Type · AgentTune (57) | **Free ChatGPT Custom Instructions Generator by Type** (50) | 'chatgpt custom instructions generator' is the query (position 7); ChatGPT is not in the title. |
| `/guides/how-to-give-your-ai-a-personality` | How to Give Your AI a Personality · AgentTune (45) | **How to Give Your AI a Personality: ChatGPT, Claude & Cursor** (59) | Pillar page with 15 spare characters; name the agents. |
| `/guides/claude-opus-5-5-personality` | Claude Opus 5.5 Personality: Results, Ties and Tuning (53) | **Claude Opus 5.5 Personality: Test Results & How to Tune It** (58) | 'Ties' means nothing in a SERP; 'how to tune it' is the reason to click. |
| `/guides/fable-personality` | Claude Fable 5.1 Personality: Results, Ties and Tuning (54) | **Claude Fable 5.1 Personality: Test Results & How to Tune It** (59) | Same. |
| `/guides/muse-soul-md-templates` | Meta Muse Soul.md Templates: 4 Copyable Examples · AgentTune (60) | **Meta Muse Soul.md Templates: 4 Copyable Examples** (48) | 60 chars on the edge; drop the suffix. |
| `/research` | AI Personality Research: GPT-6, Claude, Grok and Muse · AgentTune (65) | **AI Personality Research: GPT-6, Claude, Grok & Muse Tested** (58) | PR #11's title is 65 chars. Drop the suffix; 'tested' says what the page is. |
| `/research/what-personality-type-is-chatgpt` | What Personality Type Is ChatGPT? GPT-6 Tested, September 2026 · AgentTune (74) | **What Personality Type Is ChatGPT? GPT-6 Tested (2026)** (53) | PR #12's title is 74 chars (main's is 72). The question is the query; the rest is truncated. |
| `/research/ai-personality-five-models-2026` | GPT-6, Grok and Claude: Five-Model Personality Study (52) | **GPT-6, Claude and Grok Take Five Personality Tests (2026)** (57) | The models are the query words ('claude ai mbti', 'grok mbti'); the year says it is current. |
| `/research/i-took-the-mbti-100-times` | Simulating 100 MBTI Outcomes from an Opus 4.8 Profile · AgentTune (65) | **Simulating 100 MBTI Outcomes from an Opus 4.8 Profile** (53) | 65 chars; drop the suffix. |
| `/library/mbti/<type> (16)` | INTJ System Prompt for AI Agents — Claude, GPT · AgentTune (58) | **INTJ System Prompt: Custom Instructions for Claude & ChatGPT** (60) | 'for AI Agents — Claude, GPT' reads as keyword stuffing; 'custom instructions' and 'ChatGPT' are the words people search. |
| `/library/enneagram/<n> (9)` | Enneagram Type 5 System Prompt for AI Agents · AgentTune (56) | **Enneagram Type 5 System Prompt for Claude & ChatGPT** (51) | Consistent with MBTI; 'enneagram ai' is a live query. |
| `/library/disc/<x> (4)` | DISC S (Steadiness) System Prompt · AgentTune (45) | **DISC S Steadiness System Prompt for Claude & ChatGPT** (52) | Consistent template; parentheses dropped so DISC C Conscientiousness fits (59). |
| `/library/attachment/<x> (4)` | Secure Attachment System Prompt for AI · AgentTune (50) | **Secure Attachment System Prompt for Claude & ChatGPT** (52) | Consistent template. |
| `/library/ocean/<x> (10)` | High Openness System Prompt (Big Five) · AgentTune (50) | **High Openness System Prompt for Claude & ChatGPT** (48) | Consistent template. '(Big Five)' moves out of the title (High Conscientiousness would be 68 with it) and stays in the H1. |

Unchanged (already under 60 and matched to their query): /guides/coding-agent-personality, /guides/claude-md-examples, /guides/make-chatgpt-sound-like-you, /guides/mbti-vs-big-five-for-ai, /tools/claude-md-generator, /privacy, /terms, /404 (noindex)

Over 60: none

## H1 changes

| Page | Before | After |
|---|---|---|
| /tests/mbti, enneagram, big-five, disc, attachment | Take the MBTI test. / Get your tuning at the end. | Free MBTI test. / Instant results, then your tuning file. (and the same shape for the other four) |
| /guides/muse-personality | How to give Muse a personality. | Give Meta Muse a character: the Soul.md guide. |
| /guides/grokbot-personality | How to give Grok Bot a personality. | Give a Grok Bot its character: the Description guide. |
| /guides/open-source-enneagram-test | An open-source Enneagram test for developers. | An open-source Enneagram test on GitHub. |
| /tools/custom-instructions-generator | Custom instructions, tuned to your type. | Free ChatGPT custom instructions generator. |

## Where titles live

- Library pages: `tools/generate-library.js` (`pageTitle`, five templates) and the hub title in the same file; `library/mbti/estp.html` is hand-built and edited by hand.
- Guides: `title` and `h1` in `guides/src/*.json`, then `node tools/build-guides.js`.
- Five-model study: `tools/build-research.js`; the hub and the ChatGPT Q&A page are hand-written (their new titles ride in PRs #11 and #12).
- Tests, tools, home, hubs: hand-written HTML.

## What a title cannot fix

The Claude cluster sits at position 8 to 9 and the free-Enneagram cluster at 70 to 90. Titles move click-through on the impressions you already get; they do not move rank much. Those two need links and, for Claude, probably a dedicated 'best Claude personality setups' page.
