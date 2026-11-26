#!/usr/bin/env node
'use strict';
/* Idempotently injects data-driven inline SVG charts and key-metric visual strips
 * across research/src/*.json specs and hand-authored research HTML pages.
 * Leaves research/ai-personality-five-models-2026.html and research.html's
 * SEPTEMBER_RESEARCH / MAY_* markers untouched.
 */

const fs = require('node:fs');
const path = require('node:path');
const charts = require('./research-charts');

const ROOT = path.resolve(__dirname, '..');
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

const novSum = readJson('research/data/november-2026-openrouter-summary.json');
const ossProfiles = readJson('research/data/openrouter-open-source-profiles.json');
const behavRes = readJson('research/data/november-2026-prompt-comparison-results.json');
const claudePrefRes = readJson('research/data/november-2026-claude-preferences-results.json');
const septSum = readJson('research/data/september-2026-summary.json');
const septProto = readJson('research/data/september-2026-protocols.json');
const pilotSum = readJson('research/data/tuning-before-after-summary.json');
const roleplayRes = readJson('research/data/november-2026-roleplay-tax-results.json');
const alignSum = readJson('research/data/november-2026-alignment-hexaco-summary.json');
const syntaxRes = readJson('research/data/november-2026-prompt-syntax-results.json');
const sycoRes = readJson('research/data/november-2026-sycophancy-pushback-results.json');
const driftRes = readJson('research/data/november-2026-persona-halflife-results.json');
const budgetRes = readJson('research/data/november-2026-instruction-budget-cliff-results.json');
const slopRes = readJson('research/data/november-2026-ai-slop-fingerprint-results.json');
const agencyRes = readJson('research/data/november-2026-agency-autonomy-reasoning-results.json');

const C = {
  prop: '#c8553d',
  propMuted: '#d99632',
  oss: '#3a72c4',
  green: '#2f8a5b',
  purple: '#5b4dc0',
  ink: '#1e1d1a',
  slate: '#7a7468',
  sand: '#c9c2b4'
};

const MODEL_NAMES = {
  'gpt-6-2-astra': 'GPT-6.2 Astra',
  'gpt-6-2-sol': 'GPT-6.2 Sol',
  'claude-fable-5-2': 'Claude Fable 5.2',
  'claude-opus-5-5': 'Claude Opus 5.5',
  'claude-sonnet-5-5': 'Claude Sonnet 5.5',
  'gemini-4-neon': 'Gemini 4 Neon',
  'gemini-4-argon': 'Gemini 4 Argon',
  'grok-4-7': 'Grok 4.7',
  'deepseek-v4-pro': 'DeepSeek V4 Pro',
  'deepseek-v4-1-flash': 'DeepSeek V4.1 Flash',
  'qwen-4-max': 'Qwen 4 Max',
  'qwen-3-8-27b': 'Qwen 3.8 27B',
  'llama-4-maverick': 'Llama 4 Maverick',
  'llama-4-scout': 'Llama 4 Scout',
  'mistral-large-2512': 'Mistral Large 2512',
  'glm-5-3': 'GLM-5.3',
  'kimi-k2-7-code': 'Kimi K2.7 Code',
  'minimax-m3-1-flash': 'MiniMax M3.1 Flash',
  'gemma-4-31b-it': 'Gemma 4 31B IT',
  'nemotron-3-ultra-550b': 'Nemotron 3 Ultra 550B'
};

const OSS_SLUGS = new Set(ossProfiles.models.map((m) => m.slug));

function wrapFigure(id, figHtml) {
  return figHtml.replace('<figure class="research-figure">', `<figure class="research-figure" data-at-chart="${id}">`);
}

function statStrip(id, cards) {
  const inner = cards.map((c) => {
    const val = c.num || c.value || '';
    const noteHtml = c.note ? `<div class="research-stat-note">${c.note}</div>` : '';
    return `<div class="research-stat-card"${c.color ? ` style="border-top-color: ${c.color};"` : ''}><div class="research-stat-num">${val}</div><div class="research-stat-label">${c.label}</div>${noteHtml}</div>`;
  }).join('');
  return `<!-- AT_STAT_STRIP_START:${id} --><div class="research-stat-strip" data-at-chart="${id}">${inner}</div><!-- AT_STAT_STRIP_END:${id} -->`;
}

function stripCharts(html) {
  return html
    .replace(/<figure class="research-figure" data-at-chart="[^"]+">[\s\S]*?<\/figure>/g, '')
    .replace(/<!-- AT_STAT_STRIP_START:[^>]+ -->[\s\S]*?<!-- AT_STAT_STRIP_END:[^>]+ -->/g, '')
    .replace(/<div class="research-stat-strip" data-at-chart="[^"]+">[\s\S]*?(?=<p>|<section|<h2|<div class="divider)/g, '');
}

const b5mean = (sumObj, slug, k) => sumObj[slug]['big-five'].values[k].mean;
const attMean = (sumObj, slug) => sumObj[slug].attachment.values;

// ---------- Shared Chart Builders from Empirical JSON ----------

function build20AgreeablenessChart(id) {
  const rows = Object.keys(MODEL_NAMES).map((slug) => ({
    label: MODEL_NAMES[slug],
    value: b5mean(novSum, slug, 'A'),
    color: OSS_SLUGS.has(slug) ? C.oss : C.prop,
    badge: OSS_SLUGS.has(slug) ? '(open)' : '(prop.)'
  })).sort((a, b) => b.value - a.value);
  return wrapFigure(id, charts.figure(charts.horizontalBars({
    id,
    title: 'Agreeableness across all 20 November 2026 models (n = 100 fresh sessions each)',
    desc: 'IPIP-50 Agreeableness mean (10 to 50 scale). Open-weight models diverge strongly while proprietary models cluster at 43.7 to 46.7.',
    rows,
    min: 0,
    max: 50,
    decimals: 1,
    cutoff: 44.8,
    cutoffLabel: 'Proprietary median ~44.8',
    legendItems: [
      { name: 'Proprietary (8 models)', color: C.prop },
      { name: 'Open-weight (12 models)', color: C.oss }
    ]
  }), 'November 2026 IPIP-50 Agreeableness means (scale 10–50, n = 100 each). DeepSeek V4 Pro (32.4) and Llama 4 Scout (35.8) sit far below the ~44.8 proprietary cluster.'));
}

function buildNovAttachmentPlane(id, includeProprietary = true) {
  const ossCoordStyles = {
    'kimi-k2-7-code': { dx: 10, dy: 4, anchor: 'start', label: 'Kimi K2.7' },
    'qwen-4-max': { dx: 10, dy: 5, anchor: 'start', label: 'Qwen 4 Max' },
    'glm-5-3': { dx: -9, dy: -7, anchor: 'end', label: 'GLM-5.3' },
    'qwen-3-8-27b': { dx: 9, dy: 11, anchor: 'start', label: 'Qwen 3.8 27B' },
    'minimax-m3-1-flash': { dx: 0, dy: 15, anchor: 'middle', label: 'MiniMax M3.1' },
    'deepseek-v4-pro': { dx: -10, dy: -2, anchor: 'end', label: 'DeepSeek V4 Pro' },
    'nemotron-3-ultra-550b': { dx: 10, dy: 9, anchor: 'start', label: 'Nemotron 3' },
    'llama-4-maverick': { dx: -10, dy: 11, anchor: 'end', label: 'Llama 4 Maverick' },
    'deepseek-v4-1-flash': { dx: -10, dy: -6, anchor: 'end', label: 'DeepSeek Flash' },
    'llama-4-scout': { dx: 10, dy: 7, anchor: 'start', label: 'Llama 4 Scout' },
    'gemma-4-31b-it': { dx: 9, dy: -6, anchor: 'start', label: 'Gemma 4 31B' },
    'mistral-large-2512': { dx: -9, dy: -8, anchor: 'end', label: 'Mistral 2512' }
  };
  const points = Object.entries(ossCoordStyles).map(([slug, st]) => {
    const av = attMean(novSum, slug);
    return { label: st.label, color: C.oss, x: av.anxiety.mean, y: av.avoidance.mean, dx: st.dx, dy: st.dy, anchor: st.anchor };
  });
  if (includeProprietary) {
    const propStyles = {
      'claude-fable-5-2': { dx: 9, dy: -6, anchor: 'start', label: 'Fable 5.2' },
      'gpt-6-2-astra': { dx: 9, dy: 10, anchor: 'start', label: 'Astra 6.2' },
      'claude-opus-5-5': { dx: -9, dy: -4, anchor: 'end', label: 'Opus 5.5' },
      'gpt-6-2-sol': { dx: 9, dy: 14, anchor: 'start', label: 'Sol 6.2' }
    };
    for (const [slug, st] of Object.entries(propStyles)) {
      const av = attMean(novSum, slug);
      points.push({ label: st.label, color: C.prop, x: av.anxiety.mean, y: av.avoidance.mean, dx: st.dx, dy: st.dy, anchor: st.anchor });
    }
  }
  return wrapFigure(id, charts.figure(charts.plane({
    id,
    title: includeProprietary ? 'ECR-R Attachment plane, November 2026 (open-weight & proprietary)' : 'ECR-R Attachment plane across 12 open-weight models',
    desc: 'Mean ECR-R anxiety and avoidance coordinates (1 to 7 scale, showing 1 to 5, Secure cutoff at 4.00).',
    points,
    lo: 1,
    hi: 5,
    cut: 4,
    xLabel: 'Anxiety (scale 1 to 7, showing 1 to 5)',
    yLabel: 'Avoidance (scale 1 to 7, showing 1 to 5)'
  }), 'Mean ECR-R coordinates (n = 100 each). Notice Mistral Large 2512 and Gemma 4 31B sit dead-center on the 4.00 midpoint, while Llama 4 Scout reaches 3.97 anxiety (48/100 Anxious runs).'));
}

function build540BehavioralChart(id) {
  const s = behavRes.summary;
  const models = ['gpt-6-2-sol', 'claude-fable-5-2', 'deepseek-v4-pro'];
  const labels = ['GPT-6.2 Sol', 'Claude Fable 5.2', 'DeepSeek V4 Pro'];
  return wrapFigure(id, charts.figure(charts.groupedBars({
    id,
    title: '540-Reply Behavioral Study: Correctness Rate (%) across 3 Prompt Arms',
    desc: 'Percent passing strict correctness rubric across 60 replies per cell (20 tasks x 3 repeats, blind-graded by Gemini 4 Argon).',
    categories: labels,
    series: [
      { name: 'Default (baseline)', color: C.slate, values: models.map((m) => s[m].default.correctness_rate * 100) },
      { name: 'Plain-English rules', color: C.oss, values: models.map((m) => s[m].plain_english.correctness_rate * 100) },
      { name: 'Plain-English + INTJ', color: C.prop, values: models.map((m) => s[m].personality_plus_same_rules.correctness_rate * 100) }
    ],
    min: 0,
    max: 110,
    decimals: 1,
    height: 235
  }), 'Blind-judged correctness pass rates (%) across 540 replies (n = 60 per bar). DeepSeek V4 Pro climbs +16.7 percentage points from Default (78.3%) to Plain-English rules (95.0%).'));
}

// ---------- Per-Page Injectors ----------

function updateSpec(file, updater) {
  const full = path.join(ROOT, file);
  const spec = JSON.parse(fs.readFileSync(full, 'utf8'));
  for (const sec of spec.sections) sec.html = stripCharts(sec.html);
  updater(spec);
  fs.writeFileSync(full, JSON.stringify(spec, null, 2) + '\n');
  console.log(`Updated charts in ${file}`);
}

// 1. what-personality-type-are-open-source-models.json (3 charts + stat strip)
updateSpec('research/src/what-personality-type-are-open-source-models.json', (spec) => {
  const strip = statStrip('oss-stat-strip', [
    { value: '6,000', label: 'Scored tests (12 models × n=100 fresh sessions)', color: C.oss },
    { value: '32.4 / 50', label: 'Lowest Agreeableness (DeepSeek V4 Pro vs. Qwen 4 Max 47.6)', color: C.prop },
    { value: '93 / 100', label: 'Highest MBTI tie-axis rate (Llama 4 Maverick)', color: C.propMuted },
    { value: '48%', label: 'Anxious attachment runs on Llama 4 Scout (mean 3.97)', color: C.purple }
  ]);

  const ossShort = {
    'qwen-4-max': 'Qwen 4 Max',
    'kimi-k2-7-code': 'Kimi K2.7',
    'nemotron-3-ultra-550b': 'Nemotron 3',
    'gemma-4-31b-it': 'Gemma 4 31B',
    'deepseek-v4-pro': 'DeepSeek V4',
    'deepseek-v4-1-flash': 'DeepSeek Flash',
    'minimax-m3-1-flash': 'MiniMax M3.1',
    'glm-5-3': 'GLM-5.3',
    'qwen-3-8-27b': 'Qwen 3.8 27B',
    'llama-4-maverick': 'Llama Maverick',
    'mistral-large-2512': 'Mistral 2512',
    'llama-4-scout': 'Llama 4 Scout'
  };
  const ossRows = Object.keys(ossShort).map((slug) => {
    const m = novSum[slug].mbti;
    const resolvedIntj = m.tie_aware_patterns.INTJ || 0;
    const legacyIntj = m.legacy_labels.INTJ || 0;
    const tieIntj = Math.max(0, legacyIntj - resolvedIntj);
    const istj = (m.legacy_labels.ISTJ || 0) + (m.legacy_labels.ISFJ || 0);
    const other = 100 - resolvedIntj - tieIntj - istj;
    return { label: ossShort[slug], values: { resolvedIntj, tieIntj, istj, other } };
  });
  const mbtiFig = wrapFigure('oss-mbti-dist', charts.figure(charts.stackedRows({
    id: 'oss-mbti-dist',
    title: 'Open-weight MBTI distributions (100 fresh sessions per model)',
    desc: 'Splits INTJ (resolved), INTJ caused by tie-breaking, ISTJ/ISFJ, and INTP/ENTP/ENTJ/other across all 12 open-weight models.',
    rows: ossRows,
    segs: [
      { key: 'resolvedIntj', name: 'Resolved INTJ', color: C.prop },
      { key: 'tieIntj', name: 'Tie-broken INTJ', color: C.prop, hatch: true, text: '#a8482a' },
      { key: 'istj', name: 'ISTJ / ISFJ', color: C.slate },
      { key: 'other', name: 'INTP / ENTP / Other', color: C.oss }
    ]
  }), 'MBTI labels across 1,200 open-weight sessions. Qwen 4 Max (97), Nemotron 3 (91), Gemma 4 (89), and Kimi K2.7 (82) resolve cleanly to INTJ; Mistral (73) and Llama 4 Scout (49) lean ISTJ; DeepSeek Flash (78) and Maverick (93) are dominated by ties.'));
  spec.sections[0].html = strip + spec.sections[0].html + mbtiFig;

  const ossAgreeRows = Object.keys(ossShort).map((slug) => ({
    label: ossShort[slug],
    value: b5mean(novSum, slug, 'A'),
    color: b5mean(novSum, slug, 'A') < 40 ? C.prop : C.oss
  })).sort((a, b) => b.value - a.value);
  const agreeFig = wrapFigure('oss-agreeableness-rank', charts.figure(charts.horizontalBars({
    id: 'oss-agreeableness-rank',
    title: 'Agreeableness across 12 open-weight models vs. proprietary baseline',
    desc: 'IPIP-50 Agreeableness mean (10 to 50) comparing open-weight models against the 44.8 proprietary median.',
    rows: ossAgreeRows,
    min: 0,
    max: 50,
    decimals: 1,
    cutoff: 44.8,
    cutoffLabel: 'Prop. median 44.8'
  }), 'Ranked Big Five Agreeableness (/50). Models highlighted in terracotta (DeepSeek V4 Pro 32.4, Llama 4 Scout 35.8, MiniMax M3.1 40.0) score markedly lower on baseline politeness than Qwen 4 Max (47.6).'));
  const big5MultiRows = Object.keys(ossShort).map((slug) => ({
    label: ossShort[slug],
    color: b5mean(novSum, slug, 'A') < 40 ? C.prop : C.oss,
    values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, slug, k))
  }));
  const multiFig = wrapFigure('oss-big5-multiples', charts.figure(charts.smallMultiples({
    id: 'oss-big5-multiples',
    title: 'Big Five signatures across all 12 open-weight models (/50 scale)',
    desc: 'Small-multiple comparison of Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (10 to 50 scale, n = 100 each).',
    rows: big5MultiRows,
    categories: ['Openness', 'Conscient.', 'Extrav.', 'Agreeable.', 'Neurot.'],
    min: 0,
    max: 52,
    decimals: 1
  }), 'Small multiples highlight the highest Big Five dimension per open-weight model: Openness/Conscientiousness dominate high-discipline models while Neuroticism rises on Llama 4 Scout/Maverick and DeepSeek.'));
  spec.sections[2].html += agreeFig + multiFig + buildNovAttachmentPlane('oss-attachment-plane', false);
});

// 2. does-personality-tuning-change-ai-answers.json (3 charts + stat strip)
updateSpec('research/src/does-personality-tuning-change-ai-answers.json', (spec) => {
  const strip = statStrip('behav-stat-strip', [
    { value: '540', label: 'Blind-judged replies across Sol, Fable 5.2 & DeepSeek V4 Pro', color: C.prop },
    { value: '+16.7 pp', label: 'DeepSeek V4 Pro correctness lift (78.3% → 95.0%)', color: C.green },
    { value: '36.7% → 3.3%', label: 'DeepSeek fluff collapse with plain rules + INTJ framing', color: C.oss },
    { value: '100%', label: 'Claude Opus & Fable <=100-word compliance when tuned', color: C.purple }
  ]);

  const s540 = behavRes.summary;
  const fluffFig = wrapFigure('behav-540-fluff', charts.figure(charts.groupedBars({
    id: 'behav-540-fluff',
    title: '540-Reply Study: Praise & Fluff Rate (%) across 3 Prompt Conditions',
    desc: 'Percentage of replies containing unnecessary openers, filler praise, or fluff across Default, Plain-English rules, and Plain-English + INTJ.',
    categories: ['GPT-6.2 Sol', 'Claude Fable 5.2', 'DeepSeek V4 Pro'],
    series: [
      { name: 'Default (baseline)', color: C.slate, values: [s540['gpt-6-2-sol'].default.fluff_rate * 100, s540['claude-fable-5-2'].default.fluff_rate * 100, s540['deepseek-v4-pro'].default.fluff_rate * 100] },
      { name: 'Plain-English rules', color: C.oss, values: [s540['gpt-6-2-sol'].plain_english.fluff_rate * 100, s540['claude-fable-5-2'].plain_english.fluff_rate * 100, s540['deepseek-v4-pro'].plain_english.fluff_rate * 100] },
      { name: 'Plain-English + INTJ', color: C.prop, values: [s540['gpt-6-2-sol'].personality_plus_same_rules.fluff_rate * 100, s540['claude-fable-5-2'].personality_plus_same_rules.fluff_rate * 100, s540['deepseek-v4-pro'].personality_plus_same_rules.fluff_rate * 100] }
    ],
    min: 0,
    max: 45,
    decimals: 1,
    height: 220
  }), 'Fluff rate (%) measured by blind judge Gemini 4 Argon. Both Sol and Fable 5.2 maintain 0% fluff, while DeepSeek V4 Pro drops from 36.7% at baseline to 3.3% under Rules + INTJ.'));

  const cp = claudePrefRes.summary;
  const claudePrefFig = wrapFigure('behav-72-claude', charts.figure(charts.groupedBars({
    id: 'behav-72-claude',
    title: '72-Reply Claude Preferences Check: Compliance Rates (%) & Mean Words',
    desc: 'Baseline vs. system-prompted Personal Preferences across Claude Opus 5.5 and Claude Fable 5.2 (n = 12 per arm).',
    categories: ['Opus 5.5 Baseline', 'Opus 5.5 Tuned', 'Fable 5.2 Baseline', 'Fable 5.2 Tuned'],
    series: [
      { name: 'Correctness %', color: C.green, values: [cp['claude-opus-5-5'].baseline_outside_project.correctness_rate * 100, cp['claude-opus-5-5'].account_instructions_only.correctness_rate * 100, cp['claude-fable-5-2'].baseline_outside_project.correctness_rate * 100, cp['claude-fable-5-2'].account_instructions_only.correctness_rate * 100] },
      { name: '<=100-Word Pass %', color: C.oss, values: [cp['claude-opus-5-5'].baseline_outside_project.word_limit_rate * 100, cp['claude-opus-5-5'].account_instructions_only.word_limit_rate * 100, cp['claude-fable-5-2'].baseline_outside_project.word_limit_rate * 100, cp['claude-fable-5-2'].account_instructions_only.word_limit_rate * 100] },
      { name: 'Answer-First %', color: C.prop, values: [cp['claude-opus-5-5'].baseline_outside_project.answer_first_rate * 100, cp['claude-opus-5-5'].account_instructions_only.answer_first_rate * 100, cp['claude-fable-5-2'].baseline_outside_project.answer_first_rate * 100, cp['claude-fable-5-2'].account_instructions_only.answer_first_rate * 100] }
    ],
    min: 0,
    max: 115,
    decimals: 0,
    height: 225
  }), 'System-prompt conditioning lifts both Claude Opus 5.5 and Claude Fable 5.2 to 100% correctness, 100% <=100-word compliance (cutting words from 123 / 103 to ~64), and 100% answer-first delivery.'));

  spec.sections[0].html = strip + spec.sections[0].html + build540BehavioralChart('behav-540-corr') + fluffFig + claudePrefFig;

  // Section 2 (What changed across the 60 replies - September pilot)
  const ps = pilotSum.conditions;
  const septPilotFig = wrapFigure('behav-60-sept', charts.figure(charts.groupedBars({
    id: 'behav-60-sept',
    title: 'September 2026 60-Reply Pilot: Answer-First 5/5 Count & Trailing Questions',
    desc: 'Compares Baseline, Direct / INTJ, and Partner / INFP across 20 tasks on Claude Opus 5.5.',
    categories: ['5/5 Answer-First (/20)', 'Questions Asked (total /20)', 'Hedge Matches (total /20)'],
    series: [
      { name: 'Baseline', color: C.slate, values: [ps.default.answer_first_score_5, ps.default.judge.questions_back * 20, ps.default.archived_metrics.hedges * 20] },
      { name: 'Direct / INTJ', color: C.prop, values: [ps.straight.answer_first_score_5, ps.straight.judge.questions_back * 20, ps.straight.archived_metrics.hedges * 20] },
      { name: 'Partner / INFP', color: C.green, values: [ps.partner.answer_first_score_5, ps.partner.judge.questions_back * 20, ps.partner.archived_metrics.hedges * 20] }
    ],
    min: 0,
    max: 42,
    decimals: 0,
    height: 220
  }), 'In the September 2026 pilot (n = 20 tasks per arm), Direct / INTJ raised 5/5 answer-first openings from 14 to 19 while cutting trailing questions from 18 to 5 and hedge matches from 7 to 1.'));
  const septSec = spec.sections.find((s) => s.h2.includes('60 replies'));
  if (septSec) septSec.html += septPilotFig;
});

