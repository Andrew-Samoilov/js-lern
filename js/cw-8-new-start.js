console.log(' -  * CodeWars * SquareSum * - ');
console.log();

function squareSum(numbers) {
    let res = 0;
    for (let index = 0; index < numbers.length; index++) {
        // console.log(numbers[index]);
        res = res + numbers[index] * numbers[index];
    }
    return res;
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sheeps = 0;
    for (let index = 0; index < arrayOfSheep.length; index++) {
        // console.log(arrayOfSheep[index]);
        if (arrayOfSheep[index]) {
            sheeps++;
        }
    }
    return sheeps;
}

var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

console.log(countSheeps(array1), 17, "There are 17 sheeps in total");

console.log(' -  * CodeWars * Min Max * - ');
console.log();

var min = function (list) {

    return list[0];
}

var max = function (list) {

    return list[0];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);