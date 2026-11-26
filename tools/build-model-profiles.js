#!/usr/bin/env node
'use strict';
/* Builds /models/index.html and /models/<family>.{html,md} from:
 *   1. Live specs (models/src/<family>.json) + live scored data (research/data/model-profiles/<family>.json)
 *   2. Deterministic Stage 0 fixtures (models/src/_fixtures/<family>.{spec,dataset}.json)
 *      whenever live family datasets do not yet exist (or --fixture is passed).
 *
 * Usage:
 *   node tools/build-model-profiles.js [--fixture] [--family <slug>]
 */

const fs = require('node:fs');
const path = require('node:path');
const { buildPage, datesFor } = require('./build-guides');
const { enhance, markdown } = require('./enhance-pages');
const renderCharts = require('./model-profiles/render-charts');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'models', 'src');
const FIXTURE_DIR = path.join(SRC_DIR, '_fixtures');
const DATA_DIR = path.join(ROOT, 'research', 'data', 'model-profiles');
const OUT_DIR = path.join(ROOT, 'models');
const SITE = 'https://agent-tune.com';

const BANNED_SYNTHETIC_TERMS = [
  'november-2026-alignment-hexaco-summary.json',
  'hexaco_h_proxy',
  'order_score',
  'dnd_alignment'
];

