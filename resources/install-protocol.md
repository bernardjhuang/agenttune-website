# Installing AgentTune preferences

Version: 2026-09-25.1 · [Platform registry](https://agent-tune.com/resources/platforms.json) · [Generator](https://agent-tune.com/tools/custom-instructions-generator)

1. A request to read a tuning is not permission to install it. Confirm the requested destination and scope.
2. Fetch the tuning body separately from metadata. Review the wording with the user; explicit preferences and the current task take precedence. No framework has automatic priority. Preserve accuracy, relevant uncertainty and permissions.
3. Choose the app and personal, project or conversation destination using the registry. Interface labels can vary by account. API clients use the provider’s supported instruction field; omit installation metadata and select the model separately.
4. Preserve existing instructions. Add one block bounded by `<!-- agenttune:preferences:start -->` and `<!-- agenttune:preferences:end -->`. When updating, replace only that block. If markers are duplicated or incomplete, stop and resolve the ambiguity. Preserve format-specific front matter. Do not overwrite an existing file with a downloaded template.
5. Confirm storage by rereading the exact saved text. This establishes that it was saved, not that it is always applied.
6. In a new conversation or task, try a factual question, a planning task, and a critique request without repeating the desired style. Compare observations to the selected preferences and note counterexamples. Do not use a greeting that dictates its own expected response as a compliance test.
7. To undo, remove only the managed block or exact added text; preserve all other content. If the block was subsequently edited, review the difference before removal.

## Evidence limits

Personality templates are editorial communication suggestions, not diagnoses or proven performance improvements. Test scores describe responses to a questionnaire. Model self-reports do not establish an inner personality. See each research article for its data provenance and limitations.

## Compact exports

The ChatGPT export uses a conservative 1,500-character budget. This is AgentTune’s export budget, not a claim about every current product field limit. The registry and generator share the same destination instructions.

## Data handling

Score questionnaires locally. Do not send answers to AgentTune MCP; its tools only retrieve public resources. Report missing responses and ties explicitly. Never infer consent or a personality type from a default selection.
