//This an example
/* Task 1: Code a Person class
 Code a Person class, with three parameters in the constructor: name, age, and energy.
 Set the default parameters in the Person class as follows:
 name = "Tom", age = 20, energy = 100
 Code two methods in the `Person` class. Name those methods `sleep()` and `doSomethingFun()`.
 The `sleep()` method should take the existing energy level and increase it by 10.
 The doSomethingFun() method should take the existing energy level and decrease it by 10.
*/

class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }        
    sleep() { this.energy += 10 }
    doSomethingFun() { this.energy -= 10 }
   
}


/* Task 2: Code a Worker class
 1) Code a sub-class, inheriting from the `Person` class, and name it `Worker`.
 2) The `Worker` class has two additional parameters in the constructor: xp (for "experience points"), hourlyWage.
 3) These properties are set to the following default values: xp = 0, hourlyWage = 10
 4) The `Worker` class has all the paramerters and methods of its super-class.
 5) Additionally, it has the `goToWork()` method, which, whenever it's run, increases the value of the `xp` property by 10.
*/

class Worker extends Person {
    constructor( name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() { this.xp += 10 }
}


/* Task 3: Code a intern object
 1) Inside the intern function instantiate the `Worker` class to code a new intern object.
 2) The intern have the following characteristics: name:Bob, age:21, energy:110, xp:0, hourlyWage10
 3) Run the `goToWork()` method on the intern object. 
 4) Then `return` the intern object.
*/

function intern() {
    let intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}
console.log(intern());


/* Task 4: Code a manager object
 1) Inside the manager function instantiate the `Worker` class to code a new `manager` object.
 2) The manager object have the following characteristics: name:Alice, age:30, energy:120, xp:100, hourlyWage:30
 3) Run the `doSomethingFun()` method on the manager object. 
 4) Then `return` the manager object. 
*/

function manager() {
    let manager = new Worker ("Alice", 30, 120, 100, 30)
    manager.doSomethingFun();
    return manager;

}
console.log(manager());






  