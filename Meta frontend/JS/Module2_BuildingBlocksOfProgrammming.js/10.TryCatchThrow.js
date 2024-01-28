//Bugs: Program will still run but it will run in an unintended way.
//Error: An error will cause the program to stop running.

//Try catch block are build-in statements to help your code continue to run even if an erorr occurs.

//The statements are: Throw, Try & Catch.

//This is a try catch statement. The program will still run eventhough there is an error
try{
    console.log(a + b)
} catch(err){
    console.log(err)
    console.log("There was an error")
    console.log("The error was saved in the error log")
}
console.log("My program does not stop")


//This add throw statement to throw a reference error in my code. The program will also continue to run.
try {
    throw new ReferenceError()
} catch(err){
    console.log(err)
    console.log("There was a reference error")
}
console.log("My program does not stop")