console.log(" -  * CodeWars * Moving Zeros To The End * - ");
console.log();

var moveZeros = function (arr) {
    const res = [];
    const zero = [];
    // console.log(res);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // console.log(i, arr[i]);
            zero.push(0);
        } else {
            res.push(arr[i]);
        }
    }
    res.push(...zero);
    return res;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);