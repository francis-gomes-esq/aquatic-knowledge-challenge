// HTML elements and variables initialization
var timerElement = document.getElementById('time')
var startButton = document.getElementById('start')
var questionsContainer = document.getElementById('questions')
var endScreen = document.getElementById('end-screen')
var initialsInput = document.getElementById('initials')
var submitButton = document.getElementById('submit')

// Audio elements for correct and incorrect answer sounds
var correctSound = new Audio('./assets/sfx/correct.wav')
var incorrectSound = new Audio('./assets/sfx/incorrect.wav')

// Timer and scoring variables
var timer
var timeLeft = 80 // Set your desired initial time
var currentQuestionIndex = 0
var userScore = 0

// Function to start the quiz
function startQuiz() {
	// Timer logic
	timer = setInterval(function () {
		timeLeft--
		timerElement.textContent = timeLeft

		// End game if time runs out or all questions are answered
		if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
			endGame()
		}
	}, 1000)

	// Display the first question
	showNextQuestion()
}

// Function to display the next question
function showNextQuestion() {
	// Fetch the current question
	var currentQuestion = questions[currentQuestionIndex]

	// Display questions annd choices
	document.getElementById('question-title').textContent =
		currentQuestion.question
	var choicesContainer = document.getElementById('choices')
	choicesContainer.innerHTML = ''
	currentQuestion.options.forEach(function (option, index) {
		var button = document.createElement('button')
		button.textContent = option
		button.addEventListener('click', function () {
			// Check the user's answer
			checkAnswer(option, currentQuestion.correctAnswer)
		})
		choicesContainer.appendChild(button)
	})

	// Show the questions container and hide the start button
	questionsContainer.classList.remove('hide')
	startButton.classList.add('hide')
}

// Function to check the user's answer
function checkAnswer(selectedAnswer, correctAnswer) {
	// Update score and play sound based on the correctness of the abswer
	if (selectedAnswer === correctAnswer) {
		userScore += 10
		correctSound.play()
	} else {
		timeLeft - +10
		incorrectSound.play()
	}

	// Move to the next question
	currentQuestionIndex++

	// Check if all questions are answered
	if (currentQuestionIndex === questions.length) {
		endGame()
	} else {
		//Display the net question
		showNextQuestion()
	}
}
// Function to end the game
function endGame() {
	// Stop the timer
	clearInterval(timer)

	questionsContainer.classList.add('hide')
	endScreen.classList.remove('hide')

	// Display the final score
	document.getElementById('final-score').textContent = userScore

	// Event listener for saving high score
	submitButton.addEventListener('click', saveHighscore)
}

// Function to save the highscore
function saveHighscore() {
	var initials = initialsInput.value.trim()

	// Check if initials are provided
	if (initials !== '') {
		// Retrieve and update highscores
		var highscores = JSON.parse(localStorage.getItem('highscores')) || []
		var newScore = {initials: initials, score: userScore}
		highscores.push(newScore)

		// Sort highscores
		highscores.sort(function (a, b) {
			return b.score - a.score
		})

		// Save highscores to local storage
		localStorage.setItem('highscores', JSON.stringify(highscores))

		// Redirect to the highscores page
		window.location.href = 'highscores.html'
	}
}
// Event listener for starting the quiz
startButton.addEventListener('click', startQuiz)
