

const getCoordinates = (idx) => [ Math.floor(idx / 3), idx % 3 ]

const gameIO = (function(doc) {
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
    let gameResult = ''

    const getCurrentPlayer = () => currentPlayer

    const updateGameState = (x, y) => {
      if (gameResult !== '' || board[x][y] !== '') {
        return
      }
      board[x][y] = currentPlayer
      validStates = []
  
      // check if any winning states satisfied
      for (const [a, b, c] of winningStates) {
       const cell1 = board[a[0]][a[1]]
       const cell2 = board[b[0]][b[1]]
       const cell3 = board[c[0]][c[1]]
   
       if (cell1 !== '' && cell2 !== '' && cell3 != '') {
         if (cell1 === cell2 && cell2 === cell3) {
           gameResult = currentPlayer
           break
         } else {
           continue
         }
       }
       validStates.push([a, b, c])
      }

      winningStates = validStates

      if (gameResult === '' && winningStates.length === 0) {
        gameResult = 'tie'
      } else {
        currentPlayer = currentPlayer === p1 ? p2 : p1
      }
      console.table(board)
      return gameResult
    }
  
    return {updateGameState, getCurrentPlayer}
  })()

  const cells = doc.querySelectorAll('.cell')
  cells.forEach((cell, i) => {
    cell.addEventListener('click', (e) => {
      const player = ticTacToeGame.getCurrentPlayer()
      const res = ticTacToeGame.updateGameState(...getCoordinates(i))
      
      if (res === '' || res === player) {
        e.target.textContent = player
      } else if (res == 'tie') {
        //report tie
      } else {
        //report winner
      }
    })
  })
})(document)
