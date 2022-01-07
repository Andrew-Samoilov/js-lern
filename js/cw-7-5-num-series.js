console.log(" -  * CodeWars * - ");
console.log(' * Special Numbers Series *');

console.log(' Sum of Two Integers');

function add(x, y) {
    console.log(`x y`, x, y);
    let templArr = [];

    if (x < y) {
        let tmp = x;
        x = y;
        y = tmp;
        // console.log(`x<y after change`, x, y);

        let modY = 0;
        if (y < 0) {
            // console.log(`y < 0`, y);
            modY = y * -1;
            // console.log(`minY`, minY);
            if (modY > x) {
                // console.log(`Math.abs(y) > x ${Math.abs(y)} > ${x}`);
            }
            for (let i = 0; i < modY; i++) {
                templArr.push('+');
            }
            for (let j = 0; j < x; j++) {
                templArr.pop();


            }
            return (templArr.length) * -1;
        }
    }

    let minusXminusY = 1;
    if (x < 0 && y < 0) {
        // console.log(` - -`);
        x *= -1;
        y *= -1;
        // console.log(`-x -y after *-1`, x, y);
        minusXminusY = -1;
    }


    for (let i = 0; i < x; i++) {
        templArr.push('+');
    }
    for (let i = 0; i < y; i++) {
        templArr.push('+');
    }

    return (templArr.length) * minusXminusY; // Do your magic!
}

// console.log(add(-708534769, 593816530));
console.log(add(1, 2), 3);
console.log(add(5, 19), 24);
console.log(add(23, 17), 40);
console.log(add(-14, -16), -30);
console.log(add(-50, -176), -226);
console.log(add(-10, -29), -39);
console.log(add(-13, 13), 0);
console.log(add(-27, 18), -9);
console.log(add(-90, 30), -60);

// {
//     console.log(' Primorial Of a Number');

//     function numPrimorial(num) {
//         console.log(num);
//         let primeNumArr = [];
//         const isPrime = numb => {
//             for (let i = 2, s = Math.sqrt(numb); i <= s; i++)
//                 if (numb % i === 0) return false;
//             return numb > 1;
//         }
//         let i = 1;
//         while (primeNumArr.length < num) {
//             if (isPrime(i)) {
//                 primeNumArr.push(i);
//             }
//             i++;
//         }
//         return primeNumArr.reduce((previousValue, number) => previousValue * number);
//     }

//     console.log(numPrimorial(6));
//     console.log(numPrimorial(3), 30);
//     console.log(numPrimorial(4), 210);
//     console.log(numPrimorial(5), 2310);
//     console.log(numPrimorial(8), 9699690);
//     console.log(numPrimorial(9), 223092870);

//     function numPrimorialWithComents(num) {
//         console.log(num);

//         // console.log(`prime ${num} Math.sqrt(num) ${Math.sqrt(num)}`);
//         let primeNumArr = [];

//         const isPrime = numb => {
//             for (let i = 2, s = Math.sqrt(numb); i <= s; i++)
//                 if (numb % i === 0) return false;
//             return numb > 1;
//         }

//         // console.log(isPrime(4));
//         let i = 1;
//         console.log(`primeNumArr.length `, primeNumArr.length, `num`, num);

//         while (primeNumArr.length < num) {
//             // console.log(`-primeNumArr.length `, primeNumArr.length);
//             if (isPrime(i)) {
//                 primeNumArr.push(i);
//                 // console.log(`--`, i);
//             }
//             i++;
//         }

//         // console.log(primeNumArr.reduce((previousValue, number) => previousValue * number));
//         return primeNumArr.reduce((previousValue, number) => previousValue * number);
//     }
// }
// console.log(' Tidy Number', 9);
// function tidyNumber(n) {
//     console.log(String(n).split(''));
//     let templArr = String(n).split('');

//     for (let i = 0; i < templArr.length; i++) {
//         if (Number(templArr[i]) < Number(templArr[i - 1])) return false;
//     }
//     return true;
// }

// console.log(tidyNumber(12), true);
// console.log(tidyNumber(102), false);
// console.log(tidyNumber(9672), false);
// console.log(tidyNumber(2789), true);
// console.log(tidyNumber(2335), true);

// function tidyNumberWitnComents(n) {
//     console.log(String(n).split(''));
//     let templArr = String(n).split('');

//     for (let i = 0; i < templArr.length; i++) {
//         if (Number(templArr[i]) < Number(templArr[i - 1])) {
//             console.log(i, Number(templArr[i]));
//             return false;
//         }

//     }
//     return true;

// }

