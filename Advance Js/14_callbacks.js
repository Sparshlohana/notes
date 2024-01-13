// What is a callback function?
// As we already now know, that functions are first class functions in JS.
// That means, you can take a function and pass it to another function. And when you do so, it is called a callback function.
// A callback function is a function that is passed to another function as a parameter and the callback function is called inside the function body.
// Callback functions are very popular in JS.
// They gives us access to whole asynchronous world of JS in a single threaded language.

// As you already know that JS is a single threaded language. That means, it can do one thing at a time.
// It is synchronous in nature.
// It can only do one thing at a time and in a specific order.

// But with the help of callback functions, we can do asynchronous tasks in JS.

// Let's see an example of callback function.
// function x(y) {
//     y();
// }
// x(function y() {
//     // this is a callback function
//     // this function is passed as a parameter to another function
//     // and then it is called inside the function body
//     console.log("I am a callback function");
// });
// Why this function is called a callback function?
// You can think of it as you call this function sometime later in the future in your code. It is not called right now. We have passed y to x, now it is upto x when it wants to call y. That's why it is called a callback function.
// Lets see how it is used in asynchronous tasks.
// The most popular example of asynchronous task is setTimeout function.
// setTimeout(function () {
// console.log("I am a callback function");
// }, 1000);
// The first parameter is a callback function that means it is passed to setTimeOut and it is called sometimes else in the program and the second parameter is the time in milliseconds after which the callback function will be called.
// Lets combine both of them.

// setTimeout(() => {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");
// });

// As we already know that, JS is single threaded. so it will run line by line.
// First thing that happens is register setTimeout function. Settimeout will take this function and store it in a separate space and it will attach a timer to it for 5000 milliseconds. As we already know that js wont wait for 5000 milliseconds. It will move to the next line.
// That is why I say that callback functions give us power to do asynchronous tasks in JS. It does not wait for the callback function to be called. It will move to the next line. 
// Whatever we need to do after 5000 milliseconds, we will do it inside the callback function. It will be executed later in the future.
// Now it goes to function definition of x. It will store this function in a separate space and it will move to the next line.
// Then it will call x function. It will pass function y as a parameter to x. It will go to the function body of x. It will print x and then it will call y. It will go to the function body of y and it will print y.
// After that, it will go to the next line. It will print timer after 5000 milliseconds.

// This setTimeout asynchronous nature is not possible without callback functions.

// Let's go and see how it looks inside the browser.
// Lets go to the browser and open the console.
// lets go to the sources tab and put a debugger on all console.log statements.
// Now lets refresh the page.
// Firstly the code will call on console.log("x"). Then it will call y function. When the code stops in line console.log("y"), we can see in the call stack that we have global, x and y function in it, but there is no setTimeout in it. When we click next, the call stack is empty, but the setTimeout magically appears from somewhere, and it is called. Finally 5000 milliseconds has passed and the callback function is called.

// Javascript has only one call stack which is also called main thread. Everything runs in this main thread. If you run any of the above function, x, y or setTimeout, they'll run in call stack only.

// If any operation blocks the call stack, then it is called a blocking the main thread. It is a very bad practice to block the main thread. Because if you block the main thread, then the whole application will be blocked. The whole application will be unresponsive. The user will not be able to do anything. The user will not be able to click on any button or do anything. The user will think that the application is not working. So, it is a very bad practice to block the main thread.

// Suppose, you have a function that takes 10 seconds to execute. If you call that function, then the main thread will be blocked for 10 seconds. The user will not be able to do anything for 10 seconds. That is why we say that we should never block the main thread. That is why you have to use asynchronous functions in JS, just like setTimeout.

// Lets deep dive into event listeners.
// lets create a button in html and give it an id of btn.
// Now lets attach a click handler on this button.
// document.getElementById("btn").addEventListener("click", function abc() {
//     console.log("clicked");
// });
// What is this function?
// This is a callback function. It is passed to addEventListener and it is called sometime later in the future.
// What does this function do? When does this function run?
// This function runs when the button is clicked.
// When javascript sees this function, it will pickup this btn and attach an event listener which is called click event listener. It will attach this function to the click event listener. It will not run this function right now. It will run this function when the button is clicked. That is why it is called a callback function. It will be stored somewhere in the memory and it will be called sometime later in the future.

// Lets go in the browser and see how it looks.
// We can see that when we click on the button, it prints clicked in the console.
// Now when I put a debugger on the console.log statement, we can see that the call stack is empty. But when I click on the button, the call stack is not empty. It has global and abc function in it. That means, when I click on the button, the abc function is called. That is why it is called a callback function.

// Let us see an example of closure with event listeners.
// Suppose we have to count how many times the btn has clicked.
// We can do it like this.
// let count = 0;
// document.getElementById("btn").addEventListener("click", function abc() {
//     count++;
//     console.log(count);
// });
// But using global variables is not a good practice. It is not secure. Anyone can access it from outside.
// How can we make a closure and make count variable secure?
// We can just wrap this whole thing inside a function.
// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("btn").addEventListener("click", function abc() {
//         count++;
//         console.log(count);
//     });
// }
// attachEventListeners();
// Now this callback function has formed a closure over count variable. Now this count variable is secure.

// Lets go to the browser and see how it looks.
// We can see that when we click on the button, it prints 1 in the console. When we click again, it prints 2 in the console. That means, it is working fine.
// Now when I put a debugger on the console.log statement, we can see that the call stack is empty. But when I click on the button, the call stack is not empty. It has global and abc function in it. That means, when I click on the button, the abc function is called.
// Now when I click on the button, the count variable is incremented and it prints 1 in the console. When I click again, the count variable is incremented and it prints 2 in the console. That means, the count variable is secure. It is not accessible from outside. It is only accessible inside the abc function. That is why it is called a closure.
// Now when the code stops, we can see that out call back function has formed a closure with attachEventListeners function. That means, the count variable is secure.
// It remembers the value of count and whenever the button is clicked, it increments the value of count and prints it in the console.
// Now lets go to elements tab and click on the button tag.
// Now, we'll go to event listener tab and we can see that there is a click event listener attached to this button. When we see the handler inside event listener, we can see that it is abc function. That means, the abc function is attached to the click event listener.
// We can even see scope inside it, we can see that it has global scope and a closure over count variable

// Garbage collection and remove event listener
// First of all let me tell you, even listeners are heavy. They take a lot of memory. Whenever you attach they will form a closure over the variables that are used inside them. So, they will take a lot of memory.
// Even when the call stack is empty, we are not executing any code, but still the event listener is attached to the button. It does not free up the memory. It is still there in the memory because we never know when someone will click on the button, so we eventually need this button
// In this case, we cannot free up this extra memory, that is why event listeners are heavy. So if we have 1000s of buttons, then we'll have 1000s of event listeners attached to them then our page can get a lot slower. That is why we should remove the event listeners when we don't need them.
// If we remove the event listener, they will be garbage collected. They will be removed from the memory.
