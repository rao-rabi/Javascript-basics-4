//1. Write a js program to print day of week name using switch case.

let day = parseInt(prompt("Enter the number to print that day start from 0 which prints Saturday"));
switch (day) {
    case 0:
        alert('Saturday');
        break;
    case 1:
        alert('Sunday');
        break;
    case 2:
        alert('Monday');
        break;
    case 3:
        alert('Tuesday');
        break;
    case 4:
        alert('Wednesday');
        break;
    case 5:
        alert('Thursday');
        break;
    case 6:
        alert('Friday');
        break;
    default:
        alert('invalid input')
        break;
}

//2. Write a js program print total number of days in a month using switch case.

let monthName = prompt("Enter name of month to get its days: ").toLowerCase();
switch (monthName) {
    case 'january':
        alert('31 days');
        break;
    case 'february':
        alert('28 days');
        break;
    case 'march':
        alert('31 days');
        break;
    case 'april':
        alert('30 days');
        break;
    case 'may':
        alert('31 days');
        break;
    case 'june':
        alert('30 days');
        break;
    case 'july':
        alert('31 days');
        break;
    case 'august':
        alert('31 days');
        break;
    case 'september':
        alert('30 days');
        break;
    case 'october':
        alert('31 days');
        break;
    case 'november':
        alert('30 days');
        break;
    case 'december':
        alert('31 days');
        break;
    default:
        alert("invalid input")
        break;
}

//3. Write a js program to check whether an alphabet is vowel or consonant using switch case.

let alphabet = prompt("Enter an alphabet: ").toLowerCase();
switch (alphabet) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        alert('The alphabet is vowel');
        break;   
    default:
        alert("The alphabet is consonent");
        break;
}

//4. Write a js program to find maximum between two numbers using switch case.

let num1 = parseInt(prompt("Enter 1st number: "));
let num2 = parseInt(prompt("Enter 2nd number: "));
switch (true) {
    case num1 > num2:
        alert(`${num1} is greater than ${num2}`);
        break;
    case num1 < num2:
        alert(`${num1} is less than ${num2}`);
        break;
    case num1 == num2:
        alert(`${num1} is equal to ${num2}`);
        break;

    default:
        alert("Invalid input");
        break;
}

//5. Write a js program to check whether a number is even or odd using switch case.

let num3 = parseInt(prompt("Enter a number to check whether it is odd or even: "));
switch (true) {
    case num3 % 2 == 0:
        alert(`${num3} is even`);
        break;
    case num3 % 2 !== 0:
        alert(`${num3} is odd`);
        break;
    default:
        alert("Invalid input");
        break;    

}

// 6. Write a js program to check whether a number is positive, negative or zero using switch case.

let num4 = parseInt(prompt("Enter a number to check: "));
switch (true) {
    case num4 > 0:
        alert(`${num4} is positive number`)
        break;
    case num4 < 0:
        alert(`${num4} is negative number`)
        break;
    case num4 == 0:
        alert(`The number is zero`)
        break;

    default:
        alert("Invalid Input")
        break;
}