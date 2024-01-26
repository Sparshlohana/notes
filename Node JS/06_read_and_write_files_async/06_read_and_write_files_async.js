// If you want to read a file asynchronously, you can use the readFile method of fs module.
// This method takes 3 arguments:
// 1. Path of the file.
// 2. Encoding of the file.
// 3. Callback function.

// The callback function takes 2 arguments:
// 1. Error.
// 2. Data of the file.

// If there is an error, it will be stored in the error argument.
// If there is no error, the data of the file will be stored in the data argument.

// Example:
// const fs = require('fs');
// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// console.log("This is a message of read file.");

// This is how we can read a file asynchronously.
// Here, the callback function is executed when the file is read completely.
// When the program is run, when the code reaches the readFile method, the readFile method is executed and the callback function is registered.
// Then the next line of code is executed which is the console.log statement.
// Then the callback function is called when the file is read completely.
// So first the console.log statement is executed and then the callback function is executed.

// If you want to write a file asynchronously, you can use the writeFile method of fs module.
// This method takes 3 arguments:
// 1. Path of the file.
// 2. Data to be written in the file.
// 3. Callback function.

// The callback function takes 1 argument:
// 1. Error.

// If there is an error, it will be stored in the error argument.
// If there is no error, the file will be written.
// Example:
// const fs = require('fs');

// fs.writeFile('./write.txt', 'This is a message of write file.', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })