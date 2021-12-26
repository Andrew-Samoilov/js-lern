console.log(" -  * Codewars. Jaden Casing Strings * - ");
console.log();
console.log();

String.prototype.toJadenCaseWithComents = function () {
    // console.log(str);
    const arr = this.split(' ');
    // console.log(arr);
    // console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        // console.log(i, arr[i]);
        let fooStr = arr[i].split('');
        fooStr[0] = fooStr[0].toUpperCase();
        // console.log(fooStr[0]);
        arr[i] = fooStr.join('');
        // console.log(i, arr[i]);
    }
    // console.log(arr.join(' '));
    return arr.join(' ');
};

String.prototype.toJadenCase = function () {
    const arr = this.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let fooStr = arr[i].split('');
        fooStr[0] = fooStr[0].toUpperCase();
        arr[i] = fooStr.join('');
    }
    return arr.join(' ');
};


let stri = "How can mirrors be real if our eyes aren't real";

console.log(stri.toJadenCase());