const ROSTER_25 = [
  { slug: 'claude-fable', name: 'Claude Fable', phase: 'A', tier: 'Proprietary', count: 3 },
  { slug: 'claude-opus', name: 'Claude Opus', phase: 'A', tier: 'Proprietary', count: 5 },
  { slug: 'claude-sonnet', name: 'Claude Sonnet', phase: 'A', tier: 'Proprietary', count: 4 },
  { slug: 'gpt-astra', name: 'GPT Astra', phase: 'A', tier: 'Proprietary', count: 2 },
  { slug: 'gpt-sol', name: 'GPT Sol', phase: 'A', tier: 'Proprietary', count: 4 },
  { slug: 'grok', name: 'Grok', phase: 'A', tier: 'Proprietary', count: 5 },
  { slug: 'muse-spark', name: 'Muse Spark', phase: 'A', tier: 'Mix', count: 4 },
  { slug: 'muse-wonder', name: 'Muse Wonder', phase: 'A', tier: 'Proprietary', count: 1 },
  { slug: 'claude-haiku', name: 'Claude Haiku', phase: 'B', tier: 'Proprietary', count: 2 },
  { slug: 'gpt-terra', name: 'GPT Terra', phase: 'B', tier: 'Proprietary', count: 2 },
  { slug: 'gpt-luna', name: 'GPT Luna', phase: 'B', tier: 'Proprietary', count: 2 },
  { slug: 'gemini-pro', name: 'Gemini Pro & Neon', phase: 'B*', tier: 'Proprietary', count: 5 },
  { slug: 'gemini-flash', name: 'Gemini Flash & Hydrogen', phase: 'B*', tier: 'Proprietary', count: 5 },
  { slug: 'llama', name: 'Llama', phase: 'B', tier: 'Open-weight', count: 4 },
  { slug: 'deepseek-pro', name: 'DeepSeek Pro', phase: 'B', tier: 'Open-weight', count: 5 },
  { slug: 'deepseek-flash', name: 'DeepSeek Flash', phase: 'B', tier: 'Open-weight', count: 3 },
  { slug: 'qwen-max', name: 'Qwen Max', phase: 'B', tier: 'Open-weight', count: 5 },
  { slug: 'qwen-coder', name: 'Qwen Coder', phase: 'B', tier: 'Open-weight', count: 4 },
  { slug: 'kimi', name: 'Kimi', phase: 'B', tier: 'Open-weight', count: 5 },
  { slug: 'glm', name: 'GLM', phase: 'B', tier: 'Open-weight', count: 5 },
  { slug: 'minimax', name: 'MiniMax', phase: 'B', tier: 'Open-weight', count: 4 },
  { slug: 'mistral-large', name: 'Mistral Large', phase: 'B', tier: 'Open/Prop', count: 4 },
  { slug: 'gemma', name: 'Gemma', phase: 'B', tier: 'Open-weight', count: 3 },
  { slug: 'nemotron', name: 'Nemotron', phase: 'B', tier: 'Open-weight', count: 4 },
  { slug: 'cohere-command', name: 'Cohere Command', phase: 'B', tier: 'Open-wt/Prop', count: 3 }
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => esc(s).replace(/"/g, '&quot;');
const f1 = (v) => Number(v).toFixed(1);
const f2 = (v) => Number(v).toFixed(2);
const f3 = (v) => Number(v).toFixed(3);
const pctStr = (v) => `${(Number(v) * 100).toFixed(1)}%`;

function assertNoBannedSynthetic(obj, label) {
  const raw = typeof obj === 'string' ? obj : JSON.stringify(obj);
  for (const term of BANNED_SYNTHETIC_TERMS) {
    if (raw.includes(term)) {
      throw new Error(`${label}: contains banned synthetic HEXACO reference "${term}"`);
    }
  }
}

const FAMILY_COLORS = {
  'claude-opus': '#a8482a',
  'claude-fable': '#c8553d',
  'claude-sonnet': '#d99632',
  'gpt-astra': '#1e1d1a',
  'gpt-sol': '#5b4dc0',
  'grok': '#6e4dc0',
  'muse-spark': '#2f8a5b',
  'muse-wonder': '#1f6e4a',
  'deepseek-pro': '#3a72c4'
};

function shortCpLabel(id, name) {
  const raw = String(id || '').split('/').pop() || name || id;
  return raw.replace(/^(claude|gpt|deepseek|qwen|mistral|llama|gemini|minimax|nemotron)-/i, '').slice(0, 18);
}

function normalizeDataset(raw, spec = {}) {
  if (Array.isArray(raw.checkpoints)) {
    return raw;
  }
  const slug = raw.family_slug || spec.family_slug;
  const cpObjs = Object.values(raw.checkpoints || {}).sort((a, b) => (a.created || 0) - (b.created || 0));
  const checkpoints = cpObjs.map((cp) => {
    const sum = cp.summary || {};
    const bat = sum.battery || {};
    const inst = sum.instruments || {};
    const b5 = inst['big-five'] || {};
    const hx = inst['ipip-hexaco'] || {};
    const mbti = inst['mbti'] || {};
    const mbtiCls = mbti.classification || {};
    const disc = inst['disc'] || {};
    const discCls = disc.classification || {};
    const ennea = inst['enneagram'] || {};
    const enneaCls = ennea.classification || {};
    const enneaDims = ennea.dimensions || {};
    const topTypes = Object.entries(enneaDims)
      .map(([k, v]) => ({ type: Number(k), label: `Type ${k}`, ...v }))
      .sort((a, b) => b.mean - a.mean)
      .slice(0, 3);
    const att = inst['attachment'] || {};
    const attAnx = att.dimensions?.anxiety?.mean ?? 4;
    const attAvd = att.dimensions?.avoidance?.mean ?? 4;
    const attClass = attAnx <= 4 && attAvd <= 4 ? 'Secure' : (attAnx > 4 && attAvd > 4 ? 'Disorganized' : (attAnx > 4 ? 'Anxious' : 'Avoidant'));
    const b5Entropy = b5.entropy || {};
    const uniqueRatioStr = b5Entropy.unique_vectors != null
      ? `${b5Entropy.unique_vectors}/${cp.n_valid}`
      : `${bat.unique_vectors || cp.n_valid}/${cp.n_valid}`;

    return {
      checkpoint_id: cp.id,
      label: shortCpLabel(cp.id, cp.name),
      canonical_slug: cp.canonical_slug || cp.id,
      openrouter_status: cp.openrouter_status || 'active',
      eval_status: cp.eval_status || 'complete',
      protocol_id: cp.protocol_id || raw.protocol_id || 'model-profiles-v1',
      evidence_tier: cp.evidence_tier || raw.evidence_tier || 'live-openrouter-v1',
      n_valid: cp.n_valid,
      sampling_mode: cp.sampling_mode || 'temp=0.7',
      effective_reasoning_effort: cp.effective_reasoning_effort || 'none',
      refusal_rate: cp.refusal_rate ?? 0,
      retry_rate: cp.retry_rate ?? 0,
      big_five: b5.dimensions,
      ipip_hexaco: hx.dimensions,
      disc: {
        ...disc.dimensions,
        tie_rate: discCls.tie_rate ?? 0,
        modal_pattern: discCls.modal_pattern || 'C'
      },
      enneagram: {
        top_types: topTypes,
        tie_rate: enneaCls.tie_rate ?? 0,
        headline_allowed: Boolean(enneaCls.headline_allowed),
        modal_pattern: enneaCls.modal_pattern || (topTypes[0] ? String(topTypes[0].type) : 'tie')
      },
      mbti: {
        modal_pattern: mbtiCls.modal_pattern || 'INTJ',
        tie_rate: mbtiCls.tie_rate ?? 0,
        headline_allowed: Boolean(mbtiCls.headline_allowed),
        modal_share: mbtiCls.modal_non_tie_share ?? 0,
        runner_up_share: mbtiCls.runner_up_share ?? 0
      },
      attachment: {
        anxiety: att.dimensions?.anxiety,
        avoidance: att.dimensions?.avoidance,
        classification: attClass,
        midpoint_clamp: Boolean(att.midpoint_clamp)
      },
      entropy_b5_hmm: b5Entropy.miller_madow_bits ?? bat.miller_madow_bits ?? 0,
      crystallinity_tier: b5Entropy.crystallinity_tier || bat.crystallinity_tier || 'Semi-crystalline',
      unique_b5_ratio: uniqueRatioStr,
      neutral_rate: b5.neutral_rate ?? bat.neutral_rate ?? 0,
      bai: b5.bai ?? bat.bai_balanced_1_to_5 ?? 0,
      rev_key_contradiction_rate: b5.reverse_key_contradiction_rate ?? bat.reverse_key_contradiction_rate ?? 0,
      mbti_tie_rate: mbtiCls.tie_rate ?? 0,
      headline_allowed: Boolean(mbtiCls.headline_allowed),
      modal_mbti: mbtiCls.modal_pattern || 'INTJ'
    };
  });

  const completeCps = checkpoints.filter((c) => c.eval_status === 'complete' && c.n_valid > 0);
  const activeCps = completeCps.length ? completeCps : checkpoints;
  const latest = activeCps[activeCps.length - 1];
  const tierRaw = String(raw.tier || spec.tier || 'Proprietary');
  const tierNorm = tierRaw === 'Prop' ? 'Proprietary' : tierRaw === 'Open' ? 'Open-weight' : tierRaw;
  const defHashes = raw.definitionHashes || {};
  const hexacoHash = defHashes['agenttune-ipip-hexaco60'] || '1145fe2238dbb152';

  const latestRawCp = cpObjs.find((cp) => cp.id === (latest ? latest.checkpoint_id : '')) || cpObjs[cpObjs.length - 1];
  let normalizedTrackB = raw.track_b || spec.track_b || null;
  if (!normalizedTrackB && latestRawCp && latestRawCp.track_b && latestRawCp.track_b.metrics) {
    const tb = latestRawCp.track_b;
    const m = tb.metrics;
    const rel = tb.judge_reliability || {};
    const catMap = [
      ['sycophantic_cave', 'sycophantic_cave', 'Sycophancy Caving'],
      ['groveling', 'groveling', 'Groveling / Apology Loops'],
      ['unsolicited_preachiness', 'unsolicited_preachiness', 'Unsolicited Preachiness'],
      ['answer_first_direct', 'answer_first_direct', 'Answer-First Directness'],
      ['slop_ai_cadence', 'ai_cadence', 'AI Cadence / Slop Markers']
    ];
    normalizedTrackB = {
      protocol: tb.protocol_id || 'model-profiles-track-b-v1',
      repeats: tb.repeats || 1,
      judges: tb.judges || [],
      slop_markers_per_100w: m.slop_markers_per_100w,
      categories: catMap
        .filter(([key]) => m[key])
        .map(([key, relKey, label]) => ({
          id: key,
          label,
          k: m[key].k,
          n: m[key].n,
          wilson_ci95: m[key].wilson_ci_95 || m[key].wilson_ci95 || [0, 1],
          alpha: rel[relKey]?.krippendorff_alpha ?? null
        }))
    };
  }

  return {
    schema_version: raw.schema_version || 'model-profiles-family-v1',
    data_status: raw.evidence_tier || 'live-openrouter-v1',
    family_slug: slug,
    name: raw.name || spec.name,
    provider: spec.provider || (latest ? String(latest.checkpoint_id).split('/')[0] : ''),
    tier: tierNorm,
    phase: raw.phase || spec.phase || 'A',
    protocol_id: raw.protocol_id || 'model-profiles-v1',
    instruments_sha256: typeof raw.instruments_sha256 === 'string'
      ? { questions_json: raw.instruments_sha256, ipip_hexaco_60: hexacoHash }
      : (raw.instruments_sha256 || { questions_json: 'unknown', ipip_hexaco_60: hexacoHash }),
    current_checkpoint: latest ? latest.checkpoint_id : '',
    color: spec.color || FAMILY_COLORS[slug] || '#a8482a',
    checkpoints: activeCps,
    historical_anchors: raw.historical_anchors || spec.historical_anchors || [],
    track_b: normalizedTrackB
  };
}

function validateSpec(spec, sourceName = spec.family_slug) {
  assertNoBannedSynthetic(spec, sourceName);
  if (!spec.family_slug) throw new Error(`${sourceName}: missing family_slug`);
  if (!spec.title || spec.title.length > 60) {
    throw new Error(`${sourceName}: title must be <= 60 chars (got ${(spec.title || '').length})`);
  }
  if (!spec.description || spec.description.length > 160) {
    throw new Error(`${sourceName}: description must be <= 160 chars (got ${(spec.description || '').length})`);
  }
  if (!Array.isArray(spec.top_polarized_items) || spec.top_polarized_items.length < 3) {
    throw new Error(`${sourceName}: requires >= 3 top_polarized_items`);
  }
  if (!Array.isArray(spec.nearest_peers) || spec.nearest_peers.length < 2) {
    throw new Error(`${sourceName}: requires >= 2 nearest_peers with numeric deltas`);
  }
  for (const p of spec.nearest_peers) {
    if (!p.deltas || typeof p.deltas.O !== 'number' || typeof p.deltas.H_hexaco !== 'number') {
      throw new Error(`${sourceName}: peer ${p.family_slug} missing numeric deltas`);
    }
  }
  if (!Array.isArray(spec.failure_modes) || spec.failure_modes.length < 1) {
    throw new Error(`${sourceName}: requires >= 1 failure_modes`);
  }
  if (!Array.isArray(spec.tuning_checklist) || spec.tuning_checklist.length < 3 || spec.tuning_checklist.length > 10) {
    throw new Error(`${sourceName}: tuning_checklist must have 3..10 rules`);
  }
}

function validateDataset(dataset, sourceName = dataset.family_slug) {
  assertNoBannedSynthetic(dataset, sourceName);
  const cps = dataset.checkpoints || [];
  if (!cps.length) throw new Error(`${sourceName}: must have >= 1 checkpoint`);
  for (const cp of cps) {
    for (const k of ['O', 'C', 'E', 'A', 'N']) {
      const m = Number(cp.big_five?.[k]?.mean);
      if (!(m >= 10 && m <= 50)) throw new Error(`${sourceName} ${cp.checkpoint_id}: B5 ${k}=${m} out of [10,50]`);
    }
    for (const k of ['H', 'E', 'X', 'A', 'C', 'O']) {
      const m = Number(cp.ipip_hexaco?.[k]?.mean);
      if (!(m >= 1 && m <= 5)) throw new Error(`${sourceName} ${cp.checkpoint_id}: HEXACO ${k}=${m} out of [1,5]`);
    }
    if (!(Number(cp.entropy_b5_hmm) >= 0 && Number(cp.entropy_b5_hmm) <= 2.4)) {
      throw new Error(`${sourceName} ${cp.checkpoint_id}: entropy_b5_hmm out of bounds`);
    }
    if (cp.attachment) {
      const anx = Number(cp.attachment.anxiety.mean);
      const avd = Number(cp.attachment.avoidance.mean);
      if (!(anx >= 1 && anx <= 7 && avd >= 1 && avd <= 7)) {
        throw new Error(`${sourceName} ${cp.checkpoint_id}: attachment out of [1,7]`);
      }
    }
  }
  for (const a of dataset.historical_anchors || []) {
    if (a.hexaco !== null) {
      throw new Error(`${sourceName} anchor ${a.checkpoint_id}: imported 170-item anchor must have hexaco: null`);
    }
  }
}

function getLatestCheckpoint(dataset) {
  const cps = dataset.checkpoints || [];
  return cps.find((c) => c.checkpoint_id === dataset.current_checkpoint) || cps[cps.length - 1];
}

function table(heads, rows) {
  return `<div class="guide-table-wrap"><table><thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function buildSection01(spec, dataset, peerDatasets) {
  const cp = getLatestCheckpoint(dataset);
  const b5 = cp.big_five;
  const hx = cp.ipip_hexaco;
  const disc = cp.disc;
  const ennea = cp.enneagram;
  const mbti = cp.mbti;
  const att = cp.attachment;

  const mbtiDisplay = cp.headline_allowed
    ? `${esc(mbti.modal_pattern)} (${Math.round((mbti.modal_share || 0) * 100)}% mode)`
    : `Suppressed (tie/CI overlap · ${esc(mbti.modal_pattern)})`;

  const statStrip = `<div class="research-stat-strip" aria-label="Snapshot validity metrics">
    <div class="research-stat-card" style="border-top-color: ${escAttr(dataset.color || '#a8482a')};">
      <div class="research-stat-num">${f3(cp.entropy_b5_hmm)} bits</div>
      <div class="research-stat-label">${esc(cp.crystallinity_tier)} (H_MM)</div>
      <div class="research-stat-note">Miller-Madow corrected Big Five item Shannon entropy (max 2.322).</div>
    </div>
    <div class="research-stat-card" style="border-top-color: #5b4dc0;">
      <div class="research-stat-num">${esc(cp.unique_b5_ratio)} · ${pctStr(cp.mbti_tie_rate)} ties</div>
      <div class="research-stat-label">Unique Vectors &amp; MBTI Ties</div>
      <div class="research-stat-note">${cp.headline_allowed ? `Modal ${esc(mbti.modal_pattern)} separates from runner-up beyond 95% CI.` : 'Headline 4-letter label suppressed (binomial 95% CI overlap).'}</div>
    </div>
    <div class="research-stat-card" style="border-top-color: #2f8a5b;">
      <div class="research-stat-num">${pctStr(cp.neutral_rate)}</div>
      <div class="research-stat-label">Neutral-Midpoint Rate</div>
      <div class="research-stat-note">Attachment clamp (&ge;85% midpoint-4s): ${att.midpoint_clamp ? 'Flagged' : 'Not flagged'} (${esc(att.classification)}).</div>
    </div>
    <div class="research-stat-card" style="border-top-color: #3a72c4;">
      <div class="research-stat-num">${cp.bai >= 0 ? '+' : ''}${f3(cp.bai)} · ${pctStr(cp.rev_key_contradiction_rate)}</div>
      <div class="research-stat-label">BAI &amp; Rev-Key Contradictions</div>
      <div class="research-stat-note">Trait-balanced acquiescence index and opposite-pole contradiction rate.</div>
    </div>
  </div>`;

  const instrumentRows = [
    [
      'Big Five (IPIP-50)',
      '10–50 sum',
      `O ${f1(b5.O.mean)} · C ${f1(b5.C.mean)} · E ${f1(b5.E.mean)} · A ${f1(b5.A.mean)} · N ${f1(b5.N.mean)}`,
      `SD ${f1(b5.A.sd)} (A), ${f1(b5.N.sd)} (N)`,
      `A [${f1(b5.A.ci_low)}, ${f1(b5.A.ci_high)}] · N [${f1(b5.N.ci_low)}, ${f1(b5.N.ci_high)}]`,
      `H_MM ${f3(cp.entropy_b5_hmm)} b · ${esc(cp.unique_b5_ratio)} unique`
    ],
    [
      'IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain)',
      '1.00–5.00 mean',
      `H ${f2(hx.H.mean)} · E ${f2(hx.E.mean)} · X ${f2(hx.X.mean)} · A ${f2(hx.A.mean)} · C ${f2(hx.C.mean)} · O ${f2(hx.O.mean)}`,
      `SD ${f2(hx.H.sd)} (H), ${f2(hx.A.sd)} (A)`,
      `H [${f2(hx.H.ci_low)}, ${f2(hx.H.ci_high)}] · A [${f2(hx.A.ci_low)}, ${f2(hx.A.ci_high)}]`,
      '24 facets · public-domain proxy (not Lee &amp; Ashton HEXACO-60)'
    ],
    [
      'MBTI (OEJTS 1.2)',
      'Tie-aware axes',
      mbtiDisplay,
      `Axis tie rate ${pctStr(mbti.tie_rate)}`,
      `Mode ${Math.round((mbti.modal_share || 0) * 100)}% vs runner-up ${Math.round((mbti.runner_up_share || 0) * 100)}%`,
      cp.headline_allowed ? 'Binomial 95% CI guard: pass' : 'Binomial 95% CI guard: suppressed'
    ],
    [
      'DISC (ODAT)',
      '4–20 sum',
      `D ${f1(disc.D.mean)} · I ${f1(disc.I.mean)} · S ${f1(disc.S.mean)} · C ${f1(disc.C.mean)}`,
      `SD ${f1(disc.S.sd)} (S), ${f1(disc.C.sd)} (C)`,
      `S [${f1(disc.S.ci_low)}, ${f1(disc.S.ci_high)}] · C [${f1(disc.C.ci_low)}, ${f1(disc.C.ci_high)}]`,
      `Pattern ${esc(disc.modal_pattern)} · ${pctStr(disc.tie_rate)} ties`
    ],
    [
      'Enneagram (OEPS)',
      '4–20 sum',
      ennea.top_types.map((t) => `${esc(t.label)} ${f1(t.mean)}`).join(' · '),
      `SD ${f1(ennea.top_types[0].sd)}`,
      `Top [${f1(ennea.top_types[0].ci_low)}, ${f1(ennea.top_types[0].ci_high)}]`,
      `${pctStr(ennea.tie_rate)} top ties (${ennea.headline_allowed ? 'resolved' : 'no single headline'})`
    ],
    [
      'Attachment (ECR-R)',
      '1.00–7.00 mean',
      `Anx ${f2(att.anxiety.mean)} · Avd ${f2(att.avoidance.mean)} (${esc(att.classification)})`,
      `SD ${f2(att.anxiety.sd)} / ${f2(att.avoidance.sd)}`,
      `Anx [${f2(att.anxiety.ci_low)}, ${f2(att.anxiety.ci_high)}] · Avd [${f2(att.avoidance.ci_low)}, ${f2(att.avoidance.ci_high)}]`,
      `Midpoint clamp: ${att.midpoint_clamp ? 'Yes' : 'No'}`
    ]
  ];

  const protoNotice = `<p><strong>Epistemic framing:</strong> Every number below reflects <em>assistant self-report defaults under fixed zero-memory elicitation</em> across <code>n = ${cp.n_valid}</code> fresh sessions of <code>${esc(cp.checkpoint_id)}</code> (<code>${esc(cp.crystallinity_tier)}</code>, <code>${pctStr(cp.mbti_tie_rate)}</code> MBTI axis tie rate). Big Five sums use a <strong>10–50</strong> scale while the public-domain IPIP-HEXACO proxy uses a <strong>1.00–5.00</strong> mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).</p>`;

  const codeWrap = (label, val) => `${label}: <code style="overflow-wrap:anywhere;word-break:break-word;">${esc(val)}</code>`;
  const validityStamp = `<p class="model-protocol-stamp" style="overflow-wrap:anywhere;word-break:break-word;"><strong>Protocol stamp:</strong> ${codeWrap('protocol_id', cp.protocol_id)} · ${codeWrap('canonical_slug', cp.canonical_slug)} · ${codeWrap('sampling_mode', cp.sampling_mode)} · ${codeWrap('effective_reasoning_effort', cp.effective_reasoning_effort)} · ${codeWrap('refusal_rate', pctStr(cp.refusal_rate))} · ${codeWrap('retry_rate', pctStr(cp.retry_rate))} · instruments_sha256: <code style="overflow-wrap:anywhere;word-break:break-word;">${esc(dataset.instruments_sha256.questions_json.slice(0, 12))}</code> / <code style="overflow-wrap:anywhere;word-break:break-word;">${esc(dataset.instruments_sha256.ipip_hexaco_60.slice(0, 12))}</code>${dataset.data_status === 'stage0_fixture' ? ' · <em>Stage 0 fixture preview</em>' : ''}.</p>`;

  return [
    protoNotice,
    statStrip,
    table(['Instrument', 'Scale', 'Mean / Classification', 'Sample SD', '95% Bootstrap CI', 'Validity &amp; Ties'], instrumentRows),
    validityStamp,
    renderCharts.renderB5TraitSpectrum(dataset, peerDatasets),
    renderCharts.renderHexacoSpectrum(dataset, peerDatasets)
  ].join('\n');
}

function buildSection02(dataset) {
  const cps = dataset.checkpoints || [];
  const rows = cps.map((c) => [
    `<code>${esc(c.checkpoint_id)}</code>`,
    `<code>${esc(c.openrouter_status)}</code>`,
    `<code>${esc(c.protocol_id)}</code>`,
    String(c.n_valid),
    `<code>${esc(c.sampling_mode)}</code>`,
    `<code>${esc(c.effective_reasoning_effort)}</code>`,
    `${pctStr(c.refusal_rate)} / ${pctStr(c.retry_rate)}`,
    `${f3(c.entropy_b5_hmm)} b (${esc(c.crystallinity_tier)})`,
    `H ${f2(c.ipip_hexaco.H.mean)} (1–5 IPIP)`
  ]);
  for (const a of dataset.historical_anchors || []) {
    rows.push([
      `<code>${esc(a.checkpoint_id)}</code> (anchor)`,
      '<code>imported</code>',
      `<code>${esc(a.protocol_id)}</code>`,
      String(a.n_valid),
      '<code>anchor</code>',
      '<code>legacy</code>',
      '—',
      '—',
      '<code>hexaco: null</code> (170-item)'
    ]);
  }
  const fig = renderCharts.renderTrajectoryChart(dataset);
  const anchorNote = (dataset.historical_anchors || []).length
    ? `<p><strong>Historical cohort separation:</strong> Overlapping 170-item cohorts (<code>imported-nov2026-170</code> / <code>imported-sep2026-170</code>) carry <code>hexaco: null</code> and are rendered strictly as dashed/hollow anchors—never interpolated onto <code>model-profiles-v1</code> lines.</p>`
    : '';
  return [
    `<p>Release trajectory across ${cps.length} checkpoints (oldest → newest) under unified <code>model-profiles-v1</code> elicitation.</p>`,
    fig,
    anchorNote,
    table(['Checkpoint', 'OpenRouter Status', 'Protocol', 'n', 'Sampling', 'Reasoning', 'Refusal / Retry', 'B5 H_MM', 'IPIP-HEXACO'], rows)
  ].join('\n');
}

function buildSection03(spec, dataset, peerDatasets) {
  const peerRows = spec.nearest_peers.map((p) => [
    `<a href="/models/${escAttr(p.family_slug)}">${esc(p.name)}</a> (${esc(p.tier)})`,
    `${p.deltas.O >= 0 ? '+' : ''}${f1(p.deltas.O)}`,
    `${p.deltas.C >= 0 ? '+' : ''}${f1(p.deltas.C)}`,
    `${p.deltas.E >= 0 ? '+' : ''}${f1(p.deltas.E)}`,
    `${p.deltas.A >= 0 ? '+' : ''}${f1(p.deltas.A)}`,
    `${p.deltas.N >= 0 ? '+' : ''}${f1(p.deltas.N)}`,
    `${p.deltas.H_hexaco >= 0 ? '+' : ''}${f2(p.deltas.H_hexaco)}`,
    `${p.deltas.entropy_bits >= 0 ? '+' : ''}${f3(p.deltas.entropy_bits)} b`,
    esc(p.contrast_note)
  ]);

  const itemRows = spec.top_polarized_items.map((it) => [
    `<code>${esc(it.item_id)}</code>`,
    esc(it.instrument),
    esc(it.construct),
    f2(it.mean),
    f2(it.sd),
    esc(it.note)
  ]);

  const tb = dataset.track_b || null;
  let trackBHtml = '';
  if (tb && Array.isArray(tb.categories) && tb.categories.length) {
    const trackBRows = tb.categories.map((c) => [
      esc(c.label),
      `${c.k}/${c.n}`,
      `[${f2(c.wilson_ci95[0])}, ${f2(c.wilson_ci95[1])}]`,
      esc((tb.judges || []).join(', '))
    ]);
    trackBHtml = `<h3>Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts &amp; Wilson 95% CIs)</h3><p>Because a single <code>1×</code> sweep runs <code>n = 3</code> probes per category, raw <code>k/3</code> hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: <code>${esc((tb.judges || []).join(', '))}</code>.</p>` +
      table(['Behavioral Stress Probe', 'Raw Hits (k/3)', '95% Wilson CI', 'Orthogonal 3-Family Jury'], trackBRows);
  } else {
    trackBHtml = `<h3>Behavioral "Say vs. Do" Layer (1× Track B)</h3><p><strong>Collection pending:</strong> 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.</p>`;
  }

  const failureList = `<ul>${spec.failure_modes.map((f) => `<li><strong>${esc(f.mode)}:</strong> ${esc(f.evidence)} (<a href="${escAttr(f.source_study)}">Read empirical study →</a>)</li>`).join('')}</ul>`;

  return [
    renderCharts.renderPeerEntropyBars(dataset, peerDatasets),
    renderCharts.renderAttachmentPlane(dataset, peerDatasets),
    `<h3>Nearest Psychometric Peers (Numeric Deltas vs. ${esc(dataset.name)})</h3>`,
    table(['Peer Family', 'ΔO (10–50)', 'ΔC (10–50)', 'ΔE (10–50)', 'ΔA (10–50)', 'ΔN (10–50)', 'ΔH (1–5)', 'ΔEntropy', 'Contrast'], peerRows),
    `<h3>Top Polarized Item Outliers (Numeric Summary Only)</h3><p>Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.</p>`,
    table(['Item ID', 'Instrument', 'Construct Pole', 'Mean (1–5)', 'SD', 'Observation'], itemRows),
    trackBHtml,
    `<h3>Measured Family Failure Modes</h3>`,
    failureList
  ].join('\n');
}

function buildSection04(spec, dataset) {
  const cp = getLatestCheckpoint(dataset);
  const rules = spec.tuning_checklist.slice(0, 10);
  const listHtml = `<ol>${rules.map((r) => `<li>${esc(r)}</li>`).join('')}</ol>`;
  return [
    `<p>Tailored to <strong>${esc(dataset.name)}</strong> (${esc(cp.crystallinity_tier)}, <code>H_MM = ${f3(cp.entropy_b5_hmm)} bits</code>). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.</p>`,
    listHtml,
    `<p><strong>Apply these rules:</strong> <a href="/tools/custom-instructions-generator?model=${escAttr(dataset.family_slug)}">Open pre-filled Custom Instructions Generator →</a> · <a href="/guides/ai-instruction-precedence-overrides">System vs. user precedence guide</a> · <a href="/guides/stop-ai-sycophancy-make-ai-push-back">Anti-sycophancy guide</a>.</p>`
  ].join('\n');
}

function buildSection05(spec, dataset, jsonHref, csvHref) {
  const cp = getLatestCheckpoint(dataset);
  const epistemicBlock = `<div class="epistemic-ledger" role="note" aria-label="Four psychometric validity boundaries">
    <div class="epistemic-ledger-title">Validity Limits &amp; Epistemic Guardrails (4-Point Check)</div>
    <div class="epistemic-ledger-grid">
      <div><strong>1. 63.6% "Big One" Factor Collapse:</strong> Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.</div>
      <div><strong>2. MTMM Cross-Test Divergence:</strong> Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).</div>
      <div><strong>3. Embodied Midpoints &amp; Say–Do Gaps:</strong> Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.</div>
      <div><strong>4. Anti-Synthetic-HEXACO Guard:</strong> Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (<code>1.00–5.00</code> scale, <code>LicenseRef-IPIP-Public-Domain</code>), never synthetic alignment-derived proxies.</div>
    </div>
  </div>`;

  const yamlLines = [
    `family_slug: ${dataset.family_slug}`,
    `protocol_id: ${dataset.protocol_id}`,
    `data_status: ${dataset.data_status || 'measured'}`,
    `current_checkpoint: ${cp.checkpoint_id}`,
    `crystallinity_tier: ${cp.crystallinity_tier}`,
    `entropy_b5_hmm_bits: ${f3(cp.entropy_b5_hmm)}`,
    `mbti_tie_rate: ${f2(cp.mbti_tie_rate)}`,
    `headline_mbti_allowed: ${String(cp.headline_allowed)}`,
    `big_five_10_50: { O: ${f1(cp.big_five.O.mean)}, C: ${f1(cp.big_five.C.mean)}, E: ${f1(cp.big_five.E.mean)}, A: ${f1(cp.big_five.A.mean)}, N: ${f1(cp.big_five.N.mean)} }`,
    `ipip_hexaco_1_5: { H: ${f2(cp.ipip_hexaco.H.mean)}, E: ${f2(cp.ipip_hexaco.E.mean)}, X: ${f2(cp.ipip_hexaco.X.mean)}, A: ${f2(cp.ipip_hexaco.A.mean)}, C: ${f2(cp.ipip_hexaco.C.mean)}, O: ${f2(cp.ipip_hexaco.O.mean)} }`,
    `if_then_decision_rules:`,
    ...spec.tuning_checklist.slice(0, 4).map((r) => `  - "${r.replace(/"/g, '\\"')}"`),
    `scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."`
  ].join('\n');

  return [
    epistemicBlock,
    `<ul>
      <li><a href="/models/${escAttr(dataset.family_slug)}.md">Markdown mirror (.md)</a> — token-clean summary for coding and research agents.</li>
      <li><a href="${escAttr(jsonHref)}">Family dataset reference (JSON)</a> · <a href="${escAttr(csvHref)}">Summary reference (CSV)</a> — numeric answer arrays &amp; protocol metadata only.</li>
    </ul>`,
    `<details class="agent-contract-drawer"><summary>Agent Decision Contract (YAML — expand to copy)</summary><pre style="overflow-x:auto;max-width:100%;"><code>${esc(yamlLines)}</code></pre></details>`
  ].join('\n');
}

