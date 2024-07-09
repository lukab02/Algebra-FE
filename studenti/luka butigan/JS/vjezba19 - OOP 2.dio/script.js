/* 
1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex". 
2. Kreirajte objekt iz Dog funkcije.
3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat. 
*/

function Dog(name) {
  this.bark = function () {
    return 'Wuf';
  };
  this.name = name || 'Rex ';
}

// 2.
var myDog = new Dog();
console.log(myDog.name); // 1.

// 3.

/* 
__proto__ <Prototip objekt>
prototype <Konstruktor funkcija>
 */

Dog.prototype.getName = function () {
  return this.name;
};
console.log(myDog.getName());
