function getAverage (a,b){

    var average = (a+b)/2;  //local variable
    console.log(average);
    return average;

}


var myResult = getAverage(7, 11);  //global variable


/*console.log(average);  //error*/

function logResults(){

    console.log("The average is " + myResult + " inside the function");


}

logResults();