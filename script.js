var board = {
  top:{
    col1:".",
    col2:".",
    col3:"."
  },
  middle:{
    col1:".",
    col2:".",
    col3:"."
  },
  bottom:{
    col1:".",
    col2:".",
    col3:"."
  }
};

// copy of empty board for resetting board
var emptyBoard = JSON.parse(JSON.stringify(board)); 

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

  // if game is won, end game
  // if (board.top.col1 === board.top.col2 && board.top.col2 === board.top.col3 && board.top.col1 !== ".") {
  //   alert("The winner is " + board.top.col1 + "!");
  // }
  // else if (board.middle.col1 === board.middle.col2 && board.middle.col2 === board.middle.col3 && board.middle.col1 !== ".") {
  //   alert("The winner is " + board.middle.col1 + "!");
  // }

  if (winnerChecker !== false) {
    alert("The winner is " + winnerChecker + "!");
    break;
  }

  // if all spaces are filled, end game
  for (row in board) {
    for (col in row) {
      if (board[row][col] !== ".") {
        break;
      }
    }
  }
}

function winnerChecker(board) {
  if (board.top.col1 === board.top.col2 && board.top.col2 === board.top.col3 && board.top.col1 !== ".") {
    return board.top.col1;
  }
  else if (board.middle.col1 === board.middle.col2 && board.middle.col2 === board.middle.col3 && board.middle.col1 !== ".") {
    return board.middle.col1;
  }
  else if (board.bottom.col1 === board.bottom.col2 && board.bottom.col2 === board.bottom.col3 && board.bottom.col1 !== ".") {
    return board.bottom.col1;
  }
  else if (board.top.col1 === board.middle.col1 && board.middle.col1 === board.bottom.col1 && board.top.col1 !== ".") {
    return board.top.col1;
  }
  else if (board.top.col2 === board.middle.col2 && board.middle.col2 === board.bottom.col2 && board.top.col2 !== ".") {
    return board.top.col2;
  }
  else if (board.top.col3 === board.middle.col3 && board.middle.col3 === board.bottom.col3 && board.top.col3 !== ".") {
    return board.top.col3;
  }
  else if (board.top.col1 === board.middle.col2 && board.middle.col2 === board.bottom.col3 && board.top.col1 !== ".") {
    return board.top.col1;
  }
  else if (board.top.col3 === board.middle.col2 && board.middle.col2 === board.bottom.col1 && board.top.col3 !== ".") {
    return board.top.col1;
  }
  else {
    return false;
  }
}
