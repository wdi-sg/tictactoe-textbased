// Good practice (from past experience in game development at least) to separate data from code structure, 
// so as avoid 'magic numbers'. For example, seeing a line like `if (x === 1) {endGame()}' doesn't tell 
// you anything about what x is, and more importantly, where the 1 came from. 1 becomes a "magic" number.
// In larger projects, when numbers have to be changed during user acceptance tests, magic numbers are
// often missed out in updates precisely because of this, resulting in unnecessary bugs and lengthening
// tests.
const GAME_MOVE_LIMIT = 9;
const GAME_STATE_IN_PROGRESS = 0;
const GAME_STATE_WON = 1;
const GAME_STATE_DRAW = 2;

// I've chosen to use 2 arrays since I'm implementing my game in the browser window. BOARD is the array
// that refers to the boxes on the document, while SHADOWBOARD is an abstraction of it, by placing
// player numbers instead of their symbols into the array. Yes, it can be done with a single array
// and checking for the content of each box and translating it back into a number, e.g. if
// BOARD[2].innerHTML = "X" then we know that player 1 has taken box 3 on the grid, but I'm lazy to
// do the translation. Besides, it only takes up tiny bit more memory to create that 2nd array :D 
const BOARD = [];
const SHADOWBOARD = [];

// Each check for the winning condition only consists of 3 positions. These can be put into an array.
// All the checks (represented by an array) can then be put into another array.
const toCheckForWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Silly trick I learnt long ago. If you store playerIndex like that, you can easily swap the current
// player around by doing player = playerIndex[player]. Think about it, if the current player is 1,
// playerIndex[1] returns 2, so player is now 2. If the current player is 2, playerIndex[2] returns 1,
// so the player is now 1.
let playerIndex = [0, 2, 1];
let playerMark = ["", "X", "O"];
let currentPlayer = 1;

// One of the design rules for the front end of the game is that the game should not accept any input
// when not in play, e.g. when the computer is thinking. Therefore I need a boolean variable that I can
// turn to true when I want the board to accept player input, and false when I don't.
let gameInPlay = false;

// One of the game-end conditions is that 9 moves have been reached with no winner. We need to keep track
// of the number of moves then.
let gameMoves = 0;

// A place to store player names, that's all.
var playername = [];


// Computer data, e.g. names, specific patterns to check for, etc.
// There are some dangerous configurations that the computer will look out for. If the player has 2 of
// them, the computer must block the player by taking the last one if it's not already taken, otherwise
// the player will easily force the computer into a loss. The checking method is exactly the same as
// the one used to check whether the computer needs to block the player when he has 2 other boxes in a 
// line or column or diagonal. The sideMove array is there to help the computer look for a move on the
// side of the grid, necessary to block certain moves.
// Finally, we also need a variable to tell the main programme whether a computer is playing or not,
// and if so, to run the function that does all these checks and moves for the computer.
// Since computers need data to make all those checks and decisions, I've elected to throw everything
// into one big object - compData. It's easy to reference, and it's also possible to add more data
// to it when needed.
const compNames = ["a Bad Apple", "Dolly", "HAL9000", "GLaDOS", "Browsah"];
const toCheckForDanger = [[0,4,6],[6,4,8],[8,4,2],[2,4,0]];
const sideMove = [1,3,5,7];
let compInPlay = false;
let compPlayer = 2;
let compTimer = null;
let compData = {
    playerMoves: [],
    compMoves: [],
    lastPlayerMove: 0,
    movesLeft: [0,1,2,3,4,5,6,7,8]
};

// Utility function to show the status of the game on the page. We're going to use this many many times,
// so put it into a function!
function print(message) {
    document.getElementById('output').innerHTML = message;
}

// A bunch of actions need to be done when a player makes a move on a square. In order to code a computer's
// playing, the way those actions are carried out must be independent of whether the player behind the
// move is a person or a computer. All that should matter is the player number (1 or 2) and the location of
// the square (here represented as index). Here, we set the text in the box to be the player's mark (X for
// player 1 and O for player 2), set the current player to the shadowboard at the appropriate index,
// and if the computer is playing, remove the move that was just made from the list of possible moves left 
// so that the computer will not consider moving there next. The computer also needs to keep track of
// the player's moves to facilitate checking for dangerous configurations. Note that we set gameInPlay
// to true here to return control to the player after carrying out all the actions associated with the
// move.
function moveOn(player, index) {
    index = parseInt(index);
    BOARD[index].innerHTML = playerMark[player];
    SHADOWBOARD[index] = currentPlayer;
    gameMoves++;
    if (compInPlay) {
        compData.movesLeft.splice(compData.movesLeft.indexOf(index),1);
        if (currentPlayer != compPlayer) {
            compData.playerMoves.push(index);
            compData.lastPlayerMove = index;
        } else {
            compData.compMoves.push(index);
        }
    };
    updateGameStatus();
    gameInPlay = true;
}

