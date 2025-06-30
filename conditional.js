let isAdult;
let age= 20;
if(age >= 18)
{
    console.log("yes, it is adult");
}
else if(age>12)
    {
    console.log("this child is Tennager ");
}
else{
    console.log("Child");
}
    


//or

let person;
let ages = 12;

person = (ages >= 18) ? "Adult": (ages >= 12)? "Teenage" : "child" ;

console.log(person); 

if('0')
{
    console.log('hi'); // Output is 1, coz the input is given in the string '0'
}