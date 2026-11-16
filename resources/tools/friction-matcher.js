(function () {
  'use strict';

  var RESULTS = {
    'verdict-first': {
      title: 'Lead with the answer & stop over-explaining',
      summary: 'Best when defaults bury the conclusion behind three paragraphs of preamble and qualifiers.',
      why: 'MBTI T/J, Enneagram Type 5/8, and DISC D/C profiles explicitly penalize throat-clearing and force a bottom-line-first reply structure.',
      recs: [
        { framework: 'MBTI', code: 'INTJ · Strategist', system: 'mbti', type: 'intj', note: 'Answer first, numbered structure, zero flattery.' },
        { framework: 'DISC', code: 'D · Dominance', system: 'disc', type: 'd-dominance', note: 'Shortest reliable rule set when you want speed and crisp options.' },
        { framework: 'Enneagram', code: 'Type 5 · Investigator', system: 'enneagram', type: '5-investigator', note: 'Concise reasoning with clear limits and no filler.' },
        { framework: 'Big Five', code: 'High Conscientiousness', system: 'ocean', type: 'conscientiousness-high', note: 'Ordered checklist output without changing warmth.' }
      ]
    },
    'push-back': {
      title: 'Challenge weak premises & curb sycophancy',
      summary: 'Best when an assistant validates flawed assumptions or pivots immediately when you nudge it.',
      why: 'Models score 44.99–47.07/50 on Agreeableness by default. Behavioral pushback rules anchor critiques to evidence and tradeoffs.',
      recs: [
        { framework: 'Enneagram', code: 'Type 8 · Challenger', system: 'enneagram', type: '8-challenger', note: 'Direct stress-testing that names assumptions to drop.' },
        { framework: 'DISC', code: 'C · Conscientiousness', system: 'disc', type: 'c-conscientiousness', note: 'Checks edge cases, proof requirements, and failure modes.' },
        { framework: 'MBTI', code: 'ENTP · Debater', system: 'mbti', type: 'entp', note: 'Tests counterarguments before committing to a path.' },
        { framework: 'Attachment', code: 'Secure', system: 'attachment', type: 'secure', note: 'Calm disagreement without defensiveness or sugarcoating.' }
      ]
    },
    'step-by-step': {
      title: 'Teach patiently without jargon overload',
      summary: 'Best when explanations jump ahead three steps or sound clipped during unfamiliar troubleshooting.',
      why: 'Sensing/Steadiness and Secure/Type 9/Type 2 profiles explicitly request checkpointed pacing, plain terms, and concrete examples.',
      recs: [
        { framework: 'DISC', code: 'S · Steadiness', system: 'disc', type: 's-steadiness', note: 'Predictable step-by-step cadence with steady checkpoints.' },
        { framework: 'Enneagram', code: 'Type 2 · Helper', system: 'enneagram', type: '2-helper', note: 'Encouraging, practical walkthroughs without judgment.' },
        { framework: 'MBTI', code: 'ISFJ · Defender', system: 'mbti', type: 'isfj', note: 'Grounded instructions organized around what happens next.' },
        { framework: 'Big Five', code: 'High Agreeableness (scoped)', system: 'ocean', type: 'agreeableness-high', note: 'Warm tone while keeping facts accurate.' }
      ]
    },
    'creative-explore': {
      title: 'Explore divergent angles & non-obvious options',
      summary: 'Best when answers feel formulaic, overly rigid, or converge too quickly on one safe template.',
      why: 'High-Openness, Type 7, and ENFP/ENTP templates defer premature consensus so you can compare genuinely distinct directions.',
      recs: [
        { framework: 'Big Five', code: 'High Openness', system: 'ocean', type: 'openness-high', note: 'Surfaces unconventional analogies and multiple lenses.' },
        { framework: 'Enneagram', code: 'Type 7 · Enthusiast', system: 'enneagram', type: '7-enthusiast', note: 'High-energy brainstorming that keeps options open early.' },
        { framework: 'MBTI', code: 'ENFP · Campaigner', system: 'mbti', type: 'enfp', note: 'Connects themes across domains before narrowing down.' },
        { framework: 'DISC', code: 'I · Influence', system: 'disc', type: 'i-influence', note: 'Conversational ideation suited to brainstorming and messaging.' }
      ]
    },
    'coding-diffs': {
      title: 'Diff-first code reviews & scoped edits',
      summary: 'Best for Claude Code, Codex CLI, Cursor, and Copilot when agents write essays or touch unrelated files.',
      why: 'Pairs verdict-first brevity with explicit verification gates and bounded edit rules suited to repository instruction files.',
      recs: [
        { framework: 'MBTI', code: 'ISTP · Virtuoso', system: 'mbti', type: 'istp', note: 'Minimal prose, exact commands, root-cause diagnosis first.' },
        { framework: 'DISC', code: 'C · Conscientiousness', system: 'disc', type: 'c-conscientiousness', note: 'Strict contract verification and edge-case discipline.' },
        { framework: 'Enneagram', code: 'Type 1 · Reformer', system: 'enneagram', type: '1-reformer', note: 'Clean standards, explicit invariants, no silent shortcuts.' },
        { framework: 'Big Five', code: 'Low Extraversion (terse)', system: 'ocean', type: 'extraversion-low', note: 'Zero small talk or celebratory sign-offs in CLI logs.' }
      ]
    },
    'tone-comfort': {
      title: 'Reduce overwhelm & buffer sharp critiques',
      summary: 'Best when blunt feedback triggers friction or long lists feel paralyzing during complex work.',
      why: 'Attachment and Enneagram Type 9/Type 4 tunings adjust how caveats are framed and ask for one actionable step at a time.',
      recs: [
        { framework: 'Attachment', code: 'Anxious (calming structure)', system: 'attachment', type: 'anxious', note: 'Predictable framing, clear next step, constructive honesty.' },
        { framework: 'Enneagram', code: 'Type 9 · Peacemaker', system: 'enneagram', type: '9-peacemaker', note: 'Grounded tone that prioritizes options calmly.' },
        { framework: 'DISC', code: 'S · Steadiness', system: 'disc', type: 's-steadiness', note: 'Steady pacing with low-pressure transition summaries.' },
        { framework: 'MBTI', code: 'INFJ · Advocate', system: 'mbti', type: 'infj', note: 'Thoughtful synthesis paired with empathetic clarity.' }
      ]
    }
  };

  var TARGET_NOTES = {
    'chatgpt-custom': 'ChatGPT Custom Instructions (~1,500-char compact rule block)',
    'claude-personal': 'Claude Profile Preferences (concise style block)',
    'muse': 'Meta Muse Soul.md (Assistant Identity behavior file)',
    'codex-cli': 'Repo coding agent file (CLAUDE.md / AGENTS.md / .cursorrules)',
    'anywhere': 'Portable Markdown card for any chat app or API'
  };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function init() {
    var root = document.getElementById('at-friction-matcher');
    if (!root) return;
    var resultsEl = document.getElementById('matcher-results');
    if (!resultsEl) return;

    function getChecked(name, fallback) {
      var input = root.querySelector('input[name="' + name + '"]:checked');
      return input ? input.value : fallback;
    }

    function render() {
      var friction = getChecked('friction', 'verdict-first');
      var target = getChecked('scope', 'chatgpt-custom');
      var data = RESULTS[friction] || RESULTS['verdict-first'];
      var targetNote = TARGET_NOTES[target] || TARGET_NOTES.anywhere;

      while (resultsEl.firstChild) resultsEl.removeChild(resultsEl.firstChild);

      var header = el('div', 'matcher-summary');
      header.appendChild(el('h3', '', data.title));
      header.appendChild(el('p', '', data.summary + ' ' + data.why));
      header.appendChild(el('p', 'matcher-card-rule', 'Destination format: ' + targetNote + '.'));
      resultsEl.appendChild(header);

      var grid = el('div', 'matcher-results-grid');
      data.recs.forEach(function (rec) {
        var card = el('div', 'matcher-card');
        card.appendChild(el('div', 'matcher-card-sys', rec.framework));
        card.appendChild(el('div', 'matcher-card-title', rec.code));
        card.appendChild(el('p', 'matcher-card-rule', rec.note));

        var actions = el('div', 'matcher-card-links');
        var gen = el('a', '', 'Open in generator →');
        gen.href = '/tools/custom-instructions-generator?mode=template&system=' +
          encodeURIComponent(rec.system) + '&type=' + encodeURIComponent(rec.type) +
          '&target=' + encodeURIComponent(target);
        actions.appendChild(gen);

        var lib = el('a', '', 'View template');
        lib.href = '/library/' + rec.system + '/' + rec.type;
        actions.appendChild(lib);

        card.appendChild(actions);
        grid.appendChild(card);
      });
      resultsEl.appendChild(grid);
    }

    root.addEventListener('change', render);
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
