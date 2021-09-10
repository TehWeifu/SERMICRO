let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array)
console.log(array.map(s => s.toUpperCase()));
// → ["ONE", "TWO"]