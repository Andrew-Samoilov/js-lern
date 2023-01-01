function shortcut(string) {
    let result = [];
    for (let index = 0; index < string.length; index++) {
        // a, e, i, o, u
        if (string[index] === 'a'
            || (string[index] === 'e')
            || (string[index] === 'i')
            || (string[index] === 'o')
            || (string[index] === 'u')) {
            console.log(string[index]);
        } else {
            result.push(string[index]);
        }

    }
    return result.join('');
}

console.log(shortcut('hello'), 'hll');
console.log(shortcut('how are you today?'), 'hw r y tdy?');
console.log(shortcut('complain'), 'cmpln');
console.log(shortcut('never'), 'nvr');
