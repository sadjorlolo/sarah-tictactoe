'use strict'

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
  console.log(data)
  console.log('You/ve signed in successfully!')
  // $('#message').text('Signed up successfully!')
}

const signInFailure = function (error) {
  console.error(error)
  console.log('Womp womp! Sign in failed!')
  // $('#message').text('You are the weakest link. Goodbye.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
