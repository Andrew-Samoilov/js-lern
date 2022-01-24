function mixwords(str) {
    if ((typeof str) != 'string') return undefined;
    let str2 = str.split(' ');
    // console.log(str2);
    function mixWord(word) {
        // console.log(`Insie func ${word}`);
        let temp = [];
        // console.log(`Insie func ${word}, tmp ${temp}`);
        for (let i = 1; i < word.length-1; i++) {
            // console.log(i, word[i]);
            
            let rnd = Math.floor(Math.random() * (word.length - 2));
                while (temp[rnd] != undefined) {
                    rnd = Math.floor(Math.random() * (word.length - 2));
                    // console.log(`> while Rnd ${rnd}`);
                }
            temp[rnd] = word[i];
            // console.log(`! Rnd ${rnd}`);
        }    

        return word[0] + temp.join('') + word[word.length-1];
    }
    
    for (let i = 0; i < str2.length; i++) {
        if (str2[i].length> 3){
            // console.log(str2[i]);
            str2[i] = mixWord(str2[i]);
            // console.log(`Ret func`,mixWord(str2[i]));
        }
    
    }
    return str2.join(' ');
};
console.log(mixwords(22), '?');
console.log(mixwords('hello f sdf si morning'), 'h');
console.log(mixwords('hello')[4], 'o');