console.log(" -  * CodeWars * Get the Middle Character * - ");
console.log();

function getMiddle(s) {
    return (s.length % 2 === 0) ?
        s[s.length / 2 - 1] + s[s.length / 2] :
        s[Math.floor(s.length / 2)];
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");




function getMiddleWithComents(s) {

    // console.log(s);
    // console.log(s.length % 2 === 0);
    if (s.length % 2 === 0) {
        console.log(s[s.length / 2 - 1] + s[s.length / 2]);
    } else {
        // console.log(Math.floor(s.length / 2));
        console.log(s[Math.floor(s.length / 2)]);
    }

}
