// your code here
const githubAPI = `https://api.github.com`


const form = document.getElementsByTagName("form")
const userName = document.getElementById("username")
const repositories = document.getElementById('repositories')
const details = document.getElementById('details')


function getRepositories() {
  const request = new XMLHttpRequest();
  request.addEventListener('load', displayRepositories);
  request.open('GET', 'https://api.github.com/users/octocat/repos');
  request.send();
}

function getCommits(el) {
  const name = el.dataset.username;
  const repo = el.dataset.repository
  const request = new XMLHttpRequest();
  request.addEventListener('load', displayCommits);
  request.open('GET', `https://api.github.com/repos/${name}/${repo}/commits`);
  console.log(request)
  request.send();
}


function getBranches(el) {
  const name = el.dataset.username;
  const repo = el.dataset.repository
  const request = new XMLHttpRequest();
  request.addEventListener('load', displayBranches);
  request.open('GET', `https://api.github.com/repos/${name}/${repo}/branches`);
  request.send();
}


function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(r => '<li>' + 'https://github.com/'+
        r.full_name +
        ' - <a href="#" data-repo="' +
        r.full_name +
        '" onclick="getCommits(this)">Get Commits</a>' +  ' - <a href="#" data-repo="' +
          r.full_name + '" onclick="getBranches(this)">Get Branches</a>' + '</li>').join('')}</ul>`;
        repositories.innerHTML = repoList;
      }


function displayCommits() {
  const commits = JSON.parse(this.responseText);
  console.log(commits)
  const commitsList = `<ul>${commits
    .map(c => '<li>' +
        c.commit.author.name +
        c.author.login +
        c.commit.message + '</li>')
    .join('')}</ul>`;
  details.innerHTML = commitsList;
}

function displayBranches() {
  const branches = JSON.parse(this.responseText);
  console.log(branches)

  const branchesList = `<ul>${branches
    .map(b => '<li>' +
        b.name + '</li>')
    .join('')}</ul>`;
  details.innerHTML = branchesList;
}
