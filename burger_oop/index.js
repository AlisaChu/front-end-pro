'use strict';
function Hamburger(size) {
    this.size = size;
    this.toppings = [];
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
}

Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30,
}

Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20,
}

Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
}

Hamburger.TOPPING_SEASONING = {
    price: 15,
    calories: 0,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5,
}

Hamburger.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
}

Hamburger.prototype.getPrice = function() {
    let total = this.size.price;
    this.toppings.forEach(topping => {
        total += topping.price;
    });
    return total;
}

Hamburger.prototype.getCalories = function() {
    let total = this.size.calories;
    this.toppings.forEach(topping => {
        total += topping.calories;
    });
    return total;
}

const hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL);
const hamburgerMedium = new Hamburger(Hamburger.SIZE_MEDIUM);
const hamburgerLarge = new Hamburger(Hamburger.SIZE_LARGE);

hamburgerSmall.addTopping(Hamburger.TOPPING_MAYO);
hamburgerSmall.addTopping(Hamburger.TOPPING_POTATO);
hamburgerSmall.addTopping(Hamburger.TOPPING_CHEESE);

hamburgerMedium.addTopping(Hamburger.TOPPING_SALAD);
hamburgerMedium.addTopping(Hamburger.TOPPING_SEASONING);

hamburgerLarge.addTopping(Hamburger.TOPPING_MAYO);
hamburgerLarge.addTopping(Hamburger.TOPPING_POTATO);

console.log('Small hamburger price with toppings: ' + hamburgerSmall.getPrice());
console.log('Small hamburger calories with toppings: ' + hamburgerSmall.getCalories());

console.log('Medium hamburger price with toppings: ' + hamburgerMedium.getPrice());
console.log('Medium hamburger calories with toppings: ' + hamburgerMedium.getCalories());

console.log('Large hamburger price with toppings: ' + hamburgerLarge.getPrice());
console.log('Large hamburger calories with toppings: ' + hamburgerLarge.getCalories());
