//what is constructor in javascript?
//A constructor in JavaScript is a special function used to create and initialize objects.
//It's often used when you want to create multiple similar objects with the same structure but different values.


let a = {
    name: "jothikrishnan",// this is object 
}

function User(a){
    this.name = a;// this is constructor
}


let jothikrishnan = new User('jothikrishnan');
let sai = new User('sai');

console.log(jothikrishnan, sai);


//////\\\\\\
