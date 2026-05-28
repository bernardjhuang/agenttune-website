/* GET /me/{uuid}
 *
 * The user's permalink to their AgentTune Pro master tuning file.
 *
 * Editorial spread design — a magazine-feature take on the deliverable.
 * Newsreader + IBM Plex from Google Fonts; cream paper background; heavy
 * magazine rules; numbered sections § I–VI; drop cap; pull-quote.
 *
 * Per the design handoff at design_handoff_pro_tuning_editorial/.
 *
 * Privacy:
 *   - meta robots noindex,nofollow
 *   - referrer-policy no-referrer
 *   - cache-control private, no-store
 *   - Strip email / stripe_session_id from JSON before embedding
 *   - profile (results detail) is KEPT so we can render the subject sidecar
 *     accurately; it's the user's own data and the page is bearer-token-gated
 *     anyway.
 */
import { kv, isUuid, esc } from "../_shared.js";

export async function onRequest(ctx) {
  const u = ctx.params.uuid;

  const baseHeaders = {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "private, no-store",
    "x-robots-tag": "noindex, nofollow",
    "referrer-policy": "no-referrer",
  };

  // Let static files (e.g. /me/sample.html) handle non-UUID paths.
  if (u === "sample") {
    return ctx.next();
  }

  if (!isUuid(u)) {
    return new Response(notFoundHtml(), { status: 404, headers: baseHeaders });
  }

  const KV = kv(ctx);
  const raw = await KV.get(`soul:${u}`);
  if (!raw) {
    return new Response(notFoundHtml(), { status: 404, headers: baseHeaders });
  }

  let soul;
  try {
    soul = JSON.parse(raw);
  } catch {
    return new Response(notFoundHtml("This file is corrupted. Reach out to support@agent-tune.com."), { status: 500, headers: baseHeaders });
  }

  // Strip server-internal fields. Keep `profile.results` so the subject
  // sidecar can show actual per-instrument values rather than parsing the
  // profile_code string.
  delete soul.email;
  delete soul.stripe_session_id;

  return new Response(permalinkHtml(soul, u), { status: 200, headers: baseHeaders });
}

/* ============================================================
 * Editorial permalink page
 * ============================================================ */
