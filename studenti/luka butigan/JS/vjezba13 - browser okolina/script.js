//  1. Dimenzija browser prozora
console.log('Širina prozora:' + window.innerWidth);
console.log('Visina prozora:' + window.innerHeight);

//  Dimenzije ekrana
console.log('Širina ekrana:' + window.screen.width);
console.log('Visina ekrana:' + window.screen.height);

// 2.
console.log('Adresa;' + window.location.hostname);
window.location.replace('http://www.google.com');

// 3.
var answer = window.confirm('Are you sure you want to accept cookies?');
console.log('Odgovor:' + answer);

function late() {
  console.log('Hello world');
}
window.setTimeout(late, 3000);

/* window.setTimeout(function () {
  console.log('Hello world');
}, 3000); */
