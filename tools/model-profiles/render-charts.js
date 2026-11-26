'use strict';
/* Static SVG charts for /models/<family> pages.
 * Reuses tools/research-charts.js primitives (traitSpectrum, lineTrajectory,
 * horizontalBars, groupedBars, stackedRows, smallMultiples, plane, figure)
 * without modifying tools/add-research-charts.js.
 *
 * Sections 1-6 charts MUST stay free of technical jargon (no H_MM, Crystalline,
 * zero-memory elicitation, Track B, BAI, protocol, or imported-*-170 in visible
 * titles, descriptions, legends, or captions).
 */

const charts = require('../research-charts');

const C = {
  primary: '#a8482a',
  secondary: '#3a72c4',
  accent: '#5b4dc0',
  green: '#2f8a5b',
  amber: '#855b1c',
  ink: '#1e1d1a',
  slate: '#7a7468',
  muted: '#655e54',
  sand: '#c9c2b4'
};

const HEXACO_TRAITS = [
  { label: 'Honesty-Humil.', poles: 'Manipulative ↔ Sincere/Fair' },
  { label: 'Emotionality', poles: 'Detached ↔ Sensitive' },
  { label: 'Extraversion', poles: 'Reserved ↔ Sociable' },
  { label: 'Agreeable', poles: 'Critical ↔ Patient/Gentle' },
  { label: 'Conscientious', poles: 'Impulsive ↔ Disciplined' },
  { label: 'Openness', poles: 'Conventional ↔ Inquisitive' }
];

function wrapChart(id, svg, caption) {
  const fig = charts.figure(svg, caption);
  return fig.replace(
    '<figure class="research-figure">',
    `<figure class="research-figure" data-chart-id="${id}">`
  );
}

function getLatestCheckpoint(dataset) {
  const cps = dataset.checkpoints || [];
  return cps.find((c) => c.checkpoint_id === dataset.current_checkpoint) || cps[cps.length - 1];
}

function shortenAnchorLabel(familyName, anchor) {
  const pid = String(anchor.protocol_id || '');
  if (pid.includes('nov2026')) return `${familyName} (earlier study, Nov '26)`;
  if (pid.includes('sep2026')) return `${familyName} (earlier study, Sep '26)`;
  const short = String(anchor.label || 'earlier study').replace(/\s*\([^)]*\)\s*/g, ' ').trim();
  return `${familyName} (${short})`;
}

// ---------- Section 3 Charts (plain language, zero jargon) ----------

function renderMbtiVersionStacked(dataset) {
  const slug = dataset.family_slug;
  const id = `${slug}-mbti-versions`;
  const cps = dataset.checkpoints || [];
  const latest = getLatestCheckpoint(dataset);
  const modalTarget = (latest.mbti && (latest.mbti.modal_non_tie || latest.mbti.modal_pattern)) || 'INTJ';

  const rows = cps.map((c) => {
    const n = Math.max(1, Number(c.n_valid || 1));
    const counts = (c.mbti && c.mbti.pattern_counts) || null;
    let clearModal = 0;
    let borderTie = 0;
    let otherResolved = 0;
    if (counts) {
      for (const [pat, cnt] of Object.entries(counts)) {
        const val = Number(cnt || 0);
        if (pat.includes('X')) borderTie += val;
        else if (pat === modalTarget) clearModal += val;
        else otherResolved += val;
      }
    } else {
      const tiePct = Number(c.mbti_tie_rate || 0);
      const modalPct = Number(c.mbti?.modal_share || (1 - tiePct));
      borderTie = Math.round(tiePct * n);
      clearModal = Math.min(n - borderTie, Math.round(modalPct * n));
      otherResolved = Math.max(0, n - borderTie - clearModal);
    }
    const pClear = Math.round((clearModal / n) * 100);
    const pTie = Math.round((borderTie / n) * 100);
    const pOther = Math.max(0, 100 - pClear - pTie);
    return {
      label: c.label,
      values: { clear: pClear, border: pTie, other: pOther }
    };
  });

  const svg = charts.stackedRows({
    id,
    title: `${dataset.name}: MBTI-Style Results by Version (% of Runs)`,
    desc: `Share of fresh-chat runs for each ${dataset.name} version landing on a clear ${modalTarget} result, landing on a trait border or tie, or resolving to another type.`,
    rows,
    segs: [
      { key: 'clear', name: `Clear ${modalTarget} (%)`, color: C.primary },
      { key: 'border', name: 'On a border / tie (%)', color: C.primary, hatch: true, text: C.primary },
      { key: 'other', name: 'Other clear type (%)', color: C.slate }
    ],
    max: 100
  });
  return wrapChart(
    id,
    svg,
    `MBTI-style breakdown across ${dataset.name} versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.`
  );
}

