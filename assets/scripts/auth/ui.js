'use strict'

const store = require('../store.js')
const showhide = require('../show-hide-ui.js')

const signUpSuccess = function (data) {
  $('.auth-msg-box').text('Sign up successful!')
  showhide.clearSignUp()
}

const signUpFailure = function () {
  $('.auth-msg-box').text('Sign up failed. Please try again.')
  showhide.clearSignUp()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.sign-in-as').text('You are signed in as ' + store.user.email + '!')

  showhide.clearSignIn()
  showhide.signInShowHide()
}

const signInFailure = function () {
  $('.auth-msg-box').text('Sign in failed. Please try again.')
  showhide.clearSignIn()
}

const changePasswordSuccess = function (data) {
  $('.pswd-msg-box').text('Changed password successfully!')
  showhide.clearPassword()
}

const changePasswordFailure = function () {
  $('.pswd-msg-box').text('Change Password failed.')
  showhide.clearPassword()
}

const signOutSuccess = function (data) {
  $('.auth-msg-box').text('Signed out successfully!')
  store.user = null
  showhide.signOutShowHide()
  showhide.signOutClearMessage()
}

const signOutFailure = function () {
  $('.auth-msg-box').text('Sign out failed.')
}

const getGamesSuccess = function (data) {
  $('.stats-box').text('You have played a total of ' + data.games.length + ' games.')
  console.log('getgame data is ', data)
}

const getGamesError = function () {
  $('.stats-box').text('Sorry, game retrieval did not work.')
}

const createGameSuccess = function (data) {
  store.game = data.game
  console.log('creategamesuccess data is', data)
  $('.game-board').show()
  $('.message-box').text('New game! Time to play!')
}

const createGameError = function () {
  $('.message-box').text('Sorry, game creation did not work.')
}

const updateGameSuccess = function (data) {
  console.log('data is', data)
  $('.update-msg').text('Move saved!')
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
