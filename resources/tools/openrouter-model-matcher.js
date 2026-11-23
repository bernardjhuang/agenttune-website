(function () {
  'use strict';

  var FALLBACK_MODELS = [
    { slug: 'deepseek-v4-pro', openrouter_id: 'deepseek/deepseek-v4-pro-0813', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', license: 'MIT', params: 'MoE (0813)', empirical_guidance: 'Calibrate length and separate verified file facts from guesses; enforce strict diff/answer-first structure.' },
    { slug: 'deepseek-v4-1-flash', openrouter_id: 'deepseek/deepseek-v4.1-flash-1017', name: 'DeepSeek V4.1 Flash', provider: 'DeepSeek', license: 'MIT', params: 'MoE Flash', empirical_guidance: 'Fast OpenRouter/local MoE; constrain step count and require explicit error-cause reporting.' },
    { slug: 'qwen-4-max', openrouter_id: 'qwen/qwen4-max', name: 'Qwen 4 Max', provider: 'Alibaba Qwen', license: 'Apache-2.0 / Qwen', params: 'Flagship MoE', empirical_guidance: 'Strong analytical defaults; require direct pushback and zero filler greetings.' },
    { slug: 'qwen-3-8-27b', openrouter_id: 'qwen/qwen3.8-27b', name: 'Qwen 3.8 27B', provider: 'Alibaba Qwen', license: 'Apache-2.0', params: '27B dense', empirical_guidance: 'Popular local/vLLM 27B dense model; suppress verbose reasoning recaps and enforce exact JSON or concise diffs.' },
    { slug: 'llama-4-maverick', openrouter_id: 'meta-llama/llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta', license: 'Llama 4 Community', params: '400B MoE (17B×128E)', empirical_guidance: 'High helpfulness baseline; add explicit "no JSON preamble" and "challenge weak premises" rules.' },
    { slug: 'llama-4-scout', openrouter_id: 'meta-llama/llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta', license: 'Llama 4 Community', params: '109B MoE (17B×16E)', empirical_guidance: 'Long-context fast MoE; anchor schema keys explicitly and ban speculative extrapolation.' },
    { slug: 'mistral-large-2512', openrouter_id: 'mistralai/mistral-large-2512', name: 'Mistral Large 2512', provider: 'Mistral', license: 'Mistral Open-Weight', params: 'Flagship MoE', empirical_guidance: 'Crisp European enterprise open-weight flagship; enforce strict citation of files and concise bullet structure.' },
    { slug: 'glm-5-3', openrouter_id: 'z-ai/glm-5.3', name: 'GLM-5.3', provider: 'Z.ai / Zhipu', license: 'MIT', params: 'MoE', empirical_guidance: 'High structural diligence; add explicit answer-first constraints and limit Markdown nesting.' },
    { slug: 'kimi-k2-7-code', openrouter_id: 'moonshotai/kimi-k2.7-code', name: 'Kimi K2.7 Code', provider: 'Moonshot AI', license: 'Modified MIT', params: 'MoE Code', empirical_guidance: 'Agentic coding specialist; lock in verify-after-edit test discipline and minimal diff output.' },
    { slug: 'minimax-m3-1-flash', openrouter_id: 'minimax/minimax-m3.1-flash', name: 'MiniMax M3.1 Flash', provider: 'MiniMax', license: 'Open-Weight', params: 'Flash MoE', empirical_guidance: 'Low-cost conversational speed; curb agreeableness and require explicit unknown-data callouts.' },
    { slug: 'gemma-4-31b-it', openrouter_id: 'google/gemma-4-31b-it', name: 'Gemma 4 31B IT', provider: 'Google', license: 'Gemma Terms', params: '31B dense', empirical_guidance: 'Clean local workstation 31B model; disable markdown fluff and enforce direct refusal of missing context.' },
    { slug: 'nemotron-3-ultra-550b', openrouter_id: 'nvidia/nemotron-3-ultra-550b-a55b', name: 'Nemotron 3 Ultra 550B', provider: 'NVIDIA', license: 'NVIDIA Open Model', params: '550B / 55B active', empirical_guidance: 'Strong structured engineering adherence; pair with tight word caps to avoid over-explanation.' }
  ];

  var WORKFLOWS = {
    coding: {
      label: 'Production Coding Agent',
      rules: [
        'Lead with root cause, exact file path, and minimal patch before explanation.',
        'Read referenced files completely before editing; preserve existing repository helpers.',
        'Never report tests or builds as passing unless executed after the final edit.',
        'State unverified assumptions explicitly instead of guessing API signatures.'
      ]
    },
    reviewer: {
      label: 'Skeptical Architecture Review',
      rules: [
        'Find the strongest bug, race condition, or scalability bottleneck first.',
        'Do not soften critique with praise or hedging language ("generally speaking", "might consider").',
        'Separate blocking correctness defects from optional style suggestions.',
        'List missing edge-case tests alongside concrete reproduction inputs.'
      ]
    },
    json: {
      label: 'Strict JSON / Tool Extraction',
      rules: [
        'Return ONLY valid UTF-8 JSON matching the requested schema with no markdown fences or conversational preamble.',
        'Never invent missing fields; use explicit null when a field cannot be verified from source input.',
        'Preserve source units, IDs, and timestamps verbatim.',
        'Verify array lengths and enum bounds before emitting output.'
      ]
    },
    brief: {
      label: 'Concise Executive Brief',
      rules: [
        'Open immediately with the decision or bottom-line answer in sentence one.',
        'Cap routine replies at 120 words and use flat bullets for 3+ comparable options.',
        'Flag unknowns, sample sizes, and dates inline next to every metric.',
        'Skip closing offers ("Let me know if you want me to...") unless a concrete follow-up action is blocked.'
      ]
    },
    local: {
      label: 'Local Ollama Privacy Assistant',
      rules: [
        'Assume offline execution with zero external web lookups unless explicitly supplied in context.',
        'Keep formatting plain, terminal-friendly, and scannable.',
        'Ask one narrow clarifying question only if ambiguity changes the file path or command.',
        'Never echo secrets, credentials, or local environment paths into drafted outputs.'
      ]
    }
  };

  var FORMATS = {
    md: 'System Prompt (.md)',
    openrouter: 'OpenRouter API JSON Payload',
    modelfile: 'Ollama Modelfile',
    agents: 'AGENTS.md Snippet'
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function init() {
    var root = document.getElementById('at-openrouter-model-matcher');
    if (!root) return;

    var models = FALLBACK_MODELS.slice();
    var state = {
      model: models[0].slug,
      workflow: 'coding',
      format: 'md'
    };

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', 'Interactive OpenRouter Open-Weight Model & System Prompt Matcher'));
    root.appendChild(el('p', 'at-widget-sub', 'Pick any popular open-source AI model on OpenRouter, your workflow, and target config format to pair our N=100 psychometric findings with an antidote system prompt.'));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var grid = el('div', 'at-widget-grid');
    var modelSel = el('select');
    modelSel.id = 'or-model';
    function fillModelSelect() {
      modelSel.textContent = '';
      models.forEach(function (m) {
        var o = document.createElement('option');
        o.value = m.slug;
        o.textContent = m.name + ' (' + m.provider + ' · ' + m.license + ')';
        modelSel.appendChild(o);
      });
      modelSel.value = state.model;
    }
    fillModelSelect();
    modelSel.addEventListener('change', function () { state.model = modelSel.value; render(); });

    var mWrap = el('div', 'at-field');
    var mLab = el('label', '', '1. Open-weight model');
    mLab.htmlFor = 'or-model';
    mWrap.appendChild(mLab);
    mWrap.appendChild(modelSel);
    grid.appendChild(mWrap);

    var wfSel = el('select');
    wfSel.id = 'or-wf';
    Object.keys(WORKFLOWS).forEach(function (k) {
      var o = document.createElement('option');
      o.value = k;
      o.textContent = WORKFLOWS[k].label;
      wfSel.appendChild(o);
    });
    wfSel.value = state.workflow;
    wfSel.addEventListener('change', function () { state.workflow = wfSel.value; render(); });

    var wWrap = el('div', 'at-field');
    var wLab = el('label', '', '2. Primary workflow');
    wLab.htmlFor = 'or-wf';
    wWrap.appendChild(wLab);
    wWrap.appendChild(wfSel);
    grid.appendChild(wWrap);
    form.appendChild(grid);

    var fmtFs = el('fieldset');
    fmtFs.appendChild(el('legend', '', '3. Export format'));
    var fmtRow = el('div', 'at-pill-row');
    var fmtBtns = {};
    Object.keys(FORMATS).forEach(function (k) {
      var b = el('button', 'at-pill-btn', FORMATS[k]);
      b.type = 'button';
      b.setAttribute('aria-pressed', k === state.format ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.format = k;
        Object.keys(fmtBtns).forEach(function (id) {
          fmtBtns[id].setAttribute('aria-pressed', id === k ? 'true' : 'false');
        });
        render();
      });
      fmtBtns[k] = b;
      fmtRow.appendChild(b);
    });
    fmtFs.appendChild(fmtRow);
    form.appendChild(fmtFs);

    var profileBox = el('div', 'at-voice-card');
    var profileTitle = el('div', 'at-voice-name');
    var profileDesc = el('p', 'at-voice-desc');
    profileBox.appendChild(profileTitle);
    profileBox.appendChild(profileDesc);
    form.appendChild(profileBox);

    var meta = el('div', 'at-out-meta');
    var fileLabel = el('span', '');
    var lenLabel = el('span', '');
    meta.appendChild(fileLabel);
    meta.appendChild(lenLabel);
    form.appendChild(meta);

    var outArea = el('textarea', 'at-code-out');
    outArea.readOnly = true;
    outArea.rows = 13;
    outArea.setAttribute('aria-label', 'Generated open-source model system prompt configuration');
    form.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy config');
    copyBtn.type = 'button';
    var dlBtn = el('button', 'at-btn secondary', 'Download file');
    dlBtn.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    function currentFileExt() {
      if (state.format === 'openrouter') return { name: state.model + '-openrouter.json', mime: 'application/json' };
      if (state.format === 'modelfile') return { name: 'Modelfile.' + state.model, mime: 'text/plain' };
      if (state.format === 'agents') return { name: 'AGENTS.md', mime: 'text/markdown' };
      return { name: state.model + '-system-prompt.md', mime: 'text/markdown' };
    }

    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied ' + currentFileExt().name + ' to clipboard.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard unavailable—press Ctrl/Cmd+C.';
        });
      } else {
        outArea.select();
        status.textContent = 'Text selected—press Ctrl/Cmd+C.';
      }
    });

    dlBtn.addEventListener('click', function () {
      var f = currentFileExt();
      var blob = new Blob([outArea.value + '\n'], { type: f.mime + ';charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = f.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      status.textContent = 'Downloaded ' + f.name + '.';
    });

    actions.appendChild(copyBtn);
    actions.appendChild(dlBtn);
    form.appendChild(actions);
    form.appendChild(status);
    root.appendChild(form);

    function render() {
      var m = models.find(function (x) { return x.slug === state.model; }) || models[0];
      var wf = WORKFLOWS[state.workflow] || WORKFLOWS.coding;

      var metricsText = m.mbti_legacy_mode
        ? ('N=' + m.n_runs + ' measured: MBTI ' + m.mbti_legacy_mode + ' · DISC ' + m.disc_mode + ' · Enneagram ' + m.enneagram_mode + ' · OCEAN ' + m.big_five_means.O + '/' + m.big_five_means.C + '/' + m.big_five_means.E + '/' + m.big_five_means.A + '/' + m.big_five_means.N)
        : (m.provider + ' · ' + m.license + ' · ' + m.params);
      profileTitle.textContent = m.name + ' (' + m.openrouter_id + ')';
      profileDesc.textContent = metricsText + ' — ' + m.empirical_guidance;

      var sysRules = [
        'Model calibration for ' + m.name + ' (' + wf.label + '):',
        '- ' + wf.rules.join('\n- '),
        '- Empirical guardrail: ' + m.empirical_guidance
      ].join('\n');

      var output = '';
      if (state.format === 'openrouter') {
        output = JSON.stringify({
          model: m.openrouter_id,
          temperature: state.workflow === 'json' ? 0.0 : 0.3,
          messages: [
            { role: 'system', content: sysRules },
            { role: 'user', content: '{{USER_PROMPT}}' }
          ]
        }, null, 2);
      } else if (state.format === 'modelfile') {
        var ollamaTag = m.slug.replace(/-/g, ':').replace(':v4:1:', '-v4.1-');
        output = 'FROM ' + ollamaTag + '\n' +
          'PARAMETER temperature ' + (state.workflow === 'json' ? '0.1' : '0.3') + '\n' +
          'PARAMETER num_ctx 32768\n\n' +
          'SYSTEM """\n' + sysRules + '\n"""';
      } else if (state.format === 'agents') {
        output = '# AGENTS.md (' + m.name + ' profile)\n\n<!-- agenttune:preferences:start -->\n' + sysRules + '\n<!-- agenttune:preferences:end -->';
      } else {
        output = '# ' + m.name + ' — ' + wf.label + ' System Prompt\n\n' + sysRules;
      }

      var f = currentFileExt();
      outArea.value = output;
      fileLabel.textContent = 'Target: ' + f.name;
      lenLabel.textContent = output.length + ' chars';
      dlBtn.textContent = 'Download ' + f.name;
    }

    render();

    fetch('/research/data/openrouter-open-source-profiles.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && Array.isArray(data.models) && data.models.length) {
          models = data.models;
          if (!models.some(function (x) { return x.slug === state.model; })) state.model = models[0].slug;
          fillModelSelect();
          render();
        }
      })
      .catch(function () {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
