//Initializing...
//create array of the 9 boxes
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

var boardOutput = "";
function drawBoard(){
  // loop through each row
  for(var rowKey in board){
  /* make a variable for convenience
   * a shortcut so you won't have
   * to write board[rowKey][columnKey]*/
   var row = board[rowKey];
   // loop through each column
   for(var columnKey in row){
     // concatenate the string together
     boardOutput = boardOutput + row[columnKey];
   }
   // make a newline so that each row begins on a new line
   boardOutput = boardOutput + "\n";
 }
 console.log(boardOutput);
}

// set a variable that represents
// whether or not the game is currently running
var running = true;

//register players name
var player1 = "";
var player2 = "";

function getPlayersName() {
  while (running) {
    player1 = prompt("Enter Player 1's Name: ");
    player2 = prompt("Enter Player 2's Name: ");
    return player1;
    console.log(player1);
    return player2;
    console.log(player2);
  }
  break;
}

//assign players' token
var p1Token = "O";
var p2Token = "X";

var playCount = 0;

//Actual Game Start
// run the game on a loop
function getInput() {
  if (playCount % 2 === 1) {
    var row = prompt(player1 + " enter your row: topRow, middleRow or bottomRow");
    var column = prompt(player1 + "enter your column: col1, col2, col3");
    console.log("Current Value @: ", board[row][column]);
  }
  else {
    var row = prompt(player2 + " enter your row: topRow, middleRow or bottomRow");
    var column = prompt(player2 + "enter your column: col1, col2, col3");
    console.log("Current Value @: ", board[row][column]);
  }
}

//check if the selected input is available

function checkBox(row, column) {
  //if board is unavailable
  if(board[row][column] === "O" || board[row][column] === "X") {
    getInput();
    return checkBox(row,column);
  }
  else {
    //if board is empty
    playCount++;
  }
}

//save the input selection
var token = "";
function saveInput() {
  if (playCount % 2 === 1){
    token = board[row][column] = p1Token;
    return board;
  }
  else {
    token = board[row][column] = p2Token;
    return board;
  }
}

function compareInput() {
  //compare the token input in board
  if(topRow[col1] === topRow[col2] === topRow[col3] === token || middleRow[col1] === middleRow[col2] === middleRow[col3] === token || bottomRow[col1] === bottomRow[col2] === bottomRow[col3] === token) {
    if(token === p1Token){
      prompt(player1 + " WIN!");
      running === false;
      drawBoard();
    }
    else {
      prompt(player2 + " WIN!");
      running === false;
      drawBoard();
    }
  }
  else if (topRow[col1] === middleRow[col1] === bottomRow[col1] === token || topRow[col2] === middleRow[col2] === middleRow[col2] === token || topRow[col3] === middleRow[col3] === middleRow[col3] === token) {
    if(token === p1Token){
      prompt(player1 + " WIN!");
      running === false;
      drawBoard();
    }
    else {
      prompt(player2 + " WIN!");
      running === false;
      drawBoard();
    }
  }
  else if (topRow[col1] === middleRow[col2] === bottomRow[col3] === token || topRow[col3] === middleRow[col2] === bottomRow[col1] === token) {
    if(token === p1Token){
      prompt(player1 + " WIN!");
      running === false;
      drawBoard();
    }
    else {
      prompt(player2 + " WIN!");
      running === false;
      drawBoard();
    }
  }
  else if (playCount === 9) {
    prompt("It's a TIE!");
    running === false;
    drawBoard();
  }
  else {
    getInput();
  }
}

