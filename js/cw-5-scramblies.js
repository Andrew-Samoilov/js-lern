function scramble(str1, str2) {
    let str1Arr = str1.split('');
    console.log(`str2`, str2);
    console.log(`str1`, str1);
if (str2.length()>str1.length()) return false;

    for (let i = 0; i < str2.length; i++) {
        // console.log(str2[i]);
        // console.log(str1Arr.indexOf(str2[i]));
        if (str1Arr.indexOf(str2[i]) === -1) {
            return false;
        } else {
            str1Arr.splice(str1Arr.indexOf(str2[i]), 1);
        }
    }

    return true;
}

let inpStr1='sfgxsfibqzjicqsnxrdfyrrkygahwl';
let inpStr2='sfgxsfibqzjicqsnxrddfgdjbwthxcmkosdrhjitfyrrkygahwl';

console.log(scramble(inpStr1, inpStr2),'?');
// console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
// console.log(scramble('katas', 'steak'), false);
// console.log(scramble('scriptjava', 'javascript'), true);
// console.log(scramble('scriptingjava', 'javascript'), true);
// console.log(scramble('scriptsjava', 'javascripts'), true);
// console.log(scramble('jscripts', 'javascript'), false);
// console.log(scramble('aabbcamaomsccdd', 'commas'), true);