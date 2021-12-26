console.log(" -  * CodeWars * - ");
console.log();

console.log(" -  * Difference of Volumes of Cuboids * - ");
function findDifferenceWithComents(a, b) {
    if (a.reduce((previousValue, number) => previousValue * number) > b.reduce((previousValue, number) => previousValue * number)) {
        return a.reduce((previousValue, number) => previousValue * number) - b.reduce((previousValue, number) => previousValue * number);
    } else {
        b.reduce((previousValue, number) => previousValue * number) - a.reduce((previousValue, number) => previousValue * number);
    }
    return 0;
    // console.log(...a);

    console.log(a.reduce((previousValue, number) => previousValue * number));
    console.log(b.reduce((previousValue, number) => previousValue * number));

}

function findDifference(a, b) {
    return (a.reduce((previousValue, number) => previousValue * number) > b.reduce((previousValue, number) => previousValue * number))
        ? a.reduce((previousValue, number) => previousValue * number) - b.reduce((previousValue, number) => previousValue * number)
        : b.reduce((previousValue, number) => previousValue * number) - a.reduce((previousValue, number) => previousValue * number);

    return 0;
}

console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);


console.log(" -  * Is the string uppercase? * - ");
// Best practise :-)
String.prototype.isUpperCaseBestPractise = function () {
    return this.toUpperCase() === this.toString();
}

String.prototype.isUpperCase = function () {
    // console.log(this);
    for (let i = 0; i < this.length; i++) {
        if (this[i].toLowerCase() === this[i] && this[i] != ' ' && this[i] != '.' && this[i] != '#') {

            return false;
        }
        // console.log(this[i]);

    }
    return true;
    // your code here
}

console.log(`BOB WALKS HIS DOG EVERY DAY.`.isUpperCase());

console.log(" -  * List Filtering * - ");

function filter_list(l) {

    console.log(l.filter(Number.isInteger));


}
// console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]);
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);


console.log(" -  * Largest pair sum in array * - ");
// На диво довго промучився, 
function largestPairSumWithComents(numbers) {
    let res = Math.min(...numbers);
    // console.log(Math.max(...numbers));

    console.log(Math.max(...numbers));
    res = numbers[numbers.indexOf(Math.max(...numbers))];
    numbers[numbers.indexOf(Math.max(...numbers))] = Math.min(...numbers);
    console.log(Math.max(...numbers));
    res += numbers[numbers.indexOf(Math.max(...numbers))];

    return res;
}

function largestPairSum(numbers) {
    let res = Math.min(...numbers);
    res = numbers[numbers.indexOf(Math.max(...numbers))];
    numbers[numbers.indexOf(Math.max(...numbers))] = Math.min(...numbers);
    return res + numbers[numbers.indexOf(Math.max(...numbers))];
}

console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10);



console.log(" -  * Johnny * - ");
function greet(name) {

    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Johnny"), "Hello, my love!");

console.log(" -  * Summ Num * - ");
var summation = function (num) {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}

console.log(summation(1), 1);
console.log(summation(8), 36);

console.log(" -  * Elevator Distance * - ");
function elevatorDistance(array) {
    // console.log(array);
    let res = 0;

    for (let i = 0; i < array.length; i++) {
        // console.log('i ', array[i]);
        if (array[i] > array[i + 1]) {
            res += array[i] - array[i + 1];
            // console.log('r', array[i] - array[i + 1]);
        }
        if (array[i] < array[i + 1]) {
            res += array[i + 1] - array[i];
            // console.log('v', array[i + 1] - array[i]);
        }
    }
    return res;
}

console.log(elevatorDistance([7, 1, 7, 1]), 18);


