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
// End game if time runs out or all questions are answered
// Function to display the next question
// Function to check the user's answer
// Function to end the game
// Function to save the highscore
// Event listener for starting the quiz
