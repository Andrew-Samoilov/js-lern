console.log(" -  * CodeWars * Beginner Series * - ");
console.log();


console.log('#5 Triangular Numbers');


function isTriangular(t) {
    // це ката НЕ 7 рівня

    console.log(` t =`, t);
    if (t === 1) return true;

    for (let i = 0; i < t; i++) {
        console.log(i, i * (i + 1) / 2);
        if (t === (i * (i + 1) / 2)) return true;
        if (i > t) return false;
    }
    return false;
}

console.log(isTriangular(852165));

console.log(isTriangular(3), true);
console.log(isTriangular(6), true);
console.log(isTriangular(10), true);
console.log(isTriangular(1), true);
console.log(isTriangular(15), true);
console.log(isTriangular(21), true);
console.log(isTriangular(28), true);
console.log(isTriangular(2), false);
console.log(isTriangular(7), false);
console.log(isTriangular(14), false);
console.log(isTriangular(27), false);

console.log(isTriangular(10), true);



{
    console.log('#4 Cockroach');

    function cockroachSpeed(s) {
        return Math.floor(s / 60 / 60 * 100000);
    }

    console.log(cockroachSpeed(1.08), 30);
    console.log(cockroachSpeed(1.09), 30);
    console.log(cockroachSpeed(0), 0);
    function cockroachSpeedWithConsole(s) {
        console.log(s);
        console.log(Math.floor(s / 60 / 60 * 1000 * 100));
        return Math.floor(s / 60 / 60 * 1000 * 100);
    }
}

{
    console.log('#3 Sum of Numbers');
    function getSum(a, b) {
        let sum = 0;
        if (a === b) return a;
        if (a > b) {
            console.log('a b', a, b);
            const foo = a;
            a = b;
            b = foo;
            console.log('--', a, b);
        }

        for (let i = a; i <= b; i++) {
            console.log(i);
            sum += i;
        }
        return sum;
    }

    console.log(getSum(0, -1), -1);
    console.log(getSum(0, 1), 1);
}


{
    console.log("#2 Clock");
    function past(h, m, s) {
        return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
    }

    console.log(past(0, 1, 1), 61000);
    // console.log(past(1, 1, 1), 3661000);
    // console.log(past(0, 0, 0), 0);
    // console.log(past(1, 0, 1), 3601000);
    // console.log(past(1, 0, 0), 3600000);

    function pastWithLog(h, m, s) {
        //#Happy Coding! ^_^
        console.log(h, m, s);
        console.log(h * 60 * 60 * 1000, m * 60 * 1000, s * 1000);
        console.log(h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000);
    }
}

{
    console.log("#1 School Paperwork");
    function paperwork(n, m) {
        return (n < 0 || m < 0) ? 0 : n * m;
    }

    console.log(paperwork(5, 5), 25, `Failed at paperwork(5, 5)`);
    // console.log(paperwork(5, -5), 0, 'Failed at paperwork(5, -5)');
    // console.log(paperwork(-5, -5), 0, 'Failed at paperwork(-5, -5)');
    // console.log(paperwork(-5, 5), 0, 'Failed at paperwork(-5, 5)');
    // console.log(paperwork(5, 0), 0, 'Failed at paperwork(5, 0)');

    function paperworkSimple(n, m) {
        if (n < 0 || m < 0) return 0;
        return n * m;
    }
}