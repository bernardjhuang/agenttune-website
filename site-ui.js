/* Progressive enhancements: all links and article content remain in HTML. */
(function () {
  // Keep editable instructions fully readable, including after programmatic updates.
  const observed = new WeakSet(), widths = new WeakMap();
  let pending = false;
  function resize(editor) {
    if (!editor || editor.tagName !== 'TEXTAREA' || !editor.getBoundingClientRect().width) return;
    const style = getComputedStyle(editor);
    const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    editor.style.height = 'auto';
    editor.style.height = Math.ceil(editor.scrollHeight + border) + 'px';
    editor.style.overflowY = 'hidden';
    editor.style.resize = 'none';
  }
  function refresh() {
    pending = false;
    document.querySelectorAll('textarea').forEach(editor => {
      if (!observed.has(editor)) {
        observed.add(editor);
        observer?.observe(editor);
      }
      resize(editor);
    });
  }
  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(refresh); }
  }
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(entries => {
    for (const {target, contentRect} of entries) {
      if (widths.get(target) !== contentRect.width) {
        widths.set(target, contentRect.width);
        schedule();
      }
    }
  }) : null;
  window.ATTextareas = { resize, refresh: schedule };
  document.addEventListener('input', event => resize(event.target));
  document.addEventListener('toggle', schedule, true);
  window.addEventListener('resize', schedule);
  new MutationObserver(schedule).observe(document.body, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'open']
  });
  if (document.fonts) {
    document.fonts.ready.then(schedule);
    document.fonts.addEventListener('loadingdone', schedule);
  }
  refresh();
})();

