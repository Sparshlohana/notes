let n = 2;

function square(num) {
    let ans = num * num;
    return ans;
}

let square2 = square(n);
let square4 = square(4);

// How this code is executed?
// 1. Global Execution Context is created.

// Execution Context is created in two phases:

// 1. Creation Phase(Memory Creation Phase):

// Memory allocation: JavaScript allocates memory for all variables and functions in the global context.
// In this code, memory is allocated for n, square, square2, and square4.
// When memory is allocated for a function, the function definition is assigned to it.
// When memory is allocated for a variable, it is initialized with undefined by default.

// 2. Execution Phase(Code Execution Phase):

// Code execution begins after the creation phase.

// Here's how each line of code is executed:

// let n = 2;: A variable n is declared and assigned the value 2.

// function square(num) { ... }: A function square is defined and stored in memory.It takes a parameter num and calculates its square.

// let square2 = square(n);: The square function is called with the argument n(which is 2).The function execution creates a new execution context for the square function call.In this new context:

// A local variable ans is declared and assigned the result of num * num, which is 4.
// The result, 4, is returned from the function.
// square2 is assigned the value 4.
// let square4 = square(4);: The square function is called with the argument 4. A new execution context is created for this call:

// A local variable ans is declared and assigned the result of num * num, which is 16.
// The result, 16, is returned from the function.
// square4 is assigned the value 16.
// After the code has been executed, the values of square2 and square4 will be as follows:

// square2 is 4(result of square(2)).
// square4 is 16(result of square(4)).
// This outlines how the provided code is executed in the global execution context.


// This is very difficult for javascript engine to manage but it does it very beautifully with the help of call stack.

// Javascript Engine has its own call stack which is used to manage the execution context.
// Call stack is like a stack. And every time in the bottom of the stack there is a global execution context. That means, when the code is executed, the global execution context is created and pushed into the call stack. When a function is invoked, a new execution context is created and pushed into the call stack. When the function returns, the execution context is popped off from the call stack. And at last the global execution context is popped off from the call stack.

// So we can say that, Call stack maintains the order of execution of execution context.

// Call stack has many names such as:
// 0. Call Stack
// 1. Execution Context Stack
// 2. Program Stack
// 3. Control Stack
// 4. Runtime Stack
// 5. Machine Stack