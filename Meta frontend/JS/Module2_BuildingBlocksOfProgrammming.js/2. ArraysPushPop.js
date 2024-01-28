//Below is using Array Literal Syntax []
//REMEMBER! array starts from 0
var children = ["Darwish", "Quwaidir", "Waqiyd", "Nuwairon", "Nawyan"]
console.log(children[0])

var parents =["Luqman", "Munirah"]
console.log(parents[1])


//function with for-loop that accepts 2 parameters, word & match.
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //This loop exists when i is equal to the length of the word 
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('--No match found at', i)
        }
    }
}
// To find 't' in in 'test' on the array. 't' should be found at array position 0 & 3.
letterFinder('test','t')



//To add new items in an array using push() method.
var fruits = []
fruits.push("Dates")
fruits.push("Pomegranate")
fruits.push("Grapes")
console.log(fruits)

//To remove the last item from an array, use the pop() method.
fruits.pop()
console.log(fruits)

//Build a fuction & pushes them to array.
//can use console.log(arr) or just return.arr as per example below.
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
//I can save this function call to variable & name it anything
var simpleArr = arrayBuilder("Apple", "Pear", "Plum")

console.log(simpleArr)