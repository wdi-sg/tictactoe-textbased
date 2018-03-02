
// Initializa tic-tac-toe board with default values
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

// ------------------------------ Start of Functions --------------------------
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

// Function to check for diagonal win starting from the top left
function check_Left_Diagonal_Win(board){
  var dleft_win = false;
  if ((board.top.col1 === "X") && (board.middle.col2 === "X") && (board.bottom.col3 === "X") || (board.top.col1 === "O") && (board.middle.col2 === "O") && (board.bottom.col3 === "O")) {
    console.log("Right Diagonal Match!~~~");
    dleft_win = true;
    return dleft_win;
  }
  return dleft_win;
}

// Function to check for diagonal win starting from the top right
function check_Right_Diagonal_Win(board){
  var dright_win = false;
  if ((board.top.col3 === "X") && (board.middle.col2 === "X") && (board.bottom.col1 === "X") || (board.top.col3 === "O") && (board.middle.col2 === "O") && (board.bottom.col1 === "O")) {
        console.log("Left Diagonal Match!~~~");
        dright_win = true;
        return dright_win;
      }
  return dright_win;
}

// Function to check for vertical win on column 1
function check_Vertical_Win1(board){
  var v_win1 = false;
  if ((board.top.col1 === "X") && (board.middle.col1 === "X") && (board.bottom.col1 === "X") || (board.top.col1 === "O") && (board.middle.col1 === "O") && (board.bottom.col1 === "O")) {
        console.log("Column 1 Vertical Match!~~~");
        v_win1 = true;
        return v_win1;
      }
  return v_win1;
}

// Function to check for vertical win on column 2
function check_Vertical_Win2(board){
  var v_win2 = false;
  if ((board.top.col2 === "X") && (board.middle.col2 === "X") && (board.bottom.col2 === "X") || (board.top.col2 === "O") && (board.middle.col2 === "O") && (board.bottom.col2 === "O")) {
        console.log("Column 2Vertical Match!~~~");
        v_win2 = true;
        return v_win2;
      }
  return v_win2;
}

// Function to check for vertical win on column 3
function check_Vertical_Win3(board){
  var v_win3 = false;
  if ((board.top.col3 === "X") && (board.middle.col3 === "X") && (board.bottom.col3 === "X") || (board.top.col3 === "O") && (board.middle.col3 === "O") && (board.bottom.col3 === "O")) {
        console.log("Column 2 Vertical Match!~~~");
        v_win3 = true;
        return v_win3;
      }
  return v_win3;
}

// Function to check for horizontal win on row 1
function check_Horizontal_Win1(board){
  var h_win1 = false;
  if ((board.top.col1 === "X") && (board.top.col2 === "X") && (board.top.col3 === "X") || (board.top.col1 === "O") && (board.top.col2 === "O") && (board.top.col3 === "O")) {
        console.log("Row 1 Horizontal Match!~~~");
        h_win1 = true;
        return h_win1;
      }
  return h_win1;
}

// Function to check for horizontal win on row 2
function check_Horizontal_Win2(board){
  var h_win2 = false;
  if ((board.middle.col1 === "X") && (board.middle.col2 === "X") && (board.middle.col3 === "X") || (board.middle.col1 === "O") && (board.middle.col2 === "O") && (board.middle.col3 === "O")) {
        console.log("Row 2 Horizontal Match!~~~");
        h_win2 = true;
        return h_win2;
      }
  return h_win2;
}

// Function to check for horizontal win on row 3
function check_Horizontal_Win3(board){
  var h_win3 = false;
  if ((board.bottom.col1 === "X") && (board.bottom.col2 === "X") && (board.bottom.col3 === "X") || (board.bottom.col1 === "O") && (board.bottom.col2 === "O") && (board.bottom.col3 === "O")) {
        console.log("Row 3 Horizontal Match!~~~");
        h_win3 = true;
        return h_win3;
      }
  return h_win3;
}

// Function to check for winning state
function check_Winning_State(board){
  var win_state = false;
  var left_diagonal_win = check_Left_Diagonal_Win(board);
  var right_diagonal_win = check_Right_Diagonal_Win(board);
  var vertical_win1 = check_Vertical_Win1(board);
  var vertical_win2 = check_Vertical_Win2(board);
  var vertical_win3 = check_Vertical_Win3(board);
  var horizontal_win1 = check_Horizontal_Win1(board);
  var horizontal_win2 = check_Horizontal_Win2(board);
  var horizontal_win3 = check_Horizontal_Win3(board);
  if (left_diagonal_win || right_diagonal_win || vertical_win1 || vertical_win2 || vertical_win3 || horizontal_win1 || horizontal_win2 || horizontal_win3){
    console.log("Winning state discovered!~~~");
    win_state = true;
    return win_state;
  }
  return win_state;
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
// ------------------------------ End of Functions --------------------------

// ------------------------------ Game - Start --------------------------
// set a variable that represents
// whether or not the game is currently running
var running = true;
var no_win_state = true;
var no_all_filled = true;

// run the game on a loop
while( running ){
  // Ask user for input at which row and column
  var row = prompt("Enter your row: top, middle or bottom");
  var column = prompt("Enter your column: col1, col2, col3");

  // Ask user for the value that is to be inserted
  var value = prompt("Enter your value: X, O");

  // Update board with value user inserted
  board[row][column] = value;

  // Display location of where the value is & and the value itselfS
  console.log("Current value @ " + "[" + row + "]" + "[" + column + "] = ", board[row][column]);

  // Display the board with the updated value
  print_Board(board);

  // if game is won, end game
  var win = check_Winning_State(board);
  if (win){
    alert("YAYYY!~~~, YOU WON THE GAME");
    running = false;
    break;
  }

  // if all spaces are filled - end game, else - continue gameplay
  var all_filled = check_All_Filled(board);
  if (all_filled){
    alert("Board filled, GAME OVER!~~~");
    running = false;
    break;
  }

}
// ------------------------------ Game - End --------------------------
