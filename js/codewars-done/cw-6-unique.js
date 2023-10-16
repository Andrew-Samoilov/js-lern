console.log(` - * 6 kuy * Unique In Order * -`);
let uniqueInOrder = function (iterable) {
    let res = [];

    if ((typeof iterable) === 'string') iterable = iterable.split("");

    for (let index = 0; index < iterable.length; index++) {
        if (iterable[index] !== iterable[index + 1]) res.push(iterable[index]);
    }

    return res;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
