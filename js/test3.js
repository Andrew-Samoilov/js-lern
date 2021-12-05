// function formatMessage(message, maxLength) {
//     let result;
//     console.log(message.length);
//     console.log(message);
//     console.log(maxLength);
//     result = (message.length > maxLength) ? message.slice(0, maxLength) + '...' : message;
//      return result;
//  }

// console.log(formatMessage("Cu", 23));
// console.log(formatMessage("Curabitur ligula sapien", 2));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 51));


function checkForSpam(message) {
    let result;
    // Change code below this line
    result = message.toUpperCase().includes("SALE") || message.toUpperCase().includes("SPAM");

    // Change code above this line
    return result;
}

console.log(checkForSpam("adsfrwerwrwer"));
console.log(checkForSpam("adsf spam rwerwrwer"));

// home work 3 -19

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];


// // Тяжечко дається мені синтаксис властивосте, перебор,..
// function getAllPropValues(propName) {
//     // Change code below this line

//     const result = [];
//     for (const prod of products) {
//         if (prod[propName]) {
//             // console.log('--', prod[propName]);
//             result.push(prod[propName]);
//         }
//     }

//     return result;
//     // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('category'));



const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    let result = 0;
    for (let i of products) {
        // console.log('-', i);
        if (i.name === productName) {
            result = i.price * i.quantity;
            // console.log('-');
        }

    }

    return result;
    // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log();
console.log();

