var myArray = []; //empty array

myArray[0] = 25;

console.log(myArray);
console.log(myArray[0]);

myArray[1] = 35;
myArray[2] = true;
myArray[3] = "hello";

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[3]);


//update value 
myArray[2] = false; //update position 2

console.log(myArray);
console.log(myArray[2]);

//concept of new array
var myArray2 = [10,20,"hi",false];
console.log(myArray2);

var myArray3 = new Array(); //create new instant of array object - the same result as var myArra3 = [] 

var myArray4 = new Array(5); //we can specify how many things we want in array

//property of arrays
console.log(myArray2.length); //4

//methods of arrays
console.log(myArray2.sort()); //from   10, 20, 'hi', false     to     10, 20, false, 'hi'   
console.log(myArray2.reverse());