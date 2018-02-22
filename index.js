var Letter = require("./letter.js")
var Word = require("./words.js")
var inquirer = require("inquirer");
var userUsed= []
var attempt = 10;
var Wins = 0
var Loss = 0
var points=0
	var wordBank = ["david", "elena", "jose", "jack", "musab", "javier", "amber", "robinson", "carlo", "farley", "abruham"];


	var randomize = Math.floor(Math.random()*wordBank.length);
	var mix = wordBank[randomize];
	var words = new Word(mix);
	words.displayLetters();
	words.compareGuess("");
	// console.log(words.displayValue());


function details(){
	console.log("Win: "+ Wins)
	console.log("Loss: " + Loss)
	console.log(attempt)
	console.log(userUsed)
	console.log(words.displayValue());
	
}
// function points(){

// 	for(i=0; i<this.arrayOfLetters.length; i++){
// 		points ++;
// 		if()
// 	}
// }
function guessing(){
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
            if (words.win(solved)) {
            	win ++
            }
     //        else {
     //        	Loss--;
	  		// }
			guessing()
	  	})
	}

guessing();

