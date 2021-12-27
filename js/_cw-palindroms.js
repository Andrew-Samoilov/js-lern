console.log(" -  * CodeWars * Single character palindromes * - ");
console.log();

function solve(s) {
    let errorsCounter = 0;
    let res = "OK";
    const arr1 = s.split('');
    // const arr2 = s.split('');
    console.log(arr1);
    // arr2.reverse();
    // console.log(arr2);
    console.log(arr1.length - 0);

    for (let i = 0; i < arr1.length; i++) {
        console.log(i, 'arr1[i]! arr2[arr1.length]', arr1[i], arr1[arr1.length - i]);
        // if (arr1[i] != arr2[i]) {
        //     console.log(i, 'arr1[i]!= arr2[i]', arr1[i], arr2[i]);
        //     errorsCounter++;
        // }


        //     if (s[i] === s[s.length - 1 - i]) {
        //     } else {
        //         errorsCounter++;
        //         if (errorsCounter > 1) {
        //             console.log(s, res, errorsCounter);
        //             return "not possible";
        //         }
        //         if (s[i + 1] === s[s.length - 1 - i] || s[i] === s[s.length - 1 - 1 - i]) {
        //             res = "remove one";
        //             console.log(s, res, errorsCounter);
        //         }
        //     }
    }
    console.log(s, res, errorsCounter);
    return res;
};

console.log(solve("12345"), " ");
// console.log(solve("aba"), "");
// console.log(solve("baba"), "not possible");

// console.log(solve("madmam"), "remove one");
// console.log(solve("raydarm"), "not possible");
// console.log(solve("hannah"), "OK");
