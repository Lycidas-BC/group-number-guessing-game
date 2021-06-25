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
  checkAnswers(Object.values(req.body.inputArray), generatedRandomNumber);
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

guesses = [3, 17, 24, 11];

let person1Guesses = [];
let person2Guesses = [];
let person3Guesses = [];
let person4Guesses = [];

// guess = number imputed from client
// guesses = array of numbers


    function checkAnswers(guesses, generatedRandomNumber) {
      roundNumber++;
    for (guess of guesses) { // looping guess value
      let personNumber = 0;
      personNumber++;
      guessRange = "";
      if (guess === generatedRandomNumber) { // check if guess equals random number
        alert("Congratulations! You guessed the exact number!");
        guessRange = "Exact";
      } 
      else if (guess < generatedRandomNumber) { // check if guess is lower
        console.log("You guessed too low!");
        guessRange = "Too Low";
      }
      else if (guess > generatedRandomNumber) { // check if guess is higher
        console.log("You guessed too high!");
        guessRange = "Too High";
      }
      let entry = {}; // object to store personal round results
        entry.round = roundNumber;
        entry.playerNumber = 1; // call ID from input box to name player number
        entry.guessedNumber = guess;
        entry.generatedNumber = generatedRandomNumber;
        entry.result = guessRange;
        console.log(entry);
    }
    }