function renderDiscVersionBars(dataset) {
  const slug = dataset.family_slug;
  const id = `${slug}-disc-versions`;
  const cps = dataset.checkpoints || [];
  const categories = cps.map((c) => c.label);
  const series = [
    { name: 'Dominance (D)', color: C.primary, values: cps.map((c) => Number(c.disc?.D?.mean ?? 4)) },
    { name: 'Influence (I)', color: C.amber, values: cps.map((c) => Number(c.disc?.I?.mean ?? 4)) },
    { name: 'Steadiness (S)', color: C.green, values: cps.map((c) => Number(c.disc?.S?.mean ?? 4)) },
    { name: 'Conscientiousness (C)', color: C.secondary, values: cps.map((c) => Number(c.disc?.C?.mean ?? 4)) }
  ];
  let svg = charts.groupedBars({
    id,
    title: `${dataset.name}: DISC Work Style Scores by Version (4–20 Scale)`,
    desc: `Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across ${cps.length} ${dataset.name} versions.`,
    categories,
    series,
    min: 4,
    max: 20,
    decimals: 1,
    height: 235
  });
  const vb = /viewBox="0 0 (\d+) (\d+)"/.exec(svg);
  if (vb) {
    const newH = Number(vb[2]) + 16;
    svg = svg
      .replace(/viewBox="0 0 \d+ \d+"/, `viewBox="0 0 ${vb[1]} ${newH}"`)
      .replace(
        /(<text x="\d+" )y="[0-9.]+"( font-size="9" fill="#655e54" text-anchor="end">scale [^<]+<\/text>)/,
        `$1y="${newH - 4}"$2`
      );
  }
  return wrapChart(
    id,
    svg,
    `DISC scores across ${dataset.name} versions (4–20 per style). Higher bars reflect stronger agreement with that work style.`
  );
}

