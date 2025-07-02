// function Add(){
//     this.a = 5;
//     this.b = 10;
//     this.add  = function(c){
//         return this.a+this.b+c;

//     }
// }
// let sum = new Add();
// console.log(sum.Add(4)); //output=19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// arrays in Javascript \\\

let fru = [];
fru = ["Apple", "Orange", "Banana", "Mango", "JackFruit", "Pineapple" ];

console.log(fru.length);

console.log(fru);
for(let i=0;i<5;i++)
{
    console.log(fru[i]);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let basket = ["banana", "carrot"];

basket.unshift("apple");
console.log(basket); // ["apple", "banana", "carrot"]

basket.shift();
console.log(basket); // ["banana", "carrot"]

let basket1 = ["apple", "banana", "carrot"];
console.log(basket1.length); // 3

//////////////////////////////////////////////////////////////////////           //////////////////////////////////////////////

let bag = [];

bag.push("teddy");        // ["teddy"]
bag.unshift("ball");      // ["ball", "teddy"]
bag.push("car");          // ["ball", "teddy", "car"]
bag.shift();              // ["teddy", "car"]
bag.pop();                // ["teddy"]

console.log(bag);         // ["teddy"]
console.log(bag.length);  // 1

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2 dimensional array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(matrix);
console.log(matrix[2][0]);

for()