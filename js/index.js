
const url = "https://api.github.com";

function getRepositories(){
	const userName = document.getElementById('username').value;
	const req = new XMLHttpRequest();
	
	req.addEventListener('load', displayRepositories);
	req.open('GET', `${url}/users/${userName}/repos`);
	req.send();
}
function displayRepositories(){
 var repos = JSON.parse(this.responseText);

 console.log(repos);

 const repoList = `<ul>${repos.map(r =>
  `<li> Repository name: - <a href="#" data-repository="' +${r.html_url} + '"  onclick="displayCommits(this)">${r.name}</a>, Owner:${r.owner.login}, ' - <a href="#" data-myrepo="${r.name}" data-username="'${r.owner.login}'" onclick="getCommits(this)">Get Commits</a>
        - <a href="#" data-respository="${r.name}" data-username="'${r.owner.login}'" onclick="getBranches(this)">Get Branches</a></li>`).join('')}</ul>`;

 document.getElementById('repositories').innerHTML = repoList;
}


function getCommits(el) {

   // el = { dataset: { repository: 'Spoon-Knife', username: 'octocat' } }
  const userName = el.dataset.username;
  const userRepo = el.dataset.repository;

 
 console.log(userName);
  const req = new XMLHttpRequest();

  req.addEventListener('load', displayCommits);
  req.open('GET', `${url}/repos/${userName}/${userRepo}/commits`);
  req.send();
  //https://api.github.com/repos/octocat/Spoon-Knife/commits
}
 function displayCommits(){
 	const commits = JSON.parse(this.responseText)
 
 const allCommits = commits.map(c => {
 const gitName = c.author.login;
 const authorName = c.commit.author.name;
 const message = c.commit.message;

 return (
 	`<li> Author Name: ${authorName}; GitHub Username:${gitName} => Message:${message}</li>`);

 // debugger;
 }).join('');
 document.getElementById('details').innerHTML = allCommits;



 }


function getBranches(el){

const userName = el.dataset.username;
  const userRepo = el.dataset.repository;

  const req = new XMLHttpRequest();

   req.addEventListener('load', displayBranches);
  req.open('GET', `${url}/repos/${userName}/${userRepo}/branches`);
  req.send();



}

function displayBranches(){


const branchesList = JSON.parse(this.responseText)
 const list = branchesList.map(b => { 
 	return b.name;

 })
 document.getElementById('details').innerHTML = list;
}
// your code here
