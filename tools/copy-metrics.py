"""Extract visible copy from agent-tune.com pages and compute readability metrics.

Usage: python3 tools/copy-metrics.py   (from the repo root or anywhere)
See docs/copy-audit-2026-09-24.md for what the numbers meant on the night of the audit.

Writes one .txt per page (headings kept as markdown-ish markers, blocks separated) plus
metrics.json / metrics.tsv. Skips nav, footer, scripts, styles, JSON-LD, hidden quiz DOM.
"""
import json, os, re, sys, tempfile
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root
OUT = os.environ.get("COPY_METRICS_OUT") or os.path.join(tempfile.gettempdir(), "agenttune-copy-metrics", "pages")
os.makedirs(OUT, exist_ok=True)

PAGES = {
    "home": "index.html",
    "library-hub": "library/index.html",
    "tests-hub": "tests/index.html",
    "test-mbti": "tests/mbti.html",
    "test-big-five": "tests/big-five.html",
    "test-disc": "tests/disc.html",
    "test-enneagram": "tests/enneagram.html",
    "test-attachment": "tests/attachment.html",
    "research": "research.html",
    "research-mbti-100": "research/i-took-the-mbti-100-times.html",
    "research-chatgpt-type": "research/what-personality-type-is-chatgpt.html",
    "guides-hub": "guides/index.html",
    "tool-claude-md": "tools/claude-md-generator.html",
    "tool-custom-instructions": "tools/custom-instructions-generator.html",
    "privacy": "privacy.html",
    "terms": "terms.html",
    "404": "404.html",
    "lib-intj": "library/mbti/intj.html",
    "lib-enfp": "library/mbti/enfp.html",
    "lib-estp": "library/mbti/estp.html",
    "lib-5-investigator": "library/enneagram/5-investigator.html",
    "lib-s-steadiness": "library/disc/s-steadiness.html",
    "lib-secure": "library/attachment/secure.html",
    "lib-openness-high": "library/ocean/openness-high.html",
}
for f in sorted(os.listdir(f"{ROOT}/guides")):
    if f.endswith(".html") and f != "index.html":
        PAGES["guide-" + f[:-5]] = "guides/" + f

