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
