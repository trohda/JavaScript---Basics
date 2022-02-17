//Slice method

var str = "hello, world";

var str2 = str.slice(2, 9); //start at position 2 and end at 9
console.log(str2);

var str3 = str.slice(2); //start at position 2 and end at the end because end is not defined
console.log(str3); 

//Split method

var tags = "meat, ham, salami, pork, beef, chicken";
var tagsArray = tags.split(","); //everytime you see , add text array element

console.log(tagsArray);