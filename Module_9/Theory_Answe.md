## <center>Answer Paper</center>
# 📑 PART A: THEORY QUESTIONS & SOLUTIONS

## 1. Execution Context 
### 📌 What is Execution Context in JavaScript?
An Execution Context in JavaScript is an environmental "box" where code is executed. When the code runs, JavaScript creates this environment in the background to handle variables, functions, and loops. Everything needed for execution is stored within this Execution Context.

### 📌 Global Execution Context vs Function Execution Context.-
**Global Execution Context (GEC):**
When a JavaScript file loads in a browser or Node.js, the engine automatically creates a Global Execution Context. It sets up the global scope, creates the global object (like window in browsers), and defines the this keyword. There is only one GEC per JavaScript file, and it remains active until the application or browser tab is closed.

**Function Execution Context (FEC):**
A Function Execution Context is created every time a function is invoked (called). It is responsible for handling that specific function's local variables, arguments, and inner operations. If a function is called multiple times, a brand new FEC is created for each individual call.


## <center>GEC VS FEC</center>

| **Global Execution Context (GEC):** | **Function Execution Context (FEC):** |
| ----------- | ----------- |
| Created when the JavaScript script file loads. | Created only when a function is explicitly invoked (called). |
| Only one GEC exists throughout the entire code execution. | Multiple FECs can exist (one for each function call). |
| Creates global variables and functions accessible from anywhere. | Creates local variables accessible only within that specific function. |
| The this keyword points to the global object (e.g., window). | The this keyword depends on how the function is called. |
| It remains in memory until the browser tab or application closes. | It is destroyed immediately after the function finishes executing. |
|  |  |


### 📌 Creation Phase and Execution Phase
**An Execution Context is executed in two main phases:**
1. **Creation Phase:** In this phase, the JavaScript engine scans the entire code to allocate memory for variables and functions before executing any code.

- Variables (var): Are stored in memory and initialized with a default value of undefined.
- Functions: The entire function declaration is stored in memory as an exact copy.
- This process of scanning and storing declarations in memory before execution is called "Hoisting". No code is actually run during this phase.

2. **Execution Phase:** In this phase, the JavaScript engine executes the code line by line (synchronously).

- It assigns actual values to the variables (replacing undefined).
- It executes functions and processes the logic of the program when it encounters a function call.

---

## 2. Event Loop
### 📌 What is the JavaScript Event Loop?
The Event Loop is a core mechanism in JavaScript that enables asynchronous programming, even though JavaScript is single-threaded.
Its main job is to constantly monitor both the Call Stack and the Callback Queue (Task Queue).

- It manages background operations like API fetches (fetch), timers (setTimeout), and user interactions.
- If the Call Stack is empty, the Event Loop takes the first task/callback from the queue and pushes it onto the Call Stack to be executed.


### 📌 Why is JavaScript called Single Threaded?
JavaScript is called a single-threaded language because it has only **one Call Stack** and **one Memory Heap.**

This means that JavaScript can execute only one line of code at a time (synchronously) and in a specific order. It cannot perform multiple operations simultaneously on the main thread.
If a long-running task blocks the Call Stack, the rest of the code has to wait, which is why JavaScript uses the Web APIs and the Event Loop to handle asynchronous tasks without blocking the main single thread.


### 📌 Relationship between Call Stack, Web APIs, Callback Queue, and Event Loop
Although JavaScript is a single-threaded language, it can perform asynchronous operations flawlessly with the help of these four key components:
- 1 Call Stack
- 2 Web APIs
- 3 Callback Queue
- 4 Event Loop

**Call Stack:** This is where the JavaScript engine keeps track of function execution. It executes code synchronously, following the LIFO (Last In, First Out) order.

**Web APIs:** Provided by the browser environment (or Node.js), these handle asynchronous tasks (like setTimeout(), fetch(), or DOM events). When the Call Stack encounters an asynchronous task, it hands it over to the Web APIs and immediately moves to the next line of code, preventing any blocking.

**Callback Queue:** Once a Web API finishes its job (for example, a 3-second timer expires or data is fetched), its callback function is sent here. The functions wait in a line (FIFO - First In, First Out) for their turn to be executed.

**Event Loop:** The Event Loop has only one continuous job: monitoring both the Call Stack and the Callback Queue. The moment the Call Stack becomes completely empty, the Event Loop quickly takes the first callback from the queue and pushes it into the Call Stack for execution. This process happens at lightspeed.

---

## 3. setTimeout() and setInterval()
### 📌 What is setTimeout() 
setTimeout() is a built-in function that executes a specific block of code or a function only once, after a certain delayed time (measured in milliseconds).
 **Example:**
