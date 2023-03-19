//1. Write a js program to find the length of a string.

let strLength = prompt("Enter a string");
console.log(strLength.length);

//2. Write a js program to concatenate two strings.

let strconcat1 = prompt("Enter a string");
let strconcat2 = prompt("Enter a string");
console.log(strconcat1.concat(' ' + strconcat2));

//3. Write a js program to convert a string to uppercase.

console.log(`hello world`.toUpperCase());

//4. Write a js program to convert a string to lowercase.

console.log(`HELLO WORLD`.toLowerCase());

//5. Write a js program to check if a string contains a specific substring.

let strSubstring = `Hello! How are you?`;
console.log(strSubstring.includes('How'));

//6. Write a js program to find the index of a specific character in a string.

let strIndex = `${strSubstring}`;
console.log(strIndex.indexOf('a'));

//7. Write a js program to replace a specific substring in a string.

let strReplacement = `Hello! How are you?`;
console.log(strReplacement.replace('How', 'Who'));

//8. Write a js program to remove leading and trailing whitespace from a string.

let strTrim = `      Hello! How are you?      `;
console.log(strTrim.trim());

//9. Write a js program to split a string into an array of substrings.

let strSplit = 'Hi! i am rao rabi';
console.log(strSplit.split(' '));
/*2nd method using for loop*/

for (let i = 0; i < strReverse.length; i++) {
    console.log(strReverse[i]);
}

//10. Write a js program to reverse a string.

let strReverse = `Hello! How are you?`;
console.log(strReverse.split('').reverse().join(''));

/* 2nd method using for loop*/

for (let i = strReverse.length - 1; i >= 0; i--) {
    console.log(strReverse[i]);
}