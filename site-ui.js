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
 const toc=document.querySelector('.article-toc');if(toc&&matchMedia('(max-width:700px)').matches)toc.open=false;
 function openTarget(hash,focus){let target;try{target=document.getElementById(decodeURIComponent(hash.slice(1)));}catch{return;}if(!target)return;let node=target;while(node){if(node.tagName==='DETAILS')node.open=true;node=node.parentElement;}if(focus){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});}document.querySelectorAll('.lib-v2-anchor').forEach(a=>a.classList.toggle('is-active',a.hash===hash));}
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||a.hash.length<2)return;if(document.getElementById(a.hash.slice(1))){e.preventDefault();history.pushState(null,'',a.hash);openTarget(a.hash,true);}});
 window.addEventListener('wheel',()=>document.querySelectorAll('.lib-v2-anchor.is-active').forEach(a=>a.classList.remove('is-active')),{passive:true});
 window.addEventListener('touchmove',()=>document.querySelectorAll('.lib-v2-anchor.is-active').forEach(a=>a.classList.remove('is-active')),{passive:true});
 if(location.hash)openTarget(location.hash,false);window.addEventListener('hashchange',()=>openTarget(location.hash,true));
})();
