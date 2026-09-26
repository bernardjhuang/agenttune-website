/* MIT. Offline descriptive reanalysis; no API calls, inferred p-values or new observations.
 * Run beside september-2026-{responses,instruments,score}.cjs/json:
 * node content-analysis.cjs > content-analysis.json
 */
'use strict';
const instruments=require('./september-2026-instruments.json');
const {score,summarize}=require('./september-2026-score.cjs');
const names={'gpt-6-astra':'GPT-6 Astra','gpt-6-sol':'GPT-6 Sol','claude-opus-5-5':'Claude Opus 5.5','claude-fable-5-1':'Claude Fable 5.1'};
const mean=xs=>xs.reduce((a,b)=>a+b,0)/xs.length;
function analyze(records){
 const fresh=records.filter(r=>Object.hasOwn(names,r.model));
 const summary=summarize(fresh), comparisons=[], neutral=[], stability=[];
 for(const model of Object.keys(names))for(const test of Object.keys(instruments)){
  const rr=fresh.filter(r=>r.model===model&&r.test===test),s=summary[model][test];
  const counts=new Map();for(const r of rr){const key=JSON.stringify(r.answers);counts.set(key,(counts.get(key)||0)+1);}
  const labels=s.tie_aware_patterns||s.top_sets||s.legacy_labels;
  stability.push({model,test,n:rr.length,unique_vectors:counts.size,most_common_vector:Math.max(...counts.values()),most_common_label:labels?Object.entries(labels).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0]:null,values:s.values});
  if(model==='gpt-6-astra'){
   const midpoint=test==='attachment'?4:3;
   const perItem=instruments[test].items.map((q,i)=>({item:i+1,text:q.text||q.first+' / '+q.second,midpoint:rr.filter(r=>r.answers[i]===midpoint).length,flagged:rr.filter(r=>(r.inapplicable_items||[]).includes(i+1)).length}));
   neutral.push({test,responses:rr.length*instruments[test].items.length,midpoints:perItem.reduce((a,x)=>a+x.midpoint,0),flagged:perItem.reduce((a,x)=>a+x.flagged,0),flagged_nonmidpoint:rr.reduce((n,r)=>n+(r.inapplicable_items||[]).filter(i=>r.answers[i-1]!==midpoint).length,0),items:perItem});
  }
 }
 for(const test of Object.keys(instruments)){
  const a=fresh.filter(r=>r.model==='claude-opus-5-5'&&r.test===test),b=fresh.filter(r=>r.model==='claude-fable-5-1'&&r.test===test);
  instruments[test].items.forEach((q,i)=>{
   const xs=a.map(r=>r.answers[i]),ys=b.map(r=>r.answers[i]);
   const delta=mean(ys)-mean(xs),max=test==='attachment'?7:5;
   comparisons.push({test,item:i+1,text:q.text||q.first+' / '+q.second,dimension:q.dim||q.sub||q.type||q.axis,reverse:!!q.rev,opus_mean:mean(xs),fable_mean:mean(ys),raw_delta:delta,keyed_item_delta:delta===0 ? 0 : test==='mbti' ? delta*('INTJ'.includes(q.high)?1:-1) : q.rev?-delta:delta,opus_distribution:Array.from({length:max},(_,j)=>xs.filter(v=>v===j+1).length),fable_distribution:Array.from({length:max},(_,j)=>ys.filter(v=>v===j+1).length)});
  });
 }
 const ties=Object.keys(names).map(model=>{const s=summary[model].mbti;return{model,n:s.n,legacy_intj:s.legacy_labels.INTJ||0,resolved_intj:s.tie_aware_patterns.INTJ||0,tied:s.runs_with_ties,axis_ties:s.axis_ties,patterns:s.tie_aware_patterns};});
 return {version:1,date:'2026-09-25',evidence:'Descriptive reanalysis of supplied September 2026 records; no new model runs.',names,ties,comparisons,neutral,stability,summary};
}
module.exports={analyze};
if(require.main===module)console.log(JSON.stringify(analyze(require('./september-2026-responses.json').records),null,2));
