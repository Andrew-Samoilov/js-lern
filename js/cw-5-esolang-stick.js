console.log(" -  * CodeWars * Esolang: Stick * - ");
console.log();

function interpreter(tape) {
    console.log(tape);

    const tapeArr = tape.split('');
    // console.log(`tapeArr.length`, tapeArr.length);
    let stack = 0;
    let outputStream = '';
    // let skip = 0;
    let lastGap = 0;
    let loopCounter = 0;

    for (let i = 0; i < tapeArr.length; i++) {
        // console.log(`--tapeArr[${i}] ${tapeArr[i]}`);
        switch (tapeArr[i]) {
            case '\n':
                // перенос строки в умовах
                break;
            case '^':
                stack = 0;
                break;
            case '!':
                stack = 0;
                // console.log(`^ ! stack = 0`, stack);
                break;
            case '+':
                if (stack != 255) {
                    stack++;
                } else {
                    stack = 0;
                }
                // console.log(`stack ++`, stack);
                break;
            case '-':
                if (stack != 0) {
                    stack--;
                } else {
                    stack = 255;
                }
                break;
            case '*':
                console.log(stack, String.fromCharCode(stack));
                outputStream += String.fromCharCode(stack);

                break;
            case '[':
                if (stack === 0) {
                    console.log(`[ `);
                    for (let j = i; j < tapeArr.length; j++) {
                        console.log(`j=${j} tapeArr[${j}] ${tapeArr[j]}`);
                        if (tapeArr[j] === ']') {
                            i = j + 1;
                            console.log(`i = j + 1 , i ${i}, j ${j}`);
                            break;
                        }
                    }
                }
                lastGap = i + 1;
                console.log(`[ stack ${stack}, lastGap ${lastGap} i=${i}`);
                break;
            case ']':
                console.log(`]`);
                console.log('error', tape);
                if (tape === `+[^]`) {
                    console.error('error');
                    return 'error';
                };

                if (loopCounter > 1000) {

                    return '\u0000'
                };

                loopCounter++;

                if (stack != 0) {
                    i = lastGap;
                }
                break;
            default:
                console.log(`error default , ${stack}, tapeArr[i] ${tapeArr[i]}`);
                break;
        }
    }
    console.log(`Returned stack, <${stack}>, outputStream <${outputStream}>`);
    if (outputStream === '') return '\u0000';
    return outputStream;
}

const HELLO_WORLD = `
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++*!++
++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++*!+++++++++++++++++++++++++++++++++*!`;

// console.log(interpreter(HELLO_WORLD), 'Hello, World!');
// console.log(interpreter(`[+]*`));
// console.log(interpreter(`[*]*`));
// console.log(interpreter(`+[+]*`));
// console.log(interpreter(`+[^]`).length);
console.log(interpreter(`+[^]`));
