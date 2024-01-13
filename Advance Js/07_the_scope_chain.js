// Scopes in JavaScript are directly related to lexical environment.
// Lexical environment sounds complicated but it is a very classy concept in JavaScript.

// If you understand Lexical environment, you'll understand scopes, the scope chain, and the closures.

// Let's take a look at the following code snippet:
// function a() {

// }
// var b = 10;
// a();

// What I am trying to say is can we access the variable b inside the function a?
// So if we console.log(b) inside a function a, what do you expect to see here...!?

// function a() {
//     console.log(b);
// }
// var b = 10;
// a();

// When js engine reaches line number 2, and it tries to execute console.log(b), What will js do?
// JavaScript engine will try to find out weather b is present inside the function a or not. If it is present then it will print the value of b, if it is not present then it will go to the outer environment and try to find out the value of b.
// First javascript engine will try to find out the value of b inside the local memory of function a's execution context. If it is not present then it will go to the outer environment and try to find out in the global execution context.
// So in this case, b is not present inside the local memory of function a's execution context. So it will go to the outer environment and try to find out in the global execution context.

// This was easy to understand, now lets make it a little bit complicated.

// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// var b = 10;
// a();

// Now what do you expect to see here...!?
// Will it print 10 or will it print undefined...!?
// It can again access 10.
// But how...!? Because b is not present inside the local memory of function c's execution context. So it will go to the outer environment and try to find out in the global execution context.

// Now, lets declare a variable b inside the function a.
// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();
// Will it still print 10 or will it print undefined...!?
// Yes it can still access 10.

// Now lets try to access b outside the function a.
// function a() {
//     var b = 10;
//     c();
//     function c() {
//     }
// }
// a();
// console.log(b);
// Will it still print 10 or will it print undefined...!?
// It will print b is not defined. Because b is not present inside the global execution context.

// Here comes the concept of scope.
// Scope means where you can access a particular variable or a function in your code.

// There are 2 aspects of scope:
// 1. What is the scope of a variable or a function.
// Here, what is the scope of variable b...!?
// I.e. where can we access the variable b in our code...!?

// 2. Is b inside the scope?
// Can we access b inside c...!?

// So we can conclude that scope means where can we access a particular variable or a function in our code.

// Now let us see what is lexical environment.
// When the program is executed, a global execution context is created. And when a function is called, a new execution context is created. And when a function is called inside a function, a new execution context is created.
// A global execution context is created and is pushed to the call stack. And when a function is called, a new execution context is created and is pushed to the call stack. And when a function is called inside a function, a new execution context is created and is pushed to the call stack.

// When a new execution context is created, a lexical environment is also created.
// Lexical environment is the local memory along with its lexical environment of its parent's execution context.

// What is Lexical?
// Lexical as a term means "Hierarchy", "sequence" or "order".

// In our case, the lexical environment of function c is the local memory of function c along with the lexical environment of its parent's execution context i.e. function a's execution context along with the lexical environment of its parent's execution context i.e. global execution context.

// This way of finding out the value of a variable is called the scope chain.

// Now let us see how this happens in the browser.
// Even before the execution of the code, the global execution context is created and is pushed to the call stack.
// Then the js engine starts executing the code line by line.
// When the function a is called, it creates a new execution context for function a and is pushed to the call stack.
// Now, even before the execution starts for function a, a lexical environment is created for function a.
// The variable b is declared inside the function a. So it is stored inside the local memory of function a's execution context.
// Firstly, the variable b is set to undefined and the function c is stored as it is.
// After the start of execution of function a, the variable b is set to 10.
// Then another function c is called!
// So a new execution context is created for function c and is pushed to the call stack.
// Now, in the scope section of source tab, we can see that the lexical environment of function c is the local memory of function c along with the lexical environment of its parent's execution context i.e. function a's execution context along with the lexical environment of its parent's execution context i.e. global execution context.
// Now inside the function c, the variable b is not present inside the local memory of function c's execution context. So it will go to the outer environment and try to find out in the in the lexical environment of function a.
// Now we got the value of b inside the memory space of execution context of function a.
// so the console.log(b) statement inside the function c will print 10.
// Now, as the execution of function b is completed, it is popped out of the call stack.
// Now as the execution of function a is completed, it is popped out of the call stack.
// Now, the program comes to an end and global execution context is also popped out of the call stack.