'use strict';
var counter = 0;

function checkAnswer1() {
  var firstCode = prompt('Did I enjoy my first coding session?');
  if(firstCode == null){
    alert('please enter something');
  } else if(firstCode.toLowerCase() == 'yes'){
    alert('Yup loved it!');
    counter++;
  } else{
    alert('Nope fell in love right away.');
  }
}
function checkAnswer2() {
  var bucky = prompt('Did I first learn online with Bucky?');
  if(bucky == null){
    alert('please enter something');
  } else if(bucky.toUpperCase() == 'YES') {
    alert('Great teacher!');
    counter++;
  } else{
    alert('You\'re wrong where else would I go to learn the basics.');
  }
}
function checkAnswer3() {
  var sam = prompt('Did Sam convince me to get into coding?');
  if(sam == null){
    alert('please enter something');
  } else if(sam.toLowerCase() == 'yes'){
    alert('Thank god for that.');
    counter++;
  } else{
    alert('Wrong, he did and am so happy he did.');
  }
}
function checkAnswer4() {
  var favoriteLanguage = prompt('Is css my favorite language?');
  if(favoriteLanguage == null){
    alert('please enter something');
  } else if(favoriteLanguage.toUpperCase() == 'NO'){
    alert('Right but it\'s still fun');
    counter++;
  } else{
    alert('No javascript is.');
  }
}
function checkAnswer5() {
  var favoriteSushi = prompt ('Is the spider roll my favorite roll of sushi?');
  if(favoriteSushi == null){
    alert('please enter something');
  } else if(favoriteSushi.toLowerCase() == 'yes'){
    alert('It\'s so bomb!');
    counter++;
  } else{
    alert('No but spicy tuna is also one of my go to\'s.');
  }
}
function checkAnswer6() {
  var correctAnswer = 'Thailand';
  var notFinished = true;
  var guess;
  for(var test = 4; test > 0 && notFinished; test--){
    guess = prompt('Where do I want to visit the most?');
    if(guess == correctAnswer ){
      alert('You got the right answer!');
      notFinished = false;
      counter++;
    } else if(test === 1){
      alert('You\'re out of guesses!');
    } else{
      alert('Guess again!');
    }
  }
}
function checkAnswer7() {
  var rightAnswers = ['Canada', 'Bahamas'];
  var notYetDone = true;
  var game;
  for(var run = 6; run > 0 && notYetDone; run--){
    game = prompt('Can you name a country I have visited?');
    if(game == rightAnswers[0]){
      alert('You got the right answers!');
      notYetDone = false;
      counter++;
    } else if(game == rightAnswers[1]){
      alert('You got the right answer!');
      notYetDone = false;
      counter++;
    } else if(run === 1){
      alert('You\'re out of tries!');
    } else{
      alert('Try again!');
    }
  }
}
function correct () {
  var name = prompt('what is your name?');
  alert(name + ' you got ' + counter + ' correct!');
}

checkAnswer1();
checkAnswer2();
checkAnswer3();
checkAnswer4();
checkAnswer5();
checkAnswer6();
checkAnswer7();
correct();
