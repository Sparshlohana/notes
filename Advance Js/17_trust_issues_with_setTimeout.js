// function a() {
//     console.log('hi');
// }
// setTimeout(a, 5000);
// SetTimeout does not always wait for the given time.
// There are trust issues with setTimeout.

// It does not guarantee that it will wait for the given time.
// It may even wait for 6 seconds or even 10 seconds.
// It all depends on the call stack.

// Let us understand why this happens.
// console.log('start');
// setTimeout(() => {
//     console.log('We are in the timeout');
// }, 5000);
// console.log('end');
// The above example is same form event loop chapter.
// Let us quickly revise it.
// When we run this code, the first thing that happens is the global execution context is created.
// The global execution context is pushed to the call stack.
// Then console.log('start') starts to execute.
// It calls the browser and it internally calls the console api and prints "start".
// Now the setTimeout is called. It registers the callback function into the web api's environment.
// And it also registers the time in the timer.
// Now the console.log('end') is called.
// It calls the browser and it internally calls the console api and prints "end".
// Now the call stack is empty.

// Let us now support that we have 1 million lines of code, which takes 10 seconds to execute.
// In this case call stack will be busy for 10 seconds.
// But out timer is set to 5 seconds.
// So, after 5 seconds, the callback function is ready to be executed.
// It goes to the callback queue and it has to wait there until the call stack is empty.
// Even though the timer is set to 5 seconds, it will wait for 10 seconds.
// This is why setTimeout does not always wait for the given time.

// Let us see this in action.
// Let us block the call stack for 10 seconds.
// console.log('start');
// setTimeout(() => {
//     console.log('We are in the timeout');
// }, 5000);
// console.log('end');
// If we run this code, It will run normally as it is not blocking the call stack.
// But if we add a for loop which takes 10 seconds to execute, then it will block the call stack.
// console.log('start');
// setTimeout(() => {
//     console.log('We are in the timeout');
// }, 5000);
// console.log('end');
// for (let i = 0; i < 100000; i++) {
//     console.log(i);
// }
// We can see that it waited for more than 10 seconds and then it printed "We are in the timeout".
// This is why setTimeout does not always wait for the given time.

// What if I set to 0 seconds?
// console.log('start');
// setTimeout(() => {
//     console.log('We are in the timeout');
// }, 0);
// console.log('end');
// Can you guess what the output?
// It will be "start", "end", "We are in the timeout".
// Why? Even though we set the timer to 0 seconds, then why it waited for "start" and "end" to be printed?
// Even though we set the timer to 0 seconds, it will wait for the call stack to be empty.

// Why to use setTimeout(0)?
// When you have to display all the important things first and then display the less important things.
// You can use setTimeout(0) to display the less important things.