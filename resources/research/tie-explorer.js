/* Progressive enhancement of the static, fully readable tie-comparison article. */
(async function(){
 'use strict';
 const root=document.getElementById('tie-explorer');if(!root)return;
 const model=document.getElementById('tie-model'),result=document.getElementById('tie-result'),patterns=document.getElementById('tie-patterns');
 try {
  const response=await fetch(root.dataset.source);if(!response.ok)throw Error('Unavailable');
  const data=await response.json();
  function update(){
   const row=data.ties.find(r=>r.model===model.value);
   const legacy=root.querySelector('input[name="tie-policy"]:checked').value==='legacy';
   result.textContent=legacy ? `${data.names[row.model]}: ${row.legacy_intj} of ${row.n} records labeled INTJ by the original tie-breaking rule. ${row.legacy_intj-row.resolved_intj} of these have an unresolved axis.` : `${data.names[row.model]}: ${row.resolved_intj} of ${row.n} fully resolved INTJ records. ${row.tied} of ${row.n} records have at least one tied axis.`;
   const heading=document.createElement('h3');heading.textContent=legacy?'Original label distribution':'Patterns with tied axes shown as X';
   const list=document.createElement('ul');
   const distribution=legacy?data.summary[row.model].mbti.legacy_labels:row.patterns;
   for(const [label,count] of Object.entries(distribution).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))){const li=document.createElement('li');li.textContent=`${label}: ${count} of ${row.n}`;list.append(li);}
   patterns.replaceChildren(heading,list);
  }
  root.addEventListener('change',update);update();
 }catch{result.textContent='The interactive data could not load. The complete verified comparison remains in the table above.';model.disabled=true;root.querySelectorAll('input').forEach(input=>input.disabled=true);}
})();
