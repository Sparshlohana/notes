// In last chapter, we learned about event loop in node js. We learned how event loop is responsible for handling asynchronous operations in node js. We also learned about 4 important phases of event loop.
// In the first phase of event loop, callback function attached to expired timer gets stored. Once the main thread is empty, those callbacks will push to the main thread for execution.
// In second phase, callbacks related to I/O operations are stored.
// In the third phase, callbacks related to immediate timers are stored.
// In the fourth phase, all the close callbacks are stored.
// And apart from these four phases/callback queues, we also have two more callback queues which are microtask queue where the callback functions attached to promises are stored and the last one is next tick queue where the callback functions attached to process.nextTick() method are stored.

// Lets understand the practical implementation of event loop in node js with the help of an example.
// console.log('Start');
// console.log('End');
// Here both these lines of code will be executed synchronously. They will directly get executed in the main thread. So, the output will be:
// Start
// End

// Lets include a timer function in between these two lines of code.
// console.log('Start');

// // Stores in first phase of event loop
// setTimeout(() => {
//     console.log('Timer');
// }, 0);

// console.log('End');
// This setTimeout function is an asynchronous function.
// When we run this node js program, first of all, all the top level codes will be executed.
// Here, first console.log('Start') will be executed and then setTimeout function will be executed asynchronously so it will run in the background, since it will run in background, it will not block the main thread. So, the next line of code will be executed which is console.log('End').
// setTimeout function will be stored in the first phase of event loop. Once the main thread is empty, this callback function will be pushed to the main thread for execution.
// So first we will see "Start" in the console, then we will see "End" and once the execution of all the top level code is done, then the event loop will start. When the event loop starts, it will go to the first phase of event loop.
// In the first phase of event loop, since we have specified the time in setTimeout function as 0, the setTimeout will expire immediately.
// Since it is going to expire immediately, the callback function attached to it will be pushed to callback queue of the first phase of event loop immediately.
// Once the execution of all the top level code is done, the event loop will start. It will go to the first phase, it will find the callback function attached to setTimeout waiting for its execution. So, it will push that callback function to the main thread for execution.
// So the output will be:
// Start
// End
// Timer

// Lets add a setImmediate function in the code.
// console.log('Start');

// // Stores in first phase of event loop
// setTimeout(() => {
//     console.log('Timer');
// }, 0);

// // Stores in third phase of event loop
// setImmediate(() => {
//     console.log('Immediate');
// });

// console.log('End');

// Here, first console.log('Start') will be executed and then setTimeout function will be executed asynchronously so it will run in the background, since it will run in background, it will not block the main thread. Then setImmediate function will also be executed asynchronously so it will run in the background, since it will run in background, it will not block the main thread. So, the next line of code will be executed which is console.log('End').
// Here, in this program we do not have any I/O operations so the second phase of event loop will be empty.
// Here, when the event loop starts, it will go to the first phase of event loop. In the first phase of event loop, since we have specified the time in setTimeout function as 0, the setTimeout will expire immediately. Since it is going to expire immediately, the callback function attached to it will be pushed to main thread for execution. Then it will go to the second phase of event loop, since we do not have any I/O operations, the second phase of event loop will be empty. Then it will go to the third phase of event loop, since we have setImmediate function, it will be stored in the third phase of event loop. So, the callback function will be pushed to the main thread for execution.
// Here is the catch, we have set the timer of the setTimeout function as 0, so it will expire immediately and for setImmediate, we don't have to pass any timer value as it expires immediately.
// In our code, both the setTimeout and setImmediate will expire immediately. But according to node js documentation, setImmediate should always expire before any timeout.
// In our example, setImmediate should expire before the setTimeout. But it is not always the case. This is a bug, which is already known in node js. Because of this, you might see the output in different order. Sometimes you might see the output as:
// Start
// End
// Timer
// Immediate

// Sometimes you might see the output as:
// Start
// End
// Immediate
// Timer


// Lets add an I/O operation in the code.
// const fs = require('fs');
// console.log('Start');

// // Stores in first phase of event loop
// setTimeout(() => {
//     console.log('Timer');
// }, 0);

// // Stores in second phase of event loop
// fs.readFile(`${__dirname}/input.txt`, 'utf-8', (err, data) => {
//     console.log(data);
// });

// // Stores in third phase of event loop
// setImmediate(() => {
//     console.log('Immediate');
// });

// console.log('End');

// When this code is executed, first of all, all the top level codes will be executed. So the first output will be "Start" and the second output will be "End".
// Since the top level code is finished executing, the event loop will start. It will go to the first phase of event loop. In the first phase of event loop, since we have specified the time in setTimeout function as 0, the setTimeout will expire immediately. Since it is going to expire immediately, the callback function attached to will already waiting in the callback queue of the first phase of event loop. So, it will be pushed to the main thread for execution.
// So the third output will be "Timer".
// Then event loop will go to the second phase of event loop. In the second phase of event loop, we have an I/O operation which is fs.readFile(). I/O tasks are performance intensive. They are not going to complete there job immediately. They will take some time.
// Our readFile method will take some time to read the file. It is not going to finish immediately. So the callback function of the IO will not be pushed to the callback queue of the second phase of event loop until the I/O operation is completed. In this case until the input.txt file is read.
// By the time the I/O operation is completed, the event loop will go to the third phase of event loop. As I/O is time taking its still not pushed to the callback queue of the second phase of event loop. So, event loop will go to the third phase of event loop. In the third phase of event loop, we have setImmediate function. So, the callback function of setImmediate will be pushed to the main thread for execution.
// So the next output will be "Immediate".
// Now the event loop will go to the 4th phase of event loop. In the 4th phase of event loop, we have close callbacks. Since we do not have any close callbacks in our code, this phase will be empty.
// Now one tick of event loop is completed.
// Now event loop will check, if there are any timer related tasks or I/O related tasks waiting for its execution. Now our I/O operation is completed. So the callback function of I/O operation will be pushed to the callback queue of the second phase of event loop.
// Event loop will start the next tick. It will go to the first phase of event loop. In the first phase of event loop, it will be empty as all the timer related tasks are already executed. So event loop will move to the next stage.
// Now, in the second phase, we have the callback function of I/O operation waiting for its execution. So, it will be pushed to the main thread for execution.
// Now we will see the content of the input.txt file in the console.
// So the final output will be:
// Start
// End
// Timer
// Immediate
// File read successfully


