console.log(" -  * CodeWars * Highest and Lowest * - ");
console.log();

function highAndLow(numbers) {
    return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");