const githubAPI = "https://api.github.com"
const detailsDiv = document.querySelector('#details')

function getRepositories() {
   const username = document.querySelector('input#username').value
   const req = new XMLHttpRequest()
   req.addEventListener('load', displayRepositories)
   req.open('GET', `${githubAPI}/users/${username}/repos`)
   req.send()
}

function displayRepositories() {
   var repos = JSON.parse(this.responseText)
   const repoList = `${repos.map(r => 
      `<li> 
         https://github.com/${r.full_name} || 
         <a href="#" data-username=${r.owner.login} data-repository=${r.name} onClick=getCommits(this)>Get Commits</a> || 
         <a href="#" data-username=${r.owner.login} data-repository=${r.name} onClick=getBranches(this)>Get Branches</a>
      </li>`).join('')}`

   const repoDiv = document.querySelector('ul#repositories')
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
   const commitsList = `${commits.map(com =>
      `<li>
         ${com.commit.author.name} - AKA ${com.author.login} - ${com.commit.message}
      </li>`).join('')}`
   detailsDiv.innerHTML = commitsList
}

function getBranches(repo) {
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