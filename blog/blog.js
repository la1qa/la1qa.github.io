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
    const POSTS_BASE_PATH = '/blog/posts/';

    const chronologyList = document.querySelector('.cronological-entries ul');
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
    
    // Function to fetch all posts
    const fetchAllPosts = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/la1qa/la1qa.github.io/contents/blog/posts');
            if (!response.ok) return [];
            
            const files = await response.json();
            const postFiles = files
                .filter(file => file.name.endsWith('.html'))
                .map(file => file.name);
            
            if (!postFiles.length) return [];

            const posts = [];
            
            for (const file of postFiles) {
                try {
                    const response = await fetch(`${POSTS_BASE_PATH}${file}`);
                    if (!response.ok) continue;
                    
                    const html = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    
                    const article = doc.querySelector('[data-date]');
                    if (!article) continue;
                    
                    const dateAttr = article.getAttribute('data-date');
                    const title = article.querySelector('h2')?.textContent || file;
                    
                    posts.push({
                        file: file,
                        date: new Date(dateAttr),
                        dateStr: dateAttr,
                        title: title
                    });
                } catch (e) {
                    console.error(`Failed to load post: ${file}`, e);
                }
            }

            return posts;
        } catch (e) {
            console.error('Failed to fetch posts:', e);
            return [];
        }
    };

    // Build Latest Posts section
    const latestList = document.querySelector('.latest-posts');
    const MAX_LATEST = 5;

    const buildLatestPosts = async () => {
        if (!latestList) return;

        try {
            const res = await fetch(
                'https://api.github.com/repos/la1qa/la1qa.github.io/contents/blog/posts'
            );
            if (!res.ok) return;

            const files = await res.json();

            const htmlFiles = files
                .filter(f => f.type === 'file' && f.name.endsWith('.html'));

            const posts = [];

            for (const file of htmlFiles) {
                try {
                    const postRes = await fetch(`${POSTS_BASE_PATH}${file.name}`);
                    if (!postRes.ok) continue;

                    const html = await postRes.text();
                    const doc = new DOMParser().parseFromString(html, 'text/html');

                    const article = doc.querySelector('article.post');
                    if (!article) return;

                    const date = new Date(article.dataset.date);
                    if (isNaN(date)) return;

                    const title =
                        article.querySelector('h2')?.textContent?.trim() || file;

                    const summary =
                        article.querySelector('[data-summary]')?.textContent?.trim() || '';

                    posts.push({
                        file: file.name,
                        title,
                        date,
                        summary
                    });
                } catch {}
            }

            posts.sort((a, b) => b.date - a.date);

            latestList.innerHTML = '';

            posts.slice(0, 5).forEach(post => {
                const li = document.createElement('li');

                const a = document.createElement('a');
                a.href = `${POSTS_BASE_PATH}${post.file}`;
                a.textContent = post.title;
                a.setAttribute('data-post', '');

                const p = document.createElement('p');
                p.textContent = post.summary;

                li.appendChild(a);
                if (post.summary) li.appendChild(p);
                latestList.appendChild(li);
            });
        } catch (err) {
            console.error('Latest posts failed:', err);
        }
    };
    
    const buildChronology = async () => {
        if (!chronologyList) return;

        try {
            // Fetch list of files from GitHub API
            const response = await fetch('https://api.github.com/repos/la1qa/la1qa.github.io/contents/blog/posts');
            if (!response.ok) return;
            
            const files = await response.json();
            
            // Filter for HTML files only
            const postFiles = files
                .filter(file => file.name.endsWith('.html'))
                .map(file => file.name);
            
            if (!postFiles.length) return;

            const posts = [];
            
            // Fetch and parse each post file to extract date and title
            for (const file of postFiles) {
                try {
                    const response = await fetch(`${POSTS_BASE_PATH}${file}`);
                    if (!response.ok) continue;
                    
                    const html = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    
                    // Look for article with data-date attribute
                    const article = doc.querySelector('[data-date]');
                    if (!article) continue;
                    
                    const dateAttr = article.getAttribute('data-date');
                    const title = article.querySelector('h2')?.textContent || file;
                    
                    posts.push({
                        file: file,
                        date: dateAttr,
                        title: title
                    });
                } catch (e) {
                    console.error(`Failed to load post: ${file}`, e);
                }
            }

            if (!posts.length) return;

            const monthMap = new Map(); // key: YYYY-MM => { label, files }
            posts.forEach((post) => {
                const date = new Date(post.date);
                if (isNaN(date.getTime())) return;
                const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                if (!monthMap.has(key)) {
                    monthMap.set(key, { 
                        label: formatter.format(date), 
                        files: [] 
                    });
                }
                monthMap.get(key).files.push(post);
            });

            const sorted = Array.from(monthMap.entries())
                .sort((a, b) => (a[0] < b[0] ? 1 : -1));

            chronologyList.innerHTML = '';

            sorted.forEach(([_, data]) => {
                const monthLi = document.createElement('li');

                // Month toggle button
                const monthBtn = document.createElement('button');
                monthBtn.type = 'button';
                monthBtn.textContent = `${data.label} (${data.files.length})`;
                monthBtn.style.background = 'none';
                monthBtn.style.border = 'none';
                monthBtn.style.padding = '0';
                monthBtn.style.cursor = 'pointer';

                // Posts list (collapsed by default)
                const postsUl = document.createElement('ul');
                postsUl.hidden = true;

                // Toggle behavior
                monthBtn.addEventListener('click', () => {
                    postsUl.hidden = !postsUl.hidden;
                });

                // Individual post links
                data.files.forEach(post => {
                    const postLi = document.createElement('li');
                    const postLink = document.createElement('a');

                    postLink.href = `${POSTS_BASE_PATH}${post.file}`;
                    postLink.textContent = post.title;

                    postLi.appendChild(postLink);
                    postsUl.appendChild(postLi);
                });

                monthLi.appendChild(monthBtn);
                monthLi.appendChild(postsUl);
                chronologyList.appendChild(monthLi);
            });

        } catch (e) {
            console.error('Failed to build chronology:', e);
        }
    };

    buildChronology();
    buildLatestPosts().then(() => {
        attachPostLinks();
    });

    // Simple SPA-like loader for post detail pages into the main column
    const main = document.querySelector('.main');
    const listViewHTML = main ? main.innerHTML : '';

    const blogHome = '/blog/blog.html';

    const showList = (push = true) => {
        if (!main) return;
        main.innerHTML = listViewHTML;
        buildChronology();
        buildLatestPosts().then(() => {
            attachPostLinks();
            attachListLink();
        });
        if (push) {
            history.pushState({ type: 'list' }, '', blogHome);
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