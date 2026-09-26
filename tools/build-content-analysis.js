#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dir=path.join(root,'research/data');
const {analyze}=require('../research/data/content-analysis.cjs');
const result=analyze(require('../research/data/september-2026-responses.json').records);
fs.writeFileSync(path.join(dir,'content-analysis.json'),JSON.stringify(result,null,2)+'\n');
function csv(name,head,rows){const quote=v=>'"'+String(v??'').replaceAll('"','""')+'"';fs.writeFileSync(path.join(dir,name),[head,...rows].map(r=>r.map(quote).join(',')).join('\n')+'\n');}
csv('opus-fable-item-comparison.csv',['test','item','text','dimension','reverse','opus_mean','fable_mean','raw_delta_fable_minus_opus','keyed_item_delta_fable_minus_opus','opus_counts_from_1','fable_counts_from_1'],result.comparisons.map(x=>[x.test,x.item,x.text,x.dimension,x.reverse,x.opus_mean,x.fable_mean,x.raw_delta,x.keyed_item_delta,x.opus_distribution.join('|'),x.fable_distribution.join('|')]));
csv('astra-midpoint-items.csv',['test','item','text','n','midpoint_count','inapplicable_count'],result.neutral.flatMap(t=>t.items.map(x=>[t.test,x.item,x.text,100,x.midpoint,x.flagged])));
csv('ai-repeatability.csv',['model','test','n','unique_vectors','most_common_vector_count','modal_tie_aware_label_or_top_set','modal_count'],result.stability.map(x=>[x.model,x.test,x.n,x.unique_vectors,x.most_common_vector,...(x.most_common_label||['',''])]));
console.log('Research analysis JSON and three CSV downloads regenerated.');
