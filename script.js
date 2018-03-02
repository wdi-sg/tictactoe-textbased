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

var running = true;

while( running ){
  var row = prompt("enter your row: top, middle or bottom");
  var column = prompt("enter your column: col1, col2, col3");


  
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

  if(board["top"]["col1"] === board["top"]["col2"] && board["top"]["col1"] === board["top"]["col3"]
    && board["top"]["col1"] === "X" || board["top"]["col1"] === "O") 
  {
    console.log(board["top"]["col1"] + " player wins!");
    break;
  }

  if(board["middle"]["col1"] === board["middle"]["col2"] && board["middle"]["col1"] === board["middle"]["col3"]
    && board["middle"]["col1"] === "X" || board["middle"]["col1"] === "O") {
    console.log(board["middle"]["col1"] + " player wins!");
    break;
  }
  }

      
    board["bottom"]["col1"] === board["bottom"]["col2"] && board["bottom"]["col1"] === board["bottom"]["col3"]
    && board["bottom"]["col1"] === "X" || board["bottom"]["col1"] === "O"

    board["top"]["col1"] === board["middle"]["col1"] && board["middle"]["col1"] === board["bottom"]["col1"]
    && board["top"]["col1"] === "X" || board["top"]["col1"] === "O"


  var row = prompt("enter your row: top, middle or bottom");
  var column = prompt("enter your column: col1, col2, col3");

  board[row][column] = "O"

  var boardOutput = "";

  for( var rowKey in board ){

    var row = board[rowKey];

    for( var columnKey in row ){

      boardOutput = boardOutput + row[columnKey];
    }

    boardOutput = boardOutput + "\n";
  }

  if(board["top"]["col1"] === board["top"]["col2"] && board["top"]["col1"] === board["top"]["col3"]) {
    console.log(board["top"]["col1"] + " player wins!");
    break;

  }


  console.log( boardOutput );



  


}


















