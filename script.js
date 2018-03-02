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

for( var rowKey in board ){

  var row = board[rowKey];

  for( var columnKey in row ){

    boardOutput = boardOutput + row[columnKey];
  }

  boardOutput = boardOutput + "\n";
}

console.log( boardOutput );

var playerOne = prompt("Name, Player 1: ")
var playerTwo = prompt("Name, Player 2: ")

var running = true;

while( running ){


  var row = prompt(playerOne + ", Enter your row: (top/middle/bottom)");
  var column = prompt(playerOne + ", Enter your column: (col1/col2/col3)");


  
  if(board[row][column] === ".") {
    board[row][column] = "X"
  }

  else{

  }
  var boardOutput = "";

  for( var rowKey in board ){


    var row = board[rowKey];

    for( var columnKey in row ){

      boardOutput = boardOutput + row[columnKey];
    }

    boardOutput = boardOutput + "\n";
  }

  console.log( boardOutput );

  //winning: 123
  if(board["top"]["col1"] === board["top"]["col2"] && board["top"]["col1"] === board["top"]["col3"] && board["top"]["col1"] === "X" || board["top"]["col1"] === board["top"]["col2"] && board["top"]["col1"] === board["top"]["col3"] && board["top"]["col1"] === "O") 
  {
    console.log(playerOne +  "  wins!");
    break;
  }

  //winning: 456
  if(board["middle"]["col1"] === board["middle"]["col2"] && board["middle"]["col1"] === board["middle"]["col3"] && board["middle"]["col1"] === "X" || board["middle"]["col1"] === board["middle"]["col2"] && board["middle"]["col1"] === board["middle"]["col3"] && board["middle"]["col1"] === "O") {
    console.log(playerOne + "  wins!");
    break;
  }

  //winning: 789
  if(board["bottom"]["col1"] === board["bottom"]["col2"] && board["bottom"]["col1"] === board["bottom"]["col3"] && board["bottom"]["col1"] === "X" || board["bottom"]["col1"] === board["bottom"]["col2"] && board["bottom"]["col1"] === board["bottom"]["col3"] && board["bottom"]["col1"] === "O") {
    console.log(playerOne + "  wins!");
    break;
  }

  //winning: 147
  if(board["top"]["col1"] === board["middle"]["col1"] && board["top"]["col1"] === board["bottom"]["col1"] && board["top"]["col1"] === "X" || board["top"]["col1"] === board["middle"]["col1"] && board["top"]["col1"] === board["bottom"]["col1"] && board["top"]["col1"] === "O") {
    console.log(playerOne + "  wins!");
    break;
  }

  //winning: 258
  if(board["top"]["col2"] === board["middle"]["col2"] && board["top"]["col2"] === board["bottom"]["col2"] && board["top"]["col2"] === "X" || board["top"]["col2"] === board["middle"]["col2"] && board["top"]["col2"] === board["bottom"]["col2"] && board["top"]["col2"] === "O") {
    console.log(playerOne + "  wins!");
    break;
  }

  //winning: 369
  if(board["top"]["col3"] === board["middle"]["col3"] && board["top"]["col3"] === board["bottom"]["col3"] && board["top"]["col3"] === "X" || board["top"]["col3"] === board["middle"]["col3"] && board["top"]["col3"] === board["bottom"]["col3"] && board["top"]["col3"] === "O") {
    console.log(playerOne + "  wins!");
    break;
  }

  //winning 159
  if(board["top"]["col1"] === board["middle"]["col2"] && board["top"]["col1"] === board["bottom"]["col3"] && board["top"]["col1"] === "X" || board["top"]["col1"] === board["middle"]["col2"] && board["top"]["col1"] === board["bottom"]["col3"] && board["top"]["col1"] === "O") {
    console.log(playerOne + "  wins!");
    break;
  }

  //winning 357
  if(board["top"]["col3"] === board["middle"]["col2"] && board["top"]["col3"] === board["bottom"]["col1"] && board["top"]["col3"] === "X" ||board["top"]["col3"] === board["middle"]["col2"] && board["top"]["col3"] === board["bottom"]["col1"] && board["top"]["col3"] === "O") {
    console.log(playerOne + "  wins!");
    break;
  }







  var row = prompt(playerTwo + ", Enter your row: (top/middle/bottom)");
  var column = prompt(playerTwo + ", Enter your column: (col1/col2/col3)");

  board[row][column] = "O"

  var boardOutput = "";

  for( var rowKey in board ){

    var row = board[rowKey];

    for( var columnKey in row ){

      boardOutput = boardOutput + row[columnKey];
    }

    boardOutput = boardOutput + "\n";
  }

  console.log( boardOutput );


  //winning: 123
  if(board["top"]["col1"] === board["top"]["col2"] && board["top"]["col1"] === board["top"]["col3"] && board["top"]["col1"] === "X" || board["top"]["col1"] === board["top"]["col2"] && board["top"]["col1"] === board["top"]["col3"] && board["top"]["col1"] === "O")  {
    console.log(playerTwo + "  wins!");
    break;
  }

  //winning: 456
  if(board["middle"]["col1"] === board["middle"]["col2"] && board["middle"]["col1"] === board["middle"]["col3"] && board["middle"]["col1"] === "X" || board["middle"]["col1"] === board["middle"]["col2"] && board["middle"]["col1"] === board["middle"]["col3"] && board["middle"]["col1"] === "O") {
    console.log(playerTwo + "  wins!");
    break;
  }

  //winning: 789
  if(board["bottom"]["col1"] === board["bottom"]["col2"] && board["bottom"]["col1"] === board["bottom"]["col3"] && board["bottom"]["col1"] === "X" || board["bottom"]["col1"] === board["bottom"]["col2"] && board["bottom"]["col1"] === board["bottom"]["col3"] && board["bottom"]["col1"] === "O") {
    console.log(playerTwo + "  wins!");
    break;
  }

  //winning: 147
  if(board["top"]["col1"] === board["middle"]["col1"] && board["top"]["col1"] === board["bottom"]["col1"] && board["top"]["col1"] === "X" || board["top"]["col1"] === board["middle"]["col1"] && board["top"]["col1"] === board["bottom"]["col1"] && board["top"]["col1"] === "O") {
    console.log(playerTwo + "  wins!");
    break;
  }

  //winning: 258
  if(board["top"]["col2"] === board["middle"]["col2"] && board["top"]["col2"] === board["bottom"]["col2"] && board["top"]["col2"] === "X" || board["top"]["col2"] === board["middle"]["col2"] && board["top"]["col2"] === board["bottom"]["col2"] && board["top"]["col2"] === "O") {
    console.log(playerTwo + "  wins!");
    break;
  }

  //winning: 369
  if(board["top"]["col3"] === board["middle"]["col3"] && board["top"]["col3"] === board["bottom"]["col3"] && board["top"]["col3"] === "X" || board["top"]["col3"] === board["middle"]["col3"] && board["top"]["col3"] === board["bottom"]["col3"] && board["top"]["col3"] === "O") {
    console.log(playerTwo + "  wins!");
    break;
  }

  //winning 159
  if(board["top"]["col1"] === board["middle"]["col2"] && board["top"]["col1"] === board["bottom"]["col3"] && board["top"]["col1"] === "X" || board["top"]["col1"] === board["middle"]["col2"] && board["top"]["col1"] === board["bottom"]["col3"] && board["top"]["col1"] === "O") {
    console.log(playerTwo + "  wins!");
    break;
  }

  //winning 357
  if(board["top"]["col3"] === board["middle"]["col2"] && board["top"]["col3"] === board["bottom"]["col1"] && board["top"]["col3"] === "X" || board["top"]["col3"] === board["middle"]["col2"] && board["top"]["col3"] === board["bottom"]["col1"] && board["top"]["col3"] === "O") {
    console.log(playerTwo + "  wins!");
    break;
  }


}



















