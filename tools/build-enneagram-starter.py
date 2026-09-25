#!/usr/bin/env python3
"""Package only explicit starter sources; never dependencies or build artifacts."""
from pathlib import Path
import zipfile, sys
ROOT=Path(__file__).resolve().parents[1]
source=ROOT/'examples/enneagram-react'
# The exact production scorer and frozen questionnaire are the single source of truth.
if '--check' not in sys.argv:
 (source/'public/score.js').write_bytes((ROOT/'resources/enneagram/score.js').read_bytes())
 (source/'src/questions.json').write_bytes((ROOT/'resources/enneagram/questions.json').read_bytes())
files=['package.json','package-lock.json','tsconfig.json','vite.config.ts','index.html','README.md','LICENSE-code.txt','.gitignore','public/score.js','src/main.tsx','src/App.tsx','src/scorer.ts','src/questions.json','src/styles.css','src/vite-env.d.ts']
out=ROOT/'resources/enneagram/enneagram-react-typescript.zip'
if '--check' in sys.argv:
 with zipfile.ZipFile(out) as archive:
  expected={'enneagram-react-typescript/'+name for name in files}
  assert len(archive.namelist())==len(expected) and set(archive.namelist())==expected, 'Unexpected archive entries'
  for name in files:
   assert archive.read('enneagram-react-typescript/'+name)==(source/name).read_bytes(), 'Stale archive: '+name
 print('Starter archive matches every source file.')
 sys.exit(0)
with zipfile.ZipFile(out,'w',compression=zipfile.ZIP_DEFLATED) as archive:
 for name in files:
  info=zipfile.ZipInfo('enneagram-react-typescript/'+name,date_time=(2026,9,25,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o100644<<16
  archive.writestr(info,(source/name).read_bytes())
print(f'{out.relative_to(ROOT)}: {len(files)} source files, {out.stat().st_size} bytes')
