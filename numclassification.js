//
// let x = 10;

// if (x > 0) {
//     console.log("positive");
// }
// else if(x<0){
//     console.log("negative");
// }
// else{
//     console.log('Zero');
// }

//condition for the leap year
//check divisible by 4
//check divisible by 100, if(yes),then it must be, divisible by 400, then it is leap year!

let year =2025;
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0 ){
            console.log('leap year');
        }
        else{
            console.log('Not a leap year');
        }
    }
        else{
            console.log('leap year');
        }
    }

    else{
        console.log('Not a leap year');
    }
//
//odd or even
let number = 200;
if(number % 2 == 0){
    console.log("This number is even number");
}
else{
    console.log('this number is odd number');
}
