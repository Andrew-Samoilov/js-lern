console.log(" - * GoIt Hw 4 * - ");
console.log();
console.log();




console.log('---==*==---');
// ----------
{
    function makePizza(pizzaName, callback) {
        console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
        callback(pizzaName);
    }

    makePizza("Royal Grand", function deliverPizza(pizzaName) {
        console.log(`Delivering pizza ${pizzaName}.`);
    });
    // Change code below this line

    makePizza("Ultracheese", function eatPizza(pizzaName) {
        console.log(`Eating pizza ${pizzaName}`)
    });
}
console.log('---==*==---');
// ----------
{
    function deliverPizza(pizzaName) {
        return `Delivering ${pizzaName} pizza.`;
    }

    function makePizza(pizzaName) {
        return `Pizza ${pizzaName} is being prepared, please wait...`;
    }

    // Chande code below this line
    function makeMessage(pizzaName, callback) {
        return callback(pizzaName);
    }

    console.log(makeMessage('Royal Grand', makePizza));
    console.log(makeMessage('Ultracheese', deliverPizza));
    console.log('---==*==---');
    // ----------


    function greet(name) {
        console.log(`Добро пожаловать ${name}.`);
    }

    // Функция высшего порядка
    function registerGuest(name, callback) {
        console.log(`Регистрируем гостя ${name}.`);
        callback(name);
    }

    registerGuest("Mango", greet);
}