// Callback function click event on the boxes. Check that the game is not in play and that
// the square is already filled. If so, stop. If so, call the function that carries out the move
// and pass it the current player, and the index corresponding to the box clicked on (see above).
function tick (e) {
    if (!gameInPlay || this.innerHTML) {return;}
    let index = this.getAttribute('data-id');
    moveOn(currentPlayer, index);
}

// I've separated the updating of the game status from the routines that carries out the moves by
// the players. Hypothetically, in larger games, updating the game status / logic may be done at
// several different times, which may or may not be triggered by the actions of the player. This is
// not the case for a game like tic-tac-toe, but it's still good to avoid having overly large functions.
function updateGameStatus() {
    let result = GAME_STATE_IN_PROGRESS;
    let prevPlayer = currentPlayer;

    // This is the loop that runs across all the configurations of boxes to check for a winning condition.
    // If any of the arrays in the toCheckForWin array corresponds to 3 squares with all the same
    // player assigned to them, then that player has won and we can set the game state to won, and break
    // out of the loop.
    for (let i = 0; i < toCheckForWin.length; i++) {
        if (SHADOWBOARD[toCheckForWin[i][0]] == currentPlayer && 
            SHADOWBOARD[toCheckForWin[i][0]] == SHADOWBOARD[toCheckForWin[i][1]] && 
            SHADOWBOARD[toCheckForWin[i][1]] == SHADOWBOARD[toCheckForWin[i][2]]) {
            result = GAME_STATE_WON;
            break;
        }
    };

    // Draw game reached if it's still in progress (the above check for win status did not succeed)
    // and the number of game moves has reached the predetermined limit of 9.
    if (result == GAME_STATE_IN_PROGRESS && gameMoves == GAME_MOVE_LIMIT) {
        result = GAME_STATE_DRAW;
    };

    // Tasks to carry out depending on the game state. Win or draw, we have to disable the game
    // by turning gameInPlay to false, and displaying the reset div.
    switch (result) {
        case GAME_STATE_WON:
            print(playername[prevPlayer-1] + " won!");
            gameInPlay = false;
            document.getElementById('reset').style.display = 'block';
            break;
        case GAME_STATE_IN_PROGRESS:
            currentPlayer = playerIndex[currentPlayer];
            print("Current player is " + playername[currentPlayer-1]);
            break;
        case GAME_STATE_DRAW:
            print("It's a tie!");
            gameInPlay = false;
            document.getElementById('reset').style.display = 'block';
            break;
        default: 
            console.error("Game exists in undefined state!");
            break;
    }

    // If the computer's turn is up next (and the computer is in play, and the game is in play),
    // call the function that starts the computer's routine.
    if (compInPlay && currentPlayer == compPlayer && gameInPlay) {
        compy386_go();
    }
}

// Simple function to reset the game. We only need to empty the arrays controlling the board
// (and the shadowboard), and reset the other variables back to their original values.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        BOARD[i].innerHTML = "";
        SHADOWBOARD[i] = "";
    }
    if (compInPlay) {
        compData.movesLeft = [0,1,2,3,4,5,6,7,8];
        compData.playerMoves = [];
        compData.compMoves = [];
    }
    gameInPlay = true;
    currentPlayer = 1;
    gameMoves = 0;
    print("Current player is " + playername[currentPlayer - 1]);
    document.getElementById('reset').style.display = 'none';
}

// This function is used to display the correct fullscreen dialog depending on whether the player
// has clicked on 1p vs Computer or 2p game.
function displayModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('vscomp').style.display = 'none';
    switch (this.getAttribute('id')) {
        case 'start':
            document.getElementById('1pname').style.display = 'none';
            compInPlay = false;
            break;
        case 'vscomp':
            document.getElementById('2pname').style.display = 'none';
            compInPlay = true;
            break;
        default:
            console.error("Unknown number of players!");
            break;
    }
}

// Just laziness. I didn't want to write the array. In production, such 1-line functions are usually
// optimized by having the return expression written in place of the function call by a pre-processor,
// i.e. pass the JS file through the pre-processor which will then replace all `getRandomCompName()'
// calls with `compNames[... ...]'.
function getRandomCompName() {
    return compNames[Math.floor(Math.random() * compNames.length)];
}

