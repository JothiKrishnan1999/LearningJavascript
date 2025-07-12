//Inhreritance
class Animal {
  legs;
  tail;

  constructor(legs, tail) {
    this.legs = legs;
    this.tail = tail;
  }

  display() {
    console.log(this.legs);
    console.log(this.tail);
  }
}

class Human extends Animal {
  // "Animal" is parent class and "Human" is child class.
  nationlity;
  constructor(legs, tail, nationlity) {
    //this.legs = legs;
    //this.tail = tail;
    super(legs, tail); //this call parent class constuctor //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
    this.nationlity = nationlity;
  }
}

let dog = new Animal(2, true);
//dog.display();
console.log(dog);

let sanju = new Human(2, 0, "Indian");
console.log(sanju);

//--------------------------------------------------------------------------------------------------------------------------------------------

//Method Overriding

class GrandpaRobot {
   speak() {
      console.log("Hello, I’m a robot!");
   }
}

class MyRobot extends GrandpaRobot {
   speak() {
      console.log("Hello, I’m a dancing robot!");
   }
}

const robo = new MyRobot();
robo.speak(); // Says: "Hello, I’m a dancing robot!"
//this is called method override!
// Overriding means changing what a parent already does, in your own special way!

// Key Points:
//Method names must be the same.
//Method overriding only happens when using class inheritance (with extends).
//You can still call the parent class method using super.methodName().
