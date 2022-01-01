console.log(" -  * CodeWars *  * - ");
console.log();

function rgb(r, g, b) {
    const res = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > 255) arguments[i] = 255;
        if (arguments[i] < 0) arguments[i] = 0;

        let foo = arguments[i].toString(16) + '/';

        if (foo.length === 2) {

            console.log('foo', foo);
            res.push('0');
            res.push(foo[0]);
            // arguments[i] = '0' + arguments[i][0].toString(16);
        } else { res.push(arguments[i].toString(16)); }
    }
    return res.join('').toUpperCase();
}
console.log(rgb(232, 15, 132), 'E80F84');
console.log(rgb(0, 0, -20), '000000');
// console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255, 47), 'ADFF2F');

function rgbWithComents(r, g, b) {
    // complete this function
    // console.log(r.toString(16) + g.toString(16) + b.toString(16));
    const res = [];
    console.log(...arguments);
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > 255) arguments[i] = 255;
        if (arguments[i] < 0) arguments[i] = 0;

        // arguments[i] = arguments[i] + '/';
        // console.log('--', arguments[i]);
        if (arguments[i] < 9) {
            res.push('0');
            res.push(arguments[i]);
            console.log('+', arguments[i].toString());
            arguments[i] = '0' + arguments[i][0];
            console.log('---', arguments[i]);
        } else { res.push(arguments[i].toString(16)); }
        // return (r.toString(16) + g.toString(16) + b.toString(16)).toUpperCase();
    }
    return res.join('').toUpperCase();
}