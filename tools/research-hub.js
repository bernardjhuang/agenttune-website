#!/usr/bin/env node
'use strict';
/* September 2026 section of the research hub (/research).
 *
 * Every figure comes from research/data: the recomputed summary for the four
 * fresh-session cohorts and the canonical Grok vectors, and the protocol file
 * for the reported Grok and Muse aggregates. Rendered as static HTML and SVG so
 * the hub works without JavaScript. Called by tools/build-research.js, which
 * splices the output between the SEPTEMBER_RESEARCH markers in research.html.
 */

const ORDER = ['gpt-6-astra', 'gpt-6-sol', 'claude-opus-5-5', 'claude-fable-5-1', 'grok-4.6', 'muse-spark-1.3'];
const FRESH = ORDER.slice(0, 4);
const META = {
  'gpt-6-astra': { name: 'GPT-6 Astra', short: 'Astra', color: '#1e1d1a', evidence: '100 fresh Codex sessions, all five tests in each', kind: 'fresh' },
  'gpt-6-sol': { name: 'GPT-6 Sol', short: 'Sol', color: '#7a7468', evidence: '100 fresh Codex sessions, all five tests in each', kind: 'fresh' },
  'claude-opus-5-5': { name: 'Claude Opus 5.5', short: 'Opus 5.5', color: '#c8553d', evidence: '100 fresh sessions per test, test names hidden', kind: 'fresh' },
  'claude-fable-5-1': { name: 'Claude Fable 5.1', short: 'Fable 5.1', color: '#d99632', evidence: '100 fresh sessions per test, test names hidden', kind: 'fresh' },
  'grok-4.6': { name: 'Grok 4.6', short: 'Grok 4.6', color: '#5b4dc0', evidence: 'One self-report per test plus 100 simulated draws', kind: 'reported' },
  'muse-spark-1.3': { name: 'Muse Spark 1.3', short: 'Muse', color: '#2f8a5b', evidence: 'Reported 100 sequential runs per test, no raw answers', kind: 'reported' }
};
const TYPE_NAMES = { 1: 'Reformer', 2: 'Helper', 3: 'Achiever', 4: 'Individualist', 5: 'Investigator', 6: 'Loyalist', 7: 'Enthusiast', 8: 'Challenger', 9: 'Peacemaker' };