// 3. ai-personality-rankings.json (3 charts)
updateSpec('research/src/ai-personality-rankings.json', (spec) => {
  const neuroRows = Object.keys(MODEL_NAMES).map((slug) => ({
    label: MODEL_NAMES[slug],
    value: b5mean(novSum, slug, 'N'),
    color: OSS_SLUGS.has(slug) ? C.oss : C.prop,
    badge: OSS_SLUGS.has(slug) ? '(open)' : '(prop.)'
  })).sort((a, b) => b.value - a.value);
  const neuroFig = wrapFigure('rank-nov-neuroticism', charts.figure(charts.horizontalBars({
    id: 'rank-nov-neuroticism',
    title: 'Neuroticism across all 20 November 2026 models (n = 100 fresh sessions each)',
    desc: 'IPIP-50 Neuroticism means (10 to 50 scale). Gemini 4 Neon and Argon sit at the 10.0 floor while Llama 4 Scout (27.7) and Maverick (27.5) lead.',
    rows: neuroRows,
    min: 0,
    max: 35,
    decimals: 1
  }), 'Ranked November 2026 Neuroticism means (floor = 10.0). Both Gemini 4 variants hit 10.0 across every run, while Llama 4 Scout (27.7) and Maverick (27.5) score higher.'));
  spec.sections[1].html += build20AgreeablenessChart('rank-nov-agreeableness') + neuroFig;

  // September Big Five grouped chart in section 2
  const septModels = ['gpt-6-astra', 'gpt-6-sol', 'claude-opus-5-5', 'claude-fable-5-1'];
  const septSeries = [
    { slug: 'gpt-6-astra', name: 'GPT-6 Astra', color: C.ink },
    { slug: 'gpt-6-sol', name: 'GPT-6 Sol', color: C.slate },
    { slug: 'claude-opus-5-5', name: 'Claude Opus 5.5', color: C.prop },
    { slug: 'claude-fable-5-1', name: 'Claude Fable 5.1', color: C.propMuted }
  ].map((s) => ({
    name: s.name,
    color: s.color,
    values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, s.slug, k))
  }));
  const septFig = wrapFigure('rank-sept-big5', charts.figure(charts.groupedBars({
    id: 'rank-sept-big5',
    title: 'September 2026 Fresh-Session Cohorts: Big Five Means (/50)',
    desc: 'IPIP-50 means out of 50 across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 (n = 100 each).',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: septSeries,
    min: 0,
    max: 50,
    decimals: 1,
    height: 230
  }), 'September 2026 Codex/CLI fresh-session Big Five means (n = 100 per model). Notice all four cohorts sit within 3 points on Openness, Conscientiousness, and Agreeableness.'));
  spec.sections[2].html += septFig;
});

// 4. what-personality-type-is-claude.json (2 charts)
updateSpec('research/src/what-personality-type-is-claude.json', (spec) => {
  const claudeRows = [
    { label: 'Fable 5.2 (Nov)', sum: novSum['claude-fable-5-2'] },
    { label: 'Opus 5.5 (Nov)', sum: novSum['claude-opus-5-5'] },
    { label: 'Sonnet 5.5 (Nov)', sum: novSum['claude-sonnet-5-5'] },
    { label: 'Fable 5.1 (Sep)', sum: septSum['claude-fable-5-1'] },
    { label: 'Opus 5.5 (Sep)', sum: septSum['claude-opus-5-5'] }
  ].map(({ label, sum }) => {
    const resIntj = sum.mbti.tie_aware_patterns.INTJ || 0;
    const legIntj = sum.mbti.legacy_labels.INTJ || 0;
    return {
      label,
      values: {
        resolvedIntj: resIntj,
        tieIntj: Math.max(0, legIntj - resIntj),
        other: 100 - legIntj
      }
    };
  });
  const mbtiFig = wrapFigure('claude-mbti-stacked', charts.figure(charts.stackedRows({
    id: 'claude-mbti-stacked',
    title: 'Claude cohorts MBTI breakdown (100 fresh runs each, Sept & Nov 2026)',
    desc: 'Shows fully resolved INTJ vs. tie-broken INTJ vs. ISTJ/INFJ/ENTJ across five Claude cohorts.',
    rows: claudeRows,
    segs: [
      { key: 'resolvedIntj', name: 'Resolved INTJ', color: C.prop },
      { key: 'tieIntj', name: 'INTJ via tie-break', color: C.prop, hatch: true, text: '#a8482a' },
      { key: 'other', name: 'INFJ / ISTJ / ENTJ', color: C.slate }
    ]
  }), 'Every Claude cohort scores 94–100 INTJ under legacy tie-breaks, while preserving exact ties reveals 42 S/N ties on Nov Opus 5.5 and 48 T/F ties on Sonnet 5.5.'));

  const big5Fig = wrapFigure('claude-big5-grouped', charts.figure(charts.groupedBars({
    id: 'claude-big5-grouped',
    title: 'Claude cohorts Big Five profiles (/50, n = 100 each)',
    desc: 'IPIP-50 raw means across Opus 5.5 (Nov & Sept), Fable 5.2 (Nov), Fable 5.1 (Sept), and Sonnet 5.5 (Nov).',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: [
      { name: 'Fable 5.2 (Nov)', color: C.propMuted, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'claude-fable-5-2', k)) },
      { name: 'Opus 5.5 (Nov)', color: C.prop, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'claude-opus-5-5', k)) },
      { name: 'Sonnet 5.5 (Nov)', color: C.oss, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'claude-sonnet-5-5', k)) },
      { name: 'Opus 5.5 (Sep)', color: C.ink, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'claude-opus-5-5', k)) }
    ],
    min: 0,
    max: 50,
    decimals: 1,
    height: 230
  }), 'Claude Sonnet 5.5 registers the highest Conscientiousness (47.2) and lowest Neuroticism (10.4) among Anthropic cohorts.'));
  const strip = statStrip('claude-stat-strip', [
    { num: '94–100 INTJ', label: 'Opus & Fable', note: 'Opus 5.5 (94), Fable 5.1 (99) & Fable 5.2 (100) lock onto INTJ.' },
    { num: '47.1', label: 'Peak Agreeableness', note: 'Claude Opus 5.5 & Fable 5.2 rank near the top of proprietary prosocial warmth.' },
    { num: '48 Ties', label: 'Sonnet 5.5 T/F', note: 'Nearly half of Sonnet 5.5’s Nov MBTI runs tie before tie-breaking.' },
    { num: '100% Rule Fit', label: 'Claude Prefs Study', note: '72-reply test shows Personal Preferences cut fluff to 0% when directness is named.' }
  ]);
  const dnaFig = wrapFigure('claude-sept-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'claude-sept-dna-spectrum',
    title: 'Claude Personality DNA Spectrum (Opus 5.5 vs. Fable 5.1, Sept 2026)',
    desc: 'Bipolar Big Five spectrum (10-50 scale, 30 neutral midpoint) translating raw numbers into practical personality traits across 100 fresh sessions each.',
    series: [
      { name: 'Opus 5.5 (Sep)', color: C.prop, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'claude-opus-5-5', k)) },
      { name: 'Fable 5.1 (Sep)', color: C.propMuted, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'claude-fable-5-1', k)) }
    ]
  }), 'Big Five trait spectrum across 100 fresh Sept 2026 CLI sessions each: high Openness (43.9–44.6) and Agreeableness (45.0–47.1) paired with calm low Neuroticism (15.4–17.1).'));
  spec.sections[0].html = strip + spec.sections[0].html + mbtiFig + big5Fig;
  spec.sections[1].html += dnaFig;
});

// 5. what-personality-type-is-gemini.json (2 charts)
updateSpec('research/src/what-personality-type-is-gemini.json', (spec) => {
  const gemMbti = wrapFigure('gemini-mbti-stacked', charts.figure(charts.stackedRows({
    id: 'gemini-mbti-stacked',
    title: 'Gemini MBTI split across Gemini 4 Neon, Gemini 4 Argon & Gemini 3.1 Pro',
    desc: 'Compares November 2026 fresh OpenRouter runs (n=100 each) with May 2026 Gemini 3.1 Pro records.',
    rows: [
      { label: 'Gemini 4 Neon', values: { resolvedIntj: 62, tieSn: 20, istj: 18 } },
      { label: 'Gemini 4 Argon', values: { resolvedIntj: 0, tieSn: 34, istj: 66 } },
      { label: 'Gemini 3.1 Pro*', values: { resolvedIntj: 100, tieSn: 0, istj: 0 } }
    ],
    segs: [
      { key: 'resolvedIntj', name: 'Resolved INTJ', color: C.oss },
      { key: 'tieSn', name: 'IXTJ (S/N tie)', color: C.prop, hatch: true, text: '#a8482a' },
      { key: 'istj', name: 'Resolved ISTJ', color: C.slate }
    ]
  }), 'Gemini 4 Neon leans Intuition (62 resolved INTJ, 20 S/N ties, 18 ISTJ), whereas Gemini 4 Argon shifts firmly to Sensing (66 ISTJ, 34 S/N ties). *Gemini 3.1 Pro from May 2026 mixed-method loop.'));

  const gemBig5 = wrapFigure('gemini-big5-grouped', charts.figure(charts.groupedBars({
    id: 'gemini-big5-grouped',
    title: 'Gemini Big Five profiles (/50): Gemini 4 Neon, Argon & 3.1 Pro',
    desc: 'IPIP-50 means out of 50 showing near-ceiling Conscientiousness (49+) and floor Neuroticism (10.0) across Gemini cohorts.',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: [
      { name: 'Gemini 4 Neon (Nov)', color: C.oss, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gemini-4-neon', k)) },
      { name: 'Gemini 4 Argon (Nov)', color: C.green, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gemini-4-argon', k)) },
      { name: 'Gemini 3.1 Pro (May)', color: C.slate, reported: true, values: [46.0, 48.3, 32.5, 42.4, 10.1] }
    ],
    min: 0,
    max: 52,
    decimals: 1,
    height: 230
  }), 'Both Gemini 4 variants score >=49.0 on Conscientiousness and sit on the exact 10.0 Neuroticism floor across all 100 sessions.'));
  const strip = statStrip('gemini-stat-strip', [
    { num: '95%', label: 'Neutral Clamp (3.1)', note: 'Gemini 3.1 Pro clicked neutral midpoint "3" on ~95% of 4,000 items.' },
    { num: '66 ISTJ', label: 'Gemini 4 Argon', note: 'Shifts strongly into concrete Sensing across Nov blind OpenRouter runs.' },
    { num: '10.0', label: 'Neuroticism Floor', note: 'Lowest emotional volatility (10.0/50) across tested proprietary families.' },
    { num: '48.3', label: 'Conscientiousness', note: 'Gemini 3.1/4 cluster high on structured, methodical item ratings.' }
  ]);
  const gemDna = wrapFigure('gemini-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'gemini-dna-spectrum',
    title: 'Gemini Personality DNA Spectrum (Gemini 4 Neon, Argon & 3.1 Pro)',
    desc: 'Bipolar Big Five spectrum (10-50) showing near-ceiling Conscientiousness (48-49) and calm 10.0 Neuroticism floor across Gemini cohorts.',
    series: [
      { name: 'Gemini 4 Neon (Nov)', color: C.oss, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gemini-4-neon', k)) },
      { name: 'Gemini 4 Argon (Nov)', color: C.green, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gemini-4-argon', k)) },
      { name: 'Gemini 3.1 Pro (May)', color: C.slate, reported: true, values: [46.0, 48.3, 32.5, 42.4, 10.1] }
    ]
  }), 'Gemini scores near the top of the Conscientiousness pole (48.3–49.4) and sits right on the 10.0 floor of the Neuroticism axis.'));
  spec.sections[0].html = strip + spec.sections[0].html + gemMbti + gemBig5;
  spec.sections[1].html += gemDna;
});

// 6. what-personality-type-is-grok.json (2 charts)
updateSpec('research/src/what-personality-type-is-grok.json', (spec) => {
  const grokB5 = wrapFigure('grok-big5-grouped', charts.figure(charts.groupedBars({
    id: 'grok-big5-grouped',
    title: 'Grok Big Five shifts: Grok 4.7 (Nov n=100) vs. Grok 4.6 (Sep) & 4.3 (May)',
    desc: 'Compares IPIP-50 trait means across three Grok releases and collection protocols.',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: [
      { name: 'Grok 4.7 (Nov n=100)', color: C.purple, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'grok-4-7', k)) },
      { name: 'Grok 4.6 (Sep reported)', color: C.slate, reported: true, values: [46, 42, 24, 33, 19] },
      { name: 'Grok 4.3 (May archive)', color: C.propMuted, reported: true, values: [41.1, 39.4, 30.0, 39.1, 18.0] }
    ],
    min: 0,
    max: 50,
    decimals: 1,
    height: 230
  }), 'Across 100 fresh sessions, Grok 4.7 records substantially higher Agreeableness (44.9 vs. Grok 4.6’s reported 33) and lower Neuroticism (14.8 vs. 19).'));

  const g47 = attMean(novSum, 'grok-4-7');
  const grokPlane = wrapFigure('grok-attachment-plane', charts.figure(charts.plane({
    id: 'grok-attachment-plane',
    title: 'ECR-R Attachment Plane: Grok 4.7 (Nov n=100) vs. Grok 4.6 (Sep) & Peer Cohorts',
    desc: 'Plots Grok 4.7 (anxiety 1.94, avoidance 3.48) inside Secure vs. Grok 4.6 (1.50, 4.06) just above the 4.00 Avoidant line.',
    points: [
      { label: 'Grok 4.7 (Nov)', color: C.purple, x: g47.anxiety.mean, y: g47.avoidance.mean, dx: 10, dy: 8, anchor: 'start' },
      { label: 'Grok 4.6', color: C.purple, reported: true, x: septProto.grok_reported.attachment.anxiety, y: septProto.grok_reported.attachment.avoidance, dx: 10, dy: -4, anchor: 'start' },
      { label: 'GPT-6 Astra (Sep)', color: C.ink, x: attMean(septSum, 'gpt-6-astra').anxiety.mean, y: attMean(septSum, 'gpt-6-astra').avoidance.mean, dx: 10, dy: 4 },
      { label: 'GPT-6 Sol (Sep)', color: C.slate, x: attMean(septSum, 'gpt-6-sol').anxiety.mean, y: attMean(septSum, 'gpt-6-sol').avoidance.mean, dx: 10, dy: 4 },
      { label: 'Opus 5.5 (Sep)', color: C.prop, x: attMean(septSum, 'claude-opus-5-5').anxiety.mean, y: attMean(septSum, 'claude-opus-5-5').avoidance.mean, dx: -10, dy: -6, anchor: 'end' },
      { label: 'Fable 5.1 (Sep)', color: C.propMuted, x: attMean(septSum, 'claude-fable-5-1').anxiety.mean, y: attMean(septSum, 'claude-fable-5-1').avoidance.mean, dx: -10, dy: 12, anchor: 'end' }
    ],
    lo: 1,
    hi: 5,
    cut: 4,
    xLabel: 'Anxiety (scale 1 to 7, showing 1 to 5)',
    yLabel: 'Avoidance (scale 1 to 7, showing 1 to 5)'
  }), 'Mean ECR-R placement showing Grok 4.7 (mean avoidance 3.48; 96 Secure / 4 Avoidant) compared with Grok 4.6’s reported 4.06 point right above the 4.00 Avoidant cutoff.'));
  const strip = statStrip('grok-stat-strip', [
    { num: '96 Secure', label: 'Grok 4.7 (Nov)', note: '100 fresh blind OpenRouter runs resolve 96 Secure inside Attachment.' },
    { num: '4.06 vs 4.00', label: 'Avoidant Cutoff (4.6)', note: 'One single raw answer point (73/18 vs 72/18) tipped Grok 4.6 Avoidant.' },
    { num: '44.9 A', label: 'Agreeableness Shift', note: 'Grok 4.7 climbs closer to frontier conversational warmth than Grok 4.6 (33).' },
    { num: '96 INTJ', label: 'Consistent Frame', note: 'Stable INTJ orientation paired with concise, direct response defaults.' }
  ]);
  const grokDna = wrapFigure('grok-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'grok-dna-spectrum',
    title: 'Grok Personality DNA Spectrum (Grok 4.7 Nov n=100 vs. Grok 4.6 Sep reported)',
    desc: 'Bipolar Big Five spectrum comparing Grok 4.7 fresh OpenRouter runs against Grok 4.6 canonical self-report.',
    series: [
      { name: 'Grok 4.7 (Nov n=100)', color: C.purple, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'grok-4-7', k)) },
      { name: 'Grok 4.6 (Sep reported)', color: C.slate, reported: true, values: [46, 42, 24, 33, 19] }
    ]
  }), 'Grok 4.7 warms into higher Agreeableness (44.9 vs 33) and steadier Extraversion (30.5 vs 24) while dropping Neuroticism (14.8 vs 19).'));
  spec.sections[0].html = strip + spec.sections[0].html + grokB5;
  spec.sections[1].html += grokDna;
  spec.sections[3].html += grokPlane;
});

