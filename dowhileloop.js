//1. Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.

let correctPassword = 'password'
do {
    let userPassword = prompt("Enter your pasword: ");
    if (userPassword === correctPassword) {
        alert('You entered the correct password');
        break;
    }
    else {
        alert("Enter the correct password")
    }

} while (true);

//2. Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.

let userNumber = parseInt(prompt("Enter a number till numbers should print out: "));
let i = userNumber;
do {
    console.log(i);
    i--;
} while (i >= 1);

//3. Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number. At the end of the loop, the program should ask the user if they want to play again.

let randomNumber = Math.round(Math.random() * (100 - 1) + 1);
console.log(`The random number is: ${randomNumber}`);
let guess;
do {
    guess = parseInt(prompt("Guess the number?"))
    if (guess === randomNumber) {
        alert(`Congratulations! you got it!`);
        if (true) {
            let playAGain = prompt("Do you want to play again? (y/n)").toLowerCase();
            if (playAGain == "y") {
                continue;
            }
            else if (playAGain == "n") {
                break;
            }
            else{
                alert("invalid input")
            }
        }
        break;
    }
    else {
        alert(`Guess the number again.`)
    }
} while (true);

//4. Write a program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.

let numHigh = Number.NEGATIVE_INFINITY;
let numUser;
do {
    numUser = parseInt(prompt("Enter a number: "));

    if (numUser > numHigh) {
        numHigh = numUser;
    }
} while (numUser >= 0);
console.log(`The largest number you entered is: ${numHigh}`);

/*2nd method*/

let numHigh1 = [];
let numUser1;
do {
    numUser1 = parseInt(prompt("Enter a number: "));
    if (numUser1 < 0) {
        break;
    }
    numHigh1.push(numUser1);

} while (true);
console.log(`The largest number is ${Math.max(...numHigh1)}`);

//5. Write a program that asks the user to enter a series of words and then prints out the words in reverse order. The program should keep asking the user for words until they enter the word "stop".

do {
    let wordSeries = prompt("Enter a word: ");
    let z = wordSeries.length -1 ;
    while(z >=0 ){
        console.log(wordSeries[z]);
        z--;
    }
    if (wordSeries == 'stop') {
        break;
    }
} while (true);