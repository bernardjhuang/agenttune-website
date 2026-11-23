(function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function slugify(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 48) || 'template';
  }

  function categorize(label, text) {
    var s = (label + ' ' + text).toLowerCase();
    if (/code|dev|eng|repo|git|debug|sql|data|analyst|pr\b|typescript|python|cursor|cline|windsurf|codex|claude\.md|agents\.md|deepseek|kimi/.test(s)) {
      return 'coding';
    }
    if (/writ|edit|prose|research|study|student|learn|language|brief|summar|notebook|legal|policy/.test(s)) {
      return 'writing';
    }
    if (/ops|triage|inbox|schedul|household|shop|trip|goal|task|coordinat|small-business|admin|cal/.test(s)) {
      return 'ops';
    }
    return 'work';
  }

  function inferPlatformMeta() {
    var metaEl = document.getElementById('at-template-gallery-meta');
    if (metaEl) {
      return {
        platform: metaEl.dataset.platform || 'generic',
        limit: Number(metaEl.dataset.limit || 0),
        unit: metaEl.dataset.unit || 'chars',
        generator: metaEl.dataset.generator || '/tools/custom-instructions-generator'
      };
    }
    var p = location.pathname;
    if (/muse/.test(p)) {
      return { platform: 'muse', limit: 0, unit: 'chars', generator: '/tools/muse-soul-md-editor' };
    }
    if (/chatgpt/.test(p)) {
      return { platform: 'chatgpt', limit: 1500, unit: 'chars', generator: '/tools/custom-instructions-generator' };
    }
    if (/grok/.test(p)) {
      return { platform: 'grok', limit: 4000, unit: 'chars', generator: '/tools/custom-instructions-generator' };
    }
    if (/claude-md|agents-md|cursor|windsurf|codex/.test(p)) {
      return { platform: 'coding', limit: 32768, unit: 'bytes', generator: '/tools/claude-md-generator' };
    }
    return { platform: 'generic', limit: 0, unit: 'chars', generator: '/tools/custom-instructions-generator' };
  }

  function formatBudget(text, meta) {
    if (meta.unit === 'bytes' && meta.limit > 0) {
      var bytes = new Blob([text]).size;
      var kib = (bytes / 1024).toFixed(1);
      var maxKib = (meta.limit / 1024).toFixed(0);
      return {
        label: kib + ' / ' + maxKib + ' KiB',
        over: bytes > meta.limit
      };
    }
    var len = text.length;
    if (meta.limit > 0) {
      return {
        label: len.toLocaleString() + ' / ' + meta.limit.toLocaleString() + ' chars',
        over: len > meta.limit
      };
    }
    return {
      label: len.toLocaleString() + ' chars · ' + text.trim().split(/\s+/).length + ' words',
      over: false
    };
  }

  function init() {
    var main = document.getElementById('main');
    if (!main) return;
    var snippets = Array.prototype.slice.call(main.querySelectorAll('.guide-snippet'));
    if (!snippets.length) return;

    var meta = inferPlatformMeta();
    var headings = Array.prototype.slice.call(main.querySelectorAll('h2, h3, h4'));
    var cards = [];

    snippets.forEach(function (block, index) {
      var contentNode = block.querySelector('.guide-snippet-content');
      var text = (contentNode ? contentNode.textContent : block.textContent).trim();
      var heading = headings.filter(function (h) {
        return h.compareDocumentPosition(block) & Node.DOCUMENT_POSITION_FOLLOWING;
      }).pop();
      var hText = heading ? heading.textContent.replace(/\.$/, '').trim() : ('Template ' + (index + 1));
      var lowerH = hText.toLowerCase();

      // Skip tiny 1-line test prompts so only real templates get .md downloads & gallery filters
      if (lowerH.indexOf('try this prompt') !== -1 || lowerH.indexOf('sample test') !== -1 || text.length < 70) {
        return;
      }

      var slug = slugify(hText);
      var budget = formatBudget(text, meta);

      var bar = el('div', 'at-snippet-bar');
      var badge = el('span', 'at-snippet-meter' + (budget.over ? ' is-over' : ''), budget.label);
      var actions = el('div', 'at-snippet-actions');

      var dlBtn = el('button', 'at-snippet-btn', 'Download .md');
      dlBtn.type = 'button';
      dlBtn.addEventListener('click', function () {
        var currentText = (contentNode ? contentNode.textContent : text).trim();
        var blob = new Blob([currentText + '\n'], { type: 'text/markdown;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = slug + '.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        dlBtn.textContent = 'Downloaded ✓';
        setTimeout(function () { dlBtn.textContent = 'Download .md'; }, 1800);
      });

      var custLink = el('a', 'at-snippet-link', meta.platform === 'muse' ? 'Merge in editor →' : 'Customize →');
      var presetSep = meta.generator.indexOf('?') === -1 ? '?' : '&';
      custLink.href = meta.generator + presetSep + 'preset=' + encodeURIComponent(slug);

      actions.appendChild(dlBtn);
      actions.appendChild(custLink);
      bar.appendChild(badge);
      bar.appendChild(actions);

      block.parentNode.insertBefore(bar, block.nextSibling);

      var cat = categorize(hText, text);
      cards.push({
        heading: heading,
        hLevel: heading ? heading.tagName : null,
        block: block,
        bar: bar,
        title: hText,
        search: (hText + ' ' + text).toLowerCase(),
        cat: cat
      });
    });

    if (cards.length < 5) return;

    // Build sticky category + instant keyword filter bar right above first filterable template heading
    var firstAnchor = cards[0].heading || cards[0].block;
    var mountParent = firstAnchor.parentNode;
    var controls = el('section', 'at-gallery-controls');
    controls.setAttribute('aria-label', 'Filter templates');

    var row = el('div', 'at-gallery-filter-row');
    var searchWrap = el('label', 'at-gallery-search-label', 'Filter templates');
    var searchInp = el('input');
    searchInp.type = 'search';
    searchInp.placeholder = 'Search by role, tone, or workflow...';
    searchWrap.appendChild(searchInp);
    row.appendChild(searchWrap);

    var pillRow = el('div', 'at-pill-row');
    var cats = [
      ['all', 'All (' + cards.length + ')'],
      ['work', 'Work & Strategy'],
      ['coding', 'Coding & Data'],
      ['writing', 'Writing & Study'],
      ['ops', 'Daily Ops & Triage']
    ];
    var activeCat = 'all';
    var catBtns = {};

    var statusEl = el('p', 'at-gallery-status', 'Showing all ' + cards.length + ' templates.');
    statusEl.setAttribute('role', 'status');
    statusEl.setAttribute('aria-live', 'polite');

    function collectAssociatedNodes(card) {
      var nodes = [card.block, card.bar];
      if (!card.heading || card.hLevel !== 'H3') return nodes;
      var cur = card.heading;
      nodes.unshift(cur);
      cur = card.bar.nextSibling;
      while (cur && !/^H[1-3]$/.test(cur.tagName || '')) {
        if (cur.nodeType === 1) nodes.push(cur);
        cur = cur.nextSibling;
      }
      return nodes;
    }

    cards.forEach(function (c) { c.nodes = collectAssociatedNodes(c); });

    function applyFilter() {
      var q = searchInp.value.toLowerCase().trim();
      var shown = 0;
      cards.forEach(function (c) {
        var matchCat = activeCat === 'all' || c.cat === activeCat;
        var matchQ = !q || c.search.indexOf(q) !== -1;
        var visible = matchCat && matchQ;
        if (visible) shown++;
        c.nodes.forEach(function (n) { n.hidden = !visible; });
        if (c.heading && c.hLevel === 'H3') {
          var prev = c.block.previousElementSibling;
          while (prev && prev !== c.heading) {
            prev.hidden = !visible;
            prev = prev.previousElementSibling;
          }
        }
      });
      statusEl.textContent = shown + ' of ' + cards.length + ' templates shown' + (shown ? '.' : ' — try clearing filters.');
    }

    cats.forEach(function (pair) {
      var btn = el('button', 'at-pill-btn', pair[1]);
      btn.type = 'button';
      btn.setAttribute('aria-pressed', pair[0] === activeCat ? 'true' : 'false');
      btn.addEventListener('click', function () {
        activeCat = pair[0];
        Object.keys(catBtns).forEach(function (id) {
          catBtns[id].setAttribute('aria-pressed', id === activeCat ? 'true' : 'false');
        });
        applyFilter();
      });
      catBtns[pair[0]] = btn;
      pillRow.appendChild(btn);
    });

    searchInp.addEventListener('input', applyFilter);

    controls.appendChild(row);
    controls.appendChild(pillRow);
    controls.appendChild(statusEl);
    mountParent.insertBefore(controls, firstAnchor);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
