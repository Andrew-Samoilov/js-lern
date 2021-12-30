console.log(" -  * CodeWars * Directions Reduction * - ");
console.log();

function dirReducWithComments(arr) {
    console.log(arr);
    let changed = true;

    while (changed === true) {
        changed = false;

        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].toUpperCase());
            switch (arr[i]) {
                case 'NORTH':
                    if (arr[i + 1] === 'SOUTH') {
                        console.log('-', arr[i], arr[i + 1]);
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;
                case 'SOUTH':
                    if (arr[i + 1] === 'NORTH') {
                        console.log('-', arr[i], arr[i + 1]);
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;
                case 'WEST':
                    if (arr[i + 1] === 'EAST') {
                        console.log('-', arr[i], arr[i + 1]);
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;
                case 'EAST':
                    if (arr[i + 1] === 'WEST') {
                        console.log('-', arr[i], arr[i + 1]);
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;

                default:
                    break;
            }
        }
    }
    return arr;
}
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);

function dirReduc(arr) {
    let changed = true;
    while (changed === true) {
        changed = false;
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'NORTH':
                    if (arr[i + 1] === 'SOUTH') {
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;
                case 'SOUTH':
                    if (arr[i + 1] === 'NORTH') {
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;
                case 'WEST':
                    if (arr[i + 1] === 'EAST') {
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;
                case 'EAST':
                    if (arr[i + 1] === 'WEST') {
                        arr.splice(i, 2);
                        changed = true;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return arr;
}