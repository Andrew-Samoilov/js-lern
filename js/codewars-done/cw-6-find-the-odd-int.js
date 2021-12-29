console.log(" -  * CodeWars * Find the odd int * - ");
console.log();

function findOdd(A) {
    console.log(A);
    for (let i = 0; i < A.length; i++) {
        let countA = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                countA++;
                // console.log('Count a ', countA, `A[i] === A[j]`, A[i], A[j]);
            }
            // console.log('Count A', countA, `A[${i}] === A[${j}]`, A[i], A[j]);
        }
        console.log(`A[${i}] ${A[i]} found ${countA} times`);

        if (countA % 2 !== 0) {
            console.log(`A[${i}] ${A[i]} found ${countA} times. Odd.`);
            return A[i];
        }
    }
    return countA;

}


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
// console.log(findOdd([10]), 10);
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
