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


// What if we have to read a file and then write a file?
// We can do it by nesting the callback functions.
// const fs = require('fs');

// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile('./write.txt', data, (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         })
//     }
// });

// console.log("This is a message of read file.");

// What if we have to read multiple files?
// We can do it by nesting the callback functions.

// const fs = require('fs');

// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         fs.readFile('./read2.txt', 'utf-8', (err, data2) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data2);
//             }
//         })
//     }
// });

// Here we have read 2 files and when the first file is read completely, the second file is read.

//  What if we have to read multiple files and then write a file and then append all the data into some other file?
// We can do it by nesting the callback functions.

// const fs = require('fs');

// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         fs.readFile('./read2.txt', 'utf-8', (err, data2) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data2);
//                 fs.writeFile('./write.txt', data + data2, (err) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         fs.appendFile('./append.txt', data + data2, (err) => {
//                             if (err) {
//                                 console.log(err);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });


// Here you can clearly see that the code is getting complex and it is difficult to understand.
// And you can also notice that our code is growing horizontally more and more.
// Thats right we are getting into the callback hell.
// Finally we have created our own callback hell.

// Append a file asynchronously:
// To append a file asynchronously, we can use the appendFile method of fs module.
// This method takes 3 arguments:
// 1. Path of the file.
// 2. Data to be appended in the file.
// 3. Callback function.

// The callback function takes 1 argument:
// 1. Error.

// If there is an error, it will be stored in the error argument.

// If there is no error, the file will be appended.

// Example:
// const fs = require('fs');

// fs.appendFile('./append.txt', 'This is a message of append file.', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });


// Task 1:
// Read a number from a file named number.txt and write its multiplication table in a file named table.txt.
// Solution:
// const fs = require('fs');

// fs.readFile('./number.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         let table = '';
//         for (let i = 1; i <= 10; i++) {
//             table += `${data} * ${i} = ${data * i}\n`;
//         }
//         fs.writeFile('./table.txt', table, (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         })
//     }
// });


// Task 2:
// Update the task 1 in such a way that, whenever you know run the program, it should also append the table in a file named table-history.txt.
// Solution:
// const fs = require('fs');

// fs.readFile('./number.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         let table = '';
//         for (let i = 1; i <= 10; i++) {
//             table += `${data} * ${i} = ${data * i}\n`;
//         }
//         fs.writeFile('./table.txt', table, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fs.appendFile('./table-history.txt', table, (err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 })
//             }
//         })
//     }
// });


// Task 3:
// Create a loop that will create infinite files with the name file1.txt, file2.txt, file3.txt and so on.
// Solution:

// const fs = require('fs');

// let i = 1;
// while (true) {
//     fs.writeFile(`./file${i}.txt`, `This is file ${i}.`, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     })
//     i++;
// }


// Task 4:
// Create a loop that will create infinite files with the name file1.txt, file2.txt, file3.txt and so on. And also write the content of the file as "This is file 1.", "This is file 2.", "This is file 3." and so on. And print in the console that "File 1 is created.", "File 2 is created.", "File 3 is created." and so on.
// Solution:
// const fs = require('fs');

// let i = 1;

// while (true) {
//     fs.writeFile(`./file${i}.txt`, `This is file ${i}.`, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`File ${i} is created.`);
//         }
//     })
//     i++;
// }


// Task 5:
// Create a js file using fs module and write a program in that file using your current file, that has any random arrow function. And then run that file using node command.
// Solution:
// const fs = require('fs');

// fs.writeFile('./arrow.js', `const arrow = () => {
//     console.log("This is an arrow function.");
// }
// arrow();`, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });