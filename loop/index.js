//1. Display the numbers from 10 to 20 on the page in one line separated by commas.
//let output = '';
//for (let i = 10; i <= 20; i++) {
//    output += i + ', ';
//}
//console.log(output.slice(0, -2));

//2. Print the squares of numbers from 10 to 20.
// for (let i = 10; i <= 20; i++) {
//     console.log(i * i);
// }

//3. Display the multiplication table by 7.
//for (let i = 1; i <= 10; i++) {
//    console.log(`7 * ${i} = ${7 * i}`);
//}

//4. Find the sum of all integers from 1 to 15.
//let sum = 0;
//for (let i = 1; i <= 15; i++) {
//    sum += i;
//}
//console.log(sum);

//5. Find the product of all integers from 15 to 35.
// let product = 1;
// for (let i = 15; i <= 35; i++) {
//     product *= i;
// }
// console.log(product);

//6. Find the arithmetic mean of all integers from 1 to 500.
// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//     sum += i;
// }
// console.log(sum / 500);

//7. Output the sum of only even numbers in the range from 30 to 80.
// let sum = 0;
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) sum += i;
// }
// console.log(sum);

//8. Output all numbers in the range from 100 to 200 multiples of 3.
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) console.log(i);
// }

//9. A natural number is given. Find and display all its divisors on the page.
// let num = 24;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) console.log(i);
// }

//10. Determine the number of its even divisors.
// let num = 24;
// let count = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) count++;
// }
// console.log(count);

//11. Find the sum of its even divisors.
// let num = 24;  // Change this to your given number
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) sum += i;
// }
// console.log(sum);

//12. Print the complete multiplication table from 1 to 10.
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
