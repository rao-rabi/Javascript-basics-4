//1. Write a js program to find the absolute value of a number.

let numAbsolute = parseInt(prompt("Enter a number to find out its absolute value: "));
console.log(`The absolute number of ${numAbsolute} is: ` + Math.abs(numAbsolute));

//2. Write a js program to find the highest value in a list of numbers.

let num1 = parseInt(prompt("Enter 1st number: "));
let num2 = parseInt(prompt("Enter 2nd number: "));
let num3 = parseInt(prompt("Enter 3rd number: "));
let num4 = parseInt(prompt("Enter 4th number: "));
let num5 = parseInt(prompt("Enter 5th number: "));
/*let highestNumber = [num1, num2, num3, num4, num5];
console.log(Math.max(...highestNumber));*/

console.log(`The highest number is: ` + Math.max(num1, num2, num3, num4, num5));

//3. Write a js program to find the lowest value in a list of numbers.

console.log(`The lowest number is: ` + Math.min(num1, num2, num3, num4, num5));

//4. Write a js program to round a number up to the nearest integer.

let numRound = parseInt(prompt("Enter a number to round up: "));
console.log(`The rounded up number is: ` + Math.ceil(numRound));

//5. Write a js program to round a number down to the nearest integer.

let numRound1 = parseInt(prompt("Enter a number to round down: "));
console.log(`The rounded down number is: ` + Math.floor(numRound1));

//6. Write a js program to calculate the exponential value of a number.

let numExp = parseInt(prompt("Enter a number to calculate exponential value: "))
console.log(`The exponential value of ${numExp} is: ` + Math.exp(numExp));

//7. Write a js program to calculate the natural logarithm of a number.

let numLog = parseInt(prompt("Enter a number to find its natural log: "));
console.log(`The natural log of ${numLog} is: ` + Math.log(numLog));

//8. Write a js program to calculate the sine of an angle in radians.

let numSin = parseInt(prompt("Enter a number to find its sine: "));
console.log(`The sine of ${numSin} is: ` + Math.sin(numSin));

//9. Write a js program to calculate the cosine of an angle in radians.

let numCos = parseInt(prompt("Enter a number to find its cosine: "));
console.log(`The cosine of ${numCos} is: ` + Math.cos(numCos));

//10. Write a js program to calculate the square root of a number.

let numSqrt = parseInt(prompt("Enter a number to find its square root: "));
console.log(`The square root of ${numSqrt} is: ` + Math.sqrt(numSqrt));