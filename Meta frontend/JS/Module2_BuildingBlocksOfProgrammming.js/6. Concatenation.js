
//There are 2 variales & there are 2 ways to combine them.
var greet = "Hello"
var person = "Luqman"
var laughter = "Ha-Ha-Ha"

// 1st method is just add the two variable using "+" operator.
console.log(greet + person)

//The 2nd method is using the concatenation method . This concat method accepts whatever value i want to concat or join with greet variable.
console.log(greet.concat(person)) 

//To display the number of letters in the word greet.
console.log(greet.length)

//To read each individual letters in a string starting from 0. If i input 1 then the letter "e" of "Hello" will display. This will return "e".
console.log(greet.charAt(1))

//Returns the location of the first position that matches a character. This will return number 1.
console.log (greet.indexOf("e"))

//This will finds the last match, otherwise it works the same as indexof.
console.log(greet.lastIndexOf("g"))

//The split method chops up the string into an array of substrings. It will return ['Ha', 'Ha', 'Ha'].
console.log(laughter.split("-"))

//To change casing on the string to be uppercase.
console.log(greet.toUpperCase())

//To change casing on the string to be in the lowercase.
console.log(person.toLowerCase())






