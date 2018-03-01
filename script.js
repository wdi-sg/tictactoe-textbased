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
var computerOpponent = false;
var computerCheck = true;
var player = "1";
var currentPlayer = "";
var player1 = "";
var player2 = "Elon Musk"
// run the game on a loop
while( running ){
  while (computerCheck) {
    var computerSelection = prompt("Do you want to play against the computer or against someone else? (Computer/Human)");
    if (computerSelection === "Computer") {
      computerOpponent = true;
      alert("You will be playing with the computer" );
      computerCheck = false;
      player1 = prompt("What is your name Player 1?");
    }
    else if (computerSelection === "Human") {
      computerOpponent = false;
      alert("Awesome! Play with your friend!" );
      computerCheck = false;
      player1 = prompt("What is your name Player 1?");
      player2 = prompt("What is your name Player 2?");
    }
  }

  if (player === "1") {
    currentPlayer = player1;
  }
  else {
    currentPlayer = player2;
  }

  if (computerOpponent && player === "C") {
    var rowChoices = ["top","middle","bottom"];
    var colChoices = ["col1","col2","col3"];
    
    var positionCheck = true;
    while (positionCheck) {
      var row = rowChoices[Math.floor(Math.random() * rowChoices.length)];
      var col = colChoices[Math.floor(Math.random() * colChoices.length)];

      if (board[row][column] !== ".") {}
      else {
        board[row][column] = player;
        console.log("current value @: ", board[row][column] );
        positionCheck = false;
      }
    }
  }
  else {
    var positionCheck = true;
    while (positionCheck) {
      var row = prompt(currentPlayer + ", enter your row: top, middle or bottom");
      var column = prompt(currentPlayer + "enter your column: col1, col2, col3");
      if (board[row][column] !== ".") {
        alert("current position is taken. Please try another position." );
      }
      else {
        board[row][column] = player;
        console.log("current value @: ", board[row][column] );
        positionCheck = false;
      }
    }
  }

  printBoard(board);

  // if there is a winner, end game and print winner
  if (winnerChecker(board) !== false) {
    var winner = (winnerChecker(board));
    if (winner === "1") {
      alert("The winner is " + player1 + "!");
    }
    else {
      alert("The winner is " + player2 + "!");
    }
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
  if (computerOpponent) {
    if (player === "1") {
      player = "C";
    }
    else {
      player = "1";
    }
  }
  else if (player === "1") {
    player = "2";
  }
  else {
    player = "1";
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