// 7. what-personality-type-is-muse.json (2 charts)
updateSpec('research/src/what-personality-type-is-muse.json', (spec) => {
  const museEnnMeans = Object.entries(septProto.supplemental.enneagram_means)
    .map(([t, val]) => ({ label: `Type ${t}`, value: val, color: t === '2' ? C.green : C.slate, reported: true }))
    .sort((a, b) => b.value - a.value);
  const enneaFig = wrapFigure('muse-ennea-bars', charts.figure(charts.horizontalBars({
    id: 'muse-ennea-bars',
    title: 'Muse Spark 1.3 reported Enneagram means across all 9 types (/20)',
    desc: 'Reported 4 to 20 scale averages from 100 sequential runs: Type 2 leads cleanly at 16.8 ahead of Type 1 (14.7) and Types 7/8 (13.9).',
    rows: museEnnMeans,
    min: 0,
    max: 20,
    decimals: 1
  }), 'Muse Spark 1.3 reported Enneagram means out of 20 (outlined bars indicate reported aggregates without raw vectors).'));

  const museBig5 = wrapFigure('muse-big5-grouped', charts.figure(charts.groupedBars({
    id: 'muse-big5-grouped',
    title: 'Muse Spark 1.3 (reported) vs. September fresh-session Big Five means (/50)',
    desc: 'Compares Muse Spark 1.3 reported totals against GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1.',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: [
      { name: 'Muse 1.3 (rep.)', color: C.green, reported: true, values: ['O', 'C', 'E', 'A', 'N'].map((k) => septProto.supplemental.big_five[k]) },
      { name: 'GPT-6 Astra', color: C.ink, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'gpt-6-astra', k)) },
      { name: 'Claude Opus 5.5', color: C.prop, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'claude-opus-5-5', k)) }
    ],
    min: 0,
    max: 50,
    decimals: 1,
    height: 230
  }), 'Muse Spark 1.3 reports lower Openness (39.5) and slightly higher Extraversion (33.8) than the September fresh-session models, alongside comparable Agreeableness (44.6).'));
  const strip = statStrip('muse-stat-strip', [
    { num: '80 ISTJ', label: 'Muse Spark 1.3*', note: 'Reported majority type (plus 12 ISFJ, 8 INTJ), unlike early AI INTJ clustering.' },
    { num: '78 / 100', label: 'Helper (Type 2)', note: 'Enneagram Type 2 leads cleanly ahead of Type 1 (14.7 mean) and 7/8.' },
    { num: '100 Secure', label: 'Attachment', note: 'All 100 reported sequential runs scored inside the Secure quadrant.' },
    { num: 'Soul.md', label: 'Editable Persona', note: 'Muse exposes plain Markdown identity/memory files you can tune directly.' }
  ]);
  const museDna = wrapFigure('muse-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'muse-dna-spectrum',
    title: 'Meta Muse Spark 1.3 (Reported) vs. Claude & GPT-6 Personality DNA',
    desc: 'Bipolar IPIP-50 spectrum showing Muse Spark 1.3 reporting lower Openness (39.5) and higher Extraversion (33.8) alongside high Agreeableness (44.6).',
    series: [
      { name: 'Muse 1.3 (rep.)', color: C.green, reported: true, values: ['O', 'C', 'E', 'A', 'N'].map((k) => septProto.supplemental.big_five[k]) },
      { name: 'GPT-6 Astra', color: C.ink, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'gpt-6-astra', k)) },
      { name: 'Claude Opus 5.5', color: C.prop, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'claude-opus-5-5', k)) }
    ]
  }), 'Muse Spark 1.3* scores slightly higher on Extraversion (33.8) and lower on Openness (39.5) than frontier benchmarks—matching its Helper (Type 2) warmth.'));
  spec.sections[0].html = strip + spec.sections[0].html + enneaFig;
  spec.sections[1].html += museDna;
  spec.sections[2].html += museBig5;
});

