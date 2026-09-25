#!/usr/bin/env python3
"""Check every external link the site-audit found. Stdlib only.

Usage: python3 tools/check-external-links.py docs/site-audit-out/site-audit.json [--out FILE]
Writes a JSON map url -> {status, final_url, error, pages}. HEAD first, GET on 405/403/error.
"""
import json, sys, ssl, time, argparse
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36 agent-tune.com link check"
CTX = ssl.create_default_context()

def fetch(url):
    for method in ("HEAD", "GET"):
        try:
            req = Request(url, method=method, headers={"User-Agent": UA, "Accept": "text/html,*/*"})
            with urlopen(req, timeout=15, context=CTX) as r:
                return {"status": r.status, "final_url": r.geturl()}
        except HTTPError as e:
            if method == "HEAD" and e.code in (403, 405, 400, 500, 501):
                continue
            return {"status": e.code, "final_url": e.geturl() if hasattr(e, "geturl") else None}
        except URLError as e:
            if method == "HEAD": continue
            return {"status": None, "error": str(e.reason)[:120]}
        except Exception as e:
            if method == "HEAD": continue
            return {"status": None, "error": str(e)[:120]}
    return {"status": None, "error": "unreachable"}

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("audit"); ap.add_argument("--out", default=None)
    a = ap.parse_args()
    ext = json.load(open(a.audit))["summary"]["external_links"]
    urls = sorted(ext)
    t0 = time.time(); out = {}
    with ThreadPoolExecutor(max_workers=12) as ex:
        for url, res in zip(urls, ex.map(fetch, urls)):
            res["pages"] = ext[url]; out[url] = res
    bad = {u: r for u, r in out.items() if not (r.get("status") and 200 <= r["status"] < 400)}
    path = Path(a.out) if a.out else Path(a.audit).with_name("external-links.json")
    if path.resolve() == Path(a.audit).resolve():
        ap.error("Output must differ from the input audit file")
    json.dump(out, open(path, "w"), indent=1)
    print(f"{len(urls)} external URLs checked in {time.time()-t0:.0f}s; {len(bad)} not 2xx/3xx:")
    for u, r in sorted(bad.items()):
        print(f"  {r.get('status')} {r.get('error','')} {u}  <- {', '.join(r['pages'][:3])}")

if __name__ == "__main__":
    main()
