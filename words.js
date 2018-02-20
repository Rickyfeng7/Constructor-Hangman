var Letter = require("./letter.js")

var Word = function(stringValue){

	this.value = stringValue;
	this.arrayOfLetters = []

	this.displayValue = function(){

		var displayEmptyString = ""

		for(i=0; i<this.arrayOfLetters.length; i++){

			displayEmptyString += this.arrayOfLetters[i].display()

		}

		return displayEmptyString
	}
	this.displayLetters = function(){

		var letterString = this.value.split("")

		// console.log(letterString)

		for( i = 0; i < letterString.length; i++){

			var letter = new Letter(letterString[i])

			this.arrayOfLetters.push(letter)

		}
	}
	this.compareGuess = function(guess){

		for(i=0; i<this.arrayOfLetters.length; i++){

			this.arrayOfLetters[i].compareGuess(guess)

		}
	}
}

var word = new Word("strawberry");
word.displayLetters();
word.compareGuess("r");
word.compareGuess("b");
word.compareGuess("p")
console.log(word.displayValue());

// var inquirer = require("inquirer");

// var wordBank = [("D", "a", "v", "i", "d"), ("E", "l", "i", "n", "a"), ("J","o","s","e"), ("J","a","c","k"), ("M","u","s","a","b"), ("J","a","v","i","e","r"), ("A","m","b","e","r")];


// inquirer
//   .prompt([
//   	{
//   		type: "passwords",
//   		name: wordBank,
//   	}
//   	]);

// module.exports = 