console.log(" -  * Snail Sort *");
console.log('   N               +--> x');
console.log('W  +  E            |');
console.log('   S               y');

function snail(array) {
    console.table(array);
    console.log(`array.length=${array.length * array.length}`);
    let dx = +1;
    let lenx = array.length;
    let dy = 0;
    let leny = array.length;




}

// const arr = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 0],
//     [0, 8, 9, 4, 0],
//     [0, 7, 6, 5, 0],
//     [0, 0, 0, 0, 0]
// ];

const arr = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];
// const arr = [
//     [1, 2],
//     [4, 3]
// ];
// const arr = [[1]];

// console.log('Add zero frame ', addZeroFrame(arr));
console.log('go ', snail(arr));

// console.log('arr[2][3]', arr[2][3]);
// console.log('arr[0][0]', arr[0][0]); // 1
// console.log('arr[0][1]', arr[0][1]); // 2
// console.log('arr[0][2]', arr[0][2]); // 3
// console.log('arr[1][2]', arr[1][2]); // 4

{
    function snailOld(array) {
        console.table(array);

        // start init
        function addZeroFrame(array) {
            array.unshift([0]);
            array.push([0]);

            for (let i = 0; i < array.length - 2; i++) {
                array[0][i] = 'x';
                array[array.length - 1][i] = 'x';
            }
            // console.table(array);

            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[1].length; j++) {
                    // console.log(` array[${i}][${j}] ${array[i][j]}`);
                }
                array[i].unshift('x');
                array[i].push('x');
            }
            // console.table(array);
        }
        addZeroFrame(array);
        console.table(array);
        const snailArray = [array[1][1]];
        console.log(`Arr length ${array.length} * ${array[0].length} = `, array.length * array[0].length);
        let y = 1;
        let x = 1;

        let xNew = 0;
        let yNew = 0;

        let direction = 'East';
        let deltaY = 0;
        let deltaX = 1;
        let tmplValue = array[y][x];
        // console.log(`Start direction ${direction}, dY=${deltaY} dX=${deltaX}`);
        // console.log(`Start position, array[${y}][${x}]-`, array[y][x],);
        // start init

        // North, South, East, West
        function changeDirection(dir) {
            switch (dir) {
                case 'East':
                    direction = `South`;
                    deltaY = 1;
                    deltaX = 0;
                    // console.log(` New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                    break;
                case 'South':
                    direction = `West`;
                    deltaY = 0;
                    deltaX = -1;
                    // console.log(` New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                    break;
                case 'West':
                    direction = `North`;
                    deltaY = -1;
                    deltaX = 0;
                    // console.log(`New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                    break;
                case 'North':
                    direction = `East`;
                    deltaY = 0;
                    deltaX = 1;
                    // console.log(`  New direction: ${direction}, dY=${deltaY} dX=${deltaX}`);
                    break;
                default:
                    break;
            }
            x += deltaX;
            y += deltaY;

        }


        // woork loop
        for (let i = 0; i < array.length * array[0].length * array.length; i++) {
            // next step
            yNew = y + deltaY;
            xNew = x + deltaX;
            array[y][x] = 'x';
            // console.log(`old=0, array[${y}][${x}]-`, array[y][x],);

            if (array[yNew][xNew] === 'x') {
                // console.log(`Find 0, array[${yNew}][${xNew}], ${array[yNew][xNew]} change direction...`);
                changeDirection(direction);
            } else {
                y = yNew;
                x = xNew;
            }
            if (array[y][x] != 'x') {
                snailArray.push(array[y][x]);

            }
            // console.log(`_ ${direction}, array[${y}][${x}] - `, array[y][x],);
        }
        return snailArray;
        if (array[[1]] = 1) return 1;
        if (array[[]] = []) return [];
    }

}
