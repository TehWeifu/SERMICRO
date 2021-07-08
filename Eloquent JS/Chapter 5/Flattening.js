function flattening(arrOfArrays) {
    return arrOfArrays.reduce((result, arr) => {
        return result.concat(arr)
    })
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays))