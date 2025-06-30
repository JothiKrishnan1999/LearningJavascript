//jothikrishnan
//let num = 90;
// if(num % 2 == 0 ){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }

//logical operator in JS!

// -OR, -AND, -NOT, -NULL Coalescing//

// OR operator is +, ||
//AND Operator is *, **

// NOT Opertor is !

console.log(1 || 1);// output = 1
console.log(1 || 0);// output = 1
console.log(0 || 1);// output = 1
console.log(0 || 0);// output = 0


console.log(1 && 1);// output = 1
console.log(1 && 0);// output = 0
console.log(0 && 1);// output = 0
console.log(0 && 0);// output = 0

console.log(1 || 12);

console.log(1&& 12 && 2 );



// Eligibilty for marriage
let Age = 18;
let Gender = "F";

if(Age >= 21 || Age >= 18 && Gender == "F"){
    console.log("Eligible");
}
else{
    console.log("not eligible");
}


//null Coalescing
//ChatGPT said:
// What is Nullish Coalescing (??) in JavaScript?
//The nullish coalescing operator ?? is used to provide a default value only when the left-hand side is null or undefined.


let age = 18 ;
let currentAge = age ?? 19;// if age is null and undefined and it will print the 19.
console.log(currentAge);
/////////////////////////////////////
//console.log(null || 0 || undefined);



