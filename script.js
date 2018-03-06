
// Initialize tic-tac-toe board with default values
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

var clean_board = {
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

var players = {
  player1:{
    game_token:"."
  },
  player2:{
    game_token:"."
  }
};

var player1_name = "";
var player2_name = "";
var player1_token = "";
var player2_token = "";
var player1_win = false;
var player2_win = false;
var round = 0;
var running = true;

// ------------------------------ Start of Functions --------------------------
// Function to reset variables
function reset_variables(){
  player1_name = "";
  player2_name = "";
  player1_token = "";
  player2_token = "";
  player1_win = false;
  player2_win = false;
  round = 0;
  board = clean_board;
  console.log("Board after clean up");
  console.log(print_Board(board));
  running = true;
  return board;
}

// Function to print the board
function print_Board(board){
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

  console.log( "Board:" + "\n" + boardOutput );
}

// Function to check who won the game
function check_who_win(players){
  if ((players.player1.game_token === "X") || (players.player1.game_token === "O")) {
    player1_win = true;
  }
  else if ((players.player2.game_token === "O") || (players.player2.game_token === "O")) {
    player2_win = true;
  }
}

// Function to check for diagonal win starting from the top left
function check_Left_Diagonal_Win(board){
  if ((board.top.col1 === "X") && (board.middle.col2 === "X") && (board.bottom.col3 === "X") || (board.top.col1 === "O") && (board.middle.col2 === "O") && (board.bottom.col3 === "O")) {
    console.log("Right Diagonal Match!~~~");
    check_who_win(players);
  }
}

// Function to check for diagonal win starting from the top right
function check_Right_Diagonal_Win(board){
  if ((board.top.col3 === "X") && (board.middle.col2 === "X") && (board.bottom.col1 === "X") || (board.top.col3 === "O") && (board.middle.col2 === "O") && (board.bottom.col1 === "O")) {
    console.log("Left Diagonal Match!~~~");
    check_who_win(players);
  }
}

// Function to check for vertical win on column 1
function check_Vertical_Win1(board){
  if ((board.top.col1 === "X") && (board.middle.col1 === "X") && (board.bottom.col1 === "X") || (board.top.col1 === "O") && (board.middle.col1 === "O") && (board.bottom.col1 === "O")) {
    console.log("Column 1 Vertical Match!~~~");
    check_who_win(players);
  }
}

// Function to check for vertical win on column 2
function check_Vertical_Win2(board){
  if ((board.top.col2 === "X") && (board.middle.col2 === "X") && (board.bottom.col2 === "X") || (board.top.col2 === "O") && (board.middle.col2 === "O") && (board.bottom.col2 === "O")) {
    console.log("Column 2Vertical Match!~~~");
    check_who_win(players);
  }
}

// Function to check for vertical win on column 3
function check_Vertical_Win3(board){
  if ((board.top.col3 === "X") && (board.middle.col3 === "X") && (board.bottom.col3 === "X") || (board.top.col3 === "O") && (board.middle.col3 === "O") && (board.bottom.col3 === "O")) {
    console.log("Column 2 Vertical Match!~~~");
    check_who_win(players);
  }
}

// Function to check for horizontal win on row 1
function check_Horizontal_Win1(board){
  if ((board.top.col1 === "X") && (board.top.col2 === "X") && (board.top.col3 === "X") || (board.top.col1 === "O") && (board.top.col2 === "O") && (board.top.col3 === "O")) {
    console.log("Row 1 Horizontal Match!~~~");
    check_who_win(players);
  }
}

// Function to check for horizontal win on row 2
function check_Horizontal_Win2(board){
  if ((board.middle.col1 === "X") && (board.middle.col2 === "X") && (board.middle.col3 === "X") || (board.middle.col1 === "O") && (board.middle.col2 === "O") && (board.middle.col3 === "O")) {
    console.log("Row 2 Horizontal Match!~~~");
    check_who_win(players);
  }
}

// Function to check for horizontal win on row 3
function check_Horizontal_Win3(board){
  if ((board.bottom.col1 === "X") && (board.bottom.col2 === "X") && (board.bottom.col3 === "X") || (board.bottom.col1 === "O") && (board.bottom.col2 === "O") && (board.bottom.col3 === "O")) {
    console.log("Row 3 Horizontal Match!~~~");
    check_who_win(players);
  }
}

// Function to check for winning state
function check_Winning_State(board){
  check_Left_Diagonal_Win(board);
  check_Right_Diagonal_Win(board);
  check_Vertical_Win1(board);
  check_Vertical_Win2(board);
  check_Vertical_Win3(board);
  check_Horizontal_Win1(board);
  check_Horizontal_Win2(board);
  check_Horizontal_Win3(board);
}

// Function to check for all filled
function check_All_Filled(board){
  if ((board.top.col1 != "." && board.top.col2 != "." && board.top.col3 != ".") &&
      (board.middle.col1 != "." && board.middle.col2 != "." && board.middle.col3 != ".") &&
      (board.bottom.col1 != "." && board.bottom.col2 != "." && board.bottom.col3 != ".")){
        console.log("Board filled");
        return true;
      }
  return false;
}

// Function to start the game
function start_Game(condition, board){
  // Ask for player 1 name and game_token
  player1_name = prompt("Enter player 1 name: ");
  players.player1.name = player1_name;
  player1_token = prompt(players.player1.name + ", Choose your game token 'X' or 'O'");
  alert(players.player1.name + ", YOUR GAME TOKEN IS " + player1_token);

  // Update players 1 & 2 game_token
  players.player1.game_token = player1_token;
  if (player1_token === "X") {
    player2_token = "O";
    players.player2.game_token = player2_token;
  }
  else if (player1_token === "O") {
    player2_token = "X";
    players.player2.game_token = player2_token;
  }

  // Ask for player 2 name and notify player 2 of game_token
  player2_name = prompt("Enter player 2 name: ");
  players.player2.name = player2_name;
  alert(players.player2.name + ", YOUR GAME TOKEN IS " + player2_token);

  console.log("Player 1 token is " + player1_token);
  console.log("Player 2 token is " + player2_token);

  // Notify players to start with player 1 first
  alert("---------------- " + players.player1.name + " GOES FIRST-------------------------");

  console.log("Condition is " + condition);

  // run the game on a loop
  while(condition){

    // Increment round by 1
    round += 1;

    // Ask for PLAYER 2 inputs
    if (round % 2 == 0) {
      // Ask user for input at which row and column
      var row = prompt(players.player2.name + ", Enter your row: [top, middle or bottom]");
      var column = prompt(players.player2.name + ", Enter your column: [col1, col2, col3]");

      // Update board with value player 2 inserted
      board[row][column] = players.player2.game_token;
    }
    // Ask for PLAYER 1 inputs
    else if (round % 2 == 1) {
      // Ask user for input at which row and column
      var row = prompt(players.player1.name + ", Enter your row: top, middle or bottom");
      var column = prompt(players.player1.name + ", Enter your column: col1, col2, col3");

      // Update board with value player 1 inserted
      board[row][column] = players.player1.game_token;
    }

    // Display location of where the value is & and the value itselfS
    console.log("Current value @ " + "[" + row + "]" + "[" + column + "] = ", board[row][column]);

    // Display the board with the updated value
    print_Board(board);

    // if game is won, end game
    check_Winning_State(board);
    if (player1_win == true){
      alert("CONGRATS!~~~, " + player1_name + " HAS WON THE GAME!");
      // running = false;
      var replay = prompt("Do you want to replay the game? YES/NO");
      if (replay === "YES") {
        var new_board = reset_variables();
        start_Game(true, new_board);
      }
      else if (replay === "NO") {
        // condition = false;
        break;
      }
      // break;
    }
    else if (player2_win == true) {
      alert("CONGRATS!~~~, " + player2_name + " HAS WON THE GAME!");
      // running = false;
      var replay = prompt("Do you want to replay the game? YES/NO");
      if (replay === "YES") {
        var new_board = reset_variables();
        start_Game(true, new_board);
      }
      else if (replay === "NO") {
        // condition = false;
        break;
      }
      // break;
    }

    // if all spaces are filled - end game, else - continue gameplay
    var all_filled = check_All_Filled(board);
    if (all_filled){
      alert("Board filled, GAME OVER!~~~");
      // running = false;
      var replay = prompt("Do you want to replay the game? YES/NO");
      if (replay === "YES") {
        var new_board = reset_variables();
        start_Game(true, new_board);
      }
      else if (replay === "NO") {
        // condition = false;
        break;
      }
      // break;
    }
  }
}
// ------------------------------ End of Functions --------------------------

// ------------------------------ Game - Start --------------------------

// Ask user if they want to play the game
var play = prompt("Do you want to play? YES/NO");
if (play === "YES") {
  while(running){
    console.log("Condition");
    start_Game(running, board);
    // var replay = prompt("Do you want to replay the game? YES/NO");
    // if (replay === "YES") {
    //   reset_variables();
    //   start_Game(running, board);
    // }
    // else if (replay === "NO") {
    //   running = false;
    //   break;
    // }
    running = false;
    break;
  }
}
else {
  console.log("You have chosen not to play the game");
}

// ------------------------------ Game - End --------------------------
