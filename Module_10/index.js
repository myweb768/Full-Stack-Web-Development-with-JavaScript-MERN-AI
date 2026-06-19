console.log("MERN 16 | M-10 | Assignment")


//Function One: Defference two Arguments.
console.log("\nDefference two Arguments:")
function calculateDifference(a, b){
 return a - b;
}
console.log(calculateDifference(16, 5));

//Function Two: Define Odd Number.
console.log("\nDefine Odd Number:")
function isOdd(num){
    if(num % 2 !== 0){
        return true;
    } else{
        return false;
    }
        
}

console.log(isOdd(5))
console.log(isOdd(6))

//Function Three: Find Small number from Array.
console.log("\nFind Small number from Array:")
function findMin(arr){

    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;

}
let minarr = [3, 6, 2, 9, 12, 5, 7, 15]
console.log(findMin(minarr));

//Function Four: Make a New array for Even Number 
console.log("\nMake a New array for Even Number:")
function filterEvenNumbers(arr){
    let  EvenNum = arr.filter((evnum)=>{
        return evnum % 2 === 0
    })

    return EvenNum
    
}

let GenNum = [2, 3, 5, 6, 34, 45, 63, 56, 24, 22, 32, 33, 45, 50]

let result = filterEvenNumbers(GenNum)

console.log(result);

//Function Five: Sort Descending Arry 
console.log("\nSort Descending Arry:")
function sortArrayDescending(arr){
    return [...arr].sort((a , b)=>{ return b - a})
}

let mainnum = [ 4, 2, 5, 3, 9, 6, 7]
let sortnum = sortArrayDescending(mainnum);
console.log(sortnum)

//Function Six: Make First latter Lower Case
console.log("\nMake First latter Lower Case:")
function lowercaseFirstLetter(string){
    if(!string) return string
    return string[0].toLowerCase() + string.slice(1);
}

console.log(lowercaseFirstLetter("MYXINI"));
console.log(lowercaseFirstLetter("NagaSaki"));
console.log(lowercaseFirstLetter("TOKIYO"));

//Function Seven: Calclate Avarage Number from Array
console.log("\n Calclate Avarage Number from Array:")
function findAverage(arr){

    if(arr.length === 0 ) return 0
    let sum = 0;

    for(let i = 0; i <arr.length; i ++){
        sum += arr[i];

        
    }
   return sum / arr.length

}

let allnum = [34, 54, 83, 12, 15, 35]
let avg  = findAverage(allnum)
console.log(avg);

//Function Eight: Find Leap Year
console.log("\nFind Leap Year:")
function isLeapYear(year){
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){  
    return true
} else{
    return false
}
}
console.log(isLeapYear(1999));
console.log(isLeapYear(2000));
console.log(isLeapYear(2016));
console.log(isLeapYear(2026));