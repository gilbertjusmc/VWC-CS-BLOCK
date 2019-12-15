/*
Assignment:
Design your own Class, it can be anything (Player, Car, Home, Account)
Build out all your own methods and variables
Instantiate it into an Object
Show off all your object’s methods!

Bonus:
Research “inheritence”, and nested Objects
I.E., both Car and Plane objects can inherit from Vehicle
I.E., a Bank can have many nested BankAccounts and Users
Try to use them in your Classes!
*/

// Super class of Vehicle
class Vehicle {
    constructor(year, brand, model, color, price) {
        this.year = year;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    // prints to console all info on a given Vehicle
    displayInfo() {
        console.log(this.brand + " " + this.model + ` in ${this.color} trim costs: ` + "$" + this.price + "\n");
    }
    // takes in base price and calculates the sales tax in MI
    // Future feature will need to ask the user to enter their sales tax
    calcSalesTax() {
        this.price = this.price * .06 + this.price;
        console.log("$" + this.price + ` Your ${this.model} will cost this after sales tax in Michigan \n`)
    }
}

// Class of vehicle which creates a car
class Car extends Vehicle {
    oilChange() {
        console.log(`The ${this.model} is in need of an oil change soon.`)
    }
}

// Class of vehicle which creates a MotorCycle
class MotorCycle extends Vehicle {
    wheelie() {
        console.log(`The ${this.model} is now pulling a wheelie`)
    }
}


// Class of vehicle which creates an ElectricVehicle
class ElectricVehicle extends Vehicle {
    isCharging() {
        console.log(`The ${this.model} is charging.....`)
    }
}


let car1 = new Car('2019', 'Ford', 'F150', 'White', 32000);
let car2 = new Car('2019', 'Subaru', 'STI', 'Silver', 38000);

let bike1 = new MotorCycle("2017", "KTM", "SuperDuke 1290 GT", "Silver/Orange", 23000);
let bike2 = new MotorCycle("2007", "Suzuki", "GSXR 750", "Black", 3000);

let eCar1 = new ElectricVehicle("2019", "Tesla", "Model S", "Solid Black", 108600);
let eCar2 = new ElectricVehicle("????", "Tesla", "CyberTruck AWD", "Silver", 69900);

// displays all the methods that can be used
car1.displayInfo();
car1.calcSalesTax();

bike1.displayInfo();
bike1.calcSalesTax();

eCar1.displayInfo();
eCar1.calcSalesTax();


car2.oilChange();
bike2.wheelie();
eCar2.isCharging();