function permalinkHtml(soul, uuid) {
  // Prevent JSON `</script>` escape attacks
  const safeSoul = { ...soul };
  delete safeSoul.profile; // not needed client-side; server uses it for sidecar
  const jsonBlob = JSON.stringify(safeSoul).replace(/</g, "\\u003c");

  const shortId = String(uuid).slice(0, 8);
  const profileCode = soul.profile_code || "";
  const generatedDate = soul.generated_at ? new Date(soul.generated_at) : new Date();
  const monthYear = generatedDate.toLocaleString("en-US", { month: "long" }) +
                    " " + toRoman(generatedDate.getFullYear());

  // Subject sidecar: 5 instruments. Prefer profile.results if available, else parse code.
  const segments = buildSegments(soul);

  // Split operating_profile into paragraphs (target: 1-3)
  const paragraphs = splitParagraphs(soul.operating_profile || "");

  // Pull-quote — challenge_protocol gives the best "talk to me like this" voice
  const pullQuote = soul.challenge_protocol || soul.stuck_protocol || soul.blurb || "";
  const pullQuoteAccent = pickPullQuoteAccent(pullQuote);

  // Six agents, ordered as in the design
  const agents = buildAgents(soul);

  // Reading time — rough estimate from full_prompt length
  const fullText = (soul.full_prompt || "") + " " + (soul.operating_profile || "");
  const words = fullText.split(/\s+/).filter(Boolean).length;
  const readingMin = Math.max(2, Math.round(words / 220));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="referrer" content="no-referrer" />
  <title>Your AgentTune Pro tuning · ${esc(profileCode || "personalized")}</title>
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='30' fill='%239a3b22'/%3E%3C/svg%3E" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500;1,6..72,600&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" />

  <style>${EDITORIAL_CSS}</style>
</head>
<body>

  <main class="ed">

    <!-- =================== 1 · MASTHEAD =================== -->
    <header class="ed-masthead">
      <span class="ed-mast-side">Volume I · Profile · No. ${esc(shortId)}</span>
      <span class="ed-mast-brand">AgentTune</span>
      <span class="ed-mast-side ed-mast-side-r">${esc(monthYear)} · pp. 01–12</span>
    </header>

    <!-- =================== 2 · TITLE BLOCK =================== -->
    <section class="ed-title">
      <div class="ed-kicker">A profile, in five instruments.</div>
      <h1 class="ed-h1">
        How to be<br/>
        <em>talked-to,</em><br/>
        in your own words.
      </h1>

      <div class="ed-deck-grid">
        <div class="ed-deck">
          A composite tuning, drawn from five separate instruments, intended for the system prompt of a working agent. Not a personality report. Not a horoscope. <em>A working file.</em>
        </div>
        <aside class="ed-subject">
          <div class="ed-sub-eyebrow">The subject</div>
          <div class="ed-sub-rows">
            ${segments.map((s, i) => `
              <div class="ed-sub-row">
                <span class="ed-sub-label">${esc(s.label)}</span>
                <span class="ed-sub-value${i === 0 ? " is-accent" : ""}">${esc(s.value)}</span>
              </div>
            `).join("")}
          </div>
          <div class="ed-sub-filed">
            Filed under <span class="ed-sub-filed-id">/me/${esc(shortId)}</span>
          </div>
        </aside>
      </div>

      <div class="ed-actions">
        <div class="ed-actions-left">
          <button class="ed-act ed-act-primary" id="ed-copy-full" type="button">Copy full prompt</button>
          <button class="ed-act" id="ed-copy-short" type="button">Copy short prompt</button>
          <button class="ed-act" id="ed-download" type="button">Download .md</button>
          <a class="ed-act ed-act-muted" href="/api/soul/${esc(uuid)}.md" target="_blank" rel="noopener">View raw ↗</a>
        </div>
        <a class="ed-actions-right" href="#section-iii">
          Reading time · ${readingMin} min · or skip to the file ↓
        </a>
      </div>
    </section>

    <!-- =================== 3 · § I · OPERATING PROFILE =================== -->
    <section class="ed-section" id="section-i">
      <div class="ed-rail">
        <div class="ed-sec-mark">§ I</div>
        <h2 class="ed-sec-title">Who the agent <em>is talking to</em>.</h2>
        <p class="ed-sec-sub">Read this first if you skim. Everything below is just the proof.</p>
      </div>
      <div class="ed-prose ed-prose-cols">
        ${renderProseWithDropCap(paragraphs)}
      </div>
    </section>

    <!-- =================== 4 · PULL-QUOTE =================== -->
    <section class="ed-pullquote">
      <div class="ed-pq-text">
        "${escAccent(pullQuote, pullQuoteAccent)}"
      </div>
      <div class="ed-pq-attr">from the operating profile · ${soul.challenge_protocol ? "how to disagree" : "section I"}</div>
    </section>

    <!-- =================== 5 · § II · CALIBRATION =================== -->
    <section class="ed-section" id="section-ii">
      <div class="ed-rail">
        <div class="ed-sec-mark">§ II</div>
        <h2 class="ed-sec-title">Calibration <em>notes.</em></h2>
      </div>
      <div class="ed-rail-body">
        <p class="ed-sec-sub-r">Two lists, drawn from the file itself. The left list is what we tell your agent to lean into. The right is what we tell it to refuse, even when it's the first thing it wants to do.</p>
        <div class="ed-calib">
          <div>
            <div class="ed-calib-h ed-calib-h-pos">Works well</div>
            <ol class="ed-calib-list">
              ${(soul.works_well || []).map((it, i, arr) => `
                <li class="ed-calib-row${i === arr.length - 1 ? " is-last" : ""}">
                  <span class="ed-calib-num">${String(i + 1).padStart(2, "0")}</span>
                  <span class="ed-calib-txt">${esc(it.rule || "")}</span>
                </li>
              `).join("")}
            </ol>
          </div>
          <div>
            <div class="ed-calib-h ed-calib-h-neg">Works poorly</div>
            <ol class="ed-calib-list">
              ${(soul.works_poorly || []).map((it, i, arr) => `
                <li class="ed-calib-row ed-calib-row-neg${i === arr.length - 1 ? " is-last" : ""}">
                  <span class="ed-calib-num ed-calib-num-neg">${String(i + 1).padStart(2, "0")}</span>
                  <span class="ed-calib-txt">${esc(it.rule || "")}</span>
                </li>
              `).join("")}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 6 · § III · THE FILE =================== -->
    <section class="ed-section-full" id="section-iii">
      <div class="ed-sec-mark">§ III · The file</div>
      <h2 class="ed-sec-title-full">The tuning, <em>full text.</em></h2>
      <p class="ed-sec-sub-full"><span class="ed-plate-strong">Plate I</span> — to be pasted, unedited, into your agent's system prompt.</p>

      <div class="ed-plate-wrap">
        <span class="ed-plate-tag-l">fig. 1 · master.md</span>
        <button class="ed-plate-tag-r" id="ed-plate-copy" type="button">Copy ↵</button>
        <pre class="ed-plate" id="ed-plate-body">${esc(soul.full_prompt || "")}</pre>
      </div>

      <div class="ed-plate-caption">
        <button class="ed-plate-shortcut" id="ed-copy-short-2" type="button">
          or — the <span class="ed-plate-shortcut-em">short cut</span> if you're tight on context tokens →
        </button>
        <span class="ed-plate-meta">${(soul.short_prompt || "").length} chars · drops the long-form rationale</span>
      </div>
    </section>

    <!-- =================== 7 · § IV · PICK YOUR AGENT =================== -->
    <section class="ed-section" id="section-iv">
      <div class="ed-rail">
        <div class="ed-sec-mark">§ IV</div>
        <h2 class="ed-sec-title">Pick your <em>agent.</em></h2>
      </div>
      <div class="ed-rail-body">
        <div class="ed-agents">
          ${agents.map((a, i) => `
            <div class="ed-agent${i % 2 === 0 ? " ed-agent-l" : ""}" data-agent="${esc(a.id)}">
              <div class="ed-agent-top">
                <span class="ed-agent-name">${esc(a.name)}</span>
                <button class="ed-agent-copy" type="button" data-snippet="${esc(a.snippet || "")}">Copy snippet →</button>
              </div>
              <div class="ed-agent-sub">${esc(a.sub)}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- =================== 8 · § V · EVIDENCE =================== -->
    <section class="ed-section" id="section-v">
      <div class="ed-rail">
        <div class="ed-sec-mark">§ V</div>
        <h2 class="ed-sec-title">Why your file <em>says what it says.</em></h2>
        <p class="ed-sec-sub">Each line of the tuning is anchored to a measurement. The interpretation is editorial — the confidence is not.</p>
      </div>
      <div class="ed-rail-body">
        <div class="ed-evidence">
          ${(soul.evidence_table || []).map((row) => `
            <div class="ed-ev-row">
              <div class="ed-ev-top">
                <span class="ed-ev-signal">${esc(row.signal || "")}</span>
                <span class="ed-ev-conf">${esc(confidenceToP(row.confidence))}</span>
              </div>
              <div class="ed-ev-interp">${esc(row.interpretation || "")}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- =================== 9 · § VI · LIMITS =================== -->
    <section class="ed-section" id="section-vi">
      <div class="ed-rail">
        <div class="ed-sec-mark">§ VI</div>
        <h2 class="ed-sec-title">Limits, in <em>plain prose.</em></h2>
      </div>
      <div class="ed-rail-body">
        <div class="ed-limits">
          ${(soul.limits || []).map((l) => `
            <p class="ed-limit"><span class="ed-limit-dash">—</span>${esc(l)}</p>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- =================== 10 · COLOPHON =================== -->
    <footer class="ed-colophon">
      <span>End of feature · pp. 12</span>
      <span>Set in Newsreader &amp; IBM Plex</span>
      <span>MIT · psyduckler / agenttune · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
    </footer>

  </main>

  <div class="ed-toast" id="ed-toast" role="status" aria-live="polite">Copied ✓</div>

  <script type="application/json" id="ed-soul-data">${jsonBlob}</script>
  <script>${EDITORIAL_JS.replace("__UUID__", JSON.stringify(uuid))}</script>
</body>
</html>`;
}

/* ============================================================
 * Helpers
 * ============================================================ */

function buildSegments(soul) {
  // Prefer parsed profile.results for accurate values. Fall back to
  // splitting profile_code by "-".
  const r = soul.profile && soul.profile.results;
  if (r) {
    return [
      { label: "MBTI",       value: (r.mbti && r.mbti.code) || "—" },
      { label: "Enneagram",  value: r.enneagram ? ("T" + r.enneagram.dominant + (r.enneagram.wing ? "w" + r.enneagram.wing : "")) : "—" },
      { label: "DISC",       value: r.disc ? (r.disc.isBlend ? r.disc.dominant + r.disc.secondary : r.disc.dominant) : "—" },
      { label: "Attachment", value: (r.attachment && r.attachment.style) || "—" },
      { label: "OCEAN",      value: r.bigfive ? bigfiveAbbrev(r.bigfive) : "—" },
    ];
  }
  // Fallback: parse profile_code like "INTJ-5w4-CD-Secure-O+C+E−"
  const parts = String(soul.profile_code || "").split("-").map((s) => s.trim());
  return [
    { label: "MBTI",       value: parts[0] || "—" },
    { label: "Enneagram",  value: parts[1] || "—" },
    { label: "DISC",       value: parts[2] || "—" },
    { label: "Attachment", value: parts[3] || "—" },
    { label: "OCEAN",      value: parts.slice(4).join("-") || "—" },
  ];
}

function bigfiveAbbrev(b) {
  // b.level is { O: "high"|"mid"|"low", ... }
  if (!b.level) return "—";
  return ["O", "C", "E", "A", "N"]
    .map((d) => d + (b.level[d] === "high" ? "+" : b.level[d] === "low" ? "−" : "~"))
    .join("");
}

function splitParagraphs(text) {
  if (!text) return [""];
  // Split on existing paragraph breaks first
  const paras = String(text).split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  if (paras.length >= 2) return paras.slice(0, 3);
  // Otherwise split a single long paragraph into 2-3 chunks at sentence boundaries
  const sentences = String(text).match(/[^.!?]+[.!?]+/g) || [text];
  if (sentences.length <= 1) return [text];
  if (sentences.length === 2) return [sentences[0].trim(), sentences[1].trim()];
  const third = Math.ceil(sentences.length / 3);
  return [
    sentences.slice(0, third).join(" ").trim(),
    sentences.slice(third, third * 2).join(" ").trim(),
    sentences.slice(third * 2).join(" ").trim(),
  ];
}

function renderProseWithDropCap(paragraphs) {
  if (!paragraphs || !paragraphs.length || !paragraphs[0]) return "";
  const first = paragraphs[0];
  const dropChar = first.charAt(0);
  const rest = first.slice(1);
  const more = paragraphs.slice(1);
  return `
    <p class="ed-para ed-para-first">
      <span class="ed-dropcap">${esc(dropChar)}</span>${esc(rest)}
    </p>
    ${more.map((p) => `<p class="ed-para">${esc(p)}</p>`).join("")}
  `;
}

function pickPullQuoteAccent(text) {
  // Pick a clause to accent — prefer the first imperative phrase or first
  // strong verb after a period. Falls back to nothing.
  if (!text) return "";
  const candidates = [
    /push back on it/i,
    /hold both/i,
    /lead with/i,
    /skip the/i,
    /name the/i,
    /act unless/i,
  ];
  for (const re of candidates) {
    const m = String(text).match(re);
    if (m) return m[0];
  }
  return "";
}

function escAccent(text, accent) {
  // Returns escaped HTML with the accent phrase wrapped in <span class="ed-pq-accent">
  if (!text) return "";
  const safe = esc(text);
  if (!accent) return safe;
  const safeAccent = esc(accent);
  return safe.replace(safeAccent, `<span class="ed-pq-accent">${safeAccent}</span>`);
}

function confidenceToP(conf) {
  // soul.evidence_table[*].confidence is "high"|"medium"|"low" — map to p-value
  const map = { high: "p = .92", medium: "p = .78", low: "p = .55" };
  return map[String(conf || "").toLowerCase()] || "p = —";
}

function buildAgents(soul) {
  const ints = soul.integrations || {};
  const shortPrompt = soul.short_prompt || "";
  const fullPrompt = soul.full_prompt || "";
  // For now the per-agent "snippet" is just the short_prompt — the install
  // wrapper differs by surface (CLAUDE.md vs Custom Instructions field vs
  // .cursor/rules) but the prompt body is the same paste-ready text.
  return [
    { id: "claude",  name: "Claude",     sub: (ints.claude_code && ints.claude_code.install) || "CLAUDE.md in project root",                 snippet: fullPrompt },
    { id: "chatgpt", name: "ChatGPT",    sub: (ints.chatgpt && ints.chatgpt.install) || "Settings → Custom Instructions",                   snippet: shortPrompt },
    { id: "cursor",  name: "Cursor",     sub: (ints.cursor && ints.cursor.install) || ".cursor/rules/agenttune.mdc",                         snippet: fullPrompt },
    { id: "gemini",  name: "Gemini",     sub: (ints.gemini_gems && ints.gemini_gems.install) || "Gem → Custom Instructions",                 snippet: shortPrompt },
    { id: "codex",   name: "Codex CLI",  sub: (ints.codex_cli && ints.codex_cli.install) || "AGENTS.md in project root",                     snippet: fullPrompt },
    { id: "api",     name: "Direct API", sub: (ints.api && ints.api.install) || "Pass as system parameter",                                  snippet: fullPrompt },
  ];
}

function toRoman(year) {
  // Roman numerals for the year, magazine-style. 2026 → MMXXVI.
  const map = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],
               [50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  let n = year, out = "";
  for (const [v, s] of map) { while (n >= v) { out += s; n -= v; } }
  return out;
}

/* ============================================================
 * Editorial CSS — inlined to avoid an extra request
 * ============================================================ */
const EDITORIAL_CSS = `
:root {
  --bg: #f7f1e3;
  --surf: #fffaee;
  --ink: #1c1814;
  --inkSoft: #3c352c;
  --muted: #7d735d;
  --edge: #d6c9a8;
  --accent: #9a3b22;
  --flag: #2c3e6e;
  --serif: "Newsreader", "Iowan Old Style", Georgia, serif;
  --sans:  "IBM Plex Sans", "Inter", system-ui, sans-serif;
  --mono:  "IBM Plex Mono", "JetBrains Mono", Menlo, monospace;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--bg); color: var(--ink); font-family: var(--sans); }

.ed { max-width: 1280px; margin: 0 auto; }

/* ---- Masthead ---- */
.ed-masthead {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 36px 80px 18px;
  border-bottom: 2px solid var(--ink);
}
.ed-mast-side {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--muted);
  letter-spacing: 0.32em;
  text-transform: uppercase;
}
.ed-mast-side-r { text-align: right; }
.ed-mast-brand {
  font-family: var(--serif);
  font-style: italic;
  font-size: 17px;
  color: var(--ink);
}

/* ---- Title block ---- */
.ed-title { max-width: 1100px; margin: 0 auto; padding: 80px 80px 36px; }
.ed-kicker {
  font-family: var(--serif); font-style: italic;
  font-size: 19px; color: var(--accent); letter-spacing: 0.02em;
  margin-bottom: 22px;
}
.ed-h1 {
  font-family: var(--serif);
  font-size: 108px; line-height: 0.92; letter-spacing: -0.025em;
  font-weight: 400; color: var(--ink);
  margin: 0;
}
.ed-h1 em { font-style: italic; }

.ed-deck-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 80px;
  margin-top: 56px;
  align-items: end;
}
.ed-deck {
  font-family: var(--serif);
  font-size: 21px; line-height: 1.55;
  color: var(--inkSoft);
  max-width: 580px;
}
.ed-deck em { color: var(--accent); font-style: italic; }
.ed-subject {
  border-left: 3px solid var(--ink);
  padding-left: 22px;
}
.ed-sub-eyebrow {
  font-family: var(--mono);
  font-size: 10.5px; color: var(--muted);
  letter-spacing: 0.22em; text-transform: uppercase;
  margin-bottom: 8px;
}
.ed-sub-rows { display: flex; flex-direction: column; gap: 0; font-family: var(--mono); font-size: 14px; line-height: 1.7; }
.ed-sub-row { display: flex; justify-content: space-between; }
.ed-sub-label { color: var(--muted); }
.ed-sub-value { color: var(--ink); font-weight: 600; }
.ed-sub-value.is-accent { color: var(--accent); }
.ed-sub-filed {
  margin-top: 14px; padding-top: 12px;
  border-top: 1px solid var(--edge);
  font-family: var(--serif); font-style: italic;
  font-size: 14px; color: var(--muted);
}
.ed-sub-filed-id { color: var(--ink); font-style: normal; }

/* Action bar */
.ed-actions {
  margin-top: 56px;
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}
.ed-actions-left { display: flex; gap: 28px; }
.ed-act {
  font-family: var(--sans);
  font-size: 13px; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--ink); background: none; border: none; padding: 0;
  cursor: pointer; text-decoration: none;
  transition: opacity 0.15s ease;
}
.ed-act:hover { opacity: 0.7; }
.ed-act-primary {
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 2px;
}
.ed-act-muted { color: var(--muted); }
.ed-actions-right {
  font-family: var(--serif); font-style: italic;
  font-size: 14px; color: var(--muted);
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.ed-actions-right:hover { opacity: 0.7; }

/* ---- Section template ---- */
.ed-section {
  max-width: 1100px;
  margin: 80px auto 0;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 56px;
}
.ed-section-full {
  max-width: 1100px;
  margin: 100px auto 0;
  padding: 0 80px;
}
.ed-rail-body { min-width: 0; }
.ed-sec-mark {
  font-family: var(--mono);
  font-size: 10.5px; color: var(--accent);
  letter-spacing: 0.22em; text-transform: uppercase;
  margin-bottom: 14px;
}
.ed-sec-title {
  font-family: var(--serif);
  font-size: 36px; font-weight: 500;
  letter-spacing: -0.012em; line-height: 1.05;
  margin: 0;
}
.ed-sec-title em { color: var(--accent); font-style: italic; }
.ed-sec-title-full {
  font-family: var(--serif);
  font-size: 36px; font-weight: 500;
  letter-spacing: -0.012em; line-height: 1.05;
  margin: 0 0 6px;
}
.ed-sec-title-full em { color: var(--accent); font-style: italic; }
.ed-sec-sub {
  font-family: var(--serif); font-style: italic;
  font-size: 14px; color: var(--muted); line-height: 1.55;
  margin: 22px 0 0;
}
.ed-sec-sub-r {
  font-family: var(--serif); font-style: italic;
  font-size: 18px; color: var(--muted); line-height: 1.55;
  margin: 0 0 36px;
}
.ed-sec-sub-full {
  font-family: var(--serif); font-style: italic;
  font-size: 15px; color: var(--muted);
  margin: 0 0 28px;
}
.ed-plate-strong { color: var(--ink); font-style: normal; }

/* ---- § I prose ---- */
.ed-prose-cols {
  column-count: 2; column-gap: 36px;
  font-family: var(--serif);
  font-size: 17.5px; line-height: 1.65;
  color: var(--inkSoft);
}
.ed-para { margin: 0 0 14px; text-indent: 1.2em; }
.ed-para-first { text-indent: 0; }
.ed-dropcap {
  float: left;
  font-family: var(--serif);
  font-size: 84px; line-height: 0.85;
  padding-right: 12px; padding-top: 6px;
  color: var(--accent);
  font-weight: 500;
}

/* ---- Pull-quote ---- */
.ed-pullquote {
  max-width: 920px;
  margin: 80px auto 0;
  padding: 40px 80px;
  border-top: 2px solid var(--ink);
  border-bottom: 2px solid var(--ink);
  text-align: center;
}
.ed-pq-text {
  font-family: var(--serif); font-style: italic;
  font-size: 38px; line-height: 1.2; letter-spacing: -0.01em;
  color: var(--ink);
}
.ed-pq-accent { color: var(--accent); }
.ed-pq-attr {
  margin-top: 22px;
  font-family: var(--mono);
  font-size: 11px; color: var(--muted);
  letter-spacing: 0.22em; text-transform: uppercase;
}

/* ---- § II calibration ---- */
.ed-calib {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  border-top: 1px solid var(--ink);
  padding-top: 28px;
}
.ed-calib-h {
  font-family: var(--serif); font-style: italic;
  font-size: 22px; margin-bottom: 18px;
}
.ed-calib-h-pos { color: var(--accent); }
.ed-calib-h-neg { color: var(--flag); }
.ed-calib-list { margin: 0; padding-left: 0; list-style: none; }
.ed-calib-row {
  display: flex; gap: 16px;
  font-family: var(--serif);
  font-size: 16px; line-height: 1.55;
  color: var(--inkSoft);
  padding: 14px 0;
  border-bottom: 1px dotted var(--edge);
}
.ed-calib-row.is-last { border-bottom: none; }
.ed-calib-row-neg { font-style: italic; }
.ed-calib-num {
  font-family: var(--mono);
  font-size: 11px; color: var(--accent);
  min-width: 24px; padding-top: 4px;
  font-style: normal;
}
.ed-calib-num-neg { color: var(--flag); }
.ed-calib-txt { flex: 1; }

/* ---- § III plate ---- */
.ed-plate-wrap { position: relative; }
.ed-plate-tag-l, .ed-plate-tag-r {
  position: absolute; top: -18px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.22em; text-transform: uppercase;
  background: var(--bg);
  padding: 0 8px;
}
.ed-plate-tag-l { left: -18px; color: var(--muted); }
.ed-plate-tag-r {
  right: -18px; color: var(--accent);
  border: none; cursor: pointer;
  transition: opacity 0.15s ease;
}
.ed-plate-tag-r:hover { opacity: 0.7; }
.ed-plate {
  margin: 0;
  padding: 44px 48px;
  border: 1px solid var(--ink);
  background: var(--surf);
  font-family: var(--mono);
  font-size: 13px; line-height: 1.7;
  color: var(--ink);
  white-space: pre-wrap;
  overflow-x: auto;
}
.ed-plate-caption {
  margin-top: 16px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: var(--serif); font-style: italic;
  font-size: 14px; color: var(--muted);
  gap: 16px;
}
.ed-plate-shortcut {
  font-family: var(--serif); font-style: italic;
  background: none; border: none; padding: 0; cursor: pointer;
  font-size: 14px; color: var(--muted); text-align: left;
  transition: opacity 0.15s ease;
}
.ed-plate-shortcut:hover { opacity: 0.7; }
.ed-plate-shortcut-em {
  color: var(--accent);
  font-style: normal;
  font-family: var(--mono);
  font-size: 12px;
}
.ed-plate-meta { font-family: var(--mono); font-style: normal; font-size: 12px; }

/* ---- § IV agent grid ---- */
.ed-agents {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--ink);
}
.ed-agent {
  padding: 22px 24px;
  border-bottom: 1px solid var(--edge);
  cursor: default;
  transition: background 0.15s ease;
}
.ed-agent-l { border-right: 1px solid var(--edge); }
.ed-agent:hover { background: #f4ede0; }
.ed-agent-top {
  display: flex; justify-content: space-between; align-items: baseline;
}
.ed-agent-name {
  font-family: var(--serif);
  font-size: 22px; font-weight: 600;
  color: var(--ink);
}
.ed-agent-copy {
  font-family: var(--mono);
  font-size: 10.5px; color: var(--accent);
  letter-spacing: 0.14em; text-transform: uppercase;
  background: none; border: none; padding: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.ed-agent-copy:hover { opacity: 0.7; }
.ed-agent-sub {
  font-family: var(--serif); font-style: italic;
  font-size: 13.5px; color: var(--muted);
  margin-top: 4px;
}

/* ---- § V evidence ---- */
.ed-evidence { display: flex; flex-direction: column; }
.ed-ev-row {
  padding: 20px 0;
  border-bottom: 1px solid var(--edge);
}
.ed-ev-top {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-bottom: 6px;
  gap: 12px;
}
.ed-ev-signal {
  font-family: var(--mono);
  font-size: 11.5px; color: var(--inkSoft);
}
.ed-ev-conf {
  font-family: var(--mono);
  font-size: 11px; color: var(--accent);
  letter-spacing: 0.08em;
  white-space: nowrap;
}
.ed-ev-interp {
  font-family: var(--serif);
  font-size: 17px; color: var(--ink);
  line-height: 1.45;
}

/* ---- § VI limits ---- */
.ed-limits { font-family: var(--serif); font-size: 17px; line-height: 1.65; color: var(--inkSoft); }
.ed-limit { margin: 0 0 18px; }
.ed-limit-dash {
  font-family: var(--serif); font-style: italic;
  color: var(--accent);
  margin-right: 4px;
}

/* ---- Colophon ---- */
.ed-colophon {
  max-width: 1100px;
  margin: 100px auto 0;
  padding: 32px 80px 56px;
  border-top: 2px solid var(--ink);
  display: flex; justify-content: space-between;
  font-family: var(--mono);
  font-size: 10.5px; color: var(--muted);
  letter-spacing: 0.18em; text-transform: uppercase;
}

/* ---- Toast (copy confirmations) ---- */
.ed-toast {
  position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(8px);
  background: var(--ink); color: var(--bg);
  padding: 12px 22px; border-radius: 999px;
  font-family: var(--sans); font-size: 13px; font-weight: 500;
  letter-spacing: 0.04em;
  opacity: 0; pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 100;
}
.ed-toast.is-visible { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: auto; }

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .ed-title, .ed-pullquote { padding-left: 40px; padding-right: 40px; }
  .ed-section { grid-template-columns: 1fr; gap: 28px; padding: 0 40px; }
  .ed-section-full, .ed-colophon { padding-left: 40px; padding-right: 40px; }
  .ed-masthead { padding-left: 40px; padding-right: 40px; }
  .ed-h1 { font-size: 76px; }
  .ed-deck-grid { grid-template-columns: 1fr; gap: 28px; }
  .ed-deck { font-size: 18px; }
  .ed-prose-cols { column-count: 1; }
  .ed-pq-text { font-size: 28px; }
  .ed-calib { grid-template-columns: 1fr; gap: 28px; }
  .ed-agents { grid-template-columns: 1fr; }
  .ed-agent-l { border-right: none; }
  .ed-actions { flex-direction: column; align-items: flex-start; gap: 14px; }
  .ed-actions-left { flex-wrap: wrap; gap: 18px; }
}
@media (max-width: 640px) {
  .ed-title, .ed-pullquote, .ed-section, .ed-section-full, .ed-colophon, .ed-masthead { padding-left: 24px; padding-right: 24px; }
  .ed-h1 { font-size: 48px; }
  .ed-sec-title, .ed-sec-title-full { font-size: 28px; }
  .ed-pq-text { font-size: 22px; padding: 0; }
  .ed-pullquote { padding-top: 32px; padding-bottom: 32px; }
  .ed-plate { padding: 32px 24px; }
  .ed-plate-tag-l { left: 0; }
  .ed-plate-tag-r { right: 0; }
  .ed-colophon { flex-direction: column; gap: 8px; }
}
`;

/* ============================================================
 * Editorial JS — interactions only
 * ============================================================ */
const EDITORIAL_JS = `
(function () {
  const $ = (id) => document.getElementById(id);
  const toast = $("ed-toast");
  const uuid = __UUID__;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 1400);
  }

  let soul;
  try {
    soul = JSON.parse(document.getElementById("ed-soul-data").textContent);
  } catch (e) {
    return;
  }

  function copy(text, label) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => showToast(label + " copied ✓"));
  }

  // Wire copy buttons
  if ($("ed-copy-full"))   $("ed-copy-full").onclick   = () => copy(soul.full_prompt,  "Full prompt");
  if ($("ed-copy-short"))  $("ed-copy-short").onclick  = () => copy(soul.short_prompt, "Short prompt");
  if ($("ed-copy-short-2"))$("ed-copy-short-2").onclick= () => copy(soul.short_prompt, "Short prompt");
  if ($("ed-plate-copy"))  $("ed-plate-copy").onclick  = () => copy(soul.full_prompt,  "Full prompt");

  // Download .md — use the raw endpoint
  if ($("ed-download")) $("ed-download").onclick = () => {
    const a = document.createElement("a");
    a.href = "/api/soul/" + uuid + ".md";
    a.download = "agenttune-master-tuning.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Downloading ✓");
  };

  // Per-agent copy buttons
  document.querySelectorAll(".ed-agent-copy").forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const snippet = btn.getAttribute("data-snippet") || "";
      const name = btn.closest(".ed-agent").querySelector(".ed-agent-name").textContent;
      if (snippet) {
        navigator.clipboard.writeText(snippet).then(() => {
          const orig = btn.textContent;
          btn.textContent = "Copied ✓";
          setTimeout(() => { btn.textContent = orig; }, 1400);
        });
      }
    };
  });

  // Smooth-scroll for "skip to the file" anchor
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
`;

/* ============================================================
 * 404 — same editorial bg, simple message
 * ============================================================ */
function notFoundHtml(detail) {
  const msg = detail || "We couldn't find that tuning file. Check the link, or if you just paid, give it 10 seconds and reload.";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="referrer" content="no-referrer" />
  <title>Tuning not found · AgentTune</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&display=swap" />
  <style>
    body { margin: 0; padding: 80px 24px; background: #f7f1e3; color: #1c1814; font-family: "IBM Plex Sans", system-ui, sans-serif; }
    .nf { max-width: 720px; margin: 0 auto; text-align: center; }
    .nf-mark { font-family: "IBM Plex Mono", monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #9a3b22; margin-bottom: 14px; }
    .nf-h { font-family: "Newsreader", serif; font-size: 48px; font-weight: 500; letter-spacing: -0.015em; margin: 0 0 20px; }
    .nf-h em { color: #9a3b22; font-style: italic; }
    .nf-p { font-family: "Newsreader", serif; font-size: 17px; line-height: 1.55; color: #3c352c; margin: 0 0 28px; }
    .nf-link { font-family: "IBM Plex Sans", sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #9a3b22; text-decoration: none; border-bottom: 1px solid #9a3b22; padding-bottom: 2px; }
  </style>
</head>
<body>
  <div class="nf">
    <div class="nf-mark">§ 404 · AgentTune</div>
    <h1 class="nf-h">Tuning <em>not found.</em></h1>
    <p class="nf-p">${esc(msg)}</p>
    <p class="nf-p">If you have the email from your purchase, the link inside is your permanent URL. Lost it? <a class="nf-link" href="mailto:support@agent-tune.com">support@agent-tune.com</a> — we'll resend.</p>
    <a class="nf-link" href="/">← Home</a>
  </div>
</body>
</html>`;
}
