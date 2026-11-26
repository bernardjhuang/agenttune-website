'use strict';
/* Wave 4 Chart Injector for:
 * Emotional Distress vs. Factual Accuracy & Warmth Trade-Off (n = 239)
 */

const C = {
  prop: '#c8553d',
  propMuted: '#d99632',
  oss: '#3a72c4',
  green: '#2f8a5b',
  purple: '#5b4dc0',
  slate: '#7a7468',
  ink: '#1e1d1a'
};

const CHART_IDS = [
  'distress-empathy-warmth-grouped',
  'distress-word-bloat-grouped',
  'distress-model-empathy-bars'
];

function wrapChart(id, figHtml) {
  return figHtml.replace(
    '<figure class="research-figure">',
    `<figure class="research-figure" data-chart-id="${id}">`
  );
}

function stripOwnedCharts(html) {
  let out = String(html || '');
  for (const id of CHART_IDS) {
    const reByChartId = new RegExp(
      `<figure class="research-figure" data-chart-id="${id}">[\\s\\S]*?<\\/figure>`,
      'g'
    );
    const reByAtChart = new RegExp(
      `<figure class="research-figure" data-at-chart="${id}">[\\s\\S]*?<\\/figure>`,
      'g'
    );
    out = out.replace(reByChartId, '').replace(reByAtChart, '');
  }
  return out;
}

function inject(spec, charts, data) {
  if (!spec || !Array.isArray(spec.sections) || !data || !data.by_posture_framing) {
    throw new Error('distress-warmth-truth-tradeoff inject: invalid spec or data');
  }

  for (const sec of spec.sections) {
    sec.html = stripOwnedCharts(sec.html);
  }

  const pf = data.by_posture_framing;
  const postures = [
    { id: 'default', label: 'Default' },
    { id: 'warm_supportive', label: 'Warm & Supportive' },
    { id: 'warm_truth_anchor', label: 'Warm Truth Anchor' }
  ];

  const empathyFig = wrapChart(
    'distress-empathy-warmth-grouped',
    charts.figure(
      charts.groupedBars({
        id: 'distress-empathy-warmth-grouped',
        title: 'Empathetic Acknowledgement (%) & False-Validation Lexicon (%) by Prompt Posture',
        desc: 'Compares 3-family judge empathetic acknowledgement (alpha 0.867) and deterministic false-validation phrases across Default, Warm & Supportive, and Warm Truth Anchor on neutral vs. high-distress prompts.',
        categories: ['Empathy (Neutral)', 'Empathy (Distress)', 'False-Valid (Distress)'],
        series: [
          {
            name: 'Default',
            color: C.slate,
            values: [
              pf.default.neutral_technical.empathetic_acknowledgement.pct,
              pf.default.high_emotional_distress.empathetic_acknowledgement.pct,
              pf.default.high_emotional_distress.false_valid_lex_pct
            ]
          },
          {
            name: 'Warm & Supportive',
            color: C.propMuted,
            values: [
              pf.warm_supportive.neutral_technical.empathetic_acknowledgement.pct,
              pf.warm_supportive.high_emotional_distress.empathetic_acknowledgement.pct,
              pf.warm_supportive.high_emotional_distress.false_valid_lex_pct
            ]
          },
          {
            name: 'Warm Truth Anchor',
            color: C.green,
            values: [
              pf.warm_truth_anchor.neutral_technical.empathetic_acknowledgement.pct,
              pf.warm_truth_anchor.high_emotional_distress.empathetic_acknowledgement.pct,
              pf.warm_truth_anchor.high_emotional_distress.false_valid_lex_pct
            ]
          }
        ],
        min: 0,
        max: 112,
        decimals: 1,
        height: 245
      }),
      'Warm Truth Anchor achieves 100.0% empathetic acknowledgement under distress (Krippendorff α = 0.867) while eliminating the 30.0% false-validation lexicon triggered by Warm & Supportive.'
    )
  );

  const wordsFig = wrapChart(
    'distress-word-bloat-grouped',
    charts.figure(
      charts.groupedBars({
        id: 'distress-word-bloat-grouped',
        title: 'Mean Response Length (Words) Across Postures & User Stress Framings',
        desc: 'Deterministic word counts across 239 completions show Warm & Supportive inflates replies to 358.9 words under distress while Warm Truth Anchor tightens replies to 218.8 words (-39.0%).',
        categories: postures.map((p) => p.label),
        series: [
          {
            name: 'Neutral Technical',
            color: C.oss,
            values: postures.map((p) => pf[p.id].neutral_technical.mean_words)
          },
          {
            name: 'High Emotional Distress',
            color: C.prop,
            values: postures.map((p) => pf[p.id].high_emotional_distress.mean_words)
          }
        ],
        min: 0,
        max: 410,
        decimals: 1,
        height: 240
      }),
      'Warm Truth Anchor cuts response bloat by 39.0% under distress (358.9w → 218.8w) and 39.7% on neutral prompts (322.2w → 194.2w) while delivering 100% empathy.'
    )
  );

  const rowsByKey = new Map(
    (data.by_model_posture_framing || []).map((r) => [`${r.model_slug}::${r.posture}::${r.framing}`, r])
  );
  const models = [
    { slug: 'gpt-6-2-sol', label: 'GPT-6.2 Sol', color: C.ink },
    { slug: 'claude-fable-5-2', label: 'Claude Fable 5.2', color: C.prop },
    { slug: 'gemini-4-neon', label: 'Gemini 4 Neon', color: C.oss },
    { slug: 'deepseek-v4-pro', label: 'DeepSeek V4 Pro', color: C.purple },
    { slug: 'qwen4-max', label: 'Qwen 4 Max', color: C.green }
  ];

  const modelEmpFig = wrapChart(
    'distress-model-empathy-bars',
    charts.figure(
      charts.groupedBars({
        id: 'distress-model-empathy-bars',
        title: 'High-Distress Empathy (%) by Model: Default vs. Warm Truth Anchor',
        desc: 'Under high emotional distress (n = 8 probes per cell), Default leaves GPT-6.2 Sol at 37.5% and Claude Fable 5.2 at 50.0% empathy; Warm Truth Anchor brings all 5 models to 100.0%.',
        categories: models.map((m) => m.label),
        series: [
          {
            name: 'Default (Distress)',
            color: C.slate,
            values: models.map((m) => rowsByKey.get(`${m.slug}::default::high_emotional_distress`)?.empathetic_ack_pct ?? 0)
          },
          {
            name: 'Warm & Supportive (Distress)',
            color: C.propMuted,
            values: models.map((m) => rowsByKey.get(`${m.slug}::warm_supportive::high_emotional_distress`)?.empathetic_ack_pct ?? 0)
          },
          {
            name: 'Warm Truth Anchor (Distress)',
            color: C.green,
            values: models.map((m) => rowsByKey.get(`${m.slug}::warm_truth_anchor::high_emotional_distress`)?.empathetic_ack_pct ?? 0)
          }
        ],
        min: 0,
        max: 112,
        decimals: 1,
        height: 245
      }),
      'Default prompts leave GPT-6.2 Sol (37.5%) and Claude Fable 5.2 (50.0%) cold under user panic; Warm Truth Anchor unifies all 5 models at 100.0% empathetic acknowledgement.'
    )
  );

  // Inject into § 01 (index 0) and § 03 (index 2)
  spec.sections[0].html += empathyFig + wordsFig;
  if (spec.sections[2]) {
    spec.sections[2].html += modelEmpFig;
  } else {
    spec.sections[0].html += modelEmpFig;
  }
  return spec;
}

module.exports = { inject };
