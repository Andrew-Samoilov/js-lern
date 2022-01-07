console.log(" -  * CodeWars * - ");
console.log('* Special Numbers Series *');

console.log(' Disarium Number ', 3);

function disariumNumber(n) {
    console.log(n);
    let sumNum = 0,
        sumAll = 0;
    let templArr = String(n).split('');
    console.log(templArr);
    for (let i = 1; i <= templArr.length; i++) {
        console.log(templArr[i - 1], i);
        for (let j = 0; j < i; j++) {
            sumNum = templArr[i - 1] * templArr[i - 1];
        }
        console.log('emplArr[i - 1]', templArr[i - 1], 'sumNum', sumNum);
    }
}


console.log(disariumNumber(89), "Disarium !!");
console.log(disariumNumber(564), "Not !!");
console.log(disariumNumber(1024), "Not !!");
console.log(disariumNumber(135), "Disarium !!");
console.log(disariumNumber(136586), "Not !!");



{
    console.log(' Balanced Number', 1);

    function balancedNum(number) {
        let strNum = number.toString()
        console.log(number, strNum.length);
        let left = '',
            right = '';
        if (strNum.length <= 2) return "Balanced";

        if (number.toString().length % 2 === 0) {
            console.log(`Even - пАрне`);
            left = strNum.slice(0, (strNum.length / 2) - 1);
            console.log(`Left `, left);
            right = strNum.slice((strNum.length / 2) + 1);
            console.log(`Right`, right);
        } else {
            left = strNum.slice(0, Math.floor(strNum.length / 2));
            right = strNum.slice(Math.floor(strNum.length / 2) + 1);
        }

        left = left.split('')
            .map(number => Number(number))
            .reduce((previousValue, number) => previousValue + number);
        right = right.split('')
            .map(number => Number(number))
            .reduce((previousValue, number) => previousValue + number);

        return (left === right) ? "Balanced" : "Not Balanced";
    }

    console.log(balancedNum(7), "Balanced");
    // console.log(balancedNum(959), "Balanced");
    // console.log(balancedNum(13), "Balanced");
    // console.log(balancedNum(432), "Not Balanced");
    // console.log(balancedNum(424), "Balanced");
    // console.log(balancedNum(1024), "Not Balanced");
    // console.log(balancedNum(66545), "Not Balanced");
    // console.log(balancedNum(295591), "Not Balanced");
    // console.log(balancedNum(1230987), "Not Balanced");
    // console.log(balancedNum(56239814), "Balanced");

    function balancedNumWithComents(number) {
        let strNum = number.toString()
        console.log(number, strNum.length);
        let left = '',
            right = '';
        if (strNum.length <= 2) return "Balanced";

        if (number.toString().length % 2 === 0) {
            console.log(`Even - пАрне`);
            left = strNum.slice(0, (strNum.length / 2) - 1);
            console.log(`Left `, left);
            right = strNum.slice((strNum.length / 2) + 1);
            console.log(`Right`, right);
        } else {
            console.log(`Odd - нЕпАрне`);
            console.log(`Math.floor(strNum.length / 2`, Math.floor(strNum.length / 2));
            left = strNum.slice(0, Math.floor(strNum.length / 2));
            console.log(`Left `, left);
            right = strNum.slice(Math.floor(strNum.length / 2) + 1);
            console.log(`Right`, right);
        }

        left = left.split('')
            .map(number => Number(number))
            .reduce((previousValue, number) => previousValue + number);
        // console.log(`Left `, left);
        // left = left.map(number => Number(number)).reduce((previousValue, number) => previousValue + number);
        // console.log(`Left map`, left);
        // left = left.reduce((previousValue, number) => previousValue + number);
        console.log(`Left split map reduce`, left);

        right = right.split('')
            .map(number => Number(number))
            .reduce((previousValue, number) => previousValue + number);

        console.log(`Right`, right);
        return (left === right) ? "Balanced" : "Not Balanced";
    }
}