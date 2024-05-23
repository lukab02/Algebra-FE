var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

const quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

// console.log(character);
// console.log(quotes);


// 2.
var proto1 = Object.getPrototypeOf(character);
var proto2 = Object.getPrototypeOf(proto1);
console.log(proto1);
console.log(proto2);


// // 3a
proto1.getQoute = function() {
  return quotes[ Math.floor(Math.random() * quotes.length)  ];
}

console.log (character.getQoute());

// 3b

character.__proto__.getQoute2 = function() {
  return Math.floor(Math.random() * quotes.length);
}
console.log(character.getQoute2());

