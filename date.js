let date = new Date();
//1. Write a js program to get the current date and time.

console.log(`The current date and time is: ` + date);

//2. Write a js program to get the current year.

console.log(`The current year is: ` + date.getFullYear());

//3. Write a js program to get the current month.

console.log(`The current month is: ` + date.getMonth());

//4. Write a js program to get the current day of the week.

console.log(`The current day of the week is: ` + date.getDay());

//5. Write a js program to add a specific number of days to a date.

let days = parseInt(prompt("Enter the number of days to add: "));
let daysAddition = date.getDate() + days;
date.setDate(daysAddition);
console.log(`After adding days: ` + date);

/* 2nd method using functions*/
function daysAddition(days) {
    date.setDate(date.getDate() + days);
    return date;
}
console.log(daysAddition(days))

//6. Write a js program to subtract a specific number of days from a date.

let daysSub = parseInt(prompt("Enter the number of days to Subtract: "));
let daysSubtraction = date.getDate() - daysSub;
date.setDate(daysSubtraction);
console.log(`After Subtracting days: ` + date);


//7. Write a js program to get the time in milliseconds.

console.log(`Time in milliseconds:` + date.getMilliseconds());

//8. Write a js program to get the hours, minutes, and seconds from a date object.

console.log(`Hours: ` + date.getHours());
console.log(`Minutes: ` + date.getMinutes());
console.log(`Seconds: ` + date.getSeconds());

//9. Write a js program to create a new date object with a specific year, month, and day.

const specificDate = new Date('May 15, 2015');
console.log(`The Specific date is: ` + specificDate)

//10. Write a js program to compare two dates.

let date1 = prompt("Enter a date: ");
let date2 = prompt("Enter another date: ");
if (date1 > date2) {
    console.log(`The ${date1} is greater than the ${date2}.`);
} else if (date1 < date2) {
    console.log(`The ${date1} is less than the ${date2}.`);
} else {
    console.log("The dates are equal.");
}