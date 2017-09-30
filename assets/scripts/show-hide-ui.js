'use strict'

const initialLoadHide = function () {
  $('.game-board').hide()
  $('.change-pswd').hide()
  $('.sign-out').hide()
  $('.get-games').hide()
  $('.create-game').hide()
  // $('.pswd-button').hide()
}

const clearSignUp = function () {
  $('.signup_email').val('')
  $('.signup_pswd').val('')
  $('.signup_conf').val('')
}

const clearSignIn = function () {
  $('.signin_email').val('')
  $('.signin_pswd').val('')
  $('.auth-msg-box').val('')
}

const clearPassword = function () {
  $('.pswd_old').val('')
  $('.pswd_new').val('')
}

const signInShowHide = function () {
  $('.get-games').show()
  $('.sign-out').show()
  $('.create-game').show()
  $('.change-pswd').show()
  $('.sign-in-as').show()
  // $('.pswd-button').show()

  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.sign-in-play').hide()
  $('.auth-msg-box').hide()
}

const signOutShowHide = function () {
  $('.sign-in').show()
  $('.sign-up').show()
  $('.sign-in-play').show()
  $('.auth-msg-box').show()

  $('.change-pswd').hide()
  $('.sign-out').hide()
  $('.game-board').hide()
  $('.create-game').hide()
  $('.get-games').hide()
  $('.sign-in-as').hide()
  // $('.pswd-button').hide()
}

const signOutClearMessage = function () {
  $('.message-box').text('')
  $('.declare-winner').text('')
  $('.stats-box').text('')
  $('.update-msg').text('')
}

module.exports = {
  initialLoadHide,
  clearSignUp,
  clearSignIn,
  clearPassword,
  signInShowHide,
  signOutShowHide,
  signOutClearMessage
}
