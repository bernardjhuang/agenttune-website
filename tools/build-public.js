#!/usr/bin/env node
'use strict';
const {enhance,markdown}=require('./enhance-pages');
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const ROOT=path.resolve(__dirname,'..');
const {applyNavigation}=require('./navigation');
const {specs}=require('./build-tools');
const toolPages=new Set(['tools/index.html',...specs.map(s=>'tools/'+s.slug+'.html')]);
const directories=new Set(['guides','library','tests','tunings','output-styles','research','og','resources']);
const publicRoot=new Set(['index.html','research.html','privacy.html','terms.html','404.html','styles.css','data.js','consent.js','integrations.js', 'guide-prompts.js','platforms.js','site-ui.js','quiz-utils.js','compact-tunings.js','llms.txt','llms-full.txt','robots.txt','sitemap.xml','_headers','_redirects','favicon.ico','favicon.svg','apple-touch-icon.png','3b91249899d7c5b030ddef6498ca2e78.txt']);
function isPublic(relative) {
  const parts=relative.split('/');
  if(parts.length===1)return publicRoot.has(relative);
  if(toolPages.has(relative))return true;
  if(['tools/custom-instructions-generator.html','tools/claude-md-generator.html'].includes(relative))return true;
  return directories.has(parts[0]) && !parts.some(p=>p.startsWith('.')||p==='src') && /\.(html|css|js|cjs|json|md|csv|png|svg|webp|jpg|ico|txt|zip)$/.test(relative);
}
// Shared assets are cached for hours at the edge and in browsers. Every published HTML file
// references them with a content hash so a new deploy is never served with a stale stylesheet.
const ASSETS=['styles.css','data.js','integrations.js','compact-tunings.js','quiz-utils.js','consent.js','guide-prompts.js','platforms.js','site-ui.js','resources/tools/core.js','resources/tools/app.js','resources/tools/tools.css','resources/tools/navigation.js','resources/tools/navigation.css','resources/enneagram/score.js'];
function versionAssets(html,hashes) {
  return html.replace(/\b(href|src)="([^"?#]+)(?:\?v=[^"#]*)?"/g,(m,attr,url)=>{const file=url.replace(/^\//,'');return hashes[file]?`${attr}="${url}?v=${hashes[file]}"`:m;});
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
  walk(ROOT);
  const hashes=Object.fromEntries(ASSETS.filter(a=>fs.existsSync(path.join(out,a))).map(a=>[a,crypto.createHash('sha1').update(fs.readFileSync(path.join(out,a))).digest('hex').slice(0,10)]));
  let v=0;
  (function stamp(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())stamp(p);else if(entry.name.endsWith('.html')){const html=fs.readFileSync(p,'utf8');const relative=path.relative(out,p).split(path.sep).join('/');const route='/'+relative.replace(/index\.html$/,'').replace(/\.html$/,'');const enhanced=enhance(applyNavigation(html,route),relative);const next=versionAssets(enhanced,hashes);if(/^(guides|research)\/.+\.html$/.test(relative)&&!relative.endsWith('/index.html'))fs.writeFileSync(p.replace(/\.html$/,'.md'),markdown(enhanced,'https://agent-tune.com/'+relative.replace(/\.html$/,'')));if(next!==html){fs.writeFileSync(p,next);v++;}}}})(out);
  console.log(`Published asset bundle: ${n} files in dist/ (source, checks, docs and package metadata excluded); asset URLs versioned in ${v} pages.`);
}
module.exports={isPublic,build,versionAssets,ASSETS};
if(require.main===module)build();
