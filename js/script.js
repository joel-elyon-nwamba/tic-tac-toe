const Gameboard = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];
  const playerInformation = (name, marker) => {
      return {name, marker}
  }
  const playerOne = playerInformation("player-one", "X");
  const playerTwo = playerInformation("player-two", "O");
  let currentPlayer = playerOne.marker;
  let playerTurn = playerTwo.marker;
  /*
  Set the current player up
  and set the following the player number 2's turn
   */
  

  /* 
  grab the class cell to have access to the board
  */
  const cells = document.querySelectorAll(".cell");
  /*
  Select the restart button
  */
 const restartBtn = document.querySelector(".restart-btn");
  /*
  button to start new game
   */
  const newGame = document.querySelector(".new-btn");
  /*
  Here we're gonna create winning conditions for the game
  */
  const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];
  const checkWinner = () => {
      /**
       * iterate through the arraye
       */
     let roundWinner = false;
     for(let i = 0; i < winningConditions.length; i++) {
      const winCombo = winningConditions[i];
      let a = gameboard[winCombo[0]];
      let b = gameboard[winCombo[1]];
      let c = gameboard[winCombo[2]];
      if(a === "" || b === "" || c ===  "") {
          continue;
      } else if(a === b && b === c) {
          roundWinner = true;
          break;
      }
     }
  }

})();
