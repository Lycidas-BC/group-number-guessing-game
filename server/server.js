const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

function randomNumber() {
  let rNum = Math.floor(Math.random() * 25) + 1;
  return rNum;
}

let generatedNumber = randomNumber();

for (guess of guesses) {
  if (guess === generatedNumber) {
    alert("Congratulations! You guessed the exact number!");
  } 
  else if (guess < generatedNumber) {
    console.log("You guessed too low!");
  }
  else if (guess > generatedNumber) {
    console.log("You guessed too high!");
  }
  return true;
}