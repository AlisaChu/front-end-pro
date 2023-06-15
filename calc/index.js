const operation = prompt("CAN: Please enter the operation you want to perform (+, -, *, /):");

const num1 = parseFloat(prompt("CAN: Enter the first number:"));

const num2 = parseFloat(prompt("CAN: Enter the second number:"));

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if(operation === "/") {
    if(num2 === 0) {
        alert("CAN: Error: Division by zero is not allowed!");
        throw new Error("Division by zero error");
    }
    result = num1 / num2;
} else {
    alert("CAN: Error: Invalid operation!");
    throw new Error("Invalid operation error");
}
alert(`CAN: ${num1} ${operation} ${num2} = ${result}`);
