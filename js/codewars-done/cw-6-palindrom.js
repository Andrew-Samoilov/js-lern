console.log(" - * 6 kuy * Single character palindromes * -");

function solve(s) {
    console.log(`s`, s);
    let res = "not possible";

    function checkSimplePalindrom(s) {
        const LEFT_HALF_STR = s.slice(0, s.length / 2);
        const RIGHT_HALF_STR = s.slice(-1 * s.length / 2);
        const REVERSE_RIGHT_HALF_STR = RIGHT_HALF_STR.split('').reverse().join('');
        if (LEFT_HALF_STR === REVERSE_RIGHT_HALF_STR)
            return 'OK';
    }

    if (checkSimplePalindrom(s) === 'OK')
        return 'OK';

    for (let index = 0; index < s.length; index++) {
        if (checkSimplePalindrom(s.slice(0, index) + s.slice(index + 1)) === 'OK')
            return 'remove one';
    }

    return res;
};

// console.log(solve("12345"), "not possible");
console.log(solve("aba"), "Ok");
// console.log(solve("abbaab"), "not possible");

console.log(solve("abbaa"), "remove one");
// console.log(solve("madmam"), "remove one");
// console.log(solve("hannah"), "OK");
