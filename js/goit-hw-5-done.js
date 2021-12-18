{

    
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