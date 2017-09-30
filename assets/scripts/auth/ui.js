'use strict'

const store = require('../store.js')
const showhide = require('../show-hide-ui.js')

const signUpSuccess = function (data) {
  $('.auth-msg-box').text('Sign up successful!')
  showhide.clearSignUp()
}

const signUpFailure = function () {
  $('.auth-msg-box').text('Sign up failed.')
  showhide.clearSignUp()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.auth-msg-box').text('Signed in successfully!')

  showhide.clearSignIn()
  showhide.signInShowHide()
}

const signInFailure = function () {
  $('.auth-msg-box').text('Sign in failed.')
  showhide.clearSignIn()
}

const changePasswordSuccess = function (data) {
  $('.auth-msg-box').text('Changed password successfully!') // we don't get data back from a change password (204 no content)
  showhide.clearPassword()
}

const changePasswordFailure = function () {
  $('.auth-msg-box').text('Change Password failed.')
  showhide.clearPassword()
}

const signOutSuccess = function (data) {
  $('.auth-msg-box').text('Signed out successfully!') // we don't get data back from a change password (204 no content)
  store.user = null
  showhide.signOutShowHide()
  showhide.signOutClearMessage()
}

const signOutFailure = function () {
  $('.auth-msg-box').text('Sign out failed.')
}

const getGamesSuccess = function (data) {
  $('.stats-box').text('You have played a total of ' + data.games.length + ' games.')
}

const getGamesError = function () {
  $('.stats-box').text('Sorry, game retrieval did not work.')
}

const createGameSuccess = function (data) {
  store.game = data.game
  $('.game-board').show()
  $('.message-box').text('New game! Time to play!')
}

const createGameError = function () {
  $('.message-box').text('Sorry, game creation did not work.')
}

const updateGameSuccess = function (data) {
  $('update-msg').text('Move saved!')
}

const updateGameError = function () {
  $('.update-msg').text('Sorry, game move did not save.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  getGamesSuccess,
  getGamesError,
  createGameSuccess,
  createGameError,
  updateGameSuccess,
  updateGameError
}
