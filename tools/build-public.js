#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path');
const ROOT=path.resolve(__dirname,'..');
const directories=new Set(['guides','library','tests','tunings','output-styles','research','og']);
const publicRoot=new Set(['index.html','research.html','privacy.html','terms.html','404.html','styles.css','data.js','consent.js','integrations.js','quiz-utils.js','compact-tunings.js','llms.txt','llms-full.txt','robots.txt','sitemap.xml','_headers','_redirects','favicon.ico','favicon.svg','apple-touch-icon.png','3b91249899d7c5b030ddef6498ca2e78.txt']);
function isPublic(relative) {
  const parts=relative.split('/');
  if(parts.length===1)return publicRoot.has(relative);
  if(['tools/custom-instructions-generator.html','tools/claude-md-generator.html'].includes(relative))return true;
  return directories.has(parts[0]) && !parts.some(p=>p.startsWith('.')||p==='src') && /\.(html|css|js|cjs|json|md|csv|png|svg|webp|jpg|ico|txt)$/.test(relative);
}
function build(out=path.join(ROOT,'dist')) {
  // Only this disposable directory may be removed by the build.
  if(path.resolve(out)!==path.join(ROOT,'dist'))throw Error('Unexpected build directory');
  fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
  let n=0;
  function walk(dir,rel='') {
    for(const entry of fs.readdirSync(dir,{withFileTypes:true})) {
      const name=rel?rel+'/'+entry.name:entry.name;
      if(entry.isSymbolicLink())continue;
      if(entry.isDirectory()) {
        if((!rel&&(directories.has(entry.name)||entry.name==='tools'))||(rel&&!entry.name.startsWith('.')&&entry.name!=='src'))walk(path.join(dir,entry.name),name);
      } else if(isPublic(name)) {
        fs.mkdirSync(path.dirname(path.join(out,name)),{recursive:true});fs.copyFileSync(path.join(ROOT,name),path.join(out,name));n++;
      }
    }
  }
  walk(ROOT);console.log(`Published asset bundle: ${n} files in dist/ (source, checks, docs and package metadata excluded).`);
}
module.exports={isPublic,build};
if(require.main===module)build();
