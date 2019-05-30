// your code here
const githubAPI = "https://api.github.com"


function getRepositories() {
  const username = document.querySelector('input#username').value
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayRepositories)
  req.open('GET', `${githubAPI}/users/${username}/repos`)
  req.send()
}

// Add a link to each repository that calls a getCommits function on click and, when the request is complete, calls a displayCommits function that fills the details div with a list of commits for that repository.


function displayRepositories() {
  debugger
  const repos = JSON.parse(this.responseText);
  const repoList = repos.map(repo =>
    `<li>
        <h3><a href="${repo.url}">${repo.full_name}</a></h3>
        <h3><a href="${repo.commits_url}">Get Commits</h3>
    </li>`).join('')
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  debugger
  const name = repo.dataset.username
  const repoName = repo.dataset.repository
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayCommits)
  req.open('GET', `${github}/repos/${username}/${repoName}/commits`)
  req.send();
}

function displayCommits(this) {
  debugger
  const commits = JSON.parse(this.responseText);
  const commitList = commits.map(commit =>
    `<li>
        <h3><a href="${repo.url}">${repo.full_name}</a></h3>
        <h3><a href="${repo.commits_url}">Get Commits</h3>
    </li>`).join('')
  document.getElementById('repositories').innerHTML = repoList;
}
