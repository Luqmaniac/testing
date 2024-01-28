// 1st place to 10th place in a cpmpetition
for(var i = 1; i <= 10; i++){
    if(i == 1){
        console.log("Gold")
    }else if(i == 2){
        console.log("Silver")
    }else if(i == 3){
        console.log("Bronze")
    }else{
        console.log(i)
    }
}

//Using switch statement
for(var i = 1; i <= 10; i++){
    switch(i){
        case 1:
            console.log("Gold");
            break;
        case 2:
            console.log("Silver");
            break;
        case 3:
            console.log("Bronze")
            break;
        default:
            console.log(i)
    }
}