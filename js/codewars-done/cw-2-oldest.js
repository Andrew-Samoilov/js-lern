console.log(" -  * CodeWars * - ");
console.log();

function twoOldestAges(ages) {
    console.log(ages.sort((a, b) => a - b).splice(ages.length - 2, 2));
    return ages.sort((a, b) => a - b).splice(ages.length - 2, 2);
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));