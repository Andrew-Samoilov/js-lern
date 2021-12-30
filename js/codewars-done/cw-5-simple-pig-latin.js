console.log(" -  * CodeWars * Simple Pig Latin * - ");
console.log();

function pigIt(str) {
    console.log(str);
    const res = str.split(' ');
    // console.log(res);

    for (let i = 0; i < res.length; i++) {
        if (res[i] != '!' && res[i] != '?') {
            let element = res[i].split('');
            // console.log(element);
            res[i] = element.splice(0, 1) + 'ay';
            res[i] = element.join('') + res[i];
            console.log(res[i]);
        }
    }

    return res.join(' ');
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('Quis custodiet ipsos custodes ?'), ' ');
