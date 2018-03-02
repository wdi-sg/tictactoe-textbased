
const rl = require('readline');

let prompts = rl.createInterface(process.stdin, process.stdout);

let game = {
  turn: 'one',
  state: false,
  numberOfTurns: 0,
  boardCount: 0
};


// generate board
const generateBoard = (width) => {
  // if width is less than 3, reject
  // gameRunning = true;
  if (width < 3) {
    alert('Please select width higher than 2.');
  }

  let board = [];
  let { boardCount } = game;
  for(let i = 0; i < width; i++){
    let rows = [];
    for(let j = 0; j < width; j++){
      rows.push(0);
      boardCount++;
    }
    // console.log(rows);
    board.push(rows);
  }
  // console.log(board);
  // console.log(gameRunning);
  console.log(`Board count: ${boardCount}`);
  return board;
}

let board = generateBoard(3);

// check for win or end of game
const checkWin = () => {
  // check for horizontal matches
  let { state, numberOfTurns, boardCount } = game;
  if (numberOfTurns > boardCount){
    state = !state;
    console.log(`Game has ended!`);
  }
  else {
    getInputs();
  }
}

// prompt for user inputs
const getInputs = () => {
  let player = '';
  let { turn, numberOfTurns } = game;
  console.log(`Game count: ${numberOfTurns}`);
  numberOfTurns++;
  console.log(`Turn: ${turn}`);
  if (turn === 'one') {
    turn = 'two';
    player = 'Player 1';
    symbol = 1;
  }
  else {
    turn = 'one';
    player = "Player 2";
    symbol = 2;
  }
  prompts.question(`${player} Please choose row 0-2 `, (row) => {
    prompts.question(`${player} Please choose column 0-2 `, (col) => {
      console.log(`${row},${col}`);
      // selectionTiles(x, y);
      if(board[row][col] === 1 || board[row][col] === 2){
        console.log(`Box is already taken. Please pick another box.`);
        getInputs();
      }
      board[row][col] = symbol;
      displayBoard(board);
      // checkWin();
      console.log(`Turn: ${turn}`);
      console.log(`Game count: ${numberOfTurns}`);
      prompts.close();
      checkWin();
    });
  });
}

// display current board status 
const displayBoard = (board) => {
  board.forEach(row => {
    console.log(row);
  });
  return board;
}

// getInputs();


// reset game 
const resetBoard = (board) => {
  board.map(rows => {
    return rows.map(col => {
      return col = 1;
    });
  });
  console.log(board);
}


// start game!
const startGame = () => {
  let { state } = game;
  console.log(`Game started: ${state} (before changing state)`);
  state = !state;
  console.log(`Game started: ${state} (after changing state)`);
  getInputs();
  // checkWin();
  // while(state === true){
  //   getInputs();
  //   checkWin();
  // }
}

startGame();