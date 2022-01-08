console.log(" -  * CodeWars * Esolang: Stick * - ");
console.log();

function interpreter(tape) {
    console.log(tape);
    const tapeArr = tape.split('');
    console.log(`tapeArr.length`, tapeArr.length);
    let stack = 0;
    let outputStream = '';
    let skip = 0;
    let lastGap = 0;
    let loopCounter = 0;

    for (let i = 0; i < tapeArr.length; i++) {
        // console.log(`--tapeArr[${i}] ${tapeArr[i]}`);
        switch (tapeArr[i]) {
            case '\n':
                // перенос строки в умовах
                break;
            case '^', '!':
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
                // console.log(`stack --`, stack);
                break;
            case '*':
                console.log(stack, String.fromCharCode(stack));
                outputStream += String.fromCharCode(stack);

                break;
            case '[':
                if (stack === 0) {
                    skip++;
                    console.log(`[ skip++`, skip);
                }
                lastGap = i + 1;
                // console.log(`  stack ${stack}, lastGap ${lastGap}`);
                break;
            case ']':
                if (loopCounter > 1000) return 'error';
                loopCounter++;
                if (skip > 0) {
                    // console.log(`] skip > 0 `);

                    console.log(`] skip > 0 , loopCounter++`, loopCounter);

                } else {
                    // console.log(`skip < 1 `, skip);
                    if (stack != 0) {
                        // console.log('] stack!=0, back to prev', stack, i);
                        i = lastGap;
                        // console.log('] i = lastGap', stack, i, lastGap);
                    }
                }
                skip--;
                // console.log(`] skip--`, skip);
                break;
            default:
                console.log(`default , ${stack}, tapeArr[i] ${tapeArr[i]}`);

                break;
        }
    }
    console.log(' return stack', stack, outputStream);
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
console.log(interpreter(`[+]*`));
// console.log(interpreter(`[*]*`));
// console.log(interpreter(`+[^]`).length);


