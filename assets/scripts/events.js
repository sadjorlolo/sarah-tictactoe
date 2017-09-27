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
  console.log('current array is', gameBoard)
}

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

// const gameBoard = ["X", "X", "X", "O", "O", "X", "X", "O", "O"]

const mappedBoard = []
for (let i = 0; i < winningCombos.length; i++) {
  const gameArrayCombos = winningCombos[i]
    .map(index => gameBoard[index])
  mappedBoard.push(gameArrayCombos)
}

// const allTheSame = mappedBoard[i].reduce((a, b) => (a === b) ? a : NaN)
// winningCombos.forEach(function (combo) {
//   const gameArrayCombos = combo.map(i => gameBoard[i])
//   console.log(gameArrayCombos)
//
//   const allTheSame = combo.reduce((a, b) => (a === b) ? a : NaN)
//   console.log(allTheSame)
//   return allTheSame
// })

// when a box on the game board is clicked, set value within box to "X" or "O"
const setClickValue = function () {
  // ... only if the box is empty.
  $('#message-box').text('')
  const index = $(this).attr('id')
  console.log(index)
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
