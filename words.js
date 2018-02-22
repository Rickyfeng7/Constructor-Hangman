var Letter = require("./letter.js")

var Word = function(wordValue){

	this.wordValue = wordValue;
	this.arrayOfLetters = []

	this.displayValue = function(){

		var displayEmptyString = ""

		for(i=0; i<this.arrayOfLetters.length; i++){

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
		var success = false
		for(i=0; i<this.arrayOfLetters.length; i++){

			var check = this.arrayOfLetters[i].compareValue(guess)
			if(check){
				success = true
			}
		}
		return success
	};
	this.win = function(){
		var solved = true;
		for(i=0; i< this.arrayOfLetters.length; i++){
			if(!this.arrayOfLetters[i].guessValue){
				solved = false;
			}
		}
		return solved;
	}
}

module.exports = Word