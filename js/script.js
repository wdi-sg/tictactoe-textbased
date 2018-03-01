function gameStart() {
  if (confirm("Would you like to play?")) {

  } else {
    throw new Error("Bye!");
  }
}
gameStart();
var playerOne = prompt("Player One's Name:");
var playerTwo = prompt("Player Two's Name:");

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

var inputCount = 1

// var aOne = board.top.col1;
// var aTwo = board.middle.col1;
// var aThree = board.bottom.col1;
// var bOne = board.top.col2;
// var bTwo = board.middle.col2; //creating quick reference variables for each cell
// var bThree = board.bottom.col2;
// var cOne = board.top.col3;
// var cTwo = board.middle.col3;
// var cThree = board.bottom.col3;

var buildBoard = function() {  //putting the entire board building into an accessible function

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

};
buildBoard();
// set a variable that represents
// whether or not the game is currently running
var running = true;
// run the game on a loop
while(running){
  var rowCheck = ["top", "middle", "bottom"];
  var columnCheck = ["col1", "col2", "col3"]
  var row = prompt("enter your row: top, middle or bottom");
  var column = prompt("enter your column: col1, col2, col3");
  if (inputCount % 2 == 1 && board[row][column] === "." && rowCheck.includes(row) && columnCheck.includes(column)) {
      board[row][column] = "X";
      console.log(playerTwo + "'s turn!")
    } else if (inputCount % 2 == 0 && board[row][column] === "." && rowCheck.includes(row) && columnCheck.includes(column)) {
        board[row][column] = "O";
        console.log(playerOne + "'s turn!")
    } else if (board[row][column] != ".") {
        console.log("there's already something there!");
        inputCount = inputCount - 1;
    } else {
      console.log("input error!");
      inputCount = inputCount - 1;
    }

  inputCount = inputCount + 1;
  buildBoard();
  // you can also use the break statement to get out of a while loop

  // if all spaces are filled, end game
function tieGame() {
  if (board.top.col1 != "." &&
      board.top.col2 != "." &&
      board.top.col3 != "." &&
      board.middle.col1 != "." &&
      board.middle.col2 != "." &&
      board.middle.col3 != "." &&
      board.bottom.col1 != "." &&
      board.bottom.col2 != "." &&
      board.bottom.col3 != ".")  {
        console.log("it's a tie!");
        running = false;
        gameStart();
  }
  
}
  // if game is won, end game
  function winCondition(cellOne, cellTwo, cellThree) {
    if (cellOne === "X" &&
        cellTwo === "X" &&
        cellThree === "X") {
          console.log(playerOne + " wins!");
          return true;
    } else if (cellOne === "O" &&
        cellTwo === "O" &&
        cellThree === "O") {
        console.log(playerTwo + " wins!");
        return true;
    } else {
        return false;
    }
  }

   function winGame() {
  if (winCondition(board.top.col1, board.top.col2, board.top.col3) || 
      winCondition(board.middle.col1, board.middle.col2, board.middle.col3) || //evaluate rows
      winCondition(board.bottom.col1, board.bottom.col2, board.bottom.col3) ||
      winCondition(board.top.col1, board.middle.col1, board.bottom.col1) || 
      winCondition(board.top.col2, board.middle.col2, board.bottom.col2) || //evaluate columns
      winCondition(board.top.col3, board.middle.col3, board.bottom.col3) ||
      winCondition(board.top.col1, board.middle.col2, board.bottom.col3) || //evaluate diagonals
      winCondition(board.top.col3, board.middle.col2, board.bottom.col1) ) {
    console.log("game over!");
  running = false
  gameStart();
  }
 }
winGame();
tieGame();
}
