// We have already covered basics of node js, now its time to deep dive into node js architecture and study how it works behind the scenes.

// Here, I am going to consider the architecture of node js as node dependencies. These dependencies are some libraries which on which node js is dependent.
// We already know that node js is a javascript runtime environment. And this runtime has several dependencies on which it is dependent to work properly.

// The most important dependencies of node js are:
// 1. V8
// 2. Libuv

// V8
// Node js is javascript runtime environment built on google chrome's v8 javascript engine.
// V8 is an open source javascript engine developed by google.
// V8 engine in node.js is responsible for executing the JavaScript code which we write to create the backend of our application.
// This is why V8 is the dependency of node js.
// If V8 is not there, node js will not work.
// V8 engine is responsible for converting javascript code into machine code which computer can understand and execute.
// V8 engine is written in C++.
// V8 engine is fast and efficient. It is designed to run javascript code at high speed.
// V8 engine alone is not sufficient to run node js. It needs some other dependencies as well.

// Libuv
// Libuv is a C library that is used to write asynchronous code in C++.
// Node js is asynchronous. It means that node js does not wait for the code to be executed. It moves to the next code and executes it.
// Libuv is responsible for handling asynchronous code in node js.
// Libuv is responsible for handling file system operations, networking operations, and other asynchronous operations.
// We have already studied js in browser environment. It does not allow to directly access the file system. There we can not read or write files directly. But we can do that with the help of node js. This capability is provided by libuv.
// Libuv gives node js the capability to access the file system, operating system, networking operations, and other asynchronous operations.
// Besides this, libuv provides 2 extremely important features to node js:
// 1. Event loop
// 2. Thread pool

// Event loop in node js is responsible for handling easy tasks like callbacks, promises, and async/await while on the other hand, thread pool is responsible for handling heavy tasks like file system operations, networking operations, etc.

// Node js also has some other dependencies like:
// 1. C-ares - It is a C library that is used to perform DNS queries.
// 2. HTTP parser - It is a C library that is used to parse HTTP requests and responses.
// 3. OpenSSL - It is a C library that is used to provide SSL and TLS encryption.
// 4. Zlib - It is a C library that is used to provide data compression.

// All these dependencies are required for node js to work properly.

// What is a process in node js?
// A process is what facilitates the execution of a program. In simple terms, a process is a program that is currently executing.
// Example: When we open a browser, the browser is a process that is currently executing. A process called chrome.exe is created in the task manager when we open a browser.

// We already learned that node js is already a c++ program. When we run a node js program, a process is created in the system. This process is responsible for executing the node js program.
// We can access the process in node js using the process object which we will study in the upcoming chapters.
// Every process in node js has by default a single thread which is called the main thread which is responsible for executing the node js program.

// What is a thread in node js?
// A thread is what is responsible for executing the code in a process. By default, every process has one main thread.

// In some programming languages like java, we can create multiple threads in a process. These threads can execute the code simultaneously. This is called multi-threading.
// But by default, a process has a single thread.
// In node js, we don't have multi-threading. We do not have options to create multiple threads programmatically.
// So node js programs are executed in one single thread.


// What exactly happens when we start a node js program?
// Let us understand this with the help of an example.
const http = require('http');
const fs = require('fs');

console.log("Program started");

fs.readFile('./text.txt', (err, data) => {
    console.log(data);
});


function someTask() {
    console.log("Some task is being executed");
}
someTask();

http.createServer((req, res) => {
    fs.readFile('./largeFile.txt', (err, data) => {
        res.end(data);
    });
});

// When we start a node js program, a process is created in the system. This process is responsible for executing the node js program.
// Firstly, all the imports are loaded in MAIN THREAD.
// Then all the top level code which is not inside any callback function is executed in MAIN THREAD.
// In our program, all the top level code, console.log("Program started"), someTask() will be executed in MAIN THREAD.
// All other codes which are run asynchronously are not executed in MAIN THREAD. They are executed in the background.
// That background here is the THREAD POOL.

// The functions like readFile, createServer which runs asynchronously are executed in the THREAD POOL.
// With these functions, we also have a callback called when the job of these functions is done.
// Example: When the file is read, the callback function is called. When the server is created, the callback function is called.
// Here, when the text.txt file is completely read inside thread pool, the callback function will be pushed inside event loop. The callback function will wait for its execution in the event loop. It won't be executed immediately. It will wait for its turn. It will be executed when the main thread is empty/free.
// In the same way createServer function will be executed in the thread pool. When the server is created, the callback function will be pushed inside the event loop. It will wait for its turn. It will be executed when the main thread is empty/free.
// The job of the event loop is to execute push the callback functions inside the event loop to the main thread when the main thread is free.
// You need to know that the event loop is where most of the work is done in node js.
// Event loop is the heart of the entire node js architecture.

// There are some heavy tasks like file system operations, networking operations, etc. which are executed in the thread pool. If the task is heavy, it will take time to execute and will block the main thread.

// In our program, the readFile function is a heavy task. It will take time to read the file. So it will block the main thread. The main thread will not be free until the file is read. If the callback function is going to perform some heavy task, in that case that task will not get executed in the main thread. That task will again be passed to the thread pool where it will get executed.
// That heavy task will get executed in some other thread and not in the main thread.
// Keep in mind that, all the heavy tasks which cannot be handled by the event loop, it is offloaded to the thread pool, which can then execute it asynchronously without blocking the main thread.
// Basically event loop performs the easy tasks and offloads the heavy tasks to the thread pool.
// By default, the thread pool has 4 threads.
// These threads are completely separate from the main thread. They are not part of the main thread. They are separate threads which are used to execute heavy tasks.
// We can actually configure it to 1024 threads. but usually, 4 threads are enough.
// These threads together forms the thread pool.

// All this happens behind the scenes. We don't have to worry about it. We just have to write the code and node js will take care of the rest.