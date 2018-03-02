const GAME_MOVE_LIMIT = 9;
const GAME_STATE_IN_PROGRESS = 0;
const GAME_STATE_WON = 1;
const GAME_STATE_DRAW = 2;
const BOARD = [];
const SHADOWBOARD = [];

const toCheckForWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let playerIndex = [0, 2, 1];
let playerMark = ["", "X", "O"];
let currentPlayer = 1;
let gameInPlay = false;
let gameMoves = 0;
var playername = [];

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

function print(message) {
    // Utility function to show the status of the game on the page
    document.getElementById('output').innerHTML = message;
}

function moveOn(player, index) {
    gameInPlay = true;
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
}

// Callback function click event on the boxes
function tick (e) {
    // Check that the square is not already filled. If it is, return. If not, assign it the player number and display it on the grid.
    // Then check for the end of the game.
    if (!gameInPlay || this.innerHTML) {return;}
    let index = this.getAttribute('data-id');
    moveOn(currentPlayer, index);
}

function updateGameStatus() {
    let result = GAME_STATE_IN_PROGRESS;
    let prevPlayer = currentPlayer;
    for (let i = 0; i < toCheckForWin.length; i++) {
        if (SHADOWBOARD[toCheckForWin[i][0]] == currentPlayer && 
            SHADOWBOARD[toCheckForWin[i][0]] == SHADOWBOARD[toCheckForWin[i][1]] && 
            SHADOWBOARD[toCheckForWin[i][1]] == SHADOWBOARD[toCheckForWin[i][2]]) {
            result = GAME_STATE_WON;
            break;
        }
    };

    if (result == GAME_STATE_IN_PROGRESS && gameMoves == GAME_MOVE_LIMIT) {
        result = GAME_STATE_DRAW;
    };

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

    if (compInPlay && currentPlayer == compPlayer && gameInPlay) {
        compy386_go();
    }
}

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


function getRandomCompName() {
    return compNames[Math.floor(Math.random() * compNames.length)];
}

function setPlayerNames() {
    if (compInPlay) {
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

function compy386() {
    // Pick a random move first to always have a result to return.. modify this decision later.
    let compDecision = compData.movesLeft[Math.floor(Math.random() * compData.movesLeft.length)];
    let possibleMoves = compData.movesLeft;
    
    // If the player opens with a corner move, the computer must block by taking the center.
    if (compData.playerMoves.length == 1 && (compData.lastPlayerMove == 0 || compData.lastPlayerMove == 2 || compData.lastPlayerMove == 6 || compData.lastPlayerMove == 8)) {
        moveOn(compPlayer, 4);
        return;
    }

    // If the player opened with a corner move, the computer would have blocked by taking the center. If the player now forms a diagonal, the computer MUST counter-attack now by making a side-move!
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

    // Does either the player or me have a winning move? If so, block it.
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

// Set up all the clickables
for (let i = 0; i < 9; i++) {
    BOARD[i] = document.getElementById('clickarea' + i);
    BOARD[i].addEventListener('click', tick);
}

document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('start').addEventListener('click', displayModal);
document.getElementById('vscomp').addEventListener('click', displayModal);
document.getElementById('go').addEventListener('click', setPlayerNames);
