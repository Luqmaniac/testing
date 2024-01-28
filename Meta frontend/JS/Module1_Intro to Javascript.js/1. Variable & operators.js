//use console.log to communicate
console.log('Hello World')

//below is how you use variables & assign variables
var person = "Luqman"
var greeting = "Hello"
console.log(greeting,person)

//Below is reassigning variable's value
person = "Muhammad Luqman"
console.log(person)

//Assignment Operators are Arithmetic operaors & Comparison operators

//Below is how to use Arithmetic operators.
console.log(1+2*5/5-1)

//Below is how to use Comparison operators. Comparison operators gives a TRUE or FALSE answer

//Greater than
console.log(10>5)

//Less than
console.log(10<5)


console.log(7==7) //Equal to. == 
console.log(7=="7") //only checks the value not the types thus is also returns True
console.log(7===7) //Equal using the strict equality operator. This will check for value & type of data thus, it returns False.
console.log(7!=7)//Not equal to
console.log(7!="7") // also returns FALSE as it doesn't check for datatype 
console.log(7!=="7")//using the strict inequality operator. It checks for both value & datatypes

/*
 Below are how to use Logical Operators. It will give a TRUE or FALSE answer
 Checks for both conditions to be true, use &&.
*/

var a = 7 //This is to assign a to a number so can do the calculations below
console.log(a>5 && a<10)

//OR operator to Check for at least one condition to be true, Use ||
console.log(a>5 || a>10)

//Returns false if the result is true
console.log (!a>5)