(function () {
  const SUPPORTED_LANGS = ["ko", "en", "ja", "zh", "es"];
  const LANG_LABELS = {
    ko: "한국어",
    en: "English",
    ja: "日本語",
    zh: "中文",
    es: "Español",
  };

  const params = new URLSearchParams(window.location.search);
  const storedLang = localStorage.getItem("spotStapler-lang");
  let currentLang =
    params.get("lang") ||
    storedLang ||
    normalizeLang(navigator.language || "en");

  function normalizeLang(lang) {
    const code = lang.toLowerCase().split("-")[0];
    return SUPPORTED_LANGS.includes(code) ? code : "en";
  }

  function getDocType() {
    const path = window.location.pathname;
    if (path.includes("/privacy")) return "privacy";
    if (path.includes("/support")) return "support";
    if (path.includes("/term")) return "terms";
    return "terms";
  }

  function getDocPath(docType) {
    return docType === "terms" ? "term" : "privacy";
  }

  function getSiblingDocUrl(docType) {
    const params = new URLSearchParams();
    if (currentLang) params.set("lang", currentLang);
    const query = params.toString();
    return `../${getDocPath(docType)}/index.html${query ? `?${query}` : ""}`;
  }

  function renderLanguageSwitcher() {
    const container = document.getElementById("lang-switcher");
    if (!container) return;

    container.innerHTML = "";
    SUPPORTED_LANGS.forEach((lang) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lang-btn";
      button.textContent = LANG_LABELS[lang];
      button.setAttribute("aria-pressed", lang === currentLang ? "true" : "false");
      button.addEventListener("click", () => setLanguage(lang));
      container.appendChild(button);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("spotStapler-lang", lang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);

    renderLanguageSwitcher();
    renderContent();
    document.documentElement.lang = lang;
  }

  function renderContent() {
    const docType = getDocType();
    const contentRoot = document.getElementById("legal-content");
    const doc = window.SPOT_STAPLER_LEGAL?.[docType]?.[currentLang];

    if (!contentRoot || !doc) {
      if (contentRoot) {
        contentRoot.innerHTML =
          "<p>Content is not available for the selected language.</p>";
      }
      return;
    }

    document.title = doc.pageTitle;
    contentRoot.innerHTML = doc.html;

    const docTypeLabel = document.getElementById("doc-type-label");
    if (docTypeLabel) docTypeLabel.textContent = doc.docLabel;

    const otherLink = document.getElementById("other-doc-link");
    if (otherLink && (docType === "terms" || docType === "privacy")) {
      const otherType = docType === "terms" ? "privacy" : "terms";
      const otherDoc = window.SPOT_STAPLER_LEGAL[otherType][currentLang];
      otherLink.href = getSiblingDocUrl(otherType);
      otherLink.textContent = otherDoc.navLabel;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = currentLang;
    renderLanguageSwitcher();
    renderContent();
  });
})();
