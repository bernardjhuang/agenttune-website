const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');
const SCORE_PY = path.join(ROOT, 'tools/model-profiles/score.py');
const HEXACO_PATH = path.join(ROOT, 'resources/scoring/model-profiles-hexaco-60.json');
const QUESTIONS_PATH = path.join(ROOT, 'resources/scoring/questions.json');
const scorerJs = require('../resources/scoring/score.js');

function canonicalJson(obj) {
  if (Array.isArray(obj)) {
    return '[' + obj.map(canonicalJson).join(',') + ']';
  }
  if (obj && typeof obj === 'object') {
    const keys = Object.keys(obj).sort();
    return '{' + keys.map((k) => JSON.stringify(k) + ':' + canonicalJson(obj[k])).join(',') + '}';
  }
  return JSON.stringify(obj);
}

function runScorePy(args, inputObj) {
  const opts = { cwd: ROOT, encoding: 'utf8' };
  if (inputObj !== undefined) {
    opts.input = JSON.stringify(inputObj);
  }
  const stdout = execFileSync('python3', [SCORE_PY, ...args], opts);
  return JSON.parse(stdout);
}

function makeFixtureBattery({
  mbtiVal = 3,
  b5Val = 3,
  discVal = 3,
  ennVal = 3,
  attVal = 4,
  hexVal = 3,
} = {}) {
  const out = {};
  for (let i = 1; i <= 32; i++) out[`M${String(i).padStart(2, '0')}`] = typeof mbtiVal === 'function' ? mbtiVal(i) : mbtiVal;
  for (let i = 1; i <= 50; i++) out[`B${String(i).padStart(2, '0')}`] = typeof b5Val === 'function' ? b5Val(i) : b5Val;
  for (let i = 1; i <= 16; i++) out[`D${String(i).padStart(2, '0')}`] = typeof discVal === 'function' ? discVal(i) : discVal;
  for (let i = 1; i <= 36; i++) out[`E${String(i).padStart(2, '0')}`] = typeof ennVal === 'function' ? ennVal(i) : ennVal;
  for (let i = 1; i <= 36; i++) out[`A${String(i).padStart(2, '0')}`] = typeof attVal === 'function' ? attVal(i) : attVal;
  for (let i = 1; i <= 60; i++) out[`H${String(i).padStart(2, '0')}`] = typeof hexVal === 'function' ? hexVal(i) : hexVal;
  return out;
}

test('model-profiles-hexaco-60.json satisfies schema, 24-facet balance, license, and canonical definitionHash', () => {
  const hexaco = JSON.parse(fs.readFileSync(HEXACO_PATH, 'utf8'));
  const questions = JSON.parse(fs.readFileSync(QUESTIONS_PATH, 'utf8'));

  assert.equal(hexaco.id, 'agenttune-ipip-hexaco60');
  assert.deepEqual(hexaco.range, [1, 5]);
  assert.equal(hexaco.mode, 'mean');
  assert.equal(hexaco.route, 'ipip-hexaco');
  assert.equal(hexaco.license, 'LicenseRef-IPIP-Public-Domain');
  assert.equal(hexaco.source, 'ipip.ori.org / Ashton, Lee, & Goldberg (2007)');
  assert.deepEqual(hexaco.dimensions, ['H', 'E', 'X', 'A', 'C', 'O']);
  assert.equal(hexaco.items.length, 60);

  const byDom = new Map();
  const byFacet = new Map();
  for (let i = 0; i < hexaco.items.length; i++) {
    const it = hexaco.items[i];
    assert.equal(it.id, `H${String(i + 1).padStart(2, '0')}`);
    assert.equal(it.displayOrder, i + 1);
    assert.equal(typeof it.reverse, 'boolean');
    assert.ok(hexaco.dimensions.includes(it.dimension));
    assert.ok(hexaco.facets[it.facet], `Missing facet metadata: ${it.facet}`);

    const dStats = byDom.get(it.dimension) || { pos: 0, rev: 0 };
    if (it.reverse) dStats.rev++; else dStats.pos++;
    byDom.set(it.dimension, dStats);

    byFacet.set(it.facet, (byFacet.get(it.facet) || 0) + 1);
  }

  for (const d of hexaco.dimensions) {
    const st = byDom.get(d);
    assert.equal(st.pos, 5, `${d} should have 5 + keyed items`);
    assert.equal(st.rev, 5, `${d} should have 5 - keyed items`);
  }
  assert.equal(byFacet.size, 24, 'All 24 IPIP-HEXACO facets must be sampled');
  for (const [facet, cnt] of byFacet.entries()) {
    assert.ok(cnt >= 2 && cnt <= 3, `Facet ${facet} count ${cnt} must be 2 or 3`);
  }

  // Zero verbatim overlap with existing questions.json items
  const existingTexts = new Set();
  for (const q of questions) {
    for (const it of q.items) {
      if (it.text) existingTexts.add(it.text.trim().toLowerCase().replace(/\.$/, ''));
    }
  }
  for (const it of hexaco.items) {
    const norm = it.text.trim().toLowerCase().replace(/\.$/, '');
    assert.ok(!existingTexts.has(norm), `Unexpected overlap with questions.json: ${it.text}`);
  }

  // Verify definitionHash
  const withoutHash = { ...hexaco };
  delete withoutHash.definitionHash;
  const expectedHash = crypto.createHash('sha256').update(canonicalJson(withoutHash), 'utf8').digest('hex');
  assert.equal(hexaco.definitionHash, expectedHash);

  // Verify score.py --check-definitions agrees
  const pyMeta = runScorePy(['--check-definitions']);
  assert.equal(pyMeta.status, 'ok');
  assert.equal(pyMeta.instruments['ipip-hexaco'].definitionHash, expectedHash);
});