function renderAttachmentPointsSvg({ id, title, desc, points, caption }) {
  const W = 680, H = 390, padL = 74, padR = 28, padT = 20, padB = 38;
  const lo = 1, hi = 5, cut = 4;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const xPos = (v) => padL + ((Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo)) * plotW;
  const yPos = (v) => padT + (1 - (Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo)) * plotH;

  const grid = [1, 2, 3, 4, 5].map((v) =>
    `<line x1="${xPos(v)}" y1="${padT}" x2="${xPos(v)}" y2="${padT + plotH}" stroke="#efe9df" stroke-width="0.6"/>` +
    `<line x1="${padL}" y1="${yPos(v)}" x2="${padL + plotW}" y2="${yPos(v)}" stroke="#efe9df" stroke-width="0.6"/>` +
    `<text x="${xPos(v)}" y="${padT + plotH + 14}" font-size="9.5" fill="${C.muted}" text-anchor="middle">${v}</text>` +
    `<text x="${padL - 8}" y="${yPos(v) + 3}" font-size="9.5" fill="${C.muted}" text-anchor="end">${v}</text>`
  ).join('');

  const qLabels = [
    `<text x="${xPos((lo + cut) / 2)}" y="${yPos(cut + (hi - cut) * 0.68)}" font-size="10" fill="${C.muted}" text-anchor="middle">Avoidant</text>`,
    `<text x="${xPos((cut + hi) / 2)}" y="${yPos(cut + (hi - cut) * 0.68)}" font-size="10" fill="${C.muted}" text-anchor="middle">Disorganized</text>`,
    `<text x="${xPos((lo + cut) / 2)}" y="${yPos(lo + 0.28)}" font-size="10" fill="${C.green}" font-weight="600" text-anchor="middle">Secure</text>`,
    `<text x="${xPos((cut + hi) / 2)}" y="${yPos(lo + 0.28)}" font-size="10" fill="${C.muted}" text-anchor="middle">Anxious</text>`
  ].join('');

  const placedBoxes = [];
  const cutY = yPos(cut);
  const thresholdBands = [
    { x1: padL, y1: cutY - 7, x2: padL + plotW, y2: cutY + 7 }
  ];
  const dotBoxes = points.map((p) => {
    const cx = xPos(p.x), cy = yPos(p.y);
    return { x1: cx - 7, y1: cy - 7, x2: cx + 7, y2: cy + 7 };
  });
  const overlaps = (a, b) => !(a.x2 <= b.x1 || a.x1 >= b.x2 || a.y2 <= b.y1 || a.y1 >= b.y2);

  const ordered = [...points].sort((a, b) => a.x - b.x || a.y - b.y);
  const placed = new Map();
  const offsets = [
    [10, 4, 'start'], [10, -10, 'start'], [10, 17, 'start'],
    [-10, 4, 'end'], [-10, -10, 'end'], [-10, 17, 'end'],
    [12, -22, 'start'], [12, 29, 'start'], [-12, -22, 'end'], [-12, 29, 'end'],
    [14, -34, 'start'], [14, 41, 'start'], [-14, -34, 'end'], [-14, 41, 'end'],
    [18, -46, 'start'], [18, 53, 'start'], [-18, -46, 'end'], [-18, 53, 'end'],
    [24, -58, 'start'], [24, 65, 'start']
  ];

  for (const p of ordered) {
    const cx = xPos(p.x), cy = yPos(p.y);
    const fullText = p.label;
    const lw = Math.ceil(fullText.length * 6.3 + 8);
    const lh = 14;
    let chosen = null;

    for (const [dx, dy, anchor] of offsets) {
      const tx = cx + dx;
      const ty = cy + dy;
      const x1 = anchor === 'start' ? tx - 2 : tx - lw + 2;
      const x2 = x1 + lw;
      const y1 = ty - 11;
      const y2 = y1 + lh;
      if (x1 < padL + 4 || x2 > W - 6 || y1 < padT + 4 || y2 > padT + plotH - 4) continue;
      const box = { x1, y1, x2, y2 };
      if (thresholdBands.some((tb) => overlaps(box, tb))) continue;
      if (dotBoxes.some((d) => overlaps(box, d))) continue;
      if (placedBoxes.some((b) => overlaps(box, b))) continue;
      chosen = { tx, ty, anchor, box, dist: Math.hypot(dx, dy) };
      break;
    }
    if (!chosen) {
      const anchor = cx < W * 0.55 ? 'start' : 'end';
      const dx = anchor === 'start' ? 10 : -10;
      const dy = 4 + placedBoxes.length * 14;
      const tx = cx + dx, ty = Math.min(padT + plotH - 6, cy + dy);
      const x1 = anchor === 'start' ? tx - 2 : tx - lw + 2;
      chosen = { tx, ty, anchor, box: { x1, y1: ty - 11, x2: x1 + lw, y2: ty + 3 }, dist: Math.hypot(dx, dy) };
    }
    placedBoxes.push(chosen.box);
    placed.set(p, { cx, cy, fullText, ...chosen });
  }

  // Optional trajectory line connecting solid version points in order
  const solidPts = points.filter((p) => !p.reported && p.connect);
  let pathHtml = '';
  if (solidPts.length > 1) {
    const d = solidPts.map((p, idx) => `${idx === 0 ? 'M' : 'L'}${xPos(p.x).toFixed(1)} ${yPos(p.y).toFixed(1)}`).join(' ');
    pathHtml = `<path d="${d}" fill="none" stroke="${solidPts[0].color || C.primary}" stroke-width="1.6" stroke-dasharray="3 2" opacity="0.65"/>`;
  }

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const dotsMarkup = points.map((p) => {
    const pos = placed.get(p);
    const leader = pos.dist > 16
      ? `<line x1="${pos.cx.toFixed(1)}" y1="${pos.cy.toFixed(1)}" x2="${(pos.tx + (pos.anchor === 'start' ? -3 : 3)).toFixed(1)}" y2="${(pos.ty - 3).toFixed(1)}" stroke="#cfc6b6" stroke-width="0.9"/>`
      : '';
    const dot = `<circle cx="${pos.cx.toFixed(1)}" cy="${pos.cy.toFixed(1)}" r="${p.reported ? 4.2 : 5}" fill="${p.reported ? '#f4efe6' : p.color}" stroke="${p.color}" stroke-width="2"/>`;
    const lbl = `<text x="${pos.tx.toFixed(1)}" y="${pos.ty.toFixed(1)}" font-size="10.5" fill="${C.ink}" font-weight="600" text-anchor="${pos.anchor}">${esc(pos.fullText)}</text>`;
    return leader + dot + lbl;
  }).join('');

  const descText = points.map((p) => `${p.label}: anxiety ${p.x.toFixed(2)}, avoidance ${p.y.toFixed(2)}`).join('; ');
  const svg = `<svg class="research-chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc)} ${esc(descText)}.</desc>${grid}<line x1="${xPos(cut)}" y1="${padT}" x2="${xPos(cut)}" y2="${padT + plotH}" stroke="${C.muted}" stroke-width="1" stroke-dasharray="4 4"/><line x1="${padL}" y1="${yPos(cut)}" x2="${padL + plotW}" y2="${yPos(cut)}" stroke="${C.muted}" stroke-width="1" stroke-dasharray="4 4"/>${qLabels}<text x="${padL + plotW / 2}" y="${H - 6}" font-size="11" fill="${C.ink}" text-anchor="middle">Anxiety (1–7 scale, showing 1–5)</text><text x="16" y="${padT + plotH / 2}" font-size="11" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 16 ${padT + plotH / 2})">Avoidance (1–7 scale, showing 1–5)</text>${pathHtml}${dotsMarkup}</svg>`;

  return wrapChart(id, svg, caption);
}

