//Iterable in JS is any datatype that can be iterated over using a for-loop. 
// Examples are arrays & strings.

//Remember! Strings have array like behaviour but they are not array.

//arrays are iterable
var veggies = ["Onion", "Parsley", "Carrot"]

console.log(veggies.length) //will return 3 for the number of veggies
console.log(veggies[0]) //will return Onion as array starts with 0
console.log(veggies[1])//Will return Parsley

//for-loop sets the counter of i to 0 & count up (i++), below 3 which is the veggies.length, 
//it will output 0,1,2 which is Onion, Parsley & Carrot
//The exit condition for this loop is that the comparison of i is less than veggies length returns false
//console logging the veggies at the index of i
for(var i = 0; i < veggies.length; i++){
    console.log (veggies[i])
}

//strings iterate
var greeting = "Assalamualaikum"

console.log(greeting.length)
console.log(greeting[0])
console.log(greeting[1])

for(var i = 0; i < greeting.length; i++){
    console.log(greeting[i])
}