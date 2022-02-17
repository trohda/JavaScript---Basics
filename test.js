//Keyword THIS - refers to whatever object currently owns that space that we use to THIS keyword in


console.log(this); //window is an object that keyword THIS refer to

var myCar2 = {
    
    maxSpeed: 70, 
    driver:"Tomek", 
    drive:function(speed, time){
        console.log(speed * time);
    },
    test:function(){
        console.log(this);
    }

};



var myCar3 = {
    
    maxSpeed: 70, 
    driver:"Shaun", 
    drive:function(speed, time){
        console.log(speed * time);
    },
    test:function(){
        console.log(this);
        /*console.log(myCar3);  //its the same and U can use this but it have meaning in creating a function  */
    },
    logDriver:function(){
        console.log("Driver name is " + this.driver);
    }

};


myCar2.test();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50,3);
myCar3.logDriver();