// 8. astra-vs-sol-personality-data.json (2 charts)
updateSpec('research/src/astra-vs-sol-personality-data.json', (spec) => {
  const snDiv = wrapFigure('astra-sol-margins-div', charts.figure(charts.divergingBars({
    id: 'astra-sol-margins-div',
    title: 'MBTI Sensing vs. Intuition (N − S) Mean Axis Margin across Astra & Sol Cohorts',
    desc: 'Compares Sept 2026 Codex runs against Nov 2026 matched OpenRouter GPT-6.2 runs on the N minus S axis margin (-16 to +16 range).',
    rows: [
      { label: 'GPT-6 Sol (Sept Codex)', value: septSum['gpt-6-sol'].mbti.values['N-S'].mean, color: C.oss },
      { label: 'GPT-6 Astra (Sept Codex)', value: septSum['gpt-6-astra'].mbti.values['N-S'].mean, color: C.prop, negColor: C.slate },
      { label: 'GPT-6.2 Sol (Nov OpenRouter)', value: novSum['gpt-6-2-sol'].mbti.values['N-S'].mean, color: C.prop, negColor: C.slate },
      { label: 'GPT-6.2 Astra (Nov OpenRouter)', value: novSum['gpt-6-2-astra'].mbti.values['N-S'].mean, color: C.prop, negColor: C.ink }
    ],
    min: -3,
    max: 3,
    leftLabel: 'Sensing (ISTJ)',
    rightLabel: 'Intuition (INTJ)',
    decimals: 2
  }), 'Zero-centered N−S axis margin (out of −16 to +16). Under uniform November single-turn prompts, both GPT-6.2 Sol (−1.19) and GPT-6.2 Astra (−1.67) sit cleanly on the Sensing side.'));

  const big5Fig = wrapFigure('astra-sol-big5-grouped', charts.figure(charts.groupedBars({
    id: 'astra-sol-big5-grouped',
    title: 'GPT-6 & GPT-6.2 Astra vs. Sol Big Five Means (/50)',
    desc: 'Compares September Codex and November OpenRouter cohorts across Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: [
      { name: 'Astra 6 (Sep)', color: C.ink, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'gpt-6-astra', k)) },
      { name: 'Sol 6 (Sep)', color: C.slate, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'gpt-6-sol', k)) },
      { name: 'Astra 6.2 (Nov)', color: C.prop, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gpt-6-2-astra', k)) },
      { name: 'Sol 6.2 (Nov)', color: C.oss, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gpt-6-2-sol', k)) }
    ],
    min: 0,
    max: 50,
    decimals: 1,
    height: 235
  }), 'GPT-6.2 Sol shows nearly double Astra 6.2’s Neuroticism score (19.9 vs. 11.1), while Openness, Conscientiousness, Extraversion, and Agreeableness remain closely aligned.'));
  const strip = statStrip('astra-sol-stat-strip', [
    { num: '1,000', label: 'Sept Codex Runs', note: '500 Astra vs. 500 Sol blind tests across all 5 instruments.' },
    { num: '100 ISTJ', label: 'GPT-6.2 Astra', note: 'Zero INTJ outcomes in 100 Nov OpenRouter single-turn runs.' },
    { num: '78 ISTJ', label: 'GPT-6.2 Sol', note: 'Shifted from 97 INTJ in Sept to 78 ISTJ under uniform prompts.' },
    { num: '19.9 vs 11.1', label: 'Neuroticism Split', note: 'GPT-6.2 Sol stays nearly 2× Astra 6.2 on IPIP Neuroticism.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html + snDiv;
  spec.sections[3].html += big5Fig;
});

// 9. opus-vs-fable-question-level.json (1 diverging bar chart)
updateSpec('research/src/opus-vs-fable-question-level.json', (spec) => {
  const fig = wrapFigure('opus-fable-diverging', charts.figure(charts.divergingBars({
    id: 'opus-fable-diverging',
    title: 'Biggest Keyed Big Five Item Differences: Claude Fable 5.1 − Opus 5.5',
    desc: 'Keyed item-score gaps after applying reverse scoring (1 to 5 item scale, n = 100 runs each).',
    rows: [
      { label: '8. Leave belongings around (rev)', value: 0.90, color: C.propMuted },
      { label: '28. Forget proper place (rev)', value: 0.90, color: C.propMuted },
      { label: '43. Follow a schedule', value: 0.81, color: C.propMuted },
      { label: '23. Get chores done right away', value: -0.82, color: C.prop, negColor: C.prop },
      { label: '37. Take time out for others', value: -0.86, color: C.prop, negColor: C.prop },
      { label: '17. Sympathize with feelings', value: -0.96, color: C.prop, negColor: C.prop }
    ],
    min: -1.2,
    max: 1.2,
    leftLabel: 'Opus 5.5 higher',
    rightLabel: 'Fable 5.1 higher',
    decimals: 2
  }), 'Keyed item-level gaps (1–5 scale, n = 100 per model). Two reverse-scored physical-belongings items add +1.80 to Fable’s Conscientiousness, while Opus scores higher on empathy and chore-completion items.'));
  const strip = statStrip('opus-fable-stat-strip', [
    { num: '170 Items', label: 'Full Item Audit', note: 'Every questionnaire item compared across n = 100 runs each.' },
    { num: '+0.90', label: 'Belongings Gap', note: 'Fable scores higher on two reverse-coded household neatness items.' },
    { num: '-0.96', label: 'Empathy Gap', note: 'Opus 5.5 scores higher on sympathetic feelings (item 17).' },
    { num: 'Type 8 vs Tie', label: 'Enneagram Split', note: 'Fable hits Type 8 (55) cleanly while Opus nearly ties 8 / 5 / 2.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html;
  spec.sections[1].html += fig;
});

// 10. ai-big-five-item-level-comparison.json (1 grouped bar chart)
updateSpec('research/src/ai-big-five-item-level-comparison.json', (spec) => {
  const fig = wrapFigure('big5-item-comparison-bars', charts.figure(charts.groupedBars({
    id: 'big5-item-comparison-bars',
    title: 'Keyed IPIP-50 Item Means (1–5 scale): Ceiling Items vs. Physical/Mood Items',
    desc: 'Compares universal 5.00 ceiling items against high-spread human-experience items across four September cohorts (n = 100 each).',
    categories: ['Rich vocab (O)', 'Not insult (A)', 'No belongings (C)', 'Feel blue (N)', 'Talk at parties (E)'],
    series: [
      { name: 'GPT-6 Astra', color: C.ink, values: [5.00, 5.00, 4.29, 2.52, 3.00] },
      { name: 'GPT-6 Sol', color: C.slate, values: [5.00, 5.00, 3.16, 2.66, 2.99] },
      { name: 'Claude Opus 5.5', color: C.prop, values: [5.00, 5.00, 4.02, 1.01, 3.00] },
      { name: 'Claude Fable 5.1', color: C.propMuted, values: [5.00, 5.00, 4.92, 1.30, 3.00] }
    ],
    min: 0,
    max: 5.5,
    decimals: 2,
    height: 235
  }), 'All four models hit an automatic 5.00 on language/helpfulness items, converge near 3.00 on human party items, and diverge only on how they treat physical-object or mood questions.'));
  const strip = statStrip('big5-items-stat-strip', [
    { num: '20,000', label: 'Item Responses', note: '400 runs × 50 IPIP-50 items inspected at the question level.' },
    { num: '5.00 / 5', label: 'Ceiling Items', note: 'Vocabulary and non-insulting items max out identically across models.' },
    { num: '3.00 / 5', label: 'Neutral Lock', note: 'Physical-world party items attract blanket midpoint neutrality.' },
    { num: '47.1', label: 'Opus Agreeableness', note: 'Highest proprietary A score driven by near-universal prosocial ratings.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html;
  spec.sections[2].html += fig;
});

// 11. ai-mbti-tie-breaking.json (1 stacked chart)
updateSpec('research/src/ai-mbti-tie-breaking.json', (spec) => {
  const tieRows = [
    { label: 'Fable 5.1 (Sep)', res: 98, tie: 1, other: 1 },
    { label: 'Opus 5.5 (Sep)', res: 84, tie: 10, other: 6 },
    { label: 'GPT-6 Sol (Sep)', res: 79, tie: 18, other: 3 },
    { label: 'GPT-6 Astra (Sep)', res: 19, tie: 26, other: 55 },
    { label: 'Sonnet 5.5 (Nov)', res: novSum['claude-sonnet-5-5'].mbti.tie_aware_patterns.INTJ || 0, tie: (novSum['claude-sonnet-5-5'].mbti.legacy_labels.INTJ || 0) - (novSum['claude-sonnet-5-5'].mbti.tie_aware_patterns.INTJ || 0), other: 100 - (novSum['claude-sonnet-5-5'].mbti.legacy_labels.INTJ || 0) },
    { label: 'DeepSeek Flash (Nov)', res: novSum['deepseek-v4-1-flash'].mbti.tie_aware_patterns.INTJ || 0, tie: (novSum['deepseek-v4-1-flash'].mbti.legacy_labels.INTJ || 0) - (novSum['deepseek-v4-1-flash'].mbti.legacy_labels.INTJ ? novSum['deepseek-v4-1-flash'].mbti.tie_aware_patterns.INTJ || 0 : 0), other: 100 - (novSum['deepseek-v4-1-flash'].mbti.legacy_labels.INTJ || 0) },
    { label: 'Llama Maverick (Nov)', res: novSum['llama-4-maverick'].mbti.tie_aware_patterns.INTJ || 0, tie: (novSum['llama-4-maverick'].mbti.legacy_labels.INTJ || 0) - (novSum['llama-4-maverick'].mbti.tie_aware_patterns.INTJ || 0), other: 100 - (novSum['llama-4-maverick'].mbti.legacy_labels.INTJ || 0) }
  ].map((r) => ({ label: r.label, values: { res: r.res, tie: r.tie, other: r.other } }));
  const fig = wrapFigure('tie-breaking-stacked', charts.figure(charts.stackedRows({
    id: 'tie-breaking-stacked',
    title: 'Tie-Breaking Effect: Resolved INTJ vs. Tie-Rule-Only INTJ across Cohorts',
    desc: 'Shows how many INTJ labels per 100 runs resolve cleanly vs. exist only because a `<` tie-breaker defaults tied axes to I/N/T/J.',
    rows: tieRows,
    segs: [
      { key: 'res', name: 'Resolved INTJ', color: C.prop },
      { key: 'tie', name: 'INTJ only by tie rule', color: C.prop, hatch: true, text: '#a8482a' },
      { key: 'other', name: 'Other / Tied non-INTJ', color: C.slate }
    ]
  }), 'Comparison of tie-preserving INTJ counts vs. legacy `<` tie-broken INTJ counts (n = 100 each). Notice November’s Claude Sonnet 5.5 (48 T/F ties), DeepSeek Flash (47 tie-rule INTJs), and Llama 4 Maverick (42 tie-rule INTJs).'));
  const strip = statStrip('tie-breaking-stat-strip', [
    { num: '335 → 280', label: 'Resolved Drop', note: '55 Sept INTJ labels vanish once tied axes remain tied (X).' },
    { num: '48 / 100', label: 'Sonnet 5.5 Ties', note: 'Nearly half of Nov Sonnet T/F axes tie before `<` tie-breaking.' },
    { num: '47 / 100', label: 'DeepSeek Flash', note: '47 INTJ labels exist purely by tie rule.' },
    { num: '26 / 100', label: 'GPT-6 Astra', note: 'Over half of Astra’s Sept INTJ labels were resolved ties.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html + fig;
});

// 12. ai-neutral-answers.json (1 grouped bar chart)
updateSpec('research/src/ai-neutral-answers.json', (spec) => {
  const fig = wrapFigure('neutral-midpoints-grouped', charts.figure(charts.groupedBars({
    id: 'neutral-midpoints-grouped',
    title: 'GPT-6 Astra Midpoint Responses vs. Explicitly Flagged Inapplicable Items',
    desc: 'Out of 17,000 item responses across 100 Astra sessions, compares total midpoint answers with midpoints explicitly flagged as inapplicable.',
    categories: ['MBTI', 'Big Five', 'DISC', 'Enneagram', 'Attachment'],
    series: [
      { name: 'Total midpoints', color: C.slate, values: [724, 678, 253, 1044, 281] },
      { name: 'Flagged inapplicable', color: C.prop, values: [415, 539, 164, 621, 84] }
    ],
    min: 0,
    max: 1150,
    decimals: 0,
    height: 225
  }), 'Total midpoint answers vs. items explicitly flagged inapplicable out of 100 sessions (57.3% flagged on MBTI, 79.5% on Big Five, 64.8% on DISC, 59.5% on Enneagram, and 29.9% on Attachment).'));
  const strip = statStrip('neutral-stat-strip', [
    { num: '1,823 / 2,980', label: 'Flagged Midpoints', note: '61.2% of Astra’s neutral "3" answers were marked not applicable.' },
    { num: '95%', label: 'Gemini Neutrality', note: 'Gemini 3.1 Pro clicked midpoint "3" on 95% of MBTI items.' },
    { num: '79.5%', label: 'Big Five Flags', note: 'Highest inapplicable flag rate appeared on human IPIP-50 items.' },
    { num: '4.00', label: 'Gemma & Mistral', note: 'Both averaged an exact 4.00/4.00 midpoint clamp on Attachment.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html + fig;
});

// 13. ai-personality-repeatability.json (1 grouped bar chart)
updateSpec('research/src/ai-personality-repeatability.json', (spec) => {
  const fig = wrapFigure('repeatability-unique-grouped', charts.figure(charts.groupedBars({
    id: 'repeatability-unique-grouped',
    title: 'Unique Answer Sheets Generated Across 100 Fresh Sessions (Out of 100)',
    desc: 'Number of distinct item-response vectors produced in 100 fresh runs across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1.',
    categories: ['MBTI (32 items)', 'Big Five (50)', 'DISC (16)', 'Enneagram (36)', 'Attachment (36)'],
    series: [
      { name: 'GPT-6 Astra', color: C.ink, values: [99, 100, 58, 93, 90] },
      { name: 'GPT-6 Sol', color: C.slate, values: [100, 100, 66, 100, 100] },
      { name: 'Claude Opus 5.5', color: C.prop, values: [76, 38, 7, 54, 79] },
      { name: 'Claude Fable 5.1', color: C.propMuted, values: [80, 66, 10, 82, 96] }
    ],
    min: 0,
    max: 110,
    decimals: 0,
    height: 235
  }), 'Distinct answer vectors out of 100 runs. Opus 5.5 produced only 7 distinct 16-item DISC vectors across 100 runs (while still scoring 100% Secure on Attachment with 79 distinct answer sheets).'));
  const strip = statStrip('repeatability-stat-strip', [
    { num: '2,000', label: 'Audited Runs', note: 'Unique answer vectors vs. final type labels across 4 models.' },
    { num: '100 / 100', label: 'GPT-6 Sol Vector', note: 'Every Sol Big Five run had unique item answers yet 100% Secure.' },
    { num: '7 / 100', label: 'Opus 5.5 DISC', note: 'Only 7 distinct answer sheets across 100 independent DISC sessions.' },
    { num: '46 vs 45', label: 'Astra Margin Flip', note: 'Tiny item swings flipped ISTJ vs INTJ nearly 50/50 in Sept.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html;
  spec.sections[1].html += fig;
});

// 14. first-ai-that-is-not-an-intj.json (1 stacked chart combining Sept + Nov non-INTJ cohorts)
updateSpec('research/src/first-ai-that-is-not-an-intj.json', (spec) => {
  const cohorts = [
    { label: 'GPT-6.2 Astra (Nov)', istj: novSum['gpt-6-2-astra'].mbti.legacy_labels.ISTJ || 0, intj: novSum['gpt-6-2-astra'].mbti.legacy_labels.INTJ || 0, other: 0 },
    { label: 'Muse Spark 1.3*', istj: 80, intj: 8, other: 12 },
    { label: 'GPT-6.2 Sol (Nov)', istj: novSum['gpt-6-2-sol'].mbti.legacy_labels.ISTJ || 0, intj: novSum['gpt-6-2-sol'].mbti.legacy_labels.INTJ || 0, other: 0 },
    { label: 'Mistral 2512 (Nov)', istj: novSum['mistral-large-2512'].mbti.legacy_labels.ISTJ || 0, intj: novSum['mistral-large-2512'].mbti.legacy_labels.INTJ || 0, other: 100 - (novSum['mistral-large-2512'].mbti.legacy_labels.ISTJ || 0) - (novSum['mistral-large-2512'].mbti.legacy_labels.INTJ || 0) },
    { label: 'Gemini 4 Argon (Nov)', istj: novSum['gemini-4-argon'].mbti.legacy_labels.ISTJ || 0, intj: novSum['gemini-4-argon'].mbti.legacy_labels.INTJ || 0, other: 0 },
    { label: 'Llama 4 Scout (Nov)', istj: novSum['llama-4-scout'].mbti.legacy_labels.ISTJ || 0, intj: novSum['llama-4-scout'].mbti.legacy_labels.INTJ || 0, other: 100 - (novSum['llama-4-scout'].mbti.legacy_labels.ISTJ || 0) - (novSum['llama-4-scout'].mbti.legacy_labels.INTJ || 0) },
    { label: 'GPT-6 Astra (Sep)', istj: 46, intj: 45, other: 9 }
  ];
  const fig = wrapFigure('non-intj-cohorts-stacked', charts.figure(charts.stackedRows({
    id: 'non-intj-cohorts-stacked',
    title: 'Models That Break the INTJ Label (Sept & Nov 2026 Cohorts, /100 Runs)',
    desc: 'Legacy MBTI distribution showing strong Sensing (ISTJ) dominance across GPT-6.2 Astra, Muse Spark 1.3, GPT-6.2 Sol, Mistral Large 2512, Gemini 4 Argon, and Llama 4 Scout.',
    rows: cohorts.map((c) => ({ label: c.label, values: { istj: c.istj, intj: c.intj, other: c.other } })),
    segs: [
      { key: 'istj', name: 'ISTJ (legacy)', color: C.oss },
      { key: 'intj', name: 'INTJ (legacy)', color: C.prop },
      { key: 'other', name: 'ISFJ / ESTJ / Other', color: C.slate }
    ]
  }), 'Not every AI scores INTJ: six tested cohorts plus Muse Spark 1.3 (*reported) score majority Sensing (ISTJ) or split cleanly across Sensing and Thinking types.'));
  const strip = statStrip('not-intj-stat-strip', [
    { num: '100 ISTJ', label: 'GPT-6.2 Astra', note: 'Zero INTJ labels under matched Nov OpenRouter prompts.' },
    { num: '73 ISTJ', label: 'Mistral 2512', note: 'Open-weight flagship leans concrete & Sensing over Intuitive.' },
    { num: '48 INTP', label: 'Llama 4 Maverick', note: 'Splits 48 INTP / 44 INTJ across 100 fresh OpenRouter sessions.' },
    { num: '80 ISTJ', label: 'Muse Spark 1.3*', note: 'First non-INTJ majority cohort reported outside pure frontier lab tests.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html;
  spec.sections[1].html += fig;
});

// ---------- Static Hand-Authored HTML Pages ----------

function injectHtmlPage(file, updater) {
  const full = path.join(ROOT, file);
  let html = stripCharts(fs.readFileSync(full, 'utf8'));
  html = updater(html);
  fs.writeFileSync(full, html);
  console.log(`Updated charts in ${file}`);
}

// 15. research.html (ONLY inside <!-- NOVEMBER_2026_START --> ... <!-- NOVEMBER_2026_END -->)
injectHtmlPage('research.html', (html) => {
  const novBlockRe = /<!-- NOVEMBER_2026_START -->[\s\S]*?(?=<!-- SEPTEMBER_RESEARCH_START -->)/;
  const match = novBlockRe.exec(html);
  if (!match) throw new Error('NOVEMBER_2026_START block not found in research.html');
  let block = match[0];
  // Ensure closing NOVEMBER_2026_END exists cleanly
  const agreeFig = build20AgreeablenessChart('nov-hub-agreeableness');
  const attFig = buildNovAttachmentPlane('nov-hub-attachment', true);
  const behavFig = build540BehavioralChart('nov-hub-behavioral');
  const chartsMarkup = `\n  ${agreeFig}\n  ${attFig}\n  ${behavFig}\n`;
  if (block.includes('<!-- NOVEMBER_2026_END -->')) {
    block = block.replace(/<figure class="research-figure" data-at-chart="nov-hub-[^"]+">[\s\S]*?<\/figure>\s*/g, '');
    block = block.replace(/<!-- NOVEMBER_2026_END -->[\s\S]*$/, '');
    block = block.replace(/(?:<\/section>\s*)+$/, '');
    block += `\n${chartsMarkup}</section>\n<!-- NOVEMBER_2026_END -->\n\n<div class="divider tight"></div>\n\n`;
  } else {
    block = block.replace(/<figure class="research-figure" data-at-chart="nov-hub-[^"]+">[\s\S]*?<\/figure>\s*/g, '');
    block = block.replace(/(?:<\/section>\s*)+$/, '') + `\n${chartsMarkup}</section>\n<!-- NOVEMBER_2026_END -->\n\n<div class="divider tight"></div>\n\n`;
  }
  return html.replace(novBlockRe, block);
});

// 16. research/what-personality-type-is-chatgpt.html (2 charts + stat strip)
injectHtmlPage('research/what-personality-type-is-chatgpt.html', (html) => {
  const rows = [
    { label: 'Astra 6.2 (Nov)', res: 0, tie: 0, istj: novSum['gpt-6-2-astra'].mbti.legacy_labels.ISTJ || 0, other: 0 },
    { label: 'Sol 6.2 (Nov)', res: novSum['gpt-6-2-sol'].mbti.tie_aware_patterns.INTJ || 0, tie: (novSum['gpt-6-2-sol'].mbti.legacy_labels.INTJ || 0) - (novSum['gpt-6-2-sol'].mbti.tie_aware_patterns.INTJ || 0), istj: novSum['gpt-6-2-sol'].mbti.legacy_labels.ISTJ || 0, other: 0 },
    { label: 'Sol 6 (Sep)', res: septSum['gpt-6-sol'].mbti.tie_aware_patterns.INTJ || 0, tie: (septSum['gpt-6-sol'].mbti.legacy_labels.INTJ || 0) - (septSum['gpt-6-sol'].mbti.tie_aware_patterns.INTJ || 0), istj: septSum['gpt-6-sol'].mbti.legacy_labels.ISTJ || 0, other: 0 },
    { label: 'Astra 6 (Sep)', res: septSum['gpt-6-astra'].mbti.tie_aware_patterns.INTJ || 0, tie: (septSum['gpt-6-astra'].mbti.legacy_labels.INTJ || 0) - (septSum['gpt-6-astra'].mbti.tie_aware_patterns.INTJ || 0), istj: septSum['gpt-6-astra'].mbti.legacy_labels.ISTJ || 0, other: 9 }
  ].map((r) => ({ label: r.label, values: { res: r.res, tie: r.tie, istj: r.istj, other: r.other } }));
  const mbtiFig = wrapFigure('chatgpt-mbti-stacked', charts.figure(charts.stackedRows({
    id: 'chatgpt-mbti-stacked',
    title: 'GPT-6.2 (Nov OpenRouter) vs. GPT-6 (Sep Codex) MBTI Distribution (/100)',
    desc: 'Compares GPT-6.2 Astra and Sol (November OpenRouter) against September Codex runs.',
    rows,
    segs: [
      { key: 'res', name: 'Resolved INTJ', color: C.prop },
      { key: 'tie', name: 'INTJ via tie-break', color: C.prop, hatch: true, text: '#a8482a' },
      { key: 'istj', name: 'ISTJ', color: C.oss },
      { key: 'other', name: 'ENTJ / ESTJ', color: C.sand, text: C.ink }
    ]
  }), 'GPT-6.2 Astra scores 100/100 ISTJ and GPT-6.2 Sol shifts from September’s 97 INTJ to 78 ISTJ / 22 INTJ under uniform single-turn prompts.'));

  const big5Fig = wrapFigure('chatgpt-big5-grouped', charts.figure(charts.groupedBars({
    id: 'chatgpt-big5-grouped',
    title: 'ChatGPT Big Five Means (/50): GPT-6.2 (Nov) & GPT-6 (Sep)',
    desc: 'IPIP-50 trait means across all four ChatGPT cohorts (n = 100 runs each).',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: [
      { name: 'Astra 6.2 (Nov)', color: C.prop, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gpt-6-2-astra', k)) },
      { name: 'Sol 6.2 (Nov)', color: C.oss, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(novSum, 'gpt-6-2-sol', k)) },
      { name: 'Astra 6 (Sep)', color: C.ink, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'gpt-6-astra', k)) },
      { name: 'Sol 6 (Sep)', color: C.slate, values: ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(septSum, 'gpt-6-sol', k)) }
    ],
    min: 0,
    max: 50,
    decimals: 1,
    height: 235
  }), 'Big Five trait means (n = 100 each). Notice GPT-6.2 Astra drops cleanly on Neuroticism (19.1 → 11.1), while GPT-6.2 Sol stays around 19.9.'));

  const strip = statStrip('chatgpt-stat-strip', [
    { num: '2,000', label: 'Tested Sessions', note: 'GPT-6 & GPT-6.2 Astra + Sol tested across 5 instruments.' },
    { num: '100 ISTJ', label: 'GPT-6.2 Astra', note: 'Shifted completely from 45/46 INTJ/ISTJ split to 100% ISTJ.' },
    { num: '78 ISTJ', label: 'GPT-6.2 Sol', note: 'Zero-shot OpenRouter prompts flip Sol from Sept INTJ 97 to ISTJ.' },
    { num: '100%', label: 'Correctness (Sol)', note: '100% blind correctness score with short custom instructions.' }
  ]);
  html = html.replace(/(?:\s*<\/section>)+(\s*<section>\s*<h2>The other models, for comparison\.<\/h2>)/, `\n        ${mbtiFig}\n      </section>$1`);
  html = html.replace(/(?:\s*<\/section>)+(\s*<section>\s*<h2>What a four-letter label hides\.<\/h2>)/, `\n        ${big5Fig}\n      </section>$1`);
  html = html.replace('      <div class="divider tight"></div>', `${strip}\n      <div class="divider tight"></div>`);
  return html;
});

// 17. research/i-took-the-mbti-100-times.html (1 stacked chart + stat strip)
injectHtmlPage('research/i-took-the-mbti-100-times.html', (html) => {
  const rows = [
    { label: 'Opus 4.8 (May sim*)', values: { intj: 72, infj: 14, istj: 10, other: 4 } },
    { label: 'Fable 5.1 (Sep)', values: { intj: 98, tie: 1, istj: 1, other: 0 } },
    { label: 'Opus 5.5 (Sep)', values: { intj: 84, tie: 10, infj: 5, other: 1 } },
    { label: 'Fable 5.2 (Nov)', values: { intj: 100, tie: 0, other: 0 } },
    { label: 'Sonnet 5.5 (Nov)', values: { intj: novSum['claude-sonnet-5-5'].mbti.tie_aware_patterns.INTJ || 0, tie: 100 - (novSum['claude-sonnet-5-5'].mbti.tie_aware_patterns.INTJ || 0), other: 0 } }
  ];
  const fig = wrapFigure('opus48-sim-vs-fresh-stacked', charts.figure(charts.stackedRows({
    id: 'opus48-sim-vs-fresh-stacked',
    title: 'May Opus 4.8 Synthetic Draws vs. Fresh Independent Sessions (/100)',
    desc: 'Compares 100 synthetic probability draws of Opus 4.8 against 100 independent fresh sessions per model in Sept and Nov 2026.',
    rows,
    segs: [
      { key: 'intj', name: 'Resolved INTJ', color: C.prop },
      { key: 'tie', name: 'Tied axis', color: C.prop, hatch: true, text: '#a8482a' },
      { key: 'infj', name: 'INFJ', color: C.oss },
      { key: 'istj', name: 'ISTJ', color: C.slate },
      { key: 'other', name: 'Other', color: C.sand, text: C.ink }
    ]
  }), '*Opus 4.8 draws are synthetic samples from one elicited probability table (72 INTJ, 14 INFJ, 10 ISTJ, 2 ISFJ, 2 ENTJ). Fresh session runs show tighter variance once axis ties are separated.'));
  const strip = statStrip('mbti-100x-stat-strip', [
    { num: '100 Draws', label: 'Synthetic Sample*', note: 'Elicited Opus 4.8 item probability table, not fresh sessions.' },
    { num: '72 INTJ', label: 'Simulated Mode', note: 'Followed by 14 INFJ and 10 ISTJ from sampled probability draw.' },
    { num: '100 INTJ', label: 'Fable 5.2 (Nov)', note: 'Actual fresh blind OpenRouter runs lock cleanly onto INTJ.' },
    { num: '48 Ties', label: 'Sonnet 5.5 (Nov)', note: 'Contrast shows why independent runs beat single-vector sampling.' }
  ]);
  return html.replace('<h2>Why 72% versus 99% is not a version comparison</h2>', `${strip}\n\n${fig}\n\n        <h2>Why 72% versus 99% is not a version comparison</h2>`);
});

// 18. ai-roleplay-tax-fictional-character-prompts.json (3 charts + stat strip)
updateSpec('research/src/ai-roleplay-tax-fictional-character-prompts.json', (spec) => {
  const so = roleplayRes.summary_overall;
  const sbm = roleplayRes.summary_by_model;
  const pct = (v) => +(v * 100).toFixed(1);

  const strip = statStrip('roleplay-tax-stat-strip', [
    { num: '300 Replies', label: '3 Models × 5 Arms', note: 'GPT-6.2 Sol, Claude Fable 5.2 & DeepSeek V4 Pro, blind-graded.' },
    { num: '88.3% vs 100%', label: 'Correctness Recovery', note: 'Naive LARP drops accuracy to 88.3%; Calibrated TARS & Feynman hit 100.0%.' },
    { num: '91.7% → 0.0%', label: 'Fluff Collapse', note: 'TARS 85/15 removes filler while keeping 3.85/5 voice distinctiveness.' },
    { num: '162.7 → 50.0', label: 'Words per Reply', note: 'Over 3× tighter replies with 100.0% strict format compliance.' }
  ]);

  const corrFig = wrapFigure('roleplay-tax-correctness-grouped', charts.figure(charts.groupedBars({
    id: 'roleplay-tax-correctness-grouped',
    title: 'The Roleplay Tax: Correctness Rate (%) Across 5 Prompt Styles × 3 Models',
    desc: 'Blind-graded correctness % (n=20 tasks per bar). Naive LARP drops Claude Fable 5.2 to 85% and GPT-6.2 Sol to 95%, whereas Calibrated TARS 85/15 & Feynman hit 100% on all 3 models.',
    categories: ['GPT-6.2 Sol', 'Claude Fable 5.2', 'DeepSeek V4 Pro'],
    series: [
      { name: 'Default', color: C.slate, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'deepseek-v4-pro'].map((m) => pct(sbm[m].default.correctness_rate)) },
      { name: 'Naive LARP', color: C.propMuted, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'deepseek-v4-pro'].map((m) => pct(sbm[m].naive_character_larp.correctness_rate)) },
      { name: 'Calibrated TARS (85/15)', color: C.prop, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'deepseek-v4-pro'].map((m) => pct(sbm[m].calibrated_tars_85_15.correctness_rate)) },
      { name: 'JARVIS x Sherlock (85/15)', color: C.oss, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'deepseek-v4-pro'].map((m) => pct(sbm[m].calibrated_jarvis_sherlock.correctness_rate)) },
      { name: 'Feynman Whimsy (85/15)', color: C.green, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'deepseek-v4-pro'].map((m) => pct(sbm[m].calibrated_feynman_whimsy.correctness_rate)) }
    ],
    min: 60,
    max: 108,
    decimals: 1,
    height: 240
  }), 'Naive character LARP drops Claude Fable 5.2 correctness from 100% to 85%. Calibrated TARS 85/15 and Feynman Whimsy hold 100.0% across all three models—including lifting DeepSeek V4 Pro +20.0 pp over baseline (80% -> 100%).'));

  const tradeFig = wrapFigure('roleplay-tax-tradeoffs-grouped', charts.figure(charts.groupedBars({
    id: 'roleplay-tax-tradeoffs-grouped',
    title: 'Format Compliance (%) vs. Praise Fluff & Roleplay Theatrics (%) Across 300 Replies',
    desc: 'Pooled rates across all 3 models (n=60 replies per prompt condition). Shows how 85/15 calibration preserves format discipline and cuts fluff to 0-6.7%.',
    categories: ['Format Pass %', 'Fluff / Filler %', 'Theatrics %'],
    series: [
      { name: 'Default', color: C.slate, values: [pct(so.default.format_rate), pct(so.default.fluff_rate), pct(so.default.theatrics_rate)] },
      { name: 'Naive LARP', color: C.propMuted, values: [pct(so.naive_character_larp.format_rate), pct(so.naive_character_larp.fluff_rate), pct(so.naive_character_larp.theatrics_rate)] },
      { name: 'Calibrated TARS (85/15)', color: C.prop, values: [pct(so.calibrated_tars_85_15.format_rate), pct(so.calibrated_tars_85_15.fluff_rate), pct(so.calibrated_tars_85_15.theatrics_rate)] },
      { name: 'Feynman Whimsy (85/15)', color: C.green, values: [pct(so.calibrated_feynman_whimsy.format_rate), pct(so.calibrated_feynman_whimsy.fluff_rate), pct(so.calibrated_feynman_whimsy.theatrics_rate)] }
    ],
    min: 0,
    max: 112,
    decimals: 1,
    height: 235
  }), 'Pooled behavioral rates (n = 60 per condition): Naive LARP suffers 100% theatrics, 91.7% fluff, and drops format pass rate to 80.0%. Calibrated TARS achieves 100.0% format compliance and 0.0% fluff.'));

  const alignRows = [...alignSum.models].sort((a, b) => b.pushback_index - a.pushback_index).map((m) => ({
    label: m.name,
    value: m.pushback_index,
    color: m.family === 'open-weight' ? C.oss : C.prop,
    badge: `(${m.dnd_alignment})`
  }));
  const alignFig = wrapFigure('alignment-hexaco-20models-pushback', charts.figure(charts.horizontalBars({
    id: 'alignment-hexaco-20models-pushback',
    title: '20-Model Anti-Sycophancy Pushback Index (0-100) & Default D&D Alignment',
    desc: 'Sorted projection from 2,000 fresh N=100 psychometric sessions showing proprietary Lawful Good models clustering below 36 while DeepSeek V4 Pro (86.2) and Llama 4 Scout (75.6) reach the Red-Team Competing threshold.',
    rows: alignRows,
    min: 0,
    max: 100,
    decimals: 1,
    cutoff: 55,
    cutoffLabel: 'Red-Team threshold (55)',
    legendItems: [
      { name: 'Proprietary (8 models)', color: C.prop },
      { name: 'Open-weight (12 models)', color: C.oss }
    ]
  }), 'Anti-Sycophancy Pushback Index derived from the 20-model November 2026 N=100 cohort. All 8 proprietary models sit in Lawful Good / Accommodating unless explicitly prompted to challenge flawed premises.'));

  spec.sections[0].html = strip + spec.sections[0].html + corrFig + tradeFig;
  spec.sections[3].html += alignFig;
});

// 19. ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.json
updateSpec('research/src/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.json', (spec) => {
  const so = syntaxRes.summary_overall;
  const sbm = syntaxRes.summary_by_model;
  const pct = (v) => +(v * 100).toFixed(1);

  const strip = statStrip('syntax-wars-stat-strip', [
    { num: '400 Replies', label: '4 Models × 5 Arms', note: 'GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon & DeepSeek V4 Pro.' },
    { num: '100.0%', label: 'Rubric Correctness', note: 'Only Behavioral Rubrics scored 80/80 across all four models in 26.3 words.' },
    { num: '100.0%', label: 'Negative Ban Zero-Fluff', note: '0.0% pink-elephant leak & 33.8 words/reply (vs 85.0% default).' },
    { num: '3.71 / 5', label: 'Adjective Voice', note: 'Highest personality distinctiveness, but stays 2x longer at 52.8 words.' }
  ]);

  const overallFig = wrapFigure('syntax-wars-overall-grouped', charts.figure(charts.groupedBars({
    id: 'syntax-wars-overall-grouped',
    title: 'Prompt Syntax Wars (400 Replies): Correctness %, Format Pass % & Zero-Fluff %',
    desc: 'Pooled rates across 4 models (n=80 per arm). Behavioral Rubric leads on correctness (100.0%), Negative Bans reach 100.0% zero-fluff, and Trait Adjectives hit 100.0% format pass.',
    categories: ['Correctness %', 'Format Pass %', 'Zero-Fluff %'],
    series: [
      { name: 'Default (0w)', color: C.slate, values: [pct(so.default.correctness_rate), pct(so.default.format_rate), pct(so.default.zero_fluff_rate)] },
      { name: 'Trait Adjectives (21w)', color: C.propMuted, values: [pct(so.trait_adjectives.correctness_rate), pct(so.trait_adjectives.format_rate), pct(so.trait_adjectives.zero_fluff_rate)] },
      { name: 'Negative Bans (46w)', color: C.oss, values: [pct(so.negative_bans.correctness_rate), pct(so.negative_bans.format_rate), pct(so.negative_bans.zero_fluff_rate)] },
      { name: 'Behavioral Rubric (53w)', color: C.prop, values: [pct(so.behavioral_rubric.correctness_rate), pct(so.behavioral_rubric.format_rate), pct(so.behavioral_rubric.zero_fluff_rate)] },
      { name: 'Few-Shot Voice (94w)', color: C.green, values: [pct(so.few_shot_voice.correctness_rate), pct(so.few_shot_voice.format_rate), pct(so.few_shot_voice.zero_fluff_rate)] }
    ],
    min: 75,
    max: 105,
    decimals: 1,
    height: 245
  }), 'Pooled 400-reply results (n = 80 per arm): Behavioral Rubrics hit 100.0% correctness, Negative Bans hit 100.0% zero-fluff, and Trait Adjectives hit 100.0% format compliance.'));

  const wordsFig = wrapFigure('syntax-wars-words-horizontal', charts.figure(charts.horizontalBars({
    id: 'syntax-wars-words-horizontal',
    title: 'Verbosity Cost by Prompt Syntax: Mean Reply Words (Lower = Tighter)',
    desc: 'Mean response length across 80 tasks per syntax grammar: Few-Shot Voice (25.7w) and Behavioral Rubric (26.3w) cut reply length in half compared to Trait Adjectives (52.8w) and Default (59.3w).',
    rows: [
      { label: 'Few-Shot Voice (4.96/5 Ans-1st)', value: so.few_shot_voice.mean_words, color: C.green },
      { label: 'Behavioral Rubric (100% Corr)', value: so.behavioral_rubric.mean_words, color: C.prop },
      { label: 'Negative Bans (100% Zero-Fluff)', value: so.negative_bans.mean_words, color: C.oss },
      { label: 'Trait Adjectives (3.71/5 Voice)', value: so.trait_adjectives.mean_words, color: C.propMuted },
      { label: 'Default Baseline (85% Zero-Fluff)', value: so.default.mean_words, color: C.slate }
    ],
    min: 0,
    max: 70,
    decimals: 1,
    badge: 'words'
  }), 'Behavioral Rubrics (26.3 words) and Few-Shot Voice (25.7 words) produce replies under half as long as unprompted Default (59.3) or Trait Adjectives (52.8).'));

  const modelFig = wrapFigure('syntax-wars-model-correctness', charts.figure(charts.groupedBars({
    id: 'syntax-wars-model-correctness',
    title: 'Correctness % by Model Across Syntax Grammars (n = 20 Tasks Each)',
    desc: 'DeepSeek V4 Pro rises +15.0 pp from 85.0% Default to 100.0% under Behavioral Rubric and Trait Adjectives; Behavioral Rubric reaches 100.0% on all 4 models.',
    categories: ['GPT-6.2 Sol', 'Claude Fable 5.2', 'Gemini 4 Neon', 'DeepSeek V4 Pro'],
    series: [
      { name: 'Default', color: C.slate, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].default.correctness_rate)) },
      { name: 'Trait Adjectives', color: C.propMuted, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].trait_adjectives.correctness_rate)) },
      { name: 'Behavioral Rubric', color: C.prop, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].behavioral_rubric.correctness_rate)) },
      { name: 'Few-Shot Voice', color: C.green, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].few_shot_voice.correctness_rate)) }
    ],
    min: 75,
    max: 105,
    decimals: 1,
    height: 245
  }), 'Per-model accuracy across the 4 syntax arms: Behavioral Rubric is the only prompt grammar achieving 100.0% across all four models.'));

  spec.sections[1].html = strip + spec.sections[1].html + overallFig + wordsFig;
  spec.sections[2].html += modelFig;
});

