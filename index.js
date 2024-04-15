

class Player {
  constructor(symbol) {
    this.symbol = symbol
    this.moves = []
  }

  update = (x, y) => {

  }
}


const ticTacToeGame = (function() {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  let winningStates = [
    [[0,0], [0, 1], [0, 2]],
    [[1,0], [1, 1], [1, 2]],
    [[2,0], [2, 1], [2, 2]],
    [[0,0], [1, 0], [2, 0]],
    [[0,1], [1, 1], [2, 1]],
    [[0,2], [1, 2], [2, 2]],
    [[0,0], [1, 1], [2, 2]],
    [[0,2], [1, 1], [2, 0]],
  ]

  const p1 = 'X'
  const p2 = 'O'
  let currentPlayer = p1

  /*
  checks the if winner state is reached
  returns p1, p2, or null 

  game state
  
  while 3 < Turns:
    p1Turn()
  */

  /*
  Rules:
   - p1 starts
   - p1 and p2 alternate turns, place piece on the board *s1
      - players can only select available space *s1.1
   - End game if:
    - either player has 3 in a row
    - 9 moves made and no winner

   TODO:
   - s1: game needs to accept input to place a piece on the board
   - turn: accept input to make move
    - move must be available, otherwise do nothing
      isAvailable -> 
  */

  const makeMove = (x, y) => {
    if (board[x][y] !== '') {
      return false
    }

    board[x, y] = currentPlayer.symbol
    currentPlayer.moves.push([x, y])
    return updateGameState()
  }
  
  /*
  check if there is a winner,
  remove winning states that are no longer possible
  */
  const updateGameState = () => {
    /*
    for each winning state:
      ;[a, b, c] = state

    */
   let winner = false
   validStates = []
   for (const [a, b, c] of winningStates) {
    const cell1 = board[a[0]][a[1]]
    const cell2 = board[b[0]][c[1]]
    const cell3 = board[b[0]][c[1]]

    if (cell1 !== '' && cell2 !== '' && cell3 != '') {
      if (cell1 === cell2 && cell2 === cell3 && cell3) {
        winner = true
        break
      } else {
        continue
      }
    }
    validStates.push([a, b, c])
   }
   winningStates = newStates
   return winner
  }

  const turnCount = () => {
    return p1.moves.length + p2.moves.length
  }
})()