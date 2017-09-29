'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#auth-msg-box').text('Sign up successful!')
  // console.log(data)
  // console.log('You/ve signed up successfully!')
  $('#signup_email').val('')
  $('#signup_pswd').val('')
  $('#signup_conf').val('')
}

const signUpFailure = function () {
  // console.error(error)
  // console.log('Womp womp! Sign up failed!')
  $('#auth-msg-box').text('Sign up failed.')
  $('#signup_email').val('')
  $('#signup_pswd').val('')
  $('#signup_conf').val('')
}

const signInSuccess = function (data) {
  store.user = data.user
  // console.log(data)
  // console.log(store.user)
  // console.log('You/ve signed in successfully!')
  $('#get-games').show()
  $('#auth-msg-box').text('Signed in successfully!')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-pswd').show()
  $('#sign-out').show()
  $('#create-game').show()
  // console.log(store)
  // console.log(store.user)
  $('#signin_email').val('')
  $('#signin_pswd').val('')
}

const signInFailure = function () {
  // console.error(error)
  // console.log('Womp womp! Sign in failed!')
  $('#auth-msg-box').text('Sign in failed.')
  $('#signin_email').val('')
  $('#signin_pswd').val('')
}

const changePasswordSuccess = function (data) {
  // console.log(data)
  // console.log('Changed password successfully!')
  $('#auth-msg-box').text('Changed password successfully!') // we don't get data back from a change password (204 no content)
  $('#old_pswd').val('')
  $('#new_pswd').val('')
}

const changePasswordFailure = function () {
  // console.log('No bueno. Please try again.')
  // console.error(error)
  $('#auth-msg-box').text('Change Password failed.')
  $('#pswd_old').val('')
  $('#pswd_new').val('')
}

const signOutSuccess = function (data) {
  // console.log(data)
  // console.log('signed out successfully!')
  $('#auth-msg-box').text('Signed out successfully!') // we don't get data back from a change password (204 no content)
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-pswd').hide()
  $('#sign-out').hide()
  $('.game-board').hide()
  $('#create-game').hide()
  $('#get-games').hide()
}

const signOutFailure = function () {
  // console.error(error)
  $('#auth-msg-box').text('Sign out failed.')
}

const getGamesSuccess = function (data) {
  // console.log('data happens', data)
  $('#message-box').text('You have played a total of ' + data.games.length + ' games.')
}

const getGamesError = function () {
  $('#message-box').text('Sorry, game retrieval did not work.')
  // console.log('get games did not work')
}

const createGameSuccess = function (data) {
  // console.log('data created!', data)
  store.game = data.game
  $('.game-board').show()
  $('#message-box').text('New game! Time to play!')

  // console.log(store.game)
}

const createGameError = function () {
  $('#message-box').text('Sorry, game creation did not work.')
  // console.log('create game did not work.')
}

const updateGameSuccess = function (data) {
  $('#message-box').text('Move saved!')
  // console.log('game update successfully', data)
}

const updateGameError = function () {
  $('#message-box').text('Sorry, game move did not save.')
  // console.log('create game did not work.')
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
