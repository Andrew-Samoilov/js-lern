console.log(" - * String calc * - ");
console.log();
console.log();

function deleteSpase(str = '') {
    // Викидаємо взагалі всі пробіли
    console.log('Input string = ', str);
    // str = str.trim().replaceAll(' ', '');
    // console.log('trim', str);

    return str.trim().replaceAll(' ', '');;
}

function calcFromArgs(argument1 = 0, operator = '+', argument2 = 0) {
    console.log(`Argument1 = ${argument1}, operator = "${operator}", argument2 = ${argument2}.`);
    argument1 = Number(argument1);
    argument2 = Number(argument2);

    switch (operator) {
        case '+':
            return argument1 + argument2;
            break;
        case '-':
            return argument1 - argument2;
            break;
        case '*':
            return argument1 * argument2;
            break;
        case '/':
            return argument1 / argument2;
            break;
        default:
            console.error(`Wrong arguments: argument1 = ${argument1}, operator = "${operator}", argument2 = ${argument2}.`);
            break;
    }


}



console.log(' calc = ', calcFromArgs('fzsdsdf', '+', 5));
// console.log(' calc = ', calcFromArgs(20, '-', 7));
console.log(' calc = ', calcFromArgs(12424, '/', 5));
console.log(' calc = ', calcFromArgs(98724, '\//', 5));

console.log('delete spase = ', deleteSpase("     aj fd     asdo  asdj    "));
