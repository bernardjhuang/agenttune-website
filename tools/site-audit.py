#!/usr/bin/env python3
"""Site-wide technical + copy audit of the public bundle (dist/).

Usage:  npm run build && python3 tools/site-audit.py [--out DIR]

Walks every HTML page in dist/, checks the things a reviewer would check by hand
(meta tags, headings, links and anchors, JSON-LD, sitemap coverage, scripts,
accessibility basics, stale terms) and computes copy metrics per page (length,
sentence length, boilerplate share, caveat density, em dashes, reading grade).

Writes <out>/site-audit.json (everything), <out>/pages.tsv (one row per page)
and <out>/text/<page>.txt (the visible copy, for reading). Prints a summary.
Requires beautifulsoup4 + lxml (pip install beautifulsoup4 lxml).
"""
import argparse, json, os, re, sys, math
from collections import Counter, defaultdict
from urllib.parse import urlsplit, unquote

from bs4 import BeautifulSoup, NavigableString, Comment

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
SITE = "https://agent-tune.com"

STALE_TERMS = {
    "claude-styles": re.compile(r"\bClaude Styles?\b(?![^.]{0,60}(retired|being retired|replaced|migrat))", re.I),
    "paid-product": re.compile(r"\$9\b|\$19\b|Premium synthesis|Developer Pack|\bpro plan\b", re.I),
    "c-dominant-everyone": re.compile(r"every (model|AI|one)[^.]{0,40}C-dominant|C-dominant[^.]{0,40}every (model|AI)", re.I),
    "twenty-reverse": re.compile(r"\b20 (items|reverse)", re.I),
    "ten-minute-mbti": re.compile(r"MBTI[^.]{0,80}\bten minutes\b|\bten minutes\b[^.]{0,80}MBTI", re.I),
    "ocean-name": re.compile(r"\bOCEAN\b"),
    "grokbot-one-word": re.compile(r"\bGrokBot\b"),
    "tuning-length-old": re.compile(r"1,200 to 2,900"),
    "draft-placeholder": re.compile(r"Draft placeholder|TODO|lorem ipsum", re.I),
    "superpower": re.compile(r"\bsuperpower", re.I),
}
CAVEAT = re.compile(r"\b(not (validated|evidence|proof|a (measurement|ranking|performance)|established|measured (tuning )?benefit)|self-descriptions?|self-report|do(es)? not (show|establish|measure|demonstrate|prove)|no(t|thing) here (says|shows|measures)|has not been (tested|established|measured)|untested|these (figures|numbers|counts|results|data) (are|do|say|show)|treat (the|these|it) as)\b", re.I)
HEDGE = re.compile(r"\b(may|might|could|arguably|perhaps|somewhat|fairly|rather|quite|probably|likely|in our (view|opinion))\b", re.I)
NOT_X_ITS_Y = re.compile(r"\b(not|isn't|aren't|wasn't) [^.,;:]{2,40}[,;:]? (it's|it is|they're|they are|that's|that is) ", re.I)
GENERIC_LINK = {"here", "read", "read →", "→", "link", "this", "click here", "more", "learn more", "open →", "open"}
PASSIVE = re.compile(r"\b(is|are|was|were|be|been|being)\s+(\w+ed|\w+en)\b", re.I)

def classify(rel):
    if rel == "index.html": return "home"
    if rel == "404.html": return "404"
    if rel in ("privacy.html", "terms.html"): return "legal"
    if rel.startswith("library/"):
        return "library-hub" if rel == "library/index.html" else "library"
    if rel.startswith("tests/"):
        return "tests-hub" if rel == "tests/index.html" else "test"
    if rel.startswith("guides/"):
        return "guides-hub" if rel == "guides/index.html" else "guide"
    if rel == "research.html": return "research-hub"
    if rel.startswith("research/"): return "research"
    if rel.startswith("tools/"): return "tool"
    return "other"

def route_for(rel):
    if rel.endswith("/index.html"): return "/" + rel[:-len("index.html")]
    if rel == "index.html": return "/"
    return "/" + rel[:-5]

