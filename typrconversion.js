// 1. Implicit Conversion (Type Coercion)

//2. Explicit Conversion (Type Casting)

let num = 5;         // number
let result = num + " apples";  // number + string
console.log(result); // "5 apples"

//JavaScript automatically converts the number 5 to a string "5" and does string concatenation.


let str = "123";
let number = Number(str);  // string to number
console.log(number);       // 123

//Explicit conversion is when you manually tell the program to convert one data type into another.

//It is called "explicit" because the programmer writes the code to perform the conversion.

let age = 24;
age = String(age);
console.log(typeof age);
console.log('12'+'2');


let x = '0';
console.log(typeof x);
x = Boolean(x);

console.log(typeof x);
console.log(x);