// console.log(' Extra Perfect Numbers', 7);
// function extraPerfect(n) {
//     //your code here
//     console.log(n);
//     let res = [];

//     for (let i = 1; i < n + 1; i++) {
//         let binaryN = i.toString(2);
//         // console.log(i, binaryN);
//         if (binaryN[0] === binaryN[binaryN.length - 1]) res.push(i);
//     }

//     return res;
// }

// console.log(extraPerfect(3), [1, 3]);
// console.log(extraPerfect(5), [1, 3, 5]);
// console.log(extraPerfect(7), [1, 3, 5, 7]);
// console.log(extraPerfect(28), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]);
// console.log(extraPerfect(39), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]);

// {
//     console.log(' Special Number ', 5);

//     function specialNumber(n) {
//         console.log(String(n).split(''));
//         let templArr = String(n).split('');
//         for (let i = 0; i < templArr.length; i++) {
//             if (templArr[i] > 5) return "NOT!!";
//         }
//         return "Special!!";
//     }

//     console.log(specialNumber(2), "Special!!");
//     console.log(specialNumber(3), "Special!!");
//     console.log(specialNumber(6), "NOT!!");
//     console.log(specialNumber(9), "NOT!!");
//     console.log(specialNumber(11), "Special!!");
//     console.log(specialNumber(55), "Special!!");
//     console.log(specialNumber(26), "NOT!!");
//     console.log(specialNumber(92), "NOT!!");
//     console.log(specialNumber(25432), "Special!!");
//     console.log(specialNumber(2783), "NOT!!");
// }
// {
// console.log(' Jumping Number ', 4);
// function jumpingNumber(n) {
//     console.log(String(n).split(''));
//     let templArr = String(n).split('');

//     for (let i = 1; i < templArr.length; i++) {
//         // console.log(Number(templArr[i]));
//         templArr[i] = Number(templArr[i]);
//         if (templArr[i] - templArr[i - 1] === 1 || templArr[i] - templArr[i - 1] === -1) {
//             // console.log(`templArr[i] - templArr[i-1] ${templArr[i] - templArr[i - 1]}`);
//         } else {
//             return "Not!!";
//         }
//     }

//     return "Jumping!!";
// }

// console.log(jumpingNumber(1), "Jumping!!");
// console.log(jumpingNumber(7), "Jumping!!");
// console.log(jumpingNumber(9), "Jumping!!");
// console.log(jumpingNumber(23), "Jumping!!");
// console.log(jumpingNumber(32), "Jumping!!");
// console.log(jumpingNumber(79), "Not!!");
// console.log(jumpingNumber(98), "Jumping!!");
// console.log(jumpingNumber(8987), "Jumping!!");
// console.log(jumpingNumber(4343456), "Jumping!!");
// console.log(jumpingNumber(98789876), "Jumping!!");
// }

// {
// console.log(' Strong Number ', 2);
//     function strong(n) {
//         function factorial(num) {
//             let result = 1;
//             while (num) {
//                 result *= num--;
//             }
//             return result;
//         }
//         let tempN = String(n);
//         let sumFactorials = 0;
//         for (let i = 0; i < tempN.length; i++) {

//             sumFactorials += factorial(Number(tempN[i]));
//         }
//         return (sumFactorials === n) ? "STRONG!!!!" : "Not Strong !!";
//     }

//     console.log(strong(1), "STRONG!!!!");
//     console.log(strong(2), "STRONG!!!!");
//     console.log(strong(145), "STRONG!!!!");
//     console.log(strong(7), "Not Strong !!");
//     console.log(strong(93), "Not Strong !!");
//     console.log(strong(185), "Not Strong !!");

//     function strongWithComents(n) {
//         function factorial(num) {
//             let result = 1;
//             while (num) {
//                 result *= num--;
//             }
//             return result;
//         }

//         // console.log(n);
//         let tempN = String(n);
//         console.log(tempN);
//         let sumFactorials = 0;
//         for (let i = 0; i < tempN.length; i++) {
//             console.log(Number(tempN[i]));
//             console.log(`factorial(Number(tempN[i])) ${factorial(Number(tempN[i]))}`);
//             sumFactorials += factorial(Number(tempN[i]));
//             console.log(`sumFactorials ${sumFactorials}`);
//         }

//         return (sumFactorials === n) ? "STRONG!!!!" : "Not Strong !!";
//     }

// }
// {
//     console.log(' Disarium Number ', 3);

//     function disariumNumber(n) {

//         // написав функцію Math.pow() про яку до цього не знав

