
//costructor function (constructor fon new objects car):

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("Driver name is " + this.driver);
    };

}


//creating new objects Car
var myCar = new Car(70, "Tomek");
var myCar2 = new Car(50, "Ninja");
var myCar3 = new Car(90, "Shaun");
var myCar4 = new Car(170, "James Bond");

//testing
myCar.drive(30,5);
myCar3.logDriver();
