console.log(" -  * CodeWars * -");

console.log(" - Write Number in Expanded Form. Part - 2");
function expandedForm(num) {
    let res2 = [];
    let res = [];

    function expandedForm1(num) {
        num = Math.floor(num);
        let numArr = String(num).split('');
        let res = [];
        for (let i = 0; i < numArr.length; i++) {
            let zeroCount = numArr.length - 1 - i;
            if (Number(numArr[i]) > 0) {
                res.push(numArr[i]);
                for (let j = 0; j < zeroCount; j++)  res.push('0');
                if (i < numArr.length - 1) res.push(' + ');
            }
        }
        res = res.join('');
        return (res.slice(-3) === ' + ') ? res.slice(0, -3) : res;
    }

    console.log(num);
    let numArr = String(num).split('');

    let numArr2 = numArr.slice(numArr.indexOf('.') + 1);
    console.log(`numArr2 ${numArr2}`);
    numArr = numArr.slice(0, numArr.indexOf('.'));
    // console.log(`numArr ${numArr}`);
    for (let i = 0; i < numArr2.length; i++) {
        console.log(`numArr2[${i}] ${numArr2[i]}, ${i + 1} `);
        let zeroCount = i + 1;
        if (Number(numArr2[i]) > 0) {
            res2.push(numArr2[i] + '/1');
            for (let j = 0; j < zeroCount; j++)  res2.push('0');
            res2.push(' + ');
        }


    }
    console.log(res2.join(''));

    res = expandedForm1(num);
    res = (num < 1) ? res = res2.join('') : res = res + ' + ' + res2.join('');

    return (res.slice(-3) === ' + ') ? res.slice(0, -3) : res;
}
// console.log(expandedForm(807.304), '|/800 + 7 + 3/10 + 4/1000');
console.log(expandedForm(0.501), '&*');
console.log(expandedForm(4.28), '4 + 2/10 + 8/100');
// console.log(expandedForm(7.304), '|| 7 + 3/10 + 4/1000');

{
    console.log(" - Write Number in Expanded Form. Part - 1");
    function expandedForm1(num) {
        let numArr = String(num).split('');
        // console.log(numArr);
        let res = [];

        for (let i = 0; i < numArr.length; i++) {
            let zeroCount = numArr.length - 1 - i;
            // console.log(numArr[i], i, zeroCount);
            if (Number(numArr[i]) > 0) {
                res.push(numArr[i]);
                for (let j = 0; j < zeroCount; j++)  res.push('0');
                if (i < numArr.length - 1) res.push(' + ');
            }

        }
        res = res.join('');
        // console.log(res.slice(-3), res.slice(0, -3));
        return (res.slice(-3) === ' + ') ? res.slice(0, -3) : res;
    }

    // console.log(expandedForm(9000000), '?');
    // console.log(expandedForm(12), '10 + 2');
    // console.log(expandedForm(42), '40 + 2');
    console.log(expandedForm1(70304), '70000 + 300 + 4');
}