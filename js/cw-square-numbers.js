console.log(" -  * Simple square numbers * - ");
console.log();
console.log();
// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029/train/javascript

function solve(n) {
    console.log('Inside func', n);
    let counter = 0;
    function isSquare(num) {
        if (num > 1000) return num + 'too mach';
        // console.log(`Math.sqrt(n2) ${Math.sqrt(n2)}, Math.trunc(Math.sqrt(n2)) ${Math.trunc(Math.sqrt(n2))}`);
        return (Math.sqrt(num) === Math.trunc(Math.sqrt(num)));
    };

    let n2 = 1;

    // console.log(`isSquare ${n2} ${isSquare(n2)}`);
    // console.log(`isSquare ${n} + ${n2} ${isSquare(n + n2)}`);
    let is2Square = false;

    do {
        // console.log('Inside do while - n2', n2);
        // console.log(`isSquare ${n} + ${n2} ${isSquare(n + n2)}`);
        if (isSquare(n2)) {
            // console.log(`_Inside 1 if, isSquare ${n2} ${isSquare(n2)}`);
            if (isSquare(n + n2)) {
                console.log(`__! Inside 2 if, isSquare ${n} + ${n2} ${isSquare(n + n2)}, counter = ${counter}`);
                is2Square = true;

                return n2;
            };
        };
        n2++;
        counter++;
    } while (!is2Square);

    console.log(`After while isSquare ${n} + ${n2} ${isSquare(n + n2)}`);

    return n2;
}

console.log(solve(17));

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