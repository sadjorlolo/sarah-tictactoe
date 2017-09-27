'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./auth/api.js')
const ui = require('./auth/ui.js')

// Initial player value
let player = 'X'
// if player is X, switch to O, and vice versa
const togglePlayer = function () {
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
}

// when box clicked, push player value to the correct index in the array
const gameBoard = ['', '', '', '', '', '', '', '', '']
const pushToGameArray = function (player, index) {
  const currentPlayer = player
  gameBoard[index] = currentPlayer
  console.log('current array is', gameBoard)
}

// const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
//   [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

// const gameBoard = ["X", "X", "X", "O", "O", "X", "X", "O", "O"]

// map user entries to the winning coordinates
// works. but not efficient. fml
// const setEntriesToWinCoord = function () {
//   const mappedBoard = []
//   for (let i = 0; i < winningCombos.length; i++) {
//     const gameArrayCombos = winningCombos[i]
//       .map(index => gameBoard[index])
//     mappedBoard.push(gameArrayCombos)
//   }
//   console.log(mappedBoard)
// }

const checkForWin = function () {
  if (
    (gameBoard[1] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
    (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
    (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
    (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
    (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
  ) {
    alert('We have a winner!')
    $('.box').removeEventListener('click', setClickValue)
  }
}

// const allTheSame = mappedBoard[i].reduce((a, b) => (a === b) ? a : NaN)
// winningCombos.forEach(function (combo) {
//   const gameArrayCombos = combo.map(i => gameBoard[i])
//   console.log(gameArrayCombos)
//
//   const allTheSame = combo.reduce((a, b) => (a === b) ? a : NaN)
//   console.log(allTheSame)
//   return allTheSame
// })

// when a box on the game board is clicked, set value within box to "X" or "O"
const setClickValue = function () {
  // ... only if the box is empty.
  $('#message-box').text('')
  const index = $(this).attr('id')
  console.log(index)
  if ($(this).text() === '') {
    $(this).text(player)
    pushToGameArray(player, index)
    //  setEntriesToWinCoord()
    checkForWin()
    togglePlayer()
  } else {
    $('#message-box').text('That box already has a value. Choose another box.')
  }
  console.log(player)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = function () {
  $('.box').on('click', setClickValue)

  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
