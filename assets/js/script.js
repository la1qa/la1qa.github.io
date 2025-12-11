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

// GitHub calendar
GitHubCalendar(".calendar", username, {
  responsive: true,
  global_stats: false,
});