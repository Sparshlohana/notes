// Event loop is the heart of Node JS.

// In the previous chapter, we learned, when the execution of node js code starts. It starts with process inside which we get a single thread. In that single thread, all the node js code gets executed.
// The asynchronous methods provided by node js, they are handed to a thread in the thread pool amd in that thread, the asynchronous code gets executed. The thread of the thread pool is different from the main thread of the node js.

// So please remember that, all the top level code of node js gets executed in the main thread of node js. But the asynchronous code gets executed in the thread pool.

// Event loop is where all the callbacks functions wait for their execution. And when the main thread is empty, the event pushes the callback function from the callback queue to the main thread for execution.
// If the callback function is going to do some heave tasks like file reading and compression, then that callback function will be offloaded to the thread in the thread pool for execution. That callback function will not be executed in the main thread.

// Node js uses event driven architecture. It means, it is build around callback functions. We use callback functions a lot in node js.

// So what happens is, whenever something happens like when we receive an http request on node js server, when a file is finished reading or when a timer expires. All these tasks will emit an event as soon as the task is completed. An event loop basically picks up this events and store the callback functions data associated with each of these events and then it pushes all these callbacks to the main thread for execution.
// In simple words, event loop receives events each time something important happens and it is responsible for executing the callbacks in the main thread that are defined in the event listeners.

// How does all these work behind the scenes?
// Note: Event loop starts as soon as the node js application starts.
// Whenever an event will happen, event loop will store the callback function associated with that event in the callback queue.
// It will wait for the completion of the current execution of the main thread.
// When all the code in the main thread is executed, and main thread is empty, then the event loop will push the callback function from the callback queue to the main thread for execution.

// Event loop has multiple phases. Each phase has its own callback queue. The callback queue is also called as the task queue. In some articles, you will see that there is only one callback queue. But in reality, there are multiple callback queues. Each phase has its own callback queue.

// Let us understand with example.
const fs = require("fs");

setTimeout(() => {
    console.log("Timer 1 is finished");
}, 0);

fs.readFile("input.txt", (err, data) => {
    console.log("File read");
});

setInterval(() => {
    console.log("Interval");
}, 1000);

setImmediate(() => {
    console.log("Immediate");
});

fs.writeFile("output.txt", "Hello World", (err) => {
    console.log("File write");
});

socket.on('close', () => {
    console.log("Socket closed");
})

// In the first phase, the timers phase, The callback functions attached to the timer are stored. Basically, when the timer expires, callback function is stored in the callback queue of the timers phase.
// Here, we have 2 timers. One is setTimeout and the other is setInterval. So the callback functions of these timers are stored in the callback queue of the timers phase.
// When the timer expires and main thread is empty, the callback function is pushed to the main thread for execution.
// Now lets say, the timer expires when there are some other phases running, In that case, the callback of that timer will only process when event loop comes back to first phase, the timers phase.

// The callbacks in each queue are processed one by one.

// Now moving on to the second phase, The callback functions of IO related tasks are executed. Here, IO means tasks related to file reading, file writing, network requests etc.
// In this example, we have fs.readFile and fs.writeFile. So the callback functions of these tasks are stored in the callback queue of the IO phase.
// When the IO task is completed, the callback function is pushed to the main thread for execution.
// The callback functions of IO phase are executed after the timers phase.
// This is the most important phase of the event loop.
// It is the phase where most of the tasks are executed.

// Now moving on to the third phase, The callback functions of the immediate phase are executed. Here, we have setImmediate. So the callback function of setImmediate is stored in the callback queue of the immediate phase.
// SetImmediate is a type of timer. But it is executed immediately after the IO phase.
// It is executed after the IO phase.
// Basically, setImmediate is similar to setTimeout with a time of 0ms.
// So as soon as the IO phase is completed, the callback function of setImmediate is pushed to the main thread for execution.

// Now moving on to the fourth phase, The callback functions of the close events are executed. Here, we have socket.on('close'). So the callback function of the close event is stored in the callback queue of the close phase.
// Here when the web server or socket is closed, the callback function of the close event is stored in the callback queue of the close phase.
// When the web server or socket is closed, the callback function of the close event is pushed to the main thread for execution.
// The callback functions of the close phase are executed after the immediate phase.

// If there is any heavy task going, then that task is offloaded to the thread pool.

// Beside these queues, there are other queues as well.
// Microtask queue: It is used for promises. The callback functions of promises are stored in the microtask queue.
// Next tick queue: It is used for process.nextTick() function. The callback functions of process.nextTick() are stored in the next tick queue.

// Keep in mind that these two queues are not related to any phase of the event loop.
// These 2 queues are independent queues.
// If there are any callback functions in these queues, then they are executed after the current phase is completed.
// Means if there is a callback in the timers phase, then it will be executed after the timers phase is completed and then move to the next phase.
// Same thing goes for the IO phase, immediate phase and close phase.
// Same thing for the Next tick queue.

// What is process.nextTick() function?
// process.nextTick() function is used to put the callback function in the next tick queue.
// It is used to execute the callback function immediately after the current operation is completed.
// It is used to execute the callback function before the event loop continues.

// The difference between setImmediate and process.nextTick() is that, setImmediate is executed after the IO phase and process.nextTick() is executed every time each phase is completed.

// Once the event loop is completed, it starts again from the first phase, the timers phase.

// Each cycle of the event loop is called as a tick.

// Do you think that the work of event loops completes here?
// No, there is more to it.
// Now when all the cycles are completed, now its time to decide whether to continue the next tick (if left) or the program should exit.

// How does node js decide whether to continue the next tick or exit the program?
// It simply checks if there is a I/O or timer task still running in the background. If there are none, then the program will exit. If there are any, then the program will continue to the next tick.

// Here, setInterval is still running in the background. So the program will continue to the next tick.


// What not to do to avoid blocking of main thread?
// Do not use sync versions of functions in fs, crypto, zlib modules inside a callback function.
// Do not perform where complex calculations inside a callback function.
// Be careful with JSON which has a large number of JSON objects.
// Don't use to complex regular expressions (regex) inside a callback function.