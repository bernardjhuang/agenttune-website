const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { quiz, ROOT } = require('./browser-fixture.cjs');
const { scoreMbti } = require('../quiz-utils');
const items = require('../research/data/september-2026-instruments.json').mbti.items;

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

for (const name of ['big-five']) {
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
    assert.ok(f.buttons.every(b => b.attributes['aria-pressed'] === 'false'));
  });
}

test('withdrawn questionnaires expose availability and alternatives, with no runner or question payload',()=>{
 for(const name of ['mbti','enneagram','disc','attachment']){
  const html=fs.readFileSync(ROOT+'/tests/'+name+'.html','utf8');
  assert.match(html,/Questionnaire currently unavailable/);assert.match(html,/custom-instructions-generator/);assert.doesNotMatch(html,/const ITEMS|id="quiz-start"|"@type":"Quiz"/);
  assert.match(fs.readFileSync(ROOT+'/tests/'+name+'.md','utf8'),/unavailable_pending_rights/);
 }
});

for (const name of ['big-five']) {
  test(`${name}: focus follows quiz screens and shortcuts leave browser/form keys alone`, () => {
    const f=quiz(name), card=f.ids.get('quiz-card'), progress=f.ids.get('quiz-progress-current');
    assert.equal(f.document.activeElement,card);
    assert.match(card.getAttribute('aria-label'),/^Question 1 of /);
    for(const event of [{key:'1',ctrlKey:true},{key:'1',metaKey:true},{key:'1',altKey:true},{key:'1',target:{tagName:'INPUT'}},{key:'Backspace',target:{isContentEditable:true}}]) {f.dispatch('keydown',event);f.tick(220);}
    assert.equal(Number(progress.textContent),1);
    f.dispatch('keydown',{key:'3'});f.tick(220);
    assert.equal(Number(progress.textContent),2);
    assert.match(f.ids.get('quiz-announcement').textContent,/Question 2 of /);
    const neutral=name==='attachment'?4:3;
    for(let i=1;i<f.ctx.__quiz.items.length;i++){f.buttons[neutral-1].click();f.tick(220);}
    assert.equal(f.document.activeElement,f.ids.get('quiz-result-code'));
    f.ids.get('quiz-restart').click();assert.equal(f.document.activeElement,f.ids.get('quiz-start'));
  });
  test(`${name}: clipboard failures are visible, recoverable, and never report success`, async()=>{
    const f=quiz(name), button=f.ids.get('quiz-copy-tuning');
    f.ctx.navigator.clipboard.writeText=async()=>{throw new Error('Permission denied');};
    assert.equal(await f.ctx.ATQuiz.copyTuning('Example',button),false);
    assert.match(button.textContent,/Copy unavailable/);
    delete f.ctx.navigator.clipboard;
    assert.equal(await f.ctx.ATQuiz.copyTuning('Example',button),false);
    f.ctx.navigator.clipboard={writeText:async()=>{}};
    assert.equal(await f.ctx.ATQuiz.copyTuning('Example',button),true);
    assert.equal(button.textContent,'Copied ✓');
  });
}