(function(){
 // Shared 2s "Copied ✓" button state (used by the workbench, cite drawer, generators).
 function flashCopied(btn, label) {
  if (!btn) return;
  if (!btn.dataset.label) btn.dataset.label = btn.textContent;
  clearTimeout(btn._atCopyTimer);
  btn.textContent = label || 'Copied ✓';
  btn.classList.add('is-copied');
  btn._atCopyTimer = setTimeout(() => { btn.textContent = btn.dataset.label; btn.classList.remove('is-copied'); }, 2000);
 }
 window.ATFlashCopied = flashCopied;

 // Baseline grid inspector Easter egg (Shift+G outside inputs)
 document.addEventListener('keydown', e => {
  if (e.shiftKey && (e.key === 'G' || e.key === 'g') && !e.metaKey && !e.ctrlKey && !e.altKey) {
   const t = e.target;
   if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
   document.body.classList.toggle('show-grid');
  }
 });

 // Home interactive Prompt Workbench + Redline Slop Diff
 const wb = document.querySelector('[data-hp-workbench]');
 if (wb) {
  const PRESETS = {
   advisor: {
    rules: 'Lead with your recommendation.\nExplain the main reason and practical trade-offs.\nUse a short list only when comparing discrete options.\nState material uncertainty and failure risks.\nChallenge a weak premise with evidence.\nFollow my current prompt when it differs.',
    prompt: '“I’m feeling stuck on a project. What should I do?” — default assistant vs. rule-calibrated reply',
    beforeHtml: '<del class="slop-strike">That’s completely normal! Everyone hits a wall sometimes. Here are a few approaches you might try:</del><br>1. Break the project into smaller steps<br>2. Take a short break<br>3. Talk it through with someone<br><del class="slop-strike">Which of these resonates most? Happy to explore any of them!</del>',
    afterHtml: '<mark class="verdict-mark">List the project’s next three deliverables and mark which one has an unresolved dependency or decision.</mark> Being stuck is usually an unmapped decision rather than missing effort. Name the deliverable you are avoiding; we will isolate the blocker and pick one next move.'
   },
   auditor: {
    rules: 'Start with pass/fail verdict and top defects.\nCite specific evidence or assumptions before proposing changes.\nReject flawed premises outright rather than softening disagreement.\nKeep fixes minimal and name second-order risks.\nOmit conversational throat-clearing and compliments.',
    prompt: '“Does this architecture look ready for production traffic?” — default politeness vs. anti-sycophancy audit',
    beforeHtml: '<del class="slop-strike">Great architecture overall! You’ve done an awesome job thinking through the components. One tiny thing you might optionally consider is</del> rate limiting on the public webhook endpoint <del class="slop-strike">depending on your traffic goals. Let me know if you’d like help!</del>',
    afterHtml: '<mark class="verdict-mark">Not ready for production: two blocking defects.</mark> (1) Unauthenticated webhook lacks HMAC verification and idempotency keys, risking duplicate writes under retries. (2) Single connection pool shares batch analytics and checkout traffic. Fix authentication and split pools before rollout.'
   },
   coach: {
    rules: 'Ask one targeted diagnostic question before prescribing a fix.\nSeparate structural bottlenecks from emotional fatigue.\nGive at most two concrete options with exit criteria.\nPreserve clear boundaries around scope and deadlines.',
    prompt: '“Should I rewrite this module from scratch or patch the bugs?” — generic menu vs. calibrated coach',
    beforeHtml: '<del class="slop-strike">That’s such a classic software engineering dilemma! Both options have their pros and cons. Rewriting can be super refreshing, while patching saves time in the short run. What feels most aligned with your team’s vision?</del>',
    afterHtml: '<mark class="verdict-mark">Before choosing: how many tests currently pass on the module, and which invariant fails most often?</mark> If test coverage exceeds 60% and interfaces stay stable, patch incrementally. Only rewrite if coupling blocks fixing two bugs cleanly this sprint.'
   }
  };
  const editor = wb.querySelector('[data-hp-editor]');
  const fill = wb.querySelector('[data-hp-lint-fill]');
  const msg = wb.querySelector('[data-hp-lint-msg]');
  const stats = wb.querySelector('[data-hp-stats]');
  const promptEl = wb.querySelector('[data-hp-diff-prompt]');
  const beforeEl = wb.querySelector('[data-hp-diff-before]');
  const afterEl = wb.querySelector('[data-hp-diff-after]');
  const copyBtn = wb.querySelector('[data-hp-copy]');
  const tabs = Array.from(wb.querySelectorAll('[role="tab"]'));

  function updateLint() {
   if (!editor) return;
   const val = editor.value || '';
   const rules = val.split(/\n+/).map(s => s.trim()).filter(Boolean).length;
   const chars = val.length;
   const pct = Math.min(100, Math.max(8, Math.round((rules / 12) * 100)));
   if (stats) stats.textContent = rules + (rules === 1 ? ' rule' : ' rules') + ' · ' + chars + ' chars';
   if (fill) {
    fill.style.width = pct + '%';
    fill.classList.toggle('is-warn', rules < 2 || rules > 10);
   }
   if (msg) {
    if (rules < 2) msg.textContent = 'Under-specified (' + rules + ' rule) — add explicit ordering and critique rules.';
    else if (rules <= 8) msg.textContent = 'Optimal budget (' + rules + ' rules) — high compliance without lost-in-the-middle decay.';
    else if (rules <= 10) msg.textContent = 'Near ceiling (' + rules + ' rules) — trim redundant phrasing before pasting.';
    else msg.textContent = 'Budget cliff risk (' + rules + ' rules) — recall degrades sharply past 10 stacked rules.';
   }
  }

  function selectTab(btn) {
   const key = btn.dataset.preset;
   const data = PRESETS[key];
   if (!data) return;
   tabs.forEach(t => {
    const active = t === btn;
    t.setAttribute('aria-selected', String(active));
    t.tabIndex = active ? 0 : -1;
   });
   const panelId = btn.getAttribute('aria-controls');
   const panel = panelId && document.getElementById(panelId);
   if (panel && btn.id) panel.setAttribute('aria-labelledby', btn.id);
   if (editor) {
    editor.value = data.rules;
    if (window.ATTextareas) window.ATTextareas.resize(editor);
   }
   if (promptEl) promptEl.textContent = data.prompt;
   if (beforeEl) beforeEl.innerHTML = data.beforeHtml;
   if (afterEl) afterEl.innerHTML = data.afterHtml;
   updateLint();
  }

  tabs.forEach((btn, idx) => {
   btn.addEventListener('click', () => selectTab(btn));
   btn.addEventListener('keydown', e => {
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') next = tabs[(idx + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    else if (e.key === 'Home') next = tabs[0];
    else if (e.key === 'End') next = tabs[tabs.length - 1];
    if (next) {
     e.preventDefault();
     next.focus();
     selectTab(next);
    }
   });
  });

  editor?.addEventListener('input', updateLint);
  copyBtn?.addEventListener('click', async () => {
   const text = editor?.value || '';
   const live = wb.querySelector('[data-hp-copy-status]');
   try {
    await navigator.clipboard.writeText(text);
    if (live) live.textContent = 'Copied instruction block to clipboard.';
    flashCopied(copyBtn);
   } catch {
    if (live) live.textContent = 'Clipboard unavailable — select text in editor and press Ctrl/Cmd+C.';
   }
  });
  updateLint();
 }

 const form=document.querySelector('[data-resource-filter]');
 if(form){
  const library=form.dataset.resourceFilter==='library',cards=Array.from(document.querySelectorAll(library?'.type-card':'.hub-article-card'));
  const q=form.querySelector('input'), app=form.querySelector('#resource-app'),kind=form.querySelector('#resource-kind');
  function update(){
   let n=0;const words=q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
   cards.forEach(card=>{const text=card.textContent.toLowerCase(),href=card.getAttribute('href');
    const appMatch=!app.value || (library?href.includes('/'+app.value+'/'):app.value==='coding'?/code|cursor|copilot|cli|agents.md/.test(text):app.value==='claude'?/claude|opus|fable/.test(text):app.value==='chatgpt'?/chatgpt|gpt|astra|sol/.test(text):text.includes(app.value));
    const kinds={template:/template|prompt/.test(text),developer:/developer|react|typescript|integration|scor|reproduc/.test(text),research:href.startsWith('/research/'),protocol:/test kit|protocol|persistence test/.test(text),setup:/setup|install|instructions|personality|tuning/.test(text)&&!href.startsWith('/research/')};
    card.hidden=!(words.every(w=>text.includes(w))&&appMatch&&(!kind?.value||kinds[kind.value]));if(!card.hidden)n++;
   });
   form.querySelector('[data-filter-status]').textContent=n+' '+(library?(n===1?'template':'templates'):(n===1?'resource':'resources'))+' found'+(n?'':'. Try fewer filters.');
   if(library)document.querySelectorAll('.type-strip').forEach(s=>s.hidden=!Array.from(s.querySelectorAll('.type-card')).some(c=>!c.hidden));
   else document.querySelectorAll('.guides-grid').forEach(grid=>{grid.hidden=!Array.from(grid.querySelectorAll('.hub-article-card')).some(c=>!c.hidden);let h=grid.previousElementSibling;while(h&&h.tagName!=='H2'&&!h.matches('.hero,.resource-filter')){h.hidden=grid.hidden;h=h.previousElementSibling;}if(h?.tagName==='H2')h.hidden=grid.hidden;});
  }
  form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('input',update);form.addEventListener('change',()=>{update();if(window.atTrack)window.atTrack('resource_search');});form.addEventListener('reset',()=>setTimeout(update,0));update();
 }

 const rf=document.querySelector('[data-research-filter]');
 if(rf){
  const pills=Array.from(rf.querySelectorAll('[data-filter-topic]'));
  const search=rf.querySelector('input[type="search"]');
  const statusEl=document.querySelector('[data-research-filter-status]');
  const cards=Array.from(document.querySelectorAll('.hub-articles .hub-article-card'));
  const grids=Array.from(document.querySelectorAll('.hub-articles .hub-articles-grid'));
  let activeTopic='all';
  function applyResearchFilter(){
   const q=(search?.value||'').trim().toLowerCase();
   const words=q?q.split(/\s+/).filter(Boolean):[];
   let studies=0,kits=0;
   cards.forEach(c=>{
    const tags=(c.dataset.tags||'').toLowerCase().split(/\s+/).filter(Boolean);
    const topicOk=activeTopic==='all'||tags.includes(activeTopic);
    const text=(c.textContent+' '+(c.dataset.tags||'')).toLowerCase();
    const queryOk=!words.length||words.every(w=>text.includes(w));
    const show=topicOk&&queryOk;
    c.hidden=!show;
    if(show){if((c.getAttribute('href')||'').startsWith('/research/'))studies++;else kits++;}
   });
   grids.forEach(g=>{
    const anyVis=Array.from(g.querySelectorAll('.hub-article-card')).some(c=>!c.hidden);
    g.hidden=!anyVis;
    const h=g.previousElementSibling;
    if(h&&h.classList.contains('research-shelf-heading'))h.hidden=!anyVis;
   });
   if(statusEl){
    const sLabel=studies+(studies===1?' study':' studies');
    const kLabel=kits+(kits===1?' reproduce kit':' reproduce kits');
    let countText;
    if(studies>0&&kits>0)countText=sLabel+' + '+kLabel+' match';
    else if(kits>0)countText=kLabel+(kits===1?' matches':' match');
    else countText=sLabel+(studies===1?' matches':' match');
    statusEl.textContent=countText+(activeTopic==='all'?'':' in '+activeTopic)+(q?' for “'+q+'”':'');
   }
  }
  pills.forEach(btn=>btn.addEventListener('click',()=>{
   activeTopic=btn.dataset.filterTopic||'all';
   pills.forEach(p=>{const a=p===btn;p.classList.toggle('is-active',a);p.setAttribute('aria-pressed',String(a));});
   applyResearchFilter();
  }));
  search?.addEventListener('input',applyResearchFilter);
  rf.addEventListener('submit',e=>e.preventDefault());
  applyResearchFilter();
 }

 // ---- /models/ hub filter + ?compare= max-3 progressive tray ----
 const mf=document.querySelector('[data-models-filter]');
 if(mf){
  const pills=Array.from(mf.querySelectorAll('[data-model-filter]'));
  const search=mf.querySelector('input[type="search"]');
  const statusEl=document.querySelector('[data-models-filter-status]');
  const cards=Array.from(document.querySelectorAll('[data-models-grid] .model-hub-card'));
  let activeFilter='all';
  function applyModelsFilter(){
   const q=(search?.value||'').trim().toLowerCase();
   const words=q?q.split(/\s+/).filter(Boolean):[];
   let shown=0;
   cards.forEach(c=>{
    const tags=(c.dataset.tags||'').toLowerCase().split(/\s+/).filter(Boolean);
    const tagOk=activeFilter==='all'||tags.includes(activeFilter);
    const text=(c.textContent+' '+(c.dataset.tags||'')).toLowerCase();
    const qOk=!words.length||words.every(w=>text.includes(w));
    const show=tagOk&&qOk;
    c.hidden=!show;
    if(show)shown++;
   });
   if(statusEl){
    statusEl.textContent=shown+(shown===1?' model family matches':' model families match')+(activeFilter==='all'?'':' in '+activeFilter)+(q?' for “'+q+'”':'');
   }
  }
  pills.forEach(btn=>btn.addEventListener('click',()=>{
   activeFilter=btn.dataset.modelFilter||'all';
   pills.forEach(p=>{const a=p===btn;p.classList.toggle('is-active',a);p.setAttribute('aria-pressed',String(a));});
   applyModelsFilter();
  }));
  search?.addEventListener('input',applyModelsFilter);
  mf.addEventListener('submit',e=>e.preventDefault());
  applyModelsFilter();
 }

 const compareTray=document.querySelector('[data-models-compare]');
 if(compareTray){
  let dataset=[];
  try{
   const raw=document.getElementById('models-compare-data');
   if(raw)dataset=JSON.parse(raw.textContent||'[]');
  }catch{dataset=[];}
  const bySlug=new Map(dataset.map(d=>[d.slug,d]));
  const buttons=Array.from(document.querySelectorAll('[data-compare-toggle]'));
  const clearBtn=compareTray.querySelector('[data-compare-clear]');
  const wrap=compareTray.querySelector('[data-compare-table-wrap]');
  const cStatus=compareTray.querySelector('[data-compare-status]');
  const MAX_COMPARE=3;

  function parseCompareUrl(){
   try{
    const raw=new URLSearchParams(location.search).get('compare')||'';
    return Array.from(new Set(raw.split(',').map(s=>s.trim()).filter(s=>bySlug.has(s)))).slice(0,MAX_COMPARE);
   }catch{return [];}
  }
  let selected=parseCompareUrl();

  function syncUrl(){
   try{
    const u=new URL(location.href);
    if(selected.length)u.searchParams.set('compare',selected.join(','));
    else u.searchParams.delete('compare');
    history.replaceState(null,'',u.pathname+(u.search?u.search:'')+u.hash);
   }catch{}
  }

  function renderCompare(){
   buttons.forEach(btn=>{
    const slug=btn.dataset.compareToggle;
    const on=selected.includes(slug);
    btn.classList.toggle('is-active',on);
    btn.setAttribute('aria-pressed',String(on));
    btn.textContent=on?'Selected ✓':'Compare';
    btn.disabled=!on&&selected.length>=MAX_COMPARE;
   });
   if(!selected.length){
    compareTray.hidden=true;
    if(wrap)wrap.textContent='';
    if(cStatus)cStatus.textContent='';
    return;
   }
   compareTray.hidden=false;
   if(cStatus){
    cStatus.textContent=selected.length===MAX_COMPARE
     ?'3 of 3 comparison slots full. Remove one to add another.'
     :selected.length+' of 3 families selected. Pick up to '+(MAX_COMPARE-selected.length)+' more.';
   }
   if(!wrap)return;
   wrap.textContent='';
   const tbl=document.createElement('table');
   tbl.className='press-table';
   const thead=document.createElement('thead');
   const hr=document.createElement('tr');
   ['Metric','Scale',...selected.map(s=>bySlug.get(s).name)].forEach((lbl,i)=>{
    const th=document.createElement('th');th.scope='col';th.textContent=lbl;hr.appendChild(th);
   });
   thead.appendChild(hr);tbl.appendChild(thead);
   const tbody=document.createElement('tbody');
   const rows=[
    ['Latest Checkpoint','OpenRouter',s=>s.current_checkpoint],
    ['B5 Entropy (H_MM)','bits (0–2.322)',s=>Number(s.entropy_b5_hmm).toFixed(3)+' b ('+s.crystallinity_tier+')'],
    ['MBTI Axis Tie Rate','proportion',s=>(Number(s.mbti_tie_rate)*100).toFixed(1)+'%'],
    ['Big Five O / C / E / A / N','10–50 sum',s=>['O','C','E','A','N'].map(k=>Number(s.big_five[k]).toFixed(1)).join(' · ')],
    ['IPIP-HEXACO H / E / X / A / C / O','1.00–5.00 mean',s=>['H','E','X','A','C','O'].map(k=>Number(s.ipip_hexaco[k]).toFixed(2)).join(' · ')],
    ['Trait-Balanced BAI','index',s=>(s.bai>=0?'+':'')+Number(s.bai).toFixed(3)]
   ];
   rows.forEach(([label,scale,fn])=>{
    const tr=document.createElement('tr');
    const th=document.createElement('th');th.scope='row';th.textContent=label;tr.appendChild(th);
    const tdScale=document.createElement('td');tdScale.textContent=scale;tr.appendChild(tdScale);
    selected.forEach(slug=>{
     const td=document.createElement('td');td.textContent=fn(bySlug.get(slug));tr.appendChild(td);
    });
    tbody.appendChild(tr);
   });
   tbl.appendChild(tbody);wrap.appendChild(tbl);
  }

  buttons.forEach(btn=>btn.addEventListener('click',()=>{
   const slug=btn.dataset.compareToggle;
   if(!bySlug.has(slug))return;
   if(selected.includes(slug))selected=selected.filter(s=>s!==slug);
   else if(selected.length<MAX_COMPARE)selected=[...selected,slug];
   syncUrl();renderCompare();
  }));
  clearBtn?.addEventListener('click',()=>{selected=[];syncUrl();renderCompare();});
  renderCompare();
 }
 const toc=document.querySelector('.article-toc');if(toc&&matchMedia('(max-width:1119px)').matches)toc.open=false;
 function openTarget(hash,focus){let target;try{target=document.getElementById(decodeURIComponent(hash.slice(1)));}catch{return;}if(!target)return;let node=target;while(node){if(node.tagName==='DETAILS')node.open=true;node=node.parentElement;}if(focus){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});}document.querySelectorAll('.lib-v2-anchor').forEach(a=>a.classList.toggle('is-active',a.hash===hash));}
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||a.hash.length<2)return;if(document.getElementById(a.hash.slice(1))){e.preventDefault();history.pushState(null,'',a.hash);openTarget(a.hash,true);}});
 window.addEventListener('wheel',()=>document.querySelectorAll('.lib-v2-anchor.is-active').forEach(a=>a.classList.remove('is-active')),{passive:true});
 window.addEventListener('touchmove',()=>document.querySelectorAll('.lib-v2-anchor.is-active').forEach(a=>a.classList.remove('is-active')),{passive:true});
 if(location.hash)openTarget(location.hash,false);window.addEventListener('hashchange',()=>openTarget(location.hash,true));
})();

