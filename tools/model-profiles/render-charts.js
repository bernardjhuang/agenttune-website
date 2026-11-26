'use strict';
/* Static SVG charts for /models/<family> pages.
 * Reuses tools/research-charts.js primitives (traitSpectrum, lineTrajectory,
 * horizontalBars, plane, figure) without modifying tools/add-research-charts.js.
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
  muted: '#655e54'
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
    `Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.`
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
    `Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).`
  );
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
        name: 'Anchor A (170-item)',
        color: C.amber,
        dashed: true,
        reported: true,
        evidence: 'hexaco: null',
        values: anchorValsA
      });
    }
  }

  const svg = charts.lineTrajectory({
    id,
    title: `${dataset.name} Release Trajectory (model-profiles-v1, 10–50 scale)`,
    desc: `Checkpoint-by-checkpoint Big Five means across ${cps.length} releases of ${dataset.name} under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null).`,
    xLabels,
    series,
    min: 10,
    max: 50,
    yLabel: 'Big Five Score (10–50)',
    decimals: 1,
    height: 270
  });
  return wrapChart(
    id,
    svg,
    `Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.`
  );
}

function renderPeerEntropyBars(dataset, peerDatasets) {
  const slug = dataset.family_slug;
  const id = `${slug}-peer-entropy`;
  const list = [dataset, ...(peerDatasets || []).filter((p) => p.family_slug !== slug)];
  const rows = list
    .map((d) => {
      const cp = getLatestCheckpoint(d);
      return {
        label: `${d.name} (${cp.label})`,
        sub: `${d.tier} · ${cp.crystallinity_tier}`,
        value: Number(cp.entropy_b5_hmm),
        color: d.family_slug === slug ? (d.color || C.primary) : (d.tier === 'Open-weight' ? C.secondary : C.slate)
      };
    })
    .sort((a, b) => a.value - b.value);

  const maxVal = Math.max(1.65, ...rows.map((r) => Math.ceil((r.value + 0.15) * 10) / 10));
  const svg = charts.horizontalBars({
    id,
    title: `${dataset.name} vs. Peers: Big Five Item Shannon Entropy (H_MM bits)`,
    desc: `Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing ${dataset.name} against nearest peers. Values below 0.20 bits indicate Crystalline self-report.`,
    rows,
    min: 0,
    max: maxVal,
    decimals: 3,
    unit: ' b',
    cutoff: 0.20,
    cutoffLabel: 'Crystalline < 0.20 b'
  });
  return wrapChart(
    id,
    svg,
    `Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across ${dataset.name} and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.`
  );
}

function renderAttachmentPlane(dataset, peerDatasets) {
  const slug = dataset.family_slug;
  const id = `${slug}-attachment-plane`;
  const points = [];
  const all = [dataset, ...(peerDatasets || []).filter((p) => p.family_slug !== slug)];
  all.forEach((d, idx) => {
    const cp = getLatestCheckpoint(d);
    if (!cp.attachment) return;
    points.push({
      label: d.name,
      color: d.family_slug === slug ? (d.color || C.primary) : (d.color || C.secondary),
      x: Number(cp.attachment.anxiety.mean),
      y: Number(cp.attachment.avoidance.mean),
      dx: idx % 2 === 0 ? 10 : -10,
      dy: idx === 0 ? -6 : 12,
      anchor: idx % 2 === 0 ? 'start' : 'end'
    });
  });
  for (const a of dataset.historical_anchors || []) {
    if (!a.attachment) continue;
    points.push({
      label: `${dataset.name} (${a.label})`,
      color: C.amber,
      x: Number(a.attachment.anxiety),
      y: Number(a.attachment.avoidance),
      reported: true,
      evidence: a.protocol_id,
      dx: 10,
      dy: 14,
      anchor: 'start'
    });
  }

  const svg = charts.plane({
    id,
    title: `${dataset.name} Attachment Coordinates (ECR-R, 1–7 scale)`,
    desc: `ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for ${dataset.name} and peers, keeping imported 170-item anchors outlined as hollow points.`,
    points,
    lo: 1,
    hi: 5,
    cut: 4,
    xLabel: 'Anxiety (1–7 scale, showing 1–5)',
    yLabel: 'Avoidance (1–7 scale, showing 1–5)'
  });
  return wrapChart(
    id,
    svg,
    `Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.`
  );
}

module.exports = {
  ...charts,
  wrapChart,
  renderB5TraitSpectrum,
  renderHexacoSpectrum,
  renderTrajectoryChart,
  renderPeerEntropyBars,
  renderAttachmentPlane
};
