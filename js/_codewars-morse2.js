console.log(" - * CodeWars. Decode the Morse code, advanced * - ");
console.log();
console.log();

function transmitionsRate(bits = '') {
    let maxZeroRepeat = 0;
    let foo = 0;

    for (let i = 0; i < bits.length; i++) {
        // console.log(`i - ${i} bits  ${bits[i]}`);
        if (bits[i] === '0') {
            foo++;
            // console.log('foo++ ', foo);
        } else {
            if (foo > maxZeroRepeat) {
                maxZeroRepeat = foo;
                foo = 0;
                // console.log(`foo=${foo}, maxZeroRepeat=${maxZeroRepeat}`);
            }
            foo = 0;
        }
    }
    console.log(`Max Zero repeat = ${maxZeroRepeat}`);
    // console.log(`-Transmition Rate = ${(maxZeroRepeat / 7) > 0 ? maxZeroRepeat / 7 : 1}`);
    return (maxZeroRepeat / 7) > 0 ? maxZeroRepeat / 7 : 1;
}

var decodeBits = function (bits) {
    let result = '';
    const transmitionRate = transmitionsRate(bits);
    console.log('--', bits);
    console.log('Inside Decode func Tr Rate is', transmitionRate);
    result = bits.replaceAll('00', '0').replaceAll('11', '1');
    // bits.replaceAll('11', '1');
    console.log('++', result);


    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    return result.replaceAll('111', '-').replaceAll('000', ' ').replaceAll('1', '.').replaceAll('0', '');
}

var decodeMorse = function (morseCode) {
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
}

// console.log(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')))
// console.log('Tr Rate = ', transmitionsRate('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));

console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));
console.log('···· · −·−−   ·−−− ··− −·· · !');