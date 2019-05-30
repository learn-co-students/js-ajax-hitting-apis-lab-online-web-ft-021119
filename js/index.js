// your code here
const githubAPI = "https://api.github.com"

// attach the getUser function to a button click
$('button').on('click', getUsername)

function getUsername(){
	const username = $('#username').val()
	ajaxDone(username)
}

// get all user data including repo name etc
// lab requires function called getRepositories()
function getRepositories{
  ajaxDone(username)
}

function ajaxDone(username) {
  $.ajax({
    url: `${githubAPI}/users/${username}`
    type: 'GET'
  }).done(displayRepositories)
}

function displayRepositories(data) {
  $('#full_name').html(data.full_name)
  $('#url').html(data.url)
}

// function getCommits() {
//   getRepositories().
// }
