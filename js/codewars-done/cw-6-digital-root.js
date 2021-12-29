console.log(" -  * CodeWars * Sum of Digits / Digital Root *- ");
console.log();

function digital_root(n) {
    let sum = n;
    console.log(n);
    n = String(n);
    while (n.length >= 2) {
        sum = 0;
        for (let i = 0; i < n.length; i++) { sum += Number(n[i]); }
        n = String(sum);
    }
    return sum;
}
function digital_rootBestPractice(n) {
    console.log(n);
    console.log((n - 1));
    console.log((n - 1) % 9);
    return (n - 1) % 9 + 1;
}
console.log(digital_root(100),);
// console.log(digital_root(5), 5);
// console.log(digital_root(15), 6);
// console.log(digital_root(456), 6);

function digital_rootWithCommets(n) {
    let sum = n;
    console.log(n);
    n = String(n);
    // console.log(n);
    while (n.length >= 2) {
        sum = 0;

        for (let i = 0; i < n.length; i++) {

            // console.log(`n[${i}]=${n[i]}`);
            sum += Number(n[i]);

        }
        n = sum;
        n = String(n);
        // console.log(n);
    }

    return sum;
}