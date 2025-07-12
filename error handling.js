//What is Error Handling?
//Error handling is how JavaScript lets you catch and deal with errors in your code without crashing the whole program.

try {
  // Code that might throw an error
  let result = 5 / 0;
  console.log("Result is: " + result);
  
  let name = undefined;
  console.log(name.toUpperCase()); // This will throw an error
} 
catch (error) {
  // Code that runs when an error happens
  console.log("Oops! Something went wrong:", error.message);
} 
finally {
  // Code that always runs (optional)
  console.log("Done trying.");
}

//try – Try to run the code.
//catch – If error happens, catch it and run this code.
//error.message – Shows the actual error message.
//finally – Always runs, whether error happened or not.

//Why use Error Handling?
//Without it, your program will stop when it sees an error.
//With error handling, your program can continue running smoothly.

try {
  let x = y + 1; // y is not defined — error
} catch (e) {
   console.log("Error caught!");
}




