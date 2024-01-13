// Javascript is a synchronous single threaded language.
// It has only one call stack.
// It can only do one thing at a time.

// This call stack is present inside javascript engine.
// All the code of javascript is executed inside this call stack.

// Let us take an example of a function.
// function a() {
//     console.log("hi");
// }
// a();
// console.log("bye");
// As you already know, whenever js program runs, it creates a global execution context. This global execution context is pushed to the call stack. Then it will run line by line. First it will call function a. It will create a new execution context for function a and push it to the call stack. Then it will print hi. Then it will pop the execution context of function a from the call stack. Then it will print bye. Then it will pop the global execution context from the call stack. Then the call stack will be empty.

// The main job of call stack is to execute whatever is inside it. It does not wait for anything. It just executes whatever is inside it.
// If you give it anything, it quickly executes it and then it moves to the next line.
// Thats why I keep saying, "time", "tide" and "javascript" waits for none.

// What if we need to wait for something?
// What if we have a function that takes 5 seconds to execute?
// Can we do that?
// No we can't do that because whatever comes inside the call stack, it is executed immediately.
// If you give it a script and say execute it 5 seconds later, it will not do that. This call stack does not have a timer.

// So suppose we have to keep the track of time, and we have to execute a piece of code after certain delay, then what will we do?
// We need some extra super power to do that. The super powers for timer.

// Some super powers of browser:
// As we already know, this call stack is inside the js engine and this engine is inside the browser.
// It also has something known as local storage, which is used to store data in the browser.
// We can also have a timer inside of browser.
// We also have Url inside the browser, where one can write the address of the website. eg: netflix.com
// So this browser has this super power of communicating with the outside world.
// Suppose you want to get best netflix series, then you can go to google and search for it.
// So this browser reaches to the netflix server and gets the data from there.
// And even after getting data, it displays it on the screen.
// Browser can also have access to bluetooth, camera, microphone, etc.
// It can also has access to the file system of the computer.
// It can also have access to the location of the user.
// We can say that browser is most powerful creation of human kind.

// Our code is running inside call stack, which is inside js engine, which is inside the browser, it needs these super powers of browser to do certain things.
// If we need access to these super powers, then we need to have some kind of connection with the browser.

// To access all those super powers, we need to use something known as web APIs.
// These web APIs are provided by the browser.
// These web APIs are not part of js. They are provided by the browser.
// These web APIs are not part of js engine. They are provided by the browser.
// These web APIs are not part of call stack. They are provided by the browser.
// These web APIs are provided by the browser to access all those super powers.

// lets see some examples of web APIs(super powers).
// setTimeout
// setInterval
// Dom apis
// console
// fetch
// local storage
// navigator
// geolocation
// camera
// microphone
// bluetooth

// It will be heart breaking to know that these web APIs are not part of js. They are provided by the browser, including setTimeout and setInterval.
// These web APIs are provided by the browser to access all those super powers.
// Even the dom apis are provided by the browser. like document.getElementById, document.querySelector, etc.
// Even console.log is not part of js. It is provided by the browser.
// These are the super powers provided by the browser.

// This browser gives js's call stack access to these web APIs to access all those super powers.
// We can access these web APIs using call stack because of the global object.

// What is global object?
// Global object is the window
// We can use all these web APIs using window object.
// Suppose we want to use setTimeout, then we can use it using window.setTimeout.

// Now you make ask me that I am not using window.setTimeout, I am just using setTimeout. How is it working?
// Because this is inside the global object. So we can use it directly.
// The browser gives this super power to the js call stack to access all these web APIs using global window object.


// Now let us try to execute this code.
// console.log("start");
// setTimeout(() => {
//     console.log("timer");
// }, 5000);
// console.log("end");
// Whenever we run this code, it will create a global execution context and push it to the call stack.
// Here in the first line console.log("start") starts to execute, it calls this web API of console, this console internally calls the console of the browser, which displays start in the console.
// Now it will move to the next line, it will call setTimeout, this setTimeout is not part of js, it is provided by the browser, setTimeout takes two arguments, first is the callback function and second is the delay, so when we call setTimeout, it registers a callback, as we passed the delay of 5000 milliseconds, so it will register a callback and it will say to call this callback after 5000 milliseconds, So the timer functionally provided by the browser will start a timer of 5000 milliseconds.
// And the js will move to the next line, it will call console.log("end"), this console internally calls the console of the browser, which displays end in the console.
// Now the timer is still running, even though the js has finished executing, so the global execution context is popped from the call stack, but the timer is still running.
// As soon as this 5000 milliseconds are over, and the callback needs to be executed.
// And we already know it need to go to the call stack for execution, but it cannot directly go to the call stack. How will it go to the call stack?

// Now comes the event loop and callback queue.
// It will go to the call stack with the help of callback queue.
// When the timer expires, it will take the callback function and put it in the callback queue.
// As you can see event loop, its job is to check if the call stack is empty or not.
// If the call stack is empty, then it will take the callback function from the callback queue and put it in the call stack.
// So the event loop acts like a gate-keeper, it checks if the call stack is empty or not, if it is empty, then it will take the callback function from the callback queue and put it in the call stack.
// Now our setTimeout callback function is put inside call stack by the event loop.
// And now it will execute the callback function, which will print timer in the console.
// This is how the event loop works.

