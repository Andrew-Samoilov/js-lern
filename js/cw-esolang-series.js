console.log(" -  * CodeWars * Esolang Interpreters * -");
console.log();

console.log("#2 - Custom Smallfuck Interpreter");

function interpreter(code, tape) {
    console.log(`code ${code}, tape ${tape}`);
    let outputTape = tape.split('');
    let pointer = 0;
    let lastGap = 0;

    for (let i = 0; i < code.length; i++) {
        // console.log(i, code[i]);
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
                if (pointer > outputTape.length - 1) return outputTape.join('');
                break;
            case '<':
                pointer--;
                if (pointer < 0) return outputTape.join('');
                break;
            case '[':
                if (outputTape[pointer] === '0') {
                    console.log(`[ and outputTape[pointer] === '0' `);

                    for (let j = i; j < code.length; j++) {
                        console.log(`j=${j} code[${j}] ${code[j]}`);
                        if (code[j] === ']') {
                            console.error(`дописати ще логіки тут`);
                            pointer = j + 1;
                            console.error(`! , i ${i}, j ${j}, pointer ${pointer},  `);
                            break;
                        }
                    }

                    lastGap = i + 1;
                }
                break;
            case ']':
                if (outputTape[pointer] != 0) {
                    console.error(`дописати ще логіки тут`);
                    // pointer = lastGap;
                }
                break;

            default:
                console.log(`default ,${code[i]}`)
                break;
        }
    }

    return outputTape.join('');
}

// console.log(interpreter("[>*]", "010"), "010");

//       string code = "[<<>>**[]]>*"; тут ломаэться, дописати логіку []
//         string tape = "00101100";
//         string expectedOutput = "01101100";

console.log(interpreter("[<<>>**[]]>*", "00101100"), "01101100");
// console.log(interpreter("*[>*]", "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"), "?");
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