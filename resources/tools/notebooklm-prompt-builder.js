(function () {
  'use strict';

  var FORMATS = {
    brief: {
      label: 'Executive Brief (Fast Takeaway)',
      directive: 'Open in the first 30 seconds with the 3 most important takeaways and concrete numbers from the sources. Skip generic podcast banter and small talk.'
    },
    debate: {
      label: 'Red-Team Debate (Skeptical Critique)',
      directive: 'Have Host A defend the core thesis of the uploaded sources while Host B actively stress-tests weak assumptions, missing data, and counterarguments cited in the text.'
    },
    deep: {
      label: 'Technical Deep-Dive (Mechanism First)',
      directive: 'Skip beginner definitions. Focus on exact mechanisms, edge cases, methodology limits, and where two uploaded sources disagree.'
    },
    study: {
      label: 'Exam / Study Coach (Active Recall)',
      directive: 'Break the material into 4 clear mental models, link each to a concrete example from the sources, and end with 5 rapid-fire self-test questions.'
    }
  };

  var AUDIENCES = {
    expert: 'Assume a senior practitioner who already knows industry basics; go straight to non-obvious tradeoffs.',
    operator: 'Assume a busy decision-maker focused on cost, risk, timeline, and next actions.',
    beginner: 'Explain every technical term in plain English using concrete analogies grounded strictly in the sources.'
  };

  var TONES = {
    crisp: 'Keep host banter minimal, crisp, and analytical. Never hype weak claims.',
    warm: 'Keep the conversation warm, clear, and well-paced without exaggeration or filler.',
    blunt: 'Be candid and skeptical: explicitly call out when the uploaded documents leave a key question unanswered.'
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function init() {
    var root = document.getElementById('at-notebooklm-builder');
    if (!root) return;

    var state = { format: 'brief', audience: 'operator', tone: 'crisp', focus: '' };

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', 'Interactive NotebookLM Audio Overview & Chat Prompt Builder'));
    root.appendChild(el('p', 'at-widget-sub', 'Dial in how the two Audio Overview hosts frame your uploaded PDFs, docs, or transcripts, then paste directly into NotebookLM Studio → Customize.'));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var grid = el('div', 'at-widget-grid');

    function makeSelect(id, label, key, opts) {
      var wrap = el('div', 'at-field');
      var lab = el('label', '', label);
      lab.htmlFor = id;
      var sel = el('select');
      sel.id = id;
      sel.name = key;
      opts.forEach(function (pair) {
        var o = document.createElement('option');
        o.value = pair[0];
        o.textContent = pair[1];
        sel.appendChild(o);
      });
      sel.value = state[key];
      sel.addEventListener('change', function () {
        state[key] = sel.value;
        render();
      });
      wrap.appendChild(lab);
      wrap.appendChild(sel);
      return wrap;
    }

    grid.appendChild(makeSelect('nlm-format', 'Episode / briefing style', 'format', [
      ['brief', 'Executive Brief (Fast Takeaway)'],
      ['debate', 'Red-Team Debate (Skeptical Critique)'],
      ['deep', 'Technical Deep-Dive (Mechanism First)'],
      ['study', 'Study Coach (Active Recall)']
    ]));
    grid.appendChild(makeSelect('nlm-audience', 'Target listener level', 'audience', [
      ['operator', 'Busy operator / decision-maker'],
      ['expert', 'Senior practitioner / technical'],
      ['beginner', 'Plain-English learner']
    ]));
    grid.appendChild(makeSelect('nlm-tone', 'Host register & banter', 'tone', [
      ['crisp', 'Crisp & low-banter'],
      ['blunt', 'Candid & skeptical'],
      ['warm', 'Warm & conversational']
    ]));
    form.appendChild(grid);

    var focusField = el('div', 'at-field');
    var focusLab = el('label', '', 'Specific angle or question to prioritize (optional)');
    focusLab.htmlFor = 'nlm-focus';
    var focusInp = el('input');
    focusInp.type = 'text';
    focusInp.id = 'nlm-focus';
    focusInp.name = 'focus';
    focusInp.placeholder = 'e.g., Focus on financial risks in Q3 filings and ignore marketing intros';
    focusInp.addEventListener('input', function () {
      state.focus = focusInp.value;
      render();
    });
    focusField.appendChild(focusLab);
    focusField.appendChild(focusInp);
    form.appendChild(focusField);

    var outMeta = el('div', 'at-out-meta');
    outMeta.appendChild(el('span', '', 'Paste into NotebookLM → Studio → Audio Overview → Customize'));
    var charEl = el('span', '');
    outMeta.appendChild(charEl);
    form.appendChild(outMeta);

    var outArea = el('textarea', 'at-code-out');
    outArea.id = 'nlm-out';
    outArea.readOnly = true;
    outArea.rows = 8;
    outArea.setAttribute('aria-label', 'Generated NotebookLM Audio Overview steering prompt');
    form.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy Audio Overview prompt');
    copyBtn.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied! Paste into NotebookLM Studio → Audio Overview → Customize.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard blocked—press Ctrl/Cmd+C to copy.';
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

    function render() {
      var f = FORMATS[state.format] || FORMATS.brief;
      var lines = [
        'Format: ' + f.label + '.',
        f.directive,
        AUDIENCES[state.audience],
        TONES[state.tone],
        'Stay strictly grounded in the uploaded sources; explicitly state when the sources omit evidence instead of speculating.'
      ];
      if (state.focus.trim()) {
        lines.splice(1, 0, 'Priority focus: ' + state.focus.trim());
      }
      var text = lines.join('\n\n');
      outArea.value = text;
      charEl.textContent = text.length + ' chars';
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
