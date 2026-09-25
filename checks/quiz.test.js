const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { quiz, ROOT } = require('./browser-fixture.cjs');
const { scoreMbti } = require('../quiz-utils');
const html = fs.readFileSync(ROOT + '/tests/mbti.html', 'utf8');
const items = vm.runInNewContext(/const ITEMS = (\[[\s\S]*?\n    \]);/.exec(html)[1]);

test('neutral, missing, invalid, and balanced answers never silently become INTJ', () => {
  for (const v of [3, null, undefined, 0, 6, NaN]) {
    const result = scoreMbti(Array(32).fill(v), items);
    assert.equal(result.type, null); assert.equal(result.pattern, 'XXXX');
  }
  const answers = items.map((item, i) => items.filter(x => x.axis === item.axis).indexOf(item) < 4 ? 1 : 5);
  // A deliberate equal split by each item's mapped letter, not by wording.
  for (const axis of ['EI','SN','TF','JP']) {
    items.filter(x => x.axis === axis).forEach((item, i) => { answers[items.indexOf(item)] = item.low === axis[i < 4 ? 0 : 1] ? 1 : 5; });
  }
  assert.equal(scoreMbti(answers, items).pattern, 'XXXX');
  assert.equal(scoreMbti(Array(32).fill(null), items, { EI:'I', SN:'N', TF:'T', JP:'J' }).type, null);
});

test('all 16 clear score patterns map correctly; optional preferences resolve only ties', () => {
  for (const E of 'EI') for (const S of 'SN') for (const T of 'TF') for (const J of 'JP') {
    const target = E + S + T + J;
    const a = items.map(item => target.includes(item.low) ? 1 : 5);
    assert.equal(scoreMbti(a, items, { EI: E === 'E' ? 'I' : 'E' }).type, target);
  }
  const result = scoreMbti(Array(32).fill(3), items, { EI:'I', SN:'N', TF:'T', JP:'J' });
  assert.equal(result.type, 'INTJ'); assert.deepEqual(result.tied, ['EI','SN','TF','JP']);
  assert.equal(scoreMbti(Array(32).fill(3), items, { EI:'T' }).pattern, 'XXXX');
});

for (const name of ['mbti','enneagram','disc','attachment','big-five']) {
  test(`${name}: rapid clicks, double-click across a transition, and keyboard repeat cannot skip questions`, () => {
    const f = quiz(name), progress = f.ids.get('quiz-progress-current');
    f.buttons[0].click(); f.buttons[0].click(); f.tick(220);
    assert.equal(Number(progress.textContent), 2);
    f.buttons[0].fire('click', { detail: 2 }); f.tick(220);
    assert.equal(Number(progress.textContent), 2);
    f.dispatch('keydown', { key:'1', repeat:true }); f.tick(220);
    assert.equal(Number(progress.textContent), 2);
    f.dispatch('keydown', { key:'2', repeat:false }); f.tick(220);
    assert.equal(Number(progress.textContent), 3);
  });
  test(`${name}: back and retake cancel pending advancement`, () => {
    const f = quiz(name), progress = f.ids.get('quiz-progress-current');
    f.buttons[0].click(); f.tick(220);
    f.buttons[1].click(); f.ids.get('quiz-back').click(); f.tick(220);
    assert.equal(Number(progress.textContent), 1);
    f.buttons[0].click(); f.ids.get('quiz-restart').click(); f.ids.get('quiz-start').click(); f.tick(220);
    assert.equal(Number(progress.textContent), 1);
    assert.ok(f.buttons.every(b => b.attributes['aria-checked'] === 'false'));
  });
}

test('MBTI neutral UI stays undetermined until four explicit preferences; retake drops a late fetch', async () => {
  const f = quiz('mbti'); let resolveFetch;
  f.ctx.fetchTuning = () => new Promise(resolve => { resolveFetch = resolve; });
  for (let i = 0; i < 32; i++) { f.buttons[2].click(); f.tick(220); }
  assert.equal(f.ids.get('quiz-result-code').textContent, 'XXXX');
  assert.equal(f.ids.get('quiz-result-name').textContent, 'Undetermined');
  assert.equal(f.ids.get('quiz-tuning-output').hidden, true);
  assert.equal(resolveFetch, undefined);
  for (const index of [1,1,0,0]) {
    const field = f.ids.get('quiz-tiebreakers').children.find(e => e.tagName === 'FIELDSET');
    field.children[index + 1].click();
  }
  assert.equal(f.ids.get('quiz-result-code').textContent, 'INTJ');
  assert.match(f.ids.get('quiz-result-blurb').textContent, /stated preferences/);
  assert.equal(f.ids.get('quiz-tuning-output').hidden, false);
  f.ids.get('quiz-restart').click();
  const preview = f.ids.get('quiz-editor-code').innerHTML;
  resolveFetch('WRONG STALE RESULT'); await Promise.resolve();
  assert.equal(f.ids.get('quiz-editor-code').innerHTML, preview);
  f.ids.get('quiz-start').click();
  for (let i = 0; i < 32; i++) { f.buttons[2].click(); f.tick(220); }
  assert.equal(f.ids.get('quiz-result-code').textContent, 'XXXX');
});
