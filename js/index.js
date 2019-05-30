// your code here
const githubAPI = "https://api.github.com"


function getRepositories() {
  const username = document.querySelector('input#username').value
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayRepositories)
  req.open('GET', `${githubAPI}/users/${username}/repos`)
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

function displayRepositories(data) {
  $('#full_name').html(data.full_name)
  $('#url').html(data.url)
}

// function getCommits() {
//   getRepositories().
// }
