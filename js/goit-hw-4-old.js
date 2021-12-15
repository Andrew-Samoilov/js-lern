console.log(" - * GoIt Hw 4 * - ");
console.log();
console.log();

{
    const totalScore = students.reduce((total, student) => {
        return total + student.score;
    }, 0);
}

{
    // 4-38
    const getTotalFriendCount = users => users.reduce((total, u) => {
        return total + u.friends.length;
    }, 0);
}

{
    // 4-36
    const calculateTotalBalance = users => users.reduce((total, u) => {
        return total + u.balance;
    }, 0);
}

{
    // 4-35
    const players = [
        { name: "Mango", playtime: 1270, gamesPlayed: 4 },
        { name: "Poly", playtime: 469, gamesPlayed: 2 },
        { name: "Ajax", playtime: 690, gamesPlayed: 3 },
        { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
    ];
    // Change code below this line

    const totalAveragePlaytimePerGame = players.reduce((tot, player) => {
        return tot + player.playtime / player.gamesPlayed;
    }, 0);

    console.log(totalAveragePlaytimePerGame);
}


{
    // 4-34
    const totalPlayTime = playtimes.reduce((pv, number) => {
        return pv + number;
    }, 0);
}

{
    // 4-32
    const firstArray = [26, 94, 36, 18];
    const secondArray = [17, 61, 23];
    const thirdArray = [17, 26, 94, 61, 36, 23, 18];
    // Change below this line

    const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
    const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 != 0);

    const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);;
    const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 != 0);

    const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
    const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 != 0);

}

{
    // 4-31  Change code below this line
    const isEveryUserActive = (users) => users.every((user) => user.isActive);
    // Change code above this line
}

{
    // 4-30
    const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
    const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 != 0);

    const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
    const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 != 0);

    const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
    const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 != 0);
}

{
    // 4-28

    const books = [
        {
            title: 'The Last Kingdom',
            author: 'Bernard Cornwell',
            rating: 8.38,
        },
        {
            title: 'Beside Still Waters',
            author: 'Robert Sheckley',
            rating: 8.51,
        },
        { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75, },
        { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    ];
    const BOOK_TITLE = 'The Dream of a Ridiculous Man';
    const AUTHOR = 'Robert Sheckley';
    // Change code below this line

    const bookWithTitle = books.find(option => option.title === BOOK_TITLE);
    const bookByAuthor = books.find(option => option.author === AUTHOR);

    console.log(bookWithTitle);
    console.log(bookByAuthor);
}
{
    // 4-26
    // Change code below this line
    const getActiveUsers = (users) =>
        users.filter(user => user.isActive === true);
    // Change code above this line

}

{
    // 4-25

    const users = [
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
            age: 37
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
            age: 34
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
            age: 24
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
            age: 21
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
            age: 27
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
            age: 38
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
            age: 39
        }
    ];


    const getFriends = (users) => {
        const allFriends = users.flatMap(user => user.friends);
        const unicFriends = allFriends.filter(
            (friend, index, array) => array.indexOf(friend) === index
        );

        // const uniqueCourses = allCourses.filter(
        //     (course, index, array) => array.indexOf(course) === index
        // );

        return unicFriends;
        // return allFriends;
    };

    console.log(getFriends(users));
}

{
    const users = [
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
            age: 37
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
            age: 34
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
            age: 24
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
            age: 21
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
            age: 27
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
            age: 38
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
            age: 39
        }
    ]

    const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));


    const frName = 'Goldie Gentry';
    for (let i = 0; i < users.length; i++) {
        console.log(users[i], users[i].friends.includes(frName));

        console.log(getUsersWithFriend(users, 'Goldie Gentry'));

    }


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