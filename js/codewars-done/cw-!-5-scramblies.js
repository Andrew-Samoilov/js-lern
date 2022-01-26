function scramble(str1, str2) {
    if (str2.length > str1.length) return false;
    console.log(`str2 length`, str2.length);
    console.log(`str1 length`, str1.length);
      // total length=52, leter - 26 console.log(`letterArr ${letterArr.length}`)
    const alphArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const indexArr = [];
    let tmp = 0;
    let tmp2 = 0;
    for (let i = 0; i < str2.length; i++) {
        // console.log(`str2[${i}] ${str2[i]}`);
        // знайшли в алфавіті
        tmp = alphArr.indexOf(str2[i]);
        // console.log(`str2[${i}]${str2[i]} alphArr[tmp] ${alphArr[tmp]} indexArr[tmp] ${indexArr[tmp]}`);
    // шукаємо в стр1
        
        tmp2 = str1.indexOf(alphArr[tmp], indexArr[tmp]);
        if (tmp2 === -1) return false;
        indexArr[tmp] = tmp2 + 1;
        // console.log(`tmp2 ${tmp2}, alphArr[tmp] ${alphArr[tmp]} indexArr[tmp] ${indexArr[tmp]}`);
  
        // console.log(`${str2[i]} indexArr[${tmp}] ${indexArr[tmp]}`);
 
    }
    // console.log(`str1.indexOf('a', 2) ${str1.indexOf('a', 3)}`);
    return true;
}

let inpStr1 = 'qwaasdasdbce';
let inpStr2='abcaa';


console.log(scramble(inpStr1, inpStr2),'?');
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);

function scrambleSimple(str1, str2) {
    let str1Arr = str1.split('');
    console.log(`str2`, str2);
    console.log(`str1`, str1);
    if (str2.length > str1.length) {
        console.log(`str2.length > str1.length `);
        return false;
    }

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

   // "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    // const alphArr = ['a', 0, 'b', 0, 'c', 0, 'd', 0, 'e', 0, 'f', 0, 'g', 0,
    //     'h', 0, 'i', 0, 'j', 0, 'k', 0, 'l', 0, 'm', 0, 'n', 0, 'o', 0, 'p', 0, 'q', 0, 'r', 0,
    //     's', 0, 't', 0, 'u', 0, 'v', 0, 'w', 0, 'x', 0, 'y', 0, 'z', 0];