function setPlayerNames() {
    if (compInPlay) {
        // This is a way to ensure that our variables always have a value.
        // If the player did not enter a name, document.getElementById(...).value will be null,
        // and so playername[0] will be assigned "Player 1" instead.
        playername[0] = document.getElementById('spname').value || "Player 1";
        playername[1] = getRandomCompName();
        compData.movesLeft = [0,1,2,3,4,5,6,7,8];
        compData.playerMoves = [];
        compData.compMoves = [];
    } else {
        playername[0] = document.getElementById('player1name').value || "Player 1";
        playername[1] = document.getElementById('player2name').value || "Player 2";
    }
    document.getElementById('modal').style.display = 'none';
    print("Current player is " + playername[currentPlayer-1]);
    gameInPlay = true;
}

function getSideMove() {
    return sideMove[Math.floor(Math.random() * sideMove.length)];
}

// Finally, the computer programme. It's not unbeatable - a computer that you can't beat kinda sucks
// to play against, but I hope it's sufficiently intelligent to not be a random pushover! The checks
// and decisions are briefly mentioned below.
function compy386() {
    // Pick a random move first to ALWAYS have a result to return.. modify this decision later.
    // It's a disaster if the computer has no move to make!
    let compDecision = compData.movesLeft[Math.floor(Math.random() * compData.movesLeft.length)];
    let possibleMoves = compData.movesLeft;
    
    // If the player opens with a corner move, the computer must block by taking the center (box 4).
    if (compData.playerMoves.length == 1 && (compData.lastPlayerMove == 0 || compData.lastPlayerMove == 2 || compData.lastPlayerMove == 6 || compData.lastPlayerMove == 8)) {
        moveOn(compPlayer, 4);
        return;
    }

    // If the player opened with a corner move as his first, the computer would have blocked by taking
    // the center. If the player now forms a diagonal, the computer MUST counter-attack now by making 
    // a side-move!
    if (compData.playerMoves.length == 2) {
        let z = compData.playerMoves;
        if (z.includes(0) && z.includes(8)) {
            moveOn(compPlayer, getSideMove());
            return;
        } else if (z.includes(2) && z.includes(6)) {
            moveOn(compPlayer, getSideMove());
            return;
        }
    }

    // Does either the player or me have a winning move? If so, block it or take it. We perform this 
    // check by taking each array of winning squares, and seeing if the computer is only able to make
    // 1 move left in that array. If so, it means that the player has taken the other 2 squares and the
    // computer MUST take the last one!
    for (let i = 0; i < toCheckForWin.length; i++) {
        let a = toCheckForWin[i].filter(index => compData.compMoves.indexOf(index) == -1);
        if (a.length == 1 && !SHADOWBOARD[a[0]]) {
            moveOn(compPlayer, a[0]);
            return;
        }
    };
    
    for (let i = 0; i < toCheckForWin.length; i++) {
        let b = toCheckForWin[i].filter(index => compData.playerMoves.indexOf(index) == -1);
        if (b.length == 1 && !SHADOWBOARD[b[0]]) {
            console.log("Player has winning move at " + b[0]);
            moveOn(compPlayer, b[0]);
            return;
        }
    };
    
    // Modify decision based on player move by checking for other danger configurations
    for (let i = 0; i < toCheckForDanger.length; i++) {
        let c = toCheckForDanger[i].filter(index => compData.playerMoves.indexOf(index) == -1);
        if (c.length < 3) {
            let d = c.filter(index => possibleMoves.indexOf(index) > -1);
            possibleMoves = possibleMoves.filter(index => d.indexOf(index) > -1);
        }
    }
    
    // Set the computer's decision to be the first of the moves to block danger configurations if they
    // exist.
    if (possibleMoves[0]) {
        compDecision = possibleMoves[0];
    };

    moveOn(compPlayer, compDecision);
}

function compy386_go() {
    // Artificially delay the computer's turn to make it seem like it's thinking.
    // Actually, that's the only time the player will get to see the comp's name!!!
    gameInPlay = false;
    print(playername[currentPlayer-1] + " is thinking ...");
    compTimer = setTimeout(compy386, Math.floor(Math.random() * 500)); 
}

// Set up all the clickables...
for (let i = 0; i < 9; i++) {
    BOARD[i] = document.getElementById('clickarea' + i);
    BOARD[i].addEventListener('click', tick);
}

document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('start').addEventListener('click', displayModal);
document.getElementById('vscomp').addEventListener('click', displayModal);
document.getElementById('go').addEventListener('click', setPlayerNames);
