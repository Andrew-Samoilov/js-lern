console.log(" -  * CodeWars * Paul's Misery * - ");
console.log();

function paul(x) {
    console.log(x);
    let misery = 0;
    for (let i = 0; i < x.length; i++) {
        switch (x[i]) {
            case 'kata':
                misery += 5;
                break;
            case 'Petes kata':
                misery += 10;
                break;
            case 'eating':
                misery += 1;
                break;
            default:
                // console.log(`*default*`);
                break;
        }
        // console.log(x[i], misery);
    }

    if (misery < 40) return 'Super happy!';
    if (misery << 70 && misery >= 40) return 'Happy!';
    if (misery < 100 && misery >= 70) return 'Sad!';
    if (misery > 100) return 'Miserable!';
}

console.log(paul(['life', 'eating', 'life']), 'Super happy!');
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');
console.log(paul([
    'Petes kata', 'life',
    'Petes kata', 'eating',
    'Petes kata', 'life',
    'eating', 'eating',
    'kata', 'life',
    'eating', 'eating',
    'Petes kata', 'eating',
    'Petes kata', 'eating',
    'life', 'eating',
    'eating', 'Petes kata',
    'kata', 'eating'
]));