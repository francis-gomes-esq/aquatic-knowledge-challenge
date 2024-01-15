// Function to initialize and display highscores
function initHighscores() {
	var highscores = JSON.parse(localStorage.getItem('highscores')) || []
	var highscoresList = document.getElementById('highscores')

	highscoresList.innerHTML = ''

	// Display each highscore as a list item
	highscores.forEach(function (score) {
		var li = document.createElement('li')
		li.textContent = score.initials + ' - ' + score.score
		highscoresList.appendChild(li)
	})
}

document.addEventListener('DOMContentLoaded', function () {
	// Call the function when the highscore page loads
	initHighscores()

	// Event Listener for clearing highscores
	document.getElementById('clear').addEventListener('click', function () {
		// Clear highscores in localStorage
		localStorage.removeItem('highscores')

		// Reload the page to reflect the changes
		location.reload()
	})
})
