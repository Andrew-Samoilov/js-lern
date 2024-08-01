console.log(" - * CodeWars * 7 kyu * Regex validate PIN code * -");

function validatePIN(pin) {
    // console.log(`|${pin}|`, pin.replace(/\n/g, '').split(''));
    // pin = pin.replace(/\n/g, '').split('');
    pin = pin.split('');
    // console.log(pin);
    for (let index = 0; index < pin.length; index++) {
        // console.log(parseInt(pin[index]));
        if (isNaN(parseInt(pin[index]))) return false;
    }

    return !!((pin.length === 4 || pin.length === 6));
}



console.log(validatePIN("1"), false)
console.log(validatePIN("12"), false)
console.log(validatePIN("123"), false)
console.log(validatePIN("12345"), false)
console.log(validatePIN("1234567"), false)
console.log(validatePIN("-1234"), false)
console.log(validatePIN("1.234"), false)
console.log(validatePIN("-1.234"), false)
console.log(validatePIN("00000000"), false)
console.log(validatePIN("a234"), false)
console.log(validatePIN('1234\n'), false, `1234\n`);
console.log(validatePIN("1234"), true);
console.log(validatePIN("0000"), true);
console.log(validatePIN("1111"), true);
console.log(validatePIN("123456"), true);
console.log(validatePIN("098765"), true);
console.log(validatePIN("000000"), true);
console.log(validatePIN("123456"), true);
console.log(validatePIN("090909"), true);
