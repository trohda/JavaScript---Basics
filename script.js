/*
var age = 5;

//loop while
while(age < 10){

    console.log("Your age is less than 10");
    age ++;

}

document.write("You are now over 10");
*/

//loop for
/*
for (age=5; age<10; age++){

    console.log("Your age is less than 10");

}

document.write("You are now over 10");
*/

var links = document.getElementsByTagName("a");

for ( i = 1; i <= links.length; i++){

    console.log("This is link number" + i);

}

document.write("All links are looped");

