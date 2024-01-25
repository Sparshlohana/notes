// What is Node JS and why do we need it?
// Node JS is a runtime environment for executing JavaScript code outside of a browser.
// According to definition, Node JS is a JavaScript runtime built Google Chrome's open source V8 Engine.

// What is a runtime environment?
// A runtime environment is where the code is executed when we run it.
// For example, when we run JavaScript code in a browser, the browser is the runtime environment.
// When we run JavaScript code in Node JS, Node JS is the runtime environment.

// What is open source V8 Engine?
// V8 Engine is a JavaScript engine that runs in Google Chrome and other Chromium-based web browsers.
// It is responsible for compiling JavaScript code into machine code that the computer can execute.
// V8 Engine is written in C++ and it can be embedded into any C++ application.
// Node JS is one such application that uses the V8 Engine.

// But what is open source?
// Open source means that the source code of the software is available for anyone to study, modify and distribute.
// Anyone can contribute to the development of the software.
// The opposite of open source is closed source.
// Closed source software is proprietary software where the source code is not available for the public.
// Only the original authors of the software can modify and distribute it.

// What is a JavaScript engine?
// A JavaScript engine is a program that executes JavaScript code.
// All browsers have a built-in JavaScript engine.
// Chrome has V8, Firefox has SpiderMonkey, Safari has JavaScriptCore and Microsoft Edge has Chakra.


// Browser as a runtime environment
// When we run JavaScript code in a browser, the browser creates a global execution context for the code.
// It also creates a global object and the 'this' keyword.
// The global object is the window object in the browser.
// The 'this' keyword refers to the window object.
// The browser also provides a bunch of APIs that we can use in our code.
// For example, the DOM APIs, the Fetch API, the Geolocation API, etc.
// These APIs are not part of the JavaScript language.
// They are provided by the browser.
// They are implemented in the browser's JavaScript engine.
// They are available to us to use in our code.

// Node JS as a runtime environment
// When we run JavaScript code in Node JS, Node JS creates a global execution context for the code.
// It also creates a global object and the 'this' keyword.
// The global object is the global object in Node JS.
// The 'this' keyword refers to the global object.
// Node JS also provides a bunch of APIs that we can use in our code.
// For example, the file system APIs, the HTTP APIs, the OS APIs, etc.
// These APIs are not part of the JavaScript language.
// They are provided by Node JS.
// They are implemented in the V8 Engine.
// They are available to us to use in our code.

// History of Node JS
// Before Node JS, JavaScript was only used in the browser.
// In 2009, Ryan Dahl created Node JS.
// He took the V8 Engine and embedded it into a C++ program.
// He also added a bunch of APIs to the program.
// The program was called Node JS.
// It allowed us to run JavaScript code outside of a browser.
// It allowed us to build web servers using JavaScript.
// It was a game changer.

// In short, Node JS is a program that includes v8 engine + some additional libraries, modules and APIs making it possible to run JavaScript on a computer instead of a browser.
// Now we can use Js using Node JS to do so many things which we could not do earlier like accessing file system, creating web servers, accessing databases, etc.
// With the help of Node JS, we can finally use JavaScript to build fast, highly scalable and real-time backend applications.

// Why node JS is better than other backend languages?
// Node JS is single threaded, event driven and non-blocking I/O model which makes it lightweight and efficient.
// Node JS is single threaded which means it has only one thread to execute JavaScript code.
// This makes it lightweight and efficient.
// Node JS uses an event driven and non-blocking I/O model.
// This means that Node JS uses events and callbacks to handle requests.
// When a request comes in, Node JS will execute the relevant event handler.
// If the event handler needs to access a file or make an API call, Node JS will not wait for the operation to complete.
// It will register a callback and continue executing the rest of the code.
// When the operation completes, Node JS will execute the callback.
// Node JS is also non-blocking.
// This means that Node JS will not block the execution of other code while waiting for an operation to complete.
// This makes Node JS very fast and efficient.
// It is perfect for building fast and data-intensive applications which means applications that deal with a lot of data.
// For example, real-time chat applications, online games, collaboration tools, etc.
// Eg: We'll be creating so many apis in this course and we'll be using node JS to create those apis.
// We'll also create apis to access database, to upload files, to send emails, to authenticate users, etc.
// We can build all sorts of applications using Node JS like real-time chat applications, streaming applications like Netflix or youtube, or a server-side web application where an entire content of the page is generated on the server and then sent to the client.

// There are some types of applications that are not suitable for Node JS.
// For example, CPU intensive applications.
// These are applications that do a lot of processing.
// For example, video encoding, image manipulation, etc.
// Node JS is not suitable for CPU intensive applications because it is single threaded.
// This means that it can only run one process at a time.
// If we run a CPU intensive process in Node JS, it will block the execution of other code.
// This will make our application slow and inefficient.
// Node JS is also not suitable for applications that require long running processes.
// For example, applications that process large files or large amounts of data.
// These applications are better suited for other languages like Python or Java.

// Nowadays, Node JS is used by many big companies like Paypal, Netflix, Uber, Ebay, etc.

// The best thing about Node JS is that it uses JavaScript.
// JavaScript is the most popular programming language in the world.
// It is used by millions of developers.
// It has a huge community.
// It has the largest ecosystem of open source libraries.
// It is easy to learn and use.
// It is very flexible.
// It is very powerful.
// It is the language of the web.
// It is the language of the browser.
// It is the language of the server.
// It is the language of the database.
// It is the language of the mobile.
// It is the language of the desktop.
// It is the language of the cloud.
// It is the language of the IoT.
// It is the language of the AI.
// It is the language of the future.
// It is everywhere.
// It is JavaScript.
// And now, it is also the language of the backend.
// Thanks to Node JS.

// With the help of js, we can now build full stack web applications using just one programming language.
// We can use js to build the frontend and the backend of our application.
// Frontend with the help of React JS and backend with the help of Node JS.
// This is called full stack JavaScript development.

// There is a huge library of open source packages available for Node JS.
// We can use these packages to build our applications with the help of npm.
// npm is a package manager for Node JS.
// It is the largest ecosystem of open source libraries in the world.
// It has over 1 million packages.
// It is used by millions of developers.