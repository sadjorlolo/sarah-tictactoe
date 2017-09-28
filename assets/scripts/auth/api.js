'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signup = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signin = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changepw = function (data) {
  // console.log(store.user)
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH', // need to specify the user's identtity, hence auth
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signout = function () {
  // console.log(store.user)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE', // need to specify the user's identtity
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const show = function (id) {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + id,
//     method: 'GET'
//   })
// }
const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signup,
  signin,
  changepw,
  signout,
  index,
  create,
  update
  // show
}
