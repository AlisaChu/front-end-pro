"use strict";
class Calculator {
    constructor(base) {
        this.value = base;
        this.originalBase = base;
    }

    add(num) {
        if (typeof num === 'number') {
            this.value += num;
        }
    }

    sub(num) {
        if (typeof num === 'number') {
            this.value -= num;
        }
    }

    set(num) {
        if (typeof num === 'number') {
            this.value = num;
        }
    }

    get() {
        return this.value;
    }

    reset() {
        this.value = this.originalBase;
    }
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.add(10);
calc.add('qwe'); // NaN and value 40 do not change
console.log(calc.get()); // 40

calc.reset();
console.log(calc.get()); // 100
