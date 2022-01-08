console.log(" -  * CodeWars * Counting Duplicates * - ");
console.log();

function duplicateCount(text) {
    console.log(text.split(''));
    let duplicateLater = [];

    for (let i = 0; i < text.length; i++) {
        // console.log(text[i].toLowerCase());
        let maxJ = 1;
        for (let j = i + 1; j < text.length; j++) {

            if (text[i].toLowerCase() === text[j].toLowerCase()) {
                // console.log('--', text[i], text[j]);
                maxJ++;
            }
        }
        if (maxJ > 1 && duplicateLater.indexOf(text[i].toLowerCase()) === -1) duplicateLater.push(text[i].toLowerCase());

    }
    return duplicateLater.length;

}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("bBaacde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");