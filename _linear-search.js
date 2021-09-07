

function linearSearch(array, item) {
    const array=[1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
    for (let i = 0; i < array.lenght; i++){
        document.write('--', i);
        if (array[i]===item) {
           document.write('--', i);
        }
    }
    return null;
}

linearSearch(array, 8);
