'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./auth/api.js')
const ui = require('./auth/ui.js')
const showhide = require('./show-hide-ui.js')

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX

const togglePlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }
}

let gameBoard = []

const onCreateGame = function (event) {
  $('.box').on('click', setClickValue)
  $('.box').on('click', onUpdateGame)
  gameBoard = ['', '', '', '', '', '', '', '', '']
  console.log('oncreate box value is', $('.box').text())
  $('.box').text('')
  console.log('oncreate box value post clear', $('.box').text())
  console.log('gameboard post clear is', gameBoard)

  $('.declare-winner').text('')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('oncreatedata data is', data)
  api.create(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameError)
  currentPlayer = playerX
  $('.create-game').hide()
}

const setClickValue = function () {
  $('.message-box').text('')
  const index = $(this).attr('id')
  if ($(this).text() === '') {
    $(this).text(currentPlayer)
    pushToGameArray(currentPlayer, index)
    checkForWin()
  } else {
    $('.message-box').text('That box already has a value. Choose another box.')
  }
}

const pushToGameArray = function (player, index) {
  const thisPlayer = player
  gameBoard[index] = thisPlayer
  console.log('pushtogamearray data is', gameBoard)
}

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
    $('.declare-winner').text('Player ' + currentPlayer + ' is the winner!')
    $('.box').off('click')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('.create-game').show()
  } else if (draw) {
    $('.declare-winner').text('Game is a draw! No one wins!')
    $('.box').off('click')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('.create-game').show()
  } else {
    togglePlayer()
  }
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signup(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signin(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changepw(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signout()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').text('')
}

const onGetGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesError)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const index = $(this).attr('id')
  const value = $(this).text()
  console.log('value is', value)
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      }
    }
  }
  api.update(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameError)
  console.log('onupdategame data is ', data)
}

const addHandlers = function () {
  $('.box').text('')
  $('.create-game').on('click', onCreateGame)
  // $('.box').on('click', setClickValue)
  // $('.box').on('click', onUpdateGame)

  $('.sign-up').on('submit', onSignUp)
  $('.sign-in').on('submit', onSignIn)
  $('.sign-out').on('submit', onSignOut)
  $('.change-pswd').on('submit', onChangePassword)

  showhide.initialLoadHide()

  $('.get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
