//A Map is like a collection of key-value pairs — like a dictionary.
//Unlike objects:
//Keys can be of any type (not just strings)
//Maintains insertion order

let map =  new Map();
map.set(1,'chennai')
map.set(2,'chengalpattu')
.set(3,'India')

console.log( map);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

let myMap = new Map();

//Adding Items  set - keyword
myMap.set('name',  'Alice');
myMap.set(1,       'One');
myMap.set(true,   'Yes');

//Getting Items get - keyword
console.log(myMap.get('name')); // Alice
console.log(myMap.get(1));      // One

// Checking if key exists:  has - keyword
console.log(myMap.has('name')); // true

for (let [key, value] of myMap) {
   console.log(key, value);
}

for( key of map){
   console.log(key);
}

console.log(map .size)
map.clear();
console.log(map);

//////////////////////////////////////////////////////////////////////////////////////////////--------------------------------------///////

// Set in JavaScript
//unique value are called set//
// A Set is like a bag that holds unique values.
//No duplicates
// Maintains insertion order


//Adding Items
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // ignored, no duplicates
console.log(mySet);  // output - Set(2) { 1, 2 }


// Checking if a value exists:
console.log(mySet.has(2)); // true

//Removing items
mySet.delete(1);

// Iterating:
for (let value of mySet) {
   console.log(value);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example of Map

let studentMarks = new Map();

studentMarks.set("Alice", 90);
studentMarks.set("Bob", 85);

console.log(studentMarks.get("Alice")); // 90
console.log(studentMarks.has("Bob"));   // true
//Map stores: "Alice" => 90, "Bob" => 85

//--------------------------------------------------------------------------------------------------------------------------------
//Example of Set

let fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // ignored!

console.log(fruits); // Set(2) { "apple", "banana" }
console.log(fruits.has("banana")); // true

//Set stores: "apple", "banana" (no duplicates)
//----------------------------------------------------------------------------------------------------------------------------------------------
