class PGroup {
    constructor(baseArr = []) {
        this.arr = baseArr
    }

    has(value) {
        return this.arr.indexOf(value) !== -1;
    }

    add(value) {
        if (!this.has(value)) {
            let result = new PGroup(this.arr)
            result.arr.push(value)
            return result
        }
    }

    delete(value) {
        if (this.has(value)) {
            let result = new PGroup(this.arr)
            result.arr.splice(result.arr.indexOf(value), 1)
            return result
        }
    }

    static empty = new PGroup()

    static from(iterable) {
        let result = new PGroup()
        for (const iterableElement of iterable) {
            result.add(iterableElement)
        }
        return result
    }

}

PGroup.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this)
}

class GroupIterator {
    constructor(group) {
        this.group = group
        this.count = 0
    }

    next() {
        if (this.group.arr.length === this.count) return {done: true}

        return {
            value: this.group.arr[this.count++],
            done: false
        }
    }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
