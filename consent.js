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
  var DISABLE_KEY = "ga-disable-" + GA_ID;
  var allowed = false;
  var started = false;
  window[DISABLE_KEY] = true;

  window.atTrack = function (event) {
    if (!allowed || !["quiz_start", "quiz_complete", "tuning_copy", "tuning_download", "generator_copy", "guide_copy", "integration_copy"].includes(event)) return;
    window.gtag("event", event);
  };

  function getChoice() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setChoice(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* private mode: session-only */ }
  }

  function loadGA() {
    allowed = true;
    window[DISABLE_KEY] = false;
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      if (allowed) window.dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  function disableGA() {
    allowed = false;
    // Google's opt-out flag also stops events from an already-loaded tag.
    window[DISABLE_KEY] = true;
    const cookies = document.cookie.split(";").map(function (cookie) {
      return cookie.trim().split("=")[0];
    }).filter(function (name) { return /^_ga(?:_|$)|^_gid$|^_gat/.test(name); });
    const parts = window.location.hostname.split(".");
    const domains = [""];
    for (let i = 0; i < parts.length - 1; i++) {
      domains.push(parts.slice(i).join("."));
      domains.push("." + parts.slice(i).join("."));
    }
    cookies.forEach(function (name) {
      domains.forEach(function (domain) {
        document.cookie = name + "=; Max-Age=0; path=/" + (domain ? "; domain=" + domain : "");
      });
    });
  }

  function removeBanner() {
    var el = document.getElementById("at-consent");
    if (el) el.remove();
  }

  function showBanner() {
    if (document.getElementById("at-consent")) return;

    if (!document.getElementById("at-consent-style")) {
      injectStyle();
    }

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
      disableGA();
      removeBanner();
    });

    document.body.appendChild(el);
  }

  function injectStyle() {
    var style = document.createElement("style");
    style.id = "at-consent-style";
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
  }

  // /privacy links here so visitors can change their mind later.
  window.atConsentReset = function () {
    disableGA();
    try { localStorage.removeItem(KEY); } catch (e) {}
    showBanner();
  };

  // A withdrawal in another tab must also stop this tab's analytics.
  window.addEventListener("storage", function (event) {
    if (event.key !== KEY && event.key !== null) return;
    if (getChoice() === "granted") loadGA();
    else disableGA();
  });

  function init() {
    var c = getChoice();
    if (c === "granted") loadGA();
    else {
      disableGA();
      if (c !== "denied") showBanner();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
