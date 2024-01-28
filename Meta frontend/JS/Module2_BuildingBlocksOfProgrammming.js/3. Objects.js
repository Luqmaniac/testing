//Creating an object using dot notation.
var Luqman = {
    Overall : 77,
    Shooting : 80,
    Passing : 95,
    Header : 85,
    Stamina : 65,
    Speed : 60
}
console.log(Luqman)

//Alternative way is using bracket notation.
var Munirah = {}
Munirah["Age"] = 37
Munirah["Citizenship"] = "Singaporean"
Munirah["Religion"] = "Islam"
Munirah["Race"] = "Arab"
Munirah["How many children"] = 5

console.log(Munirah)

//Creating table object
var table = {
    legs: 4,
    color: 'Green',
    priceSGD: 450,
}
//access the entire the table object
console.log(table)

//to access individual properties
console.log(table.color)

//To change the properties of the legs on the table object
table.color= 'blue'

console.log(table)

//another way of creating object.
var table2 ={}
table2.legs = 6
table2.color = 'Brown'
table2.priceSGD = 500

console.log(table2)

//still the same way of updating any values of the table
table2.legs = 8
console.log(table2)

// Bracket notation can evaluate expression unlike dot.notation
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}