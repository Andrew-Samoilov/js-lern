console.log(' -  * test * - ');
// console.log(' -  * CodeWars *  * - ');
// Change code below this line
function findMatches(array, ...args) {
    const matches = []; // Don't change this line
    for (let index = 0; index < array.length; index++) {
        if (args.includes(array[index])) {
            console.log(args.includes(array[index]));
            matches.push(array[index]);
        }
    }
    // Change code above this line
    return matches;
}

console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41), [24, 9, 41]);