//1. Write a program that uses a for loop to print the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Write a program that uses a for loop to print the elements of an array.

let elementsPrint = [`ahmad`, `ali`, `akbar`, 2, 4, 5];
for (let i = 0; i < elementsPrint.length; i++) {
    console.log(elementsPrint[i]);
}

//3. Write a program that uses a for loop to calculate the factorial of a number.

let factorial = parseInt(prompt("Enter a number to find the factorial: "));
let result = 1;
for (let i = factorial; i >= 1; i--) {
    result*= i;
}
console.log(`The factorial of ${factorial} is: ` + result);

//4. Write a program that uses a for loop to generate a multiplication table for a given number.

let numTable = parseInt(prompt(`Enter a number to get its table: `));
let tableLimit = parseInt(prompt(`Enter the number till you want the table of ${numTable}: `));
for(let i = 1; i<=tableLimit; i++){
    console.log(` ${numTable} x ${i} = ${i*numTable}`);
}

//5. Write a program that uses a for loop to find the sum of all even numbers from 1 to 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`The sum of all even numbers till 100 is: ${sum}`);