console.log(" -  * CodeWars * Incrementer * - ");
console.log();

function incrementer(nums) {
    let res = [];
    let foo = 0;
    for (let i = 0; i < nums.length; i++) {
        foo = nums[i] + i + 1;
        if (foo >= 10) {
            foo += `-`;
            foo = Number(foo[foo.length - 2]);
        }
        res.push(foo);
    }
    return res;
}


// console.log(incrementer([1, 2, 3]), [2, 4, 6]);
// console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]);
// console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]);
console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]);

function incrementerWithComent(nums) {
    let res = [];
    let foo = 0;
    for (let i = 0; i < nums.length; i++) {
        foo = nums[i] + i + 1;
        // console.log('-', foo);
        if (foo >= 10) {
            foo += `-`;
            // console.log(foo);
            // console.log(foo[foo.length - 2]);
            foo = Number(foo[foo.length - 2]);
            // console.log(foo);
        }

        res.push(foo);
    }
    console.log(res);
    return res;
}