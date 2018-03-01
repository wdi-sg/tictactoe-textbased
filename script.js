`HELPER FUNCTIONS`

function printBoard(board) { // prints out the board
  var boardOutput = "";

  // loop through each row
  for( var rowKey in board ){
    var row = board[rowKey];
    for( var columnKey in row ){
      boardOutput = boardOutput + row[columnKey];
    }
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

// Player chooses if he/she wants to play against the computer
var computer_mode;
while (true) {
  var comp = prompt("Do you want to play against the computer? (y/n)");
  if (comp == 'y') {
    computer_mode = true;
    break;
  }
  else if (comp == 'n') {
    computer_mode = false;
    break;
  }
  else {
    console.log("Invalid input: please type either 'y' or 'n'");
  }
}

// get players' names
var player1_name, player2_name;
if (computer_mode == false) {
  player1_name = prompt("Player 1, what's your name?");
  player2_name = prompt("Player 2, what's your name?");
}

// Player chooses a token
var player1_token, player2_token;
while (true) {
  if (computer_mode) player1_token = prompt("Choose a token 'X' or 'O'");
  else player1_token = prompt(player1_name + ", choose a token 'X' or 'O'");

  if (player1_token == 'X') {
    player2_token = 'O';
    if (! computer_mode) console.log(player2_name + ", your token will be: " + player2_token);
    break;
  }
  else if (player1_token == 'O') {
    player2_token = 'X';
    if (! computer_mode) console.log(player2_name + ", your token will be: " + player2_token);
    break;
  }
  else {
    console.log("Invalid input: please type either 'X' or 'O'");
  }

}

// Player chooses order of playing
var player1_first;
while (true) {
  var order;
  if (computer_mode) order = prompt("Do you want to go first? (y/n)");
  else order = prompt(player1_name + ", do you want to go first? (y/n)");

  if (order == 'y') {
    player1_first = true;
    break;
  }
  else if (order == 'n') {
    player1_first = false;
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
// player1: even round #s, player2: odd round #s
var roundNum;
if (player1_first == true) roundNum = 0;
else roundNum = 1; // player 2 goes first

while( running ){

  if (roundNum % 2 == 0) { // player 1's turn
    var player1_row, player1_col;
    while (true) {
      if (computer_mode) {
        player1_row = prompt("Enter your row: top, middle or bottom");
        player1_col = prompt("Enter your column: col1, col2, col3");
      }

      else if (! computer_mode) {
        player1_row = prompt(player1_name + ", enter your row: top, middle or bottom");
        player1_col = prompt(player1_name + ", enter your column: col1, col2, col3");
      }

      if (rows.includes(player1_row) && cols.includes(player1_col)) {
        if (board[player1_row][player1_col] == ".") {
          board[player1_row][player1_col] = player1_token; // update board
          tilesFilled++;
          console.log("Round: " + tilesFilled);
          printBoard(board); // print board
          break;
        }
        else console.log("Tile not available. Please choose another tile")
      }

      else console.log("Invalid input: please type a valid row and col");
    }

    // if game is won, end game
    if (checkWin(board, player1_row, player1_col, player1_token)) {
      if (computer_mode) console.log("You won!");
      else console.log(player1_name + ", you won!");
      playAgain();
      break;
    }
  }

  else if (roundNum % 2 == 1) { // player 2's turn
    var player2_row, player2_col;
    while (true) {

      if (computer_mode) {
        player2_row = rows[Math.floor(Math.random() * 3)];
        player2_col = cols[Math.floor(Math.random() * 3)];
      }
      else if (! computer_mode) {
        player2_row = prompt(player2_name + ", enter your row: top, middle or bottom");
        player2_col = prompt(player2_name + ", enter your column: col1, col2, col3");
      }

      if (board[player2_row][player2_col] == ".") {
        board[player2_row][player2_col] = player2_token; // update board
        tilesFilled++;
        console.log("Round: " + tilesFilled);
        printBoard(board); // print board
        break;
      }
    }

    if (checkWin(board, player2_row, player2_col, player2_token)) {
      if (computer_mode) console.log("You lost!");
      else console.log(player2_name + ", you won!");
      playAgain();
      break;
    }
  }

  // if all spaces are filled, end game
  if (tilesFilled == 9) {
    console.log("Game over: No one won");
    playAgain();
    break;
  }

  roundNum++;

}
