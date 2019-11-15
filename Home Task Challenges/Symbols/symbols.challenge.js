const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    get CARCOLOR(){
        return this[CARCOLOR];
    }
    get CARMAKE(){
        return this[CARMAKE];
    }
    get CARMODEL(){
        return this[CARMODEL];
    }
    set CARCOLOR(color){
        this[CARCOLOR]=color;
    }
    set CARMAKE(make){
        this[CARMAKE]=make;
    }
    set CARMODEL(){
        this[CARMODEL]=model;
    }
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
myCar.color = `blue`;
console.log(myCar.color);
console.log(myCar);

// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
