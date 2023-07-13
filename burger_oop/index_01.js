'use strict';
class Topping {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}
class Hamburger {
    constructor(size, price, calories) {
        this.size = size;
        this.price = price;
        this.calories = calories;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    getPrice() {
        let total = this.price;
        for (let topping of this.toppings) {
            total += topping.price;
        }
        return total;
    }

    getCalories() {
        let total = this.calories;
        for (let topping of this.toppings) {
            total += topping.calories;
        }
        return total;
    }
}


const SIZE_SMALL = new Hamburger('small', 50, 20);
const TOPPING_MAYO = new Topping('mayo', 20, 5);
const TOPPING_POTATO = new Topping('potato', 15, 10);

const hamburger = new Hamburger(SIZE_SMALL.size, SIZE_SMALL.price, SIZE_SMALL.calories);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());