```javascript
//Hello world Program
setTimeout(() => {
    console.log("Hello World "); 
}, 3000);
```

### 📌 What is setInterval()?
setInterval() is a function that repeatedly executes a specified piece of code at fixed time intervals (also measured in milliseconds). Unlike setTimeout(), it will never stop running unless it is manually cleared using clearInterval().
**Example:**
```javascript
//Digital clock program

let myInterval = setInterval(() => {
    let clock = new Date();
    let time = clock.toLocaleTimeString();
    console.log("Time is:" + time)
}, 1000);

//If need to stop at any time!!
/*
setTimeout(()=>{
clearInterval(myInterval)  ;
},10000);
*/
```


### 📌 Difference between setTimeout() and setInterval()
| **between setTimeout()** | **setInterval()** |
| ------------------------ | ------------------------ |
| Runs the code only once after the delay. | Runs the code repeatedly at fixed intervals. |
| Stops automatically after execution. | Keeps running infinitely until manually stopped. |
| Uses clearTimeout() to cancel before it runs. | Uses clearInterval() to stop the infinite loop. |
| Used for delayed tasks like: alert popups. | Used for repeating tasks like: clocks, countdowns. |
|  |  |

---


## 4. Callback Functions
### 📌 What is a Callback Function?
A **Callback Function** is a function that is passed as an argument into another function (often called the outer or higher-order function) to be executed later, once a specific task is completed.

### 📌 Why are callbacks used?
In JavaScript, callback functions are heavily used to handle **asynchronous operations**. For example, when fetching data from a server, JavaScript doesn't wait for the server to respond; instead, it continues running the next code. We use a callback function to tell JavaScript exactly *"what operation to perform"* once the data successfully arrives.

**Example:**
```javascript
// A function that receives another function as a parameter
function processUserData(name, callback) {
    console.log(`Processing data for: ${name}`);
    callback(); // Executing the callback function
}

// Callback Function
function sayGoodbye() {
    console.log("Task Completed! Goodbye.");
}

// Calling the function and passing 'sayGoodbye' as a callback
processUserData("Akash", sayGoodbye);

```


## 5. Promise
### 📌 What is a Promise?
A Promise is a built-in JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that is not yet known but will be available in the future.

### 📌 Explain Promise States
There are 3 State in promise:
- 1 **Pending:** The initial state. The asynchronous operation is still running, and the final result has not been reached yet.
- 2 **Fulfilled (Resolved):** The operation completed successfully, and the resolve() function was called, returning the expected data.
- 3 **Rejected:** The operation failed due to an error, and the reject() function was called, returning an error message or object.
```javascript
//A Promise who resolves after 2 seconds

const checkServer = new Promise((resolve, reject) => {
let isServerUp = true; 
setTimeout(() => {
if (isServerUp) {
resolve("Server is running smoothly!");
} else {
reject("Server is Down!"); 
}
}, 2000); 
});


//Handle both success and error using .then() and .catch().

checkServer
.then((data) => {
console.log(`Success: ${data}`); 
})

.catch((error) => {
console.log(`Error: ${error}`); 
});

```

---

## 6. Async/Await
### 📌 What is async ?
async is a keyword used to declare a function as asynchronous. An async function always returns a Promise automatically. If the function returns a value, JavaScript automatically wraps it inside a resolved Promise.

### 📌What is  await ?
await is a keyword that can only be used inside an async function. It pauses the execution of the function, signaling JavaScript to "wait until the Promise is resolved or rejected" before moving to the next line of code. This prevents the main thread from blocking while waiting for asynchronous operations (like fetching data).

### 📌 How does async/await improve code readability?
When we use multiple .then() and .catch() methods, the code becomes long, complex, and deeply nested, often leading to "Promise Hell". This makes debugging very difficult.

async/await solves this problem by allowing us to write asynchronous code that looks and behaves like synchronous code (line by line). It makes the code cleaner, much easier to read, and simpler to debug using standard try...catch blocks.
```javascript
//Converting a Promise-based example into async/await

function fetchUserData() {
return new Promise((resolve) => {
setTimeout(() => resolve("User Data Received!"), 1500);
});
}
// Old Rule to handel promise
function getOldWay() {
console.log("Start");
fetchUserData().then((result) => {
console.log(result);
console.log("End");
});
}
//getOldWay(); // Uncomment when you check


//New and using Async/await
async function getNewWay() {
try {
console.log("Start");

let result = await fetchUserData();
console.log(result);
console.log("End");
} catch (error) {
console.log(error);
}};
getNewWay();

```

### <center>Answer Finished</center>