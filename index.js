// console.log('kya haal');

function run(){
    console.log("running");
}
let bhag=run();
 
// agar hum run function ko function block k upar bhi invoke keroege tab bhi function kam kerta hai because of hoisting 
// and hoisting is the process of moving all the function declaraton at the top of the files  done automatically by js engine

// function assignment  in this function is assigned to a variable hoisting does not support the function assignment
 let start =function walk()
 {
    console.log("walking");
 }

 start();

//  rest operator
function sum(...val)
{
    console.log(val);
}
sum(1,2,3,4,5,6,7,8,9);

let person={
    fName:'Love',
    lName:'Babbar'
};

function val()
{
    return `${person.fName} ${person.lName}`;
}

console.log(val());


// Error Handeling


// Reducing an Array 
// reduce method 
let arr=[1,2,4,5,6,8,9];
let total=arr.reduce((accumulator,current ) => accumulator+current,);
console.log(total);