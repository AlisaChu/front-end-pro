"use strict";

function Calculator(base) {
    this.value = base;
    this.originalBase = base;

    this.add = function(num) {
        if (typeof num === 'number') {
            this.value += num;
        }
    };

    this.sub = function(num) {
        if (typeof num === 'number') {
            this.value -= num;
        }
    };

    this.set = function(num) {
        if (typeof num === 'number') {
            this.value = num;
        }
    };

    this.get = function() {
        return this.value;
    };

    this.reset = function() {
        this.value = this.originalBase;
    };
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
