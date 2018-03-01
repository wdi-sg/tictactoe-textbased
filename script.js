/**
Global variables for the board 
*/

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

//game start function
function checkGameStart(gameStart){
	if(gameStart=="Y"){
		return true;
	}
	else{
		console.log("We shall play next time then!");
	}
}

//board output will be a string
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

function boardRunning(){
	var running = true;
	var moves = 0;
	var counterX = 0;
	var counterO = 0;
	while(running){

		var row = prompt("enter your row: top, middle or bottom");
		if(row!="top"||row!="middle"||row!="bottom"){
			row = prompt("Error! please key row: top, middle or bottom");
		}
	  	var column = prompt("enter your column: col1, col2, col3");
	  	if(column!="col1"||column!="col2"||column!="col3"){
			column = prompt("Error! please key column: col1, col2 or col3");
		}
	  	var input = prompt("input either X or O");
	  	if(input=="X"){
	  		if(board[row][column]!="."){
	  			console.log("Error! " + board[row][column] + " is already inside!");
	  		}
	  		else{
	  			board[row][column]="X";
	  			console.log("You have inputted " + board[row][column]);
	  			counterX++;
	  			moves++;
	  		}
	  	}
	  	else if(input=="O")
	  	{
	  		if(board[row][column]!="."){
	  			console.log("Error! " + board[row][column] + " is already inside!");
	  		}
	  		else{
	  			board[row][column]="O";
	  			console.log("You have inputted " + board[row][column]);
	  			counterO++;
	  			moves++;
	  		}
	  	}
	  	else{
	  		console.log("You did not input O or X! Try again!");
	  	}
	  	console.log(boardOutput());

	  	//check if victory position is met
	  	if(counterX>=3||counterO>=3){
	  		//method check diagonal
	  		//method check vertical
	  		//method check diagonal
	  		if(checkHorizontal(board)==true||checkVertical(board)==true||checkDiagonal(board)==true){
	  			console.log("well done! we have a winner!")
	  			break;
	  		}
	  	}

	  	//check if board is already full
	  	console.log("move: " + moves);
	  	console.log("no. of X so far: " + counterX);
	  	console.log("no. of O so far: " + counterO);
	  	if(moves==9){
	  		console.log("The board is completed! There's no winner...")
	  		break;
	  	}
	}
}

/** Victory condition */
function checkHorizontal(board){
	for(var j in board){
		//cannot have three variables equal to each other;
		var column1 = board[j]["col1"];
		var column2 = board[j]["col2"];
		var column3 = board[j]["col3"];

		if(column1==column2){
			if(column3==column2){
				if(column3=="X"||column3=="O");
				return true;
			}
		}
	}
	return false;
}

function checkVertical(board){
	for(var i=0;i<3;i++){
		var currColumn = "col" + i.toString();
		var row1 = board["top"][currColumn];
		var row2 = board["middle"][currColumn];
		var row3 = board["bottom"][currColumn];

		if(row1==row2){
			if(row3==row2){
				if(row3=="X"||row3=="O");
				return true;
			}
		}	
	}
	return false;
}

function checkDiagonal(){
	if(board["top"]["col1"]==board["middle"]["col2"]){
		if(board["top"]["col1"]==board["bottom"]["col3"]){
			return true
		}
	}
	else if(board["top"]["col3"]==board["middle"]["col2"]){
		if(board["top"]["col3"]==board["bottom"]["col1"]){
			return true
		}
	}
	return false;
}

//Execution commands
var gameStart = prompt("let's play a tick tack toe game!\n key in 'Y' to continue");
if(checkGameStart(gameStart)==true){
	console.log("great let's start!\n Here is the board we gonna play at!");
	console.log(boardOutput());
	boardRunning();
};

