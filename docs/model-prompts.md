# Model-aware copy/paste prompts

## Experience

The shared picker in `integrations.js` serves all five test result pages, all 43 library pages, and the custom instructions generator.

1. Choose a model.
2. Choose a compatible destination.
3. Preview or copy one complete prompt.

Supported model labels: Muse, Astra 6, Fable 5.1, Sol 6, Opus 5.5, Grok 4.7, and Any model. Selecting a label changes the prompt; users still select the actual model in their app. App/plan availability is not guaranteed.

Each unrestricted prompt combines a short model brief with the complete original tuning. ChatGPT custom instructions use the reviewed compact tuning and remain within 1,500 characters; unidentified long text disables copying for that destination. The brief scopes the tuning to communication and preserves task instructions and accuracy. Destination wrappers handle Muse's named Soul.md section, Claude Code output-style front matter, and Cursor rule front matter. File instructions ask users to merge existing files. MCP remains an explicitly labeled connector command.

## Sources and editorial scope

Reviewed September 24, 2026:

- [OpenAI GPT-6 Astra prompting guidance](https://developers.openai.com/api/docs/guides/latest-model/gpt-6-astra.md): explicit scope, authorized follow-through, appropriate clarification, proportionate output and verification.
- [OpenAI model guide](https://developers.openai.com/api/docs/guides/latest-model): GPT-6 Astra and GPT-6 Sol naming and family guidance.
- [Anthropic prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices): clear scope and output instructions; meaningful checkpoints for longer Fable 5.1 work.
- [Claude Code model configuration](https://support.claude.com/en/articles/11940350-claude-code-model-configuration): Fable 5.1 and Opus 5.5 naming.
- [Meta Muse customization](https://www.meta.com/help/artificial-intelligence/995796179982326/) and [Muse data management](https://www.meta.com/help/artificial-intelligence/2225571704857152/): persistent preferences and the personal-file model. The existing Muse guide provides the installation context.
- [xAI Grok 4.7 announcement](https://x.ai/news/grok-4-7): model naming and agent/coding surfaces. Its concise evidence rules here are editorial prompt design, not a reported model trait.

These are editable starting prompts, not performance claims or new personality measurements. Historical research labels and results retain their original model versions. The mirrored `tunings/` files remain the canonical model-independent source.

## Maintenance

- Add or update a model in `AT_PROMPTS.models` and its supported destination IDs.
- Keep model briefs short: two actionable rules, no claims about measured personality.
- Guide sources mark communication examples with `data-tuning-prompt`; code/configuration examples retain their literal content. `promptModel` selects the default, `promptDestination` filters the available models, and an optional `data-prompt-target` preserves destination formatting.
- `guide-prompts.js` adapts each marked example, provides an expandable preview, and copies exactly the text in that preview. Clipboard failure exposes manual copying.
- The generator clears old output during loading and ignores stale responses.
- Legacy quiz paths such as `mbti/INTJ.md` and catalog paths such as `/tunings/mbti/INTJ.md` both work with `fetchTuning`.
- Edit `tools/generate-library.js` for library layout changes. Apply the same change to the handbuilt ESTP page. Default regeneration intentionally preserves that page.
- Edit guide JSON sources, then regenerate:

```sh
node tools/build-guides.js
node tools/generate-library.js
npm test
git diff --check
```

The dependency-free tests check all 43 tuning bodies across supported model/destination combinations, file headers, destination filtering, legacy loader compatibility, failed-fetch retry, generated shortcuts, and inline script syntax.

Browser verification for this change covered all model/destination copy flows, repeated copies in all 50 guide examples, clipboard denial, delayed/failed tuning requests, model/destination persistence on type changes, generated and handbuilt library shortcuts, a full DISC quiz-to-prompt flow, and layouts at 390, 768, and 1280 pixels. This verifies prompt construction and UI behavior; it does not evaluate the prompts' effects on model responses.
