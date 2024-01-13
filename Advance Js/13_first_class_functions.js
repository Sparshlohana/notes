// Function statement
// function a() {
//     console.log('Hello World!');
// }
// a();
// This way of creating a function is called function statement

// function expression
// let a = function () {
//     console.log('Hello World!');
// };
// a();
// You can assign a function to a variable. This is called function expression
// Function acts like a value. In many programming languages, this is not possible.

// Difference between function statement and function expression
// The main difference is hoisting.
// We can call a function before it is defined in function statement.
// But we cannot call a function before it is defined in function expression.

// function declaration
// It is same as function statement. It is also called function declaration.

// Anonymous function
// function () {
//     console.log('Hello World!');
// }
// A function without a name is called anonymous function.
// They do not have their own identity.
// If you do it just like I have done it above, it will give you an error.
// If you can't give a name to a function statement, how will you use it?
// They are used when they are used as values, like you can assign them to a variable.
// let a = function () {
//     console.log('Hello World!');
// };
// a();
// Here the function statement is anonymous. It is assigned to a variable.

// Named function expression
// It is exactly like function expression, but it has a name.
// let a = function abc() {
//     console.log('Hello World!');
// };
// a();
// This is a named function expression.
// If you call abc(), it will give you an error.
// It is use when you have to access the function inside the function itself.
// let a = function abc() {
//     console.log(abc);
// };
// a();

// Difference between parameters and arguments
// Parameters are the variables in the function definition.
// There are the local variables of the function.
// They cannot be accessed outside the function.
// When you call a function, you pass arguments.
// Arguments are the values that are passed to the function.
// They are assigned to the parameters of the function.
// function a(parameter) {
//     console.log(parameter);
// }
// a('argument');
// Lot of people get confused between parameters and arguments.

// First class functions
// function a(fun) {
//     console.log(fun);
// }
// a(function () {
//     console.log('Hello World!');
// });
// or
// function a(fun) {
//     console.log(fun);
// }
// function xyz() {
//     console.log('Hello World!');
// }
// a(xyz);
// We can even return a function from a function.
// function a() {
//     return function () {
//         console.log('Hello World!');
//     };
// }
// console.log(a());
// So what is first class functions?
// The ability to use functions as values, arguments and return values is called first class functions.
// This is not possible in many programming languages.
// In JavaScript, functions are first class functions.
// This is a very powerful feature of JavaScript.
// This is the reason why JavaScript is used in functional programming.

// If you read an article or a book on functional programming, you will hear that "functions are first class citizens"
// It means that functions are first class functions.
// Its just a fancy way of saying that functions are first class functions.

// Arrow functions
// Arrow functions are a new way of writing functions.
// They are introduced in ES6/Ecmascript 2015.
// We will learn about arrow functions in upcoming chapters.