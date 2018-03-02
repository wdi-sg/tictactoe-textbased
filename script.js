var board = {
  top: {
    col1: ".",
    col2: ".",
    col3: "."
  },
  middle: {
    col1: ".",
    col2: ".",
    col3: "."
  },
  bottom: {
    col1: ".",
    col2: ".",
    col3: "."
  }
};

//My note: empty board that will be used to hold user's game.


/* Pseudocode
Create empty board
Show current game status
determine user inputs - user 1 and user 2
Round 1:
user 1 to start input - column and row
user 2 to start input - column and row 
if box has been filled, prompt warning to user 2
Round 2:
user 1 to start input - column and row
user 2 to start input - column and row 
if box has been filled, prompt warning to user 2
Round 3:
user 1 to start input - column and row
user 2 to start input - column and row 
if box has been filled, prompt warning to user 2
check for any winning entries - in a line or diagonal
if win, prompt "You have won!"
Repeat Round 3 until all cells are filled. 
If no winners, prompt 'Stalemate'

*/

var boardOutput = "";


// loop through each row
function printLog () {for( var rowKey in board ){

  /*
   * make a variable for convenience
   * a shortcut so you won't have
   * to write board[rowKey][columnKey]
   */
   var row = board[rowKey];

  // loop through each column
  for( var columnKey in row ){

    // concatenate the string together
    boardOutput = boardOutput + row[columnKey];
  }

  // make a newline so that each row begins on a new line
  boardOutput = boardOutput + "\n";
}

console.log( boardOutput );
}

// whether or not the game is currently running
var running = true;

// run the game on a loop

var moves = 0


while( running ){
  // 1. get user input
  var row = prompt("enter your row: top, middle or bottom");
  var column = prompt("enter your column: col1, col2, col3");

  // 2. update board with either X or O
  if(moves%2 ===0 || moves===0){
    board[row][column] = 'X'
  } else {
    board[row][column] = 'O'
  };
  printLog();
 
  // 3. check if game should end
  // - 9 moves have been made
  // - if someone won
  checkWin();
  if (moves===9) {
    console.log("End Game");
    break;
  }

  // 4. update number of moves
  moves +=1;
}

// if game is won, end game

// console.log("current value @: ", board[row][column] );
// var row = prompt("enter your row: top, middle or bottom");
// var column = prompt("enter your column: col1, col2, col3");
// board[row][column] = 'O' 
// console.log("current value @: ", board[row][column]);
// moves +=1;

// you can also use the break statement to get out of a while loop
// break;

// if all spaces are filled, end game - Doesn't work. How to make it such that
//if there is no more ".", we change the variable running to false?
//how to break the game when we have a winner?

function checkWin(){
  if ((board.top.col1===board.top.col2 && board.top.col3==="X") || (board.top.col1===board.top.col2 && board.top.col3==="O")){
    running = false;
    console.log("Someone won!");
  };
  if ((board.middle.col1===board.middle.col2 && board.middle.col3==="X") || (board.middle.col1===board.middle.col2 && board.middle.col3==="O")){
    running = false;
    console.log("Someone won!");
  };
  if ((board.bottom.col1===board.bottom.col2 && board.bottom.col3==="X") || (board.bottom.col1===board.bottom.col2 && board.bottom.col3==="O")){
    running = false;
    console.log("Someone won!");
  };
  if ((board.top.col1===board.middle.col2 && board.bottom.col3==="X") || (board.top.col1===board.middle.col2 && board.bottom.col3==="O")){
    running = false;
    console.log("Someone won!");
  };
  if ((board.top.col3===board.middle.col2 && board.bottom.col1==="X") || (board.top.col3===board.middle.col2 && board.bottom.col1==="O")){
    running = false;
    console.log("Someone won!");
  };
}