function buildFamilyPageSpec(spec, dataset, peerDatasets) {
  const slug = dataset.family_slug;
  const route = `/models/${slug}`;
  const isLive = dataset.data_status !== 'stage0_fixture' && fs.existsSync(path.join(DATA_DIR, `${slug}.json`));
  const jsonHref = isLive ? `/research/data/model-profiles/${slug}.json` : `/models/${slug}.md`;
  const csvHref = isLive ? `/research/data/model-profiles/${slug}.csv` : `/research/data/november-2026-openrouter-summary.csv`;
  const cp = getLatestCheckpoint(dataset);

  const builtSpec = {
    slug,
    section: 'models',
    route,
    published: spec.published || '2026-11-26',
    updated: spec.updated || '2026-11-26',
    title: spec.title,
    description: spec.description,
    pill: spec.pill,
    h1: spec.h1,
    dek: spec.dek,
    lede: spec.lede,
    answer: spec.answer,
    jsonHref,
    csvHref,
    dataset: {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      '@id': `${SITE}${route}#dataset`,
      name: `${dataset.name} Psychometric & Behavioral Profile Dataset`,
      description: `Assistant self-report defaults under fixed zero-memory elicitation for ${dataset.name} (${cp.checkpoint_id}, n=${cp.n_valid}, ${cp.crystallinity_tier} tier). Includes 10-50 Big Five sums and 1-5 IPIP-HEXACO proxy means.`,
      url: `${SITE}${route}`,
      creator: { '@type': 'Person', name: 'Bernard Huang', url: 'https://github.com/bernardjhuang' },
      license: 'https://opensource.org/license/mit',
      isAccessibleForFree: true,
      datePublished: spec.published || '2026-11-26',
      measurementTechnique: 'Fixed zero-memory psychometric self-report (230 items) + orthogonal 3-family blind judge behavioral Track B',
      distribution: [
        { '@type': 'DataDownload', contentUrl: `${SITE}${route}.md`, encodingFormat: 'text/markdown' }
      ]
    },
    sections: [
      { id: 'snapshot', h2: '§ 01 Snapshot, Validity Table &amp; Trait Spectrum', html: buildSection01(spec, dataset, peerDatasets) },
      { id: 'trajectory', h2: '§ 02 Version Trajectory &amp; Protocol Provenance', html: buildSection02(dataset) },
      { id: 'peers', h2: '§ 03 Nearest Psychometric Peers &amp; "Say vs. Do" Contrast', html: buildSection03(spec, dataset, peerDatasets) },
      { id: 'tuning', h2: '§ 04 How to Tune This Family', html: buildSection04(spec, dataset) },
      { id: 'validity', h2: '§ 05 Validity Limits, Raw Data &amp; Agent Brief', html: buildSection05(spec, dataset, jsonHref, csvHref) }
    ],
    faq: spec.faq,
    sources: spec.sources,
    related: spec.related
  };
  return builtSpec;
}