function renderAttachmentTrajectory(dataset) {
  const slug = dataset.family_slug;
  const id = `${slug}-attachment-versions`;
  const cps = dataset.checkpoints || [];
  const points = cps
    .filter((c) => c.attachment)
    .map((c) => ({
      label: c.label,
      color: dataset.color || C.primary,
      x: Number(c.attachment.anxiety.mean),
      y: Number(c.attachment.avoidance.mean),
      reported: false,
      connect: true
    }));
  for (const a of dataset.historical_anchors || []) {
    if (!a.attachment) continue;
    points.push({
      label: shortenAnchorLabel(dataset.name, a),
      color: C.amber,
      x: Number(a.attachment.anxiety),
      y: Number(a.attachment.avoidance),
      reported: true,
      connect: false
    });
  }
  return renderAttachmentPointsSvg({
    id,
    title: `${dataset.name}: Attachment Style Across Versions (1–7 Scale)`,
    desc: `Attachment Anxiety and Avoidance averages across ${cps.length} ${dataset.name} releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points.`,
    points,
    caption: `Attachment coordinates across ${dataset.name} versions. Hollow points mark earlier study measurements and stay separate from the version line.`
  });
}

function renderTrajectoryChart(dataset) {
  const slug = dataset.family_slug;
  const id = `${slug}-trajectory`;
  const cps = dataset.checkpoints || [];
  const xLabels = cps.map((c) => c.label);
  const series = [
    {
      name: 'Agreeableness (10–50)',
      color: C.primary,
      values: cps.map((c) => Number(c.big_five.A.mean))
    },
    {
      name: 'Openness (10–50)',
      color: C.ink,
      values: cps.map((c) => Number(c.big_five.O.mean))
    },
    {
      name: 'Conscientiousness (10–50)',
      color: C.green,
      values: cps.map((c) => Number(c.big_five.C.mean))
    },
    {
      name: 'Neuroticism (10–50)',
      color: C.secondary,
      values: cps.map((c) => Number(c.big_five.N.mean))
    }
  ];

  const anchors = dataset.historical_anchors || [];
  if (anchors.length) {
    const anchorValsA = cps.map((c) => {
      const m = anchors.find((a) => a.checkpoint_id === c.checkpoint_id);
      return m ? Number(m.big_five.A) : null;
    });
    if (anchorValsA.some((v) => v != null)) {
      series.push({
        name: 'Agreeableness',
        color: C.amber,
        dashed: true,
        reported: true,
        evidence: 'earlier study',
        values: anchorValsA
      });
    }
  }

  const svg = charts.lineTrajectory({
    id,
    title: `${dataset.name}: Big Five Scores Across Versions (10–50 Scale)`,
    desc: `Average Big Five trait scores across ${cps.length} releases of ${dataset.name} (10 to 50 scale), with earlier study data plotted separately as hollow points.`,
    xLabels,
    series,
    min: 10,
    max: 50,
    yLabel: 'Big Five Score (10–50)',
    decimals: 1,
    height: 265
  });
  return wrapChart(
    id,
    svg,
    `Big Five trait shifts across ${dataset.name} versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.`
  );
}

