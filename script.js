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

// loop through each row
function printBoard(board) {
  var boardOutput = "";
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

}

printBoard(board);

// set a variable that represents
// whether or not the game is currently running
var running = true;

var player = 1;
// run the game on a loop
while( running ){
  var positionCheck = true;
  while (positionCheck) {
    var row = prompt("enter your row: top, middle or bottom");
    var column = prompt("enter your column: col1, col2, col3");
    if (board[row][column] !== ".") {
      alert("current position is taken. Please try another position." );
    }
    else {
      board[row][column] = player;
      console.log("current value @: ", board[row][column] );
      positionCheck = false;
    }
  }

  printBoard(board);

  // if there is a winner, end game and print winner
  if (winnerChecker(board) !== false) {
    alert("The winner is " + winnerChecker(board) + "!");
    break;
  }
  
  // if all spaces are filled, end game and print alert
  var fillCount = 0;
  for (row in board) {
    for (col in row) {
      if (board[row][col] !== ".") {
        fillCount++;
      }
    }
  }
  if (fillCount === 9) {
    alert("There is no winner!");
  }

  // toggle player
  if (player === 1) {
    player = 2;
  }
  else {
    player = 1;
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
    return board.top.col3;
  }
  else {
    return false;
  }
}
