// Function to initialize and display highscores
function initHighscores() {
	var highscores = JSON.parse(localStorage.getItem('highscores')) || []
	var highscoreList = document.getElementById('highscores ')

	highscoreList.innerHTML = ''

	highscores.forEach(function () {
		var li = document.createElement('li')
		li.textContent = score.initials + ' - ' + score.score
		highscoreList.appendChild(li)
	})
}
