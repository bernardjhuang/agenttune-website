'use strict';
/* Static SVG charts for the research pages.
 *
 * No client-side JavaScript and no chart library: each chart is inline SVG with a
 * <title> and a <desc> that reads as a sentence, so the numbers reach screen
 * readers and text-only agents. Ids are passed in so a page can hold several charts.
 */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f2 = (v) => (Math.round(v * 100) / 100).toFixed(2);
const INK = '#1e1d1a', MUTED = '#655f55', GRID = '#e3ddd1';

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
    const out = `<g transform="translate(${cx}, ${cy})"><rect x="0" y="-9" width="11" height="11" rx="2" fill="${s.fill || (s.reported ? '#ffffff' : s.color)}" stroke="${s.color}" stroke-width="${s.reported || s.fill ? 1.2 : 0}"/><text x="16" y="0" font-size="10.5" fill="${INK}">${esc(label)}</text></g>`;
    cx += w;
    return out;
  }).join('');
  return { g, rows };
}
const fmt = (v, d) => (d === 0 ? String(Math.round(v)) : (Math.round(v * 10) / 10).toFixed(1));

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
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="${s.reported ? '#ffffff' : s.color}" stroke="${s.color}" stroke-width="${s.reported ? 1.5 : 0}" rx="2"/><text x="${(x + barW / 2).toFixed(1)}" y="${(y - 4).toFixed(1)}" font-size="10" fill="${INK}" text-anchor="middle">${fmt(v, decimals)}</text>`;
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
  const hatch = `<defs><pattern id="${id}-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="6" stroke="#a8482a" stroke-width="3"/></pattern></defs>`;
  const body = rows.map((r, ri) => {
    const y = top + ri * (rowH + gapY);
    let x = labelW;
    const parts = segs.map((s) => {
      const v = r.values[s.key] || 0;
      if (!v) return '';
      const w = (v / max) * plotW;
      const g = `<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="${rowH}" fill="${s.hatch ? `url(#${id}-hatch)` : s.color}" stroke="${s.hatch ? '#a8482a' : '#ffffff'}" stroke-width="1"/>` + (w > 20 ? `<text x="${(x + w / 2).toFixed(1)}" y="${y + rowH / 2 + 4}" font-size="11" font-weight="600" fill="${s.text || '#ffffff'}"${s.hatch ? ' stroke="#ffffff" stroke-width="3" paint-order="stroke" stroke-linejoin="round"' : ''} text-anchor="middle">${v}</text>` : '');
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
      const fill = r.reported ? '#ffffff' : (isTop ? r.color : '#d9d2c4');
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
  const dots = points.map((p) => `<circle cx="${x(p.x).toFixed(1)}" cy="${y(p.y).toFixed(1)}" r="${p.reported ? 4 : 5}" fill="${p.reported ? '#ffffff' : p.color}" stroke="${p.color}" stroke-width="2"/><text x="${(x(p.x) + (p.dx == null ? 16 : p.dx)).toFixed(1)}" y="${(y(p.y) + (p.dy == null ? 4 : p.dy)).toFixed(1)}" font-size="10.5" fill="${INK}" font-weight="600" text-anchor="${p.anchor || 'start'}">${esc(p.label)}${evidenceSuffix(p)}</text>`).join('');
  const descText = points.map((p) => `${p.label}${evidenceSuffix(p)}: anxiety ${f2(p.x)}, avoidance ${f2(p.y)}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${grid}<line x1="${x(cut)}" y1="${padT}" x2="${x(cut)}" y2="${padT + plotH}" stroke="${MUTED}" stroke-width="1" stroke-dasharray="4 4"/><line x1="${padL}" y1="${y(cut)}" x2="${padL + plotW}" y2="${y(cut)}" stroke="${MUTED}" stroke-width="1" stroke-dasharray="4 4"/>${labels}<text x="${padL + plotW / 2}" y="${H - 4}" font-size="11" fill="${INK}" text-anchor="middle">${esc(xLabel)}</text><text x="12" y="${padT + plotH / 2}" font-size="11" fill="${INK}" text-anchor="middle" transform="rotate(-90 12 ${padT + plotH / 2})">${esc(yLabel)}</text>${dots}</svg>`;
}

// Horizontal ranked bars. rows: [{label, sub?, value, color, reported?, badge?}]; optional cutoff dashed vertical line.
function horizontalBars({ id, title, desc, rows, max, min = 0, decimals = 1, unit = '', cutoff = null, cutoffLabel = '', legendItems = null }) {
  const W = 680, labelW = 176, rightPad = 76, lg = legendItems ? legend(legendItems, 4, 14) : null;
  const top = (lg ? 30 + (lg.rows - 1) * 16 : 22) + (cutoff != null && cutoffLabel ? 14 : 0);
  const rowH = 26, gapY = 8, plotW = W - labelW - rightPad, H = top + rows.length * (rowH + gapY) + 18;
  const xPos = (v) => labelW + (Math.max(0, Math.min(max - min, v - min)) / (max - min)) * plotW;
  const bars = rows.map((r, ri) => {
    const y = top + ri * (rowH + gapY), w = Math.max(0, xPos(r.value) - labelW);
    const valStr = fmt(r.value, decimals) + unit + (r.badge ? ' ' + r.badge : '');
    const sub = r.sub ? `<text x="0" y="${y + rowH / 2 + 12}" font-size="9.5" fill="${MUTED}">${esc(r.sub)}</text>` : '';
    const ly = r.sub ? y + rowH / 2 - 1 : y + rowH / 2 + 4;
    return `<text x="0" y="${ly}" font-size="11.5" font-weight="500" fill="${INK}">${esc(r.label)}</text>${sub}<rect x="${labelW}" y="${y + 4}" width="${plotW}" height="${rowH - 8}" rx="3" fill="#f3eee5"/><rect x="${labelW}" y="${y + 4}" width="${w.toFixed(1)}" height="${rowH - 8}" rx="3" fill="${r.reported ? '#ffffff' : r.color}" stroke="${r.color}" stroke-width="${r.reported ? 1.5 : 0}"/><text x="${(labelW + w + 6).toFixed(1)}" y="${y + rowH / 2 + 4}" font-size="11" font-weight="600" fill="${INK}">${esc(valStr)}</text>`;
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
  const W = 680, labelW = 216, padR = 54, plotW = W - labelW - padR, top = 26, rowH = 26, gapY = 9;
  const H = top + rows.length * (rowH + gapY) + 18;
  const zeroX = labelW + ((0 - min) / (max - min)) * plotW;
  const toX = (v) => labelW + ((Math.max(min, Math.min(max, v)) - min) / (max - min)) * plotW;
  const header = `<text x="${(zeroX - 8).toFixed(1)}" y="15" font-size="10" font-weight="600" fill="${MUTED}" text-anchor="end">← ${esc(leftLabel)}</text><text x="${(zeroX + 8).toFixed(1)}" y="15" font-size="10" font-weight="600" fill="${INK}" text-anchor="start">${esc(rightLabel)} →</text>`;
  const body = rows.map((r, ri) => {
    const y = top + ri * (rowH + gapY), vx = toX(r.value), x = Math.min(zeroX, vx), w = Math.max(1.5, Math.abs(vx - zeroX));
    const isNeg = r.value < 0, fill = isNeg ? (r.negColor || '#7a7468') : r.color;
    const valStr = (r.value > 0 ? '+' : '') + r.value.toFixed(decimals);
    const crowdedLeft = isNeg && (x - labelW) < 42;
    const tx = crowdedLeft ? x + 5 : (isNeg ? x - 5 : vx + 5), anchor = (isNeg && !crowdedLeft) ? 'end' : 'start';
    const textStyle = crowdedLeft ? ' stroke="#ffffff" stroke-width="3" paint-order="stroke" stroke-linejoin="round"' : '';
    return `<text x="0" y="${y + rowH / 2 + 4}" font-size="11.5" fill="${INK}">${esc(r.label)}</text><rect x="${labelW}" y="${y + 4}" width="${plotW}" height="${rowH - 8}" rx="3" fill="#f7f4ee"/><rect x="${x.toFixed(1)}" y="${y + 4}" width="${w.toFixed(1)}" height="${rowH - 8}" rx="2" fill="${fill}"/><text x="${tx.toFixed(1)}" y="${y + rowH / 2 + 4}" font-size="10.5" font-weight="600" fill="${INK}"${textStyle} text-anchor="${anchor}">${esc(valStr)}</text>`;
  }).join('');
  const descText = rows.map((r) => `${r.label}: ${(r.value > 0 ? '+' : '')}${r.value.toFixed(decimals)}`).join('; ');
  return `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc ? desc + ' ' : '')}${esc(descText)}.</desc>${header}${body}<line x1="${zeroX.toFixed(1)}" x2="${zeroX.toFixed(1)}" y1="${top - 4}" y2="${H - 16}" stroke="${INK}" stroke-width="1.2"/><text x="${labelW}" y="${H - 4}" font-size="9" fill="${MUTED}">${min}</text><text x="${zeroX.toFixed(1)}" y="${H - 4}" font-size="9" fill="${MUTED}" text-anchor="middle">0</text><text x="${(labelW + plotW).toFixed(1)}" y="${H - 4}" font-size="9" fill="${MUTED}" text-anchor="end">+${max}</text></svg>`;
}

module.exports = { figure, groupedBars, stackedRows, smallMultiples, plane, horizontalBars, divergingBars };
