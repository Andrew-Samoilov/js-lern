console.log(" -  * CodeWars * Isograms * - ");
console.log();

function isIsogram(str) {
    str = str.toLowerCase();
    let letersInStr = [];
    for (let i = 0; i < str.length; i++) {
        if (letersInStr.indexOf(str[i]) === -1) {
            letersInStr.push(str[i]);
        } else return false;
    }
    return true;
}


console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case"); (isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");

function isIsogramWithComents(str) {
    str = str.toLowerCase();
    let letersInStr = [];
    // letersInStr = str.split('');
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        // console.log(letersInStr.indexOf(str[i]));
        if (letersInStr.indexOf(str[i]) === -1) {
            letersInStr.push(str[i]);
        } else {
            return false;
        }

    }

    // console.log(letersInStr);

    return true;
}