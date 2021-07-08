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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false