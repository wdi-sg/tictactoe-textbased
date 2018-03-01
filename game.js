const BOARD = [[,,],[,,],[,,]];
const SHADOWBOARD = [[,,],[,,],[,,]];
let currentPlayer = 1;
let gameInPlay = false;
var playername = [];

function tick (e) {
    // Check that the square is not already filled. If it is, return. If not, assign it the player number and display it on the grid.
    // Then check for the end of the game.
    if (!gameInPlay) {return;}
    let tmp = e.currentTarget.id.slice(-2).split('');
    let x = tmp[0];
    let y = tmp[1];
    let prevPlayer = currentPlayer;
    if (this.innerHTML) {return};
    if (currentPlayer === 1) {
        SHADOWBOARD[x][y] = currentPlayer;
        this.innerHTML = "X";
    } else {
        SHADOWBOARD[x][y] = currentPlayer;
        this.innerHTML = "O";
    }
    if (checkGameEnd()) {
        print(playername[prevPlayer-1] + " won!");
        gameInPlay = false;
        document.getElementById('reset').style.display = 'block';
    } else {
        currentPlayer = currentPlayer == 1 ? 2 : 1;
        print("Current player is " + playername[currentPlayer-1]);
    }
}

function checkGameEnd() {
    let result = false;
    // Row check
    for (let i = 0; i < 3; i++) {
        if (SHADOWBOARD[i][0] == currentPlayer && SHADOWBOARD[i][0] == SHADOWBOARD[i][1] && SHADOWBOARD[i][1] == SHADOWBOARD[i][2]) {
            result = true;
            break;
        };
    };
    // Column check
    for (let j = 0; j < 3; j++) {
        if (SHADOWBOARD[0][j] == currentPlayer && SHADOWBOARD[0][j] == SHADOWBOARD[1][j] && SHADOWBOARD[1][j] == SHADOWBOARD[2][j]) {
            result = true;
            break;
        };
    };
    // Diagonal check
    if (SHADOWBOARD[0][0] == currentPlayer && SHADOWBOARD[0][0] == SHADOWBOARD[1][1] && SHADOWBOARD[1][1] == SHADOWBOARD[2][2]) {
        result = true;
    };
    if (SHADOWBOARD[2][0] == currentPlayer && SHADOWBOARD[2][0] == SHADOWBOARD[1][1] && SHADOWBOARD[1][1] == SHADOWBOARD[0][2]) {
        result = true;
    };
    if (result) {
        return true;
    } else {
        return false;
    };
}

function print(message) {
    // Utility function to show the status of the game on the page
    document.getElementById('output').innerHTML = message;
}

function resetGame() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            BOARD[i][j].innerHTML = "";
            SHADOWBOARD[i][j] = "";
        }
    }
    gameInPlay = true;
    currentPlayer = 1;
    print("Current player is " + playername[currentPlayer - 1]);
    document.getElementById('reset').style.display = 'none';
}

function displayModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('start').style.display = 'none';
}

function setPlayerNames() {
    playername[0] = document.getElementById('player1name').value || "Player 1";
    playername[1] = document.getElementById('player2name').value || "Player 2";
    document.getElementById('modal').style.display = 'none';
    print("Current player is " + playername[currentPlayer-1]);
    gameInPlay = true;
}

function compy386() {
    playername[1] = "a Bad Apple";
    
}

// Set up all the clickables
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        BOARD[i][j] = document.getElementById('clickarea' + i + j);
        BOARD[i][j].addEventListener('click', tick);
    }
}

document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('start').addEventListener('click', displayModal);
document.getElementById('go').addEventListener('click', setPlayerNames);
