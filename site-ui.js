/* Progressive enhancements: all links and article content remain in HTML. */
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
