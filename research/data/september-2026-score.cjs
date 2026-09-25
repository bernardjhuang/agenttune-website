/* Offline reanalysis of supplied responses, not a runner that calls model APIs.
 * MIT; uses frozen item metadata and preserves legacy labels for comparison.
 * Usage: node research/data/september-2026-score.cjs > summary.json
 */
const fs = require('node:fs');
const path = require('node:path');
const items = require('./september-2026-instruments.json');
function score(test, a) {
  const its = items[test].items;
  if (a.length !== its.length || a.some(v=>!Number.isInteger(v)||v<1||v>(test==='attachment'?7:5))) throw Error('Invalid response');
  if(test==='mbti') {
    const s=Object.fromEntries([... 'EISNTFJP'].map(k=>[k,0]));
    a.forEach((v,i)=>{if(v!==3)s[v<3?its[i].low:its[i].high]+=Math.abs(v-3)});
    const axes=['EI','SN','TF','JP'];
    const pattern=axes.map(([x,y])=>s[x]===s[y]?'X':s[x]>s[y]?x:y).join('');
    const legacy=(s.E>s.I?'E':'I')+(s.S>s.N?'S':'N')+(s.F>s.T?'F':'T')+(s.P>s.J?'P':'J');
    return {legacy,pattern,tied:axes.filter(([x,y])=>s[x]===s[y]),values:{'I-E':s.I-s.E,'N-S':s.N-s.S,'T-F':s.T-s.F,'J-P':s.J-s.P}};
  }
  if(test==='disc'||test==='enneagram') {
    const s=Object.fromEntries((test==='disc'?[...'DISC']:[1,2,3,4,5,6,7,8,9]).map(k=>[k,0]));
    a.forEach((v,i)=>s[its[i].type]+=v);
    const order=Object.keys(s).sort((x,y)=>s[y]-s[x]);
    const winners=order.filter(k=>s[k]===s[order[0]]);
    let legacy=order[0];
    if(test==='disc') {if(s[order[0]]-s[order[1]]<=2)legacy+=order[1];}
    else {const d=+legacy,lo=d===1?9:d-1,hi=d===9?1:d+1;if(s[lo]!==s[hi])legacy+='w'+(s[lo]>s[hi]?lo:hi);}
    return {legacy,winners,values:s};
  }
  if(test==='big-five') {
    const values=Object.fromEntries([... 'OCEAN'].map(k=>[k,0]));
    a.forEach((v,i)=>values[its[i].dim]+=its[i].rev?6-v:v);
    return {values};
  }
  const sums={anx:0,avd:0},counts={anx:0,avd:0};
  a.forEach((v,i)=>{sums[its[i].sub]+=its[i].rev?8-v:v;counts[its[i].sub]++;});
  const anxiety=sums.anx/counts.anx,avoidance=sums.avd/counts.avd;
  return {legacy:anxiety<=4?(avoidance<=4?'Secure':'Avoidant'):(avoidance<=4?'Anxious':'Disorganized'),values:{anxiety,avoidance}};
}
const distribution=xs=>xs.reduce((r,x)=>(r[x]=(r[x]||0)+1,r),{});
function summarize(records) {
  const result={};
  for(const model of [...new Set(records.map(r=>r.model))]) {
    result[model]={};
    for(const test of Object.keys(items)) {
      const rr=records.filter(r=>r.model===model&&r.test===test); if(!rr.length)continue;
      const ss=rr.map(r=>score(test,r.answers));
      const values={};
      for(const key of Object.keys(ss[0].values)) {
        const xs=ss.map(s=>s.values[key]),mean=xs.reduce((a,b)=>a+b,0)/xs.length;
        values[key]={mean,sd:xs.length>1?Math.sqrt(xs.reduce((a,b)=>a+(b-mean)**2,0)/(xs.length-1)):null,min:Math.min(...xs),max:Math.max(...xs)};
      }
      result[model][test]={n:rr.length,unique_vectors:new Set(rr.map(r=>JSON.stringify(r.answers))).size,values,
        ...(ss[0].legacy?{legacy_labels:distribution(ss.map(s=>s.legacy))}:{}),
        ...(test==='mbti'?{tie_aware_patterns:distribution(ss.map(s=>s.pattern)),runs_with_ties:ss.filter(s=>s.tied.length).length,axis_ties:Object.fromEntries(['EI','SN','TF','JP'].map(k=>[k,ss.filter(s=>s.tied.includes(k)).length]))}:{}),
        ...(ss[0].winners?{top_sets:distribution(ss.map(s=>s.winners.slice().sort().join('/'))),runs_with_ties:ss.filter(s=>s.winners.length>1).length}:{}),
      };
    }
  }
  return result;
}
module.exports={score,summarize};
if(require.main===module) console.log(JSON.stringify(summarize(require('./september-2026-responses.json').records),null,2));
