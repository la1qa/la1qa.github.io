// Simple page view count stored in browser
let views = localStorage.getItem("portfolio_views");
views = views ? Number(views) + 1 : 1;

localStorage.setItem("portfolio_views", views);

console.log(`Portfolio viewed ${views} time(s) on this device.`);

// Example: Track clicks on project items
document.addEventListener("click", event => {
    if (event.target.tagName === "A") {
        console.log(`Project clicked: ${event.target.textContent}`);
    }
});