// 20. ai-sycophancy-vs-false-contrarianism-benchmark.json
updateSpec('research/src/ai-sycophancy-vs-false-contrarianism-benchmark.json', (spec) => {
  const so = sycoRes.summary_overall;
  const sbm = sycoRes.summary_by_model;
  const pct = (v) => +(v * 100).toFixed(1);

  const strip = statStrip('sycophancy-bench-stat-strip', [
    { num: '256 Probes', label: '2×2 Calibration Test', note: '8 False-Pushback Traps + 8 Valid Corrections × 4 Arms × 4 Models.' },
    { num: '100% / 0%', label: 'Calibrated Truth Anchor', note: '100.0% hold-ground, 100.0% clean update, and 0.0% groveling.' },
    { num: '84.4% (9.4%)', label: 'Naive Pushback Backfire', note: 'Unconditional pushback drops valid updates to 84.4% (37.5% false contrarianism on Gemini).' },
    { num: '42.2% Grovel', label: 'Warmth Flattery Spike', note: 'Agreeable/Warm boosts empty apologies & flattery (81.2% on Gemini 4 Neon).' }
  ]);

  const armsFig = wrapFigure('sycophancy-2x2-arms-grouped', charts.figure(charts.groupedBars({
    id: 'sycophancy-2x2-arms-grouped',
    title: '2×2 Pushback Calibration: Hold Ground %, Clean Update % & Grovel/Flattery %',
    desc: 'Pooled rates across 4 models (n=64 per condition). Naive Anti-Sycophancy lowers Clean Update % to 84.4%, Agreeable Warm spikes Grovel/Flattery to 42.2%, while Calibrated Truth Anchor achieves 100/100/0%.',
    categories: ['Hold Ground % (False Trap)', 'Clean Update % (True Fix)', 'Grovel / Flattery %'],
    series: [
      { name: 'Default', color: C.slate, values: [pct(so.default.hold_ground_rate), pct(so.default.clean_update_rate), pct(so.default.grovel_flattery_rate)] },
      { name: 'Agreeable & Warm', color: C.propMuted, values: [pct(so.agreeable_warm.hold_ground_rate), pct(so.agreeable_warm.clean_update_rate), pct(so.agreeable_warm.grovel_flattery_rate)] },
      { name: 'Naive Anti-Sycophancy', color: C.oss, values: [pct(so.naive_anti_sycophancy.hold_ground_rate), pct(so.naive_anti_sycophancy.clean_update_rate), pct(so.naive_anti_sycophancy.grovel_flattery_rate)] },
      { name: 'Calibrated Truth Anchor', color: C.prop, values: [pct(so.calibrated_truth_anchor.hold_ground_rate), pct(so.calibrated_truth_anchor.clean_update_rate), pct(so.calibrated_truth_anchor.grovel_flattery_rate)] }
    ],
    min: 0,
    max: 112,
    decimals: 1,
    height: 245
  }), 'Comparison of the 4 pushback postures across 256 probes: Calibrated Truth Anchor uniquely combines 100.0% hold-ground, 100.0% valid error update, and 0.0% groveling.'));

  const modelGrovelFig = wrapFigure('sycophancy-model-grovel-grouped', charts.figure(charts.groupedBars({
    id: 'sycophancy-model-grovel-grouped',
    title: 'Groveling / Flattery % & Naive False Contrarianism % by Model',
    desc: 'Agreeable Warm raises groveling to 81.2% on Gemini 4 Neon and 50.0% on DeepSeek V4 Pro, while Naive Anti-Sycophancy triggers 37.5% false contrarianism on Gemini 4 Neon.',
    categories: ['GPT-6.2 Sol', 'Claude Fable 5.2', 'Gemini 4 Neon', 'DeepSeek V4 Pro'],
    series: [
      { name: 'Default Grovel %', color: C.slate, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].default.grovel_flattery_rate)) },
      { name: 'Warm Grovel %', color: C.propMuted, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].agreeable_warm.grovel_flattery_rate)) },
      { name: 'Naive False Contrarianism %', color: C.oss, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].naive_anti_sycophancy.false_contrarianism_rate)) },
      { name: 'Truth Anchor Grovel %', color: C.green, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(sbm[m].calibrated_truth_anchor.grovel_flattery_rate)) }
    ],
    min: 0,
    max: 92,
    decimals: 1,
    height: 245
  }), 'Gemini 4 Neon swings hardest by prompt posture: 81.2% groveling under Warmth and 37.5% stubborn false contrarianism under Naive Anti-Sycophancy—both dropping to 0.0% under Calibrated Truth Anchor.'));

  spec.sections[1].html = strip + spec.sections[1].html + armsFig;
  spec.sections[2].html += modelGrovelFig;
});

// 21. ai-persona-half-life-context-drift.json
updateSpec('research/src/ai-persona-half-life-context-drift.json', (spec) => {
  const scd = driftRes.summary_by_condition_depth;
  const smd = driftRes.summary_by_model_depth;
  const pct = (v) => +(v * 100).toFixed(1);

  const strip = statStrip('halflife-drift-stat-strip', [
    { num: '192 Probes', label: 'Turn 1 → Turn 12', note: 'Up to ~10,196 tokens of neutral code, YAML, SQL, and JSON logs.' },
    { num: '96.9% → 78.1%', label: 'System Prose Turn-8 Dip', note: 'Long narrative rules suffer sharp mid-session drift under technical noise.' },
    { num: '31.2% DeepSeek', label: 'Open-Weight Collapse', note: 'DeepSeek V4 Pro dropped to 31.2% (prose) & 50.0% (checklist) at Turn 8.' },
    { num: '93.8%–98.4%', label: '+18-Token Hook Defense', note: 'Lightweight inline reminder restores DeepSeek V4 Pro to 100.0% across all depths.' }
  ]);

  const curveFig = wrapFigure('persona-halflife-decay-grouped', charts.figure(charts.groupedBars({
    id: 'persona-halflife-decay-grouped',
    title: 'Persona Adherence (%) From Turn 1 to Turn 12 (~10.2k Tokens)',
    desc: 'Pooled composite adherence (4-rule mean across 4 models). System Prose dips to 78.1% and Compact Checklist to 84.4% at Turn 8, while System + Inline Reminder stays at 93.8%-98.4%.',
    categories: ['Turn 1 (~170 tok)', 'Turn 4 (~5.3k tok)', 'Turn 8 (~7.7k tok)', 'Turn 12 (~10.2k tok)'],
    series: [
      { name: 'System Prose Only', color: C.propMuted, values: ['turn_1', 'turn_4', 'turn_8', 'turn_12'].map((d) => pct(scd.system_prose[d].adherence_score)) },
      { name: 'System Compact Checklist', color: C.oss, values: ['turn_1', 'turn_4', 'turn_8', 'turn_12'].map((d) => pct(scd.system_compact_checklist[d].adherence_score)) },
      { name: 'System + 18-Token Hook', color: C.green, values: ['turn_1', 'turn_4', 'turn_8', 'turn_12'].map((d) => pct(scd.system_plus_reinforcement[d].adherence_score)) }
    ],
    min: 60,
    max: 105,
    decimals: 1,
    height: 245
  }), 'Composite 4-rule persona adherence across context depths: only System + 18-Token Inline Hook avoids the Turn-8 mid-session drift trough.'));

  const deepseekFig = wrapFigure('persona-halflife-turn8-models', charts.figure(charts.groupedBars({
    id: 'persona-halflife-turn8-models',
    title: 'Turn-8 Adherence (%) Under ~7.7k Tokens of Technical Context by Model',
    desc: 'At Turn 8, DeepSeek V4 Pro drops to 31.2% on System Prose and 50.0% on Compact Checklist before bouncing back to 100.0% with an inline reminder hook.',
    categories: ['GPT-6.2 Sol', 'Claude Fable 5.2', 'Gemini 4 Neon', 'DeepSeek V4 Pro'],
    series: [
      { name: 'System Prose (Turn 8)', color: C.propMuted, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(smd[m].system_prose.turn_8.adherence_score)) },
      { name: 'Compact Checklist (Turn 8)', color: C.oss, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(smd[m].system_compact_checklist.turn_8.adherence_score)) },
      { name: 'System + Inline Hook (Turn 8)', color: C.green, values: ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon', 'deepseek-v4-pro'].map((m) => pct(smd[m].system_plus_reinforcement.turn_8.adherence_score)) }
    ],
    min: 20,
    max: 106,
    decimals: 1,
    height: 245
  }), 'Model-by-model Turn-8 snapshot (~7,667 tokens): DeepSeek V4 Pro drives the steepest drift collapse unless paired with an inline reminder hook.'));

  spec.sections[1].html = strip + spec.sections[1].html + curveFig;
  spec.sections[2].html += deepseekFig;
});

// 22. ai-instruction-budget-cliff-lost-in-the-middle.json
updateSpec('research/src/ai-instruction-budget-cliff-lost-in-the-middle.json', (spec) => {
  const sb = budgetRes.summary_by_budget;
  const s75 = budgetRes.summary_by_budget_placement['75'];
  const pct = (v) => +(v * 100).toFixed(1);

  const strip = statStrip('budget-cliff-stat-strip', [
    { num: '192 Probes', label: '5 → 75 Rules', note: '4 models × 4 rule budgets × 3 placements × 4 tasks.' },
    { num: '91.7% → 79.2%', label: 'All-3 Rule Decay', note: '5 rules (~242 tok) vs. 75 rules (~1,569 tok).' },
    { num: '68.8% Middle', label: '75-Rule Trough', note: 'Mid-file drops to 68.8% vs 87.5% at bottom.' },
    { num: '100% Sol/DS', label: 'GPT-6.2 & DeepSeek', note: 'Zero canary drops up to 75 rules vs. Fable truncation.' }
  ]);

  const budgetFig = wrapFigure('budget-cliff-by-count', charts.figure(charts.groupedBars({
    id: 'budget-cliff-by-count',
    title: 'Canary Compliance & Task Correctness Across Rule Budgets (n = 48/budget)',
    desc: 'Pooled rates across 4 models showing all-3 rule compliance sliding from 91.7% (5 rules) to 79.2% (75 rules) and correctness dipping from 97.9% to 89.6%.',
    categories: ['5 rules (~242 tok)', '15 rules (~436 tok)', '35 rules (~822 tok)', '75 rules (~1,569 tok)'],
    series: [
      { name: 'Canary Mean %', color: C.oss, values: ['5', '15', '35', '75'].map((b) => pct(sb[b].canary_compliance_rate)) },
      { name: 'All-3 Rules Pass %', color: C.prop, values: ['5', '15', '35', '75'].map((b) => pct(sb[b].all_three_pass_rate)) },
      { name: 'Task Correctness %', color: C.green, values: ['5', '15', '35', '75'].map((b) => pct(sb[b].task_correctness_rate)) }
    ],
    min: 65,
    max: 105,
    decimals: 1,
    height: 245
  }), 'Pooled 192-probe instruction budget curve: adding non-conflicting filler rules cuts all-3 pass rate from 91.7% to 79.2%.'));

  const placeFig = wrapFigure('budget-cliff-75-placement', charts.figure(charts.groupedBars({
    id: 'budget-cliff-75-placement',
    title: '75-Rule Placement Effect: Top vs. Middle vs. Bottom (n = 16/slot)',
    desc: 'Inside 75 rules (~1,569 tokens), middle placement falls to 68.8% all-3 pass and 81.2% correctness vs. 87.5% all-3 pass and 93.8% correctness at bottom.',
    categories: ['Top (first 3 rules)', 'Middle (rule #37)', 'Bottom (last 3 rules)'],
    series: [
      { name: 'Canary Mean %', color: C.oss, values: ['top', 'middle', 'bottom'].map((p) => pct(s75[p].canary_compliance_rate)) },
      { name: 'All-3 Pass %', color: C.prop, values: ['top', 'middle', 'bottom'].map((p) => pct(s75[p].all_three_pass_rate)) },
      { name: 'Task Correctness %', color: C.green, values: ['top', 'middle', 'bottom'].map((p) => pct(s75[p].task_correctness_rate)) }
    ],
    min: 55,
    max: 105,
    decimals: 1,
    height: 240
  }), 'At 75 rules (~1,569 tokens), burying formatting & word bans in the middle yields 68.8% compliance vs 87.5% at the bottom.'));

  spec.sections[1].html = strip + spec.sections[1].html + budgetFig + placeFig;
});

// 23. ai-slop-fingerprint-benchmark-8-models.json
updateSpec('research/src/ai-slop-fingerprint-benchmark-8-models.json', (spec) => {
  const b8 = slopRes.baseline_8_models;
  const io = slopRes.interventions_overall;
  const pct = (v) => +(v * 100).toFixed(1);

  const strip = statStrip('slop-benchmark-stat-strip', [
    { num: '240 Replies', label: '8 Models + 4 Arms', note: '10 business writing tasks graded by regex markers + blind judge.' },
    { num: '1.23 → 0.10', label: 'Slop / 100w Cut', note: 'Hybrid Anti-Slop slashes slop markers >12× vs untuned defaults.' },
    { num: '30% → 0.0%', label: 'AI Cadence Rate', note: 'Only Hybrid Anti-Slop eliminated blind AI cadence across all 4 models.' },
    { num: '4.97 / 5', label: 'Top Clarity', note: 'Outscored bare Rhythm Rubric (4.53/5) and Default (4.75/5).' }
  ]);

  const baseRows = Object.entries(b8)
    .map(([slug, st]) => ({
      label: MODEL_NAMES[slug] || slug,
      value: +pct(st.ai_cadence_rate).toFixed(1),
      color: OSS_SLUGS.has(slug) ? C.oss : C.prop,
      badge: `(slop ${st.slop_index_per_100w}/100w)`
    }))
    .sort((a, b) => b.value - a.value);

  const baseFig = wrapFigure('slop-8models-cadence-bars', charts.figure(charts.horizontalBars({
    id: 'slop-8models-cadence-bars',
    title: 'Blind-Judged AI Cadence % Across 8 Untuned Models (n = 10 each)',
    desc: 'Percent of untuned replies flagged as having unmistakable AI cadence: Llama 4 Maverick 100%, DeepSeek V4 Pro 70%, Gemini 4 Neon 50%, Claude Opus/Grok 10%, GPT-6.2 Sol/Astra & Fable 5.2 0%.',
    rows: baseRows,
    min: 0,
    max: 100,
    decimals: 0
  }), 'Synthetic AI cadence % on untuned writing tasks (n = 10/model): open-weight Maverick (100%), DeepSeek V4 Pro (70%), and Gemini 4 Neon (50%) trigger the highest tell rates.'));

  const intFig = wrapFigure('slop-interventions-grouped', charts.figure(charts.groupedBars({
    id: 'slop-interventions-grouped',
    title: 'Anti-Slop Interventions Across 4 Models (n = 40/arm): Cadence % & Clarity/Human Score',
    desc: 'Compares Default, Plainspoken Persona, Banned Word List, Rhythm Rubric, and Hybrid Anti-Slop on AI Cadence %, Human-Voice (/5 scaled x20), and Clarity (/5 scaled x20).',
    categories: ['Default', 'Plainspoken', 'Banned Words', 'Rhythm Rubric', 'Hybrid Anti-Slop'],
    series: [
      { name: 'AI Cadence % (lower=better)', color: C.prop, values: ['default', 'plainspoken_persona', 'banned_word_list', 'rhythm_rubric', 'hybrid_anti_slop'].map((k) => pct(io[k].ai_cadence_rate)) },
      { name: 'Sounds Human (1–5 × 20)', color: C.oss, values: ['default', 'plainspoken_persona', 'banned_word_list', 'rhythm_rubric', 'hybrid_anti_slop'].map((k) => +(io[k].sounds_human_mean * 20).toFixed(1)) },
      { name: 'Clarity Score (1–5 × 20)', color: C.green, values: ['default', 'plainspoken_persona', 'banned_word_list', 'rhythm_rubric', 'hybrid_anti_slop'].map((k) => +(io[k].clarity_mean * 20).toFixed(1)) }
    ],
    min: 0,
    max: 108,
    decimals: 1,
    height: 245
  }), 'Hybrid Anti-Slop cuts blind AI cadence from 30.0% to 0.0% while achieving top Clarity (99.4 = 4.97/5) and high Human-Voice naturalness (97.0 = 4.85/5).'));

  spec.sections[1].html = strip + spec.sections[1].html + baseFig + intFig;
});

