'use strict';
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

const calculator = createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);

calculator.set(20);

calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN and value 40 do not change

console.log(calculator.get()); // 40

calculator.reset();
console.log(calculator.get()); // 100
