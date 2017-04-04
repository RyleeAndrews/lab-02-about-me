'use strict';

console.log('The Guessing Game');


var firstCode = prompt('Did I enjoy my first coding session?');
console.log('Did I do it well though?', firstCode);
if (firstCode.toLowerCase() == 'yes'){
  alert ('Yup loved it!');


}
else {
  alert('Nope fell in love right away.');

}
var bucky = prompt('Did I first learn online with Bucky?');
console.log('Was Bucky the instructor?', bucky);
if (bucky.toUpperCase() == 'YES') {
  alert ('Great teacher!');
}
else {
  alert ('You\'re wrong where else would I go to learn the basics.');
}

var sam = prompt('Did Sam convince me to get into coding?');
console.log('Did he fully convince me though?', sam);

if (sam.toLowerCase() == 'yes'){
  alert ('Thank god for that.');
}
else{
  alert ('Wrong, he did and am so happy he did.');
}

var favoriteLanguage = prompt('Is css my favorite language?');
console.log('Or is it javascript?', favoriteLanguage);

if (favoriteLanguage.toUpperCase() == 'NO'){
  alert('Right but it\'s still fun');
}
else {
  alert ('No javascript is.');
}
var favoriteSushi = prompt ('Is the spider roll my favorite roll of sushi?');
console.log('Or is it spicy tuna?', favoriteSushi);

if (favoriteSushi.toLowerCase() == 'yes'){
  alert ('It\'s so bomb!');
}
else {
  alert ('No but spicy tuna is also one of my go to\'s.');
}
