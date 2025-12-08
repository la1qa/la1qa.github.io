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
