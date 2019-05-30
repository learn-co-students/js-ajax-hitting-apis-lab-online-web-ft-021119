// your code here
let github = "https://api.github.com"


function getRepositories() {
  const userName = document.querySelector('input#username').value
  let req = new XMLHttpRequest()
  req.addEventListener('load', displayRepositories)
  req.open('GET', `${github}/users/${username}/repos`)
  req.send();
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const repoList = repos.map(r => r.name + `https//www.github.com/${username}/${full_name}`).join('')

  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(repo) {
  const name = repo.dataset.username
  const repoName = repo.dataset.repository
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayCommits)
  req.open('GET', `${github}/repos/${username}/${repoName}/commits`)
  req.send();
}
`${github}/users/${username}/repos`

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList =
  `<ul>
  ${commits.map(commit =>
    '<li><strong>' +
    commit.author.login +
    '</strong> - ' +
    commit.author.name +
    ' - ' +
    commit.commit.message +
    '</li>'
    )
    .join('')}</ul>`
  document.getElementById('details').innerHTML = commitsList;
}
