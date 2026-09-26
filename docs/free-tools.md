# Free tools maintenance

`tools/build-tools.js` is the source for eight tool pages, the `/tools/` hub and `resources/tools/catalog.json`. Run `npm run build` to regenerate these and create the public bundle. The legacy type-based and CLAUDE.md generators remain available.

- `resources/tools/core.js`: dependency-free functions shared with developers; no network/storage. API documentation is in `resources/tools/README.md`.
- `resources/tools/app.js`: browser event handlers, explicit export/share actions, text-only rendering, local input limits.
- `tools/navigation.js`: build-time shared navigation. `build-public.js` applies it to all published HTML and hashes the navigation/tool assets.
- `tools/generate-library.js`: sitemap registration for the tools and hub. Run after adding/removing a route.
- `functions/mcp.js`: `get_free_tools` returns the static catalog as structured content and text JSON. It accepts no personal input.

## Checks

Run `npm test`, `npm run build` and `python3 tools/build-enneagram-starter.py --check`.

Before release, exercise each workflow in the browser. Check duplicate removal after manual edits, surrounding-text preservation and malformed merge markers, API JSON parsing, trial label/choice mapping, equal Enneagram totals, memory selection/redaction, and card reload with a URL fragment. Shared card text must be captured and removed from the address before deferred analytics execute; display it as plain text only. Do not add input text to analytics, logs, URLs or storage.

The tools do not call models or make automatic changes to other apps. Input is not saved on navigation. The memory redactor and instruction checker are deliberately limited rule-based aids; keep their limitations visible. Questionnaire wording has separate provenance from the MIT code license.

Release QA: all eight workflows exercised; all nine new routes passed axe at 320px and 1280px with no reported violations or horizontal overflow. Browser download-event capture was unavailable in the in-app browser; actual export handlers were verified with Blob-content regression tests, and the comparison report has an editable/copyable JSON fallback. Do not describe this as a performance benchmark or full security audit.
