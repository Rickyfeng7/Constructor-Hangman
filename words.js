var Letter = require("./letter.js")

var Word = function(wordValue){

	this.wordValue = wordValue;
	this.arrayOfLetters = []

	this.displayValue = function(){

		var displayEmptyString = ""

		for(var i=0; i<this.arrayOfLetters.length; i++){

			displayEmptyString += this.arrayOfLetters[i].display()

		}
		return displayEmptyString
	};
	this.displayLetters = function(){

		var letterString = this.wordValue.split("")

		// console.log(letterString)

		for( i = 0; i < letterString.length; i++){

			var letter = new Letter(letterString[i])

			this.arrayOfLetters.push(letter)

		}
	};
	this.compareGuess = function(guess){
		for(i=0; i<this.arrayOfLetters.length; i++){

			this.arrayOfLetters[i].compareGuess(guess)

		}
	};
	this.win = function(solved){

		for(i=0; i< this.arrayOfLetters.length; i++){
			if(!this.arrayOfLetters[i].guessValue){
				solved = false;
			}
		}
		return solved;
	}
}

module.exports = Word