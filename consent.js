/* AgentTune consent-gated analytics loader.
 *
 * Google Analytics loads ONLY after the visitor accepts the banner — no GA
 * script, cookies, or pings before an explicit "Allow" (EU ePrivacy
 * friendly). The choice persists in localStorage; visitors can change it
 * any time via the "Analytics preferences" link on /privacy, which calls
 * window.atConsentReset().
 *
 * Every page includes this file INSTEAD of the raw gtag snippet. Page code
 * that calls gtag()/track() already guards on `typeof gtag === "function"`,
 * so analytics events silently no-op until consent is granted.
 */
(function () {
  var KEY = "at_consent"; // "granted" | "denied"
  var GA_ID = "G-5MYEW2MEE1";

  function getChoice() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setChoice(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* private mode: session-only */ }
  }

  function loadGA() {
    if (window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  function removeBanner() {
    var el = document.getElementById("at-consent");
    if (el) el.remove();
  }

  function showBanner() {
    if (document.getElementById("at-consent")) return;

    var style = document.createElement("style");
    style.textContent =
      "#at-consent{position:fixed;left:16px;bottom:16px;z-index:9999;max-width:340px;" +
      "background:var(--bg,#f6f3ef);color:var(--ink,#2a2a26);border:1px solid var(--border,#ddd6cb);" +
      "border-radius:10px;box-shadow:0 8px 28px rgba(42,42,38,.18);padding:16px 18px;" +
      "font-family:var(--font-sans,system-ui,sans-serif);font-size:14px;line-height:1.5}" +
      "#at-consent p{margin:0 0 12px}" +
      "#at-consent a{color:inherit;text-decoration:underline}" +
      "#at-consent .at-consent-row{display:flex;gap:10px}" +
      "#at-consent button{font:inherit;font-size:13px;padding:7px 14px;border-radius:7px;cursor:pointer}" +
      "#at-consent .at-allow{background:var(--ink,#2a2a26);color:var(--bg,#f6f3ef);border:1px solid var(--ink,#2a2a26)}" +
      "#at-consent .at-decline{background:transparent;color:inherit;border:1px solid var(--border,#ddd6cb)}" +
      "@media (max-width:480px){#at-consent{left:12px;right:12px;bottom:12px;max-width:none}}";
    document.head.appendChild(style);

    var el = document.createElement("div");
    el.id = "at-consent";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Analytics consent");
    el.innerHTML =
      "<p>We use Google Analytics to understand traffic — no ads, no cross-site tracking. " +
      '<a href="/privacy">Privacy</a></p>' +
      '<div class="at-consent-row">' +
      '<button type="button" class="at-allow">Allow analytics</button>' +
      '<button type="button" class="at-decline">Decline</button>' +
      "</div>";

    el.querySelector(".at-allow").addEventListener("click", function () {
      setChoice("granted");
      removeBanner();
      loadGA();
    });
    el.querySelector(".at-decline").addEventListener("click", function () {
      setChoice("denied");
      removeBanner();
    });

    document.body.appendChild(el);
  }

  // /privacy links here so visitors can change their mind later.
  window.atConsentReset = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    showBanner();
  };

  function init() {
    var c = getChoice();
    if (c === "granted") loadGA();
    else if (c !== "denied") showBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
