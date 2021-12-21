console.log(" -  * Simple square numbers * - ");
console.log();
console.log();
// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029/train/javascript

function solve(n) {
    if (n <= 2) return -1;


    console.log('inside', n);
    n = Math.sqrt(n)
    console.log('Math.sqrt', n);
    n = Math.trunc(n);
    console.log('Math.trunc', n);

    return n;
}

console.log(solve(3), 1);

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