var player1 = prompt(`Player 1, kindly input your name: `);
var player2 = prompt(`Player 2, kindly input your name: `);

var playCount = 1;

var currentPlayer = "X";
alert (`${player1}, make your move. (Token : X)`);

var prePlayer = currentPlayer;

var buttons = document.querySelectorAll('button');

var playerWin = function () {
	if (playCount % 2 === 1) {
		alert(`${player1} WIN!!  (Token : X)`);
	}else{
		alert(`${player2} WIN!! (Token : O)`);
	}
}

var resetGame = function () {
	for (var i = 0; i < 9; i++) {
		document.querySelectorAll('button')[i].innerText = "";
	}
}

var runGame = function(event){

	console.log( this.id );
	
	var buttonContent = "";
	//check which player is it now
	if (playCount % 2 === 1){
		
		buttonContent = "X";
		console.log(playCount);
		//switch player
		currentPlayer = "O";
		
	}else{

		buttonContent = "O";
		prePlayer = currentPlayer;
		//switch player
		currentPlayer = "X";
		
	}

	console.log( event.target.innerText )

	//check if the box is occupied
	if (event.target.innerText === ""){

		this.innerText = buttonContent;
		//check for win
		if (document.querySelectorAll('button')[0].innerHTML === document.querySelectorAll('button')[1].innerHTML && document.querySelectorAll('button')[0].innerHTML === document.querySelectorAll('button')[2].innerHTML && document.querySelectorAll('button')[0].innerHTML === prePlayer) {
			playerWin();
			resetGame();
		}
		else if (document.querySelectorAll('button')[3].innerHTML === document.querySelectorAll('button')[4].innerHTML && document.querySelectorAll('button')[3].innerHTML === document.querySelectorAll('button')[5].innerHTML && document.querySelectorAll('button')[3].innerHTML === prePlayer){
			playerWin();
			resetGame();
		}
		else if (document.querySelectorAll('button')[6].innerHTML === document.querySelectorAll('button')[7].innerHTML && document.querySelectorAll('button')[6].innerHTML === document.querySelectorAll('button')[8].innerHTML && document.querySelectorAll('button')[6].innerHTML === prePlayer){
			playerWin();
			resetGame();
		}
		else if (document.querySelectorAll('button')[0].innerHTML === document.querySelectorAll('button')[3].innerHTML && document.querySelectorAll('button')[0].innerHTML === document.querySelectorAll('button')[6].innerHTML && document.querySelectorAll('button')[0].innerHTML === prePlayer){
			playerWin();
			resetGame();
		}
		else if (document.querySelectorAll('button')[1].innerHTML === document.querySelectorAll('button')[4].innerHTML && document.querySelectorAll('button')[1].innerHTML === document.querySelectorAll('button')[7].innerHTML && document.querySelectorAll('button')[1].innerHTML === prePlayer) {
			playerWin();
			resetGame();
		}
		else if (document.querySelectorAll('button')[2].innerHTML === document.querySelectorAll('button')[5].innerHTML && document.querySelectorAll('button')[2].innerHTML === document.querySelectorAll('button')[8].innerHTML && document.querySelectorAll('button')[2].innerHTML === prePlayer) {
			playerWin();
			resetGame();
		}
		else if (document.querySelectorAll('button')[0].innerHTML === document.querySelectorAll('button')[4].innerHTML && document.querySelectorAll('button')[0].innerHTML === document.querySelectorAll('button')[8].innerHTML && document.querySelectorAll('button')[0].innerHTML === prePlayer) {
			playerWin();
			resetGame();
		}
		else if (document.querySelectorAll('button')[2].innerHTML === document.querySelectorAll('button')[4].innerHTML && document.querySelectorAll('button')[2].innerHTML === document.querySelectorAll('button')[6].innerHTML && document.querySelectorAll('button')[2].innerHTML === prePlayer) {
			playerWin();
			resetGame();
		}
		else if (playCount > 9)  {
			alert (`This is a DRAW Game!!`);
			resetGame();
		}
		else {
			playCount += 1;
			//prompt player's move
			if (playCount % 2 === 1){
				alert (`${player1}, make your move. (Token : X)`);
			}
			else{
				alert(`${player2}, make your move. (Token : O)`);
			}
		}
	}

};

window.onload = function(){

	for( var i=0; i<buttons.length; i++){

		buttons[i].addEventListener('click', runGame);
	}
};