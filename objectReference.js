
// //In JavaScript, when you assign an object to a variable, it stores a reference to the object — not the object itself. 
// // So if two variables point to the same object, changing one changes the other.

// let a = {
//     name: "jothi krishnan",
//     age: 25,
// };

// console.log(a.name);
// a.name = "jk";
// console.log(a);
// delete a.name;
// console.log(a.name);

// b= {};
// b.age = 30;
// console.log(a,b);

// // //garbage collection
// let c = 10;
// console.log(c);
// c  = null;
// console.log(c);

///////////////////////////////////////////////////////////////////

let user = {
    name: 'sai',
    age: 24,
    height: 5.7,
};
console.log('age' in user);

for(key in user){
   // console.log(key); output- name, age, height
      // console.log(user[key]); // Output - sai, 24 , 5.7
        console.log(key + '-' + user[key]);
}

/////////////////////////////////////////////////////////////////////

let a  = {
    name: "xyz",
    age: 23,
};

let b = a;
console.log(a,b);

// b= {};
// console.log(a,b);


const use = {
    name:  "Sanjay krishnan",
    age: 4,

};

//use = {};
//console.log(c);// gives error becoz, reassign is not possible in the "const"

use.name = "Sanju";
console.log(use);// modify the properties in the object is allowed!


/////////////////////////////////////////////////////////////////////////////////////////

//Garbage Collection
//Garbage Collection (GC) in JavaScript is the automatic process of freeing up memory that your program is no longer using.
let A = {
    name: " Nanna",
    age: 25,
};
console.log(A);

A= null;
console.log(A);
//////////////////////////////////////////////////

let Z = {
    name: " Nanna",
    age: 25,
};
Y= Z;

console.log(Z);

Z= {};
console.log(Y); 
//o/p//  name: ' Nanna', age: 25 }
//{ name: ' Nanna', age: 25 }
////////////////////////////////////////////////