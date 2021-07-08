function arrayToList(arr) {
    if (arr.length === 1) return {"value": arr[0], "rest": null}
    return {"value": arr[0], "rest": arrayToList(arr.slice(1))}
}

function listToArray(list) {
    if (list.rest === null) return [list.value]
    return [list.value].concat(listToArray(list.rest))
}

function prepend(elem, list) {
    return {
        "value": elem,
        "rest": list
    }
}

function nth(list, pos) {
    if (pos === 0) return list.value
    if (list.rest === null) return  undefined
    return nth(list.rest, pos - 1)
}

console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
