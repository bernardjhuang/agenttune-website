Source: https://agent-tune.com/guides/migrate-ai-memory-custom-instructions
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Workflow · Cross-Platform Memory

# How to migrate AI memory into portable custom instructions without leaking secrets.

By Bernard Huang · Updated November 16, 2026

Do not paste raw chat exports across AI apps. Instead, export memory-only text, audit entries locally in our browser AI Memory Export Reviewer to delete duplicates and secrets, split stable style rules from editable facts, and install each piece into the matching destination box.

## Five-step memory & preference migration workflow.

- Export memories, not full transcripts: Grab your Saved Memories / custom instructions / Memory.md text (not giant multi-megabyte conversation ZIPs).
- Audit locally in your browser: Paste or load up to 500 entries into the [AI Memory Export Reviewer](https://agent-tune.com/tools/ai-memory-reviewer). It stays inside your browser tab, unchecks exact duplicates, and flags emails, phone-like strings, and API key patterns for redaction.
- Split Tone from Facts: Move &ldquo;how to answer&rdquo; rules (brevity, answer-first framing, pushback expectations) into Custom Instructions / Soul.md / Profile Preferences; move static role and timezone facts into Box 1 / Saved Info / Memory.md.
- Prune stale experiments: Delete old one-off persona tricks (&ldquo;always talk like a pirate for project X&rdquo;) that silently ruin daily work.
- Convert and check for conflicts: Reformat via the [Instruction Converter](https://agent-tune.com/tools/instruction-converter) and run a quick pass in the [Instruction Checker](https://agent-tune.com/tools/instruction-checker).

## Where each migrated category belongs across ChatGPT, Claude, Muse, and Gemini.

| Information type | ChatGPT | Claude | Meta Muse | Gemini |
| --- | --- | --- | --- | --- |
| Durable tone &amp; formatting rules | Personalization → Custom Instructions (Box 2) | Profile Preferences (and [Projects](https://agent-tune.com/guides/claude-project-instructions-examples)) | Soul.md ([safe merge →](https://agent-tune.com/tools/muse-soul-md-editor)) | Saved Info + Gems instructions |
| User role, stack, workflow facts | Personalization Box 1 or Saved Memories | Memory / Profile intro | Memory.md ([guide →](https://agent-tune.com/guides/muse-memory-md-privacy-reset)) | Saved Info facts |
| Project-specific specs &amp; docs | ChatGPT Project (8,000 chars + files) | Claude Project Knowledge | Task context / uploaded notes | Custom Gem Knowledge |
| Secrets, credentials, raw PII | Remove everywhere before pasting | Remove everywhere before pasting | Remove everywhere before pasting | Remove everywhere before pasting |

## Clean portable seed template (under 500 characters).

Once you extract the keeper rules from an older account, use this tight structure as your destination seed:

```markdown
## Durable Communication Preferences

- Put direct recommendations first, followed by key reasoning and concrete tradeoffs.
- Default to concise structured prose; save long explanations or tables for complex choices.
- Push back with evidence if my assumptions contain gaps or errors.
- Separate confirmed facts from estimates; do not guess missing numbers or close with filler follow-ups.
```

## Questions people ask.

Can I import a full ChatGPT conversations.json archive directly into Claude or Muse?

Uploading giant JSON transcripts rarely works well: it blows through instruction character limits and mixes transient debates with durable facts. Extract memory notes and durable preferences first using a local reviewer.

Does AgentTune upload or inspect my AI memory export?

No. Both the AI Memory Export Reviewer and the Instruction Converter run completely inside your browser tab without calling a model or sending pasted memory entries to a server.

Why should I separate Memory.md or Saved Memories from Custom Instructions?

Facts change over time (jobs, current tools, projects), whereas communication standards (directness, anti-sycophancy, structure) remain stable. Keeping them separate avoids deleting your core voice rules when cleaning old memories.

Can an automated redactor catch 100% of sensitive details in an export?

No. Regex checks flag common patterns like emails, API tokens, and long number sequences, but you should always scan the reviewed list manually before downloading or pasting into another service.

## What changed.

- November 16, 2026 First published covering cross-platform migration from ChatGPT, Claude, Gemini, and Meta Muse Memory.md using local PII review.

## Sources.

- [AgentTune Tool: AI Memory Export Reviewer](https://agent-tune.com/tools/ai-memory-reviewer)

- [AgentTune: Muse Memory.md Privacy, Review & Reset](https://agent-tune.com/guides/muse-memory-md-privacy-reset)

## Keep going.

- [Tool: AI Memory Export Reviewer (local deduplication & redaction)](https://agent-tune.com/tools/ai-memory-reviewer)
- [Tool: Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter)
- [Guide: Muse Memory.md privacy, review & reset](https://agent-tune.com/guides/muse-memory-md-privacy-reset)
- [Guide: ChatGPT personality settings (2026)](https://agent-tune.com/guides/chatgpt-personality-settings)
