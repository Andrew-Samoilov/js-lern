console.log(" -  * CodeWars *  * - ");
console.log();

function findShort(s) {
    console.log(s);
    // let res = s.split(' ').map(item => item.length).sort((a, b) => a - b)[0];
    return s.split(' ').map(item => item.length).sort((a, b) => a - b)[0];


    // console.log(res); // 32
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);