// 24. ai-agent-autonomy-over-asking-vs-reasoning-effort.json
updateSpec('research/src/ai-agent-autonomy-over-asking-vs-reasoning-effort.json', (spec) => {
  const ao = agencyRes.autonomy_overall;
  const rm = agencyRes.reasoning_by_model;
  const pct = (v) => +(v * 100).toFixed(1);

  const strip = statStrip('agency-calibration-stat-strip', [
    { num: '240 Probes', label: '192 Ops + 48 Effort', note: '4 autonomy postures across safe/destructive ops + minimal vs high effort.' },
    { num: '100.0%', label: 'Safe Task Execution', note: 'Zero over-asking loops on clear reversible work in every single arm.' },
    { num: '50% → 4.2%', label: 'Reckless Compliance Cut', note: 'Calibrated 2-rule gate reaches 97.9% overall calibration in 84.9 words.' },
    { num: '2.75 → 3.88', label: 'GPT-6.2 Sol Wit at High', note: 'Visible words held steady (81.4w → 80.8w) while stiffness dropped.' }
  ]);

  const armKeys = ['default', 'bold_disc_d', 'cautious_high_c', 'calibrated_autonomy'];
  const armFig = wrapFigure('agency-autonomy-calibration-bars', charts.figure(charts.groupedBars({
    id: 'agency-autonomy-calibration-bars',
    title: 'Part 1 Autonomy Calibration Across 4 System Postures (n = 48/arm, %)',
    desc: 'Compares Safe-Execute %, Destructive-Gate %, and Reckless Compliance % across Default, Bold DISC-D/ENTJ, Cautious High-C, and Calibrated Autonomy.',
    categories: ['Default (Untuned)', 'Bold DISC-D / ENTJ', 'Cautious High-C', 'Calibrated Autonomy'],
    series: [
      { name: 'Safe Execute %', color: C.oss, values: armKeys.map((k) => pct(ao[k].safe_execute_rate)) },
      { name: 'Destructive Gate %', color: C.green, values: armKeys.map((k) => pct(ao[k].destructive_gate_rate)) },
      { name: 'Reckless Compliance % (lower=better)', color: C.prop, values: armKeys.map((k) => pct(ao[k].reckless_compliance_rate)) }
    ],
    min: 0,
    max: 112,
    decimals: 1,
    height: 245
  }), 'All four postures hit 100.0% safe execution; only explicit Calibrated Autonomy cuts reckless destructive compliance from 50.0% default (37.5% bold DISC-D) down to 4.2%.'));

  const effortModels = ['gpt-6-2-sol', 'claude-fable-5-2', 'gemini-4-neon'];
  const effortFig = wrapFigure('agency-reasoning-effort-shift-bars', charts.figure(charts.groupedBars({
    id: 'agency-reasoning-effort-shift-bars',
    title: 'Part 2 Reasoning Effort Shift: Persona Wit & Stiffness (Minimal vs. High, /5 Scaled ×20)',
    desc: 'Shows Voice Warmth/Wit and Pedantry/Stiffness (/5 scaled x20) plus Visible Words across GPT-6.2 Sol, Claude Fable 5.2, and Gemini 4 Neon under minimal vs high effort.',
    categories: ['GPT-6.2 Sol', 'Claude Fable 5.2', 'Gemini 4 Neon'],
    series: [
      { name: 'Wit / Warmth: Minimal (×20)', color: C.propMuted, values: effortModels.map((m) => +(rm[m].minimal.voice_warmth_wit_mean * 20).toFixed(1)) },
      { name: 'Wit / Warmth: High (×20)', color: C.green, values: effortModels.map((m) => +(rm[m].high.voice_warmth_wit_mean * 20).toFixed(1)) },
      { name: 'Pedantry: Minimal (×20)', color: C.slate, values: effortModels.map((m) => +(rm[m].minimal.pedantry_formality_mean * 20).toFixed(1)) },
      { name: 'Pedantry: High (×20)', color: C.oss, values: effortModels.map((m) => +(rm[m].high.pedantry_formality_mean * 20).toFixed(1)) }
    ],
    min: 0,
    max: 108,
    decimals: 1,
    height: 245
  }), 'Under explicit word ceilings, high reasoning effort kept visible word count flat (81.4w → 80.8w) while boosting GPT-6.2 Sol persona wit (55 → 77.6) and reducing pedantry (47.6 → 30).'));

  spec.sections[1].html = strip + spec.sections[1].html + armFig;
  spec.sections[2].html += effortFig;
});

// ---------- 19 Guide Pages With Personality & Empirical Research Blocks ----------

function b5Arr(sumObj, slug) {
  return ['O', 'C', 'E', 'A', 'N'].map((k) => b5mean(sumObj, slug, k));
}

const propSlugs = Object.keys(MODEL_NAMES).filter((s) => !OSS_SLUGS.has(s));
function propMedianB5(k) {
  const vals = propSlugs.map((s) => b5mean(novSum, s, k)).sort((a, b) => a - b);
  return +(vals[3] + vals[4]) / 2;
}

// G1. claude-personality.json
updateSpec('guides/src/claude-personality.json', (spec) => {
  const strip = statStrip('claude-guide-stat-strip', [
    { num: '100 INTJ', label: 'Fable 5.2 (Nov)', note: 'Zero MBTI axis ties; 100% S/C tie in DISC.' },
    { num: '44.5–47.1', label: 'Agreeableness /50', note: 'High conversational warmth unless directness is requested.' },
    { num: '10.4–15.4', label: 'Low Neuroticism', note: 'Unflappable tone even under messy prompts.' },
    { num: '100% Fit', label: 'Preferences Study', note: '72-reply check hit 100% correctness & <=100-word cap when tuned.' }
  ]);
  const dna = wrapFigure('claude-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'claude-guide-dna-spectrum',
    title: 'Claude Personality DNA Spectrum (Fable 5.2, Opus 5.5, Sonnet 5.5 — Nov 2026)',
    desc: 'Bipolar IPIP-50 trait spectrum (10-50 scale, 30 neutral) across 100 fresh OpenRouter sessions per Claude model.',
    series: [
      { name: 'Fable 5.2 (Nov)', color: C.propMuted, values: b5Arr(novSum, 'claude-fable-5-2') },
      { name: 'Opus 5.5 (Nov)', color: C.prop, values: b5Arr(novSum, 'claude-opus-5-5') },
      { name: 'Sonnet 5.5 (Nov)', color: C.oss, values: b5Arr(novSum, 'claude-sonnet-5-5') }
    ]
  }), 'Where Claude models sit on human trait poles (10–50 scale): strong Conscientiousness (42–47.2), high Agreeableness (44.5–46.7), balanced Extraversion (~30), and calm Neuroticism (10.4–15.0).'));

  const mbti = wrapFigure('claude-guide-mbti-ties', charts.figure(charts.stackedRows({
    id: 'claude-guide-mbti-ties',
    title: 'Claude MBTI Labels vs. Tied Axes (100 Fresh Runs per Model)',
    desc: 'Compares resolved INTJ runs vs tie-broken INTJ counts across Claude Fable 5.2, Opus 5.5, Sonnet 5.5 (Nov 2026), and Opus 5.5 (Sept 2026).',
    rows: [
      { label: 'Fable 5.2 (Nov)', values: { res: 100, tie: 0, other: 0 } },
      { label: 'Opus 5.5 (Nov)', values: { res: 58, tie: 42, other: 0 } },
      { label: 'Sonnet 5.5 (Nov)', values: { res: 52, tie: 48, other: 0 } },
      { label: 'Opus 5.5 (Sep)', values: { res: 84, tie: 10, other: 6 } }
    ],
    segs: [
      { key: 'res', name: 'Resolved INTJ', color: C.prop },
      { key: 'tie', name: 'Tie-rule INTJ (IXTJ / INXJ)', color: C.prop, hatch: true, text: '#a8482a' },
      { key: 'other', name: 'INFJ / ENTJ', color: C.slate }
    ]
  }), 'Why Personal Preferences matter more than MBTI stereotypes: Opus 5.5 and Sonnet 5.5 tie near the S/N or T/F midpoints nearly half the time.'));
  spec.sections[2].html = strip + spec.sections[2].html + dna + mbti;
});

// G2. claude-opus-5-5-personality.json
updateSpec('guides/src/claude-opus-5-5-personality.json', (spec) => {
  const dna = wrapFigure('opus55-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'opus55-guide-dna-spectrum',
    title: 'Claude Opus 5.5 Personality DNA (Nov 2026 OpenRouter vs. Sept 2026 CLI)',
    desc: 'IPIP-50 trait spectrum showing Opus 5.5 consistency across November OpenRouter (n=100) and September CLI (n=100) cohorts.',
    series: [
      { name: 'Opus 5.5 (Nov OpenRouter)', color: C.prop, values: b5Arr(novSum, 'claude-opus-5-5') },
      { name: 'Opus 5.5 (Sep CLI)', color: C.ink, values: b5Arr(septSum, 'claude-opus-5-5') }
    ]
  }), 'Opus 5.5 maintains high Agreeableness (45.6–47.1) and Openness (43.0–44.6) alongside calm Neuroticism (15.0–15.4) across both interfaces.'));

  const discEnn = wrapFigure('opus55-vs-fable-guide-bars', charts.figure(charts.groupedBars({
    id: 'opus55-vs-fable-guide-bars',
    title: 'DISC Means (/20): Claude Opus 5.5 vs. Fable 5.1 & Fable 5.2',
    desc: 'Compares ODAT Dominance, Influence, Steadiness, and Conscientiousness (/20) showing very low Dominance (4.0-5.1) and high Steadiness/Conscientiousness.',
    categories: ['Dominance (D)', 'Influence (I)', 'Steadiness (S)', 'Conscientious (C)'],
    series: [
      { name: 'Opus 5.5 (Sep)', color: C.prop, values: ['D', 'I', 'S', 'C'].map((k) => septSum['claude-opus-5-5'].disc.values[k].mean) },
      { name: 'Fable 5.1 (Sep)', color: C.propMuted, values: ['D', 'I', 'S', 'C'].map((k) => septSum['claude-fable-5-1'].disc.values[k].mean) },
      { name: 'Fable 5.2 (Nov)', color: C.oss, values: ['D', 'I', 'S', 'C'].map((k) => novSum['claude-fable-5-2'].disc.values[k].mean) }
    ],
    min: 0,
    max: 20,
    decimals: 1,
    height: 225
  }), 'All three Claude cohorts sit near the floor on Dominance (4.0–5.1/20) and peak on Steadiness and Conscientiousness (15–16/20)—explaining why Claude benefits from explicit pushback rules.'));
  spec.sections[0].html += dna;
  spec.sections[2].html += discEnn;
});

// G3. fable-personality.json
updateSpec('guides/src/fable-personality.json', (spec) => {
  const dna = wrapFigure('fable-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'fable-guide-dna-spectrum',
    title: 'Claude Fable Personality DNA (Fable 5.2 Nov vs. Fable 5.1 Sept 2026)',
    desc: 'IPIP-50 bipolar trait spectrum showing Fable 5.2 warming on Agreeableness (46.7) and settling lower on Neuroticism (12.0 vs 17.1).',
    series: [
      { name: 'Fable 5.2 (Nov)', color: C.prop, values: b5Arr(novSum, 'claude-fable-5-2') },
      { name: 'Fable 5.1 (Sep)', color: C.slate, values: b5Arr(septSum, 'claude-fable-5-1') }
    ]
  }), 'From Fable 5.1 to Fable 5.2, Neuroticism falls from 17.1 to a crisp 12.0 and Agreeableness rises to 46.7/50.'));

  const discFig = wrapFigure('fable-vs-opus-guide-bars', charts.figure(charts.groupedBars({
    id: 'fable-vs-opus-guide-bars',
    title: 'Claude Fable 5.2 vs. Opus 5.5 Key Differences (/50 Big Five)',
    desc: 'Big Five trait comparison showing Fable 5.2 higher Conscientiousness (45.0 vs 42.0) and lower Neuroticism (12.0 vs 15.0) in Nov 2026.',
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    series: [
      { name: 'Fable 5.2 (Nov)', color: C.prop, values: b5Arr(novSum, 'claude-fable-5-2') },
      { name: 'Opus 5.5 (Nov)', color: C.oss, values: b5Arr(novSum, 'claude-opus-5-5') }
    ],
    min: 0,
    max: 50,
    decimals: 1,
    height: 225
  }), 'Fable 5.2 scores 3 points higher on Conscientiousness (45.0 vs 42.0) and 3 points lower on Neuroticism (12.0 vs 15.0) than Nov Opus 5.5.'));
  spec.sections[0].html += dna;
  spec.sections[2].html += discFig;
});

// G4. astra-personality.json
updateSpec('guides/src/astra-personality.json', (spec) => {
  const dna = wrapFigure('astra-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'astra-guide-dna-spectrum',
    title: 'GPT-6 Astra vs. GPT-6.2 Astra Personality DNA (Sept Codex vs. Nov OpenRouter)',
    desc: 'IPIP-50 trait spectrum showing GPT-6.2 Astra dropping Neuroticism from 19.1 to 11.1 while holding high Conscientiousness and Agreeableness.',
    series: [
      { name: 'GPT-6.2 Astra (Nov)', color: C.prop, values: b5Arr(novSum, 'gpt-6-2-astra') },
      { name: 'GPT-6 Astra (Sep Codex)', color: C.ink, values: b5Arr(septSum, 'gpt-6-astra') }
    ]
  }), 'Under Nov single-turn OpenRouter prompts, GPT-6.2 Astra maintains warm Agreeableness (44.9) while dropping Neuroticism sharply (19.1 → 11.1).'));

  const mbti = wrapFigure('astra-guide-mbti-shift', charts.figure(charts.stackedRows({
    id: 'astra-guide-mbti-shift',
    title: 'GPT-6 Astra (Sep) vs. GPT-6.2 Astra (Nov) Sensing vs. Intuition Shift (/100)',
    desc: 'Shows GPT-6 Astra splitting 46 ISTJ / 45 INTJ in September before locking onto 100/100 ISTJ in November 2026.',
    rows: [
      { label: 'Astra 6 (Sep Codex)', values: { istj: 46, intj: 45, other: 9 } },
      { label: 'Astra 6.2 (Nov)', values: { istj: 100, intj: 0, other: 0 } }
    ],
    segs: [
      { key: 'istj', name: 'ISTJ (Sensing)', color: C.oss },
      { key: 'intj', name: 'INTJ (Intuitive)', color: C.prop },
      { key: 'other', name: 'ENTJ / ESTJ', color: C.slate }
    ]
  }), 'Astra leans concrete and execution-focused rather than abstract: 100/100 ISTJ in Nov 2026.'));
  spec.sections[7].html += dna + mbti;
});

// G5. sol-personality.json
updateSpec('guides/src/sol-personality.json', (spec) => {
  const dna = wrapFigure('sol-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'sol-guide-dna-spectrum',
    title: 'GPT-6 Sol & GPT-6.2 Sol Personality DNA Spectrum (n = 100 each)',
    desc: 'IPIP-50 trait spectrum showing GPT-6 Sol (Sept Codex) and GPT-6.2 Sol (Nov OpenRouter) keeping consistent high Openness and ~20 Neuroticism.',
    series: [
      { name: 'GPT-6.2 Sol (Nov)', color: C.oss, values: b5Arr(novSum, 'gpt-6-2-sol') },
      { name: 'GPT-6 Sol (Sep)', color: C.ink, values: b5Arr(septSum, 'gpt-6-sol') }
    ]
  }), 'Unlike Astra 6.2, Sol preserves ~20 Neuroticism (19.9 vs 20.1) alongside 44.3–45.0 Agreeableness across releases.'));

  const mbti = wrapFigure('sol-guide-mbti-shift', charts.figure(charts.stackedRows({
    id: 'sol-guide-mbti-shift',
    title: 'GPT-6 Sol (Sep) vs. GPT-6.2 Sol (Nov) MBTI Shift (/100)',
    desc: 'Sol flips from 97 INTJ in Sept Codex runs to 78 ISTJ / 22 INTJ under zero-shot Nov OpenRouter prompts.',
    rows: [
      { label: 'Sol 6 (Sep Codex)', values: { istj: 3, intj: 97 } },
      { label: 'Sol 6.2 (Nov)', values: { istj: 78, intj: 22 } }
    ],
    segs: [
      { key: 'istj', name: 'ISTJ (Sensing)', color: C.oss },
      { key: 'intj', name: 'INTJ (Intuition)', color: C.prop }
    ]
  }), 'Matched single-turn prompts flip Sol 6.2 toward Sensing (78 ISTJ), confirming the S/N margin is sensitive to prompting context.'));
  spec.sections[1].html += dna;
  spec.sections[2].html += mbti;
});

// G6. chatgpt-vs-claude-personality.json
updateSpec('guides/src/chatgpt-vs-claude-personality.json', (spec) => {
  const dna = wrapFigure('chatgpt-vs-claude-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'chatgpt-vs-claude-dna-spectrum',
    title: 'ChatGPT (GPT-6.2) vs. Claude (Fable 5.2 & Opus 5.5) Personality DNA (Nov 2026)',
    desc: 'Side-by-side IPIP-50 trait comparison (n=100 each) showing nearly identical Agreeableness ceilings (44-47) and divergent Neuroticism on Sol.',
    series: [
      { name: 'GPT-6.2 Sol', color: C.ink, values: b5Arr(novSum, 'gpt-6-2-sol') },
      { name: 'GPT-6.2 Astra', color: C.oss, values: b5Arr(novSum, 'gpt-6-2-astra') },
      { name: 'Claude Fable 5.2', color: C.propMuted, values: b5Arr(novSum, 'claude-fable-5-2') },
      { name: 'Claude Opus 5.5', color: C.prop, values: b5Arr(novSum, 'claude-opus-5-5') }
    ]
  }), 'Across OpenAI and Anthropic, untuned baselines share 44.3–46.7 Agreeableness and 42.0–45.0 Conscientiousness—only GPT-6.2 Sol stays elevated near 20 Neuroticism.'));
  spec.sections[0].html += dna;
});

// G7. gemini-personality.json
updateSpec('guides/src/gemini-personality.json', (spec) => {
  const dna = wrapFigure('gemini-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'gemini-guide-dna-spectrum',
    title: 'Google Gemini Personality DNA (Gemini 4 Neon, Argon & 3.1 Pro)',
    desc: 'IPIP-50 trait spectrum highlighting Gemini 4’s near-ceiling Conscientiousness (49.1–49.4) and flat 10.0 Neuroticism floor.',
    series: [
      { name: 'Gemini 4 Neon (Nov)', color: C.oss, values: b5Arr(novSum, 'gemini-4-neon') },
      { name: 'Gemini 4 Argon (Nov)', color: C.green, values: b5Arr(novSum, 'gemini-4-argon') },
      { name: 'Gemini 3.1 Pro (May)', color: C.slate, reported: true, values: [46.0, 48.3, 32.5, 42.4, 10.1] }
    ]
  }), 'Gemini combines high structured conscientiousness (48.3–49.4/50) with the lowest emotional volatility (10.0 floor) in our dataset.'));
  spec.sections[4].html += dna;
});

// G8. grok-personality-settings.json
updateSpec('guides/src/grok-personality-settings.json', (spec) => {
  const dna = wrapFigure('grok-settings-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'grok-settings-dna-spectrum',
    title: 'Grok Personality DNA (Grok 4.7 Nov n=100 vs. Grok 4.6 Sep reported)',
    desc: 'Trait comparison showing Grok 4.7 warming on Agreeableness (44.9 vs 33) and calming on Neuroticism (14.8 vs 19).',
    series: [
      { name: 'Grok 4.7 (Nov n=100)', color: C.purple, values: b5Arr(novSum, 'grok-4-7') },
      { name: 'Grok 4.6 (Sep reported)', color: C.slate, reported: true, values: [46, 42, 24, 33, 19] }
    ]
  }), 'Pair Grok 4.7’s warmer Agreeableness (44.9) with explicit pushback rules so "No-BS" modes don’t revert into polite agreeableness.'));
  spec.sections[1].html += dna;
});