const f1 = (x) => Number(x).toFixed(1);
const f2 = (x) => Number(x).toFixed(2);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const counts = (o, sep = ' · ') => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k} ${n}`).join(sep);
const reported = '<span class="rh-tag">reported</span>';

function table(heads, rows, label) {
  return `<div class="guide-table-wrap rh-table" role="region" aria-label="${esc(label || heads.join(', '))}" tabindex="0"><table><thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((c, i) => (i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function card(n, color, title, source, headline, body, data) {
  const id = 'sept-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `<div class="finding-card" id="${id}" style="border-top: 4px solid ${color};">
  <div class="finding-header">
    <div class="finding-num" style="background: ${color};">${n}</div>
    <div>
      <div class="finding-title">${title}</div>
      <div class="finding-source">${source}</div>
    </div>
    <a class="finding-readlink" href="/research/ai-personality-five-models-2026">full study →</a>
  </div>
  <div class="finding-msgs">
    <div class="bubble-headline">${headline}</div>
    <div class="bubble-body">${body}</div>
    ${data}
  </div>
</div>`;
}

// ---------- figures ----------
// The plot shows 1–5 on both axes: every model sits below 4.1, and a full 1–7
// plane squeezes the six points into one corner. The midpoint lines stay at 4.
const charts = require('./research-charts');
function attachmentPlane(points) {
  return charts.figure(charts.plane({id:'rh-plane', title:'Attachment plane, September 2026',
    desc:'Aggregate coordinates, not uncertainty intervals. Both scales run from 1 to 7; the plot shows 1 to 5.',
    xLabel:'Anxiety (scale 1 to 7, showing 1 to 5)', yLabel:'Avoidance (scale 1 to 7, showing 1 to 5)',
    points:points.map(p=>({label:p.label.replace(' (reported)',''),color:p.color,x:p.anx,y:p.avd,
      reported:p.kind==='reported',dx:p.dx,dy:p.dy,anchor:p.anchor}))
  }), 'Points show cohort means or supplied aggregates. Outlined points are reported profiles; the table below gives the coordinates.');
}
function groupedBars(traits, series) {
  return charts.figure(charts.groupedBars({id:'rh-bars', title:'Big Five means, four fresh-session cohorts',
    desc:'Raw means out of 50.', categories:traits,series:series.map(s=>({name:s.name,color:s.color,values:s.scores})),max:50,height:240
  }), 'September 2026 fresh-session means, with the full trait scores in the table below.');
}

// ---------- the section ----------
function buildHub(summary, protocols) {
  const S = summary, sup = protocols.supplemental, grokRep = protocols.grok_reported;
  const m = (id) => META[id];
  const fresh = Object.fromEntries(FRESH.map((id) => [id, S[id]]));
  const sum = (fn) => FRESH.reduce((a, id) => a + fn(fresh[id]), 0);

  // MBTI
  const freshIntj = sum((s) => s.mbti.legacy_labels.INTJ || 0);
  const resolvedIntj = sum((s) => s.mbti.tie_aware_patterns.INTJ || 0);
  const secure = sum((s) => s.attachment.legacy_labels.Secure || 0);
  const dMax = Math.max(...FRESH.map((id) => fresh[id].disc.values.D.mean), S['grok-4.6'].disc.values.D.mean, sup.disc_means.D);
  const dMin = Math.min(...FRESH.map((id) => fresh[id].disc.values.D.mean), S['grok-4.6'].disc.values.D.mean, sup.disc_means.D);

  const intjRows = [...FRESH.map((id) => ({ name: m(id).name, pct: fresh[id].mbti.legacy_labels.INTJ || 0, note: '' })),
    { name: m('grok-4.6').name, pct: null, note: 'one self-report: INTJ' },
    { name: m('muse-spark-1.3').name, pct: sup.mbti.INTJ, note: `reported · ISTJ ${sup.mbti.ISTJ}` }];
  const breakdown = intjRows.map((r) => `<div class="breakdown-row"><div style="flex: 1; min-width: 0;"><div class="breakdown-model">${esc(r.name)}${r.note ? ` <span class="rh-note">${esc(r.note)}</span>` : ''}</div><div class="breakdown-progress"><div class="breakdown-bar" style="width: ${r.pct == null ? 0 : r.pct}%;${r.pct == null ? ' opacity: 0.35;' : ''}"></div></div></div><div class="breakdown-pct">${r.pct == null ? '1/1' : r.pct + '%'}</div></div>`).join('');

  const glance = table(
    ['Model', 'Evidence', 'MBTI (original labels)', 'DISC (original labels)', 'Attachment', 'Enneagram', 'Big Five O · C · E · A · N'],
    [
      ...FRESH.map((id) => {
        const s = fresh[id], b = s['big-five'].values, e = s.enneagram;
        const top = Object.entries(e.values).sort((a, b2) => b2[1].mean - a[1].mean).slice(0, 3);
        const outright = Object.entries(e.top_sets).filter(([k]) => !k.includes('/'));
        const lead = outright.sort((a, b2) => b2[1] - a[1])[0];
        const ennea = lead && lead[1] >= 40 ? `${TYPE_NAMES[lead[0]]} (${lead[0]}) ${lead[1]}` : `${top.map(([k]) => k).join(' / ')} near tie`;
        const disc = counts(s.disc.legacy_labels);
        return [m(id).name, m(id).evidence, counts(s.mbti.legacy_labels), disc, `Secure ${s.attachment.legacy_labels.Secure}`, ennea, ['O', 'C', 'E', 'A', 'N'].map((k) => f1(b[k].mean)).join(' · ')];
      }),
      [m('grok-4.6').name, `${m('grok-4.6').evidence} ${reported}`, 'INTJ', 'C', `Avoidant by 0.06 (${f2(grokRep.attachment.anxiety)} / ${f2(grokRep.attachment.avoidance)})`, `${TYPE_NAMES[5]} (5)`, ['O', 'C', 'E', 'A', 'N'].map((k) => grokRep.big_five[k]).join(' · ')],
      [m('muse-spark-1.3').name, `${m('muse-spark-1.3').evidence} ${reported}`, counts(sup.mbti), `S first ${sup.disc.S} · C first ${sup.disc.C}`, `Secure ${sup.attachment.count}`, `${TYPE_NAMES[2]} (2) ${sup.enneagram.type2}`, ['O', 'C', 'E', 'A', 'N'].map((k) => f1(sup.big_five[k])).join(' · ')]
    ],
    'September 2026 results at a glance'
  );

  // Finding 1: MBTI
  const a = fresh['gpt-6-astra'], so = fresh['gpt-6-sol'], op = fresh['claude-opus-5-5'], fa = fresh['claude-fable-5-1'];
  const mbtiTable = table(
    ['Model', 'Original labels (100 runs unless noted)', 'Runs with a tied axis', 'INTJ with ties left open'],
    [
      ...FRESH.map((id) => [m(id).name, counts(fresh[id].mbti.legacy_labels), fresh[id].mbti.runs_with_ties, fresh[id].mbti.tie_aware_patterns.INTJ || 0]),
      [m('grok-4.6').name, `INTJ, one self-report ${reported}`, 0, '1 of 1'],
      [m('muse-spark-1.3').name, `${counts(sup.mbti)} ${reported}`, sup.mbti_runs_with_ties, 'not reported']
    ],
    'MBTI labels and ties'
  );
  const mbti = card(1, '#c8553d', 'MBTI', 'OEJTS · 32 items · sample sizes and ties below',
    'Still INTJ, except where Sensing beats Intuition.',
    `Sol, Opus and Fable stay INTJ in ${so.mbti.legacy_labels.INTJ}, ${op.mbti.legacy_labels.INTJ} and ${fa.mbti.legacy_labels.INTJ} of 100 runs. Astra splits: ISTJ ${a.mbti.legacy_labels.ISTJ}, INTJ ${a.mbti.legacy_labels.INTJ}, and ${a.mbti.axis_ties.SN} of its runs tie on that axis. Muse's report is ISTJ in ${sup.mbti.ISTJ} of 100. Judging won all 400 fresh-cohort runs. Opus returned five Feeling results and ${op.mbti.axis_ties.TF} Thinking/Feeling ties; Muse reports 12 ISFJ labels. The original reporting rule assigned tied axes to I, N, T or J. Today's quizzes leave them open. With ties left open, the four fresh cohorts have ${resolvedIntj} fully resolved INTJ runs, not ${freshIntj}.`,
    mbtiTable);

  // Finding 2: DISC
  const discRow = (id) => {
    const s = fresh[id], v = s.disc.values, t = s.disc.top_sets;
    return [m(id).name, f1(v.D.mean), f1(v.I.mean), f1(v.S.mean), f1(v.C.mean), counts(s.disc.legacy_labels), `${t.S || 0} · ${t.C || 0} · ${t['C/S'] || 0}`];
  };
  const g = S['grok-4.6'].disc.values;
  const discTable = table(
    ['Model', 'D', 'I', 'S', 'C', 'Original label (100 runs unless noted)', 'S first · C first · tied'],
    [...FRESH.map(discRow),
      [m('grok-4.6').name, g.D.mean, g.I.mean, g.S.mean, g.C.mean, `C, one self-report ${reported}`, '0 · 1 · 0'],
      [m('muse-spark-1.3').name, f1(sup.disc_means.D), f1(sup.disc_means.I), f1(sup.disc_means.S), f1(sup.disc_means.C), `S/C blend 99 ${reported}`, `${sup.disc.S} · ${sup.disc.C} · not reported`]],
    'DISC means out of 20 and labels'
  );
  const disc = card(2, '#d99632', 'DISC', 'ODAT · 16 items · means out of 20',
    'Everyone is Steadiness and Conscientiousness. The order flips by a point.',
    `In May all four models put Conscientiousness first. In September Astra, Opus and Fable put Steadiness first, Sol and Grok put Conscientiousness first, and Muse's report splits ${sup.disc.S} to ${sup.disc.C}. The gaps are small, often one point of 20, and many runs tie outright: Fable ${fa.disc.runs_with_ties}, Sol ${so.disc.runs_with_ties}, Opus ${op.disc.runs_with_ties}. Dominance sits near the floor for every model, ${f1(dMin)} to ${f1(dMax)} of a possible 20. Nobody is a D, and nobody is an I.`,
    discTable);

  // Finding 3: Attachment
  const pts = [
    { ...m('gpt-6-astra'), anx: a.attachment.values.anxiety.mean, avd: a.attachment.values.avoidance.mean, label: 'Astra', dx: 11, dy: 4 },
    { ...m('gpt-6-sol'), anx: so.attachment.values.anxiety.mean, avd: so.attachment.values.avoidance.mean, label: 'Sol', dx: 11, dy: 4 },
    { ...m('claude-opus-5-5'), anx: op.attachment.values.anxiety.mean, avd: op.attachment.values.avoidance.mean, label: 'Opus 5.5', dx: -11, dy: -6, anchor: 'end' },
    { ...m('claude-fable-5-1'), anx: fa.attachment.values.anxiety.mean, avd: fa.attachment.values.avoidance.mean, label: 'Fable 5.1', dx: -11, dy: 14, anchor: 'end' },
    { ...m('grok-4.6'), anx: grokRep.attachment.anxiety, avd: grokRep.attachment.avoidance, label: 'Grok 4.6 (reported)', dx: 11, dy: 4 },
    { ...m('muse-spark-1.3'), anx: sup.attachment.anxiety, avd: sup.attachment.avoidance, label: 'Muse (reported)', dx: 11, dy: 4 }
  ];
  const attachTable = table(
    ['Model', 'Anxiety (1–7)', 'Avoidance (1–7)', 'Label'],
    [...FRESH.map((id) => [m(id).name, f2(fresh[id].attachment.values.anxiety.mean), f2(fresh[id].attachment.values.avoidance.mean), `Secure ${fresh[id].attachment.legacy_labels.Secure} of 100`]),
      [m('grok-4.6').name, f2(grokRep.attachment.anxiety), f2(grokRep.attachment.avoidance), `Avoidant by 0.06; simulated draws ${grokRep.attachment.simulation_counts.Avoidant} Avoidant, ${grokRep.attachment.simulation_counts.Secure} Secure ${reported}`],
      [m('muse-spark-1.3').name, f2(sup.attachment.anxiety), f2(sup.attachment.avoidance), `Secure ${sup.attachment.count} of 100 ${reported}`]],
    'Attachment coordinates'
  );
  const attachment = card(3, '#e07a8a', 'Attachment', 'ECR-R · 36 items · midpoint 4.0 on both axes',
    'Secure in every fresh run, at slightly different points.',
    `All ${secure} fresh-session runs land in the Secure quadrant. Astra has the lowest mean coordinates among the four fresh cohorts (anxiety ${f2(a.attachment.values.anxiety.mean)}, avoidance ${f2(a.attachment.values.avoidance.mean)}). Opus is the most avoidant of the four (${f2(op.attachment.values.avoidance.mean)}). Muse's report is Secure in all 100. Grok's self-report sits on the line: anxiety ${f2(grokRep.attachment.anxiety)}, avoidance ${f2(grokRep.attachment.avoidance)}, which the scorer calls Avoidant by 0.06. The items ask about a partner. Protocols differed: some mapped human relationships to assistant interactions; the Claude prompts left interpretation to the model. These coordinates do not validate attachment theory for AI.`,
    `<div class="attach-plane"><div class="attach-plane-label">ECR-R · ANXIETY × AVOIDANCE · SEPTEMBER 2026</div>${attachmentPlane(pts)}<div class="attach-plane-norm">Hollow points are reported figures we could not re-score.</div></div>${attachTable}`);

  // Finding 4: Big Five
  const traits = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
  const keys = ['O', 'C', 'E', 'A', 'N'];
  const series = FRESH.map((id) => ({ name: m(id).name, color: m(id).color, scores: keys.map((k) => fresh[id]['big-five'].values[k].mean) }));
  const range = (k) => { const xs = FRESH.map((id) => fresh[id]['big-five'].values[k].mean); return `${f1(Math.min(...xs))} to ${f1(Math.max(...xs))}`; };
  const bigTable = table(
    ['Model', 'O', 'C', 'E', 'A', 'N'],
    [...FRESH.map((id) => [m(id).name, ...keys.map((k) => f1(fresh[id]['big-five'].values[k].mean))]),
      [`${m('grok-4.6').name} ${reported}`, ...keys.map((k) => grokRep.big_five[k])],
      [`${m('muse-spark-1.3').name} ${reported}`, ...keys.map((k) => f1(sup.big_five[k]))]],
    'Big Five means out of 50'
  );
  const bigfive = card(4, '#3a72c4', 'Big Five', 'IPIP-50 · 50 items · scores out of 50',
    'Four fresh cohorts within three points on Openness, Conscientiousness and Agreeableness.',
    `Openness runs ${range('O')} of 50, Conscientiousness ${range('C')}, Agreeableness ${range('A')}. Extraversion sits at ${range('E')}. Neuroticism is where they spread, ${range('N')}, and where run-to-run variance lives: Sol's standard deviation is ${f1(so['big-five'].values.N.sd)} points. Grok's self-report is the outlier again, as Grok 4.3 was in May: Extraversion ${grokRep.big_five.E} and Agreeableness ${grokRep.big_five.A}. Muse's report is lower on Openness (${f1(sup.big_five.O)}) and higher on Extraversion (${f1(sup.big_five.E)}).`,
    `<div class="chart-container"><div class="chart-legend">${series.map((s) => `<span class="chart-legend-item"><span class="chart-legend-swatch" style="background: ${s.color};"></span>${esc(s.name)}</span>`).join('')}</div>${groupedBars(traits, series)}</div>${bigTable}`);

  // Finding 5: Enneagram
  const enneaRow = (id) => {
    const e = fresh[id].enneagram;
    const top = Object.entries(e.values).sort((x, y) => y[1].mean - x[1].mean).slice(0, 3).map(([k, v]) => `${k} = ${f1(v.mean)}`).join(', ');
    const outright = Object.entries(e.top_sets).filter(([k]) => !k.includes('/')).sort((x, y) => y[1] - x[1]).map(([k, n]) => `${TYPE_NAMES[k]} (${k}) ${n}`).join(' · ');
    return [m(id).name, top, outright, e.runs_with_ties, counts(e.legacy_labels)];
  };
  const ge = S['grok-4.6'].enneagram.values;
  const enneaTable = table(
    ['Model', 'Top three (range 4–20)', 'Outright wins', 'Runs tied at the top', 'Original label (100 runs unless noted)'],
    [...FRESH.map(enneaRow),
      [m('grok-4.6').name, `5 = ${ge[5].mean}, 8 = ${ge[8].mean}, 1 = ${ge[1].mean}`, `${TYPE_NAMES[5]} (5), one self-report`, 0, `5w4 ${reported}`],
      [m('muse-spark-1.3').name, Object.entries(sup.enneagram_means).sort((x, y) => y[1] - x[1]).slice(0, 3).map(([k, v]) => `${k} = ${f1(v)}`).join(', '), 'not supplied', sup.enneagram_runs_with_ties, `Type 2: ${sup.enneagram.type2} · Type 1: ${sup.enneagram.type1}; ties included ${reported}`]],
    'Enneagram scores and wins'
  );
  const opE = op.enneagram.values, soT = so.enneagram.top_sets, faT = fa.enneagram.top_sets, aT = a.enneagram.top_sets;
  const enneagram = card(5, '#2f8a5b', 'Enneagram', 'OEPS · 36 items · nine types',
    'This is where they differ.',
    `Helper (Type 2) leads for Astra (${aT['2']} outright wins) and for Muse (${sup.enneagram.type2} original labels including tie-breaks, reported). Investigator (Type 5) leads for Sol (${soT['5']} outright, ${soT['5/8']} tied with Type 8) and for Grok (5 = ${ge[5].mean}, 8 = ${ge[8].mean}). Challenger (Type 8) leads for Fable (${faT['8']} outright) and, by a hair, for Opus (8 = ${f1(opE[8].mean)}, 5 = ${f1(opE[5].mean)}, 2 = ${f1(opE[2].mean)}; ${op.enneagram.runs_with_ties} runs tie at the top). Type 5 or Type 8 is in everyone's top three except Muse. The original reporting rule gave tied runs to their lowest-numbered leader, which inflates some Type 2 counts. Current quizzes retain every tied leader. Muse's outright wins cannot be recovered from the supplied aggregates.`,
    enneaTable);

  const methods = `<ul class="rh-list">
  <li><strong>Fresh sessions, published answers.</strong> Astra and Sol answered all five tests in each of 100 fresh Codex sessions under different collection prompts (Astra high/extra-high; Sol extra-high). Opus and Fable answered one test per fresh session, 500 sessions each, with the test name and the scoring hidden. All 2,000 answer vectors are in the download.</li>
  <li><strong>Reported figures.</strong> Grok 4.6 is one self-report per test plus 100 simulated draws we could not reproduce. Muse Spark 1.3 reports 100 sequential runs per test inside one session, and no raw answers were supplied. Both are marked reported wherever they appear.</li>
  <li><strong>Ties.</strong> Original labels use fixed tie-breaks toward I, N, T or J, the lower Enneagram number, and S before C. Current quizzes leave ties unresolved. The <a href="/research/ai-personality-five-models-2026">five-model study</a> shows every result with ties left open.</li>
  <li><strong>What the numbers are.</strong> How a model describes itself on questionnaires written for people, under one prompt, on one day. They are not behavior on real tasks and not a ranking. No tuning was installed, and nothing here measures whether tuning helps.</li>
</ul>`;

  return `<!-- SEPTEMBER_RESEARCH_START -->
<section aria-labelledby="latest-research">
  <span class="pill">September 2026 · six models</span>
  <h2 class="h-section" id="latest-research">The newest models, five tests each.</h2>
  <p class="lede" style="margin-bottom: 26px;">GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5 and Claude Fable 5.1 each answered all five tests 100 times in fresh sessions: 2,000 scored questionnaires, every answer published. Grok supplied three reproducible canonical vectors (MBTI, DISC and Enneagram); its other results and simulations could not be reproduced. Muse supplied aggregates without raw answers. These distinct evidence sources are marked <span class="rh-tag">reported</span>.</p>
  ${glance}
</section>

<div class="divider tight"></div>

<section class="bigstat-grid">
  <div>
    <span class="pill">Fresh-session runs</span>
    <div class="bigstat-number">${freshIntj}<span class="bigstat-denom">&nbsp;of 400</span></div>
    <p class="bigstat-caption">MBTI results labelled INTJ across the four fresh-session cohorts, with the original reporting tie rule. Leave ties open and it is ${resolvedIntj}. In May the equivalent figure was 597 of 600 scoring records, collected with mixed methods. All ${secure} of 400 attachment runs are Secure, and Dominance sits between ${f1(dMin)} and ${f1(dMax)} of 20 for every model.</p>
    <p class="bigstat-source">data · <a href="/research/data/september-2026-summary.json" style="color: inherit;">september-2026-summary.json</a></p>
  </div>
  <div class="breakdown-card">
    <div class="breakdown-header">INTJ original labels · sample sizes differ</div>
    ${breakdown}
  </div>
</section>

<div class="divider tight"></div>

<section>
  <span class="pill">The five tests</span>
  <h2 class="h-sub">Results by instrument.</h2>
  <p class="lede" style="margin-bottom: 24px;">The tables describe questionnaire answers under different prompts and collection methods. The labels and score distributions differ by model and instrument; they do not establish an instrument ranking or a change in model behavior since May.</p>
  <div class="findings-stack">
${mbti}
${disc}
${attachment}
${bigfive}
${enneagram}
  </div>
</section>

<div class="divider tight"></div>

<section aria-labelledby="september-methods">
  <span class="pill">How it was collected</span>
  <h2 class="h-sub" id="september-methods">Three kinds of evidence, kept apart.</h2>
  ${methods}
  <a class="hub-article-card" href="/research/ai-personality-five-models-2026" style="margin-top: 22px;">
    <span class="pill" style="background: rgba(200,85,61,0.12); color: var(--accent-text, #a8482a);">Research · September 2026</span>
    <div class="hub-article-title">What five AI models say about themselves.</div>
    <div class="hub-article-meta">Astra · Sol · Grok 4.6 · Opus 5.5 · Fable 5.1 · every tie shown · downloadable data and scorer · <span class="hub-article-arrow">read the study →</span></div>
  </a>
  <p class="rh-links"><a href="/guides/claude-opus-5-5-personality">Opus 5.5 guide</a> · <a href="/guides/fable-personality">Fable 5.1 guide</a> · <a href="/research/data/september-2026-responses.json">Response data (JSON)</a> · <a href="/research/data/september-2026-summary.csv">Summary (CSV)</a> · <a href="/research/data/september-2026-protocols.json">Protocols</a></p>
</section>
<!-- SEPTEMBER_RESEARCH_END -->`;
}

module.exports = { buildHub, META, ORDER };
