function reverseArray(arr) {
    var result = []

    for (const arrElement of arr) {
        result.unshift(arrElement)
    }

    return result
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
}
