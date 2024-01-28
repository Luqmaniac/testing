/* 
 A conditional & switch statement can be used to execute code based on 
 a certain condition being either true or false.
*/

// 1st place to 10th place in a competition
var place = "First"

if(place == "First"){
    console.log("Gold")
} else if(place == "Second"){
        console.log("Silver")
}else if(place == "Third"){
        console.log("Bronze")
}else{
        console.log("no medal")
}


//Using switch statement
var place = "Forth";

switch(place) {
    case "First":
        console.log("Gold");
        break;
    case "Second":
        console.log("Silver");
        break;
    case "Third":
        console.log("Bronze")
        break;
    default:
        console.log("No medal")
}