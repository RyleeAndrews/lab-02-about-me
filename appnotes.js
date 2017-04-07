// 'use strict';
// TOD0: I want prompt the user to guess the number 12 // and get four chances

/* var correctNumber = 12;
var notDone = true;

var guess;
for (var guesses = 3; guesses > 0 && notDone; guesses--){
guess = prompt('what is my favorite number?');
guess = parseInt(guess);
if (guess == correctNumber){
  alert('you got the right number!');
  notDone = false;

} else if (guesses === 1){
  alert ('youre out of guesses');
}
else {
  alert('guess again');
}

}

var slug = 100
slug = Math.pow(slug,4);
slug = Math.floor(234.34);
slug = Math.ceil(234.34);
slug = Math.round(234.34);

var happy = true;//true
happy = !happy; //false

null // a programmer chose for the value to be nothing
undefined //literally means nothing
 // \n return (new line char)
// \t tab
// \\  actual /
// \  "// actual double quote
// \  ' // actual single quote
var message = 'go to the store';
console.log(message);

message = message + '\ngo the market';
console.log(message); */
// 'use strict';

/*function sayHello(){
  console.log('helooo');
  return 100;
}
var lulwat = sayHello();
console.log('helooo', lulwat);

function getUsername(){
  var username = prompt('whats your username?');
  return username;
}
var user = getUsername();
console.log('user value is', user);
function lulwat(){
  var a =3;
}
//variables are function scoped//
function greet(name){
  return 'hello ' + name + '!!!!!';
}
var result = greet('ryan');
console.log('results value is ', result);
result = greet('lulwat')
console.log('what a hoe ' + name + ' is!');*/
/* no semi colon on function definition
if statements
declaration: I want a variable but im not going to assign a value
assignment: setting what the variable =
definition: I want a variable and im going to assign it a value */
/*function guessMyFavoriteCommand(){
var tries, commandGuess, i;
var commandTools = ["rm", "rf", "cd", "ls"];
var userWon = false;
for(tries = 3; tries > 0; tries--){
  commandGuess = prompt('guess a command i like?');

  for(i=0; i < commandTools.length; i++){
    if(commandGuess === commandTools[i]){
      console.log('yes I love that command');
      userWon =true;
    }
}
if (!userWon){
  console.log('guess again');
}
}
if (!userWon){
  console.log('sorry you lost');
}
console.log('the program are ' + commandTools.join(', '));
}
guessMyFavoriteCommand();












/*'use strict';
var correctNumber = 420;
var tries, numGuess;
for(var tries = 2; tries > 0; tries--){
  var numGuess = prompt('guess my favorite number');
  numGuess = parseInt(numGuess);
  console.log('numGuess value', numGuess);

  if (numGuess === correctNumber){
    console.log('yuppppppp you know it');
    tries = 0;
  } else if (numGuess < correctNumber) {
    console.log('too low.');
  } else if (numGuess > correctNumber){
    console.log('thats too high bob');
  } else {
    console.log('you need a number');
  }
}*/




function yesorNOQuestion(question, correctValue, message){
var travelToSpace = prompt(question);

if (typeof travelToSpace === 'string'){
travelToSpace = travelToSpace.toLowerCase().trim();
}




if (travelToSpace === correctValue || travelToSpace === correctValue[0]){
  console.log('you guessed correct ' + message);
} else {
  console.log('you guessed wrong ' + message);
}
}
yesorNOQuestion('do i like to code?', "yes", "i like to code")
yesorNOQuestion('do i like to run?', 'yes', 'i like to ski');
