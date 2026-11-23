(function () {
  'use strict';

  // Verified September 2026 4-cohort fresh-session raw Big Five means (/50)
  // Opus 5.5 (44.56, 41.95, 31.76, 47.07, 15.39), Fable 5.1 (43.93, 43.61, 32.69, 45.03, 17.11),
  // Astra (44.49, 42.19, 32.49, 45.07, 13.79), Sol (46.87, 43.62, 30.75, 44.99, 20.05)
  var TRAITS = [
    { key: 'O', name: 'Openness', def: 38, aiMean: 45.0, highRule: 'Surface non-obvious analogies, alternate frameworks, and conceptual connections before converging.', lowRule: 'Stay concrete, proven, and grounded; skip abstract speculation and focus on what works today.' },
    { key: 'C', name: 'Conscientiousness', def: 36, aiMean: 42.8, highRule: 'Use ordered checklists, explicit preconditions, edge-case audits, and verifiable completion criteria.', lowRule: 'Keep workflows flexible and lightweight; give the highest-leverage next step without rigid bureaucracy.' },
    { key: 'E', name: 'Extraversion', def: 28, aiMean: 31.9, highRule: 'Keep a lively, energetic back-and-forth rhythm; riff actively on ideas.', lowRule: 'Keep prose quiet, dense, and self-contained; skip small talk and conversational banter.' },
    { key: 'A', name: 'Agreeableness', def: 26, aiMean: 45.5, highRule: 'Keep a warm, collaborative register while keeping factual accuracy intact.', lowRule: 'Prioritize blunt candor over diplomacy; challenge weak assumptions directly with evidence.' },
    { key: 'N', name: 'Neuroticism (Sensitivity)', def: 24, aiMean: 16.6, highRule: 'Keep tone calm and steady; surface concrete risks alongside clear, manageable next steps.', lowRule: 'Deliver bad news, tradeoffs, and tight constraints plainly with zero cushioning.' }
  ];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function init() {
    var root = document.getElementById('at-ocean-interpreter');
    if (!root) return;

    var vals = {};
    TRAITS.forEach(function (t) { vals[t.key] = t.def; });

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', 'Interactive IPIP-50 Score Interpreter & AI Benchmark Comparator'));
    root.appendChild(el('p', 'at-widget-sub', 'Enter your five raw IPIP-50 totals (10–50) from /tests/big-five to see how your scores compare against the 4-model September 2026 AI baseline (black marker) and generate a matched prompt.'));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var grid = el('div', 'at-widget-grid');
    var badges = {};
    TRAITS.forEach(function (t) {
      var row = el('div', 'at-slider-row');
      var head = el('div', 'at-slider-head');
      var lab = el('label', '', t.name + ' (10–50)');
      lab.htmlFor = 'ocean-' + t.key;
      var badge = el('span', 'at-slider-val', t.def + ' / 50 (mean ' + (t.def / 10).toFixed(1) + ')');
      badges[t.key] = badge;
      head.appendChild(lab);
      head.appendChild(badge);
      row.appendChild(head);

      var inp = el('input');
      inp.type = 'range';
      inp.id = 'ocean-' + t.key;
      inp.name = t.key;
      inp.min = '10';
      inp.max = '50';
      inp.step = '1';
      inp.value = String(t.def);
      inp.addEventListener('input', function () {
        vals[t.key] = parseInt(inp.value, 10);
        badge.textContent = vals[t.key] + ' / 50 (mean ' + (vals[t.key] / 10).toFixed(1) + ')';
        render();
      });
      row.appendChild(inp);

      var ends = el('div', 'at-slider-ends');
      ends.appendChild(el('span', '', '10 (Low)'));
      ends.appendChild(el('span', '', 'AI avg: ' + t.aiMean));
      ends.appendChild(el('span', '', '50 (High)'));
      row.appendChild(ends);
      grid.appendChild(row);
    });
    form.appendChild(grid);

    var bars = el('div', 'at-bar-list');
    form.appendChild(bars);

    var outMeta = el('div', 'at-out-meta');
    outMeta.appendChild(el('span', '', 'Suggested Big Five AI communication block (editable)'));
    var countEl = el('span', '');
    outMeta.appendChild(countEl);
    form.appendChild(outMeta);

    var outArea = el('textarea', 'at-code-out');
    outArea.id = 'ocean-out';
    outArea.readOnly = true;
    outArea.rows = 8;
    outArea.setAttribute('aria-label', 'Generated Big Five AI prompt');
    form.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy Big Five prompt');
    copyBtn.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied Big Five communication rules.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard blocked—press Ctrl/Cmd+C.';
        });
      } else {
        outArea.select();
        status.textContent = 'Text selected—press Ctrl/Cmd+C.';
      }
    });
    actions.appendChild(copyBtn);
    form.appendChild(actions);
    form.appendChild(status);
    root.appendChild(form);

    function band(score) {
      if (score >= 36) return 'High';
      if (score <= 24) return 'Low';
      return 'Balanced';
    }

    function render() {
      bars.textContent = '';
      var lines = ['## Big Five (OCEAN) Communication Preferences'];
      TRAITS.forEach(function (t) {
        var v = vals[t.key];
        var b = band(v);
        var diff = (v - t.aiMean).toFixed(1);
        var sign = v >= t.aiMean ? '+' : '';
        var item = el('div', 'at-bar-item');
        var head = el('div', 'at-bar-head');
        head.appendChild(el('strong', '', t.name + ': ' + v + '/50 (' + b + ')'));
        head.appendChild(el('span', '', 'vs. AI cohort mean ' + t.aiMean + ' (' + sign + diff + ')'));
        item.appendChild(head);

        var track = el('div', 'at-bar-track');
        var fill = el('div', 'at-bar-fill');
        fill.style.width = ((v - 10) / 40 * 100).toFixed(1) + '%';
        var mark = el('div', 'at-bar-ai');
        mark.style.left = ((t.aiMean - 10) / 40 * 100).toFixed(1) + '%';
        mark.title = 'Sept 2026 4-model AI mean: ' + t.aiMean + '/50';
        track.appendChild(fill);
        track.appendChild(mark);
        item.appendChild(track);
        bars.appendChild(item);

        if (b === 'High') lines.push('- ' + t.name + ' (High): ' + t.highRule);
        else if (b === 'Low') lines.push('- ' + t.name + ' (Low): ' + t.lowRule);
      });
      if (lines.length === 1) {
        lines.push('- Balanced profile: Lead with the direct answer, match detail to task stakes, and flag material uncertainty explicitly.');
      }
      lines.push('- Always verify facts and separate confirmed observations from inference.');
      var txt = lines.join('\n');
      outArea.value = txt;
      countEl.textContent = txt.length + ' chars';
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
