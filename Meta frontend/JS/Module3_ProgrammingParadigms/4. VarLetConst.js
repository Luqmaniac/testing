/*
 Block scope states that a variable declared in a block of code is only accessible inside that block.
 Block scope is when you declared variable using let or const
 Using 'let', you can declare two seperate variable with the same name.
 One is declared inside the curly braces & the other is not. Below is an example. 
*/

let color = "red"

if (color == "red"){
    let color = "blue"
}
console.log(color)

/*
 'let' & 'const' is more strict than var. You cannot use it in your code if 
 you have not declared it &  variable can't be redeclared. It's a scope to the block. 
*/

/*
 Use 'let' if the value might change in the future.
 Use 'const' if the value never will change.
*/

/*
 'var' can be access before initialization as long as the var variable is eventually initialised 
 anywhere in our code. Undefined will return but no error. Means, the program will still run.
 We can declare & redeclare the same var variable without error.
*/

var user;
var parent = "Luqman"
var parent = "Munirah"
console.log(parent)// It will return the latest declared var variable which is Munirah.


/*
 We cannot access let variable before declaring it.
 We can declare unassigned variable with let but CANNOT redeclare ONLY CAN reassign it.
*/

let child;
console.log(child) //It will return undefined but not stop the program.
child = "Darwish" //reassign child to Darwish. This will return undefined.
console.log(child) //This will return Darwish.

/*
 const variable must be initiated.
 We can't redeclare a const variable.
*/

const children = 5
console.log(children)