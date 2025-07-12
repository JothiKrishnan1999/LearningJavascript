//topics cover
//1.JSON - javascript object Notation

let userr = { 
   
   name: "jothi krishnan",
   age: 24,
   mailid: "jk@gmail.com"
};

console.log(typeof(userr));//object

//console.log(JSON.stringify(user));//  {"name":"jothi krishnan","age":24,"mailid":"jk@gmail.com"}
//console.log(JSON.parse(user));

// JSON.stringify() – Convert JS Object → JSON String
// JSON.parse() – Convert JSON String → JS Object
//------------------------------------------------------------------------------------------------------------------------------------------------

//JSON.stringify() – Convert JS Object → JSON String

const user = { name: "Priya", age: 23 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Priya","age":23}'

//-----------------------------------------------------------------------------------

//JSON.parse() – Convert JSON String → JS Object

const jsonData = '{"name":"Priyaka","age":23}';
const jsObject = JSON.parse(jsonData);
console.log(jsObject.name); // Priya

//--------------------------------------------------------------------------------------

//____________________------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

//Date and Time

let bday = new Date('2000-12-11');
let curtime = new Date();// present time and date
console.log(curtime);
console.log(bday);
console.log(bday.getDate());
console.log(bday.getMonth());
console.log(bday.getFullYear());


//----------------------------------------------------------------------------------------------------------------------------------------
//RECURSIVE
//Recursive function - when  the function call by itself.
// there are 3 thing in the recursioin
//-base case
//-update statement
//-recursive call

//5! = 5*4*3*2*1 =120
function factorial(n){
   if(n==0){
      return 1;
   }
   return n*factorial(n-1);
}
console.log(factorial(5));

//-----------------------------------------------------------------------------------------------------------------------------------------

//sum of n number
//5+4+3+2+1
function sum(n){
   if(n == 1){
      return 1;
   }
   return n + sum(n-1);
}
console.log(sum(5));

//-----------------------------------------------------------------------------------------------------------------------------------------

//sub of number
//5-4-3-2-1 
function sub(n){
   if(n == 0){
      return 0;
   }
   return n - sub(n-1)
}
console.log(sub(5));
//------------------------------------------------------------------------------------------------------------------------------------------------