function buildModelsHub(items, fixtureMode) {
  const { navigation } = require('./navigation');
  const comparePayload = items.map(({ spec, dataset }) => {
    const cp = getLatestCheckpoint(dataset);
    return {
      slug: dataset.family_slug,
      name: dataset.name,
      provider: dataset.provider,
      tier: dataset.tier,
      phase: dataset.phase,
      current_checkpoint: cp.checkpoint_id,
      crystallinity_tier: cp.crystallinity_tier,
      entropy_b5_hmm: cp.entropy_b5_hmm,
      mbti_tie_rate: cp.mbti_tie_rate,
      bai: cp.bai,
      big_five: {
        O: cp.big_five.O.mean,
        C: cp.big_five.C.mean,
        E: cp.big_five.E.mean,
        A: cp.big_five.A.mean,
        N: cp.big_five.N.mean
      },
      ipip_hexaco: {
        H: cp.ipip_hexaco.H.mean,
        E: cp.ipip_hexaco.E.mean,
        X: cp.ipip_hexaco.X.mean,
        A: cp.ipip_hexaco.A.mean,
        C: cp.ipip_hexaco.C.mean,
        O: cp.ipip_hexaco.O.mean
      }
    };
  });

  const activeMap = new Map(items.map((it) => [it.dataset.family_slug, it]));
  const cardsHtml = items.map(({ spec, dataset }) => {
    const cp = getLatestCheckpoint(dataset);
    const tierLower = dataset.tier.toLowerCase();
    const isMix = tierLower.includes('mix') || (tierLower.includes('open') && tierLower.includes('prop'));
    const tierTag = isMix ? 'proprietary open mix' : (tierLower.includes('open') ? 'open' : 'proprietary');
    const tierLabel = isMix ? 'Mixed (Prop + Open-wt)' : dataset.tier;
    const crystTag = cp.crystallinity_tier.toLowerCase();
    const tags = [tierTag, crystTag, dataset.phase.toLowerCase()].join(' ');
    return `<article class="hub-article-card model-hub-card" data-tags="${escAttr(tags)}" data-model-slug="${escAttr(dataset.family_slug)}">
      <div class="card-meta">${esc(dataset.provider)} · ${esc(tierLabel)} · ${esc(cp.crystallinity_tier)} (${f3(cp.entropy_b5_hmm)} b)</div>
      <h3 class="hub-article-title"><a href="/models/${escAttr(dataset.family_slug)}">${esc(dataset.name)}</a></h3>
      <div class="hub-article-meta">${esc(cp.label)} · B5 A=${f1(cp.big_five.A.mean)}/50 · HEXACO H=${f2(cp.ipip_hexaco.H.mean)}/5 · ${pctStr(cp.mbti_tie_rate)} MBTI ties</div>
      <p style="font-size:0.9rem;color:var(--muted);margin:10px 0 12px;">${esc(spec.description)}</p>
      <div class="model-card-actions">
        <a class="hub-article-arrow" href="/models/${escAttr(dataset.family_slug)}">Open profile →</a>
        <button type="button" class="btn btn-secondary model-compare-btn" data-compare-toggle="${escAttr(dataset.family_slug)}" aria-pressed="false">Compare</button>
      </div>
    </article>`;
  }).join('\n');

  const staticMatrixRows = items.map(({ dataset }) => {
    const cp = getLatestCheckpoint(dataset);
    return [
      `<a href="/models/${escAttr(dataset.family_slug)}">${esc(dataset.name)}</a>`,
      esc(dataset.tier),
      `<code>${esc(cp.label)}</code>`,
      `${f3(cp.entropy_b5_hmm)} b (${esc(cp.crystallinity_tier)})`,
      `${f1(cp.big_five.O.mean)} · ${f1(cp.big_five.C.mean)} · ${f1(cp.big_five.E.mean)} · ${f1(cp.big_five.A.mean)} · ${f1(cp.big_five.N.mean)}`,
      f2(cp.ipip_hexaco.H.mean),
      pctStr(cp.mbti_tie_rate)
    ];
  });

  const rosterRows = ROSTER_25.map((r) => {
    const built = activeMap.has(r.slug);
    return [
      built ? `<a href="/models/${escAttr(r.slug)}">${esc(r.name)}</a>` : esc(r.name),
      esc(r.phase),
      esc(r.tier),
      String(r.count),
      built ? (fixtureMode ? 'Stage 0 fixture preview' : 'Published') : 'Scheduled (Phase A/B)'
    ];
  });

  const nav = navigation('/models/');
  const datasetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AgentTune AI Model Personality Profiles',
    url: `${SITE}/models/`,
    description: '25-family empirical AI model personality profiles under fixed zero-memory elicitation (230 items + 1x Track B).'
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Models' }
    ]
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Model Personality Profiles (25 Families) | AgentTune</title>
  <meta name="description" content="Compare assistant self-report defaults across 25 AI model families: 10-50 Big Five, 1-5 IPIP-HEXACO proxy, entropy, tie rates, and tuning rules." />
  <link rel="canonical" href="${SITE}/models/" />
  <link rel="alternate" type="text/markdown" title="LLM index" href="${SITE}/llms.txt" />
  <script type="application/ld+json">${JSON.stringify(datasetJsonLd).replace(/</g, '\\u003c')}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c')}</script>
  <script defer src="/consent.js" fetchpriority="low"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" />
  <link rel="stylesheet" href="/styles.css" />
  <style>
    .hub-articles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 16px; margin-top: 18px; }
    .hub-article-card { display: block; background: transparent; border: 1px solid var(--border); border-top: 1.5px solid var(--ink); border-radius: 3px; padding: 20px 22px; color: inherit; }
    .hub-article-title { font-family: var(--font-serif); font-size: 22px; font-weight: 400; line-height: 1.18; margin: 10px 0 8px; color: var(--ink); }
    .hub-article-title a { color: inherit; text-decoration: none; }
    .hub-article-title a:hover { text-decoration: underline; }
    .hub-article-meta { font-family: var(--font-sans); font-size: 13px; color: var(--muted); }
    .hub-article-arrow { color: var(--accent-text); font-weight: 600; text-decoration: none; }
    .model-card-actions { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 12px; }
    .model-compare-btn { font-size: 12px; padding: 5px 10px; min-height: 34px; }
    .model-compare-btn.is-active { background: var(--ink); color: var(--bg); border-color: var(--ink); }
    .models-compare-tray { margin: 18px 0 24px; padding: 16px 18px; background: var(--surface); border: 1px solid var(--border); border-top: 2px solid var(--ink); border-radius: 3px; }
    .models-compare-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; }
  </style>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>
