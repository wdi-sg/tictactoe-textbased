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

const playerA = {
  name: "Player A",
  symbol: "X"
};
const playerB = {
  name: "Player B",
  symbol: "O"
};

let userInput;

var boardOutput = "";

const checkRow = (row) => {
    for( var columnKey in board[row] ){
      // check if row is not full
      if (board[row][columnKey] === "."){
          // not full
          return true;
      }
    }
  return false;
};

const checkColumn = (row) => {
  columnString  = ""
  for (var columnKey in board[row]) {
    if (board[row][columnKey] === ".") {
      columnString += columnKey + " ";
    }
  }
  return columnString;
};

const promptUser = (user) => {

  // get rows
  rowString = ""
  for (var row in board) {
   if (checkRow(row)) {
    rowString += row + " ";
   };
  }

  var row = prompt(`${user.name} - Enter your row: ${rowString}`);

  // get columns
  let columnStrings = checkColumn(row);
  var column = prompt(`${user.name} - Enter your column: ${columnStrings}`);
  return [row, column];

};


// PRINT BOARD
const printBoard = () => {
  boardOutput = "";
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
};


const checkWin = () => {
  // check rows
  for (var rowKey in board) {
    if (board[rowKey]["col1"] === board[rowKey]["col2"] && board[rowKey]["col1"] == board[rowKey]["col3"] && board[rowKey]["col1"] !== ".") {
      return true;
    }
  }

  // check cols
  for (j=1; j<4; j++){
    queryName = "col" + j;
    if (board["top"][queryName] === board["middle"][queryName] && board["top"][queryName] == board["bottom"][queryName] && board["top"][queryName] !== ".") {
      return true;
    }
  }

  // check diagonal top down
    if (board["top"]["col1"] === board["middle"]["col2"] && board["top"]["col1"] == board["bottom"]["col3"] && board["top"]["col1"] !== ".") {
      return true;
    }

  // check diagonal down top
    if (board["top"]["col3"] === board["middle"]["col2"] && board["top"]["col3"] == board["bottom"]["col1"] && board["top"]["col3"] !== ".") {
      return true;
    }
};

// set a variable that represents
// whether or not the game is currently running
var running = true;

// run the game on a loop
for (i=1; i<11; i++){
  // check game over
  if (i === 10) {
    alert(`Game over, game is a draw!`);
    break;
  };
  // check for player turn's
  if (i % 2 !== 0) {
    // player a
    if (checkWin()) {
      alert(`Game over, ${playerB.name} won!`);
      break;
    };

    console.log(`TURN ${i} - ${playerA.name}`);
    userInput = promptUser(playerA);
    board[userInput[0]][userInput[1]] = playerA.symbol
    printBoard()
  } else {
    // player b
    if (checkWin()) {
      alert(`Game over, ${playerA.name} won!`);
      break;
    };

    console.log(`TURN ${i} - ${playerB.name}`);
    userInput = promptUser(playerB);
    board[userInput[0]][userInput[1]] = playerB.symbol
    printBoard()
  }
}


  // you can also use the break statement to get out of a while loop

  // if all spaces are filled, end game

  // if game is won, end game

