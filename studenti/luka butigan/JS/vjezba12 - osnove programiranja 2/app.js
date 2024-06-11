/* 
 U ovoj vježbi koristit ćemo se lodash bibliotekom. Prvi korak je da instalirate lodash paket na lokalno računalo.

Korisnik na našoj stranici kreira password. Želimo osigurati da:
	1. Je svaki znak u passwordu različit od drugih / jedinstven
	2. Su svi znakovi brojke
	3. Password nema više od 10 znakova


Vaš je zadatak:
	1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)
	2. Napisati funkciju koja provjerava da li su svi znakovi brojke
	3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10
*/

var password = '0123456789';

// 1. Svaki znak passsworda je jedinstven
function isUnique(str) {
  return str.length == _.uniq(str).length;
}

console.log('Opcija:' + isUnique(password));

function isUnique1(str) {
  return new Set(str).size == str.length;
}

console.log('Opcija 1:' + isUnique1(password));

function isUnique2(str) {
  var strChars = '';
  for (var i of str) {
    if (strChars.includes(i)) {
      return false;
    }
    strChars = strChars + 1;
  }
  return true;
}

console.log('Opcija 2:' + isUnique2(password));

// 	2. Svi su znakovi brojke
function isNumber(str) {
  if (_.toNumber(str)) {
    return true;
  } else {
    return false;
  }
}
console.log('Opcija 3:' + isNumber(password));

// 3. Password nema više od 10 znakova
function reduceLength(str) {
  if (str.length > 10) {
    //  var tempStr = _.take(str, 10);
    var tempStr = str.substr(0, 10);
    return tempStr;
  } else {
    return str;
  }
}
console.log('Opcija 4:' + reduceLength(password));
