// Keep the standalone (dependency-free) tool library's registry snapshot in sync.
const fs=require('node:fs'),path=require('node:path'),registry=require('../platforms');
const target=path.resolve(__dirname,'../resources/tools/core.js');
const source=fs.readFileSync(target,'utf8');
fs.writeFileSync(target,source.replace(/const destinations=\[[\s\S]*?\n\];/,'const destinations='+JSON.stringify(registry.fileDestinations,null,2)+';'));
