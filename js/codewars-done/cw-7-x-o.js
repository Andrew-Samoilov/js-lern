console.log(" -  * CodeWars *  * - ");
console.log();

function XO(str) {
    let countX = 0;
    let countO = 0;
    for (const item of str) {

        if (item.toLowerCase() === 'x') {
            countX++;
            continue;
        }
        if (item.toLowerCase() === 'o') {
            countO++;
            continue;
        }
    }
    return (countX === countO) ? true : false;

}


console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);

function XOWithComent(str) {
    console.log(str);
    let countX = 0;
    let countO = 0;
    for (const item of str) {
        // console.log(item);
        if (item.toLowerCase() === 'x') {
            countX++;
            // console.log(countX);
            continue;
        }
        if (item.toLowerCase() === 'o') {
            countO++;
            // console.log(countO);
            continue;
        }
    }
    console.log(countX, countO);
    return (countX === countO) ? true : false;
    //code here
}