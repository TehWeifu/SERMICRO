function deepEqual(elem1, elem2) {
    if (typeof elem1 !== "object") return elem1 === elem2
    if (elem1 === null) return elem2 === null

    for (const elemKey in elem1) {
        if (!deepEqual(elem1[elemKey], elem2[elemKey])) return false
    }

    return true
}

// Your code here.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true