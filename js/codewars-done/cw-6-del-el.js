console.log(" -  * CodeWars *  * - ");
console.log();

function deleteNth(arr, n) {
    console.log(arr, n);
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}] ${arr[i]}`);
        let numCount = 0;
        for (let j = 0; j < resArr.length; j++) {
            if (arr[i] === resArr[j]) numCount++;
        }
        console.log(`arr[${i}] ${arr[i]}, numCount ${numCount}`);
        if (numCount < n) resArr.push(arr[i]);

    }
    return resArr;
}

// console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);