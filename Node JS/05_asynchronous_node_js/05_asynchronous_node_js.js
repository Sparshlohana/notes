// Let us understand the asynchronous nature of Node JS and why it is important.

// But let us first understand what is synchronous code.
// Synchronous code is the code which is executed line by line. The next line of code is executed only when the previous line of code is executed.
// Example:
// const fs = require('fs');
// const data = fs.readFileSync('./read.txt');
// console.log(data);

// This is a synchronous code. The next line of code will only be executed line by line after execution of previous line is finished.
// If any line of code takes some time to execute, it will block the execution of the code and will cause performance issue.
// In our case if the read.txt file is very large, it will take some time to read the file and will cause the blocking of the code.
// Thats why we say synchronous code is blocking code.

// This is where asynchronous code comes into the picture.
// Asynchronous code is the code which is executed line by line but not in the order of execution.
// The next line of code is executed even if the previous line of code is not executed.
// Example:
// const fs = require('fs');
// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log("This is a message of read file.");

// This is an asynchronous code. The next line of code will be executed even if the previous line of code is not executed.
// If any line of code takes some time to execute, it will not block the execution of the code and will not cause performance issues.
// This is because callbacks are used in asynchronous code.
// Callbacks are registered and once the execution of the code is finished, the callback is called.
// Which means that the main thread of the code is not blocked as the callback is running in the background.
// When the code runs, in our case the read.txt file is read in the background and the callback is called when the file is read completely. So first the message "This is a message of read file." is printed and then the data of the file is printed.
// This is how asynchronous code is executed.

// This is how we can read a file asynchronously.

// Asynchronous code is non-blocking code as it does not block the execution of the code.
// This is why asynchronous code is important.

// If you want to use asynchronous code, you have to use callbacks or promises or async/await.

// Whats the problem with blocking code or synchronous code in Node JS?
// Why do we use callbacks so many times in Node JS?
// The reason is that Node JS is single threaded.
// This thread is responsible for executing all the js code.
// Basically, a thread is responsible for executing the code in machine's processor.
// When we are creating a node js application, this single thread is responsible for executing all the code in machine's processor/CPU.
// This thread is also called main thread.
// All the users who are visiting our website are sending requests to this single thread which is responsible for executing all the code. Like if you have 1000 users visiting your website, all the 1000 users are sending requests to this single thread. Which means that this single thread is responsible for executing all the code for all the 1000 users. How will this single thread handle all the 1000 users?
// This single thread will handle all the 1000 users by using asynchronous code.
// This single thread will not block the execution of the code by using asynchronous code.

// If you have written synchronous code and 1000s of users are visiting your website, then surely other users will have to wait for the execution of the code. This will cause performance issues and blocking of the code.

// In other programming languages like Java, C++, php etc, we can create multiple threads and each thread is responsible for executing the code for each user. But in Node JS, we have only one thread which is responsible for executing the code for all the users.

// Please take a note that all the callbacks are not asynchronous. Some callbacks are synchronous also. For example, the forEach method of array is synchronous. The callback of forEach method is executed synchronously.
// But just because a callback function is taking another function as an argument, it does not mean that it is asynchronous. It may be synchronous also.

// But if we are using asynchronous code, it does not mean that it will always be faster than synchronous code. It depends on the code. Sometimes synchronous code is faster than asynchronous code.

// But again, if we are using callbacks, it can become a callback hell and we have already studied about it.
// How can we skip the callback hell?
// By using promises or async/await.

// I hope you have understood the asynchronous nature of Node JS and why it is important.