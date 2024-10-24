const defaultUsername = "daviidr3"; 

window.onload = function() {
  fetchRepositories(defaultUsername);
};


function fetchRepositories(username = defaultUsername) {
  const repoGallery = document.getElementById("repo-gallery");
  repoGallery.innerHTML = ''; 

  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        displayRepo(repo, username);
      });
    })
    .catch(error => {
      console.error("Error fetching repositories:", error);
    });
}

function displayRepo(repo, username) {
  const repoGallery = document.getElementById("repo-gallery");


  const repoCard = document.createElement("div");
  repoCard.className = "repo-cards";


  const repoName = repo.name;
  const repoDescription = repo.description || "No description";
  const creationDate = new Date(repo.created_at).toLocaleDateString();
  const updateDate = new Date(repo.updated_at).toLocaleDateString();
  const repoUrl = repo.html_url;
  const watchersCount = repo.watchers_count;


  fetch(repo.languages_url)
    .then(response => response.json())
    .then(languages => {
      const languageList = Object.keys(languages).join(", ");

      
      repoCard.innerHTML = `
        <div>
          <i class="fab fa-github fa-2x"></i>
          <a href="${repoUrl}" target="_blank">${repoName}</a>
        </div>
        <p>${repoDescription}</p>
        <p><strong>Updated:</strong> ${updateDate}</p>
        <p><strong>Created:</strong> ${creationDate}</p>
        <p class="repo-languages"><strong>Languages:</strong> ${languageList}</p>
        <div class="repo-stats">
          <span><i class="fas fa-star"></i> ${watchersCount} Watchers</span>
        </div>
      `;

     
      repoGallery.appendChild(repoCard);
    });
}
