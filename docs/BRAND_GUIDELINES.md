# AgentTune Brand & Product Guidelines

**Canonical Reference · Monograph 1A ("Archival Press") Edition**
*Primary-Source Press for AI Psychology & Agent Tuning (`agent-tune.com`)*

---

## 1. Brand North Star & Product Charter

AgentTune exists to be the **#1 primary-source resource for AI psychology and agent tuning** — trusted equally by engineers tuning production agents, researchers citing empirical baselines, and AI coding/orchestrator agents consuming our Markdown and MCP specs directly.

### Core Operating Pillars
1. **60% Research-First Product Gate:** At least **60%** of ongoing AgentTune engineering and editorial effort goes into original empirical AI psychology research — longitudinal benchmarks, psychometric validity audits, behavioral pushback studies, and native AI-first instruments. **No tuning feature, quiz claim, or rule template ships on an unvalidated construct.**
2. **Dual-Audience Parity:** Every public page is simultaneously a serene, scannable print-grade monograph for humans and a clean, deterministic protocol artifact for AI agents (canonical `.md` mirrors, `/llms.txt`, JSON briefs, `/library/index.json`, and AgentTune MCP). Machine utility is integrated into the page's editorial colophon rather than hidden behind separate novelty toggles.
3. **Epistemic Honesty Over Gimmicks:**
   - Lead with the empirical finding or working rule, followed immediately by its uncertainty intervals, effective sample size, and boundary conditions.
   - Never pass human-normed percentiles off as AI traits, never break psychometric ties silently without disclosing ties, and never rely on a single same-family LLM judge for cross-model rankings.
4. **Anti-Slop Aesthetic Discipline:** Reject generic SaaS aesthetics — no floating white cards stacked in grids, no drop-shadow bloat, no rainbow badge confetti, no repetitive italic-accented hero cliches.

---

## 2. Visual System: "Archival Press" Material & Color Palette

Design inspiration: classic university press monographs, scientific field ledgers, and Edward Tufte's marginalia typography. Rather than lifting white cards off a beige canvas ("white stickers on cream"), UI surfaces either sit cleanly on **uncoated archival stock** separated by ink rules, or sink into **recessed instrument wells** below the paper plane.

### Surface & Ink Tokens

| Token | Hex / Value | Role & Surface Behavior | Contrast Target |
| :--- | :--- | :--- | :--- |
| `--bg` | `#f4efe6` | **Uncoated Paper Stock** (primary viewport ground + SVG `feTurbulence` 3.2% paper grain) | — |
| `--well` | `#ece5d8` | **Recessed Instrument Well** (code blocks, prompt editors, live outputs, TL;DRs, colophon notes — sits *below* paper) | — |
| `--surface` | `#f8f4ec` | **Subtle Paper Lift** (active hovers, popovers, chart plates — max `4%` brighter than `--bg`, never `#ffffff`) | — |
| `--ink` | `#1c1a17` | **Display Ink** (headings, `1.5px` top/bottom folio rules, primary buttons, bold table headers) | `~14.2:1` on `--bg` |
| `--text` | `#2b2823` | **Body Ink** (long-form prose, body copy — softer than `#000`, effortless extended reading) | `~12.1:1` on `--bg` |
| `--muted` | `#655e54` | **Apparatus Ink** (captions, table labels, breadcrumbs, metadata, sidenotes) | `≥ 5.0:1` on `--bg` & `--well` |
| `--ink-3` | `#857d71` | **Secondary Index Ink** (`§` folio numerals, inactive axis ticks, rule indices) | Decorative / large UI |
| `--border` | `#cfc6b6` | **Warm Hairline Rule** (`1px` structural dividers, table row hairlines) | — |
| `--border-soft` | `#dfd8ca` | **Subtle Sub-Rule** (inner table cell separators, chart gridlines) | — |
| `--accent` | `#9c3b1f` | **Burnt Sienna / Terracotta** (active tab underlines, focus rings, editorial highlights, primary data series) | `~5.8:1` on `--bg` |
| `--accent-text` | `#8f351b` | **Small-Text Terracotta** (links and inline callouts inside prose or wells) | `≥ 6.0:1` on `--bg` |
| `--accent-wash` | `#efdccf` | **Redline Wash** (struck-through AI slop markers and active selection wash) | — |
| `--green` | `#3e5a4c` | **Botanical Moss** (optimal instruction budget, revised/calibrated output, verified pass) | `~6.4:1` on `--bg` |
| `--green-wash` | `color-mix(in oklab, #3e5a4c 12%, #f4efe6)` | **Revised Highlight Wash** (positive diff underline/tint; mixed in `oklab` to avoid grey-pink `oklch` hue shift) | — |

