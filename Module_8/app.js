console.log("Hello Developers!");

//Question 1: Array
console.log("\nArray push and pop methods:");
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

//Question 2: Array Methods
console.log("\nArray map multiplication method:");
const numbers = [10, 20, 30, 40, 50];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);
console.log(numbers);

const bigNumbers = numbers.filter(num => num > 25);
console.log(`Numbers greater than 25: ${bigNumbers}`);



//Question 3: Object
console.log("\nObject properties and methods:");
const student = {
    name: "Rahim",
    age:22
};

console.log(Object.keys(student));
const hasAge = student.hasOwnProperty("age");
console.log(hasAge);

//Question 4: Spread Operator
console.log("\nSpread operator to combine arrays:");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array = [...array1, ...array2];
console.log(array);

//Question 5: Rest Parameter
console.log("\nRest parameter to sum numbers:");
function sum(...numbers){
let total = 0;
for(let num of numbers){
    total += num;
}
return total;
}
const myNum = sum(10, 20, 30);
console.log(myNum);
console.log(sum(5, 15, 25, 35));

//Question 6: Hoisting
console.log("\nHoisting example:");
//What will be the output of the following code?
var ans = "we get an undefined because of hoisting. The variable declaration is hoisted to the top but not the assignment.";
console.log(a);
var a = 10;
console.log(ans);