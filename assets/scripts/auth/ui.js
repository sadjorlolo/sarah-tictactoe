'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('You/ve signed up successfully!')
  // $('#message').text('Signed up successfully!')
}

const signUpFailure = function (error) {
  console.error(error)
  console.log('Womp womp! Sign up failed!')
  // $('#message').text('You are the weakest link. Goodbye.')
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log(data)
  console.log(store.user)
  console.log('You/ve signed in successfully!')
  // $('#message').text('Signed up successfully!')
}

const signInFailure = function (error) {
  console.error(error)
  console.log('Womp womp! Sign in failed!')
  // $('#message').text('You are the weakest link. Goodbye.')
}

const signOutSuccess = function (data) {
  console.log(data)
  console.log('signed out successfully!')
  // $('#message').text('Signed out successfully!') // we don't get data back from a change password (204 no content)
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  // $('#message').text('You did not sign out. Silly!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
