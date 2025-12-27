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
    // Visitor counter
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

    // Chronology builder
    const chronologyList = document.querySelector('.cronological-entries ul');
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
    const buildChronology = () => {
        if (!chronologyList) return;
        const posts = Array.from(document.querySelectorAll('section.post'));
        if (!posts.length) return;

        const monthMap = new Map(); // key: YYYY-MM => { label, post }
        posts.forEach((post) => {
            const dateAttr = post.getAttribute('data-date');
            if (!dateAttr) return;
            const date = new Date(dateAttr);
            if (isNaN(date.getTime())) return;
            const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            if (!monthMap.has(key)) {
                monthMap.set(key, { label: formatter.format(date), post });
            }
        });

        const sorted = Array.from(monthMap.entries())
            .sort((a, b) => (a[0] < b[0] ? 1 : -1));

        chronologyList.innerHTML = '';
        sorted.forEach(([monthKey, data]) => {
            const anchorId = `month-${monthKey}`;
            if (!data.post.id) {
                data.post.id = anchorId;
            }
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${anchorId}`;
            link.textContent = data.label;
            li.appendChild(link);
            chronologyList.appendChild(li);
        });
    };

    buildChronology();

    // Simple SPA-like loader for post detail pages into the main column
    const main = document.querySelector('.main');
    const listViewHTML = main ? main.innerHTML : '';

    const showList = (push = true) => {
        if (!main) return;
        main.innerHTML = listViewHTML;
        buildChronology();
        attachPostLinks();
        if (push) {
            history.pushState({ type: 'list' }, '', 'blog.html');
        }
    };

    const attachListLink = () => {
        if (!main) return;
        const backLink = main.querySelector('a[data-list]');
        if (backLink) {
            backLink.addEventListener('click', (e) => {
                e.preventDefault();
                showList();
            });
        }
    };

    const loadPost = async (url, push = true) => {
        if (!main) return;
        try {
            const res = await fetch(url);
            const html = await res.text();
            main.innerHTML = html;
            attachListLink();
            if (push) {
                history.pushState({ type: 'post', url }, '', url);
            }
        } catch (err) {
            console.error('Failed to load post', err);
        }
    };

    const attachPostLinks = () => {
        document.querySelectorAll('a[data-post]').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href) {
                    loadPost(href);
                }
            });
        });
    };

    attachPostLinks();
    history.replaceState({ type: 'list' }, '', window.location.pathname);

    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.type === 'post' && e.state.url) {
            loadPost(e.state.url, false);
        } else {
            showList(false);
        }
    });
});