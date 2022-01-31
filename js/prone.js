function pron(inputX, inputY) {
    console.log(`Вхідні: x ${inputX}, y ${inputY}`);
    let num = 1;
    let x = 1;
    let y = 1;
    let x2 = x;

    do {
        x2 = x;
        for (let y = 1; y <= x; y++) {
            if (x2 === inputX && y === inputY) return num;
            num++;
            x2--;
        }
        x++;
    } while (x2 != inputX && y != inputY);
    return num;
}

console.log(pron(10, 5)); // -> 96
console.log(pron(2, 3)); // -> 9

function pronWithComm(inputX, inputY) {
    console.log(`Вхідні: x ${inputX}, y ${inputY}`);
    let num = 1;
    let x = 1;

    for (let i = 0; i < 10000000; i++) {
        let x2 = x;
        for (let y = 1; y <= x; y++) {
            if (x2 === inputX && y === inputY) return num;
            num++;
            x2--;
        }
        x++;
    }
}

function pronSimple(inputX, inputY) {
    console.log(`Вхідні: x ${inputX}, y ${inputY}`);
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
