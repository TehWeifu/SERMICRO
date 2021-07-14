let neighbor = /neighbou{0,5}r/;
console.log(neighbor.test("neighbouuuuuur"));
// → true
console.log(neighbor.test("neighbor"));
// → true