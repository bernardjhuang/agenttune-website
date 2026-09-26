#!/usr/bin/env node
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),items=require('../research/data/september-2026-instruments.json');
fs.mkdirSync(path.join(root,'resources/scoring'),{recursive:true});
fs.writeFileSync(path.join(root,'resources/scoring/questions.json'),JSON.stringify(items,null,2)+'\n');
const code=`/* AgentTune five-questionnaire scorer v1.0.0. MIT. Strict input; no network calls.
 * Browser: AgentTuneScoring.score(test, answers). Node: require('./score.js').score(test, answers).
 * Answers must follow questions.json order. Incomplete input throws; ties stay unresolved.
 */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.AgentTuneScoring=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const instruments=${JSON.stringify(items)};
const version='agenttune-scoring-2026-09-25.1';
function score(test,answers){
 if(!Object.hasOwn(instruments,test))throw new TypeError('Unknown test. Use mbti, enneagram, disc, attachment or big-five.');
 const items=instruments[test].items,max=test==='attachment'?7:5;
 if(!Array.isArray(answers)||answers.length!==items.length)throw new TypeError('Provide exactly '+items.length+' answers in item order; missing answers are not imputed.');
 for(let i=0;i<items.length;i++)if(!Object.hasOwn(answers,i)||!Number.isInteger(answers[i])||answers[i]<1||answers[i]>max)throw new TypeError('Answer '+(i+1)+' must be an integer from 1 to '+max+'.');
 if(test==='mbti'){
  const values=Object.fromEntries([...'EISNTFJP'].map(k=>[k,0]));answers.forEach((v,i)=>{if(v!==3)values[v<3?items[i].low:items[i].high]+=Math.abs(v-3);});
  const axes=['EI','SN','TF','JP'],tied=axes.filter(([a,b])=>values[a]===values[b]),pattern=axes.map(([a,b])=>values[a]===values[b]?'X':values[a]>values[b]?a:b).join('');
  return {version,test,values,pattern,tied,type:tied.length?null:pattern};
 }
 if(test==='disc'||test==='enneagram'){
  const values=Object.fromEntries((test==='disc'?[...'DISC']:[1,2,3,4,5,6,7,8,9]).map(k=>[k,0]));answers.forEach((v,i)=>values[items[i].type]+=v);
  const leaders=Object.keys(values).filter(k=>values[k]===Math.max(...Object.values(values)));
  return {version,test,values,leaders,tied:leaders.length>1,type:leaders.length===1?leaders[0]:null};
 }
 if(test==='attachment'){
  const sums={anx:0,avd:0},counts={anx:0,avd:0};answers.forEach((v,i)=>{const item=items[i];sums[item.sub]+=item.rev?8-v:v;counts[item.sub]++;});
  const anxiety=sums.anx/counts.anx,avoidance=sums.avd/counts.avd;
  return {version,test,values:{anxiety,avoidance},boundary:anxiety===4||avoidance===4,type:anxiety<=4?(avoidance<=4?'Secure':'Avoidant'):(avoidance<=4?'Anxious':'Disorganized'),interpretation:'Questionnaire quadrant only; 4 is included in the lower band. Not a diagnosis.'};
 }
 const values=Object.fromEntries([...'OCEAN'].map(k=>[k,0]));answers.forEach((v,i)=>values[items[i].dim]+=items[i].rev?6-v:v);
 const reference={O:[37.5,5.5],C:[34.5,6],E:[28.5,7],A:[36.5,5.5],N:[26,7]},indices={},suggestions=[];
 for(const d of 'OCEAN'){indices[d]=(values[d]-reference[d][0])/reference[d][1];if(indices[d]>0.5)suggestions.push({dimension:d,template:'high'});else if(indices[d]<-0.5)suggestions.push({dimension:d,template:'low'});}
 return {version,test,values,indices,suggestions,interpretation:'Indices use implementation reference values, not verified population norms. Template thresholds are heuristic.'};
}
return Object.freeze({version,score});
});\n`;
fs.writeFileSync(path.join(root,'resources/scoring/score.js'),code);
fs.writeFileSync(path.join(root,'resources/scoring/README.md'),`# Local questionnaire scoring\n\nVersion: agenttune-scoring-2026-09-25.1. MIT code. Instrument attribution and original item provenance remain in the [test specifications](https://agent-tune.com/tests/).\n\nDownload [score.js](https://agent-tune.com/resources/scoring/score.js) and [questions.json](https://agent-tune.com/resources/scoring/questions.json). The scorer embeds the same item keys, runs without dependencies or network calls, and accepts exactly one complete numeric response array. It rejects missing, sparse, fractional, string and out-of-range answers.\n\nNode: \`require('./score.js').score('mbti', answers)\`. Browser: \`AgentTuneScoring.score('mbti', answers)\`. Valid IDs: mbti, enneagram, disc, attachment, big-five.\n\nMBTI tied axes are X, with type null. DISC and Enneagram return every tied leader and type null for a tie; no automatic tie-break is applied. Attachment reports means, quadrant and whether a mean is exactly at the boundary of 4. Big Five returns raw 10–50 sums plus heuristic reference indices; the constants have no verified normative population. Results are not diagnoses. Keep answers local.\n\nThe published research scorer separately preserves historical tie-break labels for reproduction; these are not used as current quiz recommendations.\n`);
console.log('Built strict local scorers for all five questionnaires.');
