console.log(" - * GoIt Hw 4 * - ");
console.log();
console.log();
{
    const getUsersWithEyeColor = (users, color) =>
        users.filter(user => user.eyeColor === color);

    const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);
}


{
    // 4-21
    const books = [
        {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            rating: 8.38,
        },
        {
            title: "Beside Still Waters",
            author: "Robert Sheckley",
            rating: 8.51,
        },
        {
            title: "The Dream of a Ridiculous Man",
            author: "Fyodor Dostoevsky",
            rating: 7.75,
        },
        { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
        { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
    ];

    const MIN_RATING = 8;
    const AUTHOR = "Bernard Cornwell";
    // Change code below this line

    const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
    const booksByAuthor = books.filter(book => book.author === AUTHOR);

}

{
    const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
    // Change code below this line

    const evenNumbers = numbers.filter(value => (value % 2) === 0);
    const oddNumbers = numbers.filter(value => (value % 2) !== 0)

    console.log(evenNumbers);
    console.log(oddNumbers);
}

{
    const planets = ["Earth", "Mars", "Venus", "Jupiter"];
    // Change code below this line
    const planetsLengths = planets.map(planet => planet.length);

    console.log(planetsLengths);
}

{
    function changeEven(numbers, value) {
        // Change code below this line
        const newArray = [];
        for (let i = 0; i < numbers.length; i += 1) {
            if (numbers[i] % 2 === 0) {
                newArray.push(numbers[i] + value);
            } else {
                newArray.push(numbers[i]);
            }

        }
        return newArray;
        // Change code above this line
    }

    console.log(changeEven([17, 24, 68, 31, 42], 100));
    console.log(changeEven([44, 13, 81, 92, 36, 54], 100), `[144, 13, 81, 192, 136, 154]`);
}

{
    // Change code below this line
    const filterArray = (numbers, value) => {
        const filteredNumbers = [];

        numbers.forEach(number => {
            if (number > value) {
                filteredNumbers.push(number);
            }
        });

        // Change code above this line
        return filteredNumbers;
    }
}
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
    firstArray.forEach(function (firstArray, i) {

        if (secondArray.includes(firstArray)) {
            // console.log(firstArray);
            commonElements.push(firstArray);

        }
    });

    // for (let i = 0; i < firstArray.length; i += 1) {
    //     if (secondArray.includes(firstArray[i])) {
    //         commonElements.push(firstArray[i]);
    //     }
    // }

    return commonElements;
    // Change code above this line
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));



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
        console.log(`n = ${n}  s = ${s}`)
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
        return `Your order is accepted.Cooking pizza ${pizzaName}.`;
    }

    // Callback for onError
    function onOrderError(error) {
        return `Error! ${error} `;
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
            console.log(`Eating pizza ${pizzaName} `)
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