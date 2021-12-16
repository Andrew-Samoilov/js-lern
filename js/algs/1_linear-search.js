let count = 0;

function linearSearch(arrayItem, item) {
    for (let i = 0; i < arrayItem.length; i++) {
        count++;
        if (arrayItem[i] === item) {
            return i;
        }
    }
    return null;
}

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

console.log(linearSearch(array, 7));
console.log('Count=', count);
