/* 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9. */

// Riješenje 1
/* 
var i = 2;
while (i < 20) {
  i = i + 1;
  if (i % 9 === 0) {
    continue;
  }
  console.log(i);
} 
*/

// Riješenje 2
var i = 3;
while (i < 20) {
  if (i % 9 !== 0) {
    console.log(i);
  }
}

/* 2. Koja je vrijednost isprintana u konzoli? */

var varOne = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);
