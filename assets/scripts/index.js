'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
})
