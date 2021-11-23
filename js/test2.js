console.log('hello, world !'); // -> hello, world !

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
    const total = orderedQuantity * pricePerDroid + deliveryFee;
    const message = `You ordered droids worth ${total} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    // Change code above this line
    return message;
}

console.log(makeOrderMessage(2, 100, 50));

const max = 80;
const min = 50;
const result1 = Math.round(Math.random() * (max - min) + min);

console.log(result1);


