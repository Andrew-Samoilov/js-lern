console.log(" -  * CodeWars * - ");
console.log();

function solution(number) {
    let res = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            res += i;
        }
    }
    return res;
}

console.log(solution(10), 23);
// console.log(solution(15));


function solutionWithComents(number) {
    let res = 0;
    console.log(number);
    for (let i = 1; i < number; i++) {
        // console.log(i);
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i, i % 3, i % 5);
            res += i;
        }
    }
    // console.log(res);
    return res;
}