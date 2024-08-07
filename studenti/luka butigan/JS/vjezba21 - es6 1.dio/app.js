/* 
1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.
2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.
3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var. 
 */

'use strict';

// 1.
var a = 78;
var b = 34;
// delete a;
// delete window.b;
const myObject = { property1: 1, property2: 2, property1: 1 };

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };
const allUsers = [user, ...users];

console.log(allUsers);

// 3.
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('The number is ' + i);
  }, 1000);
}

console.log(i);

const myFn = () => {
  return 1;
};
console.log(myFn());

const myFn1 = (a) => {
  return a;
};
console.log(myFn1(2));

const myFn2 = (a, b) => {
  return a + b;
};
console.log(myFn2(1, 2));

const myFn3 = (a) => 'Danas je: ' + a;
console.log(myFn3('Četvrtak'));

function myFn4(a) {
  return 'Danas je: ' + a;
}
