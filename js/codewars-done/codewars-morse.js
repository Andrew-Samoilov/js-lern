console.log(" - * Code wars * - ");
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
console.log();
console.log();

/* на момент розробки про "map" взагалі нічого не знаю. 
після вирішення подивився шо він часто використовується.
подивився що ми його ще будемо вчити, заспокоївся ) */

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
    //your code here
    console.log('Input Morce code', morseCode);

    let result = '';
    morseCode = morseCode.trim();
    // console.log('*- trim ', morseCode);

    // пишу функцію replace-All
    do {
        morseCode = morseCode.replace('   ', ' * ');
    } while (morseCode.includes('   '));

    // console.log('**- replace ', morseCode);

    let templateArray = morseCode.split(' ');
    // templateArray[2] = undefined;
    // console.log('*- split ', morseCode);

    for (let i = 0; i < templateArray.length; i++) {

        switch (templateArray[i]) {
            case undefined:
            case null:
                result += '';
                // console.log('-- undefined', result);
                break;
            case '*':
                result += ' ';
                break;
            default:
                result += morseSwitch(templateArray[i] + ' ');
                // console.log('result --', result);
                break;
        }
    }

    // console.log(' - i', templateArray[i], 'result -', result);

    console.log('Finish result -', result);
    return result;
}

console.log(decodeMorse('           .... . -.--   .--- ..- -.. .      '));
console.log(decodeMorse('           .... . -.--                 .--- ..- -.. .      '));
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
