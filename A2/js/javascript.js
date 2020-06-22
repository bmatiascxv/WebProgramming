/* Benjamin Matias | 991591184 | Trafalgar */

var board = document.getElementsByTagName("td");

// X always gets to go first
var player = "X";

// Amount of Empty Cells Variable
var empty_cells = 9;

// Progress of Game: false = game still going; true = game is done
var gameOver = false;


/*
TIK TAK TOE TABLE - Visualized
_____________
| 0 | 1 | 2 |
| 3 | 4 | 5 |
| 6 | 7 | 8 |
-------------
*/
// Winning Possibilities // 
var winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


function resetGame() {

    //  1. sets content of all 9 cells to nothing //
    for ( i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
    }
  
    // Reset player back to X and update it on the page //
    var player = "X";
    document.getElementById('player').innerHTML= player;

    // Reset gameOver and # of empty cells //
    empty_cells = 9;
    gameOver= false;
}

// function cellChecked(cell) - checks if the cell is empty or filled, and reducing amount of empty spaces if cell if filled //
function cellClicked(cell) {

    var selected_cell = document.querySelectorAll('td');
    // 1. decreases # of empty cells by 1 //
    if(empty_cells > 0 && selected_cell[cell].innerHTML == '' && gameOver != true){  
        selected_cell[cell].innerHTML= player;        
        empty_cells -=1;
    cell.innerHTML = player;
    checkWin();    
    player = (player === "X") ? "O" : "X"; // Switches between Player X and O
    document.getElementById("player").innerHTML = player;
    }
}

// Function checkWin() - Checks all winning combinations and display results //
function checkWin() {

    for ( i = 0; i < winSets.length; i++) {
        if (board[winSets[i][0]].innerHTML == board[winSets[i][1]].innerHTML 
            && board[winSets[i][1]].innerHTML == board[winSets[i][2]].innerHTML 
            && board[winSets[i][0]].innerHTML != "") {           
        
            gameOver = true;
            document.getElementById('winning_player').innerHTML = "Player " + player + " Wins!";            
            displayWin(true);            
        }
    }

  
    if(empty_cells < 0){
    gameOver = true; // Boolean changed from false to true indicating game is over
    document.getElementById('winning_player').innerHTML = "Game is Draw"; // Displays Game is a Draw
    displayWin(true); // Calls the displayWin() function
    }
    
}

/* Possible Enhancements
----------------------------
- highlight (change background colour) of the cell that was just clicked to indicate that it was the last move; make sure it goes back to the regular background when the next user clicks
- make the starting player random
- keep track of statistics (how many times each player wins)
- hide the "Player X Go!" on startup; show it only while game is playing
- when a winner is determined, the player information still swaps: would be nice if it didn't (I would
automatically hide those things before the game starts and when it ends (Week 3))
- change the font colour of the winning combination (don't forget to change it back when the game is reset)
*/

// ==========================================================================
// DON'T TOUCH THESE LINES OF CODE  (we'll learn this stuff in a later lesson)

// Event that calls resetGame function when clicked //
document.getElementById("reset").addEventListener("click", resetGame); 
// Event that calls displayWin() function when clicked //
document.getElementById("message").addEventListener("click", function() {
    displayWin(false);
});

for ( i = 0; i < board.length; i++) {
    document.getElementsByTagName("td")[i].addEventListener("click", function() {
        cellClicked(this);
    });
}

// either show the results or hide them (displayWin(true) shows and 
// displayWin(false) hides)
function displayWin(show) {
    if (show) {
        document.getElementById("message").style.display = "block"; // Displays the results window with the winner inside it
        document.getElementById("overlay").style.display = "block"; // Displays the results window with the winner inside it
    } else {
        document.getElementById("message").style.display = "none";  // Hides the results window with the winner inside it
        document.getElementById("overlay").style.display = "none";  // Hides the results window with the winner inside it
    }
}

// ===============================================================