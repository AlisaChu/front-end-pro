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

document.getElementById('calculate').addEventListener('click', function() {
    const size = document.getElementById('size').value;
    const toppings = [];
    if (document.getElementById('cheese').checked) toppings.push(Hamburger.TOPPING_CHEESE);
    if (document.getElementById('salad').checked) toppings.push(Hamburger.TOPPING_SALAD);
    if (document.getElementById('potato').checked) toppings.push(Hamburger.TOPPING_POTATO);
    if (document.getElementById('seasoning').checked) toppings.push(Hamburger.TOPPING_SEASONING);
    if (document.getElementById('mayo').checked) toppings.push(Hamburger.TOPPING_MAYO);

    let hamburger;
    switch (size) {
        case 'small':
            hamburger = new Hamburger(Hamburger.SIZE_SMALL);
            break;
        case 'medium':
            hamburger = new Hamburger(Hamburger.SIZE_MEDIUM);
            break;
        case 'large':
            hamburger = new Hamburger(Hamburger.SIZE_LARGE);
            break;
    }

    toppings.forEach(topping => hamburger.addTopping(topping));

    document.getElementById('price').innerText = 'Price: ' + hamburger.getPrice();
    document.getElementById('calories').innerText = 'Calories: ' + hamburger.getCalories();
});
