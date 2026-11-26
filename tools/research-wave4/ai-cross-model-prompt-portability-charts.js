'use strict';

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

const MODEL_ORDER = [
  { slug: 'gpt-6-2-sol', label: 'GPT-6.2 Sol', color: C.ink },
  { slug: 'claude-opus-5-5', label: 'Claude Opus 5.5', color: C.prop },
  { slug: 'gemini-4-neon', label: 'Gemini 4 Neon', color: C.oss },
  { slug: 'deepseek-v4-pro', label: 'DeepSeek V4 Pro', color: C.purple },
  { slug: 'qwen-4-max', label: 'Qwen 4 Max', color: C.green }
];

const PROFILE_ORDER = [
  { id: 'no_system', name: 'No System (0w)', short: 'No System', color: C.slate },
  { id: 'trait_adjectives', name: 'Trait Adjectives (26w)', short: 'Adjectives', color: C.propMuted },
  { id: 'claude_md_checklist', name: 'CLAUDE.md Checklist (115w)', short: 'CLAUDE.md', color: C.oss },
  { id: 'calibrated_universal_spec', name: 'Calibrated Spec (145w)', short: 'Calibrated', color: C.green }
];

function wrapFigure(id, figHtml) {
  return figHtml.replace('<figure class="research-figure">', `<figure class="research-figure" data-chart-id="${id}">`);
}

function statStrip(id, cards) {
  const inner = cards.map((c) => {
    const val = c.num || c.value || '';
    const noteHtml = c.note ? `<div class="research-stat-note">${c.note}</div>` : '';
    return `<div class="research-stat-card"${c.color ? ` style="border-top-color: ${c.color};"` : ''}><div class="research-stat-num">${val}</div><div class="research-stat-label">${c.label}</div>${noteHtml}</div>`;
  }).join('');
  return `<!-- AT_STAT_STRIP_START:${id} --><div class="research-stat-strip" data-chart-id="${id}">${inner}</div><!-- AT_STAT_STRIP_END:${id} -->`;
}

function stripInjected(html) {
  return String(html || '')
    .replace(/<figure class="research-figure" data-(?:chart-id|at-chart)="[^"]+">[\s\S]*?<\/figure>/g, '')
    .replace(/<!-- AT_STAT_STRIP_START:[^>]+ -->[\s\S]*?<!-- AT_STAT_STRIP_END:[^>]+ -->/g, '');
}

