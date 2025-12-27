// Camouflaged password check
(function(){
    const _key = [2,5,12,9,15,7,3]; // Random array to obscure password logic
    const _secret = "".split("").map(c => c.charCodeAt(0)); // store password char codes

    window.checkPwd = function() {
        const input = document.getElementById("passwordInput").value;
        const code = input.split("").map(c => c.charCodeAt(0));
        let match = true;
        for(let i=0;i<_secret.length;i++){
            if(code[i] !== _secret[i]) { match=false; break; }
        }
        if (match && code.length === _secret.length) {
            // On successful match, navigate to the blog page
            window.location.href = 'blog.html';
        } else {
            document.getElementById("errorMsg").style.display = "block";
        }
    }
})();

// Simple visitor counter (client-side)
document.addEventListener('DOMContentLoaded', () => {
    try {
        const key = 'homeVisitorCount';
        const base = 0; // fun baseline to feel 2005-counter-like
        let count = parseInt(localStorage.getItem(key) || String(base), 10);
        count = isNaN(count) ? base : count + 1;
        localStorage.setItem(key, String(count));
        const el = document.getElementById('visitorCount');
        if (el) {
            el.textContent = count.toLocaleString();
        }
    } catch (e) {
        const el = document.getElementById('visitorCount');
        if (el) el.textContent = '???';
    }
});