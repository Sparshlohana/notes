// Try 1
// var x = 10;

// function getName() {
//     console.log("Hello world");
// }

// getName();
// console.log(x);


// Try 2
// getName();
// console.log(x);
// var x = 10;

// function getName() {
//     console.log("Hello world");
// }
// What do you expect to see here...!?
// Right now we are trying to access the variables even before initializing it. In most of the programming languages this will result to an error.

// After running the code we realized that we are not getting any error. So what is happening here...!?
// We are getting Hello world for the getName() function execution and undefined for the console.log(x) statement. Which means getName() function was somehow able to access the function and in the case of x, the output was undefined.


// Try 3
// getName();
// console.log(x);

// function getName() {
//     console.log("Hello world");
// }
// Here we have completely removed the variable x. So what do you expect to see here...!?
// After running the code we realized that we are getting Hello world for the getName() function execution and ReferenceError: x is not defined for the console.log(x) statement. Which means getName() function was somehow able to access the function and in the case of x, the output was ReferenceError: x is not defined.
// Before it was UNDEFINED but now it is NOT DEFINED. So what is the difference between these two...!? Is it just a same thing?


// Let go back to Try 2 which means lets bring var x = 10; back and try to understand what is happening here.
// This all is happening because of the concept of HOISTING.

// Hoisting is a JavaScript mechanism by which you can access variables and functions even before declaring it. We can access it without getting any error.
// Wherever var x = 10 is present in the program, it doesn't matter, we can just access it anywhere in the program.


// Try 4

// // getName();
// // console.log(x);
// var x = 10;

// function getName() {
//     console.log("Hello world");
// }

// console.log(getName);
// Here we are just consoling the getName function, Note we are not calling it. So what do you expect to see here...!?
// It prints the function itself.


// Try 5

// console.log(getName);
// var x = 10;

// function getName() {
//     console.log("Hello world");
// }
// Here we move the console.log(getName) statement above the function definition. So what do you expect to see here...!?
// Remember in the case of var x = 10, we were getting undefined. What will we get for getName...!? Undefined!? No, we will get the function itself.

// In case of x it was undefined, while in case of getName it was the function itself. Why is it so...!?
// This is very weird thing in JavaScript.
// Though this is only weird because we don't know the behind the scenes of JavaScript. But once we know the behind the scenes of JavaScript, this will not be weird anymore.

// Remember in the last chapter, when we run a Javascript program, a global execution context is created which is created in 2 stages: In which the first one was memory creation phase. The answer to this question lies in the memory creation phase.


// Lets get back to Try 1 and try to understand what is happening here.
// var x = 10;

// function getName() {
//     console.log("Hello world");
// }

// getName();
// console.log(x);

// Even before the Javascript engine starts executing the code, it first goes through the code and checks for the variables and functions and allocates the memory for it.

// Now lets go to the source tab in console to understand what is happening here.
// Lets put a debugger before the first line of the code and run the code.
// Before even the program start executing, x is stored with undefined value. And getName is stored with the function definition. You can see that in the source tab.

// if we now keep getName and consoles in the top of the code. Then we put the debugger, we can still see that x is stored with undefined value and getName is stored with the function definition.

// If we remove var x = 10; from the code and then place the debugger, then we will get an error when we run the program. Because x is not defined.

// If we change the function definition to arrow function, then we will get an error when we run the program. Error: getName is not defined. This is because when a function is stored in the form of arrow function, it is stored as a variable. And we know that variables are stored with undefined value by default.


// Now let us see the practical of global execution context and call stack in the browser.
// Let us take the example of Try 1.
// We'll place debugger in different parts of the code, and see what is happening in the call stack.
// When the program gets inside the getName function, then a new execution context is created and pushed into the call stack. And when the function returns, the execution context is popped off from the call stack.
// We can see that in the call stack area inside of call stack.