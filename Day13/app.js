let moment = require('moment');
let dt = new Date();
console.log(moment().format('LL'));

/////////////
var unique = require('array-unique');
let arr = [1,2,2,3,4,4,4,5,5,6,7,7,7,8];
console.log(unique(arr));

///////---Calculator---///////////.

function Calculator(a,b,c){
    if(c == "+"){
        console.log("Add - " + (a + b));
    } else if(c == "-") {
        console.log("Subtraction - " + (a - b));
    } else if (c == "*"){
        console.log("Multipilaction - " + (a * b));
    } else if (c == "/"){
        console.log("Divition - " + (a / b));
    } else {
        console.log("Put Valid input");
    }
}
Calculator(2,3,"+");
Calculator(7,3,"-");
Calculator(2,3,"*");
Calculator(6,2,"/");
Calculator(1,2,4);

let Calculator1 = {
    Add(a,b){
        console.log(a+b);
    },
    sub(a,b){
        console.log(a-b);
    }
}

Calculator1.Add(5,6);
Calculator1.sub(5,6);



