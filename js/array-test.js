console.log(" - Array test - ");

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i], i);
// }

// for (const client of clients) {
//     console.log(client);
// }

// // const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//     // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//     // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//     // про успіх і робимо break, щоб далі не шукати
//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//         break;
//     }

//     // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//     message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// console.table(clients);

// const cart = [12, 15, 52, 98, 65, 255, 5];
// console.table(cart);
// let cartSum = 0;

// // for (let i = 0; i < cart.length; i++) {
// //     cartSum+=cart[i];   
// // }
// for (const value of cart) {
//     cartSum += value;
// }

// console.log(`Загальна сума елементів ${cartSum}`);

// function getExtremeElements(array) {
//     // Change code below this line
//     return [array[0], array[array.length - 1]];
//     // Change code above this line
// }

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     return message.split(" ").length * pricePerWord;
//     // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 15));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 24));
// console.log(calculateEngravingPrice("Web-development is creative work", 43));
// console.log(calculateEngravingPrice("Web-development is creative work", 21));

// function slugify(title) {
//     // Change code below this line
//     // const resultSplit = title.toLowerCase().split(" ").join("-");
//     // return resultSplit.join("-");
//     return title.toLowerCase().split(" ").join("-")

//     // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i++) { // Change this line
//     console.log(i);
// }

// function calculateTotal(number) {
//     console.log('Number - ', number);
//     // Change code below this line
//     let result = 0;
//     if (number < 0) {
//         result = 0;
//     } else {
//         for (let i = 0; i <= number; i++) {
//             result += i;
//             // console.log(" i ", i, ' result ', result);
//         }
//     }
//     return result;
//     // Change code above this line
// }
// console.log('-calculateTotal- ', calculateTotal(30));

// console.log('-calculateTotal- ', calculateTotal(Math.random()));

// const fruits = ['apple', 'plum', 'pear', 'orange'];


// function calculateTotalPrice(order) {
//     let total = 0;
//     // console.log(" calculateTotalPrice ");

//     // Change code below this line

//     for (let i = 0; i < order.length; i++) {
//         // const element = order[i];
//         // console.log('i= ', i, '; order[i] ', order[i]);
//         total += order[i];
//     }

//     // for (let i = 0; i <= order.lenght; i++) {
//     //     console.log(' i=', i);
//     //     total += order[i];
//     // }
//     // // Change code above this line
//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

function findLongestWord(string) {
    // Change code below this line
    console.log(" findLongestWord ");
    if (!string) {
        return 0;
    }

    const stringArray = string.split(" ");
    console.table(stringArray);
    let maxLength = 0;
    let result = '';

    for (let i = 0; i < stringArray.length; i++) {

        if (maxLength < stringArray[i].length) {
            maxLength = stringArray[i].length;
            result = stringArray[i];
            console.log('- in if- ', maxLength, ' word ', result);
        }

    }

    return result;

    // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you "));
console.log(findLongestWord());


console.log();
