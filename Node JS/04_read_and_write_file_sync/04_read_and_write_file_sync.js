// How can we read and write files in Node JS?
// If you have already work with javascript in browser, you already know when we use js in browser, we can't access the file system of the computer. We cannot use js to read and wright write file.
// But when we use js in node js, it provides us a module which allows us to read and write files. It's a built in module/core module of node js.
// This module is called fs module.
// fs stands for file system.

// To use this module, we need to import it.
// We can import it as:
// const fs = require('fs');

// Now we have imported the fs module, let's see how we can use it to read and write files.

// Reading files synchronously
// To read a file synchronously, we can use the readFileSync function.
// This function takes two arguments. The first argument is the path of the file and the second argument is the encoding.

// Let us create a file and read it synchronously.
// Let us create a file named read.txt and write some text in it.

// Let us read the file read.txt synchronously.
// We will use the readFileSync function.

// const data = fs.readFileSync('./read.txt', 'utf-8');
// console.log(data);

// The readFileSync function returns the data of the file in the form of string.
// We can store this data in a variable and print it.

// What is utf-8?
// utf-8 is a character encoding format which is used to encode the characters in the file.
// utf-8 is the default encoding format.
// utf-8 stands for unicode transformation format 8-bit.
// utf-8 is a variable width character encoding format.
// utf-8 can encode 1 to 4 bytes.
// utf-8 is backward compatible with ASCII.
// utf-8 is the most used character encoding format.

// If we don't specify the encoding format, the readFileSync function will return the data in the form of buffer.
// Let us have a look at the buffer.

// const data = fs.readFileSync('./read.txt');
// console.log(data);

// We can see that the data is returned in the form of buffer.

// What is buffer?
// Buffer is a temporary storage area in memory.

// This is how we can read a file synchronously.

// Why do we need to read a file synchronously?
// When we read a file synchronously, the next line of code will not be executed until the file is read completely. But it may take some time to read the file which may cause the delay in the execution of the code and cause the blocking of the code and performance issues.

// There is another way to read files and that is asynchronously, we will talk about it later.


// Writing files synchronously
// To write a file synchronously, we can use the writeFileSync function.
// This function takes three arguments. The first argument is the path of the file, the second argument is the data to be written in the file and the third argument is the encoding.

// Let us create a file named write.txt.

// Let us write some text in the file write.txt synchronously.

// fs.writeFileSync('./write.txt', 'This is a file created by Node JS.', 'utf-8');

// This is how we can write a file synchronously.

// But what if file does not exist?
// If the file does not exist, it will create a file and write the data in it.
// If the file already exists, it will overwrite the data in it.
// This is how we can read and write files synchronously in Node JS.

// We can also write files asynchronously, we will talk about it later.

// What if you want to append some text in the file?
// To append some text in the file, we can use the appendFileSync function.

// Let us append some text in the file write.txt.
// fs.appendFileSync('./write.txt', ' This text is appended by Node JS.', 'utf-8');
// This is how we can append some text in the file.

// If the file does not exist, it will create a file and append the text in it.

// Task-1
// Don't create any file, just write code to write today's date and time in a file named date.txt.
// Solution

// const fs = require('fs');
// fs.writeFileSync('./date.txt', `Today's date is ${new Date().toLocaleDateString()} and time is ${new Date().toLocaleTimeString()}.`, 'utf-8');


// Task-2
// Create a file named bio.txt and write your name in it and the name should be entered by the user in the terminal.
// Solution

// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your name? ', (name) => {
//     fs.writeFileSync('./bio.txt', `My name is ${name}.`, 'utf-8');
//     rl.close();
// });


// Task-3
// Read the read.txt file and convert it's content into upper case and write it in another file named write.txt.
// Solution

// const fs = require('fs');
// const data = fs.readFileSync('./read.txt', 'utf-8');
// fs.writeFileSync('./write.txt', data.toUpperCase(), 'utf-8');


// Task-4
// Read the read.txt file and split each character of the file and write it in another file named write.txt.
// Solution

// const fs = require('fs');
// const data = fs.readFileSync('./read.txt', 'utf-8');
// fs.writeFileSync('./write.txt', data.split('').join(','), 'utf-8');


// Task-5
// Read the read.txt file and append the same content in the same file.
// Solution

// const fs = require('fs');
// const data = fs.readFileSync('./read.txt', 'utf-8');
// fs.appendFileSync('./read.txt', data, 'utf-8');

// I hope you have understood how to read and write files synchronously in Node JS

// :)