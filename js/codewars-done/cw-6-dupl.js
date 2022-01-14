console.log(" -  * CodeWars * Duplicate Encoder * - ");
console.log();

function duplicateEncode(word) {
    console.log(word);
    let res = [];
    // console.log(res);

    function onDuplacate(inputWord, leter) {
        inputWord = inputWord.split('');
        let counter = 0;
        for (let i = 0; i < inputWord.length; i++) {
            if (inputWord[i].toLowerCase() === leter) counter++;
        }
        // console.log(leter, counter);
        return counter;
    }

    for (let i = 0; i < word.length; i++) {
        // console.log(res[i]);
        // console.log(onDuplacate(word, word[i]));
        if (onDuplacate(word, word[i].toLowerCase()) === 1) {
            res.push('(');
        } else {
            res.push(')');
        }
    }
    console.log('Result', res.join(''));
    return res.join('');
}

console.log(duplicateEncode("CodeWarrior"), "&");
// console.log(duplicateEncode("recede"), "()()()");
// console.log(duplicateEncode("Success"), ")())())", "should ignore case");
// console.log(duplicateEncode("(( @"), "))((");