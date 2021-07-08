function loop(startVal, testFunc, updateFunc, bodyFunc) {
    let currentVal = startVal
    while (testFunc(currentVal)) {
        bodyFunc(currentVal)
        currentVal = updateFunc(currentVal)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);