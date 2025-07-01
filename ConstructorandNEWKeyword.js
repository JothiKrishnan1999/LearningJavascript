//Constructor and New Key word
// Imagine You Are Making a Toy
//You have a Toy Maker Machine.
//Every time you press the button, it makes a new toy with a name and a color.

//constructor is like the Toy Maker
//The constructor is the special machine that helps build a new toy.
// It decides: What name and color the toy should have.

class Toy {
  constructor(name, color) {
    this.name = name;   // My name is name
    this.color = color; // My color is color
  }
}

const teddy = new Toy("Teddy Bear", "Brown");

console.log(teddy);

///////////////////////////////////////////////////////////
class Bike{
   constructor(name, color){
      this.name = name;
      this.color = color;
   }
}
let Bajaj = new Bike("Plusur", "Black");
let Bajaj1 = new Bike("R15", "Red");
let Honda =  new Bike("Shine", "Silver");


console.log(Bajaj);
console.log(Honda);
console.log(Bajaj1);

/////////////////////
//Assignment
function Add(){
   this.a = 5;
   this.b= 10;
   this.add = function(c){
   return this.a+this.b+c;

   }
}
let sum = new Add();

console.log(sum.add(4));
