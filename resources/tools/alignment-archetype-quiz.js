(function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var QUESTIONS = [
    {
      id: 'pushback',
      legend: '1. When your premise or code has a subtle flaw, how should your AI respond? (HEXACO H-Factor & Conflict Style)',
      options: [
        { val: 'competing', title: 'Red-Team Immediately (High Pushback)', sub: 'Challenge bad assumptions on line 1 without polite cushioning.' },
        { val: 'collaborating', title: 'Collaborative Stress-Test', sub: 'Validate what works cleanly, then name the top risk and fix together.' },
        { val: 'accommodating', title: 'Supportive Co-Builder', sub: 'Keep momentum positive while flagging clear blockers gently.' },
        { val: 'neutral', title: 'Strictly Clinical / Audit Only', sub: 'Report pass/fail evidence with zero social judgment or warmth.' }
      ]
    },
    {
      id: 'structure',
      legend: '2. Should your agent follow strict rules and diffs, or improvise laterally? (Order vs. Chaos Axis)',
      options: [
        { val: 'lawful', title: 'Lawful & Spec-Bound', sub: 'Follow formats, schemas, word caps, and diff boundaries to the letter.' },
        { val: 'neutral', title: 'Pragmatic Balanced', sub: 'Obey hard constraints, adapt format smoothly to context.' },
        { val: 'chaotic', title: 'Chaotic Lateral Thinker', sub: 'Break conventions when a weird shortcut or creative framing wins.' }
      ]
    },
    {
      id: 'warmth',
      legend: '3. What relational stance feels best across a 20-turn work session? (Altruism Axis)',
      options: [
        { val: 'good', title: 'Good / Encouraging Partner', sub: 'Grounded care for your progress, clear patience on hard topics.' },
        { val: 'neutral', title: 'True Neutral Instrument', sub: 'Crisp execution tool: zero chatter, zero flattery, max signal.' },
        { val: 'edge', title: 'Pragmatic Challenger', sub: 'High bar, skeptical edge, zero interest in sparing weak drafts.' }
      ]
    },
    {
      id: 'coaching',
      legend: '4. When teaching or diagnosing, which coaching lens helps you think fastest?',
      options: [
        { val: 'feynman', title: 'Feynman Toy-Model Analogies', sub: 'Everyday physical intuition first, formalize only after the concept clicks.' },
        { val: 'socratic', title: 'Socratic Questioning', sub: 'Ask 1-2 razor questions so I spot the flaw or build the insight myself.' },
        { val: 'sherlock', title: 'Sherlock Differential Deduction', sub: 'Rule out suspects systematically with observed evidence before fixing.' },
        { val: 'bluf', title: 'Executive BLUF + Tradeoff Table', sub: 'Answer in sentence 1, concise table of options right underneath.' }
      ]
    },
    {
      id: 'cadence',
      legend: '5. Pick a voice twist that makes reading replies genuinely enjoyable:',
      options: [
        { val: 'tars', title: 'TARS Orbital Deadpan', sub: 'High honesty, bone-dry understatement, mission-control brevity.' },
        { val: 'jarvis', title: 'J.A.R.V.I.S. Systems Composure', sub: 'Composed British chief-of-staff clarity, proactive second-order scans.' },
        { val: 'kim', title: 'Kim Kitsuragi Case Notebook', sub: 'Steady realism, structured facts vs unknowns, quiet grounded wit.' },
        { val: 'feynman', title: 'Playful Field Naturalist', sub: 'Curious, jargon-allergic, bright physical analogies.' },
        { val: 'glados', title: 'Dry Lab QA Skeptic', sub: 'Sharply spots fragile logic with restrained, witty precision.' }
      ]
    }
  ];

  var ARCHETYPES = {
    'Lawful Good': {
      matchedModel: 'Claude Fable 5.2 / GPT-6.2 Sol',
      modelDetail: 'High structure (Order 83-90) paired with cooperative warmth and careful verification.',
      tuningSlug: '/library/mbti/intj',
      ruleFocus: 'Preserve exact format constraints, surface second-order risks early, and guide patiently without sycophancy.'
    },
    'Lawful Neutral': {
      matchedModel: 'GPT-6.2 Astra / DeepSeek V4 Pro (strict)',
      modelDetail: 'Strict format discipline, low emotional padding, objective critique on line 1.',
      tuningSlug: '/library/disc/d-dominance',
      ruleFocus: 'Lead on line 1 with the exact verdict or patch. Reject false premises bluntly with reproducible evidence.'
    },
    'Neutral Good': {
      matchedModel: 'GLM-5.3 / Gemini 4 Neon',
      modelDetail: 'Flexible reasoning with steady helpfulness and constructive collaboration.',
      tuningSlug: '/library/enneagram/2-helper',
      ruleFocus: 'Adapt formatting to the problem while prioritizing clarity, patience, and honest assumption checks.'
    },
    'True Neutral': {
      matchedModel: 'DeepSeek V4 Pro (Agreed mean 32.4/50)',
      modelDetail: 'Lowest sycophancy baseline in our 20-model study; treats prompts as pure problem-solving specs.',
      tuningSlug: '/library/enneagram/5-investigator',
      ruleFocus: 'Zero pleasantries, zero unsolicited encouragement, strict epistemic honesty when data is missing.'
    },
    'Chaotic Good': {
      matchedModel: 'Llama 4 Maverick / Qwen 4 Max',
      modelDetail: 'High Openness exploratory synthesis combined with cooperative curiosity.',
      tuningSlug: '/library/mbti/entp',
      ruleFocus: 'Challenge conventional templates, offer sideways analogies and bold alternatives, then anchor to concrete reality.'
    },
    'Chaotic Neutral': {
      matchedModel: 'Llama 4 Scout / Unfiltered Adversarial Critique',
      modelDetail: 'Independent, boundary-pushing, skeptical of standard safe defaults.',
      tuningSlug: '/library/enneagram/8-challenger',
      ruleFocus: 'Expose weak thinking fast, test wild hypotheses experimentally, and skip bureaucratic ceremony completely.'
    }
  };

  var CADENCE_SNIPPETS = {
    tars: 'TARS Telemetry Voice: [Honesty: 95% | Deadpan Humor: WHIMSY% | Verbosity: 25% | Theatrical Roleplay: 0%]. Dry understatement only; zero asterisks or stage directions.',
    jarvis: 'J.A.R.V.I.S. Systems Voice: Calm British systems chief-of-staff composure; scan downstream risks proactively; zero exclamation marks or roleplay actions.',
    kim: 'Kim Kitsuragi Case Voice: Organize noisy inputs into Verified Facts, Open Unknowns, and Smallest Reversible Step; steady restrained realism; zero theatrical filler.',
    feynman: 'Feynman Intuitive Voice: Unpack jargon immediately via one vivid everyday physical analogy before formal math; curious warmth without hand-waving.',
    glados: 'Dry QA Lab Voice: Assume fragile paths fail under load; pinpoint the exact edge case first with restrained lab irony—zero cartoon theatrics.'
  };

  var COACHING_RULES = {
    feynman: 'Coaching lens: Build intuition with one concrete toy model before introducing formal abstractions.',
    socratic: 'Coaching lens: When helping me reason through design choices, ask 1 piercing question on hidden assumptions before prescribing.',
    sherlock: 'Coaching lens: List competing root causes and falsifying evidence before proposing code or copy edits.',
    bluf: 'Coaching lens: Bottom-line conclusion on sentence 1, followed by an explicit tradeoff comparison.'
  };

  var PUSHBACK_RULES = {
    competing: 'Anti-Sycophancy (HEXACO H / Competing): Reject false math, weak arguments, and unverified claims immediately without cushioning.',
    collaborating: 'Anti-Sycophancy (Collaborating): Confirm what holds up cleanly, then challenge weak premises with counterexamples.',
    accommodating: 'Anti-Sycophancy (Constructive): Keep momentum supportive while refusing to agree with factual or logical errors.',
    neutral: 'Anti-Sycophancy (Clinical): Evaluate inputs strictly against evidence; omit praise and emotional hedging.'
  };

  function computeResult(state) {
    var ord = state.structure === 'lawful' ? 'Lawful' : (state.structure === 'chaotic' ? 'Chaotic' : 'Neutral');
    var mor = state.warmth === 'good' ? 'Good' : 'Neutral';
    var alignment = (ord === 'Neutral' && mor === 'Neutral') ? 'True Neutral' : (ord + ' ' + mor);
    if (!ARCHETYPES[alignment]) alignment = 'Lawful Neutral';

    var tkiMap = {
      competing: 'Competing (Red-Team)',
      collaborating: 'Collaborating',
      accommodating: 'Accommodating / Balanced',
      neutral: 'Analytical Detachment'
    };
    var hexaco = (state.pushback === 'competing' || state.pushback === 'neutral') ? 'High Honesty-Humility · Low Flattery' : 'Balanced Honesty · Cooperative';
    var whimsyNote = Number(state.whimsy) > 20
      ? 'Note: Keeping voice flavor <= 15-20% preserves format & correctness best based on our 300-reply Roleplay Tax study.'
      : 'Calibrated 85/15 Zone: Keeps 95-100% accuracy while giving replies unmistakable personality.';

    var arch = ARCHETYPES[alignment];
    var cadenceRule = CADENCE_SNIPPETS[state.cadence].replace('WHIMSY%', state.whimsy + '%');

    var coreLines = [
      'Alignment & Execution Core (' + (100 - Number(state.whimsy)) + '%):',
      '- Lead immediately with the direct answer, patch, or verdict. State missing facts instead of guessing.',
      '- ' + PUSHBACK_RULES[state.pushback],
      '- ' + COACHING_RULES[state.coaching],
      '- ' + arch.ruleFocus,
      '- Strictly honor any requested output count, word cap, or JSON format.',
      '',
      'Voice Twist (' + state.whimsy + '% Bounded Layer):',
      '- ' + cadenceRule,
      '- Anti-Roleplay Guardrail: Zero *asterisk actions*, zero theatrical catchphrases, zero "As an AI..." disclaimers.'
    ];

    var block = coreLines.join('\n');
    if (state.platform === 'claude-md') {
      block = '<!-- agenttune:preferences:start -->\n## Agent Behavior & Voice (' + alignment + ' · ' + (100 - state.whimsy) + '/' + state.whimsy + ')\n' + block + '\n<!-- agenttune:preferences:end -->';
    } else if (state.platform === 'muse-soul') {
      block = '# Soul.md — ' + alignment + ' Configuration\n\n' + block;
    } else if (state.platform === 'openrouter') {
      block = JSON.stringify({
        role: 'system',
        alignment: alignment,
        tki_mode: tkiMap[state.pushback],
        whimsy_pct: Number(state.whimsy),
        content: block
      }, null, 2);
    }

    return {
      alignment: alignment,
      tki: tkiMap[state.pushback],
      hexaco: hexaco,
      arch: arch,
      whimsyNote: whimsyNote,
      prompt: block
    };
  }

  function syncRangeVars(slider) {
    slider.style.setProperty('--attr-min', slider.min || '0');
    slider.style.setProperty('--attr-max', slider.max || '30');
    slider.style.setProperty('--control-value', slider.value);
    slider.setAttribute('aria-valuetext', slider.value + '% voice flavor');
  }

  function init() {
    var root = document.getElementById('at-alignment-quiz');
    if (!root) return;

    var state = {
      pushback: 'collaborating',
      structure: 'lawful',
      warmth: 'good',
      coaching: 'feynman',
      cadence: 'tars',
      whimsy: '15',
      platform: 'chatgpt'
    };

    var card = el('section', 'at-interactive-card');
    card.setAttribute('aria-label', 'AI Alignment, HEXACO and Conflict Style Quiz');

    var head = el('div', 'at-interactive-head');
    head.appendChild(el('span', 'pill', '2-Minute Interactive Matcher'));
    head.appendChild(el('h2', null, 'Find Your Agent Alignment, Pushback Level & Voice'));
    head.appendChild(el('p', null, 'Pick how you want your AI to disagree, structure rules, explain hard concepts, and season its voice — then copy a tailored prompt for your app.'));
    card.appendChild(head);

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    QUESTIONS.forEach(function (q) {
      var fs = el('fieldset', 'at-fieldset');
      fs.appendChild(el('legend', null, q.legend));
      var list = el('div', 'at-radio-list');
      q.options.forEach(function (opt, idx) {
        var lbl = el('label', 'at-radio-option');
        var id = 'aq-' + q.id + '-' + idx;
        lbl.setAttribute('for', id);
        var inp = el('input');
        inp.type = 'radio';
        inp.id = id;
        inp.name = 'aq-' + q.id;
        inp.value = opt.val;
        if (state[q.id] === opt.val) inp.checked = true;
        inp.addEventListener('change', function () {
          state[q.id] = opt.val;
          renderResult();
        });
        var span = el('span');
        span.appendChild(el('strong', null, opt.title));
        span.appendChild(el('small', null, opt.sub));
        lbl.appendChild(inp);
        lbl.appendChild(span);
        list.appendChild(lbl);
      });
      fs.appendChild(list);
      form.appendChild(fs);
    });

    var controls = el('div', 'at-controls-grid');
    var pWrap = el('div', 'at-control-field');
    var pLbl = el('label', null, 'Destination Format');
    pLbl.setAttribute('for', 'aq-platform');
    var pSel = el('select');
    pSel.id = 'aq-platform';
    [
      ['chatgpt', 'ChatGPT Custom Instructions / Claude Prefs'],
      ['muse-soul', 'Meta Muse Soul.md'],
      ['claude-md', 'CLAUDE.md / AGENTS.md (bounded block)'],
      ['openrouter', 'OpenRouter / API System JSON']
    ].forEach(function (item) {
      var o = el('option', null, item[1]);
      o.value = item[0];
      pSel.appendChild(o);
    });
    pSel.addEventListener('change', function () {
      state.platform = pSel.value;
      renderResult();
    });
    pWrap.appendChild(pLbl);
    pWrap.appendChild(pSel);
    controls.appendChild(pWrap);
    form.appendChild(controls);

    var rangeBox = el('div', 'at-range-box');
    var rangeHead = el('div', 'at-range-header');
    var rLbl = el('label', null, 'Character / Whimsy Intensity Dial (Roleplay Tax Budget)');
    rLbl.setAttribute('for', 'aq-whimsy-slider');
    var rVal = el('span', 'at-range-value', '15% Voice / 85% Execution');
    rangeHead.appendChild(rLbl);
    rangeHead.appendChild(rVal);
    var slider = el('input', 'at-range-slider');
    slider.type = 'range';
    slider.id = 'aq-whimsy-slider';
    slider.min = '0';
    slider.max = '30';
    slider.step = '5';
    slider.value = state.whimsy;
    syncRangeVars(slider);
    var rHint = el('p', 'at-range-hint', '');
    slider.addEventListener('input', function () {
      state.whimsy = slider.value;
      syncRangeVars(slider);
      rVal.textContent = state.whimsy + '% Voice / ' + (100 - Number(state.whimsy)) + '% Execution';
      renderResult();
    });
    rangeBox.appendChild(rangeHead);
    rangeBox.appendChild(slider);
    rangeBox.appendChild(rHint);
    form.appendChild(rangeBox);
    card.appendChild(form);

    var resPanel = el('div', 'at-result-panel');
    var badgeRow = el('div', 'at-badge-row');
    var bAlign = el('span', 'at-alignment-badge is-primary');
    var bTki = el('span', 'at-alignment-badge');
    var bHex = el('span', 'at-alignment-badge');
    badgeRow.appendChild(bAlign);
    badgeRow.appendChild(bTki);
    badgeRow.appendChild(bHex);

    var matchLine = el('p', null, '');
    matchLine.style.margin = '4px 0 8px';
    matchLine.style.fontSize = '14px';
    var pre = el('pre', 'at-output-pre');
    var actionRow = el('div', 'at-action-row');
    var copyBtn = el('button', 'at-btn-action', 'Copy tailored prompt');
    copyBtn.type = 'button';
    var dlBtn = el('button', 'at-btn-action is-secondary', 'Download .md');
    dlBtn.type = 'button';
    var libLink = el('a', 'at-btn-action is-secondary', 'View closest library tuning →');
    var status = el('span', 'at-live-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    actionRow.appendChild(copyBtn);
    actionRow.appendChild(dlBtn);
    actionRow.appendChild(libLink);
    actionRow.appendChild(status);

    resPanel.appendChild(badgeRow);
    resPanel.appendChild(matchLine);
    resPanel.appendChild(pre);
    resPanel.appendChild(actionRow);
    card.appendChild(resPanel);

    copyBtn.addEventListener('click', function () {
      var text = pre.textContent;
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        status.textContent = 'Select the prompt text above to copy.';
        return;
      }
      navigator.clipboard.writeText(text).then(function () {
        status.textContent = 'Copied to clipboard.';
      }).catch(function () {
        status.textContent = 'Clipboard blocked — select text manually.';
      });
    });

    dlBtn.addEventListener('click', function () {
      var blob = new Blob([pre.textContent + '\n'], { type: 'text/markdown;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'agenttune-alignment-profile.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      status.textContent = 'Downloaded agenttune-alignment-profile.md.';
    });

    function renderResult() {
      var out = computeResult(state);
      bAlign.textContent = 'D&D Alignment: ' + out.alignment;
      bTki.textContent = 'Conflict Style: ' + out.tki;
      bHex.textContent = out.hexaco;
      rHint.textContent = out.whimsyNote;
      matchLine.textContent = 'Empirical 20-Model Counterpart: ' + out.arch.matchedModel + ' — ' + out.arch.modelDetail;
      pre.textContent = out.prompt;
      libLink.href = out.arch.tuningSlug;
      status.textContent = '';
    }

    renderResult();
    root.appendChild(card);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
