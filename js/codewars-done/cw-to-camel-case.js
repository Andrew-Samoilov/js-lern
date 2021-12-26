console.log(" -  * CodeWars * Convert string to camel case * - ");
console.log();

function toCamelCaseWithComment(str) {
    let res = [];
    if (str.length === 0) return '';

    // console.log(str.includes("-"));
    if (str.includes("-")) {
        res = str.split('-');
    } else {
        res = str.split('_');
    }

    let tmp = res[0].split('');

    if (tmp[0].toUpperCase() === tmp[0]) {
        console.log(tmp[0].toUpperCase());
    }

    for (let i = 1; i < res.length; i++) {
        // console.log('-', res[i]);
        tmp = res[i].split('');
        tmp[0] = tmp[0].toUpperCase();
        res[i] = tmp.join('');
        // console.log('--', res[i]);
    }
    return res.join('');
}

function toCamelCase(str) {
    let res = [];
    if (str.length === 0) return '';

    if (str.includes("-")) {
        res = str.split('-');
    } else {
        res = str.split('_');
    }

    let tmp = res[0].split('');

    if (tmp[0].toUpperCase() === tmp[0]) {
        console.log(tmp[0].toUpperCase());
    }

    for (let i = 1; i < res.length; i++) {
        // console.log('-', res[i]);
        tmp = res[i].split('');
        tmp[0] = tmp[0].toUpperCase();
        res[i] = tmp.join('');
    }

    return res.join('');
}

console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
console.log(toCamelCase("A-B-C"), "ABC");
// console.log(toCamelCase(""), "ABC");