let size = 10
let result = ''

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i % 2) {
            if (j % 2) result += ' '
            else result += '#'
        } else {
            if (j % 2) result += '#'
            else result += ' '
        }
    }
    result += '\n'
}
console.log(result)
