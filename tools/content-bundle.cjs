const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
module.exports=function(){
 const root=path.resolve(__dirname,'..'),dir=path.join(root,'vendor/agenttune-content');
 const lock=JSON.parse(fs.readFileSync(path.join(root,'agenttune-content.lock.json')));
 const read=p=>fs.readFileSync(path.join(dir,p),'utf8');
 const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
 if(!/^[a-f0-9]{40}$/.test(lock.commit)||lock.repository!=='https://github.com/bernardjhuang/agenttune')throw Error('Content must pin an exact upstream commit');
 const raw=read('manifest.json'),manifest=JSON.parse(raw);
 if(hash(raw)!==lock.manifestSha256||manifest.version!==lock.version||manifest.profile!=='core')throw Error('Invalid content lock');
 for(const [file,meta]of Object.entries(manifest.files)){
  if(file.includes('..')||path.isAbsolute(file))throw Error('Invalid artifact path');
  const bytes=fs.readFileSync(path.join(dir,file));if(hash(bytes)!==meta.sha256||bytes.length!==meta.bytes)throw Error('Content checksum mismatch: '+file);
 }
 const rights=JSON.parse(read('instrument-rights.json')),definitions=JSON.parse(read('instruments.json'));
 for(const d of definitions)if(!rights.instruments.some(p=>p.available&&p.instrumentId===d.id&&p.instrumentVersion===d.version))throw Error('Unapproved instrument');
 return {root,dir,read,lock,manifest,rights,definitions,profiles:JSON.parse(read('tunings.json'))};
};