### Data Visualization & System Palette Rules
- **Two-Hue Chart Discipline:** Every empirical chart uses at most **two chromatic hues** (`#9c3b1f` Burnt Sienna for focal/experimental series + `#3e5a4c` Botanical Moss for positive/calibrated deltas) paired with a neutral charcoal ramp (`#1c1a17`, `#655e54`, `#9e9587`). Multi-model plots distinguish series by direct end-labels, solid vs. outlined stroke, and neutral tonal steps before introducing extra colors.
- **Archival Psychometric System Inks** (calibrated for `#f4efe6` legibility):
  - MBTI (`OEJTS`): `#4b4099` · Enneagram (`OEPS`): `#2a5d47` · DISC (`ODAT`): `#7a5219` · Attachment (`ECR-R`): `#843d4c` · Big Five (`IPIP-50`): `#2c5282` · Muse / Custom (`Soul.md`): `#9c3b1f`.
- **Chart Surface Rule:** Replace harsh `#ffffff` chart fills and hatching backgrounds with `#f4efe6` (`--bg`) so inline SVGs read as inked directly onto the page stock.

---

## 3. Typography & Baseline Grid Rhythm

Built around a **`0.375rem` (`6px`) baseline unit** (`--bl`) and a **`24px` (`4 × --bl`) editorial line grid** (inspectable across the site via `Shift+G`).

1. **Three-Voice Typographic Hierarchy:**
   - **Editorial Serif (`--font-serif`):** `"Newsreader", "Iowan Old Style", "Charter", Georgia, serif`
     - *Display Headlines (`<h1>`, `<h2>`, `.h-hero`):* Regular to medium weight (`400–500`), negative optical tracking (`-0.015em`), `text-wrap: balance`.
     - *Long-Form Prose:* `1.0625rem–1.08rem` (`17px–17.3px`), `line-height: 1.65`, measure `36rem–44rem` (`~62–72ch`), `font-variant-numeric: oldstyle-nums proportional-nums`, `text-wrap: pretty`.
   - **Apparatus Sans (`--font-sans`):** `"IBM Plex Sans", -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
     - Used strictly for navigation, TOC rails, table headers & cells, stat labels, controls, captions, and colophon strips.
     - Always enforces `font-variant-numeric: tabular-nums lining-nums` so numbers align cleanly in tables, diffs, and progress counters.
   - **Instrument Mono (`--font-mono`):** `"IBM Plex Mono", "SF Mono", ui-monospace, Menlo, Consolas, monospace`
     - Used exclusively for actual code, prompt textareas, CLI snippets, YAML contracts, and character/rule budgets. Never overuse mono for marketing eyebrows.
2. **Kickers & Numerals (Zero Pill-Badge Noise):**
   - Replace rounded pill tags with quiet **small-caps kickers** (`font-family: var(--font-serif); font-variant-caps: all-small-caps; letter-spacing: 0.08em;`) and editorial **folio section numerals** (`§ 01`, `§ 02` in `0.76rem` `--font-sans`).
   - Do **not** mechanically append italic terracotta `<em>` phrases to every heading; reserve italics for genuine editorial stress.

---

## 4. Layout & Canonical Component Grammar

| Archetype | Spatial Pattern | Signature Components |
| :--- | :--- | :--- |
| **Home (`/`)** | Press masthead + colophon bar → focused hero → ruled 3-column entry index → full-width workbench band → book-rule empirical ledger | Interactive Prompt Workbench (`#ece5d8` well + live Instruction Budget Linter), Redline Slop Diff (`<del>` vs. `<mark>`), Research Ledger table |
| **Research Papers (`/research/*`) & Platform Guides (`/guides/*`)** | Hero + Dateline/Machine Colophon + Recessed TL;DR → **2-Column Editorial Spread (`.press-spread` at `>=1120px`)** | Sticky Left Index Rail (`14rem`) paired with `44rem` Serif Measure, Book-Rule Tables (`1.5px` top/bottom ink borders, zero verticals), Inline SVG Charts (`<title>` + `<desc>` + `.md` mirror), Provenance Colophon |
| **Hubs (`/research`, `/guides/`, `/library/`)** | Press header + colophon bar → ruled stat ledger → live semantic filter bar → clean hairline-ruled card grids (`3px` matte plates, zero shadows) | Exposed headline telemetry with `tabular-nums`, keyboard-accessible live filters, collapsible historical archives |
| **Library Profiles (`/library/*/*`) & Tests (`/tests/*`)** | Install-first workflow above raw template well → matte disclosure sections (`<details>`) · Focused single-column quiz runner with 5-point horizontal Likert & tie-preserving results | Read-only `#ece5d8` `.c-editor`, platform install cards, crisp `tabular-nums` axis bars, full item disclosure |
| **Tools (`/tools/*`)** | Balanced 2-column `.tools-layout` workbench: recessed `#ece5d8` inputs on left, live `.md` / XML / JSON output well on right | Strict CSS focus outlines (`var(--accent)`), sticky button feedback (`aria-live`), offline client-side processing |

