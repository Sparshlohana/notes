// A module is nothing but an another script file from where we can export some values.
// Those exported values can be exported in any other script file and can be used there by simply importing them.
// So from a module, we can export some values and in another script file, we can import them and use them.

// Please not that, each file in node js is a module.
// The app.js file is also a module.

// We are already importing and using some modules in our previous chapters like http, fs, url, etc.
// These modules are the core modules of node js. These modules are provided by node js environment itself. Such modules are called core modules.

// We can also have user-defined modules which are also known as custom modules.

// We can also have third-party modules/libraries which are also known as npm modules.


// In this chapter we will learn about user-defined/custom modules.
// Custom modules are the modules which we as a developer create and use in our application.

// Let us take an example of a custom module.
// Let us assume we have to create a module which will have a function to calculate the area of a rectangle.

// Let us create a new file called rectangle.js and write the following code in it.
// const calculateArea = (length, breadth) => {
//     return length * breadth;
// }

// For now, we have only one function in this module. We can have multiple functions, variables, classes, etc in a module.
// We can export all of them and use them in any other script file.
// To export a value from a module, we use the module.exports object.
// We can assign any value to module.exports and that value will be exported from the module.

// We can export the calculateArea function from the rectangle.js module by using the following code.
// module.exports = calculateArea;

// For using this module in any other script file, we have to import it.
// We can import the module in any script file by using the require function.

// Let us create a new file called app.js and write the following code in it.
// const calculateArea = require('./rectangle');

// console.log(calculateArea(10, 20));

// In the above code, we have imported the rectangle.js module in the app.js file.
// We have used the require function to import the module.
// We have passed the path of the module to the require function.
// The require function returns the value which is exported from the module.
// We have stored the returned value in the calculateArea variable.
// We have called the calculateArea function and passed the length and breadth as the parameters.
// The calculateArea function returns the area of the rectangle and we have logged it to the console.

// In our previous chapters, we used a function called replaceTemplate function to replace the template with the product name, price, and id.
// We can create a module for this function and use it in any other script file use it.

// Let us create a new file called utilities.js and write the following code in it.
// const replaceTemplate = (temp, product) => {
//     let output = temp.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%ID%}}', product.id);
//     return output;
// }

// module.exports = replaceTemplate;

// In the above code, we have created a module called utilities.js.
// We have created a function called replaceTemplate in this module.
// We have exported the replaceTemplate function from the module.

// Now we can use this module in any other script file.

// Let us create a new file called app.js and write the following code in it.
// const replaceTemplate = require('./utilities');

// const product = {
//     name: 'Mobile',
//     price: 10000,
//     id: 1
// }

// const template = '<h2>{{%NAME%}}</h2><p>{{%PRICE%}}</p><p>{{%ID%}}</p>';

// console.log(replaceTemplate(template, product));

// In the above code, we have imported the utilities.js module in the app.js file.
// We have used the require function to import the module.
// We have passed the path of the module to the require function.
// The require function returns the value which is exported from the module.
// We have stored the returned value in the replaceTemplate variable.
// We have created a product object.
// We have created a template string.
// We have called the replaceTemplate function and passed the template and product as the parameters.
// The replaceTemplate function returns the template string with the product name, price, and id replaced and we have logged it to the console.


// We can even export multiple values from a module.
// Let us create a new file called area.js and write the following code in it.

// const calculateRectangleArea = (length, breadth) => {
//     return length * breadth;
// }

// const calculateCircleArea = (radius) => {
//     return 3.14 * radius * radius;
// }

// const calculateTriangleArea = (base, height) => {
//     return 0.5 * base * height;
// }

// To export multiple values from a module, we can use the following code.
// module.exports = {
//     calculateRectangleArea,
//     calculateCircleArea,
//     calculateTriangleArea
// }

// In our app.js file, we can import the module and use the exported values as follows.
// const area = require('./area');

// console.log(area.calculateRectangleArea(10, 20));
// console.log(area.calculateCircleArea(10));
// console.log(area.calculateTriangleArea(10, 20));

// In the above code, we have imported the area.js module in the app.js file.

