/* example of Functional programming (FP).
 Data can exist outside of functions.
 It can solve a problem from separating data from function.
*/


//This fuction is to calculate a shoe price with 9% GST added.
var shoes = 80
var GST = 0.09
function TotalPrice (shoes,GST){
    return (shoes * GST) + shoes 
}
var ToPay = TotalPrice(shoes,GST)
console.log(ToPay)


//currency exchange rate example
var currencySgd = 100
var currencyMyr = 0
var exchangeRate = 3.5

function convertCurrency(amount,rate){
    return amount * rate
}

currencyMyr = convertCurrency(currencySgd,exchangeRate)
console.log(currencyMyr)