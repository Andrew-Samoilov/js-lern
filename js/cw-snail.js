console.log(" -  * Snail Sort * - ");
console.log('   N');
console.log('W  +  E');
console.log('   S');

function snail(array) {
    console.table(array);
    console.log(`Arr length ${array.length} * ${array[0].length} = `, array.length * array[0].length);
    let x = 0;
    let y = 0;
    let deltaX = 1;
    let deltaY = 0;

    const snailArray = [];
    for (let i = 0; i < array.length * array[0].length; i++) {
        console.log('-', array[y][x]);
        x += deltaX;
        y += deltaY;

    }
    return snailArray;
}

const arr = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];

console.log(snail(arr));

// console.log('arr[0][0]', arr[0][0]); // 1
// console.log('arr[0][1]', arr[0][1]); // 2
// console.log('arr[0][2]', arr[0][2]); // 3
// console.log('arr[1][2]', arr[1][2]); // 4
