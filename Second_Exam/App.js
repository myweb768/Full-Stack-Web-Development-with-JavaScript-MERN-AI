//Task 1. Writing a for loop for even Number

for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i)
  }
    
}

//--------------

//Task 2. Writing a reverseString Function

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
console.log(reverseString("JavaScript")); 

//----------------

//Task 3. Writing a removeDuplicates(arr) function

function removeDuplicates(arr){
 return arr.filter((item,  index)=>{ 
    return arr.indexOf(item) === index})
}

console.log(removeDuplicates([2,5,5,7,9,8,5,6,3,6,7]))

//-------------------