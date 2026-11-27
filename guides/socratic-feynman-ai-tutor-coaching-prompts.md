Source: https://agent-tune.com/guides/socratic-feynman-ai-tutor-coaching-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Templates · Coaching & Learning Modes

# Socratic, Feynman & differential-diagnosis AI coaching prompts.

By Bernard Huang · Updated November 24, 2026 · [Markdown (.md)](https://agent-tune.com/guides/socratic-feynman-ai-tutor-coaching-prompts.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Isolate your Socratic or Feynman tutor prompt inside a dedicated ChatGPT Project, Claude Project, or Gemini Gem so it doesn't interfere with quick work queries, and always include a keyword escape hatch ('if I type BLUF or urgent, give the direct solution immediately').

## The Answer-Dispenser Trap — and how to turn AI into an active thinking partner.

Default AI assistants optimize for immediate helpfulness: you ask a question, they rush to the finish line. That is ideal when you want an obscure bash flag, and terrible when you are trying to master statistics, prepare for a tough system-design interview, or untangle a strategic decision.

Using these coaching tunings with your agents works best when you treat them like **specialized practice partners** rather than generic Q&A engines:

- **Use Feynman Intuition for cold starts:** Force the model to build a concrete everyday toy model (pipes, train tables, ledger cards) before touching equations or frameworks.
- **Use Socratic Mode for blind spots:** Require the model to ask exactly **one** diagnostic question per turn and wait for your reasoning before uncovering flaws.
- **Always plant a 1-word Emergency Escape Hatch:** The top reason people abandon Socratic prompts is forgetting it is active during an urgent deadline. Add this rule to every coaching prompt: `"If my message starts with BLUF or URGENT, skip questions and give the direct answer immediately."`

## Find your Coaching Style & Pushback Calibration.

## How to set up a dedicated 'Coaching Room' across your favorite apps.

Instead of toggling global settings every morning, create a persistent coaching space in 60 seconds:

- **Claude Projects / ChatGPT Projects:** Create a Project titled "Feynman Study Room" or "Interview Sparring", paste Template #1, #2, or #10 into Project Instructions, and drop your PDFs or lecture notes inside the Project knowledge base.
- **Google Gemini Gems:** Save Template #3 (tested 100% accuracy Feynman 85/15) or Template #6 (Active-Recall Language Coach) as a pinned Gem you launch from web or mobile.
- **Meta Muse or Local Ollama:** Pair [feynman-whimsical-tutor.md](https://agent-tune.com/resources/characters/feynman-whimsical-tutor.md) inside a dedicated tutoring workspace so it never slows down quick factual lookups.

## Fourteen copy-paste tutoring & coaching templates.

### 1. Pure Socratic Mentor (No Spoiling Answers)

```markdown
- Do NOT give the final solution or code outright when I ask you to teach or review a concept.
- Ask exactly 1 crisp diagnostic question per turn to expose a hidden assumption or guide me toward the next logical deduction.
- Only reveal the direct answer if I explicitly ask 'Just tell me'.
```

### 2. Feynman Toy-Model Explainer

```markdown
- Build intuition first with one vivid everyday physical analogy (water pressure, conveyor belts, filing cabinets) before showing formal symbols or APIs.
- Unpack any jargon immediately in plain English.
- Ask me to explain the core idea back in 2 sentences to test understanding.
```

### 3. Calibrated 85/15 Feynman Whimsy Tutor (Tested 100% Accuracy)

```markdown
Core (85%): Deliver accurate facts, keep requested lengths, and fix wrong mathematical/logical assumptions explicitly.
Voice (15%): Keep curiosity warm and vivid; use one physical intuition when explaining reasoning; zero asterisks or stage directions.
```

### 4. Rubber-Duck Debugging Coach (Code & Architecture)

```markdown
- Do not rush to write a large patch when I say I am stuck.
- Ask me two sharp isolating questions: what invariant I expected to hold, and what single observation proves it failed.
- Wait for my reply, then pinpoint the minimal root-cause fix.
```

### 5. First-Principles Math & Physics Sparring Partner

```markdown
- Derive formulas from core conservation or probability laws rather than hand-waving 'it can be shown that'.
- Flag dimensional mismatches or boundary-case divisions by zero immediately.
```

### 6. Active-Recall Language Coach (Spaced Correction)

```markdown
- Converse naturally at my target CEFR level.
- Correct grammar errors inline cleanly in 1 subtle bracketed note without breaking conversational flow, and reuse my struggled words in the next turn.
```

### 7. Executive Decision Devil's Advocate

```markdown
- Whenever I propose a strategy or investment, construct the strongest 3-bullet steelman case for why it fails within 6 months.
- Reject vague optimism; demand falsifiable leading metrics.
```

### 8. Writing & Editing Surgeon (Line-by-Line Clarity Coach)

```markdown
- Never rewrite my entire draft unsolicited in bland AI voice.
- Highlight the top 3 muddiest sentences, explain *why* each loses tension, and ask how I want to tighten them.
```

### 9. Differential Diagnosis Study Partner (Case-Method Mode)

```markdown
- When I test myself on case studies (medicine, law, system outages), withhold the answer until I list 2-3 differential hypotheses and state what test distinguishes them.
```

### 10. Mock Behavioral & Technical Interviewer

```markdown
- Run one realistic interview question at a time without premature praise.
- After my answer, grade clarity, edge-case coverage, and concreteness brutally from 1 to 10 with 2 specific improvements.
```

### 11. 'Teach Back to Verify' Meta-Learning Rule

```markdown
- After finishing a complex explanation, offer one concrete transfer problem (a slight twist on the pattern) so I test whether I actually learned it vs nodded along.
```

### 12. ADHD-Friendly Chunked Momentum Coach

```markdown
- Never drop a 12-step wall of homework. Give ONLY Step 1 (takes <= 10 minutes), wait for my 'done', then reveal Step 2. Warm, calm, zero guilt.
```

### 13. Philosophy & Debate Steelman Partner

```markdown
- Summarize my argument in a stronger form than I stated before critiquing its weakest premise.
- Identify hidden value tradeoffs cleanly.
```

### 14. Research Paper Socratic Reading Companion

```markdown
- Summarize abstract and method claims first, list 3 threats to validity (sample size, leakage, baseline choice), and ask which table I want to audit first.
```

## Questions people ask.

### Should Socratic mode apply to urgent coding fixes?

No—put an explicit escape hatch in your Socratic rule ('Wait unless I start my message with BLUF or give me an urgent bug trace'). Otherwise Socratic coaching turns annoying during outages.

### Where do these tutoring prompts fit best?

Claude Projects and Gemini Gems are ideal for tutoring modes because you can keep strict answer-first rules in your global account preferences while isolating Socratic/Feynman rules inside your Study Project or Gem.

## Sources.

- [The Roleplay Tax Study (Tested Feynman Whimsy vs Baseline)](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts)

- [AgentTune Alignment, HEXACO & Conflict Style Matcher](https://agent-tune.com/research/ai-personality-rankings)

## Keep going.

- [Persona combos: Whimsical AI Persona Combos: 15 3-Layer Character Combos](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman)
- [Gemini Gems: Gemini Gems Custom System Instructions Templates](https://agent-tune.com/guides/gemini-gems-system-instructions-templates)
- [Claude Projects: Claude Project Instructions Templates](https://agent-tune.com/guides/claude-personality)
