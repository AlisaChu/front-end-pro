'use strict';

const calculator = createCalculator(100);
console.log(calculator.get()); // 40

calculator.reset();
console.log(calculator.get()); // 100

calculator.add(10);
calculator.add(10);
calculator.sub(20);

calculator.set(20);

calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN and value 40 do not change

function createCalculator(base) {
    let value = base;
    const initialValue = base;

    return {
        add: function(num) {
            if(typeof num === "number") {
                value += num;
            }
        },

        sub: function(num) {
            if(typeof num === "number") {
                value -= num;
            }
        },

        set: function(num) {
            if(typeof num === "number") {
                value = num;
            }
        },

        get: function() {
            return value;
        },

        reset: function() {
            value = initialValue;
        }
    };
}


