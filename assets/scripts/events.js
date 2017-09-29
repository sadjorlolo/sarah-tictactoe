'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./auth/api.js')
const ui = require('./auth/ui.js')

// Initial player value
const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX

// if player is X, switch to O, and vice versa
const togglePlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }
}

// when box clicked, push player value to the correct index in the array
let gameBoard = []
const pushToGameArray = function (player, index) {
  const thisPlayer = player
  gameBoard[index] = thisPlayer
  // console.log('current array is', gameBoard)
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
  const draw = gameBoard.every((box) => box !== '')
  if (
    (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
    (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
    (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
    (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
    (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
    (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) ||
    (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
    (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
  ) {
    $('#declare-winner').text('Player ' + currentPlayer + ' is the winner!')
    $('.box').off('click')
  } else if (draw) {
    $('#declare-winner').text('Game is a draw! No one wins!')
    $('.box').off('click')
  } else {
    togglePlayer()
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
  // console.log(index)
  if ($(this).text() === '') {
    $(this).text(currentPlayer)
    pushToGameArray(currentPlayer, index)
    //  setEntriesToWinCoord()
    checkForWin()
    // togglePlayer()
  } else {
    $('#message-box').text('That box already has a value. Choose another box.')
  }
  // console.log(currentPlayer)
}

// DO NOT TOUCH ANY OF THIS. IT WORKS FOR NOW! //

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  api.signup(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  api.signin(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  api.changepw(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signout()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const hideGame = function () {
  $('.game-board').hide()
}

const hideChangePswd = function () {
  $('#change-pswd').hide()
}

const hideSignOut = function () {
  $('#sign-out').hide()
}

// API GAME LOGIC ATTEMPTS BEGIN HERE! //

const onGetGames = function (event) {
  // console.log('this button can be clicked')
  event.preventDefault()
  api.index()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesError)
}

const onCreateGame = function (event) {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  event.preventDefault()
  const data = getFormFields(event.target)
  // const game = data.games
  // console.log('game is', game)
  // if (data.book.id.length !== 0) {
  api.create(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameError)
  // console.log('gameboard after createGame before loop is', gameBoard)
  currentPlayer = playerX
  $('.box').text('')
  $('.box').on('click', setClickValue)
}

// const onGetAGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.games
//
//   if (game.id.length !== 0) {
//     api.show(game.id)
//       .then(ui.getAGameSuccess)
//       .catch(ui.getAGameError)
//   } else {
//     console.log('Please provide a game id!')
//   }
// }

const onUpdateGame = function (event) {
  event.preventDefault()
  const index = $(this).attr('id')
  const value = $(this).text()
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      }
    }
  }
  // console.log(data)
  // console.log(event.currentTarget)
  api.update(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameError)
}

const addHandlers = function () {
  $('.box').text('')
  $('.box').on('click', onUpdateGame)

  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-pswd').on('submit', onChangePassword)
  $(window).ready(hideGame)
  $(window).ready(hideChangePswd)
  $(window).ready(hideSignOut)

  $('#get-games').hide()
  $('#get-games').on('click', onGetGames)
  $('#create-game').on('click', onCreateGame)
  $('#create-game').hide()

  // $('#get-a-game').on('click', onGetAGame)
}

module.exports = {
  addHandlers
}