### Component Invariants
- **Buttons:** Sharp archival press proportions (`border-radius: 2px`, `min-height: 2.65rem`), primary in solid `--ink` (`#1c1a17`) warming to `--accent` (`#9c3b1f`) on hover; secondary in hairline border (`1px solid var(--ink)`).
- **Navigation:** Primary bar carries `border-bottom: 1.5px solid var(--ink)` with active routes indicated by both ink color and a `2px solid var(--accent)` bottom underline (never color alone, WCAG 1.4.1).
- **Focus & Accessibility:** Global `2px solid var(--accent)` outline with `2px` offset (`:focus-visible`), `clip-path: inset(50%)` for `.sr-only`, sticky row/column headers on overflowing data tables, and zero headings inside `<summary>`.

---

## 5. Editorial Voice & Copy Standards

1. **Verdict-First, Zero Fluff:** Open every section, guide, and answer with the concrete conclusion, rule, or setting path. Never start with *"In today's fast-paced AI landscape..."*, *"Wait — what if..."*, or *"That's completely normal!"*.
2. **Quantify Claims Inline With Defects:** Whenever citing a metric (`87.2%` -> `11.1%` slop drop, `63.6%` PC1 factor collapse, `+16.7 pp`), state the exact sample unit (`n`, sessions vs. tasks, model IDs, judge setup) immediately beside it.
3. **Copyable Rules Must Be Testable:** Prefer observable instructions (*"Lead with the recommendation, then two bullets of trade-offs"*) over vague personality adjectives (*"Be smart and insightful"*).

---

## 6. Logo & Favicon System ("The Calibration Fork")

- **Mark Metaphor:** An architectural tuning fork (`viewBox="0 0 64 64"`) whose twin tines silhouette an open caliper around a suspended Burnt Sienna resonance node (`#9c3b1f` on `#f4efe6` paper; `#cf5636` enamel on `#1c1a17` ink).
- **Favicon & App Icons:** Unified across every route via `/favicon.svg` (`64×64` crisp SVG), `/favicon.ico` (`16×16`, `32×32`, `48×48` PNG-in-ICO frames), and `/apple-touch-icon.png` (`180×180` full-bleed `#1c1a17` ink PNG), version-hashed at build time in `tools/build-public.js` (zero inline plain-circle fallbacks).
- **Navbar Wordmark:** Pairs `.brand-mark` (`20×20` currentColor fork + `--accent` focal dot) with `Newsreader` `"AgentTune"`.
