//Working with only binary outcome.
var result = "70"

if(result > 40){
    console.log("You have passed")
} else if(result<40){
    console.log("You have not pass")
}

//Working with more than 2 conditions. Must end with else.
var place = "First"

if(place == "First"){
    console.log("GOLD")
} else if(place == "Second"){
    console.log("Silver")
} else if(place == "Third"){
    console.log("Bronze")
} else {
    console.log("No medal")
}

//Using the Switch statment for multiple outcome. It is best practie & easier to read.
var position = "Forth"

switch(position) {
    case "First":
        console.log("Gold");
        break;
    case "Second":
        console.log("Silver");
        break;
    case "Third":
       console.log("Bronze");
       break;
    default:
        console.log("No medal")
}

var day = "Sunday"
switch (day){
 case "Monday":
    console.log("Go for a run");
    break;
 case "Tuesday":
    console.log("Buy 1kg gold");
    break;
 case "Wednesday":
    console.log("Move to Australia");
    break;
 case "Thursday":
    console.log("Eat Kangaroo");
    break;
 case "Friday":
    console.log("Go friday prayer");
    break;
 case "Saturday":
    console.log("Swim in the ocean");
    break;
 case "Sunday":
    console.log("Chill & relax");
    break;
 default:
    console.log("There is no such day");
}
