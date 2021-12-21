console.log('- * Recursion sum * -');

function recSum(arr) {
    if (arr.length <= 1) {
        // console.log('0', arr);
        return arr[0];
    } else {
        // console.log('2', arr);
        return arr.shift() + recSum(arr);
    }
}
let arr1 = [11, 15, 22, 31];
console.log('Recursion sum of', ...arr1, '=', recSum(arr1));
arr1 = [15];
console.log('Recursion sum of', ...arr1, '=', recSum(arr1));