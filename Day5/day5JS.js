swapTwoVariables()
lastDigit()
sumNum()
checkPOorNe()
printEven()
printOdd()

//Swap Two Variables
function swapTwoVariables(){
    var a = 4;
    var b = 7;
    var c;

    c = a;
    a = b;
    b = c;
        console.log("a = "+a +", b = "+b);    
}

//Print the last digit
function lastDigit(){
    var a = 46418;
    var b = a.toString()
    var c = b.slice(-1)
        console.log(c);
}

//Sum of Numbers
function sumNum(){
    var sum = 0;
    for (var i = 1; i <= 99; i++) {
        sum += i;
    }
    console.log(sum);
}

//Check Number is Positive or Negative
function checkPOorNe(){
    var a = 2;
    if (a > 0){
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

//Print all even numbers 1 to 100
function printEven(){
    for (var i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

//Print all odd numbers 100 to 200
function printOdd(){
    for (var i = 100; i <= 200; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

