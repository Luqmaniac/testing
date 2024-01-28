/*OOP is Object Oriented Programming.
This paradigm revolves around the idea of organizing our programs..
Using objects to group related data & functionality.
You can code more efficiently by re-using existing code*/


//The 4 fundamental OOP principles: Inheritance, encapsulation, abstraction & Polymorphism.

var purchase1 = {
    shoes: 100,
    GST: 1.09,
    totalPrice: function() {
        var calulation = purchase1.shoes * purchase1.GST;
        console.log("TotalPrice", calulation);
    }
}
purchase1.totalPrice()


//purchase2 has the same code as purchase1. 
var purchase2 = {
    shoes: 200,
    GST: 1.09,
    totalPrice: function() {
        var calulation = purchase2.shoes * purchase2.GST;
        console.log("TotalPrice", calulation);
    }
}
purchase2.totalPrice()


//purchase3 have the same code as purchase1 & 2..
//...but instead of changing the calculation function name for shoes & GST..
//I can just use the "this" keyword this.  
var purchase3 = {
    shoes: 300,
    GST: 1.09,
    totalPrice: function() {
        var calulation = this.shoes * this.GST;
        console.log("TotalPrice", calulation);
    }
}

purchase3.totalPrice()


