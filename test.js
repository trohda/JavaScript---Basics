/*
var myDate = new Date();
console.log(myDate);
*/

/*

var myPastDate = new Date(1545, 11, 2, 10, 30, 50);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 50);

console.log(myPastDate);
console.log(myFutureDate);

*/

var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

//get the month of the day:
console.log(birthday.getMonth());

//get full year:
console.log(birthday.getFullYear());

//get the day of the month:
console.log(birthday.getDate());

//get the day of the week:
console.log(birthday.getDay());

//get the hour of the date:
console.log(birthday.getHours());

//get the number of milliseconds since 1st Jan 1970:
console.log(birthday.getTime());

if(birthday == birthday2){

    console.log("birthdays are equal");

}else{

    console.log("birthdays are not equal"); //not equal because these are technical two different objects


}

if(birthday.getTime() == birthday2.getTime()){

    console.log("birthdays are equal"); //

}else{

    console.log("birthdays are not equal");


}
