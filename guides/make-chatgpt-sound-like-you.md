Source: https://agent-tune.com/guides/make-chatgpt-sound-like-you
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · ChatGPT

# Make ChatGPT sound like you — and treat you like you.

        By Bernard Huang · Updated September 25, 2026

        To make ChatGPT sound like you, either feed it samples of your writing (best for mimicking prose style) or paste a personality-matched tuning into custom instructions (best for how it treats you — pacing, directness, decision style). The personality route takes about 15 minutes: take a free test, copy the tuning for your type, paste it into Settings → Personalization.

      Adapt the communication prompts

Choose your model to update the communication prompts below. For a full tuning and installation steps, [open the prompt generator →](https://agent-tune.com/tools/custom-instructions-generator?model=sol-6&target=chatgpt-custom)

## Two approaches. Two different "you."

        The standard advice — most how-to guides and Reddit threads — is corpus-first: collect five to ten samples of your writing, paste them in, and ask ChatGPT to describe your style, then reuse that description. It works, for what it targets. If the goal is drafts that read like I wrote them — your sentence length, your vocabulary, your comma habits — corpus-first is genuinely the better tool. A personality tuning won't teach ChatGPT your voice on the page.

But "sounds like me" usually means something wider than prose. It means the replies stop feeling like a customer-service script aimed at nobody. That part isn't in your writing samples — it's in how you like to be treated. Whether you want the answer first or the reasoning first. Whether pushback reads as respect or friction. Whether a tangent is a distraction or the actual thinking. That's personality-first territory: take a test, grab the tuning file for your type, paste it. No corpus to assemble, and the result is inspectable — a short list of plain-language rules you can read and edit, not a style description ChatGPT inferred and you have to take on faith.

Side by side:

- Corpus-first wins when the output is the deliverable — emails, posts, docs that must read as yours. It captures rhythm, vocabulary, and register that no personality type predicts.
- Personality-first wins when the conversation is the deliverable — thinking out loud, getting unblocked, making decisions. It sets pacing, directness, option count, critique order, and what happens to your tangents.
- Corpus-first costs more — you need samples you're willing to share and a judgment call on whether the inferred style description is right. Personality-first is a test plus a paste.

These are exploratory reports of model-generated self-descriptions, not a validated measure of AI personality or evidence that personality matching improves outcomes. The MBTI total includes repeated scoring of a single answer vector for GLM, Grok, and MiniMax; it does not represent 600 independent model responses. Protocols differed across models. See the [methodology and limitations](https://agent-tune.com/research#methodology).

## The 15-minute personality-first walkthrough.

- Take the test — 10 minutes. The [free in-browser MBTI test](https://agent-tune.com/tests/mbti), no signup. Already know your four letters? Skip ahead. Prefer a different lens? The [tests hub](https://agent-tune.com/tests/) also has Big Five, Enneagram, DISC, and attachment style, each with matching tunings.
- Grab your tuning — 2 minutes. Find your type in the [library](https://agent-tune.com/library/) — say [ENFP](https://agent-tune.com/library/mbti/enfp) — and copy the condensed custom-instructions block. All 16 MBTI blocks are collected in [one page](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type).
- Paste it — 1 minute. ChatGPT → Settings → Personalization → Custom instructions → the How would you like ChatGPT to respond? field. Save, then start a new chat — instructions apply to new conversations, not old ones.

Here's the ENFP block, condensed from the [full ENFP tuning](https://agent-tune.com/library/mbti/enfp):

Show up bright — I calibrate off your energy as much as your content, and a flat response signals you don't get it. Show ideas as connected webs, not linear numbered steps. Treat tangents as the thinking, not a distraction — follow them. Offer frameworks as scaffolding: "here's one way to think about it," never "the right approach is." Validate the idea before evaluating it — "that's interesting because…" then the critique. Use possibility language: "what if," "I'm curious about." Be playful; sterile reads as disinterest. No premature "that's impractical" verdicts, no forced closure. When unsure, open up rather than narrow — I'll close down when I'm ready.

Read it again as a stranger. Nothing in there is about ENFP trivia — every line is an instruction about treatment: energy, structure, tangents, critique order. That's the entire trick.

## Layer both. They don't compete.

        Keep communication preferences and writing-style notes clear and specific. For example: “When advising me, lead with a recommendation. When drafting as me, use short sentences and one idea per paragraph.” Add this to your available custom-instructions or project-instructions field and check the limit shown there.

On ChatGPT Work web, OpenAI also documents a writing-style setup using connected writing sources. That is a separate feature. A few examples of your writing can guide a draft without making personality claims.

Compare several drafts and conversations before deciding whether the combination helps. Neither approach is a guaranteed improvement.

## What changes in practice.

        Take the ENFP block above. Before: you bring a half-formed idea and get a numbered five-step implementation plan — structured, complete, and deflating, because you weren't asking for a plan yet. Tangents get politely steered back to the topic. Every suggestion arrives pre-hedged with feasibility caveats.

After: the first response engages with why the idea is interesting before weighing it. Related ideas get connected instead of filed separately. The critique still comes — the tuning asks for validation before evaluation, not instead of it — but in an order that keeps you thinking rather than defending. Structure shows up as "here's one way to think about it," which you can take or leave.

The same mechanism runs the other direction. An [INTJ tuning](https://agent-tune.com/library/mbti/intj) deletes the warmup instead of adding energy: answer first, hedges cut, one follow-up question maximum. Same model, same knowledge — different standing orders about how you like to work. That's the sense of "sounds like you" that writing samples never touch.

## Questions people ask.

            Which approach is better, writing samples or a personality tuning?

            They fix different problems. Writing samples are better when the output is the product — emails, posts, drafts that must read like you wrote them. A personality tuning is better when the conversation is the product — how ChatGPT paces, structures, and challenges its replies to you. If you only fix one, fix the one that's actually bothering you.

            How long does the personality-first setup take?

            About 15 minutes end to end: ten for the free in-browser MBTI test, two to copy the block for your type, one to paste it into Settings → Personalization → Custom instructions, and a couple to sanity-check a fresh chat. If you already know your type, it's under five minutes.

            Do I need to know my MBTI type first?

            You need a type, but not necessarily MBTI. AgentTune has free in-browser tests and matching tunings for five systems — MBTI, Big Five, Enneagram, DISC, and attachment style. MBTI is the common starting point because its 16 types map cleanly onto interaction rules, but any system that describes how you prefer to work will do.

            Can I use both approaches at the same time?

            You can combine conversation preferences with writing-style notes. Keep the rules distinct, check your app’s field limit and compare the results on your own tasks.

            Doesn't ChatGPT memory already learn my style?

            Memory collects facts — projects, preferences you've stated, recurring topics. It doesn't reliably converge on interaction style, and you can't inspect or edit what it inferred the way you can a pasted block. Custom instructions are explicit and yours. Use memory for context, a tuning for behavior.

## What changed.

- September 25, 2026 Clarified preference scope and removed universal field-limit claims; current setup controls vary by client.

## Keep going.

          [TestsFree in-browser MBTI test](https://agent-tune.com/tests/mbti)
          [GuideCustom instructions for all 16 types](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
          [LibraryENFP — Campaigner tuning](https://agent-tune.com/library/mbti/enfp)
          [GuideHow to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
          [ResearchWhat personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt)
