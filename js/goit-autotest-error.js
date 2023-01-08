// 1.13 avtotest
function isAdult(age) {
    // Change code below this line
    // const passed = age >= 18 ? true : false; // without () also works
    const passed = (age >= 18) ? true : false;
    // Change code above this line
    return passed;
}
function isAdult(age) {
    // Change code below this line
    let passed = false;
    if (age >= 18) {
        passed = true;
    }
    // Change code above this line
    return passed;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));
// 1.25 autotest dont work
function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    ordered > available ? message = "Not enough goods in stock!" : message = "The order is accepted, our manager will contact you"
    // Change code above this line
    return message;
}
//  Вправа 17, модуль 2. так не працює, хоче '+=' замісь ++
const start = 3;
const end = 7;

for (let i = start; i < end; i++) {
    console.log(i);
}

// Change code below this line 3.26
function calculateMeanTemperature({
    today: { low: todayLow, high: todayHigh, },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh, }
} = forecast) {
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }), 28.5);
console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }), 37);
//5.12 ось так записану не пропускає
class Car {
    // Change code below this line
    #brand;

    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }
    getBrand() { return this.#brand; };//в одну строку - непропускає, 
    changeBrand(newBrand) { this.#brand = newBrand; };//в одну строку - непропускає, 
    // Change code above this line
}