// Lets see another example.
// console.log("start");
// document.getElementById("btn").addEventListener("click", function abc() {
//     console.log("clicked");
// });
// console.log("end");
// Here we have a button in html, and we have attached a click handler on it.
// So whenever we click on this button, this callback function will be executed.
// Lets see how it works.
// Firstly it will create a global execution context and push it to the call stack.
// Then it will call console.log("start"), this console internally calls the console of the browser, which displays start in the console.
// Then it will call document.getElementById("btn"), this document is not part of js, it is provided by the browser, this document internally calls the document of the browser, which will find the element with id btn, and it will return that element.
// Then it will call addEventListener, this addEventListener is not part of js, it is provided by the browser, this addEventListener internally calls the addEventListener of the browser, which will attach a click handler on the button.
// Then it will go to next line
// Then it will call console.log("end"), this console internally calls the console of the browser, which displays end in the console.
// Now the global execution context is popped from the call stack, but the button is still there.
// Now we will click on the button, and the callback function will be executed.
// Now the callback function is put inside the callback queue by the browser.
// Now the event loop will check if the call stack is empty or not, if it is empty, then it will take the callback function from the callback queue and put it in the call stack.
// Now our callback function is put inside call stack by the event loop.
// And now it will execute the callback function, which will print clicked in the console.

// But why do we need this callback queue?
// But why can't we directly put the callback function in the call stack?
// Because we want to execute the callback function after the main execution is over.
// And if we directly put the callback function in the call stack, then it will be executed before the main execution is over.
// And if we have multiple callback functions, they will be executed in the order they are put inside the callback queue.

// How does fetch works?
// No first wait, what is fetch?
// Fetch is used to make http calls.
// Suppose you want to get data from the server, then you can use fetch.
// I know you still don't know what is http call, but don't worry, we will learn about it later.

// Now lets see how fetch works.
// console.log("start");

// setTimeout(() => {
//     console.log("timer");
// }, 5000);

// // fetch("https://jsonplaceholder.typicode.com/todos/")
// //     .then((response) => response.json())
// //     .then((data) => console.log(data)).catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then(function abc() {
//         console.log("ABC");
//     })
// console.log("end");

// This time in our code, we have setTimeout and fetch.
// Lets see how it works.
// Firstly it will create a global execution context and push it to the call stack.
// Then it will call console.log("start"), this console internally calls the console of the browser, which displays start in the console.
// Then it will call setTimeout, this setTimeout is not part of js, it is provided by the browser, setTimeout takes two arguments, first is the callback function and second is the delay, so when we call setTimeout, it registers a callback, as we passed the delay of 5000 milliseconds, so it will register a callback and it will say that call this callback after 5000 milliseconds, So the timer functionally provided by the browser will start a timer of 500 milliseconds.
// Then it will call fetch, this fetch is not part of js, it is provided by the browser, this fetch internally calls the fetch of the browser, which will make a http call to the server, and it will return a promise.
// Then it will call console.log("end"), this console internally calls the console of the browser, which displays end in the console.
// Now the global execution context is popped from the call stack, but the timer is still running.
// Here we have a promise, which is returned by the fetch.
// Now for the people who don't know what what fetch is, it basically goes and makes an api call to the server, and it returns a promise.
// And we have to pass a callback function to this promise, which will be executed when the promise is resolved.
// But what is promise?
// For now just understand that, when i say promise is resolved, it means that the api call is completed and we have the data and execution of the callback function will start.
// Lets assume that the promise is resolved first, the data we got from the server came in 1s.
// Now we have two callback functions, one is the callback function of setTimeout and other is the callback function of promise.
// You can expect that the callback function will go to the callback queue in the order they are resolved.
// No, the callback function of promise will go to the microtask queue.
// And the callback function of setTimeout will go to the callback queue.
// And The event loop always prioritizes the microtask queue over the callback queue.
// So the callback function of promise will be executed first.
// So the callback function of promise will be executed first, which will print ABC in the console.
// Then the callback function of setTimeout will be executed, which will print timer in the console.
// This is how the event loop works.

// All the callback functions from the promises are put inside the microtask queue.

// There is something known as mutation observer.
// It is used to observe the dom changes.
// It observes the dom changes and it executes the callback function when the dom changes.
// It goes to the microtask queue.
// So the promise callback function and mutation observer callback function are put inside the microtask queue.

// And all the callback functions from the setTimeout, setInterval, etc are put inside the callback queue.

// Callback queue is also known as task queue.

// There are sometimes when a microtask creates a new microtask.
// For example, when we call a promise, it returns a promise.
// So when the promise is resolved, it will create a new microtask.
// So if we have a promise inside a promise, then the callback function of the inner promise will go to the microtask queue.
// So the callback function of the inner promise will be executed first.
// And then the callback function of the outer promise will be executed.
// So sometimes the microtask queue can be very long.
// And the callback queue will be executed only when the microtask queue is empty.
// This situation is known as starving of callback queue.