// Or we can destructure the imported module and use the exported values as follows.
// const { calculateRectangleArea, calculateCircleArea, calculateTriangleArea } = require('./area');

// console.log(calculateRectangleArea(10, 20));
// console.log(calculateCircleArea(10));
// console.log(calculateTriangleArea(10, 20));

// In real world applications, We generally use the destructuring method to import the module and use the exported values.


// Task 1
// Create a module called math.js.
// This module should have the following functions:
// add: This function should take two numbers as parameters and return the sum of those numbers.
// subtract: This function should take two numbers as parameters and return the difference of those numbers.
// multiply: This function should take two numbers as parameters and return the product of those numbers.
// divide: This function should take two numbers as parameters and return the division of those numbers.
// Now import this module in your app.js file and use the exported functions.
// Solution
// math.js
// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// const multiply = (a, b) => {
//     return a * b;
// }

// const divide = (a, b) => {
//     return a / b;
// }

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }

// app.js
// const { add, subtract, multiply, divide } = require('./math');

// console.log(add(10, 20));
// console.log(subtract(10, 20));
// console.log(multiply(10, 20));
// console.log(divide(10, 20));


// Task 2
// Create a module called greet.js.
// This module should have the following functions:
// greet: This function should take a name as a parameter and return a greeting message.
// greetInHindi: This function should take a name as a parameter and return a greeting message in Hindi.
// greetInSpanish: This function should take a name as a parameter and return a greeting message in Spanish.
// Now import this module in your app.js file and use the exported functions.
// Solution
// greet.js
// const greet = (name) => {
//     return `Hello ${name}`;
// }

// const greetInHindi = (name) => {
//     return `नमस्ते ${name}`;
// }

// const greetInSpanish = (name) => {
//     return `Hola ${name}`;
// }

// module.exports = {
//     greet,
//     greetInHindi,
//     greetInSpanish
// }

// app.js
// const { greet, greetInHindi, greetInSpanish } = require('./greet');

// console.log(greet('John'));
// console.log(greetInHindi('John'));
// console.log(greetInSpanish('John'));


// Task 3
// Create a module called rectangle.js.
// This module should have the following functions:
// calculateArea: This function should take length and breadth as parameters and return the area of the rectangle.
// calculatePerimeter: This function should take length and breadth as parameters and return the perimeter of the rectangle.
// Now import this module in your app.js file and use the exported functions.

// Solution
// rectangle.js
// const calculateArea = (length, breadth) => {
//     return length * breadth;
// }

// const calculatePerimeter = (length, breadth) => {
//     return 2 * (length + breadth);
// }

// module.exports = {
//     calculateArea,
//     calculatePerimeter
// }

// app.js
// const { calculateArea, calculatePerimeter } = require('./rectangle');

// console.log(calculateArea(10, 20));
// console.log(calculatePerimeter(10, 20));


// Task 4
// Create a module called utilities.js.
// Create your own replaceTemplate and use it in your app.js file.

// Solution
// utilities.js
// const replaceTemplate = (temp, product) => {
//     let output = temp.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%ID%}}', product.id);
//     return output;
// }

// module.exports = replaceTemplate;

// app.js
// const replaceTemplate = require('./utilities');

// const product = {
//     name: 'Mobile',
//     price: 10000,
//     id: 1
// }

// const template = '<h2>{{%NAME%}}</h2><p>{{%PRICE%}}</p><p>{{%ID%}}</p>';

// console.log(replaceTemplate(template, product));


// Task 5
// Create a module called math.js.
// This module should have the following functions:
// Factorial: This function should take a number as a parameter and return the factorial of that number.
// Prime: This function should take a number as a parameter and return true if the number is prime otherwise return false.
// Now import this module in your app.js file and use the exported functions.

// Solution
// math.js
// const factorial = (num) => {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// const prime = (num) => {
//     if (num === 1) {
//         return false;
//     }
//     else if (num === 2) {
//         return true;
//     }
//     else {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// module.exports = {
//     factorial,
//     prime
// }

// app.js
// const { factorial, prime } = require('./math');

// console.log(factorial(5));
// console.log(factorial(10));
// console.log(prime(5));
// console.log(prime(10));