def syllables(word):
    w = re.sub(r"[^a-z]", "", word.lower())
    if not w: return 0
    if len(w) <= 3: return 1
    w = re.sub(r"(?:[^laeiouy]es|ed|[^laeiouy]e)$", "", w)
    w = re.sub(r"^y", "", w)
    return max(1, len(re.findall(r"[aeiouy]{1,2}", w)))

def sentences_of(text):
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z0-9\"'(])", text)
    return [p.strip() for p in parts if len(p.strip()) > 1]

SKIP_TAGS = {"script", "style", "noscript", "template", "svg", "nav", "footer"}

def visible_text_blocks(soup):
    """Return [(kind, text)] for headings/paragraphs/list items/table cells in reading order.
    Skips nav, footer, scripts, hidden quiz DOM (aria-hidden / hidden / display:none)."""
    blocks = []
    body = soup.body or soup
    def hidden(el):
        if el.name in SKIP_TAGS: return True
        if el.has_attr("hidden") or el.get("aria-hidden") == "true": return True
        st = (el.get("style") or "").replace(" ", "")
        return "display:none" in st
    def walk(el):
        for child in el.children:
            if isinstance(child, Comment): continue
            if isinstance(child, NavigableString): continue
            if hidden(child): continue
            name = child.name
            if name in ("h1", "h2", "h3", "h4", "p", "li", "td", "th", "summary", "figcaption", "blockquote", "pre", "dt", "dd", "label"):
                t = child.get_text(" ", strip=True)
                t = re.sub(r"\s+", " ", t)
                if t: blocks.append((name, t))
                if name in ("li", "td", "blockquote", "dd"):
                    # nested paragraphs inside list items are part of the item
                    continue
                continue
            walk(child)
    walk(body)
    return blocks

