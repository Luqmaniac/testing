//Examples of math.random methods
//It can generate a decimal number between 0 to 0.99
Math.random()
//save it to variable. Below I save the variable as "decimal"
var decimal = Math.random()
//It will generate different random decimal numbers from 0 to 0.99 everytime you console.log it
console.log(decimal)
//To output larger than 1, just multiple by 10
console.log(decimal * 10)

//Examples of Math.ceil methods
//This ceil method which can only round upwards
Math.ceil()
//Save it to a variable, here i set the variable to "rounded"
var rounded = Math.ceil(0.000000001) //This will round up to 1
var rounded = Math.ceil(0.5) //This will round up to 1
var rounded = Math.ceil(0.99) //This will round up to 1
var rounded = Math.ceil(1.01) //This will round up to 2
var rounded = Math.ceil(1.5) //This will round up to 2
var rounded = Math.ceil(2.99) //This will round up to 3
console.log(rounded)