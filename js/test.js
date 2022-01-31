console.log(' -  * test * - ');
console.log(' -  * CodeWars *  * - ');
console.log();

function pron(inputX, inputY) {
    console.log(`x ${inputX}, y ${inputY}`);
    let num = 1;
    let x = 1;

    for (let i = 0; i < 1000000; i++) {
        console.log(`i ${i}`);
        let x2 = x;
        console.log(`x2 ${x2}`);
        for (let y = 1; y <= x; y++) {
            console.log(`x ${x2} y${y} num ${num}`);
            if (x2 === inputX && y === inputY) return num;
            num++;
            x2--;
        }
        x++;
    }
}

console.log(pron(10, 5));
console.log(pron(2, 3));
