var board = {
  top:{
    col1:".",
    col2:".",
    col3:"."
  },
  middle:{
    row1:".",
    row2:".",
    row3:"."
  },
  bottom:{
    row1:".",
    row2:".",
    row3:"."
  }
};

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

console.log( boardOutput );

// set a variable that represents
// whether or not the game is currently running
var running = true;

// run the game on a loop
while( running ){
  var row = prompt("enter your row: top, middle or bottom");
  var column = prompt("enter your column: col1, col2, col3");

  console.log("current value @: ", board[row][column] );

  // you can also use the break statement to get out of a while loop
  break;

  // if all spaces are filled, end game

  // if game is won, end game
}
