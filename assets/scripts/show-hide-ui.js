'use strict'

const initialLoadHide = function () {
  $('.game-board').hide()
  $('.change-pswd').hide()
  $('.sign-out').hide()
  $('.get-games').hide()
  $('.create-game').hide()
}

const clearSignUp = function () {
  $('.signup_email').val('')
  $('.signup_pswd').val('')
  $('.signup_conf').val('')
}

const clearSignIn = function () {
  $('.signin_email').val('')
  $('.signin_pswd').val('')
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

  $('.sign-in').hide()
  $('.sign-up').hide()
}

const signOutShowHide = function () {
  $('.sign-in').show()
  $('.sign-up').show()

  $('.change-pswd').hide()
  $('.sign-out').hide()
  $('.game-board').hide()
  $('.create-game').hide()
  $('.get-games').hide()
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
