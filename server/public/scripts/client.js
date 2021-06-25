$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  // when user clicks submit, run function
  $('#submit').on('click', submitGuesses);

  // when user clicks [], run function
  $('#Restart').on('click', restartGame);
}
/**
 * 
 */
function submitGuesses() {
  //get input values
  let input1 = Number($('#input1').val());
  let input2 = Number($('#input2').val());
  let input3 = Number($('#input3').val());
  let input4 = Number($('#input4').val());

  //send to server
  $.ajax({
    //type
    method: 'POST',
    url: '/inputs',
    data: {inputArray:
        [input1, input2, input3, input4]
    } //data becomes req.body on server
})
.then( function(response) {
    // successful send case
    console.log('posted item', response);
})
.catch( function(err) {
    //server.js returned error case
    console.log('failed to post', err);
})
}

function restartGame() {
  //get input values
  $('#input1').empty();
  $('#input2').empty();
  $('#input3').empty();
  $('#input4').empty();

  //send to server
  $.ajax({
    //type
    method: 'POST',
    url: '/reset'//data becomes req.body on server
})
.then( function(response) {
    // successful send case
    console.log('reset successful', response);
})
.catch( function(err) {
    //server.js returned error case
    console.log('reset failed', err);
})
}