console.log(" -  * CodeWars * Mexican Wave * - ");
console.log();

function wave(str) {
    let res = [];

    function strInd2Uper(inputStr, index) {
        let resu = inputStr.split('');
        resu[index] = resu[index].toUpperCase();
        return resu.join('');

    };

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (str[i] != ' ') res.push(strInd2Uper(str, i))

    }
    return res;
}

console.log(wave("he lo"));

let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
// console.log(wave("hello"), result, "Should return: '" + result + "'");

result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("codewars"), result, "Should return: '" + result + "'");

result = [];
console.log(wave(""), result, "Should return: '" + result + "'");

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"), result, "Should return: '" + result + "'");

result = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "), result, "Should return: '" + result + "'");