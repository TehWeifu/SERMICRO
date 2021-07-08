function isEven(num) {
    if (num === 0) return true
    if (num === 1) return false

    if (num < 0) return isEven(-num)

    return isEven(num - 2)
}