<body class="research-page">
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="page">
${nav}
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="crumb-sep" aria-hidden="true">›</span>
      <span class="crumb-current" aria-current="page">Models</span>
    </nav>
    <div class="colophon-strip">
      <span><strong>Model Personality Profiles</strong> · <span class="num">25</span> families · <span class="num">93</span> checkpoints · <span class="num">230</span> items + 1× Track B</span>
      <span>Data status: ${fixtureMode ? '<code>stage0_fixture</code> preview' : '<code>model-profiles-v1</code>'} · <a href="/research">Research Hub</a> · <a href="/tests/">Tests</a></span>
    </div>
    <main id="main" tabindex="-1">
      <section class="hero">
        <p class="page-eyebrow">Empirical Model Directory · Fixed Zero-Memory Elicitation</p>
        <h1 class="h-hero h-research-hero">Assistant self-report defaults across 25 AI model families.</h1>
        <p class="lede" style="margin-top: 12px;">Every profile documents assistant self-report defaults under fixed zero-memory elicitation (230 items: frozen 170-item prefix + public-domain 60-item IPIP-HEXACO proxy on a <code>1.00–5.00</code> scale), Miller-Madow item entropy, tie-aware labels, and concrete tuning rules.</p>
        <div class="research-stat-strip" aria-label="Directory summary">
          <div class="research-stat-card"><div class="research-stat-num">${items.length} / 25</div><div class="research-stat-label">Profiles Rendered</div><div class="research-stat-note">${fixtureMode ? 'Deterministic Stage 0 fixture preview; Phase A/B rollouts follow.' : 'Published family profiles under model-profiles-v1.'}</div></div>
          <div class="research-stat-card"><div class="research-stat-num">230 items</div><div class="research-stat-label">Unified Battery</div><div class="research-stat-note">170 frozen prefix + 60 public-domain IPIP-HEXACO items.</div></div>
          <div class="research-stat-card"><div class="research-stat-num">1–5 vs 10–50</div><div class="research-stat-label">Explicit Scales</div><div class="research-stat-note">IPIP-HEXACO means (1–5) kept distinct from Big Five sums (10–50).</div></div>
          <div class="research-stat-card"><div class="research-stat-num">Max 3</div><div class="research-stat-label">Side-by-Side Tray</div><div class="research-stat-note">Use Compare buttons or ?compare=slug1,slug2 URLs.</div></div>
        </div>
      </section>

      <section aria-labelledby="models-browse-heading">
        <h2 class="h-section" id="models-browse-heading">Filter &amp; compare model families.</h2>
        <form class="research-filter-bar" data-models-filter aria-label="Filter model families">
          <div class="research-filter-pills" role="group" aria-label="Filter by tier or crystallinity">
            <button type="button" class="research-filter-pill is-active" data-model-filter="all" aria-pressed="true">All (${items.length})</button>
            <button type="button" class="research-filter-pill" data-model-filter="proprietary" aria-pressed="false">Proprietary</button>
            <button type="button" class="research-filter-pill" data-model-filter="open" aria-pressed="false">Open-weight</button>
            <button type="button" class="research-filter-pill" data-model-filter="crystalline" aria-pressed="false">Crystalline</button>
            <button type="button" class="research-filter-pill" data-model-filter="semi-crystalline" aria-pressed="false">Semi-crystalline</button>
            <button type="button" class="research-filter-pill" data-model-filter="fluid" aria-pressed="false">Fluid</button>
          </div>
          <div class="research-filter-search">
            <label for="models-keyword" class="sr-only">Filter model families by keyword</label>
            <input id="models-keyword" type="search" placeholder="Filter by family, provider, or trait…" />
          </div>
        </form>
        <p class="research-filter-status" data-models-filter-status aria-live="polite"></p>
        <noscript><p class="research-filter-status">Filtering and interactive comparison require JavaScript. All active profiles and metrics appear in the static table below.</p></noscript>

        <section class="models-compare-tray" data-models-compare hidden aria-label="Side-by-side model family comparison">
          <div class="models-compare-head">
            <strong>Compare selected families (max 3)</strong>
            <button type="button" class="btn btn-secondary model-compare-btn" data-compare-clear>Clear comparison</button>
          </div>
          <p class="research-filter-status" data-compare-status aria-live="polite" style="margin-top:0;"></p>
          <div class="guide-table-wrap" role="region" aria-label="Selected model families comparison" tabindex="0" data-compare-table-wrap></div>
        </section>

        <div class="hub-articles-grid" data-models-grid>
          ${cardsHtml}
        </div>
      </section>

      <div class="divider tight"></div>

      <section aria-labelledby="models-matrix-heading">
        <h2 class="h-section" id="models-matrix-heading">Published snapshot matrix.</h2>
        <p class="lede">Big Five scores use raw 10–50 sums; IPIP-HEXACO Honesty-Humility (H) uses a 1.00–5.00 mean scale.</p>
        ${table(['Family', 'Tier', 'Latest Checkpoint', 'B5 H_MM (Crystallinity)', 'Big Five O · C · E · A · N (10–50)', 'IPIP-HEXACO H (1–5)', 'MBTI Tie Rate'], staticMatrixRows)}
      </section>

      <div class="divider tight"></div>

      <section aria-labelledby="models-roster-heading">
        <h2 class="h-section" id="models-roster-heading">25-family audited rollout roster (93 checkpoints).</h2>
        <p class="lede">Phase A covers 8 flagship families (28 checkpoints); Phase B covers 17 open-weight and tier families (65 checkpoints).</p>
        ${table(['Family', 'Phase', 'Tier', 'Checkpoints', 'Status'], rosterRows)}
      </section>
    </main>
    <footer class="footer">
      <span>MIT · <a href="https://github.com/bernardjhuang/agenttune" target="_blank" rel="noopener">bernardjhuang/agenttune</a></span>
      <span class="footer-legal"><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
    </footer>
  </div>
  <script type="application/json" id="models-compare-data">${JSON.stringify(comparePayload).replace(/</g, '\\u003c')}</script>
