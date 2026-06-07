// Connect dropdown to language system
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("language-dropdown");
  
  // Set dropdown to saved language or detect browser language
  const browserLang = navigator.language.split('-')[0]; // e.g., "ca" from "ca-ES"
  const savedLang = localStorage.getItem("lang") || browserLang || "en";
  dropdown.value = savedLang;
  
  // Change language when user selects a new one
  dropdown.addEventListener("change", (e) => {
    const lang = e.target.value;
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key];
    });
  window.dispatchEvent(new Event("languagechange"));
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem("lang") || browserLang || "en";
    setLanguage(savedLang);
});

// Mobile
// Connect dropdown to language system
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("language-dropdown-mobile");
  
  // Set dropdown to saved language or detect browser language
  const browserLang = navigator.language.split('-')[0];
  const savedLang = localStorage.getItem("lang") || browserLang || "en";
  dropdown.value = savedLang;
  
  // Change language when user selects a new one
  dropdown.addEventListener("change", (e) => {
    const lang = e.target.value;
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key];
    });
  window.dispatchEvent(new Event("languagechange"));
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});

