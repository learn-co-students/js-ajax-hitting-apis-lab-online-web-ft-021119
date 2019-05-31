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
   const repos = JSON.parse(this.responseText)
   const repoList = `${repos.map(r =>
      `<li>
         https://github.com/${r.full_name} ||
         <a href="#" data-username=${r.owner.login} data-repository=${r.name} onClick=getCommits(this)>Get Commits</a> ||
         <a href="#" data-username=${r.owner.login} data-repository=${r.name} onClick=getBranches(this)>Get Branches</a>
      </li>`).join('')}`

   const repoDiv = document.querySelector('ul#repositories')
   repoDiv.innerHTML = repoList
}


// function getCommits(el) {
//   const name = el.dataset.repository
//   const username = el.dataset.username
//   const req = new XMLHttpRequest()
//   req.addEventListener('load', displayCommits)
//   req.open('GET', `${github}/repos/${username}/${name}/commits`)
//   debugger
//   req.send();
//   debugger
// }

function getCommits(repo){
  const username = repo.dataset.username
  const repoName = repo.dataset.repository
  const xhr = new XMLHttpRequest()
  req.addEventListener('load', displayCommits)
  req.open('GET', uri)
  req.send()
}

function displayCommits(el) {
  const commits = JSON.parse(this.responseText);
  const commitList = commits.map(commit => c
 `<li>
    ${c.commit.author.name} - AKA ${c.author.login} - ${c.commit.message}
  </li>`).join('')}`
detailsDiv.innerHTML = commitsList
    </li>`).join('')
  document.getElementById('repositories').innerHTML = repoList;
}
