const username = "la1qa";

const checkbox = document.getElementById("checkbox");

// Load saved preference
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
checkbox.checked = savedTheme === "dark";

checkbox.addEventListener("change", () => {
  const newTheme = checkbox.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Mobile theme check
const themeToggle = document.getElementById("themeToggle");

// Load preference
const storedTheme = localStorage.getItem("siteTheme") || "light";
document.documentElement.setAttribute("data-theme", storedTheme);
themeToggle.checked = storedTheme === "dark";

// Toggle theme
themeToggle.addEventListener("change", () => {
  const updatedTheme = themeToggle.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", updatedTheme);
  localStorage.setItem("siteTheme", updatedTheme);
});

// GitHub calendar (guarded to avoid ReferenceError if library isn't loaded)
if (typeof window.GitHubCalendar === "function") {
  GitHubCalendar(".calendar", username, {
    responsive: true,
    global_stats: false,
  });
} else {
  console.warn("GitHubCalendar library not found – skipping calendar init.");
}

// ==================== SCROLL TEST ====================
// First, verify scroll event fires at all
let scrollCount = 0;
window.addEventListener("scroll", () => {
  scrollCount++;
  if (scrollCount % 10 === 0) { // Log every 10 scrolls to avoid spam
    console.log(`📜 Scroll event #${scrollCount} | scrollY: ${window.scrollY}px`);
  }
});

console.log("✅ Scroll listener attached - try scrolling and watch console");

// Progressive home fade-out on scroll (starts immediately)
const homeContainer = document.querySelector(".home__container");
const homeSection = document.querySelector(".home");

function handleScrollFade() {
  if (!homeContainer || !homeSection) return;
  const minOpacity = 0.0; // match CSS fade-out baseline
  const fadeRange = Math.max(200, homeSection.offsetHeight * 0.9);
  const y = window.scrollY;
  const t = Math.min(Math.max(y / fadeRange, 0), 1);
  const opacity = 1 - t * (1 - minOpacity);
  homeContainer.style.opacity = String(opacity);
}

// Run once and on scroll
handleScrollFade();
window.addEventListener("scroll", handleScrollFade);