console.log(' -  * CodeWars *  * - ');

function findOutlier(integers) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < integers.length; i++) {
        // console.log(`integers[i]`, integers[i], 'integers[i]%2', integers[i] % 2);
        if ((Math.abs(integers[i]) % 2) === 0) {
            even++;   // console.log(`even `, even);
        } else if ((Math.abs(integers[i]) % 2) === 1) {
            odd++;    // console.log(`odd `, odd);
        }
        // if (even >= 2 || odd >= 2) break;
    }

    console.log(`even ${even} odd ${odd}`);

    if (even === 0) return;
    if (odd === 0) return;

    // even > odd ? val % 2 === 0 : val % 2 === 1;
    return integers.find(val => even > odd ? val % 2 === 1 : val % 2 === 0);
}
/* як працює така діч __ i & 1__ взагалі не розумію 
function findOutlier(integers) {
    function par(i) { return i & 1; }

    let parity = par(integers[0]);
    if (parity != par(integers[1])) {
        if (parity == par(integers[2]))
            // [0] and [2] are the true parity so [1] is the outlier
            return integers[1];

        // [1] and [2] are the true parity so [0] is the outlier
        return integers[0];
    }
    return integers.find((i) => par(i) != parity);
}*/

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
console.log(findOutlier([-187333086, -64663866, 66232650, -964172, 96257692, 5087056, -194266046, -105754744, -12953864, -62289376, -119217047, 192708308, 85469202, -22680582, -186338632, -103340044, 81791758, -161937304, 50965918, -116850800, 62335256, 141258362, -67339010, -44947534, -47539024, 91526188, -178560982, 191439736, -96060622, 129510768, -172273564, -47319466, -149374810, -52443618, -73173156, 140582124, -152606818, -167013362, -4730152]), `u`);
