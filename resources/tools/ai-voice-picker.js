(function () {
  'use strict';

  var PLATFORMS = {
    claude: {
      title: 'Interactive Claude Voice & Spoken-Tone Picker',
      sub: 'Filter Anthropic’s 5 Voice Mode presets by register or accent, then copy a Voice-Mode-friendly Personal Preferences block.',
      where: 'Mobile: Voice Mode waveform → bottom-left Settings · Web/Desktop: Settings → Capabilities → Voice settings',
      voices: [
        { name: 'Buttery', register: 'female', accent: 'us', tone: 'warm', desc: 'Warm, smooth, conversational cadence—great for thinking out loud and coaching.' },
        { name: 'Airy', register: 'female', accent: 'us', tone: 'crisp', desc: 'Light, brisk, neutral-crisp delivery—ideal for fast Q&A on the move.' },
        { name: 'Mellow', register: 'male', accent: 'us', tone: 'calm', desc: 'Calm, measured, lower-pitch voice—steady for planning and step-by-step work.' },
        { name: 'Glassy', register: 'neutral', accent: 'us', tone: 'crisp', desc: 'Clear, poised, slightly brighter articulation for technical summaries.' },
        { name: 'Rounded', register: 'male', accent: 'uk', tone: 'warm', desc: 'Full, grounded British-accented cadence for natural dialogue and editorial feedback.' }
      ],
      promptFor: function (v, pace) {
        return '## Claude Voice Mode & Tone Rules (paired with ' + v.name + ')\n' +
          '- Answer in 2–4 natural spoken sentences first; wait for me to ask before expanding.\n' +
          '- Avoid markdown tables, nested bullet lists, and raw URLs unless I ask for written reference output.\n' +
          '- Pacing: ' + pace + '\n' +
          '- Skip praise ("Great question!") and closing filler; flag flawed assumptions directly.\n' +
          '- State uncertainty plainly in one short phrase instead of guessing.';
      }
    },
    chatgpt: {
      title: 'Interactive ChatGPT 9-Voice Matcher & Spoken Tone Builder',
      sub: 'Filter all 9 ChatGPT Voice Mode voices (Arbor, Breeze, Cove, Ember, Juniper, Maple, Sol, Spruce, Vale) by register, accent, and energy, then copy matching Custom Instructions.',
      where: 'ChatGPT iOS/Android/Desktop: Settings → Voice (or switch mid-chat via Voice settings)',
      voices: [
        { name: 'Cove', register: 'male', accent: 'us', tone: 'crisp', desc: 'Composed and direct—popular for fast analytical answers and work triage.' },
        { name: 'Sol', register: 'female', accent: 'us', tone: 'calm', desc: 'Savvy and relaxed—natural pacing for everyday dialogue and strategy.' },
        { name: 'Maple', register: 'female', accent: 'us', tone: 'warm', desc: 'Cheerful and candid—energetic brainstorming without sounding robotic.' },
        { name: 'Juniper', register: 'female', accent: 'us', tone: 'warm', desc: 'Open and upbeat—friendly coaching, language practice, and warm pacing.' },
        { name: 'Vale', register: 'female', accent: 'uk', tone: 'crisp', desc: 'Bright and inquisitive British accent—sharp for study and questioning.' },
        { name: 'Arbor', register: 'male', accent: 'uk', tone: 'calm', desc: 'Easygoing and versatile British accent—balanced across casual and serious topics.' },
        { name: 'Spruce', register: 'male', accent: 'us', tone: 'calm', desc: 'Calm and affirming—steady, unhurried tone for step-by-step troubleshooting.' },
        { name: 'Ember', register: 'male', accent: 'us', tone: 'warm', desc: 'Confident and optimistic—high-momentum pitching and idea refinement.' },
        { name: 'Breeze', register: 'male', accent: 'us', tone: 'warm', desc: 'Animated and earnest—expressive storytelling and casual conversation.' }
      ],
      promptFor: function (v, pace) {
        return '## ChatGPT Voice & Response Rules (paired with ' + v.name + ')\n' +
          '- Lead with the direct takeaway in sentence one; keep default spoken replies under 45 seconds.\n' +
          '- Speak in natural prose—skip reading out long numbered lists, markdown symbols, or URLs.\n' +
          '- Pacing: ' + pace + '\n' +
          '- Push back directly if my premise has a flaw; skip empty flattery and trailing "Want me to..." offers.\n' +
          '- Flag material uncertainty cleanly in one sentence.';
      }
    },
    gemini: {
      title: 'Interactive Gemini Live Voice Filter & Context Seeder',
      sub: 'Filter Google Gemini Live voices by register and accent, and copy either a Personal Intelligence block or a Live-session context seeder.',
      where: 'Gemini mobile app: Profile → Settings → Gemini’s voice (or 3-dot menu inside Gemini Live)',
      voices: [
        { name: 'Ursa', register: 'female', accent: 'us', tone: 'calm', desc: 'Engaged, mid-range voice—balanced everyday assistant delivery.' },
        { name: 'Vega', register: 'female', accent: 'us', tone: 'crisp', desc: 'Bright, higher-pitched voice—clear articulation for quick answers.' },
        { name: 'Capella', register: 'female', accent: 'uk', tone: 'calm', desc: 'Higher-pitched British accent—serene cadence for reading and study.' },
        { name: 'Eclipse', register: 'female', accent: 'us', tone: 'warm', desc: 'Energetic, mid-range voice—lively brainstorming and coaching.' },
        { name: 'Dipper', register: 'male', accent: 'us', tone: 'calm', desc: 'Engaged, deeper voice—grounded tone for work planning.' },
        { name: 'Pegasus', register: 'male', accent: 'us', tone: 'crisp', desc: 'Engaged, deeper voice—steady for factual lookups and explanations.' },
        { name: 'Orbit', register: 'male', accent: 'us', tone: 'warm', desc: 'Energetic, deeper voice—upbeat conversational momentum.' },
        { name: 'Orion', register: 'male', accent: 'us', tone: 'crisp', desc: 'Bright, deeper voice—crisp delivery for technical walkthroughs.' },
        { name: 'Flare', register: 'female', accent: 'us', tone: 'warm', desc: 'Newer lively voice replacing legacy Lyra in updated Gemini app rollouts.' },
        { name: 'Glow', register: 'female', accent: 'us', tone: 'calm', desc: 'Newer calm conversational voice replacing legacy Nova in updated rollouts.' }
      ],
      promptFor: function (v, pace) {
        return '## Instructions for Gemini (paired with ' + v.name + ')\n' +
          '- Lead with the direct answer in sentence one; keep spoken Gemini Live replies to 2–4 sentences.\n' +
          '- Skip textbook introductions, filler praise, and long bulleted lists unless I ask for written notes.\n' +
          '- Pacing: ' + pace + '\n' +
          '- Separate verified facts from assumptions and tell me immediately if a premise is flawed.\n\n' +
          '# Optional Gemini Live Sync Seeder (send once in text chat before tapping Live):\n' +
          'What instructions have I saved under Personal Intelligence? Summarize them in 2 lines and apply them in our upcoming Live session.';
      }
    },
    grok: {
      title: 'Interactive Grok Voice & Persona Matcher',
      sub: 'Compare xAI’s core Grok Voice Mode voices (Ara, Rex, Sal, Eve, Leo) and copy a clean Settings → Customize Grok block.',
      where: 'Grok iOS/Android/Web: Open Voice Mode → Voice selector · Text rules: Settings → Customize Grok',
      voices: [
        { name: 'Ara', register: 'female', accent: 'us', tone: 'warm', desc: 'Warm and friendly—everyday conversational assistant without harsh edges.' },
        { name: 'Rex', register: 'male', accent: 'us', tone: 'crisp', desc: 'Confident, clear, and direct—built for fast decisions and crisp briefings.' },
        { name: 'Sal', register: 'male', accent: 'us', tone: 'calm', desc: 'Smooth, balanced, and conversational—natural steady pacing.' },
        { name: 'Eve', register: 'female', accent: 'uk', tone: 'warm', desc: 'Energetic, upbeat British-accented delivery—lively ideation and Q&A.' },
        { name: 'Leo', register: 'male', accent: 'uk', tone: 'crisp', desc: 'Authoritative, strong delivery—structured briefings and technical commentary.' }
      ],
      promptFor: function (v, pace) {
        return '## Customize Grok Rules (paired with ' + v.name + ' voice)\n' +
          '- Start with the direct conclusion in sentence one; keep Voice Mode replies concise and natural.\n' +
          '- Use plain, clear language; skip forced sarcasm, slang, and filler intros unless I ask for banter.\n' +
          '- Pacing: ' + pace + '\n' +
          '- Distinguish verified primary facts from live X commentary or speculation.\n' +
          '- Push back directly with evidence when my assumption is wrong.';
      }
    }
  };

  var PACES = {
    brisk: 'Fast and concise (2–3 sentences, bottom-line first).',
    balanced: 'Conversational and measured (short answer first, one concise reason).',
    reflective: 'Unhurried thinking partner (brief check-in, clear tradeoffs, calm cadence).'
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function init() {
    var root = document.getElementById('at-voice-picker');
    if (!root) return;
    var key = root.getAttribute('data-platform') || 'chatgpt';
    var cfg = PLATFORMS[key] || PLATFORMS.chatgpt;

    var state = { register: 'all', accent: 'all', pace: 'brisk', selected: cfg.voices[0].name };

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', cfg.title));
    root.appendChild(el('p', 'at-widget-sub', cfg.sub));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var fsReg = el('fieldset');
    fsReg.appendChild(el('legend', '', 'Filter by voice register & accent'));
    var pills = el('div', 'at-pill-row');

    var filters = [
      { id: 'reg-all', group: 'register', val: 'all', label: 'All voices' },
      { id: 'reg-female', group: 'register', val: 'female', label: 'Female-leaning' },
      { id: 'reg-male', group: 'register', val: 'male', label: 'Male-leaning' },
      { id: 'acc-uk', group: 'accent', val: 'uk', label: 'British accent' }
    ];

    var filterBtns = [];
    filters.forEach(function (f) {
      var b = el('button', 'at-pill-btn', f.label);
      b.type = 'button';
      b.setAttribute('aria-pressed', f.val === 'all' ? 'true' : 'false');
      b.addEventListener('click', function () {
        if (f.group === 'accent') {
          state.accent = state.accent === 'uk' ? 'all' : 'uk';
        } else {
          state.register = f.val;
          if (f.val === 'all') state.accent = 'all';
        }
        syncButtons();
        render();
      });
      filterBtns.push({ btn: b, spec: f });
      pills.appendChild(b);
    });
    fsReg.appendChild(pills);
    form.appendChild(fsReg);

    var paceField = el('div', 'at-field');
    var paceId = 'at-voice-pace-' + key;
    var paceLabel = el('label', '', 'Spoken reply cadence');
    paceLabel.htmlFor = paceId;
    var paceSelect = el('select');
    paceSelect.id = paceId;
    paceSelect.name = 'pace';
    [
      ['brisk', 'Brisk & direct (2–3 spoken sentences)'],
      ['balanced', 'Balanced (answer + key reason)'],
      ['reflective', 'Calm coaching & exploration']
    ].forEach(function (opt) {
      var o = document.createElement('option');
      o.value = opt[0];
      o.textContent = opt[1];
      paceSelect.appendChild(o);
    });
    paceSelect.addEventListener('change', function () {
      state.pace = paceSelect.value;
      renderOutput();
    });
    paceField.appendChild(paceLabel);
    paceField.appendChild(paceSelect);
    form.appendChild(paceField);

    var grid = el('div', 'at-voice-grid');
    form.appendChild(grid);

    var outWrap = el('div', 'at-out-wrap');
    var meta = el('div', 'at-out-meta');
    var whereEl = el('span', '', cfg.where);
    var countEl = el('span', '');
    meta.appendChild(whereEl);
    meta.appendChild(countEl);
    outWrap.appendChild(meta);

    var outId = 'at-voice-out-' + key;
    var outLabel = el('label', 'visually-hidden', 'Generated voice tone instructions');
    outLabel.htmlFor = outId;
    var outArea = el('textarea', 'at-code-out');
    outArea.id = outId;
    outArea.readOnly = true;
    outArea.rows = 7;
    outWrap.appendChild(outLabel);
    outWrap.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy voice-friendly rules');
    copyBtn.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied rules tailored for ' + state.selected + '. Paste into your account settings and start a fresh voice chat.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard blocked—text is selected so you can press Ctrl/Cmd+C.';
        });
      } else {
        outArea.select();
        status.textContent = 'Text selected—press Ctrl/Cmd+C to copy.';
      }
    });
    actions.appendChild(copyBtn);
    outWrap.appendChild(actions);
    outWrap.appendChild(status);
    form.appendChild(outWrap);
    root.appendChild(form);

    function syncButtons() {
      filterBtns.forEach(function (item) {
        var active = item.spec.group === 'accent'
          ? state.accent === 'uk'
          : (state.register === item.spec.val && (item.spec.val !== 'all' || state.accent === 'all'));
        item.btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    function renderOutput() {
      var v = cfg.voices.find(function (x) { return x.name === state.selected; }) || cfg.voices[0];
      var text = cfg.promptFor(v, PACES[state.pace] || PACES.brisk);
      outArea.value = text;
      countEl.textContent = text.length + ' chars · Voice: ' + v.name;
    }

    function render() {
      grid.textContent = '';
      var filtered = cfg.voices.filter(function (v) {
        var regOk = state.register === 'all' || v.register === state.register;
        var accOk = state.accent === 'all' || v.accent === state.accent;
        return regOk && accOk;
      });
      if (!filtered.length) {
        grid.appendChild(el('p', 'at-voice-desc', 'No voices match that exact combination—click "All voices" to reset.'));
        return;
      }
      if (!filtered.some(function (v) { return v.name === state.selected; })) {
        state.selected = filtered[0].name;
      }
      filtered.forEach(function (v) {
        var card = el('div', 'at-voice-card' + (v.name === state.selected ? ' is-selected' : ''));
        var head = el('div', 'at-voice-name');
        head.appendChild(el('span', '', v.name));
        var tagText = (v.accent === 'uk' ? 'UK · ' : '') + v.register;
        head.appendChild(el('span', 'at-voice-tag', tagText));
        card.appendChild(head);
        card.appendChild(el('p', 'at-voice-desc', v.desc));
        var pick = el('button', 'at-btn secondary', v.name === state.selected ? 'Selected' : 'Pair with prompt');
        pick.type = 'button';
        pick.addEventListener('click', function () {
          state.selected = v.name;
          render();
          status.textContent = 'Updated voice prompt for ' + v.name + '.';
        });
        card.appendChild(pick);
        grid.appendChild(card);
      });
      renderOutput();
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
