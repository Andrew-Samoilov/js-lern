console.log(" - * GoIt Hw 4 * - ");
console.log();
console.log();



{
    function filterArray(numbers, value) {
        // console.log('Input', ...numbers, ' v', value);
        const filteredNumbers = [];
        // Change code below this line

        numbers.forEach(number => {
            // console.log('||', number, value);
            if (number > value) { filteredNumbers.push(number); }
        })

        // for (let i = 0; i < numbers.length; i += 1) {
        //     if (numbers[i] > value) { filteredNumbers.push(numbers[i]); }
        // }

        // Change code above this line
        return filteredNumbers;
    }
    console.log('R', filterArray([1, 2, 3, 4, 5], 3));
    console.log('R', filterArray([12, 24, 8, 41, 76], 38));
    console.log();
}

console.log('---==*==---');
// ----------

{
    function repeatStr(n, s) {
        let result = '';
        console.log(`n=${n}  s=${s}`)
        for (let i = 0; i < n; i++) {
            result += s;
        }
        return result;
    }
    console.log(repeatStr(6, "I"));
    console.log(repeatStr(5, "Hello"));
}
console.log('---==*==---');
// ----------
{
    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;
        // Change code below this line

        // for (let i = 0; i < orderedItems.length; i += 1) {
        //     totalPrice += orderedItems[i];
        // }

        orderedItems.forEach(function (number, index) {
            totalPrice += number;

        });
        // Change code above this line
        return totalPrice;
    }

    console.log(calculateTotalPrice([12, 85, 37, 4]));
}


console.log('---==*==---');
// ----------
{
    const pizzaPalace = {
        pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
        order(pizzaName, onSuccess, onOrderError) {
            // console.log(this.pizzas.indexOf(pizzaName));
            if (this.pizzas.indexOf(pizzaName) === -1) {
                return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
            }
            return makePizza(pizzaName);
        },
    };
    // Change code above this line

    // Callback for onSuccess
    function makePizza(pizzaName) {
        return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    }

    // Callback for onError
    function onOrderError(error) {
        return `Error! ${error}`;
    }

    // Method calls with callbacks
    console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
    console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
    console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
    console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));



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
}