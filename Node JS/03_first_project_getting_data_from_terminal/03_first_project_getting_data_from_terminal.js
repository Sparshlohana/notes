// Open a folder in VS Code.
// Create a file called app.js.

// Why are we using app.js?
// Because this is the standard name for the entry point of a node js application.
// This is the file that will be executed when we run our application.
// We can even use index.js as the name of the entry point file.

// What does this .js extension mean?
// This means that this is a JavaScript file.
// As we are using node js, we will be writing JavaScript code.

// Lets write some code.
// Lets start by something very simple, lets print something on the console.
// console.log("Hello World");

// For running this code, we need to run this file using node.
// We can do this by typing node app.js in the terminal.
// This will print Hello World on the console.

// If you are using VS Code, install an extension called Code Runner.
// This will allow you to run the code directly from VS Code.
// After you install code runner, you will see a play button in the top right corner.
// Click on it to run the code.
// Its that simple.

// If you are using node app.js to run the code, you will have to run this command every time you make a change and you will have to make sure that you save the file before running the command.

// You can clear the console by typing cls in the terminal in windows and clear in the terminal in mac and linux.

// Here we printed stuff on the console, but what if we want to get some input from the user from the terminal just like c and c++.
// Sadly there is no built in function in node js to do this.
// But we can use modules provided by node js to do this.

// What are modules?
// Modules are basically JavaScript libraries.
// These are files that contain some code that we can use in our application.
// Basically these makes our life easier.

// How to use modules?
// We can use modules by importing them in our application.
// We can import modules using the require function.
// Here we will be using a module called readline module for getting input from the user.
// require('readline');
// This require function returns an object.
// We can store this object in a variable.
// const readline = require('readline');
// This readline module provides an interface for getting input from the user.
// Before we can use this module, we need to create an interface.
// We can do this by using the createInterface function.
// readline.createInterface();
// This function takes an object as an argument.
// This object contains two properties.
// input and output.
// input is the input stream.
// output is the output stream.

// What is a stream?
// A stream is a sequence of data.
// We can think of a stream as a pipe.
// We can write data to a stream and we can read data from a stream.
// We can also think of a stream as a file.
// We can write data to a file and we can read data from a file.
// In this case, the input stream is the terminal.
// The output stream is the terminal.
// We can write data to the terminal and we can read data from the terminal.
// Where we want to write the data?
// We want to write the data to the terminal.
// So we will pass the terminal as the output stream.
// We can get the terminal using the process object.
// process.stdin is the input stream.
// process.stdout is the output stream.
// process is a global object.
// We can access this object from anywhere in our application.

// readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// This function returns an object.
// we can store this object in a variable.
// Lets call this variable rl.

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Now we can use this rl object to get input from the user.
// We can do this by using the question function.
// rl.question('What is your name? ', (name) => {
//     console.log(`Hello ${name}`);
// });
// Here we are passing two arguments to the question function.
// First argument is the question.
// Second argument is a function.
// This function will be called when the user enters the input.
// This function will be called with the input as the argument.
// We are storing this input in a variable called name.
// We are using this name variable to print Hello name on the console.

// As you have noticed, the application is not exiting.
// This is because the readline module is keeping the application alive.
// We can exit the application by using the close function.
// rl.close(); in the question function like this.

// rl.question('What is your name? ', (name) => {
//     console.log(`Hello ${name}`);
//     rl.close();
// });

// This will exit the application after printing Hello name on the console.

// We can also listen for the close event.
// Like when the application is closed, we can do something.
// rl.on('close', () => {
//     console.log('Bye Bye');
// });
// This on function takes two arguments.
// First argument is the event.
// Second argument is a function.
// This function will be called when the event occurs.
// In this case, the event is close.
// This function will be called when the application is closed.
// We are printing Bye Bye on the console when the application is closed.

// Lets run the application.q
// node app.js
// What is your name? John
// Hello John
// Bye Bye

