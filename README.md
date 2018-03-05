# tictactoe-textbased

## Build a game of tic tac toe that is text based.

### Setup
- create an `index.html` file in this repo.
- include the starter code script.js file.

#### Taking user input
At any point in our JS code, if we write prompt(), a pop up box will open in our browser for a user to enter in text.

```js
// prompts user and stores value in the variable
var valueOfPrompt = prompt()
// logs value stored
console.log(valueOfPrompt)
```

You can also pass in a string as an argument to have the pop up box contain that string as a ... prompt.

```js
var age = prompt("How old are you?")
alert("You are " + age + " years old.")
```

Whatever we type into the textbox in the window that prompt() brings up, is returned by prompt to the variable age.



### 1. Create a working game
- create a game that users can play and that fills each square as they select it

### 2. Detecting a win state
- modify your game so that the game knows when one player has won or lost

### 3. Further
- when the game ends, or when the page is reloaded / loads for the very first time, prompt your users to ask if they want to play
- ask the names of players 1 and 2 and display that back to them as they play and win

### 4. Even Further
- ask the player if they want to play against the computer
- make the computer play by randomly picking a spot on the board
- modify the computer player to be defensive and block the human player from winning
- modify the computer player to be offensive and try to win the game