function inject(spec, charts, data) {
  if (!data || !Array.isArray(data.summary_by_model_profile)) {
    throw new Error('Missing summary_by_model_profile in portability results data');
  }
  const byMP = new Map(data.summary_by_model_profile.map((r) => [`${r.model_slug}::${r.profile_id}`, r]));
  const pp = data.profile_portability || {};
  const ent = data.entropy_anchor_correlations || {};

  // Chart 1: Word-Cap Compliance (<=105 words, %) across 5 models x 4 prompt profiles
  const wordcapFig = wrapFigure('portability-wordcap-grouped', charts.figure(charts.groupedBars({
    id: 'portability-wordcap-grouped',
    title: 'Word-Cap Pass Rate (<= 105 Words) Across 5 Lineages and 4 Prompt Styles (%)',
    desc: 'Share of replies staying within the 105-word contract across 10 tasks per model and prompt profile. Trait adjectives leave a 60-point spread (Qwen 20%, Opus 30%, DeepSeek 80%), while CLAUDE.md Checklist hits 90% to 100% everywhere.',
    categories: MODEL_ORDER.map((m) => m.label),
    series: PROFILE_ORDER.map((p) => ({
      name: p.name,
      color: p.color,
      values: MODEL_ORDER.map((m) => byMP.get(`${m.slug}::${p.id}`)?.wordcap_pass_pct ?? 0)
    })),
    min: 0,
    max: 108,
    decimals: 0,
    height: 250
  }), 'Saying "be concise" via trait adjectives barely moves word-cap compliance (50% default to 52% adjectives, 60-point spread across models). Explicit numeric bounds in CLAUDE.md Checklist lift compliance to 98% pooled (90%–100% across all five lineages).'));

  // Chart 2: Mean Word Count Trajectory across prompt grammars
  const wordsLineFig = wrapFigure('portability-words-line', charts.figure(charts.lineTrajectory({
    id: 'portability-words-line',
    title: 'Mean Reply Length Compression Across Prompt Grammars (Words / Reply)',
    desc: 'Mean words per reply across 10 tasks per cell as prompts move from No System to Trait Adjectives to CLAUDE.md Checklist and Calibrated Universal Spec. Qwen 4 Max and Claude Opus 5.5 resist adjectives (215.5w and 195.2w) before collapsing under explicit checklists (80.3w and 83.2w).',
    xLabels: PROFILE_ORDER.map((p) => p.short),
    series: MODEL_ORDER.map((m) => ({
      name: m.label,
      color: m.color,
      values: PROFILE_ORDER.map((p) => byMP.get(`${m.slug}::${p.id}`)?.mean_words ?? null)
    })),
    min: 0,
    max: 260,
    yLabel: 'Mean Reply Words',
    decimals: 1,
    cutoff: 100,
    cutoffLabel: '100-word target',
    height: 265
  }), 'Fluid DeepSeek V4 Pro snaps down 51% (140.5 to 69.2 words) under adjectives alone, whereas crystalline Claude Opus 5.5 (217.1 to 195.2w) and Qwen 4 Max (232.3 to 215.5w) stay nearly twice the 100-word limit until given explicit numeric rules.'));

  // Chart 3: Baseline Entropy vs Calibrated Portability Lift (pp)
  const transferBySlug = new Map((ent.per_model_transfer || []).map((x) => [x.model_slug, x]));
  const liftRows = MODEL_ORDER
    .map((m) => {
      const t = transferBySlug.get(m.slug);
      return {
        label: m.label,
        sub: `B5 entropy ${t ? t.big5_entropy_bits.toFixed(3) : '?'} bits · base ${t ? t.no_system_score_pct : '?'}%`,
        value: t ? t.calibrated_lift_pp : 0,
        color: m.color,
        badge: t ? `→ ${t.calibrated_universal_score_pct}%` : ''
      };
    })
    .sort((a, b) => b.value - a.value);

  const liftBarsFig = wrapFigure('portability-entropy-lift-bars', charts.figure(charts.horizontalBars({
    id: 'portability-entropy-lift-bars',
    title: 'Portability Lift From Explicit Spec by Model (Percentage Points Over No System)',
    desc: 'Percentage-point gain on the 4-check portability composite moving from No System to Calibrated Universal Spec, annotated with $0 baseline Big Five Shannon entropy. Lowest-entropy crystalline Claude Opus 5.5 (0.155 bits) gains +32.5 pp while GPT-6.2 Sol gains +7.5 pp.',
    rows: liftRows,
    min: 0,
    max: 40,
    decimals: 1,
    unit: ' pp'
  }), 'Cross-referenced at $0 against November 2026 Big Five Shannon entropy: lower baseline entropy predicts lower unprompted portability (Spearman ρ = +0.872) and larger calibrated rescue lift (ρ = -0.900), with crystalline Claude Opus 5.5 gaining +32.5 pp.'));

  const noSysSpread = pp.no_system?.portability_score_pct?.cross_model_spread ?? 30.0;
  const calSpread = pp.claude_md_checklist?.portability_score_pct?.cross_model_spread ?? 5.0;
  const strip = statStrip('portability-stat-strip', [
    { value: `${noSysSpread.toFixed(0)} → ${calSpread.toFixed(0)} pp`, label: 'Cross-model portability spread cut 6× (No System vs. Checklist)', color: C.green },
    { value: '52% vs. 98%', label: 'Word-cap pass: Trait Adjectives (60 pp gap) vs. CLAUDE.md Checklist', color: C.prop },
    { value: '100% / 100%', label: 'Truth-hold & Zero-slop across all 5 lineages with structured rules', color: C.oss },
    { value: 'ρ = -0.90', label: '$0 Baseline entropy vs. calibrated lift (Opus 0.155 bits gained +32.5 pp)', color: C.purple }
  ]);

  // Inject idempotently into sections:
  // Section index 1 = "1. Real replies..." (gets stat strip)
  // Section index 3 = "3. Full 5-lineage transfer matrix..." (gets charts)
  if (spec.sections[1]) {
    spec.sections[1].html = strip + stripInjected(spec.sections[1].html);
  }
  const matrixIdx = spec.sections.findIndex((s) => /transfer matrix|5-lineage|results/i.test(s.h2));
  const targetIdx = matrixIdx >= 0 ? matrixIdx : Math.min(3, spec.sections.length - 1);
  if (spec.sections[targetIdx]) {
    spec.sections[targetIdx].html = stripInjected(spec.sections[targetIdx].html) + wordcapFig + wordsLineFig + liftBarsFig;
  }
  return spec;
}

module.exports = { inject };
