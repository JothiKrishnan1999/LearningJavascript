function Add(){
    this.a = 5;
    this.b = 10;
    this.add  = function(c){
        return this.a+this.b+c;

    }
}
let sum = new Add();
console.log(sum.Add(4));// output=19

/// arrays in Javascript \\\
