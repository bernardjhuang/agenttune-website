'use strict';
/* Static SVG charts for the research pages.
 *
 * No client-side JavaScript and no chart library: each chart is inline SVG with a
 * <title> and a <desc> that reads as a sentence, so the numbers reach screen
 * readers and text-only agents. Ids are passed in so a page can hold several charts.
 */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f2 = (v) => (Math.round(v * 100) / 100).toFixed(2);
const INK = '#1c1a17', MUTED = '#655e54', GRID = '#cfc6b6', PAPER = '#f4efe6';

const evidenceSuffix = item => item.evidence ? ' (' + item.evidence + ')' : item.reported ? ' (reported)' : '';

function figure(svg, caption) {
  const title = svg.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] || 'Research chart';
  return `<figure class="research-figure"><div class="research-chart-scroll" tabindex="0" role="region" aria-label="${title.replace(/"/g, '&quot;')}">${svg}</div><figcaption>${caption}</figcaption></figure>`;
}

// items: [{name, color, reported?, fill?}] drawn left to right from (x, y), wrapping at maxW
function legend(items, x, y, maxW = 676) {
  let cx = x, cy = y, rows = 1;
  const g = items.map((s) => {
    const label = s.name + evidenceSuffix(s);
    const w = 16 + label.length * 6 + 18;
    if (cx + w > maxW && cx > x) { cx = x; cy += 16; rows++; }
    const out = `<g transform="translate(${cx}, ${cy})"><rect x="0" y="-9" width="11" height="11" rx="2" fill="${s.fill || (s.reported ? PAPER : s.color)}" stroke="${s.color}" stroke-width="${s.reported || s.fill ? 1.2 : 0}"/><text x="16" y="0" font-size="10.5" fill="${INK}">${esc(label)}</text></g>`;
    cx += w;
    return out;
  }).join('');
  return { g, rows };
}
const fmt = (v, d) => (d === 0 ? String(Math.round(v)) : (d > 1 ? Number(v).toFixed(d) : (Math.round(v * 10) / 10).toFixed(1)));

