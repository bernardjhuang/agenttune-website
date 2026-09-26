# Site-wide audit and remediation — September 25, 2026

Scope: all 89 published HTML pages, 88 sitemap routes, all five interactive quizzes, the prompt picker, research generators and datasets, consent controls, downloads, the MCP Pages Function, and the deployment workflow. Baseline: `6c7c207` on `main`, following the model-card spacing fix in PR #22.

No additional high-priority site defect was confirmed. Eleven medium-priority finding groups were fixed in this release. The existing GitHub deployment credential failure remains deferred by the owner, who explicitly chose direct deployment for now.

| ID | Priority | Finding and evidence | Resolution |
|---|---|---|---|
| 01 | Medium | Low-contrast text, pills, buttons and dynamic results across shared templates. The baseline browser audit reported violations on 84 of 89 pages, predominantly contrast. | Darkened foreground and button colors; retained lighter decorative tints and separate colors for dark panels. Fixed generated, hand-maintained and result-state styles. |
| 02 | Medium | Prose links were distinguished only by color, including guides and methodology/source links. | Added persistent underlines in prose and shared library text. |
| 03 | Medium | Wide tables on 17 guide/research pages and quiz result editors could not receive keyboard focus on mobile. Expanded specifications also overflowed on four quizzes. | Named, focusable scroll regions around tables and editors; table overflow is contained locally. |
| 04 | Medium | Opus and Fable guides reused the same landmark name for different result tables. | Distinct labels for the instrument summary and Big Five comparison. |
| 05 | Medium | Starting a quiz left focus on the document body; advancing questions and showing results did not preserve a useful reading position. Answer controls used incomplete radio semantics, and mobile labels disappeared. Shortcuts captured modified/form keys. | Native answer buttons with explicit scale labels, question focus/announcements, result/retake focus, persistent accessible page headings, and guarded keyboard shortcuts. |
| 06 | Medium | Big Five result rows forced the mobile page wider than the viewport; long trait names became unreadable in narrow columns. Homepage cards and the instructions generator also overflowed at 320 pixels. | Wrapping result rows and a single-column score layout on small screens; constrained generator tracks and stacked homepage test cards at narrow widths. |
| 07 | Medium | Library and quiz copy buttons left rejected or unavailable clipboard operations unhandled. | Clear, recoverable failure messages with selection/download alternatives; successful copying still reports success and tracks only after success. |
| 08 | Medium | JavaScript inserted links to nonexistent Hermes and OpenClaw setup guides; the static crawler missed them. | Removed those links while retaining the inline setup steps. A new regression test resolves every dynamically inserted internal setup link. |
| 09 | Medium | The detailed May research results existed only after JavaScript loaded `data.js` and populated empty containers. | Build-time rendering from the existing archived data. Model breakdowns, all five findings and exact values are present in HTML without JavaScript. The hub no longer downloads `data.js`. |
| 10 | Medium | Historical and hub charts shrank labels on mobile; decorative attachment circles could be mistaken for uncertainty. | Reused the accessible static chart renderer: titled/described SVGs, keyboard-scrollable mobile figures, numerical text, clear aggregate captions and no decorative uncertainty-like circles. Visually checked label placement. |
| 11 | Medium | MCP buffered unbounded JSON, accepted malformed IDs/arguments and unsupported version headers, and did not validate browser Origins. | 64 KiB streaming limit, content-type/envelope/schema/version checks, explicit Origin policy, non-cacheable responses and protocol-appropriate errors. The three read-only tools still read only catalog-approved static assets. |
| 12 | Medium, deferred | GitHub Actions cannot deploy because `CLOUDFLARE_API_TOKEN` is invalid. | Owner chose direct local deployment. Documented in README; no local OAuth credentials copied to GitHub and no access expanded. Replace the secret to restore automatic deployments. |

## Verification

- 64 Node regression tests pass: scoring and ties, consent/analytics, exports, build allowlist, research reproduction, prompt formats, keyboard focus and shortcuts, clipboard failure/recovery, generated links, and MCP validation.
- All 89 pages checked in the browser at 1280 × 800, 390 × 844 and 320 × 740 using axe-core 4.13.0 (WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice rules). Final sweeps: zero reported violations and zero page-level horizontal overflow at all three widths.
- All five quizzes completed in the browser; active question, tied/continuous result and expanded specification states checked. Quiz state-specific contrast, focus, editor scrolling and overflow defects were corrected.
- All 89 pages pass internal route, anchor and versioned asset checks. Titles, descriptions, headings, IDs, JSON-LD, sitemap coverage and static SVG naming checked. The intentionally non-indexed 404 has no canonical/social/Article metadata. The MBTI scoring table is filled by its script; a complete no-JavaScript Markdown instrument remains linked.
- Local Cloudflare Workers runtime: ping, tool discovery, catalog count (43), invalid Origin (403), oversized body (413), malformed ID (400). Node tests additionally cover real tuning/spec retrieval, traversal attempts, unsupported protocol versions, notifications, CORS and missing/wrong tool arguments.
- Public-only build contains 264 files and excludes source specs, operational documentation, checks, package metadata and local logs. Generated output and `git diff --check` pass.
- Research numbers and questionnaire scoring were not changed. Existing response-level reproduction tests pass; the historical rendering reads the same `AT_RESEARCH` archive. Collection-method caveats remain visible.

## Limits and follow-up

This is a source, browser and deployment audit, not a claim that every possible defect has been eliminated. Automated accessibility checks do not replace testing with assistive technology users. Production traffic/Core Web Vitals and Lighthouse traces were not available in this tool session, so no field-performance score or performance improvement is claimed. Removing the research hub's client-side data/render dependency is directly verified in the build.

Some official help sites reject automated external-link requests with 400/403 responses; these were not treated as confirmed broken pages. The two confirmed broken internal links were removed and covered by a regression test. Search rankings and AI citations require subsequent observation; the release improves crawlable content but does not guarantee visibility gains.

Release procedure: merge the reviewed PR, build the merged `main` commit, deploy through the existing local Wrangler login, verify the live sitemap pages/assets against the reviewed bundle, smoke-test MCP, and submit the sitemap URLs through the existing IndexNow script. GitHub automation remains deferred until its token is repaired.
