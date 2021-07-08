let result;

for (let i = 1; i < 101; i++) {
    result = ''

    if (!(i % 3)) result = 'Fizz'
    if (!(i % 5)) result += 'Buzz'

    console.log(result || i)
}