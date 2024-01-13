// What do you think is the shortest JavaScript program?
// The shortest js program is the empty program/empty file.

// But there is still a lots of thing happening behind the scenes.
// To understand what is happening behind the scenes, Let's go to source tab in browser.

// Lets put the debugger in the empty file.
// Here, javascript engine will still doing its work.
// It will parse the code, it will create the global execution context and also sets up memory space for variables and functions.
// Though there is no code to execute, it will still do its work.

// Javascript engine will also create something called Window (window object).

// If you go to console and type window, we'll get something.. What is this window? We didn't put anything named window in our code. How did it come here?

// Window is like a big object which has a lots of properties and methods. These functions and properties are created by the javascript engine. It is created in the global space. You can access it anywhere in your code. Basically, these are additional things that javascript engine gives us.

// INTRODUCTION TO THIS KEYWORD
// If we write "this" in console, we'll also get something. In the global level, this "this" points to the window object.
// What is window object? It is the global object which is created along with the global execution context. It is the default object in the browser.

// So now we know that, when any javascript program runs, Global object is created, Global execution context is created and along with that execution context, a "this" keyword is also created.
// We will be talking about "this" keyword in the different chapter.


// let us talk about Global object.
// So, the global object in this case, in case of browser, it is known as window object.

// let me tell you one thing, Javascript not does only runs on browsers. Javascript also runs on servers, on mobile devices, on IOT devices, on desktop applications, etc. So, in all these cases, the global object is different. In case of browser, it is window object. In case of node.js, it is global object. In case of mobile devices, it is different. So, it depends on the environment where javascript is running.

// Wherever javascript is running, there must be a javascript engine. Just like in chrome, it is V8 engine. In case of node.js, it is also V8 engine. In case of firefox, it is spider monkey. In case of safari, it is javascript core. In case of edge, it is chakra. So, there are different javascript engines.
// All these javascript engines have responsibility to create the global object and global execution context.
// In case of browser, the global object is window object. In case of node.js, the global object is global object. In case of mobile devices, it is different. So, it depends on the environment where javascript is running. But there is always a global object created. Even though our file is empty, javascript engine will still create the global object and global execution context.

// In the base level/ in the global level, in the global execution context "this" keyword is always equal to the global object. i.e. at the global level "this" is equal to window.

// We can now say that, whenever an execution context is created, a "this" keyword is created and it is also created even for the Functional execution context. And at global level this points to global object.

// Now let's put a debugger in the page and reload the page, we can see that the global execution context is created and memory space is allocated for variables and functions. We didn't put anything in our code, but still javascript engine will do its work. It will parse the code, it will create the global execution context and also sets up memory space for variables and functions. Though there is no code to execute, it will still do its work.

// If we put any variable or function in global space..., But first lets see what Global space is.
// Global space is nothing but any code you write inside js which is not inside of function.

// Let's make a variable x and assign it to 7.
// And lets created a function a and assign it to function definition.
// var x = 7;
// function a() {}

// These both "x" and "a" are in global space. So, they are attached to the global object. So, we can access them using window.x and window.a.
// Now let add anything inside the function a.
// function a() {
// let b = 8;
// }
// Now, this variable b is not in global space. It is inside the function a. So, we cannot access it using window.b. It is only accessible inside the function a.

// The variables and functions which are in global space are attached to the global object. So, we can access them using window.x and window.a.

// If we log, this.x, we'll get 7. Because, this is equal to window at the global level. So, this.x is equal to window.x. So, we'll get 7.