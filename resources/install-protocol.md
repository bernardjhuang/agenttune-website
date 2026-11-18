# Installing AgentTune preferences

Version: 2026-09-25.1 · [Platform registry](https://agent-tune.com/resources/platforms.json) · [Generator](https://agent-tune.com/tools/custom-instructions-generator)

1. **Ask before installing.** Reading a template is not permission to install it. Confirm the target app, file path, and scope with the user first.
2. **Use the body only.** Fetch the clean Markdown body separately from YAML metadata. Review the rules with the user; explicit user requests and the current task always win. Preserve accuracy, relevant uncertainty, and tool permissions.
3. **Pick the right destination.** Use the platform registry to choose between account settings, project instructions, or repo files. API clients should pass the body in the provider's system/instructions field without installation metadata.
4. **Never overwrite existing rules.** Wrap added preferences in `<!-- agenttune:preferences:start -->` and `<!-- agenttune:preferences:end -->`. When updating, replace only that block. If markers are duplicated or incomplete, stop and ask the user. Keep all other lines and front matter intact.
5. **Verify storage.** Re-read the saved file or setting to confirm the exact block is present. This confirms that the text was saved, not that it is always applied.
6. **Test on real work.** Try a factual question, a planning task, and a critique request in a fresh chat without repeating the style rules in your prompt. Compare the replies and note where the model drifts.
7. **Undo cleanly.** To undo, remove only the managed block or exact added text and keep everything else. If the block was edited by hand, show the diff before removing it.

## Evidence limits

Personality templates are editable communication rules, not medical diagnoses or guaranteed capability upgrades. Questionnaire scores only describe how a model answered a survey under one prompt. See each research article for exact methods and limits.

## Compact exports

ChatGPT exports use a 1,500-character budget so they fit inside a single Custom Instructions box. Other destinations receive the full Markdown block.

## Data handling

Score questionnaires locally in the browser or local runtime. Never send user answers to AgentTune MCP; its tools only read public templates and guides. Report missing answers and tied scores openly.