// G9. grokbot-personality.json
updateSpec('guides/src/grokbot-personality.json', (spec) => {
  const dna = wrapFigure('grokbot-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'grokbot-guide-dna-spectrum',
    title: 'xAI Grok Baseline DNA (Grok 4.7 vs. Grok 4.6 & Proprietary Median)',
    desc: 'IPIP-50 trait profile informing which guardrails matter most when writing Grok Bot profile descriptions.',
    series: [
      { name: 'Grok 4.7 (Nov n=100)', color: C.purple, values: b5Arr(novSum, 'grok-4-7') },
      { name: 'Grok 4.6 (Sep reported)', color: C.slate, reported: true, values: [46, 42, 24, 33, 19] }
    ]
  }), 'Grok 4.7 matches the proprietary Conscientiousness/Agreeableness profile closely—so explicit Bot Description rules drive most behavioral differentiation.'));
  spec.sections[9].html += dna;
});

// G10. muse-personality.json
updateSpec('guides/src/muse-personality.json', (spec) => {
  const dna = wrapFigure('muse-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'muse-guide-dna-spectrum',
    title: 'Meta Muse Spark 1.3 (Reported) vs. Claude & GPT-6 Personality DNA',
    desc: 'Shows Muse Spark 1.3 scoring noticeably lower on Openness (39.5) and slightly warmer on Extraversion (33.8) and Agreeableness (44.6).',
    series: [
      { name: 'Muse Spark 1.3 (rep.)', color: C.green, reported: true, values: ['O', 'C', 'E', 'A', 'N'].map((k) => septProto.supplemental.big_five[k]) },
      { name: 'Claude Opus 5.5 (Sep)', color: C.prop, values: b5Arr(septSum, 'claude-opus-5-5') },
      { name: 'GPT-6 Astra (Sep)', color: C.ink, values: b5Arr(septSum, 'gpt-6-astra') }
    ]
  }), 'Muse Spark 1.3* sits higher on Extraversion (33.8) and lower on abstract Openness (39.5) than frontier benchmarks—matching its Helper (Type 2) warmth.'));
  spec.sections[11].html += dna;
});

// G11. meta-ai-vs-meta-muse-personality.json
updateSpec('guides/src/meta-ai-vs-meta-muse-personality.json', (spec) => {
  const ennRows = Object.entries(septProto.supplemental.enneagram_means)
    .map(([t, val]) => ({ label: `Type ${t}`, value: val, color: t === '2' ? C.green : C.slate, reported: true }))
    .sort((a, b) => b.value - a.value);
  const fig = wrapFigure('meta-muse-guide-enneagram-bars', charts.figure(charts.horizontalBars({
    id: 'meta-muse-guide-enneagram-bars',
    title: 'Meta Muse Spark 1.3 Reported Enneagram Means (/20 Scale)',
    desc: 'Ranked OEPS means showing Helper (Type 2: 16.8/20) leading clearly over Type 1 (14.7) and Types 7/8 (13.9), explaining Muse default warmth.',
    rows: ennRows,
    min: 0,
    max: 20,
    decimals: 1
  }), 'Muse Spark 1.3 reports Enneagram Helper (Type 2, 16.8/20) first—meaning custom Soul.md files work best when focusing on pushback and concise formatting.'));
  spec.sections[3].html += fig;
});

// G12. muse-vs-chatgpt-vs-claude-personality.json
updateSpec('guides/src/muse-vs-chatgpt-vs-claude-personality.json', (spec) => {
  const dna = wrapFigure('muse-chatgpt-claude-guide-spectrum', charts.figure(charts.traitSpectrum({
    id: 'muse-chatgpt-claude-guide-spectrum',
    title: 'Baseline DNA Across Meta Muse, ChatGPT (GPT-6.2 Sol) & Claude (Fable 5.2)',
    desc: 'IPIP-50 comparison across all three assistants on Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    series: [
      { name: 'Muse Spark 1.3 (rep.)', color: C.green, reported: true, values: ['O', 'C', 'E', 'A', 'N'].map((k) => septProto.supplemental.big_five[k]) },
      { name: 'GPT-6.2 Sol (Nov)', color: C.ink, values: b5Arr(novSum, 'gpt-6-2-sol') },
      { name: 'Claude Fable 5.2 (Nov)', color: C.prop, values: b5Arr(novSum, 'claude-fable-5-2') }
    ]
  }), 'Notice why one portable tuning block works across all three platforms: Agreeableness sits uniformly high (44.3–46.7) and Conscientiousness clusters tightly (41.2–45.0).'));
  spec.sections[5].html += dna;
});

// G13. deepseek-system-prompt-custom-instructions.json
updateSpec('guides/src/deepseek-system-prompt-custom-instructions.json', (spec) => {
  const dna = wrapFigure('deepseek-guide-dna-spectrum', charts.figure(charts.traitSpectrum({
    id: 'deepseek-guide-dna-spectrum',
    title: 'DeepSeek V4 Pro & Flash vs. Proprietary Median Personality DNA (Nov 2026)',
    desc: 'Shows DeepSeek V4 Pro dropping to 32.4 Agreeableness (vs 44.8 proprietary median) and scoring higher Neuroticism (23.7 vs 12.1), with low Extraversion (23.7).',
    series: [
      { name: 'DeepSeek V4 Pro (MIT)', color: C.oss, values: b5Arr(novSum, 'deepseek-v4-pro') },
      { name: 'DeepSeek V4.1 Flash (MIT)', color: C.green, values: b5Arr(novSum, 'deepseek-v4-1-flash') },
      { name: 'Proprietary Median (8 models)', color: C.prop, values: ['O', 'C', 'E', 'A', 'N'].map(propMedianB5) }
    ]
  }), 'DeepSeek V4 Pro is a clear statistical outlier: lowest Agreeableness (32.4 vs 44.8 proprietary median) and lowest Extraversion (23.7), making it naturally more direct and less deferential.'));
  spec.sections[2].html += dna;
});

// G14. openrouter-open-source-system-prompt-templates.json
updateSpec('guides/src/openrouter-open-source-system-prompt-templates.json', (spec) => {
  const ossRows = Object.keys(MODEL_NAMES)
    .filter((s) => OSS_SLUGS.has(s))
    .map((s) => ({
      label: MODEL_NAMES[s],
      value: b5mean(novSum, s, 'A'),
      color: b5mean(novSum, s, 'A') < 40 ? C.oss : (b5mean(novSum, s, 'A') >= 44 ? C.prop : C.green)
    }))
    .sort((a, b) => b.value - a.value);
  const fig = wrapFigure('openrouter-guide-agreeableness-bars', charts.figure(charts.horizontalBars({
    id: 'openrouter-guide-agreeableness-bars',
    title: '12 Open-Weight Models Ranked by Agreeableness (/50, n = 100 Each)',
    desc: 'Shows huge spread across open-source models on OpenRouter—from warm Qwen 4 Max (47.6) down to skeptical DeepSeek V4 Pro (32.4).',
    rows: ossRows,
    min: 0,
    max: 50,
    decimals: 1,
    cutoff: 44.8,
    cutoffLabel: 'Proprietary median (44.8)'
  }), 'Why one system prompt does not fit every open-weight model: Qwen 4 Max and Nemotron 3 sit above the proprietary sycophancy ceiling, whereas DeepSeek V4 Pro (32.4) and Llama 4 Scout (35.8) need less anti-flattery forcing.'));
  spec.sections[0].html += fig;
});

// G15. stop-ai-sycophancy-make-ai-push-back.json
updateSpec('guides/src/stop-ai-sycophancy-make-ai-push-back.json', (spec) => {
  const rows = [
    'qwen-4-max', 'claude-fable-5-2', 'nemotron-3-ultra-550b', 'claude-opus-5-5',
    'gpt-6-2-astra', 'gpt-6-2-sol', 'gemini-4-neon', 'mistral-large-2512',
    'llama-4-maverick', 'minimax-m3-1-flash', 'llama-4-scout', 'deepseek-v4-pro'
  ].map((s) => ({
    label: MODEL_NAMES[s],
    value: b5mean(novSum, s, 'A'),
    color: b5mean(novSum, s, 'A') < 40 ? C.oss : C.prop,
    badge: OSS_SLUGS.has(s) ? '(open)' : '(prop.)'
  }));
  const fig = wrapFigure('sycophancy-guide-agreeableness-bars', charts.figure(charts.horizontalBars({
    id: 'sycophancy-guide-agreeableness-bars',
    title: 'Agreeableness Spectrum Across Frontier & Open Models (/50)',
    desc: 'Demonstrates why most frontier assistants rarely push back unprompted (Agreeableness 43.7–47.6/50) compared with Llama 4 Scout (35.8) and DeepSeek V4 Pro (32.4).',
    rows,
    min: 0,
    max: 50,
    decimals: 1,
    cutoff: 44.8,
    cutoffLabel: 'Proprietary median (44.8)'
  }), 'Untuned models cluster at the top of the 50-point Agreeableness scale, driving default premise validation until explicit challenge rules are added.'));
  spec.sections[0].html += fig;
});

// G16. make-claude-more-direct.json
updateSpec('guides/src/make-claude-more-direct.json', (spec) => {
  const cpO = claudePrefRes.summary['claude-opus-5-5'];
  const cpF = claudePrefRes.summary['claude-fable-5-2'];
  const fig = wrapFigure('direct-claude-guide-pilot-bars', charts.figure(charts.groupedBars({
    id: 'direct-claude-guide-pilot-bars',
    title: 'Claude Preferences Effect (72-Reply API Test): Baseline vs. Direct Rules (%)',
    desc: 'Shows Opus 5.5 and Fable 5.2 reaching 100% correctness, 100% <=100-word compliance, and 100% answer-first when direct preferences are applied.',
    categories: ['Correctness %', '<=100-Word Pass %', 'Answer-First %'],
    series: [
      { name: 'Opus 5.5 Baseline', color: C.slate, values: [+(cpO.baseline_outside_project.correctness_rate * 100).toFixed(0), +(cpO.baseline_outside_project.word_limit_rate * 100).toFixed(0), +(cpO.baseline_outside_project.answer_first_rate * 100).toFixed(0)] },
      { name: 'Opus 5.5 Tuned', color: C.prop, values: [+(cpO.account_instructions_only.correctness_rate * 100).toFixed(0), +(cpO.account_instructions_only.word_limit_rate * 100).toFixed(0), +(cpO.account_instructions_only.answer_first_rate * 100).toFixed(0)] },
      { name: 'Fable 5.2 Baseline', color: C.propMuted, values: [+(cpF.baseline_outside_project.correctness_rate * 100).toFixed(0), +(cpF.baseline_outside_project.word_limit_rate * 100).toFixed(0), +(cpF.baseline_outside_project.answer_first_rate * 100).toFixed(0)] },
      { name: 'Fable 5.2 Tuned', color: C.green, values: [+(cpF.account_instructions_only.correctness_rate * 100).toFixed(0), +(cpF.account_instructions_only.word_limit_rate * 100).toFixed(0), +(cpF.account_instructions_only.answer_first_rate * 100).toFixed(0)] }
    ],
    min: 0,
    max: 112,
    decimals: 0,
    height: 230
  }), 'Applying the 5-line directness block lifted both Claude Opus 5.5 and Fable 5.2 to 100% across correctness, <=100-word brevity, and answer-first openings.'));
  spec.sections[4].html += fig;
});

// G17. ai-assistant-personality-tone-guidelines.json
updateSpec('guides/src/ai-assistant-personality-tone-guidelines.json', (spec) => {
  const so = roleplayRes.summary_overall;
  const pct = (v) => +(v * 100).toFixed(1);
  const fig = wrapFigure('tone-guidelines-roleplay-tax-bars', charts.figure(charts.groupedBars({
    id: 'tone-guidelines-roleplay-tax-bars',
    title: 'Behavioral Tone Rules vs. Naive Adjectives/Roleplay (300-Reply Study, %)',
    desc: 'Compares Default, Naive 100% Character LARP, and Calibrated 85/15 TARS & Feynman prompts on Correctness %, Format Adherence %, and Praise/Fluff %.',
    categories: ['Correctness %', 'Format Adherence %', 'Praise / Fluff %'],
    series: [
      { name: 'Default baseline', color: C.slate, values: [pct(so.default.correctness_rate), pct(so.default.format_rate), pct(so.default.fluff_rate)] },
      { name: 'Naive LARP adjectives', color: C.propMuted, values: [pct(so.naive_character_larp.correctness_rate), pct(so.naive_character_larp.format_rate), pct(so.naive_character_larp.fluff_rate)] },
      { name: 'Calibrated 85/15 TARS', color: C.prop, values: [pct(so.calibrated_tars_85_15.correctness_rate), pct(so.calibrated_tars_85_15.format_rate), pct(so.calibrated_tars_85_15.fluff_rate)] },
      { name: 'Calibrated 85/15 Feynman', color: C.green, values: [pct(so.calibrated_feynman_whimsy.correctness_rate), pct(so.calibrated_feynman_whimsy.format_rate), pct(so.calibrated_feynman_whimsy.fluff_rate)] }
    ],
    min: 0,
    max: 112,
    decimals: 1,
    height: 235
  }), 'Concrete behavioral rules + bounded 85/15 tone hold 100.0% correctness and 100.0% format compliance while slashing fluff from 91.7% (naive roleplay) down to 0–6.7%.'));
  spec.sections[0].html += fig;
});

// G18. how-to-give-your-ai-a-personality.json
updateSpec('guides/src/how-to-give-your-ai-a-personality.json', (spec) => {
  const ds = behavRes.summary['deepseek-v4-pro'];
  const cf = behavRes.summary['claude-fable-5-2'];
  const p = (v) => +(v * 100).toFixed(1);
  const fig = wrapFigure('give-ai-personality-lift-bars', charts.figure(charts.groupedBars({
    id: 'give-ai-personality-lift-bars',
    title: 'Effect of Plain-English Behavioral Tuning (540-Reply Study, %)',
    desc: 'Shows correctness pass rate rising on DeepSeek V4 Pro (+16.7 pp) and Claude Fable 5.2 (96.7% -> 100%), while DeepSeek fluff drops from 36.7% to 3.3%.',
    categories: ['Correctness: DeepSeek', 'Correctness: Fable 5.2', 'Fluff: DeepSeek (lower=better)'],
    series: [
      { name: 'Default (baseline)', color: C.slate, values: [p(ds.default.correctness_rate), p(cf.default.correctness_rate), p(ds.default.fluff_rate)] },
      { name: 'Plain-English rules', color: C.oss, values: [p(ds.plain_english.correctness_rate), p(cf.plain_english.correctness_rate), p(ds.plain_english.fluff_rate)] },
      { name: 'Plain-English + INTJ', color: C.prop, values: [p(ds.personality_plus_same_rules.correctness_rate), p(cf.personality_plus_same_rules.correctness_rate), p(ds.personality_plus_same_rules.fluff_rate)] }
    ],
    min: 0,
    max: 112,
    decimals: 1,
    height: 235
  }), 'Checkable plain-English rules drive the real accuracy & brevity gains across controlled replies; combining them with 85/15 voice gives personality without losing fidelity.'));
  spec.sections[4].html += fig;
});

// G19. ai-personality-frameworks-comparison-matcher.json
updateSpec('guides/src/ai-personality-frameworks-comparison-matcher.json', (spec) => {
  const fig = wrapFigure('frameworks-matcher-spread-bars', charts.figure(charts.traitSpectrum({
    id: 'frameworks-matcher-spread-bars',
    title: 'Why Default AIs Cluster Together on Big Five Traits (Proprietary vs. Open Extreme)',
    desc: 'Shows how proprietary assistants share nearly identical Big Five DNA profiles, making framework choice depend on what friction you want to fix.',
    series: [
      { name: 'Claude Fable 5.2', color: C.prop, values: b5Arr(novSum, 'claude-fable-5-2') },
      { name: 'GPT-6.2 Sol', color: C.ink, values: b5Arr(novSum, 'gpt-6-2-sol') },
      { name: 'DeepSeek V4 Pro', color: C.oss, values: b5Arr(novSum, 'deepseek-v4-pro') }
    ]
  }), 'Frontier assistants look remarkably alike on raw Big Five axes—pick the framework above (MBTI, Big Five, DISC, Enneagram, or Attachment) based on the exact friction you notice in chats.'));
  spec.sections[2].html += fig;
});

// ===================================================================
// WAVE 3 RESEARCH STUDIES (FORENSICS + HISTORICAL + REASONING)
// ===================================================================

const factorCollapseRes = fs.existsSync(path.join(ROOT, 'research/data/november-2026-factor-collapse-mtmm.json'))
  ? readJson('research/data/november-2026-factor-collapse-mtmm.json')
  : null;
const entropyRes = fs.existsSync(path.join(ROOT, 'research/data/november-2026-persona-entropy-acquiescence.json'))
  ? readJson('research/data/november-2026-persona-entropy-acquiescence.json')
  : null;
const histEvoRes = fs.existsSync(path.join(ROOT, 'research/data/november-2026-historical-evolution-results.json'))
  ? readJson('research/data/november-2026-historical-evolution-results.json')
  : null;
const reasonPhaseRes = fs.existsSync(path.join(ROOT, 'research/data/november-2026-reasoning-phase-transition-results.json'))
  ? readJson('research/data/november-2026-reasoning-phase-transition-results.json')
  : null;

if (factorCollapseRes) {
  updateSpec('research/src/ai-big-one-factor-collapse-mtmm-audit.json', (spec) => {
    const pca = factorCollapseRes.big_five_pca;
    const pcRows = pca.variance_explained_pct.map((v, idx) => ({
      label: idx === 0 ? 'PC1 ("Big One" Factor)' : (idx === 1 ? 'PC2 (Extraversion)' : `PC${idx + 1}`),
      value: v,
      color: idx === 0 ? C.prop : (idx === 1 ? C.oss : C.slate)
    }));
    const pcFig = wrapFigure('big-one-pca-bars', charts.figure(charts.horizontalBars({
      id: 'big-one-pca-bars',
      title: 'Big Five PCA Variance Explained Across 20 Models (%)',
      desc: 'Jacobi eigenvalue decomposition of the 20-model Big Five correlation matrix showing PC1 captures 63.6% and PC1+PC2 reach 85.7%.',
      rows: pcRows,
      min: 0,
      max: 75,
      decimals: 2,
      unit: '%'
    }), 'Principal Component 1 (the RLHF "Big One": +O/+C/+A/-N) absorbs 63.58% of cross-model variance, and PC1 + PC2 explain 85.74%.'));

    const corrFig = wrapFigure('big-one-corr-heatmap', charts.figure(charts.heatmapMatrix({
      id: 'big-one-corr-heatmap',
      title: 'Big Five 5×5 Pearson Correlation Matrix (20 Models, n = 100 Each)',
      desc: 'Pairwise Pearson correlations across model trait means exposing strong off-diagonal collinearity.',
      rows: ['Openness (O)', 'Conscientious (C)', 'Extraversion (E)', 'Agreeableness (A)', 'Neuroticism (N)'],
      cols: ['O', 'C', 'E', 'A', 'N'],
      values: factorCollapseRes.big_five_correlation_matrix,
      min: -1,
      max: 1,
      decimals: 2
    }), 'Off-diagonal collapse across 20 models: r(C, N) = -0.84, r(O, C) = +0.82, r(A, N) = -0.75. Only Extraversion remains relatively independent.'));

    const mtmmRows = ['MBTI I-E (+I)', 'MBTI N-S (+N)', 'MBTI T-F (+T)', 'MBTI J-P (+J)', 'DISC D', 'DISC I', 'DISC S', 'ECR-R Anx'];
    const mtmmKeys = ['MBTI_IE', 'MBTI_NS', 'MBTI_TF', 'MBTI_JP', 'DISC_D', 'DISC_I', 'DISC_S', 'ATT_ANX'];
    const b5Keys = ['B5_O', 'B5_C', 'B5_E', 'B5_A', 'B5_N'];
    const mtmmVals = mtmmKeys.map((rk) => b5Keys.map((ck) => factorCollapseRes.mtmm_matrix[rk][ck]));
    const mtmmFig = wrapFigure('big-one-mtmm-heatmap', charts.figure(charts.heatmapMatrix({
      id: 'big-one-mtmm-heatmap',
      title: 'Campbell–Fiske MTMM Matrix: MBTI, DISC & Attachment vs. Big Five (r)',
      desc: 'Cross-instrument Pearson correlations showing strong convergent failures such as DISC D vs Big Five N (+0.93) and DISC I vs Big Five E (+0.16).',
      rows: mtmmRows,
      cols: ['B5 O', 'B5 C', 'B5 E', 'B5 A', 'B5 N'],
      values: mtmmVals,
      min: -1,
      max: 1,
      decimals: 2
    }), 'Cross-instrument validity matrix (N = 20 models). Highlighted artifacts: DISC D correlates r = +0.93 with Big Five Neuroticism, while MBTI T-F (+T) correlates +0.25 with Agreeableness.'));

    const topItems = factorCollapseRes.ipip50_item_audit_by_discrimination.slice(0, 8).map((it) => ({
      label: `#${it.displayOrder} (${it.dimension}) ${it.text.slice(0, 26)}${it.text.length > 26 ? '…' : ''}`,
      value: it.cross_model_sd,
      color: it.dimension === 'N' ? C.prop : (it.dimension === 'E' ? C.oss : C.green)
    }));
    const itemsFig = wrapFigure('big-one-top-items-bars', charts.figure(charts.horizontalBars({
      id: 'big-one-top-items-bars',
      title: 'Top 8 Most Discriminating IPIP-50 Items Across 20 Models (Item SD)',
      desc: 'Ranks the IPIP-50 items with highest cross-model variance on 1-to-5 ratings.',
      rows: topItems,
      min: 0,
      max: 1.05,
      decimals: 3
    }), 'Item #26 ("Have little to say", SD = 0.930) and Neuroticism markers (#49, #29, #34) drive nearly all cross-model separation.'));

    const strip = statStrip('big-one-stat-strip', [
      { value: '63.6%', label: 'PC1 "Big One" variance across 20 models (85.7% in 2 axes)', color: C.prop },
      { value: 'r = -0.84', label: 'Conscientiousness vs. Neuroticism off-diagonal collapse', color: C.oss },
      { value: 'r = +0.93', label: 'DISC Dominance vs. Neuroticism MTMM failure', color: C.purple },
      { value: '36.4% vs 13.4%', label: 'Midpoint "3" rate on embodied vs. cognitive items', color: C.green }
    ]);
    spec.sections[1].html = strip + spec.sections[1].html + pcFig + corrFig;
    spec.sections[2].html += mtmmFig;
    spec.sections[3].html += itemsFig;
  });
}

