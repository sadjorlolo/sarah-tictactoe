'use strict'

// Initial player value
let player = 'X'

// if player is X, switch to O, and vice versa
const togglePlayer = function () {
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
}

// when box clicked, push player value to the correct index in the array
const gameBoard = ['', '', '', '', '', '', '', '', '']
const pushToGameArray = function (player, index) {
  const currentPlayer = player
  gameBoard[index] = currentPlayer
//  console.log('current array is', gameBoard)
}

// when a box on the game board is clicked, set value within box to "X" or "O"
const setClickValue = function () {
  // ... only if the box is empty.
  $('#message-box').text('')
  const index = $(this).attr('id')
  // console.log(index)
  if ($(this).text() === '') {
    $(this).text(player)
    pushToGameArray(player, index)
    togglePlayer()
  } else {
    $('#message-box').text('That box already has a value. Choose another box.')
  }
  console.log(player)
}

const addHandlers = function () {
  $('.box').on('click', setClickValue)
}

module.exports = {
  addHandlers
}
