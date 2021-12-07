console.log(" - * Code wars * - ");
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
console.log(' ');
console.log();

// return masked string
function maskify(cc) {
    let result = '';

    cc = (cc.toString() || "");
    console.log('-', cc);
    // console.log('- length', cc.length);

    if (cc.length > 4) {
        // let foo = cc.slice(cc.length - 4);
        // console.log('>4', foo);


        for (let i = 0; i < cc.length - 4; i++) {
            result += '#';
            // console.log('-- element ', cc[i], ' result', result);
        }
        // result += foo;
        result += cc.slice(cc.length - 4);
        return result;
    }

    return cc;

}

// console.log(maskify(4556364607935616));
console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify(1));
console.log(maskify("qq"));

