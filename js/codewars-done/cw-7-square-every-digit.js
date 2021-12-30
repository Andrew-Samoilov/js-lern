console.log(" -  * CodeWars * Square Every Digit * - ");
console.log();

function squareDigits(num) {
    const res = String(num).split('');
    console.log(res);
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i] * res[i];
        // console.log(res[i]);

    }

    return Number(res.join(''));
}


console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
