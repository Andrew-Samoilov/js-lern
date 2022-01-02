console.log(" -  * CodeWars * Bit Counting * - ");
console.log();

var countBits = function (n) {
    return [...n.toString(2)]
        .filter(value => value === '1')
        .length;
}

console.log(countBits(0), 0);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);

var countBitsWithComents = function (n) {
    // console.log(n.toString(2));
    // console.log(...n.toString(2));

    // const oneValues = [...n.toString(2)].filter(value => value === '1').length;
    // console.log(oneValues);
    // console.log(oneValues);

    return [...n.toString(2)]
        .filter(value => value === '1')
        .length;

    // console.log(res);

}