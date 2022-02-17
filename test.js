var myArray = [];
myArray [0] = 8;
myArray [0] = "hello";




var myCar = new Object(); //creating new Object
myCar.maxSpeed = 50;       //creating a properties of an object myCar
myCar.driver = "Shaun";   //creating a properties of an object myCar
console.log(myCar.driver);

myCar.drive = function(){console.log("Now driving");};
myCar.drive();



var myCar2 = {
    
    maxSpeed: 70, 
    driver:"Tomek", 
    drive:function(speed, time){
        console.log(speed * time);
    } 

};

console.log(myCar2.maxSpeed);
myCar2.drive(50,3);

