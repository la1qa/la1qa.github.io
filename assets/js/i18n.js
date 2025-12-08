// Connect dropdown to language system
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("language-dropdown");
  
  // Set dropdown to saved language
  dropdown.value = localStorage.getItem("lang") || "en";
  
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
        el.textContent = translations[lang][key];
    });
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});
