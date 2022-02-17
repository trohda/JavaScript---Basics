/*

var myString = "I am a string";
var myString1 = 'I am a "fun" string';
var myString2 = 'I\'m a "fun" string';

console.log(myString);
console.log(myString1);
console.log(myString2);

*/


/*
//property of string

var myString = "I am a string";
console.log(myString.length);
*/

/*
//methods of strings

var myString = 'I\'m a "fun ninja" string';
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

console.log(myString.indexOf("string"));
console.log(myString.indexOf("ninja")); // result -1  -  doesn`t exist
if(myString.indexOf("ninja") === -1){

    console.log("The word ninja is not in the string");

}else{

    console.log("The word ninja start ot position: " + myString.indexOf("ninja"));
}
*/

var string1 = "abc";
var string2 = "efg";
var string3 = "abc";
var string4 = "ABC";
var string5 = "bcd";
var string6 = "Bcd";  

console.log(string1 === string2); //false
console.log(string1 === string3); //true
console.log(string1 === string4); //false
console.log(string1 == string4); //false
console.log(string1 === string4.toLocaleLowerCase()); //true
console.log(string1 < string5); //true -  a is before b in alphabet
console.log(string1 < string6);; //false - CAPITAL letters are grater than non capital letter
console.log(string1.toUpperCase() < string6); //true
