{
    // 20
    blacklistedEmails = [];
    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }
    blacklist(email) {
        this.blacklistedEmails.push(email);
    }
    isBlacklisted(email) {

        // User.blacklistedEmails.indexOf(email);
        return (this.blacklistedEmails.indexOf(email) !== -1);
        // console.log('q', this.blacklistedEmails.indexOf(email));
    }
}
{
    // 19
    class User {
        email;

        constructor(email) {
            this.email = email;
        }

        get email() {
            return this.email;
        }

        set email(newEmail) {
            this.email = newEmail;
        }
    }

    class Admin extends User {
        // Change code below this line
        constructor({ email, accessLevel }) {
            super(email);

            this.accessLevel = accessLevel;
        }

        static AccessLevel = {
            BASIC: "basic",
            SUPERUSER: "superuser",
        };

        // Change code above this line
    }

    const mango = new Admin({
        email: "mango@mail.com",
        accessLevel: Admin.AccessLevel.SUPERUSER,
    });

    console.log(mango.email); // "mango@mail.com"
    console.log(mango.accessLevel); // "superuser"

}
{
    // 18
    class Admin extends User {
        static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" }
    }
}

{
    // 17
    class Car {
        static #MAX_PRICE = 50000;
        // Change code below this line
        static checkPrice(price) {
            if (price >= Car.#MAX_PRICE) {
                return "Error! Price exceeds the maximum";
            }
            return "Success! Price is within acceptable limits";
        }
        // Change code above this line
        constructor({ price }) {
            this.price = price;
        }
    }
}

{
    // 16

    class Car {
        // Change code below this line
        static MAX_PRICE = 50000;
        #price;

        constructor({ price }) {
            this.#price = price;
        }

        get price() {
            return this.#price;
        }

        set price(newPrice) {
            // console.log(Car.MAX_PRICE, '/', newPrice);
            if (newPrice <= Car.MAX_PRICE) {
                this.#price = newPrice;
            }
        }
        // Change code above this line
    }

    const audi = new Car({ price: 35000 });
    console.log(audi.price); // 35000

    audi.price = 49000;

    console.log(audi.price); // 49000

    audi.price = 51000;
    console.log(audi.price); // 49000
    console.log('!', Car.MAX_PRICE);

}

{
    // 11
    class StringBuilder {
        constructor(initialValue) {
            this.value = initialValue;
        }
        getValue() {
            return this.value;
        }
        padEnd(str) {
            this.value += str;
        }
        padStart(str) {
            this.value = str + this.value;
        }
        padBoth(str) {
            this.value = str + this.value + str;
        }
    }
}

{
    // 10
    class Storage {
        constructor([...items]) {
            this.items = items;
        }
        getItems() {
            return this.items;
        }
        addItem(newItem) {
            this.items.push(newItem);
        }
        removeItem(itemToRemove) {
            this.items.splice(this.items.indexOf(itemToRemove), 1);
        }
    }

    // Change code above this line
    const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
    storage.addItem("Droid");
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    storage.removeItem("Prolonger");
    console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
}

{
    // 2
    const customer = {
        username: "Mango",
        balance: 24000,
        discount: 0.1,
        orders: ["Burger", "Pizza", "Salad"],
        // Change code below this line
        getBalance() {
            return this.balance;
        },
        getDiscount() {
            return this.discount;
        },
        setDiscount(value) {
            this.discount = value;
        },
        getOrders() {
            return this.orders;
        },
        addOrder(cost, order) {
            this.balance -= cost - cost * this.discount;
            this.orders.push(order);
        },
    }

    {
        // 1
        const pizzaPalace = {
            pizzas: ["Supercheese", "Smoked", "Four meats"],
            // Change code below this line
            checkPizza(pizzaName) {
                return this.pizzas.includes(pizzaName);
            },
            order(pizzaName) {
                const isPizzaAvailable = this.checkPizza(pizzaName);

                if (!isPizzaAvailable) {
                    return `Sorry, there is no pizza named «${pizzaName}»`;
                }

                return `Order accepted, preparing «${pizzaName}» pizza`;
            },
            // Change code above this line
        };

        console.log('+', pizzaPalace.order("Smoked"));
        console.log('+', pizzaPalace.order("Big Mike"));
    }