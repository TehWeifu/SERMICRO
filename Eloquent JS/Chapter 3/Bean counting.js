function countChar(str, char) {
    var count = 0
    for (const letter of str) {
        if (letter === char) count++
    }
    return count
}

function countBs(str) {
    return countChar(str, 'B')
}

