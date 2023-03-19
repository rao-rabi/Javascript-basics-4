//1. Write a js program to find the sum of two numbers.

let num1 = parseInt(prompt("Enter 1st number: "));
let num2 = parseInt(prompt("Enter 2nd number: "));
console.log(`sum of ${num1} and ${num2} is: `, num1 + num2);

//2. Write a js program to find the difference between two numbers.

console.log(`Difference of ${num1} and ${num2} is: `, num1 - num2);

//3. Write a js program to find the product of two numbers.

console.log(`Product of ${num1} and ${num2} is: `, num1 * num2);

//4. Write a js program to find the quotient and remainder of two numbers.

console.log(`Quotient of ${num1} and ${num2} is: `, num1 / num2);
console.log(`Remainder of ${num1} and ${num2} is: `, num1 % num2);

//5. Write a js program to round a number to the nearest integer.

let numRound = parseInt(prompt("Enter a number to round: "));
console.log(Math.round(numRound));

//6. Write a js program to generate a random number between 0 and 1.

console.log('Random number between 0 and 1 is: ' + Math.random());

//7. Write a js program to find the maximum and minimum of two numbers.

let num3 = parseInt(prompt("Enter 1st number: "));
let num4 = parseInt(prompt("Enter 2nd number: "));
console.log('The maximum number is: ' + Math.max(num3, num4));
console.log('the minimum number is: ' + Math.min(num3, num4));

//8. Write a js program to calculate the square root of a number.

let numSquareRoot = parseInt(prompt("Enter a number to find square root: "));
console.log(`The square root of ${numSquareRoot} is: ` + Math.sqrt(numSquareRoot));

//9. Write a js program to calculate the absolute value of a number.

let numAbsolute = parseInt(prompt("Enter a number to find out its absolute value: "));
console.log(`The absolute number of ${numAbsolute} is: ` + Math.abs(numAbsolute));

//10. Write a js program to calculate the power of a number.

let numPower = parseInt(prompt("Enter a number to find out power: "));
let power = parseInt(prompt(`Enter a number till you want power of ${numPower}`));
console.log(`The power of ${numPower} till ${power} is: ` + Math.pow(numPower, power));