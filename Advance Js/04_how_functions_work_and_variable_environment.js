var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// What do you think will be the output?

// let us deep dive into this and understand how functions work and how they are executed in javascript.
// So first of all, a global executional context is created which has two components: Memory component and Code component. Memory component is also known as variable environment.

// When the global execution context is created, it will be pushed into bottom the call stack.

// Now, even before executing a single line of code, javascript engine will allocate memory for the variables and functions. So, in our case, it will allocate memory for x, a and b. The variable x will be set to undefined and the functions a and b will be set to their respective function definitions.

// Now, the code will start executing, in line number 1, we are assigning 1 to x, so in code component this line gets executed and the x which was previously undefined changes to 1.

// Now the code gets to line number 2, where we are calling function a, so the javascript engine will create a new execution context for function a and push it to the top of the call stack. This execution context will also have two components: Memory component and Code component. Memory space is also known as variable environment.

// In the execution environment of function a, the javascript engine will allocate memory for the variables and functions. So, in our case, it will allocate memory for x. The variable x will be set to undefined.

// Now, the code will start executing, in line number 7, we are assigning 10 to x, so in code component this line gets executed and the x which was previously undefined changes to 10.

// now, in line number 8, we are logging the value of x to the console, so in code component this line gets executed and the value of x which is 10 gets logged to the console.

// now the code again gets to line number 2, where we are returning from function a, so the javascript engine will pop the execution context of function a from the top of the call stack.

// Now, the code gets to line number 3, where we are calling function b, so the javascript engine will create a new execution context for function b and push it to the top of the call stack. This execution context will also have two components: Memory component and Code component. Memory space is also known as variable environment.

// In the execution environment of function b, the javascript engine will allocate memory for the variables and functions. So, in our case, it will allocate memory for x. The variable x will be set to undefined.

// Now, the code will start executing, in line number 12, we are assigning 100 to x, so in code component this line gets executed and the x which was previously undefined changes to 100.

// now, in line number 13, we are logging the value of x to the console, so in code component this line gets executed and the value of x which is 100 gets logged to the console.

// now the code again gets to line number 3, where we are returning from function b, so the javascript engine will pop the execution context of function b from the top of the call stack.

// And now, the code is fully executed, so the global execution context is popped from the top of the call stack.

// This is how the code gets executed and the output is as follows:
// 10
// 100
// 1

// Now let is see, how this all works inside browser,
// We'll open the source tab of the browser and set a breakpoint on line number 1, and then we'll reload the page.
// We'll check the call stack, and we'll see that the global execution context is pushed to the bottom of the call stack.
// We'll also check the scope variables, and we'll see that the global execution context has two variables: x. The variable x is set to undefined and the function a and b are set to its function definition.
// Now, we'll press the play button and the code will start executing, in line number 1, we are assigning 1 to x, so in code component this line gets executed and the x which was previously undefined changes to 1.
// Now, the code gets to line number 2, where we are calling function a, so the javascript engine will create a new execution context for function a and push it to the top of the call stack.
// We'll check the call stack, The execution context of function a is pushed to the top of the call stack.
// We'll also check the scope variables, and we'll see that the execution context of function a has one variable: x. The variable x is set to undefined.
// Now, the code will start executing, in line number 7, we are assigning 10 to x, so in code component this line gets executed and the x which was previously undefined changes to 10.
// now, in line number 8, we are logging the value of x to the console, so in code component this line gets executed and the value of x which is 10 gets logged to the console.
// now the code again gets to line number 2, where we are returning from function a, so the javascript engine will pop the execution context of function a from the top of the call stack.
// We'll check the call stack, and we'll see that the global execution context is pushed to the bottom of the call stack.
// We'll also check the scope variables, and we'll see that the global execution context has two variables: x and b. The variable x is set to undefined and the function a and b are set to its function definition.
// Now, the code gets to line number 3, where we are calling function b, so the javascript engine will create a new execution context for function b and push it to the top of the call stack.
// We'll check the call stack, The execution context of function b is pushed to the top of the call stack.
// We'll also check the scope variables, and we'll see that the execution context of function b has one variable: x. The variable x is set to undefined.
// Now, the code will start executing, in line number 12, we are assigning 100 to x, so in code component this line gets executed and the x which was previously undefined changes to 100.
// now, in line number 13, we are logging the value of x to the console, so in code component this line gets executed and the value of x which is 100 gets logged to the console.
// now the code again gets to line number 3, where we are returning from function b, so the javascript engine will pop the execution context of function b from the top of the call stack.
// Now as the code is fully executed, global execution context is popped from the top of the call stack.
// We'll check the call stack, and we'll see that the call stack is empty.
// Now we'll see the out of the code in console.