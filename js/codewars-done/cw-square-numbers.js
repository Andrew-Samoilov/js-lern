console.log(" -  * Simple square numbers * - ");
console.log();
console.log();
// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029/train/javascript

function solve(n) {
    console.log('Inside func', n);

    let delta = 3;
    let counter = 0;
    const maxCount = n / 2 + 1;

    // console.log('------- дивимся на квадратні номери, потім шукаємо дельту');
    // let previousValue = 0;
    // for (let index = 1; index < 1200; index++) {
    //     if (isSquare(index)) {
    //         console.log(`Square num ${index}, +${index - previousValue}`);
    //         previousValue = index;
    //     }
    // }
    // console.log('-------');

    function isSquare(num) {
        const n = Math.sqrt(num);
        return (n === Math.trunc(n));
    };

    let n2 = 1;
    console.log(`isSquare ${n2} ${isSquare(n2)}`);
    console.log(`isSquare ${n} + ${n2} ${isSquare(n + n2)}`);

    let is2Square = false;
    do {
        // console.log('Inside do while - n2', n2);
        if (isSquare(n2)) {
            // console.log('_   Inside 1st if - n2', n2);
            if (isSquare(n + n2)) {
                console.log(`! Inside 2 if, isSquare ${n} + ${n2} ${isSquare(n + n2)}, counter = ${counter}`);
                is2Square = true;
                return n2;
            };
        }
        // console.log(`n2, ${n2}`, 'delta', delta);
        n2 += delta;
        delta = Math.trunc(Math.sqrt(n2) * 2 + 1);
        // console.log(` n2, ${n2}`);
        counter++;
        if (counter > maxCount) {
            console.log(`maxCount !, isSquare ${n} + ${n2} ${isSquare(n + n2)}, counter = ${counter}`);
            return -1;
        }
    } while (!is2Square);
}


console.log(solve(3));

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
// assert.strictEqual(solve(88901), 5428900)  console.log(solve(8356730));
// assert.strictEqual(solve(290101), 429235524) 