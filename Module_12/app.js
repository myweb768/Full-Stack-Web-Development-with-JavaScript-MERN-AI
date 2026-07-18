console.log('\nPractical Part of Assignment || Module 12\n')

//Task 1: Understanding Asynchronous Execution
console.log('Task: A program using setTimeout().\n');
function myfunc(){
    console.log('Start')
setTimeout(()=>{
    console.log('This message appears after 2 seconds.')
},2000)
    console.log('End')
}

myfunc()

/*
Explanation of why End is printed before the delayed message:
JavaScript runs on a single thread. When console.log("Start") finishes, the runtime encounters setTimeout(). Instead of pausing the program for 2 seconds, Node.js hands this timer over to the environment (libuv) and immediately proceeds to execute the next line: console.log("End").

Only after 2000ms passes does the background timer finish and drop its callback onto the execution queue to print the final message.
*/ 

//Task 2: Event Loop Demonstration

console.log('\nThe Event Loop executes the asynchronous task\n')

function evnfunc(){
    console.log('Program Started')
    setTimeout(()=>{
        console.log('Executing Delayed Task')
    },0)
    console.log('Program Finished')
}

evnfunc();

/*
Event Loop Explanation:
Even though the setTimeout delay is set to exactly 0 milliseconds, "Executing Delayed Task" always prints last.

Here is exactly how the Event Loop processed this code step-by-step:

console.log("Program Started") enters the Call Stack, prints to the terminal, and pops off.

setTimeout(..., 0) enters the Call Stack. The runtime registers the timer, hands it to the background, and the setTimeout call instantly pops off the stack.

Because the timer is 0ms, it completes instantly in the background and its inner function is immediately moved into the Callback Queue.

The main thread continues and executes console.log("Program Finished").

The Event Loop continuously watches the Call Stack. It sees that the main script has fully finished and the Call Stack is now completely empty.

Only now does the Event Loop reach into the Callback Queue, pick up our delayed task, and push it onto the main Call Stack to print "Executing Delayed Task".
*/