// Object or JSON Object

const user = {};
user.Name = "Sanjib";
user.Age = 30;
user.Country = "India";
user.Hobbies = ["Video Game","Leet Code"]
console.log(user)

const user1 = {"Name":"Sanjib","Age":30};
const user2 = {"Name":"Sanjib","Country":"India"}
console.log(user2);

//////push object inside array
const students = [];
const student1 = {"Name":"Shakti","Class":"10"}
//const student2 = {"aa":"bb","a1":"b1"} //new
students.push(student1);

const student2 = {"Name":"Sourav","Class":"9"}
students.push(student2);
console.log(students);

//callback function
function doSomeWork(callBackItem){
    let x = 5;
    let name= "Sanjib";
    console.log("Inisde doSomeWork function");
    callBackItem();
}

function callBackSample(){
    console.log("Welcome to Amadis");
}

console.log(doSomeWork(callBackSample));

// setTimeout, setInterval,clearTimeout, clearInterval

function demo(name, age){
    console.log(`Welcome to Amadis - ${name}`);
    console.log(`Age is ${age}`);

}

//var timeout  = setTimeout(demo,10000,"Vikash");
//clearTimeout(timeout);


var intervalFunc = setInterval(demo,2000,"Greeshma",20);
clearInterval(intervalFunc);
console.log("Clear Interval finished!");

//forEach,map,filter

const names =["Prashant","Saurav","Janani"];
//forEach(callbackfunction(value,index,array))
names.forEach((item,index,array) =>
{
    console.log(index);
    console.log(item);
    console.log(array);
});

//const names =["Prashant","Saurav","Janani","Sanjib"];
//const copyNames = [];

//for(let i = 0; i< names.length;i++){
  //  copyNames.push(names[i]);
//}
names.forEach((item)=>copyNames.push(item))
console.log(copyNames);


////MAP
const values = [1,2,3,4,5,6]
//const values_2=[] ---> For map it showes error 
//map(callbackfunction(value,index,array))
                                // for (let i=0; i<values.length; i++){
                                //     values_2.push(values[i]*3);
                                // }
values_2 = values.map(item=>item*2); //----> value_2 is new output

console.log(values);
console.log(values_2);



