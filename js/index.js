function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos
    .map(r => '<li>' + '/https://github.com/' + r.full_name +
    ' - <a href="#" data-repo="' + r.full_name+
    '" onclick="getCommits(this)">Get Commits</a>'+
    ' - <a href="#" data-repo="' + r.full_name+
    '" onclick="getBranches(this)">Get Branches</a>'+
    '</li>')
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const repo = el.dataset.repository
  const username = el.dataset.username;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', `https://api.github.com/repos/${username}/${repo}/commits`)
  req.send();
}

function displayCommits(){
  const details = JSON.parse(this.responseText);
  // author's Github name - detail.author.login
  // the author's full name - detail.commit.author.name
  // the commit message - detail.commit.message
  const detailsList = `<ul>${details
    .map(
      detail =>
        '<li><strong>' +
        detail.author.login +
        '</strong> - ' + detail.commit.author.name +
        detail.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = detailsList;
}

function getBranches(el){
  const repo = el.dataset.repository
  const username = el.dataset.username;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayBranches);
  req.open('GET', `https://api.github.com/repos/${username}/${repo}/branches`)
  req.send();
}

function displayBranches(){
  const details = JSON.parse(this.responseText);
  // branch name - detail.name
  const detailsList = `<ul>${details
    .map(
      detail =>
        '<li><strong>' +
        detail.name +
        '</strong> - ' +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = detailsList;
}
