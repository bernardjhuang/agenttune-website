Source: https://agent-tune.com/guides/perplexity-spaces-custom-instructions
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Perplexity Spaces

# Perplexity Spaces custom instructions: profile settings, citation rules, and 5 templates.

By Bernard Huang · Updated November 17, 2026 · [Markdown (.md)](https://agent-tune.com/guides/perplexity-spaces-custom-instructions.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Set your everyday tone and formatting rules in Perplexity Settings → AI Profile, and set source-quality rules (primary docs first, publication dates, conflict reporting, and table schemas) inside each Space's Custom Instructions box.

## Global AI Profile vs. Perplexity Spaces instructions.

| Setting location | Where to find it | Scope | What works best here |
| --- | --- | --- | --- |
| Global AI Profile | Settings → AI Profile | Account-wide across general searches | Role context, plain prose preference, citation density, and no filler intros |
| Space Custom Instructions | Spaces → [Your Space] → Instructions | Threads &amp; files inside that Space | Source authority rules, date filters, and comparison table schemas |
| Space Knowledge Files + Web toggle | Space sidebar (Files &amp; Web Search toggles) | Retrieval mix inside that Space | Restricting answers to uploaded PDFs/notes or combining them with live web search |

Because Perplexity synthesizes live search snippets, rules that tell it how to handle conflicting or missing sources improve answers far more than vague tone adjectives.

## 5 copy-paste Perplexity Space Custom Instructions templates.

### 1. Verified Evidence & Citation-First Baseline (Great for General Profile too)

```markdown
## Search & Synthesis Rules

- Prioritize primary documentation, peer-reviewed papers, standards bodies, and official changelogs over blog rewrites or SEO listicles.
- Always include publication or last-updated dates next to time-sensitive claims.
- Lead with a 2-sentence direct verdict, then show key evidence with inline citations.
- When sources disagree or evidence is missing, summarize the conflict explicitly instead of forcing consensus.
```

### 2. Technical Documentation & API Verifier

```markdown
## Scope: Software & APIs

- Restrict syntax, CLI flags, and SDK recommendations to current official docs; ignore deprecated snippets.
- Cite the exact doc page and version number for every command or configuration key.
- Highlight breaking changes or platform-specific caveats (macOS vs Linux, client vs server) upfront.
```

### 3. Competitive Market & Pricing Matrix Builder

```markdown
## Output Schema: Product Comparison

- Summarize differences in a comparison table first (Vendor, Model/Tier, Current Price, Hard Limits, Verified Date).
- Flag any unverified or behind-sales-wall pricing as &ldquo;Not publicly listed&rdquo; rather than estimating.
- Keep qualitative commentary strictly proportional to cited user or benchmark evidence.
```

### 4. Peer-Reviewed Clinical & Science Reader

```markdown
## Scientific Rigor Rules

- Distinguish randomized controlled trials, observational cohorts, preprints, and press releases in every summary.
- State sample size (n), comparator group, and major limitations alongside headline effect sizes.
- Never extrapolate animal or in-vitro findings into human clinical advice.
```

### 5. Local Code & File-Grounded Space

```markdown
## File-First Grounding

- Check uploaded Space files before pulling external web context.
- Quote file names or headings when referencing internal policies, briefs, or research exports.
- Ask for clarification before assuming missing figures across uploaded tables.
```

## Three tweaks that cut Perplexity fluff and stale citations.

- **Ban unverified extrapolation:** Add “If no authoritative source confirms a number or date, write ‘Not verified in retrieved sources.’”
- **Surface disagreements between sources:** Require Perplexity to list conflicts rather than smoothing them over ([see anti-sycophancy rules](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)).
- **Reuse your ChatGPT or Claude tone rules:** Convert your existing prompt via the [Instruction Converter](https://agent-tune.com/tools/instruction-converter) or pick a profile from the [43-template library](https://agent-tune.com/library/).

## Questions people ask.

### Where do I put custom instructions in Perplexity Spaces?

Open any Space, select its Instructions box in the Space setup/panel, and paste your search-scoping, source-priority, and output-formatting rules. Those rules automatically apply to new threads started inside that Space.

### Do Space instructions override Perplexity AI Profile settings?

Space instructions narrow the task and retrieval behavior inside that workspace, while your global AI Profile sets overall user background and general preferences across threads.

### How do I stop Perplexity from citing weak SEO listicles?

Add a source hierarchy rule directly in Space Instructions prioritizing official docs, primary standards, SEC/government filings, and peer-reviewed journals over secondary blogs, and require publication dates next to claims.

### Can I use MBTI, DISC, or Enneagram tunings in Perplexity?

Yes—copy any communication style rule set from our library and combine it with Space-specific citation rules so you control both epistemic rigor and writing cadence.

## What changed.

- November 16, 2026 First published covering Perplexity Profile AI vs Space Custom Instructions and 5 templates tuned for primary-source retrieval.

## Sources.

- [AgentTune: Turn Working Preferences Into AI Instructions](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)

- [AgentTune Tool: Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter)

## Keep going.

- [Guide: AI instruction precedence & overrides](https://agent-tune.com/guides/ai-instruction-precedence-overrides)
- [Tool: Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter)
- [Guide: How to stop AI sycophancy & make AI push back](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
- [Comparison: ChatGPT vs Claude personality benchmarks](https://agent-tune.com/guides/chatgpt-vs-claude-personality)
