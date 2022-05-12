'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number
}
const displayScore = function (score) {
  document.querySelector('.score').textContent = score
}
const colorBody = function (color) {
  document.querySelector('body').style.backgroundColor = color
}
const numWidth = function (width) {
  document.querySelector('.number').style.width = width
}
displayNumber('?')

// Starting the game
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number')

    // When player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber)
    displayMessage('🎉 Correct Number!')
    colorBody('#60b347')
    numWidth('30rem')

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low')
      score--
      displayScore(score)
    } else {
      displayMessage('😢 You Lose')
      displayScore(0)
    }
  }
})

// Restarting the game from scratch
document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  displayScore(score)
  displayNumber('?')
  document.querySelector('.guess').value = ''
  colorBody('#222')
  numWidth('15rem')
})
