function Dog(name) {
  this.bark = function() {
    return 'Wuf Wuf';
  };
  this.name = name || "Rex"; // 1.
}

// 2.

var mojPas = new Dog("Fido");
console.log(mojPas.name);

console.log(mojPas.bark());

// <prototip objekt>.__proto__
// <konstruktor funkcija>.prototype

Dog.prototype.getName = function() {
  return this.name;
}

console.log(mojPas.getName());

