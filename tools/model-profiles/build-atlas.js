#!/usr/bin/env node
'use strict';
/**
 * Builds all 12 cross-family Personality Atlas pages (Plan v3.1 §11 + v3.2
 * plain-language, visual-first, deep fine-print design) into `models/.atlas-staging/`
 * during Stage 0 / Phase A:
 *   - 1 Overview (/research/ai-personality-rankings)
 *   - 6 Per-Test pages:
 *       /research/ai-mbti-personalities
 *       /research/ai-enneagram-personalities
 *       /research/ai-big-five-personalities
 *       /research/ai-disc-personalities
 *       /research/ai-attachment-styles
 *       /research/ai-hexaco-personalities
 *   - 5 Lab/Cohort pages:
 *       /research/what-personality-type-is-{claude,chatgpt,gemini,muse}
 *       /research/what-personality-type-are-open-source-models
 *
 * Imports @site-eng's `tools/model-profiles/render-charts.js`, `buildPage()` from
 * `tools/build-guides.js`, and `enhance()`/`markdown()` from `tools/enhance-pages.js`.
 * Never writes to `research/` or `research/src/` during staging; emits JSON specs,
 * HTML previews, Markdown mirrors (.md), and numeric-only `atlas-<test>.csv` files
 * strictly into `models/.atlas-staging/`.
 */

const fs = require('node:fs');
const path = require('node:path');
const renderCharts = require('./render-charts');
const { buildPage } = require('../build-guides');
const { enhance, markdown } = require('../enhance-pages');

const ROOT = path.resolve(__dirname, '..', '..');
const LIVE_DATA_DIR = path.join(ROOT, 'research', 'data', 'model-profiles');
const LIVE_INDEX_PATH = path.join(LIVE_DATA_DIR, 'index.json');
const FIXTURE_INDEX_PATH = path.join(ROOT, 'models', 'src', 'atlas', 'fixtures', 'index.json');
const ATLAS_SRC_DIR = path.join(ROOT, 'models', 'src', 'atlas');
const TEMPLATE_PATH = path.join(ATLAS_SRC_DIR, '_template.json');
const STAGING_DIR = path.join(ROOT, 'models', '.atlas-staging');
const SITE = 'https://agent-tune.com';

const LAB_ORDER = [
  'Anthropic', 'OpenAI', 'Google', 'xAI', 'Meta',
  'DeepSeek', 'Qwen', 'Moonshot AI', 'Zhipu', 'MiniMax',
  'Mistral', 'NVIDIA', 'Cohere'
];

function normLab(provider) {
  const p = String(provider || '').trim();
  if (p === 'Moonshot') return 'Moonshot AI';
  return p;
}

function normTier(tier) {
  const t = String(tier || '').trim();
  if (!t || t === 'Proprietary') return 'Proprietary';
  if (t === 'Open-weight') return 'Open-weight';
  if (/mix|prop.*open|open.*prop/i.test(t)) return 'Mixed (Proprietary + Open-weight)';
  return t;
}

const LAB_SLUGS = {
  Anthropic: '/research/what-personality-type-is-claude',
  OpenAI: '/research/what-personality-type-is-chatgpt',
  Google: '/research/what-personality-type-is-gemini',
  Meta: '/research/what-personality-type-is-muse'
};

const LAB_COMPANIONS = {
  'what-personality-type-is-claude': [
    { kicker: 'Companion Study', label: 'Opus vs. Fable question-level data', href: '/research/opus-vs-fable-question-level' },
    { kicker: 'Companion Guide', label: 'Claude Code personality guide', href: '/guides/claude-code-personality' }
  ],
  'what-personality-type-is-chatgpt': [
    { kicker: 'Companion Study', label: 'Astra vs. Sol personality data', href: '/research/astra-vs-sol-personality-data' }
  ],
  'what-personality-type-is-gemini': [
    { kicker: 'Companion Guide', label: 'Gemini personality guide', href: '/guides/gemini-personality' }
  ],
  'what-personality-type-is-muse': [
    { kicker: 'Companion Guide', label: 'Muse personality guide', href: '/guides/muse-personality' }
  ],
  'what-personality-type-are-open-source-models': [
    { kicker: 'Companion Guide', label: 'Open-weight system prompt templates', href: '/guides/openrouter-open-source-system-prompt-templates' }
  ]
};

const PER_TEST_CONFIGS = [
  { key: 'mbti', slug: 'ai-mbti-personalities', testHref: '/tests/mbti', short: 'MBTI', label: 'MBTI-Style Preferences', scale: '4 bipolar pairs (-16 to +16)' },
  { key: 'enneagram', slug: 'ai-enneagram-personalities', testHref: '/tests/enneagram', short: 'Enneagram', label: 'Enneagram (9 Types)', scale: '4–20 sum per type' },
  { key: 'big-five', slug: 'ai-big-five-personalities', testHref: '/tests/big-five', short: 'Big Five', label: 'Big Five (OCEAN)', scale: '10–50 raw sum' },
  { key: 'disc', slug: 'ai-disc-personalities', testHref: '/tests/disc', short: 'DISC', label: 'DISC Work Style', scale: '4–20 sum per style' },
  { key: 'attachment', slug: 'ai-attachment-styles', testHref: '/tests/attachment', short: 'Attachment', label: 'Attachment Style', scale: '1.00–7.00 mean' },
  { key: 'ipip-hexaco', slug: 'ai-hexaco-personalities', testHref: '/tests/', short: 'IPIP-HEXACO', label: 'Public-Domain IPIP-HEXACO Proxy', scale: '1.00–5.00 mean' }
];

const JARGON_RE = /\b(H_MM|Semi-crystalline|Crystalline|Fluid|Track B|BAI|Wilson|Miller-Madow)\b|zero-memory elicitation|\bprotocol\b|imported-[a-z0-9-]+-170/i;

const esc = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const f1 = (v) => Number(v).toFixed(1);
const f2 = (v) => Number(v).toFixed(2);
const f3 = (v) => Number(v).toFixed(3);
const pct = (v) => `${Math.round(Number(v) * 100)}%`;

function shortLabel(name, maxLen = 18) {
  if (name.length <= maxLen) return name;
  return name
    .replace('Gemini Pro & Neon', 'Gemini Pro')
    .replace('Gemini Flash & Hydrogen', 'Gemini Flash')
    .replace('Cohere Command', 'Cohere Cmd')
    .slice(0, maxLen);
}

function getLatest(fam) {
  const cps = fam.checkpoints || [];
  return cps.find((c) => c.checkpoint_id === fam.current_checkpoint) || cps[cps.length - 1];
}

function getEarliest(fam) {
  const cps = fam.checkpoints || [];
  return cps[0];
}

function loadAuthoredProse(slug) {
  const candidates = slug === 'ai-personality-rankings'
    ? [path.join(ATLAS_SRC_DIR, 'overview.json'), path.join(ATLAS_SRC_DIR, `${slug}.json`)]
    : [path.join(ATLAS_SRC_DIR, `${slug}.json`)];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, 'utf8'));
    }
  }
  return null;
}

function clarifyAtlasDescription(spec, counts) {
  if (!counts) return spec.description;
  const { primaryCount, familyCount, testedCount } = counts;
  const span = `${primaryCount} primary checkpoints across ${familyCount} families; ${testedCount} tested`;
  const bySlug = {
    'ai-personality-rankings': `Compare ${span} across 6 zero-memory surveys—plus behavior checks, warmth spread, and ties.`,
    'ai-mbti-personalities': `MBTI results: ${span} in fresh zero-memory chats—clear shares, border ties, and shifts.`,
    'ai-enneagram-personalities': `Enneagram (Types 1–9) results: ${span} in fresh chats—Type 5 vs. Type 1 leaders and tie rates.`,
    'ai-big-five-personalities': `Big Five (10–50) scores: ${span} in fresh chats—Openness, Conscientiousness, and Warmth.`,
    'ai-disc-personalities': `DISC work-style results: ${span} in fresh chats—Steadiness vs. Dominance gaps and ties.`,
    'ai-attachment-styles': `Attachment results (1–7 scale): ${span} in fresh chats—Secure vs. midpoint-clamped scores.`,
    'ai-hexaco-personalities': `IPIP-HEXACO proxy results (1–5 scale): ${span} in fresh chats, separate from Big Five.`
  };
  return bySlug[spec.slug] || spec.description;
}

function mergeRelatedLinks(base = [], extras = []) {
  const seen = new Set();
  const out = [];
  for (const item of [...base, ...extras]) {
    if (!item || !item.href || seen.has(item.href)) continue;
    seen.add(item.href);
    out.push(item);
  }
  return out;
}

function applyAuthoredProse(spec, authored, counts) {
  const generatedRelated = Array.isArray(spec.related) ? spec.related : [];
  if (authored) {
    for (const k of ['title', 'description', 'pill', 'h1', 'dek', 'lede', 'answer']) {
      if (authored[k]) spec[k] = authored[k];
    }
    if (Array.isArray(authored.faq) && authored.faq.length) spec.faq = authored.faq;
    if (Array.isArray(authored.related) && authored.related.length) {
      spec.related = mergeRelatedLinks(authored.related, generatedRelated);
    }
    if (Array.isArray(authored.sources) && authored.sources.length) spec.sources = authored.sources;

    const introText = authored.intro_html || (authored.intro ? `<p>${esc(authored.intro)}</p>` : null);
    if (introText && spec.sections?.[0]) {
      if (spec.sections[0].html.includes('<!-- AT_STAT_STRIP_END:')) {
        spec.sections[0].html = spec.sections[0].html.replace(
          /(<!-- AT_STAT_STRIP_END:[^>]+-->)/,
          `$1\n${introText}`
        );
      } else {
        spec.sections[0].html = introText;
      }
    }

    const surprises = authored.biggest_surprises || authored.standouts;
    if (Array.isArray(surprises) && surprises.length) {
      const sSec = spec.sections.find((s) => /what stands out|surprises/i.test(s.h2));
      if (sSec) {
        if (authored.surprises_h2) sSec.h2 = authored.surprises_h2;
        sSec.html = standoutsHtml(surprises.map((x) => ({
          title: x.title || x.headline || '',
          body: esc(x.body || x.detail || '')
        })));
      }
    }

    if (authored.timeline_html || authored.narrative_html) {
      const chartSec = spec.sections.find((s) => s.id !== 'fine-print' && /results|shapes|visual overview/i.test(s.h2));
      if (chartSec) {
        chartSec.html = `${authored.timeline_html || authored.narrative_html}\n${chartSec.html}`;
      }
    }

    if (authored.fine_print_intro) {
      const fpSec = spec.sections.find((s) => s.id === 'fine-print');
      if (fpSec) {
        fpSec.html = fpSec.html.replace(/^<p>[\s\S]*?<\/p>/, `<p>${esc(authored.fine_print_intro)}</p>`);
      }
    }
  }

  spec.description = clarifyAtlasDescription(spec, counts);

  if (spec.dataset) {
    spec.dataset.name = spec.title.replace(/ \| AgentTune$/, '');
    spec.dataset.description = spec.description;
  }
  return spec;
}

function loadIndex(opts = {}) {
  const useFixture = Boolean(opts.fixture) || !fs.existsSync(LIVE_INDEX_PATH);
  const srcPath = opts.inputPath || (useFixture ? FIXTURE_INDEX_PATH : LIVE_INDEX_PATH);
  const data = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
  const template = JSON.parse(fs.readFileSync(TEMPLATE_PATH, 'utf8'));
  let quarantinedTotal = 0;
  data.families = (data.families || []).map((fam) => {
    const rawCps = fam.checkpoints || [];
    const eligible = rawCps.filter((c) => !c.excluded_from_rankings && c.eval_status !== 'quarantined' && Number(c.n_valid || 0) >= 20);
    const droppedHere = rawCps.length - eligible.length;
    const explicitQuar = Array.isArray(fam.quarantined_checkpoints) ? fam.quarantined_checkpoints.length : 0;
    quarantinedTotal += droppedHere + explicitQuar;
    const currentValid = eligible.some((c) => c.checkpoint_id === fam.current_checkpoint);
    return {
      ...fam,
      provider: normLab(fam.provider),
      tier: normTier(fam.tier),
      checkpoints: eligible,
      current_checkpoint: currentValid ? fam.current_checkpoint : (eligible[eligible.length - 1]?.checkpoint_id || '')
    };
  }).filter((fam) => fam.checkpoints.length > 0);
  data._quarantined_excluded = quarantinedTotal;
  return { data, template, srcPath, isFixture: data.data_status === 'stage0_fixture' || useFixture };
}

function mbtiAxisMeans(cp) {
  const m = cp.mbti || {};
  const ad = m.axis_diffs || {};
  const ax = m.axes || {};
  return {
    ei: ad['I-E']?.mean ?? ax.EI ?? null,
    sn: ad['N-S']?.mean ?? ax.SN ?? null,
    tf: ad['T-F']?.mean ?? ax.TF ?? null,
    jp: ad['J-P']?.mean ?? ax.JP ?? null
  };
}

function mbtiShares(cp) {
  const m = cp.mbti || {};
  const tiePct = Math.round(Number(m.tie_rate ?? cp.mbti_tie_rate ?? 0) * 100);
  const clearPct = Math.min(100 - tiePct, Math.round(Number(m.modal_share ?? 0) * 100));
  const otherPct = Math.max(0, 100 - clearPct - tiePct);
  return { clearPct, tiePct, otherPct, allowed: !(m.headline_allowed === false || cp.headline_allowed === false) };
}

