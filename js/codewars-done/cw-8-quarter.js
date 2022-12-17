console.log(' -  * test * - ');
console.log(' -  * CodeWars * Quarter of the year * - ');
console.log();

const quarterOf = (month) => {
    // Your code here
    if (month < 4) {
        return 1;
    }
    if (month < 7) {
        return 2;
    }
    if (month < 10) {
        return 3;
    }
    return 4;
    // Math.ceil(m/3);
}


console.log(quarterOf(3), 1);
console.log(quarterOf(8), 3);
console.log(quarterOf(11), 4);
console.log(quarterOf(7), 3);