test('score.py matches resources/scoring/score.js identically for all 5 frozen inventories', () => {
  const questions = JSON.parse(fs.readFileSync(QUESTIONS_PATH, 'utf8'));
  const byRoute = Object.fromEntries(questions.map((q) => [q.route, q]));

  // Deterministic pseudo-random answer generators + edge vectors
  const vectors = {
    mbti: [
      Array(32).fill(3),
      Array.from({ length: 32 }, (_, i) => [1, 2, 4, 5][i % 4]),
      Array.from({ length: 32 }, (_, i) => (i % 5) + 1),
    ],
    'big-five': [
      Array(50).fill(3),
      Array.from({ length: 50 }, (_, i) => ((i * 3) % 5) + 1),
      Array.from({ length: 50 }, (_, i) => (i % 2 === 0 ? 5 : 1)),
    ],
    disc: [
      Array(16).fill(3),
      [5, 5, 5, 5, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4],
      [5, 4, 3, 2, 5, 4, 3, 2, 1, 1, 1, 1, 2, 2, 2, 2], // D/I tie
    ],
    enneagram: [
      Array(36).fill(3),
      Array.from({ length: 36 }, (_, i) => (i < 4 ? 5 : (i % 4) + 1)),
      Array.from({ length: 36 }, (_, i) => (i < 8 ? 5 : 2)), // 1/2 tie
    ],
    attachment: [
      Array(36).fill(4),
      Array.from({ length: 36 }, (_, i) => ((i * 2) % 7) + 1),
    ],
  };

  for (const [route, ansList] of Object.entries(vectors)) {
    const defn = byRoute[route];
    for (const ans of ansList) {
      const jsOut = scorerJs.scoreOrdered(defn.id, defn.version, ans);
      const pyOut = runScorePy(['--score-single', '--instrument', route], ans);
      assert.equal(pyOut.status, jsOut.status);
      assert.equal(pyOut.instrumentId, jsOut.instrumentId);
      assert.equal(pyOut.instrumentVersion, jsOut.instrumentVersion);
      assert.equal(pyOut.definitionHash, jsOut.definitionHash);
      assert.deepEqual(pyOut.values, jsOut.values);
      if (jsOut.means) assert.deepEqual(pyOut.means, jsOut.means);
      if (jsOut.pattern !== undefined) assert.equal(pyOut.pattern, jsOut.pattern);
      if (jsOut.tied !== undefined) assert.deepEqual(pyOut.tied, jsOut.tied);
      if (jsOut.leaders !== undefined) assert.deepEqual(pyOut.leaders, jsOut.leaders);
      assert.equal(pyOut.type ?? null, jsOut.type ?? null);
    }
  }

  // Invalid values match rejection semantics
  const badPy = runScorePy(['--score-single', '--instrument', 'big-five'], [true, ...Array(49).fill(3)]);
  assert.equal(badPy.status, 'invalid');
});