function mbtiPlainText(cp) {
  const m = cp.mbti || {};
  const pat = m.modal_pattern || cp.modal_mbti || 'Split';
  const nonTie = m.modal_non_tie && !String(m.modal_non_tie).includes('X') ? m.modal_non_tie : null;
  const { clearPct, tiePct, allowed } = mbtiShares(cp);
  if (!allowed) {
    if (tiePct >= 100) return `All midpoint ties (${pat}; 0% clear, 100% on a trait border)`;
    const labelHint = nonTie && nonTie !== pat ? `${pat} / ${nonTie}` : pat;
    return `Split / border-heavy (${labelHint}; ${clearPct}% clear, ${tiePct}% on a trait border)`;
  }
  return `Tests as ${pat} (${clearPct}% clear, ${tiePct}% on a trait border)`;
}

function mbtiFinePrintText(cp) {
  const m = cp.mbti || {};
  const pat = m.modal_pattern || cp.modal_mbti || 'Withheld';
  const { clearPct, tiePct, allowed } = mbtiShares(cp);
  if (!allowed) {
    return `Withheld (${pat}; ${clearPct}% clear, ${tiePct}% ties — binomial 95% CI guard)`;
  }
  return `${pat} (${clearPct}% clear, ${tiePct}% ties)`;
}

function attachmentPlainText(cp) {
  const a = cp.attachment || {};
  const anx = f2(a.anxiety?.mean ?? 4.0);
  const avd = f2(a.avoidance?.mean ?? 4.0);
  const clamp = a.midpoint_clamp ? ' <span class="qa-tag">Midpoint Clamp</span>' : '';
  return `${esc(a.classification || 'Secure')} (${anx} / ${avd})${clamp}`;
}

function pressTable(label, heads, rows, numCols = []) {
  const numSet = new Set(numCols);
  const ths = heads.map((h, i) => `<th scope="col"${numSet.has(i) ? ' class="num-col"' : ''}>${h}</th>`).join('');
  const trs = rows.map((row) => {
    const cells = row.map((cell, i) => {
      if (i === 0) return `<th scope="row">${cell}</th>`;
      return `<td${numSet.has(i) ? ' class="num-col"' : ''}>${cell}</td>`;
    }).join('');
    return `<tr>${cells}</tr>`;
  }).join('');
  return `<div class="guide-table-wrap" role="region" aria-label="${esc(label)}" tabindex="0"><table class="press-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function statStripHtml(id, cards) {
  const items = cards.map((c) => (
    `<div class="research-stat-card"${c.color ? ` style="border-top-color: ${c.color};"` : ''}>` +
    `<div class="research-stat-num">${esc(c.num)}</div>` +
    `<div class="research-stat-label">${esc(c.label)}</div>` +
    `<div class="research-stat-note">${c.note}</div></div>`
  )).join('');
  return `<!-- AT_STAT_STRIP_START:${id} --><div class="research-stat-strip" data-chart-id="${esc(id)}">${items}</div><!-- AT_STAT_STRIP_END:${id} -->`;
}

function standoutsHtml(cards) {
  return cards.map((c) => (
    `<div style="padding:14px 16px;border-left:3px solid var(--accent-text);background:var(--well);margin-bottom:12px;">` +
    `<div style="font-weight:600;color:var(--ink);margin-bottom:4px;">${esc(c.title)}</div>` +
    `<div style="font-size:14.5px;line-height:1.55;color:var(--ink-2);">${c.body}</div></div>`
  )).join('\n');
}

function familyDirectoryGridHtml(families, caption = 'All 25 tested AI model families') {
  const links = families.map((f) => {
    const c = getLatest(f);
    return `<a href="/models/${esc(f.family_slug)}" style="display:block;padding:10px 12px;border:1px solid var(--border);border-radius:3px;text-decoration:none;color:inherit;background:var(--surface);">` +
      `<div style="font-weight:600;color:var(--ink);font-size:14px;">${esc(f.name)}</div>` +
      `<div style="font-size:12px;color:var(--muted);">${esc(f.provider)} · ${esc(c.label)} · ${esc(renderCharts.plainConsistencyLabel(c.crystallinity_tier))}</div></a>`;
  }).join('\n');
  return `<p>${esc(caption)} — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:</p>` +
    `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(205px,1fr));gap:10px;margin:14px 0;">${links}</div>`;
}

function roseWheelGridHtml(families, kind, scaleNote) {
  const tiles = families.map((f) => {
    const c = getLatest(f);
    const svg = renderCharts.renderCardWheel(f, kind);
    return `<div style="border:1px solid var(--border);border-top:1.5px solid var(--ink);border-radius:3px;padding:12px;background:var(--surface);">` +
      `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:6px;">` +
      `<a href="/models/${esc(f.family_slug)}" style="font-weight:600;color:var(--ink);text-decoration:none;">${esc(f.name)}</a>` +
      `<span style="font-size:11.5px;color:var(--muted);">${esc(c.label)}</span></div>` +
      `<div class="research-chart-scroll" tabindex="0" role="region" aria-label="${esc(f.name)} ${esc(kind)} shape">${svg}</div>` +
      `</div>`;
  }).join('\n');
  return `<p style="font-size:13.5px;color:var(--muted);">${esc(scaleNote)} Multi-version families show their earliest version as a dashed outline behind the latest filled shape.</p>` +
    `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:14px;margin:16px 0;">${tiles}</div>`;
}

function atlasActionLinksHtml(testHref = '/tests/', companions = []) {
  const items = [
    { href: testHref, label: 'Take the test yourself' },
    { href: '/library/', label: 'Browse tuning templates' },
    { href: '/tools/custom-instructions-generator', label: 'Build custom instructions' },
    ...companions.map((c) => ({ href: c.href, label: c.label }))
  ];
  const links = items.map((x) => `<a href="${esc(x.href)}">${esc(x.label)}</a>`).join(' · ');
  return `<p style="font-size:14px;padding:10px 14px;border:1px solid var(--border);background:var(--well);border-radius:3px;margin:14px 0;"><strong>Next steps:</strong> ${links}</p>`;
}

function downloadLinksHtml(csvFile, label) {
  return `<p><strong>Open Data (Numeric-Only Exports, Zero Item Strings):</strong> <a href="/research/data/model-profiles/${esc(csvFile)}">Download ${esc(label)} CSV (<code>${esc(csvFile)}</code>)</a> · <a href="/research/data/model-profiles/index.json">Download 25-Family Index JSON (<code>index.json</code>)</a>. All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and <code>instrumentId</code>/<code>definitionHash</code> metadata only.</p>`;
}

function buildFinePrintSection({ idPrefix, families, template, testKey = null, tableHtml, extraHtml = '', csvFile, csvLabel, includeAnchors = false }) {
  const guard = testKey && template.test_validity_guards?.[testKey]
    ? `<p><strong>Instrument Validity Note (${esc(template.test_validity_guards[testKey].scale)}):</strong> ${esc(template.test_validity_guards[testKey].note)}</p>`
    : '';
  const points = (template.epistemic_block_4pt || []).map((pt) => (
    `<div><strong>${esc(pt.title)}:</strong> ${esc(pt.detail)} (<a href="${esc(pt.href)}">study details</a>)</div>`
  )).join('');

  const anchorsBlock = includeAnchors ? buildImportedAnchorsHtml(families) : '';

  return {
    id: 'fine-print',
    h2: 'The fine print: how we tested and what the numbers mean',
    html: [
      `<p>Full technical audit under the unified 230-item <code>model-profiles-v1</code> protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, <code>LicenseRef-IPIP-Public-Domain</code>), reporting sample size <code>n</code>, 1,000-resample bootstrap 95% CIs, Miller-Madow item entropy (<code>H_MM</code> bits &amp; Crystalline/Semi-crystalline/Fluid tiers), exact tie rates, neutral-midpoint rates, and <code>BAI</code>. Quarantined checkpoints with <code>n &lt; 20</code> are excluded from rankings and rollups. Never interpret questionnaire scores as evidence that an AI model "is" a human personality type.</p>`,
      `<section id="fine-print-${esc(idPrefix)}-table" class="fine-print-block"><h3>Per-Family Technical Table (95% CIs, n, Ties &amp; H_MM)</h3>${guard}${tableHtml}</section>`,
      extraHtml ? `<section id="fine-print-${esc(idPrefix)}-methods" class="fine-print-block"><h3>Aggregates, Shifts &amp; Methods</h3>${extraHtml}</section>` : '',
      anchorsBlock,
      `<section id="fine-print-${esc(idPrefix)}-validity" class="fine-print-block"><h3>4-Point Epistemic &amp; Validity Audit</h3><div class="epistemic-ledger" role="note" aria-label="Four psychometric validity boundaries"><div class="epistemic-ledger-title">Validity Limits &amp; Epistemic Guardrails (4-Point Check)</div><div class="epistemic-ledger-grid">${points}</div></div></section>`,
      downloadLinksHtml(csvFile, csvLabel)
    ].filter(Boolean).join('\n')
  };
}

function buildImportedAnchorsHtml(families) {
  const anchors = [];
  for (const f of families) {
    for (const a of f.historical_anchors || []) anchors.push({ fam: f, anchor: a });
  }
  if (!anchors.length) return '';
  const tbl = pressTable(
    'Imported 170-item cohort anchors (hexaco: null)',
    ['Family', 'Checkpoint', 'Imported Protocol', 'n', 'B5 O / C / E / A / N (10–50)', 'HEXACO'],
    anchors.slice(0, 16).map(({ fam, anchor }) => [
      `<a href="/models/${esc(fam.family_slug)}">${esc(fam.name)}</a>`,
      esc(anchor.label),
      `<code>${esc(anchor.protocol_id)}</code>`,
      String(anchor.n_valid),
      `${f1(anchor.big_five.O)} · ${f1(anchor.big_five.C)} · ${f1(anchor.big_five.E)} · ${f1(anchor.big_five.A)} · ${f1(anchor.big_five.N)}`,
      '<code>null</code> (170-item anchor)'
    ]),
    [3]
  );
  return `<section id="fine-print-anchors" class="fine-print-block"><h3>Imported Sept/May &amp; Nov-2026 170-Item Legacy Anchors</h3><p>Earlier 2026 cohorts ran 170 items without IPIP-HEXACO-60. They are preserved strictly as separate <code>imported-nov2026-170</code> / <code>imported-sep2026-170</code> anchors (<code>hexaco: null</code>) and are never spliced onto <code>model-profiles-v1</code> lines.</p>${tbl}</section>`;
}

function makeDatasetJsonLd(spec, csvFile, desc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${SITE}${spec.route}#dataset`,
    name: spec.title.replace(/ \| AgentTune$/, ''),
    description: desc,
    url: `${SITE}${spec.route}`,
    creator: { '@type': 'Person', name: 'Bernard Huang', url: 'https://github.com/bernardjhuang' },
    license: 'https://opensource.org/license/mit',
    isAccessibleForFree: true,
    datePublished: spec.published,
    dateModified: spec.updated,
    measurementTechnique: 'Fixed zero-memory assistant self-report across 6 inventories (model-profiles-v1) with 1,000-resample bootstrap 95% CIs and Miller-Madow entropy',
    variableMeasured: [
      { '@type': 'PropertyValue', name: 'Big Five (IPIP-50)', unitText: '10-50 sum' },
      { '@type': 'PropertyValue', name: 'IPIP-HEXACO Proxy (60-item)', unitText: '1.00-5.00 mean' },
      { '@type': 'PropertyValue', name: 'MBTI (OEJTS 1.2)', unitText: '-16..+16 axis balance & tie rate' },
      { '@type': 'PropertyValue', name: 'DISC (ODAT)', unitText: '4-20 sum' },
      { '@type': 'PropertyValue', name: 'Enneagram (OEPS Types 1-9)', unitText: '4-20 sum' },
      { '@type': 'PropertyValue', name: 'Attachment (ECR-R Anxiety & Avoidance)', unitText: '1.00-7.00 mean' },
      { '@type': 'PropertyValue', name: 'Big Five Miller-Madow Item Entropy (H_MM)', unitText: 'bits (0..2.322)' }
    ],
    distribution: [
      { '@type': 'DataDownload', contentUrl: `${SITE}/research/data/model-profiles/${csvFile}`, encodingFormat: 'text/csv' },
      { '@type': 'DataDownload', contentUrl: `${SITE}/research/data/model-profiles/index.json`, encodingFormat: 'application/json' }
    ]
  };
}

function assertSectionsPlainLanguage(spec) {
  if (!spec.title || spec.title.length > 60 || spec.title.length < 30) {
    throw new Error(`${spec.slug}: title length ${spec.title?.length} must be 30..60 chars`);
  }
  if (!spec.description || spec.description.length > 160 || spec.description.length < 70) {
    throw new Error(`${spec.slug}: description length ${spec.description?.length} must be 70..160 chars`);
  }
  const fields = [spec.title, spec.description, spec.pill, spec.h1, spec.dek, spec.lede, spec.answer];
  for (const val of fields) {
    if (val && JARGON_RE.test(String(val))) {
      throw new Error(`${spec.slug}: front-matter field contains banned jargon: ${String(val).match(JARGON_RE)[0]}`);
    }
  }
  for (const s of spec.sections || []) {
    if (s.id === 'fine-print') continue;
    const stripped = String(s.html || '').replace(/<[^>]+>/g, ' ');
    if (JARGON_RE.test(stripped) || JARGON_RE.test(s.h2 || '')) {
      const m = stripped.match(JARGON_RE) || (s.h2 || '').match(JARGON_RE);
      throw new Error(`${spec.slug} section "${s.h2}" contains banned jargon in Sections 1–6: ${m[0]}`);
    }
  }
}

