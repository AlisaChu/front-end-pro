 // Использование try and catch помогает предотвратить полный сбой программы, когда происходит что-то неожиданное.
 // Это позволяет мне обрабатывать ошибки чтобы обеспечить более плавную и удобную работу.

try {
    const operation = getArithmeticOperator("CAN: Enter an operator (+,-,*,/):");
    const num1 = getOperand("CAN: Enter the first number:");
    const num2 = getOperand("CAN: Enter the second number:");


 const result = calc(num1, num2, operation);
  showResult(num1, operation, num2, result);
} catch (error) {
    alert("CAN: You entered incorrect data.");
}
function getArithmeticOperator(promptText) {
    const operator = prompt(promptText);
    const allowedOperators = ["+", "-", "*", "/"];

    if (!allowedOperators.includes(operator)) {
        throw new Error("Invalid operator");
    }

    return operator;
}

function getOperand(promptText) {
    const operand = parseFloat(prompt(promptText));

    if (isNaN(operand)) {
        throw new Error("Invalid operand");
    }

    return operand;
}
function calc(num1, num2, operation) {
    if(operation === "+") {
        return num1 + num2;
    } else if(operation === "-") {
        return num1 - num2;
    } else if(operation === "*") {
        return num1 * num2;
    } else if(operation === "/") {
        if(num2 === 0) {
            alert("CAN: Division by zero is not allowed!");
            return null;
        }
        return num1 / num2;
    } else {
        return null;
    }
}

function showResult(num1, operation, num2, result) {
    alert(`CAN: ${num1} ${operation} ${num2} = ${result}`);
}

