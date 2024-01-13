// "this" keyword is a special keyword which is reserved by javascript.
// It behaves different in different circumstances which makes "this" keyword one of the most confusing thing in javascript.

// "this" inside Global Space:
// But first things first, what is a global space?
// Like any thing you write here, which is not inside any function, is written inside global space. It is the top level.
// Eg: let a = "Hello world!"
// This a is written in global space.
// In case of global, what do you think will be the value of "this" keyword?
// you can just console.log(this) and see the output.
// console.log(this);
// The output will be a window object.
// window is a global object in javascript. It is the parent object of all the objects in javascript.
// this keyword in global space will always point to window object.
// We have already studied what is a global object?.
// Global object is an object which is accessible everywhere in the code.


// "this" inside a function:
// Now let's see what happens when we use "this" inside a function.
// function myFunc() {
//     console.log(this);
// }
// myFunc();
// It is still pointing to window object.
// We saw that "this" inside global space is pointing to global object and "this" inside a function is also pointing to global object, but the question is, is it the same?
// No, it is not same, it is different.

// "this" keyword runs differently in strict mode and non-strict mode.
// What is strict mode?
// Strict mode is a way to introduce better error handling in javascript.
// It is a way to write secure javascript.
// We'll study about strict mode in detail in future.
// For now, just know that strict mode is a way to write secure javascript.
// It can be activated by writing "use strict" at the top of the file.
// "use strict"
// function myFunc() {
//     console.log(this);
// }
// myFunc();
// Now if you run the code, you'll get undefined.
// In case of function, if you are using strict mode, "this" will point to undefined and if you are not using strict mode, "this" will point to global object.

// Why this behaves differently in strict mode and non-strict mode?
// It is because there is a thing known as "this substitution".
// According to "this substitution", if the value of "this" is undefined or null, this will replace it with global object only in non-strict mode.

// The value of "this" inside a function is also depended on how it is called.
// function myFunc() {
//     console.log(this);
// }
// myFunc(); // this will point to undefined in strict mode and window object in non-strict mode.
// window.myFunc(); // this will point to window object in both strict and non-strict mode.


// "this" inside a object method:
// let myObj = {
//     name: "Rahul",
//     myFunc: function () {
//         console.log(this);
//     }
// }
// myObj.myFunc();
// Firstly, what is the difference between a function and a method?
// When a function is a property of an object, it is known as a method.
// So, myFunc is a method of myObj.
// When we call myFunc, "this" will point to myObj.
// So, the output will be myObj.
// if we change myFunc like this:
// let myObj = {
//     name: "Rahul",
//     myFunc: function () {
//         console.log(this.name);
//     }
// }
// myObj.myFunc();
// We are accessing the name property of myObj using "this".
// So, the output will be Rahul.

// If you are talking about "this" keyword, you should know about "bind", "call" and "apply" methods.

// let student1 = {
//     firstName: "Rahul",
//     lastName: "Kumar",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// let student2 = {
//     firstName: "Rohit",
//     lastName: "Kumar"
// }

// What if we want to use fullName method of student1 for student2?
// As we know that fullName is a method of student1, so we can't use it for student2. If we do, we'll get an error.
// We can do it like this:
// student1.fullName.call(student2);
// this call takes the value of "this" keyword from the first argument.
// Here the value of this in student1.fullName will be student2.
// It is overwriting the value of this keyword.

// We will study about call, bind and apply in detail in future.


// "this" inside a arrow function:
// Arrow function does not have its own "this" keyword.
// It uses the "this" keyword of its surrounding.
// It uses the value of "this" keyword of its parent.
// let obj = {
//     name: "Rahul",
//     myFunc: () => {
//         console.log(this);
//     }
// }
// In this case the value of "this" keyword will not be obj.
// It will be enclosing lexical context.
// In this case, the enclosing lexical context is global scope.
// What is enclosing lexical scope?
// It is the scope in which the function is defined.
// In our case the obj object is defined in global scope.
// So, the value of "this" keyword will be global object.


// "this" inside a arrow function:
// let obj = {
//     name: "Rahul",
//     myFunc: function () {
//         let nestedFunc = () => {
//             console.log(this);
//         }
//         nestedFunc();
//     }
// }
// obj.myFunc();
// In this case, the value of "this" keyword will be obj.
// It is because the nestedFunc is defined inside myFunc.
// In this case the enclosing lexical scope is myFunc which is present inside obj.
// So, the value of "this" keyword will be obj.


// "this" inside a dom:
{/* <btn onclick="console.log(this)">Click Me</btn> */ }
// What do you think will be the value of "this" keyword in this case?
// It will be the button itself.
// The value inside "this" keyword within dom is the element referencing itself.
{/* <btn onclick="console.log(this.tagName)">Click Me</btn>  */ }
// We will get the tag name of the button, i.e, "button".

// "this" inside classes, constructors and prototypes:
// We will study about classes, constructors and prototypes in detail in future.

// For now this course ends here. Hope I was able to clear all the important JavaScript Advance concepts.
// I may add more concepts in future if I feel like... But for now, this is it.
// Thank you! :)