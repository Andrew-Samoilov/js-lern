console.log(' -  * test * - ');
console.log(' -  * CodeWars * Cat years, Dog years * - ');
console.log();

var humanYearsCatYearsDogYears = function (humanYears) {
    // Your code here!
    let catYears = 0;
    let dogYears = 0;

    switch (humanYears) {
        case 1:
            catYears = 15;
            dogYears = 15;
            break;
        case 2:
            catYears = 15 + 9;
            dogYears = 15 + 9;
            break;
        default:
            catYears = (humanYears - 2) * 4 + 15 + 9;
            dogYears = (humanYears - 2) * 5 + 15 + 9;
            break;
    }

    return [humanYears, catYears, dogYears];
}


console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);
