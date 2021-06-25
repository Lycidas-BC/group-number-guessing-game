const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.json() );

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/inputs', (req, res) => {
  console.log('in post for inputs', req.body);

  // generate random number
  let generatedRandomNumber = randomNumber();
  console.log(generatedRandomNumber);

  // compare inputs to random number
  // req.body: contains array of input objects; filter out only the ones that match generatedRandomNumber
  //Object.values(req.body.inputArray).filter(element => Number(element) === generatedRandomNumber);
  checkAnswers(req.body.inputArray, generatedRandomNumber);
  
  // always respond
  res.sendStatus(201); // 201 is good!
});

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

function randomNumber() {
  let rNum = Math.floor(Math.random() * 25) + 1;
  return rNum;
}


let roundNumber = 0;
let person1Guesses = [];
let person2Guesses = [];
let person3Guesses = [];
let person4Guesses = [];

function checkAnswers(guesses, generatedRandomNumber) { // main function logic. takes inputs from client, returns  
  roundNumber++;
  let personNumber = 0;
for (guess of guesses) { // looping guess value
  personNumber++;
  guessRange = "";
  if (Number(guess) === generatedRandomNumber) { // check if guess equals random number
    console.log("Congratulations! You guessed the exact number!");
    guessRange = "Exact";
  } 
  else if (Number(guess) < generatedRandomNumber) { // check if guess is lower
    console.log("You guessed too low!");
    guessRange = "Too Low";
  }
  else if (Number(guess) > generatedRandomNumber) { // check if guess is higher
    console.log("You guessed too high!");
    guessRange = "Too High";
  }
  let entry = {}; // object to store personal round results
    entry.round = roundNumber;
    entry.playerNumber = personNumber; // call ID from input box to name player number
    entry.guessedNumber = guess;
    entry.generatedNumber = generatedRandomNumber;
    entry.result = guessRange;
    console.log(entry);
    switch (personNumber) { // statement to check for which player number an entry comes from and push it to their game data array storage
      case 1:
        person1Guesses.push(entry);
        break;
      case 2:
        person2Guesses.push(entry);
        break;
      case 3:
        person3Guesses.push(entry);
        break;
      case 4:
        person4Guesses.push(entry);
        break;
    
      default: console.log('error');
        break;
    }
}
return true;
}
