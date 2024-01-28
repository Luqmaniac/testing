/*
 Scope is bout code accessibility. 
 It determined which part of the code is accesssible & which are inaccessible.
*/

//The code that exist outside of a function is called global scope.

var num1 = 17 //This is a global scope

/*
 Inside the fuction is called local scope. It is scoped to the function.
 Local scope states that a variable is only accessible in the function where it is declared.
*/

function score() {
    var num2 = 20;
    console.log(num2 * num1)
}
score()

//Each keeps reference to its parent scope. This is called scope chain.