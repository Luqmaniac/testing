//Typeof operator is to check what type of data in Javascipt.

//Below are number datatype.
var test1 = typeof (84) 
console.log(test1)

var test1a = typeof (0,1,2,3)
console.log(test1a)


var test2 = typeof("Luqman")
console.log(test2) // This wil return string. As the datatype is a string.

// Below are boolean datatype
var test3a = typeof(true)
console.log(test3a)

var test3b = typeof(false)
console.log(test3b)

var test3c = typeof(1>3)

//Below are object datatype
var test4a =typeof([0,1,2,3])// arrays are considered objects in Javascript.
console.log(test4a)

var test4b  = typeof({firstproperty: 1})
console.log(test4b)

//Below are function datatype
var test5a = typeof(console.log)
console.log(test5a)

var test5b = typeof(function add2nums(){console.log(add2nums)})
console.log(test5b)