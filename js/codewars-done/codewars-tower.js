console.log(" - * CodeWars. Build Tower * - ");
console.log();
console.log();

function towerBuilder(nFloors) {
    // build here
    let tower = ['*'];
    let whiteSpases = nFloors - 1;

    console.log(`Building ${nFloors} floors tower`);

    for (let i = 0; i < nFloors - 1; i++) {
        let floor = '';
        floor = '*' + tower[i] + '*';
        tower.push(floor);
    }
    console.log('Tower without spase', tower);

    let white = '';

    for (let i = 0; i < nFloors - 1; i++) {
        console.log('| floor', i, tower[i], '|| whiteSpases', whiteSpases - i);
        for (let j = 0; j < (whiteSpases - i); j++) {
            white += '-';
        }
        tower[i] = white + tower[i] + white;
        // console.log('||| whiteSpases', white);
        white = '';
        // console.log(i, tower[i]);
    }
    return tower;
}

console.log('return ', towerBuilder(1));
console.log('return ', towerBuilder(2));
console.log('return ', towerBuilder(4));
// console.log(
//     ["  *  ",
//         " *** ",
//         "*****"]);
