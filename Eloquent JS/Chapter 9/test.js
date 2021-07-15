let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit, param4, param5) {
    console.log(match)
    console.log(amount)
    console.log(unit)
    console.log(param4)
    console.log(param5)
    amount = Number(amount) - 1;
    if (amount == 1) { // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs