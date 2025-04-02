// Final challenges
// Create a program that uses console.log to display a welcome message.

console.log('Welcome to my new challenge!');

// Create a variable called "name" and assign your name to it. Then, use console.log to 
// display the message "Hello, [your name]!" in the browser console.

let name = prompt('What is your name?');
console.log(`Welcome to my new challenge, ${nome}!`);

// Create a variable called "name" and assign your name to it. Then, use alert to display 
//the message "Hello, [your name]!" .

let name = prompt('What is your name?');
alert(`Welcome, ${name}!`);

// Use prompt to ask the following question: What programming language do you like the most? Then, 
//store the answer in a variable and display it in the browser console.

let question = prompt('What programming language do you like the most?');
console.log(`My favorite is ${question}.`);

// Create a variable called "value1" and another called "value2", assigning them numeric values of your choice. 
//Then, perform the sum of these two values and store the result in a third variable called "result". Use console.log 
//to show the message "The sum of [value1] and [value2] is equal to [result]." in the console.

let value1 = 5;
let value2 = 10;
let result = value1 + value2;

console.log(`The sum of ${value1} and ${value2} is equal to ${result}`);

// Create a variable called "value1" and another called "value2", assigning them numeric values of your choice.
// Then, perform the subtraction of these two values and store the result in a third variable called "result". 
//Use console.log to show the message "The difference between [value1] and [value2] is equal to [result]." in the console.

let value1 = 5;
let value2 = 10;
let result = value1 - value2;

console.log(`The different between ${value1} and ${value2} is equal to ${result}`);

// Ask the user to enter their age with prompt. Based on the entered age, use an if statement to check if the person
// is of legal age or not, displaying an appropriate message in the console.

let age = parseInt(prompt('How old are you?'));

if (age >= 18){
    console.log(`You are of legal age!`);
} else {
    console.log('Not old enough!');
}

// Create a variable "number" and ask for a value with prompt, checking if it is positive, negative, or zero.
// Use if-else to print the respective message.

let number = prompt('Insert a number: ');

if (number < 0){
    console.log('The number is negative!');
} else if(number === 0){
    console.log('Very boring number!');
} else {
    console.log('It is a number biger than zero, finally!');
}

// Use a while loop to print the numbers from 1 to 10 in the console.

let number = 1;

while (number <= 10){
    console.log(number);
    number++;
}

// Create a variable "grade" and assign a numeric value to it. Use if-else to determine if the grade is greater
// than or equal to 7 and display "Approved" or "Disapproved" in the console.

let grade = prompt('Enter your grade:');

if (grade >= 7){
    console.log('Approved');
} else {
    console.log('Disapproved');
}

// Use Math.random to generate any random number and display that number in the console.

let random = parseInt(Math.random() * 100 + 1);
console.log(random);

// Use Math.random to generate an integer between 1 and 10 and display that number in the console.

let secretNumber = parseInt(Math.random() * 10 + 1);
console.log(secretNumber);

// Use Math.random to generate an integer between 1 and 1000 and display that number in the console.

let secretMil = parseInt(Math.random() * 1000 + 1);
console.log(secretMil);