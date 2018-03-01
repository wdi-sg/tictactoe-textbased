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

//moves tracker
var moves = 0;

/** execute commands */
var player1 = "";
var player2 = "";
var turn = "";
var gameStart = prompt("Begin a tick tack toe game? [Y/N]");
if(checkGameStart(gameStart)==true){
  console.log("great let's start!\n Here is the board we gonna play at!");
  console.log(boardOutput());
  gamePlay();
  //reset the board state for another game
  while(true){
    gameStart = prompt("Do you still want to play? [Y/N]");
    if(checkGameStart(gameStart)==true){
      board = {
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
      console.log("Wow! Another game =) Glad y'all having fun");
      console.log(boardOutput());        
      gamePlay();
    }
    else{break;}
  }
};

/** Helper functions to check gameStart*/
function checkGameStart(gameStart){
  if(gameStart=="Y"){
    return true;
  }
  else{
    console.log("We shall play next time then!");
  }
}

//roll a dice to see who start first
//if player 1 choose X first, player 2 automatically plays O
function goFirst(player1,player2){
  var dice = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
  if(dice=>4){
    console.log(player1 + "'s start first!");
    return player1;
  }
  else{
    console.log(player2 + "'s start first!");
    return player2;
  }
}

//main game function
//prompt for player names and dice to see who role first
//run the game
function gamePlay(){
  var running = true;
  player1 = prompt("Enter your name!");
  player2 = prompt("Enter your opponent name!");
  turn = goFirst(player1,player2);
  var row = "";
  var column = "";
  var p1_choice = "";
  var p2_choice = "";

  while(running){

    console.log(turn + "'s turn now!");

    if(turn==player1){
      if(p1_choice=="" && p2_choice==""){
        p1_choice = prompt("Make your choice. Choose X or O!");
      }
      else if(p1_choice=="" && p2_choice=="X"){
        p1_choice = "O";
      }
      else if(p1_choice=="" && p2_choice=="O"){
        p1_choice = "X";
      }
   
      row = prompt("enter your row: top, middle or bottom");
      column = prompt("enter your column: col1, col2, col3");
      gameInput(player1,p1_choice,row,column);
      if(victoryCond(p1_choice)==true){
        console.log(player1 + " has won! \n total moves in game:" + moves);
        console.log(boardOutput());
        break;
      };
    }
    else if(turn==player2){
      if(p1_choice=="" && p2_choice==""){
        p2_choice = prompt("Make your choice. Choose X or O!");
      }
      else if(p1_choice=="X" && p2_choice==""){
        p2_choice = "O";
      }
      else if(p1_choice=="O" && p2_choice==""){
        p2_choice = "X";
      }
  
      row = prompt("enter your row: top, middle or bottom");
      column = prompt("enter your column: col1, col2, col3");
      gameInput(player2,p2_choice,row,column);
      if(victoryCond(p2_choice)==true){
        console.log(player2 + " has won! \n total moves in game:" + moves);
        console.log(boardOutput());
        break;
      };
    }
    console.log(boardOutput());
    if(moves==9){
      console.log("Draw! There's no winner...")
      break;
    }
  }
}

function gameInput(player,choice,row,column){
  if(board[row][column]!="."){
    console.log("Error! " + board[row][column] + " is already inside!");
    if(turn==player1){
      turn = player1;
    }
    else{turn = player2;}
  }
  else{
      board[row][column] = choice;
      console.log(player + " have inputted " + board[row][column]);
      moves++;
      if(turn==player1){
        turn = player2
      }
      else{turn = player1;}
  }
}


function boardOutput(){
  var boardOutput = "";
  for( var rowKey in board ){
    var row = board[rowKey];
    for( var columnKey in row ){
      boardOutput = boardOutput + row[columnKey];
    }
    boardOutput = boardOutput + "\n";
  }
  return boardOutput;
}

/** Victory condition where n is the choice(X/O) */
function victoryCond(n){
  if(moves>4){
    if(checkHorizontal(n)==true||checkVertical(n)==true||checkDiagonal(n)==true){
      return true;
    }
  }
  return false;
}

/** Helper functions - Victory condition */
function checkHorizontal(n){
  for(var j in board){
    //cannot have three variables equal to each other;
    var column1 = board[j]["col1"];
    var column2 = board[j]["col2"];
    var column3 = board[j]["col3"];

    if(column1==n && column2==n && column3==n ){
      console.log("horizontal match");
      return true;
    }        
  }
  return false;
}

function checkVertical(n){
  for(var i=1;i<4;i++){
    var currColumn = "col" + i.toString();
    var row1 = board["top"][currColumn];
    var row2 = board["middle"][currColumn];
    var row3 = board["bottom"][currColumn];

    if(row1==n && row2==n && row3==n){
      console.log("vertical match");
      return true;
    } 
  }
  return false;
}

function checkDiagonal(n){
  if(board["top"]["col1"]==board["middle"]["col2"]){
    if(board["top"]["col1"]==board["bottom"]["col3"]){
      if(board["top"]["col1"]==n){
        console.log("diagonal match");
        return true;
      }
    }
  }
  else if(board["top"]["col3"]==board["middle"]["col2"]){
    if(board["top"]["col3"]==board["bottom"]["col1"]){
      if(board["top"]["col3"]==n){
        console.log("diagonal match");
        return true;
      }
    }
  }
  return false;
}


//function to see if board is full. 
//prompt y/n to see if want to reinitialize game.