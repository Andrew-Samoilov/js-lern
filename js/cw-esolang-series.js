console.log(" -  * CodeWars * Esolang Interpreters * -");
console.log();

console.log("#2 - Custom Smallfuck Interpreter");
// заїбався, зроблю паузу. З того що бачу станом на зараз
// - треба міняти цикл на вайл і вручну проходитись по code

function interpreter(code, tape) {
    // console.log(`code ${code}, tape ${tape}`);
    let outputTape = tape.split('');
    console.log(`code ${code} code.lenght ${code.length}, tape ${tape}`);
    let pointer = 0;

    for (let i = 0; i < code.length; i++) {
        console.log(i, code[i], pointer, outputTape[pointer], outputTape.join(''));
        switch (code[i]) {
            case '*':
                // console.log(tape[pointer]);
                switch (outputTape[pointer]) {
                    case '0':
                        outputTape[pointer] = '1';
                        break;
                    case '1':
                        outputTape[pointer] = '0';
                        break;
                    default:
                        console.error(`outputTape[pointer] [${pointer}] ${outputTape[pointer]}`)
                        break;
                }
                break;
            case '>':
                pointer++;
                if (pointer > outputTape.length - 1) {
                    console.log(`> ! return`);
                    console.log(i, code[i], pointer, outputTape[pointer], outputTape.join(''));
                    return outputTape.join('');
                }
                break;
            case '<':
                pointer--;
                if (pointer < 0) {
                    console.log(`< ! return`);
                    return outputTape.join('');
                }
                break;

            case '[':
                // console.error(`Дописати логіку сюди (.'[' `);
                if (outputTape[pointer] === '0') {
                    console.log(`[ && outputTape[${pointer}] === '0'`);
                    for (let j = i + 1; j < code.length; j++) {
                        // console.log(`j=${j} code[${j}] ${code[j]}`);
                        if (code[j] === ']') {
                            console.log(`[code[${j}]=']', i=j;`);
                            i = j;
                            // console.log(`[! i=${i}, j=${j}, code[${i}]='${code[i]}'`);
                            break;
                        }
                    }
                }
                console.log(`[! i=${i}, code[${i}]='${code[i]}'`);
                break;

            case ']':
                console.error(`Дописати логіку сюди (. ']' and outputTape[pointer] !=${outputTape[pointer]}`);
                if (outputTape[pointer] != 0) {
                    console.log(`] && outputTape[${pointer}] != 0 (${outputTape[pointer]})`);
                    for (let j = i; j > -1; j--) {
                        if (code[j] != '[') {
                            console.log(`] code[${j}]='[', i=j+1;`);
                            i = j + 1;
                            console.log(`] !! i=${i}, j=${j}, pointer='${pointer}', code[${i}]='${code[i]}'`);
                            break;
                        }
                    }
                }
                break;

            default:
                console.log(`default ,${code[i]}`)
                break;

        }
    }

    return outputTape.join('');
}

// console.log(interpreter("[[]*>*>*>]", "000"), "!000");
console.log(interpreter("[>[*>*>*>]>]", "10110"), "10101");
// console.log(interpreter("*[>*]", "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"), "'1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'");
// console.log(interpreter("[>*]", "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"), "?");
// console.log(interpreter("*", "00101100"), "10101100");
// Flips the second and third cell of the tape
// console.log(interpreter(">*>*", "00101100"), "01001100");
// Flips all the bits in the tape
// console.log(interpreter("*>*>*>*>*>*>*>*", "00101100"), "11010011");
// Flips all the bits that are initialized to 0
// console.log(interpreter("*>*>>*>>>*>*", "00101100"), "11111111");
// Goes somewhere to the right of the tape and then flips all bits that are initialized to 1, progressing leftwards through the tape
// console.log(interpreter(">>>>>*<*<<*", "00101100"), "00000000");

console.log('- - - - - - - - - - - - - - - -');
{
    console.log("#1- Introduction to Esolangs and My First Interpreter (MiniStringFuck)");
    function myFirstInterpreter(code) {
        // console.log(code);
        let memoryCell = 0;
        let outputStr = [];
        for (let i = 0; i < code.length; i++) {
            // console.log(i, code[i]);
            switch (code[i]) {
                case '+':
                    memoryCell++;
                    if (memoryCell > 255) memoryCell = 0;
                    break;
                case '.':
                    // console.log(memoryCell, String.fromCharCode(memoryCell));
                    outputStr += String.fromCharCode(memoryCell);
                    break;
                default:
                    console.log(`default ,${code[i]}`)
                    break;
            }
        }
        return outputStr;
    }

    // Hello World Program - outputs the string "Hello, World!"
    // console.log(myFirstInterpreter("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++.+++++++..+++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++.+++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++."), "Hello, World!");
    // Outputs the uppercase English alphabet
    console.log(myFirstInterpreter("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+."), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}