// There is something known as process.exit.
// This will exit the application immediately and it will not wait for the close event.
// Lets use this in the question function.
// rl.question('What is your name? ', (name) => {
//     console.log(`Hello ${name}`);
//     process.exit(0);
// });
// rl.on('close', () => {
//     console.log('Bye Bye');
// });
// Lets run the application.
// See in this case, the close event is not called and no bye bye is printed on the console.

// This is how we can get input from the user in node js.
// There are many more features of the readline module.
// You can read about them in the documentation of the readline module in the node js website.

// Task - 1
// Create a simple calculator using the readline module in node js.
// Solution
// Lets create a simple calculator.
// Lets create a file called calculator.js.
// Lets create an interface.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Lets create a function called calculator.
// const calculator = () => {
//     // Lets get the first number from the user.
//     rl.question('Enter the first number: ', (firstNumber) => {
//         // Lets get the second number from the user.
//         rl.question('Enter the second number: ', (secondNumber) => {
//             // Lets get the operation from the user.
//             rl.question('Enter the operation: ', (operation) => {
//                 // Lets convert the first number and the second number to numbers.
//                 firstNumber = Number(firstNumber);
//                 secondNumber = Number(secondNumber);
//                 // Lets create a variable called result.
//                 let result;
//                 // Lets check what operation the user wants to perform.
//                 if (operation === '+') {
//                     // Lets add the first number and the second number.
//                     result = firstNumber + secondNumber;
//                 } else if (operation === '-') {
//                     // Lets subtract the second number from the first number.
//                     result = firstNumber - secondNumber;
//                 } else if (operation === '*') {
//                     // Lets multiply the first number and the second number.
//                     result = firstNumber * secondNumber;
//                 } else if (operation === '/') {
//                     // Lets divide the first number by the second number.
//                     result = firstNumber / secondNumber;
//                 } else {
//                     // Lets print an error message.
//                     console.log('Invalid operation');
//                 }
//                 // Lets print the result on the console.
//                 console.log(`Result: ${result}`);
//                 // Lets close the application.
//                 rl.close();
//             });
//         });
//     });
// };

// // Lets call the calculator function.
// calculator();

// // This is how we can create a simple calculator in node js using the readline module.

// Task - 2
// Create a program that will ask the user to enter his/her name and age until the user enters his/her name as John and age as 25.

// Solution
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const ask = () => {
//     rl.question('Enter your name: ', (name) => {
//         rl.question('Enter your age: ', (age) => {
//             if (name === 'John' && age === '25') {
//                 console.log('Success');
//                 rl.close();
//             } else {
//                 ask();
//             }
//         });
//     });
// };

// ask();

// This is how we can create a program that will ask the user to enter his/her name and age until the user enters his/her name as John and age as 25.


// Task - 3
// Create programs for printing the multiplication table of a number entered by the user.
// Solution
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// const multiplicationTable = () => {
//     rl.question('Enter a number: ', (number) => {
//         number = Number(number);
//         let table = '';
//         for (let i = 1; i <= 10; i++) {
//             table += `${number} * ${i} = ${number * i}\n`;
//         }
//         console.log(table);
//         rl.close();
//     });
// };

// multiplicationTable();


// Task - 4
// Create a program for printing the Fibonacci series.
// Solution
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const fibonacci = () => {
//     rl.question('Enter the number of terms: ', (number) => {
//         number = Number(number);
//         let firstNumber = 0;
//         let secondNumber = 1;
//         let series = '';
//         for (let i = 1; i <= number; i++) {
//             series += `${firstNumber} `;
//             let thirdNumber = firstNumber + secondNumber;
//             firstNumber = secondNumber;
//             secondNumber = thirdNumber;
//         }
//         console.log(series);
//         rl.close();
//     });
// };

// fibonacci();


// Task - 5
// Create a program for printing the factorial of a number entered by the user.
// Solution
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const factorial = () => {
//     rl.question('Enter a number: ', (number) => {
//         number = Number(number);
//         let result = 1;
//         for (let i = 1; i <= number; i++) {
//             result *= i;
//         }
//         console.log(result);
//         rl.close();
//     });
// };

// factorial();

// I hope you have learned readline module in node js.