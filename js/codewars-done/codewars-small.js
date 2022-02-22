console.log(" - * Code wars - small exersice * - ");
console.log();
console.log();

{
    console.log('Longest vowel chain');
    // aeiou - vovel in this kata 

    function solve(s) {
        let vovelCount = 0;
        let max = 0;
        for (let i = 0; i < s.length; i++) {
            let zz = s[i].toLowerCase();

            if (zz === 'a' || zz === 'e' || zz === 'i' || zz === 'o' || zz === 'u') {
                vovelCount++;
            } else {
                if (max < vovelCount) max = vovelCount;
                vovelCount = 0;
            }
        }

        if (max < vovelCount) max = vovelCount;
        return max;
    }

    console.log(solve("codewarriors"), 2);
    console.log(solve("suoidea"), 3);
    console.log(solve("ultrarevolutionariees"), 3);
    console.log(solve("strengthlessnesses"), 1);
    console.log(solve("cuboideonavicuare"), 2);
    console.log(solve("chrononhotonthuooaos"), 5);
    console.log(solve("iiihoovaeaaaoougjyaw"), 8);


}
// Bool 2 string
function boolToStr(b = false) {
    return b ? "Yes" : "No";
}

console.log(boolToStr(false));
console.log(boolToStr(true));


// Summ all posuteve numbers
function positiveSum(arr) {
    let result = 0;

    for (const variable of arr) {
        if (variable > 0) {
            result += variable;
        }
    }
    // console.log(result);
    return result;
}

console.log(positiveSum([1, -4, 7, 12]));


const arr = ["BEST", "the", "foo", "is", "JS"];
console.log(...arr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "foo") {
//         arr.splice(i, 1);
//         // console.log('--', arr[i]);
//     }
// }
// let strResult = arr.join(" ").replace(' foo', '');
console.log(arr.join(" ").replace(' foo', ''));
console.log('5' + - + - - + - - + + - + - + - + - - - '-2');


