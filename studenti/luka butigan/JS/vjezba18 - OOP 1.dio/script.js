/* 
1. Pratite kod u scripts.js.
2. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta). Nadite prototip tog prototipa. Ispisite ih.
3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes". 
*/

var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown',
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  'Pure fuel! PURE FUEL! WOO!',
  'See? Zoomer.',
  'Bitchin.',
];

// 2.
var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

// 3.
character.prototype = function () {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
