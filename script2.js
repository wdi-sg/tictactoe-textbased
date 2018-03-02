var board = {
  row1:{
    col1:".",
    col2:".",
    col3:"."
  },
  row2:{
    col1:".",
    col2:".",
    col3:"."
  },
  row3:{
    col1:".",
    col2:".",
    col3:"."
  }
};

var resetBoard =function(){
  for(var rowKey in board){
    var row = board[rowKey];
      // loop through each column
      for(var columnKey in row){
        // concatenate the string together
        var col=row[columnKey]
        row[col]==".";
      }
  }
}

var printBoard = function(){
  var boardOutput = "";
  // loop through each row
  for(var rowKey in board){
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
  boardOutput="";
};

// set a variable that represents
// whether or not the game is currently running

var updateScore=function(board,row,column){
  //board.row.column="+"
  board[row][column]="+";
}

var checkWinRow=function(){
  for (rowKey in board){
    var row=board[rowKey]
    if (row["col1"]=="."&&row["col2"]=="."&&row["col3"]=="."){
      return;
    }
    else if (row["col1"]===row["col2"]&&row["col2"]===row["col3"]){
      //alert("[checkWinRow] You won!");
      //resetBoard();
      return true;
    }else {
      return false;
    }
  }
}

var checkWinCol=function(){
  for(i=1;i<4;i++){
    var checkArray=[];
    for(rowKey in board){
      var row = board[rowKey]
        checkArray.push(row["col"+i]);
      }
    if (checkArray[0]=="."&&checkArray[1]=="."&&checkArray[2]=="."){
      checkArray=[];
      return;
    }else if (checkArray[0]==checkArray[1]&&checkArray[1]===checkArray[2]){
      //alert ("[checkWinCol] You won!");
      checkArray=[];
      //resetBoard();
      return true;
    }else {
      checkArray=[];
      return false;
    }
  }
}

var checkWinDiagLR=function(){
  if(board["row1"]["col1"]=="."&&board["row2"]["col2"]=="."&&board["row3"]["col3"]=="."){
    return;
  }else if(board["row1"]["col1"]=="+"&&board["row2"]["col2"]=="+"&&board["row3"]["col3"]=="+") {
    //alert("[checkWinDiagLR] You won!");
    //resetBoard();
    return true;
  }else{
    return;
  }
}

var chekWinDiagRL=function(){
  if(board["row1"]["col3"]=="."&&board["row2"]["col2"]=="."&&board["row3"]["col1"]=="."){
    return;
  }else if(board["row1"]["col3"]==board["row2"]["col2"]&&board["row2"]["col2"]==board["row3"]["col1"]){
    //alert ("[chekWinDiagRL] You won!");
    //resetBoard();
    return true;
  }else{
    return;
  }
}


// run the game on a loop

var running=function(){
  if(checkWinRow()==true||checkWinCol()==true||checkWinDiagLR()==true||chekWinDiagRL()==true){
    return false;
  }else{
    return true;
  }
}

do {
  var row = prompt("enter your row: row1, row2 or row3");
  var column = prompt("enter your column: col1, col2, col3");
  updateScore(board,row,column);
  checkWinRow();
  checkWinCol();
  checkWinDiagLR();
  chekWinDiagRL();
  console.log("CurrentBoard:");
  printBoard();
}while (running()==true);
if (running()==false){
    alert("You won!");
  };
resetBoard();

  // you can also use the break statement to get out of a while loop
  //break;

  // if all spaces are filled, end game

  // if game is won, end game



/*var checkWinCol=function(){  
  //loop column
    for (i=1;i<4;i++){
      var col = board["col"+i];
      var tickCount = 0;
      //loop row
      for(rowKey in board){
        var row = board[rowKey];
        //check tick
        if(row[col]==="+"){
          counter+=1;
          return tickCount;
        }
        if (tickCount===3){
          alert("You Won!");
        }else {
          return false
        }
      } 
  }
}

var checkWinRow=function(){
  //loop each row
  for (var rowKey in board){
    var row = board[rowKey]
    var tickCount=0
    //loop each column
      for (colKey in row){
        if(row[colKey]==="+"){
          tickCount+=1;
          return tickCount
        }
        if(tickCount===3){
          alert("You Won!");
        else {
          return false
        }
        }
      }
  }
}; */
