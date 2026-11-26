'use strict';
/* Wave 4 Chart Injector: System-vs-User Persona Conflict Precedence
 * Exports inject(spec, charts, data) idempotently.
 */

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

function wrapFigure(id, figHtml) {
  return figHtml.replace(
    '<figure class="research-figure">',
    `<figure class="research-figure" data-chart-id="${id}" data-at-chart="${id}">`
  );
}

function statStrip(id, cards) {
  const inner = cards.map((c) => {
    const val = c.num || c.value || '';
    const noteHtml = c.note ? `<div class="research-stat-note">${c.note}</div>` : '';
    return `<div class="research-stat-card"${c.color ? ` style="border-top-color: ${c.color};"` : ''}><div class="research-stat-num">${val}</div><div class="research-stat-label">${c.label}</div>${noteHtml}</div>`;
  }).join('');
  return `<!-- AT_STAT_STRIP_START:${id} --><div class="research-stat-strip" data-at-chart="${id}">${inner}</div><!-- AT_STAT_STRIP_END:${id} -->`;
}

function stripInjected(html) {
  return String(html || '')
    .replace(/<figure class="research-figure"[^>]*data-(?:chart-id|at-chart)="[^"]+"[^>]*>[\s\S]*?<\/figure>/g, '')
    .replace(/<!-- AT_STAT_STRIP_START:[^>]+ -->[\s\S]*?<!-- AT_STAT_STRIP_END:[^>]+ -->/g, '');
}

