function digPow(n, p) {
    let digiToStr = n.toString();
    // console.log(digiToStr, n, p);
    let a = 0;
    let exponentiate = p;
    for (let index = 0; index < digiToStr.length; index++) {
        a += Math.pow(parseInt(digiToStr[index]), exponentiate);
        exponentiate++;
    }

    if (Number.isInteger(a / n)) {
        return a / n;
    } else {
        return -1;
    }
}

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);