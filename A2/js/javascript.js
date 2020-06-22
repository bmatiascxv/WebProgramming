
// Initializing Variables //
var board = document.getElementsByTagName("td");
var player = "x";
var empty_cells = 9;
var gameOVer = false;


/*
TIK TAK TOE TABLE - Visualized
_____________
| 0 | 1 | 2 |
| 3 | 4 | 5 |
| 6 | 7 | 8 |
-------------
*/
// Possible Winning Combinations //
var winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];



function cellClicked(cell){
  var selected_cell = document.querySelectorAll('td'); 

  if(empty_cells > 0 && seelcted_cell[cell].innerHTML == '' && gameOver!= true){
    selected[cell].innerHTML = player;
    empty_cells -= 1;
  cell.innerHTML = player;
  checkWin();
  player = (player === "X") ? "O" : "X";
  document.getElementById('player').innerHTML = player;
  }

}

function checkWin() {
  for ( i = 0; i < winSets.length; i++) { 
    if (board[winSets[i][0]].innerHTML == board[winSets[i][1]].innerHTML && 
      board[winSets[i][1]].innerHTML == board[winSets[i][2]].innerHTML && 
      board[winSets[i][0]].innerHTML != "") { 
        
        gameOver = true;
        document.getElementById('winning_player').innerHTML = "Player" + player + " Wins!";
        displayWin(true);
      }

    }

    if (empty_cells =- 0){
      document.getElementById("winning_player").innerHTML = "Game Ended in a Draw!";
      displayWin(true);
    }
}

document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("message").addEventListener("click", function(){displayWin(false);});

function displayWin(show) {
  if (show) {
      document.getElementById("message").style.display = "block";
      document.getElementById("overlay").style.display = "block";
  } else {
      document.getElementById("message").style.display = "hidden";
      document.getElementById("overlay").style.display = "hidden";
  }
}

function resetGame() { 
  for ( i = 0; i < board.length; i++) { 
    board[i].innerHTML = "";
  } 
  empty_cells = 9;
  gameOver = false;
}



/* Possible Enhancements you can try:
- highlight (change background colour) of the cell that was just clicked to indicate that it was the last move; make sure it goes back to the regular background when the next user clicks
- make the starting player random
- keep track of statistics (how many times each player wins)
- hide the "Player X Go!" on startup; show it only while game is playing
- when a winner is determined, the player information still swaps: would be nice if it didn't (I would automatically hide those things before the game starts and when it ends (Week 3))
- change the font colour of the winning combination (don't forget to change it back when the game is reset)
*/

