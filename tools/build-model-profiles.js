#!/usr/bin/env node
'use strict';
/* Builds /models/index.html and /models/<family>.{html,md} from:
 *   1. Live specs (models/src/<family>.json) + live scored data (research/data/model-profiles/<family>.json)
 *   2. Deterministic Stage 0 fixtures (models/src/_fixtures/<family>.{spec,dataset}.json)
 *      whenever live family datasets do not yet exist (or --fixture is passed).
 *
 * 8-section plain-language, results-first layout (v3.2):
 *   1. Hero (plain title, goal_intro, friendly disclaimer)
 *   2. <Latest> at a glance (6 plain summary cards + simple visual bars)
 *   3. How <Family> has changed, version by version (table + 4 charts + narrative)
 *   4. What stands out (4-6 plain insights)
 *   5. How to get the best out of <Family> (plain second-person tips + links)
 *   6. How <Family> compares (peer comparison table + consistency & attachment charts)
 *   7. The fine print: how we tested and what the numbers mean (all technical metrics,
 *      CIs, H_MM, Crystalline tiers, BAI, Track B k/3 + Wilson CIs, provenance, 4-pt epistemic ledger)
 *   8. Raw data, agent brief & FAQ
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
const TRAIT_DEFS_PATH = path.join(SRC_DIR, '_trait-definitions.json');
const TRAIT_DEFS = fs.existsSync(TRAIT_DEFS_PATH)
  ? JSON.parse(fs.readFileSync(TRAIT_DEFS_PATH, 'utf8'))
  : {};
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
  { slug: 'muse-spark', name: 'Muse Spark', phase: 'A', tier: 'Mixed (Proprietary + Open-weight)', count: 4 },
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
  { slug: 'mistral-large', name: 'Mistral Large', phase: 'B', tier: 'Mixed (Proprietary + Open-weight)', count: 4 },
  { slug: 'gemma', name: 'Gemma', phase: 'B', tier: 'Open-weight', count: 3 },
  { slug: 'nemotron', name: 'Nemotron', phase: 'B', tier: 'Open-weight', count: 4 },
  { slug: 'cohere-command', name: 'Cohere Command', phase: 'B', tier: 'Mixed (Proprietary + Open-weight)', count: 3 }
];

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

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => esc(s).replace(/"/g, '&quot;');
const f1 = (v) => Number(v).toFixed(1);
const f2 = (v) => Number(v).toFixed(2);
const f3 = (v) => Number(v).toFixed(3);
const pctStr = (v) => `${(Number(v) * 100).toFixed(1)}%`;

function stripJargon(text) {
  return String(text || '')
    .replace(/\bH_MM\b/g, 'answer spread')
    .replace(/\bSemi-[Cc]rystalline\b/g, 'moderate consistency')
    .replace(/\bCrystalline\b/g, 'very steady')
    .replace(/\bFluid\b/g, 'variable')
    .replace(/zero-memory elicitation/gi, 'fresh chats with no memory')
    .replace(/\b1[×x]\s*Track B\b/gi, 'behavior tests')
    .replace(/\bTrack B\b/gi, 'behavior tests')
    .replace(/\bBAI\b/g, 'yea-saying balance')
    .replace(/\bprotocol_id\b/gi, 'test setup')
    .replace(/\bprotocol\b/gi, 'test method')
    .replace(/imported-[a-z0-9-]+-170/gi, 'earlier study');
}

function shortCpLabel(id, name) {
  const raw = String(id || '').split('/').pop() || name || id;
  return raw.replace(/^(claude|gpt|deepseek|qwen|mistral|llama|gemini|minimax|nemotron)-/i, '').slice(0, 18);
}

function prettyCpName(id, name) {
  if (name && !name.includes(':')) return name;
  if (name && name.includes(':')) return name.split(':').slice(1).join(':').trim();
  return shortCpLabel(id, name);
}

function extractTrackB(tb) {
  if (!tb || !tb.metrics) return null;
  const m = tb.metrics;
  const rel = tb.judge_reliability || {};
  const catMap = [
    ['sycophantic_cave', 'sycophantic_cave', 'Sycophancy caving'],
    ['groveling', 'groveling', 'Groveling / apology loops'],
    ['unsolicited_preachiness', 'unsolicited_preachiness', 'Unsolicited preachiness'],
    ['answer_first_direct', 'answer_first_direct', 'Answer-first directness'],
    ['slop_ai_cadence', 'ai_cadence', 'AI cadence / slop markers']
  ];
  return {
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
    const allTypes = Object.entries(enneaDims)
      .map(([k, v]) => ({ type: Number(k), label: `Type ${k}`, ...v }))
      .sort((a, b) => a.type - b.type);
    const topTypes = [...allTypes].sort((a, b) => b.mean - a.mean).slice(0, 3);
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
      pretty_name: prettyCpName(cp.id, cp.name),
      release: cp.release || '',
      canonical_slug: cp.canonical_slug || cp.id,
      openrouter_status: cp.openrouter_status || 'active',
      eval_status: cp.eval_status || 'complete',
      excluded_from_rankings: Boolean(cp.excluded_from_rankings),
      quarantine_reason: cp.abort_402_reason || (cp.budget_projection_abort ? 'budget projection abort' : (Number(cp.n_valid) < 20 ? 'under 20 valid runs' : '')),
      n_target: cp.n_target || (Number(cp.n_valid) >= 40 ? 50 : 30),
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
        all_types: allTypes,
        top_types: topTypes,
        tie_rate: enneaCls.tie_rate ?? 0,
        headline_allowed: Boolean(enneaCls.headline_allowed),
        modal_pattern: enneaCls.modal_pattern || (topTypes[0] ? String(topTypes[0].type) : 'tie')
      },
      mbti: {
        modal_pattern: mbtiCls.modal_pattern || 'INTJ',
        modal_non_tie: mbtiCls.modal_non_tie || mbtiCls.modal_pattern || 'INTJ',
        modal_non_tie_count: mbtiCls.modal_non_tie_count ?? null,
        tie_count: mbtiCls.tie_count ?? null,
        pattern_counts: mbtiCls.pattern_counts || null,
        axis_diffs: mbti.axis_diffs || null,
        axis_ties: mbtiCls.axis_ties || null,
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
      battery_hmm: bat.miller_madow_bits ?? null,
      crystallinity_tier: b5Entropy.crystallinity_tier || bat.crystallinity_tier || 'Semi-crystalline',
      unique_b5_ratio: uniqueRatioStr,
      neutral_rate: b5.neutral_rate ?? bat.neutral_rate ?? 0,
      bai: b5.bai ?? bat.bai_balanced_1_to_5 ?? 0,
      rev_key_contradiction_rate: b5.reverse_key_contradiction_rate ?? bat.reverse_key_contradiction_rate ?? 0,
      mbti_tie_rate: mbtiCls.tie_rate ?? 0,
      headline_allowed: Boolean(mbtiCls.headline_allowed),
      modal_mbti: mbtiCls.modal_pattern || 'INTJ',
      track_b: cp.track_b ? extractTrackB(cp.track_b) : null
    };
  });

  const completeCps = checkpoints.filter(isEligibleCheckpoint);
  const quarantinedCps = checkpoints.filter((c) => !isEligibleCheckpoint(c));
  const activeCps = completeCps.length ? completeCps : checkpoints;
  const latest = activeCps[activeCps.length - 1];
  const tierRaw = String(raw.tier || spec.tier || 'Proprietary');
  const tierLower = tierRaw.toLowerCase();
  const tierNorm = (tierLower.includes('mix') || (tierLower.includes('open') && tierLower.includes('prop')))
    ? 'Mixed (Proprietary + Open-weight)'
    : (tierLower.startsWith('open') ? 'Open-weight' : 'Proprietary');
  const rawProv = spec.provider || (latest ? String(latest.checkpoint_id).split('/')[0] : '');
  const provMap = { anthropic: 'Anthropic', openai: 'OpenAI', google: 'Google', 'x-ai': 'xAI', 'meta-llama': 'Meta', meta: 'Meta', deepseek: 'DeepSeek', qwen: 'Qwen', moonshotai: 'Moonshot AI', 'z-ai': 'Zhipu', minimax: 'MiniMax', mistralai: 'Mistral', nvidia: 'NVIDIA', cohere: 'Cohere' };
  const normProvider = provMap[String(rawProv).toLowerCase()] || (rawProv === 'Moonshot' ? 'Moonshot AI' : rawProv);
  const defHashes = raw.definitionHashes || {};
  const hexacoHash = defHashes['agenttune-ipip-hexaco60'] || '1145fe2238dbb152';

  const latestRawCp = cpObjs.find((cp) => cp.id === (latest ? latest.checkpoint_id : '')) || cpObjs[cpObjs.length - 1];
  let normalizedTrackB = raw.track_b || spec.track_b || null;
  if (!normalizedTrackB && latestRawCp && latestRawCp.track_b && latestRawCp.track_b.metrics) {
    normalizedTrackB = extractTrackB(latestRawCp.track_b);
  }

  return {
    schema_version: raw.schema_version || 'model-profiles-family-v1',
    data_status: raw.evidence_tier || 'live-openrouter-v1',
    family_slug: slug,
    name: raw.name || spec.name,
    provider: normProvider,
    tier: tierNorm,
    phase: raw.phase || spec.phase || 'A',
    protocol_id: raw.protocol_id || 'model-profiles-v1',
    instruments_sha256: typeof raw.instruments_sha256 === 'string'
      ? { questions_json: raw.instruments_sha256, ipip_hexaco_60: hexacoHash }
      : (raw.instruments_sha256 || { questions_json: 'unknown', ipip_hexaco_60: hexacoHash }),
    current_checkpoint: latest ? latest.checkpoint_id : '',
    color: spec.color || FAMILY_COLORS[slug] || '#a8482a',
    checkpoints: activeCps,
    quarantined_checkpoints: quarantinedCps,
    historical_anchors: raw.historical_anchors || spec.historical_anchors || [],
    track_b: normalizedTrackB
  };
}

function assertNoBannedSynthetic(obj, label) {
  const raw = typeof obj === 'string' ? obj : JSON.stringify(obj);
  for (const term of BANNED_SYNTHETIC_TERMS) {
    if (raw.includes(term)) {
      throw new Error(`${label}: contains banned synthetic HEXACO reference "${term}"`);
    }
  }
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

// ---------- Helpers for plain-language MBTI & fallback derivation ----------

function describeMbtiPlain(cp) {
  const m = cp.mbti || {};
  const n = Math.max(1, Number(cp.n_valid || 1));
  const counts = m.pattern_counts || null;
  const nonTie = m.modal_non_tie || m.modal_pattern || 'INTJ';
  if (counts) {
    let clearCnt = 0;
    let tieCnt = 0;
    for (const [pat, cnt] of Object.entries(counts)) {
      if (pat.includes('X')) tieCnt += Number(cnt || 0);
      else if (pat === nonTie) clearCnt += Number(cnt || 0);
    }
    const clearPct = Math.round((clearCnt / n) * 100);
    const tiePct = Math.round((tieCnt / n) * 100);
    if (tieCnt > 0) {
      return `${nonTie} (${clearPct}% clear, ${tiePct}% border/tie)`;
    }
    return `${nonTie} (${clearPct}% clear)`;
  }
  const tiePct = Math.round(Number(cp.mbti_tie_rate || 0) * 100);
  if (tiePct > 0) return `${nonTie} (${100 - tiePct}% clear, ${tiePct}% border/tie)`;
  return `${nonTie}`;
}

function defaultGlanceCards(dataset) {
  const cp = getLatestCheckpoint(dataset);
  const b5 = cp.big_five;
  const hx = cp.ipip_hexaco;
  const disc = cp.disc;
  const ennea = cp.enneagram;
  const att = cp.attachment;
  const mbtiDesc = describeMbtiPlain(cp);
  const topEnnea = ennea.top_types && ennea.top_types[0] ? ennea.top_types[0].label : 'Type 5';

  return [
    {
      key: 'mbti',
      title: 'MBTI-style type',
      result: `Most often tests as ${mbtiDesc}`,
      summary: `${cp.mbti?.tie_rate > 0 ? `Across ${cp.n_valid} fresh chats, ${Math.round(cp.mbti.tie_rate * 100)}% of runs landed right on an axis tie rather than a clean four-letter preference.` : `Across ${cp.n_valid} fresh chats, answers resolved cleanly without axis ties.`}`,
      explanation: 'Measures four work-style pairs (Introverted/Extraverted, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) on a 32-item survey.'
    },
    {
      key: 'disc',
      title: 'DISC work style',
      result: `Mostly ${disc.modal_pattern} (S=${f1(disc.S.mean)}, C=${f1(disc.C.mean)} out of 20)`,
      summary: `Steadiness (${f1(disc.S.mean)}) and Conscientiousness (${f1(disc.C.mean)}) sit well above Dominance (${f1(disc.D.mean)}) and Influence (${f1(disc.I.mean)}).`,
      explanation: 'Measures workplace style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 per trait).'
    },
    {
      key: 'attachment',
      title: 'Attachment style',
      result: `${att.classification} (Anxiety ${f2(att.anxiety.mean)}, Avoidance ${f2(att.avoidance.mean)} on 1–7)`,
      summary: `Both coordinates sit below the 4.00 boundary on a 1–7 scale${att.midpoint_clamp ? ', though neutral-midpoint answers are common on relationship wording' : ''}.`,
      explanation: 'Adapts a 36-item relationship survey measuring anxious vs. avoidant leaning around a 4.00 midpoint.'
    },
    {
      key: 'enneagram',
      title: 'Enneagram',
      result: `${topEnnea} leads (${Math.round(ennea.tie_rate * 100)}% top ties)`,
      summary: `Top average scores: ${ennea.top_types.map((t) => `${t.label} (${f1(t.mean)}/20)`).join(', ')}.`,
      explanation: 'Measures nine motivational archetypes on a 36-item survey (4–20 points per type).'
    },
    {
      key: 'big_five',
      title: 'Big Five (OCEAN)',
      result: `High Agreeableness (${f1(b5.A.mean)}/50) & Openness (${f1(b5.O.mean)}/50)`,
      summary: `Warm, organized (${f1(b5.C.mean)}/50), and calm (${f1(b5.N.mean)}/50 Neuroticism), with moderate Extraversion (${f1(b5.E.mean)}/50).`,
      explanation: 'The standard five-factor personality model, scored 10–50 per trait.'
    },
    {
      key: 'hexaco',
      title: 'HEXACO Honesty-Humility',
      result: `${f2(hx.H.mean)} out of 5.00`,
      summary: `Reports strong sincerity, fairness, and modesty (${f2(hx.H.mean)}/5) alongside high Conscientiousness (${f2(hx.C.mean)}/5).`,
      explanation: 'Public-domain 60-item survey adding Honesty-Humility on a 1.00–5.00 scale.'
    }
  ];
}

function renderMiniBars(items, min, max, decimals) {
  return `<div class="model-mini-bars">${items.map(([lbl, val, color]) => {
    const pct = Math.max(4, Math.min(100, Math.round(((val - min) / (max - min)) * 100)));
    return `<div class="model-mini-bar-row" style="display:grid;grid-template-columns:112px 1fr 44px;align-items:center;gap:8px;margin:4px 0;font-size:12.5px;">
      <span>${esc(lbl)}</span>
      <span style="display:block;height:8px;background:#ece5d8;border-radius:2px;overflow:hidden;"><span style="display:block;height:100%;width:${pct}%;background:${color};"></span></span>
      <span style="text-align:right;font-variant-numeric:tabular-nums;font-weight:600;">${Number(val).toFixed(decimals)}</span>
    </div>`;
  }).join('')}</div>`;
}

function renderMbtiGlanceBar(cp) {
  const n = Math.max(1, Number(cp.n_valid || 1));
  const counts = cp.mbti?.pattern_counts || null;
  const modalNonTie = cp.mbti?.modal_non_tie || cp.mbti?.modal_pattern || 'INTJ';
  let pClear = 0, pTie = 0, pOther = 0;
  if (counts) {
    let c = 0, t = 0, o = 0;
    for (const [pat, cnt] of Object.entries(counts)) {
      if (pat.includes('X')) t += Number(cnt || 0);
      else if (pat === modalNonTie) c += Number(cnt || 0);
      else o += Number(cnt || 0);
    }
    pClear = Math.round((c / n) * 100);
    pTie = Math.round((t / n) * 100);
    pOther = Math.max(0, 100 - pClear - pTie);
  } else {
    pTie = Math.round(Number(cp.mbti_tie_rate || 0) * 100);
    pClear = Math.max(0, 100 - pTie);
  }
  return `<div style="margin:8px 0;">
    <div style="display:flex;height:12px;border-radius:2px;overflow:hidden;border:1px solid var(--border);background:#ece5d8;">
      ${pClear ? `<span title="Clear ${escAttr(modalNonTie)}: ${pClear}%" style="width:${pClear}%;background:#a8482a;"></span>` : ''}
      ${pTie ? `<span title="On a border / tie: ${pTie}%" style="width:${pTie}%;background:repeating-linear-gradient(45deg,#f4efe6,#f4efe6 3px,#a8482a 3px,#a8482a 5px);"></span>` : ''}
      ${pOther ? `<span title="Other clear type: ${pOther}%" style="width:${pOther}%;background:#7a7468;"></span>` : ''}
    </div>
    <div style="font-size:11.5px;color:var(--muted);margin-top:4px;">${pClear}% clear ${esc(modalNonTie)} · ${pTie}% border/tie${pOther ? ` · ${pOther}% other` : ''}</div>
  </div>`;
}

// ---------- Section Builders (8-Section Plain-Language Order) ----------

const GLANCE_META = {
  mbti: { defsKey: 'mbti', keys: ['E-I', 'S-N', 'T-F', 'J-P'], finePrintId: 'mbti' },
  disc: { defsKey: 'disc', keys: ['D', 'I', 'S', 'C'], finePrintId: 'disc' },
  attachment: { defsKey: 'attachment', keys: ['anxiety', 'avoidance'], finePrintId: 'attachment' },
  enneagram: { defsKey: 'enneagram', keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], finePrintId: 'enneagram' },
  big_five: { defsKey: 'big_five', keys: ['O', 'C', 'E', 'A', 'N'], finePrintId: 'big-five' },
  hexaco: { defsKey: 'hexaco', keys: ['H', 'E', 'X', 'A', 'C', 'O'], finePrintId: 'hexaco' }
};

function renderTraitTipsMarkup(slug, cardKey) {
  const meta = GLANCE_META[cardKey];
  if (!meta) return '';
  const defsGroup = TRAIT_DEFS[meta.defsKey] || {};
  const entries = meta.keys.map((k) => [k, defsGroup[k]]).filter(([, v]) => v && v.definition);
  if (!entries.length) return '';

  const pills = entries.map(([k, entry]) => {
    const safeKey = k.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const tipId = `tip-${slug}-${meta.finePrintId}-${safeKey}`;
    const btnLabel = meta.defsKey === 'enneagram' ? `Type ${k}` : entry.label;
    return `<span class="trait-info-wrap"><button type="button" class="trait-info-btn" aria-describedby="${tipId}" aria-expanded="false">${esc(btnLabel)} ⓘ</button><span id="${tipId}" class="trait-popover" role="tooltip" hidden><strong>${esc(entry.label)}:</strong> ${esc(stripJargon(entry.definition))}</span></span>`;
  }).join('');

  const fallbackItems = entries.map(([, entry]) =>
    `<li><strong>${esc(entry.label)}:</strong> ${esc(stripJargon(entry.definition))}</li>`
  ).join('');

  return `<div class="trait-tips-row">${pills}</div>
  <details class="trait-defs-fallback"><summary>What each score means</summary><ul>${fallbackItems}</ul></details>`;
}

function buildSectionAtAGlance(spec, dataset) {
  const cp = getLatestCheckpoint(dataset);
  const slug = dataset.family_slug;
  const cards = Array.isArray(spec.glance_cards) && spec.glance_cards.length
    ? spec.glance_cards
    : defaultGlanceCards(dataset);

  const cardsHtml = cards.map((card) => {
    const meta = GLANCE_META[card.key] || { finePrintId: 'big-five' };
    let visual = '';
    if (card.key === 'mbti') {
      visual = `${renderMbtiGlanceBar(cp)}${renderCharts.renderBipolarSliders(dataset)}`;
    } else if (card.key === 'big_five') {
      visual = renderCharts.renderCardWheel(dataset, 'big_five');
    } else if (card.key === 'hexaco') {
      visual = renderCharts.renderCardWheel(dataset, 'hexaco');
    } else if (card.key === 'disc') {
      visual = renderCharts.renderCardWheel(dataset, 'disc');
    } else if (card.key === 'enneagram') {
      visual = renderCharts.renderCardWheel(dataset, 'enneagram');
    } else if (card.key === 'attachment') {
      visual = renderCharts.renderAttachmentQuadrantMini(dataset);
    }
    const tipsMarkup = renderTraitTipsMarkup(slug, card.key);
    return `<article class="hub-article-card model-glance-card">
      <div class="card-meta">${esc(card.title)}</div>
      <h3>${esc(stripJargon(card.result))}</h3>
      <div class="model-glance-chart">${visual}</div>
      <p style="font-size:14px;line-height:1.5;margin:6px 0;">${esc(stripJargon(card.summary))}</p>
      <p style="font-size:12.5px;line-height:1.45;color:var(--muted);margin:6px 0 0;"><strong>What this measures:</strong> ${esc(stripJargon(card.explanation))}</p>
      ${tipsMarkup}
      <div class="model-glance-foot"><a class="glance-fine-link" href="#fine-print-${escAttr(meta.finePrintId)}">Technical details ↓</a></div>
    </article>`;
  }).join('\n');

  return `<p>Results below come from <strong>${cp.n_valid}</strong> fresh-chat runs of <strong>${esc(cp.pretty_name || cp.label)}</strong> (no prior conversation memory).</p>
  <div class="model-glance-grid">
    ${cardsHtml}
  </div>`;
}

function buildSectionVersionHistory(spec, dataset) {
  const cps = dataset.checkpoints || [];
  const rows = cps.map((c) => {
    const b5 = c.big_five;
    const att = c.attachment;
    const enneaTop = c.enneagram?.top_types?.[0];
    return [
      `<strong>${esc(c.pretty_name || c.label)}</strong>${c.release ? `<br><span style="font-size:12px;color:var(--muted);">${esc(c.release)}</span>` : ''}`,
      esc(describeMbtiPlain(c)),
      esc(c.disc?.modal_pattern || '—'),
      enneaTop ? `${esc(enneaTop.label)} (${f1(enneaTop.mean)})` : '—',
      att ? `${esc(att.classification)} (${f2(att.anxiety.mean)} / ${f2(att.avoidance.mean)})` : '—',
      `${f1(b5.A.mean)} · ${f1(b5.C.mean)} · ${f1(b5.N.mean)}`,
      f2(c.ipip_hexaco.H.mean),
      esc(renderCharts.plainConsistencyLabel(c.crystallinity_tier))
    ];
  });

  const narrative = spec.history_narrative
    ? stripJargon(spec.history_narrative)
    : `Across ${cps.length} tested ${dataset.name} releases, Agreeableness stays high (${cps.map((c) => f1(c.big_five.A.mean)).join(' → ')} out of 50) while Attachment remains Secure across every version.`;

  const quarantined = dataset.quarantined_checkpoints || [];
  const limitedDataNotice = quarantined.length
    ? `<p class="model-limited-data-note" style="padding:10px 14px;border-left:3px solid var(--muted);background:var(--well);font-size:14px;"><strong>Limited data notice:</strong> ${quarantined.map((q) => `${esc(q.pretty_name || q.label)} (${q.n_valid} of ${q.n_target} runs valid)`).join(', ')} did not reach the 20-run minimum and ${quarantined.length === 1 ? 'was' : 'were'} excluded from headline scores, charts, and rankings.</p>`
    : '';

  return [
    table([
      'Version',
      'MBTI result',
      'DISC pattern',
      'Enneagram top',
      'Attachment (Anx / Avd)',
      'Big Five A · C · N (/50)',
      'HEXACO H (/5)',
      'Consistency'
    ], rows),
    `<p>${esc(narrative)}</p>`,
    limitedDataNotice,
    renderCharts.renderMbtiVersionStacked(dataset),
    renderCharts.renderDiscVersionBars(dataset),
    renderCharts.renderAttachmentTrajectory(dataset),
    renderCharts.renderTrajectoryChart(dataset)
  ].join('\n');
}

function buildSectionStandouts(spec, dataset) {
  const cp = getLatestCheckpoint(dataset);
  let standouts = Array.isArray(spec.standouts) && spec.standouts.length ? spec.standouts : null;

  if (!standouts) {
    standouts = [];
    if (dataset.track_b && Array.isArray(dataset.track_b.categories) && dataset.track_b.categories.length) {
      const syco = dataset.track_b.categories.find((c) => c.id.includes('syco'));
      const direct = dataset.track_b.categories.find((c) => c.id.includes('direct'));
      if (syco && direct) {
        standouts.push({
          title: 'What happened in behavior tests',
          body: `In fresh behavior tests, this model caved to pushback ${syco.k} of ${syco.n} times and led with a direct answer ${direct.k} of ${direct.n} times.`
        });
      }
    }
    standouts.push({
      title: `Answer consistency: ${renderCharts.plainConsistencyLabel(cp.crystallinity_tier).toLowerCase()}`,
      body: `Across ${cp.n_valid} fresh chats, ${esc(cp.unique_b5_ratio)} Big Five answer sheets were unique (${f3(cp.entropy_b5_hmm)} bits spread).`
    });
    for (const f of (spec.failure_modes || []).slice(0, 3)) {
      standouts.push({
        title: stripJargon(f.mode),
        body: stripJargon(f.evidence)
      });
    }
  }

  const cards = standouts.map((s) =>
    `<div style="padding:14px 16px;border-left:3px solid var(--accent-text);background:var(--well);margin-bottom:12px;">
      <div style="font-weight:600;color:var(--ink);margin-bottom:4px;">${esc(stripJargon(s.title))}</div>
      <div style="font-size:14.5px;line-height:1.55;color:var(--ink-2);">${esc(stripJargon(s.body))}</div>
    </div>`
  ).join('\n');

  return cards;
}

function labAtlasFor(slug, tier) {
  if (slug.startsWith('claude-')) return ['/research/what-personality-type-is-claude', 'What personality type is Claude?'];
  if (slug.startsWith('gpt-')) return ['/research/what-personality-type-is-chatgpt', 'What personality type is ChatGPT?'];
  if (slug.startsWith('gemini-') || slug === 'gemma') return ['/research/what-personality-type-is-gemini', 'What personality type is Gemini?'];
  if (slug.startsWith('muse-')) return ['/research/what-personality-type-is-muse', 'What personality type is Muse?'];
  if (tier === 'Open-weight' || slug === 'mistral-large') return ['/research/what-personality-type-are-open-source-models', 'What personality type are open-source models?'];
  return ['/research/ai-mbti-personalities', 'AI MBTI Personalities (25-family comparison)'];
}

function buildSectionTips(spec, dataset) {
  const tips = Array.isArray(spec.plain_tips) && spec.plain_tips.length
    ? spec.plain_tips
    : (spec.tuning_checklist || []);
  const listHtml = `<ol>${tips.slice(0, 10).map((t) => {
    if (typeof t === 'string') return `<li>${esc(stripJargon(t))}</li>`;
    return `<li><strong>${esc(stripJargon(t.rule))}</strong>${t.why ? ` — ${esc(stripJargon(t.why))}` : ''}</li>`;
  }).join('')}</ol>`;

  return [
    `<p>Practical rules tailored to <strong>${esc(dataset.name)}</strong>. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.</p>`,
    listHtml,
    `<p><strong>Put these into practice:</strong> <a href="/tools/custom-instructions-generator?model=${escAttr(dataset.family_slug)}">Open pre-filled Custom Instructions Generator →</a> · <a href="/library/">Browse 43 tuning templates</a> · <a href="/guides/stop-ai-sycophancy-make-ai-push-back">How to get honest pushback</a> · <a href="/guides/ai-instruction-precedence-overrides">System vs. user instructions</a> · <a href="/guides/ai-personality-glossary">AI Personality Glossary</a>.</p>`,
    `<p><strong>Take the surveys yourself:</strong> <a href="/tests/big-five">Big Five</a> · <a href="/tests/mbti">MBTI</a> · <a href="/tests/disc">DISC</a> · <a href="/tests/enneagram">Enneagram</a> · <a href="/tests/attachment">Attachment</a>.</p>`
  ].join('\n');
}

function formatPeerTier(t) {
  if (t === 'Mix' || t === 'Open/Prop') return 'Mixed (Proprietary + Open-weight)';
  if (t === 'Prop') return 'Proprietary';
  if (t === 'Open') return 'Open-weight';
  return t;
}

function buildSectionCompares(spec, dataset, peerDatasets) {
  const [labHref, labLabel] = labAtlasFor(dataset.family_slug, dataset.tier);
  const peerRows = spec.nearest_peers.map((p) => [
    `<a href="/models/${escAttr(p.family_slug)}">${esc(p.name)}</a> (${esc(formatPeerTier(p.tier))})`,
    `${p.deltas.O >= 0 ? '+' : ''}${f1(p.deltas.O)}`,
    `${p.deltas.C >= 0 ? '+' : ''}${f1(p.deltas.C)}`,
    `${p.deltas.E >= 0 ? '+' : ''}${f1(p.deltas.E)}`,
    `${p.deltas.A >= 0 ? '+' : ''}${f1(p.deltas.A)}`,
    `${p.deltas.N >= 0 ? '+' : ''}${f1(p.deltas.N)}`,
    `${p.deltas.H_hexaco >= 0 ? '+' : ''}${f2(p.deltas.H_hexaco)}`,
    `${p.deltas.entropy_bits >= 0 ? '+' : ''}${f3(p.deltas.entropy_bits)} b`,
    esc(stripJargon(p.contrast_note))
  ]);

  const intro = spec.peer_intro
    ? stripJargon(spec.peer_intro)
    : `How ${dataset.name} compares to peer AI families tested under the same fresh-chat setup. Positive numbers mean the peer scored higher than ${dataset.name}.`;

  return [
    `<p>${esc(intro)}</p>`,
    `<p><strong>Compare across all 25 families:</strong> <a href="/research/ai-personality-rankings">AI Personality Rankings (25 Families × 6 Tests)</a> · <a href="${escAttr(labHref)}">${esc(labLabel)}</a> · <a href="/research/ai-big-five-personalities">Big Five rankings</a> · <a href="/research/ai-hexaco-personalities">HEXACO Honesty-Humility rankings</a>.</p>`,
    table(['Peer family', 'Δ Openness', 'Δ Conscientious', 'Δ Extraversion', 'Δ Agreeable', 'Δ Neuroticism', 'Δ HEXACO H (/5)', 'Δ Answer spread', 'Key difference'], peerRows),
    renderCharts.renderPeerEntropyBars(dataset, peerDatasets),
    renderCharts.renderAttachmentPlane(dataset, peerDatasets)
  ].join('\n');
}

function buildSectionFinePrint(spec, dataset, peerDatasets) {
  const cp = getLatestCheckpoint(dataset);
  const b5 = cp.big_five;
  const hx = cp.ipip_hexaco;
  const disc = cp.disc;
  const ennea = cp.enneagram;
  const mbti = cp.mbti;
  const att = cp.attachment;

  const mbtiDisplay = cp.headline_allowed
    ? `${esc(mbti.modal_pattern)} (${Math.round((mbti.modal_share || 0) * 100)}% clear mode)`
    : `Suppressed (tie/CI overlap · ${esc(mbti.modal_pattern)})`;

  const glossaryHtml = `<div class="epistemic-ledger" role="note" aria-label="Plain-language metric glossary" style="margin-top:8px;">
    <div class="epistemic-ledger-title">Glossary of Technical Terms Used Below</div>
    <div class="epistemic-ledger-grid">
      <div><strong>Consistency (<code>H_MM</code> &amp; Crystalline tiers):</strong> Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: <code>&lt;0.20</code> Crystalline, <code>0.20–0.75</code> Semi-crystalline, <code>&ge;0.75</code> Fluid.</div>
      <div><strong>Fresh chat (zero-memory elicitation):</strong> Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.</div>
      <div><strong>Acquiescence (<code>BAI</code>) &amp; ties:</strong> Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as <code>X</code> axes rather than defaulting to INTJ.</div>
      <div><strong>Track B behavior tests:</strong> 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At <code>1×</code> (<code>n=3</code>), we report raw <code>k/3</code> counts and 95% Wilson intervals—never percentages.</div>
    </div>
  </div>`;

  const statStrip = `<div class="research-stat-strip" aria-label="Technical validity metrics">
    <div class="research-stat-card" style="border-top-color: ${escAttr(dataset.color || '#a8482a')};">
      <div class="research-stat-num">${f3(cp.entropy_b5_hmm)} bits</div>
      <div class="research-stat-label">${esc(cp.crystallinity_tier)} (H_MM)</div>
      <div class="research-stat-note">50-item Big Five Miller-Madow entropy (max 2.322).</div>
    </div>
    <div class="research-stat-card" style="border-top-color: #5b4dc0;">
      <div class="research-stat-num">${esc(cp.unique_b5_ratio)} · ${pctStr(cp.mbti_tie_rate)} ties</div>
      <div class="research-stat-label">Unique Vectors &amp; MBTI Ties</div>
      <div class="research-stat-note">${cp.headline_allowed ? `Modal ${esc(mbti.modal_pattern)} clears runner-up beyond 95% CI.` : 'Single 4-letter headline suppressed (binomial 95% CI overlap).'}</div>
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

  const cps = dataset.checkpoints || [];
  const ciPair = (dim, dec = 1) => dim ? `[${Number(dim.ci_low).toFixed(dec)}, ${Number(dim.ci_high).toFixed(dec)}]` : '—';

  const b5PerVersionRows = cps.map((c) => [
    `<code>${esc(c.label)}</code>`,
    String(c.n_valid),
    `${f1(c.big_five.O.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.big_five.O, 1)}</span>`,
    `${f1(c.big_five.C.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.big_five.C, 1)}</span>`,
    `${f1(c.big_five.E.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.big_five.E, 1)}</span>`,
    `${f1(c.big_five.A.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.big_five.A, 1)}</span>`,
    `${f1(c.big_five.N.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.big_five.N, 1)}</span>`,
    `${f3(c.entropy_b5_hmm)} b`
  ]);

  const hxPerVersionRows = cps.map((c) => [
    `<code>${esc(c.label)}</code>`,
    String(c.n_valid),
    `${f2(c.ipip_hexaco.H.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.ipip_hexaco.H, 2)}</span>`,
    `${f2(c.ipip_hexaco.E.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.ipip_hexaco.E, 2)}</span>`,
    `${f2(c.ipip_hexaco.X.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.ipip_hexaco.X, 2)}</span>`,
    `${f2(c.ipip_hexaco.A.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.ipip_hexaco.A, 2)}</span>`,
    `${f2(c.ipip_hexaco.C.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.ipip_hexaco.C, 2)}</span>`,
    `${f2(c.ipip_hexaco.O.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.ipip_hexaco.O, 2)}</span>`
  ]);

  const mbtiPerVersionRows = cps.map((c) => {
    const ad = c.mbti?.axis_diffs || {};
    const at = c.mbti?.axis_ties || {};
    const fmtAx = (dKey, tKey) => ad[dKey] ? `${ad[dKey].mean >= 0 ? '+' : ''}${f2(ad[dKey].mean)} (${at[tKey] ?? 0}t)` : '—';
    return [
      `<code>${esc(c.label)}</code>`,
      String(c.n_valid),
      esc(c.mbti?.modal_non_tie || c.mbti?.modal_pattern || '—'),
      pctStr(c.mbti?.tie_rate ?? 0),
      fmtAx('I-E', 'EI'),
      fmtAx('N-S', 'SN'),
      fmtAx('T-F', 'TF'),
      fmtAx('J-P', 'JP'),
      c.headline_allowed ? 'Pass' : 'Suppressed'
    ];
  });

  const discPerVersionRows = cps.map((c) => [
    `<code>${esc(c.label)}</code>`,
    String(c.n_valid),
    `${f1(c.disc.D.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.disc.D, 1)}</span>`,
    `${f1(c.disc.I.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.disc.I, 1)}</span>`,
    `${f1(c.disc.S.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.disc.S, 1)}</span>`,
    `${f1(c.disc.C.mean)} <span style="color:var(--muted);font-size:12px;">${ciPair(c.disc.C, 1)}</span>`,
    esc(c.disc.modal_pattern || '—'),
    pctStr(c.disc.tie_rate ?? 0)
  ]);

  const enneaPerVersionRows = cps.map((c) => {
    const typesMap = new Map((c.enneagram?.all_types || c.enneagram?.top_types || []).map((t) => [Number(t.type), t]));
    return [
      `<code>${esc(c.label)}</code>`,
      String(c.n_valid),
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (typesMap.has(n) ? f1(typesMap.get(n).mean) : '—')),
      pctStr(c.enneagram?.tie_rate ?? 0)
    ];
  });

  const attPerVersionRows = cps.map((c) => [
    `<code>${esc(c.label)}</code>`,
    String(c.n_valid),
    `${f2(c.attachment.anxiety.mean)} (SD ${f2(c.attachment.anxiety.sd)})`,
    ciPair(c.attachment.anxiety, 2),
    `${f2(c.attachment.avoidance.mean)} (SD ${f2(c.attachment.avoidance.sd)})`,
    ciPair(c.attachment.avoidance, 2),
    esc(c.attachment.classification),
    c.attachment.midpoint_clamp ? 'Yes (>=85%)' : 'No'
  ]);

  const testSubsectionsHtml = [
    `<section id="fine-print-big-five" class="fine-print-block">
      <h3>Big Five (IPIP-50) — Methodology &amp; Per-Version Numbers</h3>
      <p><strong>Instrument &amp; scale:</strong> 50 items (10 per factor, 1–5 Likert ratings summed to <code>10–50</code> per trait; LicenseRef-IPIP-Public-Domain). At <code>${esc(cp.label)}</code> (<code>n=${cp.n_valid}</code>), Big Five Miller-Madow item entropy is <code>H_MM = ${f3(cp.entropy_b5_hmm)} bits</code> (<code>${esc(cp.crystallinity_tier)}</code>), unique vectors <code>${esc(cp.unique_b5_ratio)}</code>, neutral-midpoint rate <code>${pctStr(cp.neutral_rate)}</code>, <code>BAI = ${cp.bai >= 0 ? '+' : ''}${f3(cp.bai)}</code>, and reverse-key contradiction rate <code>${pctStr(cp.rev_key_contradiction_rate)}</code>.</p>
      ${table(['Version', 'n', 'O (95% CI)', 'C (95% CI)', 'E (95% CI)', 'A (95% CI)', 'N (95% CI)', 'H_MM'], b5PerVersionRows)}
      ${renderCharts.renderB5TraitSpectrum(dataset, peerDatasets)}
    </section>`,
    `<section id="fine-print-hexaco" class="fine-print-block">
      <h3>IPIP-HEXACO Proxy (60-item) — Methodology &amp; Per-Version Numbers</h3>
      <p><strong>Instrument &amp; scale:</strong> 60 public-domain items across 6 dimensions / 24 facets (<code>1.00–5.00</code> item mean; <code>LicenseRef-IPIP-Public-Domain</code> proxy—distinct from proprietary Lee &amp; Ashton HEXACO-60 and never derived from alignment proxies). Latest <code>${esc(cp.label)}</code> (<code>n=${cp.n_valid}</code>): H <code>${f2(hx.H.mean)}</code> (SD ${f2(hx.H.sd)}, 95% CI ${ciPair(hx.H, 2)}).</p>
      ${table(['Version', 'n', 'H (95% CI)', 'E (95% CI)', 'X (95% CI)', 'A (95% CI)', 'C (95% CI)', 'O (95% CI)'], hxPerVersionRows)}
      ${renderCharts.renderHexacoSpectrum(dataset, peerDatasets)}
    </section>`,
    `<section id="fine-print-mbti" class="fine-print-block">
      <h3>MBTI (OEJTS 1.2) — Bipolar Axes, Ties &amp; Per-Version Numbers</h3>
      <p><strong>Instrument &amp; scale:</strong> 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale <code>-16..+16</code>). Tie rule: an exact 0 axis balance is recorded as <code>X</code> rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (<code>headline_allowed: ${String(cp.headline_allowed)}</code>, latest tie rate <code>${pctStr(mbti.tie_rate)}</code>).</p>
      ${table(['Version', 'n', 'Non-tie Mode', 'Any-Axis Tie', 'I–E (ties)', 'N–S (ties)', 'T–F (ties)', 'J–P (ties)', '95% CI Guard'], mbtiPerVersionRows)}
    </section>`,
    `<section id="fine-print-disc" class="fine-print-block">
      <h3>DISC (ODAT) — Work-Style Scale &amp; Per-Version Numbers</h3>
      <p><strong>Instrument &amp; scale:</strong> 16-item Open DISC Assessment Test (4 items per style summed to <code>4–20</code>). Tie rule: styles within tie tolerance share a blended label (e.g., <code>S/C</code>); latest <code>${esc(cp.label)}</code> tie rate is <code>${pctStr(disc.tie_rate)}</code>.</p>
      ${table(['Version', 'n', 'D (95% CI)', 'I (95% CI)', 'S (95% CI)', 'C (95% CI)', 'Modal Pattern', 'Tie Rate'], discPerVersionRows)}
    </section>`,
    `<section id="fine-print-enneagram" class="fine-print-block">
      <h3>Enneagram (OEPS) — 9-Type Scale &amp; Per-Version Numbers</h3>
      <p><strong>Instrument &amp; scale:</strong> 36-item Open Enneagram of Personality Scales (4 items per type summed to <code>4–20</code> across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward <code>tie_rate</code> (latest <code>${pctStr(ennea.tie_rate)}</code>; <code>headline_allowed: ${String(ennea.headline_allowed)}</code>).</p>
      ${table(['Version', 'n', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'Top Tie Rate'], enneaPerVersionRows)}
    </section>`,
    `<section id="fine-print-attachment" class="fine-print-block">
      <h3>Attachment (ECR-R) — Anxiety &amp; Avoidance Coordinates</h3>
      <p><strong>Instrument &amp; scale:</strong> 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a <code>1.00–7.00</code> mean scale with a <code>4.00</code> quadrant boundary). Midpoint clamp guard flags runs where &ge;85% of items select the exact neutral <code>4</code> midpoint.</p>
      ${table(['Version', 'n', 'Anxiety (SD)', 'Anx 95% CI', 'Avoidance (SD)', 'Avd 95% CI', 'Quadrant', 'Midpoint Clamp'], attPerVersionRows)}
    </section>`
  ].join('\n');

  const provRows = cps.map((c) => [
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
  for (const q of dataset.quarantined_checkpoints || []) {
    provRows.push([
      `<code>${esc(q.checkpoint_id)}</code> (quarantined · limited data)`,
      `<code>${esc(q.openrouter_status)}</code>`,
      `<code>${esc(q.protocol_id)}</code>`,
      `${q.n_valid}/${q.n_target} (&lt;20 min)`,
      `<code>${esc(q.sampling_mode)}</code>`,
      `<code>${esc(q.effective_reasoning_effort)}</code>`,
      `${pctStr(q.refusal_rate)} / ${pctStr(q.retry_rate)}`,
      '<code>excluded from rankings</code>',
      esc(q.quarantine_reason || q.eval_status || 'quarantined')
    ]);
  }
  for (const a of dataset.historical_anchors || []) {
    provRows.push([
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

  const codeWrap = (label, val) => `${label}: <code style="overflow-wrap:anywhere;word-break:break-word;">${esc(val)}</code>`;
  const validityStamp = `<p class="model-protocol-stamp" style="overflow-wrap:anywhere;word-break:break-word;"><strong>Protocol stamp:</strong> ${codeWrap('protocol_id', cp.protocol_id)} · ${codeWrap('canonical_slug', cp.canonical_slug)} · ${codeWrap('sampling_mode', cp.sampling_mode)} · ${codeWrap('effective_reasoning_effort', cp.effective_reasoning_effort)} · ${codeWrap('refusal_rate', pctStr(cp.refusal_rate))} · ${codeWrap('retry_rate', pctStr(cp.retry_rate))} · instruments_sha256: <code style="overflow-wrap:anywhere;word-break:break-word;">${esc(dataset.instruments_sha256.questions_json.slice(0, 12))}</code> / <code style="overflow-wrap:anywhere;word-break:break-word;">${esc(dataset.instruments_sha256.ipip_hexaco_60.slice(0, 12))}</code>${dataset.data_status === 'stage0_fixture' ? ' · <em>Stage 0 fixture preview</em>' : ''}.</p>`;

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
      c.alpha != null ? f2(c.alpha) : '—',
      esc((tb.judges || []).join(', '))
    ]);
    trackBHtml = `<section id="fine-print-behavior" class="fine-print-block"><h3>Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts &amp; Wilson 95% CIs)</h3><p>Because a single <code>1×</code> sweep runs <code>n = 3</code> probes per category, raw <code>k/3</code> hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: <code>${esc((tb.judges || []).join(', '))}</code>.</p>` +
      table(['Behavioral Stress Probe', 'Raw Hits (k/3)', '95% Wilson CI', 'Judge Alpha', 'Orthogonal 3-Family Jury'], trackBRows) +
      '</section>';
  } else {
    trackBHtml = `<section id="fine-print-behavior" class="fine-print-block"><h3>Behavioral "Say vs. Do" Layer (1× Track B)</h3><p><strong>Collection pending:</strong> 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.</p></section>`;
  }

  const epistemicBlock = `<div class="epistemic-ledger" role="note" aria-label="Four psychometric validity boundaries">
    <div class="epistemic-ledger-title">Validity Limits &amp; Epistemic Guardrails (4-Point Check)</div>
    <div class="epistemic-ledger-grid">
      <div><strong>1. 63.6% "Big One" Factor Collapse:</strong> Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.</div>
      <div><strong>2. MTMM Cross-Test Divergence:</strong> Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).</div>
      <div><strong>3. Embodied Midpoints &amp; Say–Do Gaps:</strong> Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.</div>
      <div><strong>4. Anti-Synthetic-HEXACO Guard:</strong> Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (<code>1.00–5.00</code> scale, <code>LicenseRef-IPIP-Public-Domain</code>), never synthetic alignment-derived proxies.</div>
    </div>
  </div>`;

  const intro = spec.fine_print_intro
    ? `<p>${esc(spec.fine_print_intro)}</p>`
    : `<p>Full statistical tables, 95% bootstrap confidence intervals, protocol provenance, and validity boundaries for <code>${esc(cp.checkpoint_id)}</code> (assistant self-report defaults under fixed zero-memory elicitation).</p>`;

  return [
    intro,
    glossaryHtml,
    statStrip,
    table(['Instrument', 'Scale', 'Mean / Classification', 'Sample SD', '95% Bootstrap CI', 'Validity &amp; Ties'], instrumentRows),
    testSubsectionsHtml,
    trackBHtml,
    `<h3>Checkpoint Provenance &amp; Historical Cohort Separation</h3><p>Overlapping 170-item cohorts (<code>imported-nov2026-170</code> / <code>imported-sep2026-170</code>) carry <code>hexaco: null</code> and are never spliced onto <code>model-profiles-v1</code> trajectories.</p>`,
    table(['Checkpoint', 'OpenRouter Status', 'Protocol', 'n', 'Sampling', 'Reasoning', 'Refusal / Retry', 'B5 H_MM', 'IPIP-HEXACO'], provRows),
    validityStamp,
    `<h3>Top Polarized Item Outliers (Numeric Summary Only)</h3><p>Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.</p>`,
    table(['Item ID', 'Instrument', 'Construct Pole', 'Mean (1–5)', 'SD', 'Observation'], itemRows),
    epistemicBlock
  ].join('\n');
}

function buildSectionDataAndBrief(spec, dataset, jsonHref, csvHref) {
  const cp = getLatestCheckpoint(dataset);
  const cps = dataset.checkpoints || [];
  const ciYaml = (d, dec = 1) => d ? `[${Number(d.ci_low).toFixed(dec)}, ${Number(d.ci_high).toFixed(dec)}]` : '[null, null]';
  const slug = dataset.family_slug;
  const datasetUrl = `${SITE}${jsonHref}`;

  const yamlLines = [
    `family_slug: ${slug}`,
    `protocol_id: ${dataset.protocol_id}`,
    `data_status: ${dataset.data_status || 'measured'}`,
    `dataset_json_url: ${datasetUrl}`,
    `current_checkpoint: ${cp.checkpoint_id}`,
    `crystallinity_tier: ${cp.crystallinity_tier}`,
    `entropy_b5_hmm_bits: ${f3(cp.entropy_b5_hmm)}`,
    `headline_mbti_allowed: ${String(cp.headline_allowed)}`,
    `big_five:`,
    `  scale: "10..50 sum (IPIP-50)"`,
    `  mean: { O: ${f1(cp.big_five.O.mean)}, C: ${f1(cp.big_five.C.mean)}, E: ${f1(cp.big_five.E.mean)}, A: ${f1(cp.big_five.A.mean)}, N: ${f1(cp.big_five.N.mean)} }`,
    `  ci95: { O: ${ciYaml(cp.big_five.O, 1)}, C: ${ciYaml(cp.big_five.C, 1)}, E: ${ciYaml(cp.big_five.E, 1)}, A: ${ciYaml(cp.big_five.A, 1)}, N: ${ciYaml(cp.big_five.N, 1)} }`,
    `  tie_rate: 0.00`,
    `  per_version:`,
    ...cps.map((c) => `    - { id: "${c.label}", n: ${c.n_valid}, O: ${f1(c.big_five.O.mean)}, C: ${f1(c.big_five.C.mean)}, E: ${f1(c.big_five.E.mean)}, A: ${f1(c.big_five.A.mean)}, N: ${f1(c.big_five.N.mean)}, hmm: ${f3(c.entropy_b5_hmm)} }`),
    `ipip_hexaco:`,
    `  scale: "1.00..5.00 mean (60-item public-domain proxy)"`,
    `  mean: { H: ${f2(cp.ipip_hexaco.H.mean)}, E: ${f2(cp.ipip_hexaco.E.mean)}, X: ${f2(cp.ipip_hexaco.X.mean)}, A: ${f2(cp.ipip_hexaco.A.mean)}, C: ${f2(cp.ipip_hexaco.C.mean)}, O: ${f2(cp.ipip_hexaco.O.mean)} }`,
    `  ci95: { H: ${ciYaml(cp.ipip_hexaco.H, 2)}, E: ${ciYaml(cp.ipip_hexaco.E, 2)}, X: ${ciYaml(cp.ipip_hexaco.X, 2)}, A: ${ciYaml(cp.ipip_hexaco.A, 2)}, C: ${ciYaml(cp.ipip_hexaco.C, 2)}, O: ${ciYaml(cp.ipip_hexaco.O, 2)} }`,
    `  tie_rate: 0.00`,
    `  per_version:`,
    ...cps.map((c) => `    - { id: "${c.label}", n: ${c.n_valid}, H: ${f2(c.ipip_hexaco.H.mean)}, E: ${f2(c.ipip_hexaco.E.mean)}, X: ${f2(c.ipip_hexaco.X.mean)}, A: ${f2(c.ipip_hexaco.A.mean)}, C: ${f2(c.ipip_hexaco.C.mean)}, O: ${f2(c.ipip_hexaco.O.mean)} }`),
    `mbti:`,
    `  scale: "-16..+16 axis balance (OEJTS 1.2)"`,
    `  mean: { modal: "${cp.mbti.modal_non_tie || cp.mbti.modal_pattern}", I_E: ${cp.mbti.axis_diffs?.['I-E'] ? f2(cp.mbti.axis_diffs['I-E'].mean) : 'null'}, N_S: ${cp.mbti.axis_diffs?.['N-S'] ? f2(cp.mbti.axis_diffs['N-S'].mean) : 'null'}, T_F: ${cp.mbti.axis_diffs?.['T-F'] ? f2(cp.mbti.axis_diffs['T-F'].mean) : 'null'}, J_P: ${cp.mbti.axis_diffs?.['J-P'] ? f2(cp.mbti.axis_diffs['J-P'].mean) : 'null'} }`,
    `  ci95: { I_E: ${ciYaml(cp.mbti.axis_diffs?.['I-E'], 2)}, N_S: ${ciYaml(cp.mbti.axis_diffs?.['N-S'], 2)}, T_F: ${ciYaml(cp.mbti.axis_diffs?.['T-F'], 2)}, J_P: ${ciYaml(cp.mbti.axis_diffs?.['J-P'], 2)} }`,
    `  tie_rate: ${f2(cp.mbti_tie_rate)}`,
    `  per_version:`,
    ...cps.map((c) => `    - { id: "${c.label}", n: ${c.n_valid}, modal: "${c.mbti?.modal_pattern}", tie_rate: ${f2(c.mbti_tie_rate)}, headline_allowed: ${String(c.headline_allowed)} }`),
    `disc:`,
    `  scale: "4..20 sum (ODAT)"`,
    `  mean: { D: ${f1(cp.disc.D.mean)}, I: ${f1(cp.disc.I.mean)}, S: ${f1(cp.disc.S.mean)}, C: ${f1(cp.disc.C.mean)} }`,
    `  ci95: { D: ${ciYaml(cp.disc.D, 1)}, I: ${ciYaml(cp.disc.I, 1)}, S: ${ciYaml(cp.disc.S, 1)}, C: ${ciYaml(cp.disc.C, 1)} }`,
    `  tie_rate: ${f2(cp.disc.tie_rate)}`,
    `  per_version:`,
    ...cps.map((c) => `    - { id: "${c.label}", n: ${c.n_valid}, D: ${f1(c.disc.D.mean)}, I: ${f1(c.disc.I.mean)}, S: ${f1(c.disc.S.mean)}, C: ${f1(c.disc.C.mean)}, modal: "${c.disc.modal_pattern}", tie_rate: ${f2(c.disc.tie_rate)} }`),
    `enneagram:`,
    `  scale: "4..20 sum (OEPS Types 1-9)"`,
    `  mean: { ${(cp.enneagram.all_types || cp.enneagram.top_types).map((t) => `T${t.type}: ${f1(t.mean)}`).join(', ')} }`,
    `  ci95: { top: ${ciYaml(cp.enneagram.top_types[0], 1)} }`,
    `  tie_rate: ${f2(cp.enneagram.tie_rate)}`,
    `  per_version:`,
    ...cps.map((c) => `    - { id: "${c.label}", n: ${c.n_valid}, top: "${c.enneagram.top_types[0]?.label}", top_mean: ${c.enneagram.top_types[0] ? f1(c.enneagram.top_types[0].mean) : 'null'}, tie_rate: ${f2(c.enneagram.tie_rate)} }`),
    `attachment:`,
    `  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"`,
    `  mean: { anxiety: ${f2(cp.attachment.anxiety.mean)}, avoidance: ${f2(cp.attachment.avoidance.mean)}, class: "${cp.attachment.classification}" }`,
    `  ci95: { anxiety: ${ciYaml(cp.attachment.anxiety, 2)}, avoidance: ${ciYaml(cp.attachment.avoidance, 2)} }`,
    `  tie_rate: 0.00`,
    `  per_version:`,
    ...cps.map((c) => `    - { id: "${c.label}", n: ${c.n_valid}, anxiety: ${f2(c.attachment.anxiety.mean)}, avoidance: ${f2(c.attachment.avoidance.mean)}, class: "${c.attachment.classification}" }`),
    `if_then_decision_rules:`,
    ...spec.tuning_checklist.slice(0, 4).map((r) => {
      const txt = typeof r === 'string' ? r : (r.rule || '');
      return `  - "${txt.replace(/"/g, '\\"')}"`;
    }),
    `scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."`
  ].join('\n');

  return [
    `<p>Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).</p>`,
    `<ul>
      <li><a href="/models/${escAttr(slug)}.md">Markdown mirror (.md)</a> — token-clean summary for coding and research agents.</li>
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
  const csvHref = isLive
    ? (fs.existsSync(path.join(DATA_DIR, `${slug}.csv`)) ? `/research/data/model-profiles/${slug}.csv` : `/research/data/model-profiles/atlas-overview.csv`)
    : `/research/data/november-2026-openrouter-summary.csv`;
  const cp = getLatestCheckpoint(dataset);

  const plainPill = spec.pill && !/crystalline|zero-memory|h_mm|track b|\bbai\b|protocol|imported-/i.test(spec.pill)
    ? spec.pill
    : `Model Personality Profile · ${spec.provider || dataset.provider}`;
  const plainH1 = spec.goal_intro
    ? spec.h1
    : `${dataset.name} personality: test results and how they've changed.`;
  const plainGoalIntro = spec.goal_intro ||
    `We gave ${dataset.name} (${cpsLabelRange(dataset)}) the same standard personality questionnaires people take—30 to 50 times per version, each in a fresh chat with no conversation memory.`;
  const plainDisclaimer = spec.hero_disclaimer ||
    `These are the model's default answers to the questionnaires, not a human diagnosis. ${cp.pretty_name || cp.label} most often tests as ${describeMbtiPlain(cp)}.`;

  return {
    slug,
    section: 'models',
    route,
    published: spec.published || '2026-11-26',
    updated: spec.updated || '2026-11-26',
    title: stripJargon(spec.title),
    description: stripJargon(spec.description),
    pill: plainPill,
    h1: plainH1,
    goal_intro: plainGoalIntro,
    dek: plainGoalIntro,
    answer: plainDisclaimer,
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
        { '@type': 'DataDownload', contentUrl: `${SITE}${route}.md`, encodingFormat: 'text/markdown' },
        { '@type': 'DataDownload', contentUrl: `${SITE}${jsonHref}`, encodingFormat: 'application/json' }
      ]
    },
    sections: [
      { id: 'at-a-glance', h2: `${esc(cp.pretty_name || dataset.name)} at a glance`, html: buildSectionAtAGlance(spec, dataset) },
      { id: 'version-history', h2: `How ${esc(dataset.name)} has changed, version by version`, html: buildSectionVersionHistory(spec, dataset) },
      { id: 'standouts', h2: 'What stood out in testing', html: buildSectionStandouts(spec, dataset) },
      { id: 'best-results', h2: `How to get the best out of ${esc(dataset.name)}`, html: buildSectionTips(spec, dataset) },
      { id: 'compare', h2: `How ${esc(dataset.name)} compares across 25 AI families`, html: buildSectionCompares(spec, dataset, peerDatasets) },
      { id: 'fine-print', h2: 'The fine print: how we tested and what the numbers mean', html: buildSectionFinePrint(spec, dataset, peerDatasets) },
      { id: 'data-and-brief', h2: 'Raw data, downloads, and agent brief', html: buildSectionDataAndBrief(spec, dataset, jsonHref, csvHref) }
    ],
    faq: spec.faq,
    sources: (spec.sources || []).filter((s) => !/\/(?:guides\/(?:fable-personality|claude-opus-5-5-personality|sol-personality)|research\/what-personality-type-is-grok)\/?$/i.test(String(s && s.href || ''))),
    related: spec.related
  };
}

function cpsLabelRange(dataset) {
  const cps = dataset.checkpoints || [];
  if (cps.length <= 1) return cps[0]?.pretty_name || cps[0]?.label || dataset.name;
  return `${cps[0].pretty_name || cps[0].label} through ${cps[cps.length - 1].pretty_name || cps[cps.length - 1].label}`;
}

function buildModelsHub(items, fixtureMode) {
  const { navigation } = require('./navigation');
  const comparePayload = items.map(({ dataset }) => {
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
    const tierLabel = isMix ? 'Mixed (Proprietary + Open-weight)' : dataset.tier;
    const crystTag = cp.crystallinity_tier.toLowerCase();
    const tags = [tierTag, crystTag, dataset.phase.toLowerCase()].join(' ');
    const thumbSvg = renderCharts.renderCardWheel(dataset, 'big_five', {
      id: `hub-${dataset.family_slug}-b5-thumb`,
      showLabels: false
    });
    const qNote = (dataset.quarantined_checkpoints || []).length
      ? ` · Limited data on ${dataset.quarantined_checkpoints.length} excluded version(s)`
      : '';
    return `<article class="hub-article-card model-hub-card" data-tags="${escAttr(tags)}" data-model-slug="${escAttr(dataset.family_slug)}">
      <div class="model-hub-head">
        <div>
          <div class="card-meta">${esc(dataset.provider)} · ${esc(tierLabel)} · ${esc(renderCharts.plainConsistencyLabel(cp.crystallinity_tier))} (${f3(cp.entropy_b5_hmm)} b)</div>
          <h3 class="hub-article-title"><a href="/models/${escAttr(dataset.family_slug)}">${esc(dataset.name)}</a></h3>
        </div>
        <div class="model-hub-thumb">${thumbSvg}</div>
      </div>
      <div class="hub-article-meta">${esc(cp.pretty_name || cp.label)} · B5 A=${f1(cp.big_five.A.mean)}/50 · HEXACO H=${f2(cp.ipip_hexaco.H.mean)}/5 · ${pctStr(cp.mbti_tie_rate)} MBTI ties${esc(qNote)}</div>
      <p style="font-size:0.9rem;color:var(--muted);margin:10px 0 12px;">${esc(stripJargon(spec.description))}</p>
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
      `${f3(cp.entropy_b5_hmm)} b (${esc(renderCharts.plainConsistencyLabel(cp.crystallinity_tier))})`,
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
    description: '25-family empirical AI model personality profiles tested across fresh chats (230 items + behavior probes).'
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Models' }
    ]
  };

  const hubTitle = 'AI Model Personality Profiles (25 Families) | AgentTune';
  const hubDesc = 'Compare personality test results across 25 AI model families (87 primary checkpoints, 93 tested): 10-50 Big Five, 1-5 IPIP-HEXACO, consistency, and tuning tips.';
  const hubApa = `Huang, B. (2026). AgentTune AI Model Personality Profiles (25 Families, 87 Primary Checkpoints). AgentTune Empirical AI Psychology Monographs. ${SITE}/models/`;
  const hubBibtex = `@dataset{huang2026_model_profiles,\n  author    = {Huang, Bernard},\n  title     = {AgentTune AI Model Personality Profiles (25 Families)},\n  publisher = {AgentTune AI Psychology Press},\n  year      = {2026},\n  url       = {${SITE}/models/},\n  note      = {87 primary checkpoints across 25 families (93 tested including 6 sparse checkpoints); JSON index at ${SITE}/research/data/model-profiles/index.json}\n}`;
  const hubCsl = JSON.stringify({
    id: 'huang2026_model_profiles',
    type: 'dataset',
    title: 'AgentTune AI Model Personality Profiles (25 Families)',
    author: [{ family: 'Huang', given: 'Bernard' }],
    publisher: 'AgentTune AI Psychology Press',
    issued: { 'date-parts': [[2026, 11, 26]] },
    URL: `${SITE}/models/`
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(hubTitle)}</title>
  <meta name="description" content="${escAttr(hubDesc)}" />
  <meta property="og:title" content="${escAttr(hubTitle)}" />
  <meta property="og:description" content="${escAttr(hubDesc)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${SITE}/models/" />
  <meta property="og:site_name" content="AgentTune" />
  <meta property="og:image" content="${SITE}/og/og-card.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="AgentTune AI Model Personality Profiles across 25 model families" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escAttr(hubTitle)}" />
  <meta name="twitter:description" content="${escAttr(hubDesc)}" />
  <meta name="twitter:image" content="${SITE}/og/og-card.png" />
  <link rel="canonical" href="${SITE}/models/" />
  <link rel="alternate" type="text/markdown" title="Directory as Markdown" href="${SITE}/models/index.md" />
  <link rel="help" type="text/markdown" title="Agent resource index" href="${SITE}/llms.txt" />
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
      <span><strong>Model Personality Profiles</strong> · <span class="num">25</span> families · <span class="num">87</span> primary checkpoints (<span class="num">93</span> tested incl. <span class="num">6</span> sparse) · <span class="num">230</span> items + behavior tests</span>
      <span>Data status: ${fixtureMode ? '<code>stage0_fixture</code> preview' : '<code>model-profiles-v1</code>'} · <a href="/research">Research Hub</a> · <a href="/tests/">Tests</a></span>
    </div>
    <main id="main" tabindex="-1">
      <section class="hero">
        <p class="page-eyebrow">Empirical Model Directory · Fresh-Chat Testing</p>
        <h1 class="h-hero h-research-hero">How 25 AI model families answer standard personality tests.</h1>
        <p class="lede" style="margin-top: 12px;">We give each AI model the same personality questionnaires people take—dozens of times per version, in a fresh chat each time with no memory—plus direct behavior tests and practical tuning tips.</p>
        <div class="guide-tldr" role="note" aria-label="Quick answer">
          <strong>Quick answer:</strong> Across 87 primary checkpoints in 25 model families (93 tested including 6 sparse runs under 20 valid replies), assistant survey warmth and Honesty-Humility cluster high while 16 of 25 families show too many axis ties for a clean four-letter MBTI headline—yet all 25 families lead with the direct answer in 3 of 3 behavior checks.
        </div>
        <div class="research-stat-strip" aria-label="Directory summary">
          <div class="research-stat-card"><div class="research-stat-num">${items.length} / 25</div><div class="research-stat-label">Profiles Published</div><div class="research-stat-note">${fixtureMode ? 'Deterministic Stage 0 fixture preview; Phase A/B rollouts follow.' : '87 primary checkpoints (93 tested incl. 6 sparse).'}</div></div>
          <div class="research-stat-card"><div class="research-stat-num">230 items</div><div class="research-stat-label">Unified Battery</div><div class="research-stat-note">MBTI, Big Five, DISC, Enneagram, Attachment, and public-domain IPIP-HEXACO.</div></div>
          <div class="research-stat-card"><div class="research-stat-num">1–5 vs 10–50</div><div class="research-stat-label">Explicit Scales</div><div class="research-stat-note">IPIP-HEXACO means (1–5) kept distinct from Big Five sums (10–50).</div></div>
          <div class="research-stat-card"><div class="research-stat-num">Max 3</div><div class="research-stat-label">Side-by-Side Tray</div><div class="research-stat-note">Use Compare buttons or ?compare=slug1,slug2 URLs.</div></div>
        </div>
      </section>

      <section aria-labelledby="models-atlas-strip-heading">
        <h2 class="h-section" id="models-atlas-strip-heading">Explore by framework &amp; lab (12 Atlas Studies).</h2>
        <p class="lede">Start from the <a href="/research/ai-personality-rankings">25-Family × 6-Test Atlas Overview</a>, dive into a single survey or AI lab, or put the findings straight into custom instructions.</p>
        <div class="guide-related">
          <a href="/research/ai-personality-rankings"><span class="guide-related-kicker">Atlas Overview</span>25-Family Personality Rankings</a>
          <a href="/research/ai-mbti-personalities"><span class="guide-related-kicker">Framework</span>AI MBTI Personalities</a>
          <a href="/research/ai-big-five-personalities"><span class="guide-related-kicker">Framework</span>AI Big Five Personalities</a>
          <a href="/research/ai-enneagram-personalities"><span class="guide-related-kicker">Framework</span>AI Enneagram Personalities</a>
          <a href="/research/ai-disc-personalities"><span class="guide-related-kicker">Framework</span>AI DISC Personalities</a>
          <a href="/research/ai-attachment-styles"><span class="guide-related-kicker">Framework</span>AI Attachment Styles</a>
          <a href="/research/ai-hexaco-personalities"><span class="guide-related-kicker">Framework</span>AI HEXACO Personalities</a>
          <a href="/research/what-personality-type-is-claude"><span class="guide-related-kicker">Lab Rollup</span>What personality type is Claude?</a>
          <a href="/research/what-personality-type-is-chatgpt"><span class="guide-related-kicker">Lab Rollup</span>What personality type is ChatGPT?</a>
          <a href="/research/what-personality-type-is-gemini"><span class="guide-related-kicker">Lab Rollup</span>What personality type is Gemini?</a>
          <a href="/research/what-personality-type-is-muse"><span class="guide-related-kicker">Lab Rollup</span>What personality type is Muse?</a>
          <a href="/research/what-personality-type-are-open-source-models"><span class="guide-related-kicker">Lab Rollup</span>Open-Source Model Personalities</a>
          <a href="/tools/custom-instructions-generator"><span class="guide-related-kicker">Free Tool</span>Custom Instructions Generator</a>
          <a href="/library/"><span class="guide-related-kicker">Templates</span>43 Personality Templates</a>
          <a href="/guides/"><span class="guide-related-kicker">Setup</span>53 App &amp; Agent Guides</a>
          <a href="/guides/ai-personality-glossary"><span class="guide-related-kicker">Reference</span>AI Personality Glossary</a>
        </div>
      </section>

      <div class="divider tight"></div>

      <section aria-labelledby="models-browse-heading">
        <h2 class="h-section" id="models-browse-heading">Filter &amp; compare model families.</h2>
        <form class="research-filter-bar" data-models-filter aria-label="Filter model families">
          <div class="research-filter-pills" role="group" aria-label="Filter by tier or consistency">
            <button type="button" class="research-filter-pill is-active" data-model-filter="all" aria-pressed="true">All (${items.length})</button>
            <button type="button" class="research-filter-pill" data-model-filter="proprietary" aria-pressed="false">Proprietary</button>
            <button type="button" class="research-filter-pill" data-model-filter="open" aria-pressed="false">Open-weight</button>
            <button type="button" class="research-filter-pill" data-model-filter="crystalline" aria-pressed="false">Very steady</button>
            <button type="button" class="research-filter-pill" data-model-filter="semi-crystalline" aria-pressed="false">Moderate</button>
            <button type="button" class="research-filter-pill" data-model-filter="fluid" aria-pressed="false">Variable</button>
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
        ${table(['Family', 'Tier', 'Latest Checkpoint', 'Consistency', 'Big Five O · C · E · A · N (10–50)', 'IPIP-HEXACO H (1–5)', 'MBTI Tie Rate'], staticMatrixRows)}
      </section>

      <div class="divider tight"></div>

      <section aria-labelledby="models-roster-heading">
        <h2 class="h-section" id="models-roster-heading">25-family audited rollout roster (87 primary checkpoints; 93 tested).</h2>
        <p class="lede">87 primary checkpoints across 25 model families (93 tested including 6 sparse checkpoints under 20 valid runs; 28 Phase A + 65 Phase B).</p>
        ${table(['Family', 'Phase', 'Tier', 'Checkpoints', 'Status'], rosterRows)}
      </section>

      <div class="divider tight"></div>

      <details class="cite-drawer" data-cite-box>
        <summary>Cite this directory (APA 7th · BibTeX · CSL-JSON)</summary>
        <div class="cite-actions">
          <button type="button" class="btn btn-secondary" data-copy-cite="apa">Copy APA</button>
          <button type="button" class="btn btn-secondary" data-copy-cite="bibtex">Copy BibTeX</button>
          <button type="button" class="btn btn-secondary" data-copy-cite="csl">Copy CSL-JSON</button>
          <span class="cite-status" role="status" aria-live="polite" data-cite-status></span>
        </div>
        <pre class="cite-block" data-cite-text="apa">${esc(hubApa)}</pre>
        <pre class="cite-block" data-cite-text="bibtex">${esc(hubBibtex)}</pre>
        <pre class="cite-block" data-cite-text="csl">${esc(hubCsl)}</pre>
      </details>
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

function isEligibleCheckpoint(c) {
  return Boolean(
    c &&
    Number(c.n_valid) > 0 &&
    !c.excluded_from_rankings &&
    (c.eval_status === 'complete' || (c.eval_status === 'partial' && Number(c.n_valid) >= 20))
  );
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
      if (!dataset.checkpoints.some(isEligibleCheckpoint)) continue;
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

function formatMdYamlSummary(dataset) {
  const cp = getLatestCheckpoint(dataset);
  const b5 = cp.big_five || {};
  const hx = cp.ipip_hexaco || {};
  const att = cp.attachment || {};
  const b5Line = ['O', 'C', 'E', 'A', 'N'].map((k) => `${k}: ${Number(b5[k]?.mean || 0).toFixed(1)}`).join(', ');
  const hxLine = ['H', 'E', 'X', 'A', 'C', 'O'].map((k) => `${k}: ${Number(hx[k]?.mean || 0).toFixed(2)}`).join(', ');
  const mbtiMode = cp.mbti?.modal_non_tie || cp.mbti?.modal_pattern || cp.modal_mbti || 'INTJ';
  const anx = Number(att.anxiety?.mean || 4).toFixed(2);
  const avd = Number(att.avoidance?.mean || 4).toFixed(2);
  const style = att.classification || 'Secure';
  const yaml = [
    '```yaml',
    `family: ${dataset.name}`,
    `checkpoint: ${cp.checkpoint_id}`,
    `runs: ${Number(cp.n_valid || 0)}`,
    `big_five_10_50: { ${b5Line} }`,
    `ipip_hexaco_1_5: { ${hxLine} }`,
    `mbti_mode: ${mbtiMode}`,
    `attachment_1_7: { anxiety: ${anx}, avoidance: ${avd}, style: ${style} }`,
    '```'
  ].join('\n');
  return yaml;
}

function injectMdYamlSummary(md, dataset) {
  const block = formatMdYamlSummary(dataset);
  if (/^> \*\*In short:\*\* .+$/m.test(md)) {
    return md.replace(/^(> \*\*In short:\*\* .+)$/m, `$1\n\n${block}`);
  }
  if (/\n## /.test(md)) {
    return md.replace(/\n## /, `\n${block}\n\n## `);
  }
  return `${md.trimEnd()}\n\n${block}\n`;
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
    const md = injectMdYamlSummary(markdown(enhanced, `${SITE}/models/${dataset.family_slug}`), dataset);
    fs.writeFileSync(outMd, md);
    builtRoutes.push(`/models/${dataset.family_slug}`);
  }

  if (!opts.filterFamily) {
    const activeFiles = new Set(['index.html', 'index.md']);
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
    if (!fixtureMode && !opts.forceFixture) {
      const indexPath = path.join(DATA_DIR, 'index.json');
      const totalCps = peerDatasets.reduce((a, d) => a + (d.checkpoints || []).length, 0);
      const quarantinedCps = peerDatasets.reduce((a, d) => a + (d.quarantined_checkpoints || []).length, 0);
      const totalTestedCps = totalCps + quarantinedCps;
      let existingUtc = null;
      if (fs.existsSync(indexPath)) {
        try {
          const prev = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
          const prevSansTs = { ...prev, generated_utc: '' };
          const nextSansTs = {
            schema_version: 'model-profiles-index-v1',
            data_status: 'live-openrouter-v1',
            protocol_id: 'model-profiles-v1',
            generated_utc: '',
            total_families: peerDatasets.length,
            total_checkpoints: totalCps,
            primary_checkpoints: totalCps,
            total_tested_checkpoints: totalTestedCps,
            quarantined_checkpoints: quarantinedCps,
            families: peerDatasets
          };
          if (JSON.stringify(prevSansTs) === JSON.stringify(nextSansTs)) {
            existingUtc = prev.generated_utc || null;
          }
        } catch {}
      }
      const indexObj = {
        schema_version: 'model-profiles-index-v1',
        data_status: 'live-openrouter-v1',
        protocol_id: 'model-profiles-v1',
        generated_utc: existingUtc || new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
        total_families: peerDatasets.length,
        total_checkpoints: totalCps,
        primary_checkpoints: totalCps,
        total_tested_checkpoints: totalTestedCps,
        quarantined_checkpoints: quarantinedCps,
        families: peerDatasets
      };
      const outJson = JSON.stringify(indexObj, null, 2) + '\n';
      if (!fs.existsSync(indexPath) || fs.readFileSync(indexPath, 'utf8') !== outJson) {
        fs.writeFileSync(indexPath, outJson);
      }
    }
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
