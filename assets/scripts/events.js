'use strict'

// Initial player value
let player = 'X'

// when a box on the game board is clicked, set value within box to "X" or "O"
const setClickValue = function () {
  // ... only if the box is empty.
  $('#message-box').text('')
  if ($(this).text() === '') {
    $(this).text(player)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  } else {
    $('#message-box').text('That box already has a value. Choose another box.')
  }
}

const addHandlers = function () {
  $('.box').on('click', setClickValue)
}

module.exports = {
  addHandlers
}