def analyse(rel, html, all_ids_cache):
    soup = BeautifulSoup(html, "lxml")
    p = {"rel": rel, "route": route_for(rel), "template": classify(rel), "bytes": len(html.encode("utf-8"))}
    head = soup.head or soup
    t = soup.title.get_text(strip=True) if soup.title else ""
    p["title"] = t; p["title_len"] = len(t)
    md = head.find("meta", attrs={"name": "description"})
    p["description"] = (md.get("content") or "").strip() if md else ""
    p["description_len"] = len(p["description"])
    can = head.find("link", rel=lambda v: v and "canonical" in v)
    p["canonical"] = can.get("href") if can else None
    p["canonical_ok"] = p["canonical"] == SITE + p["route"] or (p["route"] == "/" and p["canonical"] in (SITE + "/", SITE))
    rb = head.find("meta", attrs={"name": "robots"})
    p["robots"] = rb.get("content") if rb else None
    p["lang"] = (soup.html.get("lang") if soup.html else None)
    p["viewport"] = bool(head.find("meta", attrs={"name": "viewport"}))
    og = {m.get("property"): m.get("content") for m in head.find_all("meta") if m.get("property", "").startswith("og:")}
    tw = {m.get("name"): m.get("content") for m in head.find_all("meta") if (m.get("name") or "").startswith("twitter:")}
    p["og"] = {k: bool(og.get(k)) for k in ("og:title", "og:description", "og:url", "og:image", "og:type")}
    p["og_url_ok"] = og.get("og:url") in (SITE + p["route"], (SITE + p["route"]).rstrip("/")) if og.get("og:url") else None
    p["twitter_card"] = tw.get("twitter:card")
    p["favicon"] = bool(head.find("link", rel=lambda v: v and "icon" in v))
    # headings
    hs = [(h.name, re.sub(r"\s+", " ", h.get_text(" ", strip=True))) for h in soup.find_all(re.compile(r"^h[1-6]$")) if not any(par.name in SKIP_TAGS for par in h.parents)]
    p["h1"] = [x[1] for x in hs if x[0] == "h1"]
    p["h_counts"] = dict(Counter(x[0] for x in hs))
    order_issues = 0; last = 0
    for name, _ in hs:
        lvl = int(name[1])
        if last and lvl > last + 1: order_issues += 1
        last = lvl
    p["heading_skips"] = order_issues
    p["empty_headings"] = sum(1 for _, txt in hs if not txt)
    # ids / anchors
    ids = [el.get("id") for el in soup.find_all(id=True)]
    p["duplicate_ids"] = sorted(k for k, v in Counter(ids).items() if v > 1)
    all_ids_cache[rel] = set(ids) | {el.get("name") for el in soup.find_all("a", attrs={"name": True})}
    # links
    links = []
    for a in soup.find_all("a"):
        href = a.get("href")
        if href is None: continue
        text = re.sub(r"\s+", " ", a.get_text(" ", strip=True))
        aria = a.get("aria-label")
        links.append({"href": href, "text": text, "aria": aria, "rel": a.get("rel"), "target": a.get("target"),
                      "nested": bool(a.find("a")), "in_nav": any(par.name in ("nav", "footer") for par in a.parents)})
    p["links"] = links
    p["nested_anchors"] = sum(1 for l in links if l["nested"])
    p["empty_links"] = sum(1 for l in links if not l["text"] and not l["aria"] and not links and True) if False else sum(1 for l in links if not l["text"] and not l["aria"])
    p["generic_link_text"] = sum(1 for l in links if l["text"].strip().lower().rstrip(" →") in GENERIC_LINK and not l["aria"])
    p["blank_without_noopener"] = sum(1 for l in links if l["target"] == "_blank" and not (l["rel"] and any(r in ("noopener", "noreferrer") for r in l["rel"])))
    # scripts / styles
    p["scripts"] = [s.get("src") for s in soup.find_all("script", src=True)]
    p["inline_script_bytes"] = sum(len(s.get_text()) for s in soup.find_all("script") if not s.get("src") and s.get("type") not in ("application/ld+json",))
    p["inline_style_bytes"] = sum(len(s.get_text()) for s in soup.find_all("style"))
    p["stylesheets"] = [l.get("href") for l in soup.find_all("link", rel=lambda v: v and "stylesheet" in v)]
    p["inline_style_attrs"] = len(soup.find_all(style=True))
    # json-ld
    jl = []
    for s in soup.find_all("script", type="application/ld+json"):
        try:
            data = json.loads(s.get_text())
            jl.append({"type": data.get("@type") if isinstance(data, dict) else "list", "ok": True})
        except Exception as e:
            jl.append({"type": None, "ok": False, "error": str(e)[:80]})
    p["jsonld"] = jl
    # images / forms / a11y
    imgs = soup.find_all("img")
    p["images"] = len(imgs); p["images_no_alt"] = sum(1 for i in imgs if not (i.get("alt") or "").strip() and i.get("role") != "presentation")
    svgs = [s for s in soup.find_all("svg") if not any(par.name in SKIP_TAGS for par in s.parents)]
    p["svgs"] = len(svgs)
    p["svgs_unlabelled"] = sum(1 for s in svgs if s.get("aria-hidden") != "true" and not s.get("aria-label") and not s.find("title") and s.get("role") != "presentation")
    p["buttons_no_type"] = sum(1 for b in soup.find_all("button") if not b.get("type"))
    labels_for = {l.get("for") for l in soup.find_all("label", attrs={"for": True})}
    inputs = [i for i in soup.find_all(["input", "select", "textarea"]) if i.get("type") not in ("hidden", "submit", "button")]
    p["inputs"] = len(inputs)
    p["inputs_unlabelled"] = sum(1 for i in inputs if not (i.get("id") in labels_for or i.get("aria-label") or i.get("aria-labelledby") or (i.parent and i.parent.name == "label")))
    p["tables"] = len(soup.find_all("table")); p["tables_no_th"] = sum(1 for tb in soup.find_all("table") if not tb.find("th"))
    p["time_no_datetime"] = sum(1 for tm in soup.find_all("time") if not tm.get("datetime"))
    p["skip_link"] = bool(soup.find("a", class_="skip-link")) and bool(soup.find(id="main"))
    p["main_landmark"] = bool(soup.find("main") or soup.find(id="main"))
    p["details"] = len(soup.find_all("details"))
    # copy
    blocks = visible_text_blocks(soup)
    p["blocks"] = blocks
    text = "\n".join(t for _, t in blocks)
    words = re.findall(r"[A-Za-z0-9'’]+", text)
    sents = [s for _, t in blocks for s in sentences_of(t)] if blocks else []
    p["words"] = len(words)
    p["sentences"] = len(sents)
    p["avg_sentence_words"] = round(len(words) / len(sents), 1) if sents else 0
    p["long_sentences"] = sum(1 for s in sents if len(s.split()) > 35)
    paras = [t for k, t in blocks if k == "p"]
    p["paragraphs"] = len(paras)
    p["long_paragraphs"] = sum(1 for t in paras if len(t.split()) > 90)
    p["em_dashes"] = text.count("—")
    p["not_x_its_y"] = len(NOT_X_ITS_Y.findall(text))
    p["caveat_sentences"] = sum(1 for s in sents if CAVEAT.search(s))
    p["hedges"] = len(HEDGE.findall(text))
    p["passive_approx"] = len(PASSIVE.findall(text))
    p["exclamations"] = text.count("!")
    p["questions_in_copy"] = sum(1 for s in sents if s.endswith("?"))
    syl = sum(syllables(w) for w in words) if words else 0
    if sents and words:
        p["fk_grade"] = round(0.39 * len(words) / len(sents) + 11.8 * syl / len(words) - 15.59, 1)
    else:
        p["fk_grade"] = None
    p["stale"] = {k: len(rx.findall(text)) for k, rx in STALE_TERMS.items() if rx.search(text)}
    p["faq_items"] = len(soup.select(".guide-faq details, .faq details, details.faq-item")) or sum(1 for d in soup.find_all("details") if d.find("summary") and d.find("summary").get_text(strip=True).endswith("?"))
    p["_sents"] = sents
    return p

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=os.path.join(ROOT, "docs", "site-audit-out"))
    ap.add_argument("--dist", default=DIST)
    args = ap.parse_args()
    os.makedirs(os.path.join(args.out, "text"), exist_ok=True)
    pages = []
    ids_cache = {}
    for dp, dn, fn in os.walk(args.dist):
        for f in fn:
            if f.endswith(".html"):
                rel = os.path.relpath(os.path.join(dp, f), args.dist)
                html = open(os.path.join(dp, f), encoding="utf-8").read()
                pages.append(analyse(rel, html, ids_cache))
    pages.sort(key=lambda p: p["rel"])
    by_route = {p["route"]: p for p in pages}
    by_rel = {p["rel"]: p for p in pages}
    # ---- cross-page: boilerplate sentences
    sent_pages = defaultdict(set)
    for p in pages:
        for s in set(p["_sents"]):
            if len(s.split()) >= 6: sent_pages[s].add(p["rel"])
    for p in pages:
        shared = [s for s in p["_sents"] if len(sent_pages[s]) >= 3 and len(s.split()) >= 6]
        sw = sum(len(s.split()) for s in shared)
        p["boilerplate_words"] = sw
        p["boilerplate_share"] = round(sw / p["words"], 3) if p["words"] else 0
        # within-template share (sentences shared with >=3 pages of the same template)
    boiler = sorted(((len(v), s) for s, v in sent_pages.items() if len(v) >= 3), reverse=True)
    # ---- links
    def resolve(href, from_rel):
        u = urlsplit(href)
        if u.scheme in ("http", "https"):
            if u.netloc not in ("agent-tune.com", "www.agent-tune.com"): return ("external", href, None)
            path = u.path or "/"
        elif u.scheme in ("mailto", "tel", "javascript", "data"):
            return ("other", href, None)
        else:
            path = u.path
            if not path: return ("self-anchor", from_rel, u.fragment)
            if not path.startswith("/"):
                base = os.path.dirname(from_rel)
                path = os.path.normpath(os.path.join("/" + base, path))
        path = unquote(path)
        # map path to a file in dist
        cands = []
        if path.endswith("/"): cands = [path.lstrip("/") + "index.html"]
        elif path.endswith(".html") or "." in os.path.basename(path): cands = [path.lstrip("/")]
        else: cands = [path.lstrip("/") + ".html", path.lstrip("/") + "/index.html"]
        for c in cands:
            if os.path.exists(os.path.join(args.dist, c)): return ("internal", c, u.fragment)
        return ("missing", path, u.fragment)
    # Cloudflare _redirects: "/from  /to  200|301" — a link to a rewritten path is fine if the target exists
    redirects = {}
    rp = os.path.join(args.dist, "_redirects")
    if os.path.exists(rp):
        for line in open(rp, encoding="utf-8"):
            parts = line.split()
            if len(parts) >= 2 and parts[0].startswith("/") and not parts[0].startswith("#"):
                redirects[parts[0]] = parts[1]
    def resolve_with_redirects(href, from_rel):
        kind, target, frag = resolve(href, from_rel)
        if kind == "missing":
            u = urlsplit(href); path = u.path if u.path.startswith("/") else target
            if path in redirects:
                dest = redirects[path]
                if dest.startswith("/") and os.path.exists(os.path.join(args.dist, dest.lstrip("/"))):
                    return ("internal", dest.lstrip("/"), frag)
                return ("missing", path + " → " + dest, frag)
        return kind, target, frag
    inbound = Counter(); inbound_nav = Counter(); broken = []; broken_anchor = []; external = defaultdict(set)
    for p in pages:
        for l in p["links"]:
            kind, target, frag = resolve_with_redirects(l["href"], p["rel"])
            if kind == "internal" and l["in_nav"]: inbound_nav[target] += 1
            if kind == "internal":
                if not l["in_nav"]: inbound[target] += 1
                if frag and target.endswith(".html") and target in ids_cache and frag not in ids_cache[target] and frag != "main":
                    broken_anchor.append((p["rel"], l["href"]))
            elif kind == "self-anchor":
                if frag and frag not in ids_cache.get(p["rel"], set()): broken_anchor.append((p["rel"], l["href"]))
            elif kind == "missing":
                broken.append((p["rel"], l["href"]))
            elif kind == "external":
                external[target].add(p["rel"])
    # ---- sitemap
    sm = open(os.path.join(args.dist, "sitemap.xml"), encoding="utf-8").read() if os.path.exists(os.path.join(args.dist, "sitemap.xml")) else ""
    sm_routes = [re.sub(r"^https://agent-tune\.com", "", u) for u in re.findall(r"<loc>(.*?)</loc>", sm)]
    sm_set = set(sm_routes)
    not_in_sitemap = [p["route"] for p in pages if p["route"] not in sm_set and p["template"] not in ("404",)]
    sitemap_missing_file = [r for r in sm_routes if r not in by_route]
    orphans = [p["rel"] for p in pages if inbound[p["rel"]] == 0 and inbound_nav[p["rel"]] == 0 and p["template"] not in ("404",)]
    nav_only = [p["rel"] for p in pages if inbound[p["rel"]] == 0 and inbound_nav[p["rel"]] > 0 and p["template"] not in ("404",)]
    # ---- summary
    dup_titles = [t for t, c in Counter(p["title"] for p in pages).items() if c > 1]
    dup_desc = [d for d, c in Counter(p["description"] for p in pages).items() if c > 1 and d]
    summary = {
        "pages": len(pages),
        "by_template": dict(Counter(p["template"] for p in pages)),
        "total_words": sum(p["words"] for p in pages),
        "title_over_60": [(p["rel"], p["title_len"]) for p in pages if p["title_len"] > 60],
        "title_under_30": [(p["rel"], p["title_len"]) for p in pages if p["title_len"] < 30],
        "desc_missing": [p["rel"] for p in pages if not p["description"]],
        "desc_over_160": [(p["rel"], p["description_len"]) for p in pages if p["description_len"] > 160],
        "desc_under_70": [(p["rel"], p["description_len"]) for p in pages if 0 < p["description_len"] < 70],
        "dup_titles": dup_titles, "dup_descriptions": dup_desc,
        "canonical_bad": [(p["rel"], p["canonical"]) for p in pages if not p["canonical_ok"]],
        "og_url_bad": [(p["rel"]) for p in pages if p["og_url_ok"] is False],
        "og_missing": [(p["rel"], [k for k, v in p["og"].items() if not v]) for p in pages if not all(p["og"].values())],
        "no_twitter_card": [p["rel"] for p in pages if not p["twitter_card"]],
        "h1_not_one": [(p["rel"], len(p["h1"])) for p in pages if len(p["h1"]) != 1],
        "heading_skips": [(p["rel"], p["heading_skips"]) for p in pages if p["heading_skips"]],
        "duplicate_ids": [(p["rel"], p["duplicate_ids"]) for p in pages if p["duplicate_ids"]],
        "nested_anchors": [(p["rel"], p["nested_anchors"]) for p in pages if p["nested_anchors"]],
        "empty_links": [(p["rel"], p["empty_links"]) for p in pages if p["empty_links"]],
        "generic_link_text": [(p["rel"], p["generic_link_text"]) for p in pages if p["generic_link_text"]],
        "blank_without_noopener": [(p["rel"], p["blank_without_noopener"]) for p in pages if p["blank_without_noopener"]],
        "jsonld_errors": [(p["rel"], j["error"]) for p in pages for j in p["jsonld"] if not j["ok"]],
        "no_jsonld": [p["rel"] for p in pages if not p["jsonld"]],
        "images_no_alt": [(p["rel"], p["images_no_alt"]) for p in pages if p["images_no_alt"]],
        "svgs_unlabelled": [(p["rel"], p["svgs_unlabelled"]) for p in pages if p["svgs_unlabelled"]],
        "buttons_no_type": [(p["rel"], p["buttons_no_type"]) for p in pages if p["buttons_no_type"]],
        "inputs_unlabelled": [(p["rel"], p["inputs_unlabelled"]) for p in pages if p["inputs_unlabelled"]],
        "tables_no_th": [(p["rel"], p["tables_no_th"]) for p in pages if p["tables_no_th"]],
        "time_no_datetime": [(p["rel"], p["time_no_datetime"]) for p in pages if p["time_no_datetime"]],
        "no_skip_link": [p["rel"] for p in pages if not p["skip_link"]],
        "no_main": [p["rel"] for p in pages if not p["main_landmark"]],
        "no_lang": [p["rel"] for p in pages if not p["lang"]],
        "no_viewport": [p["rel"] for p in pages if not p["viewport"]],
        "no_favicon": [p["rel"] for p in pages if not p["favicon"]],
        "broken_internal_links": broken,
        "broken_anchors": broken_anchor,
        "not_in_sitemap": not_in_sitemap, "sitemap_missing_file": sitemap_missing_file,
        "orphans": orphans, "nav_only_inbound": nav_only,
        "external_links": {u: sorted(v) for u, v in external.items()},
        "script_sets": {k: v for k, v in Counter(tuple(p["scripts"]) for p in pages).items()} if False else [(list(k), v) for k, v in Counter(tuple(p["scripts"]) for p in pages).items()],
        "stale_terms": {k: [(p["rel"], p["stale"][k]) for p in pages if k in p["stale"]] for k in STALE_TERMS},
        "boilerplate_top": [(n, s) for n, s in boiler[:60]],
        "biggest_pages_bytes": sorted(((p["bytes"], p["rel"]) for p in pages), reverse=True)[:12],
        "longest_pages_words": sorted(((p["words"], p["rel"]) for p in pages), reverse=True)[:15],
        "caveat_heavy": sorted(((p["caveat_sentences"], p["sentences"], p["rel"]) for p in pages), reverse=True)[:15],
        "em_dash_pages": sorted(((p["em_dashes"], p["rel"]) for p in pages if p["em_dashes"]), reverse=True)[:20],
        "em_dash_total": sum(p["em_dashes"] for p in pages),
        "long_sentence_pages": sorted(((p["long_sentences"], p["rel"]) for p in pages if p["long_sentences"]), reverse=True)[:15],
        "long_paragraph_pages": sorted(((p["long_paragraphs"], p["rel"]) for p in pages if p["long_paragraphs"]), reverse=True)[:15],
        "inline_style_attrs_total": sum(p["inline_style_attrs"] for p in pages),
        "inline_script_bytes_total": sum(p["inline_script_bytes"] for p in pages),
    }
    # ---- write
    for p in pages:
        with open(os.path.join(args.out, "text", p["rel"].replace("/", "__").replace(".html", ".txt")), "w", encoding="utf-8") as fh:
            for k, t in p["blocks"]:
                fh.write(("# " if k == "h1" else "## " if k == "h2" else "### " if k == "h3" else "- " if k == "li" else "") + t + "\n\n")
    slim = []
    for p in pages:
        q = {k: v for k, v in p.items() if k not in ("blocks", "_sents", "links")}
        q["link_count"] = len(p["links"]); q["inbound"] = inbound[p["rel"]]
        slim.append(q)
    json.dump({"summary": summary, "pages": slim}, open(os.path.join(args.out, "site-audit.json"), "w"), indent=1, ensure_ascii=False)
    cols = ["rel", "template", "words", "sentences", "avg_sentence_words", "long_sentences", "long_paragraphs", "boilerplate_share", "caveat_sentences", "em_dashes", "fk_grade", "title_len", "description_len", "h1", "inbound", "bytes", "inline_style_attrs"]
    with open(os.path.join(args.out, "pages.tsv"), "w", encoding="utf-8") as fh:
        fh.write("\t".join(cols) + "\n")
        for q in slim:
            fh.write("\t".join(str(q.get(c, "")) if c != "h1" else " | ".join(q["h1"]) for c in cols) + "\n")
    # ---- print
    print(f"{len(pages)} pages, {summary['total_words']:,} words. Templates: {summary['by_template']}")
    for k in ("title_over_60", "title_under_30", "desc_missing", "desc_over_160", "desc_under_70", "dup_titles", "dup_descriptions", "canonical_bad", "og_url_bad", "og_missing", "no_twitter_card", "h1_not_one", "heading_skips", "duplicate_ids", "nested_anchors", "empty_links", "generic_link_text", "blank_without_noopener", "jsonld_errors", "no_jsonld", "images_no_alt", "svgs_unlabelled", "buttons_no_type", "inputs_unlabelled", "tables_no_th", "time_no_datetime", "no_skip_link", "no_main", "no_lang", "no_viewport", "no_favicon", "broken_internal_links", "broken_anchors", "not_in_sitemap", "sitemap_missing_file", "orphans"):
        v = summary[k]
        print(f"{k}: {len(v)}" + (f"  e.g. {v[:4]}" if v else ""))
    print("external link targets:", len(summary["external_links"]))
    print("em dashes total:", summary["em_dash_total"], "| inline style attrs:", summary["inline_style_attrs_total"], "| inline script bytes:", summary["inline_script_bytes_total"])
    print("script sets:"); [print("  ", v, s) for s, v in summary["script_sets"]]
    print("stale terms:"); [print("  ", k, len(v), v[:3]) for k, v in summary["stale_terms"].items() if v]
    print("longest pages:", summary["longest_pages_words"][:8])
    print("caveat-heavy:", summary["caveat_heavy"][:8])
    print("boilerplate top:"); [print("  ", n, s[:110]) for n, s in summary["boilerplate_top"][:25]]

if __name__ == "__main__":
    main()
