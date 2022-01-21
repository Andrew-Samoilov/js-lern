console.log(" -  * CodeWars * Detect Pangram * - ");
console.log();

function isPangram(string) {
    string = string.toLowerCase();
    console.log(string);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < string.length; i++) {
        // console.log(alphabet.indexOf(string[i]));
        if (alphabet.indexOf(string[i]) != -1) {
            alphabet.splice(alphabet.indexOf(string[i]), 1);
        }

    }

    return (alphabet.length) === 0 ? true : false;
}

let str = "The quick brown fox jumps over the lazy dog.";
// let str = 'aaa';
console.log(isPangram(str), true);