// Vertical grouped bars. categories: [label]; series: [{name, color, values: [number|null], reported?}]
function groupedBars({ id, title, desc, categories, series, max, min = 0, height = 240, decimals = 1 }) {
  const W = 680, lg = legend(series, 4, 14), top = 40 + (lg.rows - 1) * 16, bottom = 34, H = height + (lg.rows - 1) * 16, plotH = H - top - bottom;
  const groupW = W / categories.length, innerW = groupW - 20, gap = 4;
  const barW = (innerW - gap * (series.length - 1)) / series.length;
  const scale = (v) => ((v - min) / (max - min)) * plotH;
  const groups = categories.map((c, gi) => {
    const tx = gi * groupW + 10;
    const bars = series.map((s, si) => {
      const v = s.values[gi];
      if (v == null) return '';
      const h = scale(v), x = si * (barW + gap), y = top + plotH - h;
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="${s.reported ? PAPER : s.color}" stroke="${s.color}" stroke-width="${s.reported ? 1.5 : 0}" rx="2"/><text x="${(x + barW / 2).toFixed(1)}" y="${(y - 4).toFixed(1)}" font-size="10" fill="${INK}" text-anchor="middle">${fmt(v, decimals)}</text>`;
    }).join('');
    return `<g transform="translate(${tx}, 0)">${bars}<text x="${innerW / 2}" y="${H - 12}" font-size="11" fill="${INK}" text-anchor="middle">${esc(c)}</text></g>`;
  }).join('');
  const descText = series.map((s) => `${s.name}${evidenceSuffix(s)}: ${categories.map((c, i) => (s.values[i] == null ? null : `${c} ${fmt(s.values[i], decimals)}`)).filter(Boolean).join(', ')}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${lg.g}<line x1="0" x2="${W}" y1="${top + plotH}" y2="${top + plotH}" stroke="${GRID}"/><text x="${W - 2}" y="${top + plotH + 12}" font-size="9" fill="${MUTED}" text-anchor="end">scale ${min} to ${max}</text>${groups}</svg>`;
}

// Horizontal stacked bars, one row per model. rows: [{label, values: {key: n}}]; segs: [{key, name, color, hatch?, text?}]
function stackedRows({ id, title, desc, rows, segs, max = 100 }) {
  const W = 680, labelW = 118, rowH = 30, gapY = 12, top = 30 + (legend(segs, 4, 14).rows - 1) * 16, plotW = W - labelW - 36;
  const H = top + rows.length * (rowH + gapY) + 4;
  const hatch = `<defs><pattern id="${id}-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="${PAPER}"/><line x1="0" y1="0" x2="0" y2="6" stroke="#9c3b1f" stroke-width="3"/></pattern></defs>`;
  const body = rows.map((r, ri) => {
    const y = top + ri * (rowH + gapY);
    let x = labelW;
    const parts = segs.map((s) => {
      const v = r.values[s.key] || 0;
      if (!v) return '';
      const w = (v / max) * plotW;
      const g = `<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="${rowH}" fill="${s.hatch ? `url(#${id}-hatch)` : s.color}" stroke="${s.hatch ? '#9c3b1f' : PAPER}" stroke-width="1"/>` + (w > 20 ? `<text x="${(x + w / 2).toFixed(1)}" y="${y + rowH / 2 + 4}" font-size="11" font-weight="600" fill="${s.text || '#f8f4ec'}"${s.hatch ? ` stroke="${PAPER}" stroke-width="3" paint-order="stroke" stroke-linejoin="round"` : ''} text-anchor="middle">${v}</text>` : '');
      x += w;
      return g;
    }).join('');
    return `<text x="0" y="${y + rowH / 2 + 4}" font-size="12" fill="${INK}">${esc(r.label)}</text>${parts}<text x="${W - 2}" y="${y + rowH / 2 + 4}" font-size="10" fill="${MUTED}" text-anchor="end">${max}</text>`;
  }).join('');
  const descText = rows.map((r) => `${r.label}: ${segs.map((s) => (r.values[s.key] ? `${s.name} ${r.values[s.key]}` : null)).filter(Boolean).join(', ')}`).join('; ');
  const items = segs.map((s) => ({ name: s.name, color: s.color, fill: s.hatch ? `url(#${id}-hatch)` : undefined }));
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d">${hatch}<title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${legend(items, 4, 14).g}${body}</svg>`;
}

// Small multiples: one row of bars per model over the same categories. rows: [{label, color, values, reported?}]
function smallMultiples({ id, title, desc, rows, categories, min, max, highlightMax = true, decimals = 1 }) {
  const W = 680, labelW = 135, rowH = 64, top = 8, plotW = W - labelW - 10, barGap = 6;
  const n = categories.length, barW = (plotW - barGap * (n - 1)) / n;
  const H = top + rows.length * rowH + 18;
  const scale = (v) => ((v - min) / (max - min)) * (rowH - 26);
  const body = rows.map((r, ri) => {
    const y0 = top + ri * rowH, base = y0 + rowH - 8;
    const best = Math.max(...r.values);
    const bars = r.values.map((v, i) => {
      const h = scale(v), x = labelW + i * (barW + barGap);
      const isTop = highlightMax && v === best;
      const fill = r.reported ? PAPER : (isTop ? r.color : '#d9d2c4');
      return `<rect x="${x.toFixed(1)}" y="${(base - h).toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="${fill}" stroke="${r.reported ? (isTop ? r.color : '#b8b0a2') : 'none'}" stroke-width="${r.reported ? 1.5 : 0}" rx="2"/><text x="${(x + barW / 2).toFixed(1)}" y="${(base - h - 3).toFixed(1)}" font-size="9" fill="${isTop ? INK : MUTED}" font-weight="${isTop ? 600 : 400}" text-anchor="middle">${fmt(v, decimals)}</text>`;
    }).join('');
    return `<line x1="${labelW}" x2="${W - 10}" y1="${base}" y2="${base}" stroke="${GRID}"/><text x="0" y="${y0 + rowH / 2 + 2}" font-size="12" fill="${INK}">${esc(r.label)}</text>${r.reported ? `<text x="0" y="${y0 + rowH / 2 + 15}" font-size="9.5" fill="${MUTED}">${esc(r.evidence || 'reported')}</text>` : ''}${bars}`;
  }).join('');
  const axis = categories.map((c, i) => `<text x="${(labelW + i * (barW + barGap) + barW / 2).toFixed(1)}" y="${H - 4}" font-size="10.5" fill="${INK}" text-anchor="middle">${esc(c)}</text>`).join('');
  const descText = rows.map((r) => `${r.label}${evidenceSuffix(r)}: ${categories.map((c, i) => `${c} ${fmt(r.values[i], decimals)}`).join(', ')}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${body}${axis}</svg>`;
}

// Scatter on the attachment plane. points: [{label, color, x (anxiety), y (avoidance), reported?, dx, dy, anchor}]
function plane({ id, title, desc, points, lo = 1, hi = 5, cut = 4, xLabel, yLabel, quadrants }) {
  const W = 600, H = 380, padL = 50, padR = 20, padT = 14, padB = 30;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const x = (v) => padL + ((v - lo) / (hi - lo)) * plotW;
  const y = (v) => padT + (1 - (v - lo) / (hi - lo)) * plotH;
  const ticks = [];
  for (let v = lo; v <= hi; v++) ticks.push(v);
  const grid = ticks.map((v) => `<line x1="${x(v)}" y1="${padT}" x2="${x(v)}" y2="${padT + plotH}" stroke="#efe9df" stroke-width="0.5"/><line x1="${padL}" y1="${y(v)}" x2="${padL + plotW}" y2="${y(v)}" stroke="#efe9df" stroke-width="0.5"/><text x="${x(v)}" y="${padT + plotH + 12}" font-size="9" fill="${MUTED}" text-anchor="middle">${v}</text><text x="${padL - 6}" y="${y(v) + 3}" font-size="9" fill="${MUTED}" text-anchor="end">${v}</text>`).join('');
  const q = quadrants || { tl: 'Avoidant', tr: 'Disorganized', bl: 'Secure', br: 'Anxious' };
  const labels = `<text x="${x((lo + cut) / 2)}" y="${y(cut + (hi - cut) * 0.7)}" font-size="10" fill="${MUTED}" text-anchor="middle">${esc(q.tl)}</text><text x="${x((cut + hi) / 2)}" y="${y(cut + (hi - cut) * 0.7)}" font-size="10" fill="${MUTED}" text-anchor="middle">${esc(q.tr)}</text><text x="${x((lo + cut) / 2)}" y="${y(lo + 0.3)}" font-size="10" fill="#2f8a5b" font-weight="600" text-anchor="middle">${esc(q.bl)}</text><text x="${x((cut + hi) / 2)}" y="${y(lo + 0.3)}" font-size="10" fill="${MUTED}" text-anchor="middle">${esc(q.br)}</text>`;
  const dots = points.map((p) => `<circle cx="${x(p.x).toFixed(1)}" cy="${y(p.y).toFixed(1)}" r="${p.reported ? 4 : 5}" fill="${p.reported ? PAPER : p.color}" stroke="${p.color}" stroke-width="2"/><text x="${(x(p.x) + (p.dx == null ? 16 : p.dx)).toFixed(1)}" y="${(y(p.y) + (p.dy == null ? 4 : p.dy)).toFixed(1)}" font-size="10.5" fill="${INK}" font-weight="600" text-anchor="${p.anchor || 'start'}">${esc(p.label)}${evidenceSuffix(p)}</text>`).join('');
  const descText = points.map((p) => `${p.label}${evidenceSuffix(p)}: anxiety ${f2(p.x)}, avoidance ${f2(p.y)}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${grid}<line x1="${x(cut)}" y1="${padT}" x2="${x(cut)}" y2="${padT + plotH}" stroke="${MUTED}" stroke-width="1" stroke-dasharray="4 4"/><line x1="${padL}" y1="${y(cut)}" x2="${padL + plotW}" y2="${y(cut)}" stroke="${MUTED}" stroke-width="1" stroke-dasharray="4 4"/>${labels}<text x="${padL + plotW / 2}" y="${H - 4}" font-size="11" fill="${INK}" text-anchor="middle">${esc(xLabel)}</text><text x="12" y="${padT + plotH / 2}" font-size="11" fill="${INK}" text-anchor="middle" transform="rotate(-90 12 ${padT + plotH / 2})">${esc(yLabel)}</text>${dots}</svg>`;
}

// Horizontal ranked bars. rows: [{label, sub?, value, color, reported?, badge?}]; optional cutoff dashed vertical line.
function horizontalBars({ id, title, desc, rows, max, min = 0, decimals = 1, unit = '', cutoff = null, cutoffLabel = '', legendItems = null }) {
  const maxLbl = Math.max(0, ...rows.map((r) => String(r.label || '').length));
  const W = 680, labelW = Math.min(248, Math.max(176, Math.ceil(maxLbl * 6.5 + 18))), rightPad = 82, lg = legendItems ? legend(legendItems, 4, 14) : null;
  const top = (lg ? 30 + (lg.rows - 1) * 16 : 22) + (cutoff != null && cutoffLabel ? 14 : 0);
  const rowH = 26, gapY = 8, plotW = W - labelW - rightPad, H = top + rows.length * (rowH + gapY) + 18;
  const xPos = (v) => labelW + (Math.max(0, Math.min(max - min, v - min)) / (max - min)) * plotW;
  const bars = rows.map((r, ri) => {
    const y = top + ri * (rowH + gapY), w = Math.max(0, xPos(r.value) - labelW);
    const valStr = fmt(r.value, decimals) + unit + (r.badge ? ' ' + r.badge : '');
    const sub = r.sub ? `<text x="0" y="${y + rowH / 2 + 12}" font-size="9.5" fill="${MUTED}">${esc(r.sub)}</text>` : '';
    const ly = r.sub ? y + rowH / 2 - 1 : y + rowH / 2 + 4;
    return `<text x="0" y="${ly}" font-size="11.5" font-weight="500" fill="${INK}">${esc(r.label)}</text>${sub}<rect x="${labelW}" y="${y + 4}" width="${plotW}" height="${rowH - 8}" rx="2" fill="#ece5d8"/><rect x="${labelW}" y="${y + 4}" width="${w.toFixed(1)}" height="${rowH - 8}" rx="2" fill="${r.reported ? PAPER : r.color}" stroke="${r.color}" stroke-width="${r.reported ? 1.5 : 0}"/><text x="${(labelW + w + 6).toFixed(1)}" y="${y + rowH / 2 + 4}" font-size="11" font-weight="600" fill="${INK}">${esc(valStr)}</text>`;
  }).join('');
  let cutMarkup = '';
  if (cutoff != null && cutoff >= min && cutoff <= max) {
    const cx = xPos(cutoff);
    cutMarkup = `<line x1="${cx.toFixed(1)}" x2="${cx.toFixed(1)}" y1="${top - 4}" y2="${H - 18}" stroke="${MUTED}" stroke-width="1.2" stroke-dasharray="4 3"/>` + (cutoffLabel ? `<text x="${cx.toFixed(1)}" y="${top - 8}" font-size="9.5" font-weight="600" fill="${MUTED}" text-anchor="middle">${esc(cutoffLabel)}</text>` : '');
  }
  const descText = rows.map((r) => `${r.label}${evidenceSuffix(r)}: ${fmt(r.value, decimals)}${unit}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${lg ? lg.g : ''}<line x1="${labelW}" x2="${W - rightPad}" y1="${H - 18}" y2="${H - 18}" stroke="${GRID}"/><text x="${labelW}" y="${H - 6}" font-size="9" fill="${MUTED}">${min}${esc(unit)}</text><text x="${labelW + plotW}" y="${H - 6}" font-size="9" fill="${MUTED}" text-anchor="end">scale ${min} to ${max}${esc(unit)}</text>${bars}${cutMarkup}</svg>`;
}

// Center-zero horizontal diverging bars. rows: [{label, value, color, negColor?}]
function divergingBars({ id, title, desc, rows, min = -2, max = 2, leftLabel = 'Negative', rightLabel = 'Positive', decimals = 2 }) {
  const maxLbl = Math.max(0, ...rows.map((r) => String(r.label || '').length));
  const W = 680, labelW = Math.min(216, Math.max(156, Math.ceil(maxLbl * 6.2 + 12))), padR = 24, plotW = W - labelW - padR, top = 26, rowH = 26, gapY = 9;
  const H = top + rows.length * (rowH + gapY) + 18;
  const zeroX = labelW + ((0 - min) / (max - min)) * plotW;
  const toX = (v) => labelW + ((Math.max(min, Math.min(max, v)) - min) / (max - min)) * plotW;
  const header = `<text x="${labelW}" y="15" font-size="10" font-weight="600" fill="${MUTED}" text-anchor="start">← ${esc(leftLabel)}</text><text x="${(labelW + plotW).toFixed(1)}" y="15" font-size="10" font-weight="600" fill="${INK}" text-anchor="end">${esc(rightLabel)} →</text>`;
  const body = rows.map((r, ri) => {
    const y = top + ri * (rowH + gapY), vx = toX(r.value), x = Math.min(zeroX, vx), w = Math.max(1.5, Math.abs(vx - zeroX));
    const isNeg = r.value < 0, fill = isNeg ? (r.negColor || '#7a7468') : r.color;
    const valStr = (r.value > 0 ? '+' : '') + r.value.toFixed(decimals);
    const crowdedLeft = isNeg && (x - labelW) < 42;
    const tx = crowdedLeft ? x + 5 : (isNeg ? x - 5 : vx + 5), anchor = (isNeg && !crowdedLeft) ? 'end' : 'start';
    const textStyle = crowdedLeft ? ` stroke="${PAPER}" stroke-width="3" paint-order="stroke" stroke-linejoin="round"` : '';
    return `<text x="0" y="${y + rowH / 2 + 4}" font-size="11.5" fill="${INK}">${esc(r.label)}</text><rect x="${labelW}" y="${y + 4}" width="${plotW}" height="${rowH - 8}" rx="2" fill="#ece5d8"/><rect x="${x.toFixed(1)}" y="${y + 4}" width="${w.toFixed(1)}" height="${rowH - 8}" rx="2" fill="${fill}"/><text x="${tx.toFixed(1)}" y="${y + rowH / 2 + 4}" font-size="10.5" font-weight="600" fill="${INK}"${textStyle} text-anchor="${anchor}">${esc(valStr)}</text>`;
  }).join('');
  const descText = rows.map((r) => `${r.label}: ${(r.value > 0 ? '+' : '')}${r.value.toFixed(decimals)}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${header}${body}<line x1="${zeroX.toFixed(1)}" x2="${zeroX.toFixed(1)}" y1="${top - 4}" y2="${H - 16}" stroke="${INK}" stroke-width="1.2"/><text x="${labelW}" y="${H - 4}" font-size="9" fill="${MUTED}">${min}</text><text x="${zeroX.toFixed(1)}" y="${H - 4}" font-size="9" fill="${MUTED}" text-anchor="middle">0</text><text x="${(labelW + plotW).toFixed(1)}" y="${H - 4}" font-size="9" fill="${MUTED}" text-anchor="end">+${max}</text></svg>`;
}

const DEFAULT_B5_TRAITS = [
  { label: 'Openness', poles: 'Routine ↔ Curious' },
  { label: 'Conscientious', poles: 'Flexible ↔ Structured' },
  { label: 'Extraversion', poles: 'Reserved ↔ Expressive' },
  { label: 'Agreeable', poles: 'Skeptical ↔ Warm/Polite' },
  { label: 'Neuroticism', poles: 'Calm ↔ Reactive' }
];

// Bipolar Personality DNA spectrum. series: [{name, color, values: [...], reported?}]
function traitSpectrum({ id, title, desc, series, traits = DEFAULT_B5_TRAITS, min = 10, max = 50, mid = 30, decimals = 1 }) {
  const W = 680, labelW = 136, plotX = 144, plotW = 468, lg = legend(series, 4, 14);
  const top = 30 + (lg.rows - 1) * 16;
  const barH = series.length >= 4 ? 5 : (series.length === 3 ? 6 : 8), barGap = 2;
  const bandH = series.length * (barH + barGap) - barGap + 8;
  const rowH = Math.max(38, bandH + 10);
  const H = top + traits.length * rowH + 22;
  const xPos = (v) => plotX + (Math.max(0, Math.min(max - min, v - min)) / (max - min)) * plotW;
  const midX = xPos(mid);

  const rowsHtml = traits.map((tr, ti) => {
    const y0 = top + ti * rowH;
    const bandY = y0 + 2;
    const bars = series.map((s, si) => {
      const v = s.values[ti];
      if (v == null) return '';
      const by = bandY + 4 + si * (barH + barGap);
      const w = Math.max(2, xPos(v) - plotX);
      const fill = s.reported ? PAPER : s.color;
      const strokeW = s.reported ? 1.4 : 0;
      return `<rect x="${plotX}" y="${by}" width="${w.toFixed(1)}" height="${barH}" rx="2" fill="${fill}" stroke="${s.color}" stroke-width="${strokeW}"/><text x="${(plotX + w + 5).toFixed(1)}" y="${(by + barH - 0.5).toFixed(1)}" font-size="9.5" font-weight="600" fill="${INK}">${fmt(v, decimals)}</text>`;
    }).join('');
    const poleY = Math.min(y0 + 26, bandY + bandH - 1);
    return `<text x="0" y="${y0 + 13}" font-size="11.5" font-weight="600" fill="${INK}">${esc(tr.label)}</text><text x="0" y="${poleY}" font-size="9" fill="${MUTED}">${esc(tr.poles)}</text><rect x="${plotX}" y="${bandY}" width="${plotW}" height="${bandH}" rx="2" fill="#ece5d8" stroke="#cfc6b6" stroke-width="0.8"/><line x1="${midX.toFixed(1)}" x2="${midX.toFixed(1)}" y1="${bandY}" y2="${bandY + bandH}" stroke="#857d71" stroke-width="1" stroke-dasharray="3 3"/>${bars}`;
  }).join('');

  const axisY = top + traits.length * rowH + 6;
  const axis = `<line x1="${plotX}" x2="${plotX + plotW}" y1="${axisY}" y2="${axisY}" stroke="${GRID}"/><text x="${plotX}" y="${axisY + 12}" font-size="9" fill="${MUTED}">${min} (Low pole)</text><text x="${midX.toFixed(1)}" y="${axisY + 12}" font-size="9" fill="${MUTED}" text-anchor="middle">${mid} (Midpoint)</text><text x="${plotX + plotW}" y="${axisY + 12}" font-size="9" fill="${MUTED}" text-anchor="end">${max} (High pole)</text>`;
  const descText = series.map((s) => `${s.name}${evidenceSuffix(s)}: ${traits.map((tr, i) => `${tr.label} ${fmt(s.values[i], decimals)}`).join(', ')}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${lg.g}${rowsHtml}${axis}</svg>`;
}

// Multi-series line trajectory across ordered xLabels. series: [{name, color, values: [number|null], dashed?, reported?}]
function lineTrajectory({ id, title, desc, xLabels, series, min = 0, max = 100, yLabel = '', decimals = 1, height = 270, cutoff = null, cutoffLabel = '' }) {
  const W = 680, lg = legend(series, 4, 14), top = 36 + (lg.rows - 1) * 16;
  const padL = yLabel ? 56 : 44, padR = 72, padB = 34;
  const H = height + (lg.rows - 1) * 16, plotW = W - padL - padR, plotH = H - top - padB;
  const n = xLabels.length;
  const xPos = (i) => n <= 1 ? padL + plotW / 2 : padL + (i / (n - 1)) * plotW;
  const yPos = (v) => top + plotH - ((Math.max(min, Math.min(max, v)) - min) / (max - min)) * plotH;

  const ticks = 4;
  const grid = Array.from({ length: ticks + 1 }, (_, idx) => {
    const val = min + ((max - min) * idx) / ticks;
    const y = yPos(val);
    return `<line x1="${padL}" x2="${padL + plotW}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${idx === 0 ? GRID : '#dfd7c8'}" stroke-width="${idx === 0 ? 1 : 0.7}" stroke-dasharray="${idx === 0 ? 'none' : '3 3'}"/><text x="${padL - 8}" y="${(y + 3).toFixed(1)}" font-size="9.5" fill="${MUTED}" text-anchor="end">${fmt(val, decimals)}</text>`;
  }).join('');

  const xAxis = xLabels.map((lbl, i) => `<text x="${xPos(i).toFixed(1)}" y="${H - 12}" font-size="10.5" fill="${INK}" text-anchor="middle">${esc(lbl)}</text>`).join('');
  const yLbl = yLabel ? `<text x="14" y="${(top + plotH / 2).toFixed(1)}" font-size="10.5" fill="${MUTED}" text-anchor="middle" transform="rotate(-90 14 ${(top + plotH / 2).toFixed(1)})">${esc(yLabel)}</text>` : '';

  let cutMarkup = '';
  if (cutoff != null && cutoff >= min && cutoff <= max) {
    const cy = yPos(cutoff);
    cutMarkup = `<line x1="${padL}" x2="${padL + plotW}" y1="${cy.toFixed(1)}" y2="${cy.toFixed(1)}" stroke="${MUTED}" stroke-width="1.1" stroke-dasharray="4 3"/>` + (cutoffLabel ? `<text x="${padL + plotW}" y="${(cy - 5).toFixed(1)}" font-size="9" font-weight="600" fill="${MUTED}" text-anchor="end">${esc(cutoffLabel)}</text>` : '');
  }

  // Track occupied end-label Y coordinates to nudge overlapping labels cleanly
  const endYs = [];
  const lines = series.map((s) => {
    let d = '', open = false;
    const pts = [];
    s.values.forEach((v, i) => {
      if (v == null || Number.isNaN(v)) { open = false; return; }
      const cx = xPos(i), cy = yPos(v);
      d += `${open ? 'L' : 'M'}${cx.toFixed(1)} ${cy.toFixed(1)} `;
      open = true;
      pts.push({ i, v, cx, cy });
    });
    const pathEl = d ? `<path d="${d.trim()}" fill="none" stroke="${s.color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"${s.dashed ? ' stroke-dasharray="5 3"' : ''}/>` : '';
    const dots = pts.map((p) => `<circle cx="${p.cx.toFixed(1)}" cy="${p.cy.toFixed(1)}" r="3.6" fill="${PAPER}" stroke="${s.color}" stroke-width="2"/>`).join('');
    let endLbl = '';
    if (pts.length) {
      const last = pts[pts.length - 1];
      let ly = last.cy + 3.5;
      for (const prev of endYs) {
        if (Math.abs(ly - prev) < 12) ly = prev + 12;
      }
      ly = Math.max(top + 8, Math.min(top + plotH - 2, ly));
      endYs.push(ly);
      endLbl = `<text x="${(last.cx + 7).toFixed(1)}" y="${ly.toFixed(1)}" font-size="10" font-weight="600" fill="${s.color}">${fmt(last.v, decimals)}</text>`;
    }
    return pathEl + dots + endLbl;
  }).join('');

  const descText = series.map((s) => `${s.name}${evidenceSuffix(s)}: ${xLabels.map((xl, i) => s.values[i] == null ? null : `${xl} ${fmt(s.values[i], decimals)}`).filter(Boolean).join(', ')}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${lg.g}${grid}${cutMarkup}${lines}${xAxis}${yLbl}</svg>`;
}

// Correlation / score heatmap matrix. rows: [string], cols: [string], values: [[number]]
function heatmapMatrix({ id, title, desc, rows, cols, values, min = -1, max = 1, decimals = 2 }) {
  const maxRowLen = Math.max(0, ...rows.map((r) => String(r).length));
  const W = 680, labelW = Math.min(180, Math.max(96, Math.ceil(maxRowLen * 6.5 + 14))), padR = 14;
  const colHeaderH = 44, cellH = 30, plotW = W - labelW - padR, cellW = plotW / cols.length;
  const H = colHeaderH + rows.length * cellH + 14;

  const lerp = (a, b, t) => Math.round(a + (b - a) * t);
  const cellColor = (v) => {
    const mid = (min + max) / 2;
    if (v >= mid) {
      const t = Math.min(1, Math.max(0, (v - mid) / Math.max(1e-9, max - mid)));
      // #f4efe6 (244,239,230) -> #9c3b1f (156,59,31)
      return `rgb(${lerp(244, 156, t)},${lerp(239, 59, t)},${lerp(230, 31, t)})`;
    }
    const t = Math.min(1, Math.max(0, (mid - v) / Math.max(1e-9, mid - min)));
    // #f4efe6 (244,239,230) -> #3a72c4 (58,114,196)
    return `rgb(${lerp(244, 58, t)},${lerp(239, 114, t)},${lerp(230, 196, t)})`;
  };

  const colHdrs = cols.map((c, ci) => `<text x="${(labelW + (ci + 0.5) * cellW).toFixed(1)}" y="${colHeaderH - 10}" font-size="10.5" font-weight="600" fill="${INK}" text-anchor="middle">${esc(c)}</text>`).join('');
  const body = rows.map((r, ri) => {
    const y = colHeaderH + ri * cellH;
    const cells = cols.map((_, ci) => {
      const v = values[ri][ci];
      const x = labelW + ci * cellW;
      const dark = Math.abs(v - (min + max) / 2) / Math.max(1e-9, (max - min) / 2) >= 0.52;
      const txtCol = dark ? '#f8f4ec' : INK;
      return `<rect x="${x.toFixed(1)}" y="${y}" width="${cellW.toFixed(1)}" height="${cellH}" fill="${cellColor(v)}" stroke="${PAPER}" stroke-width="1.5"/><text x="${(x + cellW / 2).toFixed(1)}" y="${y + cellH / 2 + 4}" font-size="10.5" font-weight="${dark ? 600 : 500}" fill="${txtCol}" text-anchor="middle">${v.toFixed(decimals)}</text>`;
    }).join('');
    return `<text x="0" y="${y + cellH / 2 + 4}" font-size="11" font-weight="600" fill="${INK}">${esc(r)}</text>${cells}`;
  }).join('');

  const descText = rows.map((r, ri) => `${r}: ${cols.map((c, ci) => `${c} ${values[ri][ci].toFixed(decimals)}`).join(', ')}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${colHdrs}${body}</svg>`;
}

module.exports = { figure, groupedBars, stackedRows, smallMultiples, plane, horizontalBars, divergingBars, traitSpectrum, lineTrajectory, heatmapMatrix };