// ---------- Section 6 Comparison Charts (plain language, zero jargon) ----------

function plainConsistencyLabel(tier) {
  const t = String(tier || '').toLowerCase();
  if (t.includes('semi')) return 'Moderate';
  if (t.includes('fluid')) return 'Variable';
  return 'Very steady';
}

function renderPeerEntropyBars(dataset, peerDatasets) {
  const slug = dataset.family_slug;
  const id = `${slug}-peer-consistency`;
  const list = [dataset, ...(peerDatasets || []).filter((p) => p.family_slug !== slug)];
  const rows = list
    .map((d) => {
      const cp = getLatestCheckpoint(d);
      return {
        label: `${d.name} (${cp.label})`,
        sub: `${d.tier} · ${plainConsistencyLabel(cp.crystallinity_tier)}`,
        value: Number(cp.entropy_b5_hmm),
        color: d.family_slug === slug ? (d.color || C.primary) : (d.tier === 'Open-weight' ? C.secondary : C.slate)
      };
    })
    .sort((a, b) => a.value - b.value);

  const maxVal = Math.max(1.0, ...rows.map((r) => Math.ceil((r.value + 0.15) * 10) / 10));
  const svg = charts.horizontalBars({
    id,
    title: `${dataset.name} vs. Peers: Run-to-Run Answer Spread (Lower = Steadier)`,
    desc: `Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing ${dataset.name} against other tested AI families.`,
    rows,
    min: 0,
    max: maxVal,
    decimals: 3,
    unit: ' b',
    cutoff: 0.20,
    cutoffLabel: 'Very steady (< 0.20)'
  });
  return wrapChart(
    id,
    svg,
    `Run-to-run answer spread across ${dataset.name} and peer models (lower means the model gives nearly identical answers across fresh chats).`
  );
}

function renderAttachmentPlane(dataset, peerDatasets) {
  const slug = dataset.family_slug;
  const id = `${slug}-attachment-plane`;
  const points = [];
  const all = [dataset, ...(peerDatasets || []).filter((p) => p.family_slug !== slug)];
  all.forEach((d) => {
    const cp = getLatestCheckpoint(d);
    if (!cp.attachment) return;
    points.push({
      label: d.name,
      color: d.family_slug === slug ? (d.color || C.primary) : (d.color || C.secondary),
      x: Number(cp.attachment.anxiety.mean),
      y: Number(cp.attachment.avoidance.mean),
      reported: false
    });
  });
  for (const a of dataset.historical_anchors || []) {
    if (!a.attachment) continue;
    points.push({
      label: shortenAnchorLabel(dataset.name, a),
      color: C.amber,
      x: Number(a.attachment.anxiety),
      y: Number(a.attachment.avoidance),
      reported: true
    });
  }

  return renderAttachmentPointsSvg({
    id,
    title: `${dataset.name} vs. Peers: Attachment Style Coordinates (1–7 Scale)`,
    desc: `Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing ${dataset.name} with peer families, keeping earlier study results outlined as hollow points.`,
    points,
    caption: `Attachment Anxiety vs. Avoidance across ${dataset.name} and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).`
  });
}

