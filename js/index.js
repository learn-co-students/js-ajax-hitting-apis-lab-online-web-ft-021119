// your code here
const githubAPI ='https://api.github.com'


function getRepositories() {
  const username = document.querySelector('input#username').value
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayRepositories)
  req.open('GET', `${githubAPI}/users/${username}/repos`)
  req.send()
}

// Add a link to each repository that calls a getCommits function on click and, when the request is complete, calls a displayCommits function that fills the details div with a list of commits for that repository.


function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  const repoList = repos.map(repo =>
    `<li>
        <a href='${repo.url}'>${repo.full_name}</a>
        <h3>
          <a href='${repo.commits_url}'
          data-repository='${repo.full_name}'
          data-username='${repo.owner.login}'
          onclick='getCommits(this)'>Get Commits
        </h3>
    </li>`).join('')
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repository
  const username = el.dataset.username
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayCommits)
  req.open('GET', `${github}/repos/${username}/${name}/commits`)
  debugger
  req.send();
  debugger
}

function displayCommits(el) {
  debugger
  const commits = JSON.parse(this.responseText);
  const commitList = commits.map(commit =>
    `<li>
        <h3><a href="${repo.url}">${repo.full_name}</a></h3>
        <h3><a href="${repo.commits_url}">Get Commits</h3>
    </li>`).join('')
  document.getElementById('repositories').innerHTML = repoList;
}