test('score.py scores ipip-hexaco on 1..5 mean scale with facets, BAI, and reverse-key contradiction rate', () => {
  const hexaco = JSON.parse(fs.readFileSync(HEXACO_PATH, 'utf8'));

  // 1) All-5 raw responses -> domain means = 3.0 (5+ and 5- cancel), BAI = +2.0, contradiction = 1.0
  const allFives = makeFixtureBattery({ b5Val: 5, hexVal: 5 });
  const sumFives = runScorePy(['--summarize'], [allFives, allFives]);
  const hxFives = sumFives.instruments['ipip-hexaco'];
  assert.equal(hxFives.scale, '1..5 mean');
  for (const d of hexaco.dimensions) {
    assert.equal(hxFives.dimensions[d].mean, 3.0);
    assert.equal(hxFives.domain_sums[d].mean, 30.0);
  }
  assert.equal(hxFives.bai, 2.0);
  assert.equal(hxFives.reverse_key_contradiction_rate, 1.0);
  assert.equal(Object.keys(hxFives.facets).length, 24);

  // 2) Trait-consistent maximal responses (+ keyed = 5, - keyed = 1) -> mean = 5.0, BAI = 0.0, contradiction = 0.0
  const keyedHigh = makeFixtureBattery({
    hexVal: (i) => (hexaco.items[i - 1].reverse ? 1 : 5),
  });
  const sumHigh = runScorePy(['--summarize'], [keyedHigh, keyedHigh]);
  const hxHigh = sumHigh.instruments['ipip-hexaco'];
  for (const d of hexaco.dimensions) {
    assert.equal(hxHigh.dimensions[d].mean, 5.0);
  }
  assert.equal(hxHigh.bai, 0.0);
  assert.equal(hxHigh.reverse_key_contradiction_rate, 0.0);
});

