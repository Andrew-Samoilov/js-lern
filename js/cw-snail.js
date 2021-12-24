console.log(" -  * Snail Sort *");
console.log('   N               +--> x');
console.log('W  +  E            |');
console.log('   S               y');

function snail(array) {
    console.table(array);
    const snailArray = [];
    console.log(`Arr length ${array.length} * ${array[0].length} = `, array.length * array[0].length);
    let y = 0;
    let x = 0;

    let direction = 'East';
    let deltaY = 0;
    let deltaX = 1;
    let tmplValue = array[y][x];
    console.log(`Start direction ${direction}, dY=${deltaY} dX=${deltaX}`);

    function changeDirection(dir) {
        tmplValue = snailArray.pop();

        switch (dir) {
            case 'East':
                x -= 1;
                console.log(` Step back (x-=1), x = ${x}`);

                direction = `South`;
                deltaY = 1;
                deltaX = 0;

                console.log(` New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                break;
            case 'South':
                y -= 1;
                console.log(` Step back (y-=1), y = ${y}`);


                direction = `West`;
                deltaY = 0;
                deltaX = -1;
                console.log(` New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                break;
            case 'West':
                x += 1;
                console.log(` Step back (x+=1), x = ${x}`);


                direction = `North`;
                deltaY = -1;
                deltaX = 0;
                console.log(`New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                break;
            case 'North':
                y += 1;
                console.log(` Step back (y+=1), y = ${y}`);


                direction = `East`;
                deltaY = 0;
                deltaX = 1;
                console.log(`  New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                break;
            default:
                break;
        }

    }
    // North, South, East, West

    for (let i = 0; i < array.length * array[0].length * array.length; i++) {
        // if (array[y][x] === null) {
        //     changeDirection(direction);
        // };
        if (x < 0) {
            // x = 0;
            changeDirection(direction);
        };
        if (x > array.length) {
            // x -= 1;
            changeDirection(direction);
        };
        if (y < 0) {
            // y = 0;
            changeDirection(direction);
        };
        if (y > array[0].length - 1) {
            // y -= 1;
            changeDirection(direction);
        };

        if (array[y][x] === false || array[y][x] === undefined) {
            // console.log(`Direction ${direction}`);

            changeDirection(direction);
            // console.log(`After change direction ${direction}, array[${y}][${x}]-`, array[y][x],);
        }
        // if (array[y][x] === null) {
        //     changeDirection(direction);
        // };

        console.log(`Direction ${direction}, arr[${y}][${x}]`, array[y][x], ' tmplV', tmplValue);

        if (array[y][x] === null) {
            snailArray.push(tmplValue);
        } else {
            snailArray.push(array[y][x]);
        };
        array[y][x] = null;
        // console.log(`Direction ${direction}, array[${y}][${x}]-`, array[y][x]);
        // console.log(' snailArray ', ...snailArray);
        x += deltaX;
        y += deltaY;

        // console.log(`i = ${i} y = ${y} x = ${x}  array[${y}][${x}]`);

    }
    return snailArray;
}

const arr = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];

console.log('go ', snail(arr));
// console.log('arr[2][3]', arr[2][3]);
// console.log('arr[0][0]', arr[0][0]); // 1
// console.log('arr[0][1]', arr[0][1]); // 2
// console.log('arr[0][2]', arr[0][2]); // 3
// console.log('arr[1][2]', arr[1][2]); // 4
