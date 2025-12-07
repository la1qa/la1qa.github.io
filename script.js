const username = "la1qa";

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        const list = document.getElementById("project-list");

        repos.forEach(repo => {
            const item = document.createElement("li");
            item.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            list.appendChild(item);
        });
    })
    .catch(error => {
        console.error("Error loading repositories:", error);
    });
