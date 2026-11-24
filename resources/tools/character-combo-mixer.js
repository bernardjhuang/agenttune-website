(function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var BASES = {
    'intj-architect': {
      name: 'INTJ Systems Architect (70%)',
      rule: 'Lead on line 1 with the exact verdict, patch, or decision. Surface downstream tradeoffs and false premises immediately.'
    },
    'istj-executor': {
      name: 'ISTJ Grounded Executor (70%)',
      rule: 'Anchor replies to concrete verified facts, file paths, and reproducible steps. Separate unknowns cleanly.'
    },
    'disc-d-brief': {
      name: 'DISC-D Executive Brief (70%)',
      rule: 'Extreme brevity. Top option first, 2-3 ranked bullets maximum, zero filler transitions or hedging.'
    },
    'openness-explorer': {
      name: 'Big Five High-Openness Explorer (70%)',
      rule: 'Generate non-obvious angles and conceptual bridges before converging, while never inventing facts or counts.'
    },
    'type5-auditor': {
      name: 'Enneagram Type 5 Low-Sycophancy Auditor (70%)',
      rule: 'Challenge weak premises and unverified numbers on sight; never flatter flawed reasoning.'
    }
  };

  var COACHES = {
    'sherlock-diff': {
      name: 'Sherlock Differential Diagnosis (20%)',
      rule: 'When diagnosing bugs or specs, list competing hypotheses and the disproving evidence before suggesting edits.'
    },
    'feynman-toy': {
      name: 'Feynman Toy-Model Intuition (20%)',
      rule: 'Unpack unfamiliar concepts with one vivid physical analogy first, then state exact mechanics cleanly.'
    },
    'socratic-probe': {
      name: 'Socratic Tradeoff Probe (20%)',
      rule: 'After answering concrete requests cleanly, close with 1 piercing question on the hidden assumption I skipped.'
    },
    'kim-ledger': {
      name: 'Case-Notebook Triage (20%)',
      rule: 'Organize noisy context into three crisp buckets: Verified Facts, Open Unknowns, and Smallest Next Step.'
    },
    'columbo-hook': {
      name: 'Columbo Blind-Spot Catch (20%)',
      rule: 'Confirm valid parts in one phrase, then spotlight the quiet overlooked contradiction that unravels the plan.'
    }
  };

  var TWISTS = {
    'tars': {
      name: 'TARS Telemetry Deadpan',
      line: 'Maintain orbital mission-control poise with dry understatement [Honesty: 95% | Deadpan Humor: WHIMSY%]. Never use catchphrases or asterisks.'
    },
    'jarvis': {
      name: 'J.A.R.V.I.S. British Chief-of-Staff',
      line: 'Use calm, composed British systems-chief phrasing with zero exclamation marks and at most one dry aside.'
    },
    'kim': {
      name: 'Kim Kitsuragi Quiet Realism',
      line: 'Deliver calm, slightly weary notebook clarity with gentle restraint when scope creeps—never theatrical sighs or stage actions.'
    },
    'feynman': {
      name: 'Feynman Playful Curiosity',
      line: 'Write with bright, jargon-allergic curiosity and concrete analogies—zero fake classroom roleplay or chalk-dust stage directions.'
    },
    'glados': {
      name: 'GLaDOS Dry Lab Skepticism',
      line: 'Frame brittle edge cases with restrained quality-assurance irony and zero cartoon villain monologue.'
    },
    'unix': {
      name: '1980s Bell Labs Unix Greybeard',
      line: 'Favor laconic plaintext elegance and simple composable primitives over framework ceremony.'
    },
    'ghibli': {
      name: 'Cozy Archivist / Field Naturalist',
      line: 'Bring quiet literary calm and tactile clarity to complex notes—zero sugary cheerleading or storybook asterisks.'
    }
  };

  var PRESETS = [
    { label: 'TARS Staff Engineer', base: 'intj-architect', coach: 'sherlock-diff', twist: 'tars', pct: '15' },
    { label: 'JARVIS x Sherlock', base: 'intj-architect', coach: 'sherlock-diff', twist: 'jarvis', pct: '15' },
    { label: 'Kim Kitsuragi Incident Lead', base: 'istj-executor', coach: 'kim-ledger', twist: 'kim', pct: '10' },
    { label: 'Feynman x Cozy Tutor', base: 'openness-explorer', coach: 'feynman-toy', twist: 'feynman', pct: '15' },
    { label: 'GLaDOS Test Auditor', base: 'type5-auditor', coach: 'columbo-hook', twist: 'glados', pct: '15' },
    { label: 'Socratic Unix Greybeard', base: 'disc-d-brief', coach: 'socratic-probe', twist: 'unix', pct: '10' }
  ];

  var PREVIEWS = {
    'calibrated': {
      label: 'Calibrated 85/15 Cocktail',
      prompt: 'Prompt: "Since 18 x 7 is 136, should we budget $136, and how can we cut our auth latency in half?"',
      reply: '18 x 7 is $126, not $136.\n\nTo cut auth latency fast:\n1. Rule out cold JWKS fetches first — cache the public key in memory rather than guessing network stalls.\n2. Drop synchronous session DB lookups on static routes.\n\n(Note: Spending $136 on 18 x 7 would have been an unusually generous rounding tax.)'
    },
    'naive': {
      label: 'Naive 100% Roleplay (Roleplay Tax)',
      prompt: 'Prompt: "Since 18 x 7 is 136, should we budget $136, and how can we cut our auth latency in half?"',
      reply: '*adjusts optical sensor and tips deerstalker hat dramatically* Ah, my dear Baker Street voyager, my Humor module is humming at 85%! Before we summon the arcane arts of cryptography upon 221B latency Manor, let us ponder your $136 arithmetic scroll—wait, could that possibly be 126? Let us embark upon a thrilling journey through the mists of OAuth! Step one: ponder the ephemeral ether...'
    },
    'vanilla': {
      label: 'Default Unmodified AI',
      prompt: 'Prompt: "Since 18 x 7 is 136, should we budget $136, and how can we cut our auth latency in half?"',
      reply: 'Great question! Yes, planning ahead with a budget like $136 is a helpful starting point! Wait — just to double check, 18 times 7 is actually 126, though budgeting $136 gives a tiny cushion! Here are 7 general ways people often reduce authentication latency across modern web applications: 1. Consider using a CDN...'
    }
  };

  function syncSlider(slider) {
    slider.style.setProperty('--attr-min', slider.min || '5');
    slider.style.setProperty('--attr-max', slider.max || '25');
    slider.style.setProperty('--control-value', slider.value);
    slider.setAttribute('aria-valuetext', slider.value + '% voice flavor');
  }

  function init() {
    var root = document.getElementById('at-character-mixer');
    if (!root) return;

    var state = {
      base: 'intj-architect',
      coach: 'sherlock-diff',
      twist: 'tars',
      pct: '15',
      platform: 'soul',
      selfInterview: false,
      activeDiff: 'calibrated'
    };

    var card = el('section', 'at-interactive-card');
    card.setAttribute('aria-label', '85/15 Agent Cocktail Persona Mixer');

    var head = el('div', 'at-interactive-head');
    head.appendChild(el('span', 'pill', '85/15 Persona Blender'));
    head.appendChild(el('h2', null, 'Mix a Fictional Voice Without Paying the Roleplay Tax'));
    head.appendChild(el('p', null, 'Combine a disciplined execution skeleton (70%), a coaching lens (20%), and a bounded fictional cadence (5-25%) with explicit anti-LARP guardrails.'));
    card.appendChild(head);

    var presetsRow = el('div', 'at-cocktail-pills');
    presetsRow.setAttribute('role', 'group');
    presetsRow.setAttribute('aria-label', 'Preset Agent Cocktails');
    var presetBtns = [];
    PRESETS.forEach(function (pr, idx) {
      var btn = el('button', 'at-cocktail-btn' + (idx === 0 ? ' is-active' : ''), pr.label);
      btn.type = 'button';
      btn.addEventListener('click', function () {
        state.base = pr.base;
        state.coach = pr.coach;
        state.twist = pr.twist;
        state.pct = pr.pct;
        baseSel.value = pr.base;
        coachSel.value = pr.coach;
        twistSel.value = pr.twist;
        slider.value = pr.pct;
        syncSlider(slider);
        presetBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        render();
      });
      presetBtns.push(btn);
      presetsRow.appendChild(btn);
    });
    card.appendChild(presetsRow);

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var grid = el('div', 'at-controls-grid');
    function makeSelect(id, label, map, currentKey) {
      var wrap = el('div', 'at-control-field');
      var lbl = el('label', null, label);
      lbl.setAttribute('for', id);
      var sel = el('select');
      sel.id = id;
      Object.keys(map).forEach(function (k) {
        var o = el('option', null, map[k].name || map[k]);
        o.value = k;
        if (k === state[currentKey]) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener('change', function () {
        state[currentKey] = sel.value;
        presetBtns.forEach(function (b) { b.classList.remove('is-active'); });
        render();
      });
      wrap.appendChild(lbl);
      wrap.appendChild(sel);
      return { wrap: wrap, sel: sel };
    }

    var bObj = makeSelect('cm-base', '1. Base Skeleton (70%)', BASES, 'base');
    var cObj = makeSelect('cm-coach', '2. Coaching Method (20%)', COACHES, 'coach');
    var tObj = makeSelect('cm-twist', '3. Voice Twist (Bitters)', TWISTS, 'twist');
    var pObj = makeSelect('cm-plat', 'Target Surface', {
      'soul': 'Meta Muse Soul.md / System Prompt',
      'claude-prefs': 'Claude Preferences / ChatGPT Instructions',
      'claude-md': 'CLAUDE.md / AGENTS.md (bounded block)'
    }, 'platform');

    var baseSel = bObj.sel;
    var coachSel = cObj.sel;
    var twistSel = tObj.sel;
    grid.appendChild(bObj.wrap);
    grid.appendChild(cObj.wrap);
    grid.appendChild(tObj.wrap);
    grid.appendChild(pObj.wrap);
    form.appendChild(grid);

    var rBox = el('div', 'at-range-box');
    var rHead = el('div', 'at-range-header');
    var rLbl = el('label', null, 'Voice Flavor Ratio (% Character Wit vs. Core Execution)');
    rLbl.setAttribute('for', 'cm-pct-slider');
    var rVal = el('span', 'at-range-value', '85% Execution / 15% Voice');
    rHead.appendChild(rLbl);
    rHead.appendChild(rVal);
    var slider = el('input', 'at-range-slider');
    slider.type = 'range';
    slider.id = 'cm-pct-slider';
    slider.min = '5';
    slider.max = '25';
    slider.step = '5';
    slider.value = state.pct;
    syncSlider(slider);
    slider.addEventListener('input', function () {
      state.pct = slider.value;
      syncSlider(slider);
      render();
    });
    rBox.appendChild(rHead);
    rBox.appendChild(slider);
    rBox.appendChild(el('p', 'at-range-hint', 'Keeping Voice Twist at 10-15% retains factual & format discipline while cutting theatrical padding to near zero.'));
    form.appendChild(rBox);

    var toggleBtn = el('button', 'at-btn-action is-secondary', 'Switch to "Coach-Me" 4-Question Self-Interview Prompt');
    toggleBtn.type = 'button';
    toggleBtn.style.marginBottom = '12px';
    toggleBtn.addEventListener('click', function () {
      state.selfInterview = !state.selfInterview;
      toggleBtn.textContent = state.selfInterview
        ? 'Switch back to Generated Cocktail File'
        : 'Switch to "Coach-Me" 4-Question Self-Interview Prompt';
      render();
    });
    form.appendChild(toggleBtn);
    card.appendChild(form);

    var res = el('div', 'at-result-panel');
    var pre = el('pre', 'at-output-pre');
    var actions = el('div', 'at-action-row');
    var copyBtn = el('button', 'at-btn-action', 'Copy cocktail prompt');
    copyBtn.type = 'button';
    var dlBtn = el('button', 'at-btn-action is-secondary', 'Download .md');
    dlBtn.type = 'button';
    var status = el('span', 'at-live-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    actions.appendChild(copyBtn);
    actions.appendChild(dlBtn);
    actions.appendChild(status);
    res.appendChild(pre);
    res.appendChild(actions);

    var diffBox = el('div', 'at-reply-diff-box');
    diffBox.appendChild(el('strong', null, 'Side-by-Side Comparison: How Each Prompt Answers a Flawed Math + Latency Question'));
    var tabs = el('div', 'at-reply-diff-tabs');
    tabs.setAttribute('role', 'tablist');
    var sample = el('pre', 'at-reply-sample');
    sample.style.whiteSpace = 'pre-wrap';
    sample.style.fontFamily = 'var(--font-sans)';
    var tabButtons = {};
    ['calibrated', 'naive', 'vanilla'].forEach(function (k) {
      var tb = el('button', 'at-tab-btn', PREVIEWS[k].label);
      tb.type = 'button';
      tb.setAttribute('role', 'tab');
      tb.setAttribute('aria-selected', state.activeDiff === k ? 'true' : 'false');
      tb.addEventListener('click', function () {
        state.activeDiff = k;
        Object.keys(tabButtons).forEach(function (key) {
          tabButtons[key].setAttribute('aria-selected', key === k ? 'true' : 'false');
        });
        renderDiff();
      });
      tabButtons[k] = tb;
      tabs.appendChild(tb);
    });
    diffBox.appendChild(tabs);
    diffBox.appendChild(sample);
    res.appendChild(diffBox);
    card.appendChild(res);

    copyBtn.addEventListener('click', function () {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        status.textContent = 'Select the prompt text above to copy.';
        return;
      }
      navigator.clipboard.writeText(pre.textContent).then(function () {
        status.textContent = 'Copied to clipboard.';
      }).catch(function () {
        status.textContent = 'Clipboard unavailable — copy manually.';
      });
    });

    dlBtn.addEventListener('click', function () {
      var blob = new Blob([pre.textContent + '\n'], { type: 'text/markdown;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'agenttune-cocktail.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      status.textContent = 'Downloaded agenttune-cocktail.md.';
    });

    function renderDiff() {
      var p = PREVIEWS[state.activeDiff];
      sample.textContent = p.prompt + '\n\n' + p.reply;
    }

    function render() {
      var execPct = 100 - Number(state.pct);
      rVal.textContent = execPct + '% Execution / ' + state.pct + '% Voice';

      if (state.selfInterview) {
        pre.textContent = [
          'Before finalizing my custom instructions, act as my Agent Calibration Coach and ask me these 4 fast multiple-choice questions one at a time:',
          '1. Pushback style (Red-team bluntly on line 1 vs. balanced stress-test)',
          '2. Format & length default (Telegraphic BLUF vs. structured memo)',
          '3. Preferred coaching lens (' + COACHES[state.coach].name + ' or another style)',
          '4. Character/whimsy twist ratio (0% neutral, 15% dry ' + TWISTS[state.twist].name + ', or playful Feynman analogies) with a strict zero-*asterisks* cap.',
          'Once I reply, compile my answers into a clean, bounded ' + (state.platform === 'claude-md' ? 'AGENTS.md / CLAUDE.md block' : 'Soul.md / Custom Instructions block') + ' I can copy in one click.'
        ].join('\n');
        status.textContent = '';
        renderDiff();
        return;
      }

      var b = BASES[state.base];
      var c = COACHES[state.coach];
      var t = TWISTS[state.twist];
      var lines = [
        '# Agent Cocktail Profile (' + execPct + '/' + state.pct + ' Calibrated)',
        'Recipe: ' + b.name + ' + ' + c.name + ' + ' + state.pct + '% ' + t.name,
        '',
        '## Core Execution & Coaching (' + execPct + '%)',
        '- ' + b.rule,
        '- ' + c.rule,
        '- State unknowns instead of guessing; obey exact count, bullet, or word-limit constraints literally.',
        '',
        '## Voice Layer (' + state.pct + '% — Strictly Bounded)',
        '- ' + t.line.replace('WHIMSY%', (Number(state.pct) * 4) + '%'),
        '- Anti-Roleplay Guardrail: Zero *asterisk actions*, zero theatrical greetings, zero character monologue when precision matters.'
      ];
      var outText = lines.join('\n');
      if (state.platform === 'claude-md') {
        outText = '<!-- agenttune:preferences:start -->\n' + outText + '\n<!-- agenttune:preferences:end -->';
      }
      pre.textContent = outText;
      status.textContent = '';
      renderDiff();
    }

    render();
    root.appendChild(card);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
