//let x5 = (n) => 5*n;
//console.log(x5(6));

//Oops
let x = {};
console.log(typeof(x));// output: Object

let car = { // this is called object
    name: 'Nexon',
    brand: "TATA",
    driveTrain: "petrol, diesel, EV",
    price: 15,
    onRoadPrice(){
        return this.price+2;
    }
};
console.log(car.name);
console.log(car.price);
//delete car.price; // to delete the key and value pairs
console.log(car);

car['modelYear']= 2024;
console.log(car);

// how to change the value of the property
// car["price"] = 18;
console.log(car.onRoadPrice());


let user = {
    name: "jothi krishnan",
    age: 25,
};
console.log(user);
user.name = "jothi krishnan . K"//  to edit the name in the "object" Javascript
console.log(user.name);
delete user.name;// to delete the name in the "object" Javascript
console.log(user.name);

// // this key refer object in the javascript 
const user = {
    name: "jothikrishnan",
    greet: function(){
        console.log("hi, this is " + this.name)
    }
};
user.greet();
