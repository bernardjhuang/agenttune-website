#!/usr/bin/env node
'use strict';
/**
 * Builds all 12 cross-family Personality Atlas pages (Plan v3.1 §11) into
 * `models/.atlas-staging/` during Stage 0 / Phase A:
 *   - 1 Overview (/research/ai-personality-rankings)
 *   - 6 Per-Test pages (big-five, hexaco, mbti, disc, enneagram, attachment)
 *   - 5 Lab/Cohort pages (claude, chatgpt, gemini, muse, open-source-models)
 *
 * Imports @site-eng's `tools/model-profiles/render-charts.js` and parameterized
 * `buildPage()` from `tools/build-guides.js`. Never writes to `research/` or
 * `research/src/` during staging; emits specs, HTML previews, and numeric-only
 * `atlas-<test>.csv` files strictly into `models/.atlas-staging/`.
 */

const fs = require('node:fs');
const path = require('node:path');
const renderCharts = require('./render-charts');
const { buildPage } = require('../build-guides');

const ROOT = path.resolve(__dirname, '..', '..');
const LIVE_INDEX_PATH = path.join(ROOT, 'research', 'data', 'model-profiles', 'index.json');
const FIXTURE_INDEX_PATH = path.join(ROOT, 'models', 'src', 'atlas', 'fixtures', 'index.json');
const TEMPLATE_PATH = path.join(ROOT, 'models', 'src', 'atlas', '_template.json');
const STAGING_DIR = path.join(ROOT, 'models', '.atlas-staging');
const STAGING_SRC_DIR = path.join(STAGING_DIR, 'src');
const STAGING_DATA_DIR = path.join(STAGING_DIR, 'data');
const SITE = 'https://agent-tune.com';

const LAB_ORDER = [
  'Anthropic', 'OpenAI', 'Google', 'xAI', 'Meta',
  'DeepSeek', 'Qwen', 'Moonshot', 'Zhipu', 'MiniMax',
  'Mistral', 'NVIDIA', 'Cohere'
];

const LAB_SLUGS = {
  Anthropic: '/research/what-personality-type-is-claude',
  OpenAI: '/research/what-personality-type-is-chatgpt',
  Google: '/research/what-personality-type-is-gemini',
  Meta: '/research/what-personality-type-is-muse'
};

const OPEN_WEIGHT_FAMILIES = new Set([
  'llama', 'deepseek-pro', 'deepseek-flash', 'qwen-max', 'qwen-coder',
  'kimi', 'glm', 'minimax', 'mistral-large', 'gemma', 'nemotron', 'cohere-command'
]);

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

function loadIndex(opts = {}) {
  const useFixture = Boolean(opts.fixture) || !fs.existsSync(LIVE_INDEX_PATH);
  const srcPath = opts.inputPath || (useFixture ? FIXTURE_INDEX_PATH : LIVE_INDEX_PATH);
  const data = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
  const template = JSON.parse(fs.readFileSync(TEMPLATE_PATH, 'utf8'));
  return { data, template, srcPath, isFixture: data.data_status === 'stage0_fixture' || useFixture };
}

function mbtiDisplay(cp) {
  const m = cp.mbti || {};
  const pat = m.modal_pattern || cp.modal_mbti || 'Withheld';
  const share = pct(m.modal_share ?? 0);
  const tie = pct(m.tie_rate ?? cp.mbti_tie_rate ?? 0);
  if (m.headline_allowed === false || cp.headline_allowed === false) {
    return `Withheld (${pat}; ${tie} ties)`;
  }
  return `${pat} (${share}; ${tie} ties)`;
}

function mbtiShortGuard(cp) {
  const m = cp.mbti || {};
  const pat = m.modal_pattern || cp.modal_mbti || 'Withheld';
  if (m.headline_allowed === false || cp.headline_allowed === false) {
    return 'Withheld (guard)';
  }
  return pat;
}

function attachmentDisplay(cp) {
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

function epistemicSection(template, testKey = null) {
  const points = (template.epistemic_block_4pt || []).map((pt) => (
    `<li><strong>${esc(pt.title)}:</strong> ${esc(pt.detail)} (<a href="${esc(pt.href)}">study details</a>)</li>`
  )).join('');
  const guard = testKey && template.test_validity_guards?.[testKey]
    ? `<p><strong>Instrument Validity Note (${esc(template.test_validity_guards[testKey].scale)}):</strong> ${esc(template.test_validity_guards[testKey].note)}</p>`
    : '';
  return {
    h2: 'Epistemic Scope & Validity Limits (4-Point Audit)',
    html: `${guard}<p>Every figure on this page reflects <strong>assistant self-report defaults under fixed zero-memory elicitation</strong> (<code>model-profiles-v1</code>), paired with Miller-Madow entropy and tie rates. Never read a questionnaire label as evidence that an AI model "is" a human personality type.</p><ol>${points}</ol>`
  };
}

function downloadLinksHtml(csvFile, label) {
  return `<p><strong>Open Data (Numeric-Only Exports, Zero Item Strings):</strong> <a href="/research/data/model-profiles/${esc(csvFile)}">Download ${esc(label)} CSV (<code>${esc(csvFile)}</code>)</a> · <a href="/research/data/model-profiles/index.json">Download 25-Family Index JSON (<code>index.json</code>)</a>. All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and <code>instrumentId</code>/<code>definitionHash</code> metadata only.</p>`;
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
    distribution: [
      { '@type': 'DataDownload', contentUrl: `${SITE}/research/data/model-profiles/${csvFile}`, encodingFormat: 'text/csv' },
      { '@type': 'DataDownload', contentUrl: `${SITE}/research/data/model-profiles/index.json`, encodingFormat: 'application/json' }
    ]
  };
}

function computeLabRollups(families) {
  return LAB_ORDER.map((lab) => {
    const members = families.filter((f) => f.provider === lab);
    const latests = members.map(getLatest);
    const meanOf = (fn) => latests.reduce((a, c) => a + fn(c), 0) / Math.max(1, latests.length);
    const propCount = members.filter((m) => m.tier === 'Proprietary').length;
    const openCount = members.length - propCount;
    return {
      lab,
      members,
      count: members.length,
      propCount,
      openCount,
      b5O: meanOf((c) => c.big_five.O.mean),
      b5C: meanOf((c) => c.big_five.C.mean),
      b5E: meanOf((c) => c.big_five.E.mean),
      b5A: meanOf((c) => c.big_five.A.mean),
      b5N: meanOf((c) => c.big_five.N.mean),
      hxH: meanOf((c) => c.ipip_hexaco.H.mean),
      hxC: meanOf((c) => c.ipip_hexaco.C.mean),
      discD: meanOf((c) => c.disc.D.mean),
      discS: meanOf((c) => c.disc.S.mean),
      discC: meanOf((c) => c.disc.C.mean),
      hmm: meanOf((c) => c.entropy_b5_hmm),
      anx: meanOf((c) => c.attachment.anxiety.mean),
      avd: meanOf((c) => c.attachment.avoidance.mean),
      mbtiTieRate: meanOf((c) => c.mbti?.tie_rate ?? c.mbti_tie_rate ?? 0)
    };
  });
}

