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

function gameBoard() {

var boardOutput = "";

for( var rowKey in board ){


  var row = board[rowKey];
  for( var columnKey in row ){

    boardOutput = boardOutput + row[columnKey];
  }
  boardOutput = boardOutput + "\n";
}

console.log( boardOutput );
};

gameBoard();


  var running = true;
  var turnCount = 1

while( running ){
  var row = prompt("enter your row: top, middle or bottom");
  var column = prompt("enter your column: col1, col2, col3");

if (turnCount % 2 !== 0 && board[row][column] === ".") {
  board[row][column] = "X";
} else if (turnCount % 2 == 0 && board[row][column] === ".") {
  board[row][column] = "O";
} else {
  console.log("invalid row and column!");
}
turnCount += 1
gameBoard();

function draw() {
  if (board.top.col1 != "." &&
      board.top.col2 != "." &&
      board.top.col3 != "." &&
      board.middle.col1 != "." &&
      board.middle.col2 != "." &&
      board.middle.col3 != "." &&
      board.bottom.col1 != "." &&
      board.bottom.col2 != "." &&
      board.bottom.col3 != ".") {
    console.log("It's a draw!");
  }
  break;
}

};

