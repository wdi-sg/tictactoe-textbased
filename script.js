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

var boardOutput = "";
var firstPlayerTurn = true;


function updateBoard() {   //loop and printout board
  for( var rowKey in board ){
    var row = board[rowKey];
      for( var columnKey in row ){
        boardOutput = boardOutput + row[columnKey] + " ";
      }
    boardOutput = boardOutput + "\n";    
  }
  console.log( boardOutput + "\n\n");
}


function checkWin(){

  for ( var rowKey in board ){  //check horizontal
    if (board[rowKey]["col1"] != ".") {
      if (board[rowKey]["col1"] === board[rowKey]["col2"] && board[rowKey]["col2"] === board[rowKey]["col3"]) {
        state = false;
        alert("WIN!!!!!!");
      }
    }
  }
  //check vertical to be done
  //check diagonal to be dowe
}

  //CCount number of "."
function checkBoardFull(){
  var boardSpaces = 0;
  for( var rowKey in board ){
    row = board[rowKey];
      for( var columnKey in row ){
        if (row[columnKey] === "."){
          boardSpaces++;
        } 
      }
    }
    if (boardSpaces === 0) {
      state = false;
      alert("Its a draw!");
      
    }
}

//Prompt Player 1 2 input
function playerInput() {
  var dupe = false;
  if (firstPlayerTurn === true){
      currentPlayer = "Player 1 - "
      symbol = "X";
    } else {
      currentPlayer = "Player 2 - "
      symbol = "O";
    }
  do {
    var row = prompt( currentPlayer + "Enter row: top, middle or bottom");
    var column = prompt( currentPlayer + "Enter column: col1, col2, col3");

    if (board[row][column] === "."){
      board[row][column] = symbol;
      firstPlayerTurn = !firstPlayerTurn;
      updateBoard();
      dupe = false;

    } else {

      dupe = true;
      alert("That spot is taken! Choose somewhere else.")
    }
  } while ( dupe === true );
}

//Initialise

var state = true;
// run the game on a loop
while( state ) {
  playerInput();
  checkWin();
  checkBoardFull();
}