//         let templArr = String(n).split('');
//         // console.log(n);
//         let sumNum = Number(templArr[0]);
//         let sumAll = 0;
//         console.log(templArr);

//         for (let i = 1; i <= templArr.length; i++) {
//             // console.log(`1 - ${templArr[i - 1]}, ${i}, sumNum ${sumNum} sumAll ${sumAll}`);
//             sumNum = Number(templArr[i - 1]);
//             // console.log(`11- ${templArr[i - 1]}, ${i}, sumNum ${sumNum} sumAll ${sumAll}`);
//             for (let j = 1; j < i; j++) {
//                 sumNum *= Number(templArr[i - 1]);
//                 // console.log(`2- templArr[i - 1], ${templArr[i - 1]} sumNum ${sumNum} sumAll ${sumAll}`);
//             }
//             sumAll += sumNum;
//             // console.log(`3- templArr[i - 1] ${templArr[i - 1]} sumNum ${sumNum} sumAll ${sumAll}`);
//         }

//         console.log(`4- sumNum ${sumNum} sumAll ${sumAll}`);
//         return (sumAll === n) ? "Disarium !!" : "Not !!";
//     }

//     console.log(disariumNumber(89), "Disarium !!");
//     console.log(disariumNumber(564), "Not !!");
//     console.log(disariumNumber(1024), "Not !!");
//     console.log(disariumNumber(135), "Disarium !!");
//     console.log(disariumNumber(136586), "Not !!");

// }

// {
//     console.log(' Balanced Number', 1);

//     function balancedNum(number) {
//         let strNum = number.toString()
//         console.log(number, strNum.length);
//         let left = '',
//             right = '';
//         if (strNum.length <= 2) return "Balanced";

//         if (number.toString().length % 2 === 0) {
//             console.log(`Even - пАрне`);
//             left = strNum.slice(0, (strNum.length / 2) - 1);
//             console.log(`Left`, left);
//             right = strNum.slice((strNum.length / 2) + 1);
//             console.log(`Right`, right);
//         } else {
//             left = strNum.slice(0, Math.floor(strNum.length / 2));
//             right = strNum.slice(Math.floor(strNum.length / 2) + 1);
//         }

//         left = left.split('')
//             .map(number => Number(number))
//             .reduce((previousValue, number) => previousValue + number);
//         right = right.split('')
//             .map(number => Number(number))
//             .reduce((previousValue, number) => previousValue + number);

//         return (left === right) ? "Balanced" : "Not Balanced";
//     }

//     console.log(balancedNum(7), "Balanced");
//     console.log(balancedNum(959), "Balanced");
//     console.log(balancedNum(13), "Balanced");
//     console.log(balancedNum(432), "Not Balanced");
//     console.log(balancedNum(424), "Balanced");
//     console.log(balancedNum(1024), "Not Balanced");
//     console.log(balancedNum(66545), "Not Balanced");
//     console.log(balancedNum(295591), "Not Balanced");
//     console.log(balancedNum(1230987), "Not Balanced");
//     console.log(balancedNum(56239814), "Balanced");

//     function balancedNumWithComents(number) {
//         let strNum = number.toString()
//         console.log(number, strNum.length);
//         let left = '',
//             right = '';
//         if (strNum.length <= 2) return "Balanced";

//         if (number.toString().length % 2 === 0) {
//             console.log(`Even - пАрне`);
//             left = strNum.slice(0, (strNum.length / 2) - 1);
//             console.log(`Left`, left);
//             right = strNum.slice((strNum.length / 2) + 1);
//             console.log(`Right`, right);
//         } else {
//             console.log(`Odd - нЕпАрне`);
//             console.log(`Math.floor(strNum.length / 2`, Math.floor(strNum.length / 2));
//             left = strNum.slice(0, Math.floor(strNum.length / 2));
//             console.log(`Left`, left);
//             right = strNum.slice(Math.floor(strNum.length / 2) + 1);
//             console.log(`Right`, right);
//         }

//         left = left.split('')
//             .map(number => Number(number))
//             .reduce((previousValue, number) => previousValue + number);
//         // console.log(`Left`, left);
//         // left = left.map(number => Number(number)).reduce((previousValue, number) => previousValue + number);
//         // console.log(`Left map`, left);
//         // left = left.reduce((previousValue, number) => previousValue + number);
//         console.log(`Left split map reduce`, left);

//         right = right.split('')
//             .map(number => Number(number))
//             .reduce((previousValue, number) => previousValue + number);

//         console.log(`Right`, right);
//         return (left === right) ? "Balanced" : "Not Balanced";
//     }
// }
