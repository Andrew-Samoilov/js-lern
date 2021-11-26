console.log(" - Array test - ");
const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
    console.log(clients[i], i);
}

for (const client of clients) {
    console.log(client);
}

// const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
    // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
    // іменем клієнта. Якщо збігається - записуємо в message повідомлення
    // про успіх і робимо break, щоб далі не шукати
    if (client === clientNameToFind) {
        message = "Клієнт з таким ім'ям є в базі даних!";
        break;
    }

    // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
    message = "Клієнт з таким ім'ям відсутній в базі даних!";
}

console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

console.table(clients);

const cart = [12, 15, 52, 98, 65, 255, 5];
console.table(cart);
let cartSum = 0;

for (let i = 0; i < cart.length; i++) {
    cartSum+=cart[i];   
}

console.log(`Загальна сума елементів ${cartSum}`);



