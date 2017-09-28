'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#auth-msg-box').text('Sign up successful!')
  // console.log(data)
  // console.log('You/ve signed up successfully!')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  // console.error(error)
  // console.log('Womp womp! Sign up failed!')
  $('#auth-msg-box').text('Sign up failed.')
}

const signInSuccess = function (data) {
  store.user = data.user
  // console.log(data)
  // console.log(store.user)
  // console.log('You/ve signed in successfully!')
  $('#auth-msg-box').text('Signed in successfully!')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-pswd').show()
  $('#sign-out').show()
  $('.game-board').show()
  console.log(store)
  console.log(store.user)
}

const signInFailure = function () {
  // console.error(error)
  // console.log('Womp womp! Sign in failed!')
  $('#auth-msg-box').text('Sign in failed.')
}

const changePasswordSuccess = function (data) {
  // console.log(data)
  // console.log('Changed password successfully!')
  $('#auth-msg-box').text('Changed password successfully!') // we don't get data back from a change password (204 no content)
}

const changePasswordFailure = function () {
  // console.log('No bueno. Please try again.')
  // console.error(error)
  $('#auth-msg-box').text('Change Password failed.')
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
}

const signOutFailure = function () {
  // console.error(error)
  $('#auth-msg-box').text('Sign out failed.')
}

const getGamesSuccess = function (data) {
  console.log('data happens', data)
}

const getGamesError = function () {
  console.log('get games did not work')
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
  getGamesError
}
