console.log(" -  * CodeWars + * * - ");

function dominator(arr) {
    // console.log(arr);
    let result = -1;
    let tested = [];

    for (let index = 0; index < arr.length; index++) {
        // console.log(`arr ${arr[index]}`);
        let tmp = 1;
        // console.log(`tested ${tested.includes(arr[index])} arr[index] ${arr[index]}`);

        if (!tested.includes(arr[index])) {
            for (let j = index + 1; j < arr.length; j++) {
                if (arr[index] === arr[j]) {
                    tmp++;
                }
            }
        }

        if (tmp > arr.length / 2) {
            // console.log(`tmp ${tmp}, arr[${index}], ${arr[index]}`);
            result = arr[index];
            return result;
        }
        // console.log(tested);
        tested.push(arr[index]);


    }

    return result;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]), 3);
console.log(dominator([1, 2, 3, 4, 5]), -1);
console.log(dominator([1, 1, 1, 2, 2, 2]), -1);
console.log(dominator([1, 1, 1, 2, 2, 2, 2]), 2);
