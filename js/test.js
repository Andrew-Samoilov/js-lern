console.log(' -  * test * - ');
// console.log(' -  * CodeWars *  * - ');
// 3.19
const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    // Change code below this line
    const result = [];
    for (const product of products) {
        if (product.hasOwnProperty(propName)) {
            console.log(product[propName]);
            result.push(product[propName]);
        }
    }
    return result;

    // Change code above this line
}

console.log(getAllPropValues("price"), [1300, 2700, 400, 1200]);
console.log(getAllPropValues("category"), []);
