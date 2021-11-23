let message = 'Привіт привіт привіт';
alert(message);

// comments like SaaS or ScSS

let hello = 'Hello world!';


// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;

// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!

let admin;
let names = 'Джон';
admin = names;

const OUR_PLANET = "Earth";
alert(`our planet ${OUR_PLANET}`)

let user_name = prompt("Введіть імя", 999)
alert(`Привіт ${user_name}!`)

// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
alert(`Привіт ${message}!`);

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalU = orderedQuantity * pricePerDroid + deliveryFee;
  const message = 'You ordered droids worth ${totalU} credits. Delivery (${deliveryFee} credits) is included in total price.';
  // Change code above this line
  return message;
}