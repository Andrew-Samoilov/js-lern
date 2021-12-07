console.log(" - * Code wars. You're a square! * - ");
console.log();
console.log();

var isSquare = function (n) {
    return (Math.sqrt(n) === Math.round(Math.sqrt(n))) ? true : false;

    // let tempValue = 0;
    // tempValue = Math.sqrt(n);
    // tempValue = Math.round(tempValue);

    // console.log(Math.round(Math.sqrt(n)), '---', Math.round(tempValue));


    if (Math.sqrt(n) === Math.round(Math.sqrt(n))) {
        // console.log('1 alarm');
        return true;
    }

    // console.log(n, 'temp 2', tempValue);

    return false; // fix me


}

console.log(3, isSquare(3));
console.log(25, isSquare(25));
