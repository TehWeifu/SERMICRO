class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    get length () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

Vec.prototype.plus = function (vec) {
    return new Vec((this.x + vec.x), (this.y + vec.y))
}

Vec.prototype.minus = function (vec) {
    return new Vec((this.x - vec.x), (this.y - vec.y))
}

// Your code here.

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5