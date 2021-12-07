console.log(" - * Code wars * - ");
console.log();
console.log();

function getCount(str) {
    let vowelsCount = 0;
    if (!str) { return vowelsCount; }

    // enter your majic here
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const arrayStr = str.split("");

    // console.log('arrayStr', arrayStr);
    // console.log('vowel', vowel);

    for (let i = 0; i < arrayStr.length; i++) {
        // console.log(arrayStr[i]);
        // console.log(vowel.includes(arrayStr[i]));
        if (vowel.includes(arrayStr[i])) {
            vowelsCount += 1;
        }

    }

    return vowelsCount;
}

console.log(getCount("abracadabra"));
console.log(getCount());