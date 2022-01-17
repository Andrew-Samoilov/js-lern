console.log(" -  * CodeWars * Custom sort function* - ");
console.log();

function sort(items) {
    console.log(items);
    let onSortIndicator = true;

    while (onSortIndicator) {
        onSortIndicator = false;

        for (let i = 0; i < items.length; i++) {
            if (items[i] > items[i + 1]) {
                console.log(`items[i]>items[i+1] ${items[i]}>${items[i + 1]}`);
                onSortIndicator = true;
                let tmp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = tmp;
                console.log(`items[i] items[i+1] ${items[i]} ${items[i + 1]}`);
            }
        }
    }

    return items;
}

console.log(sort([1, 3, 2]), [1, 2, 3]);
// console.log(sort([1, 3, 2, 3, 4, 1]), [1, 1, 2, 3, 3, 4]);
// console.log(sort([4, 1, 3, 2, 2, 3, 4, 1]), [1, 1, 2, 2, 3, 3, 4, 4]);
// console.log(sort([1]), [1]);
console.log(sort(["abc", "adc", "acc"]), ["abc", "acc", "adc"]);