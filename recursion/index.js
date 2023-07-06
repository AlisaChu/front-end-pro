let result = pow(8, 3);

console.log(`The result is: ${result}`);
function pow(num, degree) {

    if (degree === 0) {
        return 1;
    }

    else {
        return num * pow(num, degree - 1);
    }
}


