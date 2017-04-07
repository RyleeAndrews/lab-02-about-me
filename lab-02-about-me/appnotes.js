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
'use strict';

function sayHello(){
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
console.log('what a hoe ' + name + ' is!');
