/* Shared quiz behavior. The scorer does not invent a preference on tied axes. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.ATQuiz = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  function transition(clock = globalThis) {
    let timer = null;
    let generation = 0;
    return {
      schedule(advance) {
        if (timer !== null) return false;
        const current = ++generation;
        timer = clock.setTimeout(() => {
          if (current !== generation) return;
          timer = null;
          advance();
        }, 220);
        return true;
      },
      cancel() {
        generation++;
        if (timer !== null) clock.clearTimeout(timer);
        timer = null;
      }
    };
  }

  function scoreMbti(answers, items, preferences = {}) {
    const axes = { EI: { E: 0, I: 0 }, SN: { S: 0, N: 0 }, TF: { T: 0, F: 0 }, JP: { J: 0, P: 0 } };
    const answered = { EI: 0, SN: 0, TF: 0, JP: 0 };
    items.forEach((item, i) => {
      const value = answers[i];
      if (!Number.isInteger(value) || value < 1 || value > 5) return;
      answered[item.axis]++;
      if (value !== 3) axes[item.axis][value < 3 ? item.low : item.high] += Math.abs(value - 3);
    });
    const tied = [], incomplete = [], unresolved = [];
    const pattern = Object.keys(axes).map(axis => {
      const [a, b] = axis;
      if (answered[axis] !== items.filter(item => item.axis === axis).length) {
        incomplete.push(axis); unresolved.push(axis); return "X";
      }
      if (axes[axis][a] !== axes[axis][b]) return axes[axis][a] > axes[axis][b] ? a : b;
      tied.push(axis);
      if (preferences[axis] === a || preferences[axis] === b) return preferences[axis];
      unresolved.push(axis);
      return "X";
    }).join("");
    return { type: unresolved.length ? null : pattern, pattern, axes, tied, incomplete, unresolved };
  }

  // Answer buttons advance immediately, so they are buttons rather than a radio group.
  function focusQuestion(doc, index, total) {
    const card = doc.getElementById("quiz-card");
    const text = id => doc.getElementById(id)?.textContent || "";
    const prompt = text("quiz-item-statement") || "First statement: " + text("quiz-statement-first") + ". Second statement: " + text("quiz-statement-second");
    const label = `Question ${index + 1} of ${total}. ${prompt}`;
    doc.getElementById("quiz-announcement").textContent = doc.activeElement === card ? label : "";
    card.setAttribute("aria-label", label);
    card.focus({ preventScroll: true });
  }
  function focusScreen(doc) {
    const result = doc.getElementById("quiz-result");
    const target = !result.hidden ? doc.getElementById("quiz-result-code") :
      !doc.getElementById("quiz-intro").hidden ? doc.getElementById("quiz-start") : doc.getElementById("quiz-card");
    target.setAttribute("tabindex", target.tagName === "BUTTON" ? "0" : "-1");
    target.focus({ preventScroll: true });
    globalThis.scrollTo({ top: 0, behavior: "auto" });
  }
  function ignoreShortcut(e) {
    return e.repeat || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ||
      /^(INPUT|TEXTAREA|SELECT)$/.test(e.target?.tagName || "") || e.target?.isContentEditable ||
      (e.target?.closest && !!e.target.closest('[role="dialog"]'));
  }
  async function copyTuning(text, button) {
    const original = button.dataset.copyLabel || button.textContent;
    button.dataset.copyLabel = original;
    button.setAttribute("aria-live", "polite");
    try {
      await globalThis.navigator.clipboard.writeText(text);
      button.textContent = "Copied ✓";
      if (globalThis.atTrack) globalThis.atTrack("tuning_copy");
      globalThis.setTimeout(() => { button.textContent = original; }, 2000);
      return true;
    } catch {
      button.textContent = "Copy unavailable — select the text or download";
      return false;
    }
  }
  return { transition, scoreMbti, focusQuestion, focusScreen, ignoreShortcut, copyTuning };
});
