
// Variables
var all_filled = false;
var buttons = document.querySelectorAll('button');
var currentPlayer = "X";    // Set value of first player
var button_length = buttons.length;
var current_button = 0;

// Function to check for all board filled
function all_board_filled(){
  var filled = 0;
  for( var i=0; i<buttons.length; i++){
    if ((buttons[i].innerText === "X") || (buttons[i].innerText === "O")) {
      filled += 1;
      if (filled == 9) {
        all_filled = true;
        return all_filled;
      }
    }
  }
}

// Function to run game and update board with the respective player's value as
// the buttons on the board are clicked
var runGame = function(event){

	console.log( this.id );

	var buttonContent = "";

  // Switch currentPlayer to another player when it is the currentPlayer's turn
  // For example: When player's current value is X, then change it to O, vice versa
	if( currentPlayer === 'X' ){
		buttonContent = "X";
		currentPlayer = "O";
	}else{
		buttonContent = "O";
		currentPlayer = "X";
	}

  // Update specific button with the value
	this.innerText = buttonContent;
  console.log( this );

  // Check for board filled
  if (all_board_filled()) {
    document.getElementsByClassName('draw_message')[0].innerHTML = "GAME RESULTED IN A DRAW";
  }
};

// Run function runGame whenever a button on the board is clicked
window.onload = function(){
	for( var i=0; i<buttons.length; i++){
    console.log("Current Index is before runGame: " + i);
		buttons[i].addEventListener('click', runGame);
    console.log("Current Index is after runGame: " + i);
	}
};
