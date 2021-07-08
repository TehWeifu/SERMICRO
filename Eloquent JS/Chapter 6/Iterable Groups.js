class Group {
    constructor() {
        this.arr = []
    }

    has(value) {
        return this.arr.indexOf(value) !== -1;
    }

    add(value) {
        if (!this.has(value)) this.arr.push(value)
    }

    delete(value) {
        if (this.has(value)) this.arr.splice(this.arr.indexOf(value), 1)
    }

    static from(iterable) {
        let result = new Group()
        for (const iterableElement of iterable) {
            result.add(iterableElement)
        }
        return result
    }

}

Group.prototype[Symbol.iterator] = function () {
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

// Your code here (and the code from the previous exercise)

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c