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

var minFor = function (list) {
    let minimum = 0;
    for (let index = 0; index < list.length; index++) {
        if (list[index] < minimum) {
            minimum = list[index];
        }
    }
    return minimum;
}
var min = function (list) {
    let minimum = list[0];
    for (let index = 0; index < list.length; index++) {
        (list[index] < minimum) ? minimum = list[index] : list[index];
    }
    return minimum;
}

var max = function (list) {
    let maximum = list[0];
    for (let index = 0; index < list.length; index++) {
        (list[index] > maximum) ? maximum = list[index] : list[index];
    }
    return maximum;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);