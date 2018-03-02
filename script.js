// prompts user for computer or human player
var computer = undefined;
var computer = true;
var computerInput = "YES";
var username1  = "Mr";
var username2 = "Mrs";
var userTurn = 1;

function setComputerPlayer(){
  while (computerInput != "YES"  && computerInput != "NO"  )
  {
    computerInput = prompt("Do you wish to play against the computer? yes / no");
    computerInput = computerInput.toUpperCase().trim(); 
    computer = (computerInput == "YES" ? true : computerInput = "NO" ? false : undefined );
  }
}

setComputerPlayer();



//Set up user names
function setUsersNames(){
  username1 = prompt("What is player 1 name");
  username2 = prompt("What is player 2 name" + (computer === true ? " (Computer)" : ""));
}


//set up gamestate

var gamestate = {
//Set up board
userTurn : 1,
computer : computer,
username1 : username1,
username2 : username2,
userPiece1 : "x ",
userPiece2 : "o ",
board : [],
validMoves: [],
winCondition: 3,
boardSize: 5

};

//set up gameboard according to boardsize
function setupBoard(obj){
  var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(i=0; i < obj.boardSize; i++){
    if(!obj.board[i]) {obj.board[i] = [];}
    for(j=0; j < obj.boardSize; j++){
      if(!obj.board[i][j]) {obj.board[i][j] = 0; obj.validMoves.push(abc[j]+(i+1));}
    }
  }

  return obj;
}


function displayBoard(obj){

  //Convert column to ABC 
  var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var output = "$   ";
  for(i = 0; i < obj.boardSize; i++){ output += abc[i];}
    output += "\n" ;
  
//loop board and display

for(i=0; i < obj.boardSize; i++){
  output += i + 1 + "   ";
  for(j=0; j < obj.boardSize; j++){

    output += (obj.board[i][j] == 1 ? obj.userPiece1 : obj.board[i][j] == 2 ? obj.userPiece2 :  "_ ");
//output += ( j<obj.boardSize-1 && obj.board[i][j] == 0 ? "|" : " ");

}


output += "\n";

}
output +="\n";
return output;
}


function promptUser(obj){
  //console.log (obj);
  var result = "";
  var validMovesString = "";
  username = (obj.userTurn === 1 ? obj.username1 : obj.username2);
  validMoves = obj.validMoves;
  for(i=0; i < validMoves.length; i++){
    validMovesString += validMoves[i]+", ";
  }

  while(!validMoves.includes(result) ) {
    result = prompt( displayBoard(obj) + username + ": Please select a move. Use "+validMovesString+" to indicate your move.").replace(/\s+/g, '').toUpperCase();
  }
  return result;

}


function checkWin(obj){
//check for n in a row
//check vertical
var win = false;
for(i = 0; i < obj.boardSize ; i++){
  for(j = 0; j < obj.boardSize; j++){
    var verticalWin = 1;
    var horizontalWin = 1;
    var diagDownWin =1;
    var diagUpWin =1;

    for(k = 0; k < obj.winCondition -1; k++){
       
      //check vertical
       if(( i <= obj.boardSize - obj.winCondition && obj.board[i+k][j] == obj.board[i+k+1][j] && obj.board[i+k][j] !== 0 ? true : false) == true){
       verticalWin++; 

     }

     //check horizontal
     if((j <= obj.boardSize - obj.winCondition && obj.board[i][j+k] == obj.board[i][j+k+1] && obj.board[i][j+k] !==0 ? true : false) == true){
       horizontalWin++; 
     }

     
     //check diagonal down
     if((j <= obj.boardSize - obj.winCondition && i <= obj.boardSize - obj.winCondition && obj.board[i+k][j+k] == obj.board[i+k+1][j+k+1] && obj.board[i+k][j+k] !==0 ? true : false) == true){
       diagDownWin++; 
     }

     //check diagonal up
     // console.log(obj.boardSize -1+"-"+obj.boardSize -1+"-"++"-"++"-")
     if((j >= obj.boardSize -1  && i >= obj.boardSize -1 && obj.board[i-k][j-k] == obj.board[i-k-1][j-k-1] && obj.board[i-k][j-k] !==0 ? true : false) == true){
            console.log(j+"-"+i)

       diagUpWin++; 
     }


   }

  if(horizontalWin >= obj.winCondition || verticalWin >= obj.winCondition || diagDownWin >= obj.winCondition || diagUpWin >= obj.winCondition){  return true;}
 
 }
}



 return false;

}

function checkMoves(obj, result){

//parse userinput
j = result.charCodeAt(0)-65; 
i = result.charCodeAt(1)-49; 

//set move and remove moves
obj.board[i][j] = (obj.userTurn === 1 ? 2 : 1); 
obj.validMoves.splice(obj.validMoves.indexOf(result),1);

//set next turn;
obj.userTurn = (obj.userTurn === 1 ? 2 : 1 );

console.log(checkWin(obj));

return obj;

}



// set a variable that represents
// whether or not the game is currently running
var running = true;

gamestate = setupBoard(gamestate);
//console.log(gamestate);
while( running ){

  userInput = promptUser(gamestate);
  gamestate = checkMoves(gamestate, userInput);


}




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

//console.log( boardOutput );

// set a variable that represents
// whether or not the game is currently running
var running = true;

// run the game on a loop
while( running ){
//  var row = prompt("enter your row: top, middle or bottom");
//  var column = prompt("enter your column: col1, col2, col3");

//  console.log("current value @: ", board[row][column] );

  // you can also use the break statement to get out of a while loop
  break;

  // if all spaces are filled, end game

  // if game is won, end game
}