console.log(" - * Code wars - small exersice * - ");
console.log();
console.log();
console.log();

// Bool 2 string
function boolToStr(b = false) {
    return b ? "Yes" : "No";
}

console.log(boolToStr(false));
console.log(boolToStr(true));


// Summ all posuteve numbers
function positiveSum(arr) {
    let result = 0;

    for (const variable of arr) {
        if (variable > 0) {
            result += variable;
        }
    }
    // console.log(result);
    return result;
}

console.log(positiveSum([1, -4, 7, 12]));


const arr = ["BEST", "the", "foo", "is", "JS"];
// console.log(...arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "foo") {
        arr.splice(i, 1);
        // console.log('--', arr[i]);
    }
}

console.log(arr.join(" "));