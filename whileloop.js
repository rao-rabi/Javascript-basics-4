//1. Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number.

let oddNumber = parseInt(prompt("Enter a number till you want odd numbers: "));
let i = 0;
while (i <= oddNumber) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

//2. Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.

let numTable = parseInt(prompt(`Enter a number to get its table: `));
let j = 1;
while (j <= 10) {
    console.log(`${numTable} x ${j} = ${numTable * j}`);
    j++;
}

//3. Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.

let randomNumber = Math.round(Math.random() * (100 - 1) + 1);
console.log(`The random number is: ${randomNumber}`);
let guess;
while (true) {
    guess = parseInt(prompt("Guess a number between 1 and 100: "));
    if (guess == randomNumber) {
        alert("Congratulations!You got it!");
        break;
    }
    else {
        alert("Sorry, that's not correct!");
    }
}

//4. Write a program that asks the user to enter a word and then prints out the word in reverse order.

let word = prompt("Enter a word");
let z = word.length-1;
while(z >= 0){
    console.log(word[z]);
    z--;
}

//5. Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers.

let num1 = parseInt(prompt("Enter 1st number: "));
let num2 = parseInt(prompt("Enter 2nd number: "));
let num3 = parseInt(prompt("Enter 3rd number: "));
let num4 = parseInt(prompt("Enter 4th number: "));
let num5 = parseInt(prompt("Enter 5th number: "));
let numAdd = [num1, num2, num3, num4, num5];
let sum = 0;
let a = 0;
while(a < numAdd.length){
    sum += numAdd[a];
    a++;
}
console.log(`Sum of all numbers is ${sum}`);
console.log(`Average of all numbers is ${sum/numAdd.length}`)