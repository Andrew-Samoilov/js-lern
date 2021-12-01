console.log(" - * Code wars * - ");
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
console.log();
console.log();

// function decodeMorse(morseCode = '') {
let decodeMorse = function (morseCode) {
    //your code here
    // console.log(morseCode);
    let result = '';

    // morseCode = morseCode.trim().replaceAll('   ', ' * ');

    // console.log('*- ', morseCode);
    // на кодеварсі не працює replaceAll, перепишу, але напевне вже завтра

    let templateArray = morseCode.trim().replaceAll('   ', ' * ').split(' ');
    templateArray[2] = undefined;

    console.log('-split', templateArray);

    for (let i = 0; i < templateArray.length; i++) {

        switch (templateArray[i]) {
            case undefined:
            case null:
                result += '';
                console.log('-- undefined', result);
                break;
            case '*':
                result += ' ';
                break;
            default: result += templateArray[i] + ' ';
                break;
        }

    }

    // console.log(' - i', templateArray[i], 'result -', result);

    console.log('result -', result);
    return result.trim();
}

console.log(decodeMorse('           .... . -.--   .--- ..- -.. .      '));
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// 'E', expected 'E E'
// «... --- ...», тогда как оно должно быть «... --- ...» . . 