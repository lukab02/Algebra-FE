
/* 1. Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka, a izvana će se moći pristupiti dvjema metodama modula: walk() i getTotalSteps().

2. Exportajte modul iz datoteke. */


import { Exercise, myObj } from './first.js';

console.log(Exercise.getTotalSteps());
Exercise.walk();
Exercise.walk();
console.log(Exercise.getTotalSteps());

console.log(myObj.ime + " " + myObj.prezime);
