var Letter = function(view){
	this.view = view;
	this.guessValue = false;

	this.display = function(){
		if(this.guessValue === true){
			return view
		}
		else{
			return "_" + " "
		}
	};
	
	this.compareGuess = function(guess){
		if(this.view === guess){
			this.guessValue = true;
			return true
		}
		else{
			return false
		}
	}
}

module.exports = Letter

// var inquirer = require("inquirer");

// var attempt = 10;

// var words = process.argv;

// var guessArray= [];

// 	var guess = function(guess){
// 		this.guess = guess;
// 		if(this.guess === true){
// 			console.log("good guess")
// 			guessArray.push(guess[i])
// 		}
// 		else{
// 			console.log("you already guessed that")
// 			guessArray.push(guess[i])
// 		}
// 	};
// 	function check(baba){
// 		for(var i = 2; i < words.length; i++){
// 			if (words === guessArray[i]){
// 				console.log("you already Guess this")
// 			};
// 		};
// 	};
// 	check(process.argv[2])

// // console.log(guessArray);

// inquirer
//   .prompt([

// 	{
// 		type: "input",
// 		Message: "Take a Guess",
// 		name: words()
// 	}
//   	])
//   	.then(function(){
//   		console.log(name)
//   	})