BLOCK = {"p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "tr", "div", "section", "article", "blockquote", "pre", "dt", "dd", "summary", "details", "figcaption", "label", "button", "option"}
SKIP = {"script", "style", "noscript", "svg", "template", "nav", "footer", "head", "title"}


class Ex(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts, self.skip, self.stack = [], 0, []
        self.hidden = 0  # depth counter for hidden="" / aria-hidden quiz DOM

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in SKIP or a.get("hidden") is not None or a.get("aria-hidden") == "true" or "sr-only" in (a.get("class") or ""):
            self.skip += 1
            self.stack.append((tag, True))
            return
        self.stack.append((tag, False))
        if self.skip:
            return
        if tag in ("h1", "h2", "h3", "h4"):
            self.parts.append("\n\n" + "#" * int(tag[1]) + " ")
        elif tag == "li":
            self.parts.append("\n- ")
        elif tag == "td" or tag == "th":
            self.parts.append(" | ")
        elif tag == "br":
            self.parts.append("\n")
        elif tag in BLOCK:
            self.parts.append("\n\n")

    def handle_endtag(self, tag):
        # pop to matching tag (tolerant of malformed nesting)
        while self.stack:
            t, skipped = self.stack.pop()
            if skipped:
                self.skip -= 1
            if t == tag:
                break
        if not self.skip and tag in BLOCK:
            self.parts.append("\n")

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def extract(path):
    html = open(path, encoding="utf-8").read()
    # remove <main>-external chrome by stripping nav/footer via parser; also strip JSON-LD by script skip
    ex = Ex()
    ex.feed(html)
    text = "".join(ex.parts)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r" *\n *", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


# ---- metrics
VOWELS = "aeiouy"


def syllables(w):
    w = w.lower().strip("'")
    w = re.sub(r"[^a-z]", "", w)
    if not w:
        return 0
    if len(w) <= 3:
        return 1
    w = re.sub(r"(?:[^laeiouy]es|ed|[^laeiouy]e)$", "", w)
    w = re.sub(r"^y", "", w)
    return max(1, len(re.findall(r"[aeiouy]{1,2}", w)))


JARGON = ["OEJTS", "IPIP-50", "IPIP", "ODAT", "OEPS", "ECR-R", "z-score", "z >", "Likert", "reverse-scored", "front-matter", "frontmatter", "YAML", "MCP", "system prompt", "tuning", "tunings", "instrument", "instruments", "cardinality", "administer", "administration", "administrations", "psychometric", "canonical", "sub-agent", "subagent", "harness", "schema", "JSON", "Markdown", "CORS", "endpoint", "hedge", "hedges", "hedging", "persona", "archetype", "calibration", "convergence", "converge", "n =", "n=", "SD", "variance"]
AI_TELLS = [r"—", r"\bnot just\b", r"\bit's not (?:about|a|the)\b", r"\bisn't (?:just|about)\b", r"\bnot (?:a|the) [\w-]+[,;.] (?:it's|but) (?:a|the)\b", r"\bhere's the thing\b", r"\bin other words\b", r"\bthat said\b", r"\bat the end of the day\b", r"\bseamless", r"\bleverage", r"\bunlock", r"\bsupercharge", r"\bgame-?changer", r"\bempower", r"\bdelve", r"\btapestry", r"\bnavigate the\b", r"\bin today's\b", r"\brobust\b", r"\belevate\b", r"\bcrucial\b", r"\bvibrant\b", r"!\s"]
PASSIVE = re.compile(r"\b(?:is|are|was|were|be|been|being)\s+(?:\w+ly\s+)?\w+(?:ed|en)\b")


def sentences(text):
    t = re.sub(r"\n#+ [^\n]*", " ", text)  # drop headings from sentence stats
    t = re.sub(r"\s+", " ", t)
    t = re.sub(r"\b(?:e\.g|i\.e|vs|etc|Dr|Mr|Ms|St|No)\.", lambda m: m.group(0).replace(".", "§"), t)
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z\"“(])", t)
    return [p.replace("§", ".").strip() for p in parts if len(p.split()) >= 3]


def metrics(name, text):
    words = re.findall(r"[A-Za-z][A-Za-z'’-]*", text)
    sents = sentences(text)
    wc = len(words)
    sl = [len(s.split()) for s in sents]
    syl = sum(syllables(w) for w in words)
    asl = wc / max(1, len(sents))
    aspw = syl / max(1, wc)
    fre = 206.835 - 1.015 * asl - 84.6 * aspw
    fk = 0.39 * asl + 11.8 * aspw - 15.59
    long_s = [s for s in sents if len(s.split()) > 30]
    tells = {}
    for pat in AI_TELLS:
        n = len(re.findall(pat, text, flags=re.I))
        if n:
            tells[pat] = n
    jar = {}
    for j in JARGON:
        n = len(re.findall(r"(?<![\w-])" + re.escape(j) + r"(?![\w-])", text, flags=re.I if j.islower() else 0))
        if n:
            jar[j] = n
    you = len(re.findall(r"\byou\b|\byour\b", text, re.I))
    we = len(re.findall(r"\bwe\b|\bour\b|\bus\b", text, re.I))
    i_ = len(re.findall(r"\bI\b|\bmy\b", text))
    return {
        "page": name, "words": wc, "sentences": len(sents), "avg_sentence_len": round(asl, 1),
        "median_sentence_len": sorted(sl)[len(sl) // 2] if sl else 0, "pct_sentences_over_25": round(100 * sum(1 for x in sl if x > 25) / max(1, len(sl))),
        "flesch_ease": round(fre), "fk_grade": round(fk, 1), "em_dashes": text.count("—"), "exclamations": text.count("!"),
        "passive_hits": len(PASSIVE.findall(text)), "you": you, "we": we, "I": i_,
        "headings": len(re.findall(r"\n#+ ", text)), "long_sentences": long_s[:6], "ai_tells": tells, "jargon": jar,
    }


if __name__ == "__main__":
    rows = []
    for name, rel in PAGES.items():
        p = f"{ROOT}/{rel}"
        if not os.path.exists(p):
            print("missing", rel)
            continue
        text = extract(p)
        open(f"{OUT}/{name}.txt", "w", encoding="utf-8").write(text)
        rows.append(metrics(name, text))
    json.dump(rows, open(f"{OUT}/../metrics.json", "w"), indent=1)
    cols = ["page", "words", "sentences", "avg_sentence_len", "median_sentence_len", "pct_sentences_over_25", "flesch_ease", "fk_grade", "em_dashes", "exclamations", "passive_hits", "you", "we", "I", "headings"]
    with open(f"{OUT}/../metrics.tsv", "w") as fh:
        fh.write("\t".join(cols) + "\n")
        for r in rows:
            fh.write("\t".join(str(r[c]) for c in cols) + "\n")
    print(open(f"{OUT}/../metrics.tsv").read())
    print(f"{len(rows)} pages extracted → {OUT}")
