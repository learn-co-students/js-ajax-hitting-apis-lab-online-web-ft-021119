// your code here
let github = "https://api.github.com"


function getRepositories() {
  const username = document.querySelector('username').value
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayRepositories)
  req.open('GET', `${github}/users/${username}/repos`)
  req.send()
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  debugger
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
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
