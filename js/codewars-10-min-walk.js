console.log(" - * Code wars. 10 minute walk * - ");
console.log();

function isValidWalk(walk) {
    //insert brilliant code here
    let coordX = 0;
    let coordY = 0;

    // const road = [...walk];  * без цієї змінної цілком 
    // console.log(road);       * можна обійтись

    // нам треба гуляти 10 хвилин   - потім перекинув умову вниз
    //  if (walk.length !== 10) { return false; }

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': coordX -= 1; break;
            case 's': coordX += 1; break;
            case 'w': coordY -= 1; break;
            case 'e': coordY += 1; break;
            default:
                break;
        }
        // console.log(`road ${road[i]}. x= ${coordX}, y = ${coordY}`);
    }
    // подивився в кодеварс і ще спростив умову
    if (walk.length === 10 && coordX === 0 && coordY === 0) {
        return true;
    }
    return false;
}

console.log(isValidWalk(['n', 's', 'w', 'e']));
console.log(isValidWalk(['n', 's', 'w', 'e', 's', 'w', 'e']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log();
