console.log(" - * CodeWars. Sort the odd * - ");
console.log();
console.log();

function sortArray(array) {
    // Return a sorted array.
    console.log(...array);
    const oddArray = [];
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        // console.log('-', array[i]);
        if (array[i] % 2 !== 0) {
            // console.log(array[i]);
            oddArray.push(array[i]);
        }
    }

    oddArray.sort((x, y) => x - y);
    console.log('Sorted odd array ', ...oddArray);

    // змінна - індекс в 2му масиві
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        // console.log('-', array[i]);
        if (array[i] % 2 !== 0) {
            // console.log('-- change', array[i]);
            resultArray.push(oddArray[j]);
            j++;
        } else {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}


// console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 32221, 55, 3, 2, 1, 0]));
console.log();