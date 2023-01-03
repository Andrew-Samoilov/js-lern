console.log(' -  * test * - ');
console.log(' -  * CodeWars *  * - ');

function getCommonElements(array1, array2) {
    // Change code below this line
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    return result;
    // Change code above this line
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]), [10, 30, 40]);