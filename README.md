# Constructor-Hangman
There are 3 javascrpt files.
  Letter.js
    -->2 constructors, 1 overall function called letter
      - first constructor(display) checks and hides the arguement
      - second constuctor(compareValue) checks the arguement is true or false
  words.js
    -->4 constructors, 1 overall function called words
      - first constructor looks through the array and called the display constructor to see if tis true or false
      - second constructor splits the word by the "blank" and then pushes it to the empty array
      - thrid constructor compares the guess by assiging it a true or false true of false
      - fourth constructor checks the array of letter and see's if it is solved or completed
  Index.js
    used the letter.js, words.js and inquirer.
    empty array where letters will be pushed into. 
    attempts
    wins, loss
    word bank and randomizing the words.
    randomWord - a function where I can call later for a random word.
    details are just giving the user a view of their win, loss, attempt, words usedused and word they are trying to type out.
    startGame function is where it prompts and then compares the user input and then restarts all over again.
    restart function is where the game rests but adds the loss or win from the previous rounds. 
  
