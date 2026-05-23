/* 
Task 1: Student Information 
Create variables to store: 
 Student Name, Age, Course Name, Is Enrolled (true/false) 
 Print all values in the console.
*/
console.log("Task 1: Student Information ");

let Name = "Hasan";
let Age = 19;
let Course_Name = "MERN Stack Development (JS) with AI";
let is_Enrolled = "true";

// console.log(student)

console.log("\n............................")

/*
Task 2: Calculator using Operators 
Create two number variables. 
Perform: Addition, Subtraction, Multiplication, Division 
Print the results. 
*/
console.log("Task 2: Calculator using Operators ");

function calc(num1,num2){

    let add = num1 + num2 ;
    let sub = num1 - num2 ;
    let mlt = num1 * num2 ;
    let dvs = num1 / num2 ;

    return {add, sub, mlt, dvs}
}

console.log(calc(8,5));
console.log("\n............................")

/*
Task 3: Loop Practice
Use a for loop to print numbers 1–10, Use a while loop to print numbers 10–1.  
*/
console.log("Task 3: Loop Practice")
console.log("This is  a for loop to print numbers 1–10")
for(let i = 1; i<=10; i++){
    console.log("This is Number: "+ i)
}
console.log("\n............................")

console.log("This is a while loop to print numbers 10–1");
let i= 10;
while(i >= 1){
console.log("This is number: " + i);
    i--;
}

console.log("\n............................")
/*
Task 6: Function Practice 
Create a named function called helloWorld() which return “Hello World”. 
*/

console.log("Hello World Finction Code");
function helloWorld(){
    return (console.log("Hello World"));
}

helloWorld();

console.log("\n............................")