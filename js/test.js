console.log(' -  * test * - '); // console.log(' -  * CodeWars *  * - ');

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//     });
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }

//     // Change code above this line
//     return totalPrice;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]), 1116);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         filteredNumbers.push(numbers[i]);
//     //     }
//     // }

//     // Change code above this line
//     return filteredNumbers;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20), [24, 41, 76]);

const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => totalPrice += item);

    return totalPrice;
}

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]), 1116);

const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    // Change code above this line
    return filteredNumbers;
}
console.log(filterArray([12, 24, 8, 41, 76], 20), [24, 41, 76]);