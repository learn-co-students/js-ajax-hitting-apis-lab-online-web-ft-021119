function getRepositories() {
   const username = document.querySelector('input').value;
   const req = new XMLHttpRequest();
   req.addEventListener('load', displayRepositories);
   req.open('GET', `https://api.github.com/users/${username}/repos`);
   req.send();
}

function displayRepositories() {
   const repos = JSON.parse(this.responseText);
   const repoList = `${repos.map(repo =>
      `<li>
         https://github.com/${repo.full_name}
         <a href="${repo.html_url}" data-username=${repo.owner.login} data-repository=${repo.name} onClick=getCommits(this)>Get Commits</a>

         <a href="${repo.html_url}" data-username=${repo.owner.login} data-repository=${repo.name} onClick=getBranches(this)>Get Branches</a>
      </li>`).join('')}`

   document.querySelector('#repositories').innerHTML = repoList
}

function getCommits(repo) {
   const username = repo.dataset.username;
   const name = repo.dataset.repository;
   const req = new XMLHttpRequest();
   req.addEventListener('load', displayCommits);
   req.open('GET', `https://api.github.com/repos/${username}/${name}/commits`);
   req.send();
}

function displayCommits() {
   const commits = JSON.parse(this.responseText)
   const commitsList = `${commits.map(commit =>
      `<li>
         ${commit.commit.author.name} - ${commit.author.login} - ${commit.commit.message}
      </li>`).join('')}`
   document.querySelector('#details').innerHTML = commitsList
}

function getBranches(repo){
  const username = repo.dataset.username
  const name = repo.dataset.repository
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayBranches)
  req.open('GET', `https://api.github.com/repos/${username}/${name}/branches`)
  req.send()
}

function displayBranches() {
   const branches = JSON.parse(this.responseText)
   const branchesList = `${branches.map(branch =>
      `<li>
         ${branch.name}
      </li>`).join('')}`
   document.querySelector('#details').innerHTML = branchesList
}
