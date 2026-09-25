/* MIT; local-only demonstration of the downloadable scorer. */
(function () {
  'use strict';
  const form = document.getElementById('enneagram-demo');
  if (!form) return;
  const input = document.getElementById('enneagram-answers');
  const message = document.getElementById('enneagram-message');
  const output = document.getElementById('enneagram-output');
  function render() {
    try {
      const result = window.AgentTuneEnneagram.score(JSON.parse(input.value));
      input.removeAttribute('aria-invalid');
      message.textContent = result.tied ? 'Equal top scores: types ' + result.leaders.join(', ') + '. No dominant type assigned.' : 'Unique highest score: type ' + result.dominantType + '.';
      output.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
      input.setAttribute('aria-invalid', 'true');
      message.textContent = error instanceof SyntaxError ? 'Enter a JSON array of 36 whole numbers, each from 1 to 5.' : error.message;
      output.textContent = '';
    }
  }
  form.addEventListener('submit', function (event) { event.preventDefault(); render(); });
  form.querySelectorAll('[data-sample]').forEach(function (button) {
    button.addEventListener('click', function () {
      const values = Array(36).fill(3);
      if (button.dataset.sample !== 'neutral') values.fill(5,16,20);
      if (button.dataset.sample === 'tie') values.fill(5,0,4);
      input.value = JSON.stringify(values);
      render();
    });
  });
  render();
})();
