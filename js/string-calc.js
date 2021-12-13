console.log(" - * String calc * - ");
console.log();
console.log();

function deleteSpase(str = '') {
    // Викидаємо взагалі всі пробіли
    // console.log('Input string = ', str);
    // str = str.trim().replaceAll(' ', '');
    // console.log('trim', str);

    return str.trim().replaceAll(' ', '');
}

function calcFromArgs(argument1 = 0, operator = '+', argument2 = 0) {
    console.log(`${argument1} ${operator} = ${argument2}.`);
    argument1 = Number(argument1);
    argument2 = Number(argument2);

    switch (operator) {
        case '+':
            return argument1 + argument2; break;
        case '-':
            return argument1 - argument2; break;
        case '*':
            return argument1 * argument2; break;
        case '/':
            return argument1 / argument2;
            break; default:
            console.error(`Wrong arguments: argument1 = ${argument1}, operator = "${operator}", argument2 = ${argument2}.`);
            break;
    }
}

let testStrExpr = " 12 - 15  ";

function calcFromStr(strExpr) {
    let resultInt = 0;
    let resultStr = '';
    resultStr = deleteSpase(strExpr);
    console.log('r str ', resultStr, '-');

    for (let i = 0; i < resultStr.length; i++) {

        if (Number(resultStr[i])) {
            console.log(i, 'str ', Number(resultStr[i]));
        } else console.log(i, ' not a number ', resultStr[i]);

    }

    return resultStr;
}


console.log('Calc from string =', calcFromStr(testStrExpr), 'mow != :) .');
// console.log(' calc = ', calcFromArgs(20, '-', 7));
// console.log(' calc = ', calcFromArgs(150, '/', 5));
// console.log(' calc = ', calcFromArgs(98724, '\//', 5));

// console.log('delete spase = ', deleteSpase("     aj fd     asdo  asdj    "));