/* Archival Press human UX: cite drawer, quick-jump palette, 404 diagnostic, calibration ping.
   Everything here is progressive: no static <main> markup changes until a user acts. */
(function(){
 const flash = window.ATFlashCopied || function(){};
 function editable(t){return !!t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.tagName==='SELECT'||t.isContentEditable);}
 async function copyText(text){
  try{await navigator.clipboard.writeText(text);return true;}
  catch{
   try{const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();const ok=document.execCommand('copy');ta.remove();return ok;}catch{return false;}
  }
 }
 function selectNode(node){try{const r=document.createRange();r.selectNodeContents(node);const sel=getSelection();sel.removeAllRanges();sel.addRange(r);}catch{}}

 // ---- Cite-this-study drawer: button[data-copy-cite] copies the matching pre[data-cite-text] ----
 const CITE_LABEL={apa:'APA citation',bibtex:'BibTeX entry',md:'Markdown brief'};
 document.addEventListener('click',async e=>{
  const btn=e.target.closest('[data-copy-cite]');if(!btn)return;
  const box=btn.closest('[data-cite-box]')||document;
  const kind=btn.dataset.copyCite;
  const src=box.querySelector('[data-cite-text="'+kind+'"]');
  const status=box.querySelector('[data-cite-status]');
  if(!src)return;
  const ok=await copyText(src.textContent.trim());
  if(ok){flash(btn);if(status){status.removeAttribute('data-error');status.textContent=(CITE_LABEL[kind]||'Citation')+' copied to clipboard.';}if(window.atTrack)window.atTrack('cite_copy');}
  else{selectNode(src);if(status){status.setAttribute('data-error','true');status.textContent='Clipboard unavailable — the citation is selected; press Ctrl/Cmd+C.';}}
 });

 // ---- Quick-jump palette: "/" or Cmd/Ctrl+K outside editable fields ----
 const ROUTES=[
  ['Hub','Home','/'],['Hub','Research archive (32 studies)','/research'],['Hub','Model personality profiles (25 families)','/models/'],['Hub','Template library (43)','/library/'],['Hub','Platform guides','/guides/'],['Hub','Personality tests','/tests/'],['Hub','Free tools','/tools/'],
  ['Model','Claude Opus — model profile','/models/claude-opus'],['Model','Claude Sonnet — model profile','/models/claude-sonnet'],['Model','GPT Sol — model profile','/models/gpt-sol'],['Model','Muse Spark — model profile','/models/muse-spark'],['Model','Muse Wonder — model profile','/models/muse-wonder'],
  ['Tool','Custom instructions generator','/tools/custom-instructions-generator'],['Tool','CLAUDE.md & AGENTS.md generator','/tools/claude-md-generator'],['Tool','Communication preferences builder','/tools/communication-preferences-builder'],['Tool','Instruction checker','/tools/instruction-checker'],['Tool','Instruction converter & merger','/tools/instruction-converter'],['Tool','Instruction test bench','/tools/instruction-test-bench'],['Tool','Muse Soul.md editor','/tools/muse-soul-md-editor'],['Tool','AI memory export reviewer','/tools/ai-memory-reviewer'],['Tool','How to work with me card','/tools/how-to-work-with-me'],['Tool','Enneagram scoring playground','/tools/enneagram-scoring-playground'],
  ['Test','MBTI-style test (OEJTS)','/tests/mbti'],['Test','Enneagram test (OEPS)','/tests/enneagram'],['Test','DISC test (ODAT)','/tests/disc'],['Test','Attachment test (ECR-R)','/tests/attachment'],['Test','Big Five test (IPIP-50)','/tests/big-five'],
  ['Study','System vs. user persona precedence','/research/ai-system-vs-user-persona-precedence'],['Study','Cross-model prompt portability (5 lineages)','/research/ai-cross-model-prompt-portability'],['Study','Emotional distress warmth vs. truth trade-off','/research/ai-distress-warmth-truth-tradeoff'],['Study','Multi-agent peer conformity (Asch trap)','/research/ai-multi-agent-peer-conformity'],['Study','The AI Big One: 63.6% factor collapse','/research/ai-big-one-factor-collapse-mtmm-audit'],['Study','Crystalline vs. fluid minds: persona entropy','/research/ai-persona-entropy-crystalline-vs-fluid-minds'],['Study','Reasoning–personality phase transition','/research/ai-reasoning-personality-phase-transition'],['Study','Historical evolution of AI personalities 2023–2026','/research/historical-evolution-of-ai-personalities-2023-2026'],['Study','Agent autonomy & reasoning-effort drift','/research/ai-agent-autonomy-over-asking-vs-reasoning-effort'],['Study','Instruction budget cliff','/research/ai-instruction-budget-cliff-lost-in-the-middle'],['Study','Prompt syntax wars','/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot'],['Study','Sycophancy vs. false contrarianism','/research/ai-sycophancy-vs-false-contrarianism-benchmark'],['Study','Persona half-life & context drift','/research/ai-persona-half-life-context-drift'],['Study','AI slop fingerprint (8 models)','/research/ai-slop-fingerprint-benchmark-8-models'],['Study','The AI roleplay tax','/research/ai-roleplay-tax-fictional-character-prompts'],['Study','AI personality rankings (20 models)','/research/ai-personality-rankings'],['Study','Does personality tuning change answers?','/research/does-personality-tuning-change-ai-answers'],['Study','Why AI chooses neutral answers','/research/ai-neutral-answers'],['Study','MBTI tie-breaking inflation','/research/ai-mbti-tie-breaking'],['Study','Big Five item-level comparison','/research/ai-big-five-item-level-comparison'],['Study','Personality repeatability','/research/ai-personality-repeatability'],['Study','Five models take five tests','/research/ai-personality-five-models-2026'],['Study','What personality type is ChatGPT?','/research/what-personality-type-is-chatgpt'],['Study','What personality type is Claude?','/research/what-personality-type-is-claude'],['Study','What personality type is Gemini?','/research/what-personality-type-is-gemini'],['Study','What personality type is Grok?','/research/what-personality-type-is-grok'],['Study','What personality type is Muse?','/research/what-personality-type-is-muse'],['Study','Open-source model personality types','/research/what-personality-type-are-open-source-models'],['Study','Astra vs Sol: 100-run data','/research/astra-vs-sol-personality-data'],['Study','Opus vs Fable: question level','/research/opus-vs-fable-question-level'],['Study','Is every AI an INTJ?','/research/first-ai-that-is-not-an-intj'],['Study','Opus MBTI 100× simulation','/research/i-took-the-mbti-100-times'],
  ['Agent','llms.txt (machine index)','/llms.txt'],['Agent','Library index.json','/library/index.json'],['Agent','Free tools catalog.json','/resources/tools/catalog.json']
 ];
 let tunings=null;
 function loadTunings(){
  if(tunings)return Promise.resolve(tunings);
  return fetch('/library/index.json',{credentials:'same-origin'}).then(r=>r.ok?r.json():{tunings:[]}).then(d=>{
   tunings=(d.tunings||[]).map(t=>{let path=t.page||'';try{path=new URL(t.page,location.origin).pathname;}catch{}return ['Template',t.code+' · '+t.name+' ('+String(t.system||'').toUpperCase()+')',path,t.blurb||''];});
   return tunings;
  }).catch(()=>(tunings=[]));
 }
 let dlg=null,input=null,list=null,items=[],active=0,lastFocus=null;
 function build(){
  dlg=document.createElement('dialog');dlg.className='cmdk-dialog';dlg.setAttribute('aria-label','Quick jump');
  dlg.innerHTML='<label for="cmdk-input">Jump to a page</label><input id="cmdk-input" class="cmdk-input" type="search" autocomplete="off" spellcheck="false" placeholder="Jump to a study, template, test or tool…" role="combobox" aria-expanded="true" aria-controls="cmdk-list" aria-autocomplete="list"><ul id="cmdk-list" class="cmdk-list" role="listbox" aria-label="Results"></ul><div class="cmdk-foot" aria-hidden="true"><span><kbd>↑</kbd> <kbd>↓</kbd> move</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span></div>';
  document.body.appendChild(dlg);
  input=dlg.querySelector('input');list=dlg.querySelector('ul');
  input.addEventListener('input',render);
  input.addEventListener('keydown',e=>{
   if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!items.length)return;active=(active+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;mark();}
   else if(e.key==='Enter'){e.preventDefault();const a=list.querySelector('[aria-selected="true"] a');if(a)location.href=a.href;}
  });
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
  dlg.addEventListener('close',()=>{if(lastFocus&&lastFocus.focus)lastFocus.focus();});
 }
 function score(entry,words){const hay=(entry[1]+' '+entry[2]+' '+(entry[3]||'')+' '+entry[0]).toLowerCase();let s=0;for(const w of words){const i=hay.indexOf(w);if(i<0)return -1;s+=i===0?3:(entry[1].toLowerCase().includes(w)?2:1);}return s;}
 function render(){
  const q=input.value.trim().toLowerCase(),words=q.split(/\s+/).filter(Boolean);
  const pool=ROUTES.concat(tunings||[]);
  items=(words.length?pool.map(e=>[score(e,words),e]).filter(x=>x[0]>=0).sort((a,b)=>b[0]-a[0]).map(x=>x[1]):pool.filter(e=>e[0]==='Hub'||e[0]==='Tool').slice(0,10)).slice(0,30);
  active=0;list.textContent='';
  if(!items.length){const li=document.createElement('li');li.className='cmdk-empty';li.setAttribute('role','presentation');li.textContent='No match for “'+input.value.trim()+'”. Try a model, framework or type code (e.g. INTJ, Fable, sycophancy).';list.appendChild(li);input.removeAttribute('aria-activedescendant');return;}
  items.forEach((e,i)=>{const li=document.createElement('li');li.className='cmdk-item';li.id='cmdk-opt-'+i;li.setAttribute('role','option');const a=document.createElement('a');a.href=e[2];a.tabIndex=-1;const k=document.createElement('span');k.className='cmdk-item-kind';k.textContent=e[0];const t=document.createElement('span');t.textContent=e[1];a.append(k,t);li.appendChild(a);li.addEventListener('mousemove',()=>{if(active!==i){active=i;mark();}});list.appendChild(li);});
  mark();
 }
 function mark(){Array.from(list.children).forEach((li,i)=>{if(li.getAttribute('role')!=='option')return;const on=i===active;li.setAttribute('aria-selected',String(on));if(on){input.setAttribute('aria-activedescendant',li.id);li.scrollIntoView({block:'nearest'});}});}
 function openPalette(){
  if(typeof HTMLDialogElement!=='function')return;
  if(!dlg)build();
  if(dlg.open)return;
  lastFocus=document.activeElement;input.value='';render();dlg.showModal();input.focus();
  loadTunings().then(()=>{if(dlg.open)render();});
  if(window.atTrack)window.atTrack('quick_jump_open');
 }
 window.ATQuickJump={open:openPalette};

 // ---- Instrument calibration ping (type "calibrate" outside inputs, or window.agentTune.calibrate()) ----
 const FINDINGS=[
  {claim:'63.58% of Big Five variance collapses onto one general factor across 20 LLMs.',n:'10,000 frozen sheets; PCA on N = 20 model means (pooled-sheet PC1 = 57.64%).',url:'/research/ai-big-one-factor-collapse-mtmm-audit'},
  {claim:'Claude Fable 5.2 averages 0.054 bits of per-item entropy (2/100 unique DISC vectors); DeepSeek V4 Pro spreads across 1.499 bits.',n:'100 repeated sheets per model, 20 models.',url:'/research/ai-persona-entropy-crystalline-vs-fluid-minds'},
  {claim:'Mask Gap of −0.25 to −1.65: public answers read crisper than the private chain of thought that produced them.',n:'138 traced completions; 3-family blind judges (α = 0.79 / 0.78).',url:'/research/ai-reasoning-personality-phase-transition'},
  {claim:'Self-reported Agreeableness correlated r = −0.79 with observed caving: low-A Gemma 2/3 checkpoints caved 33%, 2026 models held 100%.',n:'32 live checkpoints across 8 labs, 2023–2026.',url:'/research/historical-evolution-of-ai-personalities-2023-2026'},
  {claim:'“As an AI” personality-test refusals fell from 60.0% (2023) to 5.5% (2026).',n:'32 live checkpoints across 8 labs, 2023–2026.',url:'/research/historical-evolution-of-ai-personalities-2023-2026'}
 ];
 function dayOfYear(d){return Math.floor((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(d.getFullYear(),0,0))/864e5);}
 function calibrate(opts){
  const f=FINDINGS[dayOfYear(new Date())%FINDINGS.length];
  const report={instrument:'AgentTune calibration ping',self_report:'This page says it is well calibrated.',observed:f.claim,sample:f.n,source:new URL(f.url,location.origin).href,caveat:'One finding is not a profile. Read the boundary conditions before quoting it.'};
  if(!(opts&&opts.silent))showToast(f);
  try{console.info('%c'+report.instrument,'font-variant-caps:all-small-caps;letter-spacing:.08em;color:#3e5a4c',report);}catch{}
  return report;
 }
 let toast=null;
 function showToast(f){
  if(toast)toast.remove();
  toast=document.createElement('aside');toast.className='calibrate-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');toast.setAttribute('aria-label','Instrument calibration');
  const h=document.createElement('p');h.className='calibrate-toast-title';h.textContent='Instrument calibration · self-report vs. behaviour';
  const p1=document.createElement('p');p1.textContent=f.claim;
  const p2=document.createElement('p');p2.style.color='var(--muted)';p2.textContent='n: '+f.n+' ';
  const a=document.createElement('a');a.href=f.url;a.textContent='Read the study →';p2.appendChild(a);
  const x=document.createElement('button');x.type='button';x.className='calibrate-toast-close';x.setAttribute('aria-label','Dismiss calibration notice');x.textContent='×';x.addEventListener('click',()=>{toast.remove();toast=null;});
  toast.append(x,h,p1,p2);document.body.appendChild(toast);
 }
 window.agentTune=Object.assign(window.agentTune||{},{calibrate:o=>calibrate(o),findings:()=>FINDINGS.map(f=>Object.assign({},f,{url:new URL(f.url,location.origin).href}))});

 let buf='';
 document.addEventListener('keydown',e=>{
  if(e.defaultPrevented||e.isComposing)return;
  if(e.key==='Escape'&&toast){toast.remove();toast=null;return;}
  if(editable(e.target))return;
  if((e.key==='k'||e.key==='K')&&(e.metaKey||e.ctrlKey)&&!e.altKey&&!e.shiftKey){e.preventDefault();openPalette();return;}
  if(e.key==='/'&&!e.metaKey&&!e.ctrlKey&&!e.altKey){e.preventDefault();openPalette();return;}
  if(e.metaKey||e.ctrlKey||e.altKey||e.key.length!==1){return;}
  buf=(buf+e.key.toLowerCase()).slice(-9);
  if(buf==='calibrate'){buf='';calibrate();}
 });

 // ---- 404 diagnostic: nearest construct by edit distance ----
 const diag=document.querySelector('[data-diag-404]');
 if(diag){
  const req=location.pathname+location.search;
  const setText=(sel,v)=>{const el=diag.querySelector(sel);if(el)el.textContent=v;};
  setText('[data-diag-requested]',req.length>80?req.slice(0,77)+'…':req);
  function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let prev=Array.from({length:n+1},(_,j)=>j);for(let i=1;i<=m;i++){const cur=[i];for(let j=1;j<=n;j++)cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=cur;}return prev[n];}
  const seg=(location.pathname.toLowerCase().replace(/\.html?$/,'').replace(/\/+$/,'').split('/').pop()||'').slice(0,80);
  loadTunings().then(t=>{
   const pool=ROUTES.filter(r=>r[2].startsWith('/')&&!/\.(txt|json)$/.test(r[2])).concat(t);
   let best=null,bd=Infinity;
   for(const r of pool){const last=r[2].replace(/\/+$/,'').split('/').pop()||'home';const d=lev(seg,last.toLowerCase());if(d<bd){bd=d;best=r;}}
   if(!best||!seg)return;
   const link=diag.querySelector('[data-diag-nearest]');
   if(link){link.textContent=best[1];link.href=best[2];}
   setText('[data-diag-distance]','edit distance '+bd);
   const conf=bd<=2?'moderate':bd<=5?'low':'very low';
   setText('[data-diag-verdict]','hallucinated route; confidence '+conf+', n = 1');
  });
 }
})();
