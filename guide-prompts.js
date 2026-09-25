/* Model adaptation for explicitly marked communication prompts in the guides. */
(function () {
  "use strict";
  const selector = document.querySelector("[data-guide-model]");
  const prompts = window.AT_PROMPTS;
  if (selector && prompts) {
    prompts.models.filter(model => prompts.destinations(model.id).some(item => item.id === selector.dataset.guideTarget)).forEach(model => {
      const option = document.createElement("option");
      option.value = model.id;
      option.textContent = model.name;
      selector.append(option);
    });
    selector.value = prompts.modelFor(selector.dataset.guideModel).id;
  }
  const blocks = [...document.querySelectorAll(".guide-snippet")].map(block => {
    // Capture the source before adding controls, so repeated copies never include button text.
    const original = block.textContent.trim();
    const content = document.createElement("span");
    content.className = "guide-snippet-content";
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "guide-snippet-copy";
    const status = document.createElement("span");
    status.className = "guide-copy-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    const preview = document.createElement("details");
    if (block.hasAttribute("data-tuning-prompt")) {
      preview.className = "guide-prompt-preview";
      const summary = document.createElement("summary");
      summary.textContent = "Preview the full prompt";
      preview.append(summary, content);
      block.replaceChildren(copy, preview, status);
    } else {
      block.replaceChildren(copy, content, status);
    }
    let text = original, revision = 0;
    function render() {
      revision++;
      const adapted = block.hasAttribute("data-tuning-prompt") && selector && prompts;
      text = adapted ? prompts.snippet(original, selector.value, block.dataset.promptTarget || "anywhere") : original;
      content.textContent = text;
      copy.textContent = "Copy";
      copy.setAttribute("aria-label", adapted ? "Copy prompt for " + prompts.modelFor(selector.value).name : "Copy example");
      status.textContent = adapted ? text.length.toLocaleString() + " characters · edit after pasting" : "";
    }
    copy.addEventListener("click", async () => {
      const atRevision = revision;
      try {
        await navigator.clipboard.writeText(text);
        if (atRevision === revision) status.textContent = "Copied";
      } catch (_) {
        if (atRevision !== revision) return;
        status.textContent = "Select the text to copy manually.";
        preview.open = true;
        const selection = window.getSelection(), range = document.createRange();
        range.selectNodeContents(content);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
    render();
    return render;
  });
  if (selector) selector.addEventListener("change", () => {
    blocks.forEach(render => render());
    const generator = document.querySelector("[data-guide-generator]");
    if (generator) generator.href = "/tools/custom-instructions-generator?model=" + encodeURIComponent(selector.value) + "&target=" + encodeURIComponent(selector.dataset.guideTarget);
  });
})();
