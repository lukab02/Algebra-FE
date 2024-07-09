// call()

var object = {
  num: 2,
};

function add(a) {
  return this.num + a;
}

var b = add(3);
console.log(b);

var c = add.call(object, 3);
console.log(c);

// apply()

function add2(a, b) {
  return this.num + a + b;
}

var d = add2.apply(object, [3, 5]);
console.log(d);

// bind()

function add3(a) {
  return this.num + a;
}

var e = add3.bind(object, 2);
console.log(e);
