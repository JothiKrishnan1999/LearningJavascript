//this is empty folder
//In JavaScript, a prompt is a built-in method used to display a dialog box that asks the user for input.

let result = prompt("Enter your name:");
console.log("Hello, " + result + "!");
//----------------------------------------------------

let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

let sum = Number(a) + Number(b);
alert("The sum is: " + sum);

//prompt() only works in the browser (not in Node.js).
//You can use Number() to convert string input to numbers.
//Always check for null if the user clicks Cancel.