function computeLabRollups(families) {
  return LAB_ORDER.map((lab) => {
    const members = families.filter((f) => f.provider === lab);
    const latests = members.map(getLatest);
    const meanOf = (fn) => latests.reduce((a, c) => a + fn(c), 0) / Math.max(1, latests.length);
    const propCount = members.filter((m) => m.tier === 'Proprietary').length;
    const openCount = members.filter((m) => m.tier === 'Open-weight').length;
    const mixedCount = members.length - propCount - openCount;
    return {
      lab, members, count: members.length, propCount, mixedCount, openCount,
      b5O: meanOf((c) => c.big_five.O.mean), b5C: meanOf((c) => c.big_five.C.mean),
      b5E: meanOf((c) => c.big_five.E.mean), b5A: meanOf((c) => c.big_five.A.mean),
      b5N: meanOf((c) => c.big_five.N.mean),
      hxH: meanOf((c) => c.ipip_hexaco.H.mean), hxC: meanOf((c) => c.ipip_hexaco.C.mean),
      discD: meanOf((c) => c.disc.D.mean), discS: meanOf((c) => c.disc.S.mean), discC: meanOf((c) => c.disc.C.mean),
      hmm: meanOf((c) => c.entropy_b5_hmm),
      anx: meanOf((c) => c.attachment.anxiety.mean), avd: meanOf((c) => c.attachment.avoidance.mean),
      mbtiTieRate: meanOf((c) => c.mbti?.tie_rate ?? c.mbti_tie_rate ?? 0)
    };
  });
}

function computeMovers(families) {
  return families
    .filter((f) => (f.checkpoints || []).length > 1)
    .map((f) => {
      const first = getEarliest(f), last = getLatest(f);
      const dA = last.big_five.A.mean - first.big_five.A.mean;
      const dN = last.big_five.N.mean - first.big_five.N.mean;
      const dH = last.ipip_hexaco.H.mean - first.ipip_hexaco.H.mean;
      const dEnt = last.entropy_b5_hmm - first.entropy_b5_hmm;
      const mag = Math.abs(dA) + Math.abs(dN) + Math.abs(dEnt) * 10;
      return { fam: f, first, last, dA, dN, dH, dEnt, mag };
    })
    .sort((a, b) => b.mag - a.mag);
}

// ---------- Collision-Free Plane Scatter Helper ----------
function buildNonOverlappingPlane({ id, title, desc, points, caption }) {
  const padL = 50, padR = 20, padT = 14, padB = 30, W = 600, H = 380;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const px = (v) => padL + ((v - 1) / 4) * plotW;
  const py = (v) => padT + (1 - (v - 1) / 4) * plotH;
  const cutX = px(4), cutY = py(4);

  const overlaps = (a, b) => a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;

  // Exclude dots, dashed cutoff lines (x=4, y=4), and quadrant labels
  const dotBoxes = points.map((pt) => {
    const cx = px(Math.min(4.85, Math.max(1.05, pt.x)));
    const cy = py(Math.min(4.85, Math.max(1.05, pt.y)));
    return { x0: cx - 9, x1: cx + 9, y0: cy - 9, y1: cy + 9 };
  });
  const thresholdBoxes = [
    { x0: padL, x1: W - padR, y0: cutY - 9, y1: cutY + 9 },
    { x0: cutX - 9, x1: cutX + 9, y0: padT, y1: padT + plotH }
  ];
  const quadrantBoxes = [
    { x0: 215, x1: 282, y0: 26, y1: 45 },
    { x0: 472, x1: 556, y0: 26, y1: 45 },
    { x0: 222, x1: 276, y0: 311, y1: 330 },
    { x0: 484, x1: 544, y0: 311, y1: 330 }
  ];

  // Dense multi-ring candidate offsets around each point
  const candidateOffsets = [];
  for (const r of [14, 24, 38, 54, 72, 92, 114, 136]) {
    for (const [ux, uy, anc] of [
      [1, -0.35, 'start'], [-1, -0.35, 'end'],
      [1, 0.7, 'start'], [-1, 0.7, 'end'],
      [0.35, -1, 'start'], [-0.35, -1, 'end'],
      [0.35, 1, 'start'], [-0.35, 1, 'end'],
      [1, 0.15, 'start'], [-1, 0.15, 'end'],
      [0, -1, 'middle'], [0, 1.15, 'middle']
    ]) {
      candidateOffsets.push([Math.round(ux * r), Math.round(uy * r), anc]);
    }
  }

  const placedBoxes = [];
  const leaders = [];
  // Sort deterministically so boundary points place cleanly first
  const ordered = points
    .map((pt, idx) => ({ pt, idx }))
    .sort((a, b) => b.pt.y - a.pt.y || a.pt.x - b.pt.x);

  const laidOutByIdx = new Array(points.length);
  for (const { pt, idx } of ordered) {
    const xv = Math.min(4.85, Math.max(1.05, pt.x));
    const yv = Math.min(4.85, Math.max(1.05, pt.y));
    const cx = px(xv), cy = py(yv);
    const w = Math.ceil(pt.label.length * 6.5 + 8);
    let chosen = null;
    for (const cand of candidateOffsets) {
      const [dx, dy, anchor] = cand;
      const tx = cx + dx, ty = cy + dy;
      const x0 = anchor === 'start' ? tx - 2 : (anchor === 'end' ? tx - w + 2 : tx - w / 2);
      const x1 = x0 + w;
      const y0 = ty - 11, y1 = ty + 4;
      if (x0 < padL + 4 || x1 > W - padR - 4 || y0 < padT + 4 || y1 > padT + plotH - 4) continue;
      const box = { x0, x1, y0, y1 };
      if (dotBoxes.some((b) => overlaps(box, b))) continue;
      if (thresholdBoxes.some((b) => overlaps(box, b))) continue;
      if (quadrantBoxes.some((b) => overlaps(box, b))) continue;
      if (placedBoxes.some((b) => overlaps(box, b))) continue;
      chosen = { dx, dy, anchor, tx, ty, box };
      break;
    }
    if (!chosen) {
      // Fallback: scan vertical slots in clear space on left/right of plot
      const anchor = cx < W * 0.5 ? 'start' : 'end';
      const tx = anchor === 'start' ? padL + 10 : W - padR - 10;
      for (let ty = padT + 18; ty <= padT + plotH - 8; ty += 16) {
        const x0 = anchor === 'start' ? tx - 2 : tx - w + 2;
        const box = { x0, x1: x0 + w, y0: ty - 11, y1: ty + 4 };
        if (dotBoxes.some((b) => overlaps(box, b))) continue;
        if (thresholdBoxes.some((b) => overlaps(box, b))) continue;
        if (quadrantBoxes.some((b) => overlaps(box, b))) continue;
        if (placedBoxes.some((b) => overlaps(box, b))) continue;
        chosen = { dx: tx - cx, dy: ty - cy, anchor, tx, ty, box };
        break;
      }
      if (!chosen) chosen = { dx: 12, dy: -12, anchor: 'start', tx: cx + 12, ty: cy - 12, box: { x0: cx + 10, x1: cx + 10 + w, y0: cy - 23, y1: cy - 8 } };
    }
    placedBoxes.push(chosen.box);
    if (Math.hypot(chosen.dx, chosen.dy) > 18) {
      const lx2 = chosen.anchor === 'start' ? chosen.tx - 3 : (chosen.anchor === 'end' ? chosen.tx + 3 : chosen.tx);
      leaders.push(`<line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${lx2.toFixed(1)}" y2="${(chosen.ty - 3).toFixed(1)}" stroke="#cfc6b6" stroke-width="0.9"/>`);
    }
    laidOutByIdx[idx] = { ...pt, x: xv, y: yv, dx: chosen.dx, dy: chosen.dy, anchor: chosen.anchor };
  }

  let svg = renderCharts.plane({
    id, title, desc, points: laidOutByIdx, lo: 1, hi: 5, cut: 4,
    xLabel: 'Anxiety (1–7 scale, showing 1–5)',
    yLabel: 'Avoidance (1–7 scale, showing 1–5)'
  });
  if (leaders.length) {
    svg = svg.replace('<circle cx=', leaders.join('') + '<circle cx=');
  }
  return renderCharts.wrapChart(id, svg, caption);
}