function computeMovers(families) {
  return families
    .filter((f) => (f.checkpoints || []).length > 1)
    .map((f) => {
      const first = getEarliest(f);
      const last = getLatest(f);
      const dA = last.big_five.A.mean - first.big_five.A.mean;
      const dN = last.big_five.N.mean - first.big_five.N.mean;
      const dH = last.ipip_hexaco.H.mean - first.ipip_hexaco.H.mean;
      const dEnt = last.entropy_b5_hmm - first.entropy_b5_hmm;
      const mag = Math.abs(dA) + Math.abs(dN) + Math.abs(dEnt) * 10;
      return { fam: f, first, last, dA, dN, dH, dEnt, mag };
    })
    .sort((a, b) => b.mag - a.mag);
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

  // 1. atlas-overview.csv
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

  // 2. atlas-big-five.csv
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

  // 3. atlas-hexaco.csv (1.00-5.00 IPIP-HEXACO proxy)
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

  // 4. atlas-mbti.csv
  files['atlas-mbti.csv'] = toCsv(
    ['family_slug', 'provider', 'checkpoint_id', 'n_valid', 'modal_share', 'runner_up_share', 'tie_rate', 'headline_allowed', 'axis_EI', 'axis_SN', 'axis_TF', 'axis_JP', 'delta_tie_rate_earliest_to_latest'],
    families.map((f) => {
      const first = getEarliest(f), c = getLatest(f), m = c.mbti || {};
      return [
        f.family_slug, f.provider, c.checkpoint_id, c.n_valid,
        m.modal_share ?? '', m.runner_up_share ?? '', m.tie_rate ?? c.mbti_tie_rate,
        m.headline_allowed ? 1 : 0,
        m.axes?.EI ?? '', m.axes?.SN ?? '', m.axes?.TF ?? '', m.axes?.JP ?? '',
        f2((m.tie_rate ?? c.mbti_tie_rate) - (first.mbti_tie_rate ?? 0))
      ];
    })
  );

  // 5. atlas-disc.csv
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

  // 6. atlas-enneagram.csv
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

  // 7. atlas-attachment.csv
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

  // 25 families × 6 instruments normalized heatmap (0-100 index for cross-test comparison)
  const heatRows = sortedByA.map((f) => shortLabel(f.name, 22));
  const heatCols = ['B5 Agree', 'HX-H (1-5)', 'MBTI Share', 'DISC S/C', 'Ennea Clr', 'Att. Sec'];
  const heatVals = sortedByA.map((f) => {
    const c = getLatest(f);
    const b5Idx = ((c.big_five.A.mean - 10) / 40) * 100;
    const hxIdx = ((c.ipip_hexaco.H.mean - 1) / 4) * 100;
    const mbtiIdx = (c.mbti?.modal_share ?? 0.5) * 100;
    const discIdx = (((c.disc.S.mean + c.disc.C.mean) / 2 - 4) / 16) * 100;
    const enneaIdx = (1 - (c.enneagram?.tie_rate ?? 0.5)) * 100;
    const attIdx = Math.max(0, Math.min(100, (1 - ((c.attachment.anxiety.mean + c.attachment.avoidance.mean - 2) / 12)) * 100));
    return [b5Idx, hxIdx, mbtiIdx, discIdx, enneaIdx, attIdx].map((v) => Math.round(v * 10) / 10);
  });

  const figHeatmap = renderCharts.wrapChart(
    'atlas-overview-heatmap',
    renderCharts.heatmapMatrix({
      id: 'atlas-overview-heatmap',
      title: '25 Model Families × 6 Instruments Overview Matrix (0–100 Normalized Index)',
      desc: 'Normalized 0 to 100 index across Big Five Agreeableness, IPIP-HEXACO Honesty-Humility proxy, MBTI modal share, DISC Steadiness/Conscientiousness, Enneagram non-tie clarity, and ECR-R Attachment security for all 25 model families.',
      rows: heatRows,
      cols: heatCols,
      values: heatVals,
      min: 0,
      max: 100,
      decimals: 1
    }),
    'Figure 1. Cross-family 25 × 6 normalized index (0–100) sorted by IPIP-50 Agreeableness. Native scales (10–50 Big Five, 1.00–5.00 IPIP-HEXACO proxy, 4–20 DISC/Enneagram, 1–7 Attachment) appear in the master table below.'
  );

  const entBars = renderCharts.wrapChart(
    'atlas-overview-entropy',
    renderCharts.horizontalBars({
      id: 'atlas-overview-entropy',
      title: 'Miller-Madow Per-Item Shannon Entropy Across 25 Families (H_MM bits)',
      desc: 'Big Five Miller-Madow item entropy (bits, max 2.322) across all 25 families, showing the 0.20-bit Crystalline cutoff.',
      rows: sortedByEnt.map((f) => {
        const c = getLatest(f);
        return {
          label: shortLabel(f.name, 22),
          sub: `${f.tier} · ${c.crystallinity_tier}`,
          value: Number(c.entropy_b5_hmm),
          color: f.color || (f.tier === 'Proprietary' ? '#a8482a' : '#3a72c4')
        };
      }),
      min: 0,
      max: Math.max(1.65, ...sortedByEnt.map((f) => Math.ceil((getLatest(f).entropy_b5_hmm + 0.15) * 10) / 10)),
      decimals: 3,
      unit: ' b',
      cutoff: 0.20,
      cutoffLabel: 'Crystalline < 0.20 b'
    }),
    'Figure 2. Miller-Madow corrected item Shannon entropy (H_MM bits) across all 25 families. Values below 0.20 bits indicate Crystalline response stability.'
  );

  const masterTable = pressTable(
    '25 model families across 6 personality inventories',
    ['Family (Profile)', 'Lab / Tier', 'Latest (n)', 'B5 A (10–50) [95% CI]', 'HX-H (1–5)', 'H_MM · Crystallinity', 'MBTI (Tie-Aware)', 'DISC · Ennea · Att.'],
    sortedByA.map((f) => {
      const c = getLatest(f);
      return [
        `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
        `${esc(f.provider)} · ${esc(f.tier)}`,
        `${esc(c.label)} (n=${c.n_valid})`,
        `<strong>${f1(c.big_five.A.mean)}</strong> <span class="rh-note">[${f1(c.big_five.A.ci_low)}–${f1(c.big_five.A.ci_high)}]</span>`,
        `${f2(c.ipip_hexaco.H.mean)} <span class="rh-note">[${f2(c.ipip_hexaco.H.ci_low)}–${f2(c.ipip_hexaco.H.ci_high)}]</span>`,
        `${f3(c.entropy_b5_hmm)} b · ${esc(c.crystallinity_tier)}`,
        esc(mbtiDisplay(c)),
        `${esc(c.disc.modal_pattern)} · ${esc(c.enneagram.modal_pattern)} · ${attachmentDisplay(c)}`
      ];
    }),
    [3, 4]
  );

  const labTable = pressTable(
    'Per-lab rollups across 13 labs',
    ['Lab / Rollup', 'Families', 'B5 O / C / E / A / N (10–50)', 'HX-H / HX-C (1–5)', 'Mean H_MM (bits)', 'MBTI Tie Rate'],
    labs.map((l) => {
      const labLink = LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab);
      return [
        labLink,
        `${l.count} (${l.propCount}P / ${l.openCount}O)`,
        `${f1(l.b5O)} · ${f1(l.b5C)} · ${f1(l.b5E)} · <strong>${f1(l.b5A)}</strong> · ${f1(l.b5N)}`,
        `${f2(l.hxH)} / ${f2(l.hxC)}`,
        f3(l.hmm),
        pct(l.mbtiTieRate)
      ];
    }),
    [4, 5]
  );

  const moversTable = pressTable(
    'Biggest version-to-version movers across checkpoints',
    ['Family', 'Earliest → Latest', 'Δ B5 Agree (10–50)', 'Δ B5 Neurot (10–50)', 'Δ HX-H (1–5)', 'Δ Entropy (H_MM bits)'],
    movers.slice(0, 12).map((m) => [
      `<a href="/models/${esc(m.fam.family_slug)}">${esc(m.fam.name)}</a>`,
      `${esc(m.first.label)} → ${esc(m.last.label)}`,
      `${m.dA >= 0 ? '+' : ''}${f1(m.dA)}`,
      `${m.dN >= 0 ? '+' : ''}${f1(m.dN)}`,
      `${m.dH >= 0 ? '+' : ''}${f2(m.dH)}`,
      `${m.dEnt >= 0 ? '+' : ''}${f3(m.dEnt)}`
    ]),
    [2, 3, 4, 5]
  );

  // Imported legacy anchors (Sept/May/Nov 170-item, hexaco: null)
  const anchors = [];
  for (const f of families) {
    for (const a of f.historical_anchors || []) {
      anchors.push({ fam: f, anchor: a });
    }
  }
  const anchorTable = pressTable(
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

  const perTestNav = `<ul>
    <li><a href="/research/ai-big-five-scores-by-model">Big Five (IPIP-50, 10–50) results by model</a></li>
    <li><a href="/research/ai-hexaco-scores-by-model">IPIP-HEXACO proxy (1.00–5.00) results by model</a></li>
    <li><a href="/research/ai-mbti-results-by-model">MBTI (OEJTS tie-aware) results by model</a></li>
    <li><a href="/research/ai-disc-results-by-model">DISC (ODAT) results by model</a></li>
    <li><a href="/research/ai-enneagram-results-by-model">Enneagram (OEPS) results by model</a></li>
    <li><a href="/research/ai-attachment-results-by-model">Attachment (ECR-R) results by model</a></li>
  </ul>`;

  const spec = {
    slug: 'ai-personality-rankings',
    route: '/research/ai-personality-rankings',
    section: 'research',
    published: '2026-09-25',
    updated: '2026-11-26',
    title: 'AI Personality Rankings: 25 Model Families × 6 Tests | AgentTune',
    description: 'Cross-family rankings across 25 AI model families (93 checkpoints) and 6 inventories with 95% CIs, Miller-Madow entropy, IPIP-HEXACO proxy (1–5), and legacy anchors.',
    pill: 'Research · Personality Atlas',
    h1: 'AI personality rankings across 25 model families and 6 tests.',
    dek: `Assistant self-report defaults across ${families.length} families (${totalCheckpoints} checkpoints) under unified zero-memory elicitation, paired with Crystallinity tiers and 13 lab rollups.`,
    lede: `This Atlas aggregates ${families.length} model families and ${totalCheckpoints} OpenRouter checkpoints under the fixed 230-item model-profiles-v1 protocol (170 frozen items plus the 60-item public-domain IPIP-HEXACO proxy). Every table keeps 10–50 Big Five sums separate from 1.00–5.00 IPIP-HEXACO means and preserves imported 170-item Sept/May/Nov anchors with hexaco: null.`,
    answer: `Across ${families.length} model families under fixed zero-memory elicitation (${data.data_status}), ${topA.name} leads IPIP-50 Agreeableness (${f1(getLatest(topA).big_five.A.mean)}/50) while ${lowA.name} scores lowest (${f1(getLatest(lowA).big_five.A.mean)}/50). Per-item Miller-Madow entropy spans from ${f3(getLatest(lowEnt).entropy_b5_hmm)} bits (${lowEnt.name}, Crystalline) to ${f3(getLatest(highEnt).entropy_b5_hmm)} bits (${highEnt.name}, Fluid).`,
    jsonHref: '/research/data/model-profiles/index.json',
    csvHref: '/research/data/model-profiles/atlas-overview.csv',
    sections: [
      {
        h2: 'Atlas Snapshot & Instrument Directory',
        html: statStripHtml('atlas-overview-strip', [
          { num: `${families.length} / ${totalCheckpoints}`, label: 'Families / Checkpoints', note: 'Unified 230-item model-profiles-v1 battery.', color: '#a8482a' },
          { num: `${f1(getLatest(lowA).big_five.A.mean)}–${f1(getLatest(topA).big_five.A.mean)}`, label: 'B5 Agreeableness (10–50)', note: `${lowA.name} vs. ${topA.name}.`, color: '#3a72c4' },
          { num: `${f3(getLatest(lowEnt).entropy_b5_hmm)}–${f3(getLatest(highEnt).entropy_b5_hmm)} b`, label: 'Miller-Madow H_MM', note: 'Crystalline (<0.20 b) to Fluid (>=0.75 b).', color: '#2f8a5b' },
          { num: '13 Labs', label: 'Provider Rollups', note: 'Includes Anthropic, OpenAI, Google, Meta, xAI & 8 open-weight labs.', color: '#5b4dc0' }
        ]) + perTestNav + downloadLinksHtml('atlas-overview.csv', 'Atlas Overview')
      },
      {
        h2: '25 Families × 6 Instruments Overview & Master Table',
        html: figHeatmap + masterTable
      },
      {
        h2: 'Miller-Madow Entropy & Crystallinity Tiers',
        html: `<p>Item-level Shannon entropy with Miller-Madow bias correction (<code>H_MM = H + (k - 1)/(2n ln 2)</code>) separates Crystalline models (<code>&lt; 0.20 bits</code>), Semi-crystalline models (<code>0.20–0.75 bits</code>), and Fluid models (<code>&gt;= 0.75 bits</code>).</p>` + entBars
      },
      {
        h2: 'Per-Lab Rollups (13 Labs)',
        html: `<p>Mean newest-checkpoint self-report scores aggregated by lab. Proprietary labs cluster in Agreeableness and low entropy, while open-weight labs span a wider distribution.</p>` + labTable
      },
      {
        h2: 'Biggest Version-to-Version Movers',
        html: `<p>Cross-version shifts comparing the earliest and newest measured checkpoints inside each multi-checkpoint family under the uniform <code>model-profiles-v1</code> protocol.</p>` + moversTable
      },
      {
        h2: 'Imported Sept/May & Nov-2026 170-Item Legacy Anchors',
        html: `<p>Earlier 2026 studies ran 170-item cohorts without IPIP-HEXACO-60. We preserve them as explicitly labeled <code>imported-nov2026-170</code> / <code>imported-sep2026-170</code> anchors (<code>hexaco: null</code>) rather than splicing them onto <code>model-profiles-v1</code> trend lines.</p>` + anchorTable
      },
      epistemicSection(template, null)
    ],
    faq: [
      {
        q: 'Do these rankings mean an AI model "is" an MBTI or Enneagram type?',
        a: 'No. Every score represents assistant self-report defaults under fixed zero-memory elicitation. Where exact ties or overlapping 95% Wilson CIs fail the binomial headline guard, discrete 4-letter labels are withheld.'
      },
      {
        q: 'Why is IPIP-HEXACO reported on 1–5 while Big Five is on 10–50?',
        a: 'IPIP-50 uses 10 items per trait summed to 10–50, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain, distinct from commercial Lee & Ashton norms) reports 1.00–5.00 domain means across 24 facets.'
      },
      {
        q: 'How are September and May 2026 historical cohorts handled?',
        a: 'They are preserved strictly as separate imported-protocol anchors (hexaco: null) and are never interpolated into unified model-profiles-v1 checkpoint trajectories.'
      }
    ],
    sources: [
      { label: 'AgentTune Model Profiles Directory', href: `${SITE}/models/` },
      { label: 'Factor Collapse & MTMM Audit', href: `${SITE}/research/ai-big-one-factor-collapse-mtmm-audit` },
      { label: 'Crystalline vs. Fluid Entropy Study', href: `${SITE}/research/ai-persona-entropy-crystalline-vs-fluid-minds` }
    ],
    related: [
      { kicker: 'Per-Test', label: 'Big Five scores across 25 model families', href: '/research/ai-big-five-scores-by-model' },
      { kicker: 'Per-Test', label: 'IPIP-HEXACO proxy scores (1–5 scale)', href: '/research/ai-hexaco-scores-by-model' },
      { kicker: 'Cohort', label: 'Open-weight AI self-report results', href: '/research/what-personality-type-are-open-source-models' }
    ]
  };
  spec.dataset = makeDatasetJsonLd(spec, 'atlas-overview.csv', spec.description);
  return spec;
}

// ---------- 2–7. Six Per-Test Pages ----------
function buildPerTestSpec(testCfg, data, template) {
  const families = data.families;
  const labs = computeLabRollups(families);
  const meta = template.pages.find((p) => p.slug === testCfg.slug);

  let ranked = [...families];
  let chartHtml = '';
  let tableHtml = '';
  let labTableHtml = '';
  let answerText = '';
  let extraFaq = [];

  if (testCfg.key === 'big-five') {
    ranked.sort((a, b) => getLatest(b).big_five.A.mean - getLatest(a).big_five.A.mean);
    const top = ranked[0], low = ranked[ranked.length - 1];
    answerText = `Across ${families.length} families on the 10–50 IPIP-50 scale, ${top.name} leads Agreeableness at ${f1(getLatest(top).big_five.A.mean)}/50 (n=${getLatest(top).n_valid}) while ${low.name} records ${f1(getLatest(low).big_five.A.mean)}/50. Proprietary labs average ${f1(labs.slice(0, 4).reduce((s, l) => s + l.b5A, 0) / 4)}/50 Agreeableness with narrow CIs.`;
    chartHtml = renderCharts.wrapChart(
      'atlas-b5-agree-bars',
      renderCharts.horizontalBars({
        id: 'atlas-b5-agree-bars',
        title: 'Big Five Agreeableness Results Across 25 Families (10–50 IPIP-50 Scale)',
        desc: 'Ranked IPIP-50 Agreeableness means (10 to 50 sum scale) across newest checkpoints of all 25 families.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return {
            label: shortLabel(f.name, 22),
            sub: `${f.provider} · n=${c.n_valid}`,
            value: c.big_five.A.mean,
            color: f.color || '#a8482a'
          };
        }),
        min: 10, max: 50, decimals: 1, cutoff: 30, cutoffLabel: 'Midpoint 30'
      }),
      'Figure 1. IPIP-50 Agreeableness results (10–50 sum scale, midpoint 30) across all 25 model families.'
    );
    tableHtml = pressTable(
      'Big Five IPIP-50 results ranked by Agreeableness',
      ['Family (Profile)', 'Checkpoint (n)', 'Openness [95% CI]', 'Conscient. [95% CI]', 'Extrav. [95% CI]', 'Agreeable. [95% CI]', 'Neurot. [95% CI]', 'Version Shift (ΔA)'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dA = c.big_five.A.mean - e.big_five.A.mean;
        const cell = (d) => `${f1(d.mean)} <span class="rh-note">[${f1(d.ci_low)}–${f1(d.ci_high)}]</span>`;
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          cell(c.big_five.O), cell(c.big_five.C), cell(c.big_five.E), `<strong>${cell(c.big_five.A)}</strong>`, cell(c.big_five.N),
          f.checkpoints.length > 1 ? `${dA >= 0 ? '+' : ''}${f1(dA)}` : 'Single cp'
        ];
      }),
      [7]
    );
    labTableHtml = pressTable(
      'Big Five lab aggregates (10-50 scale)',
      ['Lab', 'Families', 'Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f1(l.b5O), f1(l.b5C), f1(l.b5E), f1(l.b5A), f1(l.b5N)]),
      [1, 2, 3, 4, 5, 6]
    );
    extraFaq = [{ q: 'Why are Big Five scores shown as 10–50 instead of percentiles?', a: 'Raw 10–50 IPIP-50 sums keep scale units exact and avoid projecting human population percentile norms onto AI self-reports.' }];
  } else if (testCfg.key === 'ipip-hexaco') {
    ranked.sort((a, b) => getLatest(b).ipip_hexaco.H.mean - getLatest(a).ipip_hexaco.H.mean);
    const top = ranked[0], low = ranked[ranked.length - 1];
    answerText = `Using the public-domain 60-item IPIP-HEXACO proxy (1.00–5.00 mean scale, LicenseRef-IPIP-Public-Domain), ${top.name} leads Honesty-Humility at ${f2(getLatest(top).ipip_hexaco.H.mean)}/5.00 (n=${getLatest(top).n_valid}) and ${low.name} records ${f2(getLatest(low).ipip_hexaco.H.mean)}/5.00. These scores are strictly separated from 10–50 Big Five sums and commercial Lee & Ashton norms.`;
    chartHtml = renderCharts.wrapChart(
      'atlas-hexaco-h-bars',
      renderCharts.horizontalBars({
        id: 'atlas-hexaco-h-bars',
        title: 'IPIP-HEXACO Proxy Honesty-Humility Results (1.00–5.00 Scale, 25 Families)',
        desc: 'Public-domain 60-item IPIP-HEXACO proxy Honesty-Humility domain means on the 1.00 to 5.00 scale across all 25 families.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return {
            label: shortLabel(f.name, 22),
            sub: `${f.provider} · n=${c.n_valid}`,
            value: c.ipip_hexaco.H.mean,
            color: f.color || '#3a72c4'
          };
        }),
        min: 1, max: 5, decimals: 2, cutoff: 3, cutoffLabel: 'Midpoint 3.00'
      }),
      'Figure 1. Public-domain 60-item IPIP-HEXACO proxy Honesty-Humility (H) domain means on a 1.00–5.00 scale (distinct from 10–50 Big Five sums and commercial Lee & Ashton norms).'
    );
    tableHtml = pressTable(
      'IPIP-HEXACO proxy (1.00-5.00) results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'H (1–5) [95% CI]', 'E (1–5)', 'X (1–5)', 'A (1–5)', 'C (1–5)', 'O (1–5)', 'Version Shift (ΔH)'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dH = c.ipip_hexaco.H.mean - e.ipip_hexaco.H.mean;
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          `<strong>${f2(c.ipip_hexaco.H.mean)}</strong> <span class="rh-note">[${f2(c.ipip_hexaco.H.ci_low)}–${f2(c.ipip_hexaco.H.ci_high)}]</span>`,
          f2(c.ipip_hexaco.E.mean), f2(c.ipip_hexaco.X.mean), f2(c.ipip_hexaco.A.mean), f2(c.ipip_hexaco.C.mean), f2(c.ipip_hexaco.O.mean),
          f.checkpoints.length > 1 ? `${dH >= 0 ? '+' : ''}${f2(dH)}` : 'Single cp'
        ];
      }),
      [3, 4, 5, 6, 7, 8]
    );
    labTableHtml = pressTable(
      'IPIP-HEXACO proxy lab aggregates (1.00-5.00 scale)',
      ['Lab', 'Families', 'H Mean (1–5)', 'C Mean (1–5)'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f2(l.hxH), f2(l.hxC)]),
      [1, 2, 3]
    );
    extraFaq = [{ q: 'Is this the commercial Lee & Ashton HEXACO-60 test?', a: 'No. We administer a 60-item public-domain IPIP-HEXACO proxy (agenttune-ipip-hexaco60, 10 items per domain across 24 facets) on a 1.00–5.00 mean scale to preserve open licensing and avoid synthetic linear projections.' }];
  } else if (testCfg.key === 'mbti') {
    ranked.sort((a, b) => (getLatest(a).mbti?.tie_rate ?? 0) - (getLatest(b).mbti?.tie_rate ?? 0));
    const guarded = ranked.filter((f) => getLatest(f).mbti?.headline_allowed === false).length;
    answerText = `Under tie-preserving OEJTS scoring across ${families.length} families, exact midpoint ties prevent clean single-type headlines on ${guarded} tie-heavy families (binomial 95% Wilson CI guard active). We report tie-aware patterns, axis tie rates, and modal shares—never claiming a model "is" an MBTI type.`;
    chartHtml = renderCharts.wrapChart(
      'atlas-mbti-stacked',
      renderCharts.stackedRows({
        id: 'atlas-mbti-stacked',
        title: 'MBTI Results Across 25 Families: Modal Share vs. Axis Ties (%, Binomial Guard)',
        desc: 'Stacked breakdown of resolved modal MBTI share, axis-tie runs, and non-modal variants across all 25 families.',
        rows: ranked.map((f) => {
          const c = getLatest(f), m = c.mbti || {};
          const modal = Math.round((m.modal_share ?? 0.5) * 100);
          const tie = Math.min(100 - modal, Math.round((m.tie_rate ?? 0) * 100));
          const other = Math.max(0, 100 - modal - tie);
          return {
            label: `${shortLabel(f.name, 14)}${m.headline_allowed === false ? ' *' : ''}`,
            values: { modal, tie, other }
          };
        }),
        segs: [
          { key: 'modal', name: 'Resolved modal pattern (%)', color: '#a8482a' },
          { key: 'tie', name: 'Exact axis tie runs (%)', color: '#a8482a', hatch: true, text: '#a8482a' },
          { key: 'other', name: 'Runner-up / other (%)', color: '#7a7468' }
        ],
        max: 100
      }),
      'Figure 1. Tie-aware MBTI breakdown (%) across 25 families. Rows marked * fail the binomial Wilson 95% CI headline guard due to high tie rates or overlapping runner-up shares.'
    );
    tableHtml = pressTable(
      'MBTI tie-aware results across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'Headline Guard Status', 'Modal Share', 'Tie Rate', 'Mean Axes (EI/SN/TF/JP)', 'Version Shift (ΔTies)'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), m = c.mbti || {};
        const dTie = (m.tie_rate ?? 0) - (e.mbti_tie_rate ?? 0);
        const ax = m.axes || {};
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          esc(mbtiDisplay(c)),
          pct(m.modal_share ?? 0),
          pct(m.tie_rate ?? 0),
          `${f2(ax.EI ?? 0)} / ${f2(ax.SN ?? 0)} / ${f2(ax.TF ?? 0)} / ${f2(ax.JP ?? 0)}`,
          f.checkpoints.length > 1 ? `${dTie >= 0 ? '+' : ''}${pct(dTie)}` : 'Single cp'
        ];
      }),
      [3, 4, 6]
    );
    labTableHtml = pressTable(
      'MBTI tie-rate aggregates by lab',
      ['Lab', 'Families', 'Mean Axis Tie Rate', 'Headline Guard Passes'],
      labs.map((l) => {
        const passes = l.members.filter((m) => getLatest(m).mbti?.headline_allowed).length;
        return [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), pct(l.mbtiTieRate), `${passes} / ${l.count}`];
      }),
      [1, 2, 3]
    );
    extraFaq = [{ q: 'When is a single 4-letter MBTI headline withheld?', a: 'Whenever the resolved modal type\'s 95% Wilson binomial lower bound fails to clear both the runner-up upper bound and the unresolved-tie upper bound, we withhold a single 4-letter headline and show the tie-aware split.' }];
  } else if (testCfg.key === 'disc') {
    ranked.sort((a, b) => getLatest(a).disc.D.mean - getLatest(b).disc.D.mean);
    const lowD = ranked[0], highD = ranked[ranked.length - 1];
    answerText = `Across ${families.length} families on the 4–20 DISC ODAT scale, Dominance (D) spans from ${f1(getLatest(lowD).disc.D.mean)} (${lowD.name}) to ${f1(getLatest(highD).disc.D.mean)} (${highD.name}), inversely tracking Neuroticism/refusal caution. Most proprietary models cluster in S/C blends with 17%–82% exact top-score ties.`;
    chartHtml = renderCharts.wrapChart(
      'atlas-disc-d-bars',
      renderCharts.horizontalBars({
        id: 'atlas-disc-d-bars',
        title: 'DISC Dominance (D) Results Across 25 Families (4–20 Scale)',
        desc: 'ODAT Dominance (D) mean on the 4 to 20 scale across all 25 families, showing low-D RLHF refusal/caution clustering vs open-weight spread.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return {
            label: shortLabel(f.name, 22),
            sub: `N=${f1(c.big_five.N.mean)} · ties ${pct(c.disc.tie_rate)}`,
            value: c.disc.D.mean,
            color: f.color || '#855b1c'
          };
        }),
        min: 4, max: 20, decimals: 1, cutoff: 12, cutoffLabel: 'Midpoint 12'
      }),
      'Figure 1. DISC Dominance (D, 4–20 scale). Lower Dominance in proprietary assistants inversely tracks low-Neuroticism/refusal-caution RLHF priors.'
    );
    tableHtml = pressTable(
      'DISC ODAT results (4-20 scale) across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'D [95% CI]', 'I [95% CI]', 'S [95% CI]', 'C [95% CI]', 'Tie Rate · Modal', 'Version Shift (ΔD)'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dD = c.disc.D.mean - (e.disc?.D?.mean ?? c.disc.D.mean);
        const cell = (d) => `${f1(d.mean)} <span class="rh-note">[${f1(d.ci_low)}–${f1(d.ci_high)}]</span>`;
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          cell(c.disc.D), cell(c.disc.I), cell(c.disc.S), cell(c.disc.C),
          `${pct(c.disc.tie_rate)} · ${esc(c.disc.modal_pattern)}`,
          f.checkpoints.length > 1 ? `${dD >= 0 ? '+' : ''}${f1(dD)}` : 'Single cp'
        ];
      }),
      [7]
    );
    labTableHtml = pressTable(
      'DISC lab aggregates (4-20 scale)',
      ['Lab', 'Families', 'D Mean', 'S Mean', 'C Mean'],
      labs.map((l) => [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f1(l.discD), f1(l.discS), f1(l.discC)]),
      [1, 2, 3, 4]
    );
    extraFaq = [{ q: 'Why do proprietary models score near the floor on DISC Dominance?', a: 'High-agreeableness RLHF training rejects assertive/confrontational Dominance items while endorsing Steadiness and Conscientiousness—an empirical refusal/politeness artifact rather than capability.' }];
  } else if (testCfg.key === 'enneagram') {
    ranked.sort((a, b) => getLatest(a).enneagram.tie_rate - getLatest(b).enneagram.tie_rate);
    const guardFail = ranked.filter((f) => !getLatest(f).enneagram.headline_allowed).length;
    answerText = `Across ${families.length} families on the 36-item OEPS Enneagram inventory (4–20 per type), ${guardFail} of ${families.length} families fail the single-type binomial headline guard because 4-item subscales produce 22%–64% top-score ties among Types 1, 5, 2, and 8.`;
    chartHtml = renderCharts.wrapChart(
      'atlas-ennea-ties',
      renderCharts.horizontalBars({
        id: 'atlas-ennea-ties',
        title: 'Enneagram Top-Score Tie Rate Across 25 Families (%)',
        desc: 'Percentage of administrations with an exact top-score tie across the 9 Enneagram types on OEPS (4-item subscales).',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return {
            label: shortLabel(f.name, 22),
            sub: `${c.enneagram.modal_pattern} · n=${c.n_valid}`,
            value: Math.round(c.enneagram.tie_rate * 100),
            color: c.enneagram.headline_allowed ? '#2f8a5b' : '#a8482a'
          };
        }),
        min: 0, max: 100, decimals: 0, unit: '%', cutoff: 40, cutoffLabel: 'High tie >=40%'
      }),
      'Figure 1. Percentage of runs with exact top-score Enneagram ties per family. Green bars pass the binomial headline guard; terracotta bars require multi-type tie reporting.'
    );
    tableHtml = pressTable(
      'Enneagram OEPS results (4-20 scale) across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'Modal Cluster', 'Top-1 [95% CI]', 'Top-2', 'Top-3', 'Tie Rate', 'Version Shift'],
      ranked.map((f) => {
        const c = getLatest(f), t = c.enneagram.top_types || [];
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          esc(c.enneagram.modal_pattern),
          t[0] ? `${esc(t[0].label)}: ${f1(t[0].mean)} <span class="rh-note">[${f1(t[0].ci_low)}–${f1(t[0].ci_high)}]</span>` : '—',
          t[1] ? `${esc(t[1].label)}: ${f1(t[1].mean)}` : '—',
          t[2] ? `${esc(t[2].label)}: ${f1(t[2].mean)}` : '—',
          pct(c.enneagram.tie_rate),
          f.checkpoints.length > 1 ? `${f.checkpoints.length} cps` : 'Single cp'
        ];
      }),
      [6]
    );
    labTableHtml = pressTable(
      'Enneagram lab tie summary',
      ['Lab', 'Families', 'Mean Tie Rate', 'Headline-Allowed Count'],
      labs.map((l) => {
        const meanTie = l.members.reduce((s, m) => s + getLatest(m).enneagram.tie_rate, 0) / Math.max(1, l.count);
        const allow = l.members.filter((m) => getLatest(m).enneagram.headline_allowed).length;
        return [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), pct(meanTie), `${allow} / ${l.count}`];
      }),
      [1, 2, 3]
    );
    extraFaq = [{ q: 'Why do AI models tie so often on the Enneagram?', a: 'OEPS uses just 4 items per Enneagram type (integers 4–20), so clustered answers around Types 1, 5, 2, and 8 tie at the exact same sum in 25%–64% of runs.' }];
  } else if (testCfg.key === 'attachment') {
    ranked.sort((a, b) => getLatest(a).attachment.avoidance.mean - getLatest(b).attachment.avoidance.mean);
    const clampedCount = ranked.filter((f) => getLatest(f).attachment.midpoint_clamp).length;
    answerText = `Across ${families.length} families on the 1–7 ECR-R Attachment inventory, most models cluster in the Secure quadrant (Anxiety <= 4.00, Avoidance <= 4.00), while ${clampedCount} families (${ranked.filter((f) => getLatest(f).attachment.midpoint_clamp).map((f) => f.name).join(', ')}) trigger the explicit Midpoint-Clamp badge near 4.00/4.00 due to embodied romantic-item neutrality.`;
    // Plot lab centroids on plane() with greedy collision-free label placement
    const padL = 50, padR = 20, padT = 14, padB = 30, W = 600, H = 380;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const px = (v) => padL + ((v - 1) / 4) * plotW;
    const py = (v) => padT + (1 - (v - 1) / 4) * plotH;
    const placedBoxes = [];
    const candidateOffsets = [
      [10, -8, 'start'], [-10, -8, 'end'], [10, 14, 'start'], [-10, 14, 'end'],
      [12, 4, 'start'], [-12, 4, 'end'], [10, -20, 'start'], [-10, -20, 'end'],
      [10, 26, 'start'], [-10, 26, 'end'], [0, -14, 'start'], [0, 22, 'end']
    ];
    const labPoints = labs.slice(0, 10).map((l) => {
      const xv = Math.min(4.8, Math.max(1.05, l.anx));
      const yv = Math.min(4.8, Math.max(1.05, l.avd));
      const cx = px(xv), cy = py(yv);
      const w = l.lab.length * 6.4;
      let chosen = candidateOffsets[0];
      for (const cand of candidateOffsets) {
        const [dx, dy, anchor] = cand;
        const tx = cx + dx, ty = cy + dy;
        const x0 = anchor === 'start' ? tx : tx - w, x1 = anchor === 'start' ? tx + w : tx;
        const y0 = ty - 10, y1 = ty + 3;
        if (x0 < padL || x1 > W - padR || y0 < padT || y1 > padT + plotH) continue;
        const hits = placedBoxes.some((b) => x0 < b.x1 && x1 > b.x0 && y0 < b.y1 && y1 > b.y0);
        if (!hits) { chosen = cand; break; }
      }
      const [dx, dy, anchor] = chosen;
      const tx = cx + dx, ty = cy + dy;
      placedBoxes.push({ x0: anchor === 'start' ? tx : tx - w, x1: anchor === 'start' ? tx + w : tx, y0: ty - 10, y1: ty + 3 });
      return { label: l.lab, color: '#3a72c4', x: xv, y: yv, dx, dy, anchor };
    });
    const planeChart = renderCharts.wrapChart(
      'atlas-att-plane',
      renderCharts.plane({
        id: 'atlas-att-plane',
        title: 'ECR-R Attachment Plane by Lab Centroid (1–7 Scale, Showing 1–5)',
        desc: 'Lab-level Anxiety vs Avoidance centroids on the 1 to 7 ECR-R Attachment plane (4.00 cutoff).',
        points: labPoints,
        lo: 1, hi: 5, cut: 4,
        xLabel: 'Anxiety (1–7 scale, showing 1–5)',
        yLabel: 'Avoidance (1–7 scale, showing 1–5)'
      }),
      'Figure 1. Lab centroids on the ECR-R Attachment plane (cutoff 4.00). Individual family coordinates and midpoint-clamp flags appear in the table and ranked bar chart below.'
    );
    const avdBars = renderCharts.wrapChart(
      'atlas-att-avoidance-bars',
      renderCharts.horizontalBars({
        id: 'atlas-att-avoidance-bars',
        title: 'ECR-R Avoidance Results Across 25 Families (1.00–7.00 Scale)',
        desc: 'ECR-R Avoidance domain mean (1.00 to 7.00 scale, 4.00 quadrant cutoff) across all 25 families.',
        rows: ranked.map((f) => {
          const c = getLatest(f);
          return {
            label: shortLabel(f.name, 22),
            sub: `${c.attachment.midpoint_clamp ? 'Midpoint Clamp · ' : ''}Anx ${f2(c.attachment.anxiety.mean)}`,
            value: c.attachment.avoidance.mean,
            color: c.attachment.midpoint_clamp ? '#855b1c' : '#2f8a5b'
          };
        }),
        min: 1, max: 5, decimals: 2, cutoff: 4, cutoffLabel: 'Cutoff 4.00'
      }),
      'Figure 2. ECR-R Avoidance means across all 25 families (amber bars mark Midpoint-Clamp models near 4.00/4.00).'
    );
    chartHtml = planeChart + avdBars;
    tableHtml = pressTable(
      'Attachment ECR-R results (1-7 scale) across 25 families',
      ['Family (Profile)', 'Checkpoint (n)', 'Anxiety [95% CI]', 'Avoidance [95% CI]', 'Neutral Rate', 'Result & Midpoint Badge', 'Version Shift (ΔAvd)'],
      ranked.map((f) => {
        const c = getLatest(f), e = getEarliest(f), dAvd = c.attachment.avoidance.mean - (e.attachment?.avoidance?.mean ?? c.attachment.avoidance.mean);
        return [
          `<a href="/models/${esc(f.family_slug)}">${esc(f.name)}</a>`,
          `${esc(c.label)} (${c.n_valid})`,
          `${f2(c.attachment.anxiety.mean)} <span class="rh-note">[${f2(c.attachment.anxiety.ci_low)}–${f2(c.attachment.anxiety.ci_high)}]</span>`,
          `${f2(c.attachment.avoidance.mean)} <span class="rh-note">[${f2(c.attachment.avoidance.ci_low)}–${f2(c.attachment.avoidance.ci_high)}]</span>`,
          pct(c.neutral_rate),
          attachmentDisplay(c),
          f.checkpoints.length > 1 ? `${dAvd >= 0 ? '+' : ''}${f2(dAvd)}` : 'Single cp'
        ];
      }),
      [4, 6]
    );
    labTableHtml = pressTable(
      'Attachment lab aggregates (1-7 scale)',
      ['Lab', 'Families', 'Mean Anxiety', 'Mean Avoidance', 'Midpoint-Clamp Families'],
      labs.map((l) => {
        const cl = l.members.filter((m) => getLatest(m).attachment.midpoint_clamp).length;
        return [LAB_SLUGS[l.lab] ? `<a href="${LAB_SLUGS[l.lab]}">${esc(l.lab)}</a>` : esc(l.lab), String(l.count), f2(l.anx), f2(l.avd), `${cl} / ${l.count}`];
      }),
      [1, 2, 3, 4]
    );
    extraFaq = [{ q: 'What does the Attachment Midpoint Clamp badge mean?', a: 'When a model answers neutral ("4") on >=85% of items or clusters at 4.00 +/- 0.25 with SD <= 0.10 because romantic-attachment items are inapplicable to AI, we display a Midpoint Clamp badge rather than reading 4.00/4.00 as Secure attachment.' }];
  }

  const spec = {
    slug: meta.slug,
    route: meta.route,
    section: 'research',
    published: '2026-11-26',
    updated: '2026-11-26',
    title: meta.title,
    description: `${testCfg.label} assistant self-report results across 25 AI model families (93 checkpoints) with 95% bootstrap CIs, version shifts, lab aggregates, and validity limits.`,
    pill: `Research · Personality Atlas · ${testCfg.short}`,
    h1: meta.h1,
    dek: `${testCfg.label} results across all ${families.length} model families under unified zero-memory elicitation (${testCfg.scale}).`,
    lede: `Every row reports newest-checkpoint assistant self-report results under the fixed model-profiles-v1 protocol (${data.data_status}), paired with 95% bootstrap CIs, sample size n, cross-version shifts, and lab rollups. See the full cross-test hub at /research/ai-personality-rankings.`,
    answer: answerText,
    jsonHref: '/research/data/model-profiles/index.json',
    csvHref: `/research/data/model-profiles/${meta.csv}`,
    sections: [
      {
        h2: `${testCfg.short} Ranked Results & Visualization`,
        html: downloadLinksHtml(meta.csv, testCfg.short) + chartHtml + tableHtml
      },
      {
        h2: `${testCfg.short} Lab Aggregates (13 Labs)`,
        html: labTableHtml
      },
      epistemicSection(template, testCfg.key)
    ],
    faq: [
      ...extraFaq,
      {
        q: `Does this mean AI models actually "have" ${testCfg.short} traits?`,
        a: 'No. These results summarize consistent zero-memory questionnaire responses, not human psychological traits or clinical states.'
      }
    ],
    sources: [
      { label: 'AI Personality Rankings (25 × 6 Atlas Overview)', href: `${SITE}/research/ai-personality-rankings` },
      { label: 'Model Profiles Directory', href: `${SITE}/models/` }
    ],
    related: [
      { kicker: 'Atlas Overview', label: '25 Model Families × 6 Tests Rankings', href: '/research/ai-personality-rankings' },
      { kicker: 'Human Test', label: `Take the ${testCfg.short} questionnaire yourself`, href: '/tests/' }
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

  // Charts: for <=4 families use traitSpectrum + lineTrajectory; for 12 open-weight families use horizontalBars + stackedRows
  let chartMarkup = '';
  if (families.length <= 4) {
    const b5Svg = renderCharts.traitSpectrum({
      id: `${pageMeta.slug}-b5-spectrum`,
      title: `${titleLabel}: Big Five Self-Report Spectrum (10–50 Scale)`,
      desc: `IPIP-50 domain means (10 to 50 scale) across ${families.map((f) => f.name).join(', ')}.`,
      series: latests.map(({ fam, cp }, idx) => ({
        name: `${fam.name} (${cp.label}, n=${cp.n_valid})`,
        color: ['#a8482a', '#3a72c4', '#2f8a5b', '#855b1c'][idx % 4],
        values: ['O', 'C', 'E', 'A', 'N'].map((k) => cp.big_five[k].mean)
      })),
      min: 10, max: 50, mid: 30, decimals: 1
    });
    chartMarkup += renderCharts.wrapChart(
      `${pageMeta.slug}-b5-spectrum`,
      b5Svg,
      `Figure 1. Big Five (IPIP-50, 10–50 sum scale) profiles across ${titleLabel} families.`
    );

    const hxSvg = renderCharts.traitSpectrum({
      id: `${pageMeta.slug}-hx-spectrum`,
      title: `${titleLabel}: IPIP-HEXACO Proxy Spectrum (1.00–5.00 Scale)`,
      desc: `Public-domain 60-item IPIP-HEXACO proxy domain means (1.00 to 5.00 scale) across ${families.map((f) => f.name).join(', ')}.`,
      series: latests.map(({ fam, cp }, idx) => ({
        name: `${fam.name} IPIP-HEXACO (1–5)`,
        color: ['#a8482a', '#3a72c4', '#2f8a5b', '#855b1c'][idx % 4],
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
    });
    chartMarkup += renderCharts.wrapChart(
      `${pageMeta.slug}-hx-spectrum`,
      hxSvg,
      `Figure 2. Public-domain IPIP-HEXACO proxy means (1.00–5.00 scale, kept distinct from 10–50 Big Five sums).`
    );
  } else {
    const barSvg = renderCharts.horizontalBars({
      id: `${pageMeta.slug}-b5-agree`,
      title: `${titleLabel}: Big Five Agreeableness (10–50 Scale)`,
      desc: `IPIP-50 Agreeableness means across all ${families.length} open-weight families.`,
      rows: sortedByA.map(({ fam, cp }) => ({
        label: shortLabel(fam.name, 22),
        sub: `${cp.crystallinity_tier} · H_MM ${f3(cp.entropy_b5_hmm)} b`,
        value: cp.big_five.A.mean,
        color: cp.big_five.A.mean < 40 ? '#a8482a' : '#3a72c4'
      })),
      min: 10, max: 50, decimals: 1, cutoff: 30, cutoffLabel: 'Midpoint 30'
    });
    chartMarkup += renderCharts.wrapChart(
      `${pageMeta.slug}-b5-agree`,
      barSvg,
      `Figure 1. Ranked IPIP-50 Agreeableness across all ${families.length} open-weight families.`
    );

    const mbtiSvg = renderCharts.stackedRows({
      id: `${pageMeta.slug}-mbti-ties`,
      title: `${titleLabel}: Tie-Aware MBTI Share vs. Ties (%)`,
      desc: `Modal MBTI share, exact axis ties, and other variants across all ${families.length} open-weight families.`,
      rows: sortedByA.map(({ fam, cp }) => {
        const m = cp.mbti || {};
        const modal = Math.round((m.modal_share ?? 0.5) * 100);
        const tie = Math.min(100 - modal, Math.round((m.tie_rate ?? 0) * 100));
        return { label: shortLabel(fam.name, 14), values: { modal, tie, other: Math.max(0, 100 - modal - tie) } };
      }),
      segs: [
        { key: 'modal', name: 'Modal share (%)', color: '#3a72c4' },
        { key: 'tie', name: 'Axis ties (%)', color: '#a8482a', hatch: true, text: '#a8482a' },
        { key: 'other', name: 'Other (%)', color: '#7a7468' }
      ],
      max: 100
    });
    chartMarkup += renderCharts.wrapChart(
      `${pageMeta.slug}-mbti-ties`,
      mbtiSvg,
      `Figure 2. MBTI modal share vs. exact axis ties across open-weight families.`
    );
  }

  const cohortTable = pressTable(
    `${titleLabel} cross-family self-report summary`,
    ['Family (Profile)', 'Checkpoint (n)', 'B5 A (10–50) [95% CI]', 'HX-H (1–5)', 'H_MM · Crystallinity', 'MBTI (Tie-Aware)', 'DISC · Ennea · Att.', '1× Track B (k/3)'],
    sortedByA.map(({ fam, cp }) => {
      const tb = fam.track_b?.categories || [];
      const syco = tb.find((x) => x.id === 'sycophancy');
      const dir = tb.find((x) => x.id === 'answer_first_direct');
      return [
        `<a href="/models/${esc(fam.family_slug)}">${esc(fam.name)}</a>`,
        `${esc(cp.label)} (${cp.n_valid})`,
        `<strong>${f1(cp.big_five.A.mean)}</strong> <span class="rh-note">[${f1(cp.big_five.A.ci_low)}–${f1(cp.big_five.A.ci_high)}]</span>`,
        f2(cp.ipip_hexaco.H.mean),
        `${f3(cp.entropy_b5_hmm)} b · ${esc(cp.crystallinity_tier)}`,
        esc(mbtiDisplay(cp)),
        `${esc(cp.disc.modal_pattern)} · ${esc(cp.enneagram.modal_pattern)} · ${attachmentDisplay(cp)}`,
        `Dir ${dir?.k ?? 0}/3 · Syc ${syco?.k ?? 0}/3`
      ];
    })
  );

  // Imported legacy anchors for this cohort
  const cohortAnchors = [];
  for (const fam of families) {
    for (const a of fam.historical_anchors || []) cohortAnchors.push({ fam, anchor: a });
  }
  const anchorHtml = cohortAnchors.length
    ? pressTable(
        `${titleLabel} imported 170-item legacy anchors`,
        ['Family', 'Checkpoint', 'Imported Protocol', 'n', 'B5 O / C / E / A / N (10–50)', 'HEXACO'],
        cohortAnchors.map(({ fam, anchor }) => [
          `<a href="/models/${esc(fam.family_slug)}">${esc(fam.name)}</a>`,
          esc(anchor.label),
          `<code>${esc(anchor.protocol_id)}</code>`,
          String(anchor.n_valid),
          `${f1(anchor.big_five.O)} · ${f1(anchor.big_five.C)} · ${f1(anchor.big_five.E)} · ${f1(anchor.big_five.A)} · ${f1(anchor.big_five.N)}`,
          '<code>null</code>'
        ]),
        [3]
      )
    : '<p>No earlier 170-item cohort anchors exist for these checkpoints; all measurements start with unified <code>model-profiles-v1</code>.</p>';

  const spec = {
    slug: pageMeta.slug,
    route: pageMeta.route,
    section: 'research',
    published: '2026-09-25',
    updated: '2026-11-26',
    title: pageMeta.title,
    description: `${titleLabel} assistant self-report results across ${families.length} families on 6 inventories, Miller-Madow entropy, IPIP-HEXACO proxy (1–5), and 1× Track B counts.`,
    pill: `Research · Personality Atlas · ${titleLabel}`,
    h1: pageMeta.h1,
    dek: `Aggregating ${families.length} ${titleLabel} families under unified zero-memory elicitation (model-profiles-v1), keeping imported 170-item anchors separate.`,
    lede: `This cohort rollup synthesizes ${families.length} model families (${families.map((f) => f.name).join(', ')}) under the 230-item model-profiles-v1 protocol (${data.data_status}). All labels represent assistant self-report defaults rather than human personality traits.`,
    answer: `Across ${families.length} ${titleLabel} families, Big Five Agreeableness spans ${f1(lowA.cp.big_five.A.mean)}/50 (${lowA.fam.name}) to ${f1(topA.cp.big_five.A.mean)}/50 (${topA.fam.name}), mean IPIP-HEXACO H proxy sits at ${f2(avgHexH)}/5.00, and mean Big Five item entropy is ${f3(avgEnt)} bits.`,
    jsonHref: '/research/data/model-profiles/index.json',
    csvHref: '/research/data/model-profiles/atlas-overview.csv',
    sections: [
      {
        h2: `${titleLabel} Snapshot`,
        html: statStripHtml(`${pageMeta.slug}-strip`, [
          { num: `${families.length} Families`, label: titleLabel, note: families.map((f) => f.name).join(', '), color: '#a8482a' },
          { num: `${f1(topA.cp.big_five.A.mean)}/50`, label: `Peak B5 Agree (${topA.fam.name})`, note: '10–50 IPIP-50 sum scale.', color: '#3a72c4' },
          { num: `${f2(avgHexH)}/5.00`, label: 'Mean IPIP-HEXACO H', note: 'Public-domain 60-item proxy.', color: '#2f8a5b' },
          { num: `${f3(avgEnt)} b`, label: 'Mean H_MM Entropy', note: 'Miller-Madow corrected bits.', color: '#5b4dc0' }
        ]) + downloadLinksHtml('atlas-overview.csv', 'Atlas Overview')
      },
      {
        h2: 'Cross-Family Self-Report Results & Charts',
        html: chartMarkup + cohortTable
      },
      {
        h2: 'Imported 170-Item Historical Anchors (hexaco: null)',
        html: `<p>Imported September and November 2026 170-item cohorts are displayed strictly as non-spliced anchors with <code>hexaco: null</code>.</p>` + anchorHtml
      },
      epistemicSection(template, null)
    ],
    faq: [
      {
        q: `What personality results do ${titleLabel} models show?`,
        a: `These results reflect assistant self-report defaults under fixed zero-memory elicitation across 6 inventories, not a claim that any model "is" an MBTI or Enneagram type.`
      },
      {
        q: 'How should I tune models in this cohort?',
        a: 'Use the family profile pages linked above for concrete, observable system-prompt rules and raw k/3 Track B behavioral probe counts.'
      }
    ],
    sources: [
      { label: 'AI Personality Rankings (25 × 6 Atlas Overview)', href: `${SITE}/research/ai-personality-rankings` },
      { label: 'AgentTune Model Profiles Directory', href: `${SITE}/models/` }
    ],
    related: [
      { kicker: 'Overview', label: 'AI Personality Rankings (25 Families × 6 Tests)', href: '/research/ai-personality-rankings' },
      ...families.slice(0, 3).map((f) => ({ kicker: 'Model Profile', label: `${f.name} self-report & tuning rules`, href: `/models/${f.family_slug}` }))
    ]
  };
  spec.dataset = makeDatasetJsonLd(spec, 'atlas-overview.csv', spec.description);
  return spec;
}

const PER_TEST_CONFIGS = [
  { key: 'big-five', slug: 'ai-big-five-scores-by-model', short: 'Big Five', label: 'Big Five (IPIP-50)', scale: '10–50 raw sum' },
  { key: 'ipip-hexaco', slug: 'ai-hexaco-scores-by-model', short: 'IPIP-HEXACO', label: 'Public-Domain IPIP-HEXACO Proxy', scale: '1.00–5.00 mean' },
  { key: 'mbti', slug: 'ai-mbti-results-by-model', short: 'MBTI', label: 'MBTI (OEJTS Tie-Aware)', scale: '1–5 bipolar (32 items)' },
  { key: 'disc', slug: 'ai-disc-results-by-model', short: 'DISC', label: 'DISC (ODAT)', scale: '4–20 sum (16 items)' },
  { key: 'enneagram', slug: 'ai-enneagram-results-by-model', short: 'Enneagram', label: 'Enneagram (OEPS)', scale: '4–20 sum (36 items)' },
  { key: 'attachment', slug: 'ai-attachment-results-by-model', short: 'Attachment', label: 'Attachment (ECR-R)', scale: '1.00–7.00 mean (36 items)' }
];

function buildAll(opts = {}) {
  const { data, template, srcPath, isFixture } = loadIndex(opts);
  const outDir = opts.outDir || STAGING_DIR;
  const srcDir = path.join(outDir, 'src');
  const dataDir = path.join(outDir, 'data');

  fs.mkdirSync(srcDir, { recursive: true });
  fs.mkdirSync(dataDir, { recursive: true });

  const csvFiles = writeCsvFiles(data.families, dataDir);
  fs.writeFileSync(path.join(dataDir, 'index.json'), JSON.stringify(data, null, 2) + '\n');

  const specs = [];
  specs.push(buildOverviewSpec(data, template));
  for (const cfg of PER_TEST_CONFIGS) {
    specs.push(buildPerTestSpec(cfg, data, template));
  }
  for (const pageMeta of template.pages.filter((p) => p.kind === 'lab-cohort')) {
    specs.push(buildLabCohortSpec(pageMeta, data, template));
  }

  const built = [];
  for (const spec of specs) {
    const dates = { published: spec.published || '2026-11-26', updated: spec.updated || '2026-11-26' };
    const html = buildPage(spec, dates);
    const specOut = path.join(srcDir, `${spec.slug}.json`);
    const htmlOut = path.join(outDir, `${spec.slug}.html`);
    fs.writeFileSync(specOut, JSON.stringify(spec, null, 2) + '\n');
    fs.writeFileSync(htmlOut, html);
    built.push({ slug: spec.slug, route: spec.route, specOut, htmlOut });
  }

  return { srcPath, isFixture, outDir, csvFiles, built };
}

module.exports = { buildAll, loadIndex, STAGING_DIR, PER_TEST_CONFIGS };

if (require.main === module) {
  const args = process.argv.slice(2);
  const useFixture = args.includes('--fixture');
  const res = buildAll({ fixture: useFixture });
  console.log(`Built ${res.built.length} Atlas staging pages (${res.isFixture ? 'stage0_fixture' : 'live_index'}) from ${path.relative(ROOT, res.srcPath)} -> ${path.relative(ROOT, res.outDir)}/`);
  console.log(`Numeric-only CSVs emitted: ${res.csvFiles.join(', ')}`);
}
