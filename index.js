var Letter = require("./letter.js")
var Word = require("./words.js")
var inquirer = require("inquirer");
var userUsed= []
var attempt = 10;
var Wins = 0
var Loss = 0
var words = new Word
var wordBank = ["david", "elena", "jose", "jack", "musab", "javier", "amber", "robinson", "carlo", "farley", "abruham"];
var randomize = Math.floor(Math.random()*wordBank.length);
var mix = wordBank[randomize];
var words = new Word(mix);

function randomWord(){
	wordBank = ["david", "elena", "jose", "jack", "musab", "javier", "amber", "robinson", "carlo", "farley", "abruham"];
	randomize = Math.floor(Math.random()*wordBank.length);
	mix = wordBank[randomize];
	words = new Word(mix);
	words.displayLetters();
	words.displayValue();

}

	words.displayLetters();
	words.win();

function details(){
	console.log("\nWin: "+ Wins)
	console.log("Loss: " + Loss)
	console.log(attempt)
	console.log(userUsed)
	console.log(words.displayValue());
	
}

function startGame(){
	details();
	inquirer.prompt([
		{
			type:"input",
			message:"Take a Guess",
			name: "letter"
		}
	  	]).then(function(response){

	  		var letter = response.letter.toLowerCase();
        	if ((/^[a-zA-Z]/.test(letter)) && (letter.length===1)) {
				words.compareGuess(letter)
				userUsed.push(letter)
            }
            var correct = words.compareGuess(letter)
            	if(correct){
            		if(words.win()){
            			Wins ++ ;
            			console.log("Congrats")
            			restart();
            			randomWord()
            		}
            	}else {
            	attempt --;
            	if(attempt === 0){
            		Loss++
            		console.log("Nice Try")
            		restart();
            		randomWord()
            	}
	  		}
			startGame()
	  	})
	}
console.log("\nHint: It's a name")
function restart(){
	success = false
	userUsed= []
	attempt = 10;
	words = new Word(mix);
	words.displayLetters();
	words.displayValue();

}

startGame();