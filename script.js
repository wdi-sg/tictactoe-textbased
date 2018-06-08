var occupiedCount = 0;
var firstPlayerTurn = true;
var board = [];
var boardSize = 0;
var winString1 = "";
var winString2 = "";

function generateBoard(size) {  //Dynamically generate board
  for (var i=0; i<size; i++) {
    board.push([]);             //Generate row score

    winString1 = winString1 + "X";  //dynamic checkStr
    winString2 = winString2 + "O";

    for (var k=0; k<size; k++) {

      //Button factory
      var addButton = document.createElement('div');
      
      addButton.row = i;        //addButton is an obj
      addButton.col = k;        //you can manipulate it as such
      board[i].push(" ");       //assign id and scores


      addButton.style.display = "inline-block";
      addButton.style.border = "2px solid black";
      addButton.style.height = "100px";
      addButton.style.width = "100px";
      document.body.appendChild(addButton);

      //Adds listeners to every button
      addButton.addEventListener('click', game);
    }
    var br = document.createElement('br');
    document.body.appendChild(br);
    //Creates break for the next row
  }
  boardSize = size;
}

function game() { 
  //Draws the X's and O's
  if ( checkEmpty(this) ) {
    ++occupiedCount;
    this.textContent = draw(this); // Draw functions decides X or O;
                // 
    checkWinState();
  } else {

    //Space taken
    console.log('Piss Off!');
  }
}

function checkEmpty(box) {
  if (box.textContent == "X" || box.textContent == "O") {
    return false;
  } else {
    return true;
  }
}

function draw(box) {
  if (firstPlayerTurn == true) {
    firstPlayerTurn = !firstPlayerTurn;
    board[box.row][box.col] = "X";
    return "X";
  } else {
    firstPlayerTurn = !firstPlayerTurn;
    board[box.row][box.col] = "O";
    return "O";
  }
}

function checkWinState() {
  // HORIZONTAL CHECK
  var checkString = "";
  for (var i=0; i<board.length; i++) {
    for (var k=0; k<board[i].length; k++) {
      checkString = checkString + board[i][k];
    } 
    if (checkString == winString1 || checkString == winString2) {
      alert('WIN!!!');
    } else {
      checkString = "";
    }
  }

  //VERTICAL CHECK
  for (var i=0; i<board.length; i++) {
    for (var k=0; k<board[i].length; k++) {
      checkString = checkString + board[k][i];  //reverse k & i
    } 
    if (checkString == winString1 || checkString == winString2) {
      alert('WIN!!!');
    } else {
      checkString = "";
    }
  }

  //First Diag
  for (var i=0; i<board.length; i++) {
    checkString = checkString + board[i][i];  //Wow easier than I thought
  }
  if (checkString == winString1 || checkString == winString2) {
    alert('WIN!!!');
  } else {
    checkString = "";
  }


  //Second Diag
  for (var i=0; i<board.length; i++) {
    for (var k=board.length-1; k >= 0; k--) {   //Count down K
      checkString = checkString + board[i][k];  
    }
    if (checkString == winString1 || checkString == winString2) {
      alert('WIN!!!');
    } else {
      checkString = "";
    }
  }
}

generateBoard(4);
