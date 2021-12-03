console.log(" - * test5 * - ");
console.log();
console.log();

function numberToString(num) {
    // Return a string of the number here!
    console.log((num + ' ').trim());
    return (num + ' ').trim();
}

console.log(numberToString(16545));
console.log();


// from home work
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
    values.push(apartment[key]);
}


console.log('keys', keys);
console.log('values', values);