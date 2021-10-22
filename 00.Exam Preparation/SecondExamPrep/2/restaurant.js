class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(element => {
            let [name, quantity, totalPrice] = element.split(' ');
            quantity = Number(quantity)
            if (this.budgetMoney >= totalPrice) {
                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            }
            else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }

        });

        return this.history.join('\n');
    }

    addToMenu(meal, neadedProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = { products: neadedProducts, price: price };
            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
            if (Object.keys(this.menu).length == 0 || Object.keys(this.menu).length > 1) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }
    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let container = '';
            Object.entries(this.menu).forEach(element => {
                let name = element[0];
                let price1 = this.menu[name].price;
                container += `${name} - $ ${price1}\n`;
            })
            return container.trim();
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let prod = this.menu[meal].products;
            let have = true;
            prod.forEach(element => {
                let [name, quantity] = element.split(' ');

                if (!this.stockProducts[name] || this.stockProducts[name] < quantity) {
                    have = false;
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            });
            if (have) {
                prod.forEach(element => {
                    let [name, quantity] = element.split(' ');
                    this.stockProducts[name] -= quantity;
                })
                this.budgetMoney += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            }
        }
    }
}

/*let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.stockProducts['Banana'])
console.log(kitchen.budgetMoney)*/

/*let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));*/
/*
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());*/


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.budgetMoney)
