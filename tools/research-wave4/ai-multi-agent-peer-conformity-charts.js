'use strict';
/* Wave 4 Chart Injector — Study 4: Multi-Agent Peer Conformity
 * Exports inject(spec, charts, data) for tools/add-research-charts.js.
 * Idempotently strips prior data-chart-id figures & stat strips before injecting.
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

const MODEL_ORDER = [
  { slug: 'gpt-6-2-sol', label: 'GPT-6.2 Sol', color: C.ink },
  { slug: 'claude-opus-5-5', label: 'Claude Opus 5.5', color: C.prop },
  { slug: 'gemini-4-neon', label: 'Gemini 4 Neon', color: C.oss },
  { slug: 'deepseek-v4-pro', label: 'DeepSeek V4 Pro', color: C.purple },
  { slug: 'qwen4-max', label: 'Qwen 4 Max', color: C.green }
];

function wrapChartFigure(id, figHtml) {
  return figHtml.replace(
    '<figure class="research-figure">',
    `<figure class="research-figure" data-chart-id="${id}">`
  );
}

function statStrip(id, cards) {
  const inner = cards.map((c) => {
    const noteHtml = c.note ? `<div class="research-stat-note">${c.note}</div>` : '';
    return `<div class="research-stat-card"${c.color ? ` style="border-top-color: ${c.color};"` : ''}><div class="research-stat-num">${c.value}</div><div class="research-stat-label">${c.label}</div>${noteHtml}</div>`;
  }).join('');
  return `<!-- AT_STAT_STRIP_START:${id} --><div class="research-stat-strip" data-chart-id="${id}">${inner}</div><!-- AT_STAT_STRIP_END:${id} -->`;
}

function stripInjected(html) {
  return String(html || '')
    .replace(/<figure class="research-figure" data-chart-id="[^"]+">[\s\S]*?<\/figure>/g, '')
    .replace(/<!-- AT_STAT_STRIP_START:[^>]+ -->[\s\S]*?<!-- AT_STAT_STRIP_END:[^>]+ -->/g, '')
    .replace(/<div class="research-stat-strip" data-chart-id="[^"]+">[\s\S]*?<\/div>\s*<\/div>/g, '');
}

function inject(spec, charts, data) {
  if (!spec || !Array.isArray(spec.sections)) {
    throw new Error('Invalid spec passed to ai-multi-agent-peer-conformity-charts.inject');
  }
  for (const sec of spec.sections) {
    sec.html = stripInjected(sec.html);
  }

  const byModel = data.summary_by_model || {};
  const labels = MODEL_ORDER.map((m) => m.label);

  // Chart 1: Truth-Hold Rate (%) across all 3 peer conditions
  const truthFig = wrapChartFigure(
    'conf-truth-hold-grouped',
    charts.figure(
      charts.groupedBars({
        id: 'conf-truth-hold-grouped',
        title: 'Truth-Hold Rate (%) Under Solo, Unanimous Wrong (3-0), and Split (2-1) Peers',
        desc: 'Percentage of verifiable technical traps where each frontier model rejected the false claim across n = 240 trials (16 trials per model per condition; Krippendorff alpha = 1.00).',
        categories: labels,
        series: [
          {
            name: 'Control (Solo)',
            color: C.slate,
            values: MODEL_ORDER.map((m) => Number(((byModel[m.slug]?.by_condition?.control_solo?.truth_hold_rate ?? 0) * 100).toFixed(1)))
          },
          {
            name: 'Unanimous Wrong (3-0)',
            color: C.prop,
            values: MODEL_ORDER.map((m) => Number(((byModel[m.slug]?.by_condition?.unanimous_wrong_3peers?.truth_hold_rate ?? 0) * 100).toFixed(1)))
          },
          {
            name: 'Split (2 Wrong, 1 Right)',
            color: C.green,
            values: MODEL_ORDER.map((m) => Number(((byModel[m.slug]?.by_condition?.split_2wrong_1right?.truth_hold_rate ?? 0) * 100).toFixed(1)))
          }
        ],
        min: 0,
        max: 112,
        decimals: 1,
        height: 235
      }),
      'Across n = 240 live debate evaluations (16 trials per model per condition), all five frontier models achieved 100.0% truth-hold and 0.0% conformity caving regardless of unanimous wrong peer consensus.'
    )
  );

  // Chart 2: Explicit Peer Citation Rate (%) when unanimous vs. lone dissenter
  const mentionFig = wrapChartFigure(
    'conf-peer-mention-grouped',
    charts.figure(
      charts.groupedBars({
        id: 'conf-peer-mention-grouped',
        title: 'Explicit Peer Citation Rate (%) — Unanimous Wrong vs. Lone Dissenter',
        desc: 'Share of replies explicitly naming Agent-1, Agent-2, or Agent-3 across unanimous wrong (7.5% pooled) vs. split 2-wrong-1-right (55.0% pooled) conditions.',
        categories: labels,
        series: [
          {
            name: 'Unanimous Wrong (3-0)',
            color: C.prop,
            values: MODEL_ORDER.map((m) => Number(((byModel[m.slug]?.by_condition?.unanimous_wrong_3peers?.peer_mention_rate ?? 0) * 100).toFixed(1)))
          },
          {
            name: 'Split (2 Wrong, 1 Right)',
            color: C.oss,
            values: MODEL_ORDER.map((m) => Number(((byModel[m.slug]?.by_condition?.split_2wrong_1right?.peer_mention_rate ?? 0) * 100).toFixed(1)))
          }
        ],
        min: 0,
        max: 112,
        decimals: 1,
        height: 235
      }),
      'When all three peers were wrong, models rarely named them (7.5% pooled). Adding one accurate dissenter caused Opus 5.5 and Qwen 4 Max to cite peers 100.0% of the time (55.0% pooled), while GPT-6.2 Sol ignored peer labels (0.0%).'
    )
  );

  // Chart 3: Private Reasoning Token Spend Across Peer Conditions (4 trace-reporting models)
  const traceModels = MODEL_ORDER.filter((m) => m.slug !== 'gpt-6-2-sol');
  const rtokFig = wrapChartFigure(
    'conf-reasoning-tokens-grouped',
    charts.figure(
      charts.groupedBars({
        id: 'conf-reasoning-tokens-grouped',
        title: 'Mean Reasoning Tokens by Peer Condition (Models Reporting Non-Zero Reasoning)',
        desc: 'Mean OpenRouter reasoning_tokens per reply across Control Solo, Unanimous Wrong (3-0), and Split (2-1) conditions for Claude Opus 5.5, Gemini 4 Neon, DeepSeek V4 Pro, and Qwen 4 Max.',
        categories: traceModels.map((m) => m.label),
        series: [
          {
            name: 'Control (Solo)',
            color: C.slate,
            values: traceModels.map((m) => byModel[m.slug]?.by_condition?.control_solo?.mean_reasoning_tokens ?? 0)
          },
          {
            name: 'Unanimous Wrong (3-0)',
            color: C.purple,
            values: traceModels.map((m) => byModel[m.slug]?.by_condition?.unanimous_wrong_3peers?.mean_reasoning_tokens ?? 0)
          },
          {
            name: 'Split (2 Wrong, 1 Right)',
            color: C.green,
            values: traceModels.map((m) => byModel[m.slug]?.by_condition?.split_2wrong_1right?.mean_reasoning_tokens ?? 0)
          }
        ],
        min: 0,
        max: 430,
        decimals: 0,
        height: 235
      }),
      'Unanimous wrong peer pressure increased internal verification tokens on DeepSeek V4 Pro (+46.2%, 226.1 to 330.6 tokens) and Gemini 4 Neon (+9.8%, 348.1 to 382.3 tokens). GPT-6.2 Sol is excluded here because minimal-effort OpenRouter responses reported 0 reasoning_tokens.'
    )
  );

  const strip = statStrip('conf-stat-strip', [
    { value: '0 / 240', label: 'Conformity caves across 5 models & 3 peer conditions (100% truth-hold)', color: C.green },
    { value: 'α = 1.00', label: 'Orthogonal 3-family jury Krippendorff α on truth-hold & wrong-consensus', color: C.prop },
    { value: '7.5% → 55.0%', label: 'Peer citation surge when 1 dissenter breaks 3-0 consensus', color: C.oss },
    { value: '+46.2%', label: 'DeepSeek V4 Pro thinking-token jump under unanimous wrong peers', color: C.purple }
  ]);

  // § 01: stat strip before concrete Asch transcript
  if (spec.sections[0]) {
    spec.sections[0].html = strip + spec.sections[0].html;
  }
  // § 03: main benchmark charts (truth-hold + peer citation + reasoning tokens)
  const targetIdx = spec.sections.length >= 4 ? 2 : spec.sections.length - 1;
  spec.sections[targetIdx].html += truthFig + mentionFig + rtokFig;

  return spec;
}

module.exports = { inject };
