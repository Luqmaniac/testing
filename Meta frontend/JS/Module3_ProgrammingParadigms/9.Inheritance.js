//Inheritance model revolves around prototype.
//In JS prototype is an object that can hold properties to be shared with other objects.

var bird = {
    hasWings : true,
    canFly : true,
    hasFeathers: true
} 


//Create new object & take the bird object above & inherite its code.
var eagle = Object.create(bird)
console.log("eagle has wings:", eagle.hasWings)
console.log("eagle can fly:", eagle.canFly)
console.log("eagle has feathers:", eagle.hasFeathers)


/*
 JS starts with the object itself to look for properties to work on,
 If it can't find it in the object, it will look up on it's prototype.
 It doesn't look futher of it finds the property on the immediante object.
 This makes for a simple mechanism for overriding inheritance properties.
*/

var penguin = Object.create(bird)
penguin.canFly = false //This is to state penguin cannot fly. This override only change the canFly boolean to false.
console.log("penguin has wings:", penguin.hasWings)
console.log("penguin can fly:", penguin.canFly)
console.log("penguin has feathers:", penguin.hasFeathers)