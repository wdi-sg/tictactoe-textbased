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

// give a function to print boardOutput
function printCurrentBoard(board) {

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
  // console.log( boardOutput );
  console.log(boardOutput);
}

 
function allBoardFilled(board) {
  if (board.top.col1 != "." && board.top.col2 != "." && board.top.col3 != "." &&
  board.middle.col1 != "." && board.middle.col2 != "." && board.middle.col3 != "." &&
  board.bottom.col1 != "." && board.bottom.col2 != "." && board.bottom.col3 != ".") {
    return true;
  } return false;
}

/*
function playerOneWin(board) {
  if ((board.top.col1 == "x" && board.top.col2 == "x" && board.top.col3 == "x")
    || (board.middle.col1 == "x" && board.middle.col2 == "x" && board.middle.col3 == "x")
    || (board.bottom.col1 == "x" && board.bottom.col2 == "x" && board.bottom.col3 == "x")
    || (board.top.col1 == "x" && board.middle.col1 == "x" && board.bottom.col1 == "x")
    || (board.top.col2 == "x" && board.middle.col2 == "x" && board.bottom.col2 == "x")
    || (board.top.col3 == "x" && board.middle.col3 == "x" && board.bottom.col3 == "x")
    || (board.top.col1 == "x" && board.middle.col2 == "x" && board.bottom.col3 == "x")
    || (board.top.col3 == "x" && board.middle.col2 == "x" && board.bottom.col1 == "x")) {
      return true;
    } return false;
}

function playerTwoWin(board) {
  if ((board.top.col1 == "o" && board.top.col2 == "o" && board.top.col3 == "o")
    || (board.middle.col1 == "o" && board.middle.col2 == "o" && board.middle.col3 == "o")
    || (board.bottom.col1 == "o" && board.bottom.col2 == "o" && board.bottom.col3 == "o")
    || (board.top.col1 == "o" && board.middle.col1 == "o" && board.bottom.col1 == "o")
    || (board.top.col2 == "o" && board.middle.col2 == "o" && board.bottom.col2 == "o")
    || (board.top.col3 == "o" && board.middle.col3 == "o" && board.bottom.col3 == "o")
    || (board.top.col1 == "o" && board.middle.col2 == "o" && board.bottom.col3 == "o")
    || (board.top.col3 == "o" && board.middle.col2 == "o" && board.bottom.col1 == "o")) {
      return true;
    } return false;
}*/

function wOne(board) {
  if ((board.top.col1 == "x" && board.top.col2 == "x" && board.top.col3 == "x") || (board.top.col1 == "o" && board.top.col2 == "o" && board.top.col3 == "o")) {
    return true;
  } return false;
}

function wTwo(board) {
  if ((board.middle.col1 == "x" && board.middle.col2 == "x" && board.middle.col3 == "x") || (board.middle.col1 == "o" && board.middle.col2 == "o" && board.middle.col3 == "o")) {
    return true;
  } return false;
}

function wThree(board) {
  if ((board.bottom.col1 == "x" && board.bottom.col2 == "x" && board.bottom.col3 == "x") || (board.bottom.col1 == "o" && board.bottom.col2 == "o" && board.bottom.col3 == "o")) {
    return true;
  } return false;
}

function wFour(board) {
  if ((board.top.col1 == "x" && board.middle.col1 == "x" && board.bottom.col1 == "x") || (board.top.col1 == "o" && board.middle.col1  == "o" && board.bottom.col1 == "o")) {
    return true;
  } return false;
}

function wFive(board) {
  if ((board.top.col2 == "x" && board.middle.col2 == "x" && board.bottom.col2 == "x") || (board.top.col2 == "o" && board.middle.col2  == "o" && board.bottom.col2 == "o")) {
    return true;
  } return false;
}

function wSix(board) {
  if ((board.top.col3 == "x" && board.middle.col3 == "x" && board.bottom.col3 == "x") || (board.top.col3 == "o" && board.middle.col3  == "o" && board.bottom.col3 == "o")) {
    return true;
  } return false;
}

function wSeven(board) {
  if ((board.top.col1 == "x" && board.middle.col2 == "x" && board.bottom.col3 == "x") || (board.top.col1 == "o" && board.middle.col2 == "o" && board.bottom.col3 == "o")) {
    return true;
  } return false;
}

function wEight(board) {
  if ((board.top.col3 == "x" && board.middle.col2 == "x" && board.bottom.col1 == "x") || (board.top.col3 == "o" && board.middle.col2 == "o" && board.bottom.col1 == "o")) {
    return true;
  } return false;
}

// set a variable that represents
// whether or not the game is currently running
var running = true;

var inputCount = 0;

// run the game on a loop
  while( running ){
  var row = prompt("enter your row: top, middle or bottom");
  var column = prompt("enter your column: col1, col2, col3");

  console.log("current value @: ", board[row][column] );
  inputCount++;

  // odd number is player 1
  if (inputCount % 2 != 0) {
    board[row][column] = "x";
  } else {
  // even number is player 2
    board[row][column] = "o";
  }

  /*if (playerOneWin(board)) {
    alert("Player One Win!");
  } else if (playerTwoWin(board)) {
    alert("Player Two Win!");
  } else {
    alert("It a Tie!");
  }*/

  if (((wOne(board) == true) 
    || (wTwo(board) == true) 
    || (wThree(board) == true) 
    || (wFour(board) == true) 
    || (wFive(board) == true) 
    || (wSix(board) == true) 
    || (wSeven(board) == true) 
    || (wEight(board) == true)) && (inputCount % 2 != 0)) {
      alert("Player One Win!");
      break;
  } else if (((wOne(board) == true) 
    || (wTwo(board) == true) 
    || (wThree(board) == true) 
    || (wFour(board) == true) 
    || (wFive(board) == true) 
    || (wSix(board) == true) 
    || (wSeven(board) == true) 
    || (wEight(board) == true)) && (inputCount % 2 === 0)) {
    alert("Player Two Win!");
    break;
  } else if (allBoardFilled(board)) {
    alert("it's a Tie!");
    break;
  }

  /*if ((wOne(board)=true)||(wTwo(board)=true)||(wThree(board)=true)||(wFour(board)=true)||(wFive(board)=true)||(wSix(board)=true)||(wSeven(board)=true)||(wEight(board)=true)) {
    alert("Player One Win!");
    break;
  } else if (((winingOne(board) = true)
    || (winningTwo(board) = true)
    || (winningThree(board) = true)
    || (winningFour(board) = true)
    || (winningFive(board) = true)
    || (winningSix(board) = true)
    || (winningSeven(board) = true)
    || (winningEight(board) = true))
    && inputCount % 2 = 0) {
    alert("Player Two Win!");
    break;
  } else (allBoardFilled(board)) {
    alert("It's a Tie!");
    break;
  }

  // game ends when whole board is filled
  /*if  (allBoardFilled(board)) {
    alert("The game is finished!");
    break;
  }*/
}

  // you can also use the break statement to get out of a while loop

  // if all spaces are filled, end game

  // if game is won, end game

