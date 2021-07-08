function range(start, end, step = 1) {
    var result = []

    if (start > end) {
        for (let i = start; i >= end; i += step) {
            result.push(i)
        }
    } else {
        for (let i = start; i <= end; i += step) {
            result.push(i)
        }
    }
    return result
}


function sum(arr) {
    var result = 0
    for (const arrElement of arr) {
        result += arrElement
    }
    return result
}
