// Javascript is everywhere.
// Javascript can be used to control the browser, the server, and even a hardware.
// It can even run inside a watch, lightbulb, or a robot.

// How is this all possible?
// It is possible because of js runtime environment.
// Js runtime environment is a big container which has all the tools to run js code.
// To run any piece of js code, you definitely need a js engine.
// So js runtime environment has a js engine.
// It also has a set of apis to connect to the outer environment.
// We can also have an event loop, a callback queue microtask queue.
// These all things together make a js runtime environment.

// Js runtime environment is not possible without a js engine.
// Js engine is the heart of js runtime environment.

// Browser can only execute js code because it has js runtime environment.
// Every browser has its own js runtime environment.

// You must have heard of node js.
// Node js is a js runtime environment.
// It is a open source js runtime environment.
// It has everything that is needed to run js code.
// Node js can run js code outside the browser.

// If you want to run your js in an AC, you can use js runtime environment.
// It will surely have a js engine.
// It can have different apis to connect to the outer environment like getOurTemperature, setOurTemperature, etc. which can be used in our js code through global objects.
// That is why js is capable of running in a lot of devices and these apis allows us to control the outer environment.

// These environments can be different in a browser and can be different in a node js. But it can also be same in some cases.
// For example, in a browser, the runtime environment has somethings called local storage that gives us super powers to store data in the browser. And in case of node js, it could be different.
// There are few apis which has same name and are present inside both node and browser. For example, setTimeout, setInterval, console, etc.

// They may look similar, like both have the same name but internally they are very different.

// Let us dive deep into js engine.
// Before we dive deep into js engine, lets see the list of js engines that are present in the market.
// All browsers have their own js engine.
// Chrome has v8 js engine.
// Firefox has spider monkey.
// Safari has javascript core.
// Edge has chakra.
// Opera has carakan.
// Node js has v8 js engine.
// There are many more js engines that are present in the market.

// And you know what, you can create your own js engine.
// There are some ECMAScript standards that you need to follow to create a js engine.

// What was the first js engine developed in the world?
// The first js engine was created by the creator of js, himself.
// His name is Brendan Eich.
// The engine he created has evolved a lot and is now known as spider monkey.

// Javascript engine architecture
// Before I move forward, I want to tell you that js engine is not a machine.
// It is not a hardware.
// Js engine is just a code written in low level languages.
// For example, v8 js engine is written in c++.
// Thats just a piece of code written by some developers like you and me.
// Js engine takes in high level code, i.e. js code and converts it into low level code, i.e. machine code.

// Js engine takes in js code as an input.
// It performs three major steps.
// 1. Parsing
// 2. Compilation
// 3. Execution

// Parsing
// During parsing, the code we write is broken down into tokens.
// Tokens are the smallest possible unit of code.
// For example, if we write a = 10, then a, =, 10 are all tokens.
// There is something known as syntax parser.
// The job of this syntax parser is to take this code and convert it into AST
// AST stands for abstract syntax tree.
// It sounds complicated but it is not.
// We can see how this AST looks like by using a tool called https://astexplorer.net.
// You really don't need to know how to create AST.
// You just need to know that js engine creates AST from the code we write.

// Now, this AST is passed to the compiler.
// The compilation and execution goes hand in hand.

// Compilation
// It is a very important step.
// Js has a thing known as JIT compilation.
// JIT stands for just in time.

// Before we understand JIT compilation, we need to understand what is a compiler and what is an interpreter. And is js a compiled language or an interpreted language?
// First let us understand what is a interpreter.
// In many interpreted languages, the code is executed by an interpreter.
// Interpreter takes in the code and executes it line by line.

// While in compiled languages, the code is first compiled and a new code if form which is optimized version of the code we write.
// Then this optimized code is executed.
// This optimized code is known as machine code.

// Both has pros and cons.
// The interpreter is fast as it does not need to compile the code.
// The compiler has an efficient code as it compiles the code first and then executes it.

// Now can you tell me, is js a compiled language or an interpreted language?
// Js can be both.
// It depends on the js engine.
// Some js engines are compiled and some are interpreted.
// When js was created by Brendan Eich, it was an interpreted language.
// The engine he created was an interpreter because it was meant for the browser, and browser needs to execute the code as fast as possible. They cannot wait for the code to be compiled first and then executed.
// But now, in today's world, It can be both, purely interpreted or purely timed compiled.
// Here comes the JIT compilation, js engine nowadays uses both interpreter and compiler.
// It uses interpreter to execute the code as fast as possible and it uses compiler to optimize the code.
// This is known as JIT compilation.

// After parsing, the AST goes to the interpreter.
// The interpreter takes the AST and converts it into bytecode and that code goes to the execution context step and, while the code is being executed, the compiler compiles the code and optimizes it and then it is executed.
// It is not just one phase process, i can happen multiple times.
// All these js engines have their own algorithms to optimize the code.
// So the job of compiler is to optimize the code and make it faster that is why it is known as JIT compilation.
// In some js engines, they have a thing known as AOT compilation.
// AOT stands for ahead of time.
// In AOT compilation, the code is compiled before it is executed.
// It optimizes the code before it is executed.
// And then converted it into bytecode and then it is executed.

// Execution
// It is not possible if it does not have these 2 major components of js engine.
// 1. Memory heap
// 2. Call stack
// Memory heap is a place where the memory allocation happens.
// Call stack is a place where the code is executed.

// Memory heap is a space where all the functions, variables, objects, etc. are assigned memory.

// We also have a garbage collector.
// Its job is to clean up the memory heap.
// It removes the unused memory from the memory heap.
// It uses an algorithm known as mark and sweep algorithm.
// It marks the memory that is not being used and then it sweeps it away.
// This is how it works.

// The compiler uses Inlining, which is a technique to optimize the code.
// Inlining is a technique where the compiler replaces the function call with the actual function code.

// Copy elision is another technique used by the compiler.
// It is a technique where the compiler removes the unnecessary copies of the objects.
// For example, if we have a function that returns an object, then the compiler will not create a new object, instead it will return the same object.

// Escape analysis is another technique used by the compiler.
// It is a technique where the compiler checks if the object is being used outside the function or not.
// If it is not being used outside the function, then it will not create a new object.

// Inline caching is another technique used by the compiler.
// It is a technique where the compiler caches the function calls.
// For example, if we have a function that takes in a parameter, then the compiler will cache the function call with the parameter.
// If the function is called again with the same parameter, then the compiler will not execute the function again, instead it will return the same value.

// There are a lot of other techniques used by the compiler to optimize the code.
// These are just a few of them.

// Currently, the v8 js engine is the fastest js engine in the world.
// It is used by chrome and node js.

// Some interesting facts about v8 js engine.
// It was created by google.
// V8 is written in c++.
// It is open source.
// It has an interpreter known as Ignition.
// It has a compiler known as turbofan.
// These both are used for JIT compilation.
// It has a garbage collector known as Orinoco.
// Oilpan is another garbage collector, which is used for memory management.

// V8 architecture
// Js code is passed to the parser.
// It creates AST.
// AST is passed to the interpreter in the ignition.
// Ignition converts AST into bytecode.
// Compiler in the turbofan optimizes the code.
// It uses a technique known as inline caching.