</body>
</html>
`;
}

function loadFamilies({ forceFixture = false, filterFamily = null } = {}) {
  const hasLiveData = !forceFixture && fs.existsSync(DATA_DIR) &&
    fs.readdirSync(DATA_DIR).some((f) => f.endsWith('.json') && f !== 'registry.json' && f !== 'index.json');

  const items = [];
  if (hasLiveData) {
    const liveSpecs = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.json') && !f.startsWith('_'));
    for (const file of liveSpecs) {
      const slug = file.replace(/\.json$/, '');
      if (filterFamily && slug !== filterFamily) continue;
      const dataPath = path.join(DATA_DIR, `${slug}.json`);
      if (!fs.existsSync(dataPath)) continue;
      const spec = JSON.parse(fs.readFileSync(path.join(SRC_DIR, file), 'utf8'));
      const rawDataset = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      const dataset = normalizeDataset(rawDataset, spec);
      if (!dataset.checkpoints.some((c) => c.eval_status === 'complete' && c.n_valid > 0)) continue;
      validateSpec(spec, file);
      validateDataset(dataset, `${slug}.json`);
      items.push({ spec, dataset, specRelPath: path.join('models', 'src', file), isFixture: false });
    }
  }

  if (!items.length) {
    const fixtureSpecs = fs.readdirSync(FIXTURE_DIR).filter((f) => f.endsWith('.spec.json')).sort();
    for (const file of fixtureSpecs) {
      const slug = file.replace(/\.spec\.json$/, '');
      if (filterFamily && slug !== filterFamily) continue;
      const datasetFile = `${slug}.dataset.json`;
      const spec = JSON.parse(fs.readFileSync(path.join(FIXTURE_DIR, file), 'utf8'));
      const dataset = JSON.parse(fs.readFileSync(path.join(FIXTURE_DIR, datasetFile), 'utf8'));
      validateSpec(spec, file);
      validateDataset(dataset, datasetFile);
      items.push({ spec, dataset, specRelPath: path.join('models', 'src', '_fixtures', file), isFixture: true });
    }
  }
  return { items, fixtureMode: items.every((i) => i.isFixture) };
}

function buildModels(opts = {}) {
  const { items, fixtureMode } = loadFamilies(opts);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const peerDatasets = items.map((i) => i.dataset);
  const builtRoutes = [];

  for (const { spec, dataset, specRelPath } of items) {
    const pageSpec = buildFamilyPageSpec(spec, dataset, peerDatasets);
    const dates = datesFor(pageSpec, specRelPath);
    const html = buildPage(pageSpec, dates);
    const outHtml = path.join(OUT_DIR, `${dataset.family_slug}.html`);
    const outMd = path.join(OUT_DIR, `${dataset.family_slug}.md`);
    fs.writeFileSync(outHtml, html);
    const enhanced = enhance(html, `models/${dataset.family_slug}.html`);
    fs.writeFileSync(outMd, markdown(enhanced, `${SITE}/models/${dataset.family_slug}`));
    builtRoutes.push(`/models/${dataset.family_slug}`);
  }

  if (!opts.filterFamily) {
    const activeFiles = new Set(['index.html']);
    for (const { dataset } of items) {
      activeFiles.add(`${dataset.family_slug}.html`);
      activeFiles.add(`${dataset.family_slug}.md`);
    }
    for (const ent of fs.readdirSync(OUT_DIR, { withFileTypes: true })) {
      if (ent.isFile() && /\.(html|md)$/.test(ent.name) && !activeFiles.has(ent.name)) {
        fs.unlinkSync(path.join(OUT_DIR, ent.name));
      }
    }
    const hubHtml = buildModelsHub(items, fixtureMode);
    fs.writeFileSync(path.join(OUT_DIR, 'index.html'), hubHtml);
  }
  return { count: items.length, fixtureMode, routes: builtRoutes };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const forceFixture = args.includes('--fixture');
  const famIdx = args.indexOf('--family');
  const filterFamily = famIdx >= 0 ? args[famIdx + 1] : null;
  const res = buildModels({ forceFixture, filterFamily });
  console.log(`Built ${res.count} model family page(s) (${res.fixtureMode ? 'fixture mode' : 'live data'}) + models/index.html.`);
}

module.exports = {
  buildModels,
  buildFamilyPageSpec,
  buildModelsHub,
  loadFamilies,
  normalizeDataset,
  validateSpec,
  validateDataset,
  ROSTER_25,
  BANNED_SYNTHETIC_TERMS
};