// Lets modify our program.
// const fs = require('fs');
// console.log('Start');

// // Stores in second phase of event loop
// fs.readFile(`${__dirname}/input.txt`, 'utf-8', (err, data) => {
//     console.log(data);

//     // Stores in first phase of event loop
//     setTimeout(() => {
//         console.log('Timer');
//     }, 0);

//     // Stores in third phase of event loop
//     setImmediate(() => {
//         console.log('Immediate');
//     });
// });

// console.log('End');

// Firstly, the top level code will be executed. So the first output will be "Start" and the second output will be "End". Now we don't have any more top level code to execute. So the event loop will start. When the event loop starts, it will go to the first phase, at the top level, we don't have any timer related tasks. SO we can say that first phase is empty.
// Now the event loop will move to the second phase.
// Lets say that by that time, readfile has completed its job. So the callback function of the I/O operation will be pushed to the callback queue of the second phase of event loop. Since event loop is on 2nd phase, it will push the callback function of I/O operation to the main thread for execution.
// In the main thread, the callback function of I/O operation will be executed.
// First it will log the content of the input.txt file. So the next output will be the File read successfully
// Then it will move to the next line, in that line, we are using setTimeout function. We already know that setTimeout is an asynchronous function. It will execute in the background. Since the timer is 0, it will expire immediately. The callback function of setTimeout will be pushed to the callback queue of the first phase of event loop.
// Then the next line of code is setImmediate function. It will also expire immediately. Callback function of setImmediate will be pushed to the callback queue of the third phase of event loop.
// Event loop will now move to the third phase. In the third phase, it will find the callback function of setImmediate waiting for its execution. So it will push that callback function to the main thread for execution.
// So the next output will be "Immediate".
// Now the event loop will move to the fourth phase. In the fourth phase, we don't have any close callbacks. So this phase will be empty.
// Now one tick of event loop is completed.
// Now event loop will check, if there are any timer related tasks or I/O related tasks waiting for its execution. Now our setTimeout function is waiting for its execution.
// Event loop will start the next tick. It will go to the first phase of event loop. In the first phase of event loop, it will find the callback function of setTimeout waiting for its execution. So it will push that callback function to the main thread for execution.
// So the next output will be "Timer".
// So the final output will be:
// Start
// End
// File read successfully
// Immediate
// Timer

// We already know about next tick queue and microtask queue. Lets see how they work.
// Lets add a process.nextTick() function in the code.
const fs = require('fs');
console.log('Start');

// Stores in second phase of event loop
fs.readFile(`${__dirname}/input.txt`, 'utf-8', (err, data) => {
    console.log(data);

    // Stores in first phase of event loop
    setTimeout(() => {
        console.log('Timer');
    }, 0);

    // Stores in third phase of event loop
    setImmediate(() => {
        console.log('Immediate');
    });

    // Stores in next tick queue
    process.nextTick(() => {
        console.log('Next Tick');
    });
});

console.log('End');

// Firstly, the top level code will be executed. So the first output will be "Start" and the second output will be "End". Now we don't have any more top level code to execute. So the event loop will start. When the event loop starts, it will go to the first phase, at the top level, we don't have any timer related tasks. SO we can say that first phase is empty.
// Now the event loop will move to the second phase.
// Lets say that by that time, readfile has completed its job. So the callback function of the I/O operation will be pushed to the callback queue of the second phase of event loop. Since event loop is on 2nd phase, it will push the callback function of I/O operation to the main thread for execution.
// In the main thread, the callback function of I/O operation will be executed.
// First it will log the content of the input.txt file. So the next output will be the File read successfully
// Then it will move to the next line, in that line, we are using setTimeout function. We already know that setTimeout is an asynchronous function. It will execute in the background. Since the timer is 0, it will expire immediately. The callback function of setTimeout will be pushed to the callback queue of the first phase of event loop.
// Then the next line of code is setImmediate function. It will also expire immediately. Callback function of setImmediate will be pushed to the callback queue of the third phase of event loop.
// Then the next line of code is process.nextTick() function. It will be pushed to the next tick queue.
// Now the 2nd phase of event loop is completed. As we already know that next tick queue is executed after the completion of the current phase of event loop. So the next tick queue will be executed after the completion of the second phase of event loop.
// So the next output will be "Next Tick".
// Now the event loop will move to the third phase. In the third phase, it will find the callback function of setImmediate waiting for its execution. So it will push that callback function to the main thread for execution.
// So the next output will be "Immediate".
// Now the event loop will move to the fourth phase. In the fourth phase, we don't have any close callbacks. So this phase will be empty.
// Now one tick of event loop is completed.
// Now event loop will check, if there are any timer related tasks or I/O related tasks waiting for its execution. Now our setTimeout function is waiting for its execution.
// Event loop will start the next tick. It will go to the first phase of event loop. In the first phase of event loop, it will find the callback function of setTimeout waiting for its execution. So it will push that callback function to the main thread for execution.
// So the next output will be "Timer".