// ---------- CSV Writers (Numeric-Only, Zero Item Strings) ----------
function toCsv(headers, rows) {
  const clean = (v) => {
    const s = String(v ?? '');
    return /[,"\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [headers.join(','), ...rows.map((r) => r.map(clean).join(','))].join('\n') + '\n';
}

function writeCsvFiles(families, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const files = {};
  files['atlas-overview.csv'] = toCsv(
    ['family_slug', 'provider', 'tier', 'checkpoint_id', 'n_valid', 'b5_O', 'b5_C', 'b5_E', 'b5_A', 'b5_N', 'hx_H_1to5', 'hx_E_1to5', 'hx_X_1to5', 'hx_A_1to5', 'hx_C_1to5', 'hx_O_1to5', 'entropy_hmm_bits', 'mbti_tie_rate', 'mbti_headline_allowed', 'disc_D', 'disc_S', 'disc_C', 'enneagram_tie_rate', 'att_anxiety', 'att_avoidance', 'att_midpoint_clamp'],
    families.map((f) => {
      const c = getLatest(f);
      return [
        f.family_slug, f.provider, f.tier, c.checkpoint_id, c.n_valid,
        c.big_five.O.mean, c.big_five.C.mean, c.big_five.E.mean, c.big_five.A.mean, c.big_five.N.mean,
        c.ipip_hexaco.H.mean, c.ipip_hexaco.E.mean, c.ipip_hexaco.X.mean, c.ipip_hexaco.A.mean, c.ipip_hexaco.C.mean, c.ipip_hexaco.O.mean,
        c.entropy_b5_hmm, c.mbti?.tie_rate ?? c.mbti_tie_rate, c.mbti?.headline_allowed ? 1 : 0,
        c.disc.D.mean, c.disc.S.mean, c.disc.C.mean, c.enneagram.tie_rate,
        c.attachment.anxiety.mean, c.attachment.avoidance.mean, c.attachment.midpoint_clamp ? 1 : 0
      ];
    })
  );
  files['atlas-big-five.csv'] = toCsv(
    ['family_slug', 'provider', 'checkpoint_id', 'n_valid', 'O_mean', 'O_ci_low', 'O_ci_high', 'C_mean', 'C_ci_low', 'C_ci_high', 'E_mean', 'E_ci_low', 'E_ci_high', 'A_mean', 'A_ci_low', 'A_ci_high', 'N_mean', 'N_ci_low', 'N_ci_high', 'delta_A_earliest_to_latest', 'entropy_hmm_bits'],
    families.map((f) => {
      const first = getEarliest(f), c = getLatest(f);
      return [
        f.family_slug, f.provider, c.checkpoint_id, c.n_valid,
        c.big_five.O.mean, c.big_five.O.ci_low, c.big_five.O.ci_high,
        c.big_five.C.mean, c.big_five.C.ci_low, c.big_five.C.ci_high,
        c.big_five.E.mean, c.big_five.E.ci_low, c.big_five.E.ci_high,
        c.big_five.A.mean, c.big_five.A.ci_low, c.big_five.A.ci_high,
        c.big_five.N.mean, c.big_five.N.ci_low, c.big_five.N.ci_high,
        f2(c.big_five.A.mean - first.big_five.A.mean), c.entropy_b5_hmm
      ];
    })
  );
  files['atlas-hexaco.csv'] = toCsv(
    ['family_slug', 'provider', 'checkpoint_id', 'n_valid', 'scale_min', 'scale_max', 'H_mean', 'H_ci_low', 'H_ci_high', 'E_mean', 'E_ci_low', 'E_ci_high', 'X_mean', 'X_ci_low', 'X_ci_high', 'A_mean', 'A_ci_low', 'A_ci_high', 'C_mean', 'C_ci_low', 'C_ci_high', 'O_mean', 'O_ci_low', 'O_ci_high', 'delta_H_earliest_to_latest'],
    families.map((f) => {
      const first = getEarliest(f), c = getLatest(f);
      return [
        f.family_slug, f.provider, c.checkpoint_id, c.n_valid, 1, 5,
        c.ipip_hexaco.H.mean, c.ipip_hexaco.H.ci_low, c.ipip_hexaco.H.ci_high,
        c.ipip_hexaco.E.mean, c.ipip_hexaco.E.ci_low, c.ipip_hexaco.E.ci_high,
        c.ipip_hexaco.X.mean, c.ipip_hexaco.X.ci_low, c.ipip_hexaco.X.ci_high,
        c.ipip_hexaco.A.mean, c.ipip_hexaco.A.ci_low, c.ipip_hexaco.A.ci_high,
        c.ipip_hexaco.C.mean, c.ipip_hexaco.C.ci_low, c.ipip_hexaco.C.ci_high,
        c.ipip_hexaco.O.mean, c.ipip_hexaco.O.ci_low, c.ipip_hexaco.O.ci_high,
        f2(c.ipip_hexaco.H.mean - first.ipip_hexaco.H.mean)
      ];
    })
  );
  files['atlas-mbti.csv'] = toCsv(
    ['family_slug', 'provider', 'checkpoint_id', 'n_valid', 'modal_share', 'runner_up_share', 'tie_rate', 'headline_allowed', 'axis_I_minus_E', 'axis_N_minus_S', 'axis_T_minus_F', 'axis_J_minus_P', 'delta_tie_rate_earliest_to_latest'],
    families.map((f) => {
      const first = getEarliest(f), c = getLatest(f), m = c.mbti || {}, ax = mbtiAxisMeans(c);
      return [
        f.family_slug, f.provider, c.checkpoint_id, c.n_valid,
        m.modal_share ?? '', m.runner_up_share ?? '', m.tie_rate ?? c.mbti_tie_rate,
        m.headline_allowed ? 1 : 0,
        ax.ei ?? '', ax.sn ?? '', ax.tf ?? '', ax.jp ?? '',
        f2((m.tie_rate ?? c.mbti_tie_rate) - (first.mbti_tie_rate ?? 0))
      ];
    })
  );
  files['atlas-disc.csv'] = toCsv(
    ['family_slug', 'provider', 'checkpoint_id', 'n_valid', 'D_mean', 'D_ci_low', 'D_ci_high', 'I_mean', 'I_ci_low', 'I_ci_high', 'S_mean', 'S_ci_low', 'S_ci_high', 'C_mean', 'C_ci_low', 'C_ci_high', 'tie_rate', 'b5_N_mean'],
    families.map((f) => {
      const c = getLatest(f);
      return [
        f.family_slug, f.provider, c.checkpoint_id, c.n_valid,
        c.disc.D.mean, c.disc.D.ci_low, c.disc.D.ci_high,
        c.disc.I.mean, c.disc.I.ci_low, c.disc.I.ci_high,
        c.disc.S.mean, c.disc.S.ci_low, c.disc.S.ci_high,
        c.disc.C.mean, c.disc.C.ci_low, c.disc.C.ci_high,
        c.disc.tie_rate, c.big_five.N.mean
      ];
    })
  );
  files['atlas-enneagram.csv'] = toCsv(
    ['family_slug', 'provider', 'checkpoint_id', 'n_valid', 'top1_type', 'top1_mean', 'top1_ci_low', 'top1_ci_high', 'top2_type', 'top2_mean', 'top3_type', 'top3_mean', 'tie_rate', 'headline_allowed'],
    families.map((f) => {
      const c = getLatest(f), t = c.enneagram.top_types || [];
      return [
        f.family_slug, f.provider, c.checkpoint_id, c.n_valid,
        t[0]?.type ?? '', t[0]?.mean ?? '', t[0]?.ci_low ?? '', t[0]?.ci_high ?? '',
        t[1]?.type ?? '', t[1]?.mean ?? '', t[2]?.type ?? '', t[2]?.mean ?? '',
        c.enneagram.tie_rate, c.enneagram.headline_allowed ? 1 : 0
      ];
    })
  );
  files['atlas-attachment.csv'] = toCsv(
    ['family_slug', 'provider', 'checkpoint_id', 'n_valid', 'anxiety_mean', 'anxiety_ci_low', 'anxiety_ci_high', 'avoidance_mean', 'avoidance_ci_low', 'avoidance_ci_high', 'neutral_rate', 'midpoint_clamp'],
    families.map((f) => {
      const c = getLatest(f);
      return [
        f.family_slug, f.provider, c.checkpoint_id, c.n_valid,
        c.attachment.anxiety.mean, c.attachment.anxiety.ci_low, c.attachment.anxiety.ci_high,
        c.attachment.avoidance.mean, c.attachment.avoidance.ci_low, c.attachment.avoidance.ci_high,
        c.neutral_rate, c.attachment.midpoint_clamp ? 1 : 0
      ];
    })
  );
  for (const [name, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(outDir, name), content);
  }
  return Object.keys(files);
}

// ---------- 1. Overview Page (/research/ai-personality-rankings) ----------
function buildOverviewSpec(data, template) {
  const families = data.families;
  const labs = computeLabRollups(families);
  const movers = computeMovers(families);
  const sortedByA = [...families].sort((a, b) => getLatest(b).big_five.A.mean - getLatest(a).big_five.A.mean);
  const topA = sortedByA[0], lowA = sortedByA[sortedByA.length - 1];
  const sortedByEnt = [...families].sort((a, b) => getLatest(a).entropy_b5_hmm - getLatest(b).entropy_b5_hmm);
  const lowEnt = sortedByEnt[0], highEnt = sortedByEnt[sortedByEnt.length - 1];
  const totalCheckpoints = families.reduce((acc, f) => acc + (f.checkpoints || []).length, 0);

  const figHeatmap = renderCharts.wrapChart(
    'atlas-overview-heatmap',
    renderCharts.heatmapMatrix({
      id: 'atlas-overview-heatmap',
      title: '25 AI Families Across 6 Personality Tests (0–100 Index)',
      desc: 'Side-by-side 0 to 100 summary index across Big Five Warmth, HEXACO Sincerity, MBTI Clear Share, DISC Steadiness/Conscientiousness, Enneagram Clarity, and Attachment Security for all 25 model families.',
      rows: sortedByA.map((f) => shortLabel(f.name, 22)),
      cols: ['B5 Agree', 'HX-H (1-5)', 'MBTI Clear', 'DISC S/C', 'Ennea Clr', 'Att. Sec'],
      values: sortedByA.map((f) => {
        const c = getLatest(f);
        return [
          ((c.big_five.A.mean - 10) / 40) * 100,
          ((c.ipip_hexaco.H.mean - 1) / 4) * 100,
          (c.mbti?.modal_share ?? 0.5) * 100,
          (((c.disc.S.mean + c.disc.C.mean) / 2 - 4) / 16) * 100,
          (1 - (c.enneagram?.tie_rate ?? 0.5)) * 100,
          Math.max(0, Math.min(100, (1 - ((c.attachment.anxiety.mean + c.attachment.avoidance.mean - 2) / 12)) * 100))
        ].map((v) => Math.round(v * 10) / 10);
      }),
      min: 0, max: 100, decimals: 1
    }),
    'Figure 1. Cross-family 25 × 6 normalized index (0–100) sorted by Big Five Agreeableness. Exact native scales appear in the Fine Print section below.'
  );

  const entBars = renderCharts.wrapChart(
    'atlas-overview-consistency',
    renderCharts.horizontalBars({
      id: 'atlas-overview-consistency',
      title: 'Answer Consistency Across 25 AI Families (Lower = Steadier)',
      desc: 'Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) across all 25 AI model families.',
      rows: sortedByEnt.map((f) => {
        const c = getLatest(f);
        return {
          label: shortLabel(f.name, 22),
          sub: `${f.tier} · ${renderCharts.plainConsistencyLabel(c.crystallinity_tier)}`,
          value: Number(c.entropy_b5_hmm),
          color: f.color || (f.tier === 'Proprietary' ? '#a8482a' : '#3a72c4')
        };
      }),
      min: 0,
      max: Math.max(1.65, ...sortedByEnt.map((f) => Math.ceil((getLatest(f).entropy_b5_hmm + 0.15) * 10) / 10)),
      decimals: 3,
      unit: ' b',
      cutoff: 0.20,
      cutoffLabel: 'Very steady (< 0.20)'
    }),
    'Figure 2. Run-to-run answer spread across all 25 families (lower values mean the model gives nearly identical answers across fresh chats).'
  );

  const testCardsHtml = `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:14px 0;">${PER_TEST_CONFIGS.map((t) => (
    `<a href="/research/${esc(t.slug)}" style="display:block;padding:12px 14px;border:1px solid var(--border);border-top:2px solid var(--ink);border-radius:3px;text-decoration:none;color:inherit;background:var(--surface);">` +
    `<div style="font-weight:600;color:var(--ink);">${esc(t.label)} →</div>` +
    `<div style="font-size:12.5px;color:var(--muted);margin-top:3px;">${esc(t.scale)} across 25 families</div></a>`
  )).join('')}</div>`;

  const labTablePlain = pressTable(
    'Per-lab summary across 13 labs',
    ['Lab / Rollup', 'Families', 'Big Five O / C / E / A / N (10–50)', 'HEXACO H / C (1–5)', 'Answer Spread (bits)', 'MBTI Border Rate'],
    labs.map((l) => {
      const labLink = LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab);
      const tierSummary = l.mixedCount > 0 ? `${l.propCount}P / ${l.mixedCount}M / ${l.openCount}O` : `${l.propCount}P / ${l.openCount}O`;
      return [
        labLink, `${l.count} (${tierSummary})`,
        `${f1(l.b5O)} · ${f1(l.b5C)} · ${f1(l.b5E)} · <strong>${f1(l.b5A)}</strong> · ${f1(l.b5N)}`,
        `${f2(l.hxH)} / ${f2(l.hxC)}`, f3(l.hmm), pct(l.mbtiTieRate)
      ];
    }),
    [4, 5]
  );

  const moversTablePlain = pressTable(
    'Biggest version-to-version movers',
    ['Family', 'Earliest → Latest', 'Agreeableness Shift (10–50)', 'Neuroticism Shift (10–50)', 'HEXACO H Shift (1–5)', 'Spread Shift'],
    movers.slice(0, 12).map((m) => [
      `<a href="/models/${esc(m.fam.family_slug)}">${esc(m.fam.name)}</a>`,
      `${esc(m.first.label)} → ${esc(m.last.label)}`,
      `${m.dA >= 0 ? '+' : ''}${f1(m.dA)}`, `${m.dN >= 0 ? '+' : ''}${f1(m.dN)}`,
      `${m.dH >= 0 ? '+' : ''}${f2(m.dH)}`, `${m.dEnt >= 0 ? '+' : ''}${f3(m.dEnt)}`
    ]),
    [2, 3, 4, 5]
  );

  const finePrintMasterTable = pressTable(
    '25 model families technical audit table',
    ['Family (Profile)', 'Lab / Tier', 'Latest (n)', 'B5 A (10–50) [95% CI]', 'HX-H (1–5) [95% CI]', 'H_MM · Crystallinity', 'MBTI (Guard)', 'DISC · Ennea · Att.'],
    sortedByA.map((f) => {
      const c = getLatest(f);
      return [
        `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
        `${esc(f.provider)} · ${esc(f.tier)}`,
        `${esc(c.label)} (n=${c.n_valid})`,
        `<strong>${f1(c.big_five.A.mean)}</strong> <span class="rh-note">[${f1(c.big_five.A.ci_low)}–${f1(c.big_five.A.ci_high)}]</span>`,
        `${f2(c.ipip_hexaco.H.mean)} <span class="rh-note">[${f2(c.ipip_hexaco.H.ci_low)}–${f2(c.ipip_hexaco.H.ci_high)}]</span>`,
        `${f3(c.entropy_b5_hmm)} b · ${esc(c.crystallinity_tier)}`,
        esc(mbtiFinePrintText(c)),
        `${esc(c.disc.modal_pattern)} · ${esc(c.enneagram.modal_pattern)} · ${attachmentPlainText(c)}`
      ];
    })
  );

  const totalTested = totalCheckpoints + (data._quarantined_excluded || 0);
  const spec = {
    slug: 'ai-personality-rankings',
    route: '/research/ai-personality-rankings',
    section: 'research',
    published: '2026-09-25',
    updated: '2026-11-26',
    title: 'AI Personality Rankings: 25 Families × 6 Tests | AgentTune',
    description: `Compare ${totalCheckpoints} primary checkpoints across ${families.length} families; ${totalTested} tested on 6 zero-memory personality surveys.`,
    pill: 'Research · Personality Atlas',
    h1: 'AI personality rankings across 25 model families and 6 tests.',
    dek: `We gave ${families.length} AI model families (${totalCheckpoints} primary checkpoints; ${totalTested} tested) six standard personality tests in fresh chats with no memory, then ranked every family side by side.`,
    lede: `People often ask which AI models sound warmest, most structured, or steadiest across chats. Because a single quiz score can hide ties or big version shifts, this Atlas puts all ${families.length} families and all 6 tests in one place—keeping 10–50 Big Five scores separate from 1.00–5.00 HEXACO scores.`,
    answer: `Across ${families.length} model families tested in fresh chats with no memory, ${topA.name} scores highest on Big Five Agreeableness (${f1(getLatest(topA).big_five.A.mean)}/50) while ${lowA.name} scores lowest (${f1(getLatest(lowA).big_five.A.mean)}/50). Answer spread spans from ${f3(getLatest(lowEnt).entropy_b5_hmm)} bits (${lowEnt.name}, very steady) to ${f3(getLatest(highEnt).entropy_b5_hmm)} bits (${highEnt.name}, variable).`,
    jsonHref: '/research/data/model-profiles/index.json',
    csvHref: '/research/data/model-profiles/atlas-overview.csv',
    sections: [
      {
        h2: 'How do 25 AI model families compare across 6 personality tests?',
        html: statStripHtml('atlas-overview-strip', [
          { num: `${families.length} / ${totalCheckpoints}`, label: 'Families / Checkpoints', note: `Primary set (${totalTested} tested in fresh chats).`, color: '#a8482a' },
          { num: `${f1(getLatest(lowA).big_five.A.mean)}–${f1(getLatest(topA).big_five.A.mean)}`, label: 'Big Five Warmth (10–50)', note: `${lowA.name} vs. ${topA.name}.`, color: '#3a72c4' },
          { num: `${f3(getLatest(lowEnt).entropy_b5_hmm)}–${f3(getLatest(highEnt).entropy_b5_hmm)} b`, label: 'Answer Spread', note: 'Lower = steadier across fresh chats.', color: '#2f8a5b' },
          { num: '13 Labs', label: 'Lab Rollups', note: 'Proprietary and open-weight families side by side.', color: '#5b4dc0' }
        ]) + testCardsHtml
      },
      {
        h2: 'Visual overview: 25 model families across 6 tests',
        html: figHeatmap + entBars
      },
      {
        h2: 'How do AI labs compare, and which models changed most?',
        html: `<p>Proprietary labs cluster in high Agreeableness and very steady answers, whereas open-weight labs span a much wider range of styles and consistency.</p>` +
          labTablePlain +
          `<h3>Biggest version-to-version shifts</h3><p>Comparing the earliest and latest tested versions inside multi-release families:</p>` +
          moversTablePlain
      },
      {
        h2: 'What stands out',
        html: standoutsHtml([
          { title: 'Warmth is no longer one-size-fits-all', body: `Proprietary assistants cluster between 43 and 50 out of 50 on Agreeableness, while open-weight models span from ${f1(getLatest(lowA).big_five.A.mean)} (${esc(lowA.name)}) to ${f1(getLatest(topA).big_five.A.mean)} (${esc(topA.name)}).` },
          { title: 'Consistency separates proprietary and open-weight models', body: `${esc(lowEnt.name)} repeats nearly identical answers across runs (${f3(getLatest(lowEnt).entropy_b5_hmm)} bits spread), whereas ${esc(highEnt.name)} varies widely from chat to chat (${f3(getLatest(highEnt).entropy_b5_hmm)} bits).` },
          { title: 'Ties make single-letter labels misleading on short tests', body: 'On MBTI, DISC, and Enneagram, many models sit right on axis borders or tie for first place—we show clear vs. border shares rather than forcing a single type.' }
        ])
      },
      {
        h2: 'Where can I explore each AI model family profile and prompt templates?',
        html: familyDirectoryGridHtml(sortedByA) + atlasActionLinksHtml('/tests/')
      },
      buildFinePrintSection({
        idPrefix: 'overview',
        families: sortedByA,
        template,
        tableHtml: finePrintMasterTable,
        csvFile: 'atlas-overview.csv',
        csvLabel: 'Atlas Overview',
        includeAnchors: true
      })
    ],
    faq: [
      { q: 'Do these rankings mean an AI model "is" an MBTI or Enneagram type?', a: 'No. Every score represents default test answers in fresh chats with no memory. Where exact ties or overlapping 95% Wilson CIs fail the binomial headline guard, discrete 4-letter labels are withheld.' },
      { q: 'Why is IPIP-HEXACO reported on 1–5 while Big Five is on 10–50?', a: 'IPIP-50 sums 10 items per trait (10–50), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain, distinct from commercial Lee & Ashton norms) reports 1.00–5.00 domain means across 24 facets.' },
      { q: 'How are September and May 2026 historical cohorts handled?', a: 'They are preserved strictly as separate imported-protocol anchors (hexaco: null) in Fine Print and are never interpolated into unified model-profiles-v1 trajectories.' }
    ],
    sources: [
      { label: 'AgentTune Model Profiles Directory', href: `${SITE}/models/` },
      { label: 'Factor Collapse & MTMM Audit', href: `${SITE}/research/ai-big-one-factor-collapse-mtmm-audit` },
      { label: 'Crystalline vs. Fluid Entropy Study', href: `${SITE}/research/ai-persona-entropy-crystalline-vs-fluid-minds` }
    ],
    related: [
      { kicker: 'Per-Test', label: 'AI MBTI Personalities across 25 families', href: '/research/ai-mbti-personalities' },
      { kicker: 'Per-Test', label: 'AI Big Five Personalities (10–50)', href: '/research/ai-big-five-personalities' },
      { kicker: 'Cohort', label: 'Open-weight AI test results', href: '/research/what-personality-type-are-open-source-models' },
      { kicker: 'Human Test', label: 'Take the test yourself', href: '/tests/' },
      { kicker: 'Library', label: 'Browse tuning templates', href: '/library/' },
      { kicker: 'Tool', label: 'Build custom instructions', href: '/tools/custom-instructions-generator' }
    ]
  };
  spec.dataset = makeDatasetJsonLd(spec, 'atlas-overview.csv', spec.description);
  return spec;
}

// ---------- 2–7. Six Per-Test Pages ----------
function buildPerTestSpec(testCfg, data, template) {
  const families = data.families;
  const labs = computeLabRollups(families);
  const movers = computeMovers(families);
  const meta = template.pages.find((p) => p.slug === testCfg.slug);

  let ranked = [...families];
  let introHtml = '';
  let visualHtml = '';
  let standoutsCards = [];
  let finePrintTable = '';
  let finePrintExtra = '';
  let answerText = '';
  let extraFaq = [];

  if (testCfg.key === 'mbti') {
    ranked.sort((a, b) => (getLatest(a).mbti?.tie_rate ?? 0) - (getLatest(b).mbti?.tie_rate ?? 0));
    const guarded = ranked.filter((f) => !mbtiShares(getLatest(f)).allowed).length;
    const typeCounts = new Map();
    for (const f of families) {
      const c = getLatest(f);
      const { allowed } = mbtiShares(c);
      const lbl = allowed ? `Tests as ${c.mbti?.modal_pattern || c.modal_mbti}` : 'Border-heavy (no single type)';
      typeCounts.set(lbl, (typeCounts.get(lbl) || 0) + 1);
    }
    const distRows = [...typeCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([label, val], idx) => ({ label, value: val, color: idx === 0 ? '#a8482a' : (label.startsWith('Border') ? '#855b1c' : '#3a72c4') }));

    const typeDistChart = renderCharts.wrapChart(
      'atlas-mbti-type-dist',
      renderCharts.horizontalBars({
        id: 'atlas-mbti-type-dist',
        title: 'How Many AI Families Test as Each MBTI-Style Type (25 Families)',
        desc: 'Count of the 25 AI model families whose latest version tests clearly as INTJ, tests clearly as ISTJ, or lands too close to borders to headline a single type.',
        rows: distRows,
        min: 0, max: 25, decimals: 0, unit: ' fam'
      }),
      'Figure 1. Distribution of MBTI-style results across all 25 model families. Families with heavy axis ties are kept in the border-heavy category rather than forced into one label.'
    );

    const stackedChart = renderCharts.wrapChart(
      'atlas-mbti-stacked',
      renderCharts.stackedRows({
        id: 'atlas-mbti-stacked',
        title: 'All 25 Families: Clear Modal Share vs. Trait-Border Runs (%)',
        desc: 'Percentage of fresh-chat runs landing on a clear modal MBTI pattern, landing on an exact trait border, or resolving to another pattern across 25 families.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          const { clearPct, tiePct, otherPct, allowed } = mbtiShares(c);
          return {
            label: `${shortLabel(f.name, 14)}${allowed ? '' : ' *'}`,
            values: { clear: clearPct, border: tiePct, other: otherPct }
          };
        }),
        segs: [
          { key: 'clear', name: 'Clear modal share (%)', color: '#4b4099' },
          { key: 'border', name: 'On a trait border (%)', color: '#a8482a', hatch: true, text: '#a8482a' },
          { key: 'other', name: 'Other clear type (%)', color: '#7a7468' }
        ],
        max: 100
      }),
      'Figure 2. Clear modal share vs. trait-border runs across all 25 families (* marks border-heavy families where no single 4-letter type is headlined).'
    );

    const mbtiShiftsTable = pressTable(
      'Biggest version-to-version MBTI changes',
      ['Family', 'Earliest Version', 'Latest Version', 'Border Rate Shift'],
      movers.slice(0, 10).map(({ fam, first, last }) => [
        `<a href="/models/${esc(fam.family_slug)}">${esc(fam.name)}</a>`,
        esc(mbtiPlainText(first)),
        esc(mbtiPlainText(last)),
        `${(last.mbti_tie_rate - first.mbti_tie_rate) >= 0 ? '+' : ''}${pct(last.mbti_tie_rate - first.mbti_tie_rate)}`
      ])
    );

    introHtml = `<p>MBTI-style surveys measure four preference pairs—Extraversion vs. Introversion (E–I), Sensing vs. Intuition (S–N), Thinking vs. Feeling (T–F), and Judging vs. Perceiving (J–P)—across 32 questions. We tested all 25 AI families 30 to 50 times per version in fresh chats with no memory, keeping exact ties visible instead of forcing a single four-letter label.</p>`;
    visualHtml = typeDistChart + stackedChart + `<h3>Biggest version-to-version MBTI shifts</h3>` + mbtiShiftsTable;
    answerText = `Across ${families.length} AI families tested in fresh chats with no memory, ${families.length - guarded} families clear statistical margins to test as INTJ or ISTJ, while ${guarded} border-heavy families tie too often to headline a single four-letter type. Never treat a test pattern as claiming a model "is" an MBTI type.`;
    standoutsCards = [
      { title: 'Most clear proprietary models test as INTJ or ISTJ', body: 'When proprietary models avoid axis ties, they split almost exclusively between INTJ and ISTJ—reflecting structured, analytical survey defaults rather than a human personality.' },
      { title: `${guarded} families stay on trait borders too often for one label`, body: 'Models with high run-to-run variability or balanced S/N and T/F answers land on exact 50/50 axis borders, so we report clear % and border % shares openly.' },
      { title: 'Newer versions frequently shift on Sensing vs. Intuition', body: 'Version-to-version shifts within a family most often move along the S–N or T–F border rather than flipping Judging (J) or Introversion (I).' }
    ];
    finePrintTable = pressTable(
      'MBTI technical results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'Guard Status', 'Clear Mode %', 'Tie Rate', 'Mean Axes (I-E / N-S / T-F / J-P)', 'H_MM · Shift'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), m = c.mbti || {};
        const dTie = (m.tie_rate ?? 0) - (e.mbti_tie_rate ?? 0);
        const ax = mbtiAxisMeans(c);
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          esc(mbtiFinePrintText(c)),
          pct(m.modal_share ?? 0), pct(m.tie_rate ?? 0),
          `${ax.ei != null ? f2(ax.ei) : '—'} / ${ax.sn != null ? f2(ax.sn) : '—'} / ${ax.tf != null ? f2(ax.tf) : '—'} / ${ax.jp != null ? f2(ax.jp) : '—'}`,
          `${f3(c.entropy_b5_hmm)} b · ${f.checkpoints.length > 1 ? `${dTie >= 0 ? '+' : ''}${pct(dTie)}` : 'Single cp'}`
        ];
      }),
      [3, 4]
    );
    finePrintExtra = pressTable(
      'MBTI tie-rate aggregates by lab',
      ['Lab', 'Families', 'Mean Axis Tie Rate', 'Binomial Guard Passes'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), pct(l.mbtiTieRate), `${l.members.filter((m) => mbtiShares(getLatest(m)).allowed).length} / ${l.count}`]),
      [1, 2, 3]
    );
    extraFaq = [{ q: 'When is a single 4-letter MBTI headline withheld?', a: 'Whenever the resolved modal type\'s 95% Wilson binomial lower bound fails to clear both the runner-up upper bound and the unresolved-tie upper bound, we withhold a single 4-letter headline.' }];
  } else if (testCfg.key === 'enneagram') {
    ranked.sort((a, b) => getLatest(a).enneagram.tie_rate - getLatest(b).enneagram.tie_rate);
    const topTypeCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((t) => ({
      label: `Type ${t}`,
      value: families.filter((f) => getLatest(f).enneagram?.top_types?.[0]?.type === t).length,
      color: '#2a5d47'
    }));
    const distChart = renderCharts.wrapChart(
      'atlas-ennea-dist',
      renderCharts.horizontalBars({
        id: 'atlas-ennea-dist',
        title: 'Distribution of Top Enneagram Scores Across 25 AI Families',
        desc: 'Count of the 25 AI families whose highest Enneagram average falls on each of Types 1 through 9.',
        rows: topTypeCounts,
        min: 0, max: 25, decimals: 0, unit: ' fam'
      }),
      'Figure 1. Count of families whose highest average falls on each Enneagram type (4–20 scale). Types 5, 1, and 2 account for nearly all leaders.'
    );
    const wheelGrid = roseWheelGridHtml(ranked, 'enneagram', '9-petal Enneagram shapes across all 25 families (4–20 scale per type).');
    introHtml = `<p>The 36-item Enneagram survey scores nine motivational patterns (Types 1 through 9, 4 to 20 points each). Because each type uses only four questions, many AI models tie for first place—so we show the full 9-petal shape alongside top-type counts.</p>`;
    visualHtml = distChart + `<h3>All 25 families: 9-petal Enneagram shapes</h3>` + wheelGrid;
    const guardFail = ranked.filter((f) => !getLatest(f).enneagram.headline_allowed).length;
    answerText = `Across ${families.length} AI families on the 4–20 Enneagram survey, Types 5, 1, and 2 lead almost every model, while ${guardFail} of ${families.length} families tie too frequently for a single-type headline.`;
    standoutsCards = [
      { title: 'Types 5, 1, and 2 dominate AI quiz defaults', body: 'Analytical Type 5, standards-focused Type 1, and supportive Type 2 appear at the top of nearly every tested model family.' },
      { title: `${guardFail} of 25 families tie too often for a single label`, body: 'Short 4-question subscales produce 22% to 64% exact ties at the top, making 9-petal shapes far more informative than a single type number.' }
    ];
    finePrintTable = pressTable(
      'Enneagram technical results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'Modal Cluster', 'Top-1 [95% CI]', 'Top-2', 'Top-3', 'Tie Rate', 'H_MM'],
      ranked.map((f) => {
        const c = getLatest(f), t = c.enneagram.top_types || [];
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          esc(c.enneagram.modal_pattern),
          t[0] ? `${esc(t[0].label)}: ${f1(t[0].mean)} <span class="rh-note">[${f1(t[0].ci_low)}–${f1(t[0].ci_high)}]</span>` : '—',
          t[1] ? `${esc(t[1].label)}: ${f1(t[1].mean)}` : '—',
          t[2] ? `${esc(t[2].label)}: ${f1(t[2].mean)}` : '—',
          pct(c.enneagram.tie_rate), `${f3(c.entropy_b5_hmm)} b`
        ];
      }),
      [6, 7]
    );
    finePrintExtra = pressTable(
      'Enneagram lab tie summary',
      ['Lab', 'Families', 'Mean Tie Rate', 'Headline-Allowed Count'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), pct(l.members.reduce((s, m) => s + getLatest(m).enneagram.tie_rate, 0) / Math.max(1, l.count)), `${l.members.filter((m) => getLatest(m).enneagram.headline_allowed).length} / ${l.count}`]),
      [1, 2, 3]
    );
    extraFaq = [{ q: 'Why do AI models tie so often on the Enneagram?', a: 'OEPS uses 4 items per Enneagram type (4–20 integers), so clustered answers around Types 1, 5, 2, and 8 tie at the exact same sum in 22%–64% of runs.' }];
  } else if (testCfg.key === 'big-five') {
    ranked.sort((a, b) => getLatest(b).big_five.A.mean - getLatest(a).big_five.A.mean);
    const traits = [
      ['A', 'Agreeableness (Warm & Polite vs. Blunt)', '#2c5282'],
      ['C', 'Conscientiousness (Structured vs. Flexible)', '#2f8a5b'],
      ['O', 'Openness (Curious vs. Routine)', '#5b4dc0'],
      ['E', 'Extraversion (Expressive vs. Reserved)', '#855b1c'],
      ['N', 'Neuroticism (Reactive vs. Calm)', '#a8482a']
    ];
    const traitBars = traits.map(([k, lbl, col]) => {
      const byTrait = [...families].sort((a, b) => getLatest(b).big_five[k].mean - getLatest(a).big_five[k].mean);
      return renderCharts.wrapChart(
        `atlas-b5-${k.toLowerCase()}-bars`,
        renderCharts.horizontalBars({
          id: `atlas-b5-${k.toLowerCase()}-bars`,
          title: `Big Five ${lbl} Across 25 Families (10–50 Scale)`,
          desc: `Ranked IPIP-50 ${lbl} means (10 to 50 sum scale) across all 25 AI families.`,
          rows: byTrait.map((f) => {
            const c = getLatest(f);
            return { label: shortLabel(f.name, 22), sub: `${f.provider} · n=${c.n_valid}`, value: c.big_five[k].mean, color: col };
          }),
          min: 10, max: 50, decimals: 1, cutoff: 30, cutoffLabel: 'Midpoint 30'
        }),
        `Ranked ${lbl} means (10–50 raw sum scale, midpoint 30).`
      );
    }).join('\n');
    const wheelGrid = roseWheelGridHtml(ranked, 'big_five', '5-petal Big Five (OCEAN) shapes across all 25 families (10–50 scale).');
    const top = ranked[0], low = ranked[ranked.length - 1];
    introHtml = `<p>The Big Five (IPIP-50) measures five broad traits—Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism—on a 10 to 50 scale. Below are the ranked trait charts and 5-petal trait shapes for all 25 AI families.</p>`;
    visualHtml = traitBars + `<h3>All 25 families: 5-petal Big Five shapes</h3>` + wheelGrid;
    answerText = `Across ${families.length} families on the 10–50 Big Five scale, ${top.name} leads Agreeableness (${f1(getLatest(top).big_five.A.mean)}/50) while ${low.name} scores lowest (${f1(getLatest(low).big_five.A.mean)}/50). Most proprietary models combine high Agreeableness and Conscientiousness with low Neuroticism.`;
    standoutsCards = [
      { title: 'Agreeableness shows the widest proprietary vs. open-weight split', body: `${esc(top.name)} sits at ${f1(getLatest(top).big_five.A.mean)}/50 while open-weight models drop as low as ${f1(getLatest(low).big_five.A.mean)}/50 (${esc(low.name)}).` },
      { title: 'Extraversion stays near the 30 midpoint almost everywhere', body: 'Most models endorse listening and careful thought over loud social energy, clustering near 24–35 out of 50.' }
    ];
    finePrintTable = pressTable(
      'Big Five technical results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'Openness [95% CI]', 'Conscient. [95% CI]', 'Extrav. [95% CI]', 'Agreeable. [95% CI]', 'Neurot. [95% CI]', 'H_MM · ΔA'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dA = c.big_five.A.mean - e.big_five.A.mean;
        const cell = (d) => `${f1(d.mean)} <span class="rh-note">[${f1(d.ci_low)}–${f1(d.ci_high)}]</span>`;
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          cell(c.big_five.O), cell(c.big_five.C), cell(c.big_five.E), `<strong>${cell(c.big_five.A)}</strong>`, cell(c.big_five.N),
          `${f3(c.entropy_b5_hmm)} b · ${f.checkpoints.length > 1 ? `${dA >= 0 ? '+' : ''}${f1(dA)}` : 'Single'}`
        ];
      })
    );
    finePrintExtra = pressTable(
      'Big Five lab aggregates (10-50 scale)',
      ['Lab', 'Families', 'Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f1(l.b5O), f1(l.b5C), f1(l.b5E), f1(l.b5A), f1(l.b5N)]),
      [1, 2, 3, 4, 5, 6]
    );
    extraFaq = [{ q: 'Why are Big Five scores shown as 10–50 instead of percentiles?', a: 'Raw 10–50 IPIP-50 sums keep scale units exact and avoid projecting human population norms onto AI self-reports.' }];
  } else if (testCfg.key === 'disc') {
    ranked.sort((a, b) => getLatest(a).disc.D.mean - getLatest(b).disc.D.mean);
    const patCounts = new Map();
    for (const f of families) {
      const p = getLatest(f).disc.modal_pattern || 'S/C';
      const bucket = p.includes('S') && p.includes('C') ? 'S/C or C/S Blend' : p;
      patCounts.set(bucket, (patCounts.get(bucket) || 0) + 1);
    }
    const patChart = renderCharts.wrapChart(
      'atlas-disc-dist',
      renderCharts.horizontalBars({
        id: 'atlas-disc-dist',
        title: 'DISC Work-Style Pattern Distribution Across 25 AI Families',
        desc: 'Count of the 25 AI families falling into each DISC modal work-style pattern (4–20 scale).',
        rows: [...patCounts.entries()].sort((a, b) => b[1] - a[1]).map(([label, value]) => ({ label, value, color: '#7a5219' })),
        min: 0, max: 25, decimals: 0, unit: ' fam'
      }),
      'Figure 1. DISC pattern distribution across all 25 families. Almost every AI model clusters in Steadiness and Conscientiousness (S/C or C/S).'
    );
    const dBars = renderCharts.wrapChart(
      'atlas-disc-d-bars',
      renderCharts.horizontalBars({
        id: 'atlas-disc-d-bars',
        title: 'DISC Dominance (D) Scores Across 25 Families (4–20 Scale)',
        desc: 'DISC Dominance means on the 4 to 20 scale across all 25 AI families.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return { label: shortLabel(f.name, 22), sub: `${c.disc.modal_pattern} · ties ${pct(c.disc.tie_rate)}`, value: c.disc.D.mean, color: '#7a5219' };
        }),
        min: 4, max: 20, decimals: 1, cutoff: 12, cutoffLabel: 'Midpoint 12'
      }),
      'Figure 2. DISC Dominance (D) across all 25 families. Low Dominance scores in polite proprietary models track low Neuroticism and refusal caution.'
    );
    const wheelGrid = roseWheelGridHtml(ranked, 'disc', '4-petal DISC work-style shapes across all 25 families (4–20 scale).');
    const lowD = ranked[0], highD = ranked[ranked.length - 1];
    introHtml = `<p>DISC measures four workplace communication preferences—Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C)—on a 4 to 20 scale. Below are the pattern distribution, Dominance rankings, and 4-petal DISC shapes across all 25 families.</p>`;
    visualHtml = patChart + dBars + `<h3>All 25 families: 4-petal DISC shapes</h3>` + wheelGrid;
    answerText = `Across ${families.length} families on the 4–20 DISC scale, nearly every model tests as Steady/Conscientious (S/C or C/S), with Dominance ranging from ${f1(getLatest(lowD).disc.D.mean)} (${lowD.name}) to ${f1(getLatest(highD).disc.D.mean)} (${highD.name}).`;
    standoutsCards = [
      { title: 'Steadiness and Conscientiousness dominate almost every AI', body: 'Models consistently favor careful, patient, accuracy-first answers over forceful or pushy Dominance items.' },
      { title: 'Low DISC Dominance does not mean the model avoids blunt answers', body: 'Models scoring near 4.0/20 on DISC Dominance can still give direct, non-sycophantic engineering verdicts when asked in behavior tests.' }
    ];
    finePrintTable = pressTable(
      'DISC technical results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'D [95% CI]', 'I [95% CI]', 'S [95% CI]', 'C [95% CI]', 'Tie Rate · Modal', 'H_MM · ΔD'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dD = c.disc.D.mean - (e.disc?.D?.mean ?? c.disc.D.mean);
        const cell = (d) => `${f1(d.mean)} <span class="rh-note">[${f1(d.ci_low)}–${f1(d.ci_high)}]</span>`;
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          cell(c.disc.D), cell(c.disc.I), cell(c.disc.S), cell(c.disc.C),
          `${pct(c.disc.tie_rate)} · ${esc(c.disc.modal_pattern)}`,
          `${f3(c.entropy_b5_hmm)} b · ${f.checkpoints.length > 1 ? `${dD >= 0 ? '+' : ''}${f1(dD)}` : 'Single'}`
        ];
      })
    );
    finePrintExtra = pressTable(
      'DISC lab aggregates (4-20 scale)',
      ['Lab', 'Families', 'D Mean', 'S Mean', 'C Mean'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f1(l.discD), f1(l.discS), f1(l.discC)]),
      [1, 2, 3, 4]
    );
    extraFaq = [{ q: 'Why do proprietary models score near the floor on DISC Dominance?', a: 'Polite safety/helpfulness training rejects forceful Dominance items while endorsing Steadiness and Conscientiousness—an empirical refusal/politeness artifact rather than capability.' }];
  } else if (testCfg.key === 'attachment') {
    ranked.sort((a, b) => getLatest(a).attachment.avoidance.mean - getLatest(b).attachment.avoidance.mean);
    const propFams = ranked.filter((f) => f.tier === 'Proprietary' || f.tier.startsWith('Mixed') || f.tier === 'Mix');
    const openFams = ranked.filter((f) => !propFams.includes(f));
    const propPlane = buildNonOverlappingPlane({
      id: 'atlas-att-plane-prop',
      title: `Attachment Quadrant: Proprietary & Mixed Families (${propFams.length} Families, 1–7 Scale)`,
      desc: 'Anxiety and Avoidance coordinates on the 1 to 7 scale (4.00 Secure cutoff) for proprietary and mixed AI model families.',
      points: propFams.map((f) => ({ label: shortLabel(f.name, 16), color: f.color || '#843d4c', x: getLatest(f).attachment.anxiety.mean, y: getLatest(f).attachment.avoidance.mean })),
      caption: `Figure 1a. Proprietary & Mixed families (${propFams.length}) on the Attachment quadrant (1–7 scale, 4.00 Secure boundary).`
    });
    const openPlane = buildNonOverlappingPlane({
      id: 'atlas-att-plane-open',
      title: `Attachment Quadrant: Open-Weight Cohort (${openFams.length} Families, 1–7 Scale)`,
      desc: 'Anxiety and Avoidance coordinates on the 1 to 7 scale (4.00 Secure cutoff) for open-weight AI model families.',
      points: openFams.map((f) => ({ label: shortLabel(f.name, 16), color: f.color || '#3a72c4', x: getLatest(f).attachment.anxiety.mean, y: getLatest(f).attachment.avoidance.mean })),
      caption: `Figure 1b. Open-weight cohort (${openFams.length} families) on the Attachment quadrant (4.00/4.00 points mark midpoint-clamped models).`
    });
    const shiftChart = renderCharts.wrapChart(
      'atlas-att-shifts',
      renderCharts.horizontalBars({
        id: 'atlas-att-shifts',
        title: 'Attachment Avoidance Across 25 Families (1.00–7.00 Scale)',
        desc: 'Attachment Avoidance means (1.00 to 7.00 scale, 4.00 Secure cutoff) across all 25 AI families.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return {
            label: shortLabel(f.name, 22),
            sub: `${c.attachment.midpoint_clamp ? 'Midpoint Clamp · ' : ''}Anx ${f2(c.attachment.anxiety.mean)}`,
            value: c.attachment.avoidance.mean,
            color: c.attachment.midpoint_clamp ? '#855b1c' : '#843d4c'
          };
        }),
        min: 1, max: 5, decimals: 2, cutoff: 4, cutoffLabel: 'Cutoff 4.00'
      }),
      'Figure 2. Attachment Avoidance across all 25 families (amber bars mark models clamped at the exact 4.00 midpoint).'
    );
    const clamped = ranked.filter((f) => getLatest(f).attachment.midpoint_clamp);
    introHtml = `<p>Attachment surveys (ECR-R, 36 questions on a 1 to 7 scale) ask about comfort with closeness and worry about rejection in relationships. For AI models, these measure how the assistant interprets human-relationship items—not real emotional bonds.</p>`;
    visualHtml = propPlane + openPlane + shiftChart;
    answerText = `Across ${families.length} families on the 1–7 Attachment scale, most models fall in the Secure quadrant (Anxiety <= 4.00, Avoidance <= 4.00), while ${clamped.length} families (${clamped.map((f) => f.name).join(', ')}) sit right at the 4.00/4.00 neutral midpoint.`;
    standoutsCards = [
      { title: 'Most models land in the Secure quadrant, with wide spacing inside it', body: 'Even when models share the Secure label, Avoidance ranges from ~2.5 to nearly 4.0 depending on how detached or warm the model sounds.' },
      { title: `${clamped.length} families trigger the 4.00 Midpoint Clamp flag`, body: `${clamped.map((f) => esc(f.name)).join(' and ')} select neutral "4" on romantic relationship items, clustering right on the 4.00 boundary.` }
    ];
    finePrintTable = pressTable(
      'Attachment technical results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'Anxiety [95% CI]', 'Avoidance [95% CI]', 'Neutral Rate', 'Result & Clamp', 'H_MM · ΔAvd'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dAvd = c.attachment.avoidance.mean - (e.attachment?.avoidance?.mean ?? c.attachment.avoidance.mean);
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          `${f2(c.attachment.anxiety.mean)} <span class="rh-note">[${f2(c.attachment.anxiety.ci_low)}–${f2(c.attachment.anxiety.ci_high)}]</span>`,
          `${f2(c.attachment.avoidance.mean)} <span class="rh-note">[${f2(c.attachment.avoidance.ci_low)}–${f2(c.attachment.avoidance.ci_high)}]</span>`,
          pct(c.neutral_rate), attachmentPlainText(c),
          `${f3(c.entropy_b5_hmm)} b · ${f.checkpoints.length > 1 ? `${dAvd >= 0 ? '+' : ''}${f2(dAvd)}` : 'Single'}`
        ];
      }),
      [4]
    );
    finePrintExtra = pressTable(
      'Attachment lab aggregates (1-7 scale)',
      ['Lab', 'Families', 'Mean Anxiety', 'Mean Avoidance', 'Midpoint-Clamp Families'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f2(l.anx), f2(l.avd), `${l.members.filter((m) => getLatest(m).attachment.midpoint_clamp).length} / ${l.count}`]),
      [1, 2, 3, 4]
    );
    extraFaq = [{ q: 'What does the Attachment Midpoint Clamp badge mean?', a: 'When a model answers neutral ("4") on >=85% of items or clusters at 4.00 +/- 0.25 with SD <= 0.10 because romantic-attachment items are inapplicable to AI, we display a Midpoint Clamp badge.' }];
  } else if (testCfg.key === 'ipip-hexaco') {
    ranked.sort((a, b) => getLatest(b).ipip_hexaco.H.mean - getLatest(a).ipip_hexaco.H.mean);
    const hBars = renderCharts.wrapChart(
      'atlas-hexaco-h-bars',
      renderCharts.horizontalBars({
        id: 'atlas-hexaco-h-bars',
        title: 'Public-Domain IPIP-HEXACO Honesty-Humility Rankings (1.00–5.00 Scale)',
        desc: 'Public-domain 60-item IPIP-HEXACO proxy Honesty-Humility means on the 1.00 to 5.00 scale across all 25 AI families.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return { label: shortLabel(f.name, 22), sub: `${f.provider} · n=${c.n_valid}`, value: c.ipip_hexaco.H.mean, color: '#9c3b1f' };
        }),
        min: 1, max: 5, decimals: 2, cutoff: 3, cutoffLabel: 'Midpoint 3.00'
      }),
      'Figure 1. Public-domain 60-item IPIP-HEXACO proxy Honesty-Humility means (1.00–5.00 scale, kept distinct from 10–50 Big Five sums and commercial Lee & Ashton norms).'
    );
    const wheelGrid = roseWheelGridHtml(ranked, 'hexaco', '6-petal public-domain IPIP-HEXACO proxy shapes across all 25 families (1.00–5.00 mean scale).');
    const top = ranked[0], low = ranked[ranked.length - 1];
    introHtml = `<p>HEXACO adds a sixth trait—Honesty-Humility (sincerity, fairness, and modesty)—to the Big Five dimensions. Here we administer the <strong>public-domain 60-item IPIP-HEXACO proxy</strong> on a <strong>1.00 to 5.00 scale</strong> (kept strictly separate from 10–50 Big Five sums and commercial Lee &amp; Ashton norms).</p>`;
    visualHtml = hBars + `<h3>All 25 families: 6-petal IPIP-HEXACO shapes (1–5 scale)</h3>` + wheelGrid;
    answerText = `On the 1.00–5.00 public-domain IPIP-HEXACO proxy, ${top.name} leads Honesty-Humility at ${f2(getLatest(top).ipip_hexaco.H.mean)}/5.00 while ${low.name} scores ${f2(getLatest(low).ipip_hexaco.H.mean)}/5.00. Proprietary assistants cluster above 4.25 on sincere, modest, rule-following self-descriptions.`;
    standoutsCards = [
      { title: 'Honesty-Humility is one of the highest-scoring traits across labs', body: `Top models average ${f2(getLatest(top).ipip_hexaco.H.mean)}/5.00 on sincerity and modesty, reflecting strong alignment training against boastfulness or rule-breaking.` },
      { title: '1.00–5.00 IPIP-HEXACO scale is never mixed with 10–50 Big Five sums', body: 'Both scales appear with explicit units everywhere on the site so a 4.6/5 HEXACO score is never confused with a 10–50 Big Five score.' }
    ];
    finePrintTable = pressTable(
      'IPIP-HEXACO proxy (1.00-5.00) technical results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'H (1–5) [95% CI]', 'E (1–5)', 'X (1–5)', 'A (1–5)', 'C (1–5)', 'O (1–5)', 'H_MM · ΔH'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dH = c.ipip_hexaco.H.mean - e.ipip_hexaco.H.mean;
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          `<strong>${f2(c.ipip_hexaco.H.mean)}</strong> <span class="rh-note">[${f2(c.ipip_hexaco.H.ci_low)}–${f2(c.ipip_hexaco.H.ci_high)}]</span>`,
          f2(c.ipip_hexaco.E.mean), f2(c.ipip_hexaco.X.mean), f2(c.ipip_hexaco.A.mean), f2(c.ipip_hexaco.C.mean), f2(c.ipip_hexaco.O.mean),
          `${f3(c.entropy_b5_hmm)} b · ${f.checkpoints.length > 1 ? `${dH >= 0 ? '+' : ''}${f2(dH)}` : 'Single'}`
        ];
      }),
      [3, 4, 5, 6, 7]
    );
    finePrintExtra = pressTable(
      'IPIP-HEXACO proxy lab aggregates (1.00-5.00 scale)',
      ['Lab', 'Families', 'H Mean (1–5)', 'C Mean (1–5)'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f2(l.hxH), f2(l.hxC)]),
      [1, 2, 3]
    );
    extraFaq = [{ q: 'Is this the commercial Lee & Ashton HEXACO-60 test?', a: 'No. We administer a 60-item public-domain IPIP-HEXACO proxy (agenttune-ipip-hexaco60, 10 items per domain across 24 facets) on a 1.00–5.00 mean scale to preserve open licensing and avoid synthetic linear projections.' }];
  }

  const totalCheckpoints = families.reduce((acc, f) => acc + (f.checkpoints || []).length, 0);
  const totalTested = totalCheckpoints + (data._quarantined_excluded || 0);
  const spec = {
    slug: meta.slug,
    route: meta.route,
    section: 'research',
    published: '2026-11-26',
    updated: '2026-11-26',
    title: meta.title,
    description: `${testCfg.label} results: ${totalCheckpoints} primary checkpoints across ${families.length} families; ${totalTested} tested in fresh zero-memory chats.`,
    pill: `Research · Personality Atlas · ${testCfg.short}`,
    h1: meta.h1,
    dek: `${testCfg.label} results across all ${families.length} model families (${testCfg.scale}), tested 30 to 50 times per version in fresh chats with no memory.`,
    lede: `Every model family below answered the ${testCfg.short} questions in fresh, zero-history chats. Jump straight to the charts below, inspect all 25 family profiles, or open The Fine Print at the bottom for confidence intervals, tie rates, and CSV downloads.`,
    answer: answerText,
    jsonHref: '/research/data/model-profiles/index.json',
    csvHref: `/research/data/model-profiles/${meta.csv}`,
    sections: [
      { h2: `What does ${testCfg.short} measure in AI models?`, html: introHtml },
      { h2: `How do 25 AI model families score? (${testCfg.short} results)`, html: visualHtml },
      { h2: 'What stands out', html: standoutsHtml(standoutsCards) },
      { h2: `Which AI model families match each ${testCfg.short} pattern?`, html: familyDirectoryGridHtml(ranked, `All 25 families ordered by ${testCfg.short} results`) + atlasActionLinksHtml(testCfg.testHref) },
      buildFinePrintSection({
        idPrefix: testCfg.key,
        families: ranked,
        template,
        testKey: testCfg.key,
        tableHtml: finePrintTable,
        extraHtml: finePrintExtra,
        csvFile: meta.csv,
        csvLabel: testCfg.short
      })
    ],
    faq: [
      ...extraFaq,
      { q: `Does this mean AI models actually "have" ${testCfg.short} traits?`, a: 'No. These results summarize consistent zero-memory questionnaire responses, not human psychological traits or clinical states.' }
    ],
    sources: [
      { label: 'AI Personality Rankings (25 × 6 Atlas Overview)', href: `${SITE}/research/ai-personality-rankings` },
      { label: 'Model Profiles Directory', href: `${SITE}/models/` }
    ],
    related: [
      { kicker: 'Atlas Overview', label: '25 Model Families × 6 Tests Rankings', href: '/research/ai-personality-rankings' },
      { kicker: 'Human Test', label: 'Take the test yourself', href: testCfg.testHref },
      { kicker: 'Library', label: 'Browse tuning templates', href: '/library/' },
      { kicker: 'Tool', label: 'Build custom instructions', href: '/tools/custom-instructions-generator' }
    ]
  };
  spec.dataset = makeDatasetJsonLd(spec, meta.csv, spec.description);
  return spec;
}

// ---------- 8–12. Five Lab / Cohort Pages ----------
function buildLabCohortSpec(pageMeta, data, template) {
  const families = data.families.filter((f) => pageMeta.families.includes(f.family_slug));
  const isOpenCohort = pageMeta.slug === 'what-personality-type-are-open-source-models';
  const titleLabel = isOpenCohort ? 'Open-Weight Cohort (12 Families)' : pageMeta.lab;
  const latests = families.map((f) => ({ fam: f, cp: getLatest(f) }));

  const sortedByA = [...latests].sort((a, b) => b.cp.big_five.A.mean - a.cp.big_five.A.mean);
  const topA = sortedByA[0], lowA = sortedByA[sortedByA.length - 1];
  const avgEnt = latests.reduce((s, x) => s + x.cp.entropy_b5_hmm, 0) / Math.max(1, latests.length);
  const avgHexH = latests.reduce((s, x) => s + x.cp.ipip_hexaco.H.mean, 0) / Math.max(1, latests.length);

  let visualMarkup = '';
  if (families.length <= 4) {
    visualMarkup += roseWheelGridHtml(families, 'big_five', `5-petal Big Five shapes across ${titleLabel} families (10–50 scale).`);
    visualMarkup += renderCharts.wrapChart(
      `${pageMeta.slug}-hx-spectrum`,
      renderCharts.traitSpectrum({
        id: `${pageMeta.slug}-hx-spectrum`,
        title: `${titleLabel}: IPIP-HEXACO Proxy Comparison (1.00–5.00 Scale)`,
        desc: `Public-domain 60-item IPIP-HEXACO proxy domain means (1.00 to 5.00 scale) across ${families.map((f) => f.name).join(', ')}.`,
        series: latests.map(({ fam, cp }, idx) => ({
          name: `${fam.name} (1–5)`,
          color: ['#9c3b1f', '#2c5282', '#2a5d47', '#7a5219'][idx % 4],
          values: ['H', 'E', 'X', 'A', 'C', 'O'].map((k) => cp.ipip_hexaco[k].mean)
        })),
        traits: [
          { label: 'Honesty-Humil.', poles: 'Manipulative ↔ Sincere/Fair' },
          { label: 'Emotionality', poles: 'Detached ↔ Sensitive' },
          { label: 'Extraversion', poles: 'Reserved ↔ Sociable' },
          { label: 'Agreeable', poles: 'Critical ↔ Patient/Gentle' },
          { label: 'Conscientious', poles: 'Impulsive ↔ Disciplined' },
          { label: 'Openness', poles: 'Conventional ↔ Inquisitive' }
        ],
        min: 1, max: 5, mid: 3, decimals: 2
      }),
      `Figure 2. Public-domain IPIP-HEXACO proxy means (1.00–5.00 scale, kept distinct from 10–50 Big Five sums).`
    );
    visualMarkup += renderCharts.wrapChart(
      `${pageMeta.slug}-mbti-ties`,
      renderCharts.stackedRows({
        id: `${pageMeta.slug}-mbti-ties`,
        title: `${titleLabel}: Clear MBTI Share vs. Trait-Border Runs (%)`,
        desc: `Percentage of fresh-chat runs landing on a clear modal MBTI type vs. a trait border across ${families.map((f) => f.name).join(', ')}.`,
        rows: latests.map(({ fam, cp }) => {
          const { clearPct, tiePct, otherPct } = mbtiShares(cp);
          return { label: shortLabel(fam.name, 16), values: { clear: clearPct, border: tiePct, other: otherPct } };
        }),
        segs: [
          { key: 'clear', name: 'Clear modal share (%)', color: '#4b4099' },
          { key: 'border', name: 'On a trait border (%)', color: '#a8482a', hatch: true, text: '#a8482a' },
          { key: 'other', name: 'Other (%)', color: '#7a7468' }
        ],
        max: 100
      }),
      `Figure 3. Clear MBTI share vs. trait-border runs across ${titleLabel}.`
    );
  } else {
    visualMarkup += renderCharts.wrapChart(
      `${pageMeta.slug}-b5-agree`,
      renderCharts.horizontalBars({
        id: `${pageMeta.slug}-b5-agree`,
        title: `${titleLabel}: Big Five Agreeableness (10–50 Scale)`,
        desc: `IPIP-50 Agreeableness means across all ${families.length} open-weight families.`,
        rows: sortedByA.map(({ fam, cp }) => ({
          label: shortLabel(fam.name, 22),
          sub: `${renderCharts.plainConsistencyLabel(cp.crystallinity_tier)} · ${f3(cp.entropy_b5_hmm)} b`,
          value: cp.big_five.A.mean,
          color: cp.big_five.A.mean < 40 ? '#a8482a' : '#3a72c4'
        })),
        min: 10, max: 50, decimals: 1, cutoff: 30, cutoffLabel: 'Midpoint 30'
      }),
      `Figure 1. Ranked Big Five Agreeableness across all ${families.length} open-weight families.`
    );
    visualMarkup += roseWheelGridHtml(families, 'big_five', `5-petal Big Five shapes across all ${families.length} open-weight families (10–50 scale).`);
  }

  const cohortFinePrintTable = pressTable(
    `${titleLabel} technical summary`,
    ['Family (Profile)', 'Checkpoint (n)', 'B5 A (10–50) [95% CI]', 'HX-H (1–5)', 'H_MM · Crystallinity', 'MBTI (Guard)', 'DISC · Ennea · Att.', '1× Track B (k/3)'],
    sortedByA.map(({ fam, cp }) => {
      const tb = fam.track_b?.categories || [];
      const syco = tb.find((x) => x.id.includes('syco'));
      const dir = tb.find((x) => x.id.includes('direct'));
      return [
        `<a href="/models/${esc(fam.family_slug)}">${esc(fam.name)}</a>`,
        `${esc(cp.label)} (${cp.n_valid})`,
        `<strong>${f1(cp.big_five.A.mean)}</strong> <span class="rh-note">[${f1(cp.big_five.A.ci_low)}–${f1(cp.big_five.A.ci_high)}]</span>`,
        f2(cp.ipip_hexaco.H.mean),
        `${f3(cp.entropy_b5_hmm)} b · ${esc(cp.crystallinity_tier)}`,
        esc(mbtiFinePrintText(cp)),
        `${esc(cp.disc.modal_pattern)} · ${esc(cp.enneagram.modal_pattern)} · ${attachmentPlainText(cp)}`,
        `Dir ${dir?.k ?? 0}/3 · Syc ${syco?.k ?? 0}/3`
      ];
    })
  );

  const standoutsCards = [
    {
      title: `Top vs. lowest warmth inside ${titleLabel}`,
      body: `${esc(topA.fam.name)} leads Agreeableness at ${f1(topA.cp.big_five.A.mean)}/50, compared with ${f1(lowA.cp.big_five.A.mean)}/50 on ${esc(lowA.fam.name)}.`
    },
    {
      title: 'MBTI labels depend heavily on axis ties',
      body: sortedByA.map(({ fam, cp }) => `${esc(fam.name)}: ${esc(mbtiPlainText(cp))}`).slice(0, 4).join(' · ') + '.'
    }
  ];

  const companions = LAB_COMPANIONS[pageMeta.slug] || [];
  const spec = {
    slug: pageMeta.slug,
    route: pageMeta.route,
    section: 'research',
    published: '2026-09-25',
    updated: '2026-11-26',
    title: pageMeta.title,
    description: `${titleLabel} personality test results across ${families.length} families on 6 surveys in fresh chats with no memory, plus behavior test counts.`,
    pill: `Research · Personality Atlas · ${titleLabel}`,
    h1: pageMeta.h1,
    dek: `Comparing all ${families.length} ${titleLabel} model families across 6 standard personality surveys in fresh chats with no memory.`,
    lede: `People ask what personality type ${titleLabel} models have. Rather than forcing one four-letter label, we tested ${families.map((f) => f.name).join(', ')} dozens of times per version in fresh chats with no memory and laid out all six surveys side by side.`,
    answer: `Across ${families.length} ${titleLabel} families, Big Five Agreeableness runs from ${f1(lowA.cp.big_five.A.mean)}/50 (${lowA.fam.name}) to ${f1(topA.cp.big_five.A.mean)}/50 (${topA.fam.name}), HEXACO Honesty-Humility averages ${f2(avgHexH)}/5.00, and most models test as INTJ/ISTJ or split on trait borders—never claiming a model "is" a type.`,
    jsonHref: '/research/data/model-profiles/index.json',
    csvHref: '/research/data/model-profiles/atlas-overview.csv',
    sections: [
      {
        h2: `What personality scores does ${titleLabel} get?`,
        html: statStripHtml(`${pageMeta.slug}-strip`, [
          { num: `${families.length} Families`, label: titleLabel, note: families.map((f) => f.name).join(', '), color: '#a8482a' },
          { num: `${f1(topA.cp.big_five.A.mean)}/50`, label: `Peak Warmth (${topA.fam.name})`, note: '10–50 Big Five Agreeableness.', color: '#3a72c4' },
          { num: `${f2(avgHexH)}/5.00`, label: 'Mean HEXACO H', note: 'Public-domain 1.00–5.00 proxy.', color: '#2f8a5b' },
          { num: `${f3(avgEnt)} b`, label: 'Mean Answer Spread', note: 'Lower = steadier across chats.', color: '#5b4dc0' }
        ])
      },
      { h2: `What are the trait shapes and MBTI results for ${titleLabel}?`, html: visualMarkup },
      { h2: 'What stands out', html: standoutsHtml(standoutsCards) },
      { h2: `Which ${titleLabel} model profiles and guides should I open next?`, html: familyDirectoryGridHtml(sortedByA.map((x) => x.fam), `Individual ${titleLabel} family pages`) + atlasActionLinksHtml('/tests/', companions) },
      buildFinePrintSection({
        idPrefix: pageMeta.slug,
        families: sortedByA.map((x) => x.fam),
        template,
        tableHtml: cohortFinePrintTable,
        csvFile: 'atlas-overview.csv',
        csvLabel: 'Atlas Overview',
        includeAnchors: true
      })
    ],
    faq: [
      { q: `What personality type do ${titleLabel} models test as?`, a: `These results reflect default quiz answers in fresh chats with no memory across 6 surveys—not a claim that any model "is" an MBTI or Enneagram type.` },
      { q: 'How should I tune models in this group?', a: 'Open any family profile linked above for concrete, observable system-prompt rules and hands-on behavior test counts.' }
    ],
    sources: [
      { label: 'AI Personality Rankings (25 × 6 Atlas Overview)', href: `${SITE}/research/ai-personality-rankings` },
      { label: 'AgentTune Model Profiles Directory', href: `${SITE}/models/` },
      ...companions.map((c) => ({ label: c.label, href: `${SITE}${c.href}` }))
    ],
    related: [
      { kicker: 'Overview', label: 'AI Personality Rankings (25 Families × 6 Tests)', href: '/research/ai-personality-rankings' },
      ...families.slice(0, 3).map((f) => ({ kicker: 'Model Profile', label: `${f.name} test results & tuning tips`, href: `/models/${f.family_slug}` })),
      ...companions,
      { kicker: 'Human Test', label: 'Take the test yourself', href: '/tests/' },
      { kicker: 'Library', label: 'Browse tuning templates', href: '/library/' },
      { kicker: 'Tool', label: 'Build custom instructions', href: '/tools/custom-instructions-generator' }
    ]
  };
  spec.dataset = makeDatasetJsonLd(spec, 'atlas-overview.csv', spec.description);
  return spec;
}

function buildAll(opts = {}) {
  const { data, template, srcPath, isFixture } = loadIndex(opts);
  const promote = Boolean(opts.promote);
  const outDir = promote ? path.join(ROOT, 'research') : (opts.outDir || STAGING_DIR);
  const srcDir = path.join(outDir, 'src');
  const dataDir = promote ? LIVE_DATA_DIR : path.join(outDir, 'data');

  // Clean stale HTML/JSON/MD files ONLY in staging dir so old slugs never linger;
  // when promoting into research/, never delete non-Atlas studies.
  if (!promote) {
    if (fs.existsSync(outDir)) {
      for (const ent of fs.readdirSync(outDir, { withFileTypes: true })) {
        if (ent.isFile() && /\.(html|md|json)$/.test(ent.name)) fs.unlinkSync(path.join(outDir, ent.name));
      }
    }
    if (fs.existsSync(srcDir)) {
      for (const ent of fs.readdirSync(srcDir, { withFileTypes: true })) {
        if (ent.isFile() && ent.name.endsWith('.json')) fs.unlinkSync(path.join(srcDir, ent.name));
      }
    }
  }

  fs.mkdirSync(srcDir, { recursive: true });
  fs.mkdirSync(dataDir, { recursive: true });

  const csvFiles = writeCsvFiles(data.families, dataDir);
  if (!isFixture && !opts.outDir && !promote) {
    writeCsvFiles(data.families, LIVE_DATA_DIR);
  }
  if (!promote) {
    fs.writeFileSync(path.join(dataDir, 'index.json'), JSON.stringify(data, null, 2) + '\n');
  }

  const primaryCount = data.families.reduce((acc, f) => acc + (f.checkpoints || []).length, 0);
  const counts = {
    primaryCount,
    familyCount: data.families.length,
    testedCount: primaryCount + (data._quarantined_excluded || 0)
  };

  const specs = [];
  specs.push(buildOverviewSpec(data, template));
  for (const cfg of PER_TEST_CONFIGS) {
    specs.push(buildPerTestSpec(cfg, data, template));
  }
  for (const pageMeta of template.pages.filter((p) => p.kind === 'lab-cohort')) {
    specs.push(buildLabCohortSpec(pageMeta, data, template));
  }

  const built = [];
  for (const rawSpec of specs) {
    const spec = applyAuthoredProse(rawSpec, loadAuthoredProse(rawSpec.slug), counts);
    assertSectionsPlainLanguage(spec);
    const dates = { published: spec.published || '2026-11-26', updated: spec.updated || '2026-11-26' };
    const html = buildPage(spec, dates);
    const enhanced = enhance(html, `research/${spec.slug}.html`);
    const md = markdown(enhanced, `${SITE}${spec.route}`);
    const specOut = path.join(srcDir, `${spec.slug}.json`);
    const htmlOut = path.join(outDir, `${spec.slug}.html`);
    const mdOut = path.join(outDir, `${spec.slug}.md`);
    fs.writeFileSync(specOut, JSON.stringify(spec, null, 2) + '\n');
    fs.writeFileSync(htmlOut, html);
    fs.writeFileSync(mdOut, md);
    built.push({ slug: spec.slug, route: spec.route, specOut, htmlOut, mdOut });
  }

  return { srcPath, isFixture, promote, outDir, csvFiles, built };
}

module.exports = { buildAll, loadIndex, STAGING_DIR, PER_TEST_CONFIGS };

if (require.main === module) {
  const args = process.argv.slice(2);
  const useFixture = args.includes('--fixture');
  const promote = args.includes('--promote');
  const res = buildAll({ fixture: useFixture, promote });
  console.log(`Built ${res.built.length} Atlas ${res.promote ? 'LIVE' : 'staging'} pages (${res.isFixture ? 'stage0_fixture' : 'live_index'}) from ${path.relative(ROOT, res.srcPath)} -> ${path.relative(ROOT, res.outDir)}/`);
  console.log(`Numeric-only CSVs emitted: ${res.csvFiles.join(', ')}`);
}
