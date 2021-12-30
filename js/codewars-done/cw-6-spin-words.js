console.log(" -  * CodeWars * Stop gninnipS My sdroW! * - ");
console.log();

function spinWords(string) {
    const arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            arr[i] = arr[i].split('').reverse().join('');
        }
    }
    return arr.join(' ');
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
// console.log(spinWords("This is another test"), "This is rehtona test");
// console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
// console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");


function spinWordsWithComments(string) {
    // console.log(string);
    const arr = string.split(' ');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i].length > 4) {

            let spinedWord = arr[i].split('').reverse().join('');

            console.log(arr[i].length, spinedWord);
            arr[i] = spinedWord;
        }
    }
    return arr.join(' ');
}