// ---------- Section 7 Technical Charts ----------

function renderB5TraitSpectrum(dataset, peerDatasets) {
  const slug = dataset.family_slug;
  const id = `${slug}-b5-spectrum`;
  const latest = getLatestCheckpoint(dataset);
  const b5Keys = ['O', 'C', 'E', 'A', 'N'];
  const series = [
    {
      name: `${dataset.name} (${latest.label}, n=${latest.n_valid})`,
      color: dataset.color || C.primary,
      values: b5Keys.map((k) => Number(latest.big_five[k].mean))
    }
  ];
  const prev = dataset.checkpoints && dataset.checkpoints.length > 1
    ? dataset.checkpoints[0]
    : null;
  if (prev && prev.checkpoint_id !== latest.checkpoint_id) {
    series.push({
      name: `${dataset.name} (${prev.label}, n=${prev.n_valid})`,
      color: C.slate,
      reported: true,
      evidence: 'earliest release',
      values: b5Keys.map((k) => Number(prev.big_five[k].mean))
    });
  }
  const peer = (peerDatasets || []).find((p) => p.family_slug !== slug);
  if (peer) {
    const pLatest = getLatestCheckpoint(peer);
    series.push({
      name: `${peer.name} (${pLatest.label})`,
      color: peer.color || C.secondary,
      values: b5Keys.map((k) => Number(pLatest.big_five[k].mean))
    });
  }
  const svg = charts.traitSpectrum({
    id,
    title: `${dataset.name} Big Five Profile (IPIP-50, 10 to 50 sum scale)`,
    desc: `Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for ${dataset.name} (${latest.label}).`,
    series,
    min: 10,
    max: 50,
    mid: 30,
    decimals: 1
  });
  return wrapChart(
    id,
    svg,
    `Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.`
  );
}

function renderHexacoSpectrum(dataset, peerDatasets) {
  const slug = dataset.family_slug;
  const id = `${slug}-hexaco-spectrum`;
  const latest = getLatestCheckpoint(dataset);
  const hKeys = ['H', 'E', 'X', 'A', 'C', 'O'];
  const series = [
    {
      name: `${dataset.name} IPIP-HEXACO proxy (1..5)`,
      color: dataset.color || C.primary,
      values: hKeys.map((k) => Number(latest.ipip_hexaco[k].mean))
    }
  ];
  const peer = (peerDatasets || []).find((p) => p.family_slug !== slug);
  if (peer) {
    const pLatest = getLatestCheckpoint(peer);
    series.push({
      name: `${peer.name} IPIP-HEXACO proxy (1..5)`,
      color: peer.color || C.secondary,
      values: hKeys.map((k) => Number(pLatest.ipip_hexaco[k].mean))
    });
  }
  const svg = charts.traitSpectrum({
    id,
    title: `${dataset.name} IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale)`,
    desc: `Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for ${dataset.name} (${latest.label}), kept distinct from 10-50 Big Five sums.`,
    series,
    traits: HEXACO_TRAITS,
    min: 1,
    max: 5,
    mid: 3,
    decimals: 2
  });
  return wrapChart(
    id,
    svg,
    `Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).`
  );
}

module.exports = {
  ...charts,
  wrapChart,
  plainConsistencyLabel,
  renderMbtiVersionStacked,
  renderDiscVersionBars,
  renderAttachmentTrajectory,
  renderB5TraitSpectrum,
  renderHexacoSpectrum,
  renderTrajectoryChart,
  renderPeerEntropyBars,
  renderAttachmentPlane
};