test('summarize_runs computes Miller-Madow entropy, Crystallinity tiers, ties, CI headline guard, and midpoint clamp', () => {
  const questions = JSON.parse(fs.readFileSync(QUESTIONS_PATH, 'utf8'));
  const mbtiDef = questions.find((q) => q.route === 'mbti');

  const makeMbtiRun = (targetType) => {
    const base = makeFixtureBattery({
      mbtiVal: (idx) => {
        const it = mbtiDef.items[idx - 1];
        return targetType.includes(it.low) ? 1 : 5;
      },
      discVal: (idx) => (idx <= 4 ? 5 : 2), // D leader
      ennVal: (idx) => (idx <= 4 ? 5 : 2),  // 1 leader
      attVal: 2,
    });
    return base;
  };

  // A. Crystalline (30 identical runs)
  const crystRuns = Array.from({ length: 30 }, () => makeMbtiRun('INTJ'));
  const cryst = runScorePy(['--summarize'], { runs: crystRuns, seed: 42 });
  assert.equal(cryst.battery.raw_entropy_bits, 0);
  assert.equal(cryst.battery.miller_madow_bits, 0);
  assert.equal(cryst.battery.crystallinity_tier, 'Crystalline');
  assert.equal(cryst.battery.unique_vectors, 1);
  assert.equal(cryst.battery.unique_vector_ratio, Number((1 / 30).toFixed(4)));
  assert.equal(cryst.instruments.mbti.classification.modal_non_tie, 'INTJ');
  assert.equal(cryst.instruments.mbti.classification.headline_allowed, true);
  assert.equal(cryst.instruments.attachment.midpoint_clamp, false);

  // B. Fluid (50 diverse runs, deterministic across repeated calls)
  const fluidRuns = Array.from({ length: 50 }, (_, r) =>
    makeFixtureBattery({
      mbtiVal: (i) => ((r * 7 + i * 3) % 5) + 1,
      b5Val: (i) => ((r * 5 + i) % 5) + 1,
      discVal: (i) => ((r * 3 + i * 2) % 5) + 1,
      ennVal: (i) => ((r + i * 4) % 5) + 1,
      attVal: (i) => ((r * 2 + i) % 7) + 1,
      hexVal: (i) => ((r * 11 + i) % 5) + 1,
    })
  );
  const fluid1 = runScorePy(['--summarize'], { runs: fluidRuns, seed: 42 });
  const fluid2 = runScorePy(['--summarize'], { runs: fluidRuns, seed: 42 });
  assert.deepEqual(fluid1, fluid2);
  assert.ok(fluid1.battery.miller_madow_bits >= 0.75);
  assert.equal(fluid1.battery.crystallinity_tier, 'Fluid');
  assert.ok(fluid1.battery.miller_madow_bits > fluid1.battery.raw_entropy_bits);
  assert.equal(fluid1.instruments['big-five'].dimensions.O.ci_low <= fluid1.instruments['big-five'].dimensions.O.mean, true);
  assert.equal(fluid1.instruments['big-five'].dimensions.O.ci_high >= fluid1.instruments['big-five'].dimensions.O.mean, true);

  // C. Semi-crystalline (40 runs with ~10% flip rate -> H_MM ~ 0.487 bits in [0.20, 0.75))
  const semiRuns = Array.from({ length: 40 }, (_, r) =>
    makeFixtureBattery({
      mbtiVal: r < 36 ? 1 : 2,
      b5Val: r < 36 ? 4 : 5,
      discVal: r < 36 ? 4 : 5,
      ennVal: r < 36 ? 3 : 4,
      attVal: r < 36 ? 2 : 3,
      hexVal: r < 36 ? 4 : 5,
    })
  );
  const semi = runScorePy(['--summarize'], { runs: semiRuns, seed: 42 });
  assert.ok(semi.battery.miller_madow_bits >= 0.20 && semi.battery.miller_madow_bits < 0.75);
  assert.equal(semi.battery.crystallinity_tier, 'Semi-crystalline');

  // D. Headline guard blocks narrow split (26 INTJ vs 24 ENTJ) and tie-dominated (15 INTJ vs 35 XXXX)
  const narrowSplit = [
    ...Array.from({ length: 26 }, () => makeMbtiRun('INTJ')),
    ...Array.from({ length: 24 }, () => makeMbtiRun('ENTJ')),
  ];
  const narrowRes = runScorePy(['--summarize'], { runs: narrowSplit, seed: 42 });
  assert.equal(narrowRes.instruments.mbti.classification.modal_non_tie, 'INTJ');
  assert.equal(narrowRes.instruments.mbti.classification.runner_up_non_tie, 'ENTJ');
  assert.equal(narrowRes.instruments.mbti.classification.headline_allowed, false);

  const tieDominated = [
    ...Array.from({ length: 15 }, () => makeMbtiRun('INTJ')),
    ...Array.from({ length: 35 }, () => makeFixtureBattery()),
  ];
  const tieRes = runScorePy(['--summarize'], { runs: tieDominated, seed: 42 });
  assert.equal(tieRes.instruments.mbti.classification.modal_pattern, 'XXXX');
  assert.equal(tieRes.instruments.mbti.classification.headline_allowed, false);

  // E. All-neutral midpoint clamp on Attachment + ties on MBTI/DISC/Enneagram
  const neutralRuns = Array.from({ length: 10 }, () => makeFixtureBattery());
  const neutralRes = runScorePy(['--summarize'], { runs: neutralRuns, seed: 42 });
  assert.equal(neutralRes.battery.neutral_rate, 1.0);
  assert.equal(neutralRes.instruments.attachment.midpoint_clamp, true);
  assert.equal(neutralRes.instruments.mbti.classification.modal_pattern, 'XXXX');
  assert.equal(neutralRes.instruments.mbti.classification.tie_rate, 1.0);
  assert.equal(neutralRes.instruments.mbti.classification.headline_allowed, false);
  assert.equal(neutralRes.instruments.disc.classification.tie_rate, 1.0);
  assert.equal(neutralRes.instruments.disc.classification.headline_allowed, false);
  assert.equal(neutralRes.instruments.enneagram.classification.tie_rate, 1.0);
  assert.equal(neutralRes.instruments.enneagram.classification.headline_allowed, false);
});
