/*| Term         | Definition                                                         |
| ------------ | ------------------------------------------------------------------ |
| **Class**    | A **blueprint** for creating objects (with properties and methods) |
| **Function** | A **reusable block of code** that performs a task                  |
| **Method**   | A **function that belongs to an object or class**                  |
*/
//Object
let user = {
   name: "Sanjay",
   Age: 5,
   fav: "apple",
   display: function(){
      console.log(this.name);
      
   }
};



// class 
class User{ 

   // name =  "Sanju";
   // age= 4;
   // fav= "orange";

     constructor(name, age){ // method in class
      this.name = name;
      this.age = age;
   }

   display(){

      console.log('Name: ', this.name); //function in class
      console.log("age: ", this.age);
   }
}

let Sanju = new User("sai", 23);
Sanju.display();

