`HELPER FUNCTIONS`

function printBoard(board) { // prints out the board
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

  console.log(boardOutput);
}

function checkWin(board, row, col, token) { // check if won or not after last move
  // check cols in the row
  if ( board[row]['col1'] == token && board[row]['col2'] == token && board[row]['col3'] == token ) return true;

  // check rows in the col
  else if (board['top'][col] == token && board['middle'][col] == token && board['bottom'][col] == token) return true;

  // check left diagonal
  else if (board['top']['col1'] == token && board['middle']['col2'] == token && board['bottom']['col3'] == token) return true;

  // check right diagonal
  else if (board['bottom']['col1'] == token && board['middle']['col2'] == token && board['top']['col3'] == token) return true;

  else return false;
}

function playAgain() {
  while (true) {
    var play_again = prompt("Do you want to play again? (y/n)");

    if (play_again == 'y') {
      location.reload();
      break;
    }
    if (play_again == "n") {
      console.log("Thanks for playing!");
      break;
    }
    else if (play_again != "n"){
      console.log("Invalid input: please type either 'y' or 'n'");
    }

  }
}

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

// Player chooses a token
var player_token;
var computer_token;

while (true) {
  player_token = prompt("Choose a token 'X' or 'O'");

  if (player_token == 'X') {
    computer_token = 'O';
    break;
  }
  else if (player_token == 'O') {
    computer_token = 'X';
    break;
  }
  else {
    console.log("Invalid input: please type either 'X' or 'O'");
  }
}

// Player chooses order of playing
var player_first;

while (true) {
  var order = prompt("Do you want to go first? (y/n)");
  if (order == 'y') {
    player_first = true;
    break;
  }
  else if (order == 'n') {
    player_first = false;
    break;
  }
  else {
    console.log("Invalid input: please type either 'y' or 'n'");
  }
}

// set a variable that represents
// whether or not the game is currently running
var running = true;
var tilesFilled = 0; // number of tiles filled

var rows = ["top", "middle", "bottom"];
var cols = ["col1", "col2", "col3"];

// run the game on a loop
while( running ){

  if (player_first == false) { // computer goes first

    var comp_row, comp_col;
    while (true) {
      comp_row = rows[Math.floor(Math.random() * 3)];
      comp_col = cols[Math.floor(Math.random() * 3)];
      if (board[comp_row][comp_col] == ".") {
        board[comp_row][comp_col] = computer_token; // update board
        printBoard(board); // print board
        tilesFilled++;
        console.log(tilesFilled);
        break;
      }
    }

    if (checkWin(board, comp_row, comp_col, computer_token)) {
      console.log("You lost!");
      playAgain();
      break;
    }
  }

  // if all spaces are filled, end game - if computer goes first
  if (tilesFilled == 9) {
    console.log("Game over: No one won");
    playAgain();
    break;
  }

  // player's turn
  var row, col;
  while (true) {
    row = prompt("Enter your row: top, middle or bottom");
    col = prompt("Enter your column: col1, col2, col3");

    if (rows.includes(row) && cols.includes(col)) {
      if (board[row][col] == ".") {
        board[row][col] = player_token; // update board
        printBoard(board); // print board
        tilesFilled++;
        console.log(tilesFilled);
        break;
      }
      else console.log("Tile not available. Please choose another tile")
    }

    else console.log("Invalid input: please type a valid row and col");
  }

  // if game is won, end game
  if (checkWin(board, row, col, player_token)) {
    console.log("You won!");
    playAgain();
    break;
  }

  // if all spaces are filled, end game - if player goes first
  if (tilesFilled == 9) {
    console.log("Game over: No one won");
    playAgain();
    break;
  }

  if (player_first == true) { // computer goes second

    var comp_row, comp_col;
    while (true) {
      comp_row = rows[Math.floor(Math.random() * 3)];
      comp_col = cols[Math.floor(Math.random() * 3)];
      if (board[comp_row][comp_col] == ".") {
        board[comp_row][comp_col] = computer_token; // update board
        printBoard(board); // print board
        tilesFilled++;
        console.log(tilesFilled);
        break;
      }
    }

    if (checkWin(board, comp_row, comp_col, computer_token)) {
      console.log("You lost!");
      playAgain();
      break;
    }
  }

}
