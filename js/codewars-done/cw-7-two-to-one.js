console.log(" -  * CodeWars * Two to One * - ");
console.log();

function longest(s1, s2) {
    // console.log(`s1 ${s1} s2 ${s2}`);
    let tmp = (s1 + s2).split(``);
    let res = [];
    // console.log(`res ${tmp}`);
    // let foo = res.indexOf('e');
    // console.log(`-- ${foo}`);

    for (let i = 0; i < tmp.length; i++) {
        if (res.indexOf(tmp[i]) === -1) {
            // console.log(`tmp[${i}] = ${tmp[i]}`);
            res.push(tmp[i]);
            // console.log(`res.indexOf(tmp[${i}]= ${res.indexOf(tmp[i])}`);
        }
    }
    // console.log(res.sort().join(''));
    return res.sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");