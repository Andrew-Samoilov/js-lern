console.log(" -  * CodeWars * Where my anagrams at? * - ");
console.log();

function anagrams(word, words) {
    console.log(word);
    let res = [];
    word = word.split('').sort().join('');
    // console.log(word);
    // console.log(words);
    // console.log(words.indexOf('aabb'));

    for (let i = 0; i < words.length; i++) {
        const element = words[i].split('').sort().join('');
        if (word === element) {
            res.push(words[i]);
        }

    }
    return res;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);