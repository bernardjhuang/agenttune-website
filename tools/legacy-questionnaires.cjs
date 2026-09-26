// Preserve the established quiz UI while generating every item and score from the pinned release.
const fs=require('node:fs'),path=require('node:path'),content=require('./content-bundle.cjs')();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inline=v=>JSON.stringify(v).replace(/</g,'\\u003c');
const compute={
 mbti:`function computeType(answers) {
      const result=scoreAnswers(answers);if(result.status!=='complete')return result;
      const axes=Object.fromEntries(['EI','SN','TF','JP'].map(axis=>[axis,Object.fromEntries([...axis].map(k=>[k,result.values[k]]))]));
      const unresolved=[];
      const pattern=Object.keys(axes).map(axis=>{const [a,b]=axis;if(axes[axis][a]!==axes[axis][b])return axes[axis][a]>axes[axis][b]?a:b;if(axis.includes(state.preferences[axis])&&state.preferences[axis]?.length===1)return state.preferences[axis];unresolved.push(axis);return 'X';}).join('');
      return {...result,axes,pattern,type:unresolved.length?null:pattern,unresolved,incomplete:[]};
    }`,
 enneagram:`function computeResult(answers) {
      const result=scoreAnswers(answers);if(result.status!=='complete')return result;
      const scores=result.values,dom=result.type?Number(result.type):null;
      const a=dom===1?9:dom-1,b=dom===9?1:dom+1;
      const wing=dom?(scores[a]>scores[b]?a:scores[b]>scores[a]?b:null):null;
      return {...result,dominant:dom,wing,scores,profile:dom?(wing?dom+'w'+wing:String(dom)):null};
    }`,
 disc:`function computeResult(answers) {
      const result=scoreAnswers(answers);if(result.status!=='complete')return result;
      const scores=result.values,sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1]),dominant=result.type;
      const runners=sorted.filter(x=>x[0]!==dominant&&x[1]===sorted[1][1]);
      const secondary=runners.length===1?runners[0][0]:null;
      const isBlend=Boolean(dominant&&secondary&&scores[dominant]-scores[secondary]<=2);
      return {...result,dominant,secondary,isBlend,profile:isBlend?dominant+secondary:dominant,scores};
    }`,
 attachment:`function computeResult(answers) {
      const result=scoreAnswers(answers);if(result.status!=='complete')return result;
      const {anxiety,avoidance}=result.means;
      const style=anxiety<=4?(avoidance<=4?'secure':'avoidant'):(avoidance<=4?'anxious':'disorganized');
      return {...result,style,anxiety,avoidance};
    }`
};
for(const route of Object.keys(compute)){
 const d=content.definitions.find(d=>d.route===route);if(!d)throw Error('Missing active questionnaire '+route);
 const items=d.items.map(i=>route==='mbti'?{first:i.first,second:i.second,axis:i.dimension,low:i.low,high:i.high}:route==='attachment'?{text:i.text,sub:i.dimension==='anxiety'?'anx':'avd',rev:i.reverse}:{text:i.text,type:route==='enneagram'?Number(i.dimension):i.dimension});
 const rows=d.items.map((i,n)=>route==='mbti'?`<tr><td>${n+1}</td><td>${esc(i.first)}</td><td>${esc(i.second)}</td></tr>`:`<tr><td>${n+1}</td><td>${esc(i.text)}</td><td>${esc(i.dimension)}</td>${route==='attachment'?'<td>'+(i.reverse?'Yes':'No')+'</td>':''}</tr>`).join('\n');
 const note=`<p><strong>Edition:</strong> ${esc(d.id)}@${esc(d.version)}. This preserves the earlier AgentTune adaptation. <a href="/tests/${route}.md">Full questions, scoring and adaptation notes</a> · <a href="/resources/content/THIRD_PARTY_NOTICES.md">Sources and terms</a>. Results are self-reports, not diagnoses; review any suggested preferences before using them.</p>`;
 const html=fs.readFileSync(path.join(__dirname,'templates/questionnaires',route+'.html'),'utf8').replace('__ITEMS__',inline(items)).replace('__INSTRUMENT_ID__',inline(d.id)).replace('__INSTRUMENT_VERSION__',inline(d.version)).replace('__SPEC_ROWS__',rows).replace('__EDITION_NOTE__',note).replace('__COMPUTE__',compute[route]);
 if(/__(ITEMS|INSTRUMENT|SPEC_ROWS|EDITION_NOTE|COMPUTE)/.test(html))throw Error('Unrendered quiz placeholder');
 fs.writeFileSync(path.join(content.root,'tests',route+'.html'),html);
}
