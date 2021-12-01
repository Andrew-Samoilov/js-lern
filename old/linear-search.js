// видає індекс item в масиві )

function linearSearch(arrayItem, item) {
    let count = 0;
    if (!arrayItem || !item) { return "! Bad input ! "; }
    for (let i = 0; i < arrayItem.length; i++) {
        count++;
        if (arrayItem[i] === item) { return count; }
    }

    return null;
}

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

console.log(linearSearch(array, 8));
console.log(linearSearch());
