console.log(" - * Code wars * 6 * Decode the Morse code * - ");
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

function morseSwitch(morseCodeToSwich = '') {
    // Цю діч знайшов в рішеннях, привяжу, щоб було зручніше. треба вчити словники.
    let result = '';
    switch (morseCodeToSwich) {
        case "...---... ": result += "SOS";
            break;
        case "  ":
            result += " "; break;
        case ". ":
            result += "E";
            break;
        case "- ":
            result += "T"; break;
        case ".. ":
            result += "I"; break;
        case "... ":
            result += "S"; break;
        case ".... ":
            result += "H"; break;
        case "...- ":
            result += "V"
            break;
        case "..- ":
            result += "U"
            break;
        case "..-. ":
            result += "F"
            break;
        case ".- ":
            result += "A"
            break;
        case ".-. ":
            result += "R"
            break;
        case ".-.. ":
            result += "L"
            break;
        case ".-- ":
            result += "W"
            break;
        case ".--. ":
            result += "P"
            break;
        case ".--- ":
            result += "J"
            break;
        case "-. ":
            result += "N"
            break;
        case "-.. ":
            result += "D"
            break;
        case "-... ":
            result += "B"
            break;
        case "-..- ":
            result += "X"
            break;
        case "-.- ":
            result += "K"
            break;
        case "-.-. ":
            result += "C"
            break;
        case "-.-- ":
            result += "Y"
            break;
        case "-- ":
            result += "M"
            break;
        case "--. ":
            result += "G"
            break;
        case "--.. ":
            result += "Z"
            break;
        case "--.- ":
            result += "Q"
            break;
        case "-.-.-- ":
            result += "!"
            break;
        case ".-.-.- ":
            result += "."
            break;
        case "--- ":
            result += "O"
            break;

    }
    return result;
}


let decodeMorse = function (morseCode) {
    console.log('Input Morce code', morseCode);

    return morseCode.trim()
        .replaceAll('   ', ' * ')
        .split(' ')
        .map(item => item === '*' ? ' ' : morseSwitch(item + ' '))
        .join('').replace(/\s+/g, ' ');
}

console.log(decodeMorse('           .... . -.--   .--- ..- -.. .      '));
console.log(decodeMorse('           .... . -.--                 .--- ..- -.. .      '));
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
