console.log(" - * CodeWars. Maximum Product * - ");
console.log();
console.log();

function adjacentElementsProduct(array) {
    // max product найпростышим методом (1на змынна = результат - не працює) - закинув результати в масив - вибрав макс - вуаля = такій же як бест практіс
    console.log(array);
    let maxMultipling = [];
    console.log(maxMultipling);

    for (let i = 1; i < array.length; i++) {
        maxMultipling.push(array[i] * array[i - 1]);
        console.log(` array[${i}]${array[i]} * array[${i - 1}]${array[i - 1]} = Max Mult ${maxMultipling}`);
    }

    return Math.max(...maxMultipling);
}

// console.log(adjacentElementsProduct([1, 2, 3]));
// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
// console.log(adjacentElementsProduct([868, -492]));
console.log(adjacentElementsProduct([-644, 976, - 572]));



// console.log(adjacentElementsProduct([160, -878, -245, 333, -543, -425, 221, -722, -525, 31, -759, -473, -615, -163, -7, -707, -537, 791, -317, 263, -279, 22, 547, 52, -486, 341, 687, -496]));