// Connect dropdown to language system
window.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("language-dropdown");
  if (dropdown) {
    dropdown.value = localStorage.getItem("lang") || "en";
    dropdown.addEventListener("change", (e) => {
      const lang = e.target.value;
      setLanguage(lang);
    });
  }

  const dropdownMobile = document.getElementById("language-dropdown-mobile");
  if (dropdownMobile) {
    dropdownMobile.value = localStorage.getItem("lang") || "en";
    dropdownMobile.addEventListener("change", (e) => {
      const lang = e.target.value;
      setLanguage(lang);
    });
  }

  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = translations && translations[lang] && translations[lang][key];
    if (typeof text === "string") {
      // For button elements, set textContent to preserve other child elements
      if (el.tagName === "BUTTON") {
        el.textContent = text;
      } else {
        // For other elements, use innerHTML to support HTML tags in translations
        el.innerHTML = text;
      }
    }
  });
  window.dispatchEvent(new Event("languagechange"));
}

// expose for React usage
if (typeof window !== "undefined") {
  window.setLanguage = setLanguage;
}
