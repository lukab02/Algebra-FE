// 1. Kreirajte varijable firstName i lastName 
// i spojite ih u varijablu fullName, ali s razmakom ("") 
// između imena i prezimena.

var firstName = "Ivan";
var lastName = "Horvat";

var fullName = firstName + " " + lastName;
console.log(fullName);

//2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
// var x = z === 2 ? y : 5;

// var x;

// if (z === 2) {
//   x = y;
// } else {
//   x = 5;
// }

// 3.

for (var i = 1; i<=20; i = i + 1) {
  if (i % 2 === 0) {
    console.log("Broj: " + i + " je paran");
  } else {
    console.log("Broj: " + i + " je neparan");
  }
}
