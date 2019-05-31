const githubAPI = "https://api.github.com"
const detailsDiv = document.querySelector('#details')

// this i understood
function getRepositories() {
   const username = document.querySelector('input#username').value
   const req = new XMLHttpRequest()
   req.addEventListener('load', displayRepositories)
   req.open('GET', `${githubAPI}/users/${username}/repos`)
   req.send()
}


// this creates a link whose sole purpose is to call a javascript function the function will need a variable data-username and data-repository, onclick will launch the function called 'get commits'
// <a href="javascript:void(0)" data-username=${r.owner.login} data-repository=${r.name} onClick=getCommits(this)>Get Commits</a>

function displayRepositories() {
   const repos = JSON.parse(this.responseText)
   const repoList = `${repos.map(r =>
      `<li>
         https://github.com/${r.full_name} *
         <a href="javascript:void(0)" data-username=${r.owner.login} data-repository=${r.name} onClick=getCommits(this)>Get Commits</a> *
         <a href="javascript:void(0)" data-username=${r.owner.login} data-repository=${r.name} onClick=getBranches(this)>Get Branches</a>
      </li>`).join('')}`

   const repoDiv = document.querySelector('#repositories')
   repoDiv.innerHTML = repoList
}

function getCommits(repo) {
   const username = repo.dataset.username
   const repoName = repo.dataset.repository
   const req = new XMLHttpRequest()
   req.addEventListener('load', displayCommits)
   req.open('GET', `${githubAPI}/repos/${username}/${repoName}/commits`)
   req.send()
}

function displayCommits() {
   const commits = JSON.parse(this.responseText)
   debugger
   const commitsList = `${commits.map(c =>
      `<li>
         ${c.commit.author.name} - AKA ${c.author.login} - ${c.commit.message}
      </li>`).join('')}`
   detailsDiv.innerHTML = commitsList
}

function getBranches(repo){
  const username = repo.dataset.username
  const repoName = repo.dataset.repository
  const req = new XMLHttpRequest()
  req.addEventListener('load', displayBranches)
  req.open('GET', `${githubAPI}/repos/${username}/${repoName}/branches`)
  req.send()
}

function displayBranches() {
   const branches = JSON.parse(this.responseText)
   const branchesList = `${branches.map(b =>
      `<li>
         ${b.name}
      </li>`).join('')}`
   detailsDiv.innerHTML = branchesList
}
