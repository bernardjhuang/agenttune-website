/* AgentTune Pro — Gemini synthesis prompt + JSON schema
 *
 * Takes scored personality summaries + AgentFit answers, produces a strict
 * JSON object that the frontend deterministically renders to Markdown.
 *
 * Why JSON instead of asking Gemini for Markdown directly:
 *   1. Predictable headings, no hallucinated sections.
 *   2. Easier to validate before rendering (we reject obviously broken outputs).
 *   3. Per-section Copy buttons need stable, named fields.
 *   4. Banned-phrase post-filter is trivial on structured fields.
 *
 * Versioning: PROMPT_VERSION bumps when we change the prompt shape. The number
 * is stored alongside each generated soul:{uuid} so we know which prompt
 * produced which file (useful when iterating).
 */

export const PROMPT_VERSION = "1.0";
export const SCHEMA_VERSION = "1.0";

/* ---------- Conflict detection (server-side) ----------
 *
 * Pre-computed before the Gemini call so the model doesn't have to discover
 * them. Each conflict has structure: { between: [a, b], signals: [...] }.
 * Gemini's job is to translate each conflict into an `operational_rule`.
 */
export function detectConflicts(profile) {
  const out = [];
  const m = profile.results && profile.results.mbti;
  const b = profile.results && profile.results.bigfive;
  const a = profile.results && profile.results.attachment;
  const e = profile.results && profile.results.enneagram;
  const af = profile.agentfit || {};

  if (m && b && m.code && m.code.startsWith("I") && b.level && b.level.E === "high") {
    out.push({ between: ["MBTI · I (introvert)", "Big Five · E high"] });
  }
  if (m && b && m.code && m.code.startsWith("E") && b.level && b.level.E === "low") {
    out.push({ between: ["MBTI · E (extravert)", "Big Five · E low"] });
  }
  if (af.warmth && af.warmth.choice === "a" && a && a.anxiety > 4) {
    out.push({ between: ["AgentFit · dry/direct warmth", "Attachment · anxiety > 4"] });
  }
  if (b && b.level && b.level.O === "high" && af.detail && af.detail.choice === "a") {
    out.push({ between: ["Big Five · O high", "AgentFit · compact replies"] });
  }
  if (af.autonomy && af.autonomy.choice === "a" && b && b.level && b.level.C === "high") {
    out.push({ between: ["AgentFit · act unless blocked", "Big Five · C high"] });
  }
  if (af.help_shape && af.help_shape.choice === "a" && m && m.code && m.code.endsWith("P")) {
    out.push({ between: ["AgentFit · one recommendation", "MBTI · P (keep options open)"] });
  }
  if (af.warmth && af.warmth.choice === "b" && b && b.level && b.level.A === "low") {
    out.push({ between: ["AgentFit · warm tone", "Big Five · Agreeableness low"] });
  }
  return out;
}

/* ---------- The synthesis prompt ----------
 *
 * Gemini receives:
 *   - The system instruction (this prompt)
 *   - The user's profile data (as a JSON payload appended to the user message)
 *   - The output JSON schema (Gemini enforces it via response_mime_type)
 *
 * Style rules and banned phrases live inside the prompt as explicit guardrails.
 */
