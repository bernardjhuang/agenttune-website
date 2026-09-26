# UX, copy and agent-resource fixes — September 25, 2026

Scope: all four high-priority and fifteen medium-priority findings in the September 25 audit.

- UX-01: visible labeled answers at narrow widths on all five questionnaires.
- UX-02: preference-first generator; no inferred type or silently selected template.
- UX-03: seven-day browser-only drafts, explicit quiz resume/reset, generator reset and selection sharing without answers or edited text.
- UX-04: app-first picker; destination scope and account-level Claude instructions; optional model guidance.
- UX-05: primary library setup near the top, secondary examples, base file and background in crawlable disclosures.
- UX-06: guide search with app/task filters; library search with system filters; Start here precedes chronological additions.
- UX-07: stable article anchors, contents lists, semantic hub headings, collapsed May archive.
- UX-08: setup shortcuts move keyboard focus; hash links open disclosures and respect reduced motion.
- UX-09: editable output with reset, named example-copy buttons; base template explicitly read-only.
- CP-01: remove permanent/universal benefit promises; align all 43 full/compact/fallback/output-style exports with explicit preferences, uncertainty and scope.
- CP-02: plain-language first-use text; preferences replace categorical type claims in template summaries.
- CP-03: shorter homepage and guide openings; duplicate type-page material becomes secondary.
- CP-04: Big Five constants labeled implementation reference values; no population or percentile claim; numerical scoring preserved.
- AG-01: storage confirmation separated from multi-task behavioral evaluation in every tuning header and agent document.
- AG-02: shared versioned platforms.js → browser UI, resources/platforms.json and 43-file install metadata, including Muse; shared source links and review date.
- AG-03: explicit preferences resolve conflicts; body/metadata separated; preserve files and remove only managed blocks; provider-specific API instructions.
- AG-04: MCP output schemas and structured responses alongside existing text; versioned guide/research lookup and canonical URLs.
- AG-05: short discovery index, separate protocol, body-only exports, truthful page-specific article Markdown, local deterministic scorers.
- ME-01: consent-gated, payload-free setup selection, resume, error and self-reported-fit events. No private values passed. Removed the older library type/system event payload.

## Validation record

Record final automated and browser verification before merge. Automated interaction checks are not observed human usability sessions.

## Five-person usability study — prepared, not run

Recruit five consenting people who regularly use an AI assistant, including at least two using mobile. Avoid collecting questionnaire answers or instruction text in recordings/notes. Do not recruit or contact anyone without authorization.

Give each participant these goals without explaining the UI:
1. Create concise instructions for their usual app without taking a personality test.
2. Edit one sentence, copy the instructions and identify exactly where to paste them.
3. Start a questionnaire, leave and return, resume it, then clear the saved progress.
4. Find a Muse template or Claude setup guide and jump to one relevant section.
5. Explain what the research does and does not establish, and how to remove a saved tuning.

Observe time to first useful copy, completion without help, wrong turns, lost work, confusing labels, and their interpretation of verification. Ask whether the resulting instructions fit their needs. A copy event is not an installation or a successful outcome. Report descriptive findings; five sessions do not establish conversion lift.

Status: no participants recruited, no sessions run, no results claimed. The code and instrumentation can be deployed independently; human validation remains an explicit follow-up.
