// Every thing in JavaScript happens inside an execution context.
// Execution context is like a big box/container in which all JS code is executed.

// Execution context has two main components:
// 1. Memory Component
// 2. Code Component

// 1. Memory Component / Variable Environment
// It is a place where all the variables and functions are stored as key value pairs.
// Eg: (key: value) || a:10 ||func: {...}
// This memory component is also known as VARIABLE ENVIRONMENT.
// Variable Environment is a component where all the variables and functions are stored as key value pairs.

// 2. Code Component / Thread of Execution
// It is a place where all the code is executed line by line, i.e, one line at a time.


// JavaScript is a synchronous, single threaded language.
// Single threaded means, only one command is executed at a time.
// Synchronous means, one line of code is executed at a time in a specific order which means it can only move to the next line of code only after the current line of code is executed.