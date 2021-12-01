console.log(" - * Code wars * - ");
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
console.log();
console.log();

function decodeMorse(morseCode = '') {
    //your code here
    console.log(morseCode);
    let result = '';
    let templateArray = morseCode.split(' ');
    console.log(' split', templateArray);

    for (let i = 0; i < templateArray.length; i++) {
        result += templateArray[i];
        // console.log(' - i', templateArray[i], 'result -', result);
    }

    return result;
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse());