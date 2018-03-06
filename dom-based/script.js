var runGame = function(event){

	console.log( this.id );
	
	var buttonContent = "";

	if( currentPlayer === 'X' ){

		buttonContent = "X";
		currentPlayer = "O";
	}else{
		buttonContent = "O";
		currentPlayer = "X";
	}

	console.log( event.target.innerText )

	this.innerText = buttonContent;
};

var currentPlayer = "X";

window.onload = function(){
	var buttons = document.querySelectorAll('button');

	for( var i=0; i<buttons.length; i++){

		buttons[i].addEventListener('click', runGame);
	}
};
