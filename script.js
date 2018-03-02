var board = {
  topRow:{
    col1:".",
    col2:".",
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

function createOutputBoard(newBoard) {
  var boardOutput = "";
  for( var rowKey in board ){
    var row = board[rowKey];
    for( var columnKey in row ){
      boardOutput = boardOutput + row[columnKey];
    }
  boardOutput = boardOutput + "\n";
  }
  return boardOutput;
}

function checkWin() {
  // horizontal win
  for (var rowKey in board ){
    if (board[rowKey].col1 == board[rowKey].col2 && board[rowKey].col2 == board[rowKey].col3 && board[rowKey].col1 != '.') {
      console.log("horizontal");
      return true;
    }
  }
  // vertical win
  for (var i = 1; i <= 3; i++) {
    if (board.topRow["col" + i] == board.middleRow["col" + i] && board.middleRow["col" + i] == board.bottomRow["col" + i] && board.topRow["col" + i] != '.') {
      console.log("vertical");
      return true;
    }
  }
  // diagonal win
  if (((board.topRow["col" + 1] == board.middleRow["col" + 2] && board.middleRow["col" + 2] == board.bottomRow["col" + 3]) || 
       (board.topRow["col" + 3] == board.middleRow["col" + 2] && board.middleRow["col" + 2] == board.bottomRow["col" + 1])) && board.middleRow["col" + 2] != '.') {
    console.log("diagonal");
    return true;
  }
  return false;
}

var running = true;
var playerTurn = 0;

while (running) {
  var row = prompt("enter your row: top, middle or bottom") + 'Row';
  var column = 'col' + prompt("enter your column: 1, 2, 3");

  if (board[row][column] != '.') {
    alert('Please select another square');
  } else {
    if (playerTurn % 2 == 0) {
      board[row][column] = 1;
    } else {
      board[row][column] = 2;
    }
    
    playerTurn++;
    
    var newBoard = createOutputBoard(board);
    console.log(newBoard);
    
    if (playerTurn == 9 || checkWin()) {
      running = false;
    }
  }
}
