var board = {
  topRow:{
    col1:"x",
    col2:"o",
    col3:"."
  },
  middleRow:{
    col1:".",
    col2:".",
    col3:"."
  },
  bottomRow:{
    col1:".",
    col2:".",
    col3:"."
  }
};

// HOW TO PRINT OUR THE STATE OF THE GAME

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
var running = false;

// run the game on a loop
while( running ){
  var row = prompt("enter your row: topRow, middleRow or bottomRow");
  var column = prompt("enter your column: col1, col2, col3");

  console.log("current value @: ", board[row][column] );

  // you can also use the break statement to get out of a while loop
  break;

  // if all spaces are filled, end game

  // if game is won, end game
}
