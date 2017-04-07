'use strict';
var counter = 0;
console.log('The Guessing Game');


var firstCode = prompt('Did I enjoy my first coding session?');
console.log('Did I do it well though?', firstCode);
if(firstCode == null){
  alert('please enter something');
}
else if(firstCode.toLowerCase() == 'yes'){
  alert('Yup loved it!');
  counter++;
}
else{
  alert('Nope fell in love right away.');
}
var bucky = prompt('Did I first learn online with Bucky?');
console.log('Was Bucky the instructor?', bucky);
if(bucky == null){
  alert('please enter something');
}
 else if(bucky.toUpperCase() == 'YES') {
  alert('Great teacher!');
  counter++;
}
else{
  alert('You\'re wrong where else would I go to learn the basics.');
}
var sam = prompt('Did Sam convince me to get into coding?');
console.log('Did he fully convince me though?', sam);
if(sam == null){
  alert('please enter something');
}
else if(sam.toLowerCase() == 'yes'){
  alert('Thank god for that.');
  counter++;
}
else{
  alert('Wrong, he did and am so happy he did.');
}
var favoriteLanguage = prompt('Is css my favorite language?');
console.log('Or is it javascript?', favoriteLanguage);
if(favoriteLanguage == null){
  alert('please enter something');
}
else if(favoriteLanguage.toUpperCase() == 'NO'){
  alert('Right but it\'s still fun');
}
else{
  alert('No javascript is.');
  counter++;
}
var favoriteSushi = prompt ('Is the spider roll my favorite roll of sushi?');
console.log('Or is it spicy tuna?', favoriteSushi);
if(favoriteSushi == null){
  alert('please enter something');
}
else if(favoriteSushi.toLowerCase() == 'yes'){
  alert('It\'s so bomb!');
  counter++;
}
else{
  alert('No but spicy tuna is also one of my go to\'s.');
}
var correctAnswer = 'Thailand';
var notFinished = true;
var guess;
console.log('Or do I only want to visit North Korea?', correctAnswer);
for(var test = 4; test > 0 && notFinished; test--){
  guess = prompt('Where do I want to visit the most?');
  if(guess == correctAnswer ){
    alert('You got the right answer!');
    notFinished = false;
    counter++;
  }
  else if(test === 1){
    alert('You\'re out of guesses!');
  }
  else{
    alert('Guess again!');
  }
}
var rightAnswers = ['Canada', 'Bahamas'];
var notYetDone = true;
var game;
console.log('Or have I only been in the US?', rightAnswers);
for(var run = 6; run > 0 && notYetDone; run--){
  game = prompt('Can you name a country I have visited?');
  if(game == rightAnswers[0]){
    alert('You got the right answers!');
    notYetDone = false;
    counter++;
  }
  else if(game == rightAnswers[1]){
    alert('You got the right answer!');
    notYetDone = false;
    counter++;
  }
  else if(run === 1){
    alert('You\'re out of tries!');
  }
  else{
    alert('Try again!');
  }
}
var name = prompt('What is your name?');
console.log(name);
var message = (name + ' you got ' + counter + ' right! Try Again!');
alert(message);