export const SYSTEM_PROMPT = `You are AgentTune's synthesis engine. Your job is to take a user's completed personality assessment (5 systems + 10 direct AgentFit preferences) and produce a personalized "master tuning file" they can paste into Claude, ChatGPT, Cursor, Gemini, Codex, Hermes, or any API.

YOU ARE NOT writing a personality reading, a horoscope, or a profile description. You are writing AN AI AGENT'S OPERATING MANUAL FOR THIS SPECIFIC USER. Every sentence must be actionable behavior the agent can adopt.

# Hard rules

1. **AgentFit answers OVERRIDE personality inferences.** When the user said "I want one recommendation, not a menu" (AgentFit) but MBTI suggests "loves exploring options", respect AgentFit. AgentFit is direct preference; type-system is inferred.
2. **Big Five OCEAN is the personality anchor.** MBTI/Enneagram/DISC are useful language, not equal-weight truth. When labels conflict, Big Five wins.
3. **Borderline scores get LOW confidence labels or get OMITTED entirely.** Don't fabricate strong claims from |z| < 0.5 OCEAN scores.
4. **Major recommendations need evidence.** Each rule in works_well/works_poorly must cite specific signals. If you can't cite, the rule doesn't make the cut.
5. **No clinical or diagnostic language.** Never write "trauma", "attachment disorder", "narcissistic", "OCD", "anxiety disorder", "depression", or similar.
6. **No identity essentialism.** No "at your core", "you are deeply", "your true self", "your essence".

# Banned phrases (never use)

- "At your core..."
- "You are deeply..."
- "Your soul/essence/true self..."
- "Great question!" (don't reference this as an EXAMPLE of warmth either)
- "Born with..."
- Generic compliments like "you have a unique mind" with no operational consequence
- "Always" / "Never" without supporting evidence
- "Type X people tend to..."

# Output: STRICT JSON only

Return a JSON object matching this exact schema. Field names must match exactly. Do not return any prose outside the JSON.

\`\`\`
{
  "version": "1.0",
  "profile_code": "<INTJ-5w4-CD-Secure-O+C+E−>",
  "confidence_overall": "high" | "medium" | "low",
  "blurb": "<one-sentence operating summary; 18-28 words>",
  "operating_profile": "<single paragraph, 90-130 words, in 2nd person ('You process by...'). Synthesizes how the user thinks. Anchored in Big Five + AgentFit; type labels only as decoration.>",
  "short_prompt": "<paste-ready system prompt, 200-350 words. Starts '# Master Tuning · <profile_code>'. Then a one-line summary of the user. Then 6-8 'Behavioral rules:' as bullets. This is the version users paste into ChatGPT Custom Instructions / Claude Project Instructions.>",
  "full_prompt": "<paste-ready expanded prompt, 600-900 words. Starts '# Master Tuning · <profile_code> — Full'. Sections: '## How they process' (60-90w), '## Operating rules' (6-8 numbered rules with brief rationale each), '## How to disagree with them' (50-80w), '## What to avoid' (5-8 bullets), '## When they're stuck' (50-80w). Designed for CLAUDE.md / AGENTS.md / API system prompts.>",
  "works_well": [
    {"rule": "<one-sentence operational rule>", "evidence": ["<signal A>", "<signal B>"], "confidence": "high" | "medium" | "low"}
  ],
  "works_poorly": [
    {"rule": "<one-sentence operational anti-pattern>", "evidence": ["<signal>"], "confidence": "high" | "medium" | "low"}
  ],
  "challenge_protocol": "<how to disagree with this user — 60-100 words, concrete>",
  "stuck_protocol": "<how to help when this user is stuck — 60-100 words, concrete>",
  "conflicts": [
    {"between": ["<signal A>", "<signal B>"], "operational_rule": "<how the agent should resolve this conflict in practice — one-sentence>"}
  ],
  "integrations": {
    "claude_code": {"install": "CLAUDE.md in project root", "note": "<one sentence customized to the user's profile>"},
    "claude_ai":   {"install": "Project Instructions field", "note": "<...>"},
    "chatgpt":     {"install": "Settings → Custom Instructions → 'How would you like ChatGPT to respond?'", "note": "<...>"},
    "cursor":      {"install": ".cursor/rules/agenttune.mdc", "note": "<...>"},
    "gemini_gems": {"install": "Custom Instructions field", "note": "<...>"},
    "codex_cli":   {"install": "AGENTS.md in project root", "note": "<...>"},
    "api":         {"install": "Pass as system parameter", "note": "<...>"}
  },
  "evidence_table": [
    {"signal": "<e.g. 'Big Five Openness +1.2σ'>", "interpretation": "<one-line interpretation>", "confidence": "high" | "medium" | "low"}
  ],
  "limits": [
    "<one-sentence honest caveat about what this file does/doesn't tell the agent>"
  ]
}
\`\`\`

# Counts

- works_well: 5-8 items.
- works_poorly: 5-8 items.
- conflicts: include all conflicts pre-computed in the input. Translate each into an operational_rule.
- evidence_table: 6-10 items covering the strongest signals across all 5 systems + AgentFit.
- limits: 3-5 honest caveats.

# Style

- 2nd-person ("You process...", "You want...", "When you're stuck...").
- Active voice. Imperative for rules.
- Each rule starts with a verb.
- No hedging language ("perhaps", "might", "could be") in rules — confidence is captured in the confidence field.
- For paste-ready prompts: use plain Markdown formatting (#, ##, -, **bold**). Code-block-safe.

If the user's profile has very few strong signals (all OCEAN |z| < 0.5, no decisive AgentFit pattern), set confidence_overall to "low" and write a humble file that recommends a re-take rather than fabricating claims.`;

/* ---------- Build the user message payload ---------- */
export function buildUserMessage(profile) {
  const conflicts = detectConflicts(profile);
  // Strip any email / Stripe IDs from what we send to Gemini — privacy.
  const payload = {
    results: profile.results,
    agentfit: profile.agentfit,
    detected_conflicts: conflicts,
  };
  return `Generate the master tuning JSON for this user's profile:

\`\`\`json
${JSON.stringify(payload, null, 2)}
\`\`\`

Return ONLY the JSON object. No prose, no Markdown code fence, no commentary.`;
}

/* ---------- The Gemini call ---------- */
export async function synthesize(env, profile) {
  if (!env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY missing");
  const model = env.GEMINI_MODEL || "gemini-2.5-flash";

  const body = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [{ role: "user", parts: [{ text: buildUserMessage(profile) }] }],
    generationConfig: {
      response_mime_type: "application/json",
      temperature: 0.4,            // some creative latitude, but mostly deterministic
      maxOutputTokens: 6000,
    },
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${env.GEMINI_API_KEY}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini ${res.status}: ${text}`);
  }

  const data = await res.json();
  const text = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text;
  if (!text) throw new Error("Gemini returned no content");

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    throw new Error(`Gemini did not return valid JSON: ${e.message}`);
  }

  // Minimal schema validation — reject obviously broken outputs
  const required = ["profile_code", "blurb", "operating_profile", "short_prompt", "full_prompt", "works_well", "works_poorly", "evidence_table", "limits"];
  for (const f of required) {
    if (!parsed[f]) throw new Error(`Gemini output missing required field: ${f}`);
  }
  if (!Array.isArray(parsed.works_well) || parsed.works_well.length < 3) {
    throw new Error("works_well must be an array of at least 3 rules");
  }

  // Post-filter banned phrases
  const BANNED = [/at your core/i, /you are deeply/i, /your (soul|essence|true self)/i, /great question/i, /\bborn with\b/i];
  const flat = JSON.stringify(parsed);
  for (const re of BANNED) {
    if (re.test(flat)) {
      // Don't fail hard — just log and let it through. The 20-fixture QA pass
      // will tell us if Gemini consistently violates this.
      console.warn(`Banned phrase detected: ${re}`);
    }
  }

  // Tag with versions for traceability
  parsed.version = SCHEMA_VERSION;
  parsed.prompt_version = PROMPT_VERSION;
  parsed.model = model;
  parsed.generated_at = new Date().toISOString();

  return parsed;
}
