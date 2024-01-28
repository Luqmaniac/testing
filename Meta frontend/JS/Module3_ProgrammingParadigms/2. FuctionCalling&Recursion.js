/*Functions that repeat tasks are helpful unless they run endlessly.
 This shows what recursive functions are & how to avoid infinite loops.
*/

//Simple fuction example.
function myFamily(){
    console.log ("Luqman");
    console.log ("Munirah");
    console.log ("Darwish");
    console.log ("Quwaidir");
    console.log ("Waqiyd");
    console.log ("Nuwairon");
    console.log; ("Nawyan");
}
myFamily()

//Function with recursion. It is an alternative way to run code withour the use of loops.
let counter = 10;
function countdown(){
    console.log(counter);
    counter = counter -1;
    if(counter === -1) return;
    countdown();
}
countdown()

//Count up with recursion.
let counter2 = 1
function countup(){
    console.log(counter2);
    counter2 = counter2 +1;
    if(counter2 === 11) return;
    countup();
}
countup()
