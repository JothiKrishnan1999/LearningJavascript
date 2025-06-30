let a =133;
function oddEven(a){
    if(a%2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(oddEven(15));
console.log(oddEven(a));

let oddOrEven = oddEven(); // here we are storing "OddEven" function in the "oddOrEven" variable. 


//arrow function
function operation(op, a, b){
    return op(a,b);

}
let add = (a,b) => a+b;
let sub = (a,b) => a-b;


console.log(operation(add, 2,3));
console.log(operation(sub, 5,3));

function operation(op,a,b){
    return op(a,b);
}

//what is arrow function?
//An arrow function is a shorter way to write a function in JavaScript using the arrow symbol =>.
// 
// It is commonly used in modern JavaScript, especially for simple functions and callbacks.

