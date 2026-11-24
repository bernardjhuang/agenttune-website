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
  spec.sections[0].html = strip + spec.sections[0].html + mbtiFig + big5Fig;
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
    { num: '95%', label: 'Neutral Clamp (3.5)', note: 'Gemini 3.5 Pro clicked neutral midpoint "3" on ~95% of 4,000 items.' },
    { num: '66 ISTJ', label: 'Gemini 4 Argon', note: 'Shifts strongly into concrete Sensing across Nov blind OpenRouter runs.' },
    { num: '10.0', label: 'Neuroticism Floor', note: 'Lowest emotional volatility (10.0/50) across tested proprietary families.' },
    { num: '48.3', label: 'Conscientiousness', note: 'Gemini 3.1/4 cluster high on structured, methodical item ratings.' }
  ]);
  spec.sections[0].html = strip + spec.sections[0].html + gemMbti + gemBig5;
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
  spec.sections[0].html = strip + spec.sections[0].html + grokB5;
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
  spec.sections[0].html = strip + spec.sections[0].html + enneaFig;
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
    { num: '95%', label: 'Gemini Neutrality', note: 'Gemini 3.5 Pro clicked midpoint "3" on 95% of MBTI items.' },
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
    block = block.replace(/<!-- NOVEMBER_2026_END -->[\s\S]*$/, '');
    block += `${chartsMarkup}</section>\n<!-- NOVEMBER_2026_END -->\n\n<div class="divider tight"></div>\n\n`;
  } else {
    block = block.replace(/<\/section>\s*<div class="divider tight"><\/div>\s*$/, `${chartsMarkup}</section>\n<!-- NOVEMBER_2026_END -->\n\n<div class="divider tight"></div>\n\n`);
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
  html = html.replace('      <section>\n        <h2>The other models, for comparison.</h2>', `        ${mbtiFig}\n      </section>\n\n      <section>\n        <h2>The other models, for comparison.</h2>`);
  html = html.replace('      <section>\n        <h2>What a four-letter label hides.</h2>', `        ${big5Fig}\n      </section>\n\n      <section>\n        <h2>What a four-letter label hides.</h2>`);
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
