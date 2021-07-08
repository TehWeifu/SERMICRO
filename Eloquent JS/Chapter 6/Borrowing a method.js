let map = {one: true, two: true, hasOwnProperty: true};

map.prototype.hasOwnProperty = (val) => {this.hasOwnProperty(val)}

// Fix this call
console.log(map.hasOwnProperty("one"));
// → true