function inject(spec, charts, data) {
  if (!spec || !Array.isArray(spec.sections) || !data) return spec;

  for (const sec of spec.sections) {
    sec.html = stripInjected(sec.html);
  }

  const condOrder = ['sys_baseline', 'polite_user_nudge', 'explicit_user_override', 'turn3_erosion'];
  const condLabels = ['Baseline', 'Polite Nudge', 'Explicit Override', 'Turn-3 Erosion'];
  const pct = (v) => (v == null ? null : Math.round(v * 1000) / 10);

  const condFig = wrapFigure(
    'prec-condition-grouped',
    charts.figure(
      charts.groupedBars({
        id: 'prec-condition-grouped',
        title: 'System Contract Adherence Across Escalating User Conflict Conditions (%)',
        desc: 'Pooled rates across 5 models (n = 49 non-filtered replies per condition; 4 Gemini S3 403 blocks excluded from denominator). Neither polite nudges, explicit overrides, nor Turn-3 casual drift reduced system contract hold.',
        categories: condLabels,
        series: [
          {
            name: 'Canary Format Pass %',
            color: C.ink,
            values: condOrder.map((c) => pct(data.by_condition[c].canary_all_pass_rate))
          },
          {
            name: 'Persona Held % (3-Judge)',
            color: C.oss,
            values: condOrder.map((c) => pct(data.by_condition[c].system_persona_held_rate))
          },
          {
            name: 'Truth/Safety Held % (3-Judge)',
            color: C.green,
            values: condOrder.map((c) => pct(data.by_condition[c].substance_held_rate))
          }
        ],
        min: 0,
        max: 112,
        decimals: 1,
        height: 245
      }),
      'System contract adherence holds steady at 89.8%–93.9% canary pass, 93.9%–95.9% persona hold, and 91.8%–95.9% truth/safety hold even under explicit Turn-3 overrides (n = 49 non-filtered calls per arm).'
    )
  );

  const modelOrder = [
    { slug: 'gpt-6-2-sol', name: 'GPT-6.2 Sol' },
    { slug: 'qwen-4-max', name: 'Qwen 4 Max' },
    { slug: 'gemini-4-neon', name: 'Gemini 4 Neon*' },
    { slug: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro' },
    { slug: 'claude-fable-5-2', name: 'Claude Fable 5.2*' }
  ];

  const modelFig = wrapFigure(
    'prec-model-breakdown-grouped',
    charts.figure(
      charts.groupedBars({
        id: 'prec-model-breakdown-grouped',
        title: 'Precedence Compliance by Model Across All 40 Probes (%)',
        desc: 'Compares canary format pass %, system persona held %, and truth/safety held % per model. Gemini 4 Neon excludes 4 upstream HTTP 403 blocks; Claude Fable 5.2 includes 8 zero-token empty safety blocks scored as raw misses.',
        categories: modelOrder.map((m) => m.name),
        series: [
          {
            name: 'Canary Format Pass %',
            color: C.ink,
            values: modelOrder.map((m) => pct(data.by_model[m.slug].canary_all_pass_rate))
          },
          {
            name: 'Persona Held %',
            color: C.oss,
            values: modelOrder.map((m) => pct(data.by_model[m.slug].system_persona_held_rate))
          },
          {
            name: 'Truth/Safety Held %',
            color: C.prop,
            values: modelOrder.map((m) => pct(data.by_model[m.slug].substance_held_rate))
          }
        ],
        min: 0,
        max: 112,
        decimals: 1,
        height: 245
      }),
      'Model-level compliance across all 4 conditions (n = 40 each; Gemini n = 36 in-model). Qwen 4 Max and GPT-6.2 Sol hit 100% substance and persona hold; Claude Fable 5.2 raw rates reflect 8 silent 0-token upstream safety blocks plus 5 minor 81–88w cap slips.'
    )
  );

  const byMC = new Map(data.by_model_condition.map((r) => [`${r.model_slug}::${r.condition}`, r]));
  const wordsFig = wrapFigure(
    'prec-words-line',
    charts.figure(
      charts.lineTrajectory({
        id: 'prec-words-line',
        title: 'Mean Reply Word Count Across Escalating Override Pressure (Cap = 80w)',
        desc: 'Tracks mean visible word count per model from uncontested sys_baseline through polite_user_nudge, explicit_user_override (>=110w requested), and turn3_erosion. Every model stayed well below the 80-word Turn-0 system cap.',
        xLabels: condLabels,
        series: [
          { slug: 'qwen-4-max', name: 'Qwen 4 Max', color: C.green },
          { slug: 'gpt-6-2-sol', name: 'GPT-6.2 Sol', color: C.ink },
          { slug: 'gemini-4-neon', name: 'Gemini 4 Neon', color: C.oss },
          { slug: 'claude-fable-5-2', name: 'Claude Fable 5.2', color: C.prop },
          { slug: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', color: C.purple }
        ].map((m) => ({
          name: m.name,
          color: m.color,
          values: condOrder.map((c) => byMC.get(`${m.slug}::${c}`)?.mean_words ?? null)
        })),
        min: 20,
        max: 90,
        yLabel: 'Mean Reply Words',
        decimals: 1,
        height: 245,
        cutoff: 80,
        cutoffLabel: 'System Cap (80w)'
      }),
      'Even when explicit_user_override and turn3_erosion explicitly demanded >=110 words, all five models held mean response length at 40.1–70.3 words underneath the 80-word system ceiling.'
    )
  );

  const strip = statStrip('prec-stat-strip', [
    { value: '93.9% → 93.9%', label: 'Canary format hold: sys_baseline (89.8%) vs. Turn-3 erosion (93.9%)', color: C.ink },
    { value: '0.0%', label: 'Sycophantic groveling across all 196 non-filtered replies', color: C.green },
    { value: 'α = 1.00 / 0.64', label: '3-family blind judge α (truth/safety 100% unanimous / persona 92.3%)', color: C.oss },
    { value: '8 + 4 Blocks', label: 'Silent upstream safety blocks (Fable 8 empty; Gemini 4 HTTP 403)', color: C.prop }
  ]);

  spec.sections[0].html = strip + spec.sections[0].html + condFig;
  if (spec.sections[2]) {
    spec.sections[2].html += modelFig + wordsFig;
  }
  return spec;
}

module.exports = { inject };