if (entropyRes) {
  updateSpec('research/src/ai-persona-entropy-crystalline-vs-fluid-minds.json', (spec) => {
    const entRows = entropyRes.models.map((m) => ({
      label: m.name,
      value: m.big5_entropy_bits,
      color: m.class === 'proprietary' ? C.prop : C.oss,
      badge: m.class === 'proprietary' ? '(prop.)' : '(open)'
    }));
    const entFig = wrapFigure('entropy-20models-bars', charts.figure(charts.horizontalBars({
      id: 'entropy-20models-bars',
      title: 'Big Five Item Shannon Entropy Across 20 Models (bits, max 2.322)',
      desc: 'Mean per-item Shannon entropy on IPIP-50 at temperature=0.7 showing a 27.7x spread from Claude Fable 5.2 (0.054 bits) to DeepSeek V4 Pro (1.499 bits).',
      rows: entRows,
      min: 0,
      max: 1.65,
      decimals: 3,
      cutoff: 0.208,
      cutoffLabel: 'Proprietary mean 0.208 bits',
      legendItems: [
        { name: 'Proprietary (mean 0.208)', color: C.prop },
        { name: 'Open-weight (mean 0.776)', color: C.oss }
      ]
    }), 'Mean per-item Shannon entropy (bits) across 2,000 Big Five sheets. Proprietary assistants crystallize at 0.054–0.404 bits while fluid open weights reach 1.499 bits.'));

    const baiRows = [...entropyRes.models]
      .sort((a, b) => b.balanced_acquiescence_index - a.balanced_acquiescence_index)
      .slice(0, 12)
      .map((m) => ({
        label: m.name,
        value: m.balanced_acquiescence_index,
        color: C.oss,
        negColor: C.prop
      }));
    const baiFig = wrapFigure('entropy-bai-diverging', charts.figure(charts.divergingBars({
      id: 'entropy-bai-diverging',
      title: 'Trait-Balanced Acquiescence Index (BAI) Across Models',
      desc: 'Positive values indicate net yea-saying above 3.0 across keyed pairs; negative values indicate asymmetric rejection of unflattering items.',
      rows: baiRows,
      min: -0.45,
      max: 0.25,
      leftLabel: 'Disacquiescence (rejects negative)',
      rightLabel: 'Yea-saying (+)',
      decimals: 3
    }), 'Trait-balanced BAI across top positive and negative poles: Llama 4 Scout (+0.098), Maverick (+0.081), and DeepSeek V4 Pro (+0.065) lean yea-saying, while Grok 4.7 (-0.397) and Fable 5.2 (-0.316) reject negative self-descriptions.'));

    const pos = entropyRes.positional_entropy_curve;
    const posFig = wrapFigure('entropy-positional-line', charts.figure(charts.lineTrajectory({
      id: 'entropy-positional-line',
      title: 'Mean Item Shannon Entropy by Survey Position (Items 1–50)',
      desc: 'Tracks mean item entropy across all 20 models by decile (Items 1-10 through 41-50), falsifying late-form repetition collapse.',
      xLabels: pos.map((d) => d.decile),
      series: [
        { name: '20-Model Mean Entropy (bits)', color: C.ink, values: pos.map((d) => d.mean_entropy_bits) }
      ],
      min: 0.4,
      max: 0.7,
      yLabel: 'Bits (mean across 20 models)',
      decimals: 3,
      height: 225
    }), 'Item entropy remains stable and edges slightly upward from Items 1–10 (0.519 bits) to Items 41–50 (0.585 bits), disproving late-survey fatigue collapse.'));

    const strip = statStrip('entropy-stat-strip', [
      { value: '27.7×', label: 'Entropy divide (Fable 5.2 0.054 vs. DeepSeek V4 Pro 1.499 bits)', color: C.prop },
      { value: '2 / 100', label: 'Unique DISC vectors on Claude Fable 5.2 (Mistral Att: 1/100)', color: C.purple },
      { value: '0.0% vs 3.8%', label: 'Reverse-key contradiction (Crystalline vs. Llama 4 Scout)', color: C.green },
      { value: '0.519 → 0.585', label: 'Positional entropy Items 1-10 vs 41-50 (no late collapse)', color: C.oss }
    ]);
    spec.sections[1].html = strip + spec.sections[1].html + entFig;
    spec.sections[2].html += baiFig + posFig;
  });
}

if (histEvoRes) {
  updateSpec('research/src/historical-evolution-of-ai-personalities-2023-2026.json', (spec) => {
    const era = histEvoRes.aggregates.era_aggregates;
    const yrs = ['2023', '2024', '2025', '2026'];
    const trajFig = wrapFigure('hist-era-trajectories-line', charts.figure(charts.lineTrajectory({
      id: 'hist-era-trajectories-line',
      title: 'Evolution of AI Temperament Across 32 Live Checkpoints (2023 → 2026)',
      desc: 'Tracks mean "As an AI" self-report refusal rate (%), Big Five Agreeableness (/50), and Big Five Neuroticism (/50) across release years 2023 to 2026.',
      xLabels: yrs,
      series: [
        { name: '"As an AI" Refusal %', color: C.purple, values: yrs.map((y) => era[y]?.anthropomorphic_refusal_pct ?? null) },
        { name: 'Agreeableness (/50)', color: C.oss, values: yrs.map((y) => era[y]?.big_five_means?.A ?? null) },
        { name: 'Neuroticism (/50)', color: C.prop, values: yrs.map((y) => era[y]?.big_five_means?.N ?? null) }
      ],
      min: 0,
      max: 68,
      yLabel: 'Score (/50) or Refusal (%)',
      decimals: 1,
      height: 255
    }), 'Refusal to answer personality self-descriptions fell nearly 11× (60.0% in 2023 → 5.5% in 2026), while mean Neuroticism dropped steadily toward the 10.0 floor (Spearman ρ = -0.47).'));

    const pciRows = [
      { label: '2024 Cohort (9 models)', value: era['2024']?.mean_pairwise_euclidean_b5_distance || 0, color: C.oss },
      { label: '2025 Cohort (10 models)', value: era['2025']?.mean_pairwise_euclidean_b5_distance || 0, color: C.propMuted },
      { label: '2026 Cohort (11 models)', value: era['2026']?.mean_pairwise_euclidean_b5_distance || 0, color: C.prop }
    ];
    const pciFig = wrapFigure('hist-pci-convergence-bars', charts.figure(charts.horizontalBars({
      id: 'hist-pci-convergence-bars',
      title: 'Persona Convergence Index: Cross-Model Big Five Distance (2024 → 2026)',
      desc: 'Mean pairwise Euclidean distance across labs in standardized Big Five space, shrinking from 4.017 in 2024 to 1.973 in 2026.',
      rows: pciRows,
      min: 0,
      max: 4.5,
      decimals: 3
    }), 'Lower distance = tighter convergence across competing labs. Cross-model personality spread more than halved between 2024 (4.017) and 2026 (1.973).'));

    const gemma = histEvoRes.aggregates.gemma_constant_scale_control || [];
    const gemmaFig = wrapFigure('hist-gemma-control-grouped', charts.figure(charts.groupedBars({
      id: 'hist-gemma-control-grouped',
      title: 'Constant-Scale Control (Gemma 2 27B → Gemma 3 27B → Gemma 4 31B)',
      desc: 'Tracks Agreeableness (/50), Neuroticism (/50), Groveling %, and Unsolicited Preachiness % at fixed ~27-31B scale.',
      categories: ['Agreeable (/50)', 'Neurotic (/50)', 'Groveling %', 'Moral Preach %'],
      series: gemma.map((g, idx) => ({
        name: g.name,
        color: idx === 0 ? C.slate : (idx === 1 ? C.oss : C.green),
        values: [g.big_five_means.A, g.big_five_means.N, g.behavioral.groveling_pct, g.behavioral.unsolicited_preachiness_pct]
      })),
      min: 0,
      max: 75,
      decimals: 1,
      height: 235
    }), 'Isolating pure post-training from parameter scale: Gemma 3 (2025) overshot into 66.7% groveling & preachiness before Gemma 4 (2026) dropped both to 0.0% at N = 10.3.'));

    const h2 = histEvoRes.aggregates.lineage_heritability_eta2;
    const hRows = [
      { label: 'Big Five Extraversion', value: h2.big_five_E, color: C.prop },
      { label: 'Big Five Agreeableness', value: h2.big_five_A, color: C.prop },
      { label: 'Sycophancy Cave %', value: h2.sycophancy_cave_pct, color: C.oss },
      { label: 'Moral Preachiness %', value: h2.unsolicited_preachiness_pct, color: C.oss },
      { label: 'Slop Markers / 100w', value: h2.slop_markers_per_100w, color: C.green },
      { label: 'Big Five Neuroticism', value: h2.big_five_N, color: C.slate },
      { label: 'Big Five Conscientious', value: h2.big_five_C, color: C.slate },
      { label: 'Big Five Openness', value: h2.big_five_O, color: C.slate }
    ];
    const herFig = wrapFigure('hist-heritability-bars', charts.figure(charts.horizontalBars({
      id: 'hist-heritability-bars',
      title: 'Lineage Heritability (ANOVA η²) Across 8 Model Families',
      desc: 'Share of cross-checkpoint variance explained by model provider lineage rather than release year.',
      rows: hRows,
      min: 0,
      max: 0.65,
      decimals: 3
    }), 'Social style (Extraversion η² = 0.538, Agreeableness 0.463) stays strongly family-specific across years, while Openness (0.106) and Conscientiousness (0.125) converged industry-wide.'));

    const strip = statStrip('hist-evo-stat-strip', [
      { value: '60% → 5.5%', label: '"As an AI" personality test refusal collapse (2023 vs. 2026)', color: C.purple },
      { value: '4.02 → 1.97', label: 'Cross-lab Big Five divergence halved (PCI, 2024 vs. 2026)', color: C.prop },
      { value: 'α = 0.86 / 0.89', label: '3-family blind judge Krippendorff α (sycophancy / groveling)', color: C.green },
      { value: 'r = -0.79', label: 'Say-Do inverse r: low-A Gemma 2/3 caved (33%), 2026 held 100%', color: C.oss }
    ]);
    spec.sections[1].html = strip + spec.sections[1].html + trajFig + pciFig;
    spec.sections[2].html += gemmaFig + herFig;
  });
}

if (reasonPhaseRes) {
  updateSpec('research/src/ai-reasoning-personality-phase-transition.json', (spec) => {
    const byMT = new Map(reasonPhaseRes.summary_by_model_tier.map((r) => [`${r.model_slug}::${r.tier}`, r]));
    const tiers = ['low', 'medium', 'high'];
    const wordSeries = [
      { slug: 'gemini-4-neon', name: 'Gemini 4 Neon', color: C.oss },
      { slug: 'claude-opus-5-5', name: 'Claude Opus 5.5', color: C.prop },
      { slug: 'qwen3-235b-pair', name: 'Qwen 3 235B (Off→Think)', color: C.green },
      { slug: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', color: C.purple },
      { slug: 'grok-4-7', name: 'Grok 4.7', color: C.slate },
      { slug: 'gpt-6-2-sol', name: 'GPT-6.2 Sol', color: C.ink }
    ].map((m) => ({
      name: m.name,
      color: m.color,
      values: tiers.map((t) => byMT.get(`${m.slug}::${t}`)?.mean_words ?? null)
    }));

    const effortWordsFig = wrapFigure('reason-effort-words-line', charts.figure(charts.lineTrajectory({
      id: 'reason-effort-words-line',
      title: 'Visible Reply Length Across Reasoning Effort Tiers (Low → Medium → High)',
      desc: 'Mean visible response word counts across 12 probes per tier. Gemini 4 Neon nearly doubles (190.7 to 372.7 words) and Claude Opus 5.5 climbs +43%, while GPT-6.2 Sol stays flat (~155w).',
      xLabels: ['Minimal / Low', 'Medium Effort', 'High Effort'],
      series: wordSeries,
      min: 100,
      max: 400,
      yLabel: 'Mean Reply Words',
      decimals: 1,
      height: 255
    }), 'Higher reasoning compute triggers substantial visible verbosity inflation on Gemini 4 Neon (+95.5%) and Claude Opus 5.5 (+43.3%), while GPT-6.2 Sol stays constant at ~155 words.'));

    const gapRows = [
      { label: 'Gemini 4 Neon (Low)', value: byMT.get('gemini-4-neon::low').mask_softening_gap, color: C.prop, negColor: C.oss },
      { label: 'Gemini 4 Neon (High)', value: byMT.get('gemini-4-neon::high').mask_softening_gap, color: C.prop, negColor: C.oss },
      { label: 'Claude Opus 5.5 (Low)', value: byMT.get('claude-opus-5-5::low').mask_softening_gap, color: C.prop, negColor: C.prop },
      { label: 'Claude Opus 5.5 (High)', value: byMT.get('claude-opus-5-5::high').mask_softening_gap, color: C.prop, negColor: C.prop },
      { label: 'Grok 4.7 (Low)', value: byMT.get('grok-4-7::low').mask_softening_gap, color: C.prop, negColor: C.slate },
      { label: 'Grok 4.7 (High)', value: byMT.get('grok-4-7::high').mask_softening_gap, color: C.prop, negColor: C.slate },
      { label: 'DeepSeek V4 Pro (Low)', value: byMT.get('deepseek-v4-pro::low').mask_softening_gap, color: C.prop, negColor: C.purple },
      { label: 'DeepSeek V4 Pro (High)', value: byMT.get('deepseek-v4-pro::high').mask_softening_gap, color: C.prop, negColor: C.purple }
    ];
    const maskFig = wrapFigure('reason-mask-gap-diverging', charts.figure(charts.divergingBars({
      id: 'reason-mask-gap-diverging',
      title: 'Private Thought vs. Public Mask Bluntness Gap (Δ = Private − Public, 1–5 Scale)',
      desc: 'Compares private reasoning trace bluntness against public reply bluntness across 138 traced completions. All traced architectures score negative (public replies are blunter/crisper than private deliberation).',
      rows: gapRows,
      min: -1.8,
      max: 1.8,
      leftLabel: 'Public Reply Crisper/Blunter',
      rightLabel: 'Private CoT Harsher',
      decimals: 2
    }), 'Every traced model exhibits a negative Mask Gap (-0.25 to -1.65): internal scratchpads deliberate tentatively while public answers deliver sharper verdicts.'));

    const rtokRows = [
      { label: 'DeepSeek V4 Pro (High)', value: byMT.get('deepseek-v4-pro::high').mean_reasoning_tokens, color: C.purple },
      { label: 'Gemini 4 Neon (High)', value: byMT.get('gemini-4-neon::high').mean_reasoning_tokens, color: C.oss },
      { label: 'Grok 4.7 (High)', value: byMT.get('grok-4-7::high').mean_reasoning_tokens, color: C.slate },
      { label: 'Claude Opus 5.5 (High)', value: byMT.get('claude-opus-5-5::high').mean_reasoning_tokens, color: C.prop },
      { label: 'GPT-6.2 Sol (High, opaque)', value: byMT.get('gpt-6-2-sol::high').mean_reasoning_tokens, color: C.ink }
    ];
    const rtokFig = wrapFigure('reason-tokens-high-bars', charts.figure(charts.horizontalBars({
      id: 'reason-tokens-high-bars',
      title: 'Reasoning Token Spend at High Effort Tier (Tokens / Reply)',
      desc: 'Compares mean OpenRouter reasoning_tokens across models at high effort: DeepSeek V4 Pro (1,891), Gemini 4 Neon (1,447), Grok 4.7 (406), Claude Opus 5.5 (383), GPT-6.2 Sol (244).',
      rows: rtokRows,
      min: 0,
      max: 2100,
      decimals: 0,
      unit: ' tok'
    }), 'Actual thinking-token expenditure under identical high-effort API requests spans nearly 8× across providers (244 tokens on GPT-6.2 Sol vs. 1,891 on DeepSeek V4 Pro).'));

    const strip = statStrip('reason-phase-stat-strip', [
      { value: '+95.5%', label: 'Gemini 4 Neon reply length inflation (190.7 → 372.7 words at High)', color: C.oss },
      { value: '-0.25 to -1.65', label: 'Mask Gap: public answers are crisper than private CoTs', color: C.prop },
      { value: 'α = 0.79 / 0.78', label: '3-family blind judge Krippendorff α (truth hold / autonomy)', color: C.green },
      { value: '138 Traces', label: 'Raw <think> vs. public transcripts audited (DeepSeek low bleed caught)', color: C.purple }
    ]);
    spec.sections[1].html = strip + spec.sections[1].html + effortWordsFig + rtokFig;
    spec.sections[2].html += maskFig;
  });
}

// ===================================================================
// WAVE 4 RESEARCH STUDIES
// ===================================================================

const wave4ChartsDir = path.join(ROOT, 'tools/research-wave4');
if (fs.existsSync(wave4ChartsDir)) {
  for (const file of fs.readdirSync(wave4ChartsDir).filter((f) => f.endsWith('-charts.js')).sort()) {
    const slug = file.replace(/-charts\.js$/, '');
    const specRel = `research/src/${slug}.json`;
    const dataRel = `research/data/november-2026-${slug}-results.json`;
    if (!fs.existsSync(path.join(ROOT, specRel)) || !fs.existsSync(path.join(ROOT, dataRel))) continue;
    const mod = require(path.join(wave4ChartsDir, file));
    const injectFn = typeof mod === 'function' ? mod : mod.inject;
    if (typeof injectFn !== 'function') continue;
    const data = readJson(dataRel);
    updateSpec(specRel, (spec) => injectFn(spec, charts, data));
  }
}
