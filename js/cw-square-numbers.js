console.log(" -  * Simple square numbers * - ");
console.log();
console.log();
// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029/train/javascript

function solve(n) {
    // console.log('Inside func', n);
    function isSquare(num) {
        // console.log(`Math.sqrt(n2) ${Math.sqrt(n2)}, Math.trunc(Math.sqrt(n2)) ${Math.trunc(Math.sqrt(n2))}`);
        return (Math.sqrt(n2) === Math.trunc(Math.sqrt(n2)));
    };

    let n2 = 0;

    let n3 = 0;
    // if (n <= 2) return -1;
    n2 = n;
    console.log('n2', n2);


    if (Math.sqrt(n2) === Math.trunc(Math.sqrt(n2))) return 0;

    n2 = Math.sqrt(n2)
    console.log('Math.sqrt', n2);
    n2 = Math.trunc(n2);
    console.log('Math.trunc', n2);

    n2 = Math.trunc(n2) + 1;
    console.log('n2', n2, 'n2*n2', n2 * n2);
    console.log(`isSquare ${n2} ${isSquare(n2)}`);

    return n2 * n2 - n;
}

console.log(solve(1));

// assert.strictEqual(solve(3), 1)
// assert.strictEqual(solve(4), -1)
// assert.strictEqual(solve(5), 4)
// assert.strictEqual(solve(7), 9)
// assert.strictEqual(solve(8), 1)
// assert.strictEqual(solve(9), 16)
// assert.strictEqual(solve(10), -1)
// assert.strictEqual(solve(11), 25)
// assert.strictEqual(solve(13), 36)
// assert.strictEqual(solve(17), 64)
// assert.strictEqual(solve(88901), 5428900)
// assert.strictEqual(solve(290101), 429235524)