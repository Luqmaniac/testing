//Polymorphic example OOP.

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function(){
        return "Ring ring! Come here, please!"
    }
}

/*
 Declaring ringTheBell as a fuction & parameter 'thing' which is expected 
 to be an object in this example door & bicycle
*/

function ringTheBell(thing){
    console.log(thing.bell())
}

ringTheBell(door)
ringTheBell(bicycle)

//Example of polymorphism using classes in JS.
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}

var baldEagle = new Eagle();
baldEagle.useWings(); // "Flying! Barely flapping!"

var kingPenguin = new Penguin();
kingPenguin.useWings(); // "Diving!"
