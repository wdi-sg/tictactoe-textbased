var board = {
  row1:{
    col1:".",
    col2:".",
    col3:"."
  },
  row2:{
    col1:".",
    col2:".",
    col3:"."
  },
  row3:{
    col1:".",
    col2:".",
    col3:"."
  }
};

var outputBoard = function(board){

  var boardOutput = "";

  // loop through each row
  for( var rowKey in board ){

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

  return boardOutput;

}

/* main game loop */

// set a variable that represents
// whether or not the game is currently running
var running = false;

// run the game on a loop
while( running ){

  // get some values from the user
  var row = prompt("enter your row: topRow, middleRow or bottomRow");
  var column = prompt("enter your column: col1, col2, col3");

  // set the values in the board data structure
  board[row][column] = currentPlayer;

  // change the current player
  if( currentPlayer === 'X' ){
    currentPlayer = 'O';
  }else{
    currentPlayer = 'X';
  }

  // output the board
  console.